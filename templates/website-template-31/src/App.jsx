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



    (() => {
        'use strict';

        // ===== Constants =====
        const SELECTORS = {
            header: '#header',
            menuOverlay: '#menu-overlay',
            menuOpenBtn: '#menu-open-btn',
            menuCloseBtn: '#menu-close-btn',
            menuImages: '#menu-images',
            heroSection: '#hero-section',
            heroContent: '#hero-content',
            heroImageWrapper: '#hero-image-wrapper',
            heroOverlay: '#hero-overlay',
            videoGradient: '#video-gradient',
            videoText: '#video-text',
            scrollIndicator: '#scroll-indicator',
            sliderTrack: '#cards-track',
            sliderDots: '#slider-dots',
            prevSlide: '#prev-slide',
            nextSlide: '#next-slide',
            sliderContainer: '#cards-slider-container',
            backToTop: '#back-to-top',
            currentYear: '#current-year'
        };

        const CONFIG = {
            headerScrollThreshold: 50,
            sliderAutoplayDelay: 5000,
            totalSlides: 5,
            observerThreshold: 0.1,
            observerRootMargin: '0px 0px -50px 0px'
        };

        // ===== State =====
        const state = {
            isMenuOpen: false,
            currentSlide: 0,
            slidesPerView: 2,
            maxSlideIndex: 0,
            sliderInterval: null,
            isHoveringSlider: false,
            ticking: false
        };

        // ===== DOM Cache =====
        const dom = {};

        // ===== Utility Functions =====
        const utils = {
            $(selector) {
                return document.querySelector(selector);
            },

            $$(selector) {
                return document.querySelectorAll(selector);
            },

            clamp(value, min, max) {
                return Math.min(Math.max(value, min), max);
            },

            lerp(start, end, factor) {
                return start + (end - start) * factor;
            },

            easeOutQuart(t) {
                return 1 - Math.pow(1 - t, 4);
            },

            debounce(func, wait) {
                let timeout;
                return function executedFunction(...args) {
                    const later = () => {
                        clearTimeout(timeout);
                        func(...args);
                    };
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                };
            },

            prefersReducedMotion() {
                return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            }
        };

        // ===== Initialize DOM Cache =====
        function initDOMCache() {
            Object.entries(SELECTORS).forEach(([key, selector]) => {
                dom[key] = utils.$(selector);
            });

            dom.collageCards = utils.$$('.collage-card');
            dom.observeFadeElements = utils.$$('.observe-fade');
            dom.menuLinks = utils.$$('#menu-overlay nav a');
            dom.headerBorder = utils.$('.header-border');
            dom.headerLogo = utils.$('.header-logo');
        }

        // ===== Menu Functions =====
        const menu = {
            open() {
                state.isMenuOpen = true;
                dom.menuOverlay.classList.add('is-open');
                dom.menuOverlay.setAttribute('aria-hidden', 'false');
                dom.menuOverlay.removeAttribute('inert');
                dom.menuOpenBtn.setAttribute('aria-expanded', 'true');
                document.body.style.overflow = 'hidden';
                
                // Focus trap
                dom.menuCloseBtn?.focus();
            },

            close() {
                state.isMenuOpen = false;
                dom.menuOverlay.classList.remove('is-open');
                dom.menuOverlay.setAttribute('aria-hidden', 'true');
                dom.menuOverlay.setAttribute('inert', '');
                dom.menuOpenBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                
                // Return focus
                dom.menuOpenBtn?.focus();
            },

            toggle() {
                state.isMenuOpen ? this.close() : this.open();
            }
        };

        // ===== Header Functions =====
        const header = {
            update() {
                const scrollY = window.scrollY;
                const isScrolled = scrollY > CONFIG.headerScrollThreshold;

                dom.header?.classList.toggle('header-scrolled', isScrolled);
                
                if (dom.headerBorder) {
                    dom.headerBorder.classList.toggle('border-white/20', !isScrolled);
                    dom.headerBorder.classList.toggle('border-neutral-200', isScrolled);
                }

                if (dom.headerLogo) {
                    dom.headerLogo.style.filter = isScrolled ? 'none' : 'brightness(0) invert(1)';
                }
            }
        };

        // ===== Hero Animation Functions =====
        const hero = {
            update() {
                if (!dom.heroSection) return;

                const rect = dom.heroSection.getBoundingClientRect();
                const scrollDistance = window.innerHeight;
                const scrolled = Math.max(0, -rect.top);
                const progress = utils.clamp(scrolled / scrollDistance, 0, 1);
                const isMobile = window.innerWidth < 768;

                // Skip heavy animations if user prefers reduced motion
                if (utils.prefersReducedMotion()) {
                    return;
                }

                // Content fade
                if (dom.heroContent) {
                    dom.heroContent.style.opacity = String(1 - progress * 1.5);
                }

                // Image transformation
                if (dom.heroImageWrapper) {
                    const targetWidth = isMobile ? 90 : 30;
                    const targetHeight = isMobile ? 24 : 70;
                    const targetLeft = isMobile ? 5 : 35;
                    const targetTop = isMobile ? 38 : 15;

                    const width = utils.lerp(100, targetWidth, progress);
                    const height = utils.lerp(100, targetHeight, progress);
                    const left = utils.lerp(0, targetLeft, progress);
                    const top = utils.lerp(0, targetTop, progress);
                    const borderRadius = progress * 8;

                    Object.assign(dom.heroImageWrapper.style, {
                        width: `${width}%`,
                        height: `${height}%`,
                        left: `${left}%`,
                        top: `${top}%`,
                        borderRadius: `${borderRadius}px`
                    });
                }

                // Video overlay
                if (dom.videoGradient && dom.videoText) {
                    const videoOpacity = utils.clamp((progress - 0.3) * 2, 0, 1);
                    dom.videoGradient.style.opacity = String(videoOpacity);
                    dom.videoText.style.opacity = String(videoOpacity);
                }

                // Collage cards
                dom.collageCards?.forEach(card => {
                    const direction = card.dataset.direction?.split(',').map(Number) || [0, 0];
                    const cardProgress = utils.clamp((progress - 0.15) * 1.2, 0, 1);
                    const ease = utils.easeOutQuart(cardProgress);

                    const translateX = direction[0] * 50 * (1 - ease);
                    const translateY = direction[1] * 30 * (1 - ease);
                    const scale = 0.8 + 0.2 * ease;

                    card.style.opacity = String(ease);
                    card.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;
                });
            }
        };

        // ===== Scroll Indicator =====
        const scrollIndicator = {
            update() {
                if (!dom.scrollIndicator) return;

                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercent = utils.clamp((window.scrollY / docHeight) * 100, 0, 100);
                dom.scrollIndicator.style.height = `${scrollPercent}%`;
            }
        };

        // ===== Slider Functions =====
        const slider = {
            init() {
                if (!dom.sliderTrack) return;

                this.createDots();
                this.updateParams();
                this.startAutoplay();
                this.bindEvents();
            },

            createDots() {
                if (!dom.sliderDots) return;

                dom.sliderDots.innerHTML = '';
                
                for (let i = 0; i < CONFIG.totalSlides; i++) {
                    const dot = document.createElement('button');
                    dot.className = `w-2 h-2 rounded-full transition-all duration-300 ${i === 0 ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`;
                    dot.setAttribute('aria-label', `Слайд ${i + 1}`);
                    dot.setAttribute('role', 'tab');
                    dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
                    dot.addEventListener('click', () => this.goTo(i));
                    dom.sliderDots.appendChild(dot);
                }
            },

            updateParams() {
                state.slidesPerView = window.innerWidth >= 768 ? 2 : 1;
                state.maxSlideIndex = CONFIG.totalSlides - state.slidesPerView;
                
                if (state.currentSlide > state.maxSlideIndex) {
                    state.currentSlide = state.maxSlideIndex;
                }
            },

            updateUI() {
                if (!dom.sliderTrack) return;

                const gap = 24;
                const card = dom.sliderTrack.children[0];
                if (!card) return;

                const cardWidth = card.offsetWidth;
                const moveAmount = state.currentSlide * (cardWidth + gap);

                dom.sliderTrack.style.transform = `translateX(-${moveAmount}px)`;

                // Update dots
                const dots = dom.sliderDots?.children;
                if (dots) {
                    Array.from(dots).forEach((dot, index) => {
                        const isActive = index === state.currentSlide;
                        dot.className = `w-2 h-2 rounded-full transition-all duration-300 ${isActive ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`;
                        dot.setAttribute('aria-selected', String(isActive));
                    });
                }
            },

            next() {
                state.currentSlide = state.currentSlide < state.maxSlideIndex 
                    ? state.currentSlide + 1 
                    : 0;
                this.updateUI();
            },

            prev() {
                state.currentSlide = state.currentSlide > 0 
                    ? state.currentSlide - 1 
                    : state.maxSlideIndex;
                this.updateUI();
            },

            goTo(index) {
                state.currentSlide = Math.min(index, state.maxSlideIndex);
                this.updateUI();
            },

            startAutoplay() {
                this.stopAutoplay();
                state.sliderInterval = setInterval(() => {
                    if (!state.isHoveringSlider) {
                        this.next();
                    }
                }, CONFIG.sliderAutoplayDelay);
            },

            stopAutoplay() {
                if (state.sliderInterval) {
                    clearInterval(state.sliderInterval);
                    state.sliderInterval = null;
                }
            },

            bindEvents() {
                dom.prevSlide?.addEventListener('click', () => this.prev());
                dom.nextSlide?.addEventListener('click', () => this.next());

                dom.sliderContainer?.addEventListener('mouseenter', () => {
                    state.isHoveringSlider = true;
                    this.stopAutoplay();
                });

                dom.sliderContainer?.addEventListener('mouseleave', () => {
                    state.isHoveringSlider = false;
                    this.startAutoplay();
                });
            }
        };

        // ===== Intersection Observer =====
        const observers = {
            init() {
                const fadeObserver = new IntersectionObserver(
                    (entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('is-visible');
                                fadeObserver.unobserve(entry.target);
                            }
                        });
                    },
                    {
                        threshold: CONFIG.observerThreshold,
                        rootMargin: CONFIG.observerRootMargin
                    }
                );

                dom.observeFadeElements?.forEach(el => fadeObserver.observe(el));
            }
        };

        // ===== Scroll Handler =====
        function handleScroll() {
            if (state.ticking) return;

            state.ticking = true;

            requestAnimationFrame(() => {
                header.update();
                hero.update();
                scrollIndicator.update();
                state.ticking = false;
            });
        }

        // ===== Event Listeners =====
        function bindEvents() {
            // Menu
            dom.menuOpenBtn?.addEventListener('click', () => menu.open());
            dom.menuCloseBtn?.addEventListener('click', () => menu.close());

            // Close menu on link click
            dom.menuLinks?.forEach(link => {
                link.addEventListener('click', () => menu.close());
            });

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && state.isMenuOpen) {
                    menu.close();
                }
            });

            // Scroll
            window.addEventListener('scroll', handleScroll, { passive: true });

            // Resize
            const handleResize = utils.debounce(() => {
                slider.updateParams();
                slider.updateUI();
                handleScroll();
            }, 150);

            window.addEventListener('resize', handleResize);

            // Back to top
            dom.backToTop?.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            // Update current year
            if (dom.currentYear) {
                dom.currentYear.textContent = new Date().getFullYear().toString();
            }
        }

        // ===== Initialize =====
        function init() {
            initDOMCache();
            bindEvents();
            observers.init();
            slider.init();
            handleScroll();
        }

        // ===== Start =====
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
    })();
    
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
      

<a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:bg-green-600 focus:text-white focus:px-4 focus:py-2 focus:rounded" href="#main-content">
        Перейти к основному содержимому
    </a>

<header className="fixed top-0 left-0 right-0 z-50 py-5 pointer-events-none transition-colors duration-300" id="header" role="banner">
<div className="header-bg absolute inset-0 bg-white/95 backdrop-blur-md border-b border-neutral-100"></div>
<div className="relative max-w-screen-2xl mx-auto px-6 lg:px-10 pointer-events-auto">
<div className="flex items-center justify-between">

<a aria-label="Северная Олива - На главную" className="flex items-center gap-3 z-50 relative" href="/">
<img alt="Северная Олива" className="header-logo h-8 w-auto object-contain transition-all duration-300" height="32" loading="eager" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7cd2626d-0185-4c9d-bbd5-e20389921e7e_320w.png" style={{filter: 'brightness(0) invert(1)'}} width="120"/>
</a>

<nav aria-label="Основная навигация" className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="header-link-text nav-link-hover relative text-xs uppercase tracking-widest font-medium py-2" href="#about">О компании</a>
<a className="header-link-text nav-link-hover relative text-xs uppercase tracking-widest font-medium py-2" href="#seeds">Семена амаранта</a>
<a className="header-link-text nav-link-hover relative text-xs uppercase tracking-widest font-medium py-2" href="#products">Продукция</a>
<a className="header-link-text nav-link-hover relative text-xs uppercase tracking-widest font-medium py-2" href="#blog">Блог</a>
<a className="header-link-text nav-link-hover relative text-xs uppercase tracking-widest font-medium py-2" href="#reviews">Отзывы</a>
<a className="header-link-text nav-link-hover relative text-xs uppercase tracking-widest font-medium py-2" href="#contacts">Контакты</a>
</nav>

<div className="flex items-center gap-6 z-50 relative">

<div aria-label="Выбор языка" className="hidden sm:flex items-center gap-4 border-r border-white/20 pr-6 mr-2 transition-colors duration-300 header-border" role="navigation">
<a aria-current="page" className="header-link-text text-xs tracking-widest font-bold" href="#" lang="ru">RU</a>
<a className="header-link-text text-xs tracking-widest opacity-60 hover:opacity-100 transition-opacity" href="#" lang="en">EN</a>
<a className="header-link-text text-xs tracking-widest opacity-60 hover:opacity-100 transition-opacity" href="#" lang="zh">CH</a>
</div>

<button aria-controls="menu-overlay" aria-expanded="false" aria-label="Открыть меню" className="group flex flex-col cursor-pointer w-8 h-8 gap-1.5 justify-center" id="menu-open-btn" type="button">
<span className="burger-line block w-full h-px bg-white transition-all duration-300 group-hover:w-2/3 ml-auto"></span>
<span className="burger-line block w-full h-px bg-white transition-all duration-300"></span>
</button>
</div>
</div>
</div>
</header>

<aside aria-hidden="true" className="fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6 mix-blend-difference">
<span className="text-xs font-light text-white tracking-widest">01</span>
<div className="w-px h-32 bg-white/30 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full bg-white transition-all duration-100 ease-out" id="scroll-indicator" style={{height: '0%'}}></div>
</div>
<span className="text-xs font-light text-white tracking-widest">02</span>
</aside>

<div aria-hidden="true" aria-label="Главное меню" aria-modal="true" className="menu-overlay fixed inset-0 z-[100] flex bg-stone-100" id="menu-overlay" inert="" role="dialog">

<div className="hidden md:block w-1/2 h-full relative overflow-hidden">
<div className="absolute inset-0" id="menu-images">
<img alt="" className="menu-image is-active absolute inset-0 w-full h-full object-cover" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8d3ba76-5100-4964-a9ea-7bc1a82313a4_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-black/10"></div>
<div className="absolute top-10 left-10">
<img alt="" className="h-6 w-auto opacity-90 object-cover" height="24" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0a0da05-4bb0-4d86-97c4-6e366c61f580_320w.png" width="90"/>
</div>
</div>

<div className="w-full md:w-1/2 flex flex-col h-full overflow-y-auto">
<div className="flex justify-end p-6 lg:p-10">
<button aria-label="Закрыть меню" className="group p-2 hover:bg-black/5 rounded-full transition-colors cursor-pointer" id="menu-close-btn" type="button">
<svg aria-hidden="true" className="text-neutral-800 group-hover:rotate-90 transition-transform duration-300" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<div className="flex-1 flex flex-col justify-center px-6 lg:px-16 xl:px-20 max-w-2xl">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-8 font-medium">Навигация</p>
<nav aria-label="Меню навигации">
<ul className="space-y-0" role="list">
<li className="menu-item border-b border-neutral-200/60">
<a className="group flex items-center justify-between py-4 link-underline" href="#about">
<span className="text-2xl lg:text-3xl font-medium text-neutral-800 group-hover:text-black transition-colors tracking-tight">О компании</span>
<svg aria-hidden="true" className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
<li className="menu-item border-b border-neutral-200/60">
<a className="group flex items-center justify-between py-4 link-underline" href="#seeds">
<span className="text-2xl lg:text-3xl font-medium text-neutral-800 group-hover:text-black transition-colors tracking-tight">Семена амаранта</span>
<svg aria-hidden="true" className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
<li className="menu-item border-b border-neutral-200/60">
<a className="group flex items-center justify-between py-4 link-underline" href="#products">
<span className="text-2xl lg:text-3xl font-medium text-neutral-800 group-hover:text-black transition-colors tracking-tight">Продукция</span>
<svg aria-hidden="true" className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
<li className="menu-item border-b border-neutral-200/60">
<a className="group flex items-center justify-between py-4 link-underline" href="#blog">
<span className="text-2xl lg:text-3xl font-medium text-neutral-800 group-hover:text-black transition-colors tracking-tight">Блог</span>
<svg aria-hidden="true" className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
<li className="menu-item border-b border-neutral-200/60">
<a className="group flex items-center justify-between py-4 link-underline" href="#reviews">
<span className="text-2xl lg:text-3xl font-medium text-neutral-800 group-hover:text-black transition-colors tracking-tight">Отзывы</span>
<svg aria-hidden="true" className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
<li className="menu-item border-b border-neutral-200/60">
<a className="group flex items-center justify-between py-4 link-underline" href="#contacts">
<span className="text-2xl lg:text-3xl font-medium text-neutral-800 group-hover:text-black transition-colors tracking-tight">Контакты</span>
<svg aria-hidden="true" className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
</ul>
</nav>

<div className="mt-12 pt-8 border-t border-neutral-200">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-4 font-medium">Связь с нами</p>
<address className="not-italic space-y-2">
<a className="block text-sm font-medium text-neutral-800 hover:text-neutral-500 transition-colors" href="tel:88007008181">8 800 700 81 81</a>
<a className="block text-sm font-medium text-neutral-800 hover:text-neutral-500 transition-colors" href="mailto:info@semenaamaranta.ru">info@semenaamaranta.ru</a>
</address>
</div>
</div>
</div>
</div>

<main id="main-content">

<section aria-label="Главный баннер" className="relative" id="hero-section" style={{height: '250vh'}}>
<div className="sticky top-0 h-screen w-full overflow-hidden">

<div className="absolute inset-0">
<div className="absolute inset-0 overflow-hidden will-change-transform" id="hero-image-wrapper">
<img alt="Поле амаранта на закате" className="absolute inset-0 w-full h-full object-cover animate-breathe" decoding="async" fetchpriority="high" loading="eager" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8d3ba76-5100-4964-a9ea-7bc1a82313a4_3840w.jpg"/>
<div className="absolute inset-0 bg-black/40 transition-opacity duration-500" id="hero-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-500" id="video-gradient"></div>
<div className="absolute bottom-6 left-6 opacity-0 transition-opacity duration-500" id="video-text">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-bold mb-2">О компании</p>
<p className="text-2xl lg:text-3xl font-medium text-white tracking-tight mb-2">Северная Олива</p>
<p className="text-xs uppercase tracking-widest text-white/80">Лидер в возделывании и исследовании амаранта</p>
</div>
</div>
</div>

<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<article className="collage-card absolute left-3 right-auto top-[13%] md:left-[8%] md:top-[8%] w-[calc(50%-1rem)] h-[22%] md:w-[24%] md:h-[38%] rounded overflow-hidden shadow-2xl" data-direction="-1,-1">
<img alt="Семена амаранта элитной репродукции" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa31d635-3237-4ed2-858c-5ec42068e222_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5">
<p className="text-[10px] md:text-xs uppercase tracking-widest text-white/80 leading-relaxed">Семена амаранта: Элита</p>
</div>
</article>
<article className="collage-card absolute right-3 left-auto top-[13%] md:right-auto md:left-[8%] md:top-[50%] w-[calc(50%-1rem)] h-[22%] md:w-[24%] md:h-[24%] rounded overflow-hidden shadow-2xl" data-direction="-1,1">
<img alt="Продукция из амаранта" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7fd9648-721b-497f-a38e-2ace6245dc03_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5">
<p className="text-[10px] md:text-xs uppercase tracking-widest text-white/80 leading-relaxed">Продукция компании</p>
</div>
</article>
<article className="collage-card absolute left-3 right-auto bottom-[13%] top-auto md:left-auto md:right-[8%] md:bottom-[50%] w-[calc(50%-1rem)] h-[22%] md:w-[24%] md:h-[24%] rounded overflow-hidden shadow-2xl" data-direction="1,-1">
<img alt="Научное сотрудничество" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1c4fa0c-ce16-4ed3-ae1b-db525748c93e_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5">
<p className="text-[10px] md:text-xs uppercase tracking-widest text-white/80 leading-relaxed">Сотрудничество с НИИ</p>
</div>
</article>
<article className="collage-card absolute right-3 left-auto bottom-[13%] top-auto md:right-[8%] md:bottom-[8%] w-[calc(50%-1rem)] h-[22%] md:w-[24%] md:h-[38%] rounded overflow-hidden shadow-2xl" data-direction="1,1">
<img alt="Поддержка фермеров" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb074d68-e7a8-4698-ac04-858d429248c9_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5">
<p className="text-[10px] md:text-xs uppercase tracking-widest text-white/80 leading-relaxed">Поддержка фермеров</p>
</div>
</article>
</div>

<div className="absolute inset-0 flex flex-col will-change-transform" id="hero-content">

<div aria-hidden="true" className="absolute inset-0 grid grid-cols-4 pointer-events-none">
<div className="border-r border-white/10"></div>
<div className="border-r border-white/10 hidden md:block"></div>
<div className="border-r border-white/10"></div>
<div></div>
</div>

<div className="flex-1 flex pr-6 pl-6 items-center justify-center">
<div className="text-center translate-y-8">
<h1 className="text-[16vw] md:text-[12vw] lg:text-[9vw] leading-none animate-fade-up animation-delay-500 font-medium text-white tracking-tight opacity-0 mix-blend-overlay">
                                Амарант
                            </h1>
<p className="uppercase animate-fade-up animation-delay-700 text-lg md:text-xl font-semibold text-zinc-50/90 tracking-widest opacity-0 mt-6 md:mt-8 mb-8 md:mb-10">
                                Будущее здорового питания и кормопроизводства
                            </p>

<div className="animate-fade-up animation-delay-1000 opacity-0 mt-8">
<div className="flex flex-col sm:flex-row items-center justify-center gap-8">
<a className="cta-button group inline-flex items-center gap-3 hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm font-semibold text-white rounded-full py-3 px-5 shadow-lg tracking-wide uppercase bg-transparent border border-white hover:border-white/80" href="#products">
<span className="z-10 relative">Наша продукция</span>
<span className="relative z-10 inline-flex items-center justify-center w-6 h-6 bg-white/20 rounded-full">
<svg aria-hidden="true" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</a>
<a className="cta-button group inline-flex items-center gap-3 hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm font-semibold text-white rounded-full py-3 px-5 shadow-lg tracking-wide uppercase bg-green-600" href="#about">
<span className="z-10 relative">Семена амаранта</span>
<span className="relative z-10 inline-flex items-center justify-center w-6 h-6 bg-white/20 rounded-full">
<svg aria-hidden="true" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</a>
</div>
</div>
</div>
</div>

<div className="mt-auto">

<div className="px-6 lg:px-10 mb-6 opacity-0 animate-fade-up animation-delay-1000">
<button aria-label="Включить звук" className="group flex items-center gap-4 cursor-pointer" type="button">
<div aria-hidden="true" className="flex items-center gap-1 h-6">
<span className="sound-bar w-0.5 h-3 bg-white rounded-full"></span>
<span className="sound-bar w-0.5 h-5 bg-white rounded-full"></span>
<span className="sound-bar w-0.5 h-2 bg-white/80 rounded-full"></span>
<span className="sound-bar w-0.5 h-4 bg-white rounded-full"></span>
</div>
<span className="text-xs font-medium uppercase tracking-widest text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">Включить звук</span>
</button>
</div>

<div className="border-t border-white/10 bg-black/30 backdrop-blur-sm opacity-0 animate-fade-up animation-delay-1000">
<ul className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10" role="list">
<li className="p-6 lg:py-6 lg:px-8 text-center hover:bg-white/5 transition-colors">
<p className="uppercase leading-relaxed text-[10px] text-white/70 tracking-widest font-semibold">&gt; 20 лет опыта возделывания и исследования</p>
</li>
<li className="p-6 lg:py-6 lg:px-8 text-center hover:bg-white/5 transition-colors">
<p className="uppercase leading-relaxed text-[10px] text-white/70 tracking-widest font-semibold">Патентованные сорта семян собственной селекции</p>
</li>
<li className="p-6 lg:py-6 lg:px-8 text-center hover:bg-white/5 transition-colors">
<p className="uppercase leading-relaxed text-[10px] text-white/70 tracking-widest font-semibold">Собственное производство продукции из амаранта</p>
</li>
<li className="p-6 lg:py-6 lg:px-8 hover:bg-white/5 transition-colors text-center">
<p className="uppercase leading-relaxed text-[10px] text-white/70 tracking-widest font-semibold">Сотрудничество с ведущими научными институтами</p>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="about-title" className="z-10 py-16 lg:py-24 lg:pb-12 bg-white relative" id="about">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">

<div className="observe-fade">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-bold mb-6">Семена амаранта</p>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 leading-[0.95]" id="about-title">
                            Семена собственной селекции
                        </h2>
<div className="mt-10 hidden lg:block">
<div className="w-24 h-0.5 bg-neutral-900"></div>
</div>
<div className="mt-8">
<p className="text-xl sm:text-2xl font-medium text-neutral-800 leading-normal mb-8 tracking-tight">
                                Репродукция: Элита<br/>
                                Всхожесть: 99%<br/>
                                Семена сертифицированы.
                            </p>
<a className="cta-button group inline-flex items-center gap-3 hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm font-semibold text-white rounded-full py-3 px-5 shadow-lg tracking-wide uppercase bg-green-600" href="#contact">
<span className="z-10 relative">Купить семена амаранта</span>
<span className="relative z-10 inline-flex items-center justify-center w-6 h-6 bg-white/20 rounded-full">
<svg aria-hidden="true" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</a>
</div>
</div>

<div className="observe-fade">
<figure className="relative aspect-[4/5] rounded-sm overflow-hidden bg-neutral-100">
<img alt="Семена амаранта высшего качества" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb0cfc8f-0c7b-4867-9aeb-9cb2823efaf7_1600w.png"/>
<figcaption className="absolute bottom-6 left-6 flex gap-2">
<span className="px-3 py-1 bg-white/90 backdrop-blur text-neutral-900 flex items-center justify-center text-[10px] font-bold tracking-widest uppercase shadow-sm rounded-sm">Ведущие институты</span>
<span className="px-3 py-1 bg-white/90 backdrop-blur text-neutral-900 flex items-center justify-center text-[10px] font-bold tracking-widest uppercase shadow-sm rounded-sm">Патенты</span>
</figcaption>
</figure>
</div>

<div className="observe-fade lg:pl-8 lg:pr-24">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-bold mb-7">Описание</p>
<div className="w-full h-px bg-neutral-200 mb-2"></div>
<p className="text-sm text-neutral-600 leading-6 text-justify mb-8 font-medium">
                            Амарант — инновационная кормовая культура с высокой засухоустойчивостью и высоким содержанием белка. Он идеально подходит для сбалансированного питания крупного рогатого скота и птиц. Также, растение активно применяется в пищевой, фармацевтической и косметической промышленностях. Наш сорт начал активно использоваться в расширении ассортиментов для здорового питания. Молоко, колбасы, крупы, макаронные изделия, безалкогольные напитки — амарант может использоваться практически в любой отрасли.
                        </p>
<a className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-neutral-900 border-b border-neutral-300 pb-1 hover:border-neutral-900 transition-colors" href="#science">
                            Подробнее
                            <svg aria-hidden="true" className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section aria-labelledby="science-title" className="relative z-10 bg-neutral-50 py-16 lg:py-24" id="science">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="observe-fade order-2 lg:order-1">
<div className="relative">
<figure className="aspect-[4/3] rounded-sm overflow-hidden bg-neutral-200 shadow-2xl">
<img alt="Научные исследования амаранта в лаборатории" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1c4fa0c-ce16-4ed3-ae1b-db525748c93e_800w.jpg"/>
</figure>

<div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white rounded-sm shadow-xl p-6 lg:p-8 max-w-xs">
<div className="flex items-center gap-4 mb-4">
<div aria-hidden="true" className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
<svg className="text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.5"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.5"></path></svg>
</div>
<div>
<p className="text-3xl font-semibold text-neutral-900 tracking-tight">15+</p>
<p className="text-xs text-neutral-500 uppercase tracking-widest font-medium">Патентов</p>
</div>
</div>
<p className="text-sm text-neutral-600 leading-relaxed">Запатентованные сорта и технологии переработки амаранта</p>
</div>

<div aria-hidden="true" className="absolute -top-4 -left-4 w-24 h-24 bg-green-600/10 rounded-sm -z-10"></div>
</div>
</div>

<div className="observe-fade order-1 lg:order-2 lg:pl-8">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-bold mb-6">Научное сотрудничество</p>
<h2 className="text-4xl sm:text-5xl lg:text-5xl font-medium tracking-tight text-neutral-900 mb-8 leading-[1.05]" id="science-title">
                            Партнёрство с ведущими институтами страны
                        </h2>
<div aria-hidden="true" className="w-16 h-0.5 bg-green-600 mb-8"></div>
<p className="text-lg text-neutral-600 leading-relaxed mb-6 font-medium">
                            Мы активно сотрудничаем с ведущими научно-исследовательскими институтами России в области изучения амаранта, его полезных свойств и разработки новых сортов.
                        </p>
<p className="text-sm text-neutral-500 leading-relaxed mb-10">
                            Совместные исследования позволяют нам создавать уникальные сорта с повышенным содержанием сквалена, белка и незаменимых аминокислот. Наши патентованные технологии переработки сохраняют максимум полезных веществ в конечной продукции.
                        </p>

<div className="mb-10">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-bold mb-4">Наши партнёры</p>
<ul className="flex flex-wrap gap-3" role="list">
<li><span className="px-4 py-2 bg-white border border-neutral-200 rounded-sm text-xs font-medium text-neutral-700 shadow-sm inline-block">ВНИИ Растениеводства</span></li>
<li><span className="px-4 py-2 bg-white border border-neutral-200 rounded-sm text-xs font-medium text-neutral-700 shadow-sm inline-block">РАН</span></li>
<li><span className="px-4 py-2 bg-white border border-neutral-200 rounded-sm text-xs font-medium text-neutral-700 shadow-sm inline-block">ТСХА им. Тимирязева</span></li>
<li><span className="px-4 py-2 bg-white border border-neutral-200 rounded-sm text-xs font-medium text-neutral-700 shadow-sm inline-block">ВИР</span></li>
</ul>
</div>

<div className="flex flex-col sm:flex-row items-start gap-4">
<a className="group inline-flex items-center gap-3 hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm font-semibold text-white rounded-full py-3 px-5 shadow-lg tracking-wide uppercase bg-green-600" href="#research">
<span>Узнать о исследованиях</span>
<span className="inline-flex items-center justify-center w-6 h-6 bg-white/20 rounded-full">
<svg aria-hidden="true" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</a>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="products-title" className="relative w-full overflow-hidden" id="products" style={{minHeight: '100vh'}}>

<div aria-hidden="true" className="absolute inset-0 z-0 flex flex-col pointer-events-none">
<div className="h-1/2 w-full bg-white"></div>
<div className="h-1/2 w-full relative">
<img alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.7]" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8d3ba76-5100-4964-a9ea-7bc1a82313a4_3840w.jpg"/>
<div className="absolute inset-0 bg-black/20"></div>
</div>
</div>
<div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-10 py-20 lg:py-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

<div className="observe-fade pt-8 md:pt-32">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-bold mb-6">Наша продукция</p>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 mb-8 leading-[1.1]" id="products-title">
                            Пазл здоровья.
                        </h2>
<div className="space-y-6 max-w-xl">
<p className="text-neutral-600 leading-relaxed font-medium">
                                Ваше тело – 40 триллионов клеток. Каждая мембрана строится из жирных кислот. Омега 3, 6 и 9 из амаранта чистое клеточное топливо. Защищает все клетки, ускоряет обновление, блокирует старение. Это базовая потребность каждой вашей клетки организма.
                            </p>
</div>
<div className="mt-14 lg:mt-24">
<a className="cta-button group inline-flex items-center gap-3 hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm font-semibold text-white rounded-full py-3 px-5 shadow-lg tracking-wide uppercase bg-green-600" href="#contact">
<span className="z-10 relative">Получить консультацию</span>
<span className="relative z-10 inline-flex items-center justify-center w-6 h-6 bg-white/20 rounded-full">
<svg aria-hidden="true" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</a>
</div>
</div>

<div className="observe-fade relative w-full" id="cards-slider-container">
<div className="overflow-hidden w-full pt-6 md:pt-32 lg:pt-48 pb-12 px-4">
<div className="flex gap-6 transition-transform duration-500 ease-out will-change-transform" id="cards-track" role="list">

<article className="slider-card flex-shrink-0 w-full md:w-[calc(50%-12px)] group relative bg-white rounded shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-[450px]">
<div className="h-3/5 overflow-hidden relative">
<img alt="Набор для оздоровления сердца" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a84cf90b-6eec-40d6-ad6c-ad04ef568b50_800w.png"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="h-2/5 p-6 md:p-8 flex flex-col justify-center bg-white relative z-10">
<h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Набор для оздоровления СЕРДЦЕ</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-medium">Высокое содержание незаменимых жирных кислот для здоровья сердца и сосудов.</p>
</div>
</article>

<article className="slider-card flex-shrink-0 w-full md:w-[calc(50%-12px)] group relative bg-white rounded shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-[450px]">
<div className="h-3/5 overflow-hidden relative">
<img alt="Набор для оздоровления мозга" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f551325d-9e3d-4ca4-bf2b-dcbd2bd1e62f_800w.png"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="h-2/5 p-6 md:p-8 flex flex-col justify-center bg-white relative z-10">
<h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Набор для оздоровления МОЗГ</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-medium">Мощная защита клеток организма от окислительного стресса и старения.</p>
</div>
</article>

<article className="slider-card flex-shrink-0 w-full md:w-[calc(50%-12px)] group relative bg-white rounded shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-[450px]">
<div className="h-3/5 overflow-hidden relative">
<img alt="Набор для оздоровления почек" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1177fce-1721-426e-8818-f028c1039524_800w.png"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="h-2/5 p-6 md:p-8 flex flex-col justify-center bg-white relative z-10">
<h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Набор для оздоровления ПОЧКИ</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-medium">Полноценный растительный белок с идеальным аминокислотным профилем.</p>
</div>
</article>

<article className="slider-card flex-shrink-0 w-full md:w-[calc(50%-12px)] group relative bg-white rounded shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-[450px]">
<div className="h-3/5 overflow-hidden relative">
<img alt="Набор для оздоровления печени" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67456745-3f2e-47ac-b680-3a9fe590299b_800w.png"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="h-2/5 p-6 md:p-8 flex flex-col justify-center bg-white relative z-10">
<h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Набор для оздоровления ПЕЧЕНЬ</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-medium">Высокое содержание пищевых волокон для здорового пищеварения.</p>
</div>
</article>

<article className="slider-card flex-shrink-0 w-full md:w-[calc(50%-12px)] group relative bg-white rounded shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-[450px]">
<div className="h-3/5 overflow-hidden relative">
<img alt="Комплексное оздоровление организма" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a84cf90b-6eec-40d6-ad6c-ad04ef568b50_800w.png"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="h-2/5 p-6 md:p-8 flex flex-col justify-center bg-white relative z-10">
<h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Оздоровление всего организма</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-medium">Богатый комплекс витаминов группы B, E и C для иммунитета.</p>
</div>
</article>
</div>
</div>

<div className="mt-10 flex items-center justify-between px-8">
<div aria-label="Слайды продукции" className="flex gap-2" id="slider-dots" role="tablist"></div>
<div className="flex gap-2">
<button aria-label="Предыдущий слайд" className="w-12 h-12 flex items-center justify-center bg-white hover:bg-neutral-100 text-neutral-900 rounded-sm shadow-lg transition-colors duration-300" id="prev-slide">
<svg aria-hidden="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button aria-label="Следующий слайд" className="w-12 h-12 flex items-center justify-center bg-white hover:bg-neutral-100 text-neutral-900 rounded-sm shadow-lg transition-colors duration-300" id="next-slide">
<svg aria-hidden="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="press-title" className="relative z-10 bg-white py-16 lg:py-24" id="press-center">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
<header className="observe-fade mb-12 lg:mb-16">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-bold mb-6">Новости</p>
<h2 className="text-4xl sm:text-5xl lg:text-5xl font-medium tracking-tight text-neutral-900" id="press-title">Пресс-центр</h2>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

<article className="observe-fade news-card group">
<a className="block" href="#">
<figure className="aspect-[4/3] bg-neutral-200 rounded-sm overflow-hidden mb-6">
<img alt="Форум по амаранту в Москве" className="news-image w-full h-full object-cover transition-transform duration-700" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1c4fa0c-ce16-4ed3-ae1b-db525748c93e_800w.jpg"/>
</figure>
<div className="space-y-4">
<p className="text-base font-medium text-neutral-700 leading-relaxed">
                                    11 апреля в Москве прошел ежегодный форум для представителей агробизнеса. В качестве спикеров выступили руководители компании «Северная Олива» с докладом о перспективах амаранта...
                                </p>
<div className="pt-4">
<span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-green-600 hover:text-green-700 transition-colors">
                                        Подробнее
                                        <svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</span>
</div>
</div>
</a>
</article>

<article className="observe-fade news-card group">
<a className="block" href="#">
<figure className="aspect-[4/3] bg-neutral-200 rounded-sm overflow-hidden mb-6">
<img alt="Выставка здорового питания" className="news-image w-full h-full object-cover transition-transform duration-700" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb074d68-e7a8-4698-ac04-858d429248c9_800w.jpg"/>
</figure>
<div className="space-y-4">
<p className="text-base text-neutral-700 leading-relaxed font-medium">
                                    2-5 декабря в Москве команда «Северная Олива» приняла участие в выставке в рамках «Российской недели здорового питания». Мероприятие собрало ведущих производителей...
                                </p>
<div className="pt-4">
<span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-green-600 hover:text-green-700 transition-colors">
                                        Подробнее
                                        <svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</span>
</div>
</div>
</a>
</article>

<article className="observe-fade news-card group">
<a className="block" href="#">
<figure className="aspect-[4/3] bg-neutral-200 rounded-sm overflow-hidden mb-6">
<img alt="Новый сорт амаранта" className="news-image w-full h-full object-cover transition-transform duration-700" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa31d635-3237-4ed2-858c-5ec42068e222_800w.png"/>
</figure>
<div className="space-y-4">
<p className="text-base text-neutral-700 leading-relaxed font-medium">
                                    Компания «Северная Олива» зарегистрировала новый патентованный сорт амаранта с повышенным содержанием сквалена. Разработка велась совместно с ведущими научными институтами России.
                                </p>
<div className="pt-4">
<span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-green-600 hover:text-green-700 transition-colors">
                                        Подробнее
                                        <svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</span>
</div>
</div>
</a>
</article>
</div>
</div>
</section>
</main>

<footer className="relative bg-neutral-900 text-white" role="contentinfo">

<div aria-hidden="true" className="absolute inset-0 opacity-5 pointer-events-none">
<div className="absolute inset-0" style={{backgroundImage: 'url(\'data:image/svg+xml, %3Csvg width=&quot', http: '//www.w3.org/2000/svg&quot'}}></div>
</div>
<div className="relative max-w-screen-2xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-8">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">

<div className="lg:col-span-4">
<a className="inline-block mb-6" href="/">
<img alt="Северная Олива" className="h-10 w-auto object-contain" height="40" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7cd2626d-0185-4c9d-bbd5-e20389921e7e_320w.png" width="150"/>
</a>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-sm">
                        Лидер в возделывании и исследовании амаранта в России. Более 20 лет опыта в производстве высококачественных семян и продукции для здорового питания.
                    </p>

<div className="flex items-center gap-4">
<a aria-label="Telegram" className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-green-600 rounded-full transition-all duration-300 group" href="#">
<svg aria-hidden="true" className="text-neutral-400 group-hover:text-white transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</a>
<a aria-label="WhatsApp" className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-green-600 rounded-full transition-all duration-300 group" href="#">
<svg aria-hidden="true" className="text-neutral-400 group-hover:text-white transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path></svg>
</a>
<a aria-label="ВКонтакте" className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-green-600 rounded-full transition-all duration-300 group" href="#">
<svg aria-hidden="true" className="text-neutral-400 group-hover:text-white transition-colors" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.59 4 8.165c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"></path></svg>
</a>
<a aria-label="YouTube" className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-green-600 rounded-full transition-all duration-300 group" href="#">
<svg aria-hidden="true" className="text-neutral-400 group-hover:text-white transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
</div>

<nav aria-label="Навигация по сайту" className="lg:col-span-2">
<h3 className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-bold mb-6">Навигация</h3>
<ul className="space-y-4" role="list">
<li><a className="footer-link relative text-sm text-neutral-300 hover:text-white transition-colors" href="#about">О компании</a></li>
<li><a className="footer-link relative text-sm text-neutral-300 hover:text-white transition-colors" href="#seeds">Семена амаранта</a></li>
<li><a className="footer-link relative text-sm text-neutral-300 hover:text-white transition-colors" href="#products">Продукция</a></li>
<li><a className="footer-link relative text-sm text-neutral-300 hover:text-white transition-colors" href="#blog">Блог</a></li>
<li><a className="footer-link relative text-sm text-neutral-300 hover:text-white transition-colors" href="#reviews">Отзывы</a></li>
</ul>
</nav>

<nav aria-label="Продукция" className="lg:col-span-2">
<h3 className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-bold mb-6">Продукция</h3>
<ul className="space-y-4" role="list">
<li><a className="footer-link relative text-sm text-neutral-300 hover:text-white transition-colors" href="#">Масло амаранта</a></li>
<li><a className="footer-link relative text-sm text-neutral-300 hover:text-white transition-colors" href="#">Мука амаранта</a></li>
<li><a className="footer-link relative text-sm text-neutral-300 hover:text-white transition-colors" href="#">Крупа амаранта</a></li>
<li><a className="footer-link relative text-sm text-neutral-300 hover:text-white transition-colors" href="#">Наборы здоровья</a></li>
<li><a className="footer-link relative text-sm text-neutral-300 hover:text-white transition-colors" href="#">Для животных</a></li>
</ul>
</nav>

<nav aria-label="Информация" className="lg:col-span-2">
<h3 className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-bold mb-6">Информация</h3>
<ul className="space-y-4" role="list">
<li><a className="footer-link relative text-sm text-neutral-300 hover:text-white transition-colors" href="#">Доставка и оплата</a></li>
<li><a className="footer-link relative text-sm text-neutral-300 hover:text-white transition-colors" href="#">Сертификаты</a></li>
<li><a className="footer-link relative text-sm text-neutral-300 hover:text-white transition-colors" href="#">Партнёрам</a></li>
<li><a className="footer-link relative text-sm text-neutral-300 hover:text-white transition-colors" href="#">Вакансии</a></li>
<li><a className="footer-link relative text-sm text-neutral-300 hover:text-white transition-colors" href="#">FAQ</a></li>
</ul>
</nav>

<div className="lg:col-span-2">
<h3 className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-bold mb-6">Контакты</h3>
<address className="not-italic space-y-5">
<div>
<p className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Телефон</p>
<a className="text-lg font-medium text-white hover:text-green-400 transition-colors tracking-tight" href="tel:+78007008181">8 800 700-81-81</a>
<p className="text-xs text-neutral-500 mt-1">Бесплатно по России</p>
</div>
<div>
<p className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Email</p>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="mailto:info@semenaamaranta.ru">info@semenaamaranta.ru</a>
</div>
<div>
<p className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Адрес</p>
<p className="text-sm text-neutral-300 leading-relaxed">Россия, г. Воронеж,<br/>ул. Примерная, д. 123</p>
</div>
</address>
</div>
</div>

<div className="py-12 border-b border-white/10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Подпишитесь на новости</h3>
<p className="text-sm text-neutral-400">Получайте информацию о новых продуктах и специальных предложениях</p>
</div>
<form action="#" className="flex flex-col sm:flex-row gap-3" method="POST">
<label className="sr-only" htmlFor="email-input">Email адрес</label>
<input autocomplete="email" className="flex-1 bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-green-500 transition-colors" id="email-input" name="email" placeholder="Введите ваш email" required="" type="email"/>
<button className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold uppercase tracking-widest px-6 py-3 rounded-sm transition-colors" type="submit">
                            Подписаться
                            <svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
</div>
</div>

<div className="pt-8">
<div className="flex flex-col lg:flex-row items-center justify-between gap-6">
<div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
<p className="text-xs text-neutral-500">© <span id="current-year">2024</span> ООО «Северная Олива». Все права защищены.</p>
<span aria-hidden="true" className="hidden sm:block text-neutral-700">|</span>
<p className="text-xs text-neutral-500">ИНН: 1234567890 | ОГРН: 1234567890123</p>
</div>
<nav aria-label="Юридическая информация" className="flex flex-wrap items-center justify-center gap-6">
<a className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Политика конфиденциальности</a>
<a className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Пользовательское соглашение</a>
<a className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Карта сайта</a>
</nav>
</div>

<div className="flex justify-center mt-8">
<button aria-label="Вернуться наверх страницы" className="group flex items-center gap-2 text-xs text-neutral-500 hover:text-white uppercase tracking-widest transition-colors cursor-pointer" id="back-to-top" type="button">
<svg aria-hidden="true" className="group-hover:-translate-y-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
                        Наверх
                    </button>
</div>
</div>
</div>
</footer>



    </>
  );
}
