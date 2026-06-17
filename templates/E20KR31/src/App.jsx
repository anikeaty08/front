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



    // Initialize Lucide icons
    lucide.createIcons();

    // Mobile menu toggle
    document.getElementById('nav-toggle').addEventListener('click', function() {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.toggle('hidden');
    });

    // Parallax scrolling effect
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach(element => {
        const speed = parseFloat(element.dataset.speed || 0);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });

    // Smooth scrolling for anchor links
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

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('[class*="animate-"]').forEach(el => {
      observer.observe(el);
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
      

<header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b animate-fade-in bg-white/90 border-gray-100" style={{opacity: '1', transform: 'translateY(0px)'}}>
<nav className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<a className="flex items-center gap-3 animate-slide-right animate-delay-100" href="#" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="relative">
<div className="h-8 w-8 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 shadow-lg parallax-element" data-speed="0.1" style={{transform: 'translateY(-167.4px)'}}></div>
<div className="absolute inset-0 h-8 w-8 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 animate-pulse opacity-50" style={{opacity: '1', transform: 'translateY(0px)'}}></div><div className="absolute inset-0 h-8 w-8 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white opacity-90">
<svg className="lucide lucide-star w-5 h-5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<span className="font-semibold text-xl tracking-tight">Zenith</span>
</a>
<div className="hidden md:flex md:items-center md:gap-10 animate-slide-up animate-delay-200" style={{opacity: '1', transform: 'translateY(0px)'}}>
<a className="text-sm font-medium transition-all duration-300 relative group text-gray-600 hover:text-gray-900" href="#services">
            Architecture
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium transition-all duration-300 relative group text-gray-600 hover:text-gray-900" href="#homes">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium transition-all duration-300 relative group text-gray-600 hover:text-gray-900" href="#about">
            Studio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium transition-all duration-300 relative group text-gray-600 hover:text-gray-900" href="#process">
            Process
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<div className="hidden md:flex items-center gap-6 animate-slide-right animate-delay-300" style={{opacity: '1', transform: 'translateY(0px)'}}>
<button className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50" type="button">
<svg className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
            EN
          </button>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg bg-gray-900 text-white hover:bg-gray-800" href="#contact">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            Get Started
          </a>
</div>

<button aria-label="Toggle menu" className="md:hidden p-3 rounded-xl transition-all duration-200 animate-slide-right animate-delay-300 hover:bg-gray-100" id="nav-toggle">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>

<div className="md:hidden pt-6 pb-8 space-y-6 border-t hidden border-gray-100" id="mobile-menu">
<a className="block text-base font-medium transition-colors text-gray-600 hover:text-gray-900" href="#services">Architecture</a>
<a className="block text-base font-medium transition-colors text-gray-600 hover:text-gray-900" href="#homes">Projects</a>
<a className="block text-base font-medium transition-colors text-gray-600 hover:text-gray-900" href="#about">Studio</a>
<a className="block text-base font-medium transition-colors text-gray-600 hover:text-gray-900" href="#process">Process</a>
<div className="pt-6 border-t border-gray-100">
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-gray-900 text-white" href="#contact">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            Get Started
          </a>
</div>
</div>
</nav>
</header>

<section className="relative overflow-hidden pt-20 min-h-screen flex items-center parallax-section">

<div className="absolute inset-0 pattern-dots opacity-30 animate-fade-in animate-delay-200 parallax-element" data-speed="0.3" style={{opacity: '1', transform: 'translateY(-502.2px)'}}></div>

<div className="absolute inset-0 animate-fade-in animate-delay-300" style={{opacity: '1', transform: 'translateY(0px)'}}>
<img alt="Modern Architecture" className="parallax-bg parallax-element" data-speed="0.5" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&amp;fit=crop&amp;w=2400&amp;q=80" style={{transform: 'translateY(-837px)'}}/>
<div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center parallax-content">

<div className="lg:col-span-7 animate-slide-up animate-delay-400 parallax-element" data-speed="0.2" style={{opacity: '1', transform: 'translateY(-334.8px)'}}>
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-medium mb-10 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 shadow-sm">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{opacity: '1', transform: 'translateY(0px)'}}></div>
          Award-Winning Design Studio
        </div>
<h1 className="sm:text-7xl lg:text-8xl leading-[0.85] text-6xl tracking-tighter font-extralight mb-8">
<span className="text-gradient">Architectural</span><br/>
<span className="font-semibold text-gray-900">Excellence</span><br/>
<span className="sm:text-6xl lg:text-7xl text-5xl text-gray-500">Redefined</span>
</h1>
<div className="max-w-xl">
<p className="text-xl font-light leading-relaxed mb-10 text-gray-600">
            Creating extraordinary spaces that blend innovation, sustainability, and timeless design principles through meticulous craftsmanship.
          </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<button className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl group bg-gray-900 text-white hover:bg-gray-800">
<div className="relative">
<svg className="lucide lucide-play w-5 h-5 group-hover:scale-110 transition-transform duration-300" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
              Watch Our Story
            </button>
<button className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 border-gray-200 hover:bg-gray-50">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Schedule Consultation
            </button>
</div>

<div className="grid grid-cols-3 gap-8">
<div className="text-center">
<div className="text-3xl font-light text-gray-900 mb-1">500+</div>
<div className="text-sm text-gray-500 font-medium">Projects</div>
</div>
<div className="text-center">
<div className="text-3xl font-light text-gray-900 mb-1">15+</div>
<div className="text-sm text-gray-500 font-medium">Years</div>
</div>
<div className="text-center">
<div className="text-3xl font-light text-gray-900 mb-1">98%</div>
<div className="text-sm text-gray-500 font-medium">Satisfaction</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 animate-scale-in animate-delay-500 parallax-element" data-speed="-0.1" style={{opacity: '1', transform: 'translateY(167.4px)'}}>
<div className="relative">

<div className="relative rounded-3xl shadow-2xl p-8 gradient-border floating">

<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">Residential</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">Sustainable</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-900 text-white">Featured</span>
</div>
<div className="flex items-start justify-between mb-6">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">Meridian Residence</h3>
<p className="text-sm text-gray-500">Sustainable Modern Living</p>
</div>
<button className="p-2 rounded-full transition-all duration-200 hover:bg-gray-100 hover:scale-110">
<svg className="lucide lucide-bookmark w-5 h-5 text-gray-400" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>

<div className="rounded-2xl overflow-hidden mb-6 group relative">
<img alt="Modern House" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>

<div className="grid grid-cols-3 gap-4 mb-6">
<div className="text-center p-3 rounded-xl bg-gray-50">
<div className="flex items-center justify-center gap-1 text-sm font-semibold text-gray-900 mb-1">
<svg className="lucide lucide-maximize w-4 h-4" data-lucide="maximize" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>
                  4,200
                </div>
<p className="text-xs text-gray-500">sq ft</p>
</div>
<div className="text-center p-3 rounded-xl bg-gray-50">
<div className="flex items-center justify-center gap-1 text-sm font-semibold text-gray-900 mb-1">
<svg className="lucide lucide-bed w-4 h-4" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
                  4
                </div>
<p className="text-xs text-gray-500">bedrooms</p>
</div>
<div className="text-center p-3 rounded-xl bg-green-50">
<div className="flex items-center justify-center gap-1 text-sm font-semibold text-green-700 mb-1">
<svg className="lucide lucide-leaf w-4 h-4" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                  LEED
                </div>
<p className="text-xs text-green-600">certified</p>
</div>
</div>

<button className="w-full py-3 px-4 rounded-xl bg-gray-900 text-white font-medium text-sm transition-all duration-200 hover:bg-gray-800 hover:shadow-lg">
              View Project Details
            </button>
</div>

<div className="absolute -top-6 -right-6 w-40 animate-slide-up animate-delay-600 parallax-element" data-speed="0.15" style={{opacity: '1', transform: 'translateY(-251.1px)'}}>
<div className="rounded-2xl border shadow-xl overflow-hidden bg-white border-gray-200">
<div className="text-center text-xs font-semibold py-3 tracking-wide bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700">
                360° VIRTUAL TOUR
              </div>
<div className="relative">
<img alt="360 Tour" className="w-full h-24 object-cover" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&amp;fit=crop&amp;w=400&amp;q=60" style={{}}/>
<button aria-label="Play 360 tour" className="absolute inset-0 flex items-center justify-center group">
<div className="h-12 w-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 bg-white/95 text-gray-900">
<svg className="lucide lucide-play w-5 h-5 ml-0.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</button>
</div>
</div>
</div>

<div className="absolute top-1/2 -left-6 w-6 h-6 bg-gradient-to-br from-green-200 to-green-300 rounded-full animate-bounce opacity-70 parallax-element" data-speed="-0.05" style={{opacity: '1', transform: 'translateY(83.7px)'}}></div>
</div>
</div>
</div>
</section>

<section className="parallax-section bg-gradient-to-br from-gray-50 to-white pt-32 pb-32" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">

<div className="text-center mb-20 animate-slide-up animate-delay-200 parallax-element" data-speed="0.1" style={{transform: 'translateY(-167.4px)', opacity: '1'}}>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-blue-100 text-blue-800">
<svg className="lucide lucide-compass w-4 h-4" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
          Our Expertise
        </div>
<h2 className="text-5xl font-light tracking-tight mb-6 text-gray-900">
          Crafting Spaces That <span className="font-semibold">Inspire</span>
</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We combine architectural innovation with sustainable practices to create homes that stand the test of time.
        </p>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

<div className="relative animate-slide-up animate-delay-300 parallax-element" data-speed="0.15" style={{transform: 'translateY(0px)', opacity: '1'}}>
<div className="rounded-3xl p-12 lg:p-16 shadow-xl border bg-white border-gray-100 relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-60 parallax-element" data-speed="0.05" style={{transform: 'translateY(-83.7px)'}}></div>
<div className="relative">
<div className="flex items-center gap-4 mb-8">
<div className="p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200">
<svg className="lucide lucide-hammer w-8 h-8 text-blue-600" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
</div>
<h3 className="text-3xl font-semibold tracking-tight">Premium Materials</h3>
</div>
<p className="text-lg leading-relaxed mb-10 text-gray-600">
                We partner exclusively with certified suppliers who share our commitment to quality, sustainability, and ethical sourcing practices.
              </p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
<svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-gray-700 font-medium">FSC Certified Wood</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
<svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-gray-700 font-medium">Recycled Steel Framework</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
<svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-gray-700 font-medium">Low-VOC Finishes</span>
</div>
</div>
<button className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700 transition-colors group">
                Learn More About Our Materials
                <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="animate-slide-up animate-delay-400 parallax-element" data-speed="-0.1" style={{transform: 'translateY(0px)', opacity: '1'}}>
<div className="mb-10">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 bg-green-100 text-green-800">
<svg className="lucide lucide-leaf w-4 h-4" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
              Sustainable Design
            </div>
<h3 className="text-4xl font-light tracking-tight leading-tight mb-6 text-gray-900">
              Harmonizing Nature <span className="font-semibold">&amp; Modern Living</span>
</h3>
<p className="text-lg leading-relaxed text-gray-600">
              Our architects meticulously integrate biophilic design principles, creating spaces that enhance well-being while minimizing environmental impact.
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
<div className="rounded-2xl p-6 border bg-white border-gray-100 hover:shadow-lg transition-all duration-300 group">
<div className="p-3 rounded-xl w-fit mb-4 bg-green-100 group-hover:bg-green-200 transition-colors">
<svg className="lucide lucide-zap w-6 h-6 text-green-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h4 className="font-semibold mb-2 text-gray-900">Energy Efficient</h4>
<p className="text-sm text-gray-600 leading-relaxed">Up to 75% reduction in energy consumption through smart design</p>
</div>
<div className="rounded-2xl p-6 border bg-white border-gray-100 hover:shadow-lg transition-all duration-300 group">
<div className="p-3 rounded-xl w-fit mb-4 bg-blue-100 group-hover:bg-blue-200 transition-colors">
<svg className="lucide lucide-droplets w-6 h-6 text-blue-600" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<h4 className="font-semibold mb-2 text-gray-900">Water Smart</h4>
<p className="text-sm text-gray-600 leading-relaxed">Integrated rainwater harvesting and greywater systems</p>
</div>
</div>
<a className="inline-flex items-center gap-2 font-medium text-lg hover:gap-3 transition-all group text-gray-900" href="#process">
            Explore Our Process
            <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-32 relative overflow-hidden parallax-section" id="about">

<div className="absolute inset-0 opacity-10">
<div className="absolute inset-0 parallax-element" data-speed="0.2" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0px)', backgroundSize: '40px 40px', transform: 'translateY(-334.8px)'}}></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="animate-slide-up animate-delay-200 parallax-element" data-speed="0.1" style={{transform: 'translateY(0px)', opacity: '1'}}>
<div className="mb-12">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 bg-white/10 text-white">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
              Client Success Stories
            </div>
<div className="flex items-center gap-6 mb-10">
<div className="flex -space-x-4 parallax-element" data-speed="0.05" style={{transform: 'translateY(-83.7px)'}}>
<img alt="Client" className="h-16 w-16 border-gray-400/20 border-4 rounded-full shadow-xl" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<img alt="Client" className="h-16 w-16 border-gray-400/10 border-4 rounded-full shadow-xl" src="https://randomuser.me/api/portraits/women/44.jpg" style={{}}/>
<img alt="Client" className="h-16 w-16 border-gray-400/10 border-4 rounded-full shadow-xl" src="https://randomuser.me/api/portraits/men/56.jpg" style={{}}/>
<div className="h-16 w-16 flex bg-gray-800 border-gray-400/10 border-4 rounded-full shadow-xl items-center justify-center">
<span className="text-sm font-semibold">+2K</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-8 mb-10">
<div className="">
<p className="text-5xl font-light mb-2 text-white">12M+</p>
<p className="text-lg font-medium text-gray-300">Happy Families</p>
</div>
<div>
<p className="text-5xl font-light mb-2 text-white">4.9</p>
<div className="flex items-center gap-2">
<div className="flex gap-1">
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div>
<span className="text-lg font-medium text-gray-300">Rating</span>
</div>
</div>
</div>
</div>
</div>

<div className="animate-slide-up animate-delay-300 parallax-element" data-speed="-0.05" style={{transform: 'translateY(0px)', opacity: '1'}}>
<div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10">
<div className="mb-8">
<div className="flex gap-1 mb-6">
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div className="flex items-center gap-4">
<img alt="Sarah Chen" className="h-14 w-14 rounded-full border-2 border-white/20" src="https://randomuser.me/api/portraits/women/68.jpg" style={{}}/>
<div>
<p className="font-semibold text-white">Sarah Chen</p>
<p className="text-gray-300">Meridian Residence Owner</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white parallax-section" id="homes">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20 animate-slide-up animate-delay-200 parallax-element" data-speed="0.1" style={{transform: 'translateY(-167.4px)', opacity: '1'}}>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-gray-100 text-gray-700">
<svg className="lucide lucide-home w-4 h-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
          Featured Projects
        </div>
<h2 className="text-5xl font-light tracking-tight mb-6 text-gray-900">
          Architectural <span className="font-semibold">Masterpieces</span>
</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Each project represents our commitment to innovative design, sustainable practices, and exceptional craftsmanship.
        </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group animate-scale-in animate-delay-300 parallax-element" data-speed="0.1" style={{transform: 'translateY(-167.4px)', opacity: '1'}}>
<div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
<div className="relative overflow-hidden">
<img alt="Coastal Villa" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e14afe7-68a3-41ae-a900-a0c206a3d878_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Coastal</span>
</div>
</div>
<div className="p-8">
<h3 className="text-2xl font-semibold mb-2 text-gray-900">Azure Coast Villa</h3>
<p className="text-gray-600 mb-6">Contemporary waterfront residence with panoramic ocean views</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4 text-sm text-gray-500">
<span className="flex items-center gap-1">
<svg className="lucide lucide-maximize w-4 h-4" data-lucide="maximize" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>
                    6,800 sq ft
                  </span>
<span className="flex items-center gap-1">
<svg className="lucide lucide-bed w-4 h-4" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
                    5 bed
                  </span>
</div>
<button className="text-blue-600 hover:text-blue-700 font-medium text-sm">View Details</button>
</div>
</div>
</div>
</div>

<div className="group animate-scale-in animate-delay-400 parallax-element" data-speed="-0.05" style={{transform: 'translateY(83.7px)', opacity: '1'}}>
<div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
<div className="relative overflow-hidden">
<img alt="Urban Loft" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&amp;fit=crop&amp;w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Urban</span>
</div>
</div>
<div className="p-8">
<h3 className="text-2xl font-semibold mb-2 text-gray-900">Metropolitan Loft</h3>
<p className="text-gray-600 mb-6">Industrial-chic design meets modern luxury in downtown</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4 text-sm text-gray-500">
<span className="flex items-center gap-1">
<svg className="lucide lucide-maximize w-4 h-4" data-lucide="maximize" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>
                    3,200 sq ft
                  </span>
<span className="flex items-center gap-1">
<svg className="lucide lucide-bed w-4 h-4" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
                    3 bed
                  </span>
</div>
<button className="text-blue-600 hover:text-blue-700 font-medium text-sm">View Details</button>
</div>
</div>
</div>
</div>

<div className="group animate-scale-in animate-delay-500 parallax-element" data-speed="0.15" style={{transform: 'translateY(-251.1px)', opacity: '1'}}>
<div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
<div className="relative overflow-hidden">
<img alt="Forest Retreat" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Eco</span>
</div>
</div>
<div className="p-8">
<h3 className="text-2xl font-semibold mb-2 text-gray-900">Forest Sanctuary</h3>
<p className="text-gray-600 mb-6">Sustainable retreat harmoniously integrated with nature</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4 text-sm text-gray-500">
<span className="flex items-center gap-1">
<svg className="lucide lucide-maximize w-4 h-4" data-lucide="maximize" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>
                    4,500 sq ft
                  </span>
<span className="flex items-center gap-1">
<svg className="lucide lucide-bed w-4 h-4" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
                    4 bed
                  </span>
</div>
<button className="text-blue-600 hover:text-blue-700 font-medium text-sm">View Details</button>
</div>
</div>
</div>
</div>
</div>
<div className="text-center mt-16 animate-fade-in animate-delay-600">
<a className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium text-gray-900" href="#">
<svg className="lucide lucide-grid-3x3 w-5 h-5" data-lucide="grid-3x3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
          View All Projects
        </a>
</div>
</div>
</section>

<section className="bg-gradient-to-br from-gray-50 to-white py-32 parallax-section" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="animate-slide-up animate-delay-200 parallax-element" data-speed="0.1" style={{transform: 'translateY(-167.4px)', opacity: '1'}}>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 bg-blue-100 text-blue-800">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
            Get In Touch
          </div>
<h2 className="text-5xl font-light tracking-tight mb-6 text-gray-900">
            Ready to Build Your <span className="font-semibold">Dream Home?</span>
</h2>
<p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Let's discuss your vision and create something extraordinary together. Schedule a consultation to begin your architectural journey.
          </p>
<div className="space-y-6 mb-10">
<div className="flex items-center gap-4">
<div className="p-3 rounded-xl bg-blue-100">
<svg className="lucide lucide-phone w-6 h-6 text-blue-600" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<p className="font-semibold text-gray-900">Phone</p>
<p className="text-gray-600">+1 (555) 123-4567</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="p-3 rounded-xl bg-green-100">
<svg className="lucide lucide-mail w-6 h-6 text-green-600" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<p className="font-semibold text-gray-900">Email</p>
<p className="text-gray-600">hello@zenithhomes.com</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="p-3 rounded-xl bg-purple-100">
<svg className="lucide lucide-map-pin w-6 h-6 text-purple-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<p className="font-semibold text-gray-900">Studio</p>
<p className="text-gray-600">123 Design District, New York, NY</p>
</div>
</div>
</div>
</div>

<div className="animate-scale-in animate-delay-400 parallax-element" data-speed="-0.1" style={{transform: 'translateY(167.4px)', opacity: '1'}}>
<div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="firstName">First Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" id="firstName" type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="lastName">Last Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" id="lastName" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" id="email" type="email"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="projectType">Project Type</label>
<select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" id="projectType">
<option>New Construction</option>
<option>Renovation</option>
<option>Interior Design</option>
<option>Consultation</option>
</select>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="message">Tell us about your project</label>
<textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none" id="message" rows="4"></textarea>
</div>
<button className="w-full py-4 px-6 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105" type="submit">
                Schedule Consultation
              </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-gray-900 text-white py-20">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div className="">
<div className="flex items-center gap-3 mb-6">
<button aria-label="Icon button" className="ml-4 p-2 rounded-xl bg-gradient-to-br from-gray-200 to-gray-400 hover:from-gray-300 hover:to-gray-500 transition-colors shadow-md flex items-center justify-center">
<svg className="lucide lucide-settings w-5 h-5 text-gray-700" data-lucide="settings" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<span className="font-semibold text-xl">Zenith</span>
</div>
<p className="text-gray-400 leading-relaxed mb-6">
            Crafting architectural excellence through innovative design and sustainable practices.
          </p>
<div className="flex gap-4">
<a className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
<div>
<h3 className="font-semibold mb-6">Services</h3>
<ul className="space-y-4 text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Architecture</a></li>
<li><a className="hover:text-white transition-colors" href="#">Interior Design</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sustainable Design</a></li>
<li><a className="hover:text-white transition-colors" href="#">Project Management</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold mb-6">Projects</h3>
<ul className="space-y-4 text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Residential</a></li>
<li><a className="hover:text-white transition-colors" href="#">Commercial</a></li>
<li><a className="hover:text-white transition-colors" href="#">Hospitality</a></li>
<li><a className="hover:text-white transition-colors" href="#">Public Spaces</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold mb-6">Company</h3>
<ul className="space-y-4 text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Team</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-gray-400">© 2024 Zenith Homes. All rights reserved.</p>
<div className="flex gap-6 text-sm text-gray-400">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
