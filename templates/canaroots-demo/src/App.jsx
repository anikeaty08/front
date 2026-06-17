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



document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const menuBtn = document.querySelector('header button.md\\:hidden');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
if (menuBtn && mobileMenu && closeMenu) {
  menuBtn.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
  closeMenu.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) mobileMenu.classList.add('hidden');
  });
}

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
      

<header className="sticky z-50 bg-white/95 border-neutral-200 border-b top-0 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex items-center justify-center bg-red-600 text-white font-bold text-xl px-3 py-2 rounded" style={{letterSpacing: '-0.02em'}}>CR</div>
<div className="flex flex-col leading-tight">
<span className="font-semibold text-neutral-900 tracking-tight">CanaRoots</span>
<span className="text-xs text-neutral-600">Renovation</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-neutral-900 transition font-medium text-neutral-700" href="/home">Home</a>
<a className="hover:text-neutral-900 transition font-medium text-neutral-700" href="/about">About</a>
<a className="hover:text-neutral-900 transition font-medium text-neutral-700" href="/services">Services</a>
<a className="hover:text-neutral-900 transition font-medium text-neutral-700" href="/gallery">Gallery</a>
<a className="text-neutral-700 hover:text-neutral-900 transition font-medium" href="#blog">Blog</a>
<a className="hover:text-neutral-900 transition font-medium text-neutral-700" href="/contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden lg:flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition" href="tel:xxx-xxx-xxxx">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
(XXX) XXX-XXXX
</a>
<a className="hidden sm:inline-flex items-center justify-center hover:bg-red-700 transition text-sm font-medium text-white bg-red-600 rounded-lg pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm" href="/contact">
Free Consultation
</a>
<button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-neutral-700 hover:bg-neutral-100 transition">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<section className="sm:py-24 lg:py-32 bg-gradient-to-b from-neutral-50 to-white pt-16 pb-16 relative" id="home">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="">
<div className="inline-flex gap-2 text-sm font-medium text-red-700 bg-red-50 border-red-100 border rounded-full mb-6 pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center">
<img alt="Canadian Flag" className="w-5 h-3.5 object-cover rounded-sm" src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=32&amp;h=32&amp;fit=crop"/>
Proudly Canadian
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-900 mb-6 leading-tight tracking-tight">
The home you've worked so hard for deserves the best improvements.
</h1>
<p className="text-lg sm:text-xl text-neutral-600 mb-6 leading-relaxed">
Transform your space with licensed experts who treat your home like their own — backed by Ontario Building Codes and a 2-Year Labour Warranty.
</p>
<p className="text-base text-neutral-700 mb-8 font-medium">
Proudly Canadian — built on generations of craftsmanship and integrity.
</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center hover:bg-red-700 transition hover:shadow-xl text-base font-medium text-white bg-red-600 rounded-lg pt-3.5 pr-6 pb-3.5 pl-6 shadow-lg" href="/contact">
Book Your Free Consultation
<svg className="lucide lucide-arrow-right w-5 h-5 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white text-neutral-900 text-base font-medium hover:bg-neutral-50 transition border border-neutral-200" href="#about">
Learn More
</a>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-neutral-200">
<img alt="Modern kitchen renovation" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&amp;h=600&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-neutral-200 max-w-xs hidden lg:block">
<div className="flex items-center gap-3 mb-2">
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50">
<svg className="lucide lucide-shield-check w-5 h-5 text-red-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<div className="text-2xl font-semibold text-neutral-900 tracking-tight">2-Year</div>
<div className="text-sm text-neutral-600">Labour Warranty</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-white border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-6 tracking-tight">
Built on Integrity, Backed by Standards.
</h2>
<p className="text-lg text-neutral-600 leading-relaxed">
At CanaRoots, every renovation begins with honesty, precision, and respect for your home. As a proudly Canadian company, our work reflects values passed down through generations — craftsmanship, trust, and pride in doing things the right way.
</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200 hover:border-red-200 hover:shadow-lg transition">
<div className="flex items-center justify-center w-14 h-14 rounded-xl bg-red-50 mb-6">
<svg className="lucide lucide-badge-check w-7 h-7 text-red-600" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3">Licensed &amp; Insured</h3>
<p className="text-neutral-600 leading-relaxed">
Fully licensed professionals with comprehensive insurance coverage for your complete peace of mind.
</p>
</div>
<div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200 hover:border-red-200 hover:shadow-lg transition">
<div className="flex items-center justify-center w-14 h-14 rounded-xl bg-red-50 mb-6">
<svg className="lucide lucide-file-check w-7 h-7 text-red-600" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3">Ontario Building Code Compliant</h3>
<p className="text-neutral-600 leading-relaxed">
Every project meets or exceeds Ontario Building Code requirements for safety and quality.
</p>
</div>
<div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200 hover:border-red-200 hover:shadow-lg transition">
<div className="flex items-center justify-center w-14 h-14 rounded-xl bg-red-50 mb-6">
<svg className="lucide lucide-shield w-7 h-7 text-red-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3">2-Year Labour Warranty</h3>
<p className="text-neutral-600 leading-relaxed">
Stand behind our work with confidence — comprehensive warranty coverage on all labour.
</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-neutral-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-6 tracking-tight">
Renovations done right — with clarity and care.
</h2>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div className="bg-white rounded-xl p-8 border border-neutral-200 hover:shadow-lg transition">
<div className="flex items-start gap-4">
<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-50 flex-shrink-0">
<svg className="lucide lucide-file-text w-6 h-6 text-red-600" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Transparent Quotes</h3>
<p className="text-neutral-600 leading-relaxed">Clear scopes, fair pricing, no surprises.</p>
</div>
</div>
</div>
<div className="bg-white rounded-xl p-8 border border-neutral-200 hover:shadow-lg transition">
<div className="flex items-start gap-4">
<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-50 flex-shrink-0">
<svg className="lucide lucide-clipboard-list w-6 h-6 text-red-600" data-lucide="clipboard-list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Professional Project Management</h3>
<p className="text-neutral-600 leading-relaxed">Organized timelines and proactive updates.</p>
</div>
</div>
</div>
<div className="bg-white rounded-xl p-8 border border-neutral-200 hover:shadow-lg transition">
<div className="flex items-start gap-4">
<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-50 flex-shrink-0">
<svg className="lucide lucide-package w-6 h-6 text-red-600" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Quality Materials</h3>
<p className="text-neutral-600 leading-relaxed">Durable finishes from trusted suppliers.</p>
</div>
</div>
</div>
<div className="bg-white rounded-xl p-8 border border-neutral-200 hover:shadow-lg transition">
<div className="flex items-start gap-4">
<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-50 flex-shrink-0">
<svg className="lucide lucide-home w-6 h-6 text-red-600" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Respect for Your Home</h3>
<p className="text-neutral-600 leading-relaxed">Clean job sites and careful workmanship.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-4 tracking-tight">
Our Expertise
</h2>
<p className="text-lg text-neutral-600">
From kitchens to full-home transformations, CanaRoots delivers craftsmanship that lasts.
</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group bg-white rounded-xl overflow-hidden border border-neutral-200 hover:shadow-xl transition">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Kitchen renovation" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&amp;h=450&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Kitchen Renovations</h3>
<p className="text-neutral-600 mb-4 text-sm">Modern, functional, and built for family living.</p>
<a className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700 transition" href="#quote">
Request a Quote
<svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="group bg-white rounded-xl overflow-hidden border border-neutral-200 hover:shadow-xl transition">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Bathroom renovation" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&amp;h=450&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Bathroom Renovations</h3>
<p className="text-neutral-600 mb-4 text-sm">Elegant spaces designed for comfort and relaxation.</p>
<a className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700 transition" href="#quote">
Request a Quote
<svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="group bg-white rounded-xl overflow-hidden border border-neutral-200 hover:shadow-xl transition">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Basement renovation" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=600&amp;h=450&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Basement Renovations</h3>
<p className="text-neutral-600 mb-4 text-sm">Turn unused space into a warm and livable area.</p>
<a className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700 transition" href="#quote">
Request a Quote
<svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="group bg-white rounded-xl overflow-hidden border border-neutral-200 hover:shadow-xl transition">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Full home renovation" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&amp;h=450&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Full Home Transformations</h3>
<p className="text-neutral-600 mb-4 text-sm">Reimagine your entire space with confidence.</p>
<a className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700 transition" href="#quote">
Request a Quote
<svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-neutral-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-4 tracking-tight">
A structured approach for better results.
</h2>
</div>
<div className="grid md:grid-cols-4 gap-8">
<div className="relative">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white font-semibold text-lg mb-4">1</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Consultation</h3>
<p className="text-neutral-600">We listen to your goals and assess your space.</p>
<div className="hidden md:block absolute top-6 left-12 w-full h-0.5 bg-neutral-200" style={{width: 'calc(100% + 2rem)'}}></div>
</div>
<div className="relative">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white font-semibold text-lg mb-4">2</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Planning</h3>
<p className="text-neutral-600">Detailed quotes, realistic timelines, and clear design direction.</p>
<div className="hidden md:block absolute top-6 left-12 w-full h-0.5 bg-neutral-200" style={{width: 'calc(100% + 2rem)'}}></div>
</div>
<div className="relative">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white font-semibold text-lg mb-4">3</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Build</h3>
<p className="text-neutral-600">Licensed trades deliver safe, code-compliant work.</p>
<div className="hidden md:block absolute top-6 left-12 w-full h-0.5 bg-neutral-200" style={{width: 'calc(100% + 2rem)'}}></div>
</div>
<div>
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white font-semibold text-lg mb-4">4</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Aftercare</h3>
<p className="text-neutral-600">Your 2-Year Labour Warranty ensures lasting peace of mind.</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-12">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-4 tracking-tight">
See what your next project could look like.
</h2>
<p className="text-lg text-neutral-600">
A curated selection of beautifully finished spaces to inspire your renovation.
</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
<div className="aspect-[4/3] rounded-xl overflow-hidden border border-neutral-200">
<img alt="Modern living room" className="w-full h-full object-cover hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&amp;h=450&amp;fit=crop"/>
</div>
<div className="aspect-[4/3] rounded-xl overflow-hidden border border-neutral-200">
<img alt="Kitchen detail" className="w-full h-full object-cover hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&amp;h=450&amp;fit=crop"/>
</div>
<div className="aspect-[4/3] rounded-xl overflow-hidden border border-neutral-200">
<img alt="Bedroom renovation" className="w-full h-full object-cover hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&amp;h=450&amp;fit=crop"/>
</div>
<div className="aspect-[4/3] rounded-xl overflow-hidden border border-neutral-200">
<img alt="Bathroom vanity" className="w-full h-full object-cover hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&amp;h=450&amp;fit=crop"/>
</div>
<div className="aspect-[4/3] rounded-xl overflow-hidden border border-neutral-200">
<img alt="Home office" className="w-full h-full object-cover hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&amp;h=450&amp;fit=crop"/>
</div>
<div className="aspect-[4/3] rounded-xl overflow-hidden border border-neutral-200">
<img alt="Dining room" className="w-full h-full object-cover hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&amp;h=450&amp;fit=crop"/>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center hover:bg-neutral-50 transition text-base font-medium text-neutral-900 bg-white border-neutral-200 border rounded-lg pt-3 pr-6 pb-3 pl-6" href="/gallery">
Explore the Gallery
<svg className="lucide lucide-arrow-right w-5 h-5 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="sm:py-24 bg-neutral-50 pt-16 pb-16" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-6 tracking-tight">
Proudly Canadian, built on family values.
</h2>
<p className="text-lg text-neutral-600 leading-relaxed mb-6">
You've worked hard for your home — and you deserve professionals who value it as much as you do. CanaRoots Renovation was founded on Canadian roots and family values.
</p>
<p className="text-lg text-neutral-600 leading-relaxed">
We bring craftsmanship, transparency, and care to every renovation — because integrity is in our DNA.
</p>
</div>
<div className="relative">

<div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-neutral-200">
<img alt="Construction professional with hard hat draped in the Canadian flag under a blue sky" className="object-[65%_center] w-full h-full object-cover" loading="lazy" src="https://labs.google/fx/tools/whisk/share/4338g2ief0000?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-4 tracking-tight">
What Homeowners Are Saying
</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200">
<div className="flex items-center gap-1 mb-4">
<svg className="lucide lucide-star w-5 h-5 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 ...0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-700 leading-relaxed mb-6">CanaRoots transformed our kitchen on time and on budget. Their attention to detail and respect for our home really stood out.</p>
<div className="flex items-center gap-3">
<img alt="Portrait of homeowner Sarah L." className="w-10 h-10 rounded-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=64&amp;h=64&amp;fit=crop"/>
<div>
<p className="font-semibold text-neutral-900">Sarah L.</p>
<p className="text-sm text-neutral-600">Oakville, ON</p>
</div>
</div>
</div>
<div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200">
<div className="flex items-center gap-1 mb-4">
<svg className="lucide lucide-star w-5 h-5 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-700 leading-relaxed mb-6">Our bathroom refresh is stunning. The team kept the space clean and communicated every step of the way.</p>
<div className="flex items-center gap-3">
<img alt="Portrait of homeowner Daniel R." className="w-10 h-10 rounded-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=64&amp;h=64&amp;fit=crop"/>
<div>
<p className="font-semibold text-neutral-900">Daniel R.</p>
<p className="text-sm text-neutral-600">Mississauga, ON</p>
</div>
</div>
</div>
<div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200">
<div className="flex items-center gap-1 mb-4">
<svg className="lucide lucide-star w-5 h-5 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-700 leading-relaxed mb-6">We finished our basement with CanaRoots and it feels like a brand-new home. Excellent craftsmanship and zero stress.</p>
<div className="flex items-center gap-3">
<img alt="Portrait of homeowner Priya K." className="w-10 h-10 rounded-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64&amp;h=64&amp;fit=crop"/>
<div>
<p className="font-semibold text-neutral-900">Priya K.</p>
<p className="text-sm text-neutral-600">Brampton, ON</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-gradient-to-b from-neutral-50 to-white border-t border-neutral-200" id="consultation">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-4 border border-red-100">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 2l-7 20-4-9-9-4 20-7z"></path></svg>
Fast, friendly, obligation-free
</div>
<h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4 tracking-tight">Get your free consultation and quote</h2>
<p className="text-neutral-600 mb-6">Tell us about your project goals, budget, and timeline. We’ll reply within one business day.</p>
<ul className="space-y-3 text-neutral-700 mb-8">
<li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-semibold mt-0.5">✓</span> Licensed and insured trades</li>
<li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-semibold mt-0.5">✓</span> Transparent, itemized quotes</li>
<li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-semibold mt-0.5">✓</span> 2-Year Labour Warranty</li>
</ul>
<div className="flex items-center gap-6">
<div className="flex -space-x-2">
<img alt="Customer avatar 1" className="w-8 h-8 rounded-full border border-white shadow" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=40&amp;h=40&amp;fit=crop"/>
<img alt="Customer avatar 2" className="w-8 h-8 rounded-full border border-white shadow" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=40&amp;h=40&amp;fit=crop"/>
<img alt="Customer avatar 3" className="w-8 h-8 rounded-full border border-white shadow" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40&amp;h=40&amp;fit=crop"/>
</div>
<p className="text-sm text-neutral-600">Hundreds of happy homeowners</p>
</div>
</div>
<div className="bg-white rounded-2xl border border-neutral-200 shadow-lg p-6 sm:p-8">
<form action="#" aria-label="Free consultation form" className="space-y-5" method="post">
<div className="grid sm:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-neutral-800 mb-1.5" htmlFor="name">Full name</label>
<input className="w-full rounded-lg border-neutral-300 focus:border-red-500 focus:ring-red-500 placeholder-neutral-400" id="name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-neutral-800 mb-1.5" htmlFor="email">Email</label>
<input className="w-full rounded-lg border-neutral-300 focus:border-red-500 focus:ring-red-500 placeholder-neutral-400" id="email" name="email" placeholder="jane@email.com" required="" type="email"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-5">
<div className="">
<label className="block text-sm font-medium text-neutral-800 mb-1.5" htmlFor="phone">Phone</label>
<input className="w-full rounded-lg border-neutral-300 focus:border-red-500 focus:ring-red-500 placeholder-neutral-400" id="phone" inputmode="tel" name="phone" placeholder="(555) 555-5555" type="tel"/>
</div>
<div className="">
<label className="block text-sm font-medium text-neutral-800 mb-1.5" htmlFor="project">Project type</label>
<select className="w-full rounded-lg border-neutral-300 focus:border-red-500 focus:ring-red-500" id="project" name="project">
<option>Kitchen</option>
<option>Bathroom</option>
<option>Basement</option>
<option>Full Home</option>
<option>Other</option>
</select>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-5">
<div className="">
<label className="block text-sm font-medium text-neutral-800 mb-1.5" htmlFor="location">City</label>
<input className="w-full rounded-lg border-neutral-300 focus:border-red-500 focus:ring-red-500 placeholder-neutral-400" id="location" name="location" placeholder="Toronto" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-800 mb-1.5" htmlFor="timeline">Timeline</label>
<select className="w-full rounded-lg border-neutral-300 focus:border-red-500 focus:ring-red-500" id="timeline" name="timeline">
<option>ASAP</option>
<option>1–3 months</option>
<option>3–6 months</option>
<option>6+ months</option>
</select>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-neutral-800 mb-1.5" htmlFor="message">Tell us about your project</label>
<textarea className="w-full rounded-lg border-neutral-300 focus:border-red-500 focus:ring-red-500 placeholder-neutral-400" id="message" name="message" placeholder="Scope, style, budget range..." rows="4"></textarea>
</div>
<div className="flex items-start gap-3">
<input className="mt-1 rounded border-neutral-300 text-red-600 focus:ring-red-500" id="consent" name="consent" required="" type="checkbox"/>
<label className="text-sm text-neutral-700" htmlFor="consent">I agree to be contacted about my project.</label>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition shadow-md" type="submit">
Request Free Consultation
</button>
<a className="inline-flex items-center text-sm font-medium text-neutral-700 hover:text-neutral-900" href="tel:xxx-xxx-xxxx">
<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
Or call us directly
</a>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-white" id="blog">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-12">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-4 tracking-tight">From the CanaRoots Journal</h2>
<p className="text-lg text-neutral-600">Guides, checklists, and inspiration to plan your next renovation.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<article className="group bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition">
<a className="block" href="#">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Choosing finishes for a modern kitchen" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&amp;h=500&amp;fit=crop"/>
</div>
<div className="p-6">
<p className="text-xs font-semibold text-red-600 mb-2">Planning</p>
<h3 className="text-lg font-semibold text-neutral-900 group-hover:text-red-700 transition">How to Budget for a Kitchen Renovation in Ontario</h3>
<p className="text-sm text-neutral-600 mt-2">Understand cost drivers, timelines, and where to invest for long-term value.</p>
</div>
</a>
</article>
<article className="group bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition">
<a className="block" href="#">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Contractor reviewing building plans" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-6">
<p className="text-xs font-semibold text-red-600 mb-2">Code &amp; Compliance</p>
<h3 className="text-lg font-semibold text-neutral-900 group-hover:text-red-700 transition">Ontario Building Code: What Homeowners Should Know</h3>
<p className="text-sm text-neutral-600 mt-2">A practical overview of permits, inspections, and safe construction practices.</p>
</div>
</a>
</article>
<article className="group bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition">
<a className="block" href="#">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Cozy finished basement family room" className="group-hover:scale-105 transition duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-6">
<p className="text-xs font-semibold text-red-600 mb-2">Inspiration</p>
<h3 className="text-lg font-semibold text-neutral-900 group-hover:text-red-700 transition">Basement Ideas to Add Living Space and Value</h3>
<p className="text-sm text-neutral-600 mt-2">Design concepts to turn unused square footage into your favourite room.</p>
</div>
</a>
</article>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-neutral-50" id="gallery-full">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-8">
<h2 className="text-3xl font-semibold text-neutral-900 tracking-tight">Project Gallery</h2>
<a className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700" href="#consultation">
Book a Consultation
<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square rounded-lg overflow-hidden border border-neutral-200">
<img alt="Tile work detail" className="w-full h-full object-cover hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden border border-neutral-200">
<img alt="Custom wood cabinetry" className="w-full h-full object-cover hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1501183638710-841dd1904471?w=600&amp;h=600&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden border border-neutral-200">
<img alt="Open concept dining" className="w-full h-full object-cover hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&amp;h=600&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden border border-neutral-200">
<img alt="Spa-like bathroom" className="w-full h-full object-cover hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 bg-white">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="grid md:grid-cols-4 gap-10">
<div className="">
<div className="flex items-center gap-2 mb-4">
<div className="flex items-center justify-center bg-red-600 text-white font-bold text-xl px-3 py-2 rounded" style={{letterSpacing: '-0.02em'}}></div>
<div className="flex flex-col leading-tight">
<span className="font-semibold text-neutral-900 tracking-tight">CanaRoots</span>
<span className="text-xs text-neutral-600">Renovation</span>
</div>
</div>
<p className="text-sm text-neutral-600 mb-4">Canadian craftsmanship, transparent process, and renovations that stand
        the test of time.</p>
<div className="flex items-center gap-3 text-sm text-neutral-700">
<svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92V19a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 5.18 2 2 0 0 1 4 3h2.09a2 2 0 0 1 2 1.72c.12.81.3 1.6.54 2.36a2 2 0 0 1-.45 2.11L7.1 10.91a16 16 0 0 0 6 6l1.72-1.08a2 2 0 0 1 2.11-.45c.76.24 1.55.42 2.36.54A2 2 0 0 1 22 16.92z">
</path>
</svg>
<a className="hover:text-neutral-900" href="tel:xxx-xxx-xxxx">(XXX) XXX-XXXX</a>
</div>
</div>
<div>
<p className="text-sm font-semibold text-neutral-900 mb-4">Services</p>
<ul className="space-y-2 text-sm text-neutral-700">
<li><a className="hover:text-neutral-900" href="#services">Kitchen Renovations</a></li>
<li><a className="hover:text-neutral-900" href="#services">Bathroom Renovations</a></li>
<li><a className="hover:text-neutral-900" href="#services">Basement Renovations</a></li>
</ul>
</div>
<div className="">
<p className="text-sm font-semibold text-neutral-900 mb-4">Company</p>
<ul className="space-y-2 text-sm text-neutral-700">
<li><a className="hover:text-neutral-900" href="#about">About</a></li>
<li><a className="hover:text-neutral-900" href="#blog">Blog</a></li>
<li><a className="hover:text-neutral-900" href="#gallery">Gallery</a></li>
</ul>
</div>
<div>
<p className="text-sm font-semibold text-neutral-900 mb-4">Newsletter</p>
<p className="text-sm text-neutral-600 mb-3">Get renovation tips and project ideas quarterly.</p>
<form className="flex gap-2">
<label className="sr-only" htmlFor="newsletter">Email address</label>
<input className="w-full rounded-lg border-neutral-300 focus:border-red-500 focus:ring-red-500 text-sm px-3 py-2" id="newsletter" placeholder="you@email.com" required="" type="email"/>
<button className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition" type="submit">Subscribe</button>
</form>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-200 pt-6">
<p className="text-xs text-neutral-500">© <span id="year">2025</span> CanaRoots Renovation. All rights reserved.</p>
<ul className="flex items-center gap-4 text-xs text-neutral-600">
<li><a className="hover:text-neutral-900" href="#">Privacy</a></li>
<li><a className="hover:text-neutral-900" href="#">Terms</a></li>
<li><a className="hover:text-neutral-900" href="#">Accessibility</a></li>
</ul>
</div>
</div>
</footer>

<div className="fixed inset-0 z-40 hidden" id="mobileMenu">
<div aria-hidden="true" className="absolute inset-0 bg-black/30"></div>
<nav className="absolute top-0 right-0 h-full w-72 bg-white shadow-xl p-6">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<div className="flex items-center justify-center bg-red-600 text-white font-bold text-xl px-3 py-2 rounded">CR</div>
<span className="font-semibold">CanaRoots</span>
</div>
<button className="inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-neutral-100" id="closeMenu">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<ul className="space-y-4 text-sm">
<li><a className="block hover:text-neutral-900" href="/home">Home</a></li>
<li><a className="block hover:text-neutral-900" href="/about">About</a></li>
<li><a className="block hover:text-neutral-900" href="/services">Services</a></li>
</ul>
</nav>
</div>


    </>
  );
}
