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
        
        // Scroll reveal animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Trigger counter animation
                    if (entry.target.classList.contains('counter')) {
                        animateCounter(entry.target);
                    }
                    
                    // Trigger split text animation
                    if (entry.target.classList.contains('split-text')) {
                        entry.target.classList.add('animate');
                    }
                    
                    // Trigger image reveal
                    if (entry.target.classList.contains('image-reveal')) {
                        entry.target.classList.add('revealed');
                    }
                }
            });
        }, observerOptions);
        
        // Observe all reveal elements
        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
        
        // Counter animation
        function animateCounter(element) {
            const target = parseInt(element.dataset.target);
            const duration = 2000;
            const start = performance.now();
            
            function update(currentTime) {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);
                const current = Math.floor(progress * target);
                
                element.textContent = current;
                
                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            }
            
            requestAnimationFrame(update);
        }
        
        // Navigation indicator
        const navLinks = document.querySelectorAll('.nav-link');
        const indicator = document.querySelector('.nav-indicator');
        
        function updateIndicator(activeLink) {
            const linkRect = activeLink.getBoundingClientRect();
            const navRect = activeLink.closest('nav').getBoundingClientRect();
            
            indicator.style.width = `${linkRect.width}px`;
            indicator.style.left = `${linkRect.left - navRect.left}px`;
        }
        
        // Initialize indicator position
        if (navLinks.length > 0) {
            updateIndicator(navLinks[0]);
        }
        
        // Update indicator on hover
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                updateIndicator(link);
            });
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
        
        // Form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !phone || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send the data to your server
            alert('Thank you for your message! We\'ll get back to you soon.');
            this.reset();
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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center space-x-4">
<div className="w-8 h-8 bg-slate-900 rounded-sm flex items-center justify-center">
<span className="text-white font-bold text-sm">PP</span>
</div>
<span className="text-xl font-medium">Pops Prime</span>
</div>
<nav className="hidden md:flex items-center space-x-8 relative">
<a className="text-sm font-medium hover:text-slate-900 transition-colors duration-200 py-2 px-4 relative nav-link" href="#home">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 py-2 px-4 relative nav-link" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 py-2 px-4 relative nav-link" href="#portfolio">Portfolio</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 py-2 px-4 relative nav-link" href="#process">Process</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 py-2 px-4 relative nav-link" href="#contact">Contact</a>
<div className="nav-indicator w-12 h-0.5"></div>
</nav>
<button className="md:hidden p-2">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</header>

<section className="min-h-screen morphing-bg relative overflow-hidden" id="home">
<div className="grid-pattern absolute inset-0 opacity-50"></div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
<div className="space-y-8">
<div className="reveal">
<h1 className="text-6xl md:text-8xl font-light leading-tight">
<span className="split-text">
<span>Crafting</span>
</span><br />
<span className="split-text">
<span className="text-clip">Excellence</span>
</span>
</h1>
</div>
<div className="reveal stagger-1">
<p className="text-xl text-slate-600 max-w-lg font-light leading-relaxed">
                            Premium construction and renovation services that transform your vision into architectural masterpieces in Santa Barbara.
                        </p>
</div>
<div className="reveal stagger-2">
<div className="flex flex-col sm:flex-row gap-4">
<button className="magnetic-btn ripple bg-slate-900 text-white px-8 py-4 font-medium relative overflow-hidden">
<span className="relative z-10">Start Your Project</span>
</button>
<button className="magnetic-btn border border-slate-300 px-8 py-4 hover:bg-slate-50 transition-colors duration-200">
                                View Our Work
                            </button>
</div>
</div>
<div className="reveal stagger-3">
<div className="flex items-center space-x-8 pt-8">
<div className="text-center">
<div className="text-3xl font-light counter" data-target="50">0</div>
<div className="text-sm text-slate-600">Projects</div>
</div>
<div className="w-px h-12 bg-slate-300"></div>
<div className="text-center">
<div className="text-3xl font-light counter" data-target="12">0</div>
<div className="text-sm text-slate-600">Years</div>
</div>
<div className="w-px h-12 bg-slate-300"></div>
<div className="text-center">
<div className="text-3xl font-light counter" data-target="100">0</div>
<div className="text-sm text-slate-600">Satisfaction</div>
</div>
</div>
</div>
</div>
<div className="reveal stagger-4">
<div className="relative">
<div className="image-reveal rounded-lg overflow-hidden">
<img alt="Luxury home interior" className="w-full h-96 object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" />
</div>
<div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-lg shadow-xl">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
<i className="w-6 h-6 text-slate-900" data-lucide="star"></i>
</div>
<div>
<div className="font-semibold">Premium Quality</div>
<div className="text-sm text-slate-300">Guaranteed Excellence</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="reveal">
<h2 className="text-5xl md:text-6xl font-light mb-6">Our Services</h2>
</div>
<div className="reveal stagger-1">
<p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                        Comprehensive construction solutions tailored to your unique needs and vision.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="service-card p-8 rounded-lg reveal">
<div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
<i className="w-8 h-8 text-slate-900" data-lucide="home"></i>
</div>
<h3 className="text-2xl font-medium mb-4">Kitchen Remodeling</h3>
<p className="text-slate-600 mb-6 leading-relaxed">
                        Transform your kitchen into a culinary masterpiece with premium materials and expert craftsmanship.
                    </p>
<div className="flex items-center text-sm font-medium text-slate-900">
<span>Learn More</span>
<i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</div>
</div>
<div className="service-card p-8 rounded-lg reveal stagger-1">
<div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
<i className="w-8 h-8 text-slate-900" data-lucide="droplets"></i>
</div>
<h3 className="text-2xl font-medium mb-4">Bathroom Renovation</h3>
<p className="text-slate-600 mb-6 leading-relaxed">
                        Create luxurious spa-like retreats with modern fixtures and elegant design solutions.
                    </p>
<div className="flex items-center text-sm font-medium text-slate-900">
<span>Learn More</span>
<i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</div>
</div>
<div className="service-card p-8 rounded-lg reveal stagger-2">
<div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
<i className="w-8 h-8 text-slate-900" data-lucide="building"></i>
</div>
<h3 className="text-2xl font-medium mb-4">Whole Home Renovation</h3>
<p className="text-slate-600 mb-6 leading-relaxed">
                        Complete home transformations that enhance both functionality and aesthetic appeal.
                    </p>
<div className="flex items-center text-sm font-medium text-slate-900">
<span>Learn More</span>
<i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</div>
</div>
<div className="service-card p-8 rounded-lg reveal stagger-3">
<div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
<i className="w-8 h-8 text-slate-900" data-lucide="trees"></i>
</div>
<h3 className="text-2xl font-medium mb-4">Outdoor Living</h3>
<p className="text-slate-600 mb-6 leading-relaxed">
                        Extend your living space outdoors with custom decks, patios, and entertainment areas.
                    </p>
<div className="flex items-center text-sm font-medium text-slate-900">
<span>Learn More</span>
<i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</div>
</div>
<div className="service-card p-8 rounded-lg reveal stagger-4">
<div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
<i className="w-8 h-8 text-slate-900" data-lucide="hammer"></i>
</div>
<h3 className="text-2xl font-medium mb-4">Custom Carpentry</h3>
<p className="text-slate-600 mb-6 leading-relaxed">
                        Bespoke woodworking solutions including built-ins, cabinetry, and architectural details.
                    </p>
<div className="flex items-center text-sm font-medium text-slate-900">
<span>Learn More</span>
<i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</div>
</div>
<div className="service-card p-8 rounded-lg reveal stagger-5">
<div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
<i className="w-8 h-8 text-slate-900" data-lucide="zap"></i>
</div>
<h3 className="text-2xl font-medium mb-4">Smart Home Integration</h3>
<p className="text-slate-600 mb-6 leading-relaxed">
                        Integrate cutting-edge technology seamlessly into your home's design and functionality.
                    </p>
<div className="flex items-center text-sm font-medium text-slate-900">
<span>Learn More</span>
<i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 diagonal-split" id="portfolio">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="reveal">
<h2 className="text-5xl md:text-6xl font-light mb-6">Recent Projects</h2>
</div>
<div className="reveal stagger-1">
<p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                        Explore our latest work showcasing exceptional craftsmanship and innovative design.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<div className="portfolio-item rounded-lg overflow-hidden h-96 reveal">
<img alt="Modern kitchen" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
<div>
<h3 className="text-3xl font-medium mb-2 text-white">Montecito Kitchen</h3>
<p className="text-slate-200">Complete luxury kitchen transformation</p>
</div>
</div>
</div>
</div>
<div className="space-y-8">
<div className="portfolio-item rounded-lg overflow-hidden h-44 reveal stagger-1">
<img alt="Luxury bathroom" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
<div>
<h3 className="text-xl font-medium mb-1 text-white">Hope Ranch Bath</h3>
<p className="text-slate-200 text-sm">Master bathroom renovation</p>
</div>
</div>
</div>
<div className="portfolio-item rounded-lg overflow-hidden h-44 reveal stagger-2">
<img alt="Living room" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
<div>
<h3 className="text-xl font-medium mb-1 text-white">Goleta Living</h3>
<p className="text-slate-200 text-sm">Open concept renovation</p>
</div>
</div>
</div>
</div>
<div className="portfolio-item rounded-lg overflow-hidden h-64 reveal stagger-3">
<img alt="Outdoor deck" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
<div>
<h3 className="text-2xl font-medium mb-2 text-white">Outdoor Oasis</h3>
<p className="text-slate-200">Custom deck and patio</p>
</div>
</div>
</div>
<div className="portfolio-item rounded-lg overflow-hidden h-64 reveal stagger-4">
<img alt="Custom woodwork" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
<div>
<h3 className="text-2xl font-medium mb-2 text-white">Custom Built-ins</h3>
<p className="text-slate-200">Bespoke cabinetry work</p>
</div>
</div>
</div>
<div className="portfolio-item rounded-lg overflow-hidden h-64 reveal stagger-5">
<img alt="Home office" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
<div>
<h3 className="text-2xl font-medium mb-2 text-white">Modern Office</h3>
<p className="text-slate-200">Custom workspace design</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="reveal">
<h2 className="text-5xl md:text-6xl font-light mb-6">Our Process</h2>
</div>
<div className="reveal stagger-1">
<p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                        A proven methodology that ensures exceptional results from concept to completion.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center reveal">
<div className="timeline-dot w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
<span className="text-2xl font-semibold text-slate-900">1</span>
</div>
<h3 className="text-xl font-medium mb-4">Discovery</h3>
<p className="text-slate-600 leading-relaxed">
                        We begin with an in-depth consultation to understand your vision, needs, and budget.
                    </p>
</div>
<div className="text-center reveal stagger-1">
<div className="timeline-dot w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
<span className="text-2xl font-semibold text-slate-900">2</span>
</div>
<h3 className="text-xl font-medium mb-4">Design</h3>
<p className="text-slate-600 leading-relaxed">
                        Our experts create detailed plans and 3D renderings to visualize your project.
                    </p>
</div>
<div className="text-center reveal stagger-2">
<div className="timeline-dot w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
<span className="text-2xl font-semibold text-slate-900">3</span>
</div>
<h3 className="text-xl font-medium mb-4">Build</h3>
<p className="text-slate-600 leading-relaxed">
                        Skilled craftsmen bring your vision to life with precision and attention to detail.
                    </p>
</div>
<div className="text-center reveal stagger-3">
<div className="timeline-dot w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
<span className="text-2xl font-semibold text-slate-900">4</span>
</div>
<h3 className="text-xl font-medium mb-4">Deliver</h3>
<p className="text-slate-600 leading-relaxed">
                        Final inspection and handover, ensuring every detail meets our high standards.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 morphing-bg" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="reveal">
<h2 className="text-5xl md:text-6xl font-light mb-8">Let's Create Something Amazing</h2>
<p className="text-xl text-slate-600 mb-12 font-light leading-relaxed">
                        Ready to transform your space? Contact us for a consultation and let's bring your vision to life.
                    </p>
<div className="space-y-6">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-slate-900" data-lucide="phone"></i>
</div>
<div>
<div className="font-medium">Phone</div>
<div className="text-slate-600">(805) 555-0123</div>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-slate-900" data-lucide="mail"></i>
</div>
<div>
<div className="font-medium">Email</div>
<div className="text-slate-600">info@popsprimecontracting.com</div>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-slate-900" data-lucide="map-pin"></i>
</div>
<div>
<div className="font-medium">Location</div>
<div className="text-slate-600">Santa Barbara, CA</div>
</div>
</div>
</div>
</div>
<div className="reveal stagger-1">
<form className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
<div className="form-group">
<input className="w-full px-4 py-3 rounded-lg focus:outline-none" id="name" placeholder=" " type="text" />
<label htmlFor="name">Your Name</label>
</div>
<div className="form-group">
<input className="w-full px-4 py-3 rounded-lg focus:outline-none" id="email" placeholder=" " type="email" />
<label htmlFor="email">Email Address</label>
</div>
<div className="form-group">
<input className="w-full px-4 py-3 rounded-lg focus:outline-none" id="phone" placeholder=" " type="tel" />
<label htmlFor="phone">Phone Number</label>
</div>
<div className="form-group">
<textarea className="w-full px-4 py-3 rounded-lg focus:outline-none resize-none" id="message" placeholder=" " rows="4"></textarea>
<label htmlFor="message">Project Details</label>
</div>
<button className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium ripple hover:bg-slate-800 transition-colors duration-200" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<div className="flex items-center space-x-4 mb-6">
<div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
<span className="text-slate-900 font-bold text-sm">PP</span>
</div>
<span className="text-xl font-medium">Pops Prime</span>
</div>
<p className="text-slate-300 leading-relaxed">
                        Transforming homes with exceptional craftsmanship and innovative design solutions.
                    </p>
</div>
<div>
<h4 className="text-lg font-medium mb-4">Services</h4>
<ul className="space-y-2 text-slate-300">
<li><a className="hover:text-white transition-colors" href="#">Kitchen Remodeling</a></li>
<li><a className="hover:text-white transition-colors" href="#">Bathroom Renovation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Home Renovation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Custom Carpentry</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-medium mb-4">Company</h4>
<ul className="space-y-2 text-slate-300">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Our Team</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Reviews</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-medium mb-4">Connect</h4>
<div className="flex space-x-4">
<a className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>
<div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
<p>© 2024 Pops Prime Contracting. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
