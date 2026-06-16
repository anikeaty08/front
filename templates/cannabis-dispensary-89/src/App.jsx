import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons
        lucide.createIcons();

        // Age Verification Modal
        const ageModal = document.getElementById('ageModal');
        const ageYes = document.getElementById('ageYes');
        const ageNo = document.getElementById('ageNo');

        // Check if user has already verified age
        if (localStorage.getItem('ageVerified') === 'true') {
            ageModal.style.display = 'none';
        }

        ageYes.addEventListener('click', () => {
            localStorage.setItem('ageVerified', 'true');
            ageModal.classList.add('animate-scale-in');
            setTimeout(() => {
                ageModal.style.display = 'none';
            }, 300);
        });

        ageNo.addEventListener('click', () => {
            alert('You must be 21 or older to access this website.');
        });

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('mobile-menu-enter');
            }
        });

        // Sticky Header Shadow on Scroll
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                header.classList.add('shadow-sm');
            } else {
                header.classList.remove('shadow-sm');
            }
        });

        // Scroll Reveal Animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, observerOptions);

        // Observe all scroll-reveal elements
        document.querySelectorAll('.scroll-reveal').forEach(el => {
            observer.observe(el);
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerOffset = 64;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    mobileMenu.classList.add('hidden');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-50 flex items-center justify-center age-modal-backdrop bg-black/60" id="ageModal" style={{display: 'none'}}>
<div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 p-8 border border-gray-200 animate-scale-in">
<div className="text-center">
<div className="mb-6 flex justify-center">
<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center float-animation">
<svg className="lucide lucide-shield-check text-green-600 w-8 h-8" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
<h2 className="text-2xl tracking-tight text-black mb-3 animate-slide-up font-jakarta font-medium" style={{}}>Age Verification</h2>
<p className="text-gray-600 mb-6 text-sm leading-relaxed animate-slide-up animate-delay-100 font-geist" style={{}}>You must be 21 years or older to access this website. By entering, you agree to our terms and conditions.</p>
<div className="space-y-3 animate-slide-up animate-delay-200">
<button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg font-geist" id="ageYes" style={{}}>
                        I am 21 or older
                    </button>
<button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 font-geist" id="ageNo" style={{}}>
                        I am under 21
                    </button>
</div>
<p className="text-xs text-gray-500 mt-6 animate-slide-up animate-delay-300 font-geist" style={{}}>By clicking "I am 21 or older", you confirm that you are of legal age in your jurisdiction.</p>
</div>
</div>
</div>

<header className="bg-white border-b border-gray-200 sticky top-0 z-40 transition-all duration-300" id="header">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center">
<a className="text-xl font-semibold tracking-tight text-black transition-all duration-300 hover:scale-105 font-geist" href="#home" style={{}}>
<span className="text-green-600 font-geist" style={{}}>Twin Cities</span> Cannabis
                    </a>
</div>

<nav className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-110 font-geist" href="#home" style={{}}>Home</a>
<div className="relative group">
<button className="text-sm font-medium text-gray-700 hover:text-green-600 transition-all duration-300 flex items-center hover:scale-110 font-geist" style={{}}>
                            Products
                            <svg className="lucide lucide-chevron-down ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
<a className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 rounded-t-lg hover:translate-x-1 font-geist" href="#drinks" style={{}}>Drinks</a>
<a className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 hover:translate-x-1 font-geist" href="#edibles" style={{}}>Edibles</a>
<a className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 hover:translate-x-1 font-geist" href="#cartridges" style={{}}>Cartridges</a>
<a className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 hover:translate-x-1 font-geist" href="#flower" style={{}}>Flower</a>
<a className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 rounded-b-lg hover:translate-x-1 font-geist" href="#resin" style={{}}>Resin</a>
</div>
</div>
<a className="text-sm font-medium text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-110 font-geist" href="#about" style={{}}>About</a>
<a className="text-sm font-medium text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-110 font-geist" href="#location" style={{}}>Location</a>
<a className="text-sm font-medium text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-110 font-geist" href="#contact" style={{}}>Contact</a>
</nav>
<div className="flex items-center space-x-4">
<button className="hidden md:block p-2 text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-110 hover:rotate-90">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="md:hidden p-2 text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-110" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden border-t border-gray-200 bg-white mobile-menu-enter" id="mobileMenu">
<nav className="px-4 py-4 space-y-3">
<a className="block text-sm font-medium text-gray-700 hover:text-green-600 transition-all duration-300 py-2 hover:translate-x-2 font-geist" href="#home" style={{}}>Home</a>
<div className="space-y-2">
<p className="text-sm font-medium text-gray-900 py-2 font-geist" style={{}}>Products</p>
<a className="block text-sm text-gray-700 hover:text-green-600 transition-all duration-300 py-2 pl-4 hover:translate-x-2 font-geist" href="#drinks" style={{}}>Drinks</a>
<a className="block text-sm text-gray-700 hover:text-green-600 transition-all duration-300 py-2 pl-4 hover:translate-x-2 font-geist" href="#edibles" style={{}}>Edibles</a>
<a className="block text-sm text-gray-700 hover:text-green-600 transition-all duration-300 py-2 pl-4 hover:translate-x-2 font-geist" href="#cartridges" style={{}}>Cartridges</a>
<a className="block text-sm text-gray-700 hover:text-green-600 transition-all duration-300 py-2 pl-4 hover:translate-x-2 font-geist" href="#flower" style={{}}>Flower</a>
<a className="block text-sm text-gray-700 hover:text-green-600 transition-all duration-300 py-2 pl-4 hover:translate-x-2 font-geist" href="#resin" style={{}}>Resin</a>
</div>
<a className="block text-sm font-medium text-gray-700 hover:text-green-600 transition-all duration-300 py-2 hover:translate-x-2 font-geist" href="#about" style={{}}>About</a>
<a className="block text-sm font-medium text-gray-700 hover:text-green-600 transition-all duration-300 py-2 hover:translate-x-2 font-geist" href="#location" style={{}}>Location</a>
<a className="block text-sm font-medium text-gray-700 hover:text-green-600 transition-all duration-300 py-2 hover:translate-x-2 font-geist" href="#contact" style={{}}>Contact</a>
</nav>
</div>
</header>

<section className="relative bg-black text-white overflow-hidden" id="home">
<div className="absolute inset-0 hero-image">
<img alt="Cannabis" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-[#9fa89f] to-[#058f1c] absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="sm:px-6 lg:px-8 md:py-32 lg:py-40 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4 relative">
<div className="max-w-2xl hero-content">
<h1 className="md:text-5xl lg:text-6xl text-4xl tracking-tight mb-6 font-jakarta font-medium" style={{}}>Premium Cannabis, Exceptional Experience</h1>
<p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed animate-slide-up animate-delay-200 font-geist" style={{}}>Discover quality cannabis products curated for your lifestyle. Visit us in-store for personalized guidance and our full selection.</p>
<div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-300">
<a className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl font-geist" href="#location" style={{}}>
                        Visit Our Store
                        <svg className="lucide lucide-arrow-right ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-black font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl font-geist" href="#products" style={{}}>
                        Browse Products
                    </a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center scroll-reveal revealed">
<h2 className="text-3xl md:text-4xl tracking-tight text-black mb-6 font-jakarta font-medium" style={{}}>Welcome to Twin Cities Cannabis</h2>
<p className="text-lg text-gray-600 leading-relaxed mb-8 font-geist" style={{}}>We're committed to providing the highest quality cannabis products with exceptional customer service. Our knowledgeable staff is here to help you find the perfect product for your needs, whether you're new to cannabis or an experienced enthusiast.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 gap-x-8 gap-y-8">
<div className="text-center scroll-reveal hover-lift">
<div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4 transition-all duration-300 hover:scale-110 hover:rotate-6">
<svg className="lucide lucide-shield-check text-green-600 w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-semibold text-black mb-2 font-geist" style={{}}>Quality Assured</h3>
<p className="text-sm text-gray-600 font-geist" style={{}}>Lab-tested products from trusted suppliers</p>
</div>
<div className="text-center scroll-reveal hover-lift">
<div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4 transition-all duration-300 hover:scale-110 hover:rotate-6">
<svg className="lucide lucide-users text-green-600 w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-black mb-2 font-geist" style={{}}>Expert Staff</h3>
<p className="text-sm text-gray-600 font-geist" style={{}}>Knowledgeable team to guide your experience</p>
</div>
<div className="text-center scroll-reveal hover-lift">
<div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4 transition-all duration-300 hover:scale-110 hover:rotate-6">
<svg className="lucide lucide-star text-green-600 w-6 h-6" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<h3 className="text-lg font-semibold text-black mb-2 font-geist" style={{}}>Premium Selection</h3>
<p className="text-sm text-gray-600 font-geist" style={{}}>Curated products for every preference</p>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-24 bg-gray-50 pt-16 pb-16" id="products">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 scroll-reveal">
<h2 className="text-3xl md:text-4xl tracking-tight text-black mb-4 font-jakarta font-medium" style={{}}>Explore Our Products</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto font-geist" style={{}}>Browse our premium selection of cannabis products. All items available in-store.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="category-card group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-green-600 scroll-reveal" href="#drinks">
<div className="aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden">
<img alt="Cannabis Drinks" className="transition-transform duration-500 group-hover:scale-110 w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0d1ed513-269f-433e-be8a-be9a55ab2666_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h3 className="text-xl font-semibold text-black group-hover:text-green-600 transition-colors duration-300 font-geist" style={{}}>Drinks</h3>
<svg className="lucide lucide-arrow-right text-gray-400 group-hover:text-green-600 w-5 h-5 transition-all duration-300 group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<p className="text-sm text-gray-600 font-geist" style={{}}>Refreshing cannabis-infused beverages for every occasion</p>
<div className="mt-4 flex items-center text-sm text-gray-500">
<svg className="lucide lucide-package w-4 h-4 mr-2" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
<span className="font-geist" style={{}}>12 products available</span>
</div>
</div>
</a>

<a className="category-card group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-green-600 scroll-reveal" href="#edibles">
<div className="aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden">
<img alt="Cannabis Edibles" className="transition-transform duration-500 group-hover:scale-110 w-full h-48 object-cover" src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&amp;h=400&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h3 className="text-xl font-semibold text-black group-hover:text-green-600 transition-colors duration-300 font-geist" style={{}}>Edibles</h3>
<svg className="lucide lucide-arrow-right text-gray-400 group-hover:text-green-600 w-5 h-5 transition-all duration-300 group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<p className="text-sm text-gray-600 font-geist" style={{}}>Delicious gummies, chocolates, and baked goods</p>
<div className="mt-4 flex items-center text-sm text-gray-500">
<svg className="lucide lucide-package w-4 h-4 mr-2" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
<span className="font-geist" style={{}}>24 products available</span>
</div>
</div>
</a>

<a className="category-card group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-green-600 scroll-reveal" href="#cartridges">
<div className="aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden">
<img alt="Vape Cartridges" className="transition-transform duration-500 group-hover:scale-110 w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4d3e9d29-1e26-4d9e-b004-de428f212e66_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h3 className="text-xl font-semibold text-black group-hover:text-green-600 transition-colors duration-300 font-geist" style={{}}>Cartridges</h3>
<svg className="lucide lucide-arrow-right text-gray-400 group-hover:text-green-600 w-5 h-5 transition-all duration-300 group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<p className="text-sm text-gray-600 font-geist" style={{}}>Premium vape cartridges and disposables</p>
<div className="mt-4 flex items-center text-sm text-gray-500">
<svg className="lucide lucide-package w-4 h-4 mr-2" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
<span className="font-geist" style={{}}>18 products available</span>
</div>
</div>
</a>

<a className="category-card group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-green-600 scroll-reveal" href="#flower">
<div className="aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden">
<img alt="Cannabis Flower" className="transition-transform duration-500 group-hover:scale-110 w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c6e2013e-f7f8-4491-a850-f7446a8336aa_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h3 className="text-xl font-semibold text-black group-hover:text-green-600 transition-colors duration-300 font-geist" style={{}}>Flower</h3>
<svg className="lucide lucide-arrow-right text-gray-400 group-hover:text-green-600 w-5 h-5 transition-all duration-300 group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<p className="text-sm text-gray-600 font-geist" style={{}}>Premium strains for every experience level</p>
<div className="mt-4 flex items-center text-sm text-gray-500">
<svg className="lucide lucide-package w-4 h-4 mr-2" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
<span className="font-geist" style={{}}>32 products available</span>
</div>
</div>
</a>

<a className="category-card group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-green-600 scroll-reveal" href="#resin">
<div className="aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden">
<img alt="Cannabis Resin" className="transition-transform duration-500 group-hover:scale-110 w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/356db2c7-f53c-465f-b4b3-f717b6ad95cb_1600w.png?w=800&amp;q=80"/>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h3 className="text-xl font-semibold text-black group-hover:text-green-600 transition-colors duration-300 font-geist" style={{}}>Resin</h3>
<svg className="lucide lucide-arrow-right text-gray-400 group-hover:text-green-600 w-5 h-5 transition-all duration-300 group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<p className="text-sm text-gray-600 font-geist" style={{}}>High-potency concentrates and extracts</p>
<div className="mt-4 flex items-center text-sm text-gray-500">
<svg className="lucide lucide-package w-4 h-4 mr-2" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
<span className="font-geist" style={{}}>16 products available</span>
</div>
</div>
</a>

<div className="bg-green-50 rounded-xl border border-green-200 p-6 flex flex-col justify-center scroll-reveal hover-lift">
<div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4 transition-all duration-300 hover:scale-110 hover:rotate-12">
<svg className="lucide lucide-info text-green-600 w-6 h-6" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</div>
<h3 className="text-lg font-semibold text-black mb-2 font-geist" style={{}}>In-Store Only</h3>
<p className="text-sm text-gray-700 mb-4 font-geist" style={{}}>All products are available for purchase at our physical location. Visit us for personalized recommendations and immediate pickup.</p>
<a className="text-sm font-medium text-green-600 hover:text-green-700 inline-flex items-center group font-geist" href="#location" style={{}}>
                        Get Directions
                        <svg className="lucide lucide-arrow-right ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white" id="flower">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 scroll-reveal">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight text-black mb-2 font-jakarta font-medium" style={{}}>Premium Flower</h2>
<p className="text-lg text-gray-600 font-geist" style={{}}>Hand-selected strains from trusted growers</p>
</div>
<div className="mt-4 md:mt-0 flex items-center space-x-4">
<select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 hover:border-green-600">
<option className="font-geist" style={{}}>Sort by: Featured</option>
<option className="font-geist" style={{}}>Price: Low to High</option>
<option className="font-geist" style={{}}>Price: High to Low</option>
<option className="font-geist" style={{}}>THC: High to Low</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="product-card bg-white rounded-xl border border-gray-200 overflow-hidden group scroll-reveal">
<div className="relative overflow-hidden">
<img alt="Blue Dream" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&amp;h=400&amp;fit=crop"/>
<span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full transition-all duration-300 hover:scale-110 font-geist" style={{}}>Available</span>
</div>
<div className="p-5">
<div className="mb-3">
<h3 className="text-lg font-semibold text-black mb-1 group-hover:text-green-600 transition-colors duration-300 font-geist" style={{}}>Blue Dream</h3>
<p className="text-sm text-gray-600 font-geist" style={{}}>Hybrid • Sativa-dominant</p>
</div>
<div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
<div>
<p className="text-xs text-gray-500 mb-1 font-geist" style={{}}>THC</p>
<p className="text-sm font-semibold text-black font-geist" style={{}}>22-24%</p>
</div>
<div>
<p className="text-xs text-gray-500 mb-1 font-geist" style={{}}>CBD</p>
<p className="text-sm font-semibold text-black font-geist" style={{}}>&lt;1%</p>
</div>
<div className="text-right">
<p className="text-xs text-gray-500 mb-1 font-geist" style={{}}>Price</p>
<p className="text-sm font-semibold text-black font-geist" style={{}}>$45-65</p>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded transition-all duration-300 hover:bg-green-100 hover:text-green-700 hover:scale-105 font-geist" style={{}}>Uplifting</span>
<span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded transition-all duration-300 hover:bg-green-100 hover:text-green-700 hover:scale-105 font-geist" style={{}}>Creative</span>
<span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded transition-all duration-300 hover:bg-green-100 hover:text-green-700 hover:scale-105 font-geist" style={{}}>Euphoric</span>
</div>
<button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg font-geist" style={{}}>
                            View Details
                        </button>
</div>
</div>

<div className="product-card bg-white rounded-xl border border-gray-200 overflow-hidden group scroll-reveal">
<div className="relative overflow-hidden">
<img alt="OG Kush" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full transition-all duration-300 hover:scale-110 font-geist" style={{}}>Available</span>
</div>
<div className="p-5">
<div className="mb-3">
<h3 className="text-lg font-semibold text-black mb-1 group-hover:text-green-600 transition-colors duration-300 font-geist" style={{}}>OG Kush</h3>
<p className="text-sm text-gray-600 font-geist" style={{}}>Hybrid • Balanced</p>
</div>
<div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
<div>
<p className="text-xs text-gray-500 mb-1 font-geist" style={{}}>THC</p>
<p className="text-sm font-semibold text-black font-geist" style={{}}>19-21%</p>
</div>
<div>
<p className="text-xs text-gray-500 mb-1 font-geist" style={{}}>CBD</p>
<p className="text-sm font-semibold text-black font-geist" style={{}}>&lt;1%</p>
</div>
<div className="text-right">
<p className="text-xs text-gray-500 mb-1 font-geist" style={{}}>Price</p>
<p className="text-sm font-semibold text-black font-geist" style={{}}>$50-70</p>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded transition-all duration-300 hover:bg-green-100 hover:text-green-700 hover:scale-105 font-geist" style={{}}>Relaxing</span>
<span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded transition-all duration-300 hover:bg-green-100 hover:text-green-700 hover:scale-105 font-geist" style={{}}>Happy</span>
<span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded transition-all duration-300 hover:bg-green-100 hover:text-green-700 hover:scale-105 font-geist" style={{}}>Euphoric</span>
</div>
<button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg font-geist" style={{}}>
                            View Details
                        </button>
</div>
</div>

<div className="product-card bg-white rounded-xl border border-gray-200 overflow-hidden group scroll-reveal">
<div className="relative overflow-hidden">
<img alt="Granddaddy Purple" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&amp;h=400&amp;fit=crop&amp;sat=-50"/>
<span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full transition-all duration-300 hover:scale-110 font-geist" style={{}}>Available</span>
</div>
<div className="p-5">
<div className="mb-3">
<h3 className="text-lg font-semibold text-black mb-1 group-hover:text-green-600 transition-colors duration-300 font-geist" style={{}}>Granddaddy Purple</h3>
<p className="text-sm text-gray-600 font-geist" style={{}}>Indica • Relaxing</p>
</div>
<div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
<div>
<p className="text-xs text-gray-500 mb-1 font-geist" style={{}}>THC</p>
<p className="text-sm font-semibold text-black font-geist" style={{}}>17-20%</p>
</div>
<div>
<p className="text-xs text-gray-500 mb-1 font-geist" style={{}}>CBD</p>
<p className="text-sm font-semibold text-black font-geist" style={{}}>&lt;1%</p>
</div>
<div className="text-right">
<p className="text-xs text-gray-500 mb-1 font-geist" style={{}}>Price</p>
<p className="text-sm font-semibold text-black font-geist" style={{}}>$45-65</p>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded transition-all duration-300 hover:bg-green-100 hover:text-green-700 hover:scale-105 font-geist" style={{}}>Sleepy</span>
<span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded transition-all duration-300 hover:bg-green-100 hover:text-green-700 hover:scale-105 font-geist" style={{}}>Relaxed</span>
<span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded transition-all duration-300 hover:bg-green-100 hover:text-green-700 hover:scale-105 font-geist" style={{}}>Hungry</span>
</div>
<button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg font-geist" style={{}}>
                            View Details
                        </button>
</div>
</div>

<div className="product-card bg-white rounded-xl border border-gray-200 overflow-hidden group scroll-reveal">
<div className="relative overflow-hidden">
<img alt="Sour Diesel" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full transition-all duration-300 hover:scale-110 font-geist" style={{}}>Available</span>
</div>
<div className="p-5">
<div className="mb-3">
<h3 className="text-lg font-semibold text-black mb-1 group-hover:text-green-600 transition-colors duration-300 font-geist" style={{}}>Sour Diesel</h3>
<p className="text-sm text-gray-600 font-geist" style={{}}>Sativa • Energizing</p>
</div>
<div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
<div>
<p className="text-xs text-gray-500 mb-1 font-geist" style={{}}>THC</p>
<p className="text-sm font-semibold text-black font-geist" style={{}}>20-23%</p>
</div>
<div>
<p className="text-xs text-gray-500 mb-1 font-geist" style={{}}>CBD</p>
<p className="text-sm font-semibold text-black font-geist" style={{}}>&lt;1%</p>
</div>
<div className="text-right">
<p className="text-xs text-gray-500 mb-1 font-geist" style={{}}>Price</p>
<p className="text-sm font-semibold text-black font-geist" style={{}}>$48-68</p>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded transition-all duration-300 hover:bg-green-100 hover:text-green-700 hover:scale-105 font-geist" style={{}}>Energetic</span>
<span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded transition-all duration-300 hover:bg-green-100 hover:text-green-700 hover:scale-105 font-geist" style={{}}>Focused</span>
<span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded transition-all duration-300 hover:bg-green-100 hover:text-green-700 hover:scale-105 font-geist" style={{}}>Talkative</span>
</div>
<button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg font-geist" style={{}}>
                            View Details
                        </button>
</div>
</div>
</div>
<div className="mt-12 text-center scroll-reveal">
<a className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group transition-all duration-300 hover:scale-105 font-geist" href="#flower" style={{}}>
                    View All Flower Products
                    <svg className="lucide lucide-arrow-right ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-gray-50" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="scroll-reveal">
<h2 className="text-3xl md:text-4xl tracking-tight text-black mb-6 font-jakarta font-medium" style={{}}>About Twin Cities Cannabis</h2>
<p className="text-lg text-gray-600 mb-6 leading-relaxed font-geist" style={{}}>Founded with a passion for quality and customer care, Twin Cities Cannabis has become a trusted destination for cannabis enthusiasts and newcomers alike. We believe in providing not just products, but education and guidance to help you make informed choices.</p>
<p className="text-lg text-gray-600 mb-8 leading-relaxed font-geist" style={{}}>Our commitment to excellence extends from our carefully curated product selection to our knowledgeable staff who are always ready to answer your questions and provide personalized recommendations.</p>
<div className="space-y-4 mb-8">
<div className="flex items-start hover-lift">
<div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 transition-all duration-300 hover:scale-110">
<svg className="lucide lucide-check text-green-600 w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="ml-4">
<h3 className="text-base font-semibold text-black mb-1 font-geist" style={{}}>Lab-Tested Quality</h3>
<p className="text-sm text-gray-600 font-geist" style={{}}>All products undergo rigorous testing for safety and potency</p>
</div>
</div>
<div className="flex items-start hover-lift">
<div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 transition-all duration-300 hover:scale-110">
<svg className="lucide lucide-check text-green-600 w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="ml-4">
<h3 className="text-base font-semibold text-black mb-1 font-geist" style={{}}>Expert Guidance</h3>
<p className="text-sm text-gray-600 font-geist" style={{}}>Our team provides personalized recommendations for your needs</p>
</div>
</div>
<div className="flex items-start hover-lift">
<div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 transition-all duration-300 hover:scale-110">
<svg className="lucide lucide-check text-green-600 w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="ml-4">
<h3 className="text-base font-semibold text-black mb-1 font-geist" style={{}}>Community Focused</h3>
<p className="text-sm text-gray-600 font-geist" style={{}}>We're committed to responsible cannabis education and community wellness</p>
</div>
</div>
</div>
<a className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl font-geist" href="#location" style={{}}>
                        Visit Our Store
                    </a>
</div>
<div className="grid grid-cols-2 gap-4 scroll-reveal">
<img alt="Store Interior" className="rounded-lg w-full h-64 object-cover hover-scale" src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=400&amp;h=500&amp;fit=crop"/>
<img alt="Product Display" className="rounded-lg w-full h-64 object-cover mt-8 hover-scale" src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&amp;h=500&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white" id="location">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 scroll-reveal">
<h2 className="text-3xl md:text-4xl tracking-tight text-black mb-4 font-jakarta font-medium" style={{}}>Visit Us</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto font-geist" style={{}}>Stop by our store for personalized service and our complete product selection</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="scroll-reveal">
<div className="bg-gray-100 rounded-xl overflow-hidden h-96 mb-8 hover-lift">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.4!2d-93.265!3d44.9778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDU4JzQwLjEiTiA5M8KwMTUnNTQuMCJX!5e0!3m2!1sen!2sus!4v1234567890" style={{border: '0'}} width="100%"></iframe>
</div>
<div className="space-y-6">
<div className="flex items-start hover-lift">
<div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6">
<svg className="lucide lucide-map-pin text-green-600 w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="ml-4">
<h3 className="text-base font-semibold text-black mb-1 font-geist" style={{}}>Address</h3>
<p className="text-sm text-gray-600 font-geist" style={{}}>1234 Cannabis Avenue<br/>Minneapolis, MN 55401</p>
</div>
</div>
<div className="flex items-start hover-lift">
<div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6">
<svg className="lucide lucide-clock text-green-600 w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="ml-4">
<h3 className="text-base font-semibold text-black mb-2 font-geist" style={{}}>Store Hours</h3>
<div className="text-sm text-gray-600 space-y-1">
<p className="flex justify-between max-w-xs"><span className="font-geist" style={{}}>Monday - Thursday:</span><span className="font-medium font-geist" style={{}}>10am - 8pm</span></p>
<p className="flex justify-between max-w-xs"><span className="font-geist" style={{}}>Friday - Saturday:</span><span className="font-medium font-geist" style={{}}>10am - 9pm</span></p>
<p className="flex justify-between max-w-xs"><span className="font-geist" style={{}}>Sunday:</span><span className="font-medium font-geist" style={{}}>11am - 6pm</span></p>
</div>
</div>
</div>
<div className="flex items-start hover-lift">
<div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6">
<svg className="lucide lucide-phone text-green-600 w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div className="ml-4">
<h3 className="text-base font-semibold text-black mb-1 font-geist" style={{}}>Phone</h3>
<p className="text-sm text-gray-600 font-geist" style={{}}>(612) 555-0123</p>
</div>
</div>
<div className="flex items-start hover-lift">
<div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6">
<svg className="lucide lucide-mail text-green-600 w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div className="ml-4">
<h3 className="text-base font-semibold text-black mb-1 font-geist" style={{}}>Email</h3>
<p className="text-sm text-gray-600 font-geist" style={{}}>info@twincitiescannabis.com</p>
</div>
</div>
</div>
</div>
<div className="scroll-reveal">
<div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover-lift">
<h3 className="text-xl font-semibold text-black mb-4 font-geist" style={{}}>Directions</h3>
<div className="space-y-4 mb-8">
<div className="transition-all duration-300 hover:translate-x-2">
<h4 className="text-sm font-semibold text-black mb-2 font-geist" style={{}}>From Downtown Minneapolis:</h4>
<p className="text-sm text-gray-600 font-geist" style={{}}>Head north on Hennepin Ave, turn right on Cannabis Ave. We're on the left after 2 blocks.</p>
</div>
<div className="transition-all duration-300 hover:translate-x-2">
<h4 className="text-sm font-semibold text-black mb-2 font-geist" style={{}}>Public Transit:</h4>
<p className="text-sm text-gray-600 font-geist" style={{}}>Blue Line to Government Plaza station, then 5-minute walk north.</p>
</div>
<div className="transition-all duration-300 hover:translate-x-2">
<h4 className="text-sm font-semibold text-black mb-2 font-geist" style={{}}>Parking:</h4>
<p className="text-sm text-gray-600 font-geist" style={{}}>Free parking available in our lot behind the building. Street parking also available.</p>
</div>
</div>
<div className="bg-green-50 border border-green-200 rounded-lg p-4 hover-lift">
<div className="flex items-start">
<svg className="lucide lucide-info text-green-600 w-5 h-5 mt-0.5 flex-shrink-0" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<div className="ml-3">
<h4 className="text-sm font-semibold text-black mb-1 font-geist" style={{}}>Important Reminder</h4>
<p className="text-xs text-gray-700 font-geist" style={{}}>Please bring a valid government-issued ID showing you are 21 or older. We check IDs for all customers.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-gray-50" id="contact">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 scroll-reveal">
<h2 className="text-3xl md:text-4xl tracking-tight text-black mb-4 font-jakarta font-medium" style={{}}>Contact Us</h2>
<p className="text-lg text-gray-600 font-geist" style={{}}>Have questions? We're here to help. Send us a message and we'll get back to you soon.</p>
</div>
<form className="bg-white rounded-xl border border-gray-200 p-8 scroll-reveal hover-lift">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-sm font-medium text-black mb-2 font-geist" style={{}}>First Name</label>
<input className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-black focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 hover:border-green-600" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-black mb-2 font-geist" style={{}}>Last Name</label>
<input className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-black focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 hover:border-green-600" placeholder="Doe" type="text"/>
</div>
</div>
<div className="mb-6">
<label className="block text-sm font-medium text-black mb-2 font-geist" style={{}}>Email</label>
<input className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-black focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 hover:border-green-600" placeholder="john@example.com" type="email"/>
</div>
<div className="mb-6">
<label className="block text-sm font-medium text-black mb-2 font-geist" style={{}}>Phone (Optional)</label>
<input className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-black focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 hover:border-green-600" placeholder="(612) 555-0123" type="tel"/>
</div>
<div className="mb-6">
<label className="block text-sm font-medium text-black mb-2 font-geist" style={{}}>Subject</label>
<select className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-black focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 hover:border-green-600">
<option className="font-geist" style={{}}>General Inquiry</option>
<option className="font-geist" style={{}}>Product Question</option>
<option className="font-geist" style={{}}>Store Visit</option>
<option className="font-geist" style={{}}>Feedback</option>
<option className="font-geist" style={{}}>Other</option>
</select>
</div>
<div className="mb-6">
<label className="block text-sm font-medium text-black mb-2 font-geist" style={{}}>Message</label>
<textarea className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-black focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none transition-all duration-300 hover:border-green-600" placeholder="How can we help you?" rows="5"></textarea>
</div>
<button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl font-geist" style={{}} type="submit">
                    Send Message
                </button>
<p className="text-xs text-gray-500 text-center mt-4 font-geist" style={{}}>We typically respond within 24 hours during business days.</p>
</form>
</div>
</section>

<section className="py-16 bg-black text-white scroll-reveal">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl tracking-tight mb-4 font-jakarta font-medium" style={{}}>Stay Updated</h2>
<p className="text-lg text-gray-300 mb-8 font-geist" style={{}}>Subscribe to our newsletter for new products, special offers, and cannabis education.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 hover:bg-white/20" placeholder="Enter your email" type="email"/>
<button className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl font-geist" style={{}} type="submit">
                        Subscribe
                    </button>
</form>
<p className="text-xs text-gray-400 mt-4 font-geist" style={{}}>We respect your privacy. Unsubscribe at any time.</p>
</div>
</div>
</section>

<footer className="bg-black text-white border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
<div className="scroll-reveal">
<h3 className="text-lg font-semibold mb-4 font-geist" style={{}}>Twin Cities Cannabis</h3>
<p className="text-sm text-gray-400 mb-4 font-geist" style={{}}>Your trusted source for premium cannabis products in Minneapolis.</p>
<div className="flex space-x-4">
<a className="w-9 h-9 bg-white/10 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110" href="#">
<svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-9 h-9 bg-white/10 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-9 h-9 bg-white/10 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>
<div className="scroll-reveal">
<h4 className="text-sm font-semibold mb-4 font-geist" style={{}}>Products</h4>
<ul className="space-y-2 text-sm text-gray-400">
<li><a className="hover:text-green-600 transition-all duration-300 hover:translate-x-1 inline-block font-geist" href="#drinks" style={{}}>Drinks</a></li>
<li><a className="hover:text-green-600 transition-all duration-300 hover:translate-x-1 inline-block font-geist" href="#edibles" style={{}}>Edibles</a></li>
<li><a className="hover:text-green-600 transition-all duration-300 hover:translate-x-1 inline-block font-geist" href="#cartridges" style={{}}>Cartridges</a></li>
<li><a className="hover:text-green-600 transition-all duration-300 hover:translate-x-1 inline-block font-geist" href="#flower" style={{}}>Flower</a></li>
<li><a className="hover:text-green-600 transition-all duration-300 hover:translate-x-1 inline-block font-geist" href="#resin" style={{}}>Resin</a></li>
</ul>
</div>
<div className="scroll-reveal">
<h4 className="text-sm font-semibold mb-4 font-geist" style={{}}>Company</h4>
<ul className="space-y-2 text-sm text-gray-400">
<li><a className="hover:text-green-600 transition-all duration-300 hover:translate-x-1 inline-block font-geist" href="#about" style={{}}>About Us</a></li>
<li><a className="hover:text-green-600 transition-all duration-300 hover:translate-x-1 inline-block font-geist" href="#location" style={{}}>Location</a></li>
<li><a className="hover:text-green-600 transition-all duration-300 hover:translate-x-1 inline-block font-geist" href="#contact" style={{}}>Contact</a></li>
<li><a className="hover:text-green-600 transition-all duration-300 hover:translate-x-1 inline-block font-geist" href="#" style={{}}>Careers</a></li>
</ul>
</div>
<div className="scroll-reveal">
<h4 className="text-sm font-semibold mb-4 font-geist" style={{}}>Store Hours</h4>
<ul className="space-y-2 text-sm text-gray-400">
<li className="font-geist" style={{}}>Mon - Thu: 10am - 8pm</li>
<li className="font-geist" style={{}}>Fri - Sat: 10am - 9pm</li>
<li className="font-geist" style={{}}>Sunday: 11am - 6pm</li>
</ul>
<div className="mt-4">
<p className="text-sm text-gray-400 font-geist" style={{}}>(612) 555-0123</p>
<p className="text-sm text-gray-400 font-geist" style={{}}>info@twincitiescannabis.com</p>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8">
<div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-8 hover-lift">
<div className="flex items-start">
<svg className="lucide lucide-alert-circle text-green-600 w-5 h-5 mt-0.5 flex-shrink-0" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
<div className="ml-3 text-xs text-gray-400 leading-relaxed">
<p className="font-semibold text-white mb-1 font-geist" style={{}}>Legal Disclaimer</p>
<p className="font-geist" style={{}}>Cannabis products are for adults 21 years and older. Use responsibly. Do not operate vehicles or machinery while under the influence. Keep out of reach of children and pets. Consult a physician before use if you have a medical condition or take pharmaceutical drugs. These products have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease. By using this website, you agree to follow the legal requirements of your jurisdiction. Twin Cities Cannabis is compliant with all Minnesota state cannabis laws and regulations.</p>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
<p className="font-geist" style={{}}>© 2024 Twin Cities Cannabis. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-green-600 transition-all duration-300 hover:scale-110 font-geist" href="#" style={{}}>Privacy Policy</a>
<a className="hover:text-green-600 transition-all duration-300 hover:scale-110 font-geist" href="#" style={{}}>Terms of Service</a>
<a className="hover:text-green-600 transition-all duration-300 hover:scale-110 font-geist" href="#" style={{}}>Compliance</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
