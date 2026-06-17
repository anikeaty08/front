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

      // Enhanced Navigation Controller
      class NavigationController {
        constructor() {
          this.header = document.getElementById('mainHeader');
          this.navLinks = document.querySelectorAll('.section-nav');
          this.sections = ['hero', 'vantagens', 'processo', 'comparativo', 'projetos', 'faq', 'contato'];
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

      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
          new AdvancedParallaxController();
          new ScrollAnimationController();
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
<div className="absolute inset-0 glass-morphism bg-white/80 border-b border-gray-200/50"></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-3 group z-10" href="#hero">
<div className="w-9 h-9 rounded-xl bg-gray-900 text-white grid place-items-center shadow-sm group-hover:scale-105 transition-transform duration-200">
<span className="text-sm font-bold tracking-tighter">K</span>
</div>
<span className="text-xl font-semibold tracking-tight">Kahn</span>
</a>

<nav className="hidden lg:flex items-center">
<div className="flex items-center gap-1 bg-gray-100/80 rounded-full p-1.5 glass-morphism">
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="vantagens" href="#vantagens">
<span className="relative z-10">Vantagens</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="processo" href="#processo">
<span className="relative z-10">Como Funciona</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="comparativo" href="#comparativo">
<span className="relative z-10">Comparativo</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="projetos" href="#projetos">
<span className="relative z-10">Projetos</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
<a className="section-nav px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden group" data-section="faq" href="#faq">
<span className="relative z-10">Dúvidas</span>
<div className="absolute inset-0 bg-white shadow-sm rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
</a>
</div>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 text-white font-medium text-sm hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md" href="#contato">
<i className="w-4 h-4" data-lucide="calculator"></i>
<span>Orçamento Grátis</span>
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
<span className="text-sm font-bold tracking-tighter">K</span>
</div>
<span className="text-xl font-semibold">Kahn</span>
</div>
<button className="p-2 rounded-xl hover:bg-gray-100" id="closeMobileMenu">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<nav className="space-y-2">
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#vantagens">
<i className="w-5 h-5 text-gray-500" data-lucide="check-circle"></i>
              Vantagens
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#processo">
<i className="w-5 h-5 text-gray-500" data-lucide="settings"></i>
              Processo
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#projetos">
<i className="w-5 h-5 text-gray-500" data-lucide="home"></i>
              Projetos
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#oferta">
<i className="w-5 h-5 text-gray-500" data-lucide="zap"></i>
              Oferta
            </a>
<a className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 font-medium transition-colors" href="#contato">
<i className="w-5 h-5 text-gray-500" data-lucide="mail"></i>
              Contato
            </a>
</nav>
<div className="mt-8 pt-6 border-t border-gray-200">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-900 text-white font-medium" href="#contato">
<i className="w-5 h-5" data-lucide="calculator"></i>
              Orçamento Grátis
            </a>
</div>
</div>
</div>
</div>
<main className="relative">

<section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">

<div className="absolute inset-0">

<div className="parallax-element absolute inset-0 scale-110" id="heroBase">
<img alt="Steel Frame Construction Luxury" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1691890878510-34ed28f185fc?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
</div>
<div className="parallax-element absolute inset-0" id="heroFloat">
<div className="absolute top-20 right-20 w-32 h-32 rounded-3xl bg-white/10 glass-morphism border border-white/20 hidden lg:block transform rotate-12"></div>
<div className="absolute bottom-40 left-20 w-24 h-24 rounded-2xl bg-white/5 glass-morphism border border-white/10 hidden lg:block transform -rotate-6"></div>
</div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">
<div className="max-w-4xl mx-auto">

<div className="fade-in-up stagger-1 inline-flex items-center gap-2 glass-morphism bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium mb-8">
<i className="w-4 h-4 text-yellow-400" data-lucide="zap"></i>
<span>Tecnologia Americana e Europeia no Brasil</span>
</div>

<h1 className="fade-in-up stagger-2 text-5xl sm:text-6xl lg:text-7xl font-light tracking-tighter text-white leading-[1.05] mb-8">
              Construa Sua Casa dos Sonhos em <span className="font-semibold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">Até 3 Meses</span>
<span className="block text-4xl sm:text-5xl lg:text-6xl mt-2 text-white/90">Com a Tecnologia Steel Frame</span>
</h1>

<p className="fade-in-up stagger-3 text-lg sm:text-xl text-white/80 font-light leading-relaxed mb-10 max-w-3xl mx-auto text-balance">
              A revolução na construção civil que já é realidade nos EUA e Europa chegou ao Brasil. Economize até 30% e tenha sua obra pronta 60% mais rápido.
            </p>

<div className="fade-in-up stagger-4 flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
<a className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1" href="#contato">
<span>Quero Meu Orçamento Grátis</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<span className="text-sm text-white/70">Resposta em até 24 horas - Sem compromisso</span>
</div>

<div className="fade-in-up stagger-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left sm:text-center text-white/90 text-sm font-medium bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
<div className="flex items-center justify-center gap-2">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i> Obra 60% mais rápida
                </div>
<div className="flex items-center justify-center gap-2">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i> Economia de até 30%
                </div>
<div className="flex items-center justify-center gap-2">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i> Zero desperdício
                </div>
<div className="flex items-center justify-center gap-2">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i> Sustentável e ecológico
                </div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-white overflow-hidden" id="vantagens">
<div className="parallax-element absolute inset-0 opacity-20" id="aboutParallax">
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-50 to-transparent rounded-full blur-3xl"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<div className="fade-in-up stagger-1 inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="award"></i>
<span>Por Que Escolher?</span>
</div>
<h2 className="fade-in-up stagger-2 text-4xl sm:text-5xl font-light tracking-tighter mb-6 text-balance">
                    Por Que Milhares de Brasileiros <br/>
<span className="font-semibold text-gray-900">Estão Escolhendo Steel Frame?</span>
</h2>
<p className="fade-in-up stagger-3 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance">
                    Descubra as vantagens que estão revolucionando o mercado da construção civil.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="scale-in stagger-1 group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 grid place-items-center mb-6">
<i className="w-7 h-7" data-lucide="clock"></i>
</div>
<h3 className="text-xl font-bold mb-3">3x Mais Rápido</h3>
<p className="text-gray-600 leading-relaxed">Enquanto uma obra tradicional leva 12 meses, com Steel Frame você tem sua casa pronta em 3 a 4 meses. Menos tempo de obra = menos custos.</p>
</div>

<div className="scale-in stagger-2 group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 rounded-xl bg-green-100 text-green-600 grid place-items-center mb-6">
<i className="w-7 h-7" data-lucide="dollar-sign"></i>
</div>
<h3 className="text-xl font-bold mb-3">Até 30% Mais Barato</h3>
<p className="text-gray-600 leading-relaxed">Menos mão de obra, menos desperdício e mais previsibilidade. Sem surpresas desagradáveis no meio da obra.</p>
</div>

<div className="scale-in stagger-3 group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 rounded-xl bg-emerald-100 text-emerald-600 grid place-items-center mb-6">
<i className="w-7 h-7" data-lucide="leaf"></i>
</div>
<h3 className="text-xl font-bold mb-3">95% Menos Resíduos</h3>
<p className="text-gray-600 leading-relaxed">Construção a seco, sem entulho, sem desperdício de água. Materiais recicláveis e menor impacto ambiental.</p>
</div>

<div className="scale-in stagger-4 group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 rounded-xl bg-gray-100 text-gray-700 grid place-items-center mb-6">
<i className="w-7 h-7" data-lucide="ruler"></i>
</div>
<h3 className="text-xl font-bold mb-3">Qualidade Industrial</h3>
<p className="text-gray-600 leading-relaxed">Estrutura fabricada em ambiente controlado com tecnologia de ponta. Acabamento perfeito, sem "gambiarras".</p>
</div>

<div className="scale-in stagger-5 group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 rounded-xl bg-orange-100 text-orange-600 grid place-items-center mb-6">
<i className="w-7 h-7" data-lucide="thermometer-sun"></i>
</div>
<h3 className="text-xl font-bold mb-3">Conforto Superior</h3>
<p className="text-gray-600 leading-relaxed">Isolamento térmico e acústico superior. Economia de até 40% em climatização. Sua família merece o melhor.</p>
</div>

<div className="scale-in stagger-6 group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 grid place-items-center mb-6">
<i className="w-7 h-7" data-lucide="pen-tool"></i>
</div>
<h3 className="text-xl font-bold mb-3">Design Sem Limites</h3>
<p className="text-gray-600 leading-relaxed">Vãos maiores sem pilares. Realize o projeto arquitetônico que você sempre sonhou sem limitações estruturais.</p>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-gray-50" id="comparativo">
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold tracking-tight mb-4">Steel Frame vs Alvenaria</h2>
<p className="text-gray-600">Veja a diferença na prática</p>
</div>
<div className="overflow-hidden rounded-3xl shadow-xl border border-gray-200 bg-white">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-900 text-white">
<th className="p-6 text-sm font-semibold uppercase tracking-wider">Característica</th>
<th className="p-6 text-sm font-semibold uppercase tracking-wider bg-blue-600">Steel Frame (Kahn)</th>
<th className="p-6 text-sm font-semibold uppercase tracking-wider text-gray-400">Alvenaria Tradicional</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-sm sm:text-base">
<tr className="hover:bg-gray-50 transition-colors">
<td className="p-6 font-medium text-gray-900">Tempo de Obra</td>
<td className="p-6 font-bold text-blue-700 bg-blue-50/50">3-4 meses ⚡</td>
<td className="p-6 text-gray-500">10-12 meses 🐌</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="p-6 font-medium text-gray-900">Custo Total</td>
<td className="p-6 font-bold text-green-600 bg-blue-50/50">Até 30% mais barato 💰</td>
<td className="p-6 text-gray-500">Mais caro e imprevisível 💸</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="p-6 font-medium text-gray-900">Desperdício</td>
<td className="p-6 font-bold text-green-600 bg-blue-50/50">Menos de 5% ♻️</td>
<td className="p-6 text-gray-500">Até 30% 🗑️</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="p-6 font-medium text-gray-900">Precisão</td>
<td className="p-6 font-bold text-blue-700 bg-blue-50/50">Milimétrica 📐</td>
<td className="p-6 text-gray-500">Manual (depende do pedreiro) ⚒️</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="p-6 font-medium text-gray-900">Isolamento Térmico</td>
<td className="p-6 font-bold text-blue-700 bg-blue-50/50">Superior 🌡️</td>
<td className="p-6 text-gray-500">Básico</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="p-6 font-medium text-gray-900">Sustentabilidade</td>
<td className="p-6 font-bold text-green-600 bg-blue-50/50">Alta 🌱</td>
<td className="p-6 text-gray-500">Baixa</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-white overflow-hidden" id="processo">
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="layers"></i>
<span>Simples, Rápido e Transparente</span>
</div>
<h2 className="text-4xl sm:text-5xl font-light tracking-tighter mb-6">
                    Como Funciona o <span className="font-semibold">Processo?</span>
</h2>
<p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Do primeiro contato até a chave na mão, você acompanha cada etapa com total transparência.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
<div className="relative p-8 bg-white border border-gray-100 rounded-2xl h-full">
<span className="text-5xl font-bold text-gray-100 absolute top-4 right-4">01</span>
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
<i className="w-6 h-6" data-lucide="phone"></i>
</div>
<h3 className="text-xl font-bold mb-3">Contato Inicial</h3>
<p className="text-gray-600">Entre em contato e converse com nossos especialistas. Entendemos suas necessidades, terreno e sonhos.</p>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
<div className="relative p-8 bg-white border border-gray-100 rounded-2xl h-full">
<span className="text-5xl font-bold text-gray-100 absolute top-4 right-4">02</span>
<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
<i className="w-6 h-6" data-lucide="clipboard-list"></i>
</div>
<h3 className="text-xl font-bold mb-3">Projeto Personalizado</h3>
<p className="text-gray-600">Nossa equipe desenvolve o projeto perfeito para você e aprovamos junto aos órgãos competentes.</p>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
<div className="relative p-8 bg-white border border-gray-100 rounded-2xl h-full">
<span className="text-5xl font-bold text-gray-100 absolute top-4 right-4">03</span>
<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
<i className="w-6 h-6" data-lucide="file-check"></i>
</div>
<h3 className="text-xl font-bold mb-3">Orçamento Detalhado</h3>
<p className="text-gray-600">Valor fechado, sem "a combinar". Você recebe um orçamento completo sem surpresas.</p>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
<div className="relative p-8 bg-white border border-gray-100 rounded-2xl h-full">
<span className="text-5xl font-bold text-gray-100 absolute top-4 right-4">04</span>
<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-6">
<i className="w-6 h-6" data-lucide="factory"></i>
</div>
<h3 className="text-xl font-bold mb-3">Fabricação da Estrutura</h3>
<p className="text-gray-600">Sua estrutura é fabricada em ambiente industrial controlado, com precisão milimétrica.</p>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
<div className="relative p-8 bg-white border border-gray-100 rounded-2xl h-full">
<span className="text-5xl font-bold text-gray-100 absolute top-4 right-4">05</span>
<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
<i className="w-6 h-6" data-lucide="hammer"></i>
</div>
<h3 className="text-xl font-bold mb-3">Montagem Rápida</h3>
<p className="text-gray-600">Estrutura montada em apenas 7 a 15 dias! Acompanhe a evolução impressionante da sua obra.</p>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
<div className="relative p-8 bg-white border border-gray-100 rounded-2xl h-full">
<span className="text-5xl font-bold text-gray-100 absolute top-4 right-4">06</span>
<div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 mb-6">
<i className="w-6 h-6" data-lucide="key"></i>
</div>
<h3 className="text-xl font-bold mb-3">Acabamento e Entrega</h3>
<p className="text-gray-600">Finalizamos com acabamento de primeira qualidade. Sua casa pronta para morar em até 4 meses!</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-gray-900 text-white overflow-hidden" id="projetos">
<div className="absolute inset-0 bg-gray-900">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="fade-in-up stagger-2 text-4xl sm:text-5xl font-light tracking-tighter mb-6">
              Projetos Que Transformaram <br/>
<span className="font-semibold text-white">Sonhos em Realidade</span>
</h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">

<div className="scale-in stagger-1 lg:col-span-8 group cursor-pointer">
<div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 h-full">
<img alt="Casa Moderna" className="w-full h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<h3 className="text-2xl font-bold mb-3">Casa Moderna em Condomínio</h3>
<p className="text-white/80 mb-4">Campinas/SP • 3 suítes, pé direito duplo, acabamento premium.</p>
<div className="flex items-center gap-4 text-sm font-medium">
<span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">145m²</span>
<span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full backdrop-blur-md">Pronta em 85 dias</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-8 flex flex-col h-full">
<div className="scale-in stagger-2 group cursor-pointer flex-1 relative rounded-3xl overflow-hidden bg-white/5 border border-white/10">
<img alt="Chalé Sustentável" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0" src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
<div className="absolute bottom-0 p-6 relative z-10">
<h4 className="text-xl font-bold mb-1">Chalé Sustentável</h4>
<p className="text-sm text-gray-300 mb-2">Campos do Jordão/SP • 100% sustentável</p>
<span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">60 dias</span>
</div>
</div>
<div className="scale-in stagger-3 group cursor-pointer flex-1 relative rounded-3xl overflow-hidden bg-white/5 border border-white/10">
<img alt="Sobrado Familiar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
<div className="absolute bottom-0 p-6 relative z-10">
<h4 className="text-xl font-bold mb-1">Sobrado Familiar</h4>
<p className="text-sm text-gray-300 mb-2">Brasília/DF • 4 suítes, home office</p>
<span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">110 dias</span>
</div>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors" href="#contato">Ver todos os projetos <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</div>
</section>

<section className="relative py-24 bg-white" id="depoimentos">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-center text-4xl font-light tracking-tight mb-16">O Que Nossos <span className="font-semibold">Clientes Dizem?</span></h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
<div className="flex gap-1 text-yellow-400 mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-gray-700 mb-6 italic">"Não acreditei quando me disseram que a casa ficaria pronta em 3 meses. Achei que era propaganda. Mas ficou! E a qualidade superou todas as expectativas."</p>
<div className="font-bold">Maria e Carlos</div>
<div className="text-sm text-gray-500">São Paulo/SP • Casa 120m²</div>
</div>

<div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
<div className="flex gap-1 text-yellow-400 mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-gray-700 mb-6 italic">"Economizei mais de R$ 80.000 em comparação com orçamentos de alvenaria. Além disso, não tive que alugar casa por quase um ano."</p>
<div className="font-bold">Roberto Mendes</div>
<div className="text-sm text-gray-500">Curitiba/PR • Economia de 28%</div>
</div>

<div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
<div className="flex gap-1 text-yellow-400 mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-gray-700 mb-6 italic">"A obra foi tão limpa que meus vizinhos nem acreditavam que estava em construção. Zero entulho, zero sujeira. E o conforto térmico é incrível!"</p>
<div className="font-bold">Ana Paula</div>
<div className="text-sm text-gray-500">Florianópolis/SC • Sustentabilidade 10</div>
</div>
</div>
</div>
</section>

<section className="bg-blue-600 text-white py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
<div className="flex flex-col items-center gap-3">
<i className="w-8 h-8 opacity-80" data-lucide="shield-check"></i>
<span className="text-sm font-medium">Garantia Estrutural de 10 Anos</span>
</div>
<div className="flex flex-col items-center gap-3">
<i className="w-8 h-8 opacity-80" data-lucide="award"></i>
<span className="text-sm font-medium">Certificação PBQP-H</span>
</div>
<div className="flex flex-col items-center gap-3">
<i className="w-8 h-8 opacity-80" data-lucide="file-check"></i>
<span className="text-sm font-medium">Aprovação Legal Garantida</span>
</div>
<div className="flex flex-col items-center gap-3">
<i className="w-8 h-8 opacity-80" data-lucide="users"></i>
<span className="text-sm font-medium">Equipe Especializada</span>
</div>
<div className="flex flex-col items-center gap-3">
<i className="w-8 h-8 opacity-80" data-lucide="search"></i>
<span className="text-sm font-medium">Acompanhamento Semanal</span>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-white" id="oferta">
<div className="max-w-4xl mx-auto px-6 lg:px-8">
<div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden text-center">

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
<div className="relative z-10">
<div className="inline-block bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 animate-pulse">
                        🔥 Oferta Exclusiva Para Este Mês
                    </div>
<h2 className="text-4xl font-bold mb-6">Contrate agora e ganhe:</h2>
<div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
<div className="bg-white/10 rounded-2xl p-5 border border-white/10">
<i className="text-green-400 w-6 h-6 mb-3" data-lucide="check-circle"></i>
<h4 className="font-bold text-lg">Projeto Grátis</h4>
<p className="text-sm text-gray-300">Arquitetônico completo (Valor: R$ 8.500)</p>
</div>
<div className="bg-white/10 rounded-2xl p-5 border border-white/10">
<i className="text-green-400 w-6 h-6 mb-3" data-lucide="check-circle"></i>
<h4 className="font-bold text-lg">Aprovação</h4>
<p className="text-sm text-gray-300">Gerenciamento burocrático (Valor: R$ 3.200)</p>
</div>
<div className="bg-white/10 rounded-2xl p-5 border border-white/10">
<i className="text-green-400 w-6 h-6 mb-3" data-lucide="check-circle"></i>
<h4 className="font-bold text-lg">Cronograma</h4>
<p className="text-sm text-gray-300">Acompanhamento fotográfico (Valor: R$ 1.800)</p>
</div>
</div>
<div className="mb-8 p-4 bg-green-500/20 border border-green-500/30 rounded-xl inline-block">
<span className="font-bold text-green-300">🎁 Bônus Especial:</span> Primeira consultoria técnica no terreno sem custo!
                    </div>
<a className="block w-full sm:w-auto mx-auto bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition shadow-lg transform hover:-translate-y-1" href="#contato">
                        Quero Aproveitar Esta Oferta
                    </a>
<p className="mt-4 text-sm text-gray-400">⏰ Últimas 7 vagas para início imediato</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="faq">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl font-bold text-center mb-12">Dúvidas Frequentes</h2>
<div className="space-y-4">
<details className="group bg-white rounded-2xl p-6 shadow-sm cursor-pointer [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between font-medium text-lg text-gray-900">
                        Steel Frame é resistente como alvenaria?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-gray-600 mt-4 leading-relaxed">
                        Sim! A estrutura em aço galvanizado é até mais resistente que alvenaria. O steel frame é aprovado mundialmente e usado em prédios de até 8 andares. Sua casa terá estrutura que dura gerações.
                    </p>
</details>
<details className="group bg-white rounded-2xl p-6 shadow-sm cursor-pointer [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between font-medium text-lg text-gray-900">
                        Posso construir em qualquer terreno?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-gray-600 mt-4 leading-relaxed">
                        Sim, o steel frame se adapta a diversos tipos de terreno e exige fundações mais simples que a alvenaria, o que também reduz custos significativamente.
                    </p>
</details>
<details className="group bg-white rounded-2xl p-6 shadow-sm cursor-pointer [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between font-medium text-lg text-gray-900">
                        E se eu quiser fazer uma reforma no futuro?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-gray-600 mt-4 leading-relaxed">
                        Muito mais fácil! Você pode adicionar cômodos, fazer ampliações ou modificações com muito mais facilidade e menos sujeira do que na alvenaria tradicional.
                    </p>
</details>
<details className="group bg-white rounded-2xl p-6 shadow-sm cursor-pointer [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between font-medium text-lg text-gray-900">
                        O seguro é mais caro?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-gray-600 mt-4 leading-relaxed">
                        Não! As seguradoras já reconhecem o steel frame como construção definitiva e de alta qualidade. Os valores são equivalentes aos de imóveis em alvenaria.
                    </p>
</details>
<details className="group bg-white rounded-2xl p-6 shadow-sm cursor-pointer [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between font-medium text-lg text-gray-900">
                        Quais as formas de pagamento?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-gray-600 mt-4 leading-relaxed">
                        Aceitamos financiamento bancário (trabalhamos com os principais bancos), parcelamento direto e uso do FGTS. Temos um consultor financeiro para ajudar você.
                    </p>
</details>
</div>
</div>
</section>

<section className="relative py-32 bg-white overflow-hidden" id="contato">
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-5xl font-light tracking-tighter mb-6 text-balance">
                Sua Casa dos Sonhos a <br/>
<span className="font-semibold text-blue-600">Um Clique de Distância</span>
</h2>
<p className="text-xl text-gray-600 leading-relaxed mb-8 text-balance">
                Imagine-se daqui a 4 meses entrando na sua casa nova. Enquanto outros ainda lidam com obras atrasadas, você estará comemorando.
              </p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
<div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">1</div>
<div>
<div className="font-semibold">Preencha o formulário</div>
<div className="text-sm text-gray-500">É rápido e sem compromisso</div>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
<div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">2</div>
<div>
<div className="font-semibold">Fale com especialista</div>
<div className="text-sm text-gray-500">Resposta em até 2 horas</div>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
<div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">3</div>
<div>
<div className="font-semibold">Receba seu orçamento</div>
<div className="text-sm text-gray-500">Proposta detalhada em 24h</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
<div className="mb-6">
<h3 className="text-2xl font-semibold mb-2">Solicitar Orçamento Grátis</h3>
<p className="text-gray-600 text-sm">Preencha os dados abaixo para receber o contato de um consultor.</p>
</div>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-gray-900 mb-1">Nome</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none bg-gray-50" placeholder="Seu nome" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-gray-900 mb-1">Telefone/WhatsApp</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none bg-gray-50" placeholder="(11) 99999-9999" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-gray-900 mb-1">Email</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none bg-gray-50" placeholder="seu@email.com" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold text-gray-900 mb-1">Tipo de Projeto</label>
<select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none bg-gray-50">
<option>Residencial (Casa/Sobrado)</option>
<option>Comercial</option>
<option>Ampliação/Reforma</option>
<option>Projeto Especial</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold text-gray-900 mb-1">Possui Terreno?</label>
<select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none bg-gray-50">
<option>Sim, já possuo</option>
<option>Não, estou procurando</option>
<option>Em negociação</option>
</select>
</div>
<button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg mt-2" type="submit">
                  Solicitar Contato Agora
                </button>
<p className="text-xs text-center text-gray-400">Seus dados estão seguros. Sem spam.</p>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-gray-900 text-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">

<div className="lg:col-span-1">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-xl bg-white text-gray-900 grid place-items-center">
<span className="font-bold tracking-tighter">K</span>
</div>
<span className="text-2xl font-semibold">Kahn</span>
</div>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
              Construindo com tecnologia, entregando com paixão. Especialistas em Steel Frame democratizando a construção de qualidade no Brasil.
            </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-white transition" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-gray-400 hover:text-white transition" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-gray-400 hover:text-white transition" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
</div>

<div>
<h4 className="font-semibold mb-6">Navegação</h4>
<div className="space-y-3 text-sm text-gray-400">
<a className="block hover:text-white transition" href="#vantagens">Vantagens</a>
<a className="block hover:text-white transition" href="#processo">Como Funciona</a>
<a className="block hover:text-white transition" href="#projetos">Portfólio</a>
<a className="block hover:text-white transition" href="#faq">Dúvidas Frequentes</a>
</div>
</div>

<div>
<h4 className="font-semibold mb-6">Contato</h4>
<div className="space-y-3 text-sm text-gray-400">
<p className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="phone"></i> (XX) XXXXX-XXXX</p>
<p className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="mail"></i> contato@kahn.com.br</p>
<p className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="map-pin"></i> Seu endereço completo</p>
</div>
</div>

<div>
<h4 className="font-semibold mb-6">Atendimento</h4>
<div className="space-y-3 text-sm text-gray-400">
<p>Segunda a Sexta: 8h às 18h</p>
<p>Sábado: 9h às 13h</p>
<a className="inline-block mt-4 bg-white/10 px-4 py-2 rounded-lg text-white hover:bg-white/20 transition text-xs font-semibold" href="#contato">Área do Cliente</a>
</div>
</div>
</div>
<div className="border-t border-gray-800 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
<p>© 2025 Construtora Kahn. Todos os direitos reservados.</p>
<div className="flex gap-6">
<a className="hover:text-white transition" href="#">Privacidade</a>
<a className="hover:text-white transition" href="#">Termos</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
