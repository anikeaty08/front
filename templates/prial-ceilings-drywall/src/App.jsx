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



    // Initialize Lucide icons
    lucide.createIcons();

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="text-xl font-semibold tracking-tight text-gray-900" href="#home">
<span className="text-emerald-600">prial</span>ceilings
        </a>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors" href="#projects">Projects</a>
<a className="text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg transition-colors" href="#contact">Contact Us</a>
</div>
<button className="md:hidden p-2 rounded-lg hover:bg-gray-100" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-5 h-5 stroke-[1.5]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="hidden md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3" id="mobileMenu">
<a className="block text-sm font-medium text-gray-600 hover:text-emerald-600 py-2" href="#home">Home</a>
<a className="block text-sm font-medium text-gray-600 hover:text-emerald-600 py-2" href="#about">About</a>
<a className="block text-sm font-medium text-gray-600 hover:text-emerald-600 py-2" href="#services">Services</a>
<a className="block text-sm font-medium text-gray-600 hover:text-emerald-600 py-2" href="#projects">Projects</a>
<a className="block text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg text-center" href="#contact">Contact Us</a>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-16" id="home" style={{background: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #ecfdf5 100%)'}}>
<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl"></div>
<div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="fade-in" style={{animationPlayState: 'running'}}>
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium mb-6">
<svg className="lucide lucide-map-pin w-3.5 h-3.5 stroke-[1.5]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            Proudly South African
          </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-tight mb-6">
            Transforming Spaces with <span className="text-emerald-600">Premium Ceilings</span>
</h1>
<p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
            South Africa's trusted experts in ceiling and drywall installation. We deliver quality craftsmanship, precision, and reliability for residential and commercial projects.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/25" href="#contact">
<svg className="lucide lucide-phone w-4 h-4 stroke-[1.5]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
              Get Free Quote
            </a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-200 hover:border-emerald-300 hover:text-emerald-600 transition-all" href="#projects">
<svg className="lucide lucide-image w-4 h-4 stroke-[1.5]" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
              View Our Work
            </a>
</div>

<div className="flex items-center gap-8 mt-12 pt-8 border-t border-gray-200">
<div>
<div className="text-2xl font-semibold text-gray-900">500+</div>
<div className="text-xs text-gray-500 uppercase tracking-wider">Projects</div>
</div>
<div className="w-px h-10 bg-gray-200"></div>
<div>
<div className="text-2xl font-semibold text-gray-900">15+</div>
<div className="text-xs text-gray-500 uppercase tracking-wider">Years</div>
</div>
<div className="w-px h-10 bg-gray-200"></div>
<div>
<div className="text-2xl font-semibold text-gray-900">100%</div>
<div className="text-xs text-gray-500 uppercase tracking-wider">Satisfaction</div>
</div>
</div>
</div>
<div className="fade-in fade-in-delay-2" style={{animationPlayState: 'running'}}>
<div className="relative">
<img alt="Modern ceiling installation" className="lg:h-[500px] w-full h-96 object-cover rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-shield-check w-5 h-5 text-emerald-600 stroke-[1.5]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Quality Guaranteed</div>
<div className="text-xs text-gray-500">5-Year Warranty</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-layers w-5 h-5 text-emerald-600 stroke-[1.5]" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<span className="text-sm font-medium text-gray-700">Ceiling Installation</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-layout-panel-top w-5 h-5 text-emerald-600 stroke-[1.5]" data-lucide="layout-panel-top" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect></svg>
</div>
<span className="text-sm font-medium text-gray-700">Drywall Systems</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-wrench w-5 h-5 text-emerald-600 stroke-[1.5]" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
</div>
<span className="text-sm font-medium text-gray-700">Repairs &amp; Maintenance</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-building-2 w-5 h-5 text-emerald-600 stroke-[1.5]" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<span className="text-sm font-medium text-gray-700">Commercial Projects</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="fade-in" style={{animationPlayState: 'running'}}>
<div className="grid grid-cols-2 gap-4">
<img alt="Team at work" className="w-full h-48 object-cover rounded-xl" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="Ceiling detail" className="w-full h-48 object-cover rounded-xl mt-8" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="Finished project" className="w-full h-48 object-cover rounded-xl" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="Interior design" className="w-full h-48 object-cover rounded-xl mt-8" src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
</div>
<div className="fade-in fade-in-delay-1" style={{animationPlayState: 'running'}}>
<span className="text-sm uppercase tracking-widest text-emerald-600 font-medium">About Us</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mt-3 mb-6">
            Building Excellence Since 2009
          </h2>
<p className="text-gray-600 leading-relaxed mb-6">
            Prial Ceilings is a proudly South African company based in the heart of our nation. With over 15 years of experience, we have established ourselves as industry leaders in ceiling and drywall installation across residential, commercial, and industrial sectors.
          </p>
<p className="text-gray-600 leading-relaxed mb-8">
            Our team of skilled professionals combines traditional craftsmanship with modern techniques to deliver exceptional results. We take pride in our attention to detail, reliability, and commitment to customer satisfaction.
          </p>

<div className="bg-white rounded-xl p-6 border border-gray-100 mb-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-target w-6 h-6 text-emerald-600 stroke-[1.5]" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div className="">
<h3 className="font-semibold text-gray-900 mb-2">Our Mission</h3>
<p className="text-sm text-gray-600">To provide superior ceiling and drywall solutions that exceed expectations, delivered with professionalism, integrity, and a commitment to excellence in every project we undertake.</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-3">
<svg className="lucide lucide-check-circle w-5 h-5 text-emerald-600 stroke-[1.5]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-sm font-medium text-gray-700">Professionalism</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check-circle w-5 h-5 text-emerald-600 stroke-[1.5]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-sm font-medium text-gray-700">Quality Materials</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check-circle w-5 h-5 text-emerald-600 stroke-[1.5]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-sm font-medium text-gray-700">Reliable Service</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check-circle w-5 h-5 text-emerald-600 stroke-[1.5]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-sm font-medium text-gray-700">Competitive Pricing</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 fade-in" style={{animationPlayState: 'running'}}>
<span className="text-sm uppercase tracking-widest text-emerald-600 font-medium">Our Services</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mt-3 mb-4">
          Comprehensive Ceiling Solutions
        </h2>
<p className="text-gray-600">From residential renovations to large-scale commercial projects, we offer a complete range of ceiling and drywall services tailored to your needs.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in fade-in-delay-1" style={{animationPlayState: 'running'}}>

<div className="group bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-all duration-300 border border-transparent hover:border-emerald-100">
<div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
<svg className="lucide lucide-layers w-7 h-7 text-emerald-600 stroke-[1.5]" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Ceiling Installation</h3>
<p className="text-gray-600 mb-6 leading-relaxed">Expert installation of suspended ceilings, PVC ceilings, gypsum boards, and decorative ceiling systems for all property types.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-gray-500">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Suspended ceiling systems
            </li>
<li className="flex items-center gap-2 text-sm text-gray-500">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              PVC &amp; vinyl ceilings
            </li>
<li className="flex items-center gap-2 text-sm text-gray-500">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Coffered &amp; tray ceilings
            </li>
</ul>
</div>

<div className="group bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-all duration-300 border border-transparent hover:border-emerald-100">
<div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
<svg className="lucide lucide-layout-panel-top w-7 h-7 text-emerald-600 stroke-[1.5]" data-lucide="layout-panel-top" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Drywall Partitions</h3>
<p className="text-gray-600 mb-6 leading-relaxed">Professional drywall partition installation for offices, homes, and commercial spaces with sound insulation options.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-gray-500">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Office partitioning
            </li>
<li className="flex items-center gap-2 text-sm text-gray-500">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Soundproof walls
            </li>
<li className="flex items-center gap-2 text-sm text-gray-500">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Fire-rated systems
            </li>
</ul>
</div>

<div className="group bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-all duration-300 border border-transparent hover:border-emerald-100">
<div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
<svg className="lucide lucide-sparkles w-7 h-7 text-emerald-600 stroke-[1.5]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Decorative Features</h3>
<p className="text-gray-600 mb-6 leading-relaxed">Custom cornices, bulkheads, and decorative mouldings to add character and elegance to your spaces.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-gray-500">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Cornice installation
            </li>
<li className="flex items-center gap-2 text-sm text-gray-500">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Custom bulkheads
            </li>
<li className="flex items-center gap-2 text-sm text-gray-500">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Ceiling roses &amp; mouldings
            </li>
</ul>
</div>

<div className="group bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-all duration-300 border border-transparent hover:border-emerald-100">
<div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
<svg className="lucide lucide-wrench w-7 h-7 text-emerald-600 stroke-[1.5]" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Repairs &amp; Maintenance</h3>
<p className="text-gray-600 mb-6 leading-relaxed">Quick and efficient repairs for damaged ceilings, water damage restoration, and ongoing maintenance services.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-gray-500">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Crack repairs
            </li>
<li className="flex items-center gap-2 text-sm text-gray-500">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Water damage restoration
            </li>
<li className="flex items-center gap-2 text-sm text-gray-500">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Ceiling replacements
            </li>
</ul>
</div>

<div className="group bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-all duration-300 border border-transparent hover:border-emerald-100">
<div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
<svg className="lucide lucide-building-2 w-7 h-7 text-emerald-600 stroke-[1.5]" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Commercial Projects</h3>
<p className="text-gray-600 mb-6 leading-relaxed">Large-scale ceiling and drywall solutions for offices, retail spaces, hospitals, schools, and industrial facilities.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-gray-500">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Office fit-outs
            </li>
<li className="flex items-center gap-2 text-sm text-gray-500">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Retail installations
            </li>
<li className="flex items-center gap-2 text-sm text-gray-500">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Industrial ceilings
            </li>
</ul>
</div>

<div className="group bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-all duration-300 border border-transparent hover:border-emerald-100">
<div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
<svg className="lucide lucide-thermometer-sun w-7 h-7 text-emerald-600 stroke-[1.5]" data-lucide="thermometer-sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9a4 4 0 0 0-2 7.5"></path><path d="M12 3v2"></path><path d="m6.6 18.4-1.4 1.4"></path><path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path><path d="M4 13H2"></path><path d="M6.34 7.34 4.93 5.93"></path></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Insulation Services</h3>
<p className="text-gray-600 mb-6 leading-relaxed">Thermal and acoustic insulation solutions to improve energy efficiency and create comfortable environments.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-gray-500">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Thermal insulation
            </li>
<li className="flex items-center gap-2 text-sm text-gray-500">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Acoustic solutions
            </li>
<li className="flex items-center gap-2 text-sm text-gray-500">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Energy-efficient options
            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white" id="projects">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 fade-in" style={{animationPlayState: 'running'}}>
<div className="">
<span className="text-sm uppercase tracking-widest text-emerald-400 font-medium">Our Projects</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-3 mb-4">
            Featured Work
          </h2>
<p className="text-gray-400 max-w-lg">Explore our portfolio of completed projects showcasing our craftsmanship and attention to detail.</p>
</div>
<div className="mt-6 lg:mt-0">
<a className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors" href="#contact">
            Start Your Project
            <svg className="lucide lucide-arrow-right w-4 h-4 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in fade-in-delay-1" style={{animationPlayState: 'running'}}>

<div className="group relative overflow-hidden rounded-2xl">
<img alt="Residential Project" className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<span className="text-xs uppercase tracking-wider text-emerald-400 font-medium">Residential</span>
<h3 className="text-lg font-semibold mt-1">Sandton Private Residence</h3>
<p className="text-sm text-gray-400 mt-1">Complete ceiling renovation with decorative cornices</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl">
<img alt="Office Project" className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<span className="text-xs uppercase tracking-wider text-emerald-400 font-medium">Commercial</span>
<h3 className="text-lg font-semibold mt-1">Johannesburg Corporate Office</h3>
<p className="text-sm text-gray-400 mt-1">Suspended ceiling system with integrated lighting</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl">
<img alt="Modern Interior" className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<span className="text-xs uppercase tracking-wider text-emerald-400 font-medium">Residential</span>
<h3 className="text-lg font-semibold mt-1">Pretoria Family Home</h3>
<p className="text-sm text-gray-400 mt-1">Modern gypsum ceiling with bulkhead features</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl">
<img alt="Workspace" className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<span className="text-xs uppercase tracking-wider text-emerald-400 font-medium">Commercial</span>
<h3 className="text-lg font-semibold mt-1">Cape Town Tech Hub</h3>
<p className="text-sm text-gray-400 mt-1">Open-plan office with acoustic ceiling panels</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl">
<img alt="Interior Design" className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<span className="text-xs uppercase tracking-wider text-emerald-400 font-medium">Residential</span>
<h3 className="text-lg font-semibold mt-1">Durban Beach House</h3>
<p className="text-sm text-gray-400 mt-1">Coastal-resistant PVC ceiling installation</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl">
<img alt="Restaurant" className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<span className="text-xs uppercase tracking-wider text-emerald-400 font-medium">Hospitality</span>
<h3 className="text-lg font-semibold mt-1">Stellenbosch Restaurant</h3>
<p className="text-sm text-gray-400 mt-1">Custom decorative ceiling with ambient lighting</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-emerald-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 fade-in" style={{animationPlayState: 'running'}}>
<span className="text-sm uppercase tracking-widest text-emerald-600 font-medium">Testimonials</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mt-3">
          What Our Clients Say
        </h2>
</div>
<div className="grid md:grid-cols-3 gap-8 fade-in fade-in-delay-1" style={{animationPlayState: 'running'}}>
<div className="bg-white rounded-2xl p-8 shadow-sm">
<div className="flex items-center gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-600 leading-relaxed mb-6">"Prial Ceilings transformed our office space completely. Their team was professional, punctual, and delivered exceptional quality. Highly recommended!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
<span className="text-sm font-semibold text-emerald-600">TM</span>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Thabo Mokoena</div>
<div className="text-xs text-gray-500">Business Owner, Johannesburg</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-8 shadow-sm">
<div className="flex items-center gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-600 leading-relaxed mb-6">"From quotation to completion, the entire process was seamless. The ceiling in our home looks absolutely stunning. Great value for money!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
<span className="text-sm font-semibold text-emerald-600">SN</span>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Sarah Nkosi</div>
<div className="text-xs text-gray-500">Homeowner, Pretoria</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-8 shadow-sm">
<div className="flex items-center gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-600 leading-relaxed mb-6">"We've used Prial Ceilings for multiple commercial projects. Their consistency and attention to detail make them our go-to ceiling contractors."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
<span className="text-sm font-semibold text-emerald-600">JV</span>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Johan van der Berg</div>
<div className="text-xs text-gray-500">Property Developer, Cape Town</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">
<div className="fade-in" style={{animationPlayState: 'running'}}>
<span className="text-sm uppercase tracking-widest text-emerald-600 font-medium">Contact Us</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mt-3 mb-6">
            Get Your Free Quote Today
          </h2>
<p className="text-gray-600 leading-relaxed mb-8">
            Ready to transform your space? Contact us for a free consultation and quotation. Our team is ready to help bring your vision to life.
          </p>
<div className="space-y-6 mb-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-phone w-5 h-5 text-emerald-600 stroke-[1.5]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<h3 className="font-medium text-gray-900">Phone</h3>
<p className="text-gray-600">+27 11 123 4567</p>
<p className="text-gray-600">+27 82 123 4567</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-mail w-5 h-5 text-emerald-600 stroke-[1.5]" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<h3 className="font-medium text-gray-900">Email</h3>
<p className="text-gray-600">info@prialceilings.co.za</p>
<p className="text-gray-600">quotes@prialceilings.co.za</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-map-pin w-5 h-5 text-emerald-600 stroke-[1.5]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<h3 className="font-medium text-gray-900">Location</h3>
<p className="text-gray-600">123 Industrial Road</p>
<p className="text-gray-600">Johannesburg, Gauteng, South Africa</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-clock w-5 h-5 text-emerald-600 stroke-[1.5]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<h3 className="font-medium text-gray-900">Business Hours</h3>
<p className="text-gray-600">Mon - Fri: 7:00 AM - 5:00 PM</p>
<p className="text-gray-600">Sat: 8:00 AM - 1:00 PM</p>
</div>
</div>
</div>
</div>

<div className="fade-in fade-in-delay-1" style={{animationPlayState: 'running'}}>
<form className="bg-gray-50 rounded-2xl p-8">
<h3 className="text-xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
<div className="space-y-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all" placeholder="Your name" type="text"/>
</div>
<div className="grid sm:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all" placeholder="+27 XX XXX XXXX" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
<select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-white">
<option>Select a service</option>
<option>Ceiling Installation</option>
<option>Drywall Partitions</option>
<option>Decorative Features</option>
<option>Repairs &amp; Maintenance</option>
<option>Commercial Project</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all resize-none" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/25" type="submit">
                Send Message
              </button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-gray-900 text-white py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div>
<a className="text-xl font-semibold tracking-tight mb-4 inline-block" href="#home">
<span className="text-emerald-400">prial</span>ceilings
          </a>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
            South Africa's trusted experts in ceiling and drywall installation. Quality craftsmanship since 2009.
          </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5 stroke-[1.5]" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5 stroke-[1.5]" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5 stroke-[1.5]" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
<div>
<h4 className="font-semibold mb-4">Quick Links</h4>
<ul className="space-y-3">
<li><a className="text-gray-400 hover:text-emerald-400 text-sm transition-colors" href="#home">Home</a></li>
<li><a className="text-gray-400 hover:text-emerald-400 text-sm transition-colors" href="#about">About Us</a></li>
<li><a className="text-gray-400 hover:text-emerald-400 text-sm transition-colors" href="#services">Services</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4">Services</h4>
<ul className="space-y-3">
<li><a className="text-gray-400 hover:text-emerald-400 text-sm transition-colors" href="#services">Ceiling Installation</a></li>
<li><a className="text-gray-400 hover:text-emerald-400 text-sm transition-colors" href="#services">Drywall Partitions</a></li>
<li><a className="text-gray-400 hover:text-emerald-400 text-sm transition-colors" href="#services">Decorative Features</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4">Contact Info</h4>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-gray-400 text-sm">
<svg className="lucide lucide-phone w-4 h-4 text-emerald-400 stroke-[1.5]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
              +27 11 123 4567
            </li>
<li className="flex items-center gap-2 text-gray-400 text-sm">
<svg className="lucide lucide-mail w-4 h-4 text-emerald-400 stroke-[1.5]" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
              info@prialceilings.co.za
            </li>
<li className="flex items-start gap-2 text-gray-400 text-sm">
<svg className="lucide lucide-map-pin w-4 h-4 text-emerald-400 stroke-[1.5] mt-0.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              123 Industrial Road, Johannesburg, South Africa
            </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-gray-500 text-sm">© 2025 Prial Ceilings. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-gray-500 hover:text-gray-400 text-sm transition-colors" href="#">Privacy Policy</a>
<a className="text-gray-500 hover:text-gray-400 text-sm transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
