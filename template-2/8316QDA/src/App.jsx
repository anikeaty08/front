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
      
  (function() {
    const btn = document.getElementById('toggleLocations');
    const more = document.getElementById('moreLocations');
    if (!btn || !more) return;
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      more.classList.toggle('hidden');
      const show = btn.querySelector('[data-label-show]');
      const hide = btn.querySelector('[data-label-hide]');
      const chevron = btn.querySelector('[data-chevron]');
      show?.classList.toggle('hidden');
      hide?.classList.toggle('hidden');
      chevron?.classList.toggle('rotate-180');
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    });
  })();



      // Lucide auto-replace
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          window.lucide.createIcons();
        }
      });

      // Year in footer
      document.getElementById('year').textContent = new Date().getFullYear();

      // Mobile menu handling
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      const closeMobileMenu = document.getElementById('closeMobileMenu');
      const mobileLinks = document.querySelectorAll('.mobile-nav-link');

      function openMenu() {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.setAttribute('aria-hidden', 'false');
      }
      function closeMenu() {
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.setAttribute('aria-hidden', 'true');
      }
      mobileMenuBtn?.addEventListener('click', openMenu);
      closeMobileMenu?.addEventListener('click', closeMenu);
      mobileLinks.forEach(l => l.addEventListener('click', closeMenu));
      // Close when clicking overlay
      mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu.firstElementChild) closeMenu();
      });

      // Header behavior on scroll
      const header = document.getElementById('mainHeader');
      let lastY = window.scrollY;
      window.addEventListener('scroll', () => {
        const y = window.scrollY;
        const down = y > lastY;
        header.style.transform = y > 80 && down ? 'translateY(-100%)' : 'translateY(0)';
        header.classList.toggle('backdrop-blur', y > 10);
        lastY = y;
      }, { passive: true });

      // Section nav highlighting
      const sections = ['hero','expertise','portfolio','testimonials','contact'];
      const navLinks = document.querySelectorAll('.section-nav');
      const linkById = {};
      navLinks.forEach(link => linkById[link.dataset.section] = link);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const id = entry.target.id;
          if (!sections.includes(id)) return;
          const link = linkById[id];
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach(l => {
              l.classList.remove('bg-white/10','text-white','shadow-sm');
              l.classList.add('text-gray-300');
            });
            link.classList.add('bg-white/10','text-white','shadow-sm');
            link.classList.remove('text-gray-300');
          }
        });
      }, { root: null, threshold: 0.5 });

      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      // Animate on view
      const revealEls = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
      const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            revealObs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      revealEls.forEach(el => revealObs.observe(el));

      // Parallax effect
      const parallaxEls = document.querySelectorAll('.parallax-element');
      function parallax() {
        const y = window.scrollY;
        parallaxEls.forEach((el, i) => {
          const speed = 0.12 + (i % 3) * 0.06;
          el.style.transform = `translateY(${y * speed}px)`;
        });
      }
      window.addEventListener('scroll', parallax, { passive: true });
      parallax();

      // Counters (animate only if text is numeric to avoid overriding labels)
      const counters = document.querySelectorAll('.counter[data-target]');
      const countObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseFloat(el.dataset.target);
          if (Number.isNaN(target)) return;
          const initialText = el.textContent.trim();
          if (!/^[\d,.\s]+$/.test(initialText)) { countObs.unobserve(el); return; }
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();
          const formatter = new Intl.NumberFormat();
          function tick(now) {
            const p = Math.min((now - startTime) / duration, 1);
            const val = Math.floor(p * target);
            el.textContent = formatter.format(val);
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          countObs.unobserve(el);
        });
      }, { threshold: 0.6 });
      counters.forEach(c => countObs.observe(c));
    
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
      

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out shadow-md backdrop-blur" id="mainHeader" style={{transform: `translateY(0px)`}}>
<div className="absolute inset-0 glass-morphism bg-neutral-900/70 border-white/10 border-b"></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a aria-label="2070 Construction — Home" className="flex items-center gap-3 group z-10" href="#hero" id="aura-emf7ai5up">
<div className="w-9 h-9 grid place-items-center group-hover:scale-105 transition-transform duration-200 text-white bg-white/5 rounded-xl shadow-sm ring-1 ring-white/10 relative" id="aura-emf7ai4pz">
<span className="text-[11px] font-semibold tracking-tighter leading-none">2070</span>
<span aria-hidden="true" className="pointer-events-none absolute inset-x-1 top-1/2 -translate-y-1/2 h-[2px] rounded bg-gradient-to-r from-indigo-400/70 via-white/40 to-indigo-400/70"></span>
</div>
<span className="text-xl font-semibold tracking-tight">
<span className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">2070</span>
<span className="text-white/80"> Construction</span>
</span>
</a>

<nav className="hidden lg:flex items-center">
<div className="flex gap-1 glass-morphism bg-white/5 rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 items-center ring-1 ring-white/10">
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group hover:text-white text-gray-300" data-section="hero" href="#hero">
<span className="relative z-10">Home</span>
<div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group text-gray-300 hover:text-white" data-section="about" href="#about">
<div className="absolute inset-0 group-hover:scale-100 transition-transform duration-300 bg-white/10 rounded-full scale-0"></div><span className="relative z-10">About</span>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group bg-white/10 text-white shadow-sm" data-section="expertise" href="#expertise">
<span className="relative z-10">Services</span>
<div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group hover:text-white text-gray-300" data-section="portfolio" href="#portfolio">
<span className="relative z-10">Projects</span>
<div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group hover:text-white text-gray-300" data-section="testimonials" href="#testimonials">
<span className="relative z-10">Testimonials</span>
<div className="absolute inset-0 group-hover:scale-100 transition-transform duration-300 bg-white/10 rounded-full scale-0"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group hover:text-white text-gray-300" data-section="contact" href="#contact">
<span className="relative z-10">Contact</span>
<div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
</div>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 hover:bg-gray-100 transition-all duration-200 hover:shadow-md text-sm font-medium text-gray-900 bg-white rounded-xl pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm" href="#contact">
<svg className="lucide lucide-phone lucide-clipboard-list w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="phone" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(17, 24, 39)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="">Call Now</span>
</a>
<button className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<div className="fixed inset-0 z-40 lg:hidden transform translate-x-full transition-transform duration-300" id="mobileMenu">
<div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
<div className="absolute right-0 top-0 h-full w-80 bg-neutral-950 shadow-2xl">
<div className="p-6">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-gray-100 text-gray-900 grid place-items-center">
<span className="text-sm font-bold tracking-tighter">2070</span>
</div>
<span className="text-xl font-semibold">2070 Construction</span>
</div>
<button className="p-2 rounded-xl hover:bg-white/10" id="closeMobileMenu">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="space-y-2">
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 font-medium transition-colors text-gray-200" href="#hero">
<svg className="lucide lucide-home w-5 h-5 text-gray-400" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
              Home
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 font-medium transition-colors text-gray-200" href="#about">
<svg className="lucide lucide-users w-5 h-5 text-gray-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
              About
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 font-medium transition-colors text-gray-200" href="#expertise">
<svg className="lucide lucide-compass w-5 h-5 text-gray-400" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
              Services
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 font-medium transition-colors text-gray-200" href="#portfolio">
<svg className="lucide lucide-grid-3x3 w-5 h-5 text-gray-400" data-lucide="grid-3x3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
              Projects
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 font-medium transition-colors text-gray-200" href="#testimonials">
<svg className="lucide lucide-star w-5 h-5 text-gray-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
              Testimonials
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 font-medium transition-colors text-gray-200" href="#contact">
<svg className="lucide lucide-mail w-5 h-5 text-gray-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
              Contact
            </a>
</nav>
<div className="mt-8 pt-6 border-t border-white/10">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors" href="#contact">
<svg className="lucide lucide-clipboard-list w-5 h-5" data-lucide="clipboard-list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
              Request a Bid
            </a>
</div>
</div>
</div>
</div>
<main className="relative">

<section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">

<div className="absolute inset-0">

<div className="parallax-element absolute inset-0 scale-110" id="heroBase" style={{transform: `translateY(99.48px)`}}>
<img alt="Construction crane and skyline" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1495036019936-220b29b930ea?w=3840&q=80" style={{}} />
<div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
</div>

<section className="md:py-20 bg-neutral-950 pt-16 pb-16">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex items-end justify-between gap-6">
<div className="">
<h2 className="sm:text-4xl text-3xl font-medium text-neutral-100 tracking-tight">Our services —<span className="font-normal italic font-instrument-serif">designed to scale</span></h2><p className="max-w-2xl text-neutral-400 mt-3">
              We build exceptional product experiences with a focus on clarity, speed, and measurable outcomes.
            </p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-3 text-sm font-medium hover:bg-gray-100" href="#">
            Explore services <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
<div className="hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-neutral-900 to-neutral-800 border-neutral-800 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-lg" style={{}}>
<div className="flex items-start justify-between mb-4">
<div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center" style={{}}>
<svg className="h-5 w-5 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<button className="text-slate-400 hover:text-slate-300 transition-colors" style={{}}>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<h3 className="text-lg font-semibold text-slate-100 mb-2" style={{}}>Product Strategy</h3>
<p className="text-sm text-slate-400 mb-6" style={{}}>Transform ideas into actionable roadmaps with user research, competitive analysis, and strategic planning.</p>
<div className="space-y-3 text-sm">
<div className="flex items-center justify-between">
<span className="text-slate-300" style={{}}>Research & Discovery</span>
<span className="text-emerald-400 font-medium" style={{}}>✓</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-300" style={{}}>Market Analysis</span>
<span className="text-emerald-400 font-medium" style={{}}>✓</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-300" style={{}}>Product Roadmap</span>
<span className="text-emerald-400 font-medium" style={{}}>✓</span>
</div>
</div>
</div>
<div className="hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-lg">
<div className="flex items-start justify-between mb-4">
<div className="h-10 w-10 rounded-full bg-blue-900/50 flex items-center justify-center" style={{}}>
<svg className="h-5 w-5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
<polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
<polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
</div>
<button className="text-gray-400 hover:text-gray-300 transition-colors">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Design Systems</h3>
<p className="text-sm text-gray-300 mb-6">Create scalable design foundations with components, patterns, and guidelines that grow with your product.</p>
<div className="space-y-3 text-sm">
<div className="flex items-center justify-between">
<span className="text-gray-300">Component Library</span>
<span className="text-blue-400 font-medium" style={{}}>✓</span>
</div>
<div className="flex items-center justify-between">
<span className="text-gray-300">Brand Guidelines</span>
<span className="text-blue-400 font-medium" style={{}}>✓</span>
</div>
<div className="flex items-center justify-between">
<span className="text-gray-300">Design Tokens</span>
<span className="text-blue-400 font-medium" style={{}}>✓</span>
</div>
</div>
</div>
<div className="hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-neutral-900 to-neutral-800 border-neutral-800 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-lg" style={{}}>
<div className="flex items-start justify-between mb-4">
<div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center" style={{}}>
<svg className="h-5 w-5 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>
</div>
<button className="text-slate-400 hover:text-slate-300 transition-colors" style={{}}>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<h3 className="text-lg font-semibold text-slate-100 mb-2" style={{}}>Growth Optimization</h3>
<p className="text-sm text-slate-400 mb-6" style={{}}>Data-driven optimization to increase conversions, retention, and user engagement through testing and analytics.</p>
<div className="space-y-3 text-sm">
<div className="flex items-center justify-between">
<span className="text-slate-300" style={{}}>A/B Testing</span>
<span className="text-purple-400 font-medium" style={{}}>✓</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-300" style={{}}>Analytics Setup</span>
<span className="text-purple-400 font-medium" style={{}}>✓</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-300" style={{}}>Conversion Rate</span>
<span className="text-purple-400 font-medium" style={{}}>+24%</span>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="relative z-10 max-w-7xl lg:px-8 text-center mr-auto ml-auto pr-6 pl-6">
<div className="max-w-6xl mx-auto">

<div className="fade-in-up stagger-1 inline-flex items-center gap-2 glass-morphism bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium mb-8 animate">
<svg className="lucide lucide-shield-check w-[16px] h-[16px] text-green-400" data-icon-replaced="true" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Licensed • Bonded • Insured</span>
</div>

<h1 className="fade-in-up stagger-2 text-6xl sm:text-7xl lg:text-8xl font-light tracking-tighter text-white leading-[0.9] mb-8 animate">
<span className="block">Redefining</span>
<span className="block font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Construction Excellence</span>
</h1>

<p className="fade-in-up stagger-3 sm:text-2xl leading-relaxed max-w-3xl text-balance animate text-xl font-light text-white/90 mr-auto mb-12 ml-auto">
      We deliver complex commercial and industrial builds with precision, speed, and an uncompromising commitment to safety.
    </p>

<div className="fade-in-up stagger-4 flex flex-col sm:flex-row items-center justify-center gap-6 animate">
<a className="inline-flex items-center gap-3 hover:bg-gray-50 hover:text-gray-900 transition-all duration-300 hover:shadow-3xl transform hover:-translate-y-1 text-lg font-semibold text-slate-50 bg-indigo-600 rounded-2xl pt-4 pr-8 pb-4 pl-8 shadow-2xl" href="#portfolio">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="">Call Now</span>
</a>
<button className="inline-flex gap-3 hover:bg-gray-50 transition-all duration-300 hover:shadow-3xl transform hover:-translate-y-1 text-lg font-semibold text-gray-900 bg-white rounded-2xl pt-4 pr-8 pb-4 pl-8 shadow-2xl items-center" role="button">Get a Quote</button>
</div>
</div>

<div className="fade-in-up stagger-5 mt-10 sm:mt-12 animate">
<div className="w-full max-w-3xl bg-white/10 border-white/20 border rounded-2xl mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 backdrop-blur">
<dl className="grid grid-cols-3 divide-x divide-white/15 text-center">
<div className="px-3">
<dd className="counter counter-animate text-3xl font-light leading-tight text-white" data-target="1200">1,200</dd>
<dt className="mt-1 text-xs sm:text-sm text-white/70">Projects Delivered</dt>
</div>
<div className="pr-3 pl-3">
<dd className="counter counter-animate leading-tight text-3xl font-light text-white" data-target="25">25</dd>
<dt className="sm:text-sm text-xs text-white/70 mt-1">Years Experience</dt>
</div>
<div className="pr-3 pl-3">
<dd className="counter counter-animate leading-tight text-3xl font-light text-white" data-target="98">5 stars</dd>
<dt className="sm:text-sm flex gap-1 text-xs text-white/70 mt-1 items-center justify-center">
<svg className="lucide lucide-star w-[14px] h-[14px] text-yellow-400" data-icon-replaced="true" data-lucide="star" fill="currentColor" height="14" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `14px`, height: `14px`, color: `rgb(250, 204, 21)`}} viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 text-yellow-400" data-lucide="star" fill="currentColor" height="14" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 text-yellow-400" data-lucide="star" fill="currentColor" height="14" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 text-yellow-400" data-lucide="star" fill="currentColor" height="14" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="star" fill="currentColor" height="14" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `14px`, height: `14px`, color: `rgb(250, 204, 21)`}} viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</dt>
</div>
</dl>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-neutral-950 pt-32 pb-32" id="expertise">

<div className="parallax-element absolute inset-0 opacity-30" id="expertiseParallax" style={{transform: `translateY(149.22px)`}}>
<div className="absolute top-20 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 blur-3xl" style={{}}></div>
<div className="absolute bottom-20 -left-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl" style={{}}></div>
<div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 blur-3xl" style={{}}></div>
</div>
<div className="relative max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-20">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 rounded-full px-4 py-2 text-sm font-medium mb-6 animate" style={{}}>
<svg className="lucide lucide-compass w-4 h-4" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>Our Services</span>
</div>
<h2 className="fade-in-up stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance animate">
      Excellence in <span className="font-semibold">Every Build</span>
</h2>
<p className="fade-in-up stagger-3 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-balance animate">
      From preconstruction to handover, we deliver end‑to‑end solutions that keep your project on time, on budget, and safe.
    </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="scale-in stagger-1 group animate">
<div className="relative bg-neutral-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-white/10 h-full">
<div className="relative aspect-[16/9] overflow-hidden">
<img alt="Horizontal development earthwork and site infrastructure" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" src="https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=800&q=80" style={{}} />
<div className="absolute inset-0 ring-1 ring-inset ring-white/5"></div>
</div>
<div className="p-8">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-white/5 text-gray-300 grid place-items-center ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-ruler w-5 h-5" data-lucide="ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight">Horizontal Development</h3>
</div>
<p className="text-gray-400 leading-relaxed mb-6">Large‑scale site infrastructure, grading, and access planning.</p>
<a className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all" href="#contact">
<span>Learn More</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="scale-in stagger-2 group lg:-mt-4 animate">
<div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-white/10 bg-gray-900 text-white">
<div className="relative aspect-[16/9]">
<img alt="Site development with grading and utilities" className="w-full h-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" style={{}} />
<div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none rounded-inherit" style={{transform: `translateZ(0)`, willChange: `opacity`}}></div>
<div className="absolute top-5 left-5 inline-flex items-center gap-1 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold ring-1 ring-inset ring-white/20">
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>Most Popular</span>
</div>
</div>
<div className="pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-white/10 text-white grid place-items-center ring-1 ring-inset ring-white/20">
<svg className="lucide lucide-map w-5 h-5" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white">Site Development</h3>
</div>
<p className="text-white/80 leading-relaxed mb-6">End‑to‑end site prep: mass grading, utilities, roads, and readiness.</p>
<a className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all" href="#contact">
<span>Get Started</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="scale-in stagger-3 group animate">
<div className="relative bg-neutral-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-white/10 h-full">
<div className="relative aspect-[16/9] overflow-hidden">
<img alt="Cast-in-place concrete walls and foundations" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" src="https://images.unsplash.com/photo-1580152216273-81250489f69f?w=800&q=80" style={{}} />
<div className="absolute inset-0 ring-1 ring-inset ring-white/5"></div>
</div>
<div className="p-8">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-white/5 text-gray-300 grid place-items-center ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-brick-wall lucide-square w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="brick-wall" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(209, 213, 219)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M12 9v6"></path><path d="M16 15v6"></path><path d="M16 3v6"></path><path d="M3 15h18"></path><path d="M3 9h18"></path><path d="M8 15v6"></path><path d="M8 3v6"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight">Cast‑in‑Place (CIP) Concrete</h3>
</div>
<p className="text-gray-400 leading-relaxed mb-6">Walls, foundations, spillways, and bridge structures.</p>
<a className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all" href="#contact">
<span>Learn More</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="scale-in stagger-4 group animate">
<div className="relative bg-neutral-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-white/10 h-full">
<div className="relative aspect-[16/9] overflow-hidden">
<img alt="Utility installation with trenching and piping" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" src="https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?w=800&q=80" style={{}} />
<div className="absolute inset-0 ring-1 ring-inset ring-white/5"></div>
</div>
<div className="p-8">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-white/5 text-gray-300 grid place-items-center ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-wrench w-5 h-5" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight">Utility Installation</h3>
</div>
<p className="text-gray-400 leading-relaxed mb-6">Water, sewer, power, and communications trenching and tie‑ins.</p>
<a className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all" href="#contact">
<span>Learn More</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="scale-in stagger-5 group animate">
<div className="relative bg-neutral-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-white/10 h-full">
<div className="relative aspect-[16/9] overflow-hidden">
<img alt="Earthwork and grading with heavy machinery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" src="https://images.unsplash.com/photo-1531431057391-da7a1aabd412?w=800&q=80" />
<div className="absolute inset-0 ring-1 ring-inset ring-white/5"></div>
</div>
<div className="p-8">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-white/5 text-gray-300 grid place-items-center ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight">Earthwork & Grading</h3>
</div>
<p className="text-gray-400 leading-relaxed mb-6">Cut, fill, and precision grading with GPS‑guided equipment for rock‑solid site foundations.</p>
<a className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all" href="#contact">
<span>Learn More</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="scale-in stagger-6 group animate">
<div className="relative bg-neutral-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-white/10 h-full">
<div className="relative aspect-[16/9] overflow-hidden">
<img alt="Structural framework and concrete placement" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" src="https://images.unsplash.com/photo-1737942095261-73f3879dab4c?w=800&q=80" />
<div className="absolute inset-0 ring-1 ring-inset ring-white/5"></div>
</div>
<div className="p-8">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-white/5 text-gray-300 grid place-items-center ring-1 ring-inset ring-white/10">
<svg className="lucide lucide-building-2 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(209, 213, 219)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight">Stormwater Management</h3>
</div>
<p className="text-gray-400 leading-relaxed mb-6">Parking decks, equipment pads, tilt‑up panels, and steel erection done to spec.</p>
<a className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all" href="#contact">
<span>Get Details</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section><section className="relative bg-neutral-950 pt-24 pb-24" id="cta">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 right-0 w-[36rem] h-[36rem] bg-indigo-500/10 blur-3xl rounded-full"></div>
<div className="absolute -bottom-24 left-0 w-[28rem] h-[28rem] bg-emerald-500/10 blur-3xl rounded-full"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
<div className="absolute -top-28 -right-20 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
<div className="absolute -bottom-28 -left-20 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>
<div className="relative grid lg:grid-cols-2 gap-10 p-8 sm:p-12">
<div className="flex flex-col justify-center">
<div className="inline-flex items-center gap-2 bg-white/10 text-white/90 rounded-full px-4 py-2 text-sm font-medium ring-1 ring-white/20 mb-6">
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<span>Start your next project</span>
</div>
<h2 className="text-4xl sm:text-5xl font-light tracking-tighter text-white">
            Ready to break ground?
          </h2>
<p className="mt-4 text-lg text-gray-400 max-w-xl">
            Get a fast, accurate bid from our preconstruction team. We’ll review your plans and respond within one business day.
          </p>
<div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 px-6 py-3 text-base font-semibold hover:bg-gray-100" href="#contact">
              Request a Bid
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 ring-1 ring-white/15 text-white px-6 py-3 text-base font-semibold hover:bg-white/15" href="tel:+18005551234">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
              Call Us
            </a>
</div>
<div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/80">
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4 text-green-400" data-lucide="shield-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              Licensed • Bonded • Insured
            </span>
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-clock w-4 h-4 text-blue-300" data-lucide="clock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24" width="16" xmlns="http://www.w.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
              On‑time delivery
            </span>
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-hard-hat w-4 h-4 text-amber-300" data-lucide="hard-hat" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path><path d="M14 6a6 6 0 0 1 6 6v3"></path><path d="M4 15v-3a6 6 0 0 1 6-6"></path><rect height="4" rx="1" width="20" x="2" y="15"></rect></svg>
              Safety‑first culture
            </span>
</div>
</div>
<div className="lg:pl-8">
<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
<div className="relative aspect-[16/10] sm:aspect-[16/9]">
<img alt="Precision earthwork and site development" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
<div className="absolute top-4 left-4 inline-flex items-center gap-1 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold ring-1 ring-inset ring-white/20 text-white">
<span className="size-1.5 rounded-full bg-emerald-400"></span>
                Preconstruction available
              </div>
</div>
<div className="p-5 sm:p-6">
<div className="grid grid-cols-3 gap-4 text-center">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-2xl font-light text-white leading-none">1,200+</div>
<div className="mt-1 text-xs text-white/70">Projects</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-2xl font-light text-white leading-none">25</div>
<div className="mt-1 text-xs text-white/70">Years</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-2xl font-light text-white leading-none">5.0</div>
<div className="mt-1 text-xs text-white/70">Avg. Rating</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-white/10 grid place-items-center ring-1 ring-white/15">
<svg className="lucide lucide-calendar-check w-4.5 h-4.5 text-white" data-lucide="calendar-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<div className="">
<div className="text-sm font-semibold">Schedule a site walk</div>
<div className="text-xs text-gray-400">We can be onsite as early as this week</div>
</div>
</div>
<a className="inline-flex items-center gap-1 text-sm font-semibold text-white hover:underline" href="#contact">
                  Book now
                  <svg className="lucide lucide-chevron-right w-3.5 h-3.5" data-lucide="chevron-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-neutral-950 pt-28 pb-28" id="portfolio">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 right-0 w-[36rem] h-[36rem] bg-indigo-500/10 blur-3xl rounded-full"></div>
<div className="absolute -bottom-32 left-0 w-[28rem] h-[28rem] bg-emerald-500/10 blur-3xl rounded-full"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-14">
<div className="inline-flex items-center gap-2 bg-white/5 text-white/80 rounded-full px-4 py-2 text-sm font-medium ring-1 ring-white/10 mb-4">
<svg className="lucide lucide-grid-3x3 w-4 h-4" data-lucide="grid-3x3" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
              Recent Projects
            </div>
<h2 className="text-4xl sm:text-5xl font-light tracking-tight">Built to Perform</h2>
<p className="text-gray-400 max-w-3xl mx-auto mt-3">A snapshot of complex work delivered across commercial, industrial, and infrastructure sectors.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
<img alt="Distribution center site development" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=1200&q=80" />
<div className="p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold">Logistics Park A</h3>
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-white/80">
<span className="size-1.5 rounded-full bg-emerald-400"></span>
                    Completed
                  </span>
</div>
<p className="text-gray-400 mt-2">1.2M sq ft sitework, utilities, and concrete paving delivered ahead of schedule.</p>
<div className="mt-4 flex items-center gap-3 text-sm text-gray-400">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 2024</span>
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Dallas, TX</span>
</div>
</div>
</article>
<article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
<img alt="CIP concrete and structural works" className="h-56 w-full transition-transform duration-500 group-hover:scale-[1.05] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e0d8c9a2-2823-4106-a4d1-4d42e3aa8f69_800w.jpg" />
<div className="p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold">Water Treatment Upgrade</h3>
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-white/80">
<span className="size-1.5 rounded-full bg-amber-400"></span>
                    In Progress
                  </span>
</div>
<p className="text-gray-400 mt-2">Cast‑in‑place basins, structural steel walkways, and process utility tie‑ins.</p>
<div className="mt-4 flex items-center gap-3 text-sm text-gray-400">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 2025</span>
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Boise, ID</span>
</div>
</div>
</article>
<article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
<img alt="Highway earthwork and grading" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c6fa2e58-1453-4710-b16d-282624017402_800w.jpg" />
<div className="p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold">Highway Interchange</h3>
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-white/80">
<span className="size-1.5 rounded-full bg-emerald-400"></span>
                    Completed
                  </span>
</div>
<p className="text-gray-400 mt-2">Mass excavation, MSE walls, and drainage structures with night operations.</p>
<div className="mt-4 flex items-center gap-3 text-sm text-gray-400">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 2023</span>
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Reno, NV</span>
</div>
</div>
</article>
<article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
<img alt="Urban mixed-use build site" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6c019245-3473-4d9a-b34a-40093bf4bb6f_800w.jpg" />
<div className="p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold">Mixed‑Use Podium</h3>
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-white/80">
<span className="size-1.5 rounded-full bg-emerald-400"></span>
                    Completed
                  </span>
</div>
<p className="text-gray-400 mt-2">Deep foundations, podium slab, and streetscape improvements downtown.</p>
<div className="mt-4 flex items-center gap-3 text-sm text-gray-400">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 2024</span>
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Portland, OR</span>
</div>
</div>
</article>
<article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
<img alt="Utility trenching operations" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6613a349-d1fe-4c83-8a39-9b705906c4b7_800w.jpg" />
<div className="p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold">Utility Corridor</h3>
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-white/80">
<span className="size-1.5 rounded-full bg-amber-400"></span>
                    In Progress
                  </span>
</div>
<p className="text-gray-400 mt-2">1.8 miles of water, sewer, and communications under active traffic control.</p>
<div className="mt-4 flex items-center gap-3 text-sm text-gray-400">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 2025</span>
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Phoenix, AZ</span>
</div>
</div>
</article>
<article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
<img alt="Airport apron concrete paving" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ae71f744-b3c0-4968-85b7-ba3bccc59a25_800w.jpg" />
<div className="p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold">Airport Apron</h3>
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-white/80">
<span className="size-1.5 rounded-full bg-emerald-400"></span>
                    Completed
                  </span>
</div>
<p className="text-gray-400 mt-2">High‑spec concrete paving, jointing, and lighting duct banks for new gates.</p>
<div className="mt-4 flex items-center gap-3 text-sm text-gray-400">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 2023</span>
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Nashville, TN</span>
</div>
</div>
</article>
</div>
<div className="text-center mt-10">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-3 text-sm font-semibold hover:bg-gray-100" href="#contact">
              Request a project review
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section><section className="relative bg-neutral-950 pt-28 pb-28" id="locations">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-indigo-500/10 blur-3xl rounded-full"></div>
</div>
<div className="relative max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-14">
<div className="inline-flex items-center gap-2 bg-white/5 text-white/80 rounded-full px-4 py-2 text-sm font-medium ring-1 ring-white/10 mb-4">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
        Service Areas
      </div>
<h2 className="text-4xl sm:text-5xl font-light tracking-tight">Locations We Service</h2>
<p className="text-gray-400 max-w-3xl mx-auto mt-3">We proudly serve Atlanta and surrounding communities within 50 miles.</p>
</div>
<div className="mx-auto max-w-5xl">
<ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
<li className="group">
<div className="flex items-center gap-2 rounded-2xl bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-gray-200 hover:bg-white/5 transition">
<svg className="lucide lucide-map-pin w-4 h-4 text-white/70" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Atlanta Sandy Springs</span>
</div>
</li>
<li className="group">
<div className="flex items-center gap-2 rounded-2xl bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-gray-200 hover:bg-white/5 transition">
<svg className="lucide lucide-map-pin w-4 h-4 text-white/70" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Alpharetta</span>
</div>
</li>
<li className="group">
<div className="flex items-center gap-2 rounded-2xl bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-gray-200 hover:bg-white/5 transition">
<svg className="lucide lucide-map-pin w-4 h-4 text-white/70" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Roswell</span>
</div>
</li>
<li className="group">
<div className="flex items-center gap-2 rounded-2xl bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-gray-200 hover:bg-white/5 transition">
<svg className="lucide lucide-map-pin w-4 h-4 text-white/70" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="">Johns Creek</span>
</div>
</li>
<li className="group">
<div className="flex items-center gap-2 rounded-2xl bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-gray-200 hover:bg-white/5 transition">
<svg className="lucide lucide-map-pin w-4 h-4 text-white/70" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Smyrna</span>
</div>
</li>
<li className="group">
<div className="flex items-center gap-2 rounded-2xl bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-gray-200 hover:bg-white/5 transition">
<svg className="lucide lucide-map-pin w-4 h-4 text-white/70" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Decatur</span>
</div>
</li>
<li className="group">
<div className="flex items-center gap-2 rounded-2xl bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-gray-200 hover:bg-white/5 transition">
<svg className="lucide lucide-map-pin w-4 h-4 text-white/70" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Brookhaven</span>
</div>
</li>
<li className="group">
<div className="flex items-center gap-2 rounded-2xl bg-neutral-900 border border-white/10 px-4 py-3 text-sm-gray-200 hover:bg-white/5 transition">
<svg className="lucide lucide-map-pin w-4 h-4 text-white/70" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Kennesaw</span>
</div>
</li>
</ul>
<div className="hidden mt-3" id="moreLocations">
<ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
<li className="group">
<div className="flex items-center gap-2 rounded-2xl bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-gray-200 hover:bg-white/5 transition">
<svg className="lucide lucide-map-pin w-4 h-4 text-white/70" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Marietta</span>
</div>
</li>
<li className="group">
<div className="flex items-center gap-2 rounded-2xl bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-gray-200 hover:bg-white/5 transition">
<svg className="lucide lucide-map-pin w-4 h-4 text-white/70" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Dunwoody</span>
</div>
</li>
<li className="group">
<div className="flex items-center gap-2 rounded-2xl bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-gray-200 hover:bg-white/5 transition">
<svg className="lucide lucide-map-pin w-4 h-4 text-white/70" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Peachtree Corners</span>
</div>
</li>
<li className="group">
<div className="flex items-center gap-2 rounded-2xl bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-gray-200 hover:bg-white/5 transition">
<svg className="lucide lucide-map-pin w-4 h-4 text-white/70" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Lawrenceville</span>
</div>
</li>
</ul>
</div>
<div className="text-center mt-8">
<button aria-expanded="false" className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-3 text-sm font-semibold hover:bg-gray-100" id="toggleLocations">
<span className="" data-label-show="">Show more cities we service</span>
<span className="hidden" data-label-hide="">Show fewer cities</span>
<svg className="lucide lucide-chevron-down w-4 h-4 transition-transform" data-chevron="" data-lucide="chevron-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<p className="text-sm text-gray-400 mt-4">We also service up to 50 miles outside of Atlanta.</p>
</div>
</div>
</div>
</section>

<section className="relative bg-neutral-950 pt-28 pb-28" id="testimonials">
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-14">
<div className="inline-flex items-center gap-2 bg-white/5 text-white/80 rounded-full px-4 py-2 text-sm font-medium ring-1 ring-white/10 mb-4">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
              What clients say
            </div>
<h2 className="text-4xl sm:text-5xl font-light tracking-tight">Trusted by Builders & Owners</h2>
<p className="text-gray-400 max-w-3xl mx-auto mt-3">Our relationships are built on safety, communication, and delivering exactly what we promise.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<figure className="relative rounded-3xl border border-white/10 bg-neutral-900 p-6">
<div className="flex items-center gap-3">
<img alt="Client headshot" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200" />
<figcaption>
<div className="font-semibold">Avery Thompson</div>
<div className="text-xs text-gray-400">Project Executive, NorthBridge</div>
</figcaption>
</div>
<blockquote className="mt-4 text-gray-300">2070 consistently hit milestones on a tight schedule. Their safety culture and field coordination are top‑tier.</blockquote>
<div aria-label="5 out of 5 stars" className="mt-4 flex items-center gap-1 text-yellow-400">
<span>★★★★★</span>
</div>
</figure>
<figure className="relative rounded-3xl border border-white/10 bg-neutral-900 p-6">
<div className="flex items-center gap-3">
<img alt="Client headshot" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200" />
<figcaption>
<div className="font-semibold">Jordan Lee</div>
<div className="text-xs text-gray-400">Facilities Director, Summit Health</div>
</figcaption>
</div>
<blockquote className="mt-4 text-gray-300">Transparent pricing, proactive risk management, and clean turnover. We’ll be using them again.</blockquote>
<div aria-label="5 out of 5 stars" className="mt-4 flex items-center gap-1 text-yellow-400">
<span>★★★★★</span>
</div>
</figure>
<figure className="relative rounded-3xl border border-white/10 bg-neutral-900 p-6">
<div className="flex items-center gap-3">
<img alt="Client headshot" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200" />
<figcaption className="">
<div className="font-semibold">Morgan Reyes</div>
<div className="text-xs text-gray-400">Owner’s Rep, CityWorks</div>
</figcaption>
</div>
<blockquote className="mt-4 text-gray-300">The field team solved unexpected conditions without impacting the critical path. True partners.</blockquote>
<div aria-label="5 out of 5 stars" className="mt-4 flex items-center gap-1 text-yellow-400">
<span>★★★★★</span>
</div>
</figure>
</div>
</div>
</section>

<section className="relative bg-neutral-950 pt-28 pb-32" id="contact">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] bg-blue-500/10 blur-3xl rounded-full"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="">
<h2 className="text-4xl sm:text-5xl font-light tracking-tight">Let’s build something exceptional</h2>
<p className="text-gray-400 mt-4">Tell us about your project and we’ll respond within one business day.</p>
<div className="mt-8 space-y-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-white/5 grid place-items-center ring-1 ring-white/10">
<svg className="lucide lucide-phone w-4.5 h-4.5" data-lucide="phone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<a className="font-semibold hover:underline" href="tel:+18005551234">+1 (800) 555‑1234</a>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-white/5 grid place-items-center ring-1 ring-white/10">
<svg className="lucide lucide-mail w-4.5 h-4.5" data-lucide="mail" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<a className="font-semibold hover:underline" href="mailto:bids@2070construction.com">bids@2070construction.com</a>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-white/5 grid place-items-center ring-1 ring-white/10">
<svg className="lucide lucide-map-pin w-4.5 h-4.5" data-lucide="map-pin" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<span className="text-gray-300">123 Main St. Atlanta, GA</span>
</div>
</div>
</div>
<form action="#" className="bg-neutral-900 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl space-y-5" method="post" novalidate="">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-sm text-gray-300 mb-1" htmlFor="name">Full name</label>
<input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" id="name" name="name" placeholder="Jane Doe" required type="text" />
</div>
<div className="">
<label className="block text-sm text-gray-300 mb-1" htmlFor="company">Company</label>
<input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" id="company" name="company" placeholder="Acme Inc." type="text" />
</div>
<div>
<label className="block text-sm text-gray-300 mb-1" htmlFor="email">Email</label>
<input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" id="email" name="email" placeholder="you@company.com" required type="email" />
</div>
<div>
<label className="block text-sm text-gray-300 mb-1" htmlFor="phone">Phone</label>
<input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" id="phone" name="phone" placeholder="(555) 123‑4567" type="tel" />
</div>
<div className="sm:col-span-2">
<label className="block text-sm text-gray-300 mb-1" htmlFor="service">Service needed</label>
<select className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" id="service" name="service">
<option>Site Development</option>
<option>Utility Installation</option>
<option>Earthwork & Grading</option>
<option>CIP Concrete</option>
<option>Structural Steel</option>
<option>Other</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="block text-sm text-gray-300 mb-1" htmlFor="message">Project details</label>
<textarea className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" id="message" name="message" placeholder="Timeline, location, scope..." rows="5"></textarea>
</div>
</div>
<div className="flex items-center justify-between">
<label className="inline-flex items-center gap-2 text-xs text-gray-400">
<input className="rounded border-white/20 bg-white/5 text-indigo-500 focus:ring-indigo-500" required type="checkbox" />
                  I agree to the terms and privacy policy
                </label>
<button className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-5 py-3 shadow-lg" type="submit">
                  Send Request
                  <svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
<p className="text-xs text-gray-500">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-gray-100 text-gray-900 grid place-items-center shadow-sm">
<span className="text-sm font-bold tracking-tighter">2070</span>
</div>
<span className="text-lg font-semibold tracking-tight">2070 Construction</span>
</div>
<p className="text-gray-400 text-sm">Civil, industrial, and commercial delivery with safety and precision.</p>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-white/80">
<svg className="lucide lucide-shield-check w-3.5 h-3.5" data-lucide="shield-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                Licensed • Bonded • Insured
              </span>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-white/80">Company</h3>
<ul className="mt-4 space-y-2 text-gray-400 text-sm">
<li><a className="hover:text-white" href="#hero">Home</a></li>
<li><a className="hover:text-white" href="#expertise">Services</a></li>
<li><a className="hover:text-white" href="#portfolio">Projects</a></li>
<li><a className="hover:text-white" href="#testimonials">Testimonials</a></li>
<li><a className="hover:text-white" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-white/80">Services</h3>
<ul className="mt-4 space-y-2 text-gray-400 text-sm">
<li>Site Development</li>
<li>Utility Installation</li>
<li>Earthwork & Grading</li>
<li>CIP Concrete</li>
<li>Structural Steel</li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-semibold text-white/80">Get in touch</h3>
<ul className="mt-4 space-y-2 text-gray-400 text-sm">
<li className=""><a className="hover:text-white" href="tel:+18005551234">+1 (800) 555‑1234</a></li>
<li className=""><a className="hover:text-white" href="mailto:bids@2070construction.com">bids@2070construction.com</a></li>
<li className="">123 Main St. Atlanta, GA</li>
</ul>
<div className="mt-4 flex items-center gap-3">
<a aria-label="LinkedIn" className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="Instagram" className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="X" className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10" href="#">
<svg aria-hidden="true" className="w-4 h-4" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2H21l-6.56 7.49L22.5 22h-6.9l-4.5-5.86L5.5 22H3l7.03-8.02L1.8 2h7l4.07 5.39zM8.27 3.5H5.64l10.33 13.61h2.63z"></path></svg>
</a>
</div>
</div>
</div>
<div className="pt-8 mt-8 border-t border-white/10 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between">
<p>© <span id="year">2025</span> 2070 Construction. All rights reserved.</p>
<div className="flex items-center gap-4 mt-3 sm:mt-0">
<a className="hover:text-gray-300" href="#">Privacy</a>
<a className="hover:text-gray-300" href="#">Terms</a>
<a className="inline-flex items-center gap- hover:text-gray-300" href="#hero">Back to top
              <svg className="lucide lucide-arrow-up w-3.5 h-3.5" data-lucide="arrow-up" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
