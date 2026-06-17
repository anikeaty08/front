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



        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
        
        // Progress bar
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight;
            document.getElementById('progress-bar').style.transform = `scaleX(${scrollPercent})`;
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
        
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
        
        // Counter animation
        const counters = document.querySelectorAll('.counter');
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    const duration = 2000;
                    const step = target / (duration / 16);
                    let current = 0;
                    
                    const updateCounter = () => {
                        current += step;
                        if (current < target) {
                            counter.textContent = Math.floor(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    
                    updateCounter();
                    counterObserver.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => counterObserver.observe(counter));
        
        // Form submission
        const contactForm = document.getElementById('contact-form');
        const formSuccess = document.getElementById('form-success');
        const sendAnother = document.getElementById('send-another');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            contactForm.classList.add('hidden');
            formSuccess.classList.remove('hidden');
        });
        
        sendAnother.addEventListener('click', () => {
            formSuccess.classList.add('hidden');
            contactForm.classList.remove('hidden');
            contactForm.reset();
        });
        
        // Ripple effect for buttons
        document.querySelectorAll('.ripple-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                const rect = this.getBoundingClientRect();
                ripple.style.left = (e.clientX - rect.left) + 'px';
                ripple.style.top = (e.clientY - rect.top) + 'px';
                this.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        });
        
        // Hero canvas particles
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        const particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.15 + 0.05
            });
        }
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
                
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(107, 79, 63, ${p.opacity})`;
                ctx.fill();
            });
            
            requestAnimationFrame(animate);
        }
        animate();
    
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
      
<div className="progress-bar" id="progress-bar"></div>

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b" id="navbar" style={{borderColor: '#D7CCC3'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 lg:h-18">
<a className="flex items-center gap-2.5 group" href="#">
<div className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3" style={{background: '#6B4F3F'}}>
<span className="text-white font-bold text-lg tracking-tighter">M</span>
</div>
<div className="hidden sm:block">
<span className="text-lg font-semibold tracking-tight" style={{color: '#3F3F46'}}>MyPMS</span>
<span className="text-xs block -mt-0.5" style={{color: '#6B4F3F'}}>Solutions</span>
</div>
</a>
<div className="hidden lg:flex items-center gap-6">
<a className="nav-link text-sm transition-colors py-1" href="#services" style={{color: '#3F3F46'}}>Services</a>
<a className="nav-link text-sm transition-colors py-1" href="#why-us" style={{color: '#3F3F46'}}>Why Us</a>
<a className="nav-link text-sm transition-colors py-1" href="#process" style={{color: '#3F3F46'}}>Process</a>
<a className="nav-link text-sm transition-colors py-1" href="#industries" style={{color: '#3F3F46'}}>Industries</a>
<a className="nav-link text-sm transition-colors py-1" href="#testimonials" style={{color: '#3F3F46'}}>Testimonials</a>
<a className="nav-link text-sm transition-colors py-1" href="#vision" style={{color: '#3F3F46'}}>Vision</a>
<a className="nav-link text-sm transition-colors py-1" href="#about" style={{color: '#3F3F46'}}>About</a>
<a className="btn-primary ripple-btn px-5 py-2 rounded-lg text-sm font-medium text-white" href="#contact">Contact Us</a>
</div>
<button className="lg:hidden p-2 rounded-lg transition-colors" id="mobile-menu-btn" style={{color: '#3F3F46'}}>
<span className="iconify w-6 h-6" data-icon="lucide:menu" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>

<div className="hidden lg:hidden border-t bg-white" id="mobile-menu" style={{borderColor: '#D7CCC3'}}>
<div className="px-4 py-4 space-y-3">
<a className="block py-2 transition-colors" href="#services" style={{color: '#3F3F46'}}>Services</a>
<a className="block py-2 transition-colors" href="#why-us" style={{color: '#3F3F46'}}>Why Us</a>
<a className="block py-2 transition-colors" href="#process" style={{color: '#3F3F46'}}>Process</a>
<a className="block py-2 transition-colors" href="#industries" style={{color: '#3F3F46'}}>Industries</a>
<a className="block py-2 transition-colors" href="#testimonials" style={{color: '#3F3F46'}}>Testimonials</a>
<a className="block py-2 transition-colors" href="#vision" style={{color: '#3F3F46'}}>Vision</a>
<a className="block py-2 transition-colors" href="#about" style={{color: '#3F3F46'}}>About</a>
<a className="block btn-primary px-5 py-2.5 rounded-lg text-sm font-medium text-center mt-4 text-white" href="#contact">Contact Us</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
<canvas id="hero-canvas"></canvas>

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-20 left-10 w-80 h-80 rounded-full blur-3xl glow morph-blob" style={{background: 'rgba(107, 79, 63, 0.05)'}}></div>
<div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl glow morph-blob" style={{background: 'rgba(79, 70, 229, 0.03)', animationDelay: '2s'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl morph-blob" style={{background: 'rgba(243, 236, 231, 0.5)', animationDelay: '4s'}}></div>
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(107, 79, 63, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
</div>

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-32 left-[10%] float-animation">
<div className="glass-strong p-4 rounded-xl shadow-lg tooltip" data-tooltip="Global Reach">
<span className="iconify w-8 h-8" data-icon="lucide:globe" style={{strokeWidth: '1.5', color: '#6B4F3F'}}></span>
</div>
</div>
<div className="absolute top-48 right-[12%] float-animation float-delay-1">
<div className="glass-strong p-4 rounded-xl shadow-lg tooltip" data-tooltip="Cloud Solutions">
<span className="iconify w-8 h-8" data-icon="lucide:cloud" style={{strokeWidth: '1.5', color: '#4F46E5'}}></span>
</div>
</div>
<div className="absolute bottom-40 left-[15%] float-animation float-delay-2">
<div className="glass-strong p-4 rounded-xl shadow-lg tooltip" data-tooltip="Clean Code">
<span className="iconify w-8 h-8" data-icon="lucide:code-2" style={{strokeWidth: '1.5', color: '#6B4F3F'}}></span>
</div>
</div>
<div className="absolute bottom-32 right-[18%] float-animation float-delay-1">
<div className="glass-strong p-4 rounded-xl shadow-lg tooltip" data-tooltip="Secure Data">
<span className="iconify w-8 h-8" data-icon="lucide:database" style={{strokeWidth: '1.5', color: '#14B8A6'}}></span>
</div>
</div>
</div>
<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
<div className="text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 hero-title" style={{borderColor: '#D7CCC3', background: '#F3ECE7'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{background: '#14B8A6'}}></span>
<span className="relative inline-flex rounded-full h-2 w-2" style={{background: '#14B8A6'}}></span>
</span>
<span className="text-sm font-medium" style={{color: '#6B4F3F'}}>Transforming Ideas into Digital Reality</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 hero-title" style={{color: '#3F3F46'}}>
<span>MyPMS</span>
<span className="text-gradient"> Solutions</span>
</h1>
<p className="text-xl sm:text-2xl md:text-3xl font-light mb-3 tracking-tight hero-subtitle" style={{color: '#3F3F46'}}>
                    Crafting <span className="shimmer-text font-medium">Smart</span> Solutions
                </p>
<p className="text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed hero-desc" style={{color: '#6B7280'}}>
                    We build modern websites today and powerful business software for tomorrow. 
                    Your vision, our expertise.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 hero-buttons">
<a className="btn-primary ripple-btn px-8 py-3 rounded-xl text-sm font-medium inline-flex items-center gap-2 w-full sm:w-auto justify-center group text-white" href="#contact">
<span className="iconify w-4 h-4" data-icon="lucide:globe" style={{strokeWidth: '1.5'}}></span>
                        Get a Website
                        <span className="iconify w-4 h-4 transition-transform group-hover:translate-x-0.5" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="btn-secondary px-8 py-3 rounded-xl text-sm font-medium transition-all inline-flex items-center gap-2 w-full sm:w-auto justify-center bg-white" href="#contact" style={{color: '#3F3F46'}}>
<span className="iconify w-4 h-4" data-icon="lucide:message-circle" style={{strokeWidth: '1.5'}}></span>
                        Let's Talk
                    </a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t hero-stats" style={{borderColor: '#D7CCC3'}}>
<div className="text-center hover-lift">
<div className="text-3xl sm:text-4xl font-bold mb-1" style={{color: '#6B4F3F'}}><span className="counter" data-target="50">0</span>+</div>
<div className="text-xs" style={{color: '#6B7280'}}>Projects Delivered</div>
</div>
<div className="text-center hover-lift">
<div className="text-3xl sm:text-4xl font-bold mb-1" style={{color: '#6B4F3F'}}><span className="counter" data-target="99">0</span>%</div>
<div className="text-xs" style={{color: '#6B7280'}}>Client Satisfaction</div>
</div>
<div className="text-center hover-lift">
<div className="text-3xl sm:text-4xl font-bold mb-1" style={{color: '#6B4F3F'}}>24/7</div>
<div className="text-xs" style={{color: '#6B7280'}}>Support Available</div>
</div>
<div className="text-center hover-lift">
<div className="text-3xl sm:text-4xl font-bold mb-1" style={{color: '#6B4F3F'}}><span className="counter" data-target="5">0</span>+</div>
<div className="text-xs" style={{color: '#6B7280'}}>Years Experience</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 scroll-indicator">
<div className="flex flex-col items-center gap-1.5">
<span className="text-xs uppercase tracking-widest" style={{color: '#6B7280'}}>Scroll</span>
<div className="w-5 h-8 rounded-full border-2 flex items-start justify-center p-1" style={{borderColor: '#D7CCC3'}}>
<div className="w-1 h-2.5 rounded-full animate-bounce" style={{background: '#6B4F3F'}}></div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="services" style={{background: '#F3ECE7'}}>
<div className="absolute top-0 left-0 w-full h-px" style={{background: 'linear-gradient(90deg, transparent, #6B4F3F, transparent)'}}></div>
<div className="absolute top-20 right-0 w-80 h-80 rounded-full blur-3xl" style={{background: 'rgba(107, 79, 63, 0.05)'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center mb-16 animate-on-scroll">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4" style={{background: 'white', border: '1px solid #D7CCC3', color: '#6B4F3F'}}>
<span className="iconify w-3.5 h-3.5" data-icon="lucide:sparkles" style={{strokeWidth: '1.5'}}></span>
                    Our Services
                </span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4" style={{color: '#3F3F46'}}>
                    Solutions That Drive <span className="text-gradient">Growth</span>
</h2>
<p className="max-w-xl mx-auto" style={{color: '#6B7280'}}>
                    From stunning websites to enterprise software solutions, we deliver technology that transforms businesses.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="card-3d group p-6 rounded-2xl bg-white border shadow-lg animate-on-scroll stagger-1" style={{borderColor: '#D7CCC3'}}>
<div className="service-3d-image relative h-48 mb-6 rounded-xl overflow-hidden" style={{background: 'linear-gradient(135deg, #F3ECE7 0%, #E8DED6 100%)'}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-40 h-32 rotate-3d">
<div className="absolute inset-0 rounded-lg shadow-3d overflow-hidden bg-white" style={{transform: 'perspective(500px) rotateY(-10deg) rotateX(5deg)'}}>
<div className="h-6 flex items-center gap-1.5 px-3" style={{background: '#6B4F3F'}}>
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
<div className="w-2 h-2 rounded-full bg-green-400"></div>
</div>
<div className="p-2">
<div className="h-3 rounded mb-2" style={{background: '#6B4F3F', width: '60%'}}></div>
<div className="h-2 rounded mb-1 w-full" style={{background: '#D7CCC3'}}></div>
<div className="h-2 rounded mb-2 w-4/5" style={{background: '#D7CCC3'}}></div>
<div className="flex gap-2">
<div className="flex-1 h-12 rounded" style={{background: 'rgba(107, 79, 63, 0.1)'}}></div>
<div className="flex-1 h-12 rounded" style={{background: 'rgba(79, 70, 229, 0.1)'}}></div>
</div>
</div>
</div>
<div className="floating-element -top-2 -right-4 w-8 h-8 rounded-lg shadow-lg flex items-center justify-center" style={{background: '#4F46E5', animationDelay: '0.5s'}}>
<span className="iconify w-4 h-4 text-white" data-icon="lucide:palette" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="floating-element -bottom-2 -left-4 w-6 h-6 rounded-full shadow-lg" style={{background: '#14B8A6', animationDelay: '1s'}}></div>
</div>
</div>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight transition-colors" style={{color: '#6B4F3F'}}>Website Design &amp; Development</h3>
<p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>Custom-built, responsive websites that captivate visitors and convert them into customers.</p>
</div>

<div className="card-3d group p-6 rounded-2xl bg-white border shadow-lg animate-on-scroll stagger-2" style={{borderColor: '#D7CCC3'}}>
<div className="service-3d-image relative h-48 mb-6 rounded-xl overflow-hidden" style={{background: 'linear-gradient(135deg, #F3ECE7 0%, #E8DED6 100%)'}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative" style={{transform: 'perspective(500px) rotateY(-15deg) rotateX(10deg)'}}>
<div className="w-24 h-36 rounded-t-lg shadow-3d relative" style={{background: 'linear-gradient(180deg, #8B6F5F 0%, #6B4F3F 100%)'}}>
<div className="absolute inset-2 grid grid-cols-3 grid-rows-5 gap-1">
<div className="bg-white/30 rounded-sm"></div>
<div className="bg-white/50 rounded-sm"></div>
<div className="bg-white/30 rounded-sm"></div>
<div className="bg-white/50 rounded-sm"></div>
<div className="bg-white/30 rounded-sm"></div>
<div className="bg-white/50 rounded-sm"></div>
<div className="bg-white/30 rounded-sm"></div>
<div className="bg-white/50 rounded-sm"></div>
<div className="bg-white/30 rounded-sm"></div>
<div className="bg-white/50 rounded-sm"></div>
<div className="bg-white/30 rounded-sm"></div>
<div className="bg-white/50 rounded-sm"></div>
<div className="bg-white/30 rounded-sm"></div>
<div className="bg-white/50 rounded-sm"></div>
<div className="bg-white/30 rounded-sm"></div>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-8 rounded-t-lg" style={{background: '#3F3F46'}}></div>
</div>
<div className="absolute -right-8 bottom-0 w-12 h-24 rounded-t-lg shadow-lg" style={{background: 'linear-gradient(180deg, #D7CCC3 0%, #C4B8AD 100%)'}}>
<div className="absolute inset-1 grid grid-cols-2 grid-rows-4 gap-1">
<div className="bg-white/40 rounded-sm"></div>
<div className="bg-white/50 rounded-sm"></div>
<div className="bg-white/50 rounded-sm"></div>
<div className="bg-white/40 rounded-sm"></div>
<div className="bg-white/40 rounded-sm"></div>
<div className="bg-white/50 rounded-sm"></div>
<div className="bg-white/50 rounded-sm"></div>
<div className="bg-white/40 rounded-sm"></div>
</div>
</div>
</div>
<div className="floating-element -top-4 -right-6 w-10 h-10 rounded-xl shadow-lg flex items-center justify-center bg-white" style={{animationDelay: '0.3s'}}>
<span className="iconify w-5 h-5" data-icon="lucide:briefcase" style={{strokeWidth: '1.5', color: '#6B4F3F'}}></span>
</div>
</div>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight transition-colors" style={{color: '#6B4F3F'}}>Business &amp; Corporate Websites</h3>
<p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>Professional digital presence for enterprises with authority and seamless user experiences.</p>
</div>

<div className="card-3d group p-6 rounded-2xl bg-white border shadow-lg animate-on-scroll stagger-3" style={{borderColor: '#D7CCC3'}}>
<div className="service-3d-image relative h-48 mb-6 rounded-xl overflow-hidden" style={{background: 'linear-gradient(135deg, #F3ECE7 0%, #E8DED6 100%)'}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative" style={{transform: 'perspective(500px) rotateY(-10deg) rotateX(8deg)'}}>
<div className="w-36 h-28 rounded-lg shadow-3d relative overflow-hidden" style={{background: 'linear-gradient(180deg, #D7CCC3 0%, #C4B8AD 100%)'}}>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-40 h-6" style={{background: 'linear-gradient(180deg, #6B4F3F, #8B6F5F)', clipPath: 'polygon(10% 100%, 50% 0%, 90% 100%)'}}></div>
<div className="absolute top-6 left-2 right-2 grid grid-cols-4 gap-2">
<div className="h-6 rounded-t-lg bg-white/40"></div>
<div className="h-6 rounded-t-lg bg-white/50"></div>
<div className="h-6 rounded-t-lg bg-white/40"></div>
<div className="h-6 rounded-t-lg bg-white/50"></div>
</div>
<div className="absolute top-14 left-2 right-2 grid grid-cols-4 gap-2">
<div className="h-6 rounded-t-lg bg-white/50"></div>
<div className="h-6 rounded-t-lg bg-white/40"></div>
<div className="h-6 rounded-t-lg bg-white/50"></div>
<div className="h-6 rounded-t-lg bg-white/40"></div>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-6 rounded-t-lg" style={{background: '#3F3F46'}}>
<div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-3 bg-yellow-400 rounded-full"></div>
</div>
</div>
<div className="floating-element -bottom-2 -left-6 w-10 h-10 rounded-full shadow-lg flex items-center justify-center bg-white" style={{animationDelay: '0.7s'}}>
<span className="iconify w-5 h-5" data-icon="lucide:utensils" style={{strokeWidth: '1.5', color: '#6B4F3F'}}></span>
</div>
<div className="floating-element -top-4 -right-4 w-8 h-8 rounded-lg shadow-lg flex items-center justify-center" style={{background: '#14B8A6', animationDelay: '1.2s'}}>
<span className="iconify w-4 h-4 text-white" data-icon="lucide:bed" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight transition-colors" style={{color: '#6B4F3F'}}>Hotel &amp; Restaurant Websites</h3>
<p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>Stunning hospitality websites with booking integrations and menu displays.</p>
</div>

<div className="card-3d group p-6 rounded-2xl bg-white border shadow-lg animate-on-scroll stagger-4" style={{borderColor: '#D7CCC3'}}>
<div className="service-3d-image relative h-48 mb-6 rounded-xl overflow-hidden" style={{background: 'linear-gradient(135deg, #F3ECE7 0%, #E8DED6 100%)'}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative" style={{transform: 'perspective(500px) rotateY(-12deg) rotateX(8deg)'}}>
<div className="w-44 h-32 rounded-lg shadow-3d overflow-hidden" style={{background: '#1e1e1e'}}>
<div className="h-5 flex items-center gap-1.5 px-2" style={{background: '#2d2d2d'}}>
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs ml-2" style={{color: '#6B7280'}}>app.js</span>
</div>
<div className="p-2 space-y-1">
<div className="flex gap-1">
<span className="text-xs" style={{color: '#C586C0'}}>const</span>
<span className="text-xs" style={{color: '#9CDCFE'}}>app</span>
<span className="text-xs text-white">=</span>
<span className="text-xs" style={{color: '#CE9178'}}>'MyPMS'</span>
</div>
<div className="flex gap-1">
<span className="text-xs" style={{color: '#C586C0'}}>function</span>
<span className="text-xs" style={{color: '#DCDCAA'}}>build</span>
<span className="text-xs text-white">() {</span>
</div>
<div className="pl-3">
<span className="text-xs" style={{color: '#C586C0'}}>return</span>
<span className="text-xs" style={{color: '#CE9178'}}> 'success'</span>
</div>
<div className="text-xs text-white">}</div>
</div>
</div>
<div className="floating-element -top-3 -right-5 w-10 h-10 rounded-xl shadow-lg flex items-center justify-center" style={{background: '#4F46E5', animationDelay: '0.4s'}}>
<span className="iconify w-5 h-5 text-white" data-icon="lucide:settings" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="floating-element -bottom-3 -left-5 w-8 h-8 rounded-full shadow-lg flex items-center justify-center bg-white" style={{animationDelay: '0.9s'}}>
<span className="iconify w-4 h-4" data-icon="lucide:database" style={{strokeWidth: '1.5', color: '#6B4F3F'}}></span>
</div>
</div>
</div>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight transition-colors" style={{color: '#6B4F3F'}}>Custom Web Applications</h3>
<p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>Tailored software solutions built for your unique business needs.</p>
</div>

<div className="card-3d group p-6 rounded-2xl bg-white border shadow-lg animate-on-scroll stagger-5" style={{borderColor: '#D7CCC3'}}>
<div className="service-3d-image relative h-48 mb-6 rounded-xl overflow-hidden" style={{background: 'linear-gradient(135deg, #F3ECE7 0%, #E8DED6 100%)'}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative" style={{transform: 'perspective(500px) rotateY(-8deg) rotateX(6deg)'}}>
<div className="w-40 h-32 rounded-xl shadow-3d overflow-hidden bg-white p-3">
<div className="flex gap-1 mb-2">
<div className="w-5 h-5 rounded-full" style={{background: '#6B4F3F'}}></div>
<div className="w-5 h-5 rounded-full" style={{background: '#8B6F5F'}}></div>
<div className="w-5 h-5 rounded-full" style={{background: '#4F46E5'}}></div>
<div className="w-5 h-5 rounded-full" style={{background: '#14B8A6'}}></div>
</div>
<div className="space-y-2">
<div className="h-2 rounded w-full" style={{background: '#6B4F3F'}}></div>
<div className="flex gap-2">
<div className="flex-1 h-8 rounded border-2 border-dashed" style={{borderColor: '#D7CCC3'}}></div>
<div className="flex-1 h-8 rounded" style={{background: 'rgba(107, 79, 63, 0.1)'}}></div>
</div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-lg" style={{background: 'linear-gradient(135deg, #4F46E5, #6366F1)'}}></div>
<div className="flex-1 space-y-1">
<div className="h-2 rounded w-full" style={{background: '#D7CCC3'}}></div>
<div className="h-2 rounded w-3/4" style={{background: '#D7CCC3'}}></div>
</div>
</div>
</div>
</div>
<div className="floating-element -top-4 -left-6 w-10 h-10 rounded-xl shadow-lg flex items-center justify-center" style={{background: '#6B4F3F', animationDelay: '0.6s'}}>
<span className="iconify w-5 h-5 text-white" data-icon="lucide:pen-tool" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="floating-element -bottom-3 -right-4 w-8 h-8 rounded-full shadow-lg flex items-center justify-center bg-white" style={{animationDelay: '1.1s'}}>
<span className="iconify w-4 h-4" data-icon="lucide:layers" style={{strokeWidth: '1.5', color: '#4F46E5'}}></span>
</div>
</div>
</div>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight transition-colors" style={{color: '#6B4F3F'}}>UI/UX Design</h3>
<p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>User-centered design that delights and enhances satisfaction.</p>
</div>

<div className="card-3d group p-6 rounded-2xl border border-dashed animate-on-scroll stagger-6 relative bg-white" style={{borderColor: '#D7CCC3'}}>
<div className="absolute top-4 right-4 z-10">
<span className="px-2.5 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1" style={{background: 'rgba(20, 184, 166, 0.1)', color: '#14B8A6', border: '1px solid rgba(20, 184, 166, 0.3)'}}>
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{background: '#14B8A6'}}></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{background: '#14B8A6'}}></span>
</span>
                            Coming Soon
                        </span>
</div>
<div className="service-3d-image relative h-48 mb-6 rounded-xl overflow-hidden" style={{background: 'linear-gradient(135deg, #F3ECE7 0%, #E8DED6 100%)'}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative" style={{transform: 'perspective(500px) rotateY(-10deg) rotateX(10deg)'}}>
<div className="w-32 h-28 rounded-xl shadow-3d overflow-hidden" style={{background: 'linear-gradient(180deg, #3F3F46, #2D2D35)'}}>
<div className="m-2 h-16 rounded-lg overflow-hidden" style={{background: 'linear-gradient(135deg, #1a1a2e, #16213e)'}}>
<div className="p-1.5 space-y-1">
<div className="flex justify-between items-center">
<div className="h-1.5 rounded w-10" style={{background: '#6B4F3F'}}></div>
<div className="text-xs font-bold" style={{color: '#14B8A6'}}>₹</div>
</div>
<div className="grid grid-cols-3 gap-0.5">
<div className="h-3 rounded bg-white/10"></div>
<div className="h-3 rounded bg-white/20"></div>
<div className="h-3 rounded bg-white/10"></div>
<div className="h-3 rounded bg-white/20"></div>
<div className="h-3 rounded bg-white/10"></div>
<div className="h-3 rounded bg-white/20"></div>
</div>
</div>
</div>
<div className="mx-2 grid grid-cols-4 gap-0.5">
<div className="h-2 rounded-sm" style={{background: '#6B4F3F'}}></div>
<div className="h-2 rounded-sm" style={{background: '#8B6F5F'}}></div>
<div className="h-2 rounded-sm" style={{background: '#6B4F3F'}}></div>
<div className="h-2 rounded-sm" style={{background: '#D7CCC3'}}></div>
</div>
</div>
<div className="absolute -right-10 -top-2 w-20 h-14 rounded-lg shadow-lg overflow-hidden bg-white" style={{transform: 'rotateY(15deg)'}}>
<div className="h-3 flex items-center justify-center" style={{background: '#6B4F3F'}}>
<div className="w-4 h-1 bg-white/50 rounded-full"></div>
</div>
<div className="p-1 space-y-0.5">
<div className="h-1.5 rounded w-3/4" style={{background: '#D7CCC3'}}></div>
<div className="h-1.5 rounded w-full" style={{background: '#D7CCC3'}}></div>
<div className="h-1.5 rounded w-1/2" style={{background: '#D7CCC3'}}></div>
</div>
</div>
<div className="floating-element -bottom-4 -left-6 w-8 h-12 rounded shadow-lg bg-white" style={{animationDelay: '0.8s'}}>
<div className="p-1 space-y-0.5">
<div className="h-0.5 rounded" style={{background: '#D7CCC3'}}></div>
<div className="h-0.5 rounded w-3/4" style={{background: '#D7CCC3'}}></div>
<div className="h-0.5 rounded" style={{background: '#D7CCC3'}}></div>
<div className="h-0.5 rounded w-1/2" style={{background: '#D7CCC3'}}></div>
</div>
</div>
</div>
</div>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight transition-colors" style={{color: '#6B4F3F'}}>POS &amp; PMS Solutions</h3>
<p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>Future-ready Point of Sale and Property Management Systems.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="why-us">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="animate-on-scroll">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4" style={{background: '#F3ECE7', border: '1px solid #D7CCC3', color: '#6B4F3F'}}>
<span className="iconify w-3.5 h-3.5" data-icon="lucide:award" style={{strokeWidth: '1.5'}}></span>
                        Why Choose Us
                    </span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6" style={{color: '#3F3F46'}}>
                        Built for <span className="text-gradient">Excellence</span>
</h2>
<p className="mb-8 leading-relaxed" style={{color: '#6B7280'}}>
                        We combine cutting-edge technology with strategic thinking to deliver solutions that drive real results.
                    </p>
<div className="space-y-4">
<div className="flex gap-4 group hover-lift p-3 rounded-xl transition-all" style={{background: 'transparent'}}>
<div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{background: '#F3ECE7'}}>
<span className="iconify w-5 h-5" data-icon="lucide:sparkles" style={{strokeWidth: '1.5', color: '#6B4F3F'}}></span>
</div>
<div>
<h4 className="font-medium mb-1" style={{color: '#3F3F46'}}>Clean &amp; Modern UI</h4>
<p className="text-sm" style={{color: '#6B7280'}}>Pixel-perfect designs on every device.</p>
</div>
</div>
<div className="flex gap-4 group hover-lift p-3 rounded-xl transition-all" style={{background: 'transparent'}}>
<div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{background: 'rgba(79, 70, 229, 0.1)'}}>
<span className="iconify w-5 h-5" data-icon="lucide:smartphone" style={{strokeWidth: '1.5', color: '#4F46E5'}}></span>
</div>
<div>
<h4 className="font-medium mb-1" style={{color: '#3F3F46'}}>Mobile-First Design</h4>
<p className="text-sm" style={{color: '#6B7280'}}>Built for the mobile era.</p>
</div>
</div>
<div className="flex gap-4 group hover-lift p-3 rounded-xl transition-all" style={{background: 'transparent'}}>
<div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{background: 'rgba(20, 184, 166, 0.1)'}}>
<span className="iconify w-5 h-5" data-icon="lucide:target" style={{strokeWidth: '1.5', color: '#14B8A6'}}></span>
</div>
<div>
<h4 className="font-medium mb-1" style={{color: '#3F3F46'}}>Business-Oriented</h4>
<p className="text-sm" style={{color: '#6B7280'}}>Drive conversions and growth.</p>
</div>
</div>
<div className="flex gap-4 group hover-lift p-3 rounded-xl transition-all" style={{background: 'transparent'}}>
<div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{background: '#F3ECE7'}}>
<span className="iconify w-5 h-5" data-icon="lucide:layers" style={{strokeWidth: '1.5', color: '#6B4F3F'}}></span>
</div>
<div>
<h4 className="font-medium mb-1" style={{color: '#3F3F46'}}>Scalable Architecture</h4>
<p className="text-sm" style={{color: '#6B7280'}}>Built to grow with your business.</p>
</div>
</div>
</div>
</div>
<div className="relative animate-on-scroll">
<div className="absolute inset-0 rounded-2xl blur-3xl" style={{background: 'rgba(107, 79, 63, 0.05)'}}></div>
<div className="relative glass-strong rounded-2xl p-6 float-animation shadow-xl">
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="p-4 rounded-xl bg-white border text-center shadow-sm" style={{borderColor: '#D7CCC3'}}>
<div className="text-2xl font-bold mb-1" style={{color: '#6B4F3F'}}>100%</div>
<div className="text-xs" style={{color: '#6B7280'}}>Code Quality</div>
</div>
<div className="p-4 rounded-xl bg-white border text-center shadow-sm" style={{borderColor: '#D7CCC3'}}>
<div className="text-2xl font-bold mb-1" style={{color: '#4F46E5'}}>A+</div>
<div className="text-xs" style={{color: '#6B7280'}}>Performance</div>
</div>
<div className="p-4 rounded-xl bg-white border text-center shadow-sm" style={{borderColor: '#D7CCC3'}}>
<div className="text-2xl font-bold mb-1" style={{color: '#14B8A6'}}>SSL</div>
<div className="text-xs" style={{color: '#6B7280'}}>Security</div>
</div>
<div className="p-4 rounded-xl bg-white border text-center shadow-sm" style={{borderColor: '#D7CCC3'}}>
<div className="text-2xl font-bold mb-1" style={{color: '#6B4F3F'}}>SEO</div>
<div className="text-xs" style={{color: '#6B7280'}}>Optimized</div>
</div>
</div>
<div className="p-4 rounded-xl border" style={{background: '#F3ECE7', borderColor: '#D7CCC3'}}>
<div className="flex items-center gap-1.5 mb-3">
<div className="w-2.5 h-2.5 rounded-full" style={{background: '#6B4F3F'}}></div>
<div className="w-2.5 h-2.5 rounded-full" style={{background: '#4F46E5'}}></div>
<div className="w-2.5 h-2.5 rounded-full" style={{background: '#14B8A6'}}></div>
</div>
<div className="space-y-2">
<div className="h-2 rounded w-3/4" style={{background: 'linear-gradient(90deg, rgba(107, 79, 63, 0.3), transparent)'}}></div>
<div className="h-2 rounded w-1/2" style={{background: '#D7CCC3'}}></div>
<div className="flex gap-2 mt-3">
<div className="flex-1 h-12 rounded-lg" style={{background: 'rgba(107, 79, 63, 0.1)'}}></div>
<div className="flex-1 h-12 rounded-lg" style={{background: 'rgba(79, 70, 229, 0.1)'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="process" style={{background: '#F3ECE7'}}>
<div className="absolute top-0 left-0 w-full h-px" style={{background: 'linear-gradient(90deg, transparent, #6B4F3F, transparent)'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 animate-on-scroll">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4" style={{background: 'white', border: '1px solid #D7CCC3', color: '#6B4F3F'}}>
<span className="iconify w-3.5 h-3.5" data-icon="lucide:git-branch" style={{strokeWidth: '1.5'}}></span>
                    Our Process
                </span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4" style={{color: '#3F3F46'}}>
                    From Vision to <span className="text-gradient">Reality</span>
</h2>
<p className="max-w-xl mx-auto" style={{color: '#6B7280'}}>
                    A streamlined process designed for efficiency and exceptional results.
                </p>
</div>
<div className="relative">
<div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2" style={{background: 'linear-gradient(90deg, transparent, #6B4F3F, #4F46E5, #14B8A6, transparent)'}}></div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
<div className="relative animate-on-scroll stagger-1 text-center">
<div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 z-10" style={{background: '#6B4F3F'}}>
<span className="iconify w-7 h-7 text-white" data-icon="lucide:message-square" style={{strokeWidth: '1.5'}}></span>
<div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-md bg-white flex items-center justify-center text-xs font-bold border shadow-sm" style={{color: '#6B4F3F', borderColor: '#D7CCC3'}}>1</div>
</div>
<h4 className="font-medium mb-1 text-sm" style={{color: '#3F3F46'}}>Discovery</h4>
<p className="text-xs" style={{color: '#6B7280'}}>Understand your goals</p>
</div>
<div className="relative animate-on-scroll stagger-2 text-center">
<div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 z-10" style={{background: '#8B6F5F'}}>
<span className="iconify w-7 h-7 text-white" data-icon="lucide:file-text" style={{strokeWidth: '1.5'}}></span>
<div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-md bg-white flex items-center justify-center text-xs font-bold border shadow-sm" style={{color: '#8B6F5F', borderColor: '#D7CCC3'}}>2</div>
</div>
<h4 className="font-medium mb-1 text-sm" style={{color: '#3F3F46'}}>Planning</h4>
<p className="text-xs" style={{color: '#6B7280'}}>Structure &amp; wireframes</p>
</div>
<div className="relative animate-on-scroll stagger-3 text-center">
<div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 z-10" style={{background: '#4F46E5'}}>
<span className="iconify w-7 h-7 text-white" data-icon="lucide:code" style={{strokeWidth: '1.5'}}></span>
<div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-md bg-white flex items-center justify-center text-xs font-bold border shadow-sm" style={{color: '#4F46E5', borderColor: '#D7CCC3'}}>3</div>
</div>
<h4 className="font-medium mb-1 text-sm" style={{color: '#3F3F46'}}>Development</h4>
<p className="text-xs" style={{color: '#6B7280'}}>Design &amp; code</p>
</div>
<div className="relative animate-on-scroll stagger-4 text-center">
<div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 z-10" style={{background: '#6366F1'}}>
<span className="iconify w-7 h-7 text-white" data-icon="lucide:search" style={{strokeWidth: '1.5'}}></span>
<div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-md bg-white flex items-center justify-center text-xs font-bold border shadow-sm" style={{color: '#6366F1', borderColor: '#D7CCC3'}}>4</div>
</div>
<h4 className="font-medium mb-1 text-sm" style={{color: '#3F3F46'}}>Review</h4>
<p className="text-xs" style={{color: '#6B7280'}}>Testing &amp; feedback</p>
</div>
<div className="relative animate-on-scroll stagger-5 text-center">
<div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 z-10" style={{background: '#14B8A6'}}>
<span className="iconify w-7 h-7 text-white" data-icon="lucide:rocket" style={{strokeWidth: '1.5'}}></span>
<div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-md bg-white flex items-center justify-center text-xs font-bold border shadow-sm" style={{color: '#14B8A6', borderColor: '#D7CCC3'}}>5</div>
</div>
<h4 className="font-medium mb-1 text-sm" style={{color: '#3F3F46'}}>Launch</h4>
<p className="text-xs" style={{color: '#6B7280'}}>Deploy &amp; go live</p>
</div>
<div className="relative animate-on-scroll stagger-6 text-center">
<div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 z-10" style={{background: '#6B4F3F'}}>
<span className="iconify w-7 h-7 text-white" data-icon="lucide:trending-up" style={{strokeWidth: '1.5'}}></span>
<div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-md bg-white flex items-center justify-center text-xs font-bold border shadow-sm" style={{color: '#6B4F3F', borderColor: '#D7CCC3'}}>6</div>
</div>
<h4 className="font-medium mb-1 text-sm" style={{color: '#3F3F46'}}>Scale</h4>
<p className="text-xs" style={{color: '#6B7280'}}>Ongoing upgrades</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="industries">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 animate-on-scroll">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4" style={{background: '#F3ECE7', border: '1px solid #D7CCC3', color: '#6B4F3F'}}>
<span className="iconify w-3.5 h-3.5" data-icon="lucide:building-2" style={{strokeWidth: '1.5'}}></span>
                    Industries We Serve
                </span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4" style={{color: '#3F3F46'}}>
                    Empowering <span className="text-gradient">Every Sector</span>
</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
<div className="card-hover group p-6 rounded-2xl bg-white border shadow-sm text-center animate-on-scroll stagger-1" style={{borderColor: '#D7CCC3'}}>
<div className="w-14 h-14 rounded-xl mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{background: '#F3ECE7'}}>
<span className="iconify w-7 h-7" data-icon="lucide:coffee" style={{strokeWidth: '1.5', color: '#6B4F3F'}}></span>
</div>
<h4 className="font-medium text-sm" style={{color: '#3F3F46'}}>Restaurants</h4>
</div>
<div className="card-hover group p-6 rounded-2xl bg-white border shadow-sm text-center animate-on-scroll stagger-2" style={{borderColor: '#D7CCC3'}}>
<div className="w-14 h-14 rounded-xl mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{background: 'rgba(79, 70, 229, 0.1)'}}>
<span className="iconify w-7 h-7" data-icon="lucide:bed-double" style={{strokeWidth: '1.5', color: '#4F46E5'}}></span>
</div>
<h4 className="font-medium text-sm" style={{color: '#3F3F46'}}>Hotels</h4>
</div>
<div className="card-hover group p-6 rounded-2xl bg-white border shadow-sm text-center animate-on-scroll stagger-3" style={{borderColor: '#D7CCC3'}}>
<div className="w-14 h-14 rounded-xl mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{background: 'rgba(20, 184, 166, 0.1)'}}>
<span className="iconify w-7 h-7" data-icon="lucide:briefcase" style={{strokeWidth: '1.5', color: '#14B8A6'}}></span>
</div>
<h4 className="font-medium text-sm" style={{color: '#3F3F46'}}>SMBs</h4>
</div>
<div className="card-hover group p-6 rounded-2xl bg-white border shadow-sm text-center animate-on-scroll stagger-4" style={{borderColor: '#D7CCC3'}}>
<div className="w-14 h-14 rounded-xl mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{background: '#F3ECE7'}}>
<span className="iconify w-7 h-7" data-icon="lucide:lightbulb" style={{strokeWidth: '1.5', color: '#6B4F3F'}}></span>
</div>
<h4 className="font-medium text-sm" style={{color: '#3F3F46'}}>Startups</h4>
</div>
<div className="card-hover group p-6 rounded-2xl bg-white border shadow-sm text-center animate-on-scroll stagger-5" style={{borderColor: '#D7CCC3'}}>
<div className="w-14 h-14 rounded-xl mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{background: 'rgba(79, 70, 229, 0.1)'}}>
<span className="iconify w-7 h-7" data-icon="lucide:user-check" style={{strokeWidth: '1.5', color: '#4F46E5'}}></span>
</div>
<h4 className="font-medium text-sm" style={{color: '#3F3F46'}}>Professionals</h4>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="testimonials" style={{background: '#F3ECE7'}}>
<div className="absolute top-0 left-0 w-full h-px" style={{background: 'linear-gradient(90deg, transparent, #6B4F3F, transparent)'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 animate-on-scroll">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4" style={{background: 'white', border: '1px solid #D7CCC3', color: '#6B4F3F'}}>
<span className="iconify w-3.5 h-3.5" data-icon="lucide:quote" style={{strokeWidth: '1.5'}}></span>
                    Testimonials
                </span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4" style={{color: '#3F3F46'}}>
                    What Our <span className="text-gradient">Clients Say</span>
</h2>
<p className="max-w-xl mx-auto" style={{color: '#6B7280'}}>
                    Don't just take our word for it. Here's what businesses have to say about working with us.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="testimonial-card bg-white p-6 rounded-2xl shadow-lg border animate-on-scroll stagger-1" style={{borderColor: '#D7CCC3'}}>
<div className="flex items-center gap-1 mb-4">
<span className="iconify w-4 h-4" data-icon="lucide:star" style={{strokeWidth: '1.5', color: '#F59E0B', fill: '#F59E0B'}}></span>
<span className="iconify w-4 h-4" data-icon="lucide:star" style={{strokeWidth: '1.5', color: '#F59E0B', fill: '#F59E0B'}}></span>
<span className="iconify w-4 h-4" data-icon="lucide:star" style={{strokeWidth: '1.5', color: '#F59E0B', fill: '#F59E0B'}}></span>
<span className="iconify w-4 h-4" data-icon="lucide:star" style={{strokeWidth: '1.5', color: '#F59E0B', fill: '#F59E0B'}}></span>
<span className="iconify w-4 h-4" data-icon="lucide:star" style={{strokeWidth: '1.5', color: '#F59E0B', fill: '#F59E0B'}}></span>
</div>
<p className="text-sm leading-relaxed mb-6" style={{color: '#6B7280'}}>"MyPMS transformed our outdated website into a modern, user-friendly platform. Our online bookings increased by 150% within the first month!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium" style={{background: '#6B4F3F'}}>RK</div>
<div>
<div className="font-medium text-sm" style={{color: '#3F3F46'}}>Rajesh Kumar</div>
<div className="text-xs" style={{color: '#6B7280'}}>Hotel Sunrise, Varanasi</div>
</div>
</div>
</div>
<div className="testimonial-card bg-white p-6 rounded-2xl shadow-lg border animate-on-scroll stagger-2" style={{borderColor: '#D7CCC3'}}>
<div className="flex items-center gap-1 mb-4">
<span className="iconify w-4 h-4" data-icon="lucide:star" style={{strokeWidth: '1.5', color: '#F59E0B', fill: '#F59E0B'}}></span>
<span className="iconify w-4 h-4" data-icon="lucide:star" style={{strokeWidth: '1.5', color: '#F59E0B', fill: '#F59E0B'}}></span>
<span className="iconify w-4 h-4" data-icon="lucide:star" style={{strokeWidth: '1.5', color: '#F59E0B', fill: '#F59E0B'}}></span>
<span className="iconify w-4 h-4" data-icon="lucide:star" style={{strokeWidth: '1.5', color: '#F59E0B', fill: '#F59E0B'}}></span>
<span className="iconify w-4 h-4" data-icon="lucide:star" style={{strokeWidth: '1.5', color: '#F59E0B', fill: '#F59E0B'}}></span>
</div>
<p className="text-sm leading-relaxed mb-6" style={{color: '#6B7280'}}>"Professional team with excellent communication. They delivered our restaurant website on time and the menu display feature is fantastic!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium" style={{background: '#4F46E5'}}>PS</div>
<div>
<div className="font-medium text-sm" style={{color: '#3F3F46'}}>Priya Sharma</div>
<div className="text-xs" style={{color: '#6B7280'}}>Spice Garden Restaurant</div>
</div>
</div>
</div>
<div className="testimonial-card bg-white p-6 rounded-2xl shadow-lg border animate-on-scroll stagger-3" style={{borderColor: '#D7CCC3'}}>
<div className="flex items-center gap-1 mb-4">
<span className="iconify w-4 h-4" data-icon="lucide:star" style={{strokeWidth: '1.5', color: '#F59E0B', fill: '#F59E0B'}}></span>
<span className="iconify w-4 h-4" data-icon="lucide:star" style={{strokeWidth: '1.5', color: '#F59E0B', fill: '#F59E0B'}}></span>
<span className="iconify w-4 h-4" data-icon="lucide:star" style={{strokeWidth: '1.5', color: '#F59E0B', fill: '#F59E0B'}}></span>
<span className="iconify w-4 h-4" data-icon="lucide:star" style={{strokeWidth: '1.5', color: '#F59E0B', fill: '#F59E0B'}}></span>
<span className="iconify w-4 h-4" data-icon="lucide:star" style={{strokeWidth: '1.5', color: '#F59E0B', fill: '#F59E0B'}}></span>
</div>
<p className="text-sm leading-relaxed mb-6" style={{color: '#6B7280'}}>"The custom web application they built for our business has streamlined our entire operation. Exceptional quality and support!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium" style={{background: '#14B8A6'}}>AV</div>
<div>
<div className="font-medium text-sm" style={{color: '#3F3F46'}}>Amit Verma</div>
<div className="text-xs" style={{color: '#6B7280'}}>TechStart Solutions</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="vision" style={{background: '#3F3F46'}}>
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl morph-blob" style={{background: 'rgba(107, 79, 63, 0.1)'}}></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl morph-blob" style={{background: 'rgba(79, 70, 229, 0.1)', animationDelay: '3s'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16 animate-on-scroll">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4" style={{background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'white'}}>
<span className="iconify w-3.5 h-3.5" data-icon="lucide:telescope" style={{strokeWidth: '1.5'}}></span>
                    Our Vision
                </span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
                    What We're Building <span style={{color: '#14B8A6'}}>Next</span>
</h2>
</div>
<div className="grid lg:grid-cols-3 gap-6">
<div className="relative group animate-on-scroll stagger-1">
<div className="absolute inset-0 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" style={{background: '#6B4F3F'}}></div>
<div className="relative rounded-2xl p-8 h-full border transition-colors" style={{background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255, 255, 255, 0.1)'}}>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-6" style={{background: 'rgba(20, 184, 166, 0.2)', border: '1px solid rgba(20, 184, 166, 0.3)', color: '#14B8A6'}}>
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{background: '#14B8A6'}}></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{background: '#14B8A6'}}></span>
</span>
                            Under Development
                        </div>
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{background: '#6B4F3F'}}>
<span className="iconify w-7 h-7 text-white" data-icon="lucide:shopping-cart" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-white">Cloud-Based POS</h3>
<p className="text-sm leading-relaxed mb-6" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Point of Sale system for restaurants, cafes, and food businesses.</p>
<ul className="space-y-2 text-sm" style={{color: 'rgba(255, 255, 255, 0.6)'}}>
<li className="flex items-center gap-2">
<span className="iconify w-3.5 h-3.5" data-icon="lucide:check" style={{strokeWidth: '2', color: '#14B8A6'}}></span>
                                Table management
                            </li>
<li className="flex items-center gap-2">
<span className="iconify w-3.5 h-3.5" data-icon="lucide:check" style={{strokeWidth: '2', color: '#14B8A6'}}></span>
                                Kitchen display
                            </li>
<li className="flex items-center gap-2">
<span className="iconify w-3.5 h-3.5" data-icon="lucide:check" style={{strokeWidth: '2', color: '#14B8A6'}}></span>
                                Multi-branch
                            </li>
</ul>
</div>
</div>
<div className="relative group animate-on-scroll stagger-2">
<div className="absolute inset-0 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" style={{background: '#4F46E5'}}></div>
<div className="relative rounded-2xl p-8 h-full border transition-colors" style={{background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255, 255, 255, 0.1)'}}>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-6" style={{background: 'rgba(79, 70, 229, 0.2)', border: '1px solid rgba(79, 70, 229, 0.3)', color: '#818CF8'}}>
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{background: '#818CF8'}}></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{background: '#818CF8'}}></span>
</span>
                            Coming Soon
                        </div>
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{background: '#4F46E5'}}>
<span className="iconify w-7 h-7 text-white" data-icon="lucide:building" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-white">Hotel PMS</h3>
<p className="text-sm leading-relaxed mb-6" style={{color: 'rgba(255, 255, 255, 0.6)'}}>End-to-end hotel management for reservations and guests.</p>
<ul className="space-y-2 text-sm" style={{color: 'rgba(255, 255, 255, 0.6)'}}>
<li className="flex items-center gap-2">
<span className="iconify w-3.5 h-3.5" data-icon="lucide:check" style={{strokeWidth: '2', color: '#818CF8'}}></span>
                                Booking engine
                            </li>
<li className="flex items-center gap-2">
<span className="iconify w-3.5 h-3.5" data-icon="lucide:check" style={{strokeWidth: '2', color: '#818CF8'}}></span>
                                Channel manager
                            </li>
<li className="flex items-center gap-2">
<span className="iconify w-3.5 h-3.5" data-icon="lucide:check" style={{strokeWidth: '2', color: '#818CF8'}}></span>
                                Guest tools
                            </li>
</ul>
</div>
</div>
<div className="relative group animate-on-scroll stagger-3">
<div className="absolute inset-0 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" style={{background: '#14B8A6'}}></div>
<div className="relative rounded-2xl p-8 h-full border transition-colors" style={{background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255, 255, 255, 0.1)'}}>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-6" style={{background: 'rgba(107, 79, 63, 0.2)', border: '1px solid rgba(107, 79, 63, 0.3)', color: '#D7CCC3'}}>
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{background: '#D7CCC3'}}></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{background: '#D7CCC3'}}></span>
</span>
                            In Planning
                        </div>
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{background: '#14B8A6'}}>
<span className="iconify w-7 h-7 text-white" data-icon="lucide:layout-dashboard" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-white">Smart Dashboards</h3>
<p className="text-sm leading-relaxed mb-6" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Unified analytics and business automation tools.</p>
<ul className="space-y-2 text-sm" style={{color: 'rgba(255, 255, 255, 0.6)'}}>
<li className="flex items-center gap-2">
<span className="iconify w-3.5 h-3.5" data-icon="lucide:check" style={{strokeWidth: '2', color: '#2DD4BF'}}></span>
                                Real-time analytics
                            </li>
<li className="flex items-center gap-2">
<span className="iconify w-3.5 h-3.5" data-icon="lucide:check" style={{strokeWidth: '2', color: '#2DD4BF'}}></span>
                                Automation
                            </li>
<li className="flex items-center gap-2">
<span className="iconify w-3.5 h-3.5" data-icon="lucide:check" style={{strokeWidth: '2', color: '#2DD4BF'}}></span>
                                API integrations
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-white" id="about">
<div className="absolute top-0 left-0 w-full h-px" style={{background: 'linear-gradient(90deg, transparent, #6B4F3F, transparent)'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1 animate-on-scroll">
<div className="absolute inset-0 rounded-2xl blur-3xl" style={{background: 'rgba(107, 79, 63, 0.05)'}}></div>
<div className="relative bg-white rounded-2xl p-8 float-animation shadow-xl border" style={{borderColor: '#D7CCC3'}}>
<div className="flex items-center gap-4 mb-8">
<div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{background: '#6B4F3F'}}>
<span className="text-2xl font-bold tracking-tighter text-white">M</span>
</div>
<div>
<div className="text-xl font-semibold tracking-tight" style={{color: '#3F3F46'}}>MyPMS Solutions</div>
<div className="text-sm" style={{color: '#6B4F3F'}}>Crafting Smart Solutions</div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-xl border shadow-sm" style={{background: '#F3ECE7', borderColor: '#D7CCC3'}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white">
<span className="iconify w-5 h-5" data-icon="lucide:map-pin" style={{strokeWidth: '1.5', color: '#6B4F3F'}}></span>
</div>
<div>
<div className="text-sm font-medium" style={{color: '#3F3F46'}}>Location</div>
<div className="text-xs" style={{color: '#6B7280'}}>Kushinagar, UP, India</div>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border shadow-sm" style={{background: '#F3ECE7', borderColor: '#D7CCC3'}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white">
<span className="iconify w-5 h-5" data-icon="lucide:target" style={{strokeWidth: '1.5', color: '#4F46E5'}}></span>
</div>
<div>
<div className="text-sm font-medium" style={{color: '#3F3F46'}}>Mission</div>
<div className="text-xs" style={{color: '#6B7280'}}>Empower businesses with technology</div>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border shadow-sm" style={{background: '#F3ECE7', borderColor: '#D7CCC3'}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white">
<span className="iconify w-5 h-5" data-icon="lucide:heart" style={{strokeWidth: '1.5', color: '#14B8A6'}}></span>
</div>
<div>
<div className="text-sm font-medium" style={{color: '#3F3F46'}}>Values</div>
<div className="text-xs" style={{color: '#6B7280'}}>Quality, Innovation, Integrity</div>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 animate-on-scroll">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4" style={{background: '#F3ECE7', border: '1px solid #D7CCC3', color: '#6B4F3F'}}>
<span className="iconify w-3.5 h-3.5" data-icon="lucide:users" style={{strokeWidth: '1.5'}}></span>
                        About Us
                    </span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6" style={{color: '#3F3F46'}}>
                        Building the <span className="text-gradient">Future</span>
</h2>
<div className="space-y-4 leading-relaxed" style={{color: '#6B7280'}}>
<p>MyPMS Solutions is a forward-thinking IT company dedicated to transforming how businesses operate in the digital age.</p>
<p>We combine deep technical expertise with strategic business understanding to deliver solutions that drive real results.</p>
</div>
<div className="mt-8 flex flex-wrap gap-3">
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border shadow-sm text-sm" style={{borderColor: '#D7CCC3', color: '#3F3F46'}}>
<span className="iconify w-4 h-4" data-icon="lucide:shield-check" style={{strokeWidth: '1.5', color: '#6B4F3F'}}></span>
                            Trusted
                        </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border shadow-sm text-sm" style={{borderColor: '#D7CCC3', color: '#3F3F46'}}>
<span className="iconify w-4 h-4" data-icon="lucide:zap" style={{strokeWidth: '1.5', color: '#4F46E5'}}></span>
                            Fast
                        </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border shadow-sm text-sm" style={{borderColor: '#D7CCC3', color: '#3F3F46'}}>
<span className="iconify w-4 h-4" data-icon="lucide:headphones" style={{strokeWidth: '1.5', color: '#14B8A6'}}></span>
                            24/7
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact" style={{background: '#F3ECE7'}}>
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/4 w-80 h-80 rounded-full blur-3xl" style={{background: 'rgba(107, 79, 63, 0.05)'}}></div>
<div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl" style={{background: 'rgba(79, 70, 229, 0.03)'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center mb-16 animate-on-scroll">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4" style={{background: 'white', border: '1px solid #D7CCC3', color: '#6B4F3F'}}>
<span className="iconify w-3.5 h-3.5" data-icon="lucide:mail" style={{strokeWidth: '1.5'}}></span>
                    Contact Us
                </span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4" style={{color: '#3F3F46'}}>
                    Let's Build Something <span className="text-gradient">Amazing</span>
</h2>
</div>
<div className="grid lg:grid-cols-2 gap-12">
<div className="bg-white rounded-2xl p-8 animate-on-scroll shadow-xl border" style={{borderColor: '#D7CCC3'}}>
<div className="hidden form-success text-center py-12" id="form-success">
<div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{background: 'rgba(20, 184, 166, 0.1)'}}>
<span className="iconify w-8 h-8" data-icon="lucide:check-circle" style={{strokeWidth: '1.5', color: '#14B8A6'}}></span>
</div>
<h3 className="text-xl font-semibold mb-2" style={{color: '#3F3F46'}}>Message Sent!</h3>
<p className="text-sm" style={{color: '#6B7280'}}>Thank you for reaching out. We'll get back to you within 24 hours.</p>
<button className="mt-6 text-sm font-medium transition-colors" id="send-another" style={{color: '#4F46E5'}}>Send another message →</button>
</div>
<form className="space-y-6" id="contact-form">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium mb-2" style={{color: '#3F3F46'}}>Full Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-white border transition-all text-sm" placeholder="John Doe" required="" style={{borderColor: '#D7CCC3', color: '#3F3F46'}} type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-2" style={{color: '#3F3F46'}}>Email</label>
<input className="w-full px-4 py-3 rounded-lg bg-white border transition-all text-sm" placeholder="john@example.com" required="" style={{borderColor: '#D7CCC3', color: '#3F3F46'}} type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-medium mb-2" style={{color: '#3F3F46'}}>Phone</label>
<input className="w-full px-4 py-3 rounded-lg bg-white border transition-all text-sm" placeholder="+91 98765 43210" style={{borderColor: '#D7CCC3', color: '#3F3F46'}} type="tel"/>
</div>
<div>
<label className="block text-sm font-medium mb-2" style={{color: '#3F3F46'}}>Service</label>
<select className="w-full px-4 py-3 rounded-lg bg-white border transition-all text-sm" style={{borderColor: '#D7CCC3', color: '#3F3F46'}}>
<option value="">Select a service</option>
<option value="website">Website Development</option>
<option value="corporate">Corporate Website</option>
<option value="hospitality">Hotel/Restaurant Website</option>
<option value="webapp">Web Application</option>
<option value="uiux">UI/UX Design</option>
<option value="other">Other</option>
</select>
</div>
<div>
<label className="block text-sm font-medium mb-2" style={{color: '#3F3F46'}}>Message</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-white border transition-all text-sm resize-none" placeholder="Tell us about your project..." rows="4" style={{borderColor: '#D7CCC3', color: '#3F3F46'}}></textarea>
</div>
<button className="w-full btn-primary ripple-btn px-6 py-3 rounded-lg text-sm font-medium inline-flex items-center justify-center gap-2 group text-white" id="submit-btn" type="submit">
<span className="iconify w-4 h-4" data-icon="lucide:send" style={{strokeWidth: '1.5'}}></span>
<span>Send Message</span>
</button>
</form>
</div>
<div className="space-y-4 animate-on-scroll">
<div className="bg-white rounded-xl p-6 border transition-colors shadow-sm hover-lift" style={{borderColor: '#D7CCC3'}}>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{background: '#F3ECE7'}}>
<span className="iconify w-5 h-5" data-icon="lucide:mail" style={{strokeWidth: '1.5', color: '#6B4F3F'}}></span>
</div>
<div>
<h4 className="font-medium mb-1" style={{color: '#3F3F46'}}>Email Us</h4>
<a className="transition-colors text-sm hover:underline" href="mailto:contact@mypmssolutions.com" style={{color: '#4F46E5'}}>contact@mypmssolutions.com</a>
</div>
</div>
</div>
<div className="bg-white rounded-xl p-6 border transition-colors shadow-sm hover-lift" style={{borderColor: '#D7CCC3'}}>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{background: 'rgba(20, 184, 166, 0.1)'}}>
<span className="iconify w-5 h-5" data-icon="lucide:message-circle" style={{strokeWidth: '1.5', color: '#14B8A6'}}></span>
</div>
<div>
<h4 className="font-medium mb-2" style={{color: '#3F3F46'}}>WhatsApp</h4>
<a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg transition-colors text-sm border" href="https://wa.me/919876543210" style={{background: 'rgba(20, 184, 166, 0.1)', color: '#14B8A6', borderColor: 'rgba(20, 184, 166, 0.2)'}} target="_blank">
<span className="iconify w-3.5 h-3.5" data-icon="lucide:external-link" style={{strokeWidth: '1.5'}}></span>
                                    Chat Now
                                </a>
</div>
</div>
</div>
<div className="bg-white rounded-xl p-6 border transition-colors shadow-sm hover-lift" style={{borderColor: '#D7CCC3'}}>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{background: 'rgba(79, 70, 229, 0.1)'}}>
<span className="iconify w-5 h-5" data-icon="lucide:map-pin" style={{strokeWidth: '1.5', color: '#4F46E5'}}></span>
</div>
<div>
<h4 className="font-medium mb-1" style={{color: '#3F3F46'}}>Location</h4>
<p className="text-sm" style={{color: '#6B7280'}}>Kushinagar, Uttar Pradesh, India</p>
</div>
</div>
</div>
<div className="bg-white rounded-xl p-6 border transition-colors shadow-sm hover-lift" style={{borderColor: '#D7CCC3'}}>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{background: '#F3ECE7'}}>
<span className="iconify w-5 h-5" data-icon="lucide:clock" style={{strokeWidth: '1.5', color: '#6B4F3F'}}></span>
</div>
<div>
<h4 className="font-medium mb-1" style={{color: '#3F3F46'}}>Business Hours</h4>
<p className="text-sm" style={{color: '#6B7280'}}>Mon - Sat: 9:00 AM - 6:00 PM</p>
</div>
</div>
</div>
<div className="bg-white rounded-xl p-6 border transition-colors shadow-sm hover-lift" style={{borderColor: '#D7CCC3'}}>
<h4 className="font-medium mb-4" style={{color: '#3F3F46'}}>Follow Us</h4>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110" href="#" style={{background: '#F3ECE7'}}>
<span className="iconify w-5 h-5" data-icon="lucide:linkedin" style={{strokeWidth: '1.5', color: '#6B4F3F'}}></span>
</a>
<a className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110" href="#" style={{background: 'rgba(79, 70, 229, 0.1)'}}>
<span className="iconify w-5 h-5" data-icon="lucide:twitter" style={{strokeWidth: '1.5', color: '#4F46E5'}}></span>
</a>
<a className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110" href="#" style={{background: 'rgba(20, 184, 166, 0.1)'}}>
<span className="iconify w-5 h-5" data-icon="lucide:instagram" style={{strokeWidth: '1.5', color: '#14B8A6'}}></span>
</a>
<a className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110" href="#" style={{background: '#F3ECE7'}}>
<span className="iconify w-5 h-5" data-icon="lucide:facebook" style={{strokeWidth: '1.5', color: '#6B4F3F'}}></span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 relative overflow-hidden" style={{background: '#3F3F46'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div className="md:col-span-2">
<a className="flex items-center gap-2.5 mb-4" href="#">
<div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: '#6B4F3F'}}>
<span className="text-white font-bold text-lg tracking-tighter">M</span>
</div>
<div>
<span className="text-lg font-semibold tracking-tight text-white">MyPMS</span>
<span className="text-xs block -mt-0.5" style={{color: '#D7CCC3'}}>Solutions</span>
</div>
</a>
<p className="text-sm leading-relaxed max-w-sm mb-4" style={{color: 'rgba(255, 255, 255, 0.6)'}}>
                        Crafting smart digital solutions for businesses. We build modern websites and powerful software for tomorrow.
                    </p>
</div>
<div>
<h4 className="font-medium text-white mb-4">Quick Links</h4>
<ul className="space-y-2">
<li><a className="text-sm transition-colors hover:text-white" href="#services" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Services</a></li>
<li><a className="text-sm transition-colors hover:text-white" href="#why-us" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Why Us</a></li>
<li><a className="text-sm transition-colors hover:text-white" href="#process" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Process</a></li>
<li><a className="text-sm transition-colors hover:text-white" href="#contact" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-4">Services</h4>
<ul className="space-y-2">
<li><a className="text-sm transition-colors hover:text-white" href="#" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Web Development</a></li>
<li><a className="text-sm transition-colors hover:text-white" href="#" style={{color: 'rgba(255, 255, 255, 0.6)'}}>UI/UX Design</a></li>
<li><a className="text-sm transition-colors hover:text-white" href="#" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Web Applications</a></li>
<li><a className="text-sm transition-colors hover:text-white" href="#" style={{color: 'rgba(255, 255, 255, 0.6)'}}>POS Solutions</a></li>
</ul>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{borderTop: '1px solid rgba(255, 255, 255, 0.1)'}}>
<p className="text-sm" style={{color: 'rgba(255, 255, 255, 0.5)'}}>© 2024 MyPMS Solutions. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-sm transition-colors hover:text-white" href="#" style={{color: 'rgba(255, 255, 255, 0.5)'}}>Privacy Policy</a>
<a className="text-sm transition-colors hover:text-white" href="#" style={{color: 'rgba(255, 255, 255, 0.5)'}}>Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
