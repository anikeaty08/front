import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize Lucide icons
    lucide.createIcons();

    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });

    // Scroll animations
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

    // Observe all animation elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach(el => {
      observer.observe(el);
    });

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
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen bg-cover bg-center z-[-1]" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1689028293838-a6a66b0ae2c5?w=3840&amp'}}></div>

<header className="sticky top-0 z-30 backdrop-blur-md border-b fade-in visible bg-black/85 border-stone-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center space-x-2 text-xl font-semibold tracking-tight transition-colors text-stone-100 hover:text-orange-400" href="#">
<svg className="lucide lucide-sparkles w-6 h-6 text-emerald-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
<span className="font-geist">Lumina</span>
</a>

<nav className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium transition-colors font-geist hover:text-stone-100 text-stone-200" href="#home">Home</a>
<a className="text-sm font-medium transition-colors font-geist hover:text-stone-100 text-stone-200" href="#products">Products</a>
<a className="text-sm font-medium transition-colors font-geist hover:text-stone-100 text-stone-200" href="#science">Science</a>
<a className="text-sm font-medium transition-colors font-geist hover:text-stone-100 text-stone-200" href="#reviews">Reviews</a>
<a className="text-sm font-medium transition-colors font-geist hover:text-stone-100 text-stone-200" href="#about">About</a>
</nav>

<div className="flex items-center space-x-3">
<button aria-label="Search" className="p-2 rounded-lg transition-colors hover:bg-stone-900">
<svg className="lucide lucide-search w-5 h-5 text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button aria-label="Wishlist" className="relative p-2 rounded-lg transition-colors hover:bg-stone-900">
<svg className="lucide lucide-heart w-5 h-5 text-gray-400" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
<span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-[10px] font-semibold bg-rose-500 rounded-full font-geist text-black">3</span>
</button>
<button aria-label="Cart" className="relative p-2 rounded-lg transition-colors hover:bg-stone-900">
<svg className="lucide lucide-shopping-bag w-5 h-5 text-gray-400" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-[10px] font-semibold rounded-full font-geist bg-orange-400 text-black">2</span>
</button>
<button aria-label="Account" className="p-2 rounded-lg transition-colors hover:bg-stone-900">
<svg className="lucide lucide-user-circle w-5 h-5 text-gray-400" data-lucide="user-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path></svg>
</button>
<button className="md:hidden p-2 rounded-lg transition-colors hover:bg-stone-900" id="menuBtn">
<svg className="lucide lucide-menu w-5 h-5 text-gray-400" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>

<div className="hidden md:hidden pb-4 border-t mt-4 pt-4 border-stone-900" id="mobileNav">
<nav className="flex flex-col space-y-1">
<a className="text-sm font-medium py-3 px-3 rounded-lg transition-colors font-geist hover:bg-stone-950" href="#home">Home</a>
<a className="text-sm font-medium py-3 px-3 rounded-lg transition-colors font-geist hover:bg-stone-950" href="#products">Products</a>
<a className="text-sm font-medium py-3 px-3 rounded-lg transition-colors font-geist hover:bg-stone-950" href="#science">Science</a>
<a className="text-sm font-medium py-3 px-3 rounded-lg transition-colors font-geist hover:bg-stone-950" href="#reviews">Reviews</a>
<a className="text-sm font-medium py-3 px-3 rounded-lg transition-colors font-geist hover:bg-stone-950" href="#about">About</a>
</nav>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24" id="home">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="slide-in-left visible">
<div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium mb-6 bg-orange-950 text-orange-300">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="font-geist">Revolutionary Formula</span>
</div>
<h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-none text-stone-100">
<span className="block font-light font-geist" style={{}}>Beautiful</span>
<span className="block font-light text-orange-200 font-geist" style={{}}>Skin Care</span>
<span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 font-geist font-light text-stone-200" style={{}}>Revolution</span>
</h1>
<p className="mt-6 text-lg max-w-xl font-geist text-stone-200">
          Transform your skin in less time than it takes to make coffee. Clinically proven results with our breakthrough molecular technology.
        </p>
<div className="mt-8 flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center space-x-2 rounded-xl px-8 py-4 text-sm font-medium transform hover:scale-105 transition-all shadow-lg bg-stone-100 text-black hover:bg-stone-200">
<span className="font-geist">Shop Now</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="inline-flex items-center justify-center space-x-2 rounded-xl border px-8 py-4 text-sm font-medium transition-all border-stone-700 text-stone-300 hover:border-stone-600 hover:bg-stone-950">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
<span className="font-geist">Watch Demo</span>
</button>
</div>
</div>
<div className="slide-in-right visible">
<div className="relative">
<img alt="Premium skincare products" className="rounded-3xl shadow-2xl object-cover w-full h-96 lg:h-[600px]" src="https://images.unsplash.com/photo-1655694774003-69c69d7ee5bb?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent rounded-3xl from-white/20"></div>
<div className="absolute bottom-6 left-6 backdrop-blur-sm px-4 py-2 rounded-xl bg-black/90">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-clock w-4 h-4 text-emerald-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm font-medium font-geist text-stone-100">30 seconds to perfect skin</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 fade-in visible" style={{animationDelay: '0.3s'}}>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
<div className="flex items-center space-x-3 p-4 rounded-xl transition-colors bg-stone-950 hover:bg-stone-900">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-orange-900">
<svg className="lucide lucide-truck w-5 h-5 text-emerald-400" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<div>
<p className="text-sm font-medium font-geist text-stone-100">Free Shipping</p>
<p className="text-xs font-geist text-stone-200">Orders over $50</p>
</div>
</div>
<div className="flex items-center space-x-3 p-4 rounded-xl transition-colors bg-stone-950 hover:bg-stone-900">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-stone-900">
<svg className="lucide lucide-shield-check w-5 h-5 text-blue-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<p className="text-sm font-medium font-geist text-stone-100">30-Day Guarantee</p>
<p className="text-xs font-geist text-stone-200">100% satisfaction</p>
</div>
</div>
<div className="flex items-center space-x-3 p-4 rounded-xl transition-colors bg-stone-950 hover:bg-stone-900">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-red-900">
<svg className="lucide lucide-award w-5 h-5 text-purple-400" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<div>
<p className="text-sm font-medium font-geist text-stone-100">Dermatologist Tested</p>
<p className="text-xs font-geist text-stone-200">Clinically proven</p>
</div>
</div>
<div className="flex items-center space-x-3 p-4 rounded-xl transition-colors bg-stone-950 hover:bg-stone-900">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-rose-900">
<svg className="lucide lucide-users w-5 h-5 text-rose-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div>
<p className="text-sm font-medium font-geist text-stone-100">50K+ Happy Customers</p>
<p className="text-xs font-geist text-stone-200">Trusted worldwide</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-stone-950" id="products">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 fade-in visible">
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 font-geist font-light text-stone-100" style={{}}>Find Your Perfect Match</h2>
<p className="text-lg max-w-2xl mx-auto font-geist text-stone-200">Discover targeted solutions for every skin concern, backed by cutting-edge science and natural ingredients.</p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group cursor-pointer scale-in visible" style={{animationDelay: '0.1s'}}>
<div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
<img alt="Hydration Solutions" className="object-cover w-full h-48 sm:h-64" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-white/60"></div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="font-medium text-lg mb-1 font-geist text-black">Hydration Boost</h3>
<p className="text-sm font-geist text-black/80">Dry &amp; dehydrated skin</p>
<div className="flex items-center mt-2 text-orange-600">
<svg className="lucide lucide-droplets w-4 h-4 mr-1" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
<span className="text-xs font-geist">Deep moisture lock</span>
</div>
</div>
</div>
</div>
<div className="group cursor-pointer scale-in visible" style={{animationDelay: '0.2s'}}>
<div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
<img alt="Anti-Aging Solutions" className="object-cover w-full h-48 sm:h-64" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&amp;fit=crop&amp;w=600&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-white/60"></div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="font-medium text-lg mb-1 font-geist text-black">Age Defense</h3>
<p className="text-sm font-geist text-black/80">Fine lines &amp; wrinkles</p>
<div className="flex items-center mt-2 text-red-600">
<svg className="lucide lucide-sparkles w-4 h-4 mr-1" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
<span className="text-xs font-geist">Collagen boost</span>
</div>
</div>
</div>
</div>
<div className="group cursor-pointer scale-in visible" style={{animationDelay: '0.3s'}}>
<div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
<img alt="Brightening Solutions" className="object-cover w-full h-48 sm:h-64" src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&amp;fit=crop&amp;w=600&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-white/60"></div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="font-medium text-lg mb-1 font-geist text-black">Radiance Restore</h3>
<p className="text-sm font-geist text-black/80">Dull &amp; uneven tone</p>
<div className="flex items-center mt-2 text-red-600">
<svg className="lucide lucide-sun w-4 h-4 mr-1" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<span className="text-xs font-geist">Vitamin C power</span>
</div>
</div>
</div>
</div>
<div className="group cursor-pointer scale-in visible" style={{animationDelay: '0.4s'}}>
<div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
<img alt="Sensitive Care Solutions" className="object-cover w-full h-48 sm:h-64" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-white/60"></div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="font-medium text-lg mb-1 font-geist text-black">Gentle Care</h3>
<p className="text-sm font-geist text-black/80">Sensitive &amp; reactive</p>
<div className="flex items-center mt-2 text-red-600">
<svg className="lucide lucide-leaf w-4 h-4 mr-1" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<span className="text-xs font-geist">Natural botanicals</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24" id="science">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="slide-in-left visible">
<div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium mb-6 bg-stone-950 text-stone-300">
<svg className="lucide lucide-beaker w-4 h-4" data-lucide="beaker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 3h15"></path><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path><path d="M6 14h12"></path></svg>
<span className="font-geist">Science-Backed Formula</span>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-8 font-geist font-light text-stone-100" style={{}}>The 30-Second Transformation</h2>
<div className="space-y-6">
<div className="flex items-start space-x-4">
<div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-orange-900">
<span className="font-semibold text-sm font-geist text-orange-400">1</span>
</div>
<div>
<h3 className="font-medium mb-1 font-geist text-stone-100">Micro-Encapsulated Delivery</h3>
<p className="text-sm font-geist text-stone-200">Advanced nanotechnology delivers active ingredients 3x deeper into skin layers.</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-stone-900">
<span className="font-semibold text-sm font-geist text-stone-200">2</span>
</div>
<div>
<h3 className="font-medium mb-1 font-geist text-stone-100">Rapid Absorption Matrix</h3>
<p className="text-sm font-geist text-stone-200">Patented formula absorbs instantly without residue, activating cellular renewal.</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-red-900">
<span className="font-semibold text-sm font-geist text-red-400">3</span>
</div>
<div>
<h3 className="font-medium mb-1 font-geist text-stone-100">Instant Results, Lasting Benefits</h3>
<p className="text-sm font-geist text-stone-200">See immediate improvement with progressive enhancement over 30 days.</p>
</div>
</div>
</div>
<div className="mt-8 p-6 bg-gradient-to-r rounded-2xl from-orange-950 to-stone-950">
<div className="flex items-center space-x-3 mb-3">
<svg className="lucide lucide-award w-5 h-5 text-emerald-400" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="font-medium font-geist text-stone-100">Clinical Trial Results</span>
</div>
<div className="grid grid-cols-3 gap-4 text-center">
<div>
<p className="text-2xl font-geist font-light text-stone-100" style={{}}>98%</p>
<p className="text-xs font-geist text-stone-200">Saw visible improvement</p>
</div>
<div>
<p className="text-2xl font-geist font-light text-stone-100" style={{}}>30s</p>
<p className="text-xs font-geist text-stone-200">Average application time</p>
</div>
<div>
<p className="text-2xl font-geist font-light text-stone-100" style={{}}>7 days</p>
<p className="text-xs font-geist text-stone-200">To dramatic results</p>
</div>
</div>
</div>
</div>
<div className="slide-in-right visible">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-br rounded-3xl transform rotate-3 from-orange-900 to-stone-900"></div>
<img alt="Scientific skincare process" className="relative rounded-3xl shadow-2xl object-cover w-full h-80 lg:h-[500px]" src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&amp;fit=crop&amp;w=700&amp;q=80"/>
<button className="absolute inset-0 flex items-center justify-center group">
<div className="w-20 h-20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform bg-black/95">
<svg className="lucide lucide-play w-8 h-8 ml-1 text-emerald-400" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</div>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-stone-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 fade-in visible">
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 font-geist font-light text-stone-100" style={{}}>Bestselling Formulas</h2>
<p className="text-lg font-geist text-stone-200">Discover why thousands choose Lumina for their daily routine</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group scale-in visible bg-black" style={{animationDelay: '0.1s'}}>
<div className="relative mb-6">
<img alt="Quantum Hydra Serum" className="rounded-2xl object-cover w-full h-56 group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-orange-500 px-2 py-1 rounded-lg text-xs font-medium font-geist text-black">
<svg className="lucide lucide-trending-up w-3 h-3 inline mr-1" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
              Bestseller
            </div>
</div>
<div className="space-y-3">
<h3 className="font-semibold text-lg font-geist text-stone-100">Quantum Hydra Serum</h3>
<p className="text-sm font-geist text-stone-200">Advanced hyaluronic acid complex with peptide boosters for instant hydration and plumping.</p>
<div className="flex items-center space-x-1">
<div className="flex text-red-600">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-sm ml-2 font-geist text-stone-200">4.9 (2,847 reviews)</span>
</div>
<div className="flex items-center justify-between pt-2">
<div className="flex items-center space-x-2">
<span className="text-2xl font-geist font-light text-stone-100" style={{}}>$89</span>
<span className="text-sm text-stone-500 line-through font-geist">$120</span>
</div>
<button className="inline-flex items-center justify-center w-11 h-11 rounded-xl transform hover:scale-105 transition-all bg-stone-100 text-black hover:bg-stone-200">
<svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>

<div className="rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group scale-in visible bg-black" style={{animationDelay: '0.2s'}}>
<div className="relative mb-6">
<img alt="Age Reverse Complex" className="rounded-2xl object-cover w-full h-56 group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&amp;fit=crop&amp;w=600&amp;q=80" style={{}}/>
<div className="absolute top-3 left-3 bg-red-500 px-2 py-1 rounded-lg text-xs font-medium font-geist text-black">
<svg className="lucide lucide-zap w-3 h-3 inline mr-1" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
              New Formula
            </div>
</div>
<div className="space-y-3">
<h3 className="font-semibold text-lg font-geist text-stone-100">Age Reverse Complex</h3>
<p className="text-sm font-geist text-stone-200">Retinol alternative with bakuchiol and vitamin C for youthful, radiant skin transformation.</p>
<div className="flex items-center space-x-1">
<div className="flex text-red-600">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-gray-700" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-sm ml-2 font-geist text-stone-200">4.7 (1,923 reviews)</span>
</div>
<div className="flex items-center justify-between pt-2">
<div className="flex items-center space-x-2">
<span className="text-2xl font-geist font-light text-stone-100" style={{}}>$129</span>
<span className="text-sm text-stone-500 line-through font-geist">$165</span>
</div>
<button className="inline-flex items-center justify-center w-11 h-11 rounded-xl transform hover:scale-105 transition-all bg-stone-100 text-black hover:bg-stone-200">
<svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>

<div className="rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group scale-in visible bg-black" style={{animationDelay: '0.3s'}}>
<div className="relative mb-6">
<img alt="Radiance Catalyst" className="rounded-2xl object-cover w-full h-56 group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&amp;fit=crop&amp;w=600&amp;q=80" style={{}}/>
<div className="absolute top-3 left-3 bg-red-500 px-2 py-1 rounded-lg text-xs font-medium font-geist text-black">
<svg className="lucide lucide-award w-3 h-3 inline mr-1" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
              Award Winner
            </div>
</div>
<div className="space-y-3">
<h3 className="font-semibold text-lg font-geist text-stone-100">Radiance Catalyst</h3>
<p className="text-sm font-geist text-stone-200">Brightening powerhouse with niacinamide and alpha arbutin for luminous, even-toned complexion in record time.</p>
<div className="flex items-center space-x-1">
<div className="flex text-red-600">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-sm ml-2 font-geist text-stone-200">4.8 (3,156 reviews)</span>
</div>
<div className="flex items-center justify-between pt-2">
<div className="flex items-center space-x-2">
<span className="text-2xl font-geist font-light text-stone-100" style={{}}>$99</span>
<span className="text-sm text-stone-500 line-through font-geist">$135</span>
</div>
<button className="inline-flex items-center justify-center w-11 h-11 rounded-xl transform hover:scale-105 transition-all bg-stone-100 text-black hover:bg-stone-200">
<svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 fade-in visible">
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 font-geist font-light text-stone-100" style={{}}>What Our Customers Say</h2>
<p className="text-lg font-geist text-stone-200">Real results from real people who've transformed their skin</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="rounded-3xl shadow-lg p-8 scale-in visible bg-black" style={{animationDelay: '0.1s'}}>
<div className="flex mb-4 text-red-600">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mb-6 font-geist text-stone-300">"I was skeptical about the 30-second claim, but wow! My skin looks visibly brighter and smoother after just one week. The texture is incredible - no sticky residue at all."</p>
<div className="flex items-center space-x-3">
<img alt="Sarah Chen" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<p className="font-medium font-geist text-stone-100">Sarah Chen</p>
<p className="text-sm font-geist text-stone-200">Verified Buyer</p>
</div>
</div>
</div>

<div className="rounded-3xl shadow-lg p-8 scale-in visible bg-black" style={{animationDelay: '0.2s'}}>
<div className="flex mb-4 text-red-600">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mb-6 font-geist text-stone-300">"As someone with sensitive skin, I'm always cautious with new products. Lumina's gentle formula gave me zero irritation but maximum results. My fine lines are noticeably reduced!"</p>
<div className="flex items-center space-x-3">
<img alt="Marcus Rodriguez" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<p className="font-medium font-geist text-stone-100">Marcus Rodriguez</p>
<p className="text-sm font-geist text-stone-200">Verified Buyer</p>
</div>
</div>
</div>

<div className="rounded-3xl shadow-lg p-8 scale-in visible bg-black" style={{animationDelay: '0.3s'}}>
<div className="flex mb-4 text-red-600">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mb-6 font-geist text-stone-300">"The convenience factor is game-changing. Perfect for my busy morning routine, and my skin has never looked better. Three colleagues have already asked about my secret!"</p>
<div className="flex items-center space-x-3">
<img alt="Emily Johnson" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<p className="font-medium font-geist text-stone-100">Emily Johnson</p>
<p className="text-sm font-geist text-stone-200">Verified Buyer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-br py-16 sm:py-24 from-orange-400 to-orange-200">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="fade-in visible">
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6 font-geist font-light text-black" style={{}}>Ready to Transform Your Skin?</h2>
<p className="text-xl mb-8 max-w-2xl mx-auto font-geist text-orange-900">Join thousands who've discovered the power of 30-second skincare. Your best skin is just one click away.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="inline-flex items-center justify-center space-x-2 rounded-xl px-8 py-4 text-sm font-medium transform hover:scale-105 transition-all shadow-lg bg-black text-orange-400 hover:bg-stone-950">
<span className="font-geist">Start Your Journey</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<div className="flex items-center space-x-2 text-orange-900">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-geist">30-day money-back guarantee</span>
</div>
</div>
</div>
</div>
</section>

<footer className="py-16 bg-stone-100 text-black" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
<div className="lg:col-span-2">
<div className="flex items-center space-x-2 text-xl font-semibold mb-4">
<svg className="lucide lucide-sparkles w-6 h-6 text-emerald-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
<span className="font-geist">Lumina</span>
</div>
<p className="mb-6 max-w-md font-geist text-stone-600">Revolutionizing skincare with science-backed formulas that deliver professional results in just 30 seconds.</p>
<div className="flex space-x-4">
<button className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-stone-200 hover:bg-stone-300">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</button>
<button className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-stone-200 hover:bg-stone-300">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</button>
<button className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-stone-200 hover:bg-stone-300">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</button>
</div>
</div>
<div>
<h3 className="font-semibold mb-4 font-geist">Quick Links</h3>
<ul className="space-y-2 text-stone-600">
<li><a className="transition-colors font-geist hover:text-black" href="#">About Us</a></li>
<li><a className="transition-colors font-geist hover:text-black" href="#">Our Science</a></li>
<li><a className="transition-colors font-geist hover:text-black" href="#">Ingredients</a></li>
<li><a className="transition-colors font-geist hover:text-black" href="#">Reviews</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold mb-4 font-geist">Support</h3>
<ul className="space-y-2 text-stone-600">
<li><a className="transition-colors font-geist hover:text-black" href="#">Contact Us</a></li>
<li><a className="transition-colors font-geist hover:text-black" href="#">FAQ</a></li>
<li><a className="transition-colors font-geist hover:text-black" href="#">Shipping</a></li>
<li><a className="transition-colors font-geist hover:text-black" href="#">Returns</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center border-stone-200">
<p className="text-sm font-geist text-stone-600">© 2024 Lumina. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-sm transition-colors font-geist text-stone-600 hover:text-black" href="#">Privacy Policy</a>
<a className="text-sm transition-colors font-geist text-stone-600 hover:text-black" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
