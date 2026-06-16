import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);
            
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            // --- Slider Logic ---
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.slider-dot');
            const counter = document.getElementById('slide-counter');
            const prevBtn = document.getElementById('slider-prev');
            const nextBtn = document.getElementById('slider-next');
            const sliderContainer = document.getElementById('slider-container');
            
            let currentIndex = 0;
            let isAnimating = false;
            let slideTimer;
            let bgTween;

            function initSlider() {
                if (slides.length === 0) return;
                
                // Initial visibility setup
                gsap.set(slides, { opacity: 0, zIndex: 10 });
                gsap.set(slides[0], { opacity: 1, zIndex: 20 });
                gsap.set(slides[0], { pointerEvents: "auto" });
                gsap.set(dots[0], { width: 24, backgroundColor: "#F0EDE6" });
                
                if (!prefersReducedMotion) {
                    gsap.fromTo(slides[0].querySelectorAll('.slide-content'), 
                        { y: 20, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out", delay: 0.2 }
                    );
                    
                    bgTween = gsap.fromTo(slides[0].querySelector('.slide-bg'),
                        { scale: 1.05 },
                        { scale: 1, duration: 6, ease: "none" }
                    );
                }

                startTimer();
            }

            function goToSlide(nextIndex, direction = 1) {
                if (isAnimating || nextIndex === currentIndex) return;
                isAnimating = true;

                const currentSlide = slides[currentIndex];
                const nextSlide = slides[nextIndex];

                if (bgTween) bgTween.kill();

                const tl = gsap.timeline({
                    onComplete: () => {
                        gsap.set(currentSlide, { pointerEvents: "none" });
                        gsap.set(nextSlide, { pointerEvents: "auto" });
                        isAnimating = false;
                        currentIndex = nextIndex;
                    }
                });

                // Layering logic
                gsap.set(nextSlide, { zIndex: 20 });
                gsap.set(currentSlide, { zIndex: 10 });
                
                if (!prefersReducedMotion) {
                    gsap.set(nextSlide.querySelectorAll(".slide-content"), { y: 20, opacity: 0 });

                    // Cross-fade & push out
                    tl.to(currentSlide, {
                        opacity: 0,
                        x: -30 * direction,
                        duration: 0.7,
                        ease: "power2.inOut"
                    }, 0);

                    // Cross-fade & push in
                    gsap.set(nextSlide, { x: 30 * direction, opacity: 0 });
                    tl.to(nextSlide, {
                        opacity: 1,
                        x: 0,
                        duration: 0.7,
                        ease: "power2.out"
                    }, 0.6);

                    // Text stagger
                    tl.to(nextSlide.querySelectorAll(".slide-content"), {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        duration: 0.5,
                        ease: "power2.out"
                    }, 0.8);

                    // Dot indicators GSAP transition
                    tl.to(dots, { width: 8, backgroundColor: "transparent", duration: 0.3, ease: "power2.out" }, 0);
                    tl.to(dots[nextIndex], { width: 24, backgroundColor: "#F0EDE6", duration: 0.3, ease: "power2.out" }, 0);
                    
                    // Ken burns background
                    bgTween = gsap.fromTo(nextSlide.querySelector(".slide-bg"),
                        { scale: 1.05 },
                        { scale: 1, duration: 6, ease: "none" }
                    );
                } else {
                    // Fallback
                    tl.to(currentSlide, { opacity: 0, duration: 0.1 }, 0);
                    tl.to(nextSlide, { opacity: 1, duration: 0.1 }, 0.1);
                    gsap.set(dots, { width: 8, backgroundColor: "transparent" });
                    gsap.set(dots[nextIndex], { width: 24, backgroundColor: "#F0EDE6" });
                }

                counter.innerText = `0${nextIndex + 1} / 0${slides.length}`;
            }

            function nextSlide() {
                goToSlide((currentIndex + 1) % slides.length, 1);
                resetTimer();
            }

            function prevSlide() {
                goToSlide((currentIndex - 1 + slides.length) % slides.length, -1);
                resetTimer();
            }

            function startTimer() {
                slideTimer = setInterval(nextSlide, 6000);
            }

            function resetTimer() {
                clearInterval(slideTimer);
                startTimer();
            }

            if (nextBtn) nextBtn.addEventListener('click', nextSlide);
            if (prevBtn) prevBtn.addEventListener('click', prevSlide);

            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    if (index > currentIndex) {
                        goToSlide(index, 1);
                    } else if (index < currentIndex) {
                        goToSlide(index, -1);
                    }
                    resetTimer();
                });
            });

            if (sliderContainer) {
                sliderContainer.addEventListener('mouseenter', () => clearInterval(slideTimer));
                sliderContainer.addEventListener('mouseleave', startTimer);

                let touchStartX = 0;
                sliderContainer.addEventListener('touchstart', (e) => {
                    touchStartX = e.touches[0].clientX;
                    clearInterval(slideTimer);
                }, { passive: true });

                sliderContainer.addEventListener('touchend', (e) => {
                    const touchEndX = e.changedTouches[0].clientX;
                    const deltaX = touchStartX - touchEndX;
                    if (deltaX > 50) nextSlide();
                    else if (deltaX < -50) prevSlide();
                    startTimer();
                }, { passive: true });
            }

            initSlider();

            // --- Scroll Animations for other content ---
            if (!prefersReducedMotion) {
                // Navbar scroll
                let lastScrollY = window.scrollY;
                const navbar = document.getElementById("navbar");

                window.addEventListener("scroll", () => {
                    if (window.scrollY > 50) {
                        if (window.scrollY > lastScrollY) {
                            navbar.style.transform = "translateY(-100%)";
                        } else {
                            navbar.style.transform = "translateY(0)";
                        }
                    } else {
                        navbar.style.transform = "translateY(0)";
                    }
                    lastScrollY = window.scrollY;
                });

                // Sections reveal
                gsap.utils.toArray('.month-header-text').forEach(header => {
                    gsap.fromTo(header,
                        { letterSpacing: "0.3em", opacity: 0 },
                        {
                            letterSpacing: "0em",
                            opacity: 1,
                            duration: 0.7,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: header,
                                start: "top 85%",
                            }
                        }
                    );
                });

                gsap.utils.toArray('.month-section').forEach(section => {
                    const cards = section.querySelectorAll('.event-card');
                    gsap.to(cards, {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.08,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                        }
                    });
                });
            } else {
                gsap.set(".month-header-text, .event-card", { y: 0, opacity: 1, letterSpacing: "0em" });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#3A3A3A] transition-transform duration-300 transform" id="navbar">
<div className="max-w-[1400px] mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
<a className="flex flex-col z-50 relative group" href="/">
<span className="font-anton text-2xl md:text-3xl tracking-tight text-[#F0EDE6] group-hover:text-[#C0001A] transition-colors">L'ENTREPÔT</span>
</a>
<div className="hidden lg:flex items-center space-x-8 text-sm tracking-widest uppercase font-oswald text-[#a3a3a3]">
<a className="hover:text-[#F0EDE6] transition-colors" href="#archives">Archives</a>
<a className="hover:text-[#F0EDE6] transition-colors" href="#artistes">Artistes</a>
<a className="hover:text-[#F0EDE6] text-[#C0001A] transition-colors" href="#tickets">Tickets</a>
<a className="hover:text-[#F0EDE6] transition-colors" href="#photos">Photos</a>
<a className="hover:text-[#F0EDE6] transition-colors" href="#locaux">Locaux de Répétition</a>
<a className="hover:text-[#F0EDE6] transition-colors" href="#news">News</a>
<a className="hover:text-[#F0EDE6] transition-colors" href="#info">Info</a>
</div>
<div className="flex items-center space-x-4 md:space-x-6 z-50">
<div className="flex items-center space-x-2 text-xs font-oswald uppercase tracking-widest text-[#a3a3a3]">
<button className="text-[#F0EDE6]">FR</button>
<span className="text-[#3A3A3A]">/</span>
<button className="hover:text-[#F0EDE6] transition-colors">EN</button>
</div>
<button className="lg:hidden text-[#F0EDE6]">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen overflow-hidden bg-black select-none" id="slider-container">

<div className="slide absolute inset-0 w-full h-full opacity-0 z-10 pointer-events-none">
<div className="absolute inset-0 z-0">
<img alt="DeWolff Concert" className="slide-bg w-full h-full object-cover object-center opacity-60 mix-blend-luminosity origin-center" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 w-full h-[60%] bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent"></div>
</div>
<div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 w-full h-full flex flex-col justify-center pt-16">
<div className="max-w-4xl">
<div className="slide-content overflow-hidden mb-4">
<span className="inline-block text-xs text-[#C0001A] font-oswald uppercase tracking-widest bg-[#C0001A]/10 border border-[#C0001A]/20 px-2 py-1">Upcoming</span>
</div>
<div className="slide-content overflow-hidden mb-2">
<h2 className="font-anton text-5xl md:text-[6rem] leading-[0.85] tracking-tighter text-[#F0EDE6] uppercase">DEWOLFF</h2>
</div>
<div className="slide-content overflow-hidden mb-6">
<p className="font-oswald text-lg md:text-2xl text-[#a3a3a3] uppercase tracking-tight">+ THE FLYNTS</p>
</div>
<div className="slide-content overflow-hidden mb-8">
<p className="font-oswald text-[#C0001A] text-xl md:text-2xl font-semibold uppercase tracking-widest">SAM 26/04</p>
</div>
<div className="slide-content flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center bg-[#F0EDE6] text-[#0a0a0a] px-8 py-3 text-sm font-oswald uppercase tracking-widest hover:bg-white transition-colors duration-300" href="#">
                            Tickets
                        </a>
<a className="inline-flex items-center justify-center border border-[#F0EDE6] text-[#F0EDE6] px-8 py-3 text-sm font-oswald uppercase tracking-widest hover:bg-[#F0EDE6] hover:text-[#0a0a0a] transition-colors duration-300" href="#">
                            Facebook Event
                        </a>
</div>
</div>
</div>
</div>

<div className="slide absolute inset-0 w-full h-full opacity-0 z-10 pointer-events-none">
<div className="absolute inset-0 z-0">
<img alt="Boucan Monstre" className="slide-bg w-full h-full object-cover object-top opacity-60 mix-blend-luminosity origin-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 w-full h-[60%] bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent"></div>
</div>
<div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 w-full h-full flex flex-col justify-center pt-16">
<div className="max-w-4xl">
<div className="slide-content overflow-hidden mb-4">
<span className="inline-block text-xs text-[#C0001A] font-oswald uppercase tracking-widest bg-[#C0001A]/10 border border-[#C0001A]/20 px-2 py-1">Upcoming</span>
</div>
<div className="slide-content overflow-hidden mb-2">
<h2 className="font-anton text-5xl md:text-[6rem] leading-[0.85] tracking-tighter text-[#F0EDE6] uppercase">BOUCAN MONSTRE</h2>
</div>
<div className="slide-content overflow-hidden mb-6">
<p className="font-oswald text-lg md:text-2xl text-[#a3a3a3] uppercase tracking-tight">HEAVY LUNGS (GB) <span className="text-[#3A3A3A] hidden md:inline mx-2">|</span> REAL FARMER (NL)</p>
</div>
<div className="slide-content overflow-hidden mb-8">
<p className="font-oswald text-[#C0001A] text-xl md:text-2xl font-semibold uppercase tracking-widest">VEN 24/04</p>
</div>
<div className="slide-content flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center bg-[#F0EDE6] text-[#0a0a0a] px-8 py-3 text-sm font-oswald uppercase tracking-widest hover:bg-white transition-colors duration-300" href="#">
                            Tickets
                        </a>
<a className="inline-flex items-center justify-center border border-[#F0EDE6] text-[#F0EDE6] px-8 py-3 text-sm font-oswald uppercase tracking-widest hover:bg-[#F0EDE6] hover:text-[#0a0a0a] transition-colors duration-300" href="#">
                            Facebook Event
                        </a>
</div>
</div>
</div>
</div>

<div className="slide absolute inset-0 w-full h-full opacity-0 z-10 pointer-events-none">
<div className="absolute inset-0 z-0">
<img alt="Ultra Haute Frequence" className="slide-bg w-full h-full object-cover object-center opacity-60 mix-blend-luminosity origin-center" src="https://images.unsplash.com/photo-1549834125-82d3c48159a3?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 w-full h-[60%] bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent"></div>
</div>
<div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 w-full h-full flex flex-col justify-center pt-16">
<div className="max-w-4xl">
<div className="slide-content overflow-hidden mb-4">
<span className="inline-block text-xs text-[#C0001A] font-oswald uppercase tracking-widest bg-[#C0001A]/10 border border-[#C0001A]/20 px-2 py-1">Upcoming</span>
</div>
<div className="slide-content overflow-hidden mb-2">
<h2 className="font-anton text-5xl md:text-[6rem] leading-[0.85] tracking-tighter text-[#F0EDE6] uppercase">ULTRA HAUTE FRÉQUENCE</h2>
</div>
<div className="slide-content overflow-hidden mb-6">
<p className="font-oswald text-lg md:text-2xl text-[#a3a3a3] uppercase tracking-tight">UHF X SAY @ TRINITAIRES</p>
</div>
<div className="slide-content overflow-hidden mb-8">
<p className="font-oswald text-[#C0001A] text-xl md:text-2xl font-semibold uppercase tracking-widest">SAM 25/04</p>
</div>
<div className="slide-content flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center bg-[#F0EDE6] text-[#0a0a0a] px-8 py-3 text-sm font-oswald uppercase tracking-widest hover:bg-white transition-colors duration-300" href="#">
                            Tickets
                        </a>
<a className="inline-flex items-center justify-center border border-[#F0EDE6] text-[#F0EDE6] px-8 py-3 text-sm font-oswald uppercase tracking-widest hover:bg-[#F0EDE6] hover:text-[#0a0a0a] transition-colors duration-300" href="#">
                            Facebook Event
                        </a>
</div>
</div>
</div>
</div>

<div className="slide absolute inset-0 w-full h-full opacity-0 z-10 pointer-events-none">
<div className="absolute inset-0 z-0">
<img alt="Hi Fi Spitfires" className="slide-bg w-full h-full object-cover object-center opacity-60 mix-blend-luminosity origin-center" src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 w-full h-[60%] bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent"></div>
</div>
<div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 w-full h-full flex flex-col justify-center pt-16">
<div className="max-w-4xl">
<div className="slide-content overflow-hidden mb-4">
<span className="inline-block text-xs text-[#C0001A] font-oswald uppercase tracking-widest bg-[#C0001A]/10 border border-[#C0001A]/20 px-2 py-1">Upcoming</span>
</div>
<div className="slide-content overflow-hidden mb-2">
<h2 className="font-anton text-5xl md:text-[6rem] leading-[0.85] tracking-tighter text-[#F0EDE6] uppercase">HI FI SPITFIRES</h2>
</div>
<div className="slide-content overflow-hidden mb-6">
<p className="font-oswald text-lg md:text-2xl text-[#a3a3a3] uppercase tracking-tight">DOWN YER PINT</p>
</div>
<div className="slide-content overflow-hidden mb-8">
<p className="font-oswald text-[#C0001A] text-xl md:text-2xl font-semibold uppercase tracking-widest">MER 06/05</p>
</div>
<div className="slide-content flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center bg-[#F0EDE6] text-[#0a0a0a] px-8 py-3 text-sm font-oswald uppercase tracking-widest hover:bg-white transition-colors duration-300" href="#">
                            Tickets
                        </a>
<a className="inline-flex items-center justify-center border border-[#F0EDE6] text-[#F0EDE6] px-8 py-3 text-sm font-oswald uppercase tracking-widest hover:bg-[#F0EDE6] hover:text-[#0a0a0a] transition-colors duration-300" href="#">
                            Facebook Event
                        </a>
</div>
</div>
</div>
</div>

<button className="hidden md:flex absolute top-1/2 left-4 md:left-8 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center bg-transparent border border-transparent hover:bg-[#F0EDE6]/10 hover:border-[#F0EDE6]/20 transition-colors duration-300 text-[#F0EDE6]" id="slider-prev">
<iconify-icon className="text-2xl" icon="solar:alt-arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="hidden md:flex absolute top-1/2 right-4 md:right-8 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center bg-transparent border border-transparent hover:bg-[#F0EDE6]/10 hover:border-[#F0EDE6]/20 transition-colors duration-300 text-[#F0EDE6]" id="slider-next">
<iconify-icon className="text-2xl" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
<button className="slider-dot w-2 h-2 rounded-full border border-[#F0EDE6] bg-transparent cursor-pointer"></button>
<button className="slider-dot w-2 h-2 rounded-full border border-[#F0EDE6] bg-transparent cursor-pointer"></button>
<button className="slider-dot w-2 h-2 rounded-full border border-[#F0EDE6] bg-transparent cursor-pointer"></button>
<button className="slider-dot w-2 h-2 rounded-full border border-[#F0EDE6] bg-transparent cursor-pointer"></button>
</div>
<div className="absolute bottom-8 right-4 md:right-8 z-30 text-xs font-mono tracking-widest text-[#a3a3a3]">
<span id="slide-counter">01 / 04</span>
</div>
</header>

<section className="border-y border-[#3A3A3A] bg-[#0a0a0a] relative z-20">
<div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory">
<a className="flex-none w-64 md:w-80 p-4 border-r border-[#3A3A3A] snap-start group hover:bg-[#111111] transition-colors flex items-center gap-4" href="#">
<div className="w-16 h-16 bg-[#1a1a1a] flex-shrink-0 overflow-hidden">
<img alt="Artist" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col justify-center">
<span className="text-xs text-[#C0001A] font-oswald tracking-widest uppercase mb-1">24.04</span>
<h3 className="font-anton text-xl tracking-tight leading-none uppercase truncate group-hover:text-[#C0001A] transition-colors">BOUCAN MONSTRE</h3>
</div>
</a>
<a className="flex-none w-64 md:w-80 p-4 border-r border-[#3A3A3A] snap-start group hover:bg-[#111111] transition-colors flex items-center gap-4" href="#">
<div className="w-16 h-16 bg-[#1a1a1a] flex-shrink-0 overflow-hidden">
<img alt="Artist" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1549834125-82d3c48159a3?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center">
<span className="text-xs text-[#C0001A] font-oswald tracking-widest uppercase mb-1">25.04</span>
<h3 className="font-anton text-xl tracking-tight leading-none uppercase truncate group-hover:text-[#C0001A] transition-colors">UHF X SAY</h3>
</div>
</a>
<a className="flex-none w-64 md:w-80 p-4 border-r border-[#3A3A3A] snap-start group hover:bg-[#111111] transition-colors flex items-center gap-4" href="#">
<div className="w-16 h-16 bg-[#1a1a1a] flex-shrink-0 overflow-hidden">
<img alt="Artist" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center">
<span className="text-xs text-[#C0001A] font-oswald tracking-widest uppercase mb-1">06.05</span>
<h3 className="font-anton text-xl tracking-tight leading-none uppercase truncate group-hover:text-[#C0001A] transition-colors">HI FI SPITFIRES</h3>
</div>
</a>
<a className="flex-none w-64 md:w-80 p-4 border-r border-[#3A3A3A] snap-start group hover:bg-[#111111] transition-colors flex items-center gap-4" href="#">
<div className="w-16 h-16 bg-[#1a1a1a] flex-shrink-0 flex items-center justify-center text-[#3A3A3A]">
<iconify-icon className="text-2xl" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col justify-center">
<h3 className="font-oswald font-medium text-sm tracking-widest uppercase group-hover:text-[#F0EDE6] text-[#a3a3a3] transition-colors">VOIR TOUT L'AGENDA</h3>
</div>
</a>
</div>
</section>

<main className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 relative z-20">
<div className="lg:col-span-8 space-y-24">
<section className="month-section">
<div className="mb-12 border-b border-[#3A3A3A] pb-4 flex justify-between items-end overflow-hidden">
<h2 className="font-anton text-6xl md:text-[8vw] leading-none text-[#F0EDE6] tracking-tighter uppercase month-header-text opacity-0">AVRIL 2026</h2>
<span className="text-xs font-oswald tracking-widest uppercase text-[#a3a3a3] hidden md:block">3 Événements</span>
</div>
<div className="space-y-4 md:space-y-6">
<article className="event-card relative group flex flex-col md:flex-row bg-[#0d0d0d] border border-[#1a1a1a] hover:border-[#3A3A3A] transition-all duration-300 opacity-0 transform translate-y-8">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#C0001A] transition-all duration-300 group-hover:w-1"></div>
<div className="md:hidden flex items-center gap-4 p-4 border-b border-[#1a1a1a]">
<span className="font-anton text-3xl text-[#C0001A]">24</span>
<span className="font-oswald uppercase tracking-widest text-[#a3a3a3] text-sm">Ven 20H</span>
</div>
<div className="w-full md:w-56 h-48 md:h-auto flex-shrink-0 overflow-hidden relative">
<img alt="Boucan Monstre" className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-2 right-2 bg-[#C0001A] text-xs font-oswald uppercase tracking-wider px-2 py-1 text-[#F0EDE6]">Garage Punk</div>
</div>
<div className="p-6 md:p-8 flex-1 flex flex-col justify-between group-hover:translate-x-2 transition-transform duration-300">
<div>
<div className="hidden md:flex items-baseline gap-3 mb-2">
<span className="font-anton text-4xl text-[#C0001A] tracking-tight">24</span>
<span className="font-oswald uppercase tracking-widest text-[#a3a3a3] text-sm">Ven / 20H00</span>
</div>
<h3 className="font-oswald text-3xl md:text-4xl uppercase tracking-tight text-[#F0EDE6] mb-1">BOUCAN MONSTRE</h3>
<p className="text-sm font-oswald uppercase tracking-widest text-[#888888]">HEAVY LUNGS (GB) <br/>REAL FARMER (NL)</p>
</div>
<div className="mt-6 pt-6 border-t border-[#1a1a1a] flex flex-wrap items-center justify-between gap-4">
<span className="font-oswald text-[#F0EDE6] text-lg tracking-tight">17€ / 19€</span>
<div className="flex items-center gap-3">
<a className="text-[#a3a3a3] hover:text-[#4267B2] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="border border-[#3A3A3A] px-4 py-1.5 text-xs font-oswald uppercase tracking-widest hover:border-[#F0EDE6] hover:bg-[#F0EDE6] hover:text-[#0a0a0a] transition-colors" href="#">Tickets UTICK</a>
</div>
</div>
</div>
</article>
<article className="event-card relative group flex flex-col md:flex-row bg-[#0d0d0d] border border-[#1a1a1a] hover:border-[#3A3A3A] transition-all duration-300 opacity-0 transform translate-y-8">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#3A3A3A] transition-all duration-300 group-hover:w-1 group-hover:bg-[#F0EDE6]"></div>
<div className="md:hidden flex items-center gap-4 p-4 border-b border-[#1a1a1a]">
<span className="font-anton text-3xl text-[#F0EDE6]">25</span>
<span className="font-oswald uppercase tracking-widest text-[#a3a3a3] text-sm">Sam 20H</span>
</div>
<div className="w-full md:w-56 h-48 md:h-auto flex-shrink-0 overflow-hidden relative bg-[#111111] flex items-center justify-center p-8">
<h4 className="font-anton text-5xl text-[#C0001A] text-center rotate-[-5deg]">UHF</h4>
<div className="absolute top-2 right-2 bg-[#3A3A3A] text-xs font-oswald uppercase tracking-wider px-2 py-1 text-[#F0EDE6]">Hors les murs</div>
</div>
<div className="p-6 md:p-8 flex-1 flex flex-col justify-between group-hover:translate-x-2 transition-transform duration-300">
<div>
<div className="hidden md:flex items-baseline gap-3 mb-2">
<span className="font-anton text-4xl text-[#F0EDE6] tracking-tight">25</span>
<span className="font-oswald uppercase tracking-widest text-[#a3a3a3] text-sm">Sam / 20H00</span>
</div>
<h3 className="font-oswald text-3xl md:text-4xl uppercase tracking-tight text-[#F0EDE6] mb-1">ULTRA HAUTE FRÉQUENCE</h3>
<p className="text-sm font-oswald uppercase tracking-widest text-[#888888]">UHF X SAY @ TRINITAIRES, METZ</p>
</div>
<div className="mt-6 pt-6 border-t border-[#1a1a1a] flex flex-wrap items-center justify-between gap-4">
<span className="font-oswald text-[#F0EDE6] text-lg tracking-tight">7€ / 7€</span>
<div className="flex items-center gap-3">
<a className="text-[#a3a3a3] hover:text-[#4267B2] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="border border-[#3A3A3A] px-4 py-1.5 text-xs font-oswald uppercase tracking-widest hover:border-[#F0EDE6] hover:bg-[#F0EDE6] hover:text-[#0a0a0a] transition-colors" href="#">Shop Secutix</a>
</div>
</div>
</div>
</article>
</div>
</section>
<section className="month-section">
<div className="mb-12 border-b border-[#3A3A3A] pb-4 overflow-hidden">
<h2 className="font-anton text-6xl md:text-[8vw] leading-none text-[#F0EDE6] tracking-tighter uppercase month-header-text opacity-0">MAI 2026</h2>
</div>
<div className="space-y-4 md:space-y-6">
<article className="event-card relative group flex flex-col md:flex-row bg-[#0d0d0d] border border-[#1a1a1a] hover:border-[#3A3A3A] transition-all duration-300 opacity-0 transform translate-y-8">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#C0001A] transition-all duration-300 group-hover:w-1"></div>
<div className="md:hidden flex items-center gap-4 p-4 border-b border-[#1a1a1a]">
<span className="font-anton text-3xl text-[#C0001A]">06</span>
<span className="font-oswald uppercase tracking-widest text-[#a3a3a3] text-sm">Mer 20H</span>
</div>
<div className="w-full md:w-56 h-48 md:h-auto flex-shrink-0 overflow-hidden relative">
<img alt="Hi Fi Spitfires" className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 right-2 bg-[#C0001A] text-xs font-oswald uppercase tracking-wider px-2 py-1 text-[#F0EDE6]">Punk Rock</div>
</div>
<div className="p-6 md:p-8 flex-1 flex flex-col justify-between group-hover:translate-x-2 transition-transform duration-300">
<div>
<div className="hidden md:flex items-baseline gap-3 mb-2">
<span className="font-anton text-4xl text-[#C0001A] tracking-tight">06</span>
<span className="font-oswald uppercase tracking-widest text-[#a3a3a3] text-sm">Mer / 20H00</span>
</div>
<h3 className="font-oswald text-3xl md:text-4xl uppercase tracking-tight text-[#F0EDE6] mb-1">HI FI SPITFIRES <span className="text-lg text-[#888888] font-medium">(GB)</span></h3>
<p className="text-sm font-oswald uppercase tracking-widest text-[#888888]">DOWN YER PINT</p>
</div>
<div className="mt-6 pt-6 border-t border-[#1a1a1a] flex flex-wrap items-center justify-between gap-4">
<span className="font-oswald text-[#F0EDE6] text-lg tracking-tight">16€ / 18€</span>
<div className="flex items-center gap-3">
<a className="border border-[#3A3A3A] px-4 py-1.5 text-xs font-oswald uppercase tracking-widest hover:border-[#F0EDE6] hover:bg-[#F0EDE6] hover:text-[#0a0a0a] transition-colors" href="#">Tickets UTICK</a>
</div>
</div>
</div>
</article>
<article className="event-card relative group flex flex-col md:flex-row bg-[#0d0d0d] border border-[#1a1a1a] hover:border-[#3A3A3A] transition-all duration-300 opacity-0 transform translate-y-8">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#3A3A3A] transition-all duration-300 group-hover:w-1 group-hover:bg-[#F0EDE6]"></div>
<div className="p-6 md:p-8 flex-1 flex flex-col justify-between group-hover:translate-x-2 transition-transform duration-300">
<div>
<div className="flex items-baseline gap-3 mb-2">
<span className="font-anton text-4xl text-[#F0EDE6] tracking-tight">08</span>
<span className="font-oswald uppercase tracking-widest text-[#a3a3a3] text-sm">Ven / 20H30</span>
</div>
<h3 className="font-oswald text-3xl md:text-4xl uppercase tracking-tight text-[#F0EDE6] mb-1">LES JAMERIES</h3>
</div>
<div className="mt-6 pt-6 border-t border-[#1a1a1a] flex flex-wrap items-center justify-between gap-4">
<span className="font-oswald text-[#888888] text-sm tracking-widest uppercase">Concert Gratuit</span>
<div className="flex items-center gap-3">
<a className="text-[#a3a3a3] hover:text-[#F0EDE6] transition-colors text-xs font-oswald tracking-widest uppercase flex items-center gap-1" href="#">Site Officiel <iconify-icon className="ml-1" icon="solar:square-top-down-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
</div>
</article>
</div>
</section>
</div>
<aside className="lg:col-span-4 space-y-16">
<section>
<div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#3A3A3A]">
<iconify-icon className="text-xl text-[#C0001A]" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="font-oswald text-2xl uppercase tracking-tight text-[#F0EDE6]">Focus Artist</h2>
</div>
<div className="group cursor-pointer">
<div className="w-full aspect-[4/5] bg-[#111111] overflow-hidden mb-4 relative">
<img alt="Palantyr" className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<span className="text-xs font-oswald tracking-widest text-[#C0001A] uppercase mb-1 block">En Concert: 05/06</span>
<h3 className="font-anton text-4xl leading-none tracking-tight text-[#F0EDE6]">PALANTYR</h3>
</div>
</div>
<p className="text-sm text-[#a3a3a3] leading-relaxed mb-4">
                        Palantyr est un groupe de speed metal anciennement connu sous le nom de groupe Destrutt formé en 2014. Athénaïs, sa chanteuse à la voix vibrante décoiffe les âmes en peine...
                    </p>
<a className="inline-flex items-center text-xs font-oswald uppercase tracking-widest text-[#C0001A] hover:text-[#F0EDE6] transition-colors" href="#">
                        Bio complète <iconify-icon className="ml-1 text-sm" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>
<section>
<div className="flex items-center justify-between mb-8 pb-4 border-b border-[#3A3A3A]">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-[#F0EDE6]" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="font-oswald text-2xl uppercase tracking-tight text-[#F0EDE6]">News</h2>
</div>
<a className="text-xs font-oswald text-[#888888] hover:text-[#F0EDE6] tracking-widest uppercase transition-colors" href="#">Flux RSS</a>
</div>
<div className="space-y-6">
<article className="group cursor-pointer border-b border-[#1a1a1a] pb-6">
<span className="text-xs font-oswald text-[#C0001A] tracking-widest mb-2 block">23.05.24</span>
<h3 className="font-oswald text-xl uppercase tracking-tight text-[#F0EDE6] group-hover:text-[#C0001A] transition-colors mb-2 leading-tight">
                            Annulation : Phil Campbell &amp; The Bastard Sons
                        </h3>
<p className="text-xs text-[#888888] line-clamp-2">Nous avons l'immense regret d'annoncer que le concert de Phil Campbell and the bastard sons + The Flynts prévu...</p>
</article>
<article className="group cursor-pointer border-b border-[#1a1a1a] pb-6">
<span className="text-xs font-oswald text-[#a3a3a3] tracking-widest mb-2 block">10.05.24</span>
<h3 className="font-oswald text-xl uppercase tracking-tight text-[#F0EDE6] group-hover:text-[#C0001A] transition-colors mb-2 leading-tight">
                            Offre d'emploi - Technicien.ne Lumières
                        </h3>
<p className="text-xs text-[#888888] line-clamp-2">L'Entrepôt recherche un.e régisseur.se lumière ! Description du poste : Le.la régisseur.se participe à la conception et met en oeuvre...</p>
</article>
</div>
</section>
</aside>
</main>
<footer className="bg-black border-t border-[#3A3A3A] pt-16 pb-8 text-[#a3a3a3]">
<div className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-[#1a1a1a] pb-12 mb-8">
<div className="md:col-span-4 space-y-6">
<div>
<span className="font-anton text-4xl text-[#F0EDE6] tracking-tighter block mb-2">L'ENTREPÔT</span>
<p className="text-sm font-oswald uppercase tracking-widest text-[#888888]">Lieu permanent de musiques actuelles en Province de Luxembourg.</p>
</div>
<div className="text-sm space-y-1">
<p>2 Rue Zénobe Gramme</p>
<p>B-6700 Arlon, Belgique</p>
</div>
<div className="flex gap-4">
<a className="hover:text-[#F0EDE6] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-[#F0EDE6] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-[#F0EDE6] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-[#F0EDE6] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
<div className="md:col-span-4">
<h4 className="font-oswald text-lg uppercase tracking-tight text-[#F0EDE6] mb-6 border-b border-[#3A3A3A] pb-2 inline-block">Partenaires</h4>
<div className="flex flex-wrap gap-4 opacity-50 grayscale">
<div className="h-8 w-24 bg-[#1a1a1a] rounded"></div>
<div className="h-8 w-16 bg-[#1a1a1a] rounded"></div>
<div className="h-8 w-20 bg-[#1a1a1a] rounded"></div>
<div className="h-8 w-24 bg-[#1a1a1a] rounded"></div>
</div>
</div>
<div className="md:col-span-4">
<h4 className="font-oswald text-lg uppercase tracking-tight text-[#F0EDE6] mb-4 border-b border-[#3A3A3A] pb-2 inline-block">Newsletter</h4>
<p className="text-xs mb-4">Insérez ici votre adresse e-mail pour être tenu au courant des toutes les activités de l'Entrepôt :</p>
<form className="flex flex-col sm:flex-row gap-2">
<input className="w-full bg-[#111111] border border-[#3A3A3A] px-4 py-2 text-sm text-[#F0EDE6] placeholder-[#3A3A3A] focus:outline-none focus:border-[#C0001A] transition-colors rounded-none" placeholder="votre@email.com" type="email"/>
<button className="bg-[#C0001A] hover:bg-[#8B0000] text-[#F0EDE6] px-6 py-2 text-sm font-oswald uppercase tracking-widest transition-colors flex-shrink-0" type="submit">
                        S'inscrire
                    </button>
</form>
</div>
</div>
<div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© L'Entrepôt Arlon. Tous droits réservés.</p>
<div className="flex gap-4">
<a className="hover:text-[#F0EDE6] transition-colors" href="#">Mentions légales</a>
<a className="hover:text-[#F0EDE6] transition-colors" href="#">Confidentialité</a>
</div>
</div>
</footer>



    </>
  );
}
