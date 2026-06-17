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

      // Slider data from análise (copy in captions/links)
      const slidesData = [
        { caption: "Conheça nossa história", link: "#empresa" },
        { caption: "Veja nossos equipamentos", link: "#equipamentos" },
        { caption: "Experiência e qualidade em cada produto", link: "#produtos" }
      ];

      // Simple Slider Controller
      class HeroSlider {
        constructor() {
          this.slides = Array.from(document.querySelectorAll('.hero-slide'));
          this.captionEl = document.getElementById('slideCaption');
          this.ctaEl = document.getElementById('slideCta');
          this.dots = Array.from(document.querySelectorAll('#slideDots button'));
          this.current = 0;
          this.interval = null;
          this.bind();
          this.update();
          this.play();
        }
        bind() {
          const prev = document.getElementById('prevSlide');
          const next = document.getElementById('nextSlide');
          if (prev) prev.addEventListener('click', () => { this.prev(); this.restart(); });
          if (next) next.addEventListener('click', () => { this.next(); this.restart(); });
          this.dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => { this.go(idx); this.restart(); });
          });
          document.addEventListener('visibilitychange', () => {
            if (document.hidden) this.pause(); else this.play();
          });
        }
        update() {
          this.slides.forEach((s,i)=>s.classList.toggle('active', i===this.current));
          this.captionEl.textContent = slidesData[this.current].caption;
          this.ctaEl.setAttribute('href', slidesData[this.current].link);
          this.dots.forEach((d,i)=>{
            d.style.backgroundColor = i===this.current ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)';
          });
        }
        next(){ this.current = (this.current+1)%this.slides.length; this.update(); }
        prev(){ this.current = (this.current-1+this.slides.length)%this.slides.length; this.update(); }
        go(i){ this.current = i; this.update(); }
        play(){ this.interval = setInterval(()=>this.next(), 6000); }
        pause(){ clearInterval(this.interval); }
        restart(){ this.pause(); this.play(); }
      }

      // Parallax Controller (kept)
      class AdvancedParallaxController {
        constructor() {
          this.elements = [
            { id: 'heroBase', speed: -0.2 },
            { id: 'aboutParallax', speed: 0.12 },
            { id: 'expertiseParallax', speed: 0.1 },
            { id: 'portfolioParallax1', speed: -0.05 },
            { id: 'testimonialsParallax', speed: -0.04 },
            { id: 'contactParallax', speed: 0.06 }
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
              const rectTop = element.getBoundingClientRect().top + scrolled;
              const elementBottom = rectTop + element.offsetHeight;
              if (scrolled + windowHeight > rectTop - windowHeight && scrolled < elementBottom + windowHeight) {
                const yPos = -(scrolled * speed);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
              }
            }
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
          let timeoutId; let lastExecTime = 0;
          return function (...args) {
            const currentTime = Date.now();
            if (currentTime - lastExecTime > delay) {
              func.apply(this, args); lastExecTime = currentTime;
            } else {
              clearTimeout(timeoutId);
              timeoutId = setTimeout(() => { func.apply(this, args); lastExecTime = Date.now(); }, delay - (currentTime - lastExecTime));
            }
          };
        }
      }

      // Counters
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
          const duration = 1600;
          const increment = target / (duration / 16);
          let current = 0;
          counter.classList.add('counter-animate');
          const updateCounter = () => {
            current += increment;
            if (current >= target) { counter.textContent = target; return; }
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
          let timeoutId; let lastExecTime = 0;
          return function (...args) {
            const currentTime = Date.now();
            if (currentTime - lastExecTime > delay) {
              func.apply(this, args); lastExecTime = currentTime;
            } else {
              clearTimeout(timeoutId);
              timeoutId = setTimeout(() => { func.apply(this, args); lastExecTime = Date.now(); }, delay - (currentTime - lastExecTime));
            }
          };
        }
      }

      // Navigation Controller
      class NavigationController {
        constructor() {
          this.header = document.getElementById('mainHeader');
          this.navLinks = document.querySelectorAll('.section-nav');
          this.sections = ['hero', 'about', 'expertise', 'portfolio', 'contact'];
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
            if (opacity > 0.5) {
              this.header.classList.add('backdrop-blur-xl');
            } else {
              this.header.classList.remove('backdrop-blur-xl');
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
              link.classList.add('text-gray-900');
              link.classList.remove('text-gray-600');
              const hoverBg = link.querySelector('.absolute');
              if (hoverBg) { hoverBg.classList.remove('scale-0'); hoverBg.classList.add('scale-100'); }
            } else {
              link.classList.remove('text-gray-900');
              link.classList.add('text-gray-600');
              const hoverBg = link.querySelector('.absolute');
              if (hoverBg) { hoverBg.classList.add('scale-0'); hoverBg.classList.remove('scale-100'); }
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
            const currentTime = Date.now();
            if (currentTime - lastExecTime > delay) {
              func.apply(this, args); lastExecTime = currentTime;
            } else {
              clearTimeout(timeoutId);
              timeoutId = setTimeout(() => { func.apply(this, args); lastExecTime = Date.now(); }, delay - (currentTime - lastExecTime));
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
          this.navLinks.forEach(link => link.addEventListener('click', () => this.closeMenu()));
          if (this.menu) {
            this.menu.addEventListener('click', (e) => { if (e.target === this.menu) this.closeMenu(); });
          }
          document.addEventListener('keydown', (e) => { if (e.key === 'Escape') this.closeMenu(); });
        }
        openMenu() { if (this.menu) { this.menu.classList.remove('translate-x-full'); document.body.classList.add('overflow-hidden'); } }
        closeMenu() { if (this.menu) { this.menu.classList.add('translate-x-full'); document.body.classList.remove('overflow-hidden'); } }
      }

      // Initialize
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
          new AdvancedParallaxController();
          new ScrollAnimationController();
          new CounterAnimationController();
          new NavigationController();
          new MobileMenuController();
          new HeroSlider();
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
<div className="absolute inset-0 glass-morphism bg-white/85 border-b border-gray-200/60"></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-3 group z-10" href="#hero">
<img alt="Voktep" className="h-8 w-auto rounded-sm object-contain" src="https://i.ibb.co/TBb5Hbd2/logo-voktep.jpg"/>
<span className="text-xl font-semibold tracking-tight">Voktep</span>
</a>

<nav className="hidden lg:flex items-center">
<div className="flex items-center gap-1 bg-gray-100 rounded-full p-1.5 glass-morphism">
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="hero" href="#hero">
<span className="relative z-10">Home</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="about" href="#empresa">
<span className="relative z-10">Empresa</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="expertise" href="#equipamentos">
<span className="relative z-10">Equipamentos</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="portfolio" href="#produtos">
<span className="relative z-10">Produtos</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="contact" href="#contato">
<span className="relative z-10">Contato</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
</div>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0166b6] text-white font-medium text-sm hover:bg-[#01589d] transition-all duration-200 shadow-sm hover:shadow-md" href="#contato">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="send"></i>
<span>Solicitar Orçamento</span>
</a>
<button className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors" id="mobileMenuBtn">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="menu"></i>
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
<img alt="Voktep" className="h-8 w-auto rounded-sm object-contain" src="https://i.ibb.co/TBb5Hbd2/logo-voktep.jpg"/>
<span className="text-xl font-semibold">Voktep</span>
</div>
<button className="p-2 rounded-xl hover:bg-gray-100" id="closeMobileMenu">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="x"></i>
</button>
</div>
<nav className="space-y-2">
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#hero">
<i className="w-5 h-5 text-gray-500 stroke-[1.5]" data-lucide="home"></i>
              Home
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#empresa">
<i className="w-5 h-5 text-gray-500 stroke-[1.5]" data-lucide="building-2"></i>
              Empresa
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#equipamentos">
<i className="w-5 h-5 text-gray-500 stroke-[1.5]" data-lucide="cpu"></i>
              Equipamentos
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#produtos">
<i className="w-5 h-5 text-gray-500 stroke-[1.5]" data-lucide="boxes"></i>
              Produtos
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#contato">
<i className="w-5 h-5 text-gray-500 stroke-[1.5]" data-lucide="mail"></i>
              Contato
            </a>
</nav>
<div className="mt-8 pt-6 border-t border-gray-200">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#0166b6] text-white font-medium hover:bg-[#01589d]" href="#contato">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="send"></i>
              Solicitar Orçamento
            </a>
</div>
</div>
</div>
</div>
<main className="relative">

<section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">

<div className="absolute inset-0">
<div className="parallax-element absolute inset-0 scale-110" id="heroBase">

<img alt="Slide 1 - Conheça nossa história" className="hero-slide active object-cover w-full h-auto" src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=3840&amp;q=80"/>
<img alt="Slide 2 - Veja nossos equipamentos" className="hero-slide object-cover w-full h-auto" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=3840&amp;q=80"/>
<img alt="Slide 3 - Experiência e qualidade em cada produto" className="hero-slide object-cover w-full h-auto" src="https://images.unsplash.com/photo-1620203853151-496c7228306c?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
</div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
<div className="max-w-4xl mx-auto">

<div className="fade-in-up stagger-1 inline-flex items-center gap-2 glass-morphism bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium mb-8">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="factory"></i>
<span>Indústria e Comércio de Plásticos • 34 anos de experiência</span>
</div>

<h1 className="fade-in-up stagger-2 text-5xl sm:text-6xl lg:text-7xl font-light tracking-tighter text-white leading-[0.95] mb-6">
              Soluções em Plásticos de Engenharia
            </h1>
<p className="fade-in-up stagger-3 text-xl sm:text-2xl text-white/90 font-light leading-relaxed mb-10 text-balance" id="slideCaption">
              Conheça nossa história
            </p>

<div className="fade-in-up stagger-4 flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="inline-flex items-center gap-3 bg-white text-gray-900 px-7 py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1" href="#empresa" id="slideCta">
<span>Saiba Mais</span>
<i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-semibold text-base sm:text-lg bg-[#0166b6] text-white hover:bg-[#01589d] transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1" href="#destaques">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="sparkles"></i>
<span>Destaques</span>
</a>
</div>

<div className="mt-10 flex items-center justify-center gap-4">
<button className="p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition" id="prevSlide">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="chevron-left"></i>
</button>
<div className="flex items-center gap-2" id="slideDots">
<button aria-label="Slide 1" className="w-2.5 h-2.5 rounded-full bg-white/70"></button>
<button aria-label="Slide 2" className="w-2.5 h-2.5 rounded-full bg-white/40"></button>
<button aria-label="Slide 3" className="w-2.5 h-2.5 rounded-full bg-white/40"></button>
</div>
<button className="p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition" id="nextSlide">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="fade-in-up stagger-5 mt-10 sm:mt-12">
<div className="mx-auto w-full max-w-3xl rounded-2xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur">
<dl className="grid grid-cols-3 divide-x divide-white/15 text-center">
<div className="px-3">
<dd className="counter counter-animate text-3xl font-light leading-tight text-white" data-target="34">0</dd>
<dt className="mt-1 text-xs sm:text-sm text-white/70">Anos de mercado</dt>
</div>
<div className="px-3">
<dd className="text-3xl font-light leading-tight text-white">Parque</dd>
<dt className="mt-1 text-xs sm:text-sm text-white/70">industrial atualizado</dt>
</div>
<div className="px-3">
<dd className="text-3xl font-light leading-tight text-white">ABRINQ • SGS • GRAACC</dd>
<dt className="mt-1 text-xs sm:text-sm text-white/70">Qualidade &amp; responsabilidade</dt>
</div>
</dl>
</div>
</div>
</div>
</section>

<div className="hidden" id="empresa"></div>
<div className="hidden" id="equipamentos"></div>
<div className="hidden" id="produtos"></div>
<div className="hidden" id="contato"></div>

<section className="relative py-16 sm:py-20 bg-gray-50" id="destaques">
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-10 sm:mb-14">
<span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium" style={{backgroundColor: '#c8c7cc33', color: '#0166b6'}}>
<i className="w-4 h-4 stroke-[1.5]" data-lucide="badge-check"></i>
              Nossos Destaques
            </span>
<h2 className="mt-4 text-4xl sm:text-5xl font-light tracking-tight">Excelência em Plásticos de Engenharia</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#0166b6] hover:shadow-lg transition-all" href="#produtos">
<div className="w-12 h-12 rounded-xl grid place-items-center mb-4" style={{backgroundColor: '#0166b611', color: '#0166b6'}}>
<i className="w-6 h-6 stroke-[1.5]" data-lucide="beaker"></i>
</div>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-2">Especialista em materiais de engenharia</h3>
<p className="text-gray-600">Aplicações técnicas, resistência e performance para sua operação.</p>
</a>

<a className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#0166b6] hover:shadow-lg transition-all" href="#equipamentos">
<div className="w-12 h-12 rounded-xl grid place-items-center mb-4" style={{backgroundColor: '#0166b611', color: '#0166b6'}}>
<i className="w-6 h-6 stroke-[1.5]" data-lucide="cpu"></i>
</div>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-2">Parque industrial atualizado</h3>
<p className="text-gray-600">Injetoras e automação para alto volume com qualidade.</p>
</a>

<a className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#0166b6] hover:shadow-lg transition-all" href="#empresa">
<div className="w-12 h-12 rounded-xl grid place-items-center mb-4" style={{backgroundColor: '#0166b611', color: '#0166b6'}}>
<i className="w-6 h-6 stroke-[1.5]" data-lucide="calendar-check"></i>
</div>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-2">34 anos no mercado de injeção</h3>
<p className="text-gray-600">História, know-how e confiabilidade industrial.</p>
</a>
</div>
</div>
</section>

<section className="relative py-28 bg-white overflow-hidden" id="about">
<div className="parallax-element absolute inset-0 opacity-20 pointer-events-none" id="aboutParallax">
<div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl" style={{background: 'radial-gradient(120px,#c8c7cc55,transparent)'}}></div>
<div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl" style={{background: 'radial-gradient(120px,#0166b644,transparent)'}}></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="fade-in-left stagger-1 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6" style={{backgroundColor: '#0166b611', color: '#0166b6'}}>
<i className="w-4 h-4 stroke-[1.5]" data-lucide="building-2"></i>
<span>Empresa</span>
</div>
<h2 className="fade-in-left stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
                Indústria de Plásticos com foco em
                <span className="font-semibold" style={{color: '#0166b6'}}>engenharia e qualidade</span>
</h2>
<p className="fade-in-left stagger-3 text-xl text-gray-600 leading-relaxed mb-8 text-balance">
                Há 34 anos, a Voktep desenvolve, injeta e comercializa componentes plásticos de alta performance. Atuamos com materiais de engenharia, processos robustos e certificações que asseguram confiabilidade em toda a cadeia.
              </p>
<div className="space-y-4 mb-8">
<div className="fade-in-left stagger-4 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl grid place-items-center flex-shrink-0" style={{backgroundColor: '#0166b611', color: '#0166b6'}}>
<i className="w-6 h-6 stroke-[1.5]" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="font-semibold text-lg">Qualidade e certificações</h4>
<p className="text-gray-600">ABRINQ, SGS e apoio ao GRAACC</p>
</div>
</div>
<div className="fade-in-left stagger-5 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl grid place-items-center flex-shrink-0" style={{backgroundColor: '#0166b611', color: '#0166b6'}}>
<i className="w-6 h-6 stroke-[1.5]" data-lucide="factory"></i>
</div>
<div>
<h4 className="font-semibold text-lg">Parque industrial atualizado</h4>
<p className="text-gray-600">Injetoras modernas, automação e rastreabilidade</p>
</div>
</div>
<div className="fade-in-left stagger-6 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl grid place-items-center flex-shrink-0" style={{backgroundColor: '#0166b611', color: '#0166b6'}}>
<i className="w-6 h-6 stroke-[1.5]" data-lucide="beaker"></i>
</div>
<div>
<h4 className="font-semibold text-lg">Materiais de engenharia</h4>
<p className="text-gray-600">PA, POM, PC, PBT, ABS, PP e compostos técnicos</p>
</div>
</div>
</div>
<a className="fade-in-left stagger-6 inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-semibold text-lg text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" href="#contato" style={{backgroundColor: '#0166b6'}}>
<span>Fale com nossos especialistas</span>
<i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
<div className="relative">
<div className="fade-in-right stagger-2 relative">
<img alt="Parque Industrial Voktep" className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl" src="https://images.unsplash.com/photo-1474674556023-efef886fa147?w=1600&amp;q=80"/>

<div className="scale-in stagger-4 absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl grid place-items-center text-white" style={{background: 'linear-gradient(135deg,#0166b6,#01589d)'}}>
<i className="w-6 h-6 stroke-[1.5]" data-lucide="gauge"></i>
</div>
<div>
<div className="text-2xl font-semibold">+34 anos</div>
<div className="text-gray-600 text-sm">Experiência comprovada</div>
</div>
</div>
</div>

<div className="scale-in stagger-3 absolute -top-4 -right-4 text-white rounded-2xl px-6 py-3 shadow-lg" style={{background: 'linear-gradient(135deg,#0166b6,#01589d)'}}>
<div className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="award"></i>
<span className="font-semibold">Qualidade Voktep</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-28 bg-gray-50 overflow-hidden" id="expertise">
<div className="parallax-element absolute inset-0 opacity-30 pointer-events-none" id="expertiseParallax">
<div className="absolute -top-16 -right-40 w-96 h-96 rounded-full blur-3xl" style={{background: 'radial-gradient(120px,#0166b622,transparent)'}}></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6" style={{backgroundColor: '#0166b611', color: '#0166b6'}}>
<i className="w-4 h-4 stroke-[1.5]" data-lucide="cpu"></i>
<span>Equipamentos</span>
</div>
<h2 className="fade-in-up stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
              Capacidade para alto volume com
              <span className="font-semibold" style={{color: '#0166b6'}}>precisão</span>
</h2>
<p className="fade-in-up stagger-3 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance">
              Injetoras modernas, robôs, sistemas de secagem e controle de processo asseguram repetibilidade, produtividade e qualidade.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="scale-in stagger-1 group">
<div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
<div className="w-16 h-16 rounded-2xl grid place-items-center mb-6 text-white" style={{background: 'linear-gradient(135deg,#0166b6,#01589d)'}}>
<i className="w-8 h-8 stroke-[1.5]" data-lucide="cog"></i>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Injetoras</h3>
<p className="text-gray-600 leading-relaxed mb-6">Parque com diferentes forças de fechamento e controle avançado.</p>
<img alt="Injetoras Voktep" className="w-full h-40 object-cover rounded-xl border border-gray-100" src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&amp;q=80"/>
</div>
</div>
<div className="scale-in stagger-2 group lg:-mt-4">
<div className="relative bg-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-white h-full">
<div className="w-16 h-16 rounded-2xl grid place-items-center mb-6 text-white" style={{background: 'linear-gradient(135deg,#3aa0e6,#0166b6)'}}>
<i className="w-8 h-8 stroke-[1.5]" data-lucide="bot"></i>
</div>
<div className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold mb-4" style={{backgroundColor: '#0166b622', color: '#cfe9ff'}}>
<i className="w-3 h-3 stroke-[1.5]" data-lucide="sparkles"></i>
<span>Automação</span>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Robôs &amp; Alimentação</h3>
<p className="text-gray-300 leading-relaxed mb-6">Retirada automática, alimentação central e integração com o processo.</p>
<img alt="Automação" className="w-full h-40 object-cover rounded-xl border border-white/10" src="https://images.unsplash.com/photo-1522322512347-a0e57fd1744c?w=800&amp;q=80"/>
</div>
</div>
<div className="scale-in stagger-3 group">
<div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
<div className="w-16 h-16 rounded-2xl grid place-items-center mb-6 text-white" style={{background: 'linear-gradient(135deg,#0166b6,#01589d)'}}>
<i className="w-8 h-8 stroke-[1.5]" data-lucide="thermometer-sun"></i>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Secagem &amp; Temperatura</h3>
<p className="text-gray-600 leading-relaxed mb-6">Secadores, desumidificadores e controladores de canal quente.</p>
<img alt="Secagem e temperatura" className="w-full h-40 object-cover rounded-xl border border-gray-100" src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?w=800&amp;q=80"/>
</div>
</div>
<div className="scale-in stagger-4 group">
<div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
<div className="w-16 h-16 rounded-2xl grid place-items-center mb-6 text-white" style={{background: 'linear-gradient(135deg,#0166b6,#01589d)'}}>
<i className="w-8 h-8 stroke-[1.5]" data-lucide="wrench"></i>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Ferramentaria &amp; Moldes</h3>
<p className="text-gray-600 leading-relaxed mb-6">Manutenção, setup ágil e padronização para ganhos de OEE.</p>
<img alt="Ferramentaria e moldes" className="w-full h-40 object-cover rounded-xl border border-gray-100" src="https://images.unsplash.com/photo-1524514587686-e2909d726e9b?w=800&amp;q=80"/>
</div>
</div>
<div className="scale-in stagger-5 group">
<div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
<div className="w-16 h-16 rounded-2xl grid place-items-center mb-6 text-white" style={{background: 'linear-gradient(135deg,#0166b6,#01589d)'}}>
<i className="w-8 h-8 stroke-[1.5]" data-lucide="scan-line"></i>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Inspeção &amp; Medição</h3>
<p className="text-gray-600 leading-relaxed mb-6">Controle dimensional, testes de impacto e rastreabilidade por lote.</p>
<img alt="Inspeção e medição" className="w-full h-40 object-cover rounded-xl border border-gray-100" src="https://images.unsplash.com/photo-1469289759076-d1484757abc3?w=800&amp;q=80"/>
</div>
</div>
<div className="scale-in stagger-6 group">
<div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
<div className="w-16 h-16 rounded-2xl grid place-items-center mb-6 text-white" style={{background: 'linear-gradient(135deg,#0166b6,#01589d)'}}>
<i className="w-8 h-8 stroke-[1.5]" data-lucide="recycle"></i>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Sustentabilidade</h3>
<p className="text-gray-600 leading-relaxed mb-6">Gestão de resíduos e reutilização com foco em responsabilidade.</p>
<img alt="Sustentabilidade" className="w-full h-40 object-cover rounded-xl border border-gray-100" src="https://images.unsplash.com/photo-1579096262612-ae99731c2e46?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-28 bg-gray-900 text-white overflow-hidden" id="portfolio">
<div className="absolute inset-0">
<div className="parallax-element absolute inset-0 opacity-5" id="portfolioParallax1">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
</div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 glass-morphism border border-white/20 text-white rounded-full px-4 py-2 text-sm font-medium mb-6">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="boxes"></i>
<span>Produtos</span>
</div>
<h2 className="fade-in-up stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
              Componentes plásticos para
              <span className="font-semibold">aplicações técnicas</span>
</h2>
<p className="fade-in-up stagger-3 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-balance">
              Peças injetadas em materiais de engenharia com foco em desempenho, estética e confiabilidade.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
<div className="scale-in stagger-1 lg:col-span-8 group">
<div className="relative rounded-3xl overflow-hidden bg-white/5 glass-morphism border border-white/10 hover:border-white/20 transition-all duration-500">
<img alt="Componentes técnicos" className="w-full h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1641893823219-38b433f736c0?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<h3 className="text-3xl font-semibold mb-3 tracking-tight">Componentes técnicos</h3>
<p className="text-white/80 text-lg leading-relaxed mb-6 max-w-2xl">Peças com requisitos dimensionais, resistência térmica e mecânica.</p>
<a className="inline-flex items-center gap-2 bg-white/20 glass-morphism border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300" href="#contato">
<span>Solicitar amostras</span>
<i className="w-4 h-4 stroke-[1.5]" data-lucide="external-link"></i>
</a>
</div>
</div>
</div>
<div className="lg:col-span-4 space-y-8">
<div className="scale-in stagger-2 group">
<div className="relative rounded-3xl overflow-hidden bg-white/5 glass-morphism border border-white/10 hover:border-white/20 transition-all duration-500">
<img alt="Carcaças e tampas" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1610891015188-5369212db097?w=800&amp;q=80"/>
<div className="p-6">
<h4 className="text-xl font-semibold mb-2">Carcaças e tampas</h4>
<p className="text-white/70 text-sm leading-relaxed">Acabamento, textura e montagem precisa.</p>
</div>
</div>
</div>
<div className="scale-in stagger-3 group">
<div className="relative rounded-3xl overflow-hidden bg-white/5 glass-morphism border border-white/10 hover:border-white/20 transition-all duration-500">
<img alt="Suportes e fixadores" className="w-full h-48 object-cover" src="https://placehold.co/800x500?text=Suportes+%26+Fixadores"/>
<div className="p-6">
<h4 className="text-xl font-semibold mb-2">Suportes e fixadores</h4>
<p className="text-white/70 text-sm leading-relaxed">Rigidez, tolerância e repetibilidade.</p>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
<div className="scale-in stagger-4 text-center">
<div className="w-16 h-16 rounded-2xl grid place-items-center mx-auto mb-4 text-white" style={{background: 'linear-gradient(135deg,#0166b6,#01589d)'}}>
<i className="w-8 h-8 stroke-[1.5]" data-lucide="plug"></i>
</div>
<h4 className="text-xl font-semibold mb-2">Eletroeletrônico</h4>
<p className="text-white/70">Isolação, flame retardant e estética</p>
</div>
<div className="scale-in stagger-5 text-center">
<div className="w-16 h-16 rounded-2xl grid place-items-center mx-auto mb-4 text-white" style={{background: 'linear-gradient(135deg,#0166b6,#01589d)'}}>
<i className="w-8 h-8 stroke-[1.5]" data-lucide="stethoscope"></i>
</div>
<h4 className="text-xl font-semibold mb-2">Instrumentação</h4>
<p className="text-white/70">Precisão e estabilidade dimensional</p>
</div>
<div className="scale-in stagger-6 text-center">
<div className="w-16 h-16 rounded-2xl grid place-items-center mx-auto mb-4 text-white" style={{background: 'linear-gradient(135deg,#0166b6,#01589d)'}}>
<i className="w-8 h-8 stroke-[1.5]" data-lucide="settings"></i>
</div>
<h4 className="text-xl font-semibold mb-2">Automação/Industrial</h4>
<p className="text-white/70">Desempenho mecânico e química</p>
</div>
</div>
<div className="text-center">
<a className="fade-in-up stagger-4 inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl transform hover:-translate-y-1" href="#contato">
<span>Catálogo e desenvolvimento</span>
<i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="relative py-28 bg-white overflow-hidden" id="testimonials">
<div className="parallax-element absolute inset-0 opacity-20 pointer-events-none" id="testimonialsParallax">
<div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{background: 'radial-gradient(120px,#c8c7cc55,transparent)'}}></div>
<div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{background: 'radial-gradient(120px,#0166b633,transparent)'}}></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6" style={{backgroundColor: '#0166b611', color: '#0166b6'}}>
<i className="w-4 h-4 stroke-[1.5]" data-lucide="shield-check"></i>
<span>Certificações &amp; Qualidade</span>
</div>
<h2 className="fade-in-up stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
              Compromisso com a
              <span className="font-semibold" style={{color: '#0166b6'}}>conformidade e responsabilidade</span>
</h2>
<p className="fade-in-up stagger-3 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance">
              Processos padronizados, rastreáveis e alinhados às melhores práticas de mercado.
            </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
<div className="scale-in stagger-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-center justify-center">
<img alt="ABRINQ" className="h-12 w-auto object-contain" src="https://placehold.co/220x80?text=ABRINQ"/>
</div>
<a className="scale-in stagger-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md transition" href="http://www.sgs.com/certifiedclients" rel="noopener" target="_blank">
<img alt="SGS" className="h-12 w-auto object-contain" src="https://placehold.co/220x80?text=SGS"/>
</a>
<div className="scale-in stagger-3 bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-center justify-center">
<img alt="GRAACC" className="h-12 w-auto object-contain" src="https://placehold.co/220x80?text=GRAACC"/>
</div>
</div>

<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex items-start gap-3">
<i className="w-5 h-5 mt-0.5 text-[#0166b6] stroke-[1.5]" data-lucide="check-circle-2"></i>
<p className="text-gray-700">Inspeção em processo e final com registros por lote</p>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 mt-0.5 text-[#0166b6] stroke-[1.5]" data-lucide="check-circle-2"></i>
<p className="text-gray-700">Matérias-primas homologadas e rastreáveis</p>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 mt-0.5 text-[#0166b6] stroke-[1.5]" data-lucide="check-circle-2"></i>
<p className="text-gray-700">Treinamento contínuo e padronização operacional</p>
</div>
</div>
</div>
</section>

<section className="relative py-28 bg-gray-50 overflow-hidden" id="contact">
<div className="parallax-element absolute inset-0 opacity-30 pointer-events-none" id="contactParallax">
<div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl" style={{background: 'radial-gradient(120px,#0166b622,transparent)'}}></div>
<div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl" style={{background: 'radial-gradient(120px,#c8c7cc55,transparent)'}}></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div>
<div className="fade-in-left stagger-1 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6" style={{backgroundColor: '#0166b611', color: '#0166b6'}}>
<i className="w-4 h-4 stroke-[1.5]" data-lucide="mail"></i>
<span>Contato</span>
</div>
<h2 className="fade-in-left stagger-2 text-5xl sm:text-6xl font-light tracking-tighter mb-6 text-balance">
                Fale com a <span className="font-semibold" style={{color: '#0166b6'}}>Voktep</span>
</h2>
<p className="fade-in-left stagger-3 text-xl text-gray-600 leading-relaxed mb-8 text-balance">
                Envie sua demanda ou solicite um orçamento. Retornamos rapidamente com a melhor solução.
              </p>
<div className="space-y-6 mb-8">
<div className="fade-in-left stagger-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-200">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl grid place-items-center flex-shrink-0" style={{backgroundColor: '#0166b611', color: '#0166b6'}}>
<i className="w-6 h-6 stroke-[1.5]" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="font-semibold text-lg">Endereço</h4>
<p className="text-gray-700">Rua Itapiranga, 280, Vila Floresta - Santo André</p>
</div>
</div>
</div>
<div className="fade-in-left stagger-5 p-4 rounded-2xl bg-white shadow-sm border border-gray-200">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl grid place-items-center flex-shrink-0" style={{backgroundColor: '#0166b611', color: '#0166b6'}}>
<i className="w-6 h-6 stroke-[1.5]" data-lucide="phone"></i>
</div>
<div>
<h4 className="font-semibold text-lg">Telefone/Fax</h4>
<p className="text-gray-700">11 4422-5032</p>
</div>
</div>
</div>
<div className="fade-in-left stagger-6 p-4 rounded-2xl bg-white shadow-sm border border-gray-200">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl grid place-items-center flex-shrink-0" style={{backgroundColor: '#0166b611', color: '#0166b6'}}>
<i className="w-6 h-6 stroke-[1.5]" data-lucide="mail"></i>
</div>
<div>
<h4 className="font-semibold text-lg">E-mail</h4>
<p className="text-gray-700">voktep@voktep.com.br</p>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
<div className="aspect-[16/9] w-full grid place-items-center text-gray-500">
<span className="text-sm">Mapa (iframe) • adicionar Google Maps aqui</span>
</div>
</div>
</div>

<div className="scale-in stagger-2 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
<div className="mb-8">
<h3 className="text-2xl font-semibold mb-2">Envie sua solicitação</h3>
<p className="text-gray-600">Descreva o produto, material e volume estimado.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Nome *</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0166b6] focus:ring-4 focus:ring-[#0166b6] /20 outline-none transition-all" placeholder="Seu nome" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Empresa</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0166b6] focus:ring-4 focus:ring-[#0166b6] /20 outline-none transition-all" placeholder="Nome da empresa" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">E-mail *</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0166b6] focus:ring-4 focus:ring-[#0166b6] /20 outline-none transition-all" placeholder="seu@email.com" type="email"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Telefone</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0166b6] focus:ring-4 focus:ring-[#0166b6] /20 outline-none transition-all" placeholder="(11) 0000-0000" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Material</label>
<select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0166b6] focus:ring-4 focus:ring-[#0166b6] /20 outline-none transition-all">
<option>Selecione</option>
<option>ABS</option>
<option>PP</option>
<option>PA (Náilon)</option>
<option>POM (Acetal)</option>
<option>PC</option>
<option>PBT</option>
<option>Outro</option>
</select>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Volume estimado</label>
<select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0166b6] focus:ring-4 focus:ring-[#0166b6] /20 outline-none transition-all">
<option>Selecione</option>
<option>Protótipo</option>
<option>Lote piloto</option>
<option>Série baixa</option>
<option>Série alta</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Detalhes do projeto *</label>
<textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0166b6] focus:ring-4 focus:ring-[#0166b6] /20 outline-none transition-all resize-none" placeholder="Descreva dimensões, tolerâncias, acabamento, aplicação e prazos..." rows="4"></textarea>
</div>
<button className="w-full text-white py-4 rounded-xl font-semibold text-lg hover:opacity-95 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" style={{backgroundColor: '#0166b6'}} type="submit">
                  Enviar solicitação
                </button>
<p className="text-xs text-gray-500 text-center">Responderemos o quanto antes. Seus dados estão seguros.</p>
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
<img alt="Voktep" className="h-10 w-auto rounded-sm object-contain bg-white p-1" src="https://i.ibb.co/TBb5Hbd2/logo-voktep.jpg"/>
<div>
<span className="text-2xl font-semibold tracking-tight">Voktep</span>
<p className="text-gray-400 text-sm">Indústria e Comércio de Plásticos Ltda</p>
</div>
</div>
<p className="text-gray-400 leading-relaxed mb-6">
              Rua Itapiranga, 280, Vila Floresta - Santo André
            </p>
<div className="space-y-1 text-gray-300">
<p className="font-medium">11 4422-5032</p>
<p>voktep@voktep.com.br</p>
</div>
</div>

<div>
<h4 className="font-semibold mb-6 text-lg">Menu</h4>
<div className="space-y-3 text-gray-400">
<a className="block hover:text-white transition-colors" href="#hero">Home</a>
<a className="block hover:text-white transition-colors" href="#empresa">Empresa</a>
<a className="block hover:text-white transition-colors" href="#equipamentos">Equipamentos</a>
<a className="block hover:text-white transition-colors" href="#produtos">Produtos</a>
<a className="block hover:text-white transition-colors" href="#contato">Contato</a>
</div>
</div>

<div>
<h4 className="font-semibold mb-6 text-lg">Certificações &amp; Parceiros</h4>
<div className="grid grid-cols-3 gap-3 items-center">
<div className="rounded-lg bg-white/5 border border-white/10 p-3 grid place-items-center">
<img alt="ABRINQ" className="h-8 w-auto object-contain" src="https://placehold.co/120x40?text=ABRINQ"/>
</div>
<a className="rounded-lg bg-white/5 border border-white/10 p-3 grid place-items-center hover:bg-white/10 transition" href="http://www.sgs.com/certifiedclients" rel="noopener" target="_blank">
<img alt="SGS" className="h-8 w-auto object-contain" src="https://placehold.co/120x40?text=SGS"/>
</a>
<div className="rounded-lg bg-white/5 border border-white/10 p-3 grid place-items-center">
<img alt="GRAACC" className="h-8 w-auto object-contain" src="https://placehold.co/120x40?text=GRAACC"/>
</div>
</div>
</div>

<div>
<h4 className="font-semibold mb-6 text-lg">Atendimento</h4>
<p className="text-gray-400 mb-4">Envie seu projeto e retornamos com a melhor proposta técnica.</p>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white hover:opacity-95 transition" href="#contato" style={{backgroundColor: '#0166b6'}}>
<i className="w-5 h-5 stroke-[1.5]" data-lucide="send"></i>
              Solicitar Orçamento
            </a>
</div>
</div>
<div className="border-t border-gray-800 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-gray-400 text-sm">© 2025 Voktep. Todos os direitos reservados.</p>
<div className="flex items-center gap-6 text-sm text-gray-400">
<a className="hover:text-white transition-colors" href="#">Política de Privacidade</a>
<a className="hover:text-white transition-colors" href="#">Termos de Uso</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
