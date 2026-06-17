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



    // Initialize Lucide icons with custom stroke width
    document.addEventListener("DOMContentLoaded", () => {
      if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });

    // Parallax minimal
    class AdvancedParallaxController {
      constructor() {
        this.elements = [{ id: 'heroBase', speed: -0.2 }];
        this.ticking = false;
        this.init();
      }
      init() {
        this.handleScroll();
        window.addEventListener('scroll', this.onScroll.bind(this), { passive: true });
      }
      onScroll() {
        if (!this.ticking) {
          requestAnimationFrame(this.handleScroll.bind(this));
          this.ticking = true;
        }
      }
      handleScroll() {
        const scrolled = window.pageYOffset;
        this.elements.forEach(({ id, speed }) => {
          const el = document.getElementById(id);
          if (el) el.style.transform = `translate3d(0, ${-(scrolled * speed)}px, 0)`;
        });
        this.ticking = false;
      }
    }

    // Scroll animations
    class ScrollAnimationController {
      constructor() {
        this.animatedElements = new Set();
        this.init();
      }
      init() {
        this.handleScroll();
        window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 16), { passive: true });
      }
      handleScroll() {
        const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
        elements.forEach(el => {
          if (this.animatedElements.has(el)) return;
          if (this.isInViewport(el)) {
            el.classList.add('animate');
            this.animatedElements.add(el);
          }
        });
      }
      isInViewport(el) {
        const rect = el.getBoundingClientRect();
        const h = window.innerHeight || document.documentElement.clientHeight;
        return rect.top <= h * 0.85 && rect.bottom >= 0;
      }
      throttle(func, delay) {
        let timeoutId; let lastExecTime = 0;
        return function (...args) {
          const now = Date.now();
          if (now - lastExecTime > delay) { func.apply(this, args); lastExecTime = now; }
          else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => { func.apply(this, args); lastExecTime = Date.now(); }, delay - (now - lastExecTime));
          }
        };
      }
    }

    // Navigation highlighting
    class NavigationController {
      constructor() {
        this.header = document.getElementById('mainHeader');
        this.navLinks = document.querySelectorAll('.section-nav');
        this.sections = ['hero', 'produtos', 'logistica', 'certificados', 'consultoria', 'contato'];
        this.currentSection = 'hero';
        this.init();
      }
      init() {
        this.handleScroll();
        this.setupNavigation();
        window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 16), { passive: true });
      }
      handleScroll() {
        const scrolled = window.pageYOffset;
        if (this.header) {
          const opacity = Math.min(scrolled / 100, 1);
          if (opacity > 0.5) this.header.classList.add('backdrop-blur-xl');
          else this.header.classList.remove('backdrop-blur-xl');
        }
        this.updateActiveSection();
      }
      updateActiveSection() {
        const scrollPosition = window.scrollY + 200;
        for (let i = this.sections.length - 1; i >= 0; i--) {
          const s = document.getElementById(this.sections[i]);
          if (s && scrollPosition >= s.offsetTop) {
            if (this.currentSection !== this.sections[i]) {
              this.setActiveNavItem(this.sections[i]);
              this.currentSection = this.sections[i];
            }
            break;
          }
        }
      }
      setActiveNavItem(sectionId) {
        this.navLinks.forEach(link => {
          const isActive = link.dataset.section === sectionId;
          link.classList.toggle('text-gray-900', isActive);
          link.classList.toggle('text-gray-700', !isActive);
          const bg = link.querySelector('.absolute');
          if (bg) {
            bg.classList.toggle('scale-100', isActive);
            bg.classList.toggle('scale-0', !isActive);
          }
        });
      }
      setupNavigation() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
          link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
              e.preventDefault();
              const offsetTop = target.offsetTop - 80;
              window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
          });
        });
      }
      throttle(func, delay) {
        let timeoutId; let lastExecTime = 0;
        return function (...args) {
          const now = Date.now();
          if (now - lastExecTime > delay) { func.apply(this, args); lastExecTime = now; }
          else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => { func.apply(this, args); lastExecTime = Date.now(); }, delay - (now - lastExecTime));
          }
        };
      }
    }

    // Mobile menu
    class MobileMenuController {
      constructor() {
        this.menuBtn = document.getElementById('mobileMenuBtn');
        this.closeBtn = document.getElementById('closeMobileMenu');
        this.menu = document.getElementById('mobileMenu');
        this.navLinks = document.querySelectorAll('.mobile-nav-link');
        this.init();
      }
      init() {
        this.menuBtn?.addEventListener('click', () => this.openMenu());
        this.closeBtn?.addEventListener('click', () => this.closeMenu());
        this.navLinks.forEach(link => link.addEventListener('click', () => this.closeMenu()));
        this.menu?.addEventListener('click', (e) => { if (e.target === this.menu) this.closeMenu(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') this.closeMenu(); });
      }
      openMenu() {
        this.menu?.classList.remove('translate-x-full');
        document.body.classList.add('overflow-hidden');
      }
      closeMenu() {
        this.menu?.classList.add('translate-x-full');
        document.body.classList.remove('overflow-hidden');
      }
    }

    // Init controllers
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        new AdvancedParallaxController();
        new ScrollAnimationController();
        new NavigationController();
        new MobileMenuController();
      }, 80);
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
      

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out" id="mainHeader">
<div className="absolute inset-0 glass-morphism bg-white/80 border-b border-[#c8c7cc]/60"></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-3 group z-10" href="#hero">
<img alt="Good Pack" className="h-8 w-auto object-contain" data-editable="image" data-name="logo-header" src="https://i.ibb.co/RGjkFSB3/LOGOTIPO-GOODPACK-VAZADO-PADRAO.png"/>
</a>

<nav className="hidden lg:flex items-center">
<div className="flex items-center gap-1 bg-[#c8c7cc]/20 rounded-full p-1.5 glass-morphism">
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group text-gray-700" data-section="hero" href="#hero">
<span className="relative z-10">HOME</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group text-gray-700" data-section="produtos" href="#produtos">
<span className="relative z-10">PRODUTOS</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group text-gray-700" data-section="logistica" href="#logistica">
<span className="relative z-10">EMPRESA</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group text-gray-700" data-section="certificados" href="#certificados">
<span className="relative z-10">CERTIFICADOS</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group text-gray-700" data-section="consultoria" href="#consultoria">
<span className="relative z-10">CONSULTORIA</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group text-gray-700" data-section="contato" href="#contato">
<span className="relative z-10">CONTATO</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
</div>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0166b6] text-white font-medium text-sm hover:bg-[#01589f] transition-all duration-200 shadow-sm hover:shadow-md" href="#contato">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="">Contato</span>
</a>
<button className="lg:hidden p-2 rounded-xl hover:bg-[#c8c7cc]/30 transition-colors" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<div className="fixed inset-0 z-40 lg:hidden transform translate-x-full transition-transform duration-300" id="mobileMenu">
<div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
<div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl">
<div className="p-6">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<img alt="Good Pack" className="h-8 w-auto object-contain" data-editable="image" data-name="logo-mobile" src="https://i.ibb.co/RGjkFSB3/LOGOTIPO-GOODPACK-VAZADO-PADRAO.png"/>
<span className="text-xl font-semibold">Good Pack</span>
</div>
<button className="p-2 rounded-xl hover:bg-gray-100" id="closeMobileMenu">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="space-y-2">
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#hero">
<svg className="lucide lucide-home w-5 h-5 text-gray-500" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            HOME
          </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#produtos">
<svg className="lucide lucide-package w-5 h-5 text-gray-500" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
            PRODUTOS
          </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#logistica">
<svg className="lucide lucide-building-2 w-5 h-5 text-gray-500" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
            EMPRESA
          </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#certificados">
<svg className="lucide lucide-shield-check w-5 h-5 text-gray-500" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
            CERTIFICADOS
          </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#consultoria">
<svg className="lucide lucide-briefcase w-5 h-5 text-gray-500" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
            CONSULTORIA
          </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#contato">
<svg className="lucide lucide-phone w-5 h-5 text-gray-500" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
            CONTATO
          </a>
</nav>
<div className="mt-8 pt-6 border-t border-gray-200">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#0166b6] text-white font-medium hover:bg-[#01589f]" href="#produtos">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            Saiba Mais
          </a>
</div>
</div>
</div>
</div>
<main className="relative">

<section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
<div className="absolute inset-0">
<div className="parallax-element absolute inset-0 scale-110" id="heroBase">
<img alt="Banner Good Pack" className="w-full h-full object-cover placeholder-img" data-editable="image" data-name="hero-bg" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=3840&amp;q=80"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(180deg, rgba(1,102,182,0.65), rgba(1,102,182,0.35), rgba(0,0,0,0.45))'}}></div>
</div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
<div className="max-w-4xl mx-auto">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 glass-morphism bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium mb-8">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="">Embalagens, Logística e Consultoria</span>
</div>
<h1 className="fade-in-up stagger-2 text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.0] mb-4">
            A Solução para sua embalagem!
          </h1>
<p className="fade-in-up stagger-3 text-xl sm:text-2xl text-white/90 font-light leading-relaxed mb-10">
            Good Pack
          </p>
<div className="fade-in-up stagger-4 flex items-center justify-center gap-4">
<a className="inline-flex items-center gap-3 bg-white text-gray-900 px-7 py-4 rounded-2xl font-semibold text-base hover:bg-gray-100 transition-all duration-300 shadow-xl" href="#produtos">
<span>Saiba Mais</span>
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-3 bg-[#0166b6] text-white px-7 py-4 rounded-2xl font-semibold text-base hover:bg-[#01589f] transition-all duration-300 shadow-xl" href="#contato">
<span>Fale Conosco</span>
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</a>
</div>

<div className="fade-in-up stagger-5 mt-10 sm:mt-12">
<div className="mx-auto w-full max-w-3xl rounded-2xl border border-white/25 bg-white/10 px-6 py-5 backdrop-blur">
<dl className="grid grid-cols-3 divide-x divide-white/15 text-center">
<div className="px-3">
<dd className="text-3xl font-light leading-tight text-white">46.000m³</dd>
<dt className="mt-1 text-xs sm:text-sm text-white/80">Capacidade de Armazenagem</dt>
</div>
<div className="px-3">
<dd className="text-3xl font-light leading-tight text-white">Santo André • SP</dd>
<dt className="mt-1 text-xs sm:text-sm text-white/80">Próximo ao Rodoanel</dt>
</div>
<div className="px-3">
<dd className="text-3xl font-light leading-tight text-white">+ Agilidade</dd>
<dt className="mt-1 text-xs sm:text-sm text-white/80">Entregas com velocidade</dt>
</div>
</dl>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-white overflow-hidden" id="produtos">
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-14">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 bg-[#c8c7cc]/40 text-gray-800 rounded-full px-4 py-2 text-sm font-medium mb-5">
<svg className="lucide lucide-package w-4 h-4" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
<span className="">Categorias de Produtos</span>
</div>
<h2 className="fade-in-up stagger-2 text-4xl sm:text-5xl font-light tracking-tight mb-4">
            Soluções completas em embalagens
          </h2>
<p className="fade-in-up stagger-3 text-lg text-gray-600 max-w-3xl mx-auto">
            Linha completa para supermercados, redes de restaurantes e food service. Selecione uma categoria e conheça as opções.
          </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
<a className="scale-in group rounded-2xl border border-gray-200 hover:border-[#0166b6] transition-all overflow-hidden" href="https://goodpack.com.br/categoria-produto/embalagens-congelados/" rel="noopener" target="_blank">
<div className="relative aspect-[16/9] w-full bg-[#c8c7cc]/30 placeholder-img">
<img alt="Embalagens para Congelados" className="absolute inset-0 w-full h-full object-cover" data-editable="image" data-name="cat-embalagens-congelados" src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&amp;q=80"/>
</div>
<div className="p-5 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Embalagens para Congelados</h3>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-[#0166b6]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>
<a className="scale-in group rounded-2xl border border-gray-200 hover:border-[#0166b6] transition-all overflow-hidden" href="https://goodpack.com.br/categoria-produto/pet/" rel="noopener" target="_blank">
<div className="relative aspect-[16/9] w-full bg-[#c8c7cc]/30 placeholder-img">
<img alt="Linha PET" className="absolute inset-0 w-full h-full object-cover" data-editable="image" data-name="cat-pet" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&amp;q=80"/>
</div>
<div className="p-5 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">PET</h3>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-[#0166b6]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>
<a className="scale-in group rounded-2xl border border-gray-200 hover:border-[#0166b6] transition-all overflow-hidden" href="https://goodpack.com.br/categoria-produto/embalagem-para-forno/" rel="noopener" target="_blank">
<div className="relative aspect-[16/9] w-full bg-[#c8c7cc]/30 placeholder-img">
<img alt="Embalagem para Forno" className="absolute inset-0 w-full h-full object-cover" data-editable="image" data-name="cat-forno" src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&amp;q=80"/>
</div>
<div className="p-5 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Embalagem para Forno</h3>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-[#0166b6]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>
<a className="scale-in group rounded-2xl border border-gray-200 hover:border-[#0166b6] transition-all overflow-hidden" href="https://goodpack.com.br/categoria-produto/garrafas-para-suco/" rel="noopener" target="_blank">
<div className="relative aspect-[16/9] w-full bg-[#c8c7cc]/30 placeholder-img">
<img alt="Garrafas para Suco" className="absolute inset-0 w-full h-full object-cover" data-editable="image" data-name="cat-garrafas-suco" src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&amp;q=80"/>
</div>
<div className="p-5 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Garrafas para Suco</h3>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-[#0166b6]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>
<a className="scale-in group rounded-2xl border border-gray-200 hover:border-[#0166b6] transition-all overflow-hidden" href="https://goodpack.com.br/categoria-produto/embalagem-comida-japonesa/" rel="noopener" target="_blank">
<div className="relative aspect-[16/9] w-full bg-[#c8c7cc]/30 placeholder-img">
<img alt="Embalagem Comida Japonesa" className="absolute inset-0 w-full h-full object-cover" data-editable="image" data-name="cat-comida-japonesa" src="https://images.unsplash.com/photo-1478144592103-25e218a04891?w=800&amp;q=80"/>
</div>
<div className="p-5 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Comida Japonesa</h3>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-[#0166b6]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>
<a className="scale-in group rounded-2xl border border-gray-200 hover:border-[#0166b6] transition-all overflow-hidden" href="https://goodpack.com.br/categoria-produto/embalagem-para-forno/" rel="noopener" target="_blank">
<div className="relative aspect-[16/9] w-full bg-[#c8c7cc]/30 placeholder-img">
<img alt="Embalagem para Forno" className="absolute inset-0 w-full h-full object-cover" data-editable="image" data-name="cat-forno-2" src="https://images.unsplash.com/photo-1476837579993-f1d3948f17c2?w=800&amp;q=80"/>
</div>
<div className="p-5 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Embalagem para Forno</h3>
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-[#0166b6]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>
</div>

<div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl border border-gray-200">
<div className="w-11 h-11 rounded-xl bg-[#0166b6]/10 text-[#0166b6] grid place-items-center mb-4">
<svg className="lucide lucide-truck w-6 h-6" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<h4 className="font-semibold tracking-tight mb-1">Agilidade na entrega</h4>
<p className="text-gray-600 text-sm">Expedição rápida e previsível para evitar ruptura nos estoques.</p>
</div>
<div className="p-6 rounded-2xl border border-gray-200">
<div className="w-11 h-11 rounded-xl bg-[#0166b6]/10 text-[#0166b6] grid place-items-center mb-4">
<svg className="lucide lucide-factory w-6 h-6" data-lucide="factory" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01"></path><path d="M16 16h.01"></path><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><path d="M8 16h.01"></path></svg>
</div>
<h4 className="font-semibold tracking-tight mb-1">Excelência comprovada</h4>
<p className="text-gray-600 text-sm">Padrões rigorosos de qualidade, segurança e conformidade.</p>
</div>
<div className="p-6 rounded-2xl border border-gray-200">
<div className="w-11 h-11 rounded-xl bg-[#0166b6]/10 text-[#0166b6] grid place-items-center mb-4">
<svg className="lucide lucide-headphones w-6 h-6" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</div>
<h4 className="font-semibold tracking-tight mb-1">Suporte especializado</h4>
<p className="text-gray-600 text-sm">Atendimento consultivo para supermercados e redes de restaurantes.</p>
</div>
</div>
</div>
</section>

<section className="relative py-28 bg-[#c8c7cc]/20 overflow-hidden" id="logistica">
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="fade-in-left stagger-1 inline-flex items-center gap-2 bg-[#0166b6]/10 text-[#0166b6] rounded-full px-4 py-2 text-sm font-medium mb-6">
<svg className="lucide lucide-route w-4 h-4" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
<span>Logística</span>
</div>
<h2 className="fade-in-left stagger-2 text-4xl sm:text-5xl font-light tracking-tight mb-6">
              Soluções em embalagens
            </h2>
<p className="fade-in-left stagger-3 text-lg text-gray-700 leading-relaxed mb-8">
              Com mais de 46.000m³ de armazenamento e localizados estrategicamente próximo ao rodoanel em Santo André – SP, permite que as entregas sejam realizadas com mais agilidade, evitando ruptura nos estoques dos clientes.
            </p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<svg className="lucide lucide-warehouse w-5 h-5 text-[#0166b6]" data-lucide="warehouse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"></path><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"></path><path d="M6 13h12"></path><path d="M6 17h12"></path></svg>
<span className="text-gray-700">Armazenagem estratégica e controle de estoque</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-clock w-5 h-5 text-[#0166b6]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-gray-700">Lead time reduzido para maior disponibilidade</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-map-pin w-5 h-5 text-[#0166b6]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-gray-700">Cobertura para supermercados e redes de restaurantes</span>
</div>
</div>
</div>
<div className="fade-in-right stagger-2">
<div className="relative rounded-3xl overflow-hidden border border-gray-200 bg-white">
<div className="relative aspect-[4/3] w-full bg-[#c8c7cc]/30 placeholder-img">
<img alt="Operação Logística Good Pack" className="absolute inset-0 w-full h-full object-cover" data-editable="image" data-name="logistica-imagem" src="https://images.unsplash.com/photo-1499125562588-29fb8a56b5d5?w=1600&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-28 bg-white overflow-hidden" id="certificados">
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-14">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 bg-[#c8c7cc]/40 text-gray-800 rounded-full px-4 py-2 text-sm font-medium mb-5">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>Conformidade e Qualidade</span>
</div>
<h2 className="fade-in-up stagger-2 text-4xl sm:text-5xl font-light tracking-tight mb-4">
            CERTIFICADOS
          </h2>
<p className="fade-in-up stagger-3 text-lg text-gray-600 max-w-3xl mx-auto">
            Nós temos os mais sólidos certificados que comprovam a excelência e expertise no segmento de embalagens.
          </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="scale-in rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
<div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden placeholder-img">
<img alt="Certificado 01" className="absolute inset-0 w-full h-full object-cover" data-editable="image" data-name="cert-01" src="https://goodpack.com.br/wp-content/uploads/2024/08/certificados_01.jpg?w=800&amp;q=80"/>
</div>
</div>
<div className="scale-in rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
<div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden placeholder-img">
<img alt="Certificado 02" className="absolute inset-0 w-full h-full object-cover" data-editable="image" data-name="cert-02" src="https://goodpack.com.br/wp-content/uploads/2024/08/certificados_02.jpg?w=800&amp;q=80"/>
</div>
</div>
<div className="scale-in rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
<div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden placeholder-img">
<img alt="Certificado 03" className="absolute inset-0 w-full h-full object-cover" data-editable="image" data-name="cert-03" src="https://goodpack.com.br/wp-content/uploads/2024/08/certificados_03.jpg?w=800&amp;q=80"/>
</div>
</div>
<div className="scale-in rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
<div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden placeholder-img">
<img alt="Certificado 04" className="absolute inset-0 w-full h-full object-cover" data-editable="image" data-name="cert-04" src="https://goodpack.com.br/wp-content/uploads/2024/08/certificados_04.jpg?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-28 bg-[#c8c7cc]/20 overflow-hidden" id="consultoria">
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-14">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 bg-[#0166b6]/10 text-[#0166b6] rounded-full px-4 py-2 text-sm font-medium mb-5">
<svg className="lucide lucide-briefcase w-4 h-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span>Consultoria Especializada</span>
</div>
<h2 className="fade-in-up stagger-2 text-4xl sm:text-5xl font-light tracking-tight mb-4">
            Consultoria
          </h2>
<p className="fade-in-up stagger-3 text-lg text-gray-700 max-w-4xl mx-auto">
            Nós estamos presentes como consultores nos supermercados e redes de restaurantes em todo o Brasil. Treinamento, implantação, trade marketing e muito mais para alavancar as vendas e melhorar a experiência do consumidor.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
<div className="p-6 bg-white rounded-2xl border border-gray-200">
<div className="w-11 h-11 rounded-xl bg-[#0166b6]/10 text-[#0166b6] grid place-items-center mb-4">
<svg className="lucide lucide-book-open w-6 h-6" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<h4 className="font-semibold tracking-tight mb-1">Treinamento</h4>
<p className="text-gray-600 text-sm">Capacitação de equipes para performance em PDV, manipulação e exposição.</p>
</div>
<div className="p-6 bg-white rounded-2xl border border-gray-200">
<div className="w-11 h-11 rounded-xl bg-[#0166b6]/10 text-[#0166b6] grid place-items-center mb-4">
<svg className="lucide lucide-settings w-6 h-6" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h4 className="font-semibold tracking-tight mb-1">Implantação</h4>
<p className="text-gray-600 text-sm">Suporte do planejamento à execução com otimização operacional.</p>
</div>
<div className="p-6 bg-white rounded-2xl border border-gray-200">
<div className="w-11 h-11 rounded-xl bg-[#0166b6]/10 text-[#0166b6] grid place-items-center mb-4">
<svg className="lucide lucide-megaphone w-6 h-6" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
</div>
<h4 className="font-semibold tracking-tight mb-1">Trade Marketing</h4>
<p className="text-gray-600 text-sm">Ações em loja para giro, visibilidade e melhor experiência do consumidor.</p>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
<div className="relative aspect-square w-full bg-[#c8c7cc]/30 placeholder-img">
<img alt="Consultoria 01" className="absolute inset-0 w-full h-full object-cover" data-editable="image" data-name="consult-01" src="https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?w=800&amp;q=80"/>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
<div className="relative aspect-square w-full bg-[#c8c7cc]/30 placeholder-img">
<img alt="Consultoria 02" className="absolute inset-0 w-full h-full object-cover" data-editable="image" data-name="consult-02" src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&amp;q=80"/>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
<div className="relative aspect-square w-full bg-[#c8c7cc]/30 placeholder-img">
<img alt="Consultoria 03" className="absolute inset-0 w-full h-full object-cover" data-editable="image" data-name="consult-03" src="https://images.unsplash.com/photo-1572402123736-c79526db405a?w=800&amp;q=80"/>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
<div className="relative aspect-square w-full bg-[#c8c7cc]/30 placeholder-img">
<img alt="Consultoria 04" className="absolute inset-0 w-full h-full object-cover" data-editable="image" data-name="consult-04" src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&amp;q=80"/>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
<div className="relative aspect-square w-full bg-[#c8c7cc]/30 placeholder-img">
<img alt="Consultoria 05" className="absolute inset-0 w-full h-full object-cover" data-editable="image" data-name="consult-05" src="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=800&amp;q=80"/>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
<div className="relative aspect-square w-full bg-[#c8c7cc]/30 placeholder-img">
<img alt="Consultoria 06" className="absolute inset-0 w-full h-full object-cover" data-editable="image" data-name="consult-06" src="https://images.unsplash.com/photo-1514583079045-e928a4732ade?w=800&amp;q=80"/>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
<div className="relative aspect-square w-full bg-[#c8c7cc]/30 placeholder-img">
<img alt="Consultoria 07" className="absolute inset-0 w-full h-full object-cover" data-editable="image" data-name="consult-07" src="https://images.unsplash.com/photo-1618260762313-3f23f6e8acc1?w=800&amp;q=80"/>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
<div className="relative aspect-square w-full bg-[#c8c7cc]/30 placeholder-img">
<img alt="Consultoria 08" className="absolute inset-0 w-full h-full object-cover" data-editable="image" data-name="consult-08" src="https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 bg-[#0166b6] text-white" id="cta-final">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
<h3 className="text-3xl sm:text-4xl font-light tracking-tight mb-6">
          Pronto para elevar a experiência do seu cliente?
        </h3>
<a className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-base hover:bg-gray-100 transition-all duration-300 shadow-xl" href="https://goodpack.com.br/produtos/" rel="noopener" target="_blank">
<span>Veja todas as nossas soluções</span>
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<section className="relative py-28 bg-white overflow-hidden" id="contato">
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="fade-in-left stagger-1 inline-flex items-center gap-2 bg-[#c8c7cc]/40 text-gray-800 rounded-full px-4 py-2 text-sm font-medium mb-6">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>Atendimento</span>
</div>
<h2 className="fade-in-left stagger-2 text-4xl sm:text-5xl font-light tracking-tight mb-6">
              Fale com a Good Pack
            </h2>
<p className="fade-in-left stagger-3 text-lg text-gray-700 leading-relaxed mb-8">
              Nosso time está pronto para atender sua demanda com rapidez e precisão.
            </p>
<div className="space-y-6">
<div className="flex items-start gap-4 p-4 rounded-2xl bg-[#c8c7cc]/20">
<div className="w-12 h-12 rounded-xl bg-[#0166b6]/10 text-[#0166b6] grid place-items-center">
<svg className="lucide lucide-map-pin w-6 h-6" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<h4 className="font-semibold">Endereço</h4>
<p className="text-gray-700">Rua Vinte e Quatro de Fevereiro, 658, Bairro Casa Branca, Santo André, São Paulo – 09015-610</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl bg-[#c8c7cc]/20">
<div className="w-12 h-12 rounded-xl bg-[#0166b6]/10 text-[#0166b6] grid place-items-center">
<svg className="lucide lucide-phone w-6 h-6" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<h4 className="font-semibold">Telefones</h4>
<p className="text-gray-700">(11) 4433•2400</p>
<p className="text-gray-700">(11) 96497•8180</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl bg-[#c8c7cc]/20">
<div className="w-12 h-12 rounded-xl bg-[#0166b6]/10 text-[#0166b6] grid place-items-center">
<svg className="lucide lucide-mail w-6 h-6" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<h4 className="font-semibold">E-mails</h4>
<p className="text-gray-700">contato@goodpack.com.br</p>
<p className="text-gray-700">sac@goodpack.com.br</p>
</div>
</div>
</div>
</div>

<div className="scale-in stagger-2">
<div className="relative rounded-3xl overflow-hidden border border-gray-200 bg-white">
<div className="relative aspect-[4/3] w-full bg-[#c8c7cc]/30 placeholder-img">
<img alt="Localização Good Pack" className="absolute inset-0 w-full h-full object-cover" data-editable="image" data-name="contato-imagem" src="https://images.unsplash.com/photo-1638366171129-2d046c95b422?w=1600&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-gray-900 text-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
<div className="">
<div className="flex items-center gap-3 mb-6">
<img alt="Good Pack" className="h-10 w-auto object-contain" data-editable="image" data-name="logo-footer" src="https://goodpack.com.br/wp-content/uploads/2024/08/LOGOTIPO_GOODPACK_BRANCO_PADRAO.png"/>
<div className="">
<p className="text-[#c8c7cc] text-sm">A Solução para sua embalagem!</p>
</div>
</div>
<p className="text-[#c8c7cc] leading-relaxed">
            Rua Vinte e Quatro de Fevereiro, 658, Bairro Casa Branca, Santo André, São Paulo – 09015-610
          </p>
</div>
<div>
<h4 className="font-semibold mb-6 text-lg">Contato</h4>
<div className="space-y-2 text-[#c8c7cc]">
<div className="flex items-center gap-3">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>(11) 4433•2400</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-phone-call w-5 h-5" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>(11) 96497•8180</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span>contato@goodpack.com.br</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-inbox w-5 h-5" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
<span>sac@goodpack.com.br</span>
</div>
</div>
</div>
<div>
<h4 className="font-semibold mb-6 text-lg">Links</h4>
<div className="space-y-3">
<a className="block text-[#c8c7cc] hover:text-white transition-colors" href="#produtos">Produtos</a>
<a className="block text-[#c8c7cc] hover:text-white transition-colors" href="#logistica">Empresa</a>
<a className="block text-[#c8c7cc] hover:text-white transition-colors" href="#certificados">Certificados</a>
<a className="block text-[#c8c7cc] hover:text-white transition-colors" href="#consultoria">Consultoria</a>
<a className="block text-[#c8c7cc] hover:text-white transition-colors" href="#contato">Contato</a>
</div>
</div>
<div>
<h4 className="font-semibold mb-6 text-lg">Selos e Certificações</h4>
<div className="grid grid-cols-3 gap-3">
<div className="rounded-lg overflow-hidden border border-gray-800 bg-white p-2">
<div className="relative aspect-square w-full bg-[#c8c7cc]/50 placeholder-img">
<img alt="Selo Parceiro do selo eureciclo" className="absolute inset-0 w-full h-full object-contain" data-editable="image" data-name="selo-eureciclo" src="https://via.placeholder.com/200x200?text=eureciclo"/>
</div>
</div>
<div className="rounded-lg overflow-hidden border border-gray-800 bg-white p-2">
<div className="relative aspect-square w-full bg-[#c8c7cc]/50 placeholder-img">
<img alt="Google Safe" className="absolute inset-0 w-full h-full object-contain" data-editable="image" data-name="selo-google-safe" src="https://via.placeholder.com/200x200?text=Google+Safe"/>
</div>
</div>
<div className="rounded-lg overflow-hidden border border-gray-800 bg-white p-2">
<div className="relative aspect-square w-full bg-[#c8c7cc]/50 placeholder-img">
<img alt="Logo Anvisa" className="absolute inset-0 w-full h-full object-contain" data-editable="image" data-name="selo-anvisa" src="https://via.placeholder.com/200x200?text=ANVISA"/>
</div>
</div>
</div>
</div>
</div>
<div className="border-t border-gray-800 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-[#c8c7cc] text-sm">Good Pack Indústria, Comércio E Representações Ltda. • CNPJ: 66988437000193</p>
<div className="flex items-center gap-6 text-sm text-[#c8c7cc]">
<a className="hover:text-white transition-colors" href="https://goodpack.com.br/produtos/" rel="noopener" target="_blank">Produtos</a>
<a className="hover:text-white transition-colors" href="#certificados">Certificados</a>
<a className="hover:text-white transition-colors" href="#consultoria">Consultoria</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
