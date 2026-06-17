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



      // Initialize Lucide icons with global stroke width 1.5
      document.addEventListener("DOMContentLoaded", () => {
        if (window.lucide) lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      });

      // Enhanced Parallax Controller with Performance Optimization
      class AdvancedParallaxController {
        constructor() {
          this.elements = [
            { id: 'heroBase', speed: -0.3 },
            { id: 'heroFloat', speed: -0.1 },
            { id: 'aboutParallax', speed: 0.2 },
            { id: 'expertiseParallax', speed: 0.15 },
            { id: 'portfolioParallax1', speed: -0.1 },
            { id: 'portfolioParallax2', speed: 0.15 },
            { id: 'testimonialsParallax', speed: -0.05 },
            { id: 'contactParallax', speed: 0.1 }
          ];
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
          const windowHeight = window.innerHeight;
          
          this.elements.forEach(({ id, speed }) => {
            const element = document.getElementById(id);
            if (element) {
              const elementTop = element.offsetTop;
              const elementBottom = elementTop + element.offsetHeight;
              
              if (scrolled + windowHeight > elementTop - windowHeight && scrolled < elementBottom + windowHeight) {
                const yPos = -(scrolled * speed);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
              }
            }
          });
          
          this.ticking = false;
        }
      }

      // Enhanced Scroll Animation Controller
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
          
          elements.forEach(element => {
            if (this.animatedElements.has(element)) return;
            
            if (this.isInViewport(element)) {
              element.classList.add('animate');
              this.animatedElements.add(element);
            }
          });
        }

        isInViewport(element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;
          
          return rect.top <= windowHeight * 0.85 && rect.bottom >= 0;
        }

        throttle(func, delay) {
          let timeoutId;
          let lastExecTime = 0;
          return function (...args) {
            const currentTime = Date.now();
            if (currentTime - lastExecTime > delay) {
              func.apply(this, args);
              lastExecTime = currentTime;
            } else {
              clearTimeout(timeoutId);
              timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
              }, delay - (currentTime - lastExecTime));
            }
          };
        }
      }

      // Enhanced Counter Animation
      class CounterAnimationController {
        constructor() {
          this.counters = document.querySelectorAll('.counter');
          this.animatedCounters = new Set();
          this.init();
        }

        init() {
          this.handleScroll();
          window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 100), { passive: true });
        }

        handleScroll() {
          this.counters.forEach(counter => {
            if (this.animatedCounters.has(counter)) return;
            
            if (this.isInViewport(counter)) {
              this.animateCounter(counter);
              this.animatedCounters.add(counter);
            }
          });
        }

        animateCounter(counter) {
          const target = parseInt(counter.dataset.target);
          const duration = 2000;
          const increment = target / (duration / 16);
          let current = 0;

          counter.classList.add('counter-animate');

          const updateCounter = () => {
            current += increment;
            if (current >= target) {
              counter.textContent = target;
              return;
            }
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          };

          updateCounter();
        }

        isInViewport(element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;
          
          return rect.top <= windowHeight * 0.8 && rect.bottom >= 0;
        }

        throttle(func, delay) {
          let timeoutId;
          let lastExecTime = 0;
          return function (...args) {
            const currentTime = Date.now();
            if (currentTime - lastExecTime > delay) {
              func.apply(this, args);
              lastExecTime = currentTime;
            } else {
              clearTimeout(timeoutId);
              timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
              }, delay - (currentTime - lastExecTime));
            }
          };
        }
      }

      // Navigation Controller
      class NavigationController {
        constructor() {
          this.header = document.getElementById('mainHeader');
          this.navLinks = document.querySelectorAll('.section-nav');
          this.sections = ['inicio', 'sobre-nos', 'segmentos', 'produtos', 'representadas', 'qualidade', 'contato'];
          this.currentSection = 'inicio';
          this.init();
        }

        init() {
          this.handleScroll();
          this.setupNavigation();
          window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 16), { passive: true });
        }

        handleScroll() {
          const scrolled = window.pageYOffset;
          
          // Header styling
          if (this.header) {
            const opacity = Math.min(scrolled / 100, 1);
            if (opacity > 0.5) {
              this.header.classList.add('backdrop-blur-xl');
            } else {
              this.header.classList.remove('backdrop-blur-xl');
            }
          }

          // Section detection
          this.updateActiveSection();
        }

        updateActiveSection() {
          const scrollPosition = window.scrollY + 200;
          
          for (let i = this.sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(this.sections[i]);
            if (section && scrollPosition >= section.offsetTop) {
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
            const bgEl = link.querySelector('.absolute');
            if (isActive) {
              link.classList.add('text-gray-900');
              link.classList.remove('text-gray-600');
              if (bgEl) { bgEl.classList.remove('scale-0'); bgEl.classList.add('scale-100'); }
            } else {
              link.classList.remove('text-gray-900');
              link.classList.add('text-gray-600');
              if (bgEl) { bgEl.classList.add('scale-0'); bgEl.classList.remove('scale-100'); }
            }
          });
        }

        setupNavigation() {
          document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
              const href = link.getAttribute('href');
              const target = document.querySelector(href);
              if (href && target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
              }
            });
          });
        }

        throttle(func, delay) {
          let timeoutId;
          let lastExecTime = 0;
          return function (...args) {
            const currentTime = Date.now();
            if (currentTime - lastExecTime > delay) {
              func.apply(this, args);
              lastExecTime = currentTime;
            } else {
              clearTimeout(timeoutId);
              timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
              }, delay - (currentTime - lastExecTime));
            }
          };
        }
      }

      // Mobile Menu Controller
      class MobileMenuController {
        constructor() {
          this.menuBtn = document.getElementById('mobileMenuBtn');
          this.closeBtn = document.getElementById('closeMobileMenu');
          this.menu = document.getElementById('mobileMenu');
          this.navLinks = document.querySelectorAll('.mobile-nav-link');
          this.init();
        }

        init() {
          if (this.menuBtn) {
            this.menuBtn.addEventListener('click', () => this.openMenu());
          }
          
          if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.closeMenu());
          }

          this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
          });

          if (this.menu) {
            this.menu.addEventListener('click', (e) => {
              if (e.target === this.menu) {
                this.closeMenu();
              }
            });
          }

          document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
              this.closeMenu();
            }
          });
        }

        openMenu() {
          if (this.menu) {
            this.menu.classList.remove('translate-x-full');
            document.body.classList.add('overflow-hidden');
          }
        }

        closeMenu() {
          if (this.menu) {
            this.menu.classList.add('translate-x-full');
            document.body.classList.remove('overflow-hidden');
          }
        }
      }

      // Initialize all controllers when DOM is loaded
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
          new AdvancedParallaxController();
          new ScrollAnimationController();
          new CounterAnimationController();
          new NavigationController();
          new MobileMenuController();
        }, 100);
      });

      // Performance optimization (no-op placeholder)
      let ticking = false;
      function updateOnScroll() {
        if (!ticking) {
          requestAnimationFrame(() => { ticking = false; });
          ticking = true;
        }
      }
      window.addEventListener('scroll', updateOnScroll, { passive: true });
    
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
<div className="absolute inset-0 glass-morphism bg-white/85 border-b border-gray-200/60"></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-3 group z-10" href="#inicio">
<div className="w-9 h-9 rounded-xl bg-white grid place-items-center shadow-sm overflow-hidden border border-gray-200">
<img alt="Neotrade" className="w-full h-full object-contain" src="https://i.ibb.co/pBm41ptr/Logo-Lumen-8.png"/>
</div>
<span className="text-xl font-semibold tracking-tight">Neotrade</span>
</a>

<nav className="hidden lg:flex items-center">
<div className="flex items-center gap-1 bg-gray-100/80 rounded-full p-1.5 glass-morphism">
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="inicio" href="#inicio">
<span className="relative z-10">INÍCIO</span>
<div className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" style={{background: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.06)'}}></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="sobre-nos" href="#sobre-nos">
<span className="relative z-10">SOBRE NÓS</span>
<div className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" style={{background: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.06)'}}></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="segmentos" href="#segmentos">
<span className="relative z-10">SEGMENTOS DE MERCADO</span>
<div className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" style={{background: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.06)'}}></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="produtos" href="#produtos">
<span className="relative z-10">PRODUTOS</span>
<div className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" style={{background: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.06)'}}></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="representadas" href="#representadas">
<span className="relative z-10">REPRESENTADAS</span>
<div className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" style={{background: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.06)'}}></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="qualidade" href="#qualidade">
<span className="relative z-10">QUALIDADE</span>
<div className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" style={{background: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.06)'}}></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="contato" href="#contato">
<span className="relative z-10">CONTATO</span>
<div className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" style={{background: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.06)'}}></div>
</a>
</div>
</nav>

<div className="flex items-center gap-3">

<div className="hidden md:flex items-center gap-2">
<a aria-label="LinkedIn" className="p-2 rounded-xl hover:bg-gray-100 transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="Instagram" className="p-2 rounded-xl hover:bg-gray-100 transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="Facebook" className="p-2 rounded-xl hover:bg-gray-100 transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>

<div className="hidden md:flex items-center rounded-xl border border-gray-200 overflow-hidden">
<div className="w-px h-5 bg-gray-200"></div>
</div>
<a className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md" href="#contato" style={{background: '#018c43'}}>
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span>Fale Conosco</span>
</a>
<button aria-label="Menu" className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors" id="mobileMenuBtn">
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
<div className="w-9 h-9 rounded-xl bg-white grid place-items-center overflow-hidden border border-gray-200">
<img alt="Neotrade" className="w-full h-full object-contain" src="https://i.ibb.co/pBm41ptr/Logo-Lumen-8.png"/>
</div>
<span className="text-xl font-semibold">Neotrade</span>
</div>
<button aria-label="Fechar menu" className="p-2 rounded-xl hover:bg-gray-100" id="closeMobileMenu">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="space-y-2">
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#inicio">
<svg className="lucide lucide-home w-5 h-5 text-gray-500" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
              INÍCIO
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#sobre-nos">
<svg className="lucide lucide-users w-5 h-5 text-gray-500" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
              SOBRE NÓS
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#segmentos">
<svg className="lucide lucide-grid-3x3 w-5 h-5 text-gray-500" data-lucide="grid-3x3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
              SEGMENTOS DE MERCADO
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#produtos">
<svg className="lucide lucide-package w-5 h-5 text-gray-500" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
              PRODUTOS
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#representadas">
<svg className="lucide lucide-briefcase w-5 h-5 text-gray-500" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
              REPRESENTADAS
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#qualidade">
<svg className="lucide lucide-shield-check w-5 h-5 text-gray-500" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              QUALIDADE
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#contato">
<svg className="lucide lucide-mail w-5 h-5 text-gray-500" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
              CONTATO
            </a>
</nav>
<div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
<div className="flex items-center gap-2">
<a aria-label="LinkedIn" className="p-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="Instagram" className="p-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="Facebook" className="p-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
<div className="flex items-center rounded-xl border border-gray-200 overflow-hidden">
<button className="px-3 py-2 text-sm font-medium hover:bg-gray-50 flex items-center gap-1">
<span>🇧🇷</span><span>PT</span>
</button>
<div className="w-px h-5 bg-gray-200"></div>
<button className="px-3 py-2 text-sm font-medium hover:bg-gray-50 flex items-center gap-1">
<span>🇺🇸</span><span>EN</span>
</button>
</div>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium" href="#contato" style={{background: '#018c43'}}>
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
              Fale Conosco
            </a>
</div>
</div>
</div>
</div>
<main className="relative">

<section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="inicio">

<div className="absolute inset-0">
<div className="parallax-element absolute inset-0 scale-110" id="heroBase" style={{transform: 'translate3d(0px, 0px, 0px)'}}>

<img alt="Imagem do destaque (hero)" className="w-full h-full object-cover" data-aurabuild="image" data-field="hero_background" src="https://images.unsplash.com/photo-1693919653649-27492e78899d?w=3840&amp;q=80"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(1,140,67,0.60), rgba(1,140,67,0.20))'}}></div>
</div>

<div className="parallax-element absolute inset-0" id="heroFloat" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
<div className="absolute top-20 right-20 w-32 h-32 rounded-3xl border hidden lg:block transform rotate-12" style={{background: 'rgba(255, 255, 255, 0.10)', borderColor: 'rgba(255,255,255,0.20)'}}></div>
<div className="absolute bottom-40 left-20 w-24 h-24 rounded-2xl border hidden lg:block transform -rotate-6" style={{background: 'rgba(255, 255, 255, 0.06)', borderColor: 'rgba(255,255,255,0.12)'}}></div>
</div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
<div className="max-w-4xl mx-auto">

<div className="fade-in-up stagger-1 inline-flex items-center gap-2 glass-morphism rounded-full px-4 py-2 text-white text-sm font-medium mb-8 border" style={{background: 'rgba(255, 255, 255, 0.12)', borderColor: 'rgba(255,255,255,0.24)'}}>
<svg className="lucide lucide-globe-2 w-4 h-4" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>Importação e Distribuição de Matéria-Prima Química desde 1992</span>
</div>

<h1 className="fade-in-up stagger-2 text-5xl sm:text-6xl lg:text-7xl font-light tracking-tighter text-white leading-[0.95] mb-8">
<span className="block">Conectando a indústria</span>
<span className="block font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">aos melhores insumos do mundo</span>
</h1>

<p className="fade-in-up stagger-3 text-xl sm:text-2xl text-white/90 font-light leading-relaxed mb-12 max-w-3xl mx-auto text-balance">
              Especialistas em importação direta e distribuição local de especialidades químicas, com parceiros estratégicos nas Américas, Europa e Ásia.
            </p>

<div className="fade-in-up stagger-4 flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1" href="#segmentos" style={{background: '#018c43'}}>
<span>Ver Segmentos</span>
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-4 text-white font-medium text-lg group" href="#contato">
<div className="w-14 h-14 rounded-full glass-morphism border grid place-items-center group-hover:scale-110 transition-transform duration-300" style={{background: 'rgba(255, 255, 255, 0.20)', borderColor: 'rgba(255,255,255,0.32)'}}>
<svg className="lucide lucide-phone w-6 h-6" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<span className="group-hover:text-white/80 transition-colors">Falar com um especialista</span>
</a>
</div>
</div>

<div className="fade-in-up stagger-5 mt-10 sm:mt-12">
<div className="mx-auto w-full max-w-3xl rounded-2xl border px-6 py-5 backdrop-blur" style={{borderColor: 'rgba(255, 255, 255, 0.24)', background: 'rgba(255,255,255,0.10)'}}>
<dl className="grid grid-cols-3 divide-x text-center" style={{divideColor: 'rgba(255,255,255,0.20)'}}>
<div className="px-3">
<dd className="counter counter-animate text-3xl font-light leading-tight text-white" data-target="33">0</dd>
<dt className="mt-1 text-xs sm:text-sm text-white/70">Anos de atuação</dt>
</div>
<div className="px-3">
<dd className="counter counter-animate text-3xl font-light leading-tight text-white" data-target="30">0</dd>
<dt className="mt-1 text-xs sm:text-sm text-white/70">Parceiros globais</dt>
</div>
<div className="px-3">
<dd className="counter counter-animate text-3xl font-light leading-tight text-white" data-target="12">0</dd>
<dt className="mt-1 text-xs sm:text-sm text-white/70">Segmentos atendidos</dt>
</div>
</dl>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-white overflow-hidden" id="sobre-nos">

<div className="parallax-element absolute inset-0 opacity-20" id="aboutParallax" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
<div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl" style={{background: 'linear-gradient(135deg, #e7f6ed, #f0fdf4)'}}></div>
<div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl" style={{background: 'linear-gradient(135deg, #eef2ff, #f5f7ff)'}}></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<div className="fade-in-left stagger-1 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6" style={{background: '#e8f6ee', color: '#018c43'}}>
<svg className="lucide lucide-building-2 w-4 h-4" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
<span>Sobre Nós</span>
</div>
<h2 className="fade-in-left stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
                Excelência em <span className="font-semibold" style={{color: '#018c43'}}>comércio químico</span> desde 1992
              </h2>

<div className="space-y-5 fade-in-left stagger-3 text-xl text-gray-700 leading-relaxed mb-8 text-balance">
<p>Iniciamos nossas atividades em 1992, importando e comercializando matéria-prima para diversos segmentos da indústria química.</p>
<p>Nos tornamos especialistas no desenvolvimento de soluções para o serviço de importação direta, como também, para distribuição local de especialidades químicas.</p>
<p>Temos uma rede de contato que conta com parceiros estratégicos, distribuídos pelas Américas, Europa e Ásia.</p>
<p>Nosso principal objetivo é estar em constante aperfeiçoamento, atendendo às necessidades, gerando valor e buscando sempre melhorar o nível de serviço oferecido aos nossos clientes.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
<div className="fade-in-left stagger-4 flex items-center gap-3 p-4 rounded-xl border" style={{borderColor: '#c8c7cc'}}>
<div className="w-10 h-10 rounded-lg grid place-items-center text-white" style={{background: '#018c43'}}>
<svg className="lucide lucide-ship w-5 h-5" data-lucide="ship" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10.189V14"></path><path d="M12 2v3"></path><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"></path><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</div>
<div>
<div className="font-semibold">Importação direta</div>
<div className="text-gray-600 text-sm">Operação ponta a ponta</div>
</div>
</div>
<div className="fade-in-left stagger-5 flex items-center gap-3 p-4 rounded-xl border" style={{borderColor: '#c8c7cc'}}>
<div className="w-10 h-10 rounded-lg grid place-items-center text-white" style={{background: '#018c43'}}>
<svg className="lucide lucide-warehouse w-5 h-5" data-lucide="warehouse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"></path><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"></path><path d="M6 13h12"></path><path d="M6 17h12"></path></svg>
</div>
<div>
<div className="font-semibold">Distribuição local</div>
<div className="text-gray-600 text-sm">Especialidades químicas</div>
</div>
</div>
</div>
<a className="fade-in-left stagger-6 inline-flex items-center gap-3 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" href="#contato" style={{background: '#018c43'}}>
<span>Solicitar contato</span>
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="relative">
<div className="fade-in-right stagger-2 relative">
<div className="w-full h-96 lg:h-[500px] rounded-3xl shadow-2xl bg-gray-100 border border-gray-200 overflow-hidden">
<img alt="Imagem institucional" className="w-full h-full object-cover" data-aurabuild="image" data-field="about_image" src="https://images.unsplash.com/photo-1481253127861-534498168948?w=1600&amp;q=80"/>
</div>

<div className="scale-in stagger-4 absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border" style={{borderColor: '#c8c7cc'}}>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl text-white grid place-items-center" style={{background: '#018c43'}}>
<svg className="lucide lucide-globe w-6 h-6" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div>
<div className="counter text-2xl font-semibold" data-target="30">0</div>
<div className="text-gray-600 text-sm">Parceiros estratégicos</div>
</div>
</div>
</div>

<div className="scale-in stagger-3 absolute -top-4 -right-4 text-white rounded-2xl px-6 py-3 shadow-lg" style={{background: '#018c43'}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-badge-check w-4 h-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-semibold">Desde 1992</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-gray-50 overflow-hidden" id="segmentos">
<div className="parallax-element absolute inset-0 opacity-30" id="expertiseParallax" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
<div className="absolute top-20 -right-40 w-96 h-96 rounded-full blur-3xl" style={{background: 'linear-gradient(135deg, #dff4e8, #e9fbe5)'}}></div>
<div className="absolute bottom-20 -left-40 w-80 h-80 rounded-full blur-3xl" style={{background: 'linear-gradient(135deg, #eef2ff, #f5f7ff)'}}></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6" style={{background: '#e8f6ee', color: '#018c43'}}>
<svg className="lucide lucide-grid w-4 h-4" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
<span>Segmentos de Mercado</span>
</div>
<h2 className="fade-in-up stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
              Atuação ampla, <span className="font-semibold" style={{color: '#018c43'}}>soluções sob medida</span>
</h2>
<p className="fade-in-up stagger-3 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance">
              Atendemos diversos setores com supply seguro, compliance e nível de serviço elevado.
            </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="scale-in stagger-1 rounded-2xl border bg-white p-5 hover:shadow-md transition-all" style={{borderColor: '#c8c7cc'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg grid place-items-center text-white" style={{background: '#018c43'}}><svg className="lucide lucide-box w-5 h-5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg></div>
<div className="font-semibold">Poliuretanos e Plásticos</div>
</div>
</div>
<div className="scale-in stagger-2 rounded-2xl border bg-white p-5 hover:shadow-md transition-all" style={{borderColor: '#c8c7cc'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg grid place-items-center text-white" style={{background: '#018c43'}}><svg className="lucide lucide-factory w-5 h-5" data-lucide="factory" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01"></path><path d="M16 16h.01"></path><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><path d="M8 16h.01"></path></svg></div>
<div className="font-semibold">Produção e Refino de Petróleo</div>
</div>
</div>
<div className="scale-in stagger-3 rounded-2xl border bg-white p-5 hover:shadow-md transition-all" style={{borderColor: '#c8c7cc'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg grid place-items-center text-white" style={{background: '#018c43'}}><svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg></div>
<div className="font-semibold">Domissanitários</div>
</div>
</div>
<div className="scale-in stagger-4 rounded-2xl border bg-white p-5 hover:shadow-md transition-all" style={{borderColor: '#c8c7cc'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg grid place-items-center text-white" style={{background: '#018c43'}}><svg className="lucide lucide-wand-2 w-5 h-5" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg></div>
<div className="font-semibold">Personal Care</div>
</div>
</div>
<div className="scale-in stagger-5 rounded-2xl border bg-white p-5 hover:shadow-md transition-all" style={{borderColor: '#c8c7cc'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg grid place-items-center text-white" style={{background: '#018c43'}}><i className="w-5 h-5" data-lucide="buildings" strokeWidth="1.5"></i></div>
<div className="font-semibold">Construção Civil</div>
</div>
</div>
<div className="scale-in stagger-6 rounded-2xl border bg-white p-5 hover:shadow-md transition-all" style={{borderColor: '#c8c7cc'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg grid place-items-center text-white" style={{background: '#018c43'}}><svg className="lucide lucide-car w-5 h-5" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg></div>
<div className="font-semibold">Automobilística</div>
</div>
</div>
<div className="scale-in rounded-2xl border bg-white p-5 hover:shadow-md transition-all" style={{borderColor: '#c8c7cc'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg grid place-items-center text-white" style={{background: '#018c43'}}><svg className="lucide lucide-cpu w-5 h-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg></div>
<div className="font-semibold">Eletro Eletrônicos</div>
</div>
</div>
<div className="scale-in rounded-2xl border bg-white p-5 hover:shadow-md transition-all" style={{borderColor: '#c8c7cc'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg grid place-items-center text-white" style={{background: '#018c43'}}><svg className="lucide lucide-sun w-5 h-5" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg></div>
<div className="font-semibold">Energias Renováveis</div>
</div>
</div>
<div className="scale-in rounded-2xl border bg-white p-5 hover:shadow-md transition-all" style={{borderColor: '#c8c7cc'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg grid place-items-center text-white" style={{background: '#018c43'}}><svg className="lucide lucide-waves w-5 h-5" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg></div>
<div className="font-semibold">Tratamento de Água Industrial</div>
</div>
</div>
<div className="scale-in rounded-2xl border bg-white p-5 hover:shadow-md transition-all" style={{borderColor: '#c8c7cc'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg grid place-items-center text-white" style={{background: '#018c43'}}><svg className="lucide lucide-flame w-5 h-5" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg></div>
<div className="font-semibold">Indústria Petroquímica</div>
</div>
</div>
<div className="scale-in rounded-2xl border bg-white p-5 hover:shadow-md transition-all" style={{borderColor: '#c8c7cc'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg grid place-items-center text-white" style={{background: '#018c43'}}><svg className="lucide lucide-factory w-5 h-5" data-lucide="factory" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01"></path><path d="M16 16h.01"></path><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><path d="M8 16h.01"></path></svg></div>
<div className="font-semibold">Indústria Geral</div>
</div>
</div>
<div className="scale-in rounded-2xl border bg-white p-5 hover:shadow-md transition-all" style={{borderColor: '#c8c7cc'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg grid place-items-center text-white" style={{background: '#018c43'}}><svg className="lucide lucide-droplets w-5 h-5" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg></div>
<div className="font-semibold">—</div>
</div>
</div>
</div>
<div className="text-center mt-10">
<a className="inline-flex items-center gap-3 px-6 py-3 rounded-xl text-white font-semibold transition-all" href="#contato" style={{background: '#018c43'}}>
              Discutir seu segmento
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="relative py-24 bg-white overflow-hidden" id="processo">
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-14">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6" style={{background: '#e8f6ee', color: '#018c43'}}>
<svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span>Como Atuamos</span>
</div>
<h2 className="fade-in-up stagger-2 text-4xl sm:text-5xl font-light tracking-tighter mb-4 text-balance">
              Foco em <span className="font-semibold" style={{color: '#018c43'}}>valor e nível de serviço</span>
</h2>
<p className="fade-in-up stagger-3 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Operação orientada a compliance, rastreabilidade, prazos e otimização de custos — do sourcing global à entrega local.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="scale-in stagger-1 rounded-2xl border bg-white p-6 hover:shadow-md transition-all" style={{borderColor: '#c8c7cc'}}>
<div className="w-12 h-12 rounded-xl text-white grid place-items-center mb-4" style={{background: '#018c43'}}><svg className="lucide lucide-globe w-6 h-6" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg></div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Sourcing Global</h3>
<p className="text-gray-600">Rede de parceiros nas Américas, Europa e Ásia para garantir disponibilidade e qualidade.</p>
</div>
<div className="scale-in stagger-2 rounded-2xl border bg-white p-6 hover:shadow-md transition-all" style={{borderColor: '#c8c7cc'}}>
<div className="w-12 h-12 rounded-xl text-white grid place-items-center mb-4" style={{background: '#018c43'}}><svg className="lucide lucide-ship w-6 h-6" data-lucide="ship" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10.189V14"></path><path d="M12 2v3"></path><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"></path><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg></div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Importação Direta</h3>
<p className="text-gray-600">Gestão ponta a ponta: documentos, frete, desembaraço e entrega com previsibilidade.</p>
</div>
<div className="scale-in stagger-3 rounded-2xl border bg-white p-6 hover:shadow-md transition-all" style={{borderColor: '#c8c7cc'}}>
<div className="w-12 h-12 rounded-xl text-white grid place-items-center mb-4" style={{background: '#018c43'}}><svg className="lucide lucide-circle-check w-6 h-6" data-lucide="circle-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Qualidade e Compliance</h3>
<p className="text-gray-600">Sistema de gestão certificado e melhoria contínua para elevar o nível de serviço.</p>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-gray-900 text-white overflow-hidden" id="produtos">

<div className="absolute inset-0">
<div className="parallax-element absolute inset-0 opacity-5" id="portfolioParallax1" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
</div>
<div className="parallax-element absolute top-0 right-0 w-1/2 h-full opacity-10" id="portfolioParallax2" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
<div className="w-full h-full" style={{background: 'linear-gradient(225deg, rgba(1,140,67,0.25), transparent)'}}></div>
</div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 glass-morphism border text-white rounded-full px-4 py-2 text-sm font-medium mb-6" style={{background: 'rgba(255, 255, 255, 0.10)', borderColor: 'rgba(255,255,255,0.20)'}}>
<svg className="lucide lucide-package w-4 h-4" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
<span>Produtos</span>
</div>
<h2 className="fade-in-up stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
              Portfólio de <span className="font-semibold">especialidades</span>
</h2>
<p className="fade-in-up stagger-3 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-balance">
              Linha completa de matérias-primas para múltiplos processos industriais. Placeholders para catálogo e fichas técnicas.
            </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
<div className="scale-in stagger-1 lg:col-span-8 group">
<div className="relative rounded-3xl overflow-hidden border hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2" style={{background: 'rgba(255, 255, 255, 0.06)', borderColor: 'rgba(255,255,255,0.15)'}}>
<img alt="Imagem do produto em destaque" className="w-full h-96 lg:h-[420px] object-cover" data-aurabuild="image" data-field="product_featured_image" src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?w=1600&amp;q=80"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)'}}></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<h3 className="text-3xl font-semibold mb-3 tracking-tight">Linha de Aditivos</h3>
<p className="text-white/80 text-lg leading-relaxed mb-6 max-w-2xl">Aditivos para performance, estabilidade e processos.</p>
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300" style={{background: 'rgba(255, 255, 255, 0.18)', border: '1px solid rgba(255,255,255,0.30)'}}>
<span>Ver detalhes</span>
<svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
</div>
</div>
<div className="lg:col-span-4 space-y-8">
<div className="scale-in stagger-2 group">
<div className="relative rounded-3xl overflow-hidden border hover:border-white/30 transition-all duration-500" style={{background: 'rgba(255, 255, 255, 0.06)', borderColor: 'rgba(255,255,255,0.15)'}}>
<img alt="Imagem de Resinas e Polímeros" className="w-full h-48 object-cover" data-aurabuild="image" data-field="product_card1_image" src="https://images.unsplash.com/photo-1582489853490-cd3a53eb4530?w=800&amp;q=80"/>
<div className="p-6">
<h4 className="text-xl font-semibold mb-2">Resinas e Polímeros</h4>
<p className="text-white/70 text-sm leading-relaxed">Grades e soluções sob demanda.</p>
</div>
</div>
</div>
<div className="scale-in stagger-3 group">
<div className="relative rounded-3xl overflow-hidden border hover:border-white/30 transition-all duration-500" style={{background: 'rgba(255, 255, 255, 0.06)', borderColor: 'rgba(255,255,255,0.15)'}}>
<img alt="Imagem de Solventes e Intermediários" className="w-full h-48 object-cover" data-aurabuild="image" data-field="product_card2_image" src="https://images.unsplash.com/photo-1581091215367-9b6c00b3035a?w=800&amp;q=80"/>
<div className="p-6">
<h4 className="text-xl font-semibold mb-2">Solventes &amp; Intermediários</h4>
<p className="text-white/70 text-sm leading-relaxed">Qualidade e rastreabilidade.</p>
</div>
</div>
</div>
</div>
</div>

<div className="text-center">
<a className="fade-in-up stagger-4 inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl transform hover:-translate-y-1" href="#" style={{background: '#fff', color: '#111'}}>
<span>Ver todos</span>
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="relative py-32 bg-white overflow-hidden" id="representadas">
<div className="parallax-element absolute inset-0 opacity-20" id="testimonialsParallax" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
<div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{background: 'linear-gradient(135deg, #e8f6ee, #f0fff4)'}}></div>
<div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{background: 'linear-gradient(135deg, #eef2ff, #f5f7ff)'}}></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6" style={{background: '#e8f6ee', color: '#018c43'}}>
<svg className="lucide lucide-briefcase w-4 h-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span>Representadas</span>
</div>
<h2 className="fade-in-up stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
              Parcerias <span className="font-semibold" style={{color: '#018c43'}}>estratégicas globais</span>
</h2>
<p className="fade-in-up stagger-3 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance">
              Logos de fornecedores (placeholders): LANXESS, Alpha, SI Group, Evonik, Sinopac Corp., entre outros.
            </p>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
<div className="scale-in stagger-1 rounded-2xl border bg-white p-4 grid place-items-center h-24 overflow-hidden" style={{borderColor: '#c8c7cc'}}>
<img alt="Logo LANXESS" className="max-h-12 w-auto object-contain" data-aurabuild="image" data-field="logo_1" src="default"/>
</div>
<div className="scale-in stagger-2 rounded-2xl border bg-white p-4 grid place-items-center h-24 overflow-hidden" style={{borderColor: '#c8c7cc'}}>
<img alt="Logo Alpha" className="max-h-12 w-auto object-contain" data-aurabuild="image" data-field="logo_2" src="default"/>
</div>
<div className="scale-in stagger-3 rounded-2xl border bg-white p-4 grid place-items-center h-24 overflow-hidden" style={{borderColor: '#c8c7cc'}}>
<img alt="Logo SI Group" className="max-h-12 w-auto object-contain" data-aurabuild="image" data-field="logo_3" src="default"/>
</div>
<div className="scale-in stagger-4 rounded-2xl border bg-white p-4 grid place-items-center h-24 overflow-hidden" style={{borderColor: '#c8c7cc'}}>
<img alt="Logo Evonik" className="max-h-12 w-auto object-contain" data-aurabuild="image" data-field="logo_4" src="https://placehold.co/200x80?text=Evonik"/>
</div>
<div className="scale-in stagger-5 rounded-2xl border bg-white p-4 grid place-items-center h-24 overflow-hidden" style={{borderColor: '#c8c7cc'}}>
<img alt="Logo Sinopac Corp." className="max-h-12 w-auto object-contain" data-aurabuild="image" data-field="logo_5" src="https://placehold.co/200x80?text=Sinopac+Corp."/>
</div>
<div className="scale-in stagger-6 rounded-2xl border bg-white p-4 grid place-items-center h-24 overflow-hidden" style={{borderColor: '#c8c7cc'}}>
<img alt="Logo Fornecedor" className="max-h-12 w-auto object-contain" data-aurabuild="image" data-field="logo_6" src="https://placehold.co/200x80?text=Fornecedor"/>
</div>
<div className="scale-in rounded-2xl border bg-white p-4 grid place-items-center h-24 overflow-hidden" style={{borderColor: '#c8c7cc'}}>
<img alt="Logo Fornecedor" className="max-h-12 w-auto object-contain" data-aurabuild="image" data-field="logo_7" src="https://placehold.co/200x80?text=Fornecedor"/>
</div>
<div className="scale-in rounded-2xl border bg-white p-4 grid place-items-center h-24 overflow-hidden" style={{borderColor: '#c8c7cc'}}>
<img alt="Logo Fornecedor" className="max-h-12 w-auto object-contain" data-aurabuild="image" data-field="logo_8" src="https://placehold.co/200x80?text=Fornecedor"/>
</div>
<div className="scale-in rounded-2xl border bg-white p-4 grid place-items-center h-24 overflow-hidden" style={{borderColor: '#c8c7cc'}}>
<img alt="Logo Fornecedor" className="max-h-12 w-auto object-contain" data-aurabuild="image" data-field="logo_9" src="https://placehold.co/200x80?text=Fornecedor"/>
</div>
<div className="scale-in rounded-2xl border bg-white p-4 grid place-items-center h-24 overflow-hidden" style={{borderColor: '#c8c7cc'}}>
<img alt="Logo Fornecedor" className="max-h-12 w-auto object-contain" data-aurabuild="image" data-field="logo_10" src="https://placehold.co/200x80?text=Fornecedor"/>
</div>
<div className="scale-in rounded-2xl border bg-white p-4 grid place-items-center h-24 overflow-hidden" style={{borderColor: '#c8c7cc'}}>
<img alt="Logo Fornecedor" className="max-h-12 w-auto object-contain" data-aurabuild="image" data-field="logo_11" src="https://placehold.co/200x80?text=Fornecedor"/>
</div>
<div className="scale-in rounded-2xl border bg-white p-4 grid place-items-center h-24 overflow-hidden" style={{borderColor: '#c8c7cc'}}>
<img alt="Logo Fornecedor" className="max-h-12 w-auto object-contain" data-aurabuild="image" data-field="logo_12" src="https://placehold.co/200x80?text=Fornecedor"/>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-gray-50 overflow-hidden" id="qualidade">
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="fade-in-left stagger-1 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6" style={{background: '#e8f6ee', color: '#018c43'}}>
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>Sistema de gestão da QUALIDADE</span>
</div>
<h2 className="fade-in-left stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
                Certificação <span className="font-semibold" style={{color: '#018c43'}}>ISO 9001:2015</span>
</h2>
<p className="fade-in-left stagger-3 text-xl text-gray-600 leading-relaxed mb-8 text-balance">
                Política da QUALIDADE e processos orientados à melhoria contínua para garantir consistência, rastreabilidade e conformidade.
              </p>
<a className="fade-in-left stagger-4 inline-flex items-center gap-3 px-6 py-3 rounded-xl text-white font-semibold transition-all" href="#" style={{background: '#018c43'}}>
                Saiba mais
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="scale-in stagger-2">

<div className="w-full h-72 rounded-3xl border bg-white grid place-items-center shadow-sm" style={{borderColor: '#c8c7cc'}}>
<div className="text-center">
<div className="w-24 h-24 rounded-full border mx-auto mb-3 grid place-items-center" style={{borderColor: '#c8c7cc'}}>
<svg className="lucide lucide-badge-check w-10 h-10" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: '#018c43'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="text-xl font-semibold">ISO 9001:2015</div>
<div className="text-gray-600">Selo de certificação (placeholder)</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-gray-50 overflow-hidden" id="contato">
<div className="parallax-element absolute inset-0 opacity-30" id="contactParallax" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
<div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl" style={{background: 'linear-gradient(135deg, #e8f6ee, #f0fff4)'}}></div>
<div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl" style={{background: 'linear-gradient(135deg, #eef2ff, #f5f7ff)'}}></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div>
<div className="fade-in-left stagger-1 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6" style={{background: '#e8f6ee', color: '#018c43'}}>
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>Contato</span>
</div>
<h2 className="fade-in-left stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
                Fale com a <span className="font-semibold" style={{color: '#018c43'}}>Neotrade</span>
</h2>
<div className="fade-in-left stagger-3 grid gap-4 mb-8">
<div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border" style={{borderColor: '#c8c7cc'}}>
<div className="w-12 h-12 rounded-xl grid place-items-center text-white" style={{background: '#018c43'}}>
<svg className="lucide lucide-map-pin w-6 h-6" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<div className="font-semibold">Endereço</div>
<div className="text-gray-700">Rua Catequese, 1171 CJ14, Santo André - SP</div>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border" style={{borderColor: '#c8c7cc'}}>
<div className="w-12 h-12 rounded-xl grid place-items-center text-white" style={{background: '#018c43'}}>
<svg className="lucide lucide-mail w-6 h-6" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<div className="font-semibold">E-mail</div>
<div className="text-gray-700">contato@neotrade.com.br</div>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border" style={{borderColor: '#c8c7cc'}}>
<div className="w-12 h-12 rounded-xl grid place-items-center text-white" style={{background: '#018c43'}}>
<svg className="lucide lucide-phone-call w-6 h-6" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<div className="font-semibold">Telefones</div>
<div className="text-gray-700">(11) 4436-1333</div>
<div className="text-gray-700">(11) 96641-2674</div>
</div>
</div>
</div>

<div className="fade-in-left stagger-4 w-full h-64 rounded-2xl bg-white border overflow-hidden" style={{borderColor: '#c8c7cc'}}>
<img alt="Mapa de localização" className="w-full h-full object-cover" data-aurabuild="image" data-field="map_image" src="https://placehold.co/1200x400?text=Mapa+de+Localiza%C3%A7%C3%A3o"/>
</div>
</div>

<div className="scale-in stagger-2 bg-white rounded-3xl p-8 shadow-xl border" style={{borderColor: '#c8c7cc'}}>
<div className="mb-8">
<h3 className="text-2xl font-semibold mb-2">Envie uma mensagem</h3>
<p className="text-gray-600">Responderemos o quanto antes.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Nome *</label>
<input className="w-full px-4 py-3 rounded-xl border outline-none transition-all" placeholder="Seu nome" style={{borderColor: '#c8c7cc'}} type="text"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Assunto *</label>
<input className="w-full px-4 py-3 rounded-xl border outline-none transition-all" placeholder="Assunto" style={{borderColor: '#c8c7cc'}} type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
<input className="w-full px-4 py-3 rounded-xl border outline-none transition-all" placeholder="seuemail@empresa.com" style={{borderColor: '#c8c7cc'}} type="email"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Telefone</label>
<input className="w-full px-4 py-3 rounded-xl border outline-none transition-all" placeholder="(11) 0000-0000" style={{borderColor: '#c8c7cc'}} type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Digite sua mensagem aqui...</label>
<textarea className="w-full px-4 py-3 rounded-xl border outline-none transition-all resize-none" placeholder="Como podemos ajudar?" rows="4" style={{borderColor: '#c8c7cc'}}></textarea>
</div>
<button className="w-full text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" style={{background: '#018c43'}} type="submit">
                  Enviar
                </button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-gray-900 text-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">

<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-xl bg-white grid place-items-center overflow-hidden">
<img alt="Neotrade" className="w-full h-full object-contain" src="https://i.ibb.co/pBm41ptr/Logo-Lumen-8.png"/>
</div>
<div>
<span className="text-2xl font-semibold">Neotrade</span>
<p className="text-gray-400 text-sm">Importação e distribuição de matéria-prima química</p>
</div>
</div>
<p className="text-gray-400 leading-relaxed mb-6">
              Desde 1992 conectando a indústria a insumos com qualidade, rastreabilidade e valor.
            </p>
<div className="flex items-center gap-3">
<a className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 grid place-items-center transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 grid place-items-center transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 grid place-items-center transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>

<div>
<h4 className="font-semibold mb-6 text-lg">Navegação</h4>
<div className="space-y-3 text-gray-400">
<a className="block hover:text-white transition-colors" href="#inicio">Início</a>
<a className="block hover:text-white transition-colors" href="#sobre-nos">Sobre Nós</a>
<a className="block hover:text-white transition-colors" href="#segmentos">Segmentos de Mercado</a>
<a className="block hover:text-white transition-colors" href="#produtos">Produtos</a>
<a className="block hover:text-white transition-colors" href="#representadas">Representadas</a>
<a className="block hover:text-white transition-colors" href="#qualidade">Qualidade</a>
<a className="block hover:text-white transition-colors" href="#contato">Contato</a>
</div>
</div>

<div>
<h4 className="font-semibold mb-6 text-lg">Qualidade</h4>
<div className="space-y-3 text-gray-400">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gray-800 grid place-items-center">
<svg className="lucide lucide-badge-check w-5 h-5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: '#018c43'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<div className="font-semibold text-white">ISO 9001:2015</div>
<div className="text-sm">Sistema de gestão da QUALIDADE</div>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm font-semibold hover:text-white transition-colors" href="#qualidade" style={{color: '#c8c7cc'}}>
                Política da QUALIDADE
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div>
<h4 className="font-semibold mb-6 text-lg">Contato</h4>
<div className="space-y-4 text-gray-400">
<div>
<h5 className="font-semibold text-white mb-2">Endereço</h5>
<p>Rua Catequese, 1171 CJ14, Santo André - SP</p>
</div>
<div>
<h5 className="font-semibold text-white mb-2">E-mail</h5>
<p>contato@neotrade.com.br</p>
</div>
<div>
<h5 className="font-semibold text-white mb-2">Telefones</h5>
<p>(11) 4436-1333</p>
<p>(11) 96641-2674</p>
</div>
</div>
</div>
</div>
<div className="border-t border-gray-800 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-gray-400 text-sm">© 2025 Neotrade. Todos os direitos reservados.</p>
<div className="flex items-center gap-6 text-sm text-gray-400">
<a className="hover:text-white transition-colors" href="#">Política de Privacidade</a>
<a className="hover:text-white transition-colors" href="#">Termos de Uso</a>
<a className="hover:text-white transition-colors" href="#">Mapa do Site</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
