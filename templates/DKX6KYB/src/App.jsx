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



    // Current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (navToggle && mobileMenu) {
      navToggle.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        navToggle.setAttribute('aria-expanded', String(isHidden));
      });
    }

    // Light lucide init (optional)
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }

    // Reveal animations with fail-safe and reduced-motion support
    (function() {
      const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const instantReveal = (el) => {
        el.style.transition = 'opacity 600ms ease, transform 600ms ease';
        el.style.opacity = '1';
        el.style.transform = 'none';
      };

      const markCandidates = () => {
        // Include any elements with inline opacity 0 or translateY plus our new sections
        const all = Array.from(document.querySelectorAll('*'));
        const candidates = all.filter(el => {
          const s = (el.getAttribute('style') || '').replace(/\s+/g,'');
          return s.includes('opacity:0') || s.includes('translateY(');
        });
        return candidates;
      };

      const revealAllNow = () => markCandidates().forEach(instantReveal);

      if (prefersReduced) {
        revealAllNow();
        return;
      }

      // Use IntersectionObserver if available
      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              instantReveal(entry.target);
              io.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });

        markCandidates().forEach(el => io.observe(el));

        // Hard fail-safe: ensure visibility after 1.2s regardless
        setTimeout(revealAllNow, 1200);
      } else {
        // Fallback: reveal immediately
        revealAllNow();
      }
    })();

    // Simple form handler (demo)
    const form = document.getElementById('quote-form');
    const statusEl = document.getElementById('form-status');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Spam honeypot
        if (form.website && form.website.value) return;
        // Very basic validation
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const consent = document.getElementById('consent').checked;
        if (!name || !email || !consent) {
          statusEl.textContent = 'Please complete required fields.';
          statusEl.className = 'text-sm mt-3 text-red-600';
          statusEl.classList.remove('hidden');
          return;
        }
        // Simulate success
        statusEl.textContent = 'Thanks! We’ll be in touch within one business day.';
        statusEl.className = 'text-sm mt-3 text-green-700';
        statusEl.classList.remove('hidden');
        form.reset();
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
      

<header className="fixed top-0 left-0 right-0 z-50 border-b bg-white/90 backdrop-blur" style={{}}>
<nav className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">
<a className="flex items-center gap-3" href="#home" style={{opacity: '1', transform: 'none'}}>
<div className="relative">
<div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg"></div>
<div className="absolute inset-0 h-8 w-8 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 opacity-60 animate-pulse"></div>
<div className="absolute inset-0 h-8 w-8 rounded-xl flex items-center justify-center text-white opacity-100">
<svg className="lucide lucide-sparkles w-[18px] h-[18px]" data-lucide="sparkles" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
</div>
<span className="font-semibold text-xl tracking-tight">Spik ’N Span</span>
</a>
<div className="hidden md:flex md:items-center md:gap-8">
<a className="text-sm font-medium relative group text-gray-600 hover:text-gray-900" href="#home">Home<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span></a>
<a className="text-sm font-medium relative group text-gray-600 hover:text-gray-900" href="#about">About<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span></a>
<a className="text-sm font-medium relative group text-gray-600 hover:text-gray-900" href="#services">Services<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span></a>
<a className="text-sm font-medium relative group text-gray-600 hover:text-gray-900" href="#testimonials">Testimonials<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span></a>
<a className="text-sm font-medium relative group text-gray-600 hover:text-gray-900" href="#gallery">Gallery<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span></a>
<a className="text-sm font-medium relative group text-gray-600 hover:text-gray-900" href="#contact">Contact<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span></a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all hover:shadow-lg hover:scale-[1.02]" href="#contact">
<svg className="lucide lucide-clipboard-check w-4 h-4" data-lucide="clipboard-check" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
            Get a Free Quote
          </a>
</div>
<button aria-label="Toggle menu" className="md:hidden p-3 rounded-xl transition-all hover:bg-gray-100" id="nav-toggle">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>

<div className="md:hidden pt-6 pb-8 space-y-6 border-t hidden border-gray-100" id="mobile-menu">
<a className="block text-base font-medium text-gray-600 hover:text-gray-900" href="#home">Home</a>
<a className="block text-base font-medium text-gray-600 hover:text-gray-900" href="#about">About</a>
<a className="block text-base font-medium text-gray-600 hover:text-gray-900" href="#services">Services</a>
<a className="block text-base font-medium text-gray-600 hover:text-gray-900" href="#testimonials">Testimonials</a>
<a className="block text-base font-medium text-gray-600 hover:text-gray-900" href="#gallery">Gallery</a>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-blue-600 text-white" href="#contact">
<svg className="lucide lucide-clipboard-check w-4 h-4" data-lucide="clipboard-check" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
          Free Quote
        </a>
</div>
</nav>
</header>

<section className="relative overflow-hidden pt-24 lg:pt-28 min-h-[88vh] flex items-center" id="home">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.08) 1px, transparent 1px)', backgroundSize: '22px 22px'}}></div>

<div className="absolute inset-0">
<img alt="Professional cleaning in action" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1627905646269-7f034dcc5738?w=3840&amp;q=80" style={{filter: 'saturate(1.05) contrast(1.02)', opacity: '1', transform: 'none'}}/>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-slate-200/70 to-slate-800/25"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-7" style={{opacity: '1', transform: 'none'}}>
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-medium mb-8 bg-blue-50 text-blue-700 ring-1 ring-blue-100">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Insured &amp; Bonded • 100% Satisfaction Guarantee
        </div>
<h1 className="sm:text-6xl lg:text-7xl leading-[0.95] text-5xl font-light text-gray-900 tracking-tight mb-6">
          Immaculate Workspaces.
          <br className="hidden sm:block"/><span className="font-semibold">
On Time.</span>
<span className="text-gray-200 block whitespace-nowrap">Every Time.</span>
</h1>
<p className="leading-relaxed max-w-2xl text-xl font-medium text-zinc-900 mb-10">
          Trusted by offices, facilities, and property managers for spotless results, eco-friendly products, and background-checked professionals.
        </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<a className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:scale-[1.03] bg-blue-600 text-white hover:bg-blue-700" href="#contact">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
            Get a Free Quote
          </a>
<a className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full border font-medium transition-all hover:shadow-lg hover:scale-[1.02] border-gray-200 bg-white/90 hover:bg-white" href="tel:+15551234567">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
            Call Now
          </a>
</div>

<div className="grid grid-cols-3 gap-6 max-w-xl">
<div className="text-center">
<div className="text-3xl font-light text-gray-900 mb-1">4.9/5</div>
<div className="text-sm font-medium text-zinc-200">Average Rating</div>
</div>
<div className="text-center">
<div className="text-3xl font-light text-gray-900 mb-1">10k+</div>
<div className="text-sm font-medium text-zinc-100">Sites Serviced</div>
</div>
<div className="text-center">
<div className="text-3xl font-light text-gray-900 mb-1">24h</div>
<div className="text-sm font-medium text-zinc-100">Re-clean Guarantee</div>
</div>
</div>
</div>

<div className="lg:col-span-5" style={{opacity: '1', transform: 'none'}}>
<div className="relative">
<div className="relative bg-white border-gray-100 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-2xl">

<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">Most Popular</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">Eco-Friendly</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-900 text-white">Save 15%</span>
</div>
<div className="flex items-start justify-between mb-6">
<div className="">
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">Office Deep Clean Package</h3>
<p className="text-sm text-gray-500">Workstations • Restrooms • Breakrooms • Floors</p>
</div>
<button aria-label="Save package" className="p-2 rounded-full transition-all hover:bg-gray-100 hover:scale-110">
<svg className="lucide lucide-bookmark w-5 h-5 text-gray-400" data-lucide="bookmark" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>

<div className="overflow-hidden group relative rounded-2xl mb-6">
<img alt="Deep cleaning office kitchenette" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[url(https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?w=1600&amp;q=80)] bg-cover"></div>
</div>

<div className="grid grid-cols-3 gap-4 mb-6">
<div className="text-center p-3 rounded-xl bg-gray-50">
<div className="flex gap-1 text-sm font-semibold text-gray-900 mb-1 items-center justify-center">1–2 hrs<svg className="lucide lucide-timer w-4 h-4" data-lucide="timer" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg></div>
<p className="text-xs text-gray-500">typical duration</p>
</div>
<div className="text-center p-3 rounded-xl bg-gray-50">
<div className="flex gap-1 text-sm font-semibold text-gray-900 mb-1 items-center justify-center">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                  2–3 pros
                </div>
<p className="text-xs text-gray-500">crew size</p>
</div>
<div className="text-center p-3 rounded-xl bg-green-50">
<div className="flex items-center justify-center gap-1 text-sm font-semibold text-green-700 mb-1">
<svg className="lucide lucide-leaf w-4 h-4" data-lucide="leaf" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                  Green
                </div>
<p className="text-xs text-green-600">products</p>
</div>
</div>
<div className="flex items-center justify-between mb-4">
<p className="text-sm text-gray-500">From</p>
<p className="text-2xl font-semibold tracking-tight text-gray-900">$189</p>
</div>
<button className="w-full py-3 px-4 rounded-xl bg-blue-600 text-white font-medium text-sm transition-all hover:bg-blue-700 hover:shadow-lg">
              Book This Package
            </button>
</div>

<div className="absolute -top-6 -right-6 w-40" style={{opacity: '1', transform: 'none'}}>
<div className="rounded-2xl border shadow-xl overflow-hidden bg-white border-gray-200">
<div className="text-center text-xs font-semibold py-3 tracking-wide bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700">
                SAME-DAY SLOTS
              </div>
<div className="p-4 text-center">
<p className="text-sm text-gray-600">Limited availability</p>
<p className="text-base font-semibold text-gray-900 tracking-tight">Book by 10am</p>
</div>
</div>
</div>
<div className="absolute top-1/2 -left-6 w-6 h-6 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full animate-bounce opacity-70"></div>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-br from-gray-50 to-white pt-24 pb-24" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">

<div className="text-center mb-16" style={{opacity: '1', transform: 'none'}}>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-blue-100 text-blue-800">
<svg className="lucide lucide-sprout w-4 h-4" data-lucide="sprout" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg>
          Commercial Cleaning Services
        </div>
<h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-6 text-gray-900">
          Reliable, Thorough, <span className="font-semibold">Consistently Clean</span>
</h2>
<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Tailored solutions for offices, facilities, and property managers—delivered by vetted professionals using eco-conscious products.
        </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="rounded-2xl p-8 border bg-white border-gray-100 hover:shadow-lg transition-all" style={{opacity: '1', transform: 'none'}}>
<div className="p-3 rounded-xl w-fit mb-4 bg-blue-100">
<svg className="lucide lucide-home w-6 h-6 text-blue-700" data-lucide="home" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<h3 className="font-semibold text-lg tracking-tight mb-2 text-gray-900">Office Janitorial</h3>
<p className="text-gray-600 text-sm leading-relaxed">Nightly or day-porter service: restrooms, breakrooms, desks, trash, and floors.</p>
</div>
<div className="rounded-2xl p-8 border bg-white border-gray-100 hover:shadow-lg transition-all" style={{opacity: '1', transform: 'none'}}>
<div className="p-3 rounded-xl w-fit mb-4 bg-blue-100">
<svg className="lucide lucide-building-2 w-6 h-6 text-blue-700" data-lucide="building-2" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</div>
<h3 className="font-semibold text-lg tracking-tight mb-2 text-gray-900">Workplace &amp; Facility</h3>
<p className="text-gray-600 text-sm leading-relaxed">Offices, coworking, medical suites, retail, and campuses with flexible schedules.</p>
</div>
<div className="rounded-2xl p-8 border bg-white border-gray-100 hover:shadow-lg transition-all" style={{opacity: '1', transform: 'none'}}>
<div className="p-3 rounded-xl w-fit mb-4 bg-blue-100">
<svg className="lucide lucide-brush w-6 h-6 text-blue-700" data-lucide="brush" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="m11 10 3 3"></path><path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"></path><path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"></path></svg>
</div>
<h3 className="font-semibold text-lg tracking-tight mb-2 text-gray-900">Floor Care &amp; Deep Clean</h3>
<p className="text-gray-600 text-sm leading-relaxed">Machine scrub, strip &amp; wax, carpet care, and detail cleaning.</p>
</div>
<div className="rounded-2xl p-8 border bg-white border-gray-100 hover:shadow-lg transition-all" style={{opacity: '1', transform: 'none'}}>
<div className="p-3 rounded-xl w-fit mb-4 bg-blue-100">
<svg className="lucide lucide-package w-6 h-6 text-blue-700" data-lucide="package" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<h3 className="font-semibold text-lg tracking-tight mb-2 text-gray-900">Tenant Turnover</h3>
<p className="text-gray-600 text-sm leading-relaxed">Move-in/out cleans for office suites, retail units, and managed spaces.</p>
</div>
<div className="rounded-2xl p-8 border bg-white border-gray-100 hover:shadow-lg transition-all" style={{opacity: '1', transform: 'none'}}>
<div className="p-3 rounded-xl w-fit mb-4 bg-blue-100">
<svg className="lucide lucide-spray-can w-6 h-6 text-blue-700" data-lucide="spray-can" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h.01"></path><path d="M7 5h.01"></path><path d="M11 7h.01"></path><path d="M3 7h.01"></path><path d="M7 9h.01"></path><path d="M3 11h.01"></path><rect height="4" width="4" x="15" y="5"></rect><path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"></path><path d="m13 14 8-2"></path><path d="m13 19 8-2"></path></svg>
</div>
<h3 className="font-semibold text-lg tracking-tight mb-2 text-gray-900">Disinfecting Services</h3>
<p className="text-gray-600 text-sm leading-relaxed">High-touch disinfection for workplaces using safe, effective products.</p>
</div>
<div className="rounded-2xl p-8 border bg-white border-gray-100 hover:shadow-lg transition-all" style={{opacity: '1', transform: 'none'}}>
<div className="p-3 rounded-xl w-fit mb-4 bg-blue-100">
<svg className="lucide lucide-sparkles w-6 h-6 text-blue-700" data-lucide="sparkles" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="font-semibold text-lg tracking-tight mb-2 text-gray-900">Glass &amp; Detailing</h3>
<p className="text-gray-600 text-sm leading-relaxed">Interior glass, partitions, and meticulous detailing for common areas.</p>
</div>
</div>

<div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="flex items-center gap-3 p-4 rounded-xl border bg-white border-gray-100" style={{opacity: '1', transform: 'none'}}>
<div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center text-green-700">
<svg className="lucide lucide-shield-check" data-lucide="shield-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-sm font-medium text-gray-700">Insured &amp; Bonded</p>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl border bg-white border-gray-100" style={{opacity: '1', transform: 'none'}}>
<div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700">
<svg className="lucide lucide-check-circle-2" data-lucide="check-circle-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-sm font-medium text-gray-700">Background-Checked Pros</p>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl border bg-white border-gray-100" style={{opacity: '1', transform: 'none'}}>
<div className="h-8 w-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
<svg className="lucide lucide-leaf" data-lucide="leaf" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<p className="text-sm font-medium text-gray-700">Eco-Friendly Products</p>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl border bg-white border-gray-100" style={{opacity: '1', transform: 'none'}}>
<div className="h-8 w-8 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-700">
<svg className="lucide lucide-refresh-ccw" data-lucide="refresh-ccw" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
</div>
<p className="text-sm font-medium text-gray-700">24h Re-clean Guarantee</p>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 relative overflow-hidden" id="about">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0px)', backgroundSize: '40px 40px'}}></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

<div className="" style={{opacity: '1', transform: 'none'}}>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 bg-white/10 text-white">
<svg className="lucide lucide-badge-check w-4 h-4" data-lucide="badge-check" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
          Why Choose Spik ’N Span
        </div>
<h3 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">A cleaning partner you can trust</h3>
<p className="text-lg text-gray-300 leading-relaxed mb-8">
          For over a decade, we’ve helped offices, facilities, and property managers keep their spaces spotless. Our vetted teams follow robust checklists and deliver consistent quality—backed by a 24-hour re-clean guarantee.
        </p>
<div className="grid grid-cols-2 gap-8 mb-8">
<div>
<p className="text-5xl font-light mb-2">10+ yrs</p>
<p className="text-lg font-medium text-gray-300">Serving local communities</p>
</div>
<div>
<p className="text-5xl font-light mb-2">4.9</p>
<div className="flex items-center gap-2">
<div className="flex gap-1 text-yellow-400">
<svg className="w-4 h-4" fill="currentColor" height="22" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4" fill="currentColor" height="22" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4" fill="currentColor" height="22" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4" fill="currentColor" height="22" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4" fill="currentColor" height="22" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-lg font-medium text-gray-300">Customer Rating</span>
</div>
</div>
</div>
<div className="flex items-center gap-6 mb-8">
<div className="flex -space-x-4">
<img alt="Client" className="h-12 w-12 border-2 border-white/30 rounded-full shadow-lg" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<img alt="Client" className="h-12 w-12 border-2 border-white/30 rounded-full shadow-lg" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<img alt="Client" className="h-12 w-12 border-2 border-white/30 rounded-full shadow-lg" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<div className="h-12 w-12 flex bg-white/10 border-2 border-white/20 rounded-full shadow-lg items-center justify-center text-sm font-semibold">+800</div>
</div>
</div>
</div>

<div className="" id="testimonials" style={{opacity: '1', transform: 'none'}}>
<div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10">
<div className="mb-6">
<div className="flex gap-1 text-yellow-400 mb-4">
<svg className="w-5 h-5" fill="currentColor" height="22" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-5 h-5" fill="currentColor" height="22" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-5 h-5" fill="currentColor" height="22" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-5 h-5" fill="currentColor" height="22" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-5 h-5" fill="currentColor" height="22" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg text-gray-100 leading-relaxed">
              “They transformed our office overnight—floors gleaming, kitchen spotless, and the team was incredibly professional. Scheduling was effortless and the results exceeded expectations.”
            </p>
</div>
<div className="flex items-center gap-4">
<img alt="Alex Rivera" className="h-14 w-14 rounded-full border-2 border-white/20" src="https://randomuser.me/api/portraits/men/56.jpg"/>
<div className="">
<p className="font-semibold">Alex Rivera</p>
<p className="text-gray-300">Operations Manager, Fintech Co.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py- 24 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-14" style={{opacity: '1', transform: 'none'}}>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-blue-100 text-blue-800">
<svg className="lucide lucide-image w-4 h-4" data-lucide="image" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
          Our Work
        </div>
<h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-5 text-gray-900">Before &amp; After, Results that Shine</h2>
<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Real projects from offices, retail, and facilities across the city. Hover to preview details.
        </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<figure className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white" style={{opacity: '1', transform: 'none'}}>
<img alt="Polished lobby floors" className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1581578731526-c6d5b53b5f9d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<figcaption className="absolute inset-0 flex bg-[url(https://images.unsplash.com/photo-1631248055158-edec7a3c072b?w=800&amp;q=80)] bg-cover items-end">
<div className="w-full p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-gradient-to-t from-black/50 to-transparent text-white">
<p className="text-sm font-medium">Corporate Lobby • Nightly Service</p>
</div>
</figcaption>
</figure>
<figure className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white" style={{opacity: '1', transform: 'none'}}>
<img alt="Sanitized breakroom surfaces" className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<figcaption className="absolute inset-0 flex items-end">
<div className="w-full p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-gradient-to-t from-black/50 to-transparent text-white">
<p className="text-sm font-medium">Breakroom Deep Clean • Eco Products</p>
</div>
</figcaption>
</figure>
<figure className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white" style={{opacity: '1', transform: 'none'}}>
<img alt="Fingerprint-free glass partitions" className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<figcaption className="absolute inset-0 flex bg-[url(https://images.unsplash.com/photo-1637665637343-d497d345ed2f?w=800&amp;q=80)] bg-cover items-end">
<div className="w-full p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-gradient-to-t from-black/50 to-transparent text-white">
<p className="text-sm font-medium">Glass Partitions • Streak-Free Finish</p>
</div>
</figcaption>
</figure>
<figure className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white sm:col-span-2" style={{opacity: '1', transform: 'none'}}>
<img alt="Conference room cleaned and organized" className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1507209696998-3c532be9b2b1?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<figcaption className="absolute inset-0 flex bg-[url(https://images.unsplash.com/photo-1643199135305-60d59f7ffd1b?w=2560&amp;q=80)] bg-cover items-end">
<div className="w-full p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-gradient-to-t from-black/50 to-transparent text-white">
<p className="text-sm font-medium">Conference Rooms • Dusting, Floors, Touchpoints</p>
</div>
</figcaption>
</figure>
<figure className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white" style={{opacity: '1', transform: 'none'}}>
<img alt="Restroom sanitized and restocked" className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<figcaption className="absolute inset-0 flex bg-[url(https://images.unsplash.com/photo-1550503194-e24e63cfffa7?w=800&amp;q=80)] bg-cover items-end">
<div className="w-full p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-gradient-to-t from-black/50 to-transparent text-white">
<p className="text-sm font-medium">Restrooms • Disinfection &amp; Restocking</p>
</div>
</figcaption>
</figure>
<figure className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white" style={{opacity: '1', transform: 'none'}}>
</figure>
</div>
<div className="mt-12 text-center" style={{opacity: '1', transform: 'none'}}>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all hover:shadow-lg hover:scale-[1.02]" href="#contact">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
          Like what you see? Get a custom quote
        </a>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-br from-blue-50 to-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-14" style={{opacity: '1', transform: 'none'}}>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-white text-blue-700 ring-1 ring-blue-200">
<svg className="lucide lucide-workflow w-4 h-4" data-lucide="workflow" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
          Our Simple Process
        </div>
<h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-5 text-gray-900">From Quote to Clean in 3 Steps</h2>
<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Fast, transparent, and tailored to your site’s schedule and requirements.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="rounded-2xl border bg-white border-blue-100 p-8" style={{opacity: '1', transform: 'none'}}>
<div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
<span className="text-sm font-semibold">1</span>
</div>
<h3 className="font-semibold text-lg mb-2">Share your needs</h3>
<p className="text-gray-600 text-sm">Tell us about your space, frequency, and priorities. We’ll suggest the right scope.</p>
</div>
<div className="rounded-2xl border bg-white border-blue-100 p-8" style={{opacity: '1', transform: 'none'}}>
<div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
<span className="text-sm font-semibold">2</span>
</div>
<h3 className="font-semibold text-lg mb-2">Get a custom quote</h3>
<p className="text-gray-600 text-sm">Clear pricing with options for nightly janitorial, periodic deep cleans, and add-ons.</p>
</div>
<div className="rounded-2xl border bg-white border-blue-100 p-8" style={{opacity: '1', transform: 'none'}}>
<div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
<span className="text-sm font-semibold">3</span>
</div>
<h3 className="font-semibold text-lg mb-2">We handle the rest</h3>
<p className="text-gray-600 text-sm">Insured crews, checklists, and QA. We work around your hours with minimal disruption.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-start">

<div className="space-y-8" style={{opacity: '1', transform: 'none'}}>
<div>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-blue-100 text-blue-800">
<svg className="lucide lucide-handshake w-4 h-4" data-lucide="handshake" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
              Request a Quote
            </div>
<h2 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900 mb-3">Let’s make your workplace shine</h2>
<p className="text-gray-600">Tell us about your space and preferred schedule. We’ll follow up within one business day.</p>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div className="p-5 rounded-2xl border bg-white border-gray-100">
<div className="flex items-center gap-3 mb-3">
<div className="h-9 w-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
<svg className="lucide lucide-clock-8" data-lucide="clock-8" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l-4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<p className="font-medium text-gray-900">Mon–Fri, 8:00a–6:00p</p>
</div>
<p className="text-sm text-gray-600">After-hours service available upon request.</p>
</div>
<div className="p-5 rounded-2xl border bg-white border-gray-100">
<div className="flex items-center gap-3 mb-3">
<div className="h-9 w-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
<svg className="lucide lucide-map-pin" data-lucide="map-pin" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<p className="font-medium text-gray-900">Service Area</p>
</div>
<p className="text-sm text-gray-600">City Center, Northside, West End, and surrounding suburbs.</p>
</div>
</div>
<div className="space-y-3">
<a className="flex items-center gap-3 text-blue-700 hover:text-blue-800 font-medium" href="tel:+15551234567">
<svg className="lucide lucide-phone" data-lucide="phone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
              +1 (555) 123-4567
            </a>
<a className="flex items-center gap-3 text-blue-700 hover:text-blue-800 font-medium" href="mailto:hello@spiknspan.co">
<svg className="lucide lucide-mail" data-lucide="mail" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
              hello@spiknspan.co
            </a>
</div>
</div>

<div className="p-6 sm:p-8 rounded-3xl border bg-white border-gray-100 shadow-sm" style={{opacity: '1', transform: 'none'}}>
<form className="space-y-6" id="quote-form" novalidate="">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Full name</label>
<input className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500" id="name" name="name" placeholder="Alex Rivera" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="company">Company</label>
<input className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500" id="company" name="company" placeholder="Fintech Co." type="text"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Work email</label>
<input className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500" id="email" name="email" placeholder="you@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">Phone</label>
<input className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500" id="phone" name="phone" placeholder="(555) 123-4567" type="tel"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="size">Approx. square footage</label>
<select className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500" id="size" name="size">
<option value="">Select</option>
<option>Under 3,000 sq ft</option>
<option>3,000–10,000 sq ft</option>
<option>10,000–25,000 sq ft</option>
<option>25,000+ sq ft</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="frequency">Preferred frequency</label>
<select className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500" id="frequency" name="frequency">
<option value="">Select</option>
<option>One-time Deep Clean</option>
<option>Weekly</option>
<option>Bi-weekly</option>
<option>Nightly Janitorial</option>
</select>
</div>
</div>
<fieldset>
<legend className="block text-sm font-medium text-gray-700 mb-2">Services needed</legend>
<div className="grid sm:grid-cols-2 gap-3">
<label className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-blue-300 cursor-pointer">
<input className="rounded text-blue-600 focus:ring-blue-500" name="services" type="checkbox" value="janitorial"/>
<span className="text-sm text-gray-700">Office Janitorial</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-blue-300 cursor-pointer">
<input className="rounded text-blue-600 focus:ring-blue-500" name="services" type="checkbox" value="deep"/>
<span className="text-sm text-gray-700">Deep Clean</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-blue-300 cursor-pointer">
<input className="rounded text-blue-600 focus:ring-blue-500" name="services" type="checkbox" value="floor"/>
<span className="text-sm text-gray-700">Floor Care</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-blue-300 cursor-pointer">
<input className="rounded text-blue-600 focus:ring-blue-500" name="services" type="checkbox" value="disinfect"/>
<span className="text-sm text-gray-700">Disinfecting</span>
</label>
</div>
</fieldset>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Notes</label>
<textarea className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500" id="message" name="message" placeholder="Tell us about your site, access hours, and any priorities..." rows="4"></textarea>
</div>

<input autocomplete="off" className="hidden" name="website" tabindex="-1" type="text"/>
<div className="flex items-start gap-3">
<input className="mt-1 rounded text-blue-600 focus:ring-blue-500" id="consent" required="" type="checkbox"/>
<label className="text-sm text-gray-600" htmlFor="consent">You may contact me about scheduling and pricing. I agree to the privacy policy.</label>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all hover:shadow-lg" type="submit">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
              Request My Quote
            </button>
<p className="hidden text-sm mt-3" id="form-status"></p>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-12" style={{opacity: '1', transform: 'none'}}>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-blue-100 text-blue-800">
<svg className="lucide lucide-help-circle w-4 h-4" data-lucide="help-circle" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
          Frequently Asked Questions
        </div>
<h2 className="text-4xl sm:text-5xl font-light tracking-tight text-gray-900">Answers for Facility Managers</h2>
</div>
<div className="grid lg:grid-cols-2 gap-6">
<details className="group rounded-2xl border border-gray-200 bg-white p-6" open="" style={{opacity: '1', transform: 'none'}}>
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<h3 className="font-medium text-gray-900">Are you insured and do you background-check cleaners?</h3>
<span className="rounded-lg bg-gray-100 p-1 text-gray-600 group-open:rotate-45 transition-transform">
<svg className="lucide lucide-plus" data-lucide="plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<p className="mt-3 text-sm text-gray-600">Yes—Spik ’N Span is fully insured and bonded. All team members are vetted and background-checked before assignment.</p>
</details>
<details className="group rounded-2xl border border-gray-200 bg-white p-6" style={{opacity: '1', transform: 'none'}}>
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<h3 className="font-medium text-gray-900">Can you work after hours or around our schedule?</h3>
<span className="rounded-lg bg-gray-100 p-1 text-gray-600 group-open:rotate-45 transition-transform">
<svg className="lucide lucide-plus" data-lucide="plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<p className="mt-3 text-sm text-gray-600">Absolutely. We offer day porter services, evening and overnight janitorial, and weekend deep cleans.</p>
</details>
<details className="group rounded-2xl border border-gray-200 bg-white p-6" style={{opacity: '1', transform: 'none'}}>
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<h3 className="font-medium text-gray-900">Do you bring supplies and eco-friendly products?</h3>
<span className="rounded-lg bg-gray-100 p-1 text-gray-600 group-open:rotate-45 transition-transform">
<svg className="lucide lucide-plus" data-lucide="plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<p className="mt-3 text-sm text-gray-600">Yes, we supply everything needed and default to eco-conscious products that are effective and safe for workplaces.</p>
</details>
<details className="group rounded-2xl border border-gray-200 bg-white p-6" style={{opacity: '1', transform: 'none'}}>
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<h3 className="font-medium text-gray-900">What if we’re not satisfied with a visit?</h3>
<span className="rounded-lg bg-gray-100 p-1 text-gray-600 group-open:rotate-45 transition-transform">
<svg className="lucide lucide-plus" data-lucide="plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<p className="mt-3 text-sm text-gray-600">We stand by a 24-hour re-clean guarantee. Tell us and we’ll make it right, fast.</p>
</details>
</div>
</div>
</section>

<footer className="border-t bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
<div className="grid md:grid-cols-4 gap-10">
<div className="md:col-span-2">
<a className="flex items-center gap-3 mb-4" href="#home">
<div className="relative">
<div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg"></div>
<div className="absolute inset-0 h-8 w-8 rounded-xl flex items-center justify-center text-white">
<svg className="lucide lucide-sparkles" data-lucide="sparkles" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
</div>
<span className="font-semibold text-xl tracking-tight">Spik ’N Span</span>
</a>
<p className="text-gray-600 max-w-md">Professional commercial cleaning for offices, facilities, and managed properties. Reliable teams, eco-friendly products, and a 24-hour re-clean guarantee.</p>
<div className="flex items-center gap-3 mt-5">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:border-gray-300" href="tel:+15551234567">
<svg className="lucide lucide-phone" data-lucide="phone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
              Call
            </a>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white hover:bg-blue-700" href="#contact">
              Get a Quote
            </a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-3">Company</h4>
<ul className="space-y-2 text-sm text-gray-600">
<li><a className="hover:text-gray-900" href="#about">About</a></li>
<li><a className="hover:text-gray-900" href="#services">Services</a></li>
<li><a className="hover:text-gray-900" href="#testimonials">Testimonials</a></li>
<li><a className="hover:text-gray-900" href="#gallery">Gallery</a></li>
<li><a className="hover:text-gray-900" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-3">Legal</h4>
<ul className="space-y-2 text-sm text-gray-600">
<li><a className="hover:text-gray-900" href="#">Privacy Policy</a></li>
<li><a className="hover:text-gray-900" href="#">Terms of Service</a></li>
<li><a className="hover:text-gray-900" href="#">Accessibility</a></li>
</ul>
</div>
</div>
<div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-6">
<p className="text-sm text-gray-500">© <span id="year">2025</span> Spik ’N Span Cleaning LLC. All rights reserved.</p>
<div className="flex items-center gap-3">
<a aria-label="LinkedIn" className="p-2 rounded-lg border text-gray-600 hover:text-gray-900 hover:border-gray-300" href="#">
<svg className="lucide lucide-linkedin" data-lucide="linkedin" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="Twitter" className="p-2 rounded-lg border text-gray-600 hover:text-gray-900 hover:border-gray-300" href="#">
<svg className="lucide lucide-twitter" data-lucide="twitter" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="Instagram" className="p-2 rounded-lg border text-gray-600 hover:text-gray-900 hover:border-gray-300" href="#">
<svg className="lucide lucide-instagram" data-lucide="instagram" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
