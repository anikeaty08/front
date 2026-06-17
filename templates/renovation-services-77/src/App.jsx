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



      // Advanced Parallax Controller
      class AdvancedParallaxController {
        constructor() {
          this.elements = [
            { id: 'heroBase', speed: -0.2 },
            { id: 'heroFloat', speed: -0.05 },
            { id: 'aboutParallax', speed: 0.15 }
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

      // Scroll Animation Controller
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

      // Counter Animation
      class CounterAnimationController {
        constructor() {
          this.counters = document.querySelectorAll('.counter');
          this.animatedCounters = new Set();
          this.init();
        }

        init() {
          this.handleScroll();
          window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 50), { passive: true });
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
              counter.textContent = target + (counter.dataset.target === "10" || counter.dataset.target === "100" ? "+" : "");
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
          this.sections = ['hero', 'about', 'expertise', 'portfolio', 'blog', 'contact'];
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
            if (scrolled > 50) {
              this.header.classList.add('backdrop-blur-xl', 'shadow-sm');
              this.header.querySelector('.absolute').classList.replace('bg-white/80', 'bg-white/95');
            } else {
              this.header.classList.remove('backdrop-blur-xl', 'shadow-sm');
              this.header.querySelector('.absolute').classList.replace('bg-white/95', 'bg-white/80');
            }
          }

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
              link.classList.add('text-stone-900');
              link.classList.remove('text-stone-600');
              link.querySelector('.absolute').classList.remove('scale-0');
              link.querySelector('.absolute').classList.add('scale-100');
            } else {
              link.classList.remove('text-stone-900');
              link.classList.add('text-stone-600');
              link.querySelector('.absolute').classList.add('scale-0');
              link.querySelector('.absolute').classList.remove('scale-100');
            }
          });
        }

        setupNavigation() {
          document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
              e.preventDefault();
              const targetId = link.getAttribute('href');
              if(targetId === '#') return;
              const target = document.querySelector(targetId);
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
          if (this.menuBtn) this.menuBtn.addEventListener('click', () => this.openMenu());
          if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.closeMenu());

          this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
          });

          if (this.menu) {
            this.menu.addEventListener('click', (e) => {
              if (e.target === this.menu) this.closeMenu();
            });
          }
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

      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
          new AdvancedParallaxController();
          new ScrollAnimationController();
          new CounterAnimationController();
          new NavigationController();
          new MobileMenuController();
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
      

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out" id="mainHeader">
<div className="absolute inset-0 glass-morphism bg-white/80 border-b border-stone-200/50"></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-3 group z-10" href="#hero">
<div className="w-9 h-9 rounded-xl bg-stone-900 text-amber-500 grid place-items-center shadow-sm group-hover:scale-105 transition-transform duration-200">
<span className="text-sm font-semibold tracking-tight">RC</span>
</div>
<span className="text-xl font-medium tracking-tight">Ren And Con</span>
</a>

<nav className="hidden lg:flex items-center">
<div className="flex items-center gap-1 bg-stone-100/80 rounded-full p-1.5 glass-morphism">
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
<span className="relative z-10">Projects</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="blog" href="#blog">
<span className="relative z-10">Blog</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="contact" href="#contact">
<span className="relative z-10">Contact</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
</div>
</nav>

<div className="flex items-center gap-3 z-10">
<a className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-white font-medium text-sm hover:bg-stone-800 transition-all duration-200 shadow-sm hover:shadow-md" href="#contact">
<iconify-icon className="text-base" icon="solar:calendar-minimalistic-linear"></iconify-icon>
<span>Get Estimate</span>
</a>
<button className="lg:hidden p-2 rounded-xl hover:bg-stone-100 transition-colors" id="mobileMenuBtn">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<div className="fixed inset-0 z-40 lg:hidden transform translate-x-full transition-transform duration-300" id="mobileMenu">
<div className="absolute inset-0 bg-stone-900/50 backdrop-blur-sm"></div>
<div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl">
<div className="p-6">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-stone-900 text-amber-500 grid place-items-center">
<span className="text-sm font-semibold tracking-tight">RC</span>
</div>
<span className="text-xl font-medium tracking-tight">Ren And Con</span>
</div>
<button className="p-2 rounded-xl hover:bg-stone-100" id="closeMobileMenu">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<nav className="space-y-2">
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-stone-50 font-medium transition-colors" href="#hero">
<iconify-icon className="text-xl text-stone-500" icon="solar:home-2-linear"></iconify-icon>
              Home
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-stone-50 font-medium transition-colors" href="#about">
<iconify-icon className="text-xl text-stone-500" icon="solar:users-group-rounded-linear"></iconify-icon>
              About
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-stone-50 font-medium transition-colors" href="#expertise">
<iconify-icon className="text-xl text-stone-500" icon="solar:compass-linear"></iconify-icon>
              Services
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-stone-50 font-medium transition-colors" href="#portfolio">
<iconify-icon className="text-xl text-stone-500" icon="solar:widget-5-linear"></iconify-icon>
              Projects
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-stone-50 font-medium transition-colors" href="#blog">
<iconify-icon className="text-xl text-stone-500" icon="solar:document-text-linear"></iconify-icon>
              Blog
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-stone-50 font-medium transition-colors" href="#contact">
<iconify-icon className="text-xl text-stone-500" icon="solar:letter-linear"></iconify-icon>
              Contact
            </a>
</nav>
<div className="mt-8 pt-6 border-t border-stone-200">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-stone-900 text-white font-medium" href="#contact">
<iconify-icon className="text-xl" icon="solar:calendar-minimalistic-linear"></iconify-icon>
              Get Estimate
            </a>
</div>
</div>
</div>
</div>
<main className="relative">

<section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
<div className="absolute inset-0">
<div className="parallax-element absolute inset-0 scale-110" id="heroBase">
<img alt="Custom kitchen remodeling" className="w-full h-full object-cover" src="https://renandcon.com/wp-content/uploads/2021/12/kitchen-remodeling-in-new-york.jpg"/>
<div className="absolute inset-0 bg-gradient-to-br from-stone-900/80 via-stone-900/50 to-stone-900/80"></div>
</div>
<div className="parallax-element absolute inset-0 pointer-events-none" id="heroFloat">
<div className="absolute top-20 right-20 w-32 h-32 rounded-3xl bg-white/5 glass-morphism border border-white/10 hidden lg:block transform rotate-12"></div>
<div className="absolute bottom-40 left-20 w-24 h-24 rounded-2xl bg-white/5 glass-morphism border border-white/10 hidden lg:block transform -rotate-6"></div>
</div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center mt-20">
<div className="max-w-4xl mx-auto">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 glass-morphism bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium mb-8">
<iconify-icon className="text-base text-amber-400" icon="solar:medal-ribbon-linear"></iconify-icon>
<span>Fully Licensed &amp; Insured in New York</span>
</div>
<h1 className="fade-in-up stagger-2 text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[0.9] mb-8 text-balance">
<span className="block">Renovation &amp;</span>
<span className="block font-medium bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">Construction</span>
</h1>
<p className="fade-in-up stagger-3 text-lg sm:text-2xl text-white/90 font-light leading-relaxed mb-12 max-w-3xl mx-auto text-balance">
              More than 10 years in the field confirms our experience in custom kitchens, stone countertops, and expert craftsmanship.
            </p>
<div className="fade-in-up stagger-4 flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="inline-flex items-center gap-3 bg-amber-500 text-stone-950 px-8 py-4 rounded-2xl font-medium text-lg hover:bg-amber-400 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1" href="#expertise">
<span>Our Services</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center gap-4 text-white font-medium text-lg group" href="#portfolio">
<div className="w-14 h-14 rounded-full glass-morphism bg-white/10 border border-white/20 grid place-items-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:widget-5-linear"></iconify-icon>
</div>
<span className="group-hover:text-amber-400 transition-colors">View Projects</span>
</a>
</div>
</div>
<div className="fade-in-up stagger-5 mt-16 sm:mt-24">
<div className="mx-auto w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 px-6 py-6 backdrop-blur-md shadow-2xl">
<dl className="grid grid-cols-3 divide-x divide-white/10 text-center">
<div className="px-3">
<dd className="counter counter-animate text-4xl font-light tracking-tight text-white" data-target="10">0</dd>
<dt className="mt-2 text-xs sm:text-sm text-white/70 font-medium uppercase tracking-widest">Years Experience</dt>
</div>
<div className="px-3">
<dd className="counter counter-animate text-4xl font-light tracking-tight text-white" data-target="100">0</dd>
<dt className="mt-2 text-xs sm:text-sm text-white/70 font-medium uppercase tracking-widest">% Satisfaction</dt>
</div>
<div className="px-3">
<div className="text-4xl font-light tracking-tight text-white flex items-center justify-center gap-1">
<iconify-icon className="text-amber-400" icon="solar:star-linear"></iconify-icon>
<span>5.0</span>
</div>
<dt className="mt-2 text-xs sm:text-sm text-white/70 font-medium uppercase tracking-widest">Client Rating</dt>
</div>
</dl>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-white overflow-hidden" id="about">
<div className="parallax-element absolute inset-0 opacity-30 pointer-events-none" id="aboutParallax">
<div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-amber-50 to-stone-100 blur-3xl"></div>
<div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-stone-50 to-amber-50 blur-3xl"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="fade-in-left stagger-1 inline-flex items-center gap-2 bg-stone-100 text-stone-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
<iconify-icon className="text-base" icon="solar:magic-stick-3-linear"></iconify-icon>
<span>What Makes Us Different?</span>
</div>
<h2 className="fade-in-left stagger-2 text-4xl sm:text-5xl font-light tracking-tight mb-6 text-balance text-stone-900">
                Certified Quality &amp; <br/>
<span className="font-medium text-amber-600">Client Satisfaction</span>
</h2>
<p className="fade-in-left stagger-3 text-lg text-stone-600 leading-relaxed mb-8 text-balance">
                The quality and compliance of our construction, maintenance, and remodeling services are certified by our satisfied clients. We carry out work in residences, buildings, offices, shopping centers, residential complexes, and more.
              </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
<div className="fade-in-left stagger-4 flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 grid place-items-center flex-shrink-0 border border-amber-100">
<iconify-icon className="text-2xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-base text-stone-900 mb-1">Environmentally Friendly</h4>
<p className="text-sm text-stone-500">Sustainable practices in our fabrication and sourcing.</p>
</div>
</div>
<div className="fade-in-left stagger-5 flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-stone-50 text-stone-600 grid place-items-center flex-shrink-0 border border-stone-200">
<iconify-icon className="text-2xl" icon="solar:tag-price-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-base text-stone-900 mb-1">Affordable Rates</h4>
<p className="text-sm text-stone-500">Competitive pricing without compromising on quality.</p>
</div>
</div>
<div className="fade-in-left stagger-6 flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-stone-900 text-amber-400 grid place-items-center flex-shrink-0 shadow-md">
<iconify-icon className="text-2xl" icon="solar:diploma-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-base text-stone-900 mb-1">Certified &amp; Experienced</h4>
<p className="text-sm text-stone-500">Professional craftsmen with deep industry knowledge.</p>
</div>
</div>
<div className="fade-in-left stagger-6 flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-amber-500 text-stone-900 grid place-items-center flex-shrink-0 shadow-md">
<iconify-icon className="text-2xl" icon="solar:hearts-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-base text-stone-900 mb-1">Customer Satisfaction</h4>
<p className="text-sm text-stone-500">Dedicated to providing a superior level of service.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="fade-in-right stagger-2 relative">
<img alt="Stone fabrication process" className="w-full h-96 lg:h-[600px] object-cover rounded-3xl shadow-2xl border border-stone-200" src="https://renandcon.com/wp-content/uploads/2021/11/artesanal-fabrication.jpg"/>
<div className="scale-in stagger-4 absolute -bottom-8 -left-8 sm:-left-12 bg-white rounded-2xl p-6 shadow-xl border border-stone-100 max-w-xs">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-stone-800 to-stone-950 text-amber-400 grid place-items-center flex-shrink-0">
<iconify-icon className="text-3xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<div className="text-lg font-medium tracking-tight text-stone-900">Best Stone for Kitchens</div>
<div className="text-stone-500 text-sm leading-snug">Premium Countertops in Connecticut</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-stone-50 overflow-hidden border-y border-stone-200/50" id="expertise">
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 bg-stone-200/50 text-stone-700 rounded-full px-4 py-2 text-sm font-medium mb-6 border border-stone-200">
<iconify-icon className="text-base" icon="solar:ruler-cross-pen-linear"></iconify-icon>
<span>Our Expertise</span>
</div>
<h2 className="fade-in-up stagger-2 text-4xl sm:text-5xl font-light tracking-tight mb-6 text-balance text-stone-900">
              Comprehensive <br/>
<span className="font-medium text-amber-600">Renovation Services</span>
</h2>
<p className="fade-in-up stagger-3 text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed text-balance">
              From artisanal stone fabrication to complete cabinet installations, our team handles every aspect of your project with precision.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="scale-in stagger-1 group">
<div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-stone-100 h-full flex flex-col">
<div className="w-16 h-16 rounded-2xl bg-stone-100 text-stone-800 grid place-items-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-3xl" icon="solar:hammer-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-stone-900">Artesanal Fabrication</h3>
<p className="text-stone-600 leading-relaxed mb-8 flex-grow text-sm">
                  Custom crafting and shaping of premium materials tailored exactly to your space's unique dimensions and style requirements.
                </p>
<div className="h-48 rounded-xl overflow-hidden mb-6">
<img alt="Fabrication" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://renandcon.com/wp-content/uploads/2021/11/artesanal-fabrication.jpg"/>
</div>
<a className="inline-flex items-center gap-2 text-amber-600 font-medium group-hover:gap-3 transition-all mt-auto text-sm uppercase tracking-wide" href="#contact">
<span>Request Estimate</span>
<iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="scale-in stagger-2 group">
<div className="relative bg-stone-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-stone-800 h-full flex flex-col text-white">
<div className="w-16 h-16 rounded-2xl bg-stone-800 text-amber-400 grid place-items-center mb-6 group-hover:bg-amber-500 group-hover:text-stone-900 transition-colors duration-300">
<iconify-icon className="text-3xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-white">Countertops Installations</h3>
<p className="text-stone-400 leading-relaxed mb-8 flex-grow text-sm">
                  Precision installation of the finest stone countertops, ensuring a flawless fit and finish for your new kitchen or bathroom.
                </p>
<div className="h-48 rounded-xl overflow-hidden mb-6">
<img alt="Countertops" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://renandcon.com/wp-content/uploads/2021/11/countertops-installations.jpg"/>
</div>
<a className="inline-flex items-center gap-2 text-amber-400 font-medium group-hover:gap-3 transition-all mt-auto text-sm uppercase tracking-wide" href="#contact">
<span>Request Estimate</span>
<iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="scale-in stagger-3 group">
<div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-stone-100 h-full flex flex-col">
<div className="w-16 h-16 rounded-2xl bg-stone-100 text-stone-800 grid place-items-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-3xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-stone-900">Natural Stone Restoration</h3>
<p className="text-stone-600 leading-relaxed mb-8 flex-grow text-sm">
                  Bringing life back to your existing stone surfaces through expert polishing, sealing, and damage repair techniques.
                </p>
<div className="h-48 rounded-xl overflow-hidden mb-6">
<img alt="Stone Restoration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://renandcon.com/wp-content/uploads/2021/11/natural-stone.jpg"/>
</div>
<a className="inline-flex items-center gap-2 text-amber-600 font-medium group-hover:gap-3 transition-all mt-auto text-sm uppercase tracking-wide" href="#contact">
<span>Request Estimate</span>
<iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="scale-in stagger-4 group">
<div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-stone-100 h-full flex flex-col">
<div className="w-16 h-16 rounded-2xl bg-stone-100 text-stone-800 grid place-items-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-3xl" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-stone-900">Cabinets Installations</h3>
<p className="text-stone-600 leading-relaxed mb-8 flex-grow text-sm">
                  Seamless assembly and fitting of custom cabinetry to maximize your storage space and elevate your room's design.
                </p>
<div className="h-48 rounded-xl overflow-hidden mb-6">
<img alt="Cabinet Installation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://renandcon.com/wp-content/uploads/2021/11/cabinets-installations.jpg"/>
</div>
<a className="inline-flex items-center gap-2 text-amber-600 font-medium group-hover:gap-3 transition-all mt-auto text-sm uppercase tracking-wide" href="#contact">
<span>Request Estimate</span>
<iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="scale-in stagger-5 group">
<div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-stone-100 h-full flex flex-col">
<div className="w-16 h-16 rounded-2xl bg-stone-100 text-stone-800 grid place-items-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-3xl" icon="solar:paint-roller-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-stone-900">Cabinets Painting</h3>
<p className="text-stone-600 leading-relaxed mb-8 flex-grow text-sm">
                  Transform your existing cabinets with professional surface preparation and premium, durable paint finishes.
                </p>
<div className="h-48 rounded-xl overflow-hidden mb-6">
<img alt="Cabinet Painting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://renandcon.com/wp-content/uploads/2021/11/cabinets-painting.jpg"/>
</div>
<a className="inline-flex items-center gap-2 text-amber-600 font-medium group-hover:gap-3 transition-all mt-auto text-sm uppercase tracking-wide" href="#contact">
<span>Request Estimate</span>
<iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="scale-in stagger-6 group">
<div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-stone-100 h-full flex flex-col">
<div className="w-16 h-16 rounded-2xl bg-stone-100 text-stone-800 grid place-items-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-3xl" icon="solar:sofa-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-stone-900">Furnitures</h3>
<p className="text-stone-600 leading-relaxed mb-8 flex-grow text-sm">
                  Sourcing, assembly, and placement of high-quality furnishings to complete your newly renovated space perfectly.
                </p>
<div className="h-48 rounded-xl overflow-hidden mb-6">
<img alt="Furniture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://renandcon.com/wp-content/uploads/2021/11/furnitures.jpg"/>
</div>
<a className="inline-flex items-center gap-2 text-amber-600 font-medium group-hover:gap-3 transition-all mt-auto text-sm uppercase tracking-wide" href="#contact">
<span>Request Estimate</span>
<iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-white overflow-hidden" id="portfolio">
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div>
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 bg-amber-50 text-amber-700 rounded-full px-4 py-2 text-sm font-medium mb-6 border border-amber-100">
<iconify-icon className="text-base" icon="solar:gallery-wide-linear"></iconify-icon>
<span>Our Projects</span>
</div>
<h2 className="fade-in-up stagger-2 text-4xl sm:text-5xl font-light tracking-tight text-stone-900 text-balance">
                  Explore Our <span className="font-medium text-amber-600">Gallery</span>
</h2>
</div>
<div className="fade-in-up stagger-3">
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-stone-200 text-stone-900 font-medium hover:border-stone-900 transition-colors" href="#contact">
<span>View All Projects</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
<div className="scale-in stagger-1 md:col-span-5 relative rounded-3xl overflow-hidden group h-[400px] md:h-full">
<img alt="Kitchen Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://renandcon.com/wp-content/uploads/2021/11/galeria002.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-2xl font-medium text-white mb-2">Modern Kitchen Remodel</h3>
<p className="text-stone-300 text-sm">Full cabinetry and custom countertops.</p>
</div>
</div>
<div className="md:col-span-7 grid grid-rows-2 gap-6 h-auto md:h-full">
<div className="scale-in stagger-2 relative rounded-3xl overflow-hidden group h-[300px] md:h-auto">
<img alt="Detail Project" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="https://renandcon.com/wp-content/uploads/2021/11/galeria000.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-xl font-medium text-white mb-1">Custom Island Fabrication</h3>
<p className="text-stone-300 text-sm">Premium marble finish.</p>
</div>
</div>
<div className="scale-in stagger-3 relative rounded-3xl overflow-hidden group h-[300px] md:h-auto">
<img alt="Bathroom Project" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="https://renandcon.com/wp-content/uploads/2021/11/galeria003.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-xl font-medium text-white mb-1">Stone Countertop Installation</h3>
<p className="text-stone-300 text-sm">Seamless edge detailing.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-stone-100 overflow-hidden border-y border-stone-200/50" id="blog">
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="fade-in-up stagger-1 text-4xl sm:text-5xl font-light tracking-tight text-stone-900">
                  Latest from <span className="font-medium text-amber-600">Our Blog</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<a className="scale-in stagger-2 group block bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" href="#">
<div className="h-56 overflow-hidden relative">
<img alt="Cabinets in New York" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://renandcon.com/wp-content/uploads/2021/12/cabinets-in-new-york.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-medium text-stone-900 shadow-sm">Dec 06</div>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-stone-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2 tracking-tight">Cabinets in New York</h3>
<p className="text-stone-500 text-sm mb-4 line-clamp-2">Discover the latest trends and essential tips for cabinet installations and painting in the NY area.</p>
<span className="text-amber-600 font-medium text-sm flex items-center gap-1">
                            Continue reading <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>

<a className="scale-in stagger-3 group block bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" href="#">
<div className="h-56 overflow-hidden relative">
<img alt="Best stone countertops" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://renandcon.com/wp-content/uploads/2021/12/best-stone-for-kitchen-countertops-in-connecticut.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-medium text-stone-900 shadow-sm">Dec 06</div>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-stone-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2 tracking-tight">Best stone for kitchen countertops in connecticut</h3>
<p className="text-stone-500 text-sm mb-4 line-clamp-2">A comprehensive guide to choosing the perfect, durable stone for your upcoming kitchen remodel.</p>
<span className="text-amber-600 font-medium text-sm flex items-center gap-1">
                            Continue reading <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>

<a className="scale-in stagger-4 group block bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" href="#">
<div className="h-56 overflow-hidden relative">
<img alt="Kitchen Remodeling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://renandcon.com/wp-content/uploads/2021/12/kitchen-remodeling-in-new-york.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-medium text-stone-900 shadow-sm">Dec 06</div>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-stone-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2 tracking-tight">Kitchen remodeling in New York</h3>
<p className="text-stone-500 text-sm mb-4 line-clamp-2">How to navigate the complexities of full-scale kitchen renovations in urban environments.</p>
<span className="text-amber-600 font-medium text-sm flex items-center gap-1">
                            Continue reading <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>
</div>
</div>
</section>

<section className="relative py-32 bg-white overflow-hidden" id="contact">
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="fade-in-left stagger-1 inline-flex items-center gap-2 bg-stone-100 text-stone-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
<iconify-icon className="text-base" icon="solar:letter-linear"></iconify-icon>
<span>Get in Touch</span>
</div>
<h2 className="fade-in-left stagger-2 text-4xl sm:text-5xl font-light tracking-tight mb-6 text-balance text-stone-900">
                Ready to improve your <br/>
<span className="font-medium text-amber-600">home's space?</span>
</h2>
<p className="fade-in-left stagger-3 text-lg text-stone-600 leading-relaxed mb-8 text-balance">
                Request a free consultation and price estimate. Our knowledgeable team of professionals is ready to assist you through any project, small or large.
              </p>
<div className="space-y-4 mb-8">
<div className="fade-in-left stagger-4 flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-sm transition-all">
<div className="w-14 h-14 rounded-xl bg-white text-amber-600 grid place-items-center shadow-sm flex-shrink-0 border border-stone-100">
<iconify-icon className="text-2xl" icon="solar:phone-rounded-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-base text-stone-900">Call Us</h4>
<a className="text-amber-600 font-medium hover:underline text-lg" href="tel:+13477739699">+1 (347) 773 9699</a>
</div>
</div>
<div className="fade-in-left stagger-5 flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-sm transition-all">
<div className="w-14 h-14 rounded-xl bg-white text-amber-600 grid place-items-center shadow-sm flex-shrink-0 border border-stone-100">
<iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-base text-stone-900">Email Us</h4>
<a className="text-amber-600 font-medium hover:underline" href="mailto:renandcon@gmail.com">renandcon@gmail.com</a>
</div>
</div>
</div>
</div>

<div className="scale-in stagger-2 bg-stone-900 rounded-3xl p-8 lg:p-10 shadow-2xl border border-stone-800 text-white">
<div className="mb-8">
<h3 className="text-2xl font-medium tracking-tight mb-2">Request an Estimate</h3>
<p className="text-stone-400 text-sm">Tell us about your renovation needs.</p>
</div>
<form className="space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-stone-300 uppercase tracking-wider mb-2">First Name</label>
<input className="w-full px-4 py-3 rounded-xl bg-stone-800/50 border border-stone-700 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-300 uppercase tracking-wider mb-2">Last Name</label>
<input className="w-full px-4 py-3 rounded-xl bg-stone-800/50 border border-stone-700 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-stone-300 uppercase tracking-wider mb-2">Email Address</label>
<input className="w-full px-4 py-3 rounded-xl bg-stone-800/50 border border-stone-700 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-300 uppercase tracking-wider mb-2">Service Needed</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl bg-stone-800/50 border border-stone-700 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all appearance-none">
<option disabled="" selected="" value="">Select a service</option>
<option>Artesanal Fabrication</option>
<option>Countertops Installations</option>
<option>Natural Stone Restoration</option>
<option>Cabinets Installations</option>
<option>Cabinets Painting</option>
<option>Other Remodeling</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-stone-300 uppercase tracking-wider mb-2">Project Details</label>
<textarea className="w-full px-4 py-3 rounded-xl bg-stone-800/50 border border-stone-700 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all resize-none" placeholder="Tell us about your space and requirements..." rows="4"></textarea>
</div>
<button className="w-full bg-amber-500 text-stone-950 py-4 rounded-xl font-medium text-lg hover:bg-amber-400 transition-all duration-300 shadow-lg transform hover:-translate-y-0.5" type="submit">
                  Submit Request
                </button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-stone-950 text-white border-t border-stone-900">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
<div className="lg:col-span-1">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-xl bg-stone-800 text-amber-500 grid place-items-center">
<span className="font-semibold tracking-tight">RC</span>
</div>
<span className="text-2xl font-medium tracking-tight">Ren And Con</span>
</div>
<p className="text-stone-400 leading-relaxed text-sm mb-6 pr-4">
              We are dedicated to providing our clients with a superior level of service, highest quality products, and competitive pricing for any project, small or large.
            </p>
<div className="flex items-center gap-3">
<a className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-500 hover:text-amber-500 grid place-items-center transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:facebook-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-500 hover:text-amber-500 grid place-items-center transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:instagram-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-500 hover:text-amber-500 grid place-items-center transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:youtube-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-medium mb-6 tracking-tight text-white">Services</h4>
<div className="space-y-3 text-sm">
<a className="block text-stone-400 hover:text-amber-400 transition-colors" href="#">Artesanal Fabrication</a>
<a className="block text-stone-400 hover:text-amber-400 transition-colors" href="#">Cabinets Installations</a>
<a className="block text-stone-400 hover:text-amber-400 transition-colors" href="#">Cabinets Painting</a>
<a className="block text-stone-400 hover:text-amber-400 transition-colors" href="#">Countertops Installations</a>
<a className="block text-stone-400 hover:text-amber-400 transition-colors" href="#">Natural Stone Restoration</a>
<a className="block text-stone-400 hover:text-amber-400 transition-colors" href="#">Furnitures</a>
</div>
</div>
<div>
<h4 className="font-medium mb-6 tracking-tight text-white">Company</h4>
<div className="space-y-3 text-sm">
<a className="block text-stone-400 hover:text-amber-400 transition-colors" href="#hero">Home</a>
<a className="block text-stone-400 hover:text-amber-400 transition-colors" href="#about">About Us</a>
<a className="block text-stone-400 hover:text-amber-400 transition-colors" href="#portfolio">Projects</a>
<a className="block text-stone-400 hover:text-amber-400 transition-colors" href="#blog">Blog</a>
<a className="block text-stone-400 hover:text-amber-400 transition-colors" href="#contact">Contact</a>
</div>
</div>
<div>
<h4 className="font-medium mb-6 tracking-tight text-white">Contact Info</h4>
<div className="space-y-4 text-sm text-stone-400">
<div className="flex items-start gap-3">
<iconify-icon className="text-lg mt-0.5 text-amber-500" icon="solar:phone-rounded-linear"></iconify-icon>
<div>
<p className="text-white mb-1">Phone</p>
<a className="hover:text-amber-400 transition-colors" href="tel:+13477739699">(347) 773 9699</a>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-lg mt-0.5 text-amber-500" icon="solar:letter-linear"></iconify-icon>
<div>
<p className="text-white mb-1">Email</p>
<a className="hover:text-amber-400 transition-colors" href="mailto:renandcon@gmail.com">renandcon@gmail.com</a>
</div>
</div>
</div>
</div>
</div>
<div className="border-t border-stone-800 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-stone-500 text-sm">© 2024 Ren and Con. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
