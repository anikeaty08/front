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



      // Init icons with stroke width 1.5
      window.lucide && window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
          const icon = menuBtn.querySelector('[data-lucide]');
          if (icon) {
            icon.setAttribute('data-lucide', mobileMenu.classList.contains('hidden') ? 'menu' : 'x');
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          }
        });
        mobileMenu.querySelectorAll('a.mobile-link').forEach(link => {
          link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = menuBtn.querySelector('[data-lucide]');
            if (icon) {
              icon.setAttribute('data-lucide', 'menu');
              lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            }
          });
        });
      }

      // Active nav highlight on scroll
      const sections = ['home','services','projects','about','testimonials','contact'];
      const navLinks = document.querySelectorAll('a.nav-link');
      const mobileLinks = document.querySelectorAll('a.mobile-link');
      const setActive = (id) => {
        [...navLinks, ...mobileLinks].forEach(a => {
          const isActive = a.getAttribute('href') === '#' + id;
          a.classList.toggle('text-slate-900', isActive);
          a.classList.toggle('text-slate-700', !isActive);
          a.classList.toggle('font-medium', isActive);
        });
      };
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      }, { threshold: 0.6 });
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) obs.observe(el);
      });

      // Quote form -> WhatsApp compose
      const form = document.getElementById('quoteForm');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const name = document.getElementById('name').value.trim();
          const phone = document.getElementById('phone').value.trim();
          const suburb = document.getElementById('suburb').value.trim();
          const service = document.getElementById('service').value;
          const details = document.getElementById('details').value.trim();
          const msg = `Hello Mokoena Plumbing,%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AArea: ${encodeURIComponent(suburb)}%0AService: ${encodeURIComponent(service)}%0ADetails: ${encodeURIComponent(details || 'N/A')}`;
          const wa = `https://wa.me/27796543210?text=${msg}`;
          window.open(wa, '_blank');
        });
      }

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();
    
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
      

<div className="w-full bg-slate-50 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
<p className="text-xs sm:text-sm text-slate-600 flex items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4 text-teal-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
          Licensed &amp; Insured • Same-day call-outs in Soshanguve
        </p>
<div className="hidden sm:flex items-center gap-5">
<a className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2" href="tel:+27120001234">
<svg className="lucide lucide-phone w-4 h-4 text-teal-600" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
            012 000 1234 (Office)
          </a>
<a className="text-xs sm:text-sm text-teal-700 hover:text-teal-900 transition-colors flex items-center gap-2" href="https://wa.me/27796543210?text=Hello%20Mokoena%20Plumbing%2C%20I%E2%80%99d%20like%20a%20quick%20quote%20please." target="_blank">
<svg className="lucide lucide-message-circle w-4 h-4 text-teal-600" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
            WhatsApp: 079 654 3210
          </a>
</div>
</div>
</div>

<header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="group inline-flex items-center gap-3" href="#home">
<div className="h-9 w-9 rounded-md bg-teal-600 text-white flex items-center justify-center ring-1 ring-inset ring-teal-700/40">
<span className="text-sm font-semibold tracking-tight">MP</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-base font-semibold tracking-tight text-slate-900">Mokoena Plumbing</span>
<span className="text-[11px] text-slate-500 -mt-0.5">Soshanguve • Est. 2016</span>
</div>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="nav-link text-sm hover:text-slate-900 transition-colors" href="#home">Home</a>
<a className="nav-link text-sm hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="nav-link text-sm hover:text-slate-900 transition-colors text-slate-700" href="#projects">Projects</a>
<a className="nav-link text-sm hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="nav-link text-sm hover:text-slate-900 transition-colors" href="#testimonials">Testimonials</a>
<a className="nav-link text-sm text-slate-700 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition-colors" href="tel:+27796543210">
<svg className="lucide lucide-phone-call w-4 h-4 text-teal-700" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
            Call
          </a>
<a className="inline-flex items-center gap-2 rounded-md bg-teal-600 px-3.5 py-2 text-sm font-semibold text-white hover:bg-teal-700 ring-1 ring-inset ring-teal-700/40" href="#quote">
<svg className="lucide lucide-clipboard-list w-4 h-4 text-white" data-lucide="clipboard-list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
            Get a Quote
          </a>
</div>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors" id="menuBtn">
<svg className="lucide lucide-menu w-5 h-5 text-slate-700" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
<div className="md:hidden hidden border-t border-slate-200 bg-white" id="mobileMenu">
<div className="px-4 py-3 flex flex-col gap-2">
<a className="mobile-link block px-3 py-2 rounded hover:bg-slate-50 text-sm text-slate-800" href="#home">Home</a>
<a className="mobile-link block px-3 py-2 rounded hover:bg-slate-50 text-sm text-slate-800" href="#services">Services</a>
<a className="mobile-link block px-3 py-2 rounded hover:bg-slate-50 text-sm text-slate-800 text-slate-700" href="#projects">Projects</a>
<a className="mobile-link block px-3 py-2 rounded hover:bg-slate-50 text-sm text-slate-800" href="#about">About</a>
<a className="mobile-link block px-3 py-2 rounded hover:bg-slate-50 text-sm text-slate-800" href="#testimonials">Testimonials</a>
<a className="mobile-link block px-3 py-2 rounded hover:bg-slate-50 text-sm text-slate-800 text-slate-700" href="#contact">Contact</a>
<div className="pt-2 mt-2 border-t border-slate-200 flex items-center gap-2">
<a className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-teal-600 px-3.5 py-2 text-sm font-semibold text-white hover:bg-teal-700 ring-1 ring-inset ring-teal-700/40" href="https://wa.me/27796543210?text=Hello%20Mokoena%20Plumbing%2C%20I%E2%80%99d%20like%20a%20quick%20quote%20please." target="_blank">
<svg className="lucide lucide-message-circle w-4 h-4 text-white" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
              WhatsApp
            </a>
<a className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:border-slate-400" href="tel:+27796543210">
<svg className="lucide lucide-phone w-4 h-4 text-teal-700" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
              Call
            </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden" id="home">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 mb-4">
<svg className="lucide lucide-map-pin w-3.5 h-3.5 text-teal-700" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Soshanguve &amp; surrounds
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              Trusted plumbing for Soshanguve homes and businesses
            </h1>
<p className="mt-4 text-base sm:text-lg text-slate-600">
              Family-run, local, and reliable. From burst pipes and drain unblocking to solar geysers and renovations — we’ve kept water flowing for 8+ years.
            </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-700 ring-1 ring-inset ring-teal-700/40" href="https://wa.me/27796543210?text=Hello%20Mokoena%20Plumbing%2C%20I%20need%20help%20with%3A%20" target="_blank">
<svg className="lucide lucide-send w-4.5 h-4.5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                WhatsApp us now
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:border-slate-400" href="#quote">
<svg className="lucide lucide-clipboard-check w-4.5 h-4.5 text-teal-700" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
                Get a fast quote
              </a>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
<div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3">
<svg className="lucide lucide-clock w-5 h-5 text-teal-700" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div>
<p className="text-sm font-medium text-slate-900">24/7 Emergencies</p>
<p className="text-xs text-slate-500">Rapid response</p>
</div>
</div>
<div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3">
<svg className="lucide lucide-medal w-5 h-5 text-teal-700" data-lucide="medal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path><path d="M11 12 5.12 2.2"></path><path d="m13 12 5.88-9.8"></path><path d="M8 7h8"></path><circle cx="12" cy="17" r="5"></circle><path d="M12 18v-2h-.5"></path></svg>
<div>
<p className="text-sm font-medium text-slate-900">8+ Years</p>
<p className="text-xs text-slate-500">Local experience</p>
</div>
</div>
<div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3">
<svg className="lucide lucide-check-circle w-5 h-5 text-teal-700" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<div className="">
<p className="text-sm font-medium text-slate-900">Work Guaranteed</p>
<p className="text-xs text-slate-500">Quality parts</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-slate-200">
<img alt="Local plumber repairing a copper pipe" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1594761051656-a37da88b5f5b?w=1600&amp;q=80"/>
</div>
<div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-xl border border-slate-200 bg-white/90 backdrop-blur px-4 py-3 shadow-sm">
<svg className="lucide lucide-wrench w-5 h-5 text-teal-700" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
<div className="text-sm">
<p className="font-medium text-slate-900">Same-day call-outs</p>
<p className="text-xs text-slate-500">Soshanguve A–X</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="flex items-end justify-between gap-6 mb-8">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Plumbing services</h2>
<p className="mt-2 text-slate-600">Transparent pricing, quality parts, and a clean worksite — every time.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:border-slate-400" href="#quote">
<svg className="lucide lucide-file-plus w-4 h-4 text-teal-700" data-lucide="file-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M9 15h6"></path><path d="M12 18v-6"></path></svg>
            Request a quote
          </a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="h-10 w-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center ring-1 ring-inset ring-teal-200">
<i className="w-5 h-5" data-lucide="pipeline"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Drain unblocking</h3>
</div>
<p className="text-sm text-slate-600">Kitchen, bathroom, and mainline blockages cleared with rotary and high-pressure methods.</p>
<div className="mt-4 flex items-center justify-between text-sm">
<span className="text-slate-500">From R450 call-out</span>
<a className="text-teal-700 hover:text-teal-900 inline-flex items-center gap-1" href="https://wa.me/27796543210?text=Hi%2C%20I%20need%20help%20with%20a%20blocked%20drain." target="_blank">
                WhatsApp <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="h-10 w-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center ring-1 ring-inset ring-teal-200">
<svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Burst pipes</h3>
</div>
<p className="text-sm text-slate-600">Emergency isolation and repair of copper, PVC, and PEX pipes — day or night.</p>
<div className="mt-4 flex items-center justify-between text-sm">
<span className="text-slate-500">24/7 response</span>
<a className="text-teal-700 hover:text-teal-900 inline-flex items-center gap-1" href="tel:+27796543210">Call now <svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg></a>
</div>
</div>
<div className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="h-10 w-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center ring-1 ring-inset ring-teal-200">
<svg className="lucide lucide-sun w-5 h-5" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Geysers &amp; solar geysers</h3>
</div>
<p className="text-sm text-slate-600">Supply, install, and maintain electric and solar geysers with SANS-compliant valves and drip trays.</p>
<div className="mt-4 flex items-center justify-between text-sm">
<span className="text-slate-500">Finance available</span>
<a className="text-teal-700 hover:text-teal-900 inline-flex items-center gap-1" href="https://wa.me/27796543210?text=Hi%2C%20I%E2%80%99m%20interested%20in%20a%20solar%20geyser%20quote." target="_blank">Ask now <svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg></a>
</div>
</div>
<div className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="h-10 w-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center ring-1 ring-inset ring-teal-200">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Leak detection</h3>
</div>
<p className="text-sm text-slate-600">Non-invasive detection to save walls and gardens. Detailed reports provided.</p>
<div className="mt-4 flex items-center justify-between text-sm">
<span className="text-slate-500">Insurance-ready reports</span>
<a className="text-teal-700 hover:text-teal-900 inline-flex items-center gap-1" href="#quote">Get quote <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>
<div className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="h-10 w-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center ring-1 ring-inset ring-teal-200">
<svg className="lucide lucide-bath w-5 h-5" data-lucide="bath" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 4 8 6"></path><path d="M17 19v2"></path><path d="M2 12h20"></path><path d="M7 19v2"></path><path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Bathroom &amp; kitchen</h3>
</div>
<p className="text-sm text-slate-600">Renovations, mixer replacements, tiling coordination, and water-saving fittings.</p>
<div className="mt-4 flex items-center justify-between text-sm">
<span className="text-slate-500">Free site visit</span>
<a className="text-teal-700 hover:text-teal-900 inline-flex items-center gap-1" href="#quote">Plan project <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>
<div className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="h-10 w-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center ring-1 ring-inset ring-teal-200">
<svg className="lucide lucide-file-badge w-5 h-5" data-lucide="file-badge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.072"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m6.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88"></path><circle cx="5" cy="14" r="3"></circle></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">COCs &amp; maintenance</h3>
</div>
<p className="text-sm text-slate-600">Compliance certificates, sectional-title maintenance, and preventative service plans.</p>
<div className="mt-4 flex items-center justify-between text-sm">
<span className="text-slate-500">From R199/month</span>
<a className="text-teal-700 hover:text-teal-900 inline-flex items-center gap-1" href="https://wa.me/27796543210?text=Hi%2C%20please%20tell%20me%20about%20your%20maintenance%20plans." target="_blank">Enquire <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200" id="projects">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="flex items-end justify-between gap-6 mb-8">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Recent projects</h2>
<p className="mt-2 text-slate-600">Real work delivered in and around Soshanguve. Images are representative stock/illustrative.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:border-slate-400" href="#contact">
<svg className="lucide lucide-calendar-check-2 w-4 h-4 text-teal-700" data-lucide="calendar-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path><path d="M3 10h18"></path><path d="m16 20 2 2 4-4"></path></svg>
            Book a site visit
          </a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">

<article className="group rounded-xl border border-slate-200 overflow-hidden bg-white hover:border-slate-300 transition-colors">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Drain jetting equipment clearing a main sewer line" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" src="https://images.unsplash.com/photo-1697497709686-c433fce09de4?w=800&amp;q=80" style={{}}/>
</div>
<div className="p-4">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Unclogged main sewer line for Soshanguve Primary School</h3>
<p className="mt-1.5 text-sm text-slate-600">Deployed rotary snake and high-pressure jetting to clear a 45m blockage near the sports field. Prevented overflow and restored flow the same day.</p>
<div className="mt-3 flex items-center justify-between text-xs text-slate-500">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-map-pin w-3.5 h-3.5 text-teal-700" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Block G</span>
<span>Photo: Unsplash (stock)</span>
</div>
</div>
</article>

<article className="group rounded-xl border border-slate-200 overflow-hidden bg-white hover:border-slate-300 transition-colors">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Solar water heater panels installed on a rooftop" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" src="https://images.unsplash.com/photo-1565865372018-a41062525c10?w=800&amp;q=80"/>
</div>
<div className="p-4">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Installed solar geysers for local RDP homes</h3>
<p className="mt-1.5 text-sm text-slate-600">Fitted 10 solar water heater systems with frost protection and SANS-approved valves — reducing electricity costs for families.</p>
<div className="mt-3 flex items-center justify-between text-xs text-slate-500">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-map-pin w-3.5 h-3.5 text-teal-700" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Blocks H &amp; K</span>
<span>Photo: Unsplash (stock)</span>
</div>
</div>
</article>

<article className="group rounded-xl border border-slate-200 overflow-hidden bg-white hover:border-slate-300 transition-colors">
<div className="aspect-[4/3] overflow-hidden">
<img alt="New copper pipework replacing old galvanized lines" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" src="https://images.unsplash.com/photo-1596110291127-ae31d996aec0?w=800&amp;q=80"/>
</div>
<div className="p-4">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Re-piped galvanized lines in Block L apartments</h3>
<p className="mt-1.5 text-sm text-slate-600">Replaced corroded galvanized risers with copper and PEX, added isolation valves per unit, and insulated exposed runs.</p>
<div className="mt-3 flex items-center justify-between text-xs text-slate-500">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-map-pin w-3.5 h-3.5 text-teal-700" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Block L</span>
<span>Photo: Unsplash (stock)</span>
</div>
</div>
</article>

<article className="group rounded-xl border border-slate-200 overflow-hidden bg-white hover:border-slate-300 transition-colors">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Water storage tank and plumbing manifold" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" src="https://images.unsplash.com/photo-1721011794034-ac00f5af9408?w=800&amp;q=80"/>
</div>
<div className="p-4">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Rainwater harvesting for Soshanguve taxi rank</h3>
<p className="mt-1.5 text-sm text-slate-600">Installed guttering, first-flush diverters, and a 5,000L storage tank to supply wash bays and toilets.</p>
<div className="mt-3 flex items-center justify-between text-xs text-slate-500">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-map-pin w-3.5 h-3.5 text-teal-700" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Central</span>
<span>Photo: Unsplash (stock)</span>
</div>
</div>
</article>

<article className="group rounded-xl border border-slate-200 overflow-hidden bg-white hover:border-slate-300 transition-colors">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Emergency pipe repair with tools" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" src="https://images.unsplash.com/photo-1563166423-1e61639d5415?w=800&amp;q=80" style={{}}/>
</div>
<div className="p-4">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Emergency burst pipe repair for community clinic</h3>
<p className="mt-1.5 text-sm text-slate-600">Isolated the line, replaced a 1.5m section, and pressure-tested before reopening the clinic the same morning.</p>
<div className="mt-3 flex items-center justify-between text-xs text-slate-500">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-map-pin w-3.5 h-3.5 text-teal-700" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Block X</span>
<span>Photo: Unsplash (stock)</span>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Our story</h2>
<p className="mt-4 text-slate-600">
              Mokoena Plumbing Services was started by Thabo Mokoena, a proud Soshanguve resident who learned the trade as an apprentice to his uncle. After qualifying, Thabo opened the business in 2016 with a simple promise: show up on time, do the job right, and treat every home like it’s our own.
            </p>
<p className="mt-3 text-slate-600">
              Today, we’re a small family team based near Block H, serving Soshanguve and nearby townships. We train local youth, use quality parts, and provide clear, upfront quotes. Most of our work comes from referrals — something we’re very proud of.
            </p>
<div className="mt-5 grid grid-cols-2 gap-4">
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-award w-5 h-5 text-teal-700" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<p className="text-sm font-medium text-slate-900">8+ years experience</p>
</div>
<p className="mt-1 text-xs text-slate-600">Residential and light commercial</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-handshake w-5 h-5 text-teal-700" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
<p className="text-sm font-medium text-slate-900">Family-run business</p>
</div>
<p className="mt-1 text-xs text-slate-600">Reliable and accountable</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-slate-200">
<img alt="Black man in his late 30s and a black woman in her early 30s, wearing overalls and holding plumbing equipment in their workshop" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1703145216690-e1c2d3dc0e9c?w=1600&amp;q=80" style={{}}/>
<div className="text-xs text-slate-700 bg-white/90 ring-slate-200 ring-1 rounded-md pt-2 pr-3 pb-2 pl-3 absolute bottom-3 left-3">
                Photo: Unsplash (stock)
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="border-slate-200 border-t" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">What our clients say</h2>
<p className="mt-2 text-slate-600">Word of mouth is everything to us. Here are a few recent messages.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<figure className="rounded-xl border border-slate-200 bg-white p-5">
<div className="flex items-center gap-3">
<img alt="Client portrait" className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="">
<figcaption className="text-sm font-medium text-slate-900">Mrs. Dlamini</figcaption>
<p className="text-xs text-slate-500">Block H</p>
</div>
</div>
<blockquote className="mt-3 text-sm text-slate-700">“Thabo fixed our burst pipe in record time! No mess, and the quote was exactly what we paid.”</blockquote>
</figure>
<figure className="rounded-xl border border-slate-200 bg-white p-5">
<div className="flex items-center gap-3">
<img alt="Client portrait" className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="">
<figcaption className="text-sm font-medium text-slate-900">Mr. Maseko</figcaption>
<p className="text-xs text-slate-500">Block L</p>
</div>
</div>
<blockquote className="mt-3 text-sm text-slate-700">“The team re-piped our building neatly and finished two days early. Highly recommended.”</blockquote>
</figure>
<figure className="rounded-xl border border-slate-200 bg-white p-5">
<div className="flex items-center gap-3">
<img alt="Client portrait" className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div>
<figcaption className="text-sm font-medium text-slate-900">Lerato K.</figcaption>
<p className="text-xs text-slate-500">Block G</p>
</div>
</div>
<blockquote className="mt-3 text-sm text-slate-700">“We love our new solar geyser — hot water even during load shedding. Thank you!”</blockquote>
</figure>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="quote">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="grid lg:grid-cols-2 gap-10">
<div className="">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Request a fast quote</h2>
<p className="mt-2 text-slate-600">Share a few details and we’ll reply on WhatsApp within minutes during business hours.</p>
<form className="mt-6 space-y-4 rounded-xl border border-slate-200 bg-white p-5" id="quoteForm">
<div className="">
<label className="block text-sm font-medium text-slate-800" htmlFor="name">Full name</label>
<input className="mt-1 block w-full rounded-md border-slate-300 focus:border-teal-600 focus:ring-teal-600 text-sm placeholder-slate-400" data-ddg-inputtype="identities.fullName" id="name" name="name" placeholder="e.g., Naledi Mokoena" required="" type="text"/>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-800" htmlFor="phone">Phone / WhatsApp</label>
<input className="mt-1 block w-full rounded-md border-slate-300 focus:border-teal-600 focus:ring-teal-600 text-sm placeholder-slate-400" data-ddg-inputtype="identities.phone" id="phone" name="phone" placeholder="e.g., 079 654 3210" required="" type="tel"/>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-800" htmlFor="suburb">Area</label>
<input className="mt-1 block w-full rounded-md border-slate-300 focus:border-teal-600 focus:ring-teal-600 text-sm placeholder-slate-400" data-ddg-inputtype="identities.addressCity" id="suburb" name="suburb" placeholder="e.g., Block H, Soshanguve" required="" type="text"/>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-800" htmlFor="service">Service needed</label>
<div className="relative">
<select className="mt-1 block w-full appearance-none rounded-md border-slate-300 focus:border-teal-600 focus:ring-teal-600 text-sm pr-10" data-ddg-inputtype="unknown" id="service" name="service">
<option>Drain unblocking</option>
<option>Burst pipe repair</option>
<option>Geyser installation</option>
<option>Solar geyser</option>
<option>Leak detection</option>
<option>Bathroom/kitchen renovation</option>
<option>COC / compliance</option>
<option>Other</option>
</select>
<svg className="lucide lucide-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-800" htmlFor="details">Details</label>
<textarea className="mt-1 block w-full rounded-md border-slate-300 focus:border-teal-600 focus:ring-teal-600 text-sm placeholder-slate-400" id="details" name="details" placeholder="Briefly describe the issue. You can also mention preferred times." rows="4"></textarea>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-700 ring-1 ring-inset ring-teal-700/40" type="submit">
<svg className="lucide lucide-message-square w-4.5 h-4.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                  Send via WhatsApp
                </button>
<p className="text-xs text-slate-500">No obligations. We’ll never share your details.</p>
</div>
</form>
</div>
<div>
<div className="rounded-xl border border-slate-200 bg-white p-5">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Prefer to chat?</h3>
<p className="mt-1 text-sm text-slate-600">Tap below to open a chat with our team.</p>
<div className="mt-4 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 ring-1 ring-inset ring-emerald-700/40" href="https://wa.me/27796543210?text=Hello%20Mokoena%20Plumbing%2C%20I%20need%20assistance%20with..." target="_blank">
<i className="w-4.5 h-4.5" data-lucide="whatsapp"></i>
                  WhatsApp 079 654 3210
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:border-slate-400" href="tel:+27120001234">
<svg className="lucide lucide-phone w-4.5 h-4.5 text-teal-700" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                  Call 012 000 1234
                </a>
</div>
<div className="mt-6 grid grid-cols-2 gap-4 text-sm">
<div className="rounded-lg border border-slate-200 p-4">
<p className="font-medium text-slate-900">Hours</p>
<p className="mt-1 text-slate-600">Mon–Sat: 7:00–18:00</p>
<p className="text-slate-600">Emergencies: 24/7</p>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<p className="font-medium text-slate-900">Service area</p>
<p className="mt-1 text-slate-600">Soshanguve A–X, Mabopane, Ga-Rankuwa</p>
</div>
</div>
<div className="mt-6">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-slate-200">
<iframe className="w-full h-full" src="https://www.google.com/maps?q=Soshanguve&amp;output=embed" title="Map to Mokoena Plumbing in Soshanguve"></iframe>
</div>
<p className="mt-2 text-xs text-slate-500">We come to you. Warehouse and workshop near Block H.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Contact us</h2>
<p className="mt-2 text-slate-600">We’re ready to help — whether it’s an emergency or a planned project.</p>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<a className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 hover:border-slate-300 transition-colors" href="https://wa.me/27796543210?text=Hi%2C%20I%20need%20plumbing%20help%20in%20Soshanguve." target="_blank">
<svg className="lucide lucide-message-circle w-5 h-5 text-teal-700" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<div>
<p className="text-sm font-medium text-slate-900">WhatsApp</p>
<p className="text-xs text-slate-600">079 654 3210</p>
</div>
</a>
<a className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 hover:border-slate-300 transition-colors" href="tel:+27120001234">
<svg className="lucide lucide-phone w-5 h-5 text-teal-700" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<div>
<p className="text-sm font-medium text-slate-900">Phone (Office)</p>
<p className="text-xs text-slate-600">012 000 1234</p>
</div>
</a>
<a className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 hover:border-slate-300 transition-colors" href="mailto:hello@mokoenaplumbing.co.za">
<svg className="lucide lucide-mail w-5 h-5 text-teal-700" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<div>
<p className="text-sm font-medium text-slate-900">Email</p>
<p className="text-xs text-slate-600">hello@mokoenaplumbing.co.za</p>
</div>
</a>
<div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
<svg className="lucide lucide-map-pin w-5 h-5 text-teal-700" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div>
<p className="text-sm font-medium text-slate-900">Workshop</p>
<p className="text-xs text-slate-600">Near Block H, Soshanguve</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-1">
<div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Documents</h3>
<ul className="mt-3 space-y-2 text-sm">
<li className="flex items-center justify-between rounded-md bg-white p-3 ring-1 ring-slate-200">
<div className="flex items-center gap-2">
<svg className="lucide lucide-file-text w-4 h-4 text-teal-700" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                    Insurance-ready invoice
                  </div>
<span className="text-xs text-slate-500">On request</span>
</li>
<li className="flex items-center justify-between rounded-md bg-white p-3 ring-1 ring-slate-200">
<div className="flex items-center gap-2">
<svg className="lucide lucide-file-badge w-4 h-4 text-teal-700" data-lucide="file-badge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.072"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m6.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88"></path><circle cx="5" cy="14" r="3"></circle></svg>
                    COC certificates
                  </div>
<span className="text-xs text-slate-500">Available</span>
</li>
</ul>
<p className="mt-4 text-xs text-slate-600">We carry popular spares on the van for faster fixes.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-teal-600 text-white flex items-center justify-center ring-1 ring-inset ring-teal-700/40">
<span className="text-sm font-semibold tracking-tight">MP</span>
</div>
<p className="text-sm font-medium text-slate-900 tracking-tight">Mokoena Plumbing</p>
</div>
<p className="mt-3 text-sm text-slate-600">Reliable, local plumbing for Soshanguve since 2016.</p>
<div className="mt-4 flex items-center gap-3 text-sm">
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-slate-800 hover:bg-slate-50 hover:border-slate-400" href="https://wa.me/27796543210" target="_blank">
<svg className="lucide lucide-message-circle w-4 h-4 text-teal-700" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                WhatsApp
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-slate-800 hover:bg-slate-50 hover:border-slate-400" href="tel:+27796543210">
<svg className="lucide lucide-phone w-4 h-4 text-teal-700" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                Call
              </a>
</div>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Services</p>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900" href="#services">Drain unblocking</a></li>
<li><a className="hover:text-slate-900" href="#services">Burst pipe repair</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Company</p>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900" href="#about">About</a></li>
<li><a className="hover:text-slate-900" href="#projects">Projects</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Legal</p>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li>Privacy &amp; Cookies</li>
<li>PAIA Manual</li>
</ul>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
<p>© <span id="year">2025</span> Mokoena Plumbing Services. All rights reserved.</p>
<p>Images credited to Unsplash (stock/illustrative).</p>
</div>
</div>
</footer>




    </>
  );
}
