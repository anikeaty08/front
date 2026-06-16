import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
<span className="relative z-10">Início</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="about" href="#about">
<span className="relative z-10">Sobre</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="expertise" href="#expertise">
<span className="relative z-10">Serviços</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="portfolio" href="#portfolio">
<span className="relative z-10">Portfólio</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="testimonials" href="#testimonials">
<span className="relative z-10">Avaliações</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="contact" href="#contact">
<span className="relative z-10">Contato</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
</div>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 text-white font-medium text-sm hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md" href="#contact">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>Agendar Consulta</span>
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
              Início
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#about">
<i className="w-5 h-5 text-gray-500" data-lucide="users"></i>
              Sobre
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#expertise">
<i className="w-5 h-5 text-gray-500" data-lucide="compass"></i>
              Serviços
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#portfolio">
<i className="w-5 h-5 text-gray-500" data-lucide="grid-3x3"></i>
              Portfólio
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#testimonials">
<i className="w-5 h-5 text-gray-500" data-lucide="star"></i>
              Avaliações
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#contact">
<i className="w-5 h-5 text-gray-500" data-lucide="mail"></i>
              Contato
            </a>
</nav>
<div className="mt-8 pt-6 border-t border-gray-200">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-900 text-white font-medium" href="#contact">
<i className="w-5 h-5" data-lucide="calendar"></i>
              Agendar Consulta
            </a>
</div>
</div>
</div>
</div>
<main className="relative">

<section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">

<div className="absolute inset-0">

<div className="parallax-element absolute inset-0 scale-110" id="heroBase">
<img alt="Design de interiores de luxo" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
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
<span>Estúdio de Design de Interiores Premiado</span>
</div>

<h1 className="fade-in-up stagger-2 text-6xl sm:text-7xl lg:text-8xl font-light tracking-tighter text-white leading-[0.9] mb-8">
<span className="block">Redefinindo</span>
<span className="block font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Excelência Interior</span>
</h1>

<p className="fade-in-up stagger-3 text-xl sm:text-2xl text-white/90 font-light leading-relaxed mb-12 max-w-3xl mx-auto text-balance">
              Criamos espaços extraordinários que mesclam perfeitamente luxo, funcionalidade e princípios de design atemporais.
            </p>

<div className="fade-in-up stagger-4 flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1" href="#portfolio">
<span>Ver Nosso Trabalho</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<button className="inline-flex items-center gap-4 text-white font-medium text-lg group">
<div className="w-14 h-14 rounded-full glass-morphism bg-white/20 border border-white/30 grid place-items-center group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 ml-1" data-lucide="play"></i>
</div>
<span className="group-hover:text-white/80 transition-colors">Assistir História</span>
</button>
</div>
</div>


<div className="fade-in-up stagger-5 mt-10 sm:mt-12">
<div className="mx-auto w-full max-w-3xl rounded-2xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur">
<dl className="grid grid-cols-3 divide-x divide-white/15 text-center">
<div className="px-3">
<dd className="counter counter-animate text-3xl font-light leading-tight text-white" data-target="500">0</dd>
<dt className="mt-1 text-xs sm:text-sm text-white/70">Projetos Concluídos</dt>
</div>
<div className="px-3">
<dd className="counter counter-animate text-3xl font-light leading-tight text-white" data-target="15">0</dd>
<dt className="mt-1 text-xs sm:text-sm text-white/70">Anos de Experiência</dt>
</div>
<div className="px-3">
<dd className="counter counter-animate text-3xl font-light leading-tight text-white" data-target="98">0</dd>
<dt className="mt-1 text-xs sm:text-sm text-white/70">Satisfação do Cliente</dt>
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
<span>Sobre a Forma</span>
</div>
<h2 className="fade-in-left stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
                Transformando Sonhos em 
                <span className="font-semibold text-indigo-600">Realidade</span>
</h2>
<p className="fade-in-left stagger-3 text-xl text-gray-600 leading-relaxed mb-8 text-balance">
                Há mais de 15 anos, transformamos espaços e vidas através de design de interiores excepcional. Nossa paixão está em criar ambientes que contam sua história única, incorporando os mais altos padrões de luxo e funcionalidade.
              </p>

<div className="space-y-4 mb-8">
<div className="fade-in-left stagger-4 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 grid place-items-center flex-shrink-0">
<i className="w-6 h-6" data-lucide="award"></i>
</div>
<div>
<h4 className="font-semibold text-lg">Excelência Premiada</h4>
<p className="text-gray-600">Múltiplos prêmios de design e reconhecimento do setor</p>
</div>
</div>
<div className="fade-in-left stagger-5 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 grid place-items-center flex-shrink-0">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<div>
<h4 className="font-semibold text-lg">Equipe Especializada</h4>
<p className="text-gray-600">Designers certificados e artesãos qualificados</p>
</div>
</div>
<div className="fade-in-left stagger-6 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 grid place-items-center flex-shrink-0">
<i className="w-6 h-6" data-lucide="check-circle"></i>
</div>
<div>
<h4 className="font-semibold text-lg">Soluções Completas</h4>
<p className="text-gray-600">Do conceito à conclusão, cuidamos de tudo</p>
</div>
</div>
</div>
<a className="fade-in-left stagger-6 inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" href="#portfolio">
<span>Explorar Nosso Trabalho</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>

<div className="relative">
<div className="fade-in-right stagger-2 relative">
<img alt="Equipe de design de interiores" className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="scale-in stagger-4 absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white grid place-items-center">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<div>
<div className="counter text-2xl font-semibold" data-target="500">0</div>
<div className="text-gray-600 text-sm">Clientes Felizes</div>
</div>
</div>
</div>

<div className="scale-in stagger-3 absolute -top-4 -right-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl px-6 py-3 shadow-lg">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="star"></i>
<span className="font-semibold">Avaliação 5.0</span>
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
<span>Nossos Serviços</span>
</div>
<h2 className="fade-in-up stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
              Excelência em 
              <span className="font-semibold">Cada Detalhe</span>
</h2>
<p className="fade-in-up stagger-3 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance">
              Da visão conceitual à execução impecável, entregamos soluções de interiores sob medida que refletem seu estilo de vida e aspirações únicos.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="scale-in stagger-1 group">
<div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="lightbulb"></i>
</div>
<h3 className="text-xl font-semibold mb-4 tracking-tight">Desenvolvimento de Conceito</h3>
<p className="text-gray-600 leading-relaxed mb-6">
                  Planejamento estratégico de design que transforma sua visão em uma narrativa de design abrangente.
                </p>
<ul className="space-y-2 mb-6 text-sm text-gray-600">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
<span>Consulta e análise inicial</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
<span>Painéis de inspiração e conceitos</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
<span>Visualização 3D</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all" href="#contact">
<span>Saiba Mais</span>
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
<span>Mais Popular</span>
</div>
<h3 className="text-xl font-semibold mb-4 tracking-tight">Transformação Completa</h3>
<p className="text-gray-300 leading-relaxed mb-6">
                  Serviço completo de design de interiores, do conceito inicial à instalação e decoração final.
                </p>
<ul className="space-y-2 mb-6 text-sm text-gray-300">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-purple-400" data-lucide="check"></i>
<span>Planejamento e design de espaços</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-purple-400" data-lucide="check"></i>
<span>Móveis e acabamentos personalizados</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-purple-400" data-lucide="check"></i>
<span>Gestão de projeto</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-purple-400" data-lucide="check"></i>
<span>Instalação e decoração</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-3 transition-all" href="#portfolio">
<span>Ver Projetos</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="scale-in stagger-3 group">
<div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white grid place-items-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="home"></i>
</div>
<h3 className="text-xl font-semibold mb-4 tracking-tight">Decoração de Luxo</h3>
<p className="text-gray-600 leading-relaxed mb-6">
                  Serviços profissionais de decoração para mostrar imóveis em seu melhor potencial.
                </p>
<ul className="space-y-2 mb-6 text-sm text-gray-600">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
<span>Avaliação de propriedade</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
<span>Aluguel de móveis e decoração</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
<span>Fotografia profissional</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all" href="#contact">
<span>Começar</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="scale-in stagger-4 group">
<div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-white grid place-items-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="brush"></i>
</div>
<h3 className="text-xl font-semibold mb-4 tracking-tight">Consultoria de Cores</h3>
<p className="text-gray-600 leading-relaxed mb-6">
                  Seleção especializada de cores para criar o ambiente perfeito e conexão emocional com seu espaço.
                </p>
<a className="inline-flex items-center gap-2 text-orange-600 font-semibold group-hover:gap-3 transition-all" href="#contact">
<span>Explorar Cores</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="scale-in stagger-5 group">
<div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white grid place-items-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="wrench"></i>
</div>
<h3 className="text-xl font-semibold mb-4 tracking-tight">Suporte a Reformas</h3>
<p className="text-gray-600 leading-relaxed mb-6">
                  Orientação abrangente para reformas, do planejamento à execução com nossos empreiteiros confiáveis.
                </p>
<a className="inline-flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-3 transition-all" href="#contact">
<span>Iniciar Reforma</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="scale-in stagger-6 group">
<div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white grid place-items-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="heart"></i>
</div>
<h3 className="text-xl font-semibold mb-4 tracking-tight">Design de Estilo de Vida</h3>
<p className="text-gray-600 leading-relaxed mb-6">
                  Soluções de design personalizadas que refletem sua personalidade única e preferências de estilo de vida.
                </p>
<a className="inline-flex items-center gap-2 text-pink-600 font-semibold group-hover:gap-3 transition-all" href="#contact">
<span>Descobrir Estilo</span>
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
<span>Nosso Processo</span>
</div>
<h2 className="fade-in-up stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
              Da Visão à 
              <span className="font-semibold">Realidade</span>
</h2>
<p className="fade-in-up stagger-3 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance">
              Nossa metodologia comprovada garante entrega perfeita do projeto, mantendo os mais altos padrões de excelência em design.
            </p>
</div>

<div className="relative">

<div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 transform -translate-x-1/2 hidden lg:block"></div>

<div className="space-y-16 lg:space-y-24">

<div className="relative flex flex-col lg:flex-row items-center gap-8">
<div className="fade-in-left stagger-1 lg:w-1/2 lg:text-right lg:pr-16">
<div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
<span>Fase 1</span>
</div>
<h3 className="text-3xl font-semibold mb-4">Descoberta &amp; Consultoria</h3>
<p className="text-gray-600 leading-relaxed text-lg mb-6">
                    Começamos com uma consulta aprofundada para entender sua visão, estilo de vida e preferências de design. Esta fase crucial inclui avaliação do espaço, planejamento de orçamento e estabelecimento de cronograma.
                  </p>
<div className="space-y-2 text-sm text-gray-600">
<div className="flex items-center gap-2 lg:justify-end">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
<span>Consulta inicial (2-3 horas)</span>
</div>
<div className="flex items-center gap-2 lg:justify-end">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
<span>Medição e análise do espaço</span>
</div>
<div className="flex items-center gap-2 lg:justify-end">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
<span>Planejamento de orçamento e cronograma</span>
</div>
</div>
</div>
<div className="scale-in stagger-2 relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center shadow-xl">
<i className="w-10 h-10" data-lucide="lightbulb"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-100 text-blue-600 grid place-items-center text-sm font-bold">1</div>
</div>
<div className="fade-in-right stagger-3 lg:w-1/2 lg:pl-16">
<img alt="Processo de consultoria" className="w-full h-64 object-cover rounded-2xl shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>

<div className="relative flex flex-col lg:flex-row-reverse items-center gap-8">
<div className="fade-in-right stagger-1 lg:w-1/2 lg:text-left lg:pl-16">
<div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
<span>Fase 2</span>
</div>
<h3 className="text-3xl font-semibold mb-4">Design &amp; Desenvolvimento</h3>
<p className="text-gray-600 leading-relaxed text-lg mb-6">
                    Nossa equipe cria conceitos de design detalhados, visualizações 3D e especificações de materiais. Apresentamos múltiplas opções e refinamos o design com base em seu feedback.
                  </p>
<div className="space-y-2 text-sm text-gray-600">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-purple-500" data-lucide="check"></i>
<span>Desenvolvimento de conceito e painéis</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-purple-500" data-lucide="check"></i>
<span>Renderizações 3D e tours virtuais</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-purple-500" data-lucide="check"></i>
<span>Seleção de materiais e móveis</span>
</div>
</div>
</div>
<div className="scale-in stagger-2 relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white grid place-items-center shadow-xl">
<i className="w-10 h-10" data-lucide="palette"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-purple-100 text-purple-600 grid place-items-center text-sm font-bold">2</div>
</div>
<div className="fade-in-left stagger-3 lg:w-1/2 lg:pr-16">
<img alt="Desenvolvimento de design" className="w-full h-64 object-cover rounded-2xl shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79bb5936-f88f-4e8c-95b8-80fa335fc9bc_1600w.jpg"/>
</div>
</div>

<div className="relative flex flex-col lg:flex-row items-center gap-8">
<div className="fade-in-left stagger-1 lg:w-1/2 lg:text-right lg:pr-16">
<div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
<span>Fase 3</span>
</div>
<h3 className="text-3xl font-semibold mb-4">Execução Impecável</h3>
<p className="text-gray-600 leading-relaxed text-lg mb-6">
                    Instalação e decoração profissional para dar vida ao seu espaço dos sonhos com precisão. Coordenamos todos os aspectos do processo de implementação.
                  </p>
<div className="space-y-2 text-sm text-gray-600">
<div className="flex items-center gap-2 lg:justify-end">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
<span>Gestão e coordenação de projeto</span>
</div>
<div className="flex items-center gap-2 lg:justify-end">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
<span>Instalação profissional</span>
</div>
<div className="flex items-center gap-2 lg:justify-end">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
<span>Decoração final e revelação</span>
</div>
</div>
</div>
<div className="scale-in stagger-2 relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white grid place-items-center shadow-xl">
<i className="w-10 h-10" data-lucide="check-circle"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-100 text-green-600 grid place-items-center text-sm font-bold">3</div>
</div>
<div className="fade-in-right stagger-3 lg:w-1/2 lg:pl-16">
<img alt="Execução final" className="w-full h-64 object-cover rounded-2xl shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
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
<span>Projetos em Destaque</span>
</div>
<h2 className="fade-in-up stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
              Espaços 
              <span className="font-semibold">Exclusivos</span>
</h2>
<p className="fade-in-up stagger-3 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-balance">
              Descubra nossos projetos mais celebrados, onde design inovador encontra artesanato excepcional.
            </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">

<div className="scale-in stagger-1 lg:col-span-8 group cursor-pointer">
<div className="relative rounded-3xl overflow-hidden bg-white/5 glass-morphism border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2">
<img alt="Cobertura moderna" className="w-full h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute top-6 left-6">
<div className="inline-flex items-center gap-2 bg-gold-500 text-white rounded-full px-3 py-1.5 text-xs font-semibold" style={{background: 'linear-gradient(135deg, #fbbf24, #f59e0b)'}}>
<i className="w-3 h-3" data-lucide="award"></i>
<span>Vencedor de Prêmio 2024</span>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<h3 className="text-3xl font-semibold mb-3 tracking-tight">Cobertura Manhattan</h3>
<p className="text-white/80 text-lg leading-relaxed mb-6 max-w-2xl">
                    Um santuário urbano sofisticado combinando estética minimalista com conforto luxuoso, com janelas do piso ao teto e coleções de arte curadas.
                  </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4 text-white/60 text-sm">
<div className="flex items-center gap-1">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span>Nova York, NY</span>
</div>
<div className="flex items-center gap-1">
<i className="w-4 h-4" data-lucide="home"></i>
<span>390 m²</span>
</div>
</div>
<button className="inline-flex items-center gap-2 bg-white/20 glass-morphism border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
<span>Ver Projeto</span>
<i className="w-4 h-4" data-lucide="external-link"></i>
</button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-8">
<div className="scale-in stagger-2 group cursor-pointer">
<div className="relative rounded-3xl overflow-hidden bg-white/5 glass-morphism border border-white/10 hover:border-white/20 transition-all duration-500">
<img alt="Cozinha contemporânea" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="p-6">
<h4 className="text-xl font-semibold mb-2">Residência Beverly Hills</h4>
<p className="text-white/70 text-sm leading-relaxed">Design moderno de cozinha com eletrodomésticos premium e armários personalizados.</p>
</div>
</div>
</div>
<div className="scale-in stagger-3 group cursor-pointer">
<div className="relative rounded-3xl overflow-hidden bg-white/5 glass-morphism border border-white/10 hover:border-white/20 transition-all duration-500">
<img alt="Quarto de luxo" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="p-6">
<h4 className="text-xl font-semibold mb-2">Casa na Praia Malibu</h4>
<p className="text-white/70 text-sm leading-relaxed">Suíte master serena com vista para o oceano e móveis personalizados.</p>
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
<h4 className="text-xl font-semibold mb-2">Residencial</h4>
<p className="text-white/70">Casas e apartamentos de luxo</p>
<div className="counter text-2xl font-light mt-2" data-target="350">0</div>
<div className="text-white/60 text-sm">Projetos</div>
</div>
<div className="scale-in stagger-5 text-center">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 text-white grid place-items-center mx-auto mb-4">
<i className="w-8 h-8" data-lucide="building"></i>
</div>
<h4 className="text-xl font-semibold mb-2">Comercial</h4>
<p className="text-white/70">Escritórios e espaços comerciais</p>
<div className="counter text-2xl font-light mt-2" data-target="120">0</div>
<div className="text-white/60 text-sm">Projetos</div>
</div>
<div className="scale-in stagger-6 text-center">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white grid place-items-center mx-auto mb-4">
<i className="w-8 h-8" data-lucide="sparkles"></i>
</div>
<h4 className="text-xl font-semibold mb-2">Hospitalidade</h4>
<p className="text-white/70">Hotéis e restaurantes</p>
<div className="counter text-2xl font-light mt-2" data-target="75">0</div>
<div className="text-white/60 text-sm">Projetos</div>
</div>
</div>

<div className="text-center">
<a className="fade-in-up stagger-4 inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl transform hover:-translate-y-1" href="#contact">
<span>Ver Todos os Projetos</span>
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
<span>Avaliações de Clientes</span>
</div>
<h2 className="fade-in-up stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
              O Que Nossos Clientes 
              <span className="font-semibold">Dizem</span>
</h2>
<p className="fade-in-up stagger-3 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance">
              Descubra por que nossos clientes nos escolhem para seus projetos de design de interiores mais importantes.
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
                "A Forma transformou nosso apartamento em Manhattan em uma obra-prima deslumbrante. Sua atenção aos detalhes e compreensão do nosso estilo de vida foi excepcional."
              </p>
<div className="flex items-center gap-4">
<img alt="Sarah Johnson" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div>
<div className="font-semibold">Sarah Johnson</div>
<div className="text-gray-600 text-sm">Cobertura Manhattan</div>
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
                "A equipe da Forma superou todas as expectativas. Nossa casa em Beverly Hills agora é uma combinação perfeita de luxo e conforto que reflete nossa família perfeitamente."
              </p>
<div className="flex items-center gap-4">
<img alt="Michael Chen" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div>
<div className="font-semibold">Michael Chen</div>
<div className="text-gray-600 text-sm">Residência Beverly Hills</div>
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
                "Profissional, criativo e incrivelmente organizado. A Forma entregou nossa casa de praia dos sonhos no prazo e dentro do orçamento. Altamente recomendado!"
              </p>
<div className="flex items-center gap-4">
<img alt="Emma Rodriguez" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div>
<div className="font-semibold">Emma Rodriguez</div>
<div className="text-gray-600 text-sm">Casa na Praia Malibu</div>
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
                "Criatividade e execução extraordinárias. Nosso escritório agora é uma fonte de inspiração para toda a equipe. A Forma realmente entende design comercial."
              </p>
<div className="flex items-center gap-4">
<img alt="David Park" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<div className="font-semibold">David Park</div>
<div className="text-gray-600 text-sm">Design de Escritório Tech</div>
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
                "Da primeira reunião à revelação final, a Forma foi excepcional. Eles ouviram nossas necessidades e criaram um espaço que é bonito e funcional."
              </p>
<div className="flex items-center gap-4">
<img alt="Lisa Thompson" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div>
<div className="font-semibold">Lisa Thompson</div>
<div className="text-gray-600 text-sm">Casa Familiar</div>
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
                "Atenção incrível aos detalhes e compromisso com a qualidade. A Forma transformou nosso restaurante em um espaço premiado que nossos clientes adoram."
              </p>
<div className="flex items-center gap-4">
<img alt="James Wilson" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04b430ce-45fe-4c6d-b375-4a4d349051a7_320w.jpg"/>
<div>
<div className="font-semibold">James Wilson</div>
<div className="text-gray-600 text-sm">Proprietário de Restaurante</div>
</div>
</div>
</div>
</div>

<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="scale-in stagger-4 text-center">
<div className="counter text-4xl font-light mb-2" data-target="98">0</div>
<div className="text-gray-600">% Taxa de Satisfação</div>
</div>
<div className="scale-in stagger-5 text-center">
<div className="counter text-4xl font-light mb-2" data-target="500">0</div>
<div className="text-gray-600">+ Clientes Felizes</div>
</div>
<div className="scale-in stagger-6 text-center">
<div className="text-4xl font-light mb-2">4.9</div>
<div className="text-gray-600">Avaliação Média</div>
</div>
<div className="scale-in stagger-6 text-center">
<div className="counter text-4xl font-light mb-2" data-target="95">0</div>
<div className="text-gray-600">% Taxa de Indicação</div>
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
<span>Entre em Contato</span>
</div>
<h2 className="fade-in-left stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
                Vamos Criar Seu
                <span className="font-semibold text-green-600">Espaço dos Sonhos</span>
</h2>
<p className="fade-in-left stagger-3 text-xl text-gray-600 leading-relaxed mb-8 text-balance">
                Pronto para transformar seu espaço? Agende uma consulta com nossos especialistas em design e dê o primeiro passo em direção ao seu interior dos sonhos.
              </p>

<div className="space-y-6 mb-8">
<div className="fade-in-left stagger-4 flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
<div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 grid place-items-center flex-shrink-0">
<i className="w-7 h-7" data-lucide="phone"></i>
</div>
<div>
<h4 className="font-semibold text-lg">Ligue para Nós</h4>
<div className="text-blue-600 font-medium">+55 (11) 98765-4321</div>
<div className="text-gray-600 text-sm">Segunda - Sexta, 9h - 18h</div>
</div>
</div>
<div className="fade-in-left stagger-5 flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
<div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 grid place-items-center flex-shrink-0">
<i className="w-7 h-7" data-lucide="mail"></i>
</div>
<div>
<h4 className="font-semibold text-lg">Envie um E-mail</h4>
<div className="text-purple-600 font-medium">contato@forma.design</div>
<div className="text-gray-600 text-sm">Respondemos em até 24 horas</div>
</div>
</div>
<div className="fade-in-left stagger-6 flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
<div className="w-14 h-14 rounded-xl bg-green-100 text-green-600 grid place-items-center flex-shrink-0">
<i className="w-7 h-7" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="font-semibold text-lg">Visite Nosso Showroom</h4>
<div className="text-green-600 font-medium">Showroom São Paulo</div>
<div className="text-gray-600 text-sm">Av. Brigadeiro Faria Lima, 1234 - SP</div>
</div>
</div>
</div>

<div className="fade-in-left stagger-6 grid grid-cols-3 gap-6 p-6 rounded-2xl bg-white shadow-sm">
<div className="text-center">
<div className="counter text-2xl font-semibold text-indigo-600" data-target="24">0</div>
<div className="text-gray-600 text-sm">Resposta em Horas</div>
</div>
<div className="text-center border-l border-r border-gray-200">
<div className="text-2xl font-semibold text-purple-600">Grátis</div>
<div className="text-gray-600 text-sm">Consulta</div>
</div>
<div className="text-center">
<div className="counter text-2xl font-semibold text-green-600" data-target="15">0</div>
<div className="text-gray-600 text-sm">Anos de Experiência</div>
</div>
</div>
</div>

<div className="scale-in stagger-2 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
<div className="mb-8">
<h3 className="text-2xl font-semibold mb-2">Inicie Seu Projeto</h3>
<p className="text-gray-600">Conte-nos sobre sua visão e nós a transformaremos em realidade.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Nome *</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all" placeholder="João" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Sobrenome *</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all" placeholder="Silva" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">E-mail *</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all" placeholder="joao@exemplo.com" type="email"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Telefone</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all" placeholder="+55 (11) 98765-4321" type="tel"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Tipo de Projeto *</label>
<select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all">
<option>Selecione o tipo de projeto</option>
<option>Residencial - Sala de Estar</option>
<option>Residencial - Cozinha</option>
<option>Residencial - Quarto</option>
<option>Residencial - Banheiro</option>
<option>Espaço Comercial</option>
<option>Reforma Completa</option>
<option>Apenas Consultoria</option>
</select>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Faixa de Orçamento</label>
<select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all">
<option>Selecione a faixa de orçamento</option>
<option>Até R$ 50.000</option>
<option>R$ 50.000 - R$ 100.000</option>
<option>R$ 100.000 - R$ 250.000</option>
<option>R$ 250.000 - R$ 500.000</option>
<option>Acima de R$ 500.000</option>
<option>Consulta Primeiro</option>
</select>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Detalhes do Projeto *</label>
<textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all resize-none" placeholder="Conte-nos sobre sua visão, tamanho do espaço, cronograma, preferências de estilo e quaisquer requisitos específicos..." rows="4"></textarea>
</div>
<button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" type="submit">
                  Agendar Consulta Gratuita
                </button>
<p className="text-xs text-gray-500 text-center">
                  Ao enviar este formulário, você concorda com nossa política de privacidade. Nunca compartilharemos suas informações.
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
<p className="text-gray-400 text-sm">Excelência em Design de Interiores</p>
</div>
</div>
<p className="text-gray-400 leading-relaxed mb-6">
              Criando espaços extraordinários através de design inovador e artesanato meticuloso desde 2009.
            </p>

<div className="mb-6">
<h5 className="font-semibold text-sm mb-3">Prêmios &amp; Reconhecimento</h5>
<div className="space-y-2 text-sm text-gray-400">
<div>Melhor Estúdio de Design 2024</div>
<div>Prêmio Lifestyle de Luxo</div>
<div>Top 10 Empresas de Design - SP</div>
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
<h4 className="font-semibold mb-6 text-lg">Serviços</h4>
<div className="space-y-3">
<a className="block text-gray-400 hover:text-white transition-colors" href="#">Design de Interiores</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#">Planejamento de Espaços</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#">Móveis Personalizados</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#">Gestão de Projetos</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#">Visualização 3D</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#">Consultoria de Cores</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#">Decoração de Luxo</a>
</div>
</div>

<div>
<h4 className="font-semibold mb-6 text-lg">Empresa</h4>
<div className="space-y-3">
<a className="block text-gray-400 hover:text-white transition-colors" href="#about">Sobre Nós</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#process">Nosso Processo</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#portfolio">Portfólio</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#testimonials">Depoimentos</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#">Carreiras</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#">Imprensa</a>
<a className="block text-gray-400 hover:text-white transition-colors" href="#">Blog</a>
</div>
</div>

<div>
<h4 className="font-semibold mb-6 text-lg">Entre em Contato</h4>
<div className="space-y-4 text-gray-400">
<div>
<h5 className="font-semibold text-white mb-2">Showroom São Paulo</h5>
<p>Av. Brigadeiro Faria Lima, 1234</p>
<p>São Paulo - SP, 01452-000</p>
</div>
<div>
<h5 className="font-semibold text-white mb-2">Escritório Rio de Janeiro</h5>
<p>Av. Atlântica, 456</p>
<p>Rio de Janeiro - RJ, 22021-000</p>
</div>
<div className="pt-4 border-t border-gray-800">
<p className="font-medium text-white">+55 (11) 98765-4321</p>
<p>contato@forma.design</p>
</div>
<div className="pt-2">
<p className="text-sm">Segunda - Sexta: 9h - 18h</p>
<p className="text-sm">Sábado: 10h - 16h</p>
</div>
</div>
</div>
</div>
<div className="border-t border-gray-800 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-gray-400 text-sm">© 2025 Forma Design de Interiores. Todos os direitos reservados.</p>
<div className="flex items-center gap-6 text-sm text-gray-400">
<a className="hover:text-white transition-colors" href="#">Política de Privacidade</a>
<a className="hover:text-white transition-colors" href="#">Termos de Serviço</a>
<a className="hover:text-white transition-colors" href="#">Política de Cookies</a>
<a className="hover:text-white transition-colors" href="#">Mapa do Site</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
