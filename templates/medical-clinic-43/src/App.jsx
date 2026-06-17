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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // SPA Navigation Logic
        function navigate(pageId) {
            document.querySelectorAll('.page-view').forEach(page => {
                page.classList.remove('active');
                setTimeout(() => {
                    if(!page.classList.contains('active')) page.style.display = 'none';
                }, 300);
            });

            const target = document.getElementById(pageId);
            if(target) {
                target.style.display = 'block';
                // Trigger reflow
                void target.offsetWidth;
                target.classList.add('active');
            }
            
            if(pageId === 'admin') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // Mobile Menu Toggle
        const mobileMenu = document.getElementById('mobile-menu');
        function toggleMobileMenu() {
            mobileMenu.classList.toggle('hidden');
        }
        document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobileMenu);

        // Initialization
        document.addEventListener('DOMContentLoaded', () => {
            // Set minimum date to today for booking form
            const dateInput = document.getElementById('simple-date');
            if(dateInput) {
                const today = new Date().toISOString().split('T')[0];
                dateInput.setAttribute('min', today);
            }

            // Scroll Reveal Animation Observer
            const revealElements = document.querySelectorAll('.reveal');
            
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Reveal only once
                    }
                });
            }, {
                root: null,
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            });

            revealElements.forEach(el => revealObserver.observe(el));
            
            // Trigger immediately for items already in view
            setTimeout(() => {
                revealElements.forEach(el => {
                    const rect = el.getBoundingClientRect();
                    if (rect.top < window.innerHeight) {
                        el.classList.add('active');
                    }
                });
            }, 100);
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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center cursor-pointer" onclick="navigate('home'); window.scrollTo(0,0);">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2 shadow-sm shadow-blue-600/20">
<iconify-icon className="text-white" icon="solar:health-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xl tracking-tight font-semibold text-gray-900">MD</span>
<span className="ml-2 text-sm text-gray-500 font-medium tracking-tight border-l border-gray-200 pl-2">CLINIC</span>
</div>

<nav className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors" href="#home-hero" onclick="navigate('home')">Home</a>
<a className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors" href="#services" onclick="navigate('home')">Services</a>
<a className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors" href="#about" onclick="navigate('home')">About</a>
<a className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors" href="#facilities" onclick="navigate('home')">Facilities</a>
<a className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors" href="#contact" onclick="navigate('home')">Contact</a>
<button className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors flex items-center" onclick="navigate('admin')">
<iconify-icon className="mr-1" icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="16"></iconify-icon> Admin
                    </button>
<a className="bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-blue-700 shadow-sm shadow-blue-600/20 transition-all" href="#booking" onclick="navigate('home')">Book Appointment</a>
</nav>

<div className="md:hidden flex items-center">
<button className="text-gray-500 hover:text-gray-900 focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full" id="mobile-menu">
<div className="px-4 py-4 space-y-2 flex flex-col bg-white">
<a className="text-base font-medium text-gray-900 py-2" href="#home-hero" onclick="navigate('home'); toggleMobileMenu()">Home</a>
<a className="text-base font-medium text-gray-600 py-2" href="#services" onclick="navigate('home'); toggleMobileMenu()">Services</a>
<a className="text-base font-medium text-gray-600 py-2" href="#about" onclick="navigate('home'); toggleMobileMenu()">About</a>
<a className="text-base font-medium text-gray-600 py-2" href="#contact" onclick="navigate('home'); toggleMobileMenu()">Contact</a>
<button className="text-left text-base font-medium text-gray-600 py-2 flex items-center" onclick="navigate('admin'); toggleMobileMenu()">
<iconify-icon className="mr-2" icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="18"></iconify-icon> Admin
                </button>
<a className="mt-4 bg-blue-600 text-white text-center px-4 py-3 rounded-md text-base font-medium shadow-sm" href="#booking" onclick="navigate('home'); toggleMobileMenu()">Book Appointment</a>
</div>
</div>
</header>

<main className="flex-grow flex flex-col relative w-full">

<section className="page-view active flex-grow" id="home">

<div className="relative overflow-hidden bg-gray-50/50 pt-16 pb-24 lg:pt-24 lg:pb-32" id="home-hero">

<div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
<div className="lg:col-span-6 space-y-8 reveal">
<div className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium ring-1 ring-inset ring-emerald-600/20">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2"></span> Top Rated Clinic
                            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-gray-900 leading-[1.1]">
                                Trusted Healthcare for You and Your Family.
                            </h1>
<p className="text-lg text-gray-500 max-w-lg leading-relaxed">
                                Professional medical care with modern facilities and experienced doctors. We prioritize your well-being with personalized treatment plans.
                            </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="bg-blue-600 text-white px-6 py-3.5 rounded-md text-sm font-medium hover:bg-blue-700 shadow-sm shadow-blue-600/20 transition-all flex items-center justify-center" href="#booking">
                                    Book Appointment <iconify-icon className="ml-2" icon="solar:calendar-add-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="bg-white text-gray-900 ring-1 ring-inset ring-gray-200 px-6 py-3.5 rounded-md text-sm font-medium hover:bg-gray-50 transition-all flex items-center justify-center" href="tel:+1234567890">
<iconify-icon className="mr-2 text-blue-600" icon="solar:phone-calling-linear" strokeWidth="1.5" width="18"></iconify-icon> Call Now
                                </a>
</div>
</div>
<div className="lg:col-span-6 mt-16 lg:mt-0 relative reveal">

<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 ring-1 ring-gray-900/5 aspect-[4/3] bg-gray-100">
<img alt="Professional Doctor" className="object-cover w-full h-full" loading="lazy" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent mix-blend-multiply"></div>
</div>

<div className="absolute -left-6 top-12 animate-float bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-gray-200/50 ring-1 ring-gray-900/5 flex items-center space-x-3">
<div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-gray-900 tracking-tight">Certified</p>
<p className="text-[10px] text-gray-500 uppercase tracking-wider">Professionals</p>
</div>
</div>
<div className="absolute -right-8 bottom-1/4 animate-float-delayed bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-gray-200/50 ring-1 ring-gray-900/5 flex items-center space-x-3">
<div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-gray-900 tracking-tight">24/7 Care</p>
<p className="text-[10px] text-gray-500 uppercase tracking-wider">Available</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" id="services">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-emerald-500 font-medium text-sm tracking-wide uppercase mb-2">Our Expertise</h2>
<h3 className="text-3xl sm:text-4xl tracking-tight font-semibold text-gray-900">Comprehensive Medical Services</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white ring-1 ring-gray-100 rounded-2xl p-8 hover:shadow-lg hover:shadow-gray-200/40 hover:-translate-y-1 transition-all duration-300 reveal">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:stethoscope-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-gray-900 tracking-tight mb-3">General Consultation</h4>
<p className="text-sm text-gray-500 leading-relaxed">Comprehensive health assessment, diagnosis, and personalized treatment plans for ongoing wellness.</p>
</div>

<div className="group bg-white ring-1 ring-gray-100 rounded-2xl p-8 hover:shadow-lg hover:shadow-gray-200/40 hover:-translate-y-1 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:blood-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-gray-900 tracking-tight mb-3">Diabetes Treatment</h4>
<p className="text-sm text-gray-500 leading-relaxed">Expert management of blood sugar levels with modern medicine and dietary guidance.</p>
</div>

<div className="group bg-white ring-1 ring-gray-100 rounded-2xl p-8 hover:shadow-lg hover:shadow-gray-200/40 hover:-translate-y-1 transition-all duration-300 reveal" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-gray-900 tracking-tight mb-3">Blood Pressure</h4>
<p className="text-sm text-gray-500 leading-relaxed">Continuous monitoring and effective treatment protocols for hypertension and heart health.</p>
</div>

<div className="group bg-white ring-1 ring-gray-100 rounded-2xl p-8 hover:shadow-lg hover:shadow-gray-200/40 hover:-translate-y-1 transition-all duration-300 reveal" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:thermometer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-gray-900 tracking-tight mb-3">Fever &amp; Infection Care</h4>
<p className="text-sm text-gray-500 leading-relaxed">Rapid diagnosis and effective medications for viral, bacterial infections, and seasonal fevers.</p>
</div>

<div className="group bg-white ring-1 ring-gray-100 rounded-2xl p-8 hover:shadow-lg hover:shadow-gray-200/40 hover:-translate-y-1 transition-all duration-300 reveal" style={{transitionDelay: '400ms'}}>
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:clipboard-list-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-gray-900 tracking-tight mb-3">Health Checkups</h4>
<p className="text-sm text-gray-500 leading-relaxed">Preventive routine screenings and full-body checkups to catch potential issues early.</p>
</div>
</div>
</div>

<div className="bg-gray-50/50 border-y border-gray-100 py-24" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
<div className="relative reveal order-2 lg:order-1 mt-12 lg:mt-0">
<div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl ring-1 ring-gray-900/5 bg-gray-200">
<img alt="Dr. Sarah Jenkins" className="object-cover w-full h-full" loading="lazy" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>

<div className="absolute bottom-6 -right-6 lg:-right-8 bg-white p-5 rounded-2xl shadow-xl ring-1 ring-gray-900/5 hidden sm:block">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:medal-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-2xl font-semibold text-gray-900 tracking-tight">15+</p>
<p className="text-xs text-gray-500 font-medium">Years Experience</p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-6 reveal">
<h2 className="text-emerald-500 font-medium text-sm tracking-wide uppercase">Meet Your Doctor</h2>
<h3 className="text-3xl sm:text-4xl tracking-tight font-semibold text-gray-900">Dr. Sarah Jenkins</h3>
<p className="text-base font-medium text-blue-600">Chief Medical Officer &amp; General Physician</p>
<p className="text-sm text-gray-500 leading-relaxed">
                                Dr. Jenkins is a highly respected general physician dedicated to providing compassionate, comprehensive care. With over a decade of experience in internal medicine, she focuses on building long-lasting relationships with her patients to ensure continuous health and wellness.
                            </p>
<ul className="space-y-4 pt-4 border-t border-gray-200">
<li className="flex items-start">
<iconify-icon className="text-emerald-500 mt-0.5 mr-3 flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-gray-700 font-medium">MBBS, MD - Internal Medicine (Harvard Medical School)</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-emerald-500 mt-0.5 mr-3 flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-gray-700 font-medium">Specializes in Chronic Disease Management</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-emerald-500 mt-0.5 mr-3 flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-gray-700 font-medium">Awarded "Best Physician 2022" by Medical Association</span>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-gray-900">Why Choose Us</h2>
<p className="mt-4 text-base text-gray-500">We combine medical expertise with compassionate care to deliver the best outcomes.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

<div className="bg-gray-50/50 ring-1 ring-gray-100 rounded-2xl p-6 text-center hover:bg-white hover:shadow-md transition-all duration-300 reveal">
<div className="w-10 h-10 mx-auto bg-white ring-1 ring-gray-200 text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
<iconify-icon icon="solar:user-star-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-gray-900">Experienced Doctor</h4>
</div>

<div className="bg-gray-50/50 ring-1 ring-gray-100 rounded-2xl p-6 text-center hover:bg-white hover:shadow-md transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<div className="w-10 h-10 mx-auto bg-white ring-1 ring-gray-200 text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
<iconify-icon icon="solar:laptop-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-gray-900">Modern Equipment</h4>
</div>

<div className="bg-gray-50/50 ring-1 ring-gray-100 rounded-2xl p-6 text-center hover:bg-white hover:shadow-md transition-all duration-300 reveal" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 mx-auto bg-white ring-1 ring-gray-200 text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-gray-900">Friendly Staff</h4>
</div>

<div className="bg-gray-50/50 ring-1 ring-gray-100 rounded-2xl p-6 text-center hover:bg-white hover:shadow-md transition-all duration-300 reveal" style={{transitionDelay: '300ms'}}>
<div className="w-10 h-10 mx-auto bg-white ring-1 ring-gray-200 text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-gray-900">Affordable Care</h4>
</div>

<div className="bg-gray-50/50 ring-1 ring-gray-100 rounded-2xl p-6 text-center hover:bg-white hover:shadow-md transition-all duration-300 reveal" style={{transitionDelay: '400ms'}}>
<div className="w-10 h-10 mx-auto bg-white ring-1 ring-gray-200 text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-gray-900">Quick Appointments</h4>
</div>
</div>
</div>

<div className="bg-gray-900 py-24 text-white" id="facilities">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between reveal">
<div className="max-w-xl">
<h2 className="text-emerald-400 font-medium text-sm tracking-wide uppercase mb-2">Our Space</h2>
<h3 className="text-3xl sm:text-4xl tracking-tight font-semibold text-white">Modern Clinic Facilities</h3>
</div>
<p className="mt-4 md:mt-0 text-sm text-gray-400 max-w-sm">Designed for patient comfort, safety, and efficient medical care using the latest technology.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-800 reveal">
<img alt="Clean Waiting Area" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h4 className="text-lg font-semibold text-white tracking-tight mb-1">Clean Waiting Area</h4>
<p className="text-xs text-gray-300">Comfortable and sanitized seating for you and your family.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-800 reveal" style={{transitionDelay: '150ms'}}>
<img alt="Digital Equipment" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h4 className="text-lg font-semibold text-white tracking-tight mb-1">Digital Diagnostics</h4>
<p className="text-xs text-gray-300">State-of-the-art equipment for accurate assessments.</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-800 reveal" style={{transitionDelay: '300ms'}}>
<img alt="Emergency Support" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h4 className="text-lg font-semibold text-white tracking-tight mb-1">Observation Room</h4>
<p className="text-xs text-gray-300">Fully equipped rooms for short-term monitoring.</p>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl tracking-tight font-semibold text-gray-900">Patient Testimonials</h2>
<p className="mt-4 text-base text-gray-500">Read what our patients have to say about their experience.</p>
</div>
<div className="flex space-x-6 overflow-x-auto hide-scrollbar pb-8 snap-x snap-mandatory reveal">

<div className="flex-none w-[300px] sm:w-[350px] bg-white ring-1 ring-gray-100 rounded-2xl p-8 shadow-sm snap-center">
<div className="flex text-emerald-500 mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-sm text-gray-600 italic mb-6">"Dr. Jenkins was incredible. She took the time to listen to my concerns and explained my treatment plan perfectly. The clinic is spotless and modern."</p>
<div className="flex items-center">
<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-semibold text-gray-600 text-xs mr-3">JD</div>
<div>
<h5 className="text-sm font-semibold text-gray-900">John Doe</h5>
<p className="text-xs text-gray-500">Regular Patient</p>
</div>
</div>
</div>

<div className="flex-none w-[300px] sm:w-[350px] bg-white ring-1 ring-gray-100 rounded-2xl p-8 shadow-sm snap-center">
<div className="flex text-emerald-500 mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-sm text-gray-600 italic mb-6">"Booking an appointment was so easy, and there was zero waiting time. The staff is extremely polite and the facilities are top-notch."</p>
<div className="flex items-center">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-semibold text-blue-700 text-xs mr-3">MS</div>
<div>
<h5 className="text-sm font-semibold text-gray-900">Maria Smith</h5>
<p className="text-xs text-gray-500">Health Checkup</p>
</div>
</div>
</div>

<div className="flex-none w-[300px] sm:w-[350px] bg-white ring-1 ring-gray-100 rounded-2xl p-8 shadow-sm snap-center">
<div className="flex text-emerald-500 mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-sm text-gray-600 italic mb-6">"I visited for a persistent fever. The diagnosis was quick, and I recovered within days thanks to the accurate medication prescribed."</p>
<div className="flex items-center">
<div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center font-semibold text-emerald-700 text-xs mr-3">RJ</div>
<div>
<h5 className="text-sm font-semibold text-gray-900">Robert Johnson</h5>
<p className="text-xs text-gray-500">General Consultation</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gray-50/50 border-t border-gray-100 py-24" id="booking">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-12 lg:gap-12">

<div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-gray-200/40 ring-1 ring-gray-900/5 reveal">
<h3 className="text-2xl tracking-tight font-semibold text-gray-900 mb-2">Book an Appointment</h3>
<p className="text-sm text-gray-500 mb-8">Fill out the form below and our front desk will confirm your slot.</p>
<form className="space-y-5" onsubmit="event.preventDefault(); alert('Request sent successfully! Our team will contact you soon.'); this.reset();">
<div>
<label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">Full Name</label>
<input className="block w-full rounded-lg border-gray-200 py-3 px-4 text-sm focus:border-blue-600 focus:ring-blue-600 border bg-gray-50/50 transition-colors outline-none" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">Phone Number</label>
<input className="block w-full rounded-lg border-gray-200 py-3 px-4 text-sm focus:border-blue-600 focus:ring-blue-600 border bg-gray-50/50 transition-colors outline-none" placeholder="+1 (555) 000-0000" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">Preferred Date</label>
<div className="relative">
<input className="block w-full rounded-lg border-gray-200 py-3 px-4 text-sm focus:border-blue-600 focus:ring-blue-600 border bg-gray-50/50 transition-colors outline-none text-gray-700" id="simple-date" required="" type="date"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">Message (Optional)</label>
<textarea className="block w-full rounded-lg border-gray-200 py-3 px-4 text-sm focus:border-blue-600 focus:ring-blue-600 border bg-gray-50/50 transition-colors outline-none resize-none" placeholder="Briefly describe your symptoms or reason for visit..." rows="3"></textarea>
</div>
<button className="w-full bg-blue-600 text-white px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-blue-700 shadow-sm transition-all mt-4" type="submit">
                                    Request Appointment
                                </button>
</form>
</div>

<div className="lg:col-span-6 mt-12 lg:mt-0 flex flex-col space-y-8 reveal" id="contact" style={{transitionDelay: '200ms'}}>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-white p-6 rounded-2xl ring-1 ring-gray-100 shadow-sm">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-gray-900 mb-1">Clinic Address</h4>
<p className="text-sm text-gray-500 leading-relaxed">123 Health Avenue, Medical District<br/>New York, NY 10001</p>
</div>
<div className="bg-white p-6 rounded-2xl ring-1 ring-gray-100 shadow-sm">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-gray-900 mb-1">Working Hours</h4>
<p className="text-sm text-gray-500 leading-relaxed">Mon - Sat: 09:00 AM - 08:00 PM<br/>Sunday: Emergency Only</p>
</div>
<div className="bg-white p-6 rounded-2xl ring-1 ring-gray-100 shadow-sm sm:col-span-2 flex items-center">
<div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-0.5">Contact Number</h4>
<a className="text-lg font-semibold text-blue-600 hover:text-blue-700" href="tel:+1234567890">+1 (234) 567-890</a>
</div>
</div>
</div>

<div className="flex-grow bg-gray-200 rounded-2xl overflow-hidden ring-1 ring-gray-900/5 relative min-h-[250px]">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155099395246!2d-73.98801268459375!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" style={{border: '0', position: 'absolute', inset: '0'}} width="100%">
</iframe>
</div>
</div>
</div>
</div>
</div>

<footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
<div className="md:col-span-1">
<div className="flex items-center mb-4">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
<iconify-icon className="text-white" icon="solar:health-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xl tracking-tight font-semibold text-white">MD CLINIC</span>
</div>
<p className="text-sm text-gray-400 leading-relaxed mb-6">Delivering premium healthcare services with compassion, expertise, and modern technology.</p>
<div className="flex space-x-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-400 hover:text-blue-400 transition-colors" href="#home-hero">Home</a></li>
<li><a className="text-sm text-gray-400 hover:text-blue-400 transition-colors" href="#services">Services</a></li>
<li><a className="text-sm text-gray-400 hover:text-blue-400 transition-colors" href="#about">About</a></li>
<li><a className="text-sm text-gray-400 hover:text-blue-400 transition-colors" href="#facilities">Gallery</a></li>
<li><a className="text-sm text-gray-400 hover:text-blue-400 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
<ul className="space-y-3">
<li><span className="text-sm text-gray-400">General Consultation</span></li>
<li><span className="text-sm text-gray-400">Diabetes Care</span></li>
<li><span className="text-sm text-gray-400">Heart Health</span></li>
<li><span className="text-sm text-gray-400">Pediatrics</span></li>
<li><span className="text-sm text-gray-400">Health Checkups</span></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Newsletter</h4>
<p className="text-xs text-gray-400 mb-3">Subscribe for health tips and clinic updates.</p>
<form className="flex" onsubmit="event.preventDefault();">
<input className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-l-md text-sm focus:outline-none focus:border-blue-500" placeholder="Email address" type="email"/>
<button className="bg-blue-600 px-3 py-2 rounded-r-md text-white hover:bg-blue-700 transition-colors" type="submit">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
<p>© 2024 MD Clinic. All rights reserved.</p>
<div className="space-x-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
</section>

<section className="page-view flex-grow bg-gray-50 min-h-screen" id="admin">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
<div>
<h2 className="text-2xl tracking-tight font-semibold text-gray-900">Clinic Dashboard</h2>
<p className="mt-1 text-sm text-gray-500">Manage daily schedule and appointments.</p>
</div>
<div className="mt-4 md:mt-0 flex space-x-3">
<button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 flex items-center shadow-sm">
<iconify-icon className="mr-2" icon="solar:calendar-linear" width="16"></iconify-icon> Today
                        </button>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 text-center">
<div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon icon="solar:folder-with-files-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-1">Admin Panel Active</h3>
<p className="text-sm text-gray-500 mb-6">The appointment requests from the landing page will appear here in the live system.</p>
<button className="bg-gray-900 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors" onclick="navigate('home')">
                        Return to Website
                    </button>
</div>
</div>
</section>
</main>



    </>
  );
}
