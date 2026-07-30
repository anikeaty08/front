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
      
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'mono': ['JetBrains Mono', 'monospace'],
                        'sans': ['Inter', 'sans-serif'],
                    }
                }
            }
        }
    


        // Contact Modal Functions
        function openContactModal() {
            document.getElementById('contactModal').classList.remove('hidden');
        }

        function closeContactModal() {
            document.getElementById('contactModal').classList.add('hidden');
        }

        // Close modal when clicking outside
        document.getElementById('contactModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeContactModal();
            }
        });

        // Scrollreveal animation
        const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
        
        const revealOnScroll = () => {
            scrollRevealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        };
        
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Check on page load

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form submission handler
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitBtn = document.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = 'Invio in corso...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '✓ Inviato!';
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 1500);
        });

        // Contact modal form handler
        document.querySelector('#contactModal form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = 'Invio...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '✓ Inviato!';
                setTimeout(() => {
                    closeContactModal();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 1500);
            }, 1000);
        });

        // Add dynamic pricing calculator (optional enhancement)
        const serviceSelect = document.querySelector('select[required]');
        if (serviceSelect) {
            serviceSelect.addEventListener('change', function() {
                const prices = {
                    'web-design': '€3.500 - €8.000',
                    'ecommerce': '€5.500 - €15.000',
                    'mobile-app': '€8.500 - €25.000',
                    'brand-identity': '€2.500 - €6.000',
                    'digital-marketing': '€1.800 - €5.000',
                    'consulting': '€1.200 - €3.500'
                };
                
                const selectedService = this.value;
                if (selectedService && prices[selectedService]) {
                    // You could display estimated price range here
                    console.log(`Prezzo stimato: ${prices[selectedService]}`);
                }
            });
        }

        // Intersection Observer for more advanced scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all scroll reveal elements
        scrollRevealElements.forEach(element => {
            observer.observe(element);
        });

        // Add parallax effect to geometric shapes
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.geometric-shape');
            
            parallaxElements.forEach((element, index) => {
                const speed = (index + 1) * 0.1;
                element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg)`;
            });
        });

        // Add typing effect to hero title (optional enhancement)
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            
            type();
        }

        // Mobile menu toggle (if needed)
        const mobileMenuBtn = document.querySelector('.md\\:hidden button');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', function() {
                // Add mobile menu functionality here
                console.log('Mobile menu clicked');
            });
        }

        // Add loading state to form inputs
        document.querySelectorAll('.form-input').forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
        });

        // Service card interaction enhancements
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.zIndex = '10';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.zIndex = '1';
            });
        });

        // Timeline item progressive reveal
        const timelineItems = document.querySelectorAll('.timeline-item');
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }, index * 200);
                }
            });
        }, { threshold: 0.3 });

        timelineItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-50px)';
            item.style.transition = 'all 0.6s ease';
            timelineObserver.observe(item);
        });

        // Add escape key handler for modal
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeContactModal();
            }
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
      

<div className="modal fixed inset-0 bg-black/50 flex items-center justify-center z-50 hidden" id="contactModal">
<div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4">
<h3 className="text-2xl font-semibold mb-6">Iniziamo un progetto</h3>
<form className="space-y-4">
<input className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-black" placeholder="Nome" type="text" />
<input className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-black" placeholder="Email" type="email" />
<textarea className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-black resize-none" placeholder="Descrivi il tuo progetto" rows="4"></textarea>
<div className="flex gap-4">
<button className="flex-1 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors" onClick={(e) => { closeContactModal() }} type="button">
                        Annulla
                    </button>
<button className="flex-1 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors" type="submit">
                        Invia
                    </button>
</div>
</form>
</div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 animate-blur-in nav-element">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<div className="text-xl font-medium tracking-tight">Studio</div>
<div className="hidden md:flex items-center space-x-8">
<a className="hover:text-black transition-colors duration-200 font-light text-gray-600" href="#work">Portfolio</a>
<a className="text-gray-600 hover:text-black transition-colors duration-200 font-light" href="#services">Servizi</a>
<a className="hover:text-black transition-colors duration-200 font-light text-gray-600" href="#process">Processo</a>
<a className="hover:text-black transition-colors duration-200 font-light text-gray-600" href="#about">About</a>
</div>
<div className="hidden md:block">
<button className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300" onClick={(e) => { openContactModal() }}>
                        Contattaci
                    </button>
</div>
<div className="md:hidden">
<button className="p-2 text-gray-600 hover:text-black transition-colors">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</nav>

<section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">

<div className="hero-grid absolute inset-0 w-full h-full"></div>

<div className="geometric-shape shape-1 animate-blur-in hero-element-4"></div>
<div className="geometric-shape shape-2 animate-blur-in hero-element-4"></div>
<div className="geometric-shape shape-3 animate-blur-in hero-element-4"></div>
<div className="geometric-shape shape-4 animate-blur-in hero-element-4"></div>
<div className="max-w-6xl mx-auto text-center relative z-10">
<div className="inline-block px-6 py-3 bg-black/5 backdrop-blur-sm rounded-full text-sm font-medium mb-8 animate-blur-in hero-element-1">
                ✨ Design Studio Digitale
            </div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 animate-blur-in hero-element-1">
<span className="block">Trasformiamo</span>
<span className="block">
<span className="text-gray-400">le tue</span>
<em className="text-black not-italic bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Idee</em>
</span>
<span className="block">in Esperienze</span>
</h1>
<p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto mb-12 leading-relaxed animate-blur-in hero-element-2">
                Progettiamo interfacce digitali che emozionano, convertono e creano connessioni autentiche tra brand e utenti attraverso design strategico e sviluppo all'avanguardia.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-blur-in hero-element-3">
<button className="px-8 py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105" onClick={(e) => { openContactModal() }}>
                    Inizia il Progetto →
                </button>
<button className="px-8 py-4 border border-gray-300 text-black rounded-full text-lg font-medium hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md" onClick={(e) => { document.getElementById('work').scrollIntoView({behavior: 'smooth'}) }}>
                    Scopri i Lavori
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-blur-in hero-element-4">
<div className="text-center">
<div className="text-3xl font-semibold mb-2">50+</div>
<div className="text-gray-600 font-light">Progetti Completati</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold mb-2">98%</div>
<div className="text-gray-600 font-light">Clienti Soddisfatti</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold mb-2">5+</div>
<div className="text-gray-600 font-light">Anni di Esperienza</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-gray-50" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<div className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6 scroll-reveal">
                    I NOSTRI SERVIZI
                </div>
<h2 className="text-5xl md:text-6xl font-light tracking-tight mb-8 scroll-reveal scroll-reveal-delay-1">
                    Soluzioni Complete per il <span className="italic">Digitale</span>
</h2>
<p className="text-xl text-gray-600 font-light max-w-3xl mx-auto scroll-reveal scroll-reveal-delay-2">
                    Dalla strategia al lancio, offriamo servizi integrati per portare la tua visione digitale alla realtà
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="service-card bg-white rounded-3xl p-8 relative scroll-reveal">
<div className="service-number">01</div>
<div className="service-icon w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold mb-4">Web Design & Development</h3>
<p className="text-gray-600 font-light mb-6 leading-relaxed">
                        Siti web responsivi e performanti che convertono visitatori in clienti attraverso UX strategica e design moderno.
                    </p>
<ul className="feature-list space-y-3 mb-8">
<li className="flex items-center text-gray-600">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            Design System & UI Kit
                        </li>
<li className="flex items-center text-gray-600">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            Sviluppo Frontend/Backend
                        </li>
<li className="flex items-center text-gray-600">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            SEO & Performance Optimization
                        </li>
</ul>
<div className="price-tag text-2xl font-semibold mb-4">Da €3.500</div>
<button className="w-full py-3 border border-gray-300 rounded-xl hover:bg-black hover:text-white transition-all duration-300" onClick={(e) => { openContactModal() }}>
                        Richiedi Preventivo
                    </button>
</div>

<div className="service-card bg-white rounded-3xl p-8 relative scroll-reveal scroll-reveal-delay-1">
<div className="service-number">02</div>
<div className="service-icon w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold mb-4">E-commerce Solutions</h3>
<p className="text-gray-600 font-light mb-6 leading-relaxed">
                        Piattaforme e-commerce complete con gestione inventory, pagamenti sicuri e analytics avanzati.
                    </p>
<ul className="feature-list space-y-3 mb-8">
<li className="flex items-center text-gray-600">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            Shopify, WooCommerce, Custom
                        </li>
<li className="flex items-center text-gray-600">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            Payment Gateway Integration
                        </li>
<li className="flex items-center text-gray-600">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            Inventory & Order Management
                        </li>
</ul>
<div className="price-tag text-2xl font-semibold mb-4">Da €5.500</div>
<button className="w-full py-3 border border-gray-300 rounded-xl hover:bg-black hover:text-white transition-all duration-300" onClick={(e) => { openContactModal() }}>
                        Richiedi Preventivo
                    </button>
</div>

<div className="service-card bg-white rounded-3xl p-8 relative scroll-reveal scroll-reveal-delay-2">
<div className="service-number">03</div>
<div className="service-icon w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold mb-4">Mobile Apps</h3>
<p className="text-gray-600 font-light mb-6 leading-relaxed">
                        App native e cross-platform per iOS e Android con focus su usabilità e performance eccellenti.
                    </p>
<ul className="feature-list space-y-3 mb-8">
<li className="flex items-center text-gray-600">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            React Native, Flutter, Native
                        </li>
<li className="flex items-center text-gray-600">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            App Store Optimization
                        </li>
<li className="flex items-center text-gray-600">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            Backend API Integration
                        </li>
</ul>
<div className="price-tag text-2xl font-semibold mb-4">Da €8.500</div>
<button className="w-full py-3 border border-gray-300 rounded-xl hover:bg-black hover:text-white transition-all duration-300" onClick={(e) => { openContactModal() }}>
                        Richiedi Preventivo
                    </button>
</div>

<div className="service-card bg-white rounded-3xl p-8 relative scroll-reveal scroll-reveal-delay-3">
<div className="service-number">04</div>
<div className="service-icon w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 01-4-4V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold mb-4">Brand Identity</h3>
<p className="text-gray-600 font-light mb-6 leading-relaxed">
                        Identità visiva completa che distingue il tuo brand e crea connessioni emotive durature con il target.
                    </p>
<ul className="feature-list space-y-3 mb-8">
<li className="flex items-center text-gray-600">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            Logo Design & Brand Guidelines
                        </li>
<li className="flex items-center text-gray-600">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            Visual Identity System
                        </li>
<li className="flex items-center text-gray-600">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            Brand Strategy & Positioning
                        </li>
</ul>
<div className="price-tag text-2xl font-semibold mb-4">Da €2.500</div>
<button className="w-full py-3 border border-gray-300 rounded-xl hover:bg-black hover:text-white transition-all duration-300" onClick={(e) => { openContactModal() }}>
                        Richiedi Preventivo
                    </button>
</div>

<div className="service-card bg-white rounded-3xl p-8 relative scroll-reveal scroll-reveal-delay-4">
<div className="service-number">05</div>
<div className="service-icon w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold mb-4">Digital Marketing</h3>
<p className="text-gray-600 font-light mb-6 leading-relaxed">
                        Strategie data-driven per aumentare visibilità, engagement e conversioni attraverso canali digitali mirati.
                    </p>
<ul className="feature-list space-y-3 mb-8">
<li className="flex items-center text-gray-600">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            SEO & Content Marketing
                        </li>
<li className="flex items-center text-gray-600">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            Social Media Management
                        </li>
<li className="flex items-center text-gray-600">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            Google Ads & Analytics
                        </li>
</ul>
<div className="price-tag text-2xl font-semibold mb-4">Da €1.800</div>
<button className="w-full py-3 border border-gray-300 rounded-xl hover:bg-black hover:text-white transition-all duration-300" onClick={(e) => { openContactModal() }}>
                        Richiedi Preventivo
                    </button>
</div>

<div className="service-card bg-white rounded-3xl p-8 relative scroll-reveal scroll-reveal-delay-5">
<div className="service-number">06</div>
<div className="service-icon w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold mb-4">Digital Consulting</h3>
<p className="text-gray-600 font-light mb-6 leading-relaxed">
                        Consulenza strategica per ottimizzare la presenza digitale e sviluppare roadmap di crescita sostenibile.
                    </p>
<ul className="feature-list space-y-3 mb-8">
<li className="flex items-center text-gray-600">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            Digital Strategy & Audit
                        </li>
<li className="flex items-center text-gray-600">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            UX/UI Review & Optimization
                        </li>
<li className="flex items-center text-gray-600">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            Technology Stack Consulting
                        </li>
</ul>
<div className="price-tag text-2xl font-semibold mb-4">Da €1.200</div>
<button className="w-full py-3 border border-gray-300 rounded-xl hover:bg-black hover:text-white transition-all duration-300" onClick={(e) => { openContactModal() }}>
                        Richiedi Preventivo
                    </button>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white" id="process">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<div className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6 scroll-reveal">
                    IL NOSTRO PROCESSO
                </div>
<h2 className="text-5xl md:text-6xl font-light tracking-tight mb-8 scroll-reveal scroll-reveal-delay-1">
                    Dalla <span className="italic">Strategia</span> al Successo
                </h2>
<p className="text-xl text-gray-600 font-light max-w-3xl mx-auto scroll-reveal scroll-reveal-delay-2">
                    Un processo strutturato e trasparente che guida ogni progetto verso risultati eccellenti
                </p>
</div>
<div className="timeline-container scroll-reveal scroll-reveal-delay-3">
<div className="timeline-line"></div>

<div className="timeline-item">
<div className="timeline-dot phase-1">01</div>
<div className="timeline-content">
<div className="timeline-arrow"></div>
<div className="timeline-duration">1-2 settimane</div>
<div className="timeline-phase">Discovery</div>
<h3 className="timeline-title">Analisi & Strategia</h3>
<p className="timeline-description">
                            Esploriamo a fondo il tuo business, il target audience e la concorrenza per definire una strategia digitale su misura che garantisca risultati concreti.
                        </p>
<div className="timeline-tags">
<span className="timeline-tag">Ricerca di mercato</span>
<span className="timeline-tag">Analisi competitor</span>
<span className="timeline-tag">User personas</span>
<span className="timeline-tag">Obiettivi KPI</span>
</div>
</div>
</div>

<div className="timeline-item">
<div className="timeline-dot phase-2">02</div>
<div className="timeline-content">
<div className="timeline-arrow"></div>
<div className="timeline-duration">2-3 settimane</div>
<div className="timeline-phase">Design</div>
<h3 className="timeline-title">Concept & Prototipazione</h3>
<p className="timeline-description">
                            Trasformiamo la strategia in wireframe, mockup e prototipi interattivi, creando un'esperienza utente intuitiva e visivamente accattivante.
                        </p>
<div className="timeline-tags">
<span className="timeline-tag">Wireframing</span>
<span className="timeline-tag">UI Design</span>
<span className="timeline-tag">Prototyping</span>
<span className="timeline-tag">Design system</span>
</div>
</div>
</div>

<div className="timeline-item">
<div className="timeline-dot phase-3">03</div>
<div className="timeline-content">
<div className="timeline-arrow"></div>
<div className="timeline-duration">3-6 settimane</div>
<div className="timeline-phase">Development</div>
<h3 className="timeline-title">Sviluppo & Integrazione</h3>
<p className="timeline-description">
                            Implementiamo il design con codice pulito e ottimizzato, integrando tutte le funzionalità necessarie per un'esperienza fluida e performante.
                        </p>
<div className="timeline-tags">
<span className="timeline-tag">Frontend</span>
<span className="timeline-tag">Backend</span>
<span className="timeline-tag">Database</span>
<span className="timeline-tag">API Integration</span>
</div>
</div>
</div>

<div className="timeline-item">
<div className="timeline-dot phase-4">04</div>
<div className="timeline-content">
<div className="timeline-arrow"></div>
<div className="timeline-duration">1-2 settimane</div>
<div className="timeline-phase">Testing</div>
<h3 className="timeline-title">Test & Ottimizzazione</h3>
<p className="timeline-description">
                            Testiamo meticolosamente ogni aspetto del progetto, dalla funzionalità alla user experience, garantendo la massima qualità e performance.
                        </p>
<div className="timeline-tags">
<span className="timeline-tag">QA Testing</span>
<span className="timeline-tag">Performance</span>
<span className="timeline-tag">Usability</span>
<span className="timeline-tag">Cross-browser</span>
</div>
</div>
</div>

<div className="timeline-item">
<div className="timeline-dot phase-5">05</div>
<div className="timeline-content">
<div className="timeline-arrow"></div>
<div className="timeline-duration">1 settimana</div>
<div className="timeline-phase">Launch</div>
<h3 className="timeline-title">Deploy & Go Live</h3>
<p className="timeline-description">
                            Lanciamo il progetto con una strategia di deployment sicura, monitorando attentamente le prime ore per assicurare una transizione senza problemi.
                        </p>
<div className="timeline-tags">
<span className="timeline-tag">Deployment</span>
<span className="timeline-tag">DNS Setup</span>
<span className="timeline-tag">SSL Certificate</span>
<span className="timeline-tag">Monitoring</span>
</div>
</div>
</div>

<div className="timeline-item">
<div className="timeline-dot phase-6">06</div>
<div className="timeline-content">
<div className="timeline-arrow"></div>
<div className="timeline-duration">Continuativo</div>
<div className="timeline-phase">Support</div>
<h3 className="timeline-title">Supporto & Crescita</h3>
<p className="timeline-description">
                            Monitoriamo le performance, forniamo supporto tecnico continuo e proponiamo miglioramenti basati sui dati reali di utilizzo.
                        </p>
<div className="timeline-tags">
<span className="timeline-tag">Manutenzione</span>
<span className="timeline-tag">Analytics</span>
<span className="timeline-tag">Updates</span>
<span className="timeline-tag">Scaling</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="form-section py-32 px-6">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<div className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6 scroll-reveal">
                    INIZIA IL TUO PROGETTO
                </div>
<h2 className="text-5xl md:text-6xl font-light tracking-tight mb-8 scroll-reveal scroll-reveal-delay-1">
                    Richiedi un <span className="italic">Preventivo</span>
</h2>
<p className="text-xl text-gray-600 font-light max-w-3xl mx-auto scroll-reveal scroll-reveal-delay-2">
                    Compila il form per ricevere un preventivo personalizzato entro 24 ore
                </p>
</div>
<div className="service-form-card bg-white rounded-3xl p-8 md:p-12 scroll-reveal scroll-reveal-delay-3">
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Nome *</label>
<input className="form-input w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5" required type="text" />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
<input className="form-input w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5" required type="email" />
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Azienda</label>
<input className="form-input w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5" type="text" />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Telefono</label>
<input className="form-input w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5" type="tel" />
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Servizio richiesto *</label>
<select className="service-select form-input w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5" required>
<option value="">Seleziona un servizio</option>
<option value="web-design">🖥️ Web Design & Development</option>
<option value="ecommerce">🛒 E-commerce Solutions</option>
<option value="mobile-app">📱 Mobile Apps</option>
<option value="brand-identity">🎨 Brand Identity</option>
<option value="digital-marketing">📈 Digital Marketing</option>
<option value="consulting">💡 Digital Consulting</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Budget indicativo</label>
<select className="service-select form-input w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5">
<option value="">Seleziona un range</option>
<option value="1000-3000">€1.000 - €3.000</option>
<option value="3000-5000">€3.000 - €5.000</option>
<option value="5000-10000">€5.000 - €10.000</option>
<option value="10000-20000">€10.000 - €20.000</option>
<option value="20000+">€20.000+</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Descrizione progetto *</label>
<textarea className="form-input w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5 resize-none" placeholder="Raccontaci del tuo progetto, obiettivi e requisiti specifici..." required rows="6"></textarea>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Timeline desiderata</label>
<select className="service-select form-input w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5">
<option value="">Seleziona timeline</option>
<option value="urgent">⚡ Urgente (2-4 settimane)</option>
<option value="standard">⏰ Standard (1-2 mesi)</option>
<option value="flexible">📅 Flessibile (2-3 mesi)</option>
<option value="future">🔮 Progetto futuro (3+ mesi)</option>
</select>
</div>
<div className="flex items-center space-x-3">
<input className="w-5 h-5 text-black border-gray-300 rounded focus:ring-black" required type="checkbox" />
<label className="text-sm text-gray-600">
                            Accetto la <a className="text-black hover:underline" href="#">privacy policy</a> e autorizzo il trattamento dei dati personali *
                        </label>
</div>
<div className="text-center">
<button className="submit-btn px-12 py-4 text-white rounded-xl text-lg font-medium shadow-lg hover:shadow-xl" type="submit">
                            Invia Richiesta →
                        </button>
<p className="text-sm text-gray-500 mt-4">Ti risponderemo entro 24 ore lavorative</p>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-black text-white py-20 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<div className="text-2xl font-medium mb-6">Studio Digitale</div>
<p className="text-gray-400 font-light text-lg leading-relaxed mb-8">
                        Trasformiamo idee in esperienze digitali memorabili attraverso design strategico e sviluppo all'avanguardia.
                    </p>
<div className="flex space-x-6">
<a className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
</svg>
</a>
<a className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
</svg>
</a>
<a className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.749-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"></path>
</svg>
</a>
</div>
</div>
<div>
<h4 className="text-lg font-medium mb-6">Servizi</h4>
<ul className="space-y-4">
<li><a className="text-gray-400 hover:text-white transition-colors font-light" href="#services">Web Design</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors font-light" href="#services">E-commerce</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors font-light" href="#services">Mobile Apps</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors font-light" href="#services">Brand Identity</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors font-light" href="#services">Digital Marketing</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-medium mb-6">Contatti</h4>
<ul className="space-y-4">
<li className="text-gray-400 font-light">📧 hello@studiodigitale.it</li>
<li className="text-gray-400 font-light">📞 +39 02 1234 5678</li>
<li className="text-gray-400 font-light">📍 Milano, Italia</li>
<li className="text-gray-400 font-light">⏰ Lun-Ven 9:00-18:00</li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400 font-light text-sm">
                    © 2024 Studio Digitale. Tutti i diritti riservati.
                </p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-gray-400 hover:text-white transition-colors text-sm font-light" href="#">Privacy Policy</a>
<a className="text-gray-400 hover:text-white transition-colors text-sm font-light" href="#">Cookie Policy</a>
<a className="text-gray-400 hover:text-white transition-colors text-sm font-light" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
