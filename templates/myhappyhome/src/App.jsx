import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
'days': ['"Days One"', 'sans-serif'],
'poppins': ['Poppins', 'sans-serif'],
},
colors: {
'primary-blue': '#2459a8',
'secondary-blue': '#117ec2',
'primary-yellow': '#f5b134',
'secondary-yellow': '#f7b033',
'dark-blue': '#10284c',
'light-bg': '#e9eef6',
'light-cream': '#e5d2b4',
},
}
}
}



        // Desktop Mega Menu
        const servicesBtn = document.getElementById('servicesMenuBtn');
        const megaMenu = document.getElementById('megaMenu');
        const megaMenuBackdrop = document.getElementById('megaMenuBackdrop');

        if (servicesBtn) {
            const dropdownArrow = servicesBtn.querySelector('.dropdown-arrow');

            function toggleMegaMenu() {
                megaMenu.classList.toggle('active');
                megaMenuBackdrop.classList.toggle('active');
                dropdownArrow.classList.toggle('rotate');
            }

            servicesBtn.addEventListener('click', toggleMegaMenu);
            megaMenuBackdrop.addEventListener('click', toggleMegaMenu);

            // Close on ESC key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && megaMenu.classList.contains('active')) {
                    toggleMegaMenu();
                }
            });

            // Close mega menu when clicking on a link inside it
            megaMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (megaMenu.classList.contains('active')) {
                        toggleMegaMenu();
                    }
                });
            });
        }

        // Mobile Menu
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeMobileMenu = document.getElementById('closeMobileMenu');
        const mobileServicesBtn = document.getElementById('mobileServicesBtn');
        const mobileServicesMenu = document.getElementById('mobileServicesMenu');

        function openMobileMenu() {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeMobileMenuFunc() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }

        mobileMenuBtn.addEventListener('click', openMobileMenu);
        closeMobileMenu.addEventListener('click', closeMobileMenuFunc);

        // Mobile Services Accordion
        mobileServicesBtn.addEventListener('click', () => {
            mobileServicesMenu.classList.toggle('hidden');
            const arrow = mobileServicesBtn.querySelector('.dropdown-arrow');
            arrow.classList.toggle('rotate');
        });

        // Close mobile menu when clicking on a link (but not the Services button)
        document.querySelectorAll('.mobile-menu-link').forEach(link => {
            link.addEventListener('click', (e) => {
                // Don't close menu if it's the Services button
                if (link.id === 'mobileServicesBtn') {
                    return;
                }
                closeMobileMenuFunc();
            });
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.4
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Once animated, stop observing
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.addEventListener('DOMContentLoaded', () => {
            const revealedElements = document.querySelectorAll('.reveal');
            revealedElements.forEach(el => observer.observe(el));
        });

        // Parallax Effect
        window.addEventListener('scroll', () => {
            const parallaxElements = document.querySelectorAll('.parallax-element');
            parallaxElements.forEach(el => {
                const speed = parseFloat(el.getAttribute('data-parallax-speed')) || 0;
                const rect = el.parentElement.getBoundingClientRect();
                const scrollOffset = window.innerHeight - rect.top;
                if (scrollOffset > 0) {
                    el.style.transform = `translateY(${scrollOffset * speed}px)`;
                }
            });
        });
    


        (function () {
            // Function to initialize carousel functionality
            const initCarousel = () => {
                const carousel = document.getElementById('testimonialCarousel');
                const prevBtn = document.getElementById('prevTestimonialBtn');
                const nextBtn = document.getElementById('nextTestimonialBtn');
                const dotsContainer = document.getElementById('testimonialDots');

                if (!carousel || !prevBtn || !nextBtn || !dotsContainer) return;

                // Clone existing cards to create placeholders if fewer than 6
                const originalCards = Array.from(carousel.children);
                const totalDesired = 6;
                if (originalCards.length > 0 && originalCards.length < totalDesired) {
                    for (let i = 0; i < totalDesired - originalCards.length; i++) {
                        // Clone cycling through original cards
                        const sourceCard = originalCards[i % originalCards.length];
                        const clone = sourceCard.cloneNode(true);
                        carousel.appendChild(clone);
                    }
                }

                let allCards = Array.from(carousel.children);
                let currentIndex = 0;

                // Setup styles for carousel items
                const setupCards = () => {
                    const width = window.innerWidth;
                    let itemWidthStr = '100%';

                    // Match grid/gap logic: gap is 1rem (16px)
                    if (width >= 1024) { // Desktop (3 items)
                        // (100% - 32px gap) / 3
                        itemWidthStr = 'calc(33.333% - 11px)';
                    } else if (width >= 768) { // Tablet (2 items)
                        // (100% - 16px gap) / 2
                        itemWidthStr = 'calc(50% - 8px)';
                    }

                    allCards.forEach(card => {
                        card.style.flexShrink = '0';
                        card.style.width = itemWidthStr;
                        card.style.transition = 'opacity 0.5s ease';
                    });
                };

                const updateState = () => {
                    const width = window.innerWidth;
                    const itemsVisible = width >= 1024 ? 3 : (width >= 768 ? 2 : 1);
                    const maxIndex = allCards.length - itemsVisible;

                    // Ensure index bounds
                    if (currentIndex < 0) currentIndex = 0;
                    if (currentIndex > maxIndex) currentIndex = maxIndex;

                    // Calculate translation
                    // We assume the parent flex container has gap-4 (16px)
                    const gap = 16;
                    const itemWidth = allCards[0].getBoundingClientRect().width;
                    const moveAmount = (itemWidth + gap) * currentIndex;

                    carousel.style.transform = `translateX(-${moveAmount}px)`;

                    // Update buttons
                    prevBtn.disabled = currentIndex === 0;
                    nextBtn.disabled = currentIndex === maxIndex;
                    prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
                    nextBtn.style.opacity = currentIndex === maxIndex ? '0.3' : '1';

                    // Update dots
                    dotsContainer.innerHTML = '';
                    // Create dots representing pages or items. 
                    // Limiting to a reasonable number to prevent UI clutter
                    const numDots = Math.min(allCards.length - itemsVisible + 1, 6);

                    for (let i = 0; i < numDots; i++) {
                        const dot = document.createElement('button');
                        const isActive = i === currentIndex;
                        dot.className = `rounded-full transition-all duration-300 ${isActive ? 'bg-white w-6 h-1.5' : 'bg-white/20 hover:bg-white/40 w-1.5 h-1.5'}`;
                        dot.ariaLabel = `Go to slide ${i + 1}`;
                        dot.onclick = () => {
                            currentIndex = i;
                            updateState();
                        };
                        dotsContainer.appendChild(dot);
                    }
                };

                // Listeners
                prevBtn.onclick = () => {
                    if (currentIndex > 0) {
                        currentIndex--;
                        updateState();
                    }
                };

                nextBtn.onclick = () => {
                    const width = window.innerWidth;
                    const itemsVisible = width >= 1024 ? 3 : (width >= 768 ? 2 : 1);
                    if (currentIndex < allCards.length - itemsVisible) {
                        currentIndex++;
                        updateState();
                    }
                };

                // Initialize
                setupCards();
                updateState();

                // Responsive handle
                let resizeTimer;
                window.addEventListener('resize', () => {
                    clearTimeout(resizeTimer);
                    resizeTimer = setTimeout(() => {
                        setupCards();
                        updateState();
                    }, 100);
                });
            };

            // Run initialization
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initCarousel);
            } else {
                initCarousel();
            }
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="mega-menu-backdrop fixed inset-0 bg-dark-blue/20 backdrop-blur-sm z-40" id="megaMenuBackdrop"></div>

<div className="lg:hidden z-50 py-4 px-4 absolute w-full bg-none">
<div className="flex items-center justify-center bg-white rounded-full p-6">
<img alt="Logo" className="w-auto h-[60px] object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83e26819-3f08-43ac-8bbe-4bc8b24285be_800w.png"/>
</div>
</div>

<div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-light-bg border-t border-dark-blue/10 px-4 py-3 shadow-lg">
<div className="flex items-center justify-between gap-3">
<button className="h-[54px] px-6 rounded-full font-semibold flex items-center gap-2 btn-shadow btn-inner-shadow bg-primary-yellow hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 bg-primary-yellow text-dark-blue text-sm flex-1 justify-between" onclick="window.location.href='/contact'" role="button">
<span>Schedule Repair</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
<button className="h-[54px] px-6 rounded-full font-semibold flex items-center gap-2 btn-shadow btn-inner-shadow hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 bg-secondary-blue text-light-bg text-sm flex-1 justify-between" onclick="window.location.href='/signup'" role="button">
<span>Sign Up</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
<button className="bg-dark-blue text-light-bg p-3 rounded-full btn-shadow hover:bg-dark-blue/90 transition-all justify-between" id="mobileMenuBtn">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</button>
</div>
</div>

<div className="mobile-menu lg:hidden fixed inset-0 bg-dark-blue z-50 overflow-y-auto" id="mobileMenu">
<div className="p-6">

<div className="flex items-center justify-between mb-8">
<button className="text-light-bg p-2" id="closeMobileMenu">
<svg className="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</button>
</div>

<nav className="space-y-2">
<a className="mobile-menu-link block text-light-bg text-xl py-4 px-4 rounded-lg hover:bg-light-bg/10 transition-colors" href="/memberships">Memberships</a>

<div>
<button className="mobile-menu-link w-full flex items-center justify-between text-light-bg text-xl py-4 px-4 rounded-lg hover:bg-light-bg/10 transition-colors" id="mobileServicesBtn">
<span>Services</span>
<svg className="w-5 h-5 dropdown-arrow" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</button>
<div className="hidden pl-4 mt-2 space-y-2" id="mobileServicesMenu">
<a className="mobile-menu-link block text-light-bg/80 py-3 px-4 rounded-lg hover:bg-light-bg/10 transition-colors" href="/services">HVAC
                            Solutions</a>
<a className="mobile-menu-link block text-light-bg/80 py-3 px-4 rounded-lg hover:bg-light-bg/10 transition-colors" href="/services">Plumbing
                            Solutions</a>
<a className="mobile-menu-link block text-light-bg/80 py-3 px-4 rounded-lg hover:bg-light-bg/10 transition-colors" href="/services">Electrical
                            Solutions</a>
</div>
</div>
<a className="mobile-menu-link block text-light-bg text-xl py-4 px-4 rounded-lg hover:bg-light-bg/10 transition-colors" href="/about">About
                    Us</a>
<a className="mobile-menu-link block text-light-bg text-xl py-4 px-4 rounded-lg hover:bg-light-bg/10 transition-colors" href="/services">Service
                    Areas</a>
<a className="mobile-menu-link block text-light-bg text-xl py-4 px-4 rounded-lg hover:bg-light-bg/10 transition-colors" href="/blog">Blog</a>
<a className="mobile-menu-link block text-light-bg text-xl py-4 px-4 rounded-lg hover:bg-light-bg/10 transition-colors" href="/contact">Contact</a>
</nav>
</div>
</div>

<header className="max-w-[1800px] mx-auto hidden lg:block">
<nav className="nav-blur fixed top-4 left-4 right-4 z-50 rounded-3xl border border-white/50 px-6 py-4">
<div className="flex items-center justify-between">

<div className="flex items-center gap-1">
<a className="text-dark-blue hover:bg-dark-blue/5 transition-colors rounded-lg pt-2 pr-3 pb-2 pl-3" href="/membership">Memberships</a>

<button className="text-dark-blue hover:bg-dark-blue/5 transition-colors flex rounded-lg pt-2 pr-3 pb-2 pl-3 gap-x-1 gap-y-1 items-center" id="servicesMenuBtn">
<span className="">Services</span>
<svg className="dropdown-arrow w-[16px] h-[16px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'rgb(16, 40, 76)', width: '16px', height: '16px'}} viewbox="0 0 24 24">
<path className="" d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</button>
<a className="text-dark-blue hover:bg-dark-blue/5 transition-colors rounded-lg pt-2 pr-3 pb-2 pl-3" href="/about">About
                        Us</a>
<a className="text-dark-blue hover:bg-dark-blue/5 transition-colors rounded-lg pt-2 pr-3 pb-2 pl-3" href="/services">Service
                        Areas</a>
<a className="px-3 py-2 text-dark-blue hover:bg-dark-blue/5 rounded-lg transition-colors" href="/contact">Contact</a>
<a className="px-3 py-2 text-dark-blue hover:bg-dark-blue/5 rounded-lg transition-colors" href="/blog">Blog</a>
</div>

<div className="absolute left-1/2 transform -translate-x-1/2">
<div className="flex w-32 h-14 items-center justify-center cursor-pointer" onclick="window.location.href='/home'" role="button">
<img alt="Logo" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83e26819-3f08-43ac-8bbe-4bc8b24285be_320w.png"/>
</div>
</div>

<div className="flex items-center gap-3">
<button className="flex gap-2 btn-shadow btn-inner-shadow bg-primary-yellow hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 text-dark-blue font-semibold h-[54px] rounded-full pr-6 pl-6 gap-x-2 gap-y-2 items-center cursor-pointer" onclick="window.location.href='/contact'" role="button">
<span className="text-sm">Schedule Repair</span>
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
<button className="h-[54px] px-6 rounded-full font-semibold flex items-center gap-2 btn-shadow btn-inner-shadow hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 bg-secondary-blue text-light-bg" onclick="window.location.href='/signup'" role="button">
<span className="text-sm">Sign Up/Login</span>
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
</div>

<div className="mega-menu absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-dark-blue/10 p-8" id="megaMenu">
<div className="w-full mx-auto">
<div className="grid grid-cols-3 gap-6">

<div className="group">
<div className="bg-gradient-to-br from-primary-yellow/10 to-primary-yellow/5 rounded-xl p-6 hover:shadow-lg transition-all">
<div className="bg-primary-yellow rounded-lg w-12 h-12 flex items-center justify-center mb-4">
<svg className="w-6 h-6 text-dark-blue" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</div>
<h3 className="heading text-xl text-dark-blue mb-2">HVAC Solutions</h3>
<p className="text-dark-blue/70 text-sm mb-4">Complete heating and cooling services for
                                    year-round comfort.</p>
<a className="text-secondary-blue font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all" href="/services">
                                    Go to Services
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>
</div>

<div className="group">
<div className="bg-gradient-to-br from-secondary-blue/10 to-secondary-blue/5 rounded-xl p-6 hover:shadow-lg transition-all">
<div className="bg-secondary-blue rounded-lg w-12 h-12 flex items-center justify-center mb-4">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</div>
<h3 className="heading text-xl text-dark-blue mb-2">Plumbing Solutions</h3>
<p className="text-dark-blue/70 text-sm mb-4">Expert plumbing repairs and maintenance for
                                    your home.</p>
<a className="text-secondary-blue font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all" href="/services">
                                    Go to Services
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>
</div>

<div className="group">
<div className="bg-gradient-to-br from-primary-blue/10 to-primary-blue/5 rounded-xl p-6 hover:shadow-lg transition-all">
<div className="bg-primary-blue rounded-lg w-12 h-12 flex items-center justify-center mb-4">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="heading text-xl text-dark-blue mb-2">Electrical Solutions</h3>
<p className="text-dark-blue/70 text-sm mb-4">Safe and reliable electrical services for your
                                    peace of mind.</p>
<a className="text-secondary-blue font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all" href="/services">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>
</div>
</div>

<div className="mt-6 pt-6 border-t border-dark-blue/10">
<div className="flex items-center justify-between">
<div>
<h4 className="heading text-lg text-dark-blue mb-1">Need Help Choosing?</h4>
<p className="text-dark-blue/60 text-sm">Our team is here to help you find the right
                                    service.</p>
</div>
<button className="h-[54px] px-6 rounded-full font-semibold flex items-center gap-2 btn-shadow btn-inner-shadow hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 bg-primary-yellow text-dark-blue">
<span>Contact Us</span>
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</nav>
</header>

<section className="hero-section px-4 pt-2 pb-6 sm:pt-4 lg:pb-0 flex flex-col items-center relative overflow-hidden" style={{background: 'linear-gradient(0deg, #E5D2B4 50%, #F5B134 80%)'}}>
<style>
            @media (min-width: 1024px) {
                section.hero-section {
                    background: linear-gradient(233deg, #F5B134 6.08%, #E5D2B4 40.81%) !important;
                }
            }
        </style>

<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 z-10 max-w-[1408px] w-full mx-auto mt-40 lg:mt-32 pb-0 lg:pb-6 px-4 lg:px-16 items-center">
<div className="reveal ml-0 sm:ml-[-200px] lg:ml-[-400px] order-2 lg:order-1 active">
<video autoplay="" className="mix-blend-multiply w-full" loop="" muted="" src="https://res.cloudinary.com/dnxfczcjg/video/upload/v1768483349/hero_qvvebl.mp4"></video>
</div>
<div className="text-left order-1 lg:order-2">
<h1 className="reveal heading text-4xl lg:text-6xl text-primary-blue leading-tight mb-3 active">
                    My Happy Home is a new kind of home service company.
                </h1>
<p className="reveal heading text-base lg:text-lg text-secondary-blue mb-10 active">
                    We cover the repairs of your hvac, plumbing, electrical, and appliances for one low monthly payment.
                </p>
<button className="h-[54px] px-8 rounded-full font-semibold flex items-center gap-2 btn-shadow btn-inner-shadow hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 w-full justify-between lg:w-auto bg-secondary-blue text-light-bg">
<span>Get Started Today</span>
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
</div>
</section>

<section className="py-20 px-4 lg:px-8 bg-white" id="services">
<div className="max-w-[1800px] mr-auto ml-auto">

<div className="reveal text-center mb-10 active">
<h2 className="reveal heading text-4xl lg:text-5xl text-primary-blue mb-4 active">
                    Owning a home shouldn't come with<br/>
<span className="text-secondary-blue">so many problems</span>
</h2>
<p className="text-lg text-dark-blue">
                    These aren't just inconveniences; they're stressful interruptions that steal your peace of mind and
                    keep you up at night.
                </p>
</div>

<div className="reveal grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="reveal bg-dark-blue rounded-xl p-6 border border-white/50 card-blur">
<div className="bg-primary-yellow rounded-xl aspect-[2/1] mb-6 flex items-center justify-center overflow-hidden">
<img alt="HVAC Service" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ccb67bff-8397-4e56-81e0-cc9d8a3ce31e_800w.png"/>
</div>
<div className="bg-primary-yellow rounded-lg w-10 h-10 flex items-center justify-center mb-6">
<svg className="w-6 h-6 text-dark-blue" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</div>
<h3 className="reveal heading text-2xl text-light-bg mb-3">
                        Broken AC? We have HVAC Solutions
                    </h3>
<p className="text-light-bg mb-6 leading-relaxed">
                        A hot summer day is no time to discover your AC is on the fritz. Our HVAC experts provide
                        reliable relief, handling everything from emergency repairs to annual tune-ups that keep your
                        system running efficiently all year long. Stay cool in the summer and warm in the winter,
                        completely worry-free.
                    </p>
<div className="space-y-3">
<button className="h-[54px] px-6 rounded-full font-semibold flex items-center justify-between gap-2 btn-shadow btn-inner-shadow hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 w-full bg-primary-yellow text-dark-blue" onclick="window.location.href='/membership-detail'" role="button">
<span className="">Explore Membership Plans</span>
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
<path d="M7 17 17 7"></path>
</svg>
</button>
<button className="flex btn-shadow btn-inner-shadow hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 text-light-bg cursor-pointer font-semibold w-full h-[54px] rounded-full pr-6 pl-6 gap-x-2 gap-y-2 items-center justify-between bg-primary-blue" onclick="window.location.href='/services'" role="button">
<span>Explore HVAC Services</span>
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
</div>

<div className="reveal bg-dark-blue rounded-xl p-6 border border-white/50 card-blur">
<div className="bg-primary-yellow rounded-xl aspect-[2/1] mb-6 flex items-center justify-center overflow-hidden">
<img alt="Plumbing Service" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b986cb5-3a63-45aa-845d-94d81c7836b7_800w.png"/>
</div>
<div className="bg-primary-yellow rounded-lg w-10 h-10 flex items-center justify-center mb-6">
<svg className="w-6 h-6 text-dark-blue" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</div>
<h3 className="reveal heading text-2xl text-light-bg mb-3">
                        Leaky Pipes? We have Plumbing Solutions
                    </h3>
<p className="text-light-bg mb-6 leading-relaxed">
                        That constant drip, drip, drip isn't just annoying...it's a sign of a problem that could become
                        a disaster. Our expert plumbers are ready to tackle everything from a running toilet to a major
                        pipe problem, protecting your home and your peace of mind. Let us make that problem our problem.
                    </p>
<div className="space-y-3">
<button className="h-[54px] px-6 rounded-full font-semibold flex items-center justify-between gap-2 btn-shadow btn-inner-shadow hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 w-full bg-primary-yellow text-dark-blue" onclick="window.location.href='/membership-detail'" role="button">
<span>Explore Membership Plans</span>
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
<path d="M7 17 17 7"></path>
</svg>
</button>
<button className="flex btn-shadow btn-inner-shadow hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 text-light-bg font-semibold w-full h-[54px] rounded-full pr-6 pl-6 gap-x-2 gap-y-2 items-center justify-between bg-primary-blue" onclick="window.location.href='/services'" role="button">
<span className="">Explore Plumbing Services</span>
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path className="" d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
</div>

<div className="reveal bg-dark-blue rounded-xl p-6 border border-white/50 card-blur">
<div className="bg-primary-yellow rounded-xl aspect-[2/1] mb-6 flex items-center justify-center overflow-hidden">
<img alt="Electrical Service" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/56ccd190-b839-4fa8-b93f-9fc94510fec0_800w.png"/>
</div>
<div className="bg-primary-yellow rounded-lg w-10 h-10 flex items-center justify-center mb-6">
<svg className="w-6 h-6 text-dark-blue" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="reveal heading text-2xl text-light-bg mb-3">
                        Outlets not working? We cover Electrical Solutions
                    </h3>
<p className="text-light-bg mb-6 leading-relaxed">
                        Electrical issues are more than an inconvenience; they're a safety concern. Our certified
                        electricians ensure your home's electrical system is safe, sound, and up to code. From faulty
                        outlets to flickering lights, we handle the complexities so you can work, play, and live without
                        worry.
                    </p>
<div className="space-y-3">
<button className="h-[54px] px-6 rounded-full font-semibold flex items-center justify-between gap-2 btn-shadow btn-inner-shadow hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 w-full bg-primary-yellow text-dark-blue" onclick="window.location.href='/membership-detail'" role="button">
<span>Explore Membership Plans</span>
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
<path d="M7 17 17 7"></path>
</svg>
</button>
<button className="flex btn-shadow btn-inner-shadow hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 text-light-bg font-semibold w-full h-[54px] rounded-full pr-6 pl-6 gap-x-2 gap-y-2 items-center justify-between bg-primary-blue" onclick="window.location.href='/services'" role="button">
<span className="">Explore Electrical Services</span>
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'rgb(233, 238, 246)', width: '24px', height: '24px'}} viewbox="0 0 24 24">
<path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="lg:px-28 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/33607136-5626-4d54-abb7-7fc681b2240a_3840w.png)] bg-cover pt-16 pr-4 pb-16 pl-4 relative">
<div className="reveal z-10 flex max-w-[1800px] mr-auto ml-auto relative items-center justify-end">
<div className="hidden lg:block h-[200%] absolute left-0">
<img alt="Van" className="w-full h-full object-contain z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2531a10c-d0e3-475d-a1a8-e2f77b7edfef_1600w.png?w=800&amp;q=80"/>
</div>
<div className="reveal max-w-2xl text-left">
<h2 className="reveal heading text-4xl lg:text-5xl text-light-bg mb-4">
                    How would you like to make that problem my problem?
                </h2>
<p className="text-lg font-semibold text-light-bg mb-6">
                    Experience reliable relief from home repair stress.
                </p>
<div className="space-y-3 flex flex-col items-start">
<button className="h-[54px] px-8 rounded-full font-semibold flex items-center justify-between gap-2 btn-shadow btn-inner-shadow hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 w-full max-w-xl bg-primary-yellow text-dark-blue">
<span className="">Explore Membership Plans</span>
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
<button className="h-[54px] px-8 rounded-full font-semibold flex items-center justify-between gap-2 btn-shadow btn-inner-shadow hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 w-full max-w-xl bg-secondary-blue text-light-bg">
<span>Learn More</span>
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 lg:px-28 bg-white">
<div className="max-w-[1800px] mx-auto">

<div className="reveal text-center mb-10">
<h2 className="reveal heading text-4xl lg:text-5xl text-primary-blue mb-4">
                    Your Simple path to a <span className="text-secondary-blue">Happier Home</span>
</h2>
<p className="text-lg text-dark-blue">
                    We've made getting complete home protection as easy as 1-2-3.
                    In just a few clicks, you can have total peace of mind.
                </p>
</div>

<div className="reveal grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">

<div className="reveal grid md:block grid-cols-1 gap-4 gradient-blue rounded-xl p-5 relative">
<div className="relative md:absolute left-0 md:left-[-1rem] bottom-0 w-full md:w-[12rem] flex justify-center">
<img alt="Customer thinking" className="max-w-[16rem] w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b670e16b-c2f4-412e-958c-1ac46b0b902e_800w.png"/>
</div>
<div className="ml-0 md:ml-40 pl-0 md:pl-6">
<h3 className="reveal heading text-3xl text-light-bg mb-3">
<span className="text-primary-yellow">Step 1:</span> Choose Your Plan
                        </h3>
<p className="text-light-bg leading-relaxed">
                            Select the perfect membership plan for your home and budget. Each plan is designed with
                            clear, transparent pricing and no hidden fees, just straightforward protection that fits
                            your needs.
                        </p>
</div>
</div>

<div className="reveal grid md:block grid-cols-1 gap-4 gradient-blue rounded-xl pt-5 pr-5 pb-5 pl-5 relative">
<div className="relative md:absolute left-0 md:left-[-1rem] bottom-0 w-full md:w-[12rem] flex justify-center">
<img alt="Relaxed homeowner" className="max-w-[16rem] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14528b38-13e6-4591-8641-ff70210a7bff_800w.png"/>
</div>
<div className="ml-0 md:ml-40 pl-0 md:pl-6">
<h3 className="reveal heading text-3xl text-light-bg mb-3">
<span className="text-primary-yellow">Step 2:</span> Relax &amp; Enjoy
                        </h3>
<p className="text-light-bg leading-relaxed">
                            Live your life without worrying about what might go wrong. If a problem arises, just give us
                            a call. We'll handle the rest while you get back to enjoying your home.
                        </p>
</div>
</div>

<div className="reveal grid md:block grid-cols-1 gap-4 gradient-blue rounded-xl pt-5 pr-5 pb-5 pl-5 relative">
<div className="relative md:absolute left-0 md:left-[-1rem] bottom-0 w-full md:w-[12rem] flex justify-center">
<img alt="Tech waving" className="max-w-[16rem] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3c21d6ef-0506-4349-99a4-d338487c620f_800w.png"/>
</div>
<div className="ml-0 md:ml-40 pl-0 md:pl-6">
<h3 className="reveal heading text-3xl text-light-bg mb-3">
<span className="text-primary-yellow">Step 3:</span> We've Got it Covered
                        </h3>
<p className="text-light-bg leading-relaxed">
                            Our friendly, vetted experts will arrive promptly to diagnose and fix the issue. Your
                            membership covers the cost, so you can say goodbye to surprise bills for good.
                        </p>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center gap-3">
<button className="h-[54px] px-8 rounded-full font-semibold flex items-center justify-between gap-2 btn-shadow btn-inner-shadow hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 w-full lg:w-auto bg-primary-yellow text-dark-blue">
<span className="">Explore Membership Plans</span>
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
<button className="flex btn-shadow btn-inner-shadow hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 lg:w-auto text-light-bg font-semibold w-full h-[54px] rounded-full pr-8 pl-8 gap-x-2 gap-y-2 items-center justify-between" onclick="window.location.href='/signup'" role="button">
<span className="">Sign Up/Login</span>
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
</div>
</section>

<section className="lg:px-28 pt-20 pr-4 pb-20 pl-4" id="memberships">
<div className="max-w-[1800px] mx-auto">

<div className="reveal text-center mb-12">
<h2 className="reveal heading text-4xl lg:text-5xl text-primary-blue mb-4 font-bold tracking-tight">
                    Find your Perfect Fit
                </h2>
<p className="text-lg text-dark-blue max-w-3xl mx-auto">
                    We offer a range of plans to meet the unique needs of your home.<br/>
                    All plans include our 24/7 support and our Happy Home Promise.
                </p>
</div>
<div className="space-y-4">

<div className="reveal bg-dark-blue relative rounded-3xl shadow-2xl text-white border border-white/5">
<div className="grid grid-cols-1 lg:grid-cols-12">

<div className="lg:col-span-5 p-8 lg:p-10 flex flex-col relative z-10">
<div className="absolute left-0 top-0 w-full">
<img alt="Family Home Protection" className="object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a1967e3-ac8c-4852-b125-03b202bff428_1600w.png"/>
</div>

<div className="w-[150%] h-auto mb-8 relative flex justify-center ml-[-100px] lg:ml-[-200px] lg:mt-6 z-9">
<img alt="Family Home Protection" className="object-fit object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/794e38b5-681a-4f83-9902-fd08874c9c81_1600w.png"/>
</div>
<div className="mt-auto">
<h3 className="reveal text-3xl font-bold mb-4 font-days tracking-tight">Deluxe Repair Plan
                                </h3>
<p className="text-white/80 text-sm leading-relaxed mb-8">
                                    Keep your home running smoothly with the Deluxe Coverage Plan. The plan
                                    provides reliable protection for your major appliances and essential systems,
                                    helping you avoid unexpected repair costs and keeping your household
                                    comfortable and worry-free. With the Deluxe Plan, you can enjoy peace of mind
                                    knowing that your key home systems are covered when you need them most.
                                </p>
<button className="h-[54px] px-8 rounded-full font-bold flex items-center justify-between gap-2 hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 shadow-xl w-full bg-gradient-to-r from-primary-yellow to-secondary-yellow text-dark-blue group">
<span>Start Your Coverage</span>
<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="lg:col-span-7 p-8 lg:p-10">
<div className="space-y-2">

<div className="p-8 rounded-2xl bg-[#2459A866]">
<h4 className="flex items-center gap-2 text-xl font-bold mb-4 text-primary-yellow font-days">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
<span className="text-white">HVAC</span>
</h4>
<div className="space-y-3">
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Central Air Conditioner <span className="text-gray-500 font-normal text-xs ml-1">(Electric)</span></span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Central Home Heating <span className="text-gray-500 font-normal text-xs ml-1">(Gas or
                                                    Electric)</span></span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#2459A866]">
<h4 className="flex items-center gap-2 text-xl font-bold mb-4 text-primary-yellow font-days">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
<span className="text-white">Internal Plumbing System</span>
</h4>
<div className="space-y-3">
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span className="">Toilets <span className="text-gray-500 font-normal text-xs ml-1">(Plumbing
                                                    stoppage removal)</span></span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Plumbing fixture repairs</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#2459A866]">
<h4 className="flex items-center gap-2 text-xl font-bold mb-4 text-primary-yellow font-days">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-white">Electrical</span>
</h4>
<div className="space-y-3">
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Internal Electrical System</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#2459A866]">
<h4 className="flex items-center gap-2 text-xl font-bold mb-4 text-primary-yellow font-days">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-white">Appliances</span>
</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Built-in Microwave</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span className="">Clothes Dryer</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Dishwasher</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span className="">Water heater</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Garbage Disposal</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span className="">Ceiling Fans</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Kitchen Refrigerator</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Doorbell system</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Range/Oven/Cooktop</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Kitchen Exhaust Fan</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Clothes Washer</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="reveal bg-primary-blue rounded-3xl p-8 lg:p-10 shadow-xl text-white">
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4 pb-6">
<h3 className="reveal text-3xl font-bold font-days">Optional Coverages</h3>
<p className="text-white/80 text-sm">Optional coverage items are available only with the Deluxe
                            Repair Plan.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Free- Standing Freezer</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Swimming Pool</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Ice Maker</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Programmable Thermostat</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Deluxe Maintenance Plan</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span className="">Wine Cooler</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Well Pump</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Garage Door Opener</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span className="">Secondary Refrigerator</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Spa</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span className="">Additional AC Unit</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Septic System</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</div>
</div>
</div>

<div className="reveal bg-dark-blue rounded-3xl shadow-2xl text-white">
<div className="grid grid-cols-1 lg:grid-cols-12">

<div className="lg:col-span-5 p-8 pb-0 lg:p-10 lg:pb-0 flex flex-col justify-between relative z-10">
<div className="">
<h3 className="reveal text-3xl font-bold mb-4 font-days tracking-tight">Deluxe Maintenance
                                    Plan
                                </h3>
<p className="text-white/80 text-sm leading-relaxed mb-8">
                                    This plan is strictly preventive in nature. It includes inspection, cleaning, and
                                    basic check ups only and can be purchased independently without purchase of
                                    the Deluxe Repair Plan.
                                </p>
<button className="h-[54px] px-8 rounded-full font-bold flex items-center justify-between gap-2 hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 shadow-xl w-full bg-gradient-to-r from-primary-yellow to-secondary-yellow text-dark-blue group mb-8">
<span>Start Your Coverage</span>
<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="flex justify-center mb-0 mt-auto ml-[-80px] lg:ml-[-150px]">
<img alt="House Protection" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/652498b7-5475-4477-b9ef-fda7edcf99c7_1600w.png"/>
</div>
</div>

<div className="lg:col-span-7 p-8 lg:p-10">
<div className="space-y-8">

<div className="p-8 rounded-2xl bg-[#2459A866]">
<h4 className="flex items-center gap-2 text-xl font-bold mb-4 text-primary-yellow font-days">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
<span className="text-white">HVAC</span>
</h4>
<div className="space-y-3">
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Central Air Conditioner <span className="text-gray-500 font-normal text-xs ml-1">(Electric)</span></span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Central Home Heating <span className="text-gray-500 font-normal text-xs ml-1">(Gas or
                                                    Electric)</span></span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#2459A866]">
<h4 className="flex items-center gap-2 text-xl font-bold mb-4 text-primary-yellow font-days">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-white">Appliances</span>
</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Built-in Microwave</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Clothes Washer</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Dishwasher</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Clothes Dryer</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Garbage Disposal</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Water Heater</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Kitchen Refrigerator</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Ceiling Fans</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Range/Oven/Cooktop</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-gray-100 text-dark-blue text-sm py-3 px-5 rounded-lg flex justify-between items-center shadow-sm">
<span>Kitchen Exhaust Fan</span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-0 px-4 lg:px-28 bg-white relative overflow-hidden">
<div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row items-center gap-10">

<div className="reveal lg:block w-full lg:w-1/2">
<img alt="Happy workman" className="w-full h-auto object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d67a7ce-8ace-4911-9f3b-2a77943f6d09_1600w.png"/>
</div>

<div className="reveal flex-1 w-full lg:w-1/2 py-16">

<div className="reveal mb-10">
<h2 className="reveal heading text-4xl lg:text-5xl text-dark-blue mb-4">
<span className="text-primary-blue">Our Promise</span> to You &amp;Your Home
                    </h2>
<p className="text-lg text-dark-blue">
                        We founded MyHappyHome to be different. We believe in building relationships based on trust,
                        transparency, and a genuine desire to make your life easier. That's not just a business
                        model...it's our promise!
                    </p>
</div>

<div className="reveal space-y-6">

<div className="reveal gradient-blue rounded-xl p-6 flex items-center gap-3 border border-light-bg/20">
<div className="flex-shrink-0">
<svg className="w-10 h-10 text-primary-yellow lucide lucide-heart-icon lucide-heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5">
</path>
</svg>
</div>
<div>
<h3 className="reveal heading text-xl text-light-bg mb-1">Transparency</h3>
<p className="text-light-bg text-lg">No hidden fees</p>
</div>
</div>

<div className="reveal gradient-blue rounded-xl p-6 flex items-center gap-3 border border-light-bg/20">
<div className="flex-shrink-0">
<svg className="w-10 h-10 text-primary-yellow lucide lucide-hand-heart-icon lucide-hand-heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"></path>
<path d="m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95">
</path>
<path d="m2 15 6 6"></path>
<path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91">
</path>
</svg>
</div>
<div>
<h3 className="reveal heading text-xl text-light-bg mb-1">Trust</h3>
<p className="text-light-bg text-lg">Vetted experts</p>
</div>
</div>

<div className="reveal gradient-blue rounded-xl p-6 flex items-center gap-3 border border-light-bg/20">
<div className="flex-shrink-0">
<svg className="w-10 h-10 text-primary-yellow lucide lucide-smile-icon lucide-smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
<line x1="9" x2="9.01" y1="9" y2="9"></line>
<line x1="15" x2="15.01" y1="9" y2="9"></line>
</svg>
</div>
<div>
<h3 className="reveal heading text-xl text-light-bg mb-1">Happiness</h3>
<p className="text-light-bg text-lg">Our ultimate goal</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-4 lg:px-8 bg-dark-blue">
<div className="max-w-[1800px] mr-auto ml-auto">

<div className="text-center mb-10">
<h2 className="reveal heading text-4xl lg:text-5xl text-light-bg mb-4">
                    You're a homeowner, and homeowners
                    <span className="text-primary-yellow">should always be happy.</span>
</h2>
<p className="reveal text-lg text-light-bg">
                    See why our members are so happy!
                </p>
</div>

<div className="relative overflow-hidden mb-6">
<div className="flex flex-row gap-5 overflow-hidden w-full">
<div className="hidden lg:block w-[25vh] h-full overflow-hidden flex-shrink-0">
<img alt="" className="w-full max-w-[none] h-full object-fit" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex transition-transform duration-500 ease-in-out gap-4 flex-1 min-w-0" id="testimonialCarousel" style={{transform: 'translateX(0px)'}}>

<div className="reveal card-blur overflow-hidden border-white/50 border rounded-xl pt-8 pr-8 pb-8 pl-8 relative" style={{flexShrink: '0', width: 'calc(33.333% - 11px)', transition: 'opacity 0.5s'}}>
<div className="ml-0">
<div className="flex gap-1 mb-4">
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921  00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
</div>
<p className="text-light-bg text-lg mb-4">"I don't worry about a thing anymore."</p>
<div className="border-t border-white/20 pt-3">
<p className="text-light-bg font-medium">Happy Customer</p>
<p className="text-light-bg text-sm">Lorem Ipsum</p>
</div>
</div>
</div>

<div className="reveal bg-white/10 rounded-xl p-6 border border-white/50 card-blur backdrop-blur-lg" style={{flexShrink: '0', width: 'calc(33.333% - 11px)', transition: 'opacity 0.5s'}}>
<div className="flex gap-1 mb-4 justify-center">
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
</div>
<p className="text-light-bg text-center mb-4">"It's such a relief knowing everything is taken
                                care
                                of."
                            </p>
<div className="border-t border-white/20 pt-3 text-center">
<p className="text-light-bg font-medium">Satisfied Client</p>
<p className="text-light-bg text-sm">Lorem Ipsum</p>
</div>
</div>

<div className="reveal bg-white/10 rounded-xl p-6 border border-white/50 card-blur backdrop-blur-lg" style={{flexShrink: '0', width: 'calc(33.333% - 11px)', transition: 'opacity 0.5s'}}>
<div className="flex gap-1 mb-4 justify-center">
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
</div>
<p className="text-light-bg text-center mb-4">"It's such a relief knowing everything is taken
                                care
                                of."
                            </p>
<div className="border-t border-white/20 pt-3 text-center">
<p className="text-light-bg font-medium">Satisfied Client</p>
<p className="text-light-bg text-sm">Lorem Ipsum</p>
</div>
</div>
<div className="reveal bg-dark-blue rounded-xl p-6 border border-white/50 card-blur relative overflow-hidden" style={{flexShrink: '0', width: 'calc(33.333% - 11px)', transition: 'opacity 0.5s'}}>
<div className="ml-0">
<div className="flex gap-1 mb-4">
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
</div>
<p className="text-light-bg text-lg mb-4">"I don't worry about a thing anymore."</p>
<div className="border-t border-white/20 pt-3">
<p className="text-light-bg font-medium">Happy Customer</p>
<p className="text-light-bg text-sm">Lorem Ipsum</p>
</div>
</div>
</div>
<div className="reveal bg-white/10 rounded-xl p-6 border border-white/50 card-blur backdrop-blur-lg" style={{flexShrink: '0', width: 'calc(33.333% - 11px)', transition: 'opacity 0.5s'}}>
<div className="flex gap-1 mb-4 justify-center">
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
</div>
<p className="text-light-bg text-center mb-4">"It's such a relief knowing everything is taken
                                care
                                of."
                            </p>
<div className="border-t border-white/20 pt-3 text-center">
<p className="text-light-bg font-medium">Satisfied Client</p>
<p className="text-light-bg text-sm">Lorem Ipsum</p>
</div>
</div>
<div className="reveal bg-white/10 rounded-xl p-6 border border-white/50 card-blur backdrop-blur-lg" style={{flexShrink: '0', width: 'calc(33.333% - 11px)', transition: 'opacity 0.5s'}}>
<div className="flex gap-1 mb-4 justify-center">
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
<svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
</path>
</svg>
</div>
<p className="text-light-bg text-center mb-4">"It's such a relief knowing everything is taken
                                care
                                of."
                            </p>
<div className="border-t border-white/20 pt-3 text-center">
<p className="text-light-bg font-medium">Satisfied Client</p>
<p className="text-light-bg text-sm">Lorem Ipsum</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full mt-8">
<div className="flex flex-wrap justify-center md:justify-start gap-3 w-full md:w-auto">
<button className="h-[54px] px-8 rounded-full font-medium flex items-center gap-2 shadow-sm hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 bg-primary-yellow text-dark-blue">
<span>Leave a Review</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
<button className="h-[54px] px-8 rounded-full font-medium flex items-center gap-2 shadow-sm hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 bg-white/5 text-white backdrop-blur-md border border-white/10">
<span className="">View All Reviews</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
<div className="flex items-center gap-4">
<button aria-label="Previous slide" className="group bg-white/5 backdrop-blur-md rounded-full p-3 border border-white/10 hover:bg-white/10 transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed" disabled="" id="prevTestimonialBtn" style={{opacity: '0.3'}}>
<svg className="w-5 h-5 text-white/90 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<div className="flex items-center gap-2 px-2" id="testimonialDots"><button aria-label="Go to slide 1" className="rounded-full transition-all duration-300 bg-white w-6 h-1.5"></button><button aria-label="Go to slide 2" className="rounded-full transition-all duration-300 bg-white/20 hover:bg-white/40 w-1.5 h-1.5"></button><button aria-label="Go to slide 3" className="rounded-full transition-all duration-300 bg-white/20 hover:bg-white/40 w-1.5 h-1.5"></button><button aria-label="Go to slide 4" className="rounded-full transition-all duration-300 bg-white/20 hover:bg-white/40 w-1.5 h-1.5"></button></div>
<button aria-label="Next slide" className="group bg-white/5 backdrop-blur-md rounded-full p-3 border border-white/10 hover:bg-white/10 transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed" id="nextTestimonialBtn" style={{opacity: '1'}}>
<svg className="w-5 h-5 text-white/90 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="lg:px-10 pt-20 pr-4 pb-20 pl-4 relative">
<div className="w-full h-[100vh] z-[-1] absolute bottom-0 left-0">
<img className="w-[100%] object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3943583e-8625-4202-8a90-068ef36e9e98_3840w.png"/>
</div>
<div className="max-w-[1800px] mx-auto flex flex-col gap-10 mb-6 lg:mb-2">
<div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-10">

<div className="reveal">
<h2 className="reveal heading text-4xl lg:text-5xl text-primary-blue mb-4">
                        Have questions? We have answers
                    </h2>
<p className="text-lg text-dark-blue">
                        We believe in being open and transparent.
                        Here are answers to some of the most common questions we receive.
                        If you don't see your question here, please don't hesitate to reach out!
                    </p>
</div>

<div className="reveal space-y-6">

<div className="reveal bg-primary-blue rounded-xl p-6">
<div className="flex items-start justify-between cursor-pointer select-none" onclick="this.parentElement.querySelector('p').classList.toggle('hidden'); this.querySelector('svg').classList.toggle('rotate-180');">
<div className="flex gap-3 flex-1">
<div className="bg-primary-yellow rounded-lg px-4 py-2 flex-shrink-0">
<span className="text-dark-blue font-semibold text-xl">1</span>
</div>
<h3 className="reveal text-light-bg text-xl font-medium tracking-tight">
                                    What happens if I need a repair that's not covered?
                                </h3>
</div>
<svg className="w-6 h-6 text-light-bg/50 flex-shrink-0 ml-2 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<p className="text-light-bg text-lg leading-relaxed mt-4">
                            Lorem ipsum dolor sit amet consectetur. Adipiscing nisi id odio mattis non neque. Euismod
                            volutpat varius porttitor eget eu nulla elit urna. Molestie feugiat in sed faucibus
                            bibendum.
                        </p>
</div>

<div className="reveal bg-primary-blue rounded-xl p-6">
<div className="flex items-start justify-between cursor-pointer select-none" onclick="this.parentElement.querySelector('p').classList.toggle('hidden'); this.querySelector('svg').classList.toggle('rotate-180');">
<div className="flex gap-3 flex-1">
<div className="bg-primary-yellow rounded-lg px-4 py-2 flex-shrink-0">
<span className="text-dark-blue font-semibold text-xl">2</span>
</div>
<h3 className="reveal text-light-bg text-xl font-medium tracking-tight">
                                    Can I upgrade my plan later?
                                </h3>
</div>
<svg className="w-6 h-6 text-light-bg/50 flex-shrink-0 ml-2 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<p className="text-light-bg text-lg leading-relaxed mt-4 hidden">
                            Lorem ipsum dolor sit amet consectetur. Adipiscing nisi id odio mattis non neque. Euismod
                            volutpat varius porttitor eget eu nulla elit urna. Molestie feugiat in sed faucibus
                            bibendum.
                        </p>
</div>

<div className="reveal bg-primary-blue rounded-xl p-6">
<div className="flex items-start justify-between cursor-pointer select-none" onclick="this.parentElement.querySelector('p').classList.toggle('hidden'); this.querySelector('svg').classList.toggle('rotate-180');">
<div className="flex gap-3 flex-1">
<div className="bg-primary-yellow rounded-lg px-4 py-2 flex-shrink-0">
<span className="text-dark-blue font-semibold text-xl">3</span>
</div>
<h3 className="reveal text-light-bg text-xl font-medium tracking-tight">
                                    Is there a long-term contract?
                                </h3>
</div>
<svg className="w-6 h-6 text-light-bg/50 flex-shrink-0 ml-2 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<p className="text-light-bg text-lg leading-relaxed mt-4 hidden">
                            Lorem ipsum dolor sit amet consectetur. Adipiscing nisi id odio mattis non neque. Euismod
                            volutpat varius porttitor eget eu nulla elit urna. Molestie feugiat in sed faucibus
                            bibendum.
                        </p>
</div>
</div>
</div>
</div>
<div className="">
<div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">

<div className="reveal bg-primary-blue rounded-xl p-10 text-center">
<h2 className="reveal heading text-4xl lg:text-5xl text-light-bg mb-6">
                        Ready to Make your
                        Home a Happy Home?
                    </h2>
<p className="text-lg text-light-bg mb-8 leading-relaxed">
                        Join the growing family of homeowners who have said goodbye to stress and hello to simple,
                        worry-free living. With MyHappyHome, you're not just getting a service plan, you're getting
                        a
                        partner dedicated to your happiness.
                        Let's get started.
                    </p>
<div className="flex flex-col lg:flex-row items-center justify-center gap-3">
<button className="h-[54px] px-8 rounded-full font-semibold flex items-center justify-between gap-2 btn-shadow btn-inner-shadow hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 w-full lg:w-auto bg-primary-yellow text-dark-blue">
<span>Explore Membership Plans</span>
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
<button className="h-[54px] px-8 rounded-full font-semibold flex items-center justify-between gap-2 btn-shadow btn-inner-shadow hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 w-full lg:w-auto bg-secondary-blue text-light-bg">
<span className="">See Our Full List of Coverage Solutions</span>
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</button>
</div>
</div>

<div className="reveal">
<img alt="Happy family at home" className="w-full h-auto object-cover bg-center rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58e1ec9c-69ac-4740-b86c-ee02175a0554_1600w.png"/>
</div>
</div>
</div>
</section>

<footer className="bg-gradient-to-b from-secondary-blue to-primary-blue py-12 px-4 lg:px-6">
<div className="max-w-[1800px] mx-auto">

<div className="reveal bg-white rounded-2xl mb-4 pt-6 pr-6 pb-6 pl-6 shadow-lg">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


<div className="w-full bg-gray-200 rounded-xl overflow-hidden">
<img alt="Service area map" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1a24236-dc69-4a24-b65d-edd874aae934_800w.png"/>
</div>

<div className="w-full flex flex-col justify-center">

<div className="flex h-full rounded-xl mb-6 pt-6 pr-6 pb-6 pl-6 items-center justify-center bg-light-bg">
<img alt="Logo" className="w-1/2 h-auto object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83e26819-3f08-43ac-8bbe-4bc8b24285be_800w.png"/>
</div>

<div className="grid grid-cols-2 gap-4 text-sm gap-x-4 gap-y-4">

<div className="rounded-xl pt-4 pr-4 pb-4 pl-4 bg-light-bg">
<h5 className="text-secondary-blue font-semibold mb-1">Physical Address</h5>
<p className="text-dark-blue">XXXXX</p>
<p className="text-dark-blue">XXXXX</p>
</div>

<div className="rounded-xl pt-4 pr-4 pb-4 pl-4 bg-light-bg">
<h5 className="text-secondary-blue font-semibold mb-1">License</h5>
<p className="text-dark-blue">XXXXXX</p>
<p className="text-dark-blue">XXXXX</p>
</div>

<div className="rounded-xl pt-4 pr-4 pb-4 pl-4 bg-light-bg">
<h5 className="text-secondary-blue font-semibold mb-1">Contact</h5>
<p className="text-dark-blue">XXXX</p>
<p className="text-dark-blue">XXXX</p>
</div>

<div className="rounded-xl pt-4 pr-4 pb-4 pl-4 bg-light-bg">
<h5 className="text-secondary-blue font-semibold mb-1">Working hours</h5>
<p className="text-dark-blue">XXX</p>
<p className="text-dark-blue">XXXXX</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
<button className="h-[54px] px-6 rounded-full font-semibold flex items-center justify-between gap-2 btn-shadow btn-inner-shadow hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 w-full bg-primary-yellow text-dark-blue text-sm" onclick="window.location.href = '/contract'">
<span>Request Service</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
<button className="h-[54px] px-6 rounded-full font-semibold flex items-center justify-between gap-2 btn-shadow btn-inner-shadow hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 w-full bg-secondary-blue text-light-bg text-sm">
<span>(555) 555 - 555</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</button>
</div>
</div>

<div className="grid grid-cols-2 gap-3">

<a className="bg-dark-blue rounded-xl p-6 flex flex-col justify-between hover:bg-dark-blue/90 transition-all group" href="/services">
<div className="flex flex-row justify-end">
<svg className="w-6 h-6 text-light-bg group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
<path d="M7 17 17 7"></path>
</svg>
</div>
<span className="text-light-bg align-start text-lg">Services</span>
</a>
<a className="bg-dark-blue rounded-xl p-6 flex flex-col justify-between hover:bg-dark-blue/90 transition-all group" href="/">
<div className="flex flex-row justify-end">
<svg className="w-6 h-6 text-light-bg group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
<path d="M7 17 17 7"></path>
</svg>
</div>
<span className="text-light-bg align-start text-lg">Home</span>
</a>
<a className="bg-dark-blue rounded-xl p-6 flex flex-col justify-between hover:bg-dark-blue/90 transition-all group" href="/about">
<div className="flex flex-row justify-end">
<svg className="w-6 h-6 text-light-bg group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
<path d="M7 17 17 7"></path>
</svg>
</div>
<span className="text-light-bg align-start text-lg">About Us</span>
</a>
<a className="bg-dark-blue rounded-xl p-6 flex flex-col justify-between hover:bg-dark-blue/90 transition-all group" href="/blog">
<div className="flex flex-row justify-end">
<svg className="w-6 h-6 text-light-bg group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
<path d="M7 17 17 7"></path>
</svg>
</div>
<span className="text-light-bg align-start text-lg">blog</span>
</a>
<a className="bg-dark-blue rounded-xl p-6 flex flex-col justify-between hover:bg-dark-blue/90 transition-all group" href="/services">
<div className="flex flex-row justify-end">
<svg className="w-6 h-6 text-light-bg group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
<path d="M7 17 17 7"></path>
</svg>
</div>
<span className="text-light-bg align-start text-lg">Service Areas</span>
</a>
<a className="bg-dark-blue rounded-xl p-6 flex flex-col justify-between hover:bg-dark-blue/90 transition-all group" href="/contact">
<div className="flex flex-row justify-end">
<svg className="w-6 h-6 text-light-bg group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
<path d="M7 17 17 7"></path>
</svg>
</div>
<span className="text-light-bg align-start text-lg">Contact Us</span>
</a>
</div>
</div>
</div>

<div className="rounded-xl px-6 py-4 flex flex-col md:flex-row items-center justify-between text-light-bg text-sm">
<p className="">Copyright © 2025 My Happy Home. All rights reserved.</p>
<span className="">Designed &amp; Developed By : <img alt="CI WEB GROUP" className="inline-block w-auto h-[12px] object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9eed29a3-035b-4067-94d3-ceba884ac8d7_320w.png"/></span>
<div className="flex items-center gap-6 mt-3 md:mt-0">
<a className="hover:text-primary-yellow transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-primary-yellow transition-colors" href="#">Accessibility Statement</a>
<a className="hover:text-primary-yellow transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>





    </>
  );
}
