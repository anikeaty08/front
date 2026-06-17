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



        // Navbar Interaction
        const nav = document.getElementById('navbar');
        const navBg = document.getElementById('nav-bg');
        const navContainer = document.getElementById('nav-container');

        function updateNav() {
            if (window.scrollY > 50) {
                // Scrolled
                navBg.classList.remove('opacity-0');
                navBg.classList.add('bg-white/80', 'backdrop-blur-md', 'border-b', 'border-stone-100');
                navContainer.classList.add('opacity-0', 'pointer-events-none'); 
                navContainer.classList.remove('flex');
                navContainer.classList.add('hidden');
            } else {
                // Top
                navBg.classList.add('opacity-0');
                navBg.classList.remove('bg-white/80', 'backdrop-blur-md', 'border-b', 'border-stone-100');
                navContainer.classList.remove('opacity-0', 'pointer-events-none', 'hidden');
                navContainer.classList.add('flex');
            }
        }
        window.addEventListener('scroll', updateNav);

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const isOpen = !menu.classList.contains('opacity-0');
            
            if (isOpen) {
                menu.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = '';
            } else {
                menu.classList.remove('opacity-0', 'pointer-events-none');
                document.body.style.overflow = 'hidden';
            }
        }
        document.getElementById('mobile-toggle').addEventListener('click', toggleMobileMenu);

        // Comparison Slider Logic
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
            setTimeout(syncWidth, 100); // Initial check
        }

        // Scroll Reveal Observer
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
<div className="absolute inset-0 transition-all duration-300 opacity-0" id="nav-bg"></div>
<div className="relative flex h-24 max-w-7xl mx-auto px-6 items-center justify-between">

<a className="flex items-center gap-3 z-50 relative group" href="#">
<div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 transition-colors duration-300 group-hover:bg-teal-100">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-serif text-lg tracking-tight font-medium text-stone-800 transition-colors duration-300" id="logo-text">Collado</span>
<span className="text-[10px] uppercase tracking-widest text-stone-500 font-medium">Dental Office</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-2 backdrop-blur-md rounded-full px-2 py-1.5 border border-transparent transition-colors duration-300" id="nav-container">
<a className="px-5 py-2 text-xs font-medium rounded-full text-stone-600 hover:text-teal-700 hover:bg-stone-100 transition-colors" href="#">Home</a>

<div className="group relative">
<button className="flex items-center gap-1.5 px-5 py-2 text-xs font-medium rounded-full text-stone-600 hover:text-teal-700 hover:bg-stone-100 transition-colors">
                        About <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>
<div className="absolute top-full left-0 mt-2 w-56 bg-white border border-stone-100 rounded-2xl shadow-xl shadow-stone-200/40 opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out p-2">
<a className="block px-4 py-2.5 text-xs font-medium text-stone-500 hover:bg-stone-50 hover:text-teal-700 rounded-xl transition-colors" href="#about">Our Philosophy</a>
<a className="block px-4 py-2.5 text-xs font-medium text-stone-500 hover:bg-stone-50 hover:text-teal-700 rounded-xl transition-colors" href="#doctors">Meet the Team</a>
<a className="block px-4 py-2.5 text-xs font-medium text-stone-500 hover:bg-stone-50 hover:text-teal-700 rounded-xl transition-colors" href="#amenities">Amenities</a>
</div>
</div>

<div className="group relative">
<button className="flex items-center gap-1.5 px-5 py-2 text-xs font-medium rounded-full text-stone-600 hover:text-teal-700 hover:bg-stone-100 transition-colors">
                        Care Services <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white border border-stone-100 rounded-2xl shadow-xl shadow-stone-200/40 opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out overflow-hidden p-6">
<div className="grid grid-cols-2 gap-8">
<div>
<h6 className="flex items-center gap-2 text-[10px] font-semibold text-teal-600 uppercase tracking-widest mb-4">
<iconify-icon icon="solar:heart-linear" width="14"></iconify-icon> General Care
                                </h6>
<div className="space-y-1">
<a className="block px-3 py-2 text-xs font-medium text-stone-500 hover:bg-stone-50 rounded-lg transition-colors hover:text-teal-700" href="#">Family Dentistry</a>
<a className="block px-3 py-2 text-xs font-medium text-stone-500 hover:bg-stone-50 rounded-lg transition-colors hover:text-teal-700" href="#">Preventative Checkups</a>
<a className="block px-3 py-2 text-xs font-medium text-stone-500 hover:bg-stone-50 rounded-lg transition-colors hover:text-teal-700" href="#">Gentle Cleaning</a>
</div>
</div>
<div className="border-l border-stone-100 pl-8">
<h6 className="flex items-center gap-2 text-[10px] font-semibold text-teal-600 uppercase tracking-widest mb-4">
<iconify-icon icon="solar:stars-linear" width="14"></iconify-icon> Cosmetic
                                </h6>
<div className="space-y-1">
<a className="block px-3 py-2 text-xs font-medium text-stone-500 hover:bg-stone-50 rounded-lg transition-colors hover:text-teal-700" href="#">Whitening</a>
<a className="block px-3 py-2 text-xs font-medium text-stone-500 hover:bg-stone-50 rounded-lg transition-colors hover:text-teal-700" href="#">Invisalign</a>
<a className="block px-3 py-2 text-xs font-medium text-stone-500 hover:bg-stone-50 rounded-lg transition-colors hover:text-teal-700" href="#">Veneers</a>
</div>
</div>
</div>
</div>
</div>
<a className="px-5 py-2 text-xs font-medium rounded-full text-stone-600 hover:text-teal-700 hover:bg-stone-100 transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden lg:flex items-center gap-4 z-50">
<a className="flex items-center gap-2 text-xs font-medium text-stone-500 hover:text-teal-700 transition-colors" href="tel:7183231288">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                    (718) 323-1288
                </a>
<a className="bg-stone-900 text-white px-6 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-teal-700 transition-colors shadow-lg shadow-stone-900/10" href="#booking">
                    Book Visit
                </a>
</div>

<button aria-label="Menu" className="lg:hidden p-2 z-50 text-stone-800" id="mobile-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-white z-40 flex flex-col pt-28 px-6 opacity-0 pointer-events-none transition-all duration-300 lg:hidden overflow-y-auto" id="mobile-menu">
<div className="flex flex-col gap-8 pb-20">
<a className="text-2xl font-serif text-stone-800 border-b border-stone-100 pb-4" href="#" onclick="toggleMobileMenu()">Home</a>
<div className="flex flex-col gap-4">
<h3 className="text-xs font-semibold uppercase tracking-widest text-teal-600">About</h3>
<a className="text-lg text-stone-500 font-light" href="#about" onclick="toggleMobileMenu()">Our Philosophy</a>
<a className="text-lg text-stone-500 font-light" href="#doctors" onclick="toggleMobileMenu()">The Team</a>
</div>
<div className="flex flex-col gap-4">
<h3 className="text-xs font-semibold uppercase tracking-widest text-teal-600">Services</h3>
<a className="text-lg text-stone-500 font-light" href="#services" onclick="toggleMobileMenu()">Family Dentistry</a>
<a className="text-lg text-stone-500 font-light" href="#services" onclick="toggleMobileMenu()">Cosmetic Solutions</a>
</div>
<div className="flex flex-col gap-4 mt-4">
<a className="text-xl text-stone-900 font-serif" href="tel:7183231288" onclick="toggleMobileMenu()">(718) 323-1288</a>
<a className="w-full py-4 bg-teal-700 text-white rounded-xl text-center text-sm font-medium" href="#booking" onclick="toggleMobileMenu()">Book Appointment</a>
</div>
</div>
<button className="absolute top-8 right-6 text-stone-800 p-2" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-[100dvh] min-h-[700px] overflow-hidden bg-stone-100">

<div className="absolute inset-0 w-full h-full animate-zoom-slow">
<img alt="Calm Dental Office" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF9]/90 via-[#FAFAF9]/50 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF9] via-transparent to-transparent"></div>
</div>

<div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
<div className="max-w-2xl pt-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur border border-white/50 mb-6 animate-fade-in-up delay-100 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-widest text-stone-600 font-semibold">Appointments Recommended</span>
</div>
<h1 className="text-5xl md:text-7xl font-serif text-stone-800 leading-[0.95] tracking-tight mb-6 animate-fade-in-up delay-200">
                    Dentistry with a <br/>
<span className="italic font-light text-teal-700">gentle touch.</span>
</h1>
<p className="text-lg text-stone-500 font-light mb-8 max-w-md leading-relaxed animate-fade-in-up delay-200">
                    Serving Jamaica, NY and surrounding areas. We help you build a healthy smile in an environment designed for your comfort and peace of mind.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-300">
<a className="w-full sm:w-auto px-8 py-3.5 bg-stone-800 text-white rounded-full text-xs font-medium hover:bg-stone-700 transition-all shadow-lg shadow-stone-800/20 text-center" href="#booking">
                        Book Your Visit
                    </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white/50 backdrop-blur border border-white text-stone-700 rounded-full text-xs font-medium hover:bg-white transition-all flex items-center justify-center gap-2 group" href="#amenities">
                        Office Details
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-white" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
<div>
<span className="text-teal-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">Holistic Care</span>
<h2 className="text-3xl md:text-4xl tracking-tight text-stone-800">Designed for Comfort</h2>
</div>
<p className="md:w-1/3 text-sm text-stone-500 font-light mt-4 md:mt-0">
                    From routine checkups to complete makeovers, we provide care that prioritizes your well-being.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="group cursor-pointer reveal-on-scroll p-6 rounded-2xl bg-[#FAFAF9] border border-stone-100 hover:border-teal-100 hover:shadow-lg hover:shadow-teal-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-teal-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-stone-800 mb-2">Preventative Care</h3>
<p className="text-xs text-stone-500 leading-relaxed mb-4">
                        Gentle cleanings and comprehensive exams to keep your family's smiles healthy for years to come.
                    </p>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-100 p-6 rounded-2xl bg-[#FAFAF9] border border-stone-100 hover:border-teal-100 hover:shadow-lg hover:shadow-teal-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-teal-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:stars-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-stone-800 mb-2">Cosmetic Dentistry</h3>
<p className="text-xs text-stone-500 leading-relaxed mb-4">
                        Subtle enhancements to illuminate your natural beauty. Whitening, veneers, and bonding.
                    </p>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-200 p-6 rounded-2xl bg-[#FAFAF9] border border-stone-100 hover:border-teal-100 hover:shadow-lg hover:shadow-teal-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-teal-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-stone-800 mb-2">Restorative Solutions</h3>
<p className="text-xs text-stone-500 leading-relaxed mb-4">
                        Fixing broken or missing teeth with modern, minimally invasive techniques for lasting results.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50 border-t border-stone-100" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 reveal-on-scroll">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-stone-200">
<img alt="Comfortable Patient Care" className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl border border-stone-100">
<p className="font-serif italic text-lg text-stone-800">"We treat every patient like family. Your comfort is our promise."</p>
</div>
</div>
</div>
<div className="order-1 md:order-2 reveal-on-scroll delay-100">
<span className="text-teal-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">About Collado Dental</span>
<h2 className="text-4xl md:text-5xl tracking-tight text-stone-800 mb-6 font-serif">A Sanctuary for <span className="italic text-stone-400">Your Smile</span></h2>
<p className="text-stone-600 font-light leading-relaxed mb-6">
                        We understand that for many, the dentist can be a source of anxiety. That's why Collado Dental Office was built differently. We are a calming sanctuary where clinical excellence meets genuine human connection.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-stone-600">
<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0"><iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon></div>
                            Stress-free, calming environment
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0"><iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon></div>
                            Appointments recommended for personalized care
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0"><iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon></div>
                            Transparent pricing and planning
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-stone-100" id="amenities">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-teal-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">Patient Convenience</span>
<h2 className="text-3xl md:text-4xl tracking-tight text-stone-800 font-serif">Plan Your Visit</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-on-scroll">

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-teal-200 transition-colors">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-teal-600 mb-4 shadow-sm">
<iconify-icon icon="solar:wheelchair-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-stone-800 mb-2">Accessibility</h4>
<p className="text-xs text-stone-500 font-light leading-relaxed">
                        Our facility is designed for everyone. We offer a wheelchair accessible restroom and parking lot.
                    </p>
</div>

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-teal-200 transition-colors">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-teal-600 mb-4 shadow-sm">
<iconify-icon icon="solar:card-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-stone-800 mb-2">Flexible Payments</h4>
<p className="text-xs text-stone-500 font-light leading-relaxed">
                        We accept Credit cards, Debit cards, and NFC mobile payments (Apple Pay, Google Pay).
                    </p>
</div>

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-teal-200 transition-colors">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-teal-600 mb-4 shadow-sm">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-stone-800 mb-2">Appointments</h4>
<p className="text-xs text-stone-500 font-light leading-relaxed">
                        Appointments are recommended to ensure minimal wait times and dedicated attention.
                    </p>
</div>

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-teal-200 transition-colors">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-teal-600 mb-4 shadow-sm">
<iconify-icon icon="solar:sofa-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-stone-800 mb-2">Restroom &amp; Comfort</h4>
<p className="text-xs text-stone-500 font-light leading-relaxed">
                        Clean, modern restroom facilities available for all patients during their visit.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-900 text-white overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block text-teal-400">Real Results</span>
<h2 className="text-3xl md:text-5xl tracking-tight mb-6 font-serif">See the <span className="italic text-stone-500">Difference</span></h2>
<p className="text-stone-400 font-light leading-relaxed mb-8 text-sm max-w-md">
                        We use the latest technology to ensure your results are not just beautiful, but natural and long-lasting. Drag the slider to see how we can transform a smile.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white border-b border-teal-500 pb-1 hover:text-teal-400 transition-colors" href="#booking">
                        Book a Consultation <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="reveal-on-scroll delay-100">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl comparison-slider" id="comparisonSlider">

<img alt="After Smile" className="absolute inset-0 w-full h-full object-cover grayscale-[20%]" src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-black/40 backdrop-blur px-3 py-1 text-[10px] font-bold tracking-wider rounded-full text-white">AFTER</div>

<div className="comparison-item" id="comparisonOverlay" style={{width: '50%'}}>
<img alt="Before Smile" className="absolute top-0 left-0 h-full max-w-none w-full object-cover grayscale" id="comparisonImageBefore" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-black/40 backdrop-blur px-3 py-1 text-[10px] font-bold tracking-wider rounded-full text-white">BEFORE</div>
</div>

<div className="comparison-handle" id="comparisonHandle" style={{left: '50%'}}>
<div className="comparison-circle">
<iconify-icon icon="solar:code-scan-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FAFAF9]" id="booking" style={{}}>
<div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl shadow-stone-200/50 overflow-hidden border border-stone-100 flex flex-col md:flex-row reveal-on-scroll">

<div className="md:w-1/3 bg-teal-800 p-10 text-white flex flex-col justify-between">
<div>
<h3 className="text-2xl font-serif mb-4">Request Visit</h3>
<p className="text-xs text-teal-100 mb-8 leading-relaxed font-light">
                        Select a service and preferred time. Our coordinator will confirm your appointment shortly.
                    </p>
<ul className="space-y-4 text-xs text-teal-50">
<li className="flex items-center gap-3">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Insurance Accepted
                        </li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
                            Secure Booking
                        </li>
</ul>
</div>
<div className="mt-12">
<p className="text-[10px] uppercase tracking-widest text-teal-300 mb-1">Questions?</p>
<p className="text-sm font-medium">(718) 323-1288</p>
</div>
</div>

<div className="md:w-2/3 p-10">
<form onsubmit="event.preventDefault(); alert('Thank you! We will contact you shortly.');">
<div className="mb-8">
<label className="block text-xs font-semibold uppercase tracking-wide text-stone-400 mb-4">Reason for Visit</label>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="reason" type="radio"/>
<div className="px-5 py-2.5 rounded-full border border-stone-200 text-xs font-medium text-stone-500 peer-checked:bg-stone-800 peer-checked:text-white peer-checked:border-stone-800 transition-all">
                                    Checkup
                                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="reason" type="radio"/>
<div className="px-5 py-2.5 rounded-full border border-stone-200 text-xs font-medium text-stone-500 peer-checked:bg-stone-800 peer-checked:text-white peer-checked:border-stone-800 transition-all">
                                    Pain / Emergency
                                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="reason" type="radio"/>
<div className="px-5 py-2.5 rounded-full border border-stone-200 text-xs font-medium text-stone-500 peer-checked:bg-stone-800 peer-checked:text-white peer-checked:border-stone-800 transition-all">
                                    Cosmetic
                                </div>
</label>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
<label className="block">
<span className="text-xs font-semibold text-stone-400 uppercase tracking-wide block mb-2">First Name</span>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" placeholder="Jane" type="text"/>
</label>
<label className="block">
<span className="text-xs font-semibold text-stone-400 uppercase tracking-wide block mb-2">Last Name</span>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" placeholder="Doe" type="text"/>
</label>
</div>
<div className="mb-8">
<label className="block text-xs font-semibold uppercase tracking-wide text-stone-400 mb-4">Preferred Time (Morning/Afternoon)</label>
<div className="grid grid-cols-2 gap-4">
<label className="cursor-pointer group">
<input className="peer sr-only" name="time" type="radio"/>
<div className="p-3 rounded-xl border border-stone-200 bg-white hover:border-teal-300 transition-all flex items-center justify-between">
<span className="text-sm font-medium text-stone-700">Morning</span>
<div className="w-4 h-4 rounded-full border border-stone-300 peer-checked:bg-teal-600 radio-indicator"></div>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="time" type="radio"/>
<div className="p-3 rounded-xl border border-stone-200 bg-white hover:border-teal-300 transition-all flex items-center justify-between">
<span className="text-sm font-medium text-stone-700">Afternoon</span>
<div className="w-4 h-4 rounded-full border border-stone-300 peer-checked:bg-teal-600 radio-indicator"></div>
</div>
</label>
</div>
</div>
<button className="w-full py-4 bg-stone-900 text-white rounded-xl text-sm font-semibold hover:bg-stone-800 transition-transform active:scale-[0.99] shadow-lg shadow-stone-900/10" type="submit">
                        Submit Request
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-stone-100" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-700">
<iconify-icon icon="solar:leaf-linear" width="16"></iconify-icon>
</div>
<span className="font-serif text-xl text-stone-800">Collado Dental</span>
</a>
<p className="text-xs text-stone-500 font-light leading-relaxed mb-6">
                        Making the world smile, one patient at a time. We provide gentle, family-oriented dental care in Jamaica, NY.
                    </p>
<div className="flex gap-4 text-stone-400">
<a className="hover:text-teal-600 transition-colors" href="#"><iconify-icon icon="brandico:instagram" width="18"></iconify-icon></a>
<a className="hover:text-teal-600 transition-colors" href="#"><iconify-icon icon="brandico:facebook" width="18"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold mb-6 text-stone-800">Quick Links</h4>
<ul className="space-y-3 text-xs text-stone-500 font-light">
<li><a className="hover:text-teal-600 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#amenities">Amenities</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#booking">New Patients</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-6 text-stone-800">Visit Us</h4>
<ul className="space-y-3 text-xs text-stone-500 font-light">
<li className="flex gap-3">
<iconify-icon className="text-teal-600 mt-0.5" icon="solar:map-point-linear" width="16"></iconify-icon>
<span className="max-w-[200px]">101-05 77th St<br/>Jamaica, NY 11416</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-teal-600" icon="solar:phone-calling-linear" width="16"></iconify-icon>
<a className="hover:text-teal-600 transition-colors" href="tel:7183231288">(718) 323-1288</a>
</li>
<li className="flex gap-3">
<iconify-icon className="text-teal-600" icon="solar:letter-linear" width="16"></iconify-icon>
<span>office@colladodental.com</span>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-6 text-stone-800">Hours</h4>
<ul className="space-y-3 text-xs text-stone-500 font-light">
<li className="flex justify-between border-b border-stone-50 pb-2"><span>Weekdays</span> <span>Open until 5:30 PM</span></li>
<li className="flex justify-between border-b border-stone-50 pb-2"><span>Sat - Sun</span> <span>Closed</span></li>
<li className="mt-4 text-teal-600 font-medium">Appointments Recommended</li>
</ul>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-400 gap-4">
<p>© 2024 Collado Dental Office. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-stone-600" href="#">Privacy Policy</a>
<a className="hover:text-stone-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
