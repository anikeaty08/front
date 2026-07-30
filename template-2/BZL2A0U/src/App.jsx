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
      
        // Initialize Lucide icons
        lucide.createIcons();
        
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);
        
        // Observe all animation elements
        document.querySelectorAll('.slide-in, .fade-up, .scale-in').forEach(el => {
            observer.observe(el);
        });
        
        // Counter animation
        function animateCounter(element, target, duration = 2000) {
            let start = 0;
            const increment = target / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    element.textContent = target;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(start);
                }
            }, 16);
        }
        
        // Animate counters when they come into view
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.target);
                    animateCounter(entry.target, target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.stat-counter').forEach(counter => {
            counterObserver.observe(counter);
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
        
        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.md\\:hidden button');
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'md:hidden fixed top-20 left-0 right-0 bg-white shadow-lg z-40 transform -translate-y-full transition-transform duration-300';
        mobileMenu.innerHTML = `
            <div class="px-4 py-6 space-y-4">
                <a href="#home" class="block py-2 text-slate-900 hover:text-slate-600">Home</a>
                <a href="#services" class="block py-2 text-slate-900 hover:text-slate-600">Services</a>
                <a href="#portfolio" class="block py-2 text-slate-900 hover:text-slate-600">Portfolio</a>
                <a href="#about" class="block py-2 text-slate-900 hover:text-slate-600">About</a>
                <a href="#contact" class="block py-2 text-slate-900 hover:text-slate-600">Contact</a>
            </div>
        `;
        document.body.appendChild(mobileMenu);
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('-translate-y-full');
        });
        
        // Form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
        
        // Parallax effect for images
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.image-parallax');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
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
      

<nav className="fixed top-0 w-full z-50 nav-blur">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex items-center space-x-4">
<div className="w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-600 rounded-lg flex items-center justify-center shadow-lg">
<span className="text-white font-bold text-lg">PP</span>
</div>
<div>
<div className="text-xl font-semibold text-gradient">Pops Prime</div>
<div className="text-xs text-slate-500 tracking-wide">CONTRACTING</div>
</div>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium hover:text-slate-900 transition-colors duration-200 relative py-2" href="#home">
                        Home
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 hover:w-full"></span>
</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 relative py-2" href="#services">
                        Services
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 hover:w-full"></span>
</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 relative py-2" href="#portfolio">
                        Portfolio
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 hover:w-full"></span>
</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 relative py-2" href="#about">
                        About
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 hover:w-full"></span>
</a>
<a className="interactive-btn bg-slate-900 text-white px-6 py-3 rounded-lg text-sm font-medium" href="#contact">
                        Get Quote
                    </a>
</div>
<button className="md:hidden p-2">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="min-h-screen parallax-bg relative overflow-hidden" id="home">
<div className="floating-icons">
<i data-lucide="hammer"></i>
<i data-lucide="home"></i>
<i data-lucide="wrench"></i>
<i data-lucide="building"></i>
</div>
<div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
<div className="space-y-8">
<div className="slide-in">
<div className="hero-badge inline-flex items-center space-x-2 rounded-full px-4 py-2 mb-6">
<div className="w-2 h-2 bg-green-400 rounded-full pulse-dot"></div>
<span className="text-sm font-medium text-white">Premium Construction Services</span>
</div>
<h1 className="hero-text text-6xl md:text-8xl font-bold leading-tight tracking-tight">
                            Building<br />
<span className="text-white/90">Dreams</span><br />
                            Into Reality
                        </h1>
</div>
<div className="slide-in delay-200">
<p className="hero-subtext text-xl max-w-lg font-light leading-relaxed">
                            Transform your space with our award-winning construction and renovation services. From concept to completion, we deliver excellence.
                        </p>
</div>
<div className="slide-in delay-300">
<div className="flex flex-col sm:flex-row gap-4">
<button className="interactive-btn bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 shadow-lg">
<span>Start Your Project</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<button className="interactive-btn border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 backdrop-blur-sm">
                                View Portfolio
                            </button>
</div>
</div>
<div className="slide-in delay-400">
<div className="flex items-center space-x-12 pt-8">
<div className="text-center">
<div className="text-4xl font-bold stat-counter" data-target="150">0</div>
<div className="text-sm text-white/80">Projects</div>
</div>
<div className="text-center">
<div className="text-4xl font-bold stat-counter" data-target="15">0</div>
<div className="text-sm text-white/80">Years</div>
</div>
<div className="text-center">
<div className="text-4xl font-bold stat-counter" data-target="98">0</div>
<div className="text-sm text-white/80">% Satisfied</div>
</div>
</div>
</div>
</div>
<div className="scale-in delay-500">
<div className="relative">
<div className="glass-card p-8 rounded-2xl floating-element">
<img alt="Modern home interior" className="w-full h-80 object-cover rounded-lg" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" />
<div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-2xl">
<div className="flex items-center space-x-3">
<div className="w-3 h-3 bg-green-400 rounded-full pulse-dot"></div>
<div className="text-slate-900">
<div className="text-sm font-semibold">Currently Building</div>
<div className="text-xs text-slate-500">3 Active Projects</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<div className="fade-up">
<div className="inline-flex items-center space-x-2 bg-slate-900 text-white rounded-full px-4 py-2 mb-6">
<i className="w-4 h-4" data-lucide="star"></i>
<span className="text-sm font-medium">Our Services</span>
</div>
<h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">Expert Craftsmanship</h2>
<p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
                        We specialize in transforming spaces with precision, quality, and unmatched attention to detail.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="service-hover bg-white rounded-2xl p-8 shadow-sm morphing-card">
<div className="service-content">
<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
<i className="w-8 h-8 text-white" data-lucide="chef-hat"></i>
</div>
<h3 className="text-2xl font-bold mb-4">Kitchen Remodeling</h3>
<p className="text-slate-600 mb-6 leading-relaxed">
                            Create the heart of your home with custom kitchen designs that blend functionality with stunning aesthetics.
                        </p>
<div className="flex items-center text-sm font-semibold text-blue-600">
<span>Explore Kitchens</span>
<i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</div>
</div>
</div>
<div className="service-hover bg-white rounded-2xl p-8 shadow-sm morphing-card">
<div className="service-content">
<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
<i className="w-8 h-8 text-white" data-lucide="bath"></i>
</div>
<h3 className="text-2xl font-bold mb-4">Bathroom Renovation</h3>
<p className="text-slate-600 mb-6 leading-relaxed">
                            Transform your bathroom into a luxurious spa-like retreat with premium fixtures and elegant design.
                        </p>
<div className="flex items-center text-sm font-semibold text-green-600">
<span>View Bathrooms</span>
<i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</div>
</div>
</div>
<div className="service-hover bg-white rounded-2xl p-8 shadow-sm morphing-card">
<div className="service-content">
<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
<i className="w-8 h-8 text-white" data-lucide="home"></i>
</div>
<h3 className="text-2xl font-bold mb-4">Whole Home Renovation</h3>
<p className="text-slate-600 mb-6 leading-relaxed">
                            Complete home transformations that enhance every aspect of your living space and lifestyle.
                        </p>
<div className="flex items-center text-sm font-semibold text-purple-600">
<span>See Projects</span>
<i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</div>
</div>
</div>
<div className="service-hover bg-white rounded-2xl p-8 shadow-sm morphing-card">
<div className="service-content">
<div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
<i className="w-8 h-8 text-white" data-lucide="trees"></i>
</div>
<h3 className="text-2xl font-bold mb-4">Outdoor Spaces</h3>
<p className="text-slate-600 mb-6 leading-relaxed">
                            Extend your living space outdoors with custom decks, patios, and entertainment areas.
                        </p>
<div className="flex items-center text-sm font-semibold text-orange-600">
<span>Outdoor Gallery</span>
<i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</div>
</div>
</div>
<div className="service-hover bg-white rounded-2xl p-8 shadow-sm morphing-card">
<div className="service-content">
<div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
<i className="w-8 h-8 text-white" data-lucide="hammer"></i>
</div>
<h3 className="text-2xl font-bold mb-4">Custom Carpentry</h3>
<p className="text-slate-600 mb-6 leading-relaxed">
                            Skilled craftsmen creating custom built-ins, cabinetry, and millwork tailored to your exact specifications.
                        </p>
<div className="flex items-center text-sm font-semibold text-red-600">
<span>View Carpentry</span>
<i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</div>
</div>
</div>
<div className="service-hover bg-white rounded-2xl p-8 shadow-sm morphing-card">
<div className="service-content">
<div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
<i className="w-8 h-8 text-white" data-lucide="paint-bucket"></i>
</div>
<h3 className="text-2xl font-bold mb-4">Interior Design</h3>
<p className="text-slate-600 mb-6 leading-relaxed">
                            Complete interior transformations with professional design consultation and premium finishing touches.
                        </p>
<div className="flex items-center text-sm font-semibold text-teal-600">
<span>Design Gallery</span>
<i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="portfolio">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<div className="fade-up">
<div className="inline-flex items-center space-x-2 bg-slate-900 text-white rounded-full px-4 py-2 mb-6">
<i className="w-4 h-4" data-lucide="camera"></i>
<span className="text-sm font-medium">Our Work</span>
</div>
<h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">Recent Projects</h2>
<p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
                        Explore our portfolio of completed projects showcasing our commitment to quality and innovation.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="morphing-card bg-white rounded-2xl overflow-hidden shadow-sm">
<div className="relative overflow-hidden">
<img alt="Modern kitchen renovation" className="w-full h-64 object-cover image-parallax" src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<div className="text-sm font-semibold">Kitchen Renovation</div>
<div className="text-xs opacity-80">Modern Family Home</div>
</div>
</div>
<div className="p-6">
<p className="text-slate-600 text-sm leading-relaxed">
                            Complete kitchen transformation featuring custom cabinetry, quartz countertops, and premium appliances.
                        </p>
</div>
</div>
<div className="morphing-card bg-white rounded-2xl overflow-hidden shadow-sm">
<div className="relative overflow-hidden">
<img alt="Luxury bathroom renovation" className="w-full h-64 object-cover image-parallax" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<div className="text-sm font-semibold">Luxury Bathroom</div>
<div className="text-xs opacity-80">Spa-Like Retreat</div>
</div>
</div>
<div className="p-6">
<p className="text-slate-600 text-sm leading-relaxed">
                            Luxurious bathroom renovation with marble finishes, heated floors, and premium fixtures for ultimate comfort.
                        </p>
</div>
</div>
<div className="morphing-card bg-white rounded-2xl overflow-hidden shadow-sm">
<div className="relative overflow-hidden">
<img alt="Outdoor deck renovation" className="w-full h-64 object-cover image-parallax" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<div className="text-sm font-semibold">Outdoor Deck</div>
<div className="text-xs opacity-80">Entertainment Space</div>
</div>
</div>
<div className="p-6">
<p className="text-slate-600 text-sm leading-relaxed">
                            Custom outdoor deck with integrated seating, fire pit, and weather-resistant materials for year-round enjoyment.
                        </p>
</div>
</div>
<div className="morphing-card bg-white rounded-2xl overflow-hidden shadow-sm">
<div className="relative overflow-hidden">
<img alt="Home office renovation" className="w-full h-64 object-cover image-parallax" src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<div className="text-sm font-semibold">Home Office</div>
<div className="text-xs opacity-80">Productive Workspace</div>
</div>
</div>
<div className="p-6">
<p className="text-slate-600 text-sm leading-relaxed">
                            Modern home office with custom built-ins, optimal lighting, and ergonomic design for maximum productivity.
                        </p>
</div>
</div>
<div className="morphing-card bg-white rounded-2xl overflow-hidden shadow-sm">
<div className="relative overflow-hidden">
<img alt="Living room renovation" className="w-full h-64 object-cover image-parallax" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<div className="text-sm font-semibold">Living Room</div>
<div className="text-xs opacity-80">Open Concept</div>
</div>
</div>
<div className="p-6">
<p className="text-slate-600 text-sm leading-relaxed">
                            Open-concept living space with vaulted ceilings, custom millwork, and seamless indoor-outdoor flow.
                        </p>
</div>
</div>
<div className="morphing-card bg-white rounded-2xl overflow-hidden shadow-sm">
<div className="relative overflow-hidden">
<img alt="Basement renovation" className="w-full h-64 object-cover image-parallax" src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<div className="text-sm font-semibold">Basement Finish</div>
<div className="text-xs opacity-80">Family Entertainment</div>
</div>
</div>
<div className="p-6">
<p className="text-slate-600 text-sm leading-relaxed">
                            Complete basement transformation with home theater, bar area, and guest suite for ultimate entertainment.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="fade-up">
<div className="inline-flex items-center space-x-2 bg-slate-900 text-white rounded-full px-4 py-2 mb-6">
<i className="w-4 h-4" data-lucide="award"></i>
<span className="text-sm font-medium">About Us</span>
</div>
<h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">15 Years of Excellence</h2>
<p className="text-xl text-slate-600 mb-8 font-light leading-relaxed">
                        Pops Prime Contracting has been transforming homes and commercial spaces with unparalleled craftsmanship and attention to detail. Our team of skilled professionals brings your vision to life with quality materials and innovative solutions.
                    </p>
<div className="space-y-6">
<div className="flex items-start space-x-4">
<div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
<i className="w-4 h-4 text-white" data-lucide="check"></i>
</div>
<div>
<h3 className="text-lg font-semibold mb-1">Licensed & Insured</h3>
<p className="text-slate-600">Fully licensed contractors with comprehensive insurance coverage for your peace of mind.</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
<i className="w-4 h-4 text-white" data-lucide="shield"></i>
</div>
<div>
<h3 className="text-lg font-semibold mb-1">Quality Guarantee</h3>
<p className="text-slate-600">We stand behind our work with comprehensive warranties and ongoing support.</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
<i className="w-4 h-4 text-white" data-lucide="users"></i>
</div>
<div>
<h3 className="text-lg font-semibold mb-1">Expert Team</h3>
<p className="text-slate-600">Skilled craftsmen with decades of combined experience in construction and renovation.</p>
</div>
</div>
</div>
</div>
<div className="scale-in delay-300">
<div className="relative">
<img alt="Construction team at work" className="w-full h-96 object-cover rounded-2xl shadow-lg" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" />
<div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl">
<div className="flex items-center space-x-4">
<div className="w-16 h-16 bg-gradient-to-br from-slate-900 to-slate-600 rounded-xl flex items-center justify-center">
<i className="w-8 h-8 text-white" data-lucide="trophy"></i>
</div>
<div>
<div className="text-2xl font-bold text-slate-900">150+</div>
<div className="text-sm text-slate-600">Projects Completed</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<div className="fade-up">
<div className="inline-flex items-center space-x-2 bg-slate-900 text-white rounded-full px-4 py-2 mb-6">
<i className="w-4 h-4" data-lucide="heart"></i>
<span className="text-sm font-medium">Testimonials</span>
</div>
<h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">What Our Clients Say</h2>
<p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
                        Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="testimonial-card rounded-2xl p-8 shadow-sm">
<div className="flex items-center mb-6">
<div className="flex space-x-1">
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
</div>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">
                        "The team at Pops Prime exceeded our expectations. Our kitchen renovation was completed on time and within budget. The attention to detail was remarkable!"
                    </p>
<div className="flex items-center">
<img alt="Sarah Johnson" className="w-12 h-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div>
<div className="font-semibold">Sarah Johnson</div>
<div className="text-sm text-slate-500">Homeowner</div>
</div>
</div>
</div>
<div className="testimonial-card rounded-2xl p-8 shadow-sm">
<div className="flex items-center mb-6">
<div className="flex space-x-1">
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
</div>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">
                        "Professional, reliable, and skilled. They transformed our entire home and made the process stress-free. Highly recommend their services!"
                    </p>
<div className="flex items-center">
<img alt="Michael Chen" className="w-12 h-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" />
<div>
<div className="font-semibold">Michael Chen</div>
<div className="text-sm text-slate-500">Business Owner</div>
</div>
</div>
</div>
<div className="testimonial-card rounded-2xl p-8 shadow-sm">
<div className="flex items-center mb-6">
<div className="flex space-x-1">
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-current" data-lucide="star"></i>
</div>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">
                        "Amazing craftsmanship and customer service. They turned our basement into a beautiful family space. Couldn't be happier with the results!"
                    </p>
<div className="flex items-center">
<img alt="Emily Rodriguez" className="w-12 h-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" />
<div>
<div className="font-semibold">Emily Rodriguez</div>
<div className="text-sm text-slate-500">Interior Designer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 parallax-bg relative overflow-hidden" id="contact">
<div className="floating-icons">
<i data-lucide="phone"></i>
<i data-lucide="mail"></i>
<i data-lucide="map-pin"></i>
<i data-lucide="calendar"></i>
</div>
<div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<div className="fade-up">
<div className="hero-badge inline-flex items-center space-x-2 rounded-full px-4 py-2 mb-6">
<i className="w-4 h-4" data-lucide="phone"></i>
<span className="text-sm font-medium text-white">Get In Touch</span>
</div>
<h2 className="text-5xl md:text-7xl font-bold mb-6 hero-text">Let's Build Together</h2>
<p className="text-xl hero-subtext max-w-3xl mx-auto font-light">
                        Ready to transform your space? Contact us today for a free consultation and quote.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="fade-up delay-200">
<div className="contact-form rounded-2xl p-8">
<h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="form-field">
<input placeholder="First Name" required type="text" />
</div>
<div className="form-field">
<input placeholder="Last Name" required type="text" />
</div>
</div>
<div className="form-field">
<input placeholder="Email Address" required type="email" />
</div>
<div className="form-field">
<input placeholder="Phone Number" required type="tel" />
</div>
<div className="form-field">
<textarea placeholder="Tell us about your project..." required rows="4"></textarea>
</div>
<button className="interactive-btn w-full bg-white text-slate-900 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors" type="submit">
                                Send Message
                            </button>
</form>
</div>
</div>
<div className="fade-up delay-400">
<div className="space-y-8">
<div className="glass-card rounded-2xl p-6">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="phone"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-white">Phone</h3>
<p className="text-white/80">(555) 123-4567</p>
</div>
</div>
</div>
<div className="glass-card rounded-2xl p-6">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="mail"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-white">Email</h3>
<p className="text-white/80">info@popsprime.com</p>
</div>
</div>
</div>
<div className="glass-card rounded-2xl p-6">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="map-pin"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-white">Address</h3>
<p className="text-white/80">123 Builder Street<br />Construction City, CC 12345</p>
</div>
</div>
</div>
<div className="glass-card rounded-2xl p-6">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="clock"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-white">Hours</h3>
<p className="text-white/80">Mon - Fri: 7AM - 6PM<br />Sat: 8AM - 4PM</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center space-x-4 mb-6">
<div className="w-12 h-12 bg-gradient-to-br from-white to-gray-200 rounded-lg flex items-center justify-center">
<span className="text-slate-900 font-bold text-xl">PP</span>
</div>
<div>
<div className="text-2xl font-bold">Pops Prime</div>
<div className="text-sm text-gray-400 tracking-wide">CONTRACTING</div>
</div>
</div>
<p className="text-gray-300 mb-6 max-w-md">
                        Building dreams into reality with over 15 years of experience in construction and renovation. Quality craftsmanship guaranteed.
                    </p>
<div className="flex space-x-4">
<a className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</div>
<div>
<h3 className="text-lg font-semibold mb-4">Services</h3>
<ul className="space-y-2 text-gray-300">
<li><a className="hover:text-white transition-colors" href="#">Kitchen Remodeling</a></li>
<li><a className="hover:text-white transition-colors" href="#">Bathroom Renovation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Home Renovation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Custom Carpentry</a></li>
<li><a className="hover:text-white transition-colors" href="#">Outdoor Spaces</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
<ul className="space-y-2 text-gray-300">
<li><a className="hover:text-white transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#portfolio">Portfolio</a></li>
<li><a className="hover:text-white transition-colors" href="#about">About</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
<p>© 2024 Pops Prime Contracting. All rights reserved. | Licensed & Insured</p>
</div>
</div>
</footer>


    </>
  );
}
