import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        // Initialize Lucide icons
        lucide.createIcons();
        
        // Initialize Particles.js
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#8B5CF6' },
                shape: { type: 'circle' },
                opacity: { value: 0.1, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: '#3B82F6', opacity: 0.1, width: 1 },
                move: { enable: true, speed: 1, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
            },
            retina_detect: true
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Intersection Observer for animations
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.animate-fade-in, .animate-fade-in-delay, .animate-fade-in-delay-2, .animate-fade-in-delay-3').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
<div className="nav-glass rounded-2xl px-6 py-3">
<div className="flex items-center space-x-8">
<div className="font-display font-medium text-lg">AWE</div>
<div className="hidden md:flex items-center space-x-6 text-sm">
<a className="text-white/70 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-white/70 hover:text-white transition-colors" href="#results">Results</a>
<a className="text-white/70 hover:text-white transition-colors" href="#about">About</a>
</div>
<button className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                    Get Started
                </button>
</div>
</div>
</nav>

<section className="min-h-screen relative flex items-center justify-center" style={{background: '#181025'}}>
<div id="particles-js"></div>
<div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
<div className="animate-fade-in">
<h1 className="font-display font-extralight text-5xl md:text-7xl tracking-tight mb-6">
                    We help you <span className="gradient-text font-light">command attention</span> online
                </h1>
</div>
<div className="animate-fade-in-delay">
<p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto">
                    Transform your digital presence with Australian Web Experts. We build websites that convert visitors into customers.
                </p>
</div>
<div className="animate-fade-in-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
<button className="glass-button rounded-xl px-8 py-4 text-lg font-medium">
<span className="shine-text">Start Your Project</span>
</button>
<button className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-100 transition-colors">
                    Explore Services
                </button>
</div>
<div className="animate-fade-in-delay-3 mt-12 text-white/55">
<p className="text-sm">Trusted by 350+ Australian business owners</p>
</div>
</div>

<div className="absolute top-1/4 left-1/4 animate-float opacity-20">
<i className="w-8 h-8 text-purple-500" data-lucide="zap"></i>
</div>
<div className="absolute top-1/3 right-1/4 animate-float opacity-20" style={{animationDelay: '-2s'}}>
<i className="w-6 h-6 text-blue-500" data-lucide="globe"></i>
</div>
<div className="absolute bottom-1/4 left-1/3 animate-float opacity-20" style={{animationDelay: '-4s'}}>
<i className="w-7 h-7 text-purple-400" data-lucide="rocket"></i>
</div>
</section>

<section className="min-h-screen py-20" id="services">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="text-center mb-16 animate-fade-in">
<h2 className="font-display font-light text-4xl md:text-5xl tracking-tight mb-6">
                    Services that <span className="gradient-text">deliver results</span>
</h2>
<p className="text-xl text-white/70 max-w-2xl mx-auto">
                    We specialise in creating digital experiences that convert. Every pixel serves a purpose.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="service-card rounded-2xl p-8 animate-fade-in-delay">
<div className="mb-6">
<i className="w-12 h-12 text-purple-500 mb-4" data-lucide="monitor"></i>
<h3 className="font-display font-normal text-2xl tracking-tight mb-4">Web Development</h3>
<p className="text-white/70">Custom websites built with modern technologies. Fast, secure, and optimised for conversions.</p>
</div>
<ul className="space-y-2 text-sm text-white/55">
<li className="flex items-center"><i className="w-4 h-4 mr-2 text-green-500" data-lucide="check"></i>Responsive Design</li>
<li className="flex items-center"><i className="w-4 h-4 mr-2 text-green-500" data-lucide="check"></i>SEO Optimisation</li>
<li className="flex items-center"><i className="w-4 h-4 mr-2 text-green-500" data-lucide="check"></i>Performance Tuning</li>
</ul>
</div>
<div className="service-card rounded-2xl p-8 animate-fade-in-delay-2">
<div className="mb-6">
<i className="w-12 h-12 text-blue-500 mb-4" data-lucide="shopping-cart"></i>
<h3 className="font-display font-normal text-2xl tracking-tight mb-4">E-commerce Solutions</h3>
<p className="text-white/70">Online stores that sell. We integrate payment systems and inventory management seamlessly.</p>
</div>
<ul className="space-y-2 text-sm text-white/55">
<li className="flex items-center"><i className="w-4 h-4 mr-2 text-green-500" data-lucide="check"></i>Payment Integration</li>
<li className="flex items-center"><i className="w-4 h-4 mr-2 text-green-500" data-lucide="check"></i>Inventory Management</li>
<li className="flex items-center"><i className="w-4 h-4 mr-2 text-green-500" data-lucide="check"></i>Analytics Setup</li>
</ul>
</div>
<div className="service-card rounded-2xl p-8 animate-fade-in-delay-3">
<div className="mb-6">
<i className="w-12 h-12 text-purple-400 mb-4" data-lucide="trending-up"></i>
<h3 className="font-display font-normal text-2xl tracking-tight mb-4">Digital Marketing</h3>
<p className="text-white/70">Drive traffic that converts. We handle SEO, social media, and paid advertising campaigns.</p>
</div>
<ul className="space-y-2 text-sm text-white/55">
<li className="flex items-center"><i className="w-4 h-4 mr-2 text-green-500" data-lucide="check"></i>SEO Strategy</li>
<li className="flex items-center"><i className="w-4 h-4 mr-2 text-green-500" data-lucide="check"></i>Social Media</li>
<li className="flex items-center"><i className="w-4 h-4 mr-2 text-green-500" data-lucide="check"></i>Paid Advertising</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20" id="results">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="text-center mb-16 animate-fade-in">
<h2 className="font-display font-light text-4xl md:text-5xl tracking-tight mb-6">
                    Results that <span className="gradient-text">speak for themselves</span>
</h2>
<p className="text-xl text-white/70">
                    We measure success by your growth. Here's what we've achieved together.
                </p>
</div>
<div className="grid md:grid-cols-4 gap-8 text-center">
<div className="animate-fade-in-delay">
<div className="text-4xl font-display font-light gradient-text mb-2">350+</div>
<div className="text-white/70">Projects Delivered</div>
</div>
<div className="animate-fade-in-delay-2">
<div className="text-4xl font-display font-light gradient-text mb-2">250%</div>
<div className="text-white/70">Average Traffic Increase</div>
</div>
<div className="animate-fade-in-delay-3">
<div className="text-4xl font-display font-light gradient-text mb-2">98%</div>
<div className="text-white/70">Client Satisfaction</div>
</div>
<div className="animate-fade-in-delay">
<div className="text-4xl font-display font-light gradient-text mb-2">5+</div>
<div className="text-white/70">Years Experience</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" style={{background: '#181025'}}>
<div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
<div className="animate-fade-in">
<h2 className="font-display font-light text-4xl md:text-6xl tracking-tight mb-8">
                    Ready to <span className="gradient-text">command attention</span>?
                </h2>
<p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
                    Join hundreds of Australian businesses who trust us to grow their online presence.
                </p>
<button className="glass-button rounded-xl px-12 py-6 text-xl font-medium">
<span className="shine-text">Start Your Project Today</span>
</button>
</div>
</div>
</section>


    </>
  );
}
