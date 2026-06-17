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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
accent: '#BFFF00',
dark: '#0A0A0A',
light: '#FAFAFA',
}
}
}
}



        // GSAP Initialization
        gsap.registerPlugin(ScrollTrigger);

        // Custom Cursor
        const cursorDot = document.getElementById('cursorDot');
        const cursorRing = document.getElementById('cursorRing');
        
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursorDot, { x: e.clientX - 4, y: e.clientY - 4, duration: 0.1 });
            gsap.to(cursorRing, { x: e.clientX - 20, y: e.clientY - 20, duration: 0.3 });
        });

        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursorRing, { scale: 1.5, opacity: 0.3 });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(cursorRing, { scale: 1, opacity: 0.5 });
            });
        });

        // Header Glassmorphism on Scroll
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('glass', 'bg-light/80', 'dark:bg-dark/80');
            } else {
                header.classList.remove('glass', 'bg-light/80', 'dark:bg-dark/80');
            }
        });

        // Dark Mode Toggle
        const darkToggle = document.getElementById('darkToggle');
        darkToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
        });

        // Mobile Menu
        const menuToggle = document.getElementById('menuToggle');
        const menuClose = document.getElementById('menuClose');
        const mobileMenu = document.getElementById('mobileMenu');

        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
        });

        menuClose.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
        });

        // Cart Functionality
        let cartCount = 0;
        const cartCountEl = document.getElementById('cartCount');
        const cartBtn = document.getElementById('cartBtn');

        function addToCart() {
            cartCount++;
            cartCountEl.textContent = cartCount;
            cartBtn.querySelector('iconify-icon').classList.add('cart-bounce');
            setTimeout(() => {
                cartBtn.querySelector('iconify-icon').classList.remove('cart-bounce');
            }, 400);
        }

        // Live Purchase Ticker
        const purchaseTicker = document.getElementById('purchaseTicker');
        const cities = ['TOKYO', 'NEW YORK', 'LONDON', 'PARIS', 'BERLIN', 'SYDNEY', 'SEOUL'];
        const products = ['LORI EPSOM HOODIE', 'LORI EPSOM TEE', 'LORI EPSOM CARGO', 'LORI EPSOM JACKET'];

        function showPurchaseTicker() {
            const city = cities[Math.floor(Math.random() * cities.length)];
            const product = products[Math.floor(Math.random() * products.length)];
            purchaseTicker.innerHTML = `<span class="inline-block w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>SOMEONE IN ${city} JUST PURCHASED ${product}`;
            
            gsap.to(purchaseTicker, { opacity: 1, y: 0, duration: 0.5 });
            
            setTimeout(() => {
                gsap.to(purchaseTicker, { opacity: 0, y: 20, duration: 0.5 });
            }, 4000);
        }

        setInterval(showPurchaseTicker, 15000);
        setTimeout(showPurchaseTicker, 5000);

        // Hero Parallax
        gsap.to('.hero-content', {
            scrollTrigger: {
                trigger: 'section',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            },
            y: 100,
            opacity: 0
        });

        // Product Cards Animation
        gsap.utils.toArray('.product-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 0.6,
                delay: i * 0.1
            });
        });

        // Lookbook Parallax
        gsap.utils.toArray('.lookbook-img').forEach(img => {
            gsap.to(img, {
                scrollTrigger: {
                    trigger: img,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                },
                y: -50,
                scale: 1.1
            });
        });

        // Product Modal
        const productCards = document.querySelectorAll('.product-card');
        const productModal = document.getElementById('productModal');
        const closeModal = document.getElementById('closeModal');

        productCards.forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.size-btn') && !e.target.closest('button')) {
                    productModal.classList.remove('hidden');
                    setTimeout(() => {
                        productModal.classList.remove('opacity-0');
                    }, 10);
                }
            });
        });

        closeModal.addEventListener('click', () => {
            productModal.classList.add('opacity-0');
            setTimeout(() => {
                productModal.classList.add('hidden');
            }, 300);
        });

        // Hero Image Carousel (simulated)
        const heroImages = [
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920',
            'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=1920',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920'
        ];
        let currentHeroImage = 0;
        const heroImageEl = document.getElementById('heroImage');

        setInterval(() => {
            currentHeroImage = (currentHeroImage + 1) % heroImages.length;
            gsap.to(heroImageEl, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    heroImageEl.src = heroImages[currentHeroImage];
                    gsap.to(heroImageEl, { opacity: 1, duration: 0.5 });
                }
            });
        }, 6000);
    
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
      

<div className="custom-cursor cursor-dot hidden lg:block" id="cursorDot"></div>
<div className="custom-cursor cursor-ring hidden lg:block" id="cursorRing"></div>

<div className="grain fixed inset-0 pointer-events-none z-50"></div>

<div className="fixed inset-0 bg-dark z-[100] flex items-center justify-center hidden" id="passwordGate">
<div className="text-center p-8">
<iconify-icon className="text-accent mb-6" height="48" icon="solar:lock-linear" style={{strokeWidth: '1.5'}} width="48"></iconify-icon>
<h2 className="text-3xl font-semibold tracking-tight text-light mb-4">EXCLUSIVE ACCESS</h2>
<p className="text-light/60 mb-8 text-sm">ENTER PASSWORD TO VIEW DROP</p>
<input className="bg-transparent border border-light/20 px-6 py-4 text-light text-center tracking-widest text-sm focus:outline-none focus:border-accent w-64" placeholder="PASSWORD" type="password"/>
<button className="block mx-auto mt-4 bg-accent text-dark px-8 py-3 text-xs font-semibold tracking-widest hover:bg-accent/90 transition-all">ENTER</button>
</div>
</div>

<div className="fixed bottom-6 left-6 bg-dark dark:bg-light text-light dark:text-dark px-4 py-3 text-xs tracking-wide z-40 opacity-0 translate-y-4 transition-all duration-500" id="purchaseTicker">
<span className="inline-block w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
        SOMEONE IN TOKYO JUST PURCHASED LORI EPSOM HOODIE
    </div>

<div className="fixed top-32 -right-12 bg-accent text-dark px-16 py-2 text-xs font-semibold tracking-widest transform rotate-45 z-30">
<iconify-icon className="inline mr-1" height="14" icon="solar:ticket-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
        RAFFLE LIVE
    </div>

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="header">
<div className="flex items-center justify-between px-6 lg:px-12 py-4 lg:py-6">

<a className="text-xl lg:text-2xl font-semibold tracking-tighter" href="#">BRAND</a>

<nav className="hidden lg:flex items-center gap-10">
<a className="text-xs tracking-widest hover:text-accent transition-colors" href="#">NEW ARRIVALS</a>
<a className="text-xs tracking-widest hover:text-accent transition-colors" href="#">COLLECTIONS</a>
<a className="text-xs tracking-widest hover:text-accent transition-colors" href="#">LOOKBOOK</a>
<a className="text-xs tracking-widest hover:text-accent transition-colors" href="#">ARCHIVE</a>
<a className="text-xs tracking-widest hover:text-accent transition-colors" href="#">ABOUT</a>
</nav>

<div className="flex items-center gap-4 lg:gap-6">

<button className="hover:scale-110 transition-transform" id="darkToggle">
<iconify-icon className="dark:hidden" height="22" icon="solar:sun-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<iconify-icon className="hidden dark:block" height="22" icon="solar:moon-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
<button className="hidden lg:block hover:scale-110 transition-transform">
<iconify-icon height="22" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
<button className="hidden lg:block hover:scale-110 transition-transform">
<iconify-icon height="22" icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
<button className="hidden lg:block hover:scale-110 transition-transform">
<iconify-icon height="22" icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
<button className="relative hover:scale-110 transition-transform" id="cartBtn">
<iconify-icon height="22" icon="solar:cart-large-2-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="absolute -top-2 -right-2 bg-accent text-dark text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium" id="cartCount">0</span>
</button>

<button className="lg:hidden hover:scale-110 transition-transform" id="menuToggle">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="fixed inset-0 bg-dark z-[60] translate-x-full transition-transform duration-500 lg:hidden" id="mobileMenu">
<div className="flex flex-col h-full p-6">
<div className="flex justify-between items-center mb-12">
<span className="text-xl font-semibold tracking-tighter text-light">BRAND</span>
<button id="menuClose">
<iconify-icon className="text-light" height="28" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</button>
</div>

<div className="flex gap-4 overflow-x-auto scrollbar-hide mb-12 pb-4">
<div className="flex-shrink-0 text-center">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/50 p-0.5 mb-2">
<div className="w-full h-full rounded-full bg-dark overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=200"/>
</div>
</div>
<span className="text-xs text-light/60">DROP 01</span>
</div>
<div className="flex-shrink-0 text-center">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/50 p-0.5 mb-2">
<div className="w-full h-full rounded-full bg-dark overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200"/>
</div>
</div>
<span className="text-xs text-light/60">DROP 02</span>
</div>
<div className="flex-shrink-0 text-center">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/50 p-0.5 mb-2">
<div className="w-full h-full rounded-full bg-dark overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=200"/>
</div>
</div>
<span className="text-xs text-light/60">DROP 03</span>
</div>
<div className="flex-shrink-0 text-center">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/50 p-0.5 mb-2">
<div className="w-full h-full rounded-full bg-dark overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=200"/>
</div>
</div>
<span className="text-xs text-light/60">ARCHIVE</span>
</div>
</div>
<nav className="flex flex-col gap-6">
<a className="text-3xl font-medium tracking-tight text-light hover:text-accent transition-colors" href="#">NEW ARRIVALS</a>
<a className="text-3xl font-medium tracking-tight text-light hover:text-accent transition-colors" href="#">COLLECTIONS</a>
<a className="text-3xl font-medium tracking-tight text-light hover:text-accent transition-colors" href="#">LOOKBOOK</a>
<a className="text-3xl font-medium tracking-tight text-light hover:text-accent transition-colors" href="#">ARCHIVE</a>
<a className="text-3xl font-medium tracking-tight text-light hover:text-accent transition-colors" href="#">ABOUT</a>
</nav>
<div className="mt-auto flex gap-6">
<iconify-icon className="text-light/60 hover:text-accent transition-colors" height="24" icon="solar:instagram-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<iconify-icon className="text-light/60 hover:text-accent transition-colors" height="24" icon="solar:twitter-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<iconify-icon className="text-light/60 hover:text-accent transition-colors" height="24" icon="solar:tiktok-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
</div>
</div>

<section className="relative h-screen overflow-hidden">

<div className="absolute inset-0">
<img alt="Hero" className="w-full h-full object-cover" id="heroImage" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920"/>
<div className="absolute inset-0 bg-dark/30"></div>
</div>

<div className="relative h-full flex flex-col justify-end p-6 lg:p-16 pb-32">
<div className="hero-content">
<h1 className="text-5xl sm:text-7xl lg:text-9xl font-semibold tracking-tighter text-light leading-none mb-8">
                    LORI EPSOM<br/>DROP
                </h1>
<p className="text-light/60 text-sm lg:text-base max-w-md mb-10 tracking-wide">
                    LORI EPSOM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT SED DO EIUSMOD TEMPOR INCIDIDUNT.
                </p>
<button className="group relative bg-light text-dark px-10 py-5 text-xs font-semibold tracking-widest hover-grain overflow-hidden transition-all hover:bg-accent">
                    SHOP NEW DROPS
                    <iconify-icon className="inline ml-2 group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-light/60">
<span className="text-xs tracking-widest">SCROLL</span>
<iconify-icon className="animate-bounce" height="16" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</section>

<div className="h-20 bg-dark dark:bg-light flex items-center overflow-hidden">
<div className="marquee flex whitespace-nowrap">
<span className="text-light dark:text-dark text-sm lg:text-base tracking-widest px-8">DROP 11.29 — SOLD OUT IN 11 SECONDS • NEW COLLECTION LIVE • FREE SHIPPING OVER $250 • LIMITED RESTOCK • WORLDWIDE EXPRESS • SOLD OUT • SOLD OUT • SOLD OUT • DROP ALERT • SOLD OUT</span>
<span className="text-light dark:text-dark text-sm lg:text-base tracking-widest px-8">DROP 11.29 — SOLD OUT IN 11 SECONDS • NEW COLLECTION LIVE • FREE SHIPPING OVER $250 • LIMITED RESTOCK • WORLDWIDE EXPRESS • SOLD OUT • SOLD OUT • SOLD OUT • DROP ALERT • SOLD OUT</span>
</div>
</div>

<section className="py-16 lg:py-32 px-6 lg:px-16">
<div className="flex justify-between items-end mb-12 lg:mb-20">
<div>
<span className="text-xs tracking-widest text-dark/40 dark:text-light/40 block mb-2">001</span>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tighter">NEW DROPS</h2>
</div>
<a className="text-xs tracking-widest hover:text-accent transition-colors flex items-center gap-2" href="#">
                VIEW ALL
                <iconify-icon height="14" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8" id="productGrid">

<div className="product-card group relative">
<div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 dark:bg-neutral-900 mb-4">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800"/>
<div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-all"></div>

<button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110">
<iconify-icon className="text-dark" height="24" icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>

<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
<div className="flex gap-2 justify-center">
<button className="size-btn bg-light text-dark w-10 h-10 text-xs font-medium hover:bg-accent transition-colors" onclick="addToCart()">S</button>
<button className="size-btn bg-light text-dark w-10 h-10 text-xs font-medium hover:bg-accent transition-colors" onclick="addToCart()">M</button>
<button className="size-btn bg-light text-dark w-10 h-10 text-xs font-medium hover:bg-accent transition-colors" onclick="addToCart()">L</button>
<button className="size-btn bg-light text-dark w-10 h-10 text-xs font-medium hover:bg-accent transition-colors" onclick="addToCart()">XL</button>
</div>
</div>
</div>
<h3 className="text-sm font-medium tracking-tight mb-1">LORI EPSOM HOODIE</h3>
<p className="text-sm text-dark/60 dark:text-light/60">$289</p>
</div>

<div className="product-card group relative">
<div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 dark:bg-neutral-900 mb-4">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800"/>

<div className="sold-badge absolute top-0 right-0 w-24 h-24 bg-red-600 flex items-end justify-center pb-2">
<span className="text-xs font-semibold text-light tracking-widest transform rotate-45 translate-x-2 -translate-y-2">SOLD OUT</span>
</div>
<button className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110">
<iconify-icon className="text-dark" height="24" icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium tracking-tight mb-1">LORI EPSOM JACKET</h3>
<p className="text-sm text-dark/60 dark:text-light/60 line-through">$489</p>
</div>

<div className="product-card group relative">
<div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 dark:bg-neutral-900 mb-4">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800"/>
<button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110">
<iconify-icon className="text-dark" height="24" icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
<div className="flex gap-2 justify-center">
<button className="size-btn bg-light text-dark w-10 h-10 text-xs font-medium hover:bg-accent transition-colors" onclick="addToCart()">S</button>
<button className="size-btn bg-light text-dark w-10 h-10 text-xs font-medium hover:bg-accent transition-colors" onclick="addToCart()">M</button>
<button className="size-btn bg-light text-dark w-10 h-10 text-xs font-medium hover:bg-accent transition-colors" onclick="addToCart()">L</button>
</div>
</div>
</div>
<h3 className="text-sm font-medium tracking-tight mb-1">LORI EPSOM TEE</h3>
<p className="text-sm text-dark/60 dark:text-light/60">$129</p>
</div>

<div className="product-card group relative">
<div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 dark:bg-neutral-900 mb-4">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1544441893-675973e31985?w=800"/>
<button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110">
<iconify-icon className="text-dark" height="24" icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
<div className="flex gap-2 justify-center">
<button className="size-btn bg-light text-dark w-10 h-10 text-xs font-medium hover:bg-accent transition-colors" onclick="addToCart()">40</button>
<button className="size-btn bg-light text-dark w-10 h-10 text-xs font-medium hover:bg-accent transition-colors" onclick="addToCart()">42</button>
<button className="size-btn bg-light text-dark w-10 h-10 text-xs font-medium hover:bg-accent transition-colors" onclick="addToCart()">44</button>
</div>
</div>
</div>
<h3 className="text-sm font-medium tracking-tight mb-1">LORI EPSOM SNEAKER</h3>
<p className="text-sm text-dark/60 dark:text-light/60">$349</p>
</div>

<div className="product-card group relative">
<div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 dark:bg-neutral-900 mb-4">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800"/>
<button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110">
<iconify-icon className="text-dark" height="24" icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
<div className="flex gap-2 justify-center">
<button className="size-btn bg-light text-dark w-10 h-10 text-xs font-medium hover:bg-accent transition-colors" onclick="addToCart()">S</button>
<button className="size-btn bg-light text-dark w-10 h-10 text-xs font-medium hover:bg-accent transition-colors" onclick="addToCart()">M</button>
<button className="size-btn bg-light text-dark w-10 h-10 text-xs font-medium hover:bg-accent transition-colors" onclick="addToCart()">L</button>
</div>
</div>
</div>
<h3 className="text-sm font-medium tracking-tight mb-1">LORI EPSOM SWEATSHIRT</h3>
<p className="text-sm text-dark/60 dark:text-light/60">$219</p>
</div>

<div className="product-card group relative">
<div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 dark:bg-neutral-900 mb-4">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=800"/>
<button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110">
<iconify-icon className="text-dark" height="24" icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
<div className="flex gap-2 justify-center">
<button className="size-btn bg-light text-dark w-10 h-10 text-xs font-medium hover:bg-accent transition-colors" onclick="addToCart()">S</button>
<button className="size-btn bg-light text-dark w-10 h-10 text-xs font-medium hover:bg-accent transition-colors" onclick="addToCart()">M</button>
<button className="size-btn bg-light text-dark w-10 h-10 text-xs font-medium hover:bg-accent transition-colors" onclick="addToCart()">L</button>
</div>
</div>
</div>
<h3 className="text-sm font-medium tracking-tight mb-1">LORI EPSOM CARGO</h3>
<p className="text-sm text-dark/60 dark:text-light/60">$269</p>
</div>

<div className="product-card group relative">
<div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 dark:bg-neutral-900 mb-4">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale" src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800"/>
<div className="sold-badge absolute top-0 right-0 w-24 h-24 bg-red-600 flex items-end justify-center pb-2">
<span className="text-xs font-semibold text-light tracking-widest transform rotate-45 translate-x-2 -translate-y-2">SOLD OUT</span>
</div>
</div>
<h3 className="text-sm font-medium tracking-tight mb-1">LORI EPSOM CAP</h3>
<p className="text-sm text-dark/60 dark:text-light/60 line-through">$89</p>
</div>

<div className="product-card group relative">
<div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 dark:bg-neutral-900 mb-4">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=800"/>
<button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110">
<iconify-icon className="text-dark" height="24" icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
<div className="flex gap-2 justify-center">
<button className="size-btn bg-light text-dark w-10 h-10 text-xs font-medium hover:bg-accent transition-colors" onclick="addToCart()">OS</button>
</div>
</div>
</div>
<h3 className="text-sm font-medium tracking-tight mb-1">LORI EPSOM BAG</h3>
<p className="text-sm text-dark/60 dark:text-light/60">$189</p>
</div>
</div>

<div className="text-center mt-16">
<button className="group border border-dark dark:border-light px-10 py-4 text-xs font-semibold tracking-widest hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all">
                LOAD MORE
                <iconify-icon className="inline ml-2 group-hover:translate-y-1 transition-transform" height="16" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</section>

<section className="relative py-16 lg:py-0 lg:h-screen flex">

<div className="hidden lg:flex flex-col justify-center items-center w-24 border-r border-dark/10 dark:border-light/10">
<div className="flex flex-col gap-8">
<a className="text-xs tracking-widest text-accent flex items-center gap-2" href="#">
<iconify-icon height="14" icon="solar:document-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                    01
                </a>
<a className="text-xs tracking-widest text-dark/40 dark:text-light/40 hover:text-accent transition-colors flex items-center gap-2" href="#">
<iconify-icon height="14" icon="solar:document-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                    02
                </a>
<a className="text-xs tracking-widest text-dark/40 dark:text-light/40 hover:text-accent transition-colors flex items-center gap-2" href="#">
<iconify-icon height="14" icon="solar:document-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                    03
                </a>
</div>
</div>

<div className="flex-1 flex flex-col lg:flex-row">
<div className="lg:w-1/2 relative overflow-hidden">
<img alt="Lookbook" className="w-full h-64 lg:h-full object-cover lookbook-img" data-speed="0.8" src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200"/>
</div>
<div className="lg:w-1/2 flex flex-col justify-center p-8 lg:p-20">
<span className="text-xs tracking-widest text-dark/40 dark:text-light/40 block mb-4">LOOKBOOK / SS25</span>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tighter mb-6">LORI EPSOM<br/>COLLECTION</h2>
<p className="text-dark/60 dark:text-light/60 text-sm leading-relaxed mb-8 max-w-md">
                    Lori Epsom dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
                </p>
<button className="self-start group bg-dark dark:bg-light text-light dark:text-dark px-8 py-4 text-xs font-semibold tracking-widest hover:bg-accent hover:text-dark transition-all">
                    EXPLORE LOOKBOOK
                    <iconify-icon className="inline ml-2 group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<div className="fixed inset-0 bg-dark/90 z-[70] hidden opacity-0 transition-opacity" id="productModal">
<div className="h-full flex items-center justify-center p-4">
<div className="bg-light dark:bg-dark max-w-5xl w-full max-h-[90vh] overflow-auto">
<div className="flex flex-col lg:flex-row">

<div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen">
<img alt="Product" className="w-full h-64 lg:h-full object-cover" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800"/>
</div>

<div className="lg:w-1/2 p-8 lg:p-12">
<button className="absolute top-6 right-6" id="closeModal">
<iconify-icon height="28" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</button>
<span className="text-xs tracking-widest text-dark/40 dark:text-light/40 block mb-4">NEW ARRIVAL</span>
<h2 className="text-2xl lg:text-4xl font-semibold tracking-tighter mb-2">LORI EPSOM HOODIE</h2>
<p className="text-xl mb-8">$289</p>

<div className="bg-accent/10 border border-accent px-4 py-3 mb-8 flex items-center gap-2">
<span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
<span className="text-xs tracking-wide">ONLY 42 LEFT — 9 SOLD IN LAST HOUR</span>
</div>

<div className="mb-8">
<div className="flex justify-between items-center mb-4">
<span className="text-xs tracking-widest">SIZE</span>
<button className="text-xs tracking-widest text-dark/60 dark:text-light/60 hover:text-accent transition-colors flex items-center gap-1">
<iconify-icon height="14" icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                    SIZE GUIDE
                                </button>
</div>
<div className="flex gap-2">
<button className="border border-dark dark:border-light w-14 h-14 text-xs font-medium hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-colors">S</button>
<button className="border border-dark dark:border-light w-14 h-14 text-xs font-medium hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-colors bg-dark text-light dark:bg-light dark:text-dark">M</button>
<button className="border border-dark dark:border-light w-14 h-14 text-xs font-medium hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-colors">L</button>
<button className="border border-dark dark:border-light w-14 h-14 text-xs font-medium hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-colors">XL</button>
<button className="border border-dark/20 dark:border-light/20 w-14 h-14 text-xs font-medium text-dark/30 dark:text-light/30 cursor-not-allowed line-through">XXL</button>
</div>
</div>

<button className="w-full bg-dark dark:bg-light text-light dark:text-dark py-5 text-xs font-semibold tracking-widest hover:bg-accent hover:text-dark transition-all mb-4" onclick="addToCart()">
                            ADD TO CART
                        </button>
<button className="w-full border border-dark dark:border-light py-5 text-xs font-semibold tracking-widest hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all flex items-center justify-center gap-2">
<iconify-icon height="16" icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                            ADD TO WISHLIST
                        </button>

<div className="mt-10 pt-10 border-t border-dark/10 dark:border-light/10">
<p className="text-sm text-dark/60 dark:text-light/60 leading-relaxed">
                                Lori Epsom dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
</div>
</div>
</div>

<div className="border-t border-dark/10 dark:border-light/10 p-8">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-semibold tracking-widest">YOU MAY ALSO LIKE</h3>
<div className="flex gap-2">
<button className="w-10 h-10 border border-dark dark:border-light flex items-center justify-center hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-colors">
<iconify-icon height="16" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<button className="w-10 h-10 border border-dark dark:border-light flex items-center justify-center hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-colors">
<iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-4 overflow-x-auto scrollbar-hide">
<div className="flex-shrink-0 w-48">
<img className="w-full aspect-[3/4] object-cover mb-2" src="https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400"/>
<p className="text-xs">LORI EPSOM TEE</p>
<p className="text-xs text-dark/60 dark:text-light/60">$129</p>
</div>
<div className="flex-shrink-0 w-48">
<img className="w-full aspect-[3/4] object-cover mb-2" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400"/>
<p className="text-xs">LORI EPSOM SWEAT</p>
<p className="text-xs text-dark/60 dark:text-light/60">$219</p>
</div>
<div className="flex-shrink-0 w-48">
<img className="w-full aspect-[3/4] object-cover mb-2" src="https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=400"/>
<p className="text-xs">LORI EPSOM CARGO</p>
<p className="text-xs text-dark/60 dark:text-light/60">$269</p>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="py-16 lg:py-32 px-6 lg:px-16">
<div className="flex justify-between items-end mb-12 lg:mb-20">
<div>
<span className="text-xs tracking-widest text-dark/40 dark:text-light/40 block mb-2">002</span>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tighter">COLLECTIONS</h2>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
<a className="group relative aspect-[4/5] overflow-hidden" href="#">
<img alt="Collection" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200"/>
<div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-all"></div>
<div className="absolute bottom-8 left-8">
<span className="text-xs tracking-widest text-light/60 block mb-2">24 PRODUCTS</span>
<h3 className="text-2xl lg:text-4xl font-semibold tracking-tighter text-light">ESSENTIALS</h3>
</div>
</a>
<a className="group relative aspect-[4/5] overflow-hidden" href="#">
<img alt="Collection" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200"/>
<div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-all"></div>
<div className="absolute bottom-8 left-8">
<span className="text-xs tracking-widest text-light/60 block mb-2">18 PRODUCTS</span>
<h3 className="text-2xl lg:text-4xl font-semibold tracking-tighter text-light">OUTERWEAR</h3>
</div>
</a>
</div>
</section>

<section className="py-16 lg:py-32 px-6 lg:px-16 bg-dark dark:bg-light text-light dark:text-dark">
<div className="max-w-2xl mx-auto text-center">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tighter mb-6">JOIN THE MOVEMENT</h2>
<p className="text-light/60 dark:text-dark/60 text-sm mb-10">
                Lori Epsom dolor sit amet consectetur adipiscing elit. Get early access to drops, exclusive offers, and more.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<input className="flex-1 bg-transparent border border-light/20 dark:border-dark/20 px-6 py-4 text-sm tracking-widest focus:outline-none focus:border-accent" placeholder="EMAIL ADDRESS" type="email"/>
<button className="bg-accent text-dark px-8 py-4 text-xs font-semibold tracking-widest hover:bg-accent/90 transition-all flex items-center justify-center gap-2">
                    SUBSCRIBE
                    <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="py-16 lg:py-24 px-6 lg:px-16 border-t border-dark/10 dark:border-light/10">
<div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">

<div className="col-span-2 lg:col-span-1">
<span className="text-xl font-semibold tracking-tighter block mb-6">BRAND</span>
<p className="text-sm text-dark/60 dark:text-light/60 leading-relaxed">
                    Lori Epsom dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
                </p>
</div>

<div>
<h4 className="text-xs font-semibold tracking-widest mb-6">SHOP</h4>
<ul className="space-y-3">
<li><a className="text-sm text-dark/60 dark:text-light/60 hover:text-accent transition-colors" href="#">New Arrivals</a></li>
<li><a className="text-sm text-dark/60 dark:text-light/60 hover:text-accent transition-colors" href="#">Tops</a></li>
<li><a className="text-sm text-dark/60 dark:text-light/60 hover:text-accent transition-colors" href="#">Bottoms</a></li>
<li><a className="text-sm text-dark/60 dark:text-light/60 hover:text-accent transition-colors" href="#">Outerwear</a></li>
<li><a className="text-sm text-dark/60 dark:text-light/60 hover:text-accent transition-colors" href="#">Accessories</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold tracking-widest mb-6">ABOUT</h4>
<ul className="space-y-3">
<li><a className="text-sm text-dark/60 dark:text-light/60 hover:text-accent transition-colors" href="#">Our Story</a></li>
<li><a className="text-sm text-dark/60 dark:text-light/60 hover:text-accent transition-colors" href="#">Sustainability</a></li>
<li><a className="text-sm text-dark/60 dark:text-light/60 hover:text-accent transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-dark/60 dark:text-light/60 hover:text-accent transition-colors" href="#">Press</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold tracking-widest mb-6">SUPPORT</h4>
<ul className="space-y-3">
<li><a className="text-sm text-dark/60 dark:text-light/60 hover:text-accent transition-colors" href="#">FAQ</a></li>
<li><a className="text-sm text-dark/60 dark:text-light/60 hover:text-accent transition-colors" href="#">Shipping</a></li>
<li><a className="text-sm text-dark/60 dark:text-light/60 hover:text-accent transition-colors" href="#">Returns</a></li>
<li><a className="text-sm text-dark/60 dark:text-light/60 hover:text-accent transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold tracking-widest mb-6">SOCIAL</h4>
<div className="grid grid-cols-3 gap-1 mb-6">
<img className="aspect-square object-cover" src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=200"/>
<img className="aspect-square object-cover" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200"/>
<img className="aspect-square object-cover" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=200"/>
<img className="aspect-square object-cover" src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=200"/>
<img className="aspect-square object-cover" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200"/>
<img className="aspect-square object-cover" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200"/>
</div>
<div className="flex gap-4">
<a className="hover:scale-110 transition-transform" href="#">
<iconify-icon height="20" icon="solar:instagram-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="hover:scale-110 transition-transform" href="#">
<iconify-icon height="20" icon="solar:twitter-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="hover:scale-110 transition-transform" href="#">
<iconify-icon height="20" icon="solar:tiktok-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="hover:scale-110 transition-transform" href="#">
<iconify-icon height="20" icon="solar:youtube-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row justify-between items-center pt-10 border-t border-dark/10 dark:border-light/10">
<p className="text-xs text-dark/40 dark:text-light/40 mb-4 lg:mb-0">© 2025 BRAND. ALL RIGHTS RESERVED.</p>
<div className="flex gap-6">
<a className="text-xs text-dark/40 dark:text-light/40 hover:text-accent transition-colors" href="#">PRIVACY</a>
<a className="text-xs text-dark/40 dark:text-light/40 hover:text-accent transition-colors" href="#">TERMS</a>
<a className="text-xs text-dark/40 dark:text-light/40 hover:text-accent transition-colors" href="#">COOKIES</a>
</div>
</div>
</footer>


    </>
  );
}
