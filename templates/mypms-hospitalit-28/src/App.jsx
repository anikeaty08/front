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
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
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
        
        document.querySelectorAll('.slide-up, .slide-left, .slide-right, .scale-in').forEach(el => {
            observer.observe(el);
        });
        
        // Particle background
        function createParticles() {
            const container = document.getElementById('particles');
            const colors = ['#8b5cf6', '#d946ef', '#f43f5e', '#00f5d4', '#00bbf9', '#fee440'];
            
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.cssText = `
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    width: ${Math.random() * 4 + 2}px;
                    height: ${Math.random() * 4 + 2}px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    opacity: ${Math.random() * 0.5 + 0.2};
                    animation: float ${Math.random() * 10 + 10}s ease-in-out infinite;
                    animation-delay: ${Math.random() * 5}s;
                `;
                container.appendChild(particle);
            }
        }
        createParticles();
        
        // Parallax effect on scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            document.querySelectorAll('.morph').forEach((el, i) => {
                el.style.transform = `translateY(${scrolled * 0.1 * (i + 1)}px)`;
            });
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
      

<div className="fixed inset-0 pointer-events-none z-0" id="particles"></div>

<nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 lg:h-20">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-2xl gradient-main flex items-center justify-center pulse-glow">
<span className="text-white font-bold text-xl">M</span>
</div>
<span className="font-bold text-xl tracking-tight gradient-text">MyPMS</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-300 hover:text-white transition-all hover:scale-105" href="#about">About</a>
<a className="text-sm text-slate-300 hover:text-white transition-all hover:scale-105" href="#services">Services</a>
<a className="text-sm text-slate-300 hover:text-white transition-all hover:scale-105" href="#features">Features</a>
<a className="text-sm text-slate-300 hover:text-white transition-all hover:scale-105" href="#pricing">Pricing</a>
<a className="text-sm text-slate-300 hover:text-white transition-all hover:scale-105" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex px-6 py-3 text-sm font-semibold text-white rounded-xl gradient-main hover:opacity-90 transition-all btn-glow pulse-glow" href="#contact">
                        Get Demo
                    </a>
<button className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden glass-dark border-t border-white/10" id="mobile-menu">
<div className="px-4 py-4 space-y-3">
<a className="block text-sm text-slate-300 hover:text-white py-2" href="#about">About</a>
<a className="block text-sm text-slate-300 hover:text-white py-2" href="#services">Services</a>
<a className="block text-sm text-slate-300 hover:text-white py-2" href="#features">Features</a>
<a className="block text-sm text-slate-300 hover:text-white py-2" href="#pricing">Pricing</a>
<a className="block text-sm text-slate-300 hover:text-white py-2" href="#contact">Contact</a>
</div>
</div>
</nav>

<section className="relative min-h-screen pt-24 lg:pt-32 pb-16 overflow-hidden gradient-hero">

<div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl morph"></div>
<div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl morph" style={{animationDelay: '-4s'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-3xl spin-slow"></div>

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-20 left-[10%] icon-float" style={{animationDelay: '0s'}}>
<i className="w-8 h-8 text-purple-400/40" data-lucide="utensils"></i>
</div>
<div className="absolute top-40 right-[15%] icon-float" style={{animationDelay: '0.5s'}}>
<i className="w-10 h-10 text-pink-400/40" data-lucide="coffee"></i>
</div>
<div className="absolute top-60 left-[20%] icon-float" style={{animationDelay: '1s'}}>
<i className="w-12 h-12 text-cyan-400/40" data-lucide="building-2"></i>
</div>
<div className="absolute bottom-40 right-[25%] icon-float" style={{animationDelay: '1.5s'}}>
<i className="w-10 h-10 text-yellow-400/40" data-lucide="qr-code"></i>
</div>
<div className="absolute bottom-60 left-[30%] icon-float" style={{animationDelay: '2s'}}>
<i className="w-8 h-8 text-green-400/40" data-lucide="monitor"></i>
</div>
<div className="absolute top-1/3 right-[10%] icon-spin">
<i className="w-6 h-6 text-orange-400/30" data-lucide="settings"></i>
</div>
<div className="absolute bottom-1/3 left-[5%] icon-spin" style={{animationDirection: 'reverse'}}>
<i className="w-8 h-8 text-violet-400/30" data-lucide="cog"></i>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="text-center lg:text-left slide-up">

<div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-purple-500/30 mb-8 badge-glow">
<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
<span className="text-xs font-semibold text-purple-200">🚀 Trusted by 500+ Hospitality Businesses</span>
<i className="w-4 h-4 text-yellow-400 icon-wiggle" data-lucide="sparkles"></i>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-6">
<span className="text-white">Smart Digital</span><br/>
<span className="text-white">Solutions for</span><br/>
<span className="gradient-text">Hospitality</span>
</h1>
<p className="text-lg lg:text-xl text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Transform your <span className="text-purple-400 font-semibold">restaurants</span>, <span className="text-pink-400 font-semibold">hotels</span>, <span className="text-cyan-400 font-semibold">cafés</span> &amp; <span className="text-yellow-400 font-semibold">dhabas</span> with professional websites, QR menus, and cloud solutions.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
<a className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white rounded-2xl gradient-main hover:opacity-90 transition-all btn-glow pulse-glow" href="#contact">
<span>Get Free Demo</span>
<i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white rounded-2xl glass border border-white/20 hover:bg-white/10 transition-all" href="#services">
<i className="w-5 h-5 text-purple-400 icon-pulse" data-lucide="play-circle"></i>
<span>Watch Demo</span>
</a>
</div>

<div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
<div className="text-center lg:text-left">
<div className="flex items-center gap-2 justify-center lg:justify-start">
<i className="w-5 h-5 text-purple-400 icon-bounce" data-lucide="building-2"></i>
<p className="text-3xl lg:text-4xl font-bold gradient-text tracking-tight">500+</p>
</div>
<p className="text-sm text-slate-400 mt-1">Happy Clients</p>
</div>
<div className="text-center lg:text-left">
<div className="flex items-center gap-2 justify-center lg:justify-start">
<i className="w-5 h-5 text-green-400 icon-bounce" data-lucide="check-circle" style={{animationDelay: '0.2s'}}></i>
<p className="text-3xl lg:text-4xl font-bold gradient-text tracking-tight">99.9%</p>
</div>
<p className="text-sm text-slate-400 mt-1">Uptime</p>
</div>
<div className="text-center lg:text-left">
<div className="flex items-center gap-2 justify-center lg:justify-start">
<i className="w-5 h-5 text-cyan-400 icon-bounce" data-lucide="headphones" style={{animationDelay: '0.4s'}}></i>
<p className="text-3xl lg:text-4xl font-bold gradient-text tracking-tight">24/7</p>
</div>
<p className="text-sm text-slate-400 mt-1">Support</p>
</div>
</div>
</div>

<div className="perspective relative slide-up" style={{animationDelay: '0.3s'}}>
<div className="transform-3d float">

<div className="relative animated-border rounded-3xl p-1">
<div className="bg-slate-900 rounded-3xl p-3">
<div className="bg-slate-800 rounded-2xl overflow-hidden">

<div className="bg-slate-700 px-4 py-3 flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="flex-1 mx-4">
<div className="bg-slate-600 rounded-lg px-4 py-1.5 text-xs text-slate-300 flex items-center gap-2">
<i className="w-3 h-3 text-green-400" data-lucide="lock"></i>
                                                yourrestaurant.com
                                            </div>
</div>
</div>

<div className="p-6 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<div className="w-10 h-10 rounded-xl gradient-sunset flex items-center justify-center">
<i className="w-5 h-5 text-white icon-wiggle" data-lucide="flame"></i>
</div>
<span className="font-semibold text-white">Spice Garden</span>
</div>
<div className="flex gap-4 text-xs text-slate-400">
<span>Menu</span>
<span>About</span>
<span>Contact</span>
</div>
</div>
<div className="gradient-main rounded-2xl p-6 text-white mb-4 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
<p className="text-xs opacity-80">Welcome to</p>
<p className="text-xl font-bold">Spice Garden</p>
<p className="text-sm mt-2 opacity-80">Authentic Indian Cuisine</p>
<button className="mt-4 px-4 py-2 bg-white/20 rounded-lg text-xs font-medium backdrop-blur">View Menu</button>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700">
<div className="w-full h-14 gradient-sunset rounded-lg mb-2 flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="flame"></i>
</div>
<p className="text-xs font-medium text-white">Biryani</p>
<p className="text-xs text-green-400">₹299</p>
</div>
<div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700">
<div className="w-full h-14 gradient-fire rounded-lg mb-2 flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="beef"></i>
</div>
<p className="text-xs font-medium text-white">Tandoori</p>
<p className="text-xs text-green-400">₹399</p>
</div>
<div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700">
<div className="w-full h-14 gradient-aurora rounded-lg mb-2 flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="leaf"></i>
</div>
<p className="text-xs font-medium text-white">Paneer</p>
<p className="text-xs text-green-400">₹249</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-8 top-1/4 glass rounded-2xl p-4 border border-purple-500/30 float-reverse" style={{animationDelay: '-2s'}}>
<div className="w-16 h-16 gradient-neon rounded-xl flex items-center justify-center mb-3">
<i className="w-8 h-8 text-white icon-pulse" data-lucide="qr-code"></i>
</div>
<p className="text-xs font-semibold text-center text-white">Scan Menu</p>
</div>
<div className="absolute -left-8 bottom-1/4 glass rounded-2xl p-4 border border-cyan-500/30 float" style={{animationDelay: '-3s'}}>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
<i className="w-6 h-6 text-white icon-bounce" data-lucide="trending-up"></i>
</div>
<div>
<p className="text-xs text-slate-400">Orders Today</p>
<p className="text-xl font-bold text-white">127</p>
</div>
</div>
</div>
<div className="absolute -bottom-4 right-1/4 glass rounded-2xl px-4 py-3 border border-yellow-500/30 bounce-soft">
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full gradient-sunset"></div>
<div className="w-8 h-8 rounded-full gradient-aurora"></div>
<div className="w-8 h-8 rounded-full gradient-fire"></div>
</div>
<div className="flex items-center gap-1">
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<span className="text-sm font-semibold text-white">4.9</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2">
<div className="w-7 h-12 rounded-full border-2 border-purple-500/50 flex justify-center pt-2">
<div className="w-2 h-3 bg-purple-500 rounded-full animate-bounce"></div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden" id="about">
<div className="absolute top-0 left-0 w-full h-1 gradient-main"></div>
<div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-20 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="slide-left">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 mb-6">
<i className="w-4 h-4 text-purple-400 icon-bounce" data-lucide="info"></i>
<span className="text-xs font-semibold text-purple-200">About Us</span>
</div>
<h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
<span className="text-white">We Help Hospitality</span><br/>
<span className="gradient-text">Businesses Go Digital</span>
</h2>
<p className="text-lg text-slate-300 mb-8 leading-relaxed">
                        MyPMS Solutions Private Limited is a technology company dedicated to empowering restaurants, hotels, cafés, and dhabas with smart digital tools that drive growth and efficiency.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4 p-4 rounded-2xl glass border border-purple-500/20 card-hover">
<div className="w-14 h-14 rounded-xl gradient-neon flex items-center justify-center flex-shrink-0">
<i className="w-7 h-7 text-white icon-pulse" data-lucide="target"></i>
</div>
<div>
<h4 className="font-semibold text-white mb-1">Our Mission</h4>
<p className="text-sm text-slate-400">To digitize every hospitality business in India with affordable, powerful solutions.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl glass border border-pink-500/20 card-hover">
<div className="w-14 h-14 rounded-xl gradient-sunset flex items-center justify-center flex-shrink-0">
<i className="w-7 h-7 text-white icon-wiggle" data-lucide="lightbulb"></i>
</div>
<div>
<h4 className="font-semibold text-white mb-1">The Problem We Solve</h4>
<p className="text-sm text-slate-400">Many businesses struggle with outdated systems. We change that.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl glass border border-cyan-500/20 card-hover">
<div className="w-14 h-14 rounded-xl gradient-aurora flex items-center justify-center flex-shrink-0">
<i className="w-7 h-7 text-white icon-pulse" data-lucide="heart"></i>
</div>
<div>
<h4 className="font-semibold text-white mb-1">Why Choose Us</h4>
<p className="text-sm text-slate-400">Industry expertise, dedicated support, and affordable pricing.</p>
</div>
</div>
</div>
</div>

<div className="slide-right">
<div className="grid grid-cols-2 gap-4">
<div className="gradient-main rounded-3xl p-8 text-center card-hover">
<i className="w-12 h-12 text-white mx-auto mb-4 icon-float" data-lucide="building-2"></i>
<p className="text-4xl font-bold text-white tracking-tight">500+</p>
<p className="text-sm text-white/80 mt-2">Businesses Served</p>
</div>
<div className="glass border border-purple-500/30 rounded-3xl p-8 text-center card-hover">
<i className="w-12 h-12 text-purple-400 mx-auto mb-4 icon-float" data-lucide="users" style={{animationDelay: '0.2s'}}></i>
<p className="text-4xl font-bold gradient-text tracking-tight">50K+</p>
<p className="text-sm text-slate-400 mt-2">End Users</p>
</div>
<div className="glass border border-pink-500/30 rounded-3xl p-8 text-center card-hover">
<i className="w-12 h-12 text-pink-400 mx-auto mb-4 icon-float" data-lucide="map-pin" style={{animationDelay: '0.4s'}}></i>
<p className="text-4xl font-bold gradient-text tracking-tight">25+</p>
<p className="text-sm text-slate-400 mt-2">Cities</p>
</div>
<div className="gradient-neon rounded-3xl p-8 text-center card-hover">
<i className="w-12 h-12 text-white mx-auto mb-4 icon-float" data-lucide="award" style={{animationDelay: '0.6s'}}></i>
<p className="text-4xl font-bold text-white tracking-tight">4.9</p>
<p className="text-sm text-white/80 mt-2">Rating</p>
</div>
</div>

<div className="mt-6 glass border border-green-500/30 rounded-2xl p-4 flex items-center justify-center gap-3">
<div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-sm font-semibold text-green-400">Verified &amp; Trusted Partner</span>
<i className="w-5 h-5 text-green-400 icon-bounce" data-lucide="shield-check"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden mesh-bg" id="services">
<div className="absolute inset-0 bg-slate-950/80"></div>

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-20 left-[5%] icon-float opacity-20">
<i className="w-16 h-16 text-purple-500" data-lucide="globe"></i>
</div>
<div className="absolute top-40 right-[10%] icon-float opacity-20" style={{animationDelay: '1s'}}>
<i className="w-20 h-20 text-pink-500" data-lucide="qr-code"></i>
</div>
<div className="absolute bottom-40 left-[15%] icon-float opacity-20" style={{animationDelay: '2s'}}>
<i className="w-16 h-16 text-cyan-500" data-lucide="monitor"></i>
</div>
<div className="absolute bottom-20 right-[5%] icon-float opacity-20" style={{animationDelay: '3s'}}>
<i className="w-14 h-14 text-yellow-500" data-lucide="building"></i>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16 slide-up">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 mb-6">
<i className="w-4 h-4 text-purple-400 icon-spin" data-lucide="layers"></i>
<span className="text-xs font-semibold text-purple-200">Our Services</span>
</div>
<h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
<span className="text-white">Complete Digital Solutions</span><br/>
<span className="gradient-text">for Hospitality</span>
</h2>
<p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    From stunning websites to powerful management systems, we have everything you need.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-slate-900/50 rounded-3xl p-8 border border-slate-800 card-hover overflow-hidden slide-up">
<div className="absolute inset-0 gradient-ocean opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-16 h-16 rounded-2xl gradient-ocean flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white icon-float" data-lucide="globe"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3 tracking-tight">Websites for Hospitality</h3>
<p className="text-sm text-slate-400 mb-6">Professional, responsive websites designed for restaurants, hotels, and cafés.</p>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm text-slate-300">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i>
<span>Fully Responsive</span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i>
<span>Lightning Fast</span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i>
<span>SEO Optimized</span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i>
<span>Custom UI/UX</span>
</li>
</ul>
</div>
</div>

<div className="group relative bg-slate-900/50 rounded-3xl p-8 border border-slate-800 card-hover overflow-hidden slide-up" style={{animationDelay: '0.1s'}}>
<div className="absolute inset-0 gradient-fire opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-16 h-16 rounded-2xl gradient-fire flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white icon-pulse" data-lucide="qr-code"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3 tracking-tight">Website + QR Menu</h3>
<p className="text-sm text-slate-400 mb-6">Complete digital menu solution with QR code scanning for contactless ordering.</p>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm text-slate-300">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i>
<span>QR Code Scanning</span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i>
<span>Real-time Updates</span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i>
<span>Works Offline</span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i>
<span>Multi-language</span>
</li>
</ul>
</div>
</div>

<div className="group relative bg-slate-900/50 rounded-3xl p-8 border border-slate-800 card-hover overflow-hidden slide-up" style={{animationDelay: '0.2s'}}>
<div className="absolute top-4 right-4 px-3 py-1 rounded-full gradient-sunset text-xs font-semibold text-white z-20">
                        Coming Soon
                    </div>
<div className="absolute inset-0 gradient-aurora opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-16 h-16 rounded-2xl gradient-aurora flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white icon-bounce" data-lucide="monitor"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3 tracking-tight">Cloud POS System</h3>
<p className="text-sm text-slate-400 mb-6">Complete point of sale solution for billing, inventory, and staff management.</p>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm text-slate-300">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i>
<span>Smart Billing</span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i>
<span>KOT Management</span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i>
<span>Inventory Tracking</span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i>
<span>Staff Management</span>
</li>
</ul>
</div>
</div>

<div className="group relative bg-slate-900/50 rounded-3xl p-8 border border-slate-800 card-hover overflow-hidden slide-up" style={{animationDelay: '0.3s'}}>
<div className="absolute top-4 right-4 px-3 py-1 rounded-full gradient-sunset text-xs font-semibold text-white z-20">
                        Coming Soon
                    </div>
<div className="absolute inset-0 gradient-sunset opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-16 h-16 rounded-2xl gradient-sunset flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white icon-wiggle" data-lucide="building"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3 tracking-tight">PMS System</h3>
<p className="text-sm text-slate-400 mb-6">Complete property management for hotels with booking and check-in/out.</p>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm text-slate-300">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i>
<span>Room Management</span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i>
<span>Check-in/Check-out</span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i>
<span>Booking Engine</span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i>
<span>Expense Tracking</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden" id="features">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16 slide-up">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/30 mb-6">
<i className="w-4 h-4 text-cyan-400 icon-wiggle" data-lucide="zap"></i>
<span className="text-xs font-semibold text-cyan-200">Features</span>
</div>
<h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
<span className="text-white">Everything You Need</span><br/>
<span className="gradient-text">to Succeed</span>
</h2>
<p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    Powerful features designed to make your business operations smoother and more efficient.
                </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group p-6 rounded-2xl glass border border-slate-800 hover:border-purple-500/50 transition-all card-hover slide-up">
<div className="flex items-start gap-4">
<div className="w-14 h-14 rounded-xl gradient-main flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-white icon-wiggle" data-lucide="zap"></i>
</div>
<div>
<h4 className="font-semibold text-white mb-1">Lightning Fast</h4>
<p className="text-sm text-slate-400">Sub-second load times optimized for speed.</p>
</div>
</div>
</div>
<div className="group p-6 rounded-2xl glass border border-slate-800 hover:border-pink-500/50 transition-all card-hover slide-up" style={{animationDelay: '0.05s'}}>
<div className="flex items-start gap-4">
<div className="w-14 h-14 rounded-xl gradient-fire flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-white icon-float" data-lucide="layout-dashboard"></i>
</div>
<div>
<h4 className="font-semibold text-white mb-1">Clean Admin Panel</h4>
<p className="text-sm text-slate-400">Intuitive dashboard to manage everything.</p>
</div>
</div>
</div>
<div className="group p-6 rounded-2xl glass border border-slate-800 hover:border-cyan-500/50 transition-all card-hover slide-up" style={{animationDelay: '0.1s'}}>
<div className="flex items-start gap-4">
<div className="w-14 h-14 rounded-xl gradient-aurora flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-white icon-spin" data-lucide="refresh-cw"></i>
</div>
<div>
<h4 className="font-semibold text-white mb-1">Easy Updates</h4>
<p className="text-sm text-slate-400">Update menu and content in real-time.</p>
</div>
</div>
</div>
<div className="group p-6 rounded-2xl glass border border-slate-800 hover:border-green-500/50 transition-all card-hover slide-up" style={{animationDelay: '0.15s'}}>
<div className="flex items-start gap-4">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-white icon-pulse" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="font-semibold text-white mb-1">Secure Architecture</h4>
<p className="text-sm text-slate-400">Enterprise-grade security for your data.</p>
</div>
</div>
</div>
<div className="group p-6 rounded-2xl glass border border-slate-800 hover:border-blue-500/50 transition-all card-hover slide-up" style={{animationDelay: '0.2s'}}>
<div className="flex items-start gap-4">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-white icon-float" data-lucide="cloud"></i>
</div>
<div>
<h4 className="font-semibold text-white mb-1">Cloud Hosting</h4>
<p className="text-sm text-slate-400">99.9% uptime reliable infrastructure.</p>
</div>
</div>
</div>
<div className="group p-6 rounded-2xl glass border border-slate-800 hover:border-yellow-500/50 transition-all card-hover slide-up" style={{animationDelay: '0.25s'}}>
<div className="flex items-start gap-4">
<div className="w-14 h-14 rounded-xl gradient-sunset flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-white icon-bounce" data-lucide="database"></i>
</div>
<div>
<h4 className="font-semibold text-white mb-1">Auto Data Backup</h4>
<p className="text-sm text-slate-400">Daily automated backups keep data safe.</p>
</div>
</div>
</div>
<div className="group p-6 rounded-2xl glass border border-slate-800 hover:border-violet-500/50 transition-all card-hover slide-up" style={{animationDelay: '0.3s'}}>
<div className="flex items-start gap-4">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-white icon-wiggle" data-lucide="git-branch"></i>
</div>
<div>
<h4 className="font-semibold text-white mb-1">Multi-branch Support</h4>
<p className="text-sm text-slate-400">Manage multiple locations from one place.</p>
</div>
</div>
</div>
<div className="group p-6 rounded-2xl glass border border-slate-800 hover:border-rose-500/50 transition-all card-hover slide-up" style={{animationDelay: '0.35s'}}>
<div className="flex items-start gap-4">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-white icon-float" data-lucide="smartphone"></i>
</div>
<div>
<h4 className="font-semibold text-white mb-1">Mobile Responsive</h4>
<p className="text-sm text-slate-400">Perfect experience on all devices.</p>
</div>
</div>
</div>
<div className="group p-6 rounded-2xl glass border border-slate-800 hover:border-teal-500/50 transition-all card-hover slide-up" style={{animationDelay: '0.4s'}}>
<div className="flex items-start gap-4">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-white icon-pulse" data-lucide="headphones"></i>
</div>
<div>
<h4 className="font-semibold text-white mb-1">24/7 Support</h4>
<p className="text-sm text-slate-400">Round-the-clock support when you need it.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 gradient-main relative overflow-hidden">
<div className="absolute inset-0 bg-black/20"></div>
<div className="absolute top-0 left-0 w-full h-full">
<div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full spin-slow"></div>
<div className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-full spin-reverse"></div>
<div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/15 rounded-full spin-slow" style={{animationDuration: '15s'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16 slide-up">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur mb-6">
<i className="w-4 h-4 text-yellow-300 icon-bounce" data-lucide="trophy"></i>
<span className="text-xs font-semibold text-white">Why Choose Us</span>
</div>
<h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                    Built for Hospitality Success
                </h2>
<p className="text-lg text-white/80 max-w-2xl mx-auto">
                    We understand the hospitality industry and build solutions that address your real challenges.
                </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 card-hover slide-up">
<div className="w-20 h-20 mx-auto rounded-2xl bg-white/20 flex items-center justify-center mb-6">
<i className="w-10 h-10 text-white icon-pulse" data-lucide="shield"></i>
</div>
<h4 className="text-xl font-bold text-white mb-3">Enterprise Security</h4>
<p className="text-sm text-white/70">Bank-grade encryption to protect your business data.</p>
</div>
<div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 card-hover slide-up" style={{animationDelay: '0.1s'}}>
<div className="w-20 h-20 mx-auto rounded-2xl bg-white/20 flex items-center justify-center mb-6">
<i className="w-10 h-10 text-white icon-wiggle" data-lucide="cloud-lightning"></i>
</div>
<h4 className="text-xl font-bold text-white mb-3">Fast Cloud Hosting</h4>
<p className="text-sm text-white/70">High-performance servers for instant loading.</p>
</div>
<div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 card-hover slide-up" style={{animationDelay: '0.2s'}}>
<div className="w-20 h-20 mx-auto rounded-2xl bg-white/20 flex items-center justify-center mb-6">
<i className="w-10 h-10 text-white icon-bounce" data-lucide="trending-up"></i>
</div>
<h4 className="text-xl font-bold text-white mb-3">Business Growth</h4>
<p className="text-sm text-white/70">Tools to attract more customers and increase revenue.</p>
</div>
<div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 card-hover slide-up" style={{animationDelay: '0.3s'}}>
<div className="w-20 h-20 mx-auto rounded-2xl bg-white/20 flex items-center justify-center mb-6">
<i className="w-10 h-10 text-white icon-float" data-lucide="life-buoy"></i>
</div>
<h4 className="text-xl font-bold text-white mb-3">24/7 Support</h4>
<p className="text-sm text-white/70">Dedicated support team available around the clock.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
<div className="absolute inset-0 mesh-bg opacity-50"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16 slide-up">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-yellow-500/30 mb-6">
<i className="w-4 h-4 text-yellow-400 icon-bounce" data-lucide="store"></i>
<span className="text-xs font-semibold text-yellow-200">Industries</span>
</div>
<h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
<span className="text-white">Industries We</span>
<span className="gradient-text"> Serve</span>
</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="group bg-slate-900/50 rounded-2xl p-6 text-center border border-slate-800 hover:border-orange-500/50 card-hover slide-up">
<div className="w-16 h-16 mx-auto rounded-xl gradient-sunset flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white icon-wiggle" data-lucide="utensils"></i>
</div>
<p className="font-semibold text-white text-sm">Restaurants</p>
</div>
<div className="group bg-slate-900/50 rounded-2xl p-6 text-center border border-slate-800 hover:border-amber-500/50 card-hover slide-up" style={{animationDelay: '0.05s'}}>
<div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white icon-float" data-lucide="coffee"></i>
</div>
<p className="font-semibold text-white text-sm">Cafés</p>
</div>
<div className="group bg-slate-900/50 rounded-2xl p-6 text-center border border-slate-800 hover:border-indigo-500/50 card-hover slide-up" style={{animationDelay: '0.1s'}}>
<div className="w-16 h-16 mx-auto rounded-xl gradient-ocean flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white icon-pulse" data-lucide="building-2"></i>
</div>
<p className="font-semibold text-white text-sm">Hotels</p>
</div>
<div className="group bg-slate-900/50 rounded-2xl p-6 text-center border border-slate-800 hover:border-green-500/50 card-hover slide-up" style={{animationDelay: '0.15s'}}>
<div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white icon-bounce" data-lucide="store"></i>
</div>
<p className="font-semibold text-white text-sm">Dhabas</p>
</div>
<div className="group bg-slate-900/50 rounded-2xl p-6 text-center border border-slate-800 hover:border-purple-500/50 card-hover slide-up" style={{animationDelay: '0.2s'}}>
<div className="w-16 h-16 mx-auto rounded-xl gradient-neon flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white icon-spin" data-lucide="layout-grid"></i>
</div>
<p className="font-semibold text-white text-sm">Food Courts</p>
</div>
<div className="group bg-slate-900/50 rounded-2xl p-6 text-center border border-slate-800 hover:border-pink-500/50 card-hover slide-up" style={{animationDelay: '0.25s'}}>
<div className="w-16 h-16 mx-auto rounded-xl gradient-fire flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white icon-wiggle" data-lucide="cake"></i>
</div>
<p className="font-semibold text-white text-sm">Bakeries</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16 slide-up">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-pink-500/30 mb-6">
<i className="w-4 h-4 text-pink-400 icon-bounce" data-lucide="message-circle"></i>
<span className="text-xs font-semibold text-pink-200">Testimonials</span>
</div>
<h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
<span className="text-white">What Our Clients</span>
<span className="gradient-text"> Say</span>
</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700 card-hover slide-up">
<div className="flex items-center gap-1 mb-4">
<i className="w-5 h-5 text-yellow-400 fill-yellow-400 icon-pulse" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400 icon-pulse" data-lucide="star" style={{animationDelay: '0.1s'}}></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400 icon-pulse" data-lucide="star" style={{animationDelay: '0.2s'}}></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400 icon-pulse" data-lucide="star" style={{animationDelay: '0.3s'}}></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400 icon-pulse" data-lucide="star" style={{animationDelay: '0.4s'}}></i>
</div>
<p className="text-slate-300 mb-6 leading-relaxed">"MyPMS transformed our restaurant. The QR menu system alone saved us thousands on printing costs!"</p>
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full gradient-sunset flex items-center justify-center text-white font-bold text-lg">RK</div>
<div>
<p className="font-semibold text-white">Rajesh Kumar</p>
<p className="text-sm text-slate-400">Spice Garden, Delhi</p>
</div>
</div>
</div>
<div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700 card-hover slide-up" style={{animationDelay: '0.1s'}}>
<div className="flex items-center gap-1 mb-4">
<i className="w-5 h-5 text-yellow-400 fill-yellow-400 icon-pulse" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400 icon-pulse" data-lucide="star" style={{animationDelay: '0.1s'}}></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400 icon-pulse" data-lucide="star" style={{animationDelay: '0.2s'}}></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400 icon-pulse" data-lucide="star" style={{animationDelay: '0.3s'}}></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400 icon-pulse" data-lucide="star" style={{animationDelay: '0.4s'}}></i>
</div>
<p className="text-slate-300 mb-6 leading-relaxed">"Professional team and the website increased our direct bookings significantly. Highly recommended!"</p>
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full gradient-ocean flex items-center justify-center text-white font-bold text-lg">PS</div>
<div>
<p className="font-semibold text-white">Priya Sharma</p>
<p className="text-sm text-slate-400">Sunrise Hotel, Jaipur</p>
</div>
</div>
</div>
<div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700 card-hover slide-up" style={{animationDelay: '0.2s'}}>
<div className="flex items-center gap-1 mb-4">
<i className="w-5 h-5 text-yellow-400 fill-yellow-400 icon-pulse" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400 icon-pulse" data-lucide="star" style={{animationDelay: '0.1s'}}></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400 icon-pulse" data-lucide="star" style={{animationDelay: '0.2s'}}></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400 icon-pulse" data-lucide="star" style={{animationDelay: '0.3s'}}></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400 icon-pulse" data-lucide="star" style={{animationDelay: '0.4s'}}></i>
</div>
<p className="text-slate-300 mb-6 leading-relaxed">"As a café owner, I needed something simple yet powerful. MyPMS delivered exactly that!"</p>
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full gradient-aurora flex items-center justify-center text-white font-bold text-lg">AM</div>
<div>
<p className="font-semibold text-white">Amit Mehta</p>
<p className="text-sm text-slate-400">Bean &amp; Brew, Mumbai</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden mesh-bg" id="pricing">
<div className="absolute inset-0 bg-slate-950/80"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16 slide-up">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/30 mb-6">
<i className="w-4 h-4 text-green-400 icon-bounce" data-lucide="tag"></i>
<span className="text-xs font-semibold text-green-200">Pricing</span>
</div>
<h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
<span className="text-white">Simple, Transparent</span>
<span className="gradient-text"> Pricing</span>
</h2>
<p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    Choose the plan that fits your business needs. No hidden fees.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-slate-900/80 rounded-3xl p-8 border border-slate-800 card-hover slide-up">
<div className="text-center mb-8">
<div className="w-16 h-16 mx-auto rounded-2xl gradient-ocean flex items-center justify-center mb-4">
<i className="w-8 h-8 text-white icon-float" data-lucide="rocket"></i>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
<p className="text-sm text-slate-400 mb-4">Perfect for small businesses</p>
<div className="flex items-baseline justify-center gap-1">
<span className="text-5xl font-bold gradient-text tracking-tight">₹9,999</span>
<span className="text-slate-400">/year</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-green-400 flex-shrink-0" data-lucide="check-circle"></i>
<span>Professional Website</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-green-400 flex-shrink-0" data-lucide="check-circle"></i>
<span>Mobile Responsive</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-green-400 flex-shrink-0" data-lucide="check-circle"></i>
<span>Basic SEO</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-green-400 flex-shrink-0" data-lucide="check-circle"></i>
<span>SSL Certificate</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-500">
<i className="w-5 h-5 flex-shrink-0" data-lucide="x-circle"></i>
<span>QR Menu System</span>
</li>
</ul>
<a className="block w-full py-4 text-center text-sm font-semibold text-white rounded-xl glass border border-slate-700 hover:bg-white/10 transition-all" href="#contact">
                        Get Started
                    </a>
</div>

<div className="relative bg-slate-900/80 rounded-3xl p-8 border-2 border-purple-500/50 card-hover slide-up scale-105" style={{animationDelay: '0.1s'}}>
<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 gradient-main rounded-full text-white text-xs font-bold">
                        🔥 Most Popular
                    </div>
<div className="text-center mb-8">
<div className="w-16 h-16 mx-auto rounded-2xl gradient-main flex items-center justify-center mb-4">
<i className="w-8 h-8 text-white icon-wiggle" data-lucide="crown"></i>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
<p className="text-sm text-slate-400 mb-4">Best for growing businesses</p>
<div className="flex items-baseline justify-center gap-1">
<span className="text-5xl font-bold gradient-text tracking-tight">₹19,999</span>
<span className="text-slate-400">/year</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-green-400 flex-shrink-0" data-lucide="check-circle"></i>
<span>Professional Website</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-green-400 flex-shrink-0" data-lucide="check-circle"></i>
<span>QR Menu System</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-green-400 flex-shrink-0" data-lucide="check-circle"></i>
<span>Admin Panel</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-green-400 flex-shrink-0" data-lucide="check-circle"></i>
<span>Real-time Updates</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-green-400 flex-shrink-0" data-lucide="check-circle"></i>
<span>Priority Support</span>
</li>
</ul>
<a className="block w-full py-4 text-center text-sm font-semibold text-white rounded-xl gradient-main hover:opacity-90 transition-all btn-glow" href="#contact">
                        Get Started
                    </a>
</div>

<div className="bg-slate-900/80 rounded-3xl p-8 border border-slate-800 card-hover slide-up" style={{animationDelay: '0.2s'}}>
<div className="text-center mb-8">
<div className="w-16 h-16 mx-auto rounded-2xl gradient-sunset flex items-center justify-center mb-4">
<i className="w-8 h-8 text-white icon-pulse" data-lucide="building"></i>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
<p className="text-sm text-slate-400 mb-4">For large businesses</p>
<div className="flex items-baseline justify-center gap-1">
<span className="text-5xl font-bold gradient-text tracking-tight">Custom</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-green-400 flex-shrink-0" data-lucide="check-circle"></i>
<span>Everything in Pro</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-green-400 flex-shrink-0" data-lucide="check-circle"></i>
<span>Multi-branch Support</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-green-400 flex-shrink-0" data-lucide="check-circle"></i>
<span>Custom Integrations</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-green-400 flex-shrink-0" data-lucide="check-circle"></i>
<span>Dedicated Manager</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-green-400 flex-shrink-0" data-lucide="check-circle"></i>
<span>SLA Guarantee</span>
</li>
</ul>
<a className="block w-full py-4 text-center text-sm font-semibold text-white rounded-xl glass border border-slate-700 hover:bg-white/10 transition-all" href="#contact">
                        Contact Sales
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden" id="contact">
<div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">
<div className="slide-left">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 mb-6">
<i className="w-4 h-4 text-purple-400 icon-bounce" data-lucide="mail"></i>
<span className="text-xs font-semibold text-purple-200">Contact Us</span>
</div>
<h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
<span className="text-white">Ready to Transform</span><br/>
<span className="gradient-text">Your Business?</span>
</h2>
<p className="text-lg text-slate-300 mb-10 leading-relaxed">
                        Get in touch for a free demo. We'd love to help you take your hospitality business to the next level.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4 p-4 rounded-2xl glass border border-purple-500/20">
<div className="w-14 h-14 rounded-xl gradient-main flex items-center justify-center flex-shrink-0">
<i className="w-7 h-7 text-white icon-wiggle" data-lucide="phone"></i>
</div>
<div>
<h4 className="font-semibold text-white mb-1">Phone</h4>
<p className="text-slate-300">+91 98765 43210</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl glass border border-pink-500/20">
<div className="w-14 h-14 rounded-xl gradient-fire flex items-center justify-center flex-shrink-0">
<i className="w-7 h-7 text-white icon-float" data-lucide="mail"></i>
</div>
<div>
<h4 className="font-semibold text-white mb-1">Email</h4>
<p className="text-slate-300">hello@mypmssolutions.com</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl glass border border-cyan-500/20">
<div className="w-14 h-14 rounded-xl gradient-aurora flex items-center justify-center flex-shrink-0">
<i className="w-7 h-7 text-white icon-bounce" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="font-semibold text-white mb-1">Office</h4>
<p className="text-slate-300">123 Tech Park, Sector 62, Noida</p>
</div>
</div>
</div>
</div>
<div className="slide-right">
<div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700">
<h3 className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-2">
<i className="w-6 h-6 text-yellow-400 icon-wiggle" data-lucide="sparkles"></i>
                            Get Free Demo
                        </h3>
<form className="space-y-5">
<div>
<label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
<input className="w-full px-4 py-4 rounded-xl bg-slate-900/50 border border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-slate-500" placeholder="Enter your name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
<input className="w-full px-4 py-4 rounded-xl bg-slate-900/50 border border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-slate-500" placeholder="Enter your email" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
<input className="w-full px-4 py-4 rounded-xl bg-slate-900/50 border border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-slate-500" placeholder="Enter your phone" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-2">Business Type</label>
<select className="w-full px-4 py-4 rounded-xl bg-slate-900/50 border border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white">
<option className="bg-slate-900" value="">Select your business type</option>
<option className="bg-slate-900" value="restaurant">Restaurant</option>
<option className="bg-slate-900" value="hotel">Hotel</option>
<option className="bg-slate-900" value="cafe">Café</option>
<option className="bg-slate-900" value="dhaba">Dhaba</option>
<option className="bg-slate-900" value="other">Other</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
<textarea className="w-full px-4 py-4 rounded-xl bg-slate-900/50 border border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-slate-500 resize-none" placeholder="Tell us about your requirements" rows="4"></textarea>
</div>
<button className="w-full py-4 text-base font-bold text-white rounded-xl gradient-main hover:opacity-90 transition-all btn-glow pulse-glow flex items-center justify-center gap-2" type="submit">
<span>Request Free Demo</span>
<i className="w-5 h-5" data-lucide="send"></i>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 py-16 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 rounded-2xl gradient-main flex items-center justify-center pulse-glow">
<span className="text-white font-bold text-xl">M</span>
</div>
<span className="font-bold text-xl tracking-tight gradient-text">MyPMS Solutions</span>
</div>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">
                        Empowering hospitality businesses with smart digital solutions.
                    </p>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-xl glass border border-slate-700 flex items-center justify-center hover:border-purple-500/50 transition-colors group" href="#">
<i className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 rounded-xl glass border border-slate-700 flex items-center justify-center hover:border-pink-500/50 transition-colors group" href="#">
<i className="w-5 h-5 text-slate-400 group-hover:text-pink-400 transition-colors" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-xl glass border border-slate-700 flex items-center justify-center hover:border-cyan-500/50 transition-colors group" href="#">
<i className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 rounded-xl glass border border-slate-700 flex items-center justify-center hover:border-blue-500/50 transition-colors group" href="#">
<i className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" data-lucide="linkedin"></i>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-white mb-6">Services</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-purple-400 transition-colors" href="#">Website Development</a></li>
<li><a className="text-sm text-slate-400 hover:text-purple-400 transition-colors" href="#">QR Menu System</a></li>
<li><a className="text-sm text-slate-400 hover:text-purple-400 transition-colors" href="#">Cloud POS</a></li>
<li><a className="text-sm text-slate-400 hover:text-purple-400 transition-colors" href="#">Property Management</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-6">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-purple-400 transition-colors" href="#about">About Us</a></li>
<li><a className="text-sm text-slate-400 hover:text-purple-400 transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-slate-400 hover:text-purple-400 transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-slate-400 hover:text-purple-400 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-6">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-purple-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-slate-400 hover:text-purple-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-slate-400 hover:text-purple-400 transition-colors" href="#">Refund Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-500">© 2024 MyPMS Solutions Private Limited. All rights reserved.</p>
<p className="text-sm text-slate-500 flex items-center gap-2">
                    Made with <i className="w-4 h-4 text-red-500 fill-red-500 icon-pulse" data-lucide="heart"></i> in India
                </p>
</div>
</div>
</footer>


    </>
  );
}
