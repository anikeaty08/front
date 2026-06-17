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



    (function() {
      'use strict';
      
      // ========== DOM Elements ==========
      const elements = {
        header: document.getElementById('header'),
        menuOverlay: document.getElementById('menu-overlay'),
        menuOpenBtn: document.getElementById('menu-open-btn'),
        menuCloseBtn: document.getElementById('menu-close-btn'),
        menuImages: document.getElementById('menu-images'),
        heroSection: document.getElementById('hero-section'),
        heroContent: document.getElementById('hero-content'),
        heroImageWrapper: document.getElementById('hero-image-wrapper'),
        heroOverlay: document.getElementById('hero-overlay'),
        videoGradient: document.getElementById('video-gradient'),
        videoText: document.getElementById('video-text'),
        scrollIndicator: document.getElementById('scroll-indicator'),
        collageCards: document.querySelectorAll('.collage-card'),
        counters: document.querySelectorAll('.counter'),
        // Note: Using a getter or re-querying inside functions is better for dynamic content, 
        // but since these exist on load, querySelectorAll is fine. 
        // We will query observe-fade dynamically in the observer setup to be safe.
        menuLinks: document.querySelectorAll('#menu-overlay nav a[data-image]')
      };
      
      // ========== State ==========
      let isMenuOpen = false;
      let countersAnimated = false;
      let ticking = false;
      
      // ========== Utility Functions ==========
      const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
      
      const lerp = (start, end, factor) => start + (end - start) * factor;
      
      const formatNumber = (num) => num.toLocaleString('ru-RU');
      
      const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
      
      // ========== Menu Functions ==========
      function openMenu() {
        isMenuOpen = true;
        elements.menuOverlay.classList.add('is-open');
        elements.menuOverlay.setAttribute('aria-hidden', 'false');
        elements.menuOpenBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
      
      function closeMenu() {
        isMenuOpen = false;
        elements.menuOverlay.classList.remove('is-open');
        elements.menuOverlay.setAttribute('aria-hidden', 'true');
        elements.menuOpenBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
      
      function handleMenuImageHover(e) {
        const imageUrl = e.currentTarget.dataset.image;
        if (!imageUrl || !elements.menuImages) return;
        
        const currentImage = elements.menuImages.querySelector('.menu-image.is-active');
        if (currentImage && currentImage.src === imageUrl) return;
        
        const newImage = document.createElement('img');
        newImage.src = imageUrl;
        newImage.alt = '';
        newImage.className = 'menu-image absolute inset-0 w-full h-full object-cover';
        newImage.setAttribute('loading', 'lazy');
        
        elements.menuImages.appendChild(newImage);
        
        // Trigger reflow
        void newImage.offsetWidth;
        
        newImage.classList.add('is-active');
        
        if (currentImage) {
          currentImage.classList.remove('is-active');
          setTimeout(() => currentImage.remove(), 500);
        }
      }
      
      // ========== Scroll Functions ==========
      function handleScroll() {
        if (ticking) return;
        
        ticking = true;
        requestAnimationFrame(() => {
          updateHeader();
          updateHeroAnimation();
          updateScrollIndicator();
          ticking = false;
        });
      }
      
      function updateHeader() {
        const scrollY = window.scrollY;
        const logo = elements.header.querySelector('.header-logo');
        const headerText = elements.header.querySelector('.header-text');
        
        if (scrollY > 50) {
          elements.header.classList.add('header-scrolled');
          if (logo) logo.classList.replace('text-white', 'text-neutral-900');
          if (headerText) headerText.classList.replace('text-white', 'text-neutral-900');
        } else {
          elements.header.classList.remove('header-scrolled');
          if (logo) logo.classList.replace('text-neutral-900', 'text-white');
           if (headerText) headerText.classList.replace('text-neutral-900', 'text-white');
        }
      }
      
      function updateHeroAnimation() {
        if (!elements.heroSection) return;
        
        const rect = elements.heroSection.getBoundingClientRect();
        const scrollDistance = window.innerHeight;
        const scrolled = Math.max(0, -rect.top);
        const progress = clamp(scrolled / scrollDistance, 0, 1);
        
        // Update hero content opacity
        if (elements.heroContent) {
          elements.heroContent.style.opacity = 1 - progress * 1.5;
        }
        
        // Update hero image wrapper (shrink effect)
        if (elements.heroImageWrapper) {
          const scale = 1 - progress * 0.7;
          const width = lerp(100, 30, progress);
          const height = lerp(100, 70, progress);
          const left = lerp(0, 35, progress);
          const top = lerp(0, 15, progress);
          const borderRadius = progress * 8;
          
          elements.heroImageWrapper.style.width = `${width}%`;
          elements.heroImageWrapper.style.height = `${height}%`;
          elements.heroImageWrapper.style.left = `${left}%`;
          elements.heroImageWrapper.style.top = `${top}%`;
          elements.heroImageWrapper.style.borderRadius = `${borderRadius}px`;
        }
        
        // Update overlay
        if (elements.heroOverlay) {
          elements.heroOverlay.style.opacity = clamp(0.5 - progress * 0.5, 0, 0.5);
        }
        
        // Update video card elements
        if (elements.videoGradient && elements.videoText) {
          const videoOpacity = clamp((progress - 0.3) * 2, 0, 1);
          elements.videoGradient.style.opacity = videoOpacity;
          elements.videoText.style.opacity = videoOpacity;
        }
        
        // Update collage cards
        elements.collageCards.forEach(card => {
          const direction = card.dataset.direction.split(',').map(Number);
          const cardProgress = clamp((progress - 0.15) * 1.2, 0, 1);
          const ease = easeOutQuart(cardProgress);
          
          const translateX = direction[0] * 100 * (1 - ease);
          const translateY = direction[1] * 50 * (1 - ease);
          const scale = 0.8 + 0.2 * ease;
          
          card.style.opacity = ease;
          card.style.transform = `translate3d(${translateX}%, ${translateY}%, 0) scale(${scale})`;
        });
      }
      
      function updateScrollIndicator() {
        if (!elements.scrollIndicator) return;
        
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = clamp((window.scrollY / docHeight) * 100, 0, 100);
        elements.scrollIndicator.style.height = `${scrollPercent}%`;
      }
      
      // ========== Counter Animation ==========
      function animateCounters() {
        if (countersAnimated) return;
        
        elements.counters.forEach(counter => {
          const target = parseInt(counter.dataset.target, 10);
          if (isNaN(target)) return;
          
          const duration = 2000;
          const startTime = performance.now();
          
          function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = clamp(elapsed / duration, 0, 1);
            const eased = easeOutQuart(progress);
            const current = Math.floor(target * eased);
            
            counter.textContent = formatNumber(current);
            
            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              counter.textContent = formatNumber(target);
            }
          }
          
          requestAnimationFrame(update);
        });
        
        countersAnimated = true;
      }
      
      // ========== Intersection Observer ==========
      function setupObservers() {
        // Query elements here to ensure we get all of them
        const observeFadeElements = document.querySelectorAll('.observe-fade');
        
        // Fade-in observer
        const fadeObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              fadeObserver.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        });
        
        observeFadeElements.forEach(el => fadeObserver.observe(el));
        
        // Counter observer
        const counterObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              animateCounters();
              counterObserver.disconnect();
            }
          });
        }, { threshold: 0.5 });
        
        if (elements.counters.length > 0) {
          counterObserver.observe(elements.counters[0]);
        }
      }
      
      // ========== Event Listeners ==========
      function setupEventListeners() {
        // Menu
        elements.menuOpenBtn?.addEventListener('click', openMenu);
        elements.menuCloseBtn?.addEventListener('click', closeMenu);
        
        // Menu image hover
        elements.menuLinks.forEach(link => {
          link.addEventListener('mouseenter', handleMenuImageHover);
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && isMenuOpen) {
            closeMenu();
          }
        });
        
        // Scroll
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Initial scroll check
        handleScroll();
      }
      
      // ========== Initialize ==========
      function init() {
        setupEventListeners();
        setupObservers();
      }
      
      // Run on DOM ready
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
      

<header className="fixed top-0 left-0 right-0 z-50 py-5 pointer-events-none" id="header">

<div className="header-bg absolute inset-0 bg-white/95 backdrop-blur-md border-b border-neutral-100"></div>

<div className="relative max-w-screen-2xl mx-auto px-6 lg:px-10 pointer-events-auto">
<div className="flex items-center justify-between">

<a aria-label="ФК Молния - На главную" className="flex items-center gap-3 group" href="/">
<div className="header-logo text-white transition-colors duration-300">
<iconify-icon height="32" icon="solar:bolt-circle-bold" width="32"></iconify-icon>
</div>
<span className="header-text hidden xl:block uppercase transition-colors duration-300 text-sm font-bold text-white tracking-widest group-hover:text-amber-400">ФК Молния</span>
</a>

<div className="flex items-center gap-8">

<nav aria-label="Выбор языка" className="hidden sm:flex items-center gap-5">
<a aria-current="page" className="header-text text-sm tracking-widest text-white transition-colors duration-300 border-b border-current pb-0.5" href="#">RU</a>
<a className="header-text-muted text-sm tracking-widest text-white/70 hover:text-white transition-colors duration-300" href="#">EN</a>
</nav>

<button aria-controls="menu-overlay" aria-expanded="true" aria-label="Открыть меню" className="group flex flex-col cursor-pointer pt-2 pr-2 pb-2 pl-2 gap-x-2 gap-y-2" id="menu-open-btn" type="button">
<span className="burger-line block w-8 h-px bg-white transition-all duration-300 group-hover:w-5 group-hover:bg-amber-400"></span>
<span className="burger-line block w-8 h-px bg-white transition-all duration-300"></span>
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

<div aria-hidden="false" aria-label="Главное меню" aria-modal="true" className="menu-overlay fixed inset-0 z-[100] flex bg-stone-100" id="menu-overlay" role="dialog">

<div className="hidden md:block w-1/2 h-full relative overflow-hidden">
<div className="absolute inset-0" id="menu-images">
<img alt="" className="menu-image is-active absolute inset-0 w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-black/10"></div>
<div className="absolute top-10 left-10 text-white flex items-center gap-2">
<iconify-icon height="24" icon="solar:bolt-circle-bold" width="24"></iconify-icon>
<span className="text-sm font-bold tracking-widest">МОЛНИЯ</span>
</div>
</div>

<div className="w-full md:w-1/2 flex flex-col h-full overflow-y-auto">
<div className="flex justify-end p-6 lg:p-10">
<button aria-label="Закрыть меню" className="group p-2 hover:bg-black/5 rounded-full transition-colors cursor-pointer" id="menu-close-btn" type="button">
<iconify-icon className="text-neutral-800 group-hover:rotate-90 transition-transform duration-300" height="28" icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>
</div>
<div className="flex-1 flex flex-col justify-center px-6 lg:px-16 xl:px-20 max-w-2xl">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-8 font-medium">Клуб</p>
<nav aria-label="Основная навигация">
<ul className="space-y-0">
<li className="menu-item border-b border-neutral-200">
<a className="group flex items-center justify-between py-5 link-underline" data-image="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" href="#">
<span className="text-3xl lg:text-4xl font-medium text-neutral-800 group-hover:text-black transition-colors tracking-tight">Академия</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" height="24" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</a>
</li>
<li className="menu-item border-b border-neutral-200">
<a className="group flex items-center justify-between py-5 link-underline" data-image="https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" href="#">
<span className="text-3xl lg:text-4xl font-medium text-neutral-800 group-hover:text-black transition-colors tracking-tight">Команды</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" height="24" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</a>
</li>
<li className="menu-item border-b border-neutral-200">
<a className="group flex items-center justify-between py-5 link-underline" data-image="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" href="#">
<span className="text-3xl lg:text-4xl font-medium text-neutral-800 group-hover:text-black transition-colors tracking-tight">Расписание</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" height="24" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</a>
</li>
</ul>
</nav>

<div className="mt-16 pt-8 border-t border-neutral-200">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-4 font-medium">Контакты</p>
<div className="space-y-2">
<a className="flex items-center gap-2 text-sm font-medium text-neutral-800 hover:text-amber-500 transition-colors" href="tel:+79991234567">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon> +7 (999) 123-45-67
            </a>
<a className="flex items-center gap-2 text-sm font-medium text-neutral-800 hover:text-amber-500 transition-colors" href="mailto:info@fc-molniya.ru">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon> info@fc-molniya.ru
            </a>
</div>
</div>
</div>
</div>
</div>

<main>

<section aria-label="Главный баннер" className="relative" id="hero-section" style={{height: '250vh'}}>

<div className="sticky top-0 h-screen w-full overflow-hidden">

<div className="absolute inset-0">
<div className="absolute inset-0 overflow-hidden will-change-transform" id="hero-image-wrapper">
<img alt="Детский футбол" className="absolute inset-0 w-full h-full object-cover animate-breathe" fetchpriority="high" loading="eager" src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 transition-opacity duration-500" id="hero-overlay"></div>

<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-500" id="video-gradient"></div>
<div className="absolute bottom-6 left-6 opacity-0 transition-opacity duration-500" id="video-text">
<p className="text-2xl lg:text-3xl font-medium text-white tracking-tight mb-1">МОЛНИЯ</p>
<p className="text-xs uppercase tracking-widest text-amber-400">Победы начинаются здесь</p>
</div>
</div>
</div>

<div aria-hidden="true" className="absolute inset-0 pointer-events-none">

<article className="collage-card absolute left-[8%] top-[8%] w-[24%] h-[38%] rounded overflow-hidden shadow-2xl" data-direction="-1,-1">
<img alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-5 left-5 right-5">
<p className="text-2xl lg:text-3xl font-medium text-white tracking-tight mb-1">&gt; <span className="counter" data-target="500">0</span></p>
<p className="text-xs uppercase tracking-widest text-white/80 leading-relaxed">Юных футболистов</p>
</div>
</article>

<article className="collage-card absolute left-[8%] top-[50%] w-[24%] h-[24%] rounded overflow-hidden shadow-2xl" data-direction="-1,1">
<img alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-5 left-5 right-5">
<p className="text-2xl lg:text-3xl font-medium text-white tracking-tight mb-1">&gt; <span className="counter" data-target="15">0</span></p>
<p className="text-xs uppercase tracking-widest text-white/80 leading-relaxed">Профессиональных тренеров</p>
</div>
</article>

<article className="collage-card absolute right-[8%] bottom-[50%] w-[24%] h-[24%] rounded overflow-hidden shadow-2xl" data-direction="1,-1">
<img alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-5 left-5 right-5">
<p className="text-2xl lg:text-3xl font-medium text-white tracking-tight mb-1"><span className="counter" data-target="50">0</span>+</p>
<p className="text-xs uppercase tracking-widest text-white/80 leading-relaxed">Кубков и медалей</p>
</div>
</article>

<article className="collage-card absolute right-[8%] bottom-[8%] w-[24%] h-[38%] rounded overflow-hidden shadow-2xl" data-direction="1,1">
<img alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-5 left-5 right-5">
<p className="text-2xl lg:text-3xl font-medium text-white tracking-tight mb-1">&gt; <span className="counter" data-target="5">0</span></p>
<p className="text-xs uppercase tracking-widest text-white/80 leading-relaxed">Футбольных полей</p>
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
<h1 className="text-[12vw] md:text-[9vw] leading-none animate-fade-up animation-delay-500 text-lg font-bold text-white tracking-tight opacity-0 mix-blend-overlay font-space-grotesk">МОЛНИЯ</h1>
<p className="uppercase animate-fade-up animation-delay-700 md:text-xl text-base font-semibold text-zinc-50/90 tracking-widest opacity-0 mt-10 mb-10">Будущие чемпионы растут здесь</p>

<div className="animate-fade-up animation-delay-1000 opacity-0 mt-10">
<a className="cta-button group inline-flex items-center gap-3 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 text-base font-bold text-neutral-900 rounded-full pt-3 pr-5 pb-3 pl-5 relative shadow-lg" href="#register">
<span className="z-10 relative">Записаться на просмотр</span>
<span className="relative z-10 inline-flex items-center justify-center w-7 h-7 bg-white/40 rounded-full">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
</div>
</div>
</div>

<div className="mt-auto">

<div className="px-6 lg:px-10 mb-6 opacity-0 animate-fade-up animation-delay-1000">
<button aria-label="Включить звук" className="group flex items-center gap-4 cursor-pointer" type="button">
<div className="flex items-center gap-1 h-6">
<span className="sound-bar w-0.5 h-3 bg-white rounded-full"></span>
<span className="sound-bar w-0.5 h-5 bg-white rounded-full"></span>
<span className="sound-bar w-0.5 h-2 bg-white/80 rounded-full"></span>
<span className="sound-bar w-0.5 h-4 bg-white rounded-full"></span>
</div>
<span className="text-xs font-medium uppercase tracking-widest text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  Атмосфера стадиона
                </span>
</button>
</div>

<div className="border-t border-white/10 bg-black/40 backdrop-blur-md opacity-0 animate-fade-up animation-delay-1000">
<div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
<div className="p-6 lg:py-8 lg:px-10 text-center hover:bg-white/5 transition-colors">
<p className="lg:text-3xl text-2xl font-medium text-white tracking-tight mb-2">
                    &gt; <span className="counter" data-target="10">0</span> лет
                  </p>
<p className="uppercase leading-relaxed text-xs text-white/60 tracking-widest">Успешной работы с детьми</p>
</div>
<div className="p-6 lg:py-8 lg:px-10 text-center hover:bg-white/5 transition-colors">
<p className="lg:text-3xl text-2xl font-medium text-white tracking-tight mb-2">
<span className="counter" data-target="3">0</span>
</p>
<p className="uppercase leading-relaxed text-xs text-white/60 tracking-widest">Возрастные группы</p>
</div>
<div className="p-6 lg:py-8 lg:px-10 text-center hover:bg-white/5 transition-colors">
<p className="text-2xl lg:text-3xl font-medium text-white tracking-tight mb-2">
<span className="counter" data-target="100">0</span>%
                  </p>
<p className="uppercase leading-relaxed text-xs text-white/60 tracking-widest">Внимание каждому ребенку</p>
</div>
<div className="lg:py-8 lg:px-10 hover:bg-white/5 transition-colors text-center pt-6 pr-6 pb-6 pl-6">
<p className="text-2xl lg:text-3xl font-medium text-white tracking-tight mb-2">
                    UEFA
                  </p>
<p className="uppercase leading-relaxed text-xs text-white/60 tracking-widest">Лицензированные методики</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="about-title" className="z-10 lg:py-24 bg-white pt-16 pb-16 relative" id="about">
<div className="lg:px-10 max-w-screen-2xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 gap-x-12 gap-y-12 items-center">

<div className="observe-fade">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold mb-6">О Клубе</p>
<h2 className="sm:text-5xl lg:text-6xl text-neutral-900 leading-[0.95] text-4xl font-medium tracking-tight" id="about-title">
              Мы воспитываем характер и командный дух
            </h2>
<div className="mt-10 hidden lg:block">
<div className="w-20 h-1 bg-amber-400"></div>
</div>
</div>

<div className="observe-fade" style={{transitionDelay: '100ms'}}>
<div className="relative aspect-[4/5] rounded-lg overflow-hidden">
<img alt="Тренировочный процесс" className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70502567-d08c-4d62-a15d-7c07d010ddc4_1600w.jpg"/>
<div className="absolute bottom-6 left-6 flex gap-2">
<span className="w-10 h-10 rounded-full bg-white/90 backdrop-blur text-neutral-900 flex items-center justify-center text-[16px] shadow-sm">
<iconify-icon icon="solar:cup-star-bold"></iconify-icon>
</span>
<span className="w-10 h-10 rounded-full bg-white/90 backdrop-blur text-neutral-900 flex items-center justify-center text-[16px] shadow-sm">
<iconify-icon icon="solar:medal-ribbons-star-bold"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="observe-fade lg:pl-8" style={{transitionDelay: '200ms'}}>
<p className="text-xl sm:text-2xl font-medium text-neutral-800 leading-relaxed mb-8">
              Наша цель — не просто научить играть в футбол, а вырастить здоровых, сильных и уверенных в себе личностей.
            </p>
<div className="w-full h-px bg-neutral-100 mb-8"></div>
<p className="text-base text-neutral-500 leading-7 text-justify mb-8">
              В академии «Молния» мы применяем современные европейские методики обучения, адаптированные под возрастные особенности детей. Наши тренеры — профессионалы с лицензиями, которые находят подход к каждому юному спортсмену, превращая тренировки в увлекательный процесс развития навыков.
            </p>
<a className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-neutral-900 border-b border-neutral-200 pb-1 hover:border-amber-400 transition-colors" href="#">
              Подробнее об академии
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section aria-labelledby="methodology-title" className="py-24 bg-stone-50">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
<div className="mb-16 observe-fade">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold mb-4">Методика</p>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900" id="methodology-title">Комплексный подход <br/> к развитию игрока</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white p-8 rounded-2xl hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-300 observe-fade border border-transparent hover:border-amber-100" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:ball-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-4 text-neutral-900">Техническое мастерство</h3>
<p className="text-neutral-500 leading-relaxed text-sm">
                        Углубленная работа с мячом: дриблинг, передачи, приём и удары. Мы учим детей не просто бить, а думать на поле и принимать быстрые решения.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-300 observe-fade border border-transparent hover:border-amber-100" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:dumbbell-large-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-4 text-neutral-900">Физическая подготовка</h3>
<p className="text-neutral-500 leading-relaxed text-sm">
                        Развитие координации, ловкости, скорости и выносливости через игровые упражнения, адаптированные под физиологию растущего организма.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-300 observe-fade border border-transparent hover:border-amber-100" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:chat-round-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-4 text-neutral-900">Психология победителя</h3>
<p className="text-neutral-500 leading-relaxed text-sm">
                        Формирование лидерских качеств, дисциплины и умения работать в команде. Мы учим достойно побеждать и делать правильные выводы из поражений.
                    </p>
</div>
</div>
</div>
</section>

<section aria-labelledby="coaches-title" className="py-24 bg-white overflow-hidden">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 observe-fade">
<div>
<p className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold mb-4">Наставники</p>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900" id="coaches-title">Команда профессионалов</h2>
</div>
<div className="hidden md:flex gap-4">
<button className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-900 hover:border-neutral-900 hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-900 hover:border-neutral-900 hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group relative aspect-[3/4] rounded-2xl overflow-hidden observe-fade cursor-pointer">
<img alt="Александр Волков" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542178243-bc20204b769f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center gap-2 text-amber-400 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
<iconify-icon icon="solar:whistle-linear"></iconify-icon>
<span className="text-xs font-bold tracking-widest uppercase">Главный тренер</span>
</div>
<h3 className="text-2xl font-medium text-white mb-1">Александр Волков</h3>
<p className="text-neutral-300 text-sm">Лицензия UEFA B, стаж 12 лет</p>
</div>
</article>

<article className="group relative aspect-[3/4] rounded-2xl overflow-hidden observe-fade cursor-pointer" style={{transitionDelay: '100ms'}}>
<img alt="Дмитрий Соколов" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center gap-2 text-amber-400 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
<iconify-icon icon="solar:whistle-linear"></iconify-icon>
<span className="text-xs font-bold tracking-widest uppercase">Тренер вратарей</span>
</div>
<h3 className="text-2xl font-medium text-white mb-1">Дмитрий Соколов</h3>
<p className="text-neutral-300 text-sm">Мастер спорта, стаж 8 лет</p>
</div>
</article>

<article className="group relative aspect-[3/4] rounded-2xl overflow-hidden observe-fade cursor-pointer" style={{transitionDelay: '200ms'}}>
<img alt="Максим Петров" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center gap-2 text-amber-400 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
<iconify-icon icon="solar:whistle-linear"></iconify-icon>
<span className="text-xs font-bold tracking-widest uppercase">Тренер мл. групп</span>
</div>
<h3 className="text-2xl font-medium text-white mb-1">Максим Петров</h3>
<p className="text-neutral-300 text-sm">Высшее педагогическое, стаж 5 лет</p>
</div>
</article>
</div>
</div>
</section>

<section aria-labelledby="register-title" className="bg-neutral-900 rounded-t-[3rem] text-white pt-24 pb-24 lg:pt-32" id="register">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
<div className="grid lg:grid-cols-2 gap-20 lg:gap-32">

<div className="observe-fade">
<p className="text-xs uppercase tracking-[0.2em] text-amber-500 font-semibold mb-6">FAQ</p>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-12">Частые вопросы <br/>родителей</h2>
<div className="space-y-8">
<div className="group border-b border-white/10 pb-8">
<h3 className="text-xl font-medium mb-4 flex items-center justify-between cursor-pointer">
                                С какого возраста принимаете?
                                <iconify-icon className="text-neutral-500 group-hover:text-amber-400 transition-colors" icon="solar:add-circle-linear"></iconify-icon>
</h3>
<p className="text-neutral-400 leading-relaxed text-sm max-w-md">
                                Мы проводим набор детей от 3 до 14 лет. Группы формируются строго по возрасту и уровню подготовки для комфортного обучения.
                            </p>
</div>
<div className="group border-b border-white/10 pb-8">
<h3 className="text-xl font-medium mb-4 flex items-center justify-between cursor-pointer">
                                Что нужно для первой тренировки?
                                <iconify-icon className="text-neutral-500 group-hover:text-amber-400 transition-colors" icon="solar:add-circle-linear"></iconify-icon>
</h3>
<p className="text-neutral-400 leading-relaxed text-sm max-w-md">
                                Достаточно удобной спортивной формы (шорты, футболка), кроссовок и бутылки с водой. Специальная экипировка на пробном занятии не требуется.
                            </p>
</div>
<div className="group border-b border-white/10 pb-8">
<h3 className="text-xl font-medium mb-4 flex items-center justify-between cursor-pointer">
                                Участвуют ли команды в турнирах?
                                <iconify-icon className="text-neutral-500 group-hover:text-amber-400 transition-colors" icon="solar:add-circle-linear"></iconify-icon>
</h3>
<p className="text-neutral-400 leading-relaxed text-sm max-w-md">
                                Да, начиная с 6 лет наши воспитанники регулярно участвуют в городских и региональных чемпионатах, получая игровую практику.
                            </p>
</div>
</div>
</div>

<div className="observe-fade" style={{transitionDelay: '200ms'}}>
<div className="bg-neutral-800/50 p-10 lg:p-14 rounded-3xl border border-white/5 relative overflow-hidden">

<div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
<h2 className="text-3xl font-medium tracking-tight mb-2" id="register-title">Запись на просмотр</h2>
<p className="text-neutral-400 text-sm mb-10">Первая тренировка — бесплатно. Оставьте заявку, и мы свяжемся в течение 15 минут.</p>
<form className="space-y-8" onsubmit="event.preventDefault();">
<div className="relative">
<input className="custom-input block w-full border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-amber-400 transition-colors peer" id="parent-name" placeholder="Ваше имя" type="text"/>
<label className="absolute left-0 -top-3.5 text-neutral-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-amber-400 peer-focus:text-xs" htmlFor="parent-name">Ваше имя</label>
<iconify-icon className="absolute right-2 top-3 text-neutral-600 pointer-events-none" icon="solar:user-linear"></iconify-icon>
</div>
<div className="relative">
<input className="custom-input block w-full border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-amber-400 transition-colors peer" id="phone" placeholder="Телефон" type="tel"/>
<label className="absolute left-0 -top-3.5 text-neutral-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-amber-400 peer-focus:text-xs" htmlFor="phone">Телефон</label>
<iconify-icon className="absolute right-2 top-3 text-neutral-600 pointer-events-none" icon="solar:phone-linear"></iconify-icon>
</div>
<div className="relative">
<select className="custom-input block w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors appearance-none" id="age">
<option className="bg-neutral-800 text-neutral-500" disabled="" selected="" value="">Возраст ребенка</option>
<option className="bg-neutral-800" value="3-5">3-5 лет</option>
<option className="bg-neutral-800" value="6-9">6-9 лет</option>
<option className="bg-neutral-800" value="10-14">10-14 лет</option>
</select>
<iconify-icon className="absolute right-2 top-3 text-neutral-600 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<button className="w-full bg-white text-neutral-900 font-bold py-4 rounded-full hover:bg-amber-400 transition-colors duration-300 mt-4 flex items-center justify-center gap-2 group" type="submit">
                                Отправить заявку
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-[10px] text-neutral-600 text-center">Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных</p>
</form>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-neutral-950 text-white border-t border-white/5 pt-20 pb-10">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

<div className="space-y-6">
<a className="flex items-center gap-2 group w-fit" href="/">
<iconify-icon className="text-white group-hover:text-amber-400 transition-colors" height="32" icon="solar:bolt-circle-bold" width="32"></iconify-icon>
<span className="font-bold tracking-widest uppercase">ФК Молния</span>
</a>
<p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                      Профессиональная футбольная подготовка для детей от 3 до 14 лет. Развиваем таланты с 2013 года.
                  </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-400 hover:text-neutral-900 transition-all duration-300" href="#">
<iconify-icon icon="brandico:instagram" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-400 hover:text-neutral-900 transition-all duration-300" href="#">
<iconify-icon icon="brandico:vkontakte-rect" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-400 hover:text-neutral-900 transition-all duration-300" href="#">
<iconify-icon icon="brandico:telegram-rect" width="16"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-sm font-bold tracking-widest uppercase text-neutral-200 mb-8">Навигация</h4>
<ul className="space-y-4">
<li><a className="text-neutral-500 hover:text-white transition-colors text-sm" href="#">О клубе</a></li>
<li><a className="text-neutral-500 hover:text-white transition-colors text-sm" href="#">Тренерский состав</a></li>
<li><a className="text-neutral-500 hover:text-white transition-colors text-sm" href="#">Расписание</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-bold tracking-widest uppercase text-neutral-200 mb-8">Контакты</h4>
<ul className="space-y-4">
<li>
<a className="flex items-start gap-3 text-neutral-500 hover:text-white transition-colors text-sm group" href="tel:+79991234567">
<iconify-icon className="mt-0.5 group-hover:text-amber-400 transition-colors" icon="solar:phone-linear"></iconify-icon>
<span>+7 (999) 123-45-67<br/><span className="text-xs text-neutral-600">Ежедневно 09:00 - 21:00</span></span>
</a>
</li>
<li>
<a className="flex items-center gap-3 text-neutral-500 hover:text-white transition-colors text-sm group" href="mailto:info@fc-molniya.ru">
<iconify-icon className="group-hover:text-amber-400 transition-colors" icon="solar:letter-linear"></iconify-icon>
<span>info@fc-molniya.ru</span>
</a>
</li>
<li className="flex items-start gap-3 text-neutral-500 text-sm">
<iconify-icon className="mt-0.5 text-neutral-600" icon="solar:map-point-linear"></iconify-icon>
<span>Москва, ул. Спортивная 12,<br/>Стадион "Арена"</span>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-bold tracking-widest uppercase text-neutral-200 mb-8">Документы</h4>
<ul className="space-y-4">
<li><a className="text-neutral-500 hover:text-white transition-colors text-sm flex items-center gap-2" href="#"><iconify-icon icon="solar:document-text-linear"></iconify-icon> Договор оферты</a></li>
<li><a className="text-neutral-500 hover:text-white transition-colors text-sm flex items-center gap-2" href="#"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Политика конфиденциальности</a></li>
<li><a className="text-neutral-500 hover:text-white transition-colors text-sm flex items-center gap-2" href="#"><iconify-icon icon="solar:file-check-linear"></iconify-icon> Лицензия школы</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-neutral-600 text-xs">© 2023 ФК Молния. Все права защищены.</p>
<p className="text-neutral-600 text-xs flex items-center gap-1">Made with <iconify-icon className="text-red-900" icon="solar:heart-bold"></iconify-icon> for kids</p>
</div>
</div>
</footer>



    </>
  );
}
