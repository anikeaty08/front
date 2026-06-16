import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
            observeFadeElements: document.querySelectorAll('.observe-fade'),
            menuLinks: document.querySelectorAll('#menu-overlay nav a[data-image]'),
            headerBorder: document.querySelector('.header-border'),
            // Slider Elements
            sliderTrack: document.getElementById('cards-track'),
            sliderDotsContainer: document.getElementById('slider-dots'),
            prevSlideBtn: document.getElementById('prev-slide'),
            nextSlideBtn: document.getElementById('next-slide'),
            sliderContainer: document.getElementById('cards-slider-container')
        };

        // ========== State ==========
        let isMenuOpen = false;
        let countersAnimated = false;
        let ticking = false;
        
        // Slider State
        let currentSlide = 0;
        let sliderInterval;
        let isHoveringSlider = false;
        const totalSlides = 5;
        let slidesPerView = 2; // Default for desktop
        let maxSlideIndex = 0;

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
            if (scrollY > 50) {
                elements.header.classList.add('header-scrolled');
                elements.headerBorder.classList.remove('border-white/20');
                elements.headerBorder.classList.add('border-neutral-200');
                const logo = elements.header.querySelector('.header-logo');
                if (logo) logo.style.filter = 'none';
            } else {
                elements.header.classList.remove('header-scrolled');
                elements.headerBorder.classList.add('border-white/20');
                elements.headerBorder.classList.remove('border-neutral-200');
                const logo = elements.header.querySelector('.header-logo');
                if (logo) logo.style.filter = 'brightness(0) invert(1)';
            }
        }

        function updateHeroAnimation() {
            if (!elements.heroSection) return;
            const rect = elements.heroSection.getBoundingClientRect();
            const scrollDistance = window.innerHeight;
            const scrolled = Math.max(0, -rect.top);
            const progress = clamp(scrolled / scrollDistance, 0, 1);
            const isMobile = window.innerWidth < 768;

            // Update hero content opacity
            if (elements.heroContent) {
                elements.heroContent.style.opacity = 1 - progress * 1.5;
            }

            // Update hero image wrapper (shrink effect)
            if (elements.heroImageWrapper) {
                // Determine target values based on device
                const targetWidth = isMobile ? 90 : 30; // Mobile: Wide strip, Desktop: Vertical strip
                const targetHeight = isMobile ? 24 : 70; // Mobile: Short strip, Desktop: Tall strip
                const targetLeft = isMobile ? 5 : 35; // Centered
                const targetTop = isMobile ? 38 : 15; // Centered vertically relative to cards

                const scale = 1 - progress * 0.7;
                
                const width = lerp(100, targetWidth, progress);
                const height = lerp(100, targetHeight, progress);
                const left = lerp(0, targetLeft, progress);
                const top = lerp(0, targetTop, progress);
                const borderRadius = progress * 8;
                
                elements.heroImageWrapper.style.width = `${width}%`;
                elements.heroImageWrapper.style.height = `${height}%`;
                elements.heroImageWrapper.style.left = `${left}%`;
                elements.heroImageWrapper.style.top = `${top}%`;
                elements.heroImageWrapper.style.borderRadius = `${borderRadius}px`;
            }

            // Update overlay
            if (elements.heroOverlay) {
                elements.heroOverlay.style.opacity = clamp(0.4 - progress * 0.4, 0, 0.4);
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
                
                const translateX = direction[0] * 50 * (1 - ease); 
                const translateY = direction[1] * 30 * (1 - ease);
                const scale = 0.8 + 0.2 * ease;
                
                card.style.opacity = ease;
                card.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;
            });
        }

        function updateScrollIndicator() {
            if (!elements.scrollIndicator) return;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = clamp((window.scrollY / docHeight) * 100, 0, 100);
            elements.scrollIndicator.style.height = `${scrollPercent}%`;
        }

        // ========== Slider Logic ==========
        function initSlider() {
            if (!elements.sliderTrack) return;
            
            // Generate dots
            if (elements.sliderDotsContainer) {
                elements.sliderDotsContainer.innerHTML = '';
                for (let i = 0; i < totalSlides; i++) {
                    const dot = document.createElement('button');
                    dot.className = `w-2 h-2 rounded-full transition-all duration-300 ${i === 0 ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`;
                    dot.setAttribute('aria-label', `Перейти к слайду ${i + 1}`);
                    dot.onclick = () => goToSlide(i);
                    elements.sliderDotsContainer.appendChild(dot);
                }
            }

            updateSliderParams();
            startAutoplay();

            // Events
            elements.prevSlideBtn?.addEventListener('click', prevSlide);
            elements.nextSlideBtn?.addEventListener('click', nextSlide);
            
            elements.sliderContainer?.addEventListener('mouseenter', () => {
                isHoveringSlider = true;
                stopAutoplay();
            });
            
            elements.sliderContainer?.addEventListener('mouseleave', () => {
                isHoveringSlider = false;
                startAutoplay();
            });
            
            window.addEventListener('resize', () => {
                updateSliderParams();
                updateSliderUI();
            });
        }

        function updateSliderParams() {
            // Check breakpoint for desktop vs mobile
            if (window.innerWidth >= 768) {
                slidesPerView = 2;
            } else {
                slidesPerView = 1;
            }
            // Max index is total slides minus number of visible slides
            // However, for this design, let's allow scrolling one by one.
            // If we have 5 slides and show 2, max index = 3. 
            // 0: [1,2], 1: [2,3], 2: [3,4], 3: [4,5]
            maxSlideIndex = totalSlides - slidesPerView;
            if (currentSlide > maxSlideIndex) currentSlide = maxSlideIndex;
        }

        function updateSliderUI() {
            if (!elements.sliderTrack) return;
            
            // Calculate translate percentage
            // Each item width + gap. 
            // Desktop: item is ~50% minus gap. Movement is 50% + gap adjustment?
            // Actually, simplified: Percentage based on (100 / slidesPerView) * index + gap adjustment
            // Easier: Just use percentage translate based on item width logic.
            
            const gap = 24; // 1.5rem = 24px (gap-6)
            // On desktop, width is calc(50% - 12px).
            // Translate for 1 slide = 50% + 12px (gap).
            
            let translatePercent = 0;
            if (slidesPerView === 2) {
                 translatePercent = currentSlide * 50; // Simple percentage move works well with flex basis if aligned
                 // With gap-6, moving 50% might be slightly off due to gap not being % based.
                 // Let's use CSS calc variable or simpler logic.
                 // Actually, translate based on percentage of (item + gap) relative to container width.
                 // Item + half-gap = 50%. So move 50% + 12px? No.
                 // Move logic: - (currentSlide * (cardWidth + gap))
                 const cardWidth = elements.sliderTrack.children[0].offsetWidth;
                 const moveAmount = currentSlide * (cardWidth + gap);
                 elements.sliderTrack.style.transform = `translateX(-${moveAmount}px)`;
            } else {
                // Mobile: 100% width items
                const cardWidth = elements.sliderTrack.children[0].offsetWidth;
                const moveAmount = currentSlide * (cardWidth + gap);
                elements.sliderTrack.style.transform = `translateX(-${moveAmount}px)`;
            }

            // Update dots
            const dots = elements.sliderDotsContainer?.children;
            if (dots) {
                Array.from(dots).forEach((dot, index) => {
                    // Logic to highlight active dot. 
                    // Since we show multiple, maybe highlight the first visible one?
                    if (index === currentSlide) {
                        dot.className = 'w-2 h-2 rounded-full transition-all duration-300 bg-white scale-125';
                    } else {
                        dot.className = 'w-2 h-2 rounded-full transition-all duration-300 bg-white/50 hover:bg-white/80';
                    }
                });
            }
        }

        function nextSlide() {
            if (currentSlide < maxSlideIndex) {
                currentSlide++;
            } else {
                currentSlide = 0; // Loop back
            }
            updateSliderUI();
        }

        function prevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
            } else {
                currentSlide = maxSlideIndex; // Loop to end
            }
            updateSliderUI();
        }

        function goToSlide(index) {
            // Clamp index
            if (index > maxSlideIndex) index = maxSlideIndex;
            currentSlide = index;
            updateSliderUI();
        }

        function startAutoplay() {
            stopAutoplay();
            sliderInterval = setInterval(() => {
                if (!isHoveringSlider) nextSlide();
            }, 5000);
        }

        function stopAutoplay() {
            clearInterval(sliderInterval);
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
            const fadeObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        fadeObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
            
            elements.observeFadeElements.forEach(el => fadeObserver.observe(el));

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

        // ========== Instant Scroll Feature ==========
        function handleInstantScroll(e) {
            if (window.scrollY < 50 && e.deltaY > 0) {
                e.preventDefault();
                const targetScroll = window.innerHeight;
                window.scrollTo({
                    top: targetScroll,
                    behavior: 'smooth'
                });
            }
        }

        // ========== Event Listeners ==========
        function setupEventListeners() {
            elements.menuOpenBtn?.addEventListener('click', openMenu);
            elements.menuCloseBtn?.addEventListener('click', closeMenu);
            
            elements.menuLinks.forEach(link => {
                link.addEventListener('mouseenter', handleMenuImageHover);
            });
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && isMenuOpen) {
                    closeMenu();
                }
            });
            
            window.addEventListener('scroll', handleScroll, { passive: true });
            window.addEventListener('wheel', handleInstantScroll, { passive: false });
            window.addEventListener('resize', handleScroll);
            
            handleScroll();
        }

        // ========== Initialize ==========
        function init() {
            setupEventListeners();
            setupObservers();
            initSlider();
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
    })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 py-5 pointer-events-none transition-colors duration-300" id="header">

<div className="header-bg absolute inset-0 bg-white/95 backdrop-blur-md border-b border-neutral-100"></div>

<div className="relative max-w-screen-2xl mx-auto px-6 lg:px-10 pointer-events-auto">
<div className="flex items-center justify-between">

<a aria-label="Молвест - На главную" className="flex items-center gap-3 z-50 relative" href="/">
<img alt="Молвест логотип" className="header-logo h-8 w-auto object-contain transition-all duration-300" height="32" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7cd2626d-0185-4c9d-bbd5-e20389921e7e_320w.png" style={{filter: 'brightness(0) invert(1)'}} width="120"/>
</a>

<nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="header-link-text nav-link-hover relative text-xs uppercase tracking-widest font-medium py-2" href="#about">О компании</a>
<a className="header-link-text nav-link-hover relative text-xs uppercase tracking-widest font-medium py-2" href="#">Семена амаранта</a>
<a className="header-link-text nav-link-hover relative text-xs uppercase tracking-widest font-medium py-2" href="#">Продукция</a>
<a className="header-link-text nav-link-hover relative text-xs uppercase tracking-widest font-medium py-2" href="#">Блог</a>
<a className="header-link-text nav-link-hover relative text-xs uppercase tracking-widest font-medium py-2" href="#">Отзывы</a>
<a className="header-link-text nav-link-hover relative text-xs uppercase tracking-widest font-medium py-2" href="#">Контакты</a>
</nav>

<div className="flex items-center gap-6 z-50 relative">

<div className="hidden sm:flex items-center gap-4 border-r border-white/20 pr-6 mr-2 transition-colors duration-300 header-border">
<a aria-current="page" className="header-link-text text-xs tracking-widest font-bold" href="#">RU</a>
<a className="header-link-text text-xs tracking-widest opacity-60 hover:opacity-100 transition-opacity" href="#">EN</a>
<a className="header-link-text text-xs tracking-widest opacity-60 hover:opacity-100 transition-opacity" href="#">CH</a>
</div>

<button aria-controls="menu-overlay" aria-expanded="true" aria-label="Открыть меню" className="group flex flex-col cursor-pointer w-8 h-8 gap-x-1.5 gap-y-1.5 justify-center" id="menu-open-btn" type="button">
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

<div aria-hidden="false" aria-label="Главное меню" aria-modal="true" className="menu-overlay fixed inset-0 z-[100] flex bg-stone-100" id="menu-overlay" role="dialog">

<div className="hidden md:block w-1/2 h-full relative overflow-hidden">
<div className="absolute inset-0" id="menu-images">
<img alt="" className="menu-image is-active absolute inset-0 w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8d3ba76-5100-4964-a9ea-7bc1a82313a4_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-black/10"></div>
<div className="absolute top-10 left-10">
<img alt="" className="h-6 w-auto opacity-90 object-cover" height="24" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0a0da05-4bb0-4d86-97c4-6e366c61f580_320w.png" width="90"/>
</div>
</div>

<div className="w-full md:w-1/2 flex flex-col h-full overflow-y-auto">
<div className="flex justify-end p-6 lg:p-10">
<button aria-label="Закрыть меню" className="group p-2 hover:bg-black/5 rounded-full transition-colors cursor-pointer" id="menu-close-btn" type="button">
<svg className="text-neutral-800 group-hover:rotate-90 transition-transform duration-300" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<div className="flex-1 flex flex-col justify-center px-6 lg:px-16 xl:px-20 max-w-2xl">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-8 font-medium">Навигация</p>
<nav aria-label="Основная навигация">
<ul className="space-y-0">
<li className="menu-item border-b border-neutral-200/60">
<a className="group flex items-center justify-between py-4 link-underline" data-image="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600" href="#about">
<span className="text-2xl lg:text-3xl font-medium text-neutral-800 group-hover:text-black transition-colors tracking-tight">О компании</span>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transition-transform duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
<li className="menu-item border-b border-neutral-200/60">
<a className="group flex items-center justify-between py-4 link-underline" data-image="https://images.pexels.com/photos/1460136/pexels-photo-1460136.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600" href="#">
<span className="text-2xl lg:text-3xl font-medium text-neutral-800 group-hover:text-black transition-colors tracking-tight">Семена амаранта</span>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transition-transform duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
<li className="menu-item border-b border-neutral-200/60">
<a className="group flex items-center justify-between py-4 link-underline" data-image="https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600" href="#">
<span className="text-2xl lg:text-3xl font-medium text-neutral-800 group-hover:text-black transition-colors tracking-tight">Продукция</span>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transition-transform duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
<li className="menu-item border-b border-neutral-200/60">
<a className="group flex items-center justify-between py-4 link-underline" data-image="https://images.pexels.com/photos/159652/pencil-office-design-creative-159652.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600" href="#">
<span className="text-2xl lg:text-3xl font-medium text-neutral-800 group-hover:text-black transition-colors tracking-tight">Блог</span>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transition-transform duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
<li className="menu-item border-b border-neutral-200/60">
<a className="group flex items-center justify-between py-4 link-underline" data-image="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600" href="#">
<span className="text-2xl lg:text-3xl font-medium text-neutral-800 group-hover:text-black transition-colors tracking-tight">Отзывы</span>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transition-transform duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
<li className="menu-item border-b border-neutral-200/60">
<a className="group flex items-center justify-between py-4 link-underline" data-image="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600" href="#">
<span className="text-2xl lg:text-3xl font-medium text-neutral-800 group-hover:text-black transition-colors tracking-tight">Контакты</span>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transition-transform duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
</ul>
</nav>

<div className="mt-12 pt-8 border-t border-neutral-200">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-4 font-medium">Связь с нами</p>
<div className="space-y-2">
<a className="block text-sm font-medium text-neutral-800 hover:text-neutral-500 transition-colors" href="tel:88007008181">8 800 700 81 81</a>
<a className="block text-sm font-medium text-neutral-800 hover:text-neutral-500 transition-colors" href="mailto:mail@molvest.ru">Info@semenaamaranta.ru</a>
</div>
</div>
</div>
</div>
</div>

<main className="">

<section aria-label="Главный баннер" className="relative" id="hero-section" style={{height: '250vh'}}>

<div className="sticky top-0 h-screen w-full overflow-hidden">

<div className="absolute inset-0">
<div className="absolute inset-0 overflow-hidden will-change-transform" id="hero-image-wrapper">
<img alt="Молочная ферма Молвест" className="absolute inset-0 w-full h-full object-cover animate-breathe" fetchpriority="high" loading="eager" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8d3ba76-5100-4964-a9ea-7bc1a82313a4_3840w.jpg"/>
<div className="absolute inset-0 bg-black/40 transition-opacity duration-500" id="hero-overlay"></div>

<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-500" id="video-gradient"></div>
<div className="absolute bottom-6 left-6 opacity-0 transition-opacity duration-500" id="video-text">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-bold mb-2">О компании </p>
<p className="text-2xl lg:text-3xl font-medium text-white tracking-tight mb-2">Северная Олива</p>
<p className="text-xs uppercase tracking-widest text-white/80">Лидер в возделывании и исследовании амаранта</p>
</div>
</div>
</div>


<div aria-hidden="true" className="absolute inset-0 pointer-events-none">


<article className="collage-card absolute left-3 right-auto top-[13%] md:left-[8%] md:top-[8%] w-[calc(50%-1rem)] h-[22%] md:w-[24%] md:h-[38%] rounded overflow-hidden shadow-2xl" data-direction="-1,-1">
<img alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa31d635-3237-4ed2-858c-5ec42068e222_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5">
<p className="text-[10px] md:text-xs uppercase tracking-widest text-white/80 leading-relaxed">Семена амаранта: Элита </p>
</div>
</article>


<article className="collage-card absolute right-3 left-auto top-[13%] md:right-auto md:left-[8%] md:top-[50%] w-[calc(50%-1rem)] h-[22%] md:w-[24%] md:h-[24%] rounded overflow-hidden shadow-2xl" data-direction="-1,1">
<img alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7fd9648-721b-497f-a38e-2ace6245dc03_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5">
<p className="text-[10px] md:text-xs uppercase tracking-widest text-white/80 leading-relaxed">Продукция компании</p>
</div>
</article>


<article className="collage-card absolute left-3 right-auto bottom-[13%] top-auto md:left-auto md:right-[8%] md:bottom-[50%] w-[calc(50%-1rem)] h-[22%] md:w-[24%] md:h-[24%] rounded overflow-hidden shadow-2xl" data-direction="1,-1">
<img alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1c4fa0c-ce16-4ed3-ae1b-db525748c93e_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5">
<p className="text-[10px] md:text-xs uppercase tracking-widest text-white/80 leading-relaxed">Сотрудничество с НИИ</p>
</div>
</article>


<article className="collage-card absolute right-3 left-auto bottom-[13%] top-auto md:right-[8%] md:bottom-[8%] w-[calc(50%-1rem)] h-[22%] md:w-[24%] md:h-[38%] rounded overflow-hidden shadow-2xl" data-direction="1,1">
<img alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb074d68-e7a8-4698-ac04-858d429248c9_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5">
<p className="text-[10px] md:text-xs uppercase tracking-widest text-white/80 leading-relaxed">Поддержка фермеров </p>
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
<h1 className="text-[16vw] md:text-[12vw] lg:text-[9vw] leading-none animate-fade-up animation-delay-500 font-medium text-white tracking-tight opacity-0 mix-blend-overlay">Амарант</h1>
<p className="uppercase animate-fade-up animation-delay-700 text-lg md:text-xl font-semibold text-zinc-50/90 tracking-widest opacity-0 mt-6 md:mt-8 mb-8 md:mb-10">Будущее здорового питания и кормопроизводства </p>

<div className="animate-fade-up animation-delay-1000 opacity-0 mt-8">
<a className="cta-button group inline-flex items-center gap-3 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm font-semibold text-white rounded-full pt-3 pr-5 pb-3 pl-5 relative shadow-lg tracking-wide uppercase bg-green-600" href="#about">
<span className="z-10 relative">Купить семена амаранта</span>
<span className="relative z-10 inline-flex items-center justify-center w-6 h-6 bg-white/20 rounded-full">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
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
                                    Включить звук
                                </span>
</button>
</div>

<div className="border-t border-white/10 bg-black/30 backdrop-blur-sm opacity-0 animate-fade-up animation-delay-1000">
<div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
<div className="p-6 lg:py-6 lg:px-8 text-center hover:bg-white/5 transition-colors">
<p className="uppercase leading-relaxed text-[10px] text-white/70 tracking-widest font-semibold"> &gt; 20 лет опыта  возделывания и исследования</p>
</div>
<div className="p-6 lg:py-6 lg:px-8 text-center hover:bg-white/5 transition-colors">
<p className="uppercase leading-relaxed text-[10px] text-white/70 tracking-widest font-semibold">патентованные сорта семян собственной селекции</p>
</div>
<div className="p-6 lg:py-6 lg:px-8 text-center hover:bg-white/5 transition-colors">
<p className="uppercase leading-relaxed text-[10px] text-white/70 tracking-widest font-semibold">Собственное производство продукции  из амаранта </p>
</div>
<div className="p-6 lg:py-6 lg:px-8 hover:bg-white/5 transition-colors text-center">
<p className="uppercase leading-relaxed text-[10px] text-white/70 tracking-widest font-semibold">Сотрудничество с ведущими научными институтами</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="about-title" className="z-10 lg:py-24 lg:pb-12 bg-white pt-16 pb-16 relative" id="about">
<div className="lg:px-10 max-w-screen-2xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 gap-x-12 gap-y-12 items-center">

<div className="observe-fade">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-bold mb-6">Семена амаранта
                        </p>
<h2 className="sm:text-5xl lg:text-6xl text-brand-primary leading-[0.95] text-4xl font-medium tracking-tight text-neutral-900" id="about-title">
                            Семяна собственной селекции 
                        </h2>
<div className="mt-10 hidden lg:block">
<div className="w-24 h-0.5 bg-neutral-900"></div>
</div>
<br/>
<p className="text-xl sm:text-2xl font-medium text-neutral-800 leading-normal mb-8 tracking-tight">
                           Репродукция: Элита <br/>
                           Всхожесть: 99% <br/>
                           Семена сертифицированы. 
                        </p>
<p></p>

<div className="animate-fade-up animation-delay-1000 opacity-0 mt-8">
<a className="cta-button group inline-flex items-center gap-3 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm font-semibold text-white rounded-full pt-3 pr-5 pb-3 pl-5 relative shadow-lg tracking-wide uppercase bg-green-600" href="#about">
<span className="z-10 relative">Купить семена амаранта</span>
<span className="relative z-10 inline-flex items-center justify-center w-6 h-6 bg-white/20 rounded-full">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</a>
</div>
</div>

<div className="observe-fade" style={{}}>
<div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-neutral-100">
<img alt="Молочная продукция Молвест" className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb0cfc8f-0c7b-4867-9aeb-9cb2823efaf7_1600w.png"/>
<div className="absolute bottom-6 left-6 flex gap-2">
<span className="px-3 py-1 bg-white/90 backdrop-blur text-neutral-900 flex items-center justify-center text-[10px] font-bold tracking-widest uppercase shadow-sm rounded-sm">Ведущие институты</span>
<span className="px-3 py-1 bg-white/90 backdrop-blur text-neutral-900 flex items-center justify-center text-[10px] font-bold tracking-widest uppercase shadow-sm rounded-sm">патенты</span>
</div>
</div>
</div>

<div className="observe-fade lg:pl-8 lg:pr-24">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-bold mb-7">Описание
                        </p>
<div className="w-full h-px bg-neutral-200 mb-2"></div>
<p className="text-sm text-neutral-600 leading-6 text-justify mb-8 font-medium">
                            Амарант — инновационная кормовая культура с высокой засухоустойчивостью и высоким содержанием белка. Он  идеально подходит для сбалансированного питания крупного рогатого скота и птиц. Также, растение активно применяется в пищевой, фармацевтической и косметической промышленностях. Наш сорт начал активно использоваться в расширении ассортиментов для здорового питания. Молоко, колбасы, крупы, макаронные изделия, безалкогольные напитки — амарант может использоваться практически в любой отрасли.

                        </p>
<a className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-neutral-900 border-b border-neutral-300 pb-1 hover:border-neutral-900 transition-colors" href="#">
                            Подробнее
                            <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section aria-label="Пазл здоровья" className="relative w-full overflow-hidden" id="health-puzzle" style={{height: 'auto', minHeight: '100vh'}}>

<div className="absolute inset-0 z-0 flex flex-col pointer-events-none">
<div className="h-1/2 w-full bg-white"></div>
<div className="h-1/2 w-full relative">
<img alt="Background nature" className="absolute inset-0 w-full h-full object-cover brightness-[0.7]" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8d3ba76-5100-4964-a9ea-7bc1a82313a4_3840w.jpg"/>
<div className="absolute inset-0 bg-black/20"></div>
</div>
</div>

<div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-10 py-20 lg:py-12 h-full flex flex-col is-visible pt-8 md:pt-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start flex-col is-visible pt-8 md:pt-2">

<div className="observe-fade flex flex-col is-visible pt-8 md:pt-32">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-bold mb-6">Наша продукция</p>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 mb-8 leading-[1.1]">
                            Пазл здоровья.
                        </h2>
<div className="space-y-6 max-w-xl">
<p className="text-neutral-600 leading-relaxed font-medium">
                                Ваше тело – 40 триллионов клеток. Каждая мембрана строится из жирных кислот. Омега 3, 6 и 9 из амаранта чистое клеточное топливо. Защищает все клетки, ускоряет обновление, блокирует старение. Это базовая потребность каждой вашей клетки организма.
                            </p>
</div>
<div className="mt-14 lg:mt-24">
<a className="cta-button group inline-flex items-center gap-3 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm font-semibold text-white rounded-full pt-3 pr-5 pb-3 pl-5 relative shadow-lg tracking-wide uppercase bg-green-600" href="#contact">
<span className="z-10 relative">Получить консультацию</span>
<span className="relative z-10 inline-flex items-center justify-center w-6 h-6 bg-white/20 rounded-full">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</a>
</div>
</div>

<div className="observe-fade relative w-full" id="cards-slider-container">

<div className="overflow-hidden w-full pt-6 md:pt-32 lg:pt-48 pb-12 px-4">
<div className="flex gap-6 transition-transform duration-500 ease-out will-change-transform" id="cards-track">

<div className="slider-card flex-shrink-0 w-full md:w-[calc(50%-12px)] group relative bg-white rounded shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default h-[450px]">
<div className="h-3/5 overflow-hidden relative">
<img alt="Омега-3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a84cf90b-6eec-40d6-ad6c-ad04ef568b50_800w.png"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="h-2/5 p-6 md:p-8 flex flex-col justify-center bg-white relative z-10">
<h3 className="text-xl md:text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Набор для оздоровления СЕРДЦЕ</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-medium">Высокое содержание незаменимых жирных кислот для здоровья сердца и сосудов.</p>
</div>
</div>

<div className="slider-card flex-shrink-0 w-full md:w-[calc(50%-12px)] group relative bg-white rounded shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default h-[450px]">
<div className="h-3/5 overflow-hidden relative">
<img alt="Антиоксиданты" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f551325d-9e3d-4ca4-bf2b-dcbd2bd1e62f_800w.png"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="h-2/5 p-6 md:p-8 flex flex-col justify-center bg-white relative z-10">
<h3 className="text-xl md:text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Набор для оздоровления МОЗГ</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-medium">Мощная защита клеток организма от окислительного стресса и старения.</p>
</div>
</div>

<div className="slider-card flex-shrink-0 w-full md:w-[calc(50%-12px)] group relative bg-white rounded shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default h-[450px]">
<div className="h-3/5 overflow-hidden relative">
<img alt="Белок" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1177fce-1721-426e-8818-f028c1039524_800w.png"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="h-2/5 p-6 md:p-8 flex flex-col justify-center bg-white relative z-10">
<h3 className="text-xl md:text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Набор для оздоровления ПОЧКИ</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-medium">Полноценный растительный белок с идеальным аминокислотным профилем.</p>
</div>
</div>

<div className="slider-card flex-shrink-0 w-full md:w-[calc(50%-12px)] group relative bg-white rounded shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default h-[450px]">
<div className="h-3/5 overflow-hidden relative">
<img alt="Клетчатка" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67456745-3f2e-47ac-b680-3a9fe590299b_800w.png"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="h-2/5 p-6 md:p-8 flex flex-col justify-center bg-white relative z-10">
<h3 className="text-xl md:text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Набор для оздоровления ПЕЧЕНЬ</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-medium">Высокое содержание пищевых волокон для здорового пищеварения.</p>
</div>
</div>

<div className="slider-card flex-shrink-0 w-full md:w-[calc(50%-12px)] group relative bg-white rounded shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default h-[450px]">
<div className="h-3/5 overflow-hidden relative">
<img alt="Витамины" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a84cf90b-6eec-40d6-ad6c-ad04ef568b50_800w.png"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="h-2/5 p-6 md:p-8 flex flex-col justify-center bg-white relative z-10">
<h3 className="text-xl md:text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Оздоровление всего организма</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-medium">Богатый комплекс витаминов группы B, E и C для иммунитета.</p>
</div>
</div>
</div>
</div>

<div className="mt-10 flex items-center justify-between px-8">

<div className="flex gap-2" id="slider-dots">

</div>

<div className="flex gap-2">
<button aria-label="Предыдущий слайд" className="w-12 h-12 flex items-center justify-center bg-white hover:bg-neutral-100 text-neutral-900 rounded-sm shadow-lg transition-colors duration-300" id="prev-slide">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button aria-label="Следующий слайд" className="w-12 h-12 flex items-center justify-center bg-white hover:bg-neutral-100 text-neutral-900 rounded-sm shadow-lg transition-colors duration-300" id="next-slide">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>



    </>
  );
}
