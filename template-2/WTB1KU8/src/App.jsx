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

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Header scroll effect
    let lastScroll = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
      }
      
      if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
      } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
      }
      lastScroll = currentScroll;
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.grid-pattern');
      const speed = scrolled * 0.5;
      
      if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
      }
    });

    // Dynamic typing effect for hero text
    const heroTitle = document.querySelector('h1');
    if (heroTitle) {
      heroTitle.addEventListener('mouseenter', () => {
        heroTitle.style.transform = 'scale(1.02)';
      });
      
      heroTitle.addEventListener('mouseleave', () => {
        heroTitle.style.transform = 'scale(1)';
      });
    }

    // Product card hover effects
    const productCards = document.querySelectorAll('.group');
    productCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.05)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Performance monitoring visualization
    const performanceBar = document.querySelector('.bg-blue-600');
    const accuracyBar = document.querySelector('.bg-green-600');
    
    if (performanceBar && accuracyBar) {
      let performanceWidth = 87;
      let accuracyWidth = 99;
      
      setInterval(() => {
        performanceWidth = Math.max(85, Math.min(95, performanceWidth + (Math.random() - 0.5) * 4));
        accuracyWidth = Math.max(97, Math.min(100, accuracyWidth + (Math.random() - 0.5) * 2));
        
        performanceBar.style.width = `${performanceWidth}%`;
        accuracyBar.style.width = `${accuracyWidth}%`;
      }, 2000);
    }

    // Loading states for buttons
    document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', function(e) {
        if (this.textContent.includes('Start Free Trial') || this.textContent.includes('Get Started')) {
          e.preventDefault();
          
          const originalText = this.innerHTML;
          this.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin mr-2"></i>Loading...';
          this.disabled = true;
          
          setTimeout(() => {
            this.innerHTML = originalText;
            this.disabled = false;
            lucide.createIcons();
          }, 2000);
        }
      });
    });

    // Auto-refresh performance metrics
    const metricsDisplay = document.querySelectorAll('.text-2xl');
    if (metricsDisplay.length >= 3) {
      setInterval(() => {
        const responseTime = (2.1 + Math.random() * 0.4).toFixed(1);
        const uptime = (99.8 + Math.random() * 0.1).toFixed(1);
        const dataProcessed = (48 + Math.random() * 4).toFixed(0);
        
        metricsDisplay[0].textContent = `${responseTime}s`;
        metricsDisplay[1].textContent = `${uptime}%`;
        metricsDisplay[2].textContent = `${dataProcessed}TB`;
      }, 5000);
    }

    // Easter egg - Konami code
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    
    document.addEventListener('keydown', (e) => {
      konamiCode.push(e.keyCode);
      if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
      }
      
      if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.transform = 'rotate(1turn)';
        document.body.style.transition = 'transform 2s ease-in-out';
        
        setTimeout(() => {
          document.body.style.transform = '';
          alert('🎉 You found the secret! Welcome to the Nexus AI developer community!');
        }, 2000);
        
        konamiCode = [];
      }
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
      <iframe className="fixed top-0 w-full h-screen -z-10" frameborder="0" height="100%" src="https://my.spline.design/aidatamodelinteraction-mdTL3FktFVHgDvFr5TKtnYDV" width="100%"></iframe>

<div className="fixed inset-0 grid-pattern" style={{transform: `translateY(896px)`}}></div>

<header className="sticky top-0 z-30 backdrop-blur-md border-b bg-black/80 border-slate-800 scroll-down">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center space-x-2 text-xl font-semibold tracking-tight transition-colors text-white hover:text-cyan-400" href="#">
<span className="font-sans">Nexus AI</span>
</a>

<nav className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium transition-colors font-sans hover:text-white text-slate-300" href="#home">Home</a>
<a className="text-sm font-medium transition-colors font-sans hover:text-white text-slate-300" href="#products">Products</a>
<a className="text-sm font-medium transition-colors font-sans hover:text-white text-slate-300" href="#technology">Technology</a>
<a className="text-sm font-medium transition-colors font-sans hover:text-white text-slate-300" href="#pricing">Pricing</a>
<a className="text-sm font-medium transition-colors font-sans hover:text-white text-slate-300" href="#about">About</a>
</nav>

<div className="flex items-center space-x-3">
<button className="p-2 rounded-lg transition-colors hover:bg-slate-800">
<svg className="lucide lucide-search w-5 h-5 text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="p-2 rounded-lg transition-colors hover:bg-slate-800">
<svg className="lucide lucide-github w-5 h-5 text-gray-400" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</button>
<button className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors bg-cyan-600 text-white hover:bg-cyan-700">
<span className="text-sm font-medium font-sans">Get Started</span>
</button>
<button className="md:hidden p-2 rounded-lg transition-colors hover:bg-slate-800" id="menuBtn">
<svg className="lucide lucide-menu w-5 h-5 text-gray-400" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>

<div className="hidden md:hidden pb-4 border-t mt-4 pt-4 border-slate-800" id="mobileNav">
<nav className="flex flex-col space-y-1">
<a className="text-sm font-medium py-3 px-3 rounded-lg transition-colors font-sans hover:bg-slate-900" href="#home">Home</a>
<a className="text-sm font-medium py-3 px-3 rounded-lg transition-colors font-sans hover:bg-slate-900" href="#products">Products</a>
<a className="text-sm font-medium py-3 px-3 rounded-lg transition-colors font-sans hover:bg-slate-900" href="#technology">Technology</a>
<a className="text-sm font-medium py-3 px-3 rounded-lg transition-colors font-sans hover:bg-slate-900" href="#pricing">Pricing</a>
<a className="text-sm font-medium py-3 px-3 rounded-lg transition-colors font-sans hover:bg-slate-900" href="#about">About</a>
</nav>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative" id="home">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="slide-in-left visible">
<div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium mb-6 border bg-cyan-950 text-cyan-300 border-cyan-800">
<svg className="lucide lucide-cpu w-4 h-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="font-sans">AI-Powered Platform</span>
</div>
<h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-none text-white" style={{transform: `scale(1)`}}>
<span className="block font-instrument-serif font-normal">Intelligent</span>
<span className="block font-instrument-serif font-normal text-cyan-400">Productivity</span>
<span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 font-instrument-serif font-normal text-slate-300">2.5s</span>
</h1>
<p className="mt-6 text-lg max-w-xl font-sans text-slate-300">
          Transform your workflow with AI that thinks ahead. Automate complex tasks, generate insights, and achieve 10x productivity in seconds.
        </p>
<div className="mt-8 flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center space-x-2 rounded-xl px-8 py-4 text-sm font-medium transform hover:scale-105 transition-all shadow-lg bg-white text-black hover:bg-slate-100">
<span className="font-sans">Start Free Trial</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="inline-flex items-center justify-center space-x-2 rounded-xl border px-8 py-4 text-sm font-medium transition-all border-slate-700 text-slate-300 hover:border-slate-600 hover:bg-slate-900">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
<span className="font-sans">Watch Demo</span>
</button>
</div>
</div>
<div className="slide-in-right visible">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r rounded-3xl blur-xl opacity-20 from-cyan-600 to-amber-600"></div>
<div className="relative bg-slate-900 bg-[url(https://images.unsplash.com/photo-1644426358808-d5db8b4735a0?w=1600&q=80)] bg-cover border-slate-800 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-green-500 rounded-full"></div>
<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
<div className="w-3 h-3 bg-green-500 rounded-full"></div>
</div>
<div className="text-xs text-slate-50">nexus-ai.dev</div>
</div>
<div className="space-y-4">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-cyan-600">
<svg className="lucide lucide-terminal w-4 h-4 text-white" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
</div>
<div className="">
<div className="text-sm font-medium font-sans text-white">AI Code Assistant</div>
<div className="text-xs text-slate-200">Generating optimal solution...</div>
</div>
</div>
<div className="rounded-lg p-4 bg-slate-800/80">
<div className="text-sm font-mono text-green-400">
<div className="font-sans">$ nexus optimize --target=performance</div>
<div className="text-slate-500 font-sans">✓ Analyzed 1,247 functions</div>
<div className="text-slate-500 font-sans">✓ Reduced bundle size by 67%</div>
<div className="text-slate-500 font-sans">✓ Improved load time by 3.2s</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 fade-in visible">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
<div className="flex items-center space-x-3 p-4 rounded-xl border bg-slate-900 border-slate-800">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-600">
<svg className="lucide lucide-zap w-5 h-5 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<p className="text-sm font-medium font-sans text-white">10x Faster</p>
<p className="text-xs font-sans text-slate-400">Task completion</p>
</div>
</div>
<div className="flex items-center space-x-3 p-4 rounded-xl border bg-slate-900 border-slate-800">
<div className="w-10 h-10 flex rounded-lg items-center justify-center bg-green-600">
<svg className="lucide lucide-shield-check w-5 h-5 text-white" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium font-sans text-white">Enterprise Security</p>
<p className="text-xs font-sans text-slate-400">SOC 2 compliant</p>
</div>
</div>
<div className="flex items-center space-x-3 p-4 rounded-xl border bg-slate-900 border-slate-800">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-600">
<svg className="lucide lucide-brain w-5 h-5 text-white" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium font-sans text-white">AI Learning</p>
<p className="text-xs font-sans text-slate-400">Adaptive intelligence</p>
</div>
</div>
<div className="flex items-center space-x-3 p-4 rounded-xl border bg-slate-900 border-slate-800">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-600">
<svg className="lucide lucide-users w-5 h-5 text-white" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="">
<p className="text-sm font-medium font-sans text-white">100K+ Users</p>
<p className="text-xs font-sans text-slate-400">Trusted globally</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-slate-950" id="products">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 fade-in visible">
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 font-instrument-serif font-normal text-white">Choose Your AI Assistant</h2>
<p className="text-lg max-w-2xl mx-auto font-sans text-slate-300">Specialized AI tools designed for different aspects of your workflow</p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group cursor-pointer scale-in visible" style={{transform: `translateY(0px) scale(1)`}}>
<div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-br p-6 from-cyan-600 to-cyan-800">
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1635776062360-af423602aff3?w=800&q=80)] bg-cover"></div>
<div className="relative">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-white/20">
<svg className="lucide lucide-code w-6 h-6 text-white" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
</div>
<h3 className="font-medium text-lg mb-2 font-sans text-white">Code Assistant</h3>
<p className="text-sm mb-4 font-sans text-white/80">Generate, optimize, and debug code across 50+ languages</p>
<div className="flex items-center text-white/60">
<svg className="lucide lucide-trending-up w-4 h-4 mr-1" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-xs font-sans">95% accuracy rate</span>
</div>
</div>
</div>
</div>
<div className="group cursor-pointer scale-in visible" style={{transform: `translateY(0px) scale(1)`}}>
<div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-br p-6 from-amber-600 to-amber-800">
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?w=800&q=80)] bg-cover"></div>
<div className="relative">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-white/20">
<svg className="lucide lucide-pen-tool w-6 h-6 text-white" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="font-medium text-lg mb-2 font-sans text-white">Content Creator</h3>
<p className="text-sm mb-4 font-sans text-white/80">Write, edit, and optimize content with AI precision</p>
<div className="flex items-center text-white/60">
<svg className="lucide lucide-sparkles w-4 h-4 mr-1" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
<span className="text-xs font-sans">Human-like quality</span>
</div>
</div>
</div>
</div>
<div className="group cursor-pointer scale-in visible" style={{transform: `translateY(0px) scale(1)`}}>
<div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-br p-6 from-green-600 to-green-800">
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=800&q=80)] bg-cover"></div>
<div className="relative">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-white/20">
<svg className="lucide lucide-bar-chart w-6 h-6 text-white" data-lucide="bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg>
</div>
<h3 className="font-medium text-lg mb-2 font-sans text-white">Data Analyst</h3>
<p className="text-sm mb-4 font-sans text-white/80">Extract insights from complex datasets instantly</p>
<div className="flex items-center text-white/60">
<svg className="lucide lucide-eye w-4 h-4 mr-1" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-xs font-sans">Real-time insights</span>
</div>
</div>
</div>
</div>
<div className="group cursor-pointer scale-in visible" style={{transform: `translateY(0px) scale(1)`}}>
<div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-br p-6 from-cyan-600 to-cyan-800">
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1635776063328-153b13e3c245?w=800&q=80)] bg-cover"></div>
<div className="relative">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-white/20">
<svg className="lucide lucide-workflow w-6 h-6 text-white" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<h3 className="font-medium text-lg mb-2 font-sans text-white">Workflow Automation</h3>
<p className="text-sm mb-4 font-sans text-white/80">Automate repetitive tasks and processes</p>
<div className="flex items-center text-white/60">
<svg className="lucide lucide-clock w-4 h-4 mr-1" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs font-sans">Save 40+ hours/week</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24" id="technology">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="slide-in-left visible">
<div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium mb-6 border bg-slate-900 text-slate-300 border-slate-800">
<svg className="lucide lucide-cpu w-4 h-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="font-sans">Advanced AI Technology</span>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-8 font-instrument-serif font-normal text-white">The Future of AI Integration</h2>
<div className="space-y-6">
<div className="flex items-start space-x-4">
<div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-cyan-600">
<span className="font-semibold text-sm font-sans text-white">1</span>
</div>
<div className="">
<h3 className="font-medium mb-1 font-sans text-white">Neural Processing Engine</h3>
<p className="text-sm font-sans text-slate-300">Advanced transformer architecture processes context with 99.7% accuracy</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-amber-600">
<span className="font-semibold text-sm font-sans text-white">2</span>
</div>
<div>
<h3 className="font-medium mb-1 font-sans text-white">Adaptive Learning System</h3>
<p className="text-sm font-sans text-slate-300">Continuously improves performance based on your usage patterns</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-green-600">
<span className="font-semibold text-sm font-sans text-white">3</span>
</div>
<div>
<h3 className="font-medium mb-1 font-sans text-white">Real-time Optimization</h3>
<p className="text-sm font-sans text-slate-300">Instant results with progressive enhancement over time</p>
</div>
</div>
</div>
<div className="mt-8 p-6 bg-gradient-to-r rounded-2xl border from-cyan-950 to-slate-900 border-slate-800">
<div className="flex items-center space-x-3 mb-3">
<svg className="lucide lucide-activity w-5 h-5 text-blue-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="font-medium font-sans text-white">Performance Metrics</span>
</div>
<div className="grid grid-cols-3 gap-4 text-center">
<div>
<p className="text-2xl font-instrument-serif font-normal text-white">99.9%</p>
<p className="text-xs font-sans text-slate-300">Average response time</p>
</div>
<div className="">
<p className="text-2xl font-instrument-serif font-normal text-white">48TB</p>
<p className="text-xs font-sans text-slate-300">Uptime guarantee</p>
</div>
<div>
<p className="text-2xl font-instrument-serif font-normal text-white">50TB</p>
<p className="text-xs font-sans text-slate-300">Data processed daily</p>
</div>
</div>
</div>
</div>
<div className="slide-in-right visible">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-br rounded-3xl blur-2xl opacity-20 from-cyan-600 to-amber-600"></div>
<div className="relative rounded-3xl p-8 border bg-slate-900 border-slate-800">
<div className="space-y-6">
<div className="flex items-center justify-between">
<div className="text-sm font-medium font-sans text-white">AI Model Performance</div>
<div className="text-xs font-sans text-green-400">Live</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm font-sans text-slate-300">Processing Speed</span>
<span className="text-sm font-sans text-white">847 req/s</span>
</div>
<div className="w-full rounded-full h-2 bg-slate-800">
<div className="h-2 rounded-full bg-cyan-600" style={{width: `87%`}}></div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm font-sans text-slate-300">Accuracy Rate</span>
<span className="text-sm font-sans text-white">99.7%</span>
</div>
<div className="w-full rounded-full h-2 bg-slate-800">
<div className="h-2 rounded-full bg-green-600" style={{width: `99%`}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-24 pt-16 pb-16">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="fade-in visible">
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6 font-instrument-serif font-normal text-white">Ready to Transform Your Workflow?</h2>
<p className="text-xl mb-8 max-w-2xl mx-auto font-sans text-white/90">Join thousands of developers and teams who've revolutionized their productivity with AI.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="inline-flex items-center justify-center space-x-2 rounded-xl px-8 py-4 text-sm font-medium transform hover:scale-105 transition-all shadow-lg bg-white text-cyan-600 hover:bg-slate-100">
<span className="font-sans">Start Free Trial</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<div className="flex items-center space-x-2 text-white/80">
<svg className="lucide lucide-check w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm font-sans">No credit card required</span>
</div>
</div>
</div>
</div>
</section>

<footer className="py-16 border-t bg-slate-950 text-white border-slate-800" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
<div className="lg:col-span-2">
<div className="flex items-center space-x-2 text-xl font-semibold mb-4">
<svg className="lucide lucide-zap w-6 h-6 text-blue-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="font-sans">Nexus AI</span>
</div>
<p className="mb-6 max-w-md font-sans text-slate-400">Revolutionizing productivity with AI-powered tools that adapt to your workflow and amplify your capabilities.</p>
<div className="flex space-x-4">
<button className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-slate-800 hover:bg-slate-700">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</button>
<button className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-slate-800 hover:bg-slate-700">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</button>
<button className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-slate-800 hover:bg-slate-700">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</button>
</div>
</div>
<div className="">
<h3 className="font-semibold mb-4 font-sans">Product</h3>
<ul className="space-y-2 text-slate-400">
<li><a className="transition-colors font-sans hover:text-white" href="#">Features</a></li>
<li><a className="transition-colors font-sans hover:text-white" href="#">API</a></li>
<li><a className="transition-colors font-sans hover:text-white" href="#">Integrations</a></li>
<li><a className="transition-colors font-sans hover:text-white" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold mb-4 font-sans">Support</h3>
<ul className="space-y-2 text-slate-400">
<li><a className="transition-colors font-sans hover:text-white" href="#">Documentation</a></li>
<li><a className="transition-colors font-sans hover:text-white" href="#">Help Center</a></li>
<li><a className="transition-colors font-sans hover:text-white" href="#">Contact</a></li>
<li><a className="transition-colors font-sans hover:text-white" href="#">Status</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center border-slate-800">
<p className="text-sm font-sans text-slate-400">© 2024 Nexus AI. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-sm transition-colors font-sans text-slate-400 hover:text-white" href="#">Privacy</a>
<a className="text-sm transition-colors font-sans text-slate-400 hover:text-white" href="#">Terms</a>
<a className="text-sm transition-colors font-sans text-slate-400 hover:text-white" href="#">Security</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
