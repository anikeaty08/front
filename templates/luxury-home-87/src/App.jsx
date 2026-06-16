import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"@context": "https://schema.org",
"@type": "Organization",
"name": "Byte Luxury Homes",
"url": "https://www.byteluxuryhomes.com",
"logo": "https://www.byteluxuryhomes.com/logo.png",
"contactPoint": {
"@type": "ContactPoint",
"telephone": "+1-555-123-4567",
"contactType": "Sales",
"areaServed": "US",
"availableLanguage": "English"
},
"sameAs": [
"https://twitter.com/byteluxuryhomes",
"https://www.linkedin.com/company/byteluxuryhomes",
"https://www.youtube.com/byteluxuryhomes"
]
}



        // Header scroll behavior
        const header = document.getElementById('main-header');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 60) {
                header.classList.add('nav-scrolled');
            } else {
                header.classList.remove('nav-scrolled');
            }
            
            lastScroll = currentScroll;
        });

        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const hamburgerIcon = document.getElementById('hamburger-icon');
        const closeIcon = document.getElementById('close-icon');
        let isMenuOpen = false;

        mobileMenuButton.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            mobileMenuButton.setAttribute('aria-expanded', isMenuOpen);
            
            if (isMenuOpen) {
                mobileMenu.classList.add('open');
                hamburgerIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.remove('open');
                hamburgerIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                document.body.style.overflow = '';
            }
        });

        // Close mobile menu when clicking a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenuButton.setAttribute('aria-expanded', 'false');
                mobileMenu.classList.remove('open');
                hamburgerIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                document.body.style.overflow = '';
            });
        });

        // Testimonial carousel
        const carousel = document.getElementById('testimonial-carousel').querySelector('.flex');
        const prevButton = document.getElementById('prev-testimonial');
        const nextButton = document.getElementById('next-testimonial');
        const indicators = document.querySelectorAll('.carousel-indicator');
        let currentIndex = 0;
        const totalSlides = 3;

        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            indicators.forEach((indicator, index) => {
                if (index === currentIndex) {
                    indicator.classList.remove('bg-[#D9D6CE]/40');
                    indicator.classList.add('bg-[#C7A770]');
                } else {
                    indicator.classList.remove('bg-[#C7A770]');
                    indicator.classList.add('bg-[#D9D6CE]/40');
                }
            });
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        });

        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
        });

        // Keyboard navigation for carousel
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevButton.click();
            } else if (e.key === 'ArrowRight') {
                nextButton.click();
            }
        });

        // Auto-advance carousel
        let carouselInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        }, 6000);

        // Pause auto-advance on hover
        const testimonialSection = document.getElementById('testimonials');
        testimonialSection.addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });

        testimonialSection.addEventListener('mouseleave', () => {
            carouselInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateCarousel();
            }, 6000);
        });

        // Form submission
        const consultationForm = document.getElementById('consultation-form');
        const formSuccess = document.getElementById('form-success');

        consultationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validate required fields
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const location = document.getElementById('location').value;
            const consent = document.getElementById('consent').checked;

            if (name && email && location && consent) {
                // Hide form, show success message
                consultationForm.style.display = 'none';
                formSuccess.classList.remove('hidden');
                
                // Scroll to success message
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // In production, this would send data to backend
                console.log('Form submitted:', {
                    name,
                    email,
                    location,
                    budget: document.getElementById('budget').value,
                    timeline: document.getElementById('timeline').value,
                    message: document.getElementById('message').value
                });
            }
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href !== '#consultation' && href !== '#portfolio' && href !== '#process' && href !== '#testimonials' && href !== '#contact') {
                    return; // Let default behavior handle external/special links
                }
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = 80; // Account for fixed header
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#C7A770] focus:text-[#0E1111] focus:rounded focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#C7A770]" href="#main-content">Skip to main content</a>

<header className="fixed z-50 transition-all duration-300 top-0 right-0 left-0" id="main-header">
<nav aria-label="Primary navigation" className="container mx-auto max-w-[1200px] px-4 md:px-6">
<div className="flex items-center justify-between py-4 md:py-5">

<div className="flex items-center">
<a className="text-[#F7F7F5] text-lg md:text-xl font-semibold tracking-tight hover:text-[#C7A770] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="/">
                        Byte Luxury Homes
                    </a>
</div>

<div className="hidden lg:flex items-center space-x-8">
<a className="text-[#F7F7F5] text-[15px] hover:text-[#C7A770] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#portfolio">Portfolio</a>
<a className="text-[#F7F7F5] text-[15px] hover:text-[#C7A770] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#services">Services</a>
<a className="text-[#F7F7F5] text-[15px] hover:text-[#C7A770] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#process">Process</a>
<a className="text-[#F7F7F5] text-[15px] hover:text-[#C7A770] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#about">About</a>
<a className="text-[#F7F7F5] text-[15px] hover:text-[#C7A770] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#testimonials">Testimonials</a>
<a className="text-[#F7F7F5] text-[15px] hover:text-[#C7A770] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#contact">Contact</a>
</div>

<div className="hidden lg:flex items-center space-x-6">
<a className="text-[#F7F7F5] text-[15px] hover:text-[#C7A770] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="tel:5551234567">Call (555) 123-4567</a>
<a className="inline-block bg-[#C7A770] text-[#0E1111] px-6 py-2.5 rounded-lg text-[15px] font-semibold hover:bg-[#B89660] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770]" href="#consultation">Book Consultation</a>
</div>

<button aria-expanded="false" aria-label="Toggle mobile menu" className="lg:hidden text-[#F7F7F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded p-1" id="mobile-menu-button">
<svg fill="none" height="24" id="hamburger-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="3" x2="21" y1="12" y2="12"></line>
<line x1="3" x2="21" y1="6" y2="6"></line>
<line x1="3" x2="21" y1="18" y2="18"></line>
</svg>
<svg className="hidden" fill="none" height="24" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-[#0E1111] lg:hidden z-40 overflow-y-auto" id="mobile-menu">
<div className="container mx-auto max-w-[1200px] px-4 py-24">
<nav className="flex flex-col space-y-6">
<a className="text-[#F7F7F5] text-2xl font-light tracking-tight hover:text-[#C7A770] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#portfolio">Portfolio</a>
<a className="text-[#F7F7F5] text-2xl font-light tracking-tight hover:text-[#C7A770] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#services">Services</a>
<a className="text-[#F7F7F5] text-2xl font-light tracking-tight hover:text-[#C7A770] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#process">Process</a>
<a className="text-[#F7F7F5] text-2xl font-light tracking-tight hover:text-[#C7A770] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#about">About</a>
<a className="text-[#F7F7F5] text-2xl font-light tracking-tight hover:text-[#C7A770] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#testimonials">Testimonials</a>
<a className="text-[#F7F7F5] text-2xl font-light tracking-tight hover:text-[#C7A770] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#contact">Contact</a>
</nav>
<div className="mt-12 pt-12 border-t border-[#D9D6CE]/20">
<a className="block text-[#C7A770] text-lg mb-6 hover:text-[#B89660] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="tel:5551234567">Call (555) 123-4567</a>
<a className="inline-block w-full text-center bg-[#C7A770] text-[#0E1111] px-6 py-4 rounded-lg text-base font-semibold hover:bg-[#B89660] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770]" href="#consultation">Book Consultation</a>
</div>
</div>
</div>
</header>

<main className="" id="main-content">

<section className="relative min-h-screen flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury custom home exterior at dusk" className="w-full h-full object-cover" loading="eager" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&amp;h=1080&amp;fit=crop&amp;q=90"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#0E1111]/70 to-[#0E1111]/40"></div>
</div>
<div className="container mx-auto max-w-[1200px] px-4 md:px-6 relative z-10 pt-24 pb-16">
<div className="grid lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7">
<p className="text-[#C7A770] text-sm md:text-[15px] tracking-wide uppercase mb-4 fade-up font-medium">Bespoke Residences, End-to-End</p>
<h1 className="text-[#F7F7F5] text-[44px] md:text-[52px] lg:text-[56px] leading-[1.2] tracking-tight mb-6 fade-up fade-up-delay-1">Crafting Timeless Luxury Homes, Built Around You.</h1>
<p className="text-[#F7F7F5]/90 text-lg md:text-[18px] leading-[1.65] mb-8 max-w-xl fade-up fade-up-delay-2">From architecture to finishes, we manage every detail—design, build, and delivery.</p>
<div className="flex flex-col sm:flex-row gap-4 mb-12 fade-up fade-up-delay-3">
<a className="inline-block bg-[#C7A770] text-[#0E1111] px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#B89660] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] text-center" href="#consultation">Schedule Your Design Consultation</a>
<a className="inline-flex items-center justify-center text-[#F7F7F5] px-8 py-4 rounded-lg text-base font-medium hover:text-[#C7A770] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770]" href="#portfolio">
                                Explore Our Portfolio
                                <svg className="ml-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 fade-up fade-up-delay-4">
<div className="flex items-start space-x-3">
<svg className="flex-shrink-0 mt-0.5" fill="none" height="24" stroke="#C7A770" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
<div>
<p className="text-[#F7F7F5] text-[15px] font-medium">Design-Build</p>
</div>
</div>
<div className="flex items-start space-x-3">
<svg className="flex-shrink-0 mt-0.5" fill="none" height="24" stroke="#C7A770" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>
<div>
<p className="text-[#F7F7F5] text-[15px] font-medium">Transparent Process</p>
</div>
</div>
<div className="flex items-start space-x-3">
<svg className="flex-shrink-0 mt-0.5" fill="none" height="24" stroke="#C7A770" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<div>
<p className="text-[#F7F7F5] text-[15px] font-medium">Award-Winning Craftsmanship</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#0E1111]" id="services">
<div className="container mx-auto max-w-[1200px] px-4 md:px-6">
<p className="text-center text-[#8D8D87] text-sm md:text-[15px] tracking-wide uppercase mb-16">What Sets Us Apart</p>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">

<div className="bg-[#F7F7F5]/5 border border-[#D9D6CE]/20 rounded-lg p-8 hover:border-[#C7A770]/40 transition-all duration-300 fade-up stagger-item">
<div className="mb-6">
<svg fill="none" height="32" stroke="#C7A770" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<rect height="7" width="7" x="3" y="3"></rect>
<rect height="7" width="7" x="14" y="3"></rect>
<rect height="7" width="7" x="14" y="14"></rect>
<rect height="7" width="7" x="3" y="14"></rect>
</svg>
</div>
<h3 className="text-[#F7F7F5] text-xl md:text-2xl mb-3 tracking-tight">Design Excellence</h3>
<p className="text-[#F7F7F5]/80 text-base leading-[1.65]">Signature architecture &amp; interiors for site, light, and lifestyle.</p>
</div>

<div className="bg-[#F7F7F5]/5 border border-[#D9D6CE]/20 rounded-lg p-8 hover:border-[#C7A770]/40 transition-all duration-300 fade-up stagger-item">
<div className="mb-6">
<svg fill="none" height="32" stroke="#C7A770" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
</svg>
</div>
<h3 className="text-[#F7F7F5] text-xl md:text-2xl mb-3 tracking-tight">Craftsmanship</h3>
<p className="text-[#F7F7F5]/80 text-base leading-[1.65]">Master builders, vetted materials, timeless detailing.</p>
</div>

<div className="bg-[#F7F7F5]/5 border border-[#D9D6CE]/20 rounded-lg p-8 hover:border-[#C7A770]/40 transition-all duration-300 fade-up stagger-item">
<div className="mb-6">
<svg fill="none" height="32" stroke="#C7A770" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<h3 className="text-[#F7F7F5] text-xl md:text-2xl mb-3 tracking-tight">Transparency</h3>
<p className="text-[#F7F7F5]/80 text-base leading-[1.65]">Clear scopes, budgets, and weekly progress updates.</p>
</div>

<div className="bg-[#F7F7F5]/5 border border-[#D9D6CE]/20 rounded-lg p-8 hover:border-[#C7A770]/40 transition-all duration-300 fade-up stagger-item">
<div className="mb-6">
<svg fill="none" height="32" stroke="#C7A770" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
</div>
<h3 className="text-[#F7F7F5] text-xl md:text-2xl mb-3 tracking-tight">Aftercare</h3>
<p className="text-[#F7F7F5]/80 text-base leading-[1.65]">Warranty, punch-list precision, and client support.</p>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center text-[#C7A770] text-base font-medium hover:text-[#B89660] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#process">
                        See Our Process
                        <svg className="ml-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</a>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#0E1111]" id="portfolio">
<div className="container mx-auto max-w-[1200px] px-4 md:px-6">
<h2 className="text-[#F7F7F5] text-[36px] md:text-[40px] tracking-tight mb-16 text-center">Featured Residences</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">

<a className="md:col-span-2 md:row-span-2 relative group rounded-lg overflow-hidden shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.16)] transition-all duration-300 fade-up stagger-item focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770]" href="#project-1">
<img alt="Modern luxury residence in California wine country" className="w-full h-full object-cover aspect-[4/3] md:aspect-auto md:h-full" loading="lazy" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&amp;h=800&amp;fit=crop&amp;q=90"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0E1111]/80 via-[#0E1111]/20 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
<p className="text-[#C7A770] text-sm md:text-[15px] mb-2 font-medium">Napa Valley, CA</p>
<h3 className="text-[#F7F7F5] text-2xl md:text-3xl tracking-tight mb-2">Wine Country Estate</h3>
<p className="text-[#F7F7F5]/80 text-base">Contemporary modernism meets vineyard living</p>
</div>
</a>

<a className="relative group rounded-lg overflow-hidden shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.16)] transition-all duration-300 fade-up stagger-item focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770]" href="#project-2">
<img alt="Luxury home interior with custom millwork" className="w-full h-full object-cover aspect-square" loading="lazy" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&amp;h=600&amp;fit=crop&amp;q=90"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0E1111]/80 via-[#0E1111]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<p className="text-[#C7A770] text-sm mb-1 font-medium">Interior Detail</p>
<h3 className="text-[#F7F7F5] text-xl tracking-tight">Custom Millwork</h3>
</div>
</a>

<a className="relative group rounded-lg overflow-hidden shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.16)] transition-all duration-300 fade-up stagger-item focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770]" href="#project-3">
<img alt="Mountain contemporary home exterior" className="w-full h-full object-cover aspect-square" loading="lazy" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&amp;h=600&amp;fit=crop&amp;q=90"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0E1111]/80 via-[#0E1111]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<p className="text-[#C7A770] text-sm mb-1 font-medium">Aspen, CO</p>
<h3 className="text-[#F7F7F5] text-xl tracking-tight">Alpine Retreat</h3>
</div>
</a>

<a className="relative group rounded-lg overflow-hidden shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.16)] transition-all duration-300 fade-up stagger-item focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770]" href="#project-4">
<img alt="Coastal modern architecture" className="w-full h-full object-cover aspect-[3/2]" loading="lazy" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0E1111]/80 via-[#0E1111]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<p className="text-[#C7A770] text-sm mb-1 font-medium">Malibu, CA</p>
<h3 className="text-[#F7F7F5] text-xl tracking-tight">Coastal Modern</h3>
</div>
</a>

<a className="relative group rounded-lg overflow-hidden shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.16)] transition-all duration-300 fade-up stagger-item focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770]" href="#project-5">
<img alt="Natural stone and wood details" className="w-full h-full object-cover aspect-[3/2]" loading="lazy" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&amp;h=400&amp;fit=crop&amp;q=90"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0E1111]/80 via-[#0E1111]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<p className="text-[#C7A770] text-sm mb-1 font-medium">Material Detail</p>
<h3 className="text-[#F7F7F5] text-xl tracking-tight">Stone &amp; Wood</h3>
</div>
</a>

<a className="relative group rounded-lg overflow-hidden shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.16)] transition-all duration-300 fade-up stagger-item focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770]" href="#project-6">
<img alt="Luxury bathroom with custom finishes" className="w-full h-full object-cover aspect-[3/2]" loading="lazy" src="https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=600&amp;h=400&amp;fit=crop&amp;q=90"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0E1111]/80 via-[#0E1111]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<p className="text-[#C7A770] text-sm mb-1 font-medium">Interior Detail</p>
<h3 className="text-[#F7F7F5] text-xl tracking-tight">Spa Retreat</h3>
</div>
</a>
</div>
<div className="text-center">
<a className="inline-flex items-center text-[#C7A770] text-base font-medium hover:text-[#B89660] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#full-portfolio">
                        View Full Portfolio
                        <svg className="ml-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</a>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#0E1111] border-t border-[#D9D6CE]/20" id="process">
<div className="container mx-auto max-w-[1200px] px-4 md:px-6">
<h2 className="text-[#F7F7F5] text-[36px] md:text-[40px] tracking-tight mb-6 text-center">How We Build, Together.</h2>
<p className="text-[#8D8D87] text-base md:text-lg leading-[1.65] text-center mb-16 max-w-2xl mx-auto">A proven five-phase process that brings your vision to life with clarity and craftsmanship.</p>

<div className="hidden lg:block mb-16">
<div className="relative">

<div className="absolute top-8 left-0 right-0 h-[2px] bg-[#D9D6CE]/20"></div>
<div className="grid grid-cols-5 gap-4 relative">

<div className="text-center fade-up stagger-item">
<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#C7A770] flex items-center justify-center text-[#0E1111] text-xl font-semibold relative z-10">1</div>
<div className="mb-3">
<svg className="mx-auto" fill="none" height="28" stroke="#C7A770" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="16" y2="12"></line>
<line x1="12" x2="12.01" y1="8" y2="8"></line>
</svg>
</div>
<h3 className="text-[#F7F7F5] text-lg md:text-xl mb-2 tracking-tight">Discovery</h3>
<p className="text-[#F7F7F5]/70 text-sm leading-[1.65]">Goals, site analysis, and budget framework</p>
</div>

<div className="text-center fade-up stagger-item">
<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#C7A770] flex items-center justify-center text-[#0E1111] text-xl font-semibold relative z-10">2</div>
<div className="mb-3">
<svg className="mx-auto" fill="none" height="28" stroke="#C7A770" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19l7-7 3 3-7 7-3-3z"></path>
<path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
<path d="M2 2l7.586 7.586"></path>
<circle cx="11" cy="11" r="2"></circle>
</svg>
</div>
<h3 className="text-[#F7F7F5] text-lg md:text-xl mb-2 tracking-tight">Design</h3>
<p className="text-[#F7F7F5]/70 text-sm leading-[1.65]">Concept through design development</p>
</div>

<div className="text-center fade-up stagger-item">
<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#C7A770] flex items-center justify-center text-[#0E1111] text-xl font-semibold relative z-10">3</div>
<div className="mb-3">
<svg className="mx-auto" fill="none" height="28" stroke="#C7A770" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
<polyline points="2 17 12 22 22 17"></polyline>
<polyline points="2 12 12 17 22 12"></polyline>
</svg>
</div>
<h3 className="text-[#F7F7F5] text-lg md:text-xl mb-2 tracking-tight">Selections</h3>
<p className="text-[#F7F7F5]/70 text-sm leading-[1.65]">Materials, finishes, and fixtures</p>
</div>

<div className="text-center fade-up stagger-item">
<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#C7A770] flex items-center justify-center text-[#0E1111] text-xl font-semibold relative z-10">4</div>
<div className="mb-3">
<svg className="mx-auto" fill="none" height="28" stroke="#C7A770" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect>
<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
</svg>
</div>
<h3 className="text-[#F7F7F5] text-lg md:text-xl mb-2 tracking-tight">Build</h3>
<p className="text-[#F7F7F5]/70 text-sm leading-[1.65]">Construction with quality oversight</p>
</div>

<div className="text-center fade-up stagger-item">
<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#C7A770] flex items-center justify-center text-[#0E1111] text-xl font-semibold relative z-10">5</div>
<div className="mb-3">
<svg className="mx-auto" fill="none" height="28" stroke="#C7A770" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
</div>
<h3 className="text-[#F7F7F5] text-lg md:text-xl mb-2 tracking-tight">Handover</h3>
<p className="text-[#F7F7F5]/70 text-sm leading-[1.65]">Orientation, warranty, and support</p>
</div>
</div>
</div>
</div>

<div className="lg:hidden space-y-8 mb-12">

<div className="flex items-start space-x-6 fade-up stagger-item">
<div className="flex-shrink-0">
<div className="w-14 h-14 rounded-full bg-[#C7A770] flex items-center justify-center text-[#0E1111] text-lg font-semibold">1</div>
</div>
<div className="flex-1 pt-2">
<div className="mb-3">
<svg fill="none" height="24" stroke="#C7A770" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="16" y2="12"></line>
<line x1="12" x2="12.01" y1="8" y2="8"></line>
</svg>
</div>
<h3 className="text-[#F7F7F5] text-xl mb-2 tracking-tight">Discovery</h3>
<p className="text-[#F7F7F5]/70 text-base leading-[1.65]">Goals, site analysis, and budget framework</p>
</div>
</div>

<div className="flex items-start space-x-6 fade-up stagger-item">
<div className="flex-shrink-0">
<div className="w-14 h-14 rounded-full bg-[#C7A770] flex items-center justify-center text-[#0E1111] text-lg font-semibold">2</div>
</div>
<div className="flex-1 pt-2">
<div className="mb-3">
<svg fill="none" height="24" stroke="#C7A770" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19l7-7 3 3-7 7-3-3z"></path>
<path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
<path d="M2 2l7.586 7.586"></path>
<circle cx="11" cy="11" r="2"></circle>
</svg>
</div>
<h3 className="text-[#F7F7F5] text-xl mb-2 tracking-tight">Design</h3>
<p className="text-[#F7F7F5]/70 text-base leading-[1.65]">Concept through design development</p>
</div>
</div>

<div className="flex items-start space-x-6 fade-up stagger-item">
<div className="flex-shrink-0">
<div className="w-14 h-14 rounded-full bg-[#C7A770] flex items-center justify-center text-[#0E1111] text-lg font-semibold">3</div>
</div>
<div className="flex-1 pt-2">
<div className="mb-3">
<svg fill="none" height="24" stroke="#C7A770" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
<polyline points="2 17 12 22 22 17"></polyline>
<polyline points="2 12 12 17 22 12"></polyline>
</svg>
</div>
<h3 className="text-[#F7F7F5] text-xl mb-2 tracking-tight">Selections</h3>
<p className="text-[#F7F7F5]/70 text-base leading-[1.65]">Materials, finishes, and fixtures</p>
</div>
</div>

<div className="flex items-start space-x-6 fade-up stagger-item">
<div className="flex-shrink-0">
<div className="w-14 h-14 rounded-full bg-[#C7A770] flex items-center justify-center text-[#0E1111] text-lg font-semibold">4</div>
</div>
<div className="flex-1 pt-2">
<div className="mb-3">
<svg fill="none" height="24" stroke="#C7A770" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect>
<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
</svg>
</div>
<h3 className="text-[#F7F7F5] text-xl mb-2 tracking-tight">Build</h3>
<p className="text-[#F7F7F5]/70 text-base leading-[1.65]">Construction with quality oversight</p>
</div>
</div>

<div className="flex items-start space-x-6 fade-up stagger-item">
<div className="flex-shrink-0">
<div className="w-14 h-14 rounded-full bg-[#C7A770] flex items-center justify-center text-[#0E1111] text-lg font-semibold">5</div>
</div>
<div className="flex-1 pt-2">
<div className="mb-3">
<svg fill="none" height="24" stroke="#C7A770" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
</div>
<h3 className="text-[#F7F7F5] text-xl mb-2 tracking-tight">Handover</h3>
<p className="text-[#F7F7F5]/70 text-base leading-[1.65]">Orientation, warranty, and support</p>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center text-[#C7A770] text-base font-medium hover:text-[#B89660] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#full-process">
                        See Full Process
                        <svg className="ml-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</a>
</div>
</div>
</section>

<section className="md:py-32 bg-[#0E1111] border-[#D9D6CE]/20 border-t pt-20 pb-20" id="testimonials">
<div className="container mx-auto max-w-[1200px] px-4 md:px-6">
<h2 className="text-[#F7F7F5] text-[36px] md:text-[40px] tracking-tight mb-16 text-center">Client Stories</h2>
<div className="relative">

<div className="overflow-hidden" id="testimonial-carousel">
<div className="flex transition-transform duration-500 ease-out">

<div className="w-full flex-shrink-0 px-4">
<div className="max-w-4xl mx-auto">
<div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
<img alt="Portrait of Michael Chen" className="w-24 h-24 rounded-full object-cover shadow-[0_10px_24px_rgba(0,0,0,0.15)]" loading="lazy" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&amp;h=200&amp;fit=crop&amp;q=90"/>
<div className="flex-1 text-center md:text-left">
<p className="text-[#F7F7F5] text-xl md:text-2xl leading-[1.65] mb-6 italic">"From concept to keys, Byte delivered a home beyond our vision. Every detail reflected our lifestyle."</p>
<p className="text-[#C7A770] font-semibold text-base mb-1">Michael Chen</p>
<p className="text-[#8D8D87] text-sm mb-2">Palo Alto, CA · Modern Estate</p>
<a className="inline-flex items-center text-[#C7A770] text-sm hover:text-[#B89660] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#project-chen">
                                                View Project
                                                <svg className="ml-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</a>
</div>
</div>
</div>
</div>

<div className="w-full flex-shrink-0 px-4">
<div className="max-w-4xl mx-auto">
<div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
<img alt="Portrait of Sarah Martinez" className="w-24 h-24 rounded-full object-cover shadow-[0_10px_24px_rgba(0,0,0,0.15)]" loading="lazy" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&amp;h=200&amp;fit=crop&amp;q=90"/>
<div className="flex-1 text-center md:text-left">
<p className="text-[#F7F7F5] text-xl md:text-2xl leading-[1.65] mb-6 italic">"Transparent pricing, weekly updates, and craftsmanship you can see. Our dream home became reality."</p>
<p className="text-[#C7A770] font-semibold text-base mb-1">Sarah Martinez</p>
<p className="text-[#8D8D87] text-sm mb-2">Santa Fe, NM · Southwest Contemporary</p>
<a className="inline-flex items-center text-[#C7A770] text-sm hover:text-[#B89660] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#project-martinez">
                                                View Project
                                                <svg className="ml-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</a>
</div>
</div>
</div>
</div>

<div className="w-full flex-shrink-0 px-4">
<div className="max-w-4xl mx-auto">
<div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
<img alt="Portrait of David Thompson" className="w-24 h-24 rounded-full object-cover shadow-[0_10px_24px_rgba(0,0,0,0.15)]" loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&amp;h=200&amp;fit=crop&amp;q=90"/>
<div className="flex-1 text-center md:text-left">
<p className="text-[#F7F7F5] text-xl md:text-2xl leading-[1.65] mb-6 italic">"The attention to detail is extraordinary. A year later, we're still discovering thoughtful touches everywhere."</p>
<p className="text-[#C7A770] font-semibold text-base mb-1">David Thompson</p>
<p className="text-[#8D8D87] text-sm mb-2">Jackson Hole, WY · Mountain Modern</p>
<a className="inline-flex items-center text-[#C7A770] text-sm hover:text-[#B89660] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#project-thompson">
                                                View Project
                                                <svg className="ml-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-center space-x-4 mt-12">
<button aria-label="Previous testimonial" className="w-12 h-12 rounded-full border border-[#D9D6CE]/40 text-[#F7F7F5] hover:border-[#C7A770] hover:text-[#C7A770] transition-all duration-200 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770]" id="prev-testimonial">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="15 18 9 12 15 6"></polyline>
</svg>
</button>
<div className="flex space-x-2">
<button aria-label="Go to testimonial 1" className="carousel-indicator w-2 h-2 rounded-full bg-[#C7A770] transition-all duration-200" data-index="0"></button>
<button aria-label="Go to testimonial 2" className="carousel-indicator w-2 h-2 rounded-full bg-[#D9D6CE]/40 transition-all duration-200" data-index="1"></button>
<button aria-label="Go to testimonial 3" className="carousel-indicator w-2 h-2 rounded-full bg-[#D9D6CE]/40 transition-all duration-200" data-index="2"></button>
</div>
<button aria-label="Next testimonial" className="w-12 h-12 rounded-full border border-[#D9D6CE]/40 text-[#F7F7F5] hover:border-[#C7A770] hover:text-[#C7A770] transition-all duration-200 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770]" id="next-testimonial">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</button>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 bg-[#0E1111] border-t border-[#D9D6CE]/20">
<div className="container mx-auto max-w-[1200px] px-4 md:px-6">
<p className="text-center text-[#8D8D87] text-sm md:text-[15px] tracking-wide uppercase mb-12">Trusted &amp; Recognized</p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 items-center">

<div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-200">
<div className="text-[#F7F7F5] text-center">
<svg className="mx-auto mb-2" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</svg>
<p className="text-xs font-medium">NAHB Member</p>
</div>
</div>

<div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-200">
<div className="text-[#F7F7F5] text-center">
<svg className="mx-auto mb-2" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<p className="text-xs font-medium">BBB A+ Rated</p>
</div>
</div>

<div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-200">
<div className="text-[#F7F7F5] text-center">
<svg className="mx-auto mb-2" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
<p className="text-xs font-medium">Houzz Best</p>
</div>
</div>

<div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-200">
<div className="text-[#F7F7F5] text-center">
<svg className="mx-auto mb-2" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19l7-7 3 3-7 7-3-3z"></path>
<path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
</svg>
<p className="text-xs font-medium">AIA Partner</p>
</div>
</div>

<div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-200">
<div className="text-[#F7F7F5] text-center">
<svg className="mx-auto mb-2" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
</svg>
<p className="text-xs font-medium">LEED Certified</p>
</div>
</div>

<div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-200">
<div className="text-[#F7F7F5] text-center">
<svg className="mx-auto mb-2" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
</svg>
<p className="text-xs font-medium">AD Featured</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 md:py-32 overflow-hidden" id="consultation">

<div className="absolute inset-0 z-0">
<img alt="Design studio workspace" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&amp;h=800&amp;fit=crop&amp;q=90"/>
<div className="bg-[#0E1111]/85 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="container mx-auto max-w-[1200px] px-4 md:px-6 relative z-10">
<div className="max-w-3xl mx-auto text-center mb-12">
<h2 className="text-[#F7F7F5] text-[36px] md:text-[40px] tracking-tight mb-4">Let's Plan Your Dream Home.</h2>
<p className="text-[#F7F7F5]/80 text-lg leading-[1.65]">Tell us about your site, timeline, and vision. We'll reply within 24 hours.</p>
</div>
<div className="max-w-4xl mx-auto">
<form className="space-y-6" id="consultation-form">

<div className="grid md:grid-cols-2 gap-6">
<div className="">
<label className="block text-[#F7F7F5] text-sm font-medium mb-2" htmlFor="name">Name*</label>
<input className="w-full px-4 py-3 bg-[#F7F7F5]/10 border border-[#D9D6CE]/30 rounded-lg text-[#F7F7F5] placeholder-[#8D8D87] focus:outline-none focus:border-[#C7A770] focus:ring-2 focus:ring-[#C7A770]/20 transition-colors" id="name" name="name" placeholder="Your full name" required="" type="text"/>
</div>
<div className="">
<label className="block text-[#F7F7F5] text-sm font-medium mb-2" htmlFor="email">Email*</label>
<input className="w-full px-4 py-3 bg-[#F7F7F5]/10 border border-[#D9D6CE]/30 rounded-lg text-[#F7F7F5] placeholder-[#8D8D87] focus:outline-none focus:border-[#C7A770] focus:ring-2 focus:ring-[#C7A770]/20 transition-colors" id="email" name="email" placeholder="your@email.com" required="" type="email"/>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6">
<div className="">
<label className="block text-[#F7F7F5] text-sm font-medium mb-2" htmlFor="phone">Phone</label>
<input className="w-full px-4 py-3 bg-[#F7F7F5]/10 border border-[#D9D6CE]/30 rounded-lg text-[#F7F7F5] placeholder-[#8D8D87] focus:outline-none focus:border-[#C7A770] focus:ring-2 focus:ring-[#C7A770]/20 transition-colors" id="phone" name="phone" placeholder="(555) 123-4567" type="tel"/>
</div>
<div className="">
<label className="block text-[#F7F7F5] text-sm font-medium mb-2" htmlFor="location">Project Location*</label>
<input className="w-full px-4 py-3 bg-[#F7F7F5]/10 border border-[#D9D6CE]/30 rounded-lg text-[#F7F7F5] placeholder-[#8D8D87] focus:outline-none focus:border-[#C7A770] focus:ring-2 focus:ring-[#C7A770]/20 transition-colors" id="location" name="location" placeholder="City, State" required="" type="text"/>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6">
<div className="">
<label className="block text-[#F7F7F5] text-sm font-medium mb-2" htmlFor="budget">Budget Range</label>
<select className="w-full px-4 py-3 bg-[#F7F7F5]/10 border border-[#D9D6CE]/30 rounded-lg text-[#F7F7F5] focus:outline-none focus:border-[#C7A770] focus:ring-2 focus:ring-[#C7A770]/20 transition-colors" id="budget" name="budget">
<option value="">Select range</option>
<option value="1-2m">$1M – $2M</option>
<option value="2-3m">$2M – $3M</option>
<option value="3-5m">$3M – $5M</option>
<option value="5m+">$5M+</option>
</select>
</div>
<div>
<label className="block text-[#F7F7F5] text-sm font-medium mb-2" htmlFor="timeline">Timeline</label>
<select className="w-full px-4 py-3 bg-[#F7F7F5]/10 border border-[#D9D6CE]/30 rounded-lg text-[#F7F7F5] focus:outline-none focus:border-[#C7A770] focus:ring-2 focus:ring-[#C7A770]/20 transition-colors" id="timeline" name="timeline">
<option value="">Select timeline</option>
<option value="ready">Ready to start</option>
<option value="3-6">3–6 months</option>
<option value="6-12">6–12 months</option>
<option value="exploring">Still exploring</option>
</select>
</div>
</div>

<div className="">
<label className="block text-[#F7F7F5] text-sm font-medium mb-2" htmlFor="message">Tell us about your vision</label>
<textarea className="w-full px-4 py-3 bg-[#F7F7F5]/10 border border-[#D9D6CE]/30 rounded-lg text-[#F7F7F5] placeholder-[#8D8D87] focus:outline-none focus:border-[#C7A770] focus:ring-2 focus:ring-[#C7A770]/20 transition-colors resize-none" id="message" name="message" placeholder="Share details about your project, site, style preferences, or any questions..." rows="5"></textarea>
</div>

<div className="flex items-start space-x-3">
<input className="mt-1 w-4 h-4 rounded border-[#D9D6CE]/30 bg-[#F7F7F5]/10 text-[#C7A770] focus:ring-2 focus:ring-[#C7A770]/20 focus:ring-offset-0" id="consent" name="consent" required="" type="checkbox"/>
<label className="text-[#F7F7F5]/80 text-sm leading-[1.65]" htmlFor="consent">You agree to our <a className="text-[#C7A770] hover:text-[#B89660] underline" href="#privacy">Privacy Policy</a></label>
</div>

<p className="text-[#8D8D87] text-sm">We never share your information.</p>

<div className="">
<button className="w-full md:w-auto px-10 py-4 bg-[#C7A770] text-[#0E1111] rounded-lg text-base font-semibold hover:bg-[#B89660] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770]" type="submit">Request Consultation</button>
</div>

<div className="hidden p-6 bg-[#1F3A37] border border-[#C7A770]/30 rounded-lg" id="form-success">
<div className="flex items-start space-x-3">
<svg className="flex-shrink-0 mt-0.5" fill="none" height="24" stroke="#C7A770" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
<div>
<p className="text-[#F7F7F5] font-semibold mb-2">Thank you for reaching out!</p>
<p className="text-[#F7F7F5]/80 text-sm leading-[1.65] mb-3">We've received your consultation request and will respond within 24 hours.</p>
<a className="inline-flex items-center text-[#C7A770] text-sm font-medium hover:text-[#B89660] transition-colors" href="#schedule">
                                        Schedule a call now
                                        <svg className="ml-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</a>
</div>
</div>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-[#0E1111] border-t border-[#D9D6CE]/20 py-16 md:py-20" id="contact">
<div className="container mx-auto max-w-[1200px] px-4 md:px-6">

<div className="max-w-2xl mx-auto text-center mb-16 pb-16 border-b border-[#D9D6CE]/20">
<h3 className="text-[#F7F7F5] text-2xl md:text-3xl tracking-tight mb-3">Get design ideas &amp; build insights</h3>
<p className="text-[#8D8D87] text-base mb-6">Monthly newsletter with curated projects and expert guidance.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 px-4 py-3 bg-[#F7F7F5]/10 border border-[#D9D6CE]/30 rounded-lg text-[#F7F7F5] placeholder-[#8D8D87] focus:outline-none focus:border-[#C7A770] focus:ring-2 focus:ring-[#C7A770]/20 transition-colors" placeholder="Your email" type="email"/>
<button className="px-6 py-3 border border-[#C7A770] text-[#C7A770] rounded-lg font-semibold hover:bg-[#C7A770] hover:text-[#0E1111] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770]" type="submit">Subscribe</button>
</form>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">

<div className="">
<h4 className="text-[#F7F7F5] font-semibold text-base mb-4">Company</h4>
<ul className="space-y-3">
<li className=""><a className="text-[#8D8D87] text-sm hover:text-[#C7A770] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#about">About</a></li>
<li className=""><a className="text-[#8D8D87] text-sm hover:text-[#C7A770] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#process">Process</a></li>
<li><a className="text-[#8D8D87] text-sm hover:text-[#C7A770] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#careers">Careers</a></li>
<li><a className="text-[#8D8D87] text-sm hover:text-[#C7A770] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#press">Press/Awards</a></li>
</ul>
</div>

<div>
<h4 className="text-[#F7F7F5] font-semibold text-base mb-4">Services</h4>
<ul className="space-y-3">
<li><a className="text-[#8D8D87] text-sm hover:text-[#C7A770] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#custom-homes">Custom Homes</a></li>
<li><a className="text-[#8D8D87] text-sm hover:text-[#C7A770] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#design-build">Design-Build</a></li>
<li><a className="text-[#8D8D87] text-sm hover:text-[#C7A770] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#interiors">Interior Architecture</a></li>
<li><a className="text-[#8D8D87] text-sm hover:text-[#C7A770] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#renovations">Renovations</a></li>
</ul>
</div>

<div>
<h4 className="text-[#F7F7F5] font-semibold text-base mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-[#8D8D87] text-sm hover:text-[#C7A770] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#blog">Blog/Insights</a></li>
<li><a className="text-[#8D8D87] text-sm hover:text-[#C7A770] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#faqs">FAQs</a></li>
<li><a className="text-[#8D8D87] text-sm hover:text-[#C7A770] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#guides">Guides</a></li>
<li><a className="text-[#8D8D87] text-sm hover:text-[#C7A770] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#privacy">Privacy/Terms</a></li>
</ul>
</div>

<div>
<h4 className="text-[#F7F7F5] font-semibold text-base mb-4">Contact</h4>
<ul className="space-y-3">
<li><p className="text-[#8D8D87] text-sm">123 Design AvenueSan Francisco, CA 94103</p></li>
<li><a className="text-[#8D8D87] text-sm hover:text-[#C7A770] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="tel:5551234567">(555) 123-4567</a></li>
<li><a className="text-[#8D8D87] text-sm hover:text-[#C7A770] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="mailto:hello@byteluxuryhomes.com">hello@byteluxuryhomes.com</a></li>
<li><a className="text-[#C7A770] text-sm hover:text-[#B89660] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="#map">View on map →</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-[#D9D6CE]/20 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
<p className="text-[#8D8D87] text-sm">© 2024 Byte Luxury Homes · License #CA-123456</p>
<div className="flex items-center space-x-6">
<a aria-label="Follow us on Twitter" className="text-[#8D8D87] hover:text-[#C7A770] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="https://twitter.com/byteluxuryhomes">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
</svg>
</a>
<a aria-label="Follow us on LinkedIn" className="text-[#8D8D87] hover:text-[#C7A770] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="https://linkedin.com/company/byteluxuryhomes">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a aria-label="Subscribe on YouTube" className="text-[#8D8D87] hover:text-[#C7A770] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770] rounded" href="https://youtube.com/byteluxuryhomes">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
<polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
</svg>
</a>
</div>
</div>
</div>
</footer>

<div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#0E1111]/95 backdrop-blur-md border-t border-[#D9D6CE]/20 p-4 z-40">
<a className="block w-full bg-[#C7A770] text-[#0E1111] text-center px-6 py-4 rounded-lg text-base font-semibold hover:bg-[#B89660] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7A770]" href="#consultation">Book Consultation</a>
</div>


    </>
  );
}
