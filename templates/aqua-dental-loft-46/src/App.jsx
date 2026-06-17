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



        // Init Icons
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        // Navbar Interaction
        const nav = document.getElementById('navbar');
        const navBg = document.getElementById('nav-bg');
        const navContainer = document.getElementById('nav-container');
        const logoText = document.getElementById('logo-text');
        const mobileToggle = document.getElementById('mobile-toggle');
        const navLinks = document.querySelectorAll('.nav-link');

        function updateNav() {
            if (window.scrollY > 50) {
                // Scrolled State
                navBg.classList.add('bg-white/80', 'backdrop-blur-md', 'border-b', 'border-neutral-100');
                navBg.classList.remove('bg-transparent');
                
                navContainer.classList.remove('bg-white/5', 'border-white/10');
                navContainer.classList.add('bg-neutral-100/50', 'border-neutral-200');
                
                // Toggle Logo Text to Black
                logoText.classList.remove('text-white');
                logoText.classList.add('text-neutral-950');

                navLinks.forEach(el => {
                    el.classList.remove('text-white/90', 'hover:text-white');
                    el.classList.add('text-neutral-600', 'hover:text-neutral-900');
                });
                
                mobileToggle.classList.remove('text-white');
                mobileToggle.classList.add('text-neutral-900');

            } else {
                // Top State
                navBg.classList.remove('bg-white/80', 'backdrop-blur-md', 'border-b', 'border-neutral-100');
                navBg.classList.add('bg-transparent');
                
                navContainer.classList.add('bg-white/5', 'border-white/10');
                navContainer.classList.remove('bg-neutral-100/50', 'border-neutral-200');

                // Toggle Logo Text to White
                logoText.classList.add('text-white');
                logoText.classList.remove('text-neutral-950');

                navLinks.forEach(el => {
                    el.classList.add('text-white/90', 'hover:text-white');
                    el.classList.remove('text-neutral-600', 'hover:text-neutral-900');
                });

                mobileToggle.classList.add('text-white');
                mobileToggle.classList.remove('text-neutral-900');
            }
        }
        window.addEventListener('scroll', updateNav);
        updateNav(); // Init

        // Mobile Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('opacity-0')) {
                menu.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                menu.classList.add('opacity-0', 'pointer-events-none');
            }
        }
        document.getElementById('mobile-toggle').addEventListener('click', toggleMobileMenu);

        // Comparison Slider
        const slider = document.getElementById('comparisonSlider');
        const overlay = document.getElementById('comparisonOverlay');
        const handle = document.getElementById('comparisonHandle');
        const beforeImg = document.getElementById('comparisonImageBefore');
        let isDown = false;

        function updateSlider(x) {
            if(!slider) return;
            const rect = slider.getBoundingClientRect();
            let pos = ((x - rect.left) / rect.width) * 100;
            if (pos < 0) pos = 0;
            if (pos > 100) pos = 100;
            overlay.style.width = `${pos}%`;
            handle.style.left = `${pos}%`;
        }

        if(slider) {
            slider.addEventListener('mousedown', () => isDown = true);
            window.addEventListener('mouseup', () => isDown = false);
            slider.addEventListener('mousemove', (e) => { if(isDown) updateSlider(e.clientX) });
            
            slider.addEventListener('touchstart', () => isDown = true);
            window.addEventListener('touchend', () => isDown = false);
            slider.addEventListener('touchmove', (e) => { if(isDown) updateSlider(e.touches[0].clientX) });

            // Sync image width
            const syncWidth = () => { if(beforeImg) beforeImg.style.width = `${slider.offsetWidth}px`; }
            window.addEventListener('resize', syncWidth);
            syncWidth();
        }

        // Intersection Observer for Scroll Reveal
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

    
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 group/nav" id="navbar">
<div className="absolute inset-0 transition-all duration-300" id="nav-bg"></div>
<div className="relative flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">

<a className="flex items-center gap-3 z-50 relative" href="#">

<div className="w-8 h-8 transition-all duration-300" id="logo-icon-container">
<img alt="Aqua Dental Loft Logo" className="w-full h-full object-contain" id="logo-img" src="https://i.ibb.co/7NRgqhWK/aqua-loft-logo.png"/>
</div>

<span className="font-serif text-lg tracking-tight font-medium text-white transition-colors duration-300" id="logo-text">Aqua Dental Loft</span>
</a>

<div className="hidden lg:flex items-center gap-1 backdrop-blur-md rounded-full px-2 py-1.5 border transition-colors duration-300" id="nav-container">

<a className="nav-link px-4 py-1.5 text-xs font-medium rounded-full transition-colors" href="#">Home</a>

<div className="group relative">
<button className="nav-link flex items-center gap-1 px-4 py-1.5 text-xs font-medium rounded-full transition-colors">
                        About <svg className="lucide lucide-chevron-down w-3 h-3 opacity-70" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="absolute top-full left-0 mt-4 w-48 bg-white border border-neutral-100 rounded-xl shadow-xl shadow-neutral-200/20 opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out p-1.5" style={{}}>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#doctors" style={{}}>Meet Our Doctors</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#team" style={{}}>Meet the Team</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#about-us" style={{}}>About Us</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#tour" style={{}}>Office Tour</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#testimonials" style={{}}>Testimonials</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#why-us" style={{}}>Why Choose Us</a>
</div>
</div>

<div className="group relative">
<button className="nav-link flex items-center gap-1 px-4 py-1.5 text-xs font-medium rounded-full transition-colors">
                        Services <svg className="lucide lucide-chevron-down w-3 h-3 opacity-70" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[800px] bg-white border border-neutral-100 rounded-xl shadow-2xl shadow-neutral-200/20 opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out overflow-hidden p-6" style={{}}>
<div className="grid grid-cols-3 gap-8">

<div>
<h6 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4" style={{}}>Immediate Care</h6>
<div className="space-y-1">
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Emergency Dental Care</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Tooth Pain / Root Canals</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Tooth Replacement</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Cosmetic Dentistry</a>
</div>
</div>

<div className="border-l border-neutral-100 pl-8" style={{}}>
<h6 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4" style={{}}>Preventive &amp; Family</h6>
<div className="space-y-1">
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>General &amp; Family Dentistry</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Children’s Dentistry</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Cleanings &amp; Checkups</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Gum Disease Treatment</a>
</div>
</div>

<div className="border-l border-neutral-100 pl-8" style={{}}>
<h6 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4" style={{}}>Specialty &amp; Comfort</h6>
<div className="space-y-1">
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Dental Implants</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Sedation Dentistry</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>TMJ &amp; Headache Treatment</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Teeth Whitening</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Veneers &amp; Bonding</a>
<a className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-colors mt-2 text-cyan-600 hover:bg-cyan-50" href="#" style={{}}>
                                        View All Services <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="group relative">
<button className="nav-link flex items-center gap-1 px-4 py-1.5 text-xs font-medium rounded-full transition-colors">
                        New Patients <svg className="lucide lucide-chevron-down w-3 h-3 opacity-70" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="absolute top-full left-0 mt-4 w-56 bg-white border border-neutral-100 rounded-xl shadow-xl shadow-neutral-200/20 opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out p-1.5" style={{}}>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Your First Visit</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Special Offers</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Online Forms</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Insurance &amp; Financing</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>What to Expect</a>
<div className="h-px bg-neutral-100 my-1" style={{}}></div>
<a className="block px-3 py-2 text-xs font-semibold rounded-lg transition-colors text-cyan-600 hover:bg-cyan-50" href="#booking" style={{}}>Book Your Appointment</a>
</div>
</div>

<div className="group relative">
<button className="nav-link flex items-center gap-1 px-4 py-1.5 text-xs font-medium rounded-full transition-colors">
                        Contact <svg className="lucide lucide-chevron-down w-3 h-3 opacity-70" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="absolute top-full right-0 mt-4 w-52 bg-white border border-neutral-100 rounded-xl shadow-xl shadow-neutral-200/20 opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out p-1.5" style={{}}>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Location &amp; Hours</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Contact Us</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#" style={{}}>Request Appointment</a>
<a className="block px-3 py-2 text-xs font-semibold text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors mt-1 border-t border-neutral-100" href="tel:+15612642264" style={{}}>
<span className="text-[10px] text-neutral-400 block font-normal uppercase tracking-wide" style={{}}>Call Us</span>
                            +1 (561) 264-2264
                        </a>
</div>
</div>
</div>

<div className="hidden lg:block z-50">
<a className="bg-white text-neutral-950 px-5 py-2 rounded-full text-xs font-semibold tracking-wide hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10" href="#booking" style={{}}>
                    Book Now
                </a>
</div>

<button aria-label="Menu" className="lg:hidden p-2 z-50 relative" id="mobile-toggle">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="fixed inset-0 bg-neutral-950 z-40 flex flex-col pt-24 px-6 opacity-0 pointer-events-none transition-all duration-300 lg:hidden overflow-y-auto" id="mobile-menu" style={{}}>
<div className="flex flex-col gap-6 pb-20">
<a className="text-xl font-serif text-white border-b border-white/10 pb-4" href="#" onclick="toggleMobileMenu()">Home</a>

<div className="flex flex-col gap-3">
<h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400" style={{}}>About</h3>
<a className="text-lg text-neutral-300 font-light" href="#doctors" onclick="toggleMobileMenu()" style={{}}>Meet Our Doctors</a>
<a className="text-lg text-neutral-300 font-light" href="#team" onclick="toggleMobileMenu()" style={{}}>Meet the Team</a>
<a className="text-lg text-neutral-300 font-light" href="#about-us" onclick="toggleMobileMenu()" style={{}}>About Us</a>
</div>

<div className="flex flex-col gap-3 mt-4">
<h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400" style={{}}>Services</h3>
<a className="text-lg text-neutral-300 font-light" href="#services" onclick="toggleMobileMenu()" style={{}}>Emergency Dentistry</a>
<a className="text-lg text-neutral-300 font-light" href="#services" onclick="toggleMobileMenu()" style={{}}>Cosmetic Dentistry</a>
<a className="text-lg text-neutral-300 font-light" href="#services" onclick="toggleMobileMenu()" style={{}}>General Dentistry</a>
<a className="text-sm font-semibold text-white mt-2" href="#" onclick="toggleMobileMenu()">View All Services →</a>
</div>

<div className="flex flex-col gap-3 mt-4">
<h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400" style={{}}>New Patients</h3>
<a className="text-lg text-neutral-300 font-light" href="#" onclick="toggleMobileMenu()" style={{}}>First Visit</a>
<a className="text-lg text-neutral-300 font-light" href="#" onclick="toggleMobileMenu()" style={{}}>Insurance &amp; Financing</a>
</div>

<div className="flex flex-col gap-3 mt-4">
<h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400" style={{}}>Contact</h3>
<a className="text-lg text-neutral-300 font-light" href="https://www.google.com/maps/place/Aqua+Dental+Loft/@26.3490243,-80.1576219,17z/data=!3m1!4b1!4m6!3m5!1s0x88d91c3b0fbe75e7:0x51f8ed01c7308d69!8m2!3d26.3490243!4d-80.1576219!16s%2Fg%2F1tfmp5hj?entry=ttu&amp;g_ep=EgoyMDI1MTEzMC4wIKXMDSoASAFQAw%3D%3D" onclick="toggleMobileMenu()" style={{}} target="_blank">
                        7050 W Palmetto Park Rd #52,  Boca Raton, FL 33433
                    </a>
<a className="text-xl text-white font-serif mt-2" href="tel:+15612642264" onclick="toggleMobileMenu()">+1 (561) 264-2264</a>
</div>
<a className="mt-8 px-8 py-4 bg-white text-neutral-950 rounded-full text-center text-sm font-semibold" href="#booking" onclick="toggleMobileMenu()" style={{}}>Book Appointment</a>
</div>
<button className="absolute top-6 right-6 text-white p-2" onclick="toggleMobileMenu()">
<svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</nav>

<header className="relative w-full h-[100dvh] min-h-[700px] overflow-hidden bg-neutral-950" style={{}}>

<div className="absolute inset-0 w-full h-full animate-zoom-slow">
<img alt="Dental Team" className="w-full h-full object-cover opacity-80" src="https://i.ibb.co/9mY4fcvX/Dentists-on-white-sofa.webp"/>

<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-neutral-950/20" style={{}}></div>
<div className="bg-black/10 absolute top-0 right-0 bottom-0 left-0"></div>
</div>


<div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-4 md:pb-8">

<div className="max-w-3xl">

<h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[0.95] tracking-tight mb-4 animate-fade-in-up delay-100 drop-shadow-lg">
                    We believe everyone 
                    deserves a <span className="italic font-light text-white/80">smile they love.</span>
</h1>

<div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-200 mb-6">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-950 rounded-full text-xs font-semibold hover:bg-neutral-200 transition-colors text-center shadow-lg shadow-white/5" href="#booking" style={{}}>
                        Book Consultation
                    </a>
<a className="w-full sm:w-auto px-8 py-4 glass-panel text-white rounded-full text-xs font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group border border-white/20" href="#services">
                        View Treatments
                        <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-4 animate-fade-in-up delay-300 border-white/10 w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" style={{}}></span>
<span className="text-[10px] uppercase tracking-widest text-neutral-200 font-semibold" style={{}}>Accepting New Patients</span>
</div>

<div className="max-w-lg animate-fade-in-up delay-300 text-neutral-300" style={{}}>
<div className="flex flex-col gap-2 text-sm font-medium">
<a className="flex items-start gap-3 hover:text-white transition-colors group/addr" href="https://www.google.com/maps/place/Aqua+Dental+Loft/@26.3490243,-80.1576219,17z/data=!3m1!4b1!4m6!3m5!1s0x88d91c3b0fbe75e7:0x51f8ed01c7308d69!8m2!3d26.3490243!4d-80.1576219!16s%2Fg%2F1tfmp5hj?entry=ttu&amp;g_ep=EgoyMDI1MTEzMC4wIKXMDSoASAFQAw%3D%3D" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-map-pin w-5 h-5 mt-0.5 text-cyan-400 group-hover/addr:text-cyan-300" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="leading-snug">7050 W Palmetto Park Rd #52, Boca Raton, FL 33433</span>
</a>
<a className="flex items-center gap-3 hover:text-white transition-colors group/phone" href="tel:+15612642264">
<svg className="lucide lucide-phone w-5 h-5 text-cyan-400 group-hover/phone:text-cyan-300" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>+1 (561) 264-2264</span>
</a>
</div>
</div>
</div>

<div className="absolute bottom-12 right-6 animate-fade-in-up delay-300 hidden md:flex items-center gap-4 text-white/60">
<span className="text-[10px] uppercase tracking-widest">Scroll to explore</span>
<div className="w-12 h-px bg-white/20"></div>
</div>
</div>
</header>

<section className="py-32 px-6 bg-white border-b border-neutral-100" id="services" style={{}}>
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
<div>
<span className="text-neutral-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block" style={{}}>Our Expertise</span>
<h2 className="text-3xl md:text-4xl tracking-tight text-neutral-900" style={{}}>Services</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="group cursor-pointer reveal-on-scroll">
<div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-5 bg-neutral-200" style={{}}>
<img alt="General Dentistry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold uppercase tracking-wide rounded-sm">Accepting New Patients</div>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 mb-1 transition-colors group-hover:text-cyan-600" style={{}}>General Dentistry</h3>
<p className="text-xs text-neutral-500 leading-relaxed mb-3" style={{}}>Comprehensive checkups, cleanings, and preventative care for the whole family.</p>
<span className="text-xs font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4" style={{}}>Comprehensive Care</span>
</div>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-100">
<div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-5 bg-neutral-200" style={{}}>
<img alt="Cosmetic Dentistry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold uppercase tracking-wide rounded-sm">Popular</div>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 mb-1 transition-colors group-hover:text-cyan-600" style={{}}>Cosmetic Dentistry</h3>
<p className="text-xs text-neutral-500 leading-relaxed mb-3" style={{}}>Veneers, whitening, and full smile makeovers designed by experts.</p>
<span className="text-xs font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4" style={{}}>Design Your Smile</span>
</div>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-200">
<div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-5 bg-neutral-200" style={{}}>
<img alt="Emergency Dentistry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold uppercase tracking-wide rounded-sm">Immediate Care</div>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 mb-1 transition-colors group-hover:text-cyan-600" style={{}}>Emergency Dentistry</h3>
<p className="text-xs text-neutral-500 leading-relaxed mb-3" style={{}}>Same-day appointments for toothaches, broken teeth, and urgent relief.</p>
<span className="text-xs font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4" style={{}}>Book Now</span>
</div>
</div>
</div>

<div className="mt-12 text-center reveal-on-scroll">
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-200 text-xs font-semibold text-neutral-900 hover:bg-neutral-50 transition-colors group" href="#">
                    View All Services
                    <svg className="lucide lucide-arrow-right w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-neutral-100" id="about" style={{}}>
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 reveal-on-scroll">
<div className="relative aspect-[4/5] rounded-lg overflow-hidden">
<img alt="Aesthetic Portrait" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" src="https://i.ibb.co/qM2Ldm3m/AD-Blue-camera.jpg"/>
<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-sm border border-white">
<p className="font-serif italic text-xl text-neutral-900" style={{}}>"Beauty is about enhancing what you have. Let yourself shine through."</p>
</div>
</div>
</div>
<div className="order-1 md:order-2 reveal-on-scroll delay-100">
<span className="text-cyan-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block" style={{}}>About Aqua Dental Loft</span>
<h2 className="text-4xl md:text-5xl tracking-tight text-neutral-900 mb-6" style={{}}>A Sanctuary for <span className="italic text-neutral-500" style={{}}>Modern Dentistry</span></h2>
<p className="text-neutral-600 font-light leading-relaxed mb-6" style={{}}>
                        We welcome you to our modern Boca Raton studio, a sanctuary featuring a relaxing winter garden and exquisite orchid collection. Entrusted with the care of families from one to 100, we provide award-winning comprehensive and emergency services in a fresh, stress-free environment.
                    </p>
<div className="grid grid-cols-2 gap-8 mt-8 border-t border-neutral-100 pt-8" style={{}}>
<div>
<span className="block text-3xl font-serif text-neutral-900 mb-1" style={{}}>13+</span>
<span className="text-xs text-neutral-500 uppercase tracking-wide" style={{}}>Years Experience</span>
</div>
<div>
<span className="block text-3xl font-serif text-neutral-900 mb-1" style={{}}>1K+</span>
<span className="text-xs text-neutral-500 uppercase tracking-wide" style={{}}>Happy Patients</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-50 border-b border-neutral-100" id="doctors" style={{}}>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-cyan-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block" style={{}}>Our Team</span>
<h2 className="text-3xl md:text-4xl tracking-tight text-neutral-900 font-serif" style={{}}>Meet the Doctors</h2>
<div className="w-12 h-px bg-cyan-200 mx-auto mt-6" style={{}}></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">

<div className="flex flex-col items-center md:items-start gap-6 reveal-on-scroll group">
<div className="relative w-48 h-48 rounded-full p-1 border border-neutral-200 bg-white group-hover:border-cyan-200 transition-colors duration-300" style={{}}>
<div className="w-full h-full rounded-full overflow-hidden">
<img alt="Dr. Casey Pedro" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://i.ibb.co/Y4LpBkGf/dr-casey-pedro-icon.webp"/>
</div>
</div>
<div className="text-center md:text-left">
<h3 className="text-2xl font-serif text-neutral-900 mb-2" style={{}}>Dr. Casey Pedro</h3>
<p className="text-[10px] font-bold uppercase tracking-widest text-cyan-600 mb-4" style={{}}>DMD, Implant Dentistry</p>
<p className="text-sm text-neutral-600 font-light leading-relaxed" style={{}}>
                            Dr. Casey completed his DMD (Doctor of Medicine in Dentistry) at Boston University School of Dental Medicine. He truly enjoys helping patients get their smiles back through Implant Dentistry. His experience in oral plastics and minimally invasive surgical techniques allow for better outcomes and happier and healthier patients. Dr. Casey is meticulous, energetic and unbelievably social - the type of surgeon we cherish at Aqua Dental Loft.
                        </p>
</div>
</div>

<div className="flex flex-col items-center md:items-start gap-6 reveal-on-scroll delay-100 group">
<div className="relative w-48 h-48 rounded-full p-1 border border-neutral-200 bg-white group-hover:border-cyan-200 transition-colors duration-300" style={{}}>
<div className="w-full h-full rounded-full overflow-hidden">
<img alt="Dr. Jamily Pedro" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://i.ibb.co/VWF4FqZ2/dr-jamily-pedro-icon.webp"/>
</div>
</div>
<div className="text-center md:text-left">
<h3 className="text-2xl font-serif text-neutral-900 mb-2" style={{}}>Dr. Jamily Pedro</h3>
<p className="text-[10px] font-bold uppercase tracking-widest text-cyan-600 mb-4" style={{}}>DMD, Cosmetic Dentistry</p>
<p className="text-sm text-neutral-600 font-light leading-relaxed" style={{}}>
                            Dr. Jamily has two doctorate degrees from Boston University School of Dental Medicine and the University of Minas Gerais (Brazil). She is a gentle, caring dentist who uses the most advanced techniques and materials available. She practices comfortable, health-centered dentistry with a strong emphasis on getting to know each of her patients. In addition to her technical proficiency, Dr. Jamily is a careful listener.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-neutral-100" id="team" style={{}}>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 reveal-on-scroll">
<span className="text-cyan-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block" style={{}}>Behind the Smiles</span>
<h2 className="text-3xl md:text-4xl tracking-tight text-neutral-900 font-serif" style={{}}>Meet the Full Team</h2>
</div>
<div className="relative rounded-xl overflow-hidden shadow-2xl reveal-on-scroll delay-100 group">
<img alt="Aqua Dental Loft Team" className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" src="https://i.ibb.co/ync4gYGR/AD-Team.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-8 left-8 text-white max-w-2xl">
<p className="font-serif italic text-xl md:text-2xl mb-2">"United by a passion for care."</p>
<p className="text-sm text-neutral-200 font-light" style={{}}>Our hygienists, assistants, and coordinators work together to ensure your visit is seamless from the moment you walk in.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-neutral-950 text-white overflow-hidden" id="new-patients" style={{}}>
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
<div className="lg:col-span-5 reveal-on-scroll">
<span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block text-cyan-400" style={{}}>Real Results</span>
<h2 className="text-4xl md:text-5xl tracking-tight mb-6">The Smile <br/><span className="font-serif italic text-neutral-500" style={{}}>Makeover</span></h2>
<p className="text-neutral-400 font-light leading-relaxed mb-6 text-sm" style={{}}>
                        A smile makeover is any combination of cosmetic treatments and procedures to produce a picture-perfect smile. Dr. Casey evaluates your case with an artistic eye and presents your options for a complete smile makeover.
                    </p>
<p className="text-neutral-400 font-light leading-relaxed mb-8 text-sm" style={{}}>
                         Our office has state-of-the-art digital imaging equipment to make diagnostic casts and a 'trial smile' that you'll get to try on.
                    </p>
<div className="flex flex-col gap-4">
<div className="flex items-start gap-4 p-4 border border-white/10 rounded-lg bg-white/5">
<div className="p-2 rounded-md bg-cyan-500/10 text-cyan-400" style={{}}>
<svg className="lucide lucide-scan-face w-5 h-5" data-lucide="scan-face" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path></svg>
</div>
<div>
<h4 className="text-sm font-semibold mb-1">Preview Your Look</h4>
<p className="text-xs text-neutral-400" style={{}}>Before opting for treatment, you'll get to preview the final result and make an informed decision.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 border border-white/10 rounded-lg bg-white/5">
<div className="p-2 rounded-md bg-cyan-500/10 text-cyan-400" style={{}}>
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div>
<h4 className="text-sm font-semibold mb-1">Polished Finish</h4>
<p className="text-xs text-neutral-400" style={{}}>Your smile makeover may also include a teeth whitening treatment to polish off your brilliant, new look.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7 reveal-on-scroll delay-100">
<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10 shadow-2xl comparison-slider" id="comparisonSlider">

<img alt="After Result" className="absolute inset-0 w-full h-full object-cover" src="https://i.ibb.co/pr9SrnpV/Untitled-Live-Doc.png"/>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-2 py-1 text-[10px] font-bold tracking-wider rounded text-white">AFTER</div>

<div className="comparison-item" id="comparisonOverlay" style={{width: '50%'}}>
<img alt="Before Result" className="absolute top-0 left-0 h-full max-w-none w-full object-cover" id="comparisonImageBefore" src="https://i.ibb.co/rKp2mnPt/Before.jpg" style={{width: '713px'}}/>
<div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-2 py-1 text-[10px] font-bold tracking-wider rounded text-white">BEFORE</div>
</div>

<div className="comparison-handle" id="comparisonHandle" style={{left: '50%'}}>
<div className="comparison-circle">
<svg className="lucide lucide-chevrons-left-right w-4 h-4 text-neutral-900" data-lucide="chevrons-left-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 7-5 5 5 5"></path><path d="m15 7 5 5-5 5"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-neutral-200" id="booking" style={{}}>
<div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-100 flex flex-col md:flex-row" style={{}}>

<div className="md:w-1/3 bg-neutral-950 p-10 text-white flex flex-col justify-between" style={{}}>
<div>
<h3 className="text-2xl font-serif mb-4">Book Your Visit</h3>
<p className="text-xs text-neutral-400 mb-8 leading-relaxed" style={{}}>
                        Select a service and time that works for you. A deposit is required to secure your appointment.
                    </p>
<ul className="space-y-4 text-xs text-neutral-300" style={{}}>
<li className="flex items-center gap-3">
<div className="p-1 rounded-full bg-white/10"><svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                            Instant Confirmation
                        </li>
<li className="flex items-center gap-3">
<div className="p-1 rounded-full bg-white/10"><svg className="lucide lucide-shield-check w-3 h-3" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg></div>
                            Secure Payment
                        </li>
<li className="flex items-center gap-3">
<div className="p-1 rounded-full bg-white/10"><svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg></div>
                            24h Cancellation Policy
                        </li>
</ul>
</div>
<div className="mt-12">
<p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2" style={{}}>Contact Support</p>
<p className="text-sm font-medium">+1 (561) 264-2264</p>
</div>
</div>

<div className="md:w-2/3 p-10">
<div className="mb-8">
<label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-4" style={{}}>Select Service Category</label>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="category" type="radio"/>
<div className="px-4 py-2 rounded-full border border-neutral-200 text-xs font-medium text-neutral-600 peer-checked:bg-neutral-900 peer-checked:text-white peer-checked:border-neutral-900 transition-all" style={{}}>
                                Dental
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="category" type="radio"/>
<div className="px-4 py-2 rounded-full border border-neutral-200 text-xs font-medium text-neutral-600 peer-checked:bg-neutral-900 peer-checked:text-white peer-checked:border-neutral-900 transition-all" style={{}}>
                                Injectables
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="category" type="radio"/>
<div className="px-4 py-2 rounded-full border border-neutral-200 text-xs font-medium text-neutral-600 peer-checked:bg-neutral-900 peer-checked:text-white peer-checked:border-neutral-900 transition-all" style={{}}>
                                Aesthetics
                            </div>
</label>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

<label className="cursor-pointer group">
<input checked="" className="peer sr-only" name="service" type="radio"/>
<div className="p-4 rounded-xl border border-neutral-200 bg-white peer-checked:ring-1 transition-all hover:border-cyan-200 peer-checked:border-cyan-500 peer-checked:ring-cyan-500" style={{}}>
<div className="flex justify-between mb-1">
<span className="text-sm font-semibold text-neutral-900" style={{}}>Whitening</span>
<span className="text-sm font-medium text-neutral-900" style={{}}>$385</span>
</div>
<span className="text-[10px] text-neutral-400" style={{}}>60 mins</span>
</div>
</label>

<label className="cursor-pointer group">
<input className="peer sr-only" name="service" type="radio"/>
<div className="p-4 rounded-xl border border-neutral-200 bg-white peer-checked:ring-1 transition-all hover:border-cyan-200 peer-checked:border-cyan-500 peer-checked:ring-cyan-500" style={{}}>
<div className="flex justify-between mb-1">
<span className="text-sm font-semibold text-neutral-900" style={{}}>Consultation</span>
<span className="text-sm font-medium text-neutral-900" style={{}}>Free</span>
</div>
<span className="text-[10px] text-neutral-400" style={{}}>45 mins</span>
</div>
</label>
</div>
<div className="mb-8">
<label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-4" style={{}}>Availability</label>
<div className="grid grid-cols-4 gap-3">
<button className="py-2.5 text-xs font-medium border border-neutral-200 rounded-lg hover:border-neutral-400 focus:bg-neutral-900 focus:text-white focus:border-neutral-900 transition-colors" style={{}}>9:00 AM</button>
<button className="py-2.5 text-xs font-medium border border-neutral-200 rounded-lg bg-neutral-50 text-neutral-300 cursor-not-allowed" style={{}}>10:30 AM</button>
<button className="py-2.5 text-xs font-medium border border-neutral-200 rounded-lg hover:border-neutral-400 focus:bg-neutral-900 focus:text-white focus:border-neutral-900 transition-colors" style={{}}>1:00 PM</button>
<button className="py-2.5 text-xs font-medium border border-neutral-200 rounded-lg hover:border-neutral-400 focus:bg-neutral-900 focus:text-white focus:border-neutral-900 transition-colors" style={{}}>3:15 PM</button>
</div>
</div>
<button className="w-full py-3.5 bg-neutral-900 text-white rounded-lg text-sm font-semibold hover:bg-neutral-800 transition-transform active:scale-[0.99]" style={{}}>
                    Continue to Details
                </button>
</div>
</div>
</section>

<footer className="bg-neutral-950 text-white pt-20 pb-10 border-t border-neutral-900" id="contact" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="font-serif text-2xl text-white mb-6 block" href="#">Aqua Dental Loft</a>
<div className="flex gap-4 text-neutral-400" style={{}}>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold mb-6 text-neutral-200" style={{}}>Navigation</h4>
<ul className="space-y-3 text-xs text-neutral-400 font-light" style={{}}>
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#about">About</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-6 text-neutral-200" style={{}}>Contact</h4>
<ul className="space-y-3 text-xs text-neutral-400 font-light" style={{}}>
<li className="flex gap-3">
<svg className="lucide lucide-map-pin w-4 h-4 shrink-0 mt-0.5 text-cyan-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<a className="hover:text-white transition-colors" href="https://www.google.com/maps/place/Aqua+Dental+Loft/@26.3490243,-80.1576219,17z/data=!3m1!4b1!4m6!3m5!1s0x88d91c3b0fbe75e7:0x51f8ed01c7308d69!8m2!3d26.3490243!4d-80.1576219!16s%2Fg%2F1tfmp5hj?entry=ttu&amp;g_ep=EgoyMDI1MTEzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                                7050 W Palmetto Park Rd #52, Boca Raton, FL 33433
                            </a>
</li>
<li className="flex gap-3">
<svg className="lucide lucide-phone w-4 h-4 shrink-0 text-cyan-400" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<a className="hover:text-white transition-colors" href="tel:+15612642264">+1 (561) 264-2264</a>
</li>
<li className="flex gap-3"><svg className="lucide lucide-mail w-4 h-4 shrink-0" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> concierge@aquadental.com</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-6 text-neutral-200" style={{}}>Hours</h4>
<ul className="space-y-3 text-xs text-neutral-400 font-light" style={{}}>
<li className="flex justify-between"><span>Mon - Fri</span> <span>8:00 AM - 5:00 PM</span></li>
<li className="flex justify-between"><span>Saturday</span> <span>Closed</span></li>
<li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4" style={{}}>
<p>© 2026 Aqua Dental Loft. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
