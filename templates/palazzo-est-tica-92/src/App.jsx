import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize Lucide icons
      document.addEventListener("DOMContentLoaded", () => {
        if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out" id="mainHeader">
<div className="absolute inset-0 glass-morphism border-b bg-white/80 border-yellow-200/40" style={{}}></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-3 group z-10" href="#hero">
<span className="text-xl font-semibold tracking-tight" style={{}}>Simone Valenga</span>
</a>

<nav className="hidden lg:flex items-center">
<div className="flex glass-morphism bg-yellow-50/80 rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 gap-x-1 gap-y-1 items-center" style={{}}>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="hero" href="#hero">
<span className="relative z-10">Início</span>
<div className="absolute inset-0 shadow-sm rounded-full group-hover:scale-100 transition-transform duration-300 bg-white"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="about" href="#about">
<span className="relative z-10">Sobre</span>
<div className="absolute inset-0 shadow-sm rounded-full group-hover:scale-100 transition-transform duration-300 bg-white"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="expertise" href="#expertise">
<span className="relative z-10">Tratamentos</span>
<div className="absolute inset-0 shadow-sm rounded-full group-hover:scale-100 transition-transform duration-300 bg-white"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="portfolio" href="#portfolio">
<span className="relative z-10">Resultados</span>
<div className="absolute inset-0 shadow-sm rounded-full group-hover:scale-100 transition-transform duration-300 bg-white"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="testimonials" href="#testimonials">
<span className="relative z-10">Depoimentos</span>
<div className="absolute inset-0 shadow-sm rounded-full group-hover:scale-100 transition-transform duration-300 bg-white"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="contact" href="#contact">
<span className="relative z-10">Contato</span>
<div className="absolute inset-0 shadow-sm rounded-full group-hover:scale-100 transition-transform duration-300 bg-white"></div>
</a>
</div>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 transition-all duration-200 hover:shadow-md text-sm font-medium text-white bg-yellow-500 rounded-xl px-5 py-2.5 shadow-sm hover:default" href="#contact" style={{}}>
<svg className="lucide lucide-calendar w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="">Agendar Avaliação</span>
</a>
<button className="lg:hidden p-2 rounded-xl transition-colors hover:bg-yellow-50" id="mobileMenuBtn" style={{}}>
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<div className="fixed inset-0 z-40 lg:hidden transform translate-x-full transition-transform duration-300" id="mobileMenu">
<div className="absolute inset-0 backdrop-blur-sm bg-black/50"></div>
<div className="absolute right-0 top-0 h-full w-80 shadow-2xl bg-white">
<div className="p-6">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl grid place-items-center text-white default" style={{}}>
<span className="text-sm font-bold tracking-tighter">P</span>
</div>
<span className="text-xl font-semibold">Palazzo Estética</span>
</div>
<button className="p-2 rounded-xl hover:bg-yellow-50" id="closeMobileMenu" style={{}}>
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="space-y-2">
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors hover:bg-yellow-50" href="#hero" style={{}}>
<svg className="lucide lucide-home w-5 h-5 default" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
              Início
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors hover:bg-yellow-50" href="#about" style={{}}>
<svg className="lucide lucide-users w-5 h-5 default" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
              Sobre
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors hover:bg-yellow-50" href="#expertise" style={{}}>
<svg className="lucide lucide-compass w-5 h-5 default" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
              Tratamentos
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors hover:bg-yellow-50" href="#portfolio" style={{}}>
<svg className="lucide lucide-grid-3x3 w-5 h-5 default" data-lucide="grid-3x3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
              Resultados
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors hover:bg-yellow-50" href="#testimonials" style={{}}>
<svg className="lucide lucide-star w-5 h-5 default" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
              Depoimentos
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors hover:bg-yellow-50" href="#contact" style={{}}>
<svg className="lucide lucide-mail w-5 h-5 default" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
              Contato
            </a>
</nav>
<div className="mt-8 pt-6 border-t border-yellow-100" style={{}}>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-white default" href="#contact" style={{}}>
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Agendar Avaliação
            </a>
</div>
</div>
</div>
</div>
<main className="relative">

<section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">

<div className="absolute inset-0">

<div className="parallax-element absolute inset-0 scale-110" id="heroBase" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
<img alt="Ambiente acolhedor" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aabac76d-ac03-47b1-be1c-fca16fa43e96_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-br from-yellow-900/60 via-yellow-900/40 to-yellow-900/60" style={{}}></div>
</div>

<div className="parallax-element absolute top-0 right-0 bottom-0 left-0" id="heroFloat" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
<div className="absolute top-20 right-20 w-32 h-32 rounded-3xl glass-morphism border hidden lg:block transform rotate-12 bg-white/10 border-white/20"></div>
<div className="absolute bottom-40 left-20 w-24 h-24 rounded-2xl glass-morphism border hidden lg:block transform -rotate-6 bg-white/5 border-white/10" style={{}}></div>
<div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full hidden lg:block animate-pulse bg-white/60"></div>
<div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full hidden lg:block animate-pulse bg-white/40" style={{animationDelay: '1s'}}></div>
<div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full hidden lg:block animate-pulse bg-white/30" style={{animationDelay: '2s'}}></div>
</div>
</div>

<div className="lg:px-8 text-center max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="max-w-4xl mx-auto">

<div className="fade-in-up stagger-1 inline-flex items-center gap-2 glass-morphism border rounded-full px-4 py-2 text-sm font-medium mb-8 bg-white/10 border-white/20 text-white" style={{}}>
<svg className="lucide lucide-award w-4 h-4" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="">Cuidado Estético Premium</span>
</div>

<h1 className="fade-in-up stagger-2 text-6xl sm:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.9] mb-8 text-white" style={{}}>
<span className="block">Beleza que</span>
<span className="block font-semibold bg-gradient-to-r bg-clip-text text-transparent from-white to-white/80">Eleva sua Confiança</span>
</h1>

<p className="fade-in-up stagger-3 text-xl sm:text-2xl font-light leading-relaxed mb-12 max-w-3xl mx-auto text-balance text-white/90">
              Protocolos exclusivos em estética facial e corporal com resultados naturais e duradouros.
            </p>

<div className="fade-in-up stagger-4 flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 bg-white hover:bg-yellow-50 default" href="#portfolio" style={{}}>
<span className="">Ver Resultados</span>
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button className="inline-flex items-center gap-4 font-medium text-lg group text-white" style={{}}>
<div className="w-14 h-14 rounded-full glass-morphism border grid place-items-center group-hover:scale-110 transition-transform duration-300 bg-white/20 border-white/30" style={{}}>
<svg className="lucide lucide-play w-6 h-6 ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<span className="group-hover:text-white/80 transition-colors">Conheça a Clínica</span>
</button>
</div>
</div>


<div className="fade-in-up stagger-5 mt-10 sm:mt-12">
<div className="mx-auto w-full max-w-3xl rounded-2xl border px-6 py-5 backdrop-blur border-white/20 bg-white/10">
<dl className="grid grid-cols-3 divide-x text-center divide-white/15">
<div className="px-3">
<dd className="counter counter-animate text-3xl font-light leading-tight text-white" data-target="500" style={{}}>4</dd>
<dt className="mt-1 text-xs sm:text-sm text-white/70" style={{}}>Procedimentos</dt>
</div>
<div className="px-3">
<dd className="counter counter-animate text-3xl font-light leading-tight text-white" data-target="15" style={{}}>0</dd>
<dt className="mt-1 text-xs sm:text-sm text-white/70" style={{}}>Anos de Atuação</dt>
</div>
<div className="px-3">
<dd className="counter counter-animate text-3xl font-light leading-tight text-white" data-target="98" style={{}}>0</dd>
<dt className="mt-1 text-xs sm:text-sm text-white/70" style={{}}>Satisfação</dt>
</div>
</dl>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden bg-white" id="about">

<div className="parallax-element absolute inset-0 opacity-20" id="aboutParallax" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
<div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br blur-3xl to-green-50 from-yellow-50" style={{}}></div>
<div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br blur-3xl from-yellow-50 to-yellow-50" style={{}}></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="">
<div className="fade-in-left stagger-1 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6 bg-yellow-100 default" style={{}}>
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>Sobre a Clínica</span>
</div>
<h2 className="fade-in-left stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
                Protocolos que valorizam sua 
                <span className="font-semibold default" style={{}}>beleza natural</span>
</h2>
<p className="fade-in-left stagger-3 text-xl leading-relaxed mb-8 text-balance default" style={{}}>
                Atendimento humanizado, tecnologia de ponta e resultados que respeitam a sua individualidade. Cuidado completo para face e corpo.
              </p>

<div className="space-y-4 mb-8">
<div className="fade-in-left stagger-4 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl grid place-items-center flex-shrink-0 bg-yellow-100 default" style={{}}>
<svg className="lucide lucide-award w-6 h-6" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<div>
<h4 className="font-semibold text-lg">Excelência reconhecida</h4>
<p className="default" style={{}}>Padrões elevados e resultados consistentes</p>
</div>
</div>
<div className="fade-in-left stagger-5 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl grid place-items-center flex-shrink-0 bg-yellow-100 default" style={{}}>
<svg className="lucide lucide-heart w-6 h-6" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
<div>
<h4 className="font-semibold text-lg">Cuidado humanizado</h4>
<p className="default" style={{}}>Atenção aos detalhes em cada etapa</p>
</div>
</div>
<div className="fade-in-left stagger-6 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl grid place-items-center flex-shrink-0 bg-green-100 default" style={{}}>
<svg className="lucide lucide-sparkles w-6 h-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div>
<h4 className="font-semibold text-lg">Tecnologia &amp; expertise</h4>
<p className="default" style={{}}>Procedimentos seguros e eficazes</p>
</div>
</div>
</div>
<a className="fade-in-left stagger-6 inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-white hover:default default" href="#portfolio" style={{}}>
<span>Explorar Resultados</span>
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="relative">
<div className="fade-in-right stagger-2 relative">
<img alt="Equipe de estética" className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/211d2508-6de8-4442-bc3e-3e8bea65298f_800w.jpg"/>

<div className="scale-in stagger-4 absolute -bottom-8 -left-8 rounded-2xl p-6 shadow-xl border bg-white border-yellow-100" style={{}}>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br grid place-items-center to-green-600 text-white from-yellow-500" style={{}}>
<svg className="lucide lucide-trending-up w-6 h-6" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div>
<div className="counter text-2xl font-semibold" data-target="500">4</div>
<div className="text-sm default" style={{}}>Clientes Satisfeitos</div>
</div>
</div>
</div>

<div className="scale-in stagger-3 absolute -top-4 -right-4 bg-gradient-to-r rounded-2xl px-6 py-3 shadow-lg to-green-600 text-white from-yellow-500" style={{}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-semibold">Avaliação 5.0</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden bg-yellow-50" id="expertise" style={{}}>

<div className="parallax-element absolute inset-0 opacity-30" id="expertiseParallax" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
<div className="absolute top-20 -right-40 w-96 h-96 rounded-full bg-gradient-to-br blur-3xl to-green-100 from-yellow-100" style={{}}></div>
<div className="absolute bottom-20 -left-40 w-80 h-80 rounded-full bg-gradient-to-br blur-3xl from-yellow-100 to-yellow-100" style={{}}></div>
<div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-br blur-3xl from-green-100 to-yellow-100" style={{}}></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6 bg-yellow-100 default" style={{}}>
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Tratamentos</span>
</div>
<h2 className="fade-in-up stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
              Resultados naturais, 
              <span className="font-semibold">cuidado real</span>
</h2>
<p className="fade-in-up stagger-3 text-xl max-w-3xl mx-auto leading-relaxed text-balance default" style={{}}>
              Planos personalizados em estética facial e corporal com foco em segurança, conforto e bem-estar.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="scale-in stagger-1 group">
<div className="relative rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border h-full bg-white border-yellow-100" style={{}}>
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br grid place-items-center mb-6 group-hover:scale-110 transition-transform duration-300 to-green-600 text-white from-yellow-500" style={{}}>
<svg className="lucide lucide-user-check w-8 h-8" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-4 tracking-tight">Avaliação Personalizada</h3>
<p className="leading-relaxed mb-6 default" style={{}}>
                  Diagnóstico completo e plano de tratamento sob medida para suas necessidades.
                </p>
<ul className="space-y-2 mb-6 text-sm default" style={{}}>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 default" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Análise facial/corporal</span>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 default" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Protocolos combinados</span>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 default" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Acompanhamento contínuo</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all default" href="#contact" style={{}}>
<span>Saiba mais</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="scale-in stagger-2 group lg:-mt-4">
<div className="relative bg-gradient-to-br rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full text-white from-yellow-900 to-yellow-800" style={{}}>
<div className="absolute top-6 right-6">
<div className="w-3 h-3 rounded-full animate-pulse bg-yellow-400" style={{}}></div>
</div>
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br grid place-items-center mb-6 group-hover:scale-110 transition-transform duration-300 to-green-600 text-white from-yellow-500" style={{}}>
<svg className="lucide lucide-sparkles w-8 h-8" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold mb-4 bg-yellow-500/20 text-yellow-200" style={{}}>
<svg className="lucide lucide-star w-3 h-3" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>Mais procurado</span>
</div>
<h3 className="text-xl font-semibold mb-4 tracking-tight">Procedimentos Faciais</h3>
<p className="leading-relaxed mb-6 default" style={{}}>
                  Protocolos para rejuvenescimento, hidratação, limpeza profunda e glow imediato.
                </p>
<ul className="space-y-2 mb-6 text-sm default" style={{}}>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 default" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Limpeza e hidratação profunda</span>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 default" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Revitalização e anti-idade</span>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 default" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Glow e uniformização</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all default" href="#portfolio" style={{}}>
<span>Ver resultados</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="scale-in stagger-3 group">
<div className="relative rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border h-full bg-white border-yellow-100" style={{}}>
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br grid place-items-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white from-yellow-500 to-yellow-600" style={{}}>
<svg className="lucide lucide-activity w-8 h-8" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-4 tracking-tight">Estética Corporal</h3>
<p className="leading-relaxed mb-6 default" style={{}}>
                  Tratamentos para contorno, firmeza e bem-estar com protocolos combinados.
                </p>
<ul className="space-y-2 mb-6 text-sm default" style={{}}>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 default" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Modelagem &amp; drenagem</span>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 default" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Firmeza e tônus</span>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 default" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Relaxamento &amp; spa</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all default" href="#contact" style={{}}>
<span>Começar agora</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="scale-in stagger-4 group">
<div className="relative rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border h-full bg-white border-yellow-100" style={{}}>
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 grid place-items-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white to-yellow-600" style={{}}>
<svg className="lucide lucide-droplets w-8 h-8" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-4 tracking-tight">Skincare &amp; Consultoria</h3>
<p className="leading-relaxed mb-6 default" style={{}}>
                  Rotinas personalizadas e manutenção de pele com ativos de alta performance.
                </p>
<a className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all default" href="#contact" style={{}}>
<span>Explorar cuidados</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="scale-in stagger-5 group">
<div className="relative rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border h-full bg-white border-yellow-100" style={{}}>
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br grid place-items-center mb-6 group-hover:scale-110 transition-transform duration-300 to-yellow-600 text-white from-yellow-500" style={{}}>
<svg className="lucide lucide-scissors w-8 h-8" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-4 tracking-tight">Depilação &amp; Laser</h3>
<p className="leading-relaxed mb-6 default" style={{}}>
                  Conforto e eficácia em protocolos de remoção de pelos e manutenção.
                </p>
<a className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all default" href="#contact" style={{}}>
<span>Iniciar tratamento</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="scale-in stagger-6 group">
<div className="relative rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border h-full bg-white border-yellow-100" style={{}}>
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br grid place-items-center mb-6 group-hover:scale-110 transition-transform duration-300 to-green-600 text-white from-yellow-400" style={{}}>
<svg className="lucide lucide-leaf w-8 h-8" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-4 tracking-tight">Bem-estar &amp; Spa</h3>
<p className="leading-relaxed mb-6 default" style={{}}>
                  Experiências sensoriais que relaxam, renovam e equilibram corpo e mente.
                </p>
<a className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all default" href="#contact" style={{}}>
<span>Descobrir</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden bg-white" id="process">
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6 bg-green-100 default" style={{}}>
<svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span>Como funciona</span>
</div>
<h2 className="fade-in-up stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
              Do diagnóstico ao 
              <span className="font-semibold">resultado</span>
</h2>
<p className="fade-in-up stagger-3 text-xl max-w-3xl mx-auto leading-relaxed text-balance default" style={{}}>
              Um fluxo acolhedor, seguro e transparente para você se sentir bem em cada etapa.
            </p>
</div>

<div className="relative">

<div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b transform -translate-x-1/2 hidden lg:block via-green-200 to-yellow-200 from-yellow-200" style={{}}></div>

<div className="space-y-16 lg:space-y-24">

<div className="relative flex flex-col lg:flex-row items-center gap-8">
<div className="fade-in-left stagger-1 lg:w-1/2 lg:text-right lg:pr-16">
<div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-4 bg-yellow-100 default" style={{}}>
<span>Etapa 1</span>
</div>
<h3 className="text-3xl font-semibold mb-4">Avaliação &amp; Consulta</h3>
<p className="leading-relaxed text-lg mb-6 default" style={{}}>
                    Conversa detalhada para entender objetivos, histórico e preferências. Definimos prioridades e expectativas.
                  </p>
<div className="space-y-2 text-sm default" style={{}}>
<div className="flex items-center gap-2 lg:justify-end">
<svg className="lucide lucide-check w-4 h-4 default" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Avaliação completa (60–90 min)</span>
</div>
<div className="flex items-center gap-2 lg:justify-end">
<svg className="lucide lucide-check w-4 h-4 default" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Registro fotográfico</span>
</div>
<div className="flex items-center gap-2 lg:justify-end">
<svg className="lucide lucide-check w-4 h-4 default" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Plano e cronograma</span>
</div>
</div>
</div>
<div className="scale-in stagger-2 relative z-10 w-20 h-20 rounded-full bg-gradient-to-br grid place-items-center shadow-xl to-green-600 text-white from-yellow-500" style={{}}>
<svg className="lucide lucide-user-check w-10 h-10" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full grid place-items-center text-sm font-bold bg-yellow-100 default" style={{}}>1</div>
</div>
<div className="fade-in-right stagger-3 lg:w-1/2 lg:pl-16">
<img alt="Consulta estética" className="w-full h-64 object-cover rounded-2xl shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c3cdb9e-6cac-4dce-ac9a-d914b04c3458_1600w.jpg"/>
</div>
</div>

<div className="relative flex flex-col lg:flex-row-reverse items-center gap-8">
<div className="fade-in-right stagger-1 lg:w-1/2 lg:text-left lg:pl-16">
<div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-4 bg-green-100 default" style={{}}>
<span>Etapa 2</span>
</div>
<h3 className="text-3xl font-semibold mb-4">Protocolo &amp; Preparação</h3>
<p className="leading-relaxed text-lg mb-6 default" style={{}}>
                    Definição do protocolo, orientações prévias e escolha de ativos/tecnologias para maior eficácia e conforto.
                  </p>
<div className="space-y-2 text-sm default" style={{}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 default" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Protocolo personalizado</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 default" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Orientações pré e pós</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 default" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Seleção de ativos</span>
</div>
</div>
</div>
<div className="scale-in stagger-2 relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-green-500 grid place-items-center shadow-xl text-white to-yellow-600" style={{}}>
<svg className="lucide lucide-sparkles w-10 h-10" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full grid place-items-center text-sm font-bold bg-green-100 default" style={{}}>2</div>
</div>
<div className="fade-in-left stagger-3 lg:w-1/2 lg:pr-16">
<img alt="Preparação de protocolo" className="w-full h-64 object-cover rounded-2xl shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79bb5936-f88f-4e8c-95b8-80fa335fc9bc_1600w.jpg"/>
</div>
</div>

<div className="relative flex flex-col lg:flex-row items-center gap-8">
<div className="fade-in-left stagger-1 lg:w-1/2 lg:text-right lg:pr-16">
<div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-4 bg-yellow-100 default" style={{}}>
<span>Etapa 3</span>
</div>
<h3 className="text-3xl font-semibold mb-4">Aplicação &amp; Acompanhamento</h3>
<p className="leading-relaxed text-lg mb-6 default" style={{}}>
                    Procedimentos com técnica e conforto, revisões de progresso e manutenção para resultados duradouros.
                  </p>
<div className="space-y-2 text-sm default" style={{}}>
<div className="flex items-center gap-2 lg:justify-end">
<svg className="lucide lucide-check w-4 h-4 default" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Execução segura</span>
</div>
<div className="flex items-center gap-2 lg:justify-end">
<svg className="lucide lucide-check w-4 h-4 default" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Revisões periódicas</span>
</div>
<div className="flex items-center gap-2 lg:justify-end">
<svg className="lucide lucide-check w-4 h-4 default" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Manutenção/booster</span>
</div>
</div>
</div>
<div className="scale-in stagger-2 relative z-10 w-20 h-20 rounded-full bg-gradient-to-br grid place-items-center shadow-xl to-yellow-600 text-white from-yellow-500" style={{}}>
<svg className="lucide lucide-check-circle w-10 h-10" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full grid place-items-center text-sm font-bold bg-yellow-100 default" style={{}}>3</div>
</div>
<div className="fade-in-right stagger-3 lg:w-1/2 lg:pl-16">
<img alt="Aplicação de tratamento" className="w-full h-64 object-cover rounded-2xl shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4572439-a6ca-445c-9a06-4bf65269dd10_800w.jpg"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden text-white default" id="portfolio" style={{}}>

<div className="absolute inset-0">
<div className="parallax-element absolute inset-0 opacity-5" id="portfolioParallax1" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
</div>
<div className="parallax-element absolute top-0 right-0 w-1/2 h-full opacity-10" id="portfolioParallax2" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
<div className="w-full h-full bg-gradient-to-bl to-transparent from-yellow-900/20" style={{}}></div>
</div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 glass-morphism border rounded-full px-4 py-2 text-sm font-medium mb-6 bg-white/10 border-white/20 text-white" style={{}}>
<svg className="lucide lucide-grid-3x3 w-4 h-4" data-lucide="grid-3x3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
<span>Resultados</span>
</div>
<h2 className="fade-in-up stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
              Antes e Depois 
              <span className="font-semibold">reais</span>
</h2>
<p className="fade-in-up stagger-3 text-xl max-w-3xl mx-auto leading-relaxed text-balance default" style={{}}>
              Evidências de resultados com foco em naturalidade, conforto e segurança.
            </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">

<div className="scale-in stagger-1 lg:col-span-8 group cursor-pointer">
<div className="relative rounded-3xl overflow-hidden glass-morphism border transition-all duration-500 transform hover:-translate-y-2 bg-white/5 border-white/10 hover:border-white/20" style={{}}>
<img alt="Destaque" className="w-full h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68d1afcf-0796-4422-8718-9e98b2a6dfb0_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black/80"></div>
<div className="absolute top-6 left-6">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-white" style={{background: 'linear-gradient(135deg, rgb(251, 191, 36), rgb(245, 158, 11))'}}>
<svg className="lucide lucide-award w-3 h-3" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span>Resultado Destaque</span>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<h3 className="text-3xl font-semibold mb-3 tracking-tight">Transformação Natural</h3>
<p className="text-lg leading-relaxed mb-6 max-w-2xl text-white/80">
                    Procedimentos combinados para revitalização com efeito glow e aspecto saudável.
                  </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4 text-sm text-white/60">
<div className="flex items-center gap-1">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span>Conforto &amp; cuidado</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Glow imediato</span>
</div>
</div>
<button className="inline-flex items-center gap-2 glass-morphism border px-6 py-3 rounded-xl font-semibold transition-all duration-300 bg-white/20 border-white/30 text-white hover:bg-white/30" style={{}}>
<span>Ver detalhes</span>
<svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-8">
<div className="scale-in stagger-2 group cursor-pointer">
<div className="relative rounded-3xl overflow-hidden glass-morphism border transition-all duration-500 bg-white/5 border-white/10 hover:border-white/20" style={{}}>
<img alt="Glow &amp; hidratação" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/704e1fb3-a82b-42a1-ad5f-f30d6c0fb05c_800w.jpg"/>
<div className="p-6">
<h4 className="text-xl font-semibold mb-2">Glow &amp; Hidratação</h4>
<p className="text-sm leading-relaxed text-white/70" style={{}}>Ritual de limpeza e hidratação profunda.</p>
</div>
</div>
</div>
<div className="scale-in stagger-3 group cursor-pointer">
<div className="relative rounded-3xl overflow-hidden glass-morphism border transition-all duration-500 bg-white/5 border-white/10 hover:border-white/20" style={{}}>
<img alt="Revitalização" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fad8f488-a92f-419e-a506-95dab967d5f0_800w.jpg"/>
<div className="p-6">
<h4 className="text-xl font-semibold mb-2">Revitalização</h4>
<p className="text-sm leading-relaxed text-white/70" style={{}}>Textura, viço e maciez visíveis.</p>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
<div className="scale-in stagger-4 text-center">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br grid place-items-center mx-auto mb-4 to-green-600 text-white from-yellow-500" style={{}}>
<svg className="lucide lucide-smile w-8 h-8" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<h4 className="text-xl font-semibold mb-2">Faciais</h4>
<p className="text-white/70" style={{}}>Glow, limpeza, anti-idade</p>
<div className="counter text-2xl font-light mt-2" data-target="350">2</div>
<div className="text-sm text-white/60">Casos</div>
</div>
<div className="scale-in stagger-5 text-center">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br grid place-items-center mx-auto mb-4 to-yellow-600 text-white from-yellow-500" style={{}}>
<svg className="lucide lucide-activity w-8 h-8" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h4 className="text-xl font-semibold mb-2">Corporais</h4>
<p className="text-white/70" style={{}}>Modelagem e bem-estar</p>
<div className="counter text-2xl font-light mt-2" data-target="120">0</div>
<div className="text-sm text-white/60">Casos</div>
</div>
<div className="scale-in stagger-6 text-center">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 grid place-items-center mx-auto mb-4 text-white to-yellow-600" style={{}}>
<svg className="lucide lucide-leaf w-8 h-8" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<h4 className="text-xl font-semibold mb-2">Spa</h4>
<p className="text-white/70" style={{}}>Relaxamento &amp; autocuidado</p>
<div className="counter text-2xl font-light mt-2" data-target="75">0</div>
<div className="text-sm text-white/60">Experiências</div>
</div>
</div>

<div className="text-center">
<a className="fade-in-up stagger-4 inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl transform hover:-translate-y-1 bg-white hover:bg-yellow-50 default" href="#contact" style={{}}>
<span>Ver todos os resultados</span>
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden bg-white" id="testimonials">

<div className="parallax-element absolute inset-0 opacity-20" id="testimonialsParallax" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
<div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br blur-3xl to-green-100 from-yellow-100" style={{}}></div>
<div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br blur-3xl from-yellow-100 to-yellow-100" style={{}}></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6 bg-yellow-100 default" style={{}}>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>Depoimentos</span>
</div>
<h2 className="fade-in-up stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
              O que nossas clientes 
              <span className="font-semibold">dizem</span>
</h2>
<p className="fade-in-up stagger-3 text-xl max-w-3xl mx-auto leading-relaxed text-balance default" style={{}}>
              Histórias reais de quem escolheu cuidar de si com a gente.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="scale-in stagger-1 rounded-3xl p-8 shadow-lg border hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-white border-yellow-100" style={{}}>
<div className="flex items-center gap-1 mb-6">
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed mb-8 text-lg default" style={{}}>
                "Resultados lindos e super naturais. Atendimento acolhedor do início ao fim. Amei a experiência!"
              </p>
<div className="flex items-center gap-4">
<img alt="Sarah Johnson" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7f6feef-fd3e-4901-bce6-7271aa74dc87_320w.jpg"/>
<div>
<div className="font-semibold">Sarah Johnson</div>
<div className="text-sm default" style={{}}>Facial Glow</div>
</div>
</div>
</div>

<div className="scale-in stagger-2 bg-gradient-to-br rounded-3xl p-8 shadow-lg border hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 to-green-50 from-yellow-50 border-yellow-100" style={{}}>
<div className="flex items-center gap-1 mb-6">
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed mb-8 text-lg default" style={{}}>
                "A pele ficou radiante logo na primeira sessão. Profissionais atenciosas e super competentes."
              </p>
<div className="flex items-center gap-4">
<img alt="Michael Chen" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f52b9e1e-c3e8-4844-b3c5-28aacdc6b434_320w.jpg"/>
<div>
<div className="font-semibold">Michael Chen</div>
<div className="text-sm default" style={{}}>Revitalização</div>
</div>
</div>
</div>

<div className="scale-in stagger-3 rounded-3xl p-8 shadow-lg border hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-white border-yellow-100" style={{}}>
<div className="flex items-center gap-1 mb-6">
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed mb-8 text-lg default" style={{}}>
                "Ambiente maravilhoso e resultado acima do esperado. Experiência impecável!"
              </p>
<div className="flex items-center gap-4">
<img alt="Emma Rodriguez" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b6e4af7-ac86-4163-b303-578671458c76_320w.jpg"/>
<div className="">
<div className="font-semibold">Emma Rodriguez</div>
<div className="text-sm default" style={{}}>Corporal &amp; Spa</div>
</div>
</div>
</div>

<div className="scale-in stagger-4 rounded-3xl p-8 shadow-lg border hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-white border-yellow-100" style={{}}>
<div className="flex items-center gap-1 mb-6">
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed mb-8 text-lg default" style={{}}>
                "Profissionais incríveis! Minha pele nunca esteve tão bonita e saudável."
              </p>
<div className="flex items-center gap-4">
<img alt="David Park" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/792a3cac-21ba-4a11-85fe-6cda252b255d_320w.jpg"/>
<div>
<div className="font-semibold">David Park</div>
<div className="text-sm default" style={{}}>Skincare</div>
</div>
</div>
</div>
<div className="scale-in stagger-5 bg-gradient-to-br rounded-3xl p-8 shadow-lg border hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 to-yellow-50 border-yellow-100 from-yellow-50" style={{}}>
<div className="flex items-center gap-1 mb-6">
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed mb-8 text-lg default" style={{}}>
                "Me senti cuidada em cada detalhe. Recomendo de olhos fechados!"
              </p>
<div className="flex items-center gap-4">
<img alt="Lisa Thompson" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05b8d217-cbbf-409b-a1ff-f4515ea6aab3_320w.jpg"/>
<div>
<div className="font-semibold">Lisa Thompson</div>
<div className="text-sm default" style={{}}>Facial Premium</div>
</div>
</div>
</div>
<div className="scale-in stagger-6 rounded-3xl p-8 shadow-lg border hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-white border-yellow-100" style={{}}>
<div className="flex items-center gap-1 mb-6">
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed mb-8 text-lg default" style={{}}>
                "Ambiente, atendimento e resultado impecáveis. Experiência 10/10!"
              </p>
<div className="flex items-center gap-4">
<img alt="James Wilson" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04b430ce-45fe-4c6d-b375-4a4d349051a7_320w.jpg"/>
<div className="">
<div className="font-semibold">James Wilson</div>
<div className="text-sm default" style={{}}>Spa &amp; Relax</div>
</div>
</div>
</div>
</div>

<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="scale-in stagger-4 text-center">
<div className="counter text-4xl font-light mb-2" data-target="98">0</div>
<div className="default" style={{}}>% Satisfação</div>
</div>
<div className="scale-in stagger-5 text-center">
<div className="counter text-4xl font-light mb-2" data-target="500">4</div>
<div className="default" style={{}}>+ Clientes Felizes</div>
</div>
<div className="scale-in stagger-6 text-center">
<div className="text-4xl font-light mb-2">4.9</div>
<div className="default" style={{}}>Avaliação Média</div>
</div>
<div className="scale-in stagger-6 text-center">
<div className="counter text-4xl font-light mb-2" data-target="95">0</div>
<div className="default" style={{}}>% Indicação</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden bg-yellow-50" id="contact" style={{}}>

<div className="parallax-element absolute inset-0 opacity-30" id="contactParallax" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
<div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br blur-3xl to-green-100 from-yellow-100" style={{}}></div>
<div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br blur-3xl from-yellow-100 to-yellow-100" style={{}}></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-center">

<div>
<div className="fade-in-left stagger-1 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6 bg-yellow-100 default" style={{}}>
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span>Fale com a gente</span>
</div>
<h2 className="fade-in-left stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
                Vamos cuidar da sua
                <span className="font-semibold default" style={{}}>melhor versão</span>
</h2>
<p className="fade-in-left stagger-3 text-xl leading-relaxed mb-8 text-balance default" style={{}}>
                Agende sua avaliação e receba um plano personalizado para atingir seus objetivos com segurança.
              </p>

<div className="space-y-6 mb-8">
<div className="fade-in-left stagger-4 flex items-center gap-4 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all bg-white">
<div className="w-14 h-14 rounded-xl grid place-items-center flex-shrink-0 bg-yellow-100 default" style={{}}>
<svg className="lucide lucide-phone w-7 h-7" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<h4 className="font-semibold text-lg">Telefone</h4>
<div className="font-medium default" style={{}}>+55 (11) 99999-0000</div>
<div className="text-sm default" style={{}}>Seg a Sex, 9h - 18h</div>
</div>
</div>
<div className="fade-in-left stagger-5 flex items-center gap-4 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all bg-white">
<div className="w-14 h-14 rounded-xl grid place-items-center flex-shrink-0 bg-green-100 default" style={{}}>
<svg className="lucide lucide-mail w-7 h-7" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<h4 className="font-semibold text-lg">E-mail</h4>
<div className="font-medium default" style={{}}>contato@palazzoestetica.com</div>
<div className="text-sm default" style={{}}>Respondemos em até 24h</div>
</div>
</div>
<div className="fade-in-left stagger-6 flex items-center gap-4 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all bg-white">
<div className="w-14 h-14 rounded-xl grid place-items-center flex-shrink-0 bg-yellow-100 default" style={{}}>
<svg className="lucide lucide-map-pin w-7 h-7" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<h4 className="font-semibold text-lg">Visite-nos</h4>
<div className="font-medium default" style={{}}>Clínica Palazzo</div>
<div className="text-sm default" style={{}}>Av. Exemplo, 123 — São Paulo, SP</div>
</div>
</div>
</div>

<div className="fade-in-left stagger-6 grid grid-cols-3 gap-6 p-6 rounded-2xl shadow-sm bg-white">
<div className="text-center">
<div className="counter text-2xl font-semibold default" data-target="24" style={{}}>0</div>
<div className="text-sm default" style={{}}>h para responder</div>
</div>
<div className="text-center border-l border-r border-yellow-100" style={{}}>
<div className="text-2xl font-semibold default" style={{}}>Primeira</div>
<div className="text-sm default" style={{}}>consulta</div>
</div>
<div className="text-center">
<div className="counter text-2xl font-semibold default" data-target="15" style={{}}>0</div>
<div className="text-sm default" style={{}}>anos de cuidado</div>
</div>
</div>
</div>

<div className="scale-in stagger-2 rounded-3xl p-8 shadow-xl border bg-white border-yellow-100" style={{}}>
<div className="mb-8">
<h3 className="text-2xl font-semibold mb-2">Agende sua avaliação</h3>
<p className="default" style={{}}>Conte um pouco sobre você. Vamos personalizar seu plano.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold mb-2 default" style={{}}>Nome *</label>
<input className="w-full px-4 py-3 rounded-xl border focus:ring-4 outline-none transition-all focus:border-yellow-500 focus:ring-yellow-500/15 border-yellow-100" placeholder="Maria" style={{}} type="text"/>
</div>
<div className="">
<label className="block text-sm font-semibold mb-2 default" style={{}}>Sobrenome *</label>
<input className="w-full px-4 py-3 rounded-xl border focus:ring-4 outline-none transition-all focus:border-yellow-500 focus:ring-yellow-500/15 border-yellow-100" placeholder="Silva" style={{}} type="text"/>
</div>
</div>
<div className="">
<label className="block text-sm font-semibold mb-2 default" style={{}}>E-mail *</label>
<input className="w-full px-4 py-3 rounded-xl border focus:ring-4 outline-none transition-all focus:border-yellow-500 focus:ring-yellow-500/15 border-yellow-100" placeholder="maria@email.com" style={{}} type="email"/>
</div>
<div className="">
<label className="block text-sm font-semibold mb-2 default" style={{}}>Telefone</label>
<input className="w-full px-4 py-3 rounded-xl border focus:ring-4 outline-none transition-all focus:border-yellow-500 focus:ring-yellow-500/15 border-yellow-100" placeholder="+55 (11) 99999-0000" style={{}} type="tel"/>
</div>
<div>
<label className="block text-sm font-semibold mb-2 default" style={{}}>Interesse *</label>
<select className="w-full px-4 py-3 rounded-xl border focus:ring-4 outline-none transition-all focus:border-yellow-500 focus:ring-yellow-500/15 border-yellow-100" style={{}}>
<option>Selecione uma opção</option>
<option>Facial — Limpeza/Hidratação</option>
<option>Facial — Revitalização/Anti-idade</option>
<option>Corporal — Modelagem/Drenagem</option>
<option>Bem-estar &amp; Spa</option>
<option>Consulta &amp; Skincare</option>
</select>
</div>
<div>
<label className="block text-sm font-semibold mb-2 default" style={{}}>Objetivo</label>
<select className="w-full px-4 py-3 rounded-xl border focus:ring-4 outline-none transition-all focus:border-yellow-500 focus:ring-yellow-500/15 border-yellow-100" style={{}}>
<option>Selecione seu objetivo</option>
<option>Manchas/Acne</option>
<option>Textura/Viço</option>
<option>Firmeza/Contorno</option>
<option>Relaxamento</option>
</select>
</div>
<div>
<label className="block text-sm font-semibold mb-2 default" style={{}}>Detalhes *</label>
<textarea className="w-full px-4 py-3 rounded-xl border focus:ring-4 outline-none transition-all resize-none focus:border-yellow-500 focus:ring-yellow-500/15 border-yellow-100" placeholder="Conte seu histórico, preferências, disponibilidade e objetivos..." rows="4" style={{}}></textarea>
</div>
<button className="w-full bg-gradient-to-r py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 to-green-600 text-white hover:to-green-700 from-yellow-600 hover:from-yellow-700" style={{}} type="submit">
                  Agendar Avaliação
                </button>
<p className="text-xs text-center default" style={{}}>
                  Ao enviar, você concorda com nossa política de privacidade. Seus dados estarão seguros.
                </p>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="text-white default" style={{}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">

<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-xl grid place-items-center bg-white default" style={{}}>
<span className="font-bold tracking-tighter">P</span>
</div>
<div>
<span className="text-2xl font-semibold">Palazzo Estética</span>
<p className="text-sm text-yellow-400" style={{}}>Beleza e Bem-estar</p>
</div>
</div>
<p className="leading-relaxed mb-6 text-yellow-400" style={{}}>
              Cuidado estético premium com protocolos personalizados para resultados naturais e duradouros.
            </p>

<div className="mb-6">
<h5 className="font-semibold text-sm mb-3">Reconhecimentos</h5>
<div className="space-y-2 text-sm text-yellow-400" style={{}}>
<div>Excelência em Atendimento</div>
<div>Resultados Naturais Destaque</div>
<div>Top Clínica — SP</div>
</div>
</div>
<div className="flex items-center gap-3">
<a className="w-10 h-10 rounded-lg grid place-items-center transition-colors hover:default default" href="#" style={{}}>
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-lg grid place-items-center transition-colors hover:default default" href="#" style={{}}>
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="w-10 h-10 rounded-lg grid place-items-center transition-colors hover:default default" href="#" style={{}}>
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-10 h-10 rounded-lg grid place-items-center transition-colors hover:default default" href="#" style={{}}>
<svg className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
</div>

<div>
<h4 className="font-semibold mb-6 text-lg">Tratamentos</h4>
<div className="space-y-3">
<a className="block transition-colors hover:text-white text-yellow-400" href="#" style={{}}>Faciais</a>
<a className="block transition-colors hover:text-white text-yellow-400" href="#" style={{}}>Corporais</a>
<a className="block transition-colors hover:text-white text-yellow-400" href="#" style={{}}>Skincare</a>
<a className="block transition-colors hover:text-white text-yellow-400" href="#" style={{}}>Depilação &amp; Laser</a>
<a className="block transition-colors hover:text-white text-yellow-400" href="#" style={{}}>Bem-estar &amp; Spa</a>
</div>
</div>

<div>
<h4 className="font-semibold mb-6 text-lg">Institucional</h4>
<div className="space-y-3">
<a className="block transition-colors hover:text-white text-yellow-400" href="#about" style={{}}>Sobre</a>
<a className="block transition-colors hover:text-white text-yellow-400" href="#process" style={{}}>Como funciona</a>
<a className="block transition-colors hover:text-white text-yellow-400" href="#portfolio" style={{}}>Resultados</a>
<a className="block transition-colors hover:text-white text-yellow-400" href="#testimonials" style={{}}>Depoimentos</a>
<a className="block transition-colors hover:text-white text-yellow-400" href="#" style={{}}>Carreiras</a>
<a className="block transition-colors hover:text-white text-yellow-400" href="#" style={{}}>Imprensa</a>
<a className="block transition-colors hover:text-white text-yellow-400" href="#" style={{}}>Blog</a>
</div>
</div>

<div>
<h4 className="font-semibold mb-6 text-lg">Contato</h4>
<div className="space-y-4 text-yellow-400" style={{}}>
<div>
<h5 className="font-semibold mb-2 text-white" style={{}}>Clínica — São Paulo</h5>
<p>Av. Exemplo, 123</p>
<p>São Paulo, SP</p>
</div>
<div>
<h5 className="font-semibold mb-2 text-white" style={{}}>Atendimento</h5>
<p className="font-medium text-white" style={{}}>+55 (11) 99999-0000</p>
<p>contato@palazzoestetica.com</p>
</div>
<div className="pt-2">
<p className="text-sm">Segunda a Sexta: 9h — 18h</p>
<p className="text-sm">Sábado: 10h — 14h</p>
</div>
</div>
</div>
</div>
<div className="border-t py-8 flex flex-col sm:flex-row items-center justify-between gap-4 default" style={{}}>
<p className="text-sm text-yellow-400" style={{}}>© 2025 Palazzo Estética. Todos os direitos reservados.</p>
<div className="flex items-center gap-6 text-sm text-yellow-400" style={{}}>
<a className="transition-colors hover:text-white" href="#" style={{}}>Privacidade</a>
<a className="transition-colors hover:text-white" href="#" style={{}}>Termos</a>
<a className="transition-colors hover:text-white" href="#" style={{}}>Cookies</a>
<a className="transition-colors hover:text-white" href="#" style={{}}>Sitemap</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
