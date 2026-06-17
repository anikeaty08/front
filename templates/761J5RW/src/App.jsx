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
      document.addEventListener("DOMContentLoaded", () => {
        if (window.lucide) lucide.createIcons();
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
              
              // Only animate if element is in viewport or near it
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

      // Enhanced Navigation Controller
      class NavigationController {
        constructor() {
          this.header = document.getElementById('mainHeader');
          this.navLinks = document.querySelectorAll('.section-nav');
          this.sections = ['hero', 'about', 'expertise', 'process', 'portfolio', 'testimonials', 'contact'];
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
            if (isActive) {
              link.classList.add('text-gray-900');
              link.classList.remove('text-gray-600');
              link.querySelector('.absolute').classList.remove('scale-0');
              link.querySelector('.absolute').classList.add('scale-100');
            } else {
              link.classList.remove('text-gray-900');
              link.classList.add('text-gray-600');
              link.querySelector('.absolute').classList.add('scale-0');
              link.querySelector('.absolute').classList.remove('scale-100');
            }
          });
        }

        setupNavigation() {
          document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
              e.preventDefault();
              const target = document.querySelector(link.getAttribute('href'));
              if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                  top: offsetTop,
                  behavior: 'smooth'
                });
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

          // Close on escape key
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
        // Small delay to ensure all elements are rendered
        setTimeout(() => {
          new AdvancedParallaxController();
          new ScrollAnimationController();
          new CounterAnimationController();
          new NavigationController();
          new MobileMenuController();
        }, 100);
      });

      // Performance optimization
      let ticking = false;
      function updateOnScroll() {
        if (!ticking) {
          requestAnimationFrame(() => {
            ticking = false;
          });
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
<div className="absolute inset-0 glass-morphism bg-white/80 border-b border-gray-200/50"></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-3 group z-10" href="#hero">
<div className="w-9 h-9 rounded-xl bg-gray-900 text-white grid place-items-center shadow-sm group-hover:scale-105 transition-transform duration-200">
<span className="text-sm font-bold tracking-tighter">F</span>
</div>
<span className="text-xl font-semibold tracking-tight">Forma</span>
</a>

<nav className="hidden lg:flex items-center">
<div className="flex items-center gap-1 bg-gray-100/80 rounded-full p-1.5 glass-morphism">
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="hero" href="#hero">
<span className="relative z-10">Home</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="about" href="#about">
<span className="relative z-10">About</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="expertise" href="#expertise">
<span className="relative z-10">Services</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="portfolio" href="#portfolio">
<span className="relative z-10">Portfolio</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="testimonials" href="#testimonials">
<span className="relative z-10">Reviews</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="contact" href="#contact">
<span className="relative z-10">Contact</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
</div>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 text-white font-medium text-sm hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md" href="#contact">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>Book Consultation</span>
</a>
<button className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors" id="mobileMenuBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
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
<div className="w-9 h-9 rounded-xl bg-gray-900 text-white grid place-items-center">
<span className="text-sm font-bold tracking-tighter">F</span>
</div>
<span className="text-xl font-semibold">Forma</span>
</div>
<button className="p-2 rounded-xl hover:bg-gray-100" id="closeMobileMenu">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<nav className="space-y-2">
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#hero">
<i className="w-5 h-5 text-gray-500" data-lucide="home"></i>
              Home
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#about">
<i className="w-5 h-5 text-gray-500" data-lucide="users"></i>
              About
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#expertise">
<i className="w-5 h-5 text-gray-500" data-lucide="compass"></i>
              Services
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#portfolio">
<i className="w-5 h-5 text-gray-500" data-lucide="grid-3x3"></i>
              Portfolio
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#testimonials">
<i className="w-5 h-5 text-gray-500" data-lucide="star"></i>
              Reviews
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#contact">
<i className="w-5 h-5 text-gray-500" data-lucide="mail"></i>
              Contact
            </a>
</nav>
<div className="mt-8 pt-6 border-t border-gray-200">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-900 text-white font-medium" href="#contact">
<i className="w-5 h-5" data-lucide="calendar"></i>
              Book Consultation
            </a>
</div>
</div>
</div>
</div>
<main className="relative">

<section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">

<div className="absolute inset-0">

<div className="parallax-element absolute inset-0 scale-110" id="heroBase">
<img alt="Luxury interior design" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/aabac76d-ac03-47b1-be1c-fca16fa43e96_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
</div>

<div className="parallax-element absolute inset-0" id="heroFloat">
<div className="absolute top-20 right-20 w-32 h-32 rounded-3xl bg-white/10 glass-morphism border border-white/20 hidden lg:block transform rotate-12"></div>
<div className="absolute bottom-40 left-20 w-24 h-24 rounded-2xl bg-white/5 glass-morphism border border-white/10 hidden lg:block transform -rotate-6"></div>
<div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-white/60 hidden lg:block animate-pulse"></div>
<div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-white/40 hidden lg:block animate-pulse" style={{animationDelay: '1s'}}></div>
<div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-white/30 hidden lg:block animate-pulse" style={{animationDelay: '2s'}}></div>
</div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
<div className="max-w-4xl mx-auto">

<div className="fade-in-up stagger-1 inline-flex items-center gap-2 glass-morphism bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium mb-8">
<i className="w-4 h-4" data-lucide="award"></i>
<span>Award-Winning Interior Design Studio</span>
</div>

<h1 className="fade-in-up stagger-2 text-6xl sm:text-7xl lg:text-8xl font-light tracking-tighter text-white leading-[0.9] mb-8">
<span className="block">Redefining</span>
<span className="block font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Interior Excellence</span>
</h1>

<p className="fade-in-up stagger-3 text-xl sm:text-2xl text-white/90 font-light leading-relaxed mb-12 max-w-3xl mx-auto text-balance">
              We craft extraordinary living spaces that seamlessly blend luxury, functionality, and timeless design principles.
            </p>

<div className="fade-in-up stagger-4 flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1" href="#portfolio">
<span>View Our Work</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<button className="inline-flex items-center gap-4 text-white font-medium text-lg group">
<div className="w-14 h-14 rounded-full glass-morphism bg-white/20 border border-white/30 grid place-items-center group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 ml-1" data-lucide="play"></i>
</div>
<span className="group-hover:text-white/80 transition-colors">Watch Story</span>
</button>
</div>
</div>


<div className="fade-in-up stagger-5 mt-10 sm:mt-12">
<div className="mx-auto w-full max-w-3xl rounded-2xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur">
<dl className="grid grid-cols-3 divide-x divide-white/15 text-center">
<div className="px-3">
<dd className="counter counter-animate text-3xl font-light leading-tight text-white" data-target="500">0</dd>
<dt className="mt-1 text-xs sm:text-sm text-white/70">Projects Completed</dt>
</div>
<div className="px-3">
<dd className="counter counter-animate text-3xl font-light leading-tight text-white" data-target="15">0</dd>
<dt className="mt-1 text-xs sm:text-sm text-white/70">Years Experience</dt>
</div>
<div className="px-3">
<dd className="counter counter-animate text-3xl font-light leading-tight text-white" data-target="98">0</dd>
<dt className="mt-1 text-xs sm:text-sm text-white/70">Client Satisfaction</dt>
</div>
</dl>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-white overflow-hidden" id="about">

<div className="parallax-element absolute inset-0 opacity-20" id="aboutParallax">
<div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 blur-3xl"></div>
<div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-purple-50 to-pink-50 blur-3xl"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<div className="fade-in-left stagger-1 inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="users"></i>
<span>About Forma</span>
</div>
<h2 className="fade-in-left stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
                Crafting Dreams into 
                <span className="font-semibold text-indigo-600">Living Reality</span>
</h2>
<p className="fade-in-left stagger-3 text-xl text-gray-600 leading-relaxed mb-8 text-balance">
                For over 15 years, we've been transforming spaces and lives through exceptional interior design. Our passion lies in creating environments that tell your unique story while embodying the highest standards of luxury and functionality.
              </p>

<div className="space-y-4 mb-8">
<div className="fade-in-left stagger-4 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 grid place-items-center flex-shrink-0">
<i className="w-6 h-6" data-lucide="award"></i>
</div>
<div>
<h4 className="font-semibold text-lg">Award-Winning Excellence</h4>
<p className="text-gray-600">Multiple design awards and industry recognition</p>
</div>
</div>
<div className="fade-in-left stagger-5 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 grid place-items-center flex-shrink-0">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<div>
<h4 className="font-semibold text-lg">Expert Team</h4>
<p className="text-gray-600">Certified designers and skilled craftsmen</p>
</div>
</div>
<div className="fade-in-left stagger-6 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 grid place-items-center flex-shrink-0">
<i className="w-6 h-6" data-lucide="check-circle"></i>
</div>
<div>
<h4 className="font-semibold text-lg">Full-Service Solutions</h4>
<p className="text-gray-600">From concept to completion, we handle everything</p>
</div>
</div>
</div>
<a className="fade-in-left stagger-6 inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" href="#portfolio">
<span>Explore Our Work</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>

<div className="relative">
<div className="fade-in-right stagger-2 relative">
<img alt="Interior design team" className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/211d2508-6de8-4442-bc3e-3e8bea65298f_800w.jpg"/>

<div className="scale-in stagger-4 absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white grid place-items-center">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<div>
<div className="counter text-2xl font-semibold" data-target="500">0</div>
<div className="text-gray-600 text-sm">Happy Clients</div>
</div>
</div>
</div>

<div className="scale-in stagger-3 absolute -top-4 -right-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl px-6 py-3 shadow-lg">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="star"></i>
<span className="font-semibold">5.0 Rating</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-gray-50 overflow-hidden" id="expertise">

<div className="parallax-element absolute inset-0 opacity-30" id="expertiseParallax">
<div className="absolute top-20 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 blur-3xl"></div>
<div className="absolute bottom-20 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 blur-3xl"></div>
<div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 blur-3xl"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="compass"></i>
<span>Our Services</span>
</div>
<h2 className="fade-in-up stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
              Excellence in 
              <span className="font-semibold">Every Detail</span>
</h2>
<p className="fade-in-up stagger-3 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance">
              From conceptual vision to flawless execution, we deliver bespoke interior solutions that reflect your unique lifestyle and aspirations.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="scale-in stagger-1 group">
<div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="lightbulb"></i>
</div>
<h3 className="text-xl font-semibold mb-4 tracking-tight">Concept Development</h3>
<p className="text-gray-600 leading-relaxed mb-6">
                  Strategic design planning that transforms your vision into a comprehensive design narrative.
                </p>
<ul className="space-y-2 mb-6 text-sm text-gray-600">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
<span>Initial consultation &amp; analysis</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
<span>Mood boards &amp; concept designs</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
<span>3D visualization</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all" href="#contact">
<span>Learn More</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="scale-in stagger-2 group lg:-mt-4">
<div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-white h-full">
<div className="absolute top-6 right-6">
<div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
</div>
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 text-white grid place-items-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="palette"></i>
</div>
<div className="inline-flex items-center gap-1 bg-purple-500/20 text-purple-300 rounded-full px-3 py-1 text-xs font-semibold mb-4">
<i className="w-3 h-3" data-lucide="star"></i>
<span>Most Popular</span>
</div>
<h3 className="text-xl font-semibold mb-4 tracking-tight">Complete Transformation</h3>
<p className="text-gray-300 leading-relaxed mb-6">
                  Full-service interior design from initial concept through final installation and styling.
                </p>
<ul className="space-y-2 mb-6 text-sm text-gray-300">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-purple-400" data-lucide="check"></i>
<span>Space planning &amp; design</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-purple-400" data-lucide="check"></i>
<span>Custom furniture &amp; fixtures</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-purple-400" data-lucide="check"></i>
<span>Project management</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-purple-400" data-lucide="check"></i>
<span>Installation &amp; styling</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-3 transition-all" href="#portfolio">
<span>View Projects</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="scale-in stagger-3 group">
<div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white grid place-items-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="home"></i>
</div>
<h3 className="text-xl font-semibold mb-4 tracking-tight">Luxury Staging</h3>
<p className="text-gray-600 leading-relaxed mb-6">
                  Professional staging services to showcase properties at their absolute best potential.
                </p>
<ul className="space-y-2 mb-6 text-sm text-gray-600">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
<span>Property assessment</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
<span>Furniture &amp; decor rental</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
<span>Professional photography</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all" href="#contact">
<span>Get Started</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="scale-in stagger-4 group">
<div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-white grid place-items-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="brush"></i>
</div>
<h3 className="text-xl font-semibold mb-4 tracking-tight">Color Consultation</h3>
<p className="text-gray-600 leading-relaxed mb-6">
                  Expert color selection to create the perfect ambiance and emotional connection with your space.
                </p>
<a className="inline-flex items-center gap-2 text-orange-600 font-semibold group-hover:gap-3 transition-all" href="#contact">
<span>Explore Colors</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="scale-in stagger-5 group">
<div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white grid place-items-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="wrench"></i>
</div>
<h3 className="text-xl font-semibold mb-4 tracking-tight">Renovation Support</h3>
<p className="text-gray-600 leading-relaxed mb-6">
                  Comprehensive renovation guidance from planning through execution with our trusted contractors.
                </p>
<a className="inline-flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-3 transition-all" href="#contact">
<span>Start Renovation</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="scale-in stagger-6 group">
<div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white grid place-items-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="heart"></i>
</div>
<h3 className="text-xl font-semibold mb-4 tracking-tight">Lifestyle Design</h3>
<p className="text-gray-600 leading-relaxed mb-6">
                  Personalized design solutions that reflect your unique personality and lifestyle preferences.
                </p>
<a className="inline-flex items-center gap-2 text-pink-600 font-semibold group-hover:gap-3 transition-all" href="#contact">
<span>Discover Style</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-white overflow-hidden" id="process">
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="layers"></i>
<span>Our Process</span>
</div>
<h2 className="fade-in-up stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
              From Vision to 
              <span className="font-semibold">Reality</span>
</h2>
<p className="fade-in-up stagger-3 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance">
              Our proven methodology ensures seamless project delivery while maintaining the highest standards of design excellence.
            </p>
</div>

<div className="relative">

<div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 transform -translate-x-1/2 hidden lg:block"></div>

<div className="space-y-16 lg:space-y-24">

<div className="relative flex flex-col lg:flex-row items-center gap-8">
<div className="fade-in-left stagger-1 lg:w-1/2 lg:text-right lg:pr-16">
<div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
<span>Phase 1</span>
</div>
<h3 className="text-3xl font-semibold mb-4">Discovery &amp; Consultation</h3>
<p className="text-gray-600 leading-relaxed text-lg mb-6">
                    We begin with an in-depth consultation to understand your vision, lifestyle, and design preferences. This crucial phase includes space assessment, budget planning, and timeline establishment.
                  </p>
<div className="space-y-2 text-sm text-gray-600">
<div className="flex items-center gap-2 lg:justify-end">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
<span>Initial consultation (2-3 hours)</span>
</div>
<div className="flex items-center gap-2 lg:justify-end">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
<span>Space measurement &amp; analysis</span>
</div>
<div className="flex items-center gap-2 lg:justify-end">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
<span>Budget &amp; timeline planning</span>
</div>
</div>
</div>
<div className="scale-in stagger-2 relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center shadow-xl">
<i className="w-10 h-10" data-lucide="lightbulb"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-100 text-blue-600 grid place-items-center text-sm font-bold">1</div>
</div>
<div className="fade-in-right stagger-3 lg:w-1/2 lg:pl-16">
<img alt="Consultation process" className="w-full h-64 object-cover rounded-2xl shadow-lg" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4c3cdb9e-6cac-4dce-ac9a-d914b04c3458_1600w.jpg"/>
</div>
</div>

<div className="relative flex flex-col lg:flex-row-reverse items-center gap-8">
<div className="fade-in-right stagger-1 lg:w-1/2 lg:text-left lg:pl-16">
<div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
<span>Phase 2</span>
</div>
<h3 className="text-3xl font-semibold mb-4">Design &amp; Development</h3>
<p className="text-gray-600 leading-relaxed text-lg mb-6">
                    Our team creates detailed design concepts, 3D visualizations, and material specifications. We present multiple options and refine the design based on your feedback.
                  </p>
<div className="space-y-2 text-sm text-gray-600">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-purple-500" data-lucide="check"></i>
<span>Concept development &amp; mood boards</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-purple-500" data-lucide="check"></i>
<span>3D renderings &amp; walkthroughs</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-purple-500" data-lucide="check"></i>
<span>Material &amp; furniture selection</span>
</div>
</div>
</div>
<div className="scale-in stagger-2 relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white grid place-items-center shadow-xl">
<i className="w-10 h-10" data-lucide="palette"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-purple-100 text-purple-600 grid place-items-center text-sm font-bold">2</div>
</div>
<div className="fade-in-left stagger-3 lg:w-1/2 lg:pr-16">
<img alt="Design development" className="w-full h-64 object-cover rounded-2xl shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79bb5936-f88f-4e8c-95b8-80fa335fc9bc_1600w.jpg"/>
</div>
</div>

<div className="relative flex flex-col lg:flex-row items-center gap-8">
<div className="fade-in-left stagger-1 lg:w-1/2 lg:text-right lg:pr-16">
<div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
<span>Phase 3</span>
</div>
<h3 className="text-3xl font-semibold mb-4">Flawless Execution</h3>
<p className="text-gray-600 leading-relaxed text-lg mb-6">
                    Professional installation and styling to bring your dream space to life with precision. We coordinate all aspects of the implementation process.
                  </p>
<div className="space-y-2 text-sm text-gray-600">
<div className="flex items-center gap-2 lg:justify-end">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
<span>Project management &amp; coordination</span>
</div>
<div className="flex items-center gap-2 lg:justify-end">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
<span>Professional installation</span>
</div>
<div className="flex items-center gap-2 lg:justify-end">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
<span>Final styling &amp; reveal</span>
</div>
</div>
</div>
<div className="scale-in stagger-2 relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white grid place-items-center shadow-xl">
<i className="w-10 h-10" data-lucide="check-circle"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-100 text-green-600 grid place-items-center text-sm font-bold">3</div>
</div>
<div className="fade-in-right stagger-3 lg:w-1/2 lg:pl-16">
<img alt="Final execution" className="w-full h-64 object-cover rounded-2xl shadow-lg" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e4572439-a6ca-445c-9a06-4bf65269dd10_800w.jpg"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-gray-900 text-white overflow-hidden" id="portfolio">

<div className="absolute inset-0">
<div className="parallax-element absolute inset-0 opacity-5" id="portfolioParallax1">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
</div>
<div className="parallax-element absolute top-0 right-0 w-1/2 h-full opacity-10" id="portfolioParallax2">
<div className="w-full h-full bg-gradient-to-bl from-blue-900/20 to-transparent"></div>
</div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 bg-white/10 glass-morphism border border-white/20 text-white rounded-full px-4 py-2 text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="grid-3x3"></i>
<span>Featured Projects</span>
</div>
<h2 className="fade-in-up stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
              Signature 
              <span className="font-semibold">Spaces</span>
</h2>
<p className="fade-in-up stagger-3 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-balance">
              Discover our most celebrated projects where innovative design meets exceptional craftsmanship.
            </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">

<div className="scale-in stagger-1 lg:col-span-8 group cursor-pointer">
<div className="relative rounded-3xl overflow-hidden bg-white/5 glass-morphism border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2">
<img alt="Modern Penthouse Living" className="w-full h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/68d1afcf-0796-4422-8718-9e98b2a6dfb0_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute top-6 left-6">
<div className="inline-flex items-center gap-2 bg-gold-500 text-white rounded-full px-3 py-1.5 text-xs font-semibold" style={{background: 'linear-gradient(135deg, #fbbf24, #f59e0b)'}}>
<i className="w-3 h-3" data-lucide="award"></i>
<span>Award Winner 2024</span>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<h3 className="text-3xl font-semibold mb-3 tracking-tight">Manhattan Penthouse</h3>
<p className="text-white/80 text-lg leading-relaxed mb-6 max-w-2xl">
                    A sophisticated urban sanctuary combining minimalist aesthetics with luxurious comfort, featuring floor-to-ceiling windows and curated art collections.
                  </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4 text-white/60 text-sm">
<div className="flex items-center gap-1">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span>New York, NY</span>
</div>
<div className="flex items-center gap-1">
<i className="w-4 h-4" data-lucide="home"></i>
<span>4,200 sq ft</span>
</div>
</div>
<button className="inline-flex items-center gap-2 bg-white/20 glass-morphism border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
<span>View Project</span>
<i className="w-4 h-4" data-lucide="external-link"></i>
</button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-8">
<div className="scale-in stagger-2 group cursor-pointer">
<div className="relative rounded-3xl overflow-hidden bg-white/5 glass-morphism border border-white/10 hover:border-white/20 transition-all duration-500">
<img alt="Contemporary Kitchen" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/704e1fb3-a82b-42a1-ad5f-f30d6c0fb05c_800w.jpg"/>
<div className="p-6">
<h4 className="text-xl font-semibold mb-2">Beverly Hills Residence</h4>
<p className="text-white/70 text-sm leading-relaxed">Modern kitchen design with premium appliances and custom cabinetry.</p>
</div>
</div>
</div>
<div className="scale-in stagger-3 group cursor-pointer">
<div className="relative rounded-3xl overflow-hidden bg-white/5 glass-morphism border border-white/10 hover:border-white/20 transition-all duration-500">
<img alt="Luxury Bedroom" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fad8f488-a92f-419e-a506-95dab967d5f0_800w.jpg"/>
<div className="p-6">
<h4 className="text-xl font-semibold mb-2">Malibu Beach House</h4>
<p className="text-white/70 text-sm leading-relaxed">Serene master suite with ocean views and custom furnishings.</p>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
<div className="scale-in stagger-4 text-center">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center mx-auto mb-4">
<i className="w-8 h-8" data-lucide="home"></i>
</div>
<h4 className="text-xl font-semibold mb-2">Residential</h4>
<p className="text-white/70">Luxury homes and apartments</p>
<div className="counter text-2xl font-light mt-2" data-target="350">0</div>
<div className="text-white/60 text-sm">Projects</div>
</div>
<div className="scale-in stagger-5 text-center">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 text-white grid place-items-center mx-auto mb-4">
<i className="w-8 h-8" data-lucide="building"></i>
</div>
<h4 className="text-xl font-semibold mb-2">Commercial</h4>
<p className="text-white/70">Offices and retail spaces</p>
<div className="counter text-2xl font-light mt-2" data-target="120">0</div>
<div className="text-white/60 text-sm">Projects</div>
</div>
<div className="scale-in stagger-6 text-center">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white grid place-items-center mx-auto mb-4">
<i className="w-8 h-8" data-lucide="sparkles"></i>
</div>
<h4 className="text-xl font-semibold mb-2">Hospitality</h4>
<p className="text-white/70">Hotels and restaurants</p>
<div className="counter text-2xl font-light mt-2" data-target="75">0</div>
<div className="text-white/60 text-sm">Projects</div>
</div>
</div>

<div className="text-center">
<a className="fade-in-up stagger-4 inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl transform hover:-translate-y-1" href="#contact">
<span>View All Projects</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="relative py-32 bg-white overflow-hidden" id="testimonials">

<div className="parallax-element absolute inset-0 opacity-20" id="testimonialsParallax">
<div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 blur-3xl"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-pink-100 to-orange-100 blur-3xl"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 bg-pink-100 text-pink-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="star"></i>
<span>Client Reviews</span>
</div>
<h2 className="fade-in-up stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
              What Our Clients 
              <span className="font-semibold">Say</span>
</h2>
<p className="fade-in-up stagger-3 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance">
              Discover why our clients choose us for their most important interior design projects.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="scale-in stagger-1 bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
<div className="flex items-center gap-1 mb-6">
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
</div>
<p className="text-gray-700 leading-relaxed mb-8 text-lg">
                "Forma transformed our Manhattan apartment into a stunning masterpiece. Their attention to detail and understanding of our lifestyle was exceptional."
              </p>
<div className="flex items-center gap-4">
<img alt="Sarah Johnson" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f7f6feef-fd3e-4901-bce6-7271aa74dc87_320w.jpg"/>
<div>
<div className="font-semibold">Sarah Johnson</div>
<div className="text-gray-600 text-sm">Manhattan Penthouse</div>
</div>
</div>
</div>

<div className="scale-in stagger-2 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
<div className="flex items-center gap-1 mb-6">
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
</div>
<p className="text-gray-700 leading-relaxed mb-8 text-lg">
                "The team at Forma exceeded every expectation. Our Beverly Hills home is now a perfect blend of luxury and comfort that reflects our family perfectly."
              </p>
<div className="flex items-center gap-4">
<img alt="Michael Chen" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f52b9e1e-c3e8-4844-b3c5-28aacdc6b434_320w.jpg"/>
<div>
<div className="font-semibold">Michael Chen</div>
<div className="text-gray-600 text-sm">Beverly Hills Residence</div>
</div>
</div>
</div>

<div className="scale-in stagger-3 bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
<div className="flex items-center gap-1 mb-6">
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
</div>
<p className="text-gray-700 leading-relaxed mb-8 text-lg">
                "Professional, creative, and incredibly organized. Forma delivered our dream beach house on time and within budget. Highly recommended!"
              </p>
<div className="flex items-center gap-4">
<img alt="Emma Rodriguez" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3b6e4af7-ac86-4163-b303-578671458c76_320w.jpg"/>
<div>
<div className="font-semibold">Emma Rodriguez</div>
<div className="text-gray-600 text-sm">Malibu Beach House</div>
</div>
</div>
</div>

<div className="scale-in stagger-4 bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
<div className="flex items-center gap-1 mb-6">
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
</div>
<p className="text-gray-700 leading-relaxed mb-8 text-lg">
                "Outstanding creativity and execution. Our office space is now a source of inspiration for our entire team. Forma truly understands commercial design."
              </p>
<div className="flex items-center gap-4">
<img alt="David Park" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/792a3cac-21ba-4a11-85fe-6cda252b255d_320w.jpg"/>
<div>
<div className="font-semibold">David Park</div>
<div className="text-gray-600 text-sm">Tech Office Design</div>
</div>
</div>
</div>
<div className="scale-in stagger-5 bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl p-8 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
<div className="flex items-center gap-1 mb-6">
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
</div>
<p className="text-gray-700 leading-relaxed mb-8 text-lg">
                "From the first meeting to the final reveal, Forma was exceptional. They listened to our needs and created a space that's both beautiful and functional."
              </p>
<div className="flex items-center gap-4">
<img alt="Lisa Thompson" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/05b8d217-cbbf-409b-a1ff-f4515ea6aab3_320w.jpg"/>
<div>
<div className="font-semibold">Lisa Thompson</div>
<div className="text-gray-600 text-sm">Family Home</div>
</div>
</div>
</div>
<div className="scale-in stagger-6 bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
<div className="flex items-center gap-1 mb-6">
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
</div>
<p className="text-gray-700 leading-relaxed mb-8 text-lg">
                "Incredible attention to detail and commitment to quality. Forma transformed our restaurant into an award-winning space that our customers love."
              </p>
<div className="flex items-center gap-4">
<img alt="James Wilson" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04b430ce-45fe-4c6d-b375-4a4d349051a7_320w.jpg"/>
<div>
<div className="font-semibold">James Wilson</div>
<div className="text-gray-600 text-sm">Restaurant Owner</div>
</div>
</div>
</div>
</div>

<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="scale-in stagger-4 text-center">
<div className="counter text-4xl font-light mb-2" data-target="98">0</div>
<div className="text-gray-600">% Satisfaction Rate</div>
</div>
<div className="scale-in stagger-5 text-center">
<div className="counter text-4xl font-light mb-2" data-target="500">0</div>
<div className="text-gray-600">+ Happy Clients</div>
</div>
<div className="scale-in stagger-6 text-center">
<div className="text-4xl font-light mb-2">4.9</div>
<div className="text-gray-600">Average Rating</div>
</div>
<div className="scale-in stagger-6 text-center">
<div className="counter text-4xl font-light mb-2" data-target="95">0</div>
<div className="text-gray-600">% Referral Rate</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-gray-50 overflow-hidden" id="contact">

<div className="parallax-element absolute inset-0 opacity-30" id="contactParallax">
<div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 blur-3xl"></div>
<div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-green-100 to-blue-100 blur-3xl"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<div className="fade-in-left stagger-1 inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="mail"></i>
<span>Get in Touch</span>
</div>
<h2 className="fade-in-left stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
                Let's Create Your
                <span className="font-semibold text-green-600">Dream Space</span>
</h2>
<p className="fade-in-left stagger-3 text-xl text-gray-600 leading-relaxed mb-8 text-balance">
                Ready to transform your space? Schedule a consultation with our design experts and take the first step toward your dream interior.
              </p>

<div className="space-y-6 mb-8">
<div className="fade-in-left stagger-4 flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
<div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 grid place-items-center flex-shrink-0">
<i className="w-7 h-7" data-lucide="phone"></i>
</div>
<div>
<h4 className="font-semibold text-lg">Call Us</h4>
<div className="text-blue-600 font-medium">+1 (555) 123-4567</div>
<div className="text-gray-600 text-sm">Monday - Friday, 9AM - 6PM PST</div>
</div>
</div>
<div className="fade-in-left stagger-5 flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
<div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 grid place-items-center flex-shrink-0">
<i className="w-7 h-7" data-lucide="mail"></i>
</div>
<div>
<h4 className="font-semibold text-lg">Email Us</h4>
<div className="text-purple-600 font-medium">hello@forma.design</div>
<div className="text-gray-600 text-sm">We'll respond within 24 hours</div>
</div>
</div>
<div className="fade-in-left stagger-6 flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
<div className="w-14 h-14 rounded-xl bg-green-100 text-green-600 grid place-items-center flex-shrink-0">
<i className="w-7 h-7" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="font-semibold text-lg">Visit Showroom</h4>
<div className="text-green-600 font-medium">Beverly Hills Showroom</div>
<div className="text-gray-600 text-sm">9876 Wilshire Blvd, CA 90210</div>
</div>
</div>
</div>

<div className="fade-in-left stagger-6 grid grid-cols-3 gap-6 p-6 rounded-2xl bg-white shadow-sm">
<div className="text-center">
<div className="counter text-2xl font-semibold text-indigo-600" data-target="24">0</div>
<div className="text-gray-600 text-sm">Hour Response</div>
</div>
<div className="text-center border-l border-r border-gray-200">
<div className="text-2xl font-semibold text-purple-600">Free</div>
<div className="text-gray-600 text-sm">Consultation</div>
</div>
<div className="text-center">
<div className="counter text-2xl font-semibold text-green-600" data-target="15">0</div>
<div className="text-gray-600 text-sm">Years Experience</div>
</div>
</div>
</div>

<div className="scale-in stagger-2 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
<div className="mb-8">
<h3 className="text-2xl font-semibold mb-2">Start Your Project</h3>
<p className="text-gray-600">Tell us about your vision and we'll bring it to life.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">First Name *</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Last Name *</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Email Address *</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all" placeholder="+1 (555) 123-4567" type="tel"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Project Type *</label>
<select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all">
<option>Select your project type</option>
<option>Residential - Living Room</option>
<option>Residential - Kitchen</option>
<option>Residential - Bedroom</option>
<option>Residential - Bathroom</option>
<option>Commercial Space</option>
<option>Complete Home Renovation</option>
<option>Consultation Only</option>
</select>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Budget Range</label>
<select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all">
<option>Select your budget range</option>
<option>Under $50,000</option>
<option>$50,000 - $100,000</option>
<option>$100,000 - $250,000</option>
<option>$250,000 - $500,000</option>
<option>$500,000+</option>
<option>Consultation First</option>
</select>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Project Details *</label>
<textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all resize-none" placeholder="Tell us about your vision, space size, timeline, style preferences, and any specific requirements..." rows="4"></textarea>
</div>
<button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" type="submit">
                  Schedule Free Consultation
                </button>
<p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>
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
<div className="w-10 h-10 rounded-xl bg-white text-gray-900 grid place-items-center">
<span className="font-bold tracking-tighter">F</span>
</div>
<div>
<span className="text-2xl font-semibold">Forma</span>
<p className="text-gray-400 text-sm">Interior Design Excellence</p>
</div>
</div>
<p className="text-gray-400 leading-relaxed mb-6">
              Creating extraordinary living spaces through innovative design and meticulous craftsmanship since 2009.
            </p>

<div className="mb-6">
<h5 className="font-semibold text-sm mb-3">Awards &amp; Recognition</h5>
<div className="space-y-2 text-sm text-gray-400">
<div>Best Interior Design Studio 2024</div>
<div>Luxury Lifestyle Award Winner</div>
<div>Top 10 Design Firms - CA</div>
</div>
</div>
<div className="flex items-center gap-3">
<a className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 grid place-items-center transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 grid place-items-center transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 grid place-items-center transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 grid place-items-center transition-colors" href="#">
<i className="w-5 h-5" data-lucide="youtube"></i>
</a>
</div>
</div>

<div>
<h4 className="font-semibold mb-6 text-lg">Services</h4>
<div className="space-y-3">
<a className="block text-gray-400 hover:text-white transition-colors" href="#">Interior Design</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#">Space Planning</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#">Custom Furniture</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#">Project Management</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#">3D Visualization</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#">Color Consultation</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#">Luxury Staging</a>
</div>
</div>

<div>
<h4 className="font-semibold mb-6 text-lg">Company</h4>
<div className="space-y-3">
<a className="block text-gray-400 hover:text-white transition-colors" href="#about">About Us</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#process">Our Process</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#testimonials">Testimonials</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#">Careers</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#">Press Kit</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#">Blog</a>
</div>
</div>

<div>
<h4 className="font-semibold mb-6 text-lg">Get in Touch</h4>
<div className="space-y-4 text-gray-400">
<div>
<h5 className="font-semibold text-white mb-2">Beverly Hills Showroom</h5>
<p>9876 Wilshire Blvd</p>
<p>Beverly Hills, CA 90210</p>
</div>
<div>
<h5 className="font-semibold text-white mb-2">Manhattan Office</h5>
<p>456 Park Avenue</p>
<p>New York, NY 10016</p>
</div>
<div className="pt-4 border-t border-gray-800">
<p className="font-medium text-white">+1 (555) 123-4567</p>
<p>hello@forma.design</p>
</div>
<div className="pt-2">
<p className="text-sm">Monday - Friday: 9AM - 6PM PST</p>
<p className="text-sm">Saturday: 10AM - 4PM PST</p>
</div>
</div>
</div>
</div>
<div className="border-t border-gray-800 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-gray-400 text-sm">© 2025 Forma Interior Design. All rights reserved.</p>
<div className="flex items-center gap-6 text-sm text-gray-400">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Cookie Policy</a>
<a className="hover:text-white transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
