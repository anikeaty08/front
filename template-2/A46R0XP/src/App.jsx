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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

    // Enhanced timeline animation with smooth sequential reveal
    function initSmoothTimeline() {
        const progressLine = document.getElementById('progress-line');
        const timelineSteps = document.querySelectorAll('.timeline-step');
        const timelineDots = document.querySelectorAll('.timeline-dot');
        const timelineContainer = document.getElementById('timeline-container');
        
        if (!progressLine || !timelineSteps.length || !timelineDots.length) return;

        let animationStarted = false;

        // Reset all elements to initial state
        function resetTimeline() {
            progressLine.style.height = '0%';
            timelineSteps.forEach(step => {
                step.style.opacity = '0';
                step.style.transform = 'translateY(50px)';
            });
            timelineDots.forEach(dot => {
                dot.style.background = '#e2e8f0';
                dot.style.transform = 'scale(0.8)';
                dot.style.opacity = '0.5';
                dot.style.boxShadow = 'none';
            });
        }

        // Animate timeline sequentially
        function animateTimeline() {
            if (animationStarted) return;
            animationStarted = true;

            // Animate progress line first
            setTimeout(() => {
                progressLine.style.height = '100%';
            }, 200);

            // Animate each step with staggered timing
            timelineSteps.forEach((step, index) => {
                const dot = timelineDots[index];
                const delay = 400 + (index * 600); // 600ms between each step

                setTimeout(() => {
                    // Fade in step card
                    step.style.opacity = '1';
                    step.style.transform = 'translateY(0px)';
                    
                    // Animate corresponding dot
                    if (dot) {
                        dot.style.background = '#475569';
                        dot.style.transform = 'scale(1)';
                        dot.style.opacity = '1';
                        dot.style.boxShadow = '0 0 20px rgba(71, 85, 105, 0.4)';
                    }
                }, delay);
            });
        }

        // Intersection Observer to trigger animation when section comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateTimeline();
                } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
                    // Reset when scrolling back up past the section
                    animationStarted = false;
                    resetTimeline();
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '-100px 0px -50px 0px'
        });

        // Initialize
        resetTimeline();
        observer.observe(timelineContainer);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSmoothTimeline);
    } else {
        initSmoothTimeline();
    }
    
}

{

        // Timeline Animation
        function initTimeline() {
            const progressLine = document.getElementById('progress-line');
            const timelineSteps = document.querySelectorAll('.timeline-step');
            const timelineDots = document.querySelectorAll('.timeline-dot');
            
            let currentActiveStep = 0;
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const stepNumber = parseInt(entry.target.dataset.step);
                        
                        // Animate step
                        entry.target.classList.add('animate-in');
                        
                        // Update progress line and dots
                        if (stepNumber > currentActiveStep) {
                            currentActiveStep = stepNumber;
                            
                            // Update progress line height
                            const progressHeight = (currentActiveStep / timelineSteps.length) * 100;
                            progressLine.style.height = `${progressHeight}%`;
                            
                            // Update dots
                            timelineDots.forEach((dot, index) => {
                                if (index < currentActiveStep) {
                                    dot.classList.add('active');
                                } else {
                                    dot.classList.remove('active');
                                }
                            });
                        }
                    }
                });
            }, {
                threshold: 0.3,
                rootMargin: '-50px'
            });

            timelineSteps.forEach(step => observer.observe(step));
        }

        // Counter Animation
        function animateCounters() {
            const counters = document.querySelectorAll('[data-count]');
            
            counters.forEach(counter => {
                const target = parseInt(counter.dataset.count);
                const increment = target / 100;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                const observer = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        updateCounter();
                        observer.disconnect();
                    }
                });
                
                observer.observe(counter);
            });
        }

        // Scroll Reveal Animation
        function initScrollReveal() {
            const elements = document.querySelectorAll('.scroll-reveal');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '50px'
            });
            
            elements.forEach(el => observer.observe(el));
        }

        // Magnetic Effect
        function initMagneticEffect() {
            const magneticElements = document.querySelectorAll('.magnetic');
            
            magneticElements.forEach(element => {
                element.addEventListener('mousemove', (e) => {
                    const rect = element.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    
                    const moveX = x * 0.1;
                    const moveY = y * 0.1;
                    
                    element.style.transform = `translate(${moveX}px, ${moveY}px)`;
                });
                
                element.addEventListener('mouseleave', () => {
                    element.style.transform = 'translate(0px, 0px)';
                });
            });
        }

        // Smooth scrolling for navigation
        function initSmoothScroll() {
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
        }

        // Initialize all functions when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            initTimeline();
            animateCounters();
            initScrollReveal();
            initMagneticEffect();
            initSmoothScroll();
        });
    
}
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
      <div className="top-0 w-full h-screen bg-cover bg-center -z-10 absolute" style={{backgroundImage: `url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a8f75e15-5f15-4877-a253-da0b8f89efee_3840w.jpg")`}}></div>

<header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 fade-in">
<nav className="glass border rounded-2xl px-6 py-3 shadow-lg bg-white/80 border-slate-200/60 shadow-slate-900/5">
<div className="flex items-center gap-8">
<a className="text-lg font-semibold tracking-tight" href="#">ATELIER</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium transition text-slate-600 hover:text-slate-900" href="#collections">Collections</a>
<a className="text-sm font-medium transition text-slate-600 hover:text-slate-900" href="#studio">Studio</a>
<a className="text-sm font-medium transition text-slate-600 hover:text-slate-900" href="#process">Process</a>
<a className="text-sm font-medium transition text-slate-600 hover:text-slate-900" href="#contact">Contact</a>
</div>
<button className="md:hidden p-2 rounded-lg transition hover:bg-slate-100">
<svg className="lucide lucide-menu h-4 w-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
</div>
</nav>
</header>
<main className="">

<section className="relative min-h-screen flex overflow-hidden fade-in bg-gradient-to-br from-slate-50 via-white to-purple-50/30 items-center justify-center">
<div className="max-w-7xl sm:px-6 relative z-10 text-center mr-auto ml-auto pr-4 pl-4">
<div className="fade-in">

<div className="mb-8 slide-up visible">
<span className="inline-flex items-center gap-2 glass text-sm font-medium text-[#000000] bg-white/60 border-[#000000]/40 border rounded-full pt-3 pr-6 pb-3 pl-6">
<svg className="lucide lucide-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
                    Haute Couture Studio
                </span>
</div>
<div className="text-reveal visible mb-8">
<h1 className="sm:text-8xl lg:text-9xl leading-none text-7xl font-light tracking-tight font-playfair">
<span className="bg-gradient-to-r bg-clip-text text-transparent inline-block mb-4 from-slate-800 via-slate-600 to-purple-700">Timeless</span>
<span className="font-light inline-block relative text-slate-400">
<span className="">ÉLEGANCE</span>
<div className="absolute -right-8 -top-4 w-8 h-8 bg-gradient-to-br rounded-full opacity-60 blur-sm floating from-purple-300 to-pink-300"></div>
</span>
</h1>
</div>
<p className="text-xl sm:text-2xl lg:text-3xl max-w-4xl mx-auto mb-16 leading-relaxed slide-up visible font-light text-slate-600">
                Where timeless fashion meets contemporary artistry—crafting bespoke pieces that celebrate your unique elegance and personal style.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 slide-up stagger-1 visible mb-16">
<button className="group glass border rounded-2xl px-10 py-5 font-medium hover-lift magnetic flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 border-slate-200/60 text-slate-800" style={{transform: `translate(0px, 0px)`}}>
<svg className="lucide lucide-eye" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
                    Explore Collections
                    <svg className="lucide lucide-arrow-right h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<button className="glass border rounded-2xl px-10 py-5 font-medium hover-lift magnetic flex items-center gap-3 glow-hover bg-gradient-to-r shadow-lg hover:shadow-2xl transition-all duration-300 from-slate-900 to-purple-900 border-slate-800 text-white" style={{transform: `translate(0px, 0px)`}}>
<svg className="lucide lucide-calendar" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path></svg>
                    Book Consultation
                </button>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 slide-up stagger-2 visible">
<div className="text-center">
<div className="text-2xl sm:text-3xl font-light font-playfair mb-1 text-slate-800">500+</div>
<p className="text-sm text-slate-500 uppercase tracking-wider">Happy Clients</p>
</div>
<div className="hidden sm:block w-px h-8 bg-slate-300"></div>
<div className="text-center">
<div className="text-2xl sm:text-3xl font-light font-playfair mb-1 text-slate-800">15 Years</div>
<p className="text-sm text-slate-500 uppercase tracking-wider">Experience</p>
</div>
<div className="hidden sm:block w-px h-8 bg-slate-300"></div>
<div className="text-center">
<div className="text-2xl sm:text-3xl font-light font-playfair mb-1 text-slate-800">Award Winning</div>
<p className="text-sm text-slate-500 uppercase tracking-wider">Studio</p>
</div>
</div>
</div>
</div>

<div className="absolute top-1/4 left-10 w-24 h-24 bg-gradient-to-br rounded-full opacity-30 blur-xl floating from-purple-200 to-pink-200"></div>
<div className="absolute bottom-1/3 right-16 w-20 h-20 bg-gradient-to-br rounded-full opacity-30 blur-xl floating from-blue-200 to-indigo-200" style={{animationDelay: `-2s`}}></div>
<div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br rounded-full opacity-20 blur-xl floating from-amber-200 to-orange-200" style={{animationDelay: `-4s`}}></div>
<div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-gradient-to-br rounded-full opacity-25 blur-xl floating from-green-200 to-emerald-200" style={{animationDelay: `-1s`}}></div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 slide-up stagger-3 visible">
<div className="flex flex-col gap-2 text-slate-400 items-center cursor-pointer transition-all duration-300 hover:text-slate-600" onClick={(e) => { document.getElementById('collections').scrollIntoView({behavior: 'smooth', block: 'start'}) }}>
<span className="text-sm font-medium text-slate-600 tracking-wider">SCROLL</span>
<div className="w-px h-8 bg-slate-600"></div>
<svg className="lucide lucide-chevron-down animate-bounce w-[16px] h-[16px] text-slate-600 transition-colors duration-300" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className=""></path></svg>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 scroll-reveal visible">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center slide-up stagger-1 visible">
<div className="text-4xl sm:text-5xl font-light font-playfair text-gradient mb-2" data-count="500">5</div>
<p className="text-slate-600">Happy Clients</p>
</div>
<div className="text-center slide-up stagger-2 visible">
<div className="text-4xl sm:text-5xl font-light font-playfair text-gradient mb-2" data-count="1200">12</div>
<p className="text-slate-600">Designs Created</p>
</div>
<div className="text-center slide-up stagger-3 visible">
<div className="text-4xl sm:text-5xl font-light font-playfair text-gradient mb-2" data-count="15">1</div>
<p className="text-slate-600">Years Experience</p>
</div>
<div className="text-center slide-up stagger-4 visible">
<div className="text-4xl sm:text-5xl font-light font-playfair text-gradient mb-2" data-count="98">1</div>
<p className="text-slate-600">Satisfaction %</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 scroll-reveal visible" id="studio">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="slide-up visible">
<p className="text-sm text-slate-500 uppercase tracking-wider mb-4">About Our Studio</p>
<h2 className="text-4xl sm:text-6xl font-light font-playfair tracking-tight text-gradient mb-8">Crafted with Passion</h2>
<div className="space-y-6 text-lg leading-relaxed text-slate-600">
<p className="">For over a decade, Atelier has been at the forefront of bespoke fashion design, creating timeless pieces that reflect the unique personality of each client.</p>
<p>Our atelier combines traditional craftsmanship with contemporary design sensibilities, resulting in garments that are both elegant and innovative.</p>
<p>Every piece is meticulously crafted by our skilled artisans using only the finest materials sourced from renowned suppliers worldwide.</p>
</div>
<div className="mt-10">
<button className="glass border rounded-2xl px-8 py-4 font-medium hover-lift magnetic flex items-center gap-3 bg-white/80 border-slate-200/60">
                            Discover Our Story
                            <svg className="lucide lucide-external-link h-5 w-5" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
</div>
</div>
<div className="relative slide-up stagger-1 visible">
<div className="relative z-10 rotate-hover">
<img alt="Atelier Studio" className="w-full h-[600px] object-cover rounded-3xl shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3208bf01-65b0-4fa1-8ea9-3dd17c27c1ce_1600w.jpg" />
</div>
<div className="absolute -bottom-8 -right-8 w-full h-full opacity-30 -z-10 bg-[#ccd2d6] rounded-3xl"></div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 scroll-reveal visible mr-auto ml-auto pt-40 pr-4 pb-40 pl-4" id="collections">
<div className="text-center mb-16 slide-up visible">
<p className="text-sm text-slate-500 uppercase tracking-wider mb-4">Featured Collection</p>
<h2 className="sm:text-7xl text-gradient text-5xl font-light tracking-tight font-playfair mb-6">Spring Awakening</h2>
<p className="max-w-2xl text-xl text-slate-600 mr-auto ml-auto">Ethereal designs inspired by nature's rebirth, crafted with sustainable luxury materials.</p>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 slide-up stagger-1 visible" style={{columnFill: `balance`}}>

<div className="break-inside-avoid relative group hover-lift scale-hover mb-6">
<div className="relative glass border rounded-3xl overflow-hidden shadow-lg bg-white/60 border-slate-200/60" style={{height: `480px`}}>
<img alt="Spring Collection Hero" className="w-full h-full object-cover image-parallax group-hover:scale-110" src="/assets/0acba87b-568b-4948-8d56-d3e725650040_800w.jpg" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-slate-900/60"></div>
<div className="absolute bottom-8 left-8 right-8 text-white">
<span className="inline-block px-3 py-1 rounded-full glass text-sm font-medium mb-4 bg-white/20">Evening Collection</span>
<h3 className="text-3xl font-light font-playfair mb-2">Midnight Garden</h3>
<p className="text-lg text-white/80">Flowing silhouettes in midnight silk</p>
</div>
<div className="absolute top-6 right-6">
<button className="glass border rounded-xl p-3 transition magnetic bg-white/20 border-white/30 text-white hover:bg-white/30">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
</div>
</div>
</div>

<div className="break-inside-avoid relative group hover-lift scale-hover mb-6">
<div className="relative glass border rounded-3xl overflow-hidden shadow-lg bg-white/60 border-slate-200/60" style={{height: `320px`}}>
<img alt="Daywear Collection" className="w-full h-full object-cover image-parallax group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/79bded17-e03a-4c03-b0be-47af0aef19c7_800w.jpg" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-slate-900/40"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<span className="text-sm font-medium">Daywear</span>
<p className="text-xs mt-1 text-white/80">Effortless elegance for every day</p>
</div>
</div>
</div>

<div className="break-inside-avoid relative group hover-lift scale-hover mb-6">
<div className="relative glass border rounded-3xl overflow-hidden shadow-lg bg-white/60 border-slate-200/60" style={{height: `280px`}}>
<img alt="Accessories" className="w-full h-full object-cover image-parallax group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d9701279-c2dd-4256-b7c4-7dc1874bbd1e_800w.jpg" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-slate-900/40"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<span className="text-sm font-medium">Accessories</span>
<p className="text-xs mt-1 text-white/80">The perfect finishing touch</p>
</div>
</div>
</div>

<div className="break-inside-avoid relative group hover-lift scale-hover mb-6">
<div className="relative glass border rounded-3xl overflow-hidden shadow-lg bg-white/60 border-slate-200/60" style={{height: `360px`}}>
<img alt="Formal Collection" className="w-full h-full object-cover image-parallax group-hover:scale-110" src="/assets/9473f3af-3f99-40ef-a58f-01b003f9d8b1_800w.jpg" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-slate-900/40"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<span className="text-sm font-medium">Formal Wear</span>
<p className="text-xs mt-1 text-white/80">Sophisticated pieces for special occasions</p>
</div>
</div>
</div>

<div className="break-inside-avoid relative group hover-lift scale-hover mb-6">
<div className="relative glass border rounded-3xl overflow-hidden shadow-lg bg-white/60 border-slate-200/60" style={{height: `240px`}}>
<img alt="Casual Collection" className="w-full h-full object-cover image-parallax group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cb157054-620a-4023-8af4-73869ab9ec33_800w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-slate-900/40"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<span className="text-sm font-medium">Casual Luxe</span>
<p className="text-xs mt-1 text-white/80">Relaxed sophistication</p>
</div>
</div>
</div>

<div className="break-inside-avoid relative group hover-lift scale-hover mb-6">
<div className="relative glass border rounded-3xl overflow-hidden shadow-lg bg-white/60 border-slate-200/60" style={{height: `400px`}}>
<img alt="Seasonal Collection" className="w-full h-full object-cover image-parallax group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5d3f31d8-ad29-4752-bf8e-7989ba050dbc_800w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-slate-900/40"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<span className="text-sm font-medium">Seasonal Special</span>
<p className="text-xs mt-1 text-white/80">Limited edition pieces</p>
</div>
<div className="absolute top-4 right-4">
<span className="glass px-2 py-1 rounded-full text-xs font-medium bg-amber-600 text-white">New</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 scroll-reveal visible mr-auto ml-auto pt-20 pr-4 pb-20 pl-4" id="process">
<div className="text-center mb-16 slide-up visible">
<p className="text-sm text-slate-500 uppercase tracking-wider mb-4">Our Process</p>
<h2 className="sm:text-7xl text-gradient text-5xl font-light tracking-tight font-playfair mb-6">From Vision to Reality</h2>
<p className="max-w-2xl text-xl text-slate-600 mr-auto ml-auto">A seamless journey from initial consultation to your perfect garment.</p>
</div>
<div className="relative" id="timeline-container">

<div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-slate-200 hidden lg:block rounded-full overflow-hidden">
<div className="w-full progress-line rounded-full" id="progress-line" style={{height: `0%`, background: `linear-gradient(to bottom, #475569, #64748b)`, transition: `height 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)`, boxShadow: `0 0 10px rgba(71, 85, 105, 0.3)`}}></div>
</div>
<div className="space-y-20" id="timeline-steps">

<div className="flex flex-col lg:flex-row gap-12 items-center timeline-step" data-step="1" style={{opacity: `0`, transform: `translateY(50px)`, transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1)`}}>
<div className="flex-1 lg:text-right lg:pr-12">
<div className="glass hover-lift bg-white/80 border-slate-200/60 border rounded-3xl pt-8 pr-8 pb-8 pl-8 transform transition-all duration-500">
<div className="flex gap-4 lg:justify-end mb-6 items-center">
<span className="uppercase text-sm font-medium text-slate-600 tracking-wider">Step 01</span>
</div>
<h3 className="text-3xl font-light font-playfair mb-4 text-slate-800">Initial Consultation</h3>
<p className="leading-relaxed text-slate-600 mb-6">We begin with a detailed conversation about your vision, style preferences, and the occasion for your custom piece. Understanding your lifestyle and aesthetic goals is our first priority.</p>
<div className="flex items-center gap-2 text-sm text-slate-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>
<span>Duration: 60-90 minutes</span>
</div>
</div>
</div>
<div className="w-6 h-6 z-10 flex-shrink-0 rounded-full shadow-lg timeline-dot" data-dot="1" style={{background: `#e2e8f0`, transform: `scale(0.8)`, opacity: `0.5`, transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)`}}></div>
<div className="flex-1 lg:pl-12"></div>
</div>

<div className="flex flex-col lg:flex-row items-center gap-12 timeline-step" data-step="2" style={{opacity: `0`, transform: `translateY(50px)`, transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1)`}}>
<div className="flex-1 lg:pr-12"></div>
<div className="w-6 h-6 z-10 flex-shrink-0 rounded-full shadow-lg timeline-dot" data-dot="2" style={{background: `#e2e8f0`, transform: `scale(0.8)`, opacity: `0.5`, transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)`}}></div>
<div className="flex-1 lg:pl-12">
<div className="glass hover-lift bg-white/80 border-slate-200/60 border rounded-3xl pt-8 pr-8 pb-8 pl-8 transform transition-all duration-500">
<div className="flex gap-4 mb-6 items-center">
<span className="uppercase text-sm font-medium text-slate-600 tracking-wider">Step 02</span>
</div>
<h3 className="text-3xl font-light font-playfair mb-4 text-slate-800">Design & Sketching</h3>
<p className="leading-relaxed text-slate-600 mb-6">Our designers create detailed sketches and color palettes based on your requirements and personal aesthetic. We'll present multiple concepts for your consideration.</p>
<div className="flex items-center gap-2 text-sm text-slate-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>
<span>Duration: 3-5 days</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row items-center gap-12 timeline-step" data-step="3" style={{opacity: `0`, transform: `translateY(50px)`, transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1)`}}>
<div className="flex-1 lg:text-right lg:pr-12">
<div className="glass border rounded-3xl p-8 hover-lift bg-white/80 border-slate-200/60 transform transition-all duration-500">
<div className="flex items-center gap-4 lg:justify-end mb-6">
<span className="uppercase text-sm font-medium text-slate-600 tracking-wider">Step 03</span>
</div>
<h3 className="text-3xl font-light font-playfair mb-4 text-slate-800">Measurements & Fitting</h3>
<p className="leading-relaxed text-slate-600 mb-6">Precise measurements are taken and a fitting schedule is established to ensure the perfect fit. We create a custom pattern specifically for your body.</p>
<div className="flex items-center gap-2 text-sm text-slate-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>
<span>Duration: 45-60 minutes</span>
</div>
</div>
</div>
<div className="w-6 h-6 z-10 flex-shrink-0 rounded-full shadow-lg timeline-dot" data-dot="3" style={{background: `#e2e8f0`, transform: `scale(0.8)`, opacity: `0.5`, transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)`}}></div>
<div className="flex-1 lg:pl-12"></div>
</div>

<div className="flex flex-col lg:flex-row items-center gap-12 timeline-step" data-step="4" style={{opacity: `0`, transform: `translateY(50px)`, transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1)`}}>
<div className="flex-1 lg:pr-12"></div>
<div className="w-6 h-6 z-10 flex-shrink-0 rounded-full shadow-lg timeline-dot" data-dot="4" style={{background: `#e2e8f0`, transform: `scale(0.8)`, opacity: `0.5`, transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)`}}></div>
<div className="flex-1 lg:pl-12">
<div className="glass border rounded-3xl p-8 hover-lift bg-white/80 border-slate-200/60 transform transition-all duration-500">
<div className="flex items-center gap-4 mb-6">
<span className="uppercase text-sm font-medium text-slate-600 tracking-wider">Step 04</span>
</div>
<h3 className="text-3xl font-light font-playfair mb-4 text-slate-800">Final Creation</h3>
<p className="leading-relaxed text-slate-600 mb-6">Your masterpiece is carefully crafted by our skilled artisans with meticulous attention to every detail. Quality checks ensure perfection at every stage.</p>
<div className="flex items-center gap-2 text-sm text-slate-500">
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>
<span>Duration: 4-6 weeks</span>
</div>
</div>
</div>
</div>
</div>
</div>

</section>


<section className="max-w-7xl sm:px-6 scroll-reveal visible mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
<div className="text-center mb-16 slide-up visible">
<p className="text-sm text-slate-500 uppercase tracking-wider mb-4">Meet Our Team</p>
<h2 className="text-5xl sm:text-7xl font-light font-playfair tracking-tight text-gradient mb-6">Master Artisans</h2>
<p className="text-xl max-w-2xl mx-auto text-slate-600">The talented individuals who bring your fashion dreams to life.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group slide-up stagger-1 visible">
<div className="rounded-3xl ring-1 p-6 sm:p-7 shadow-[0_2px_0_rgba(0,0,0,0.03),0_24px_48px_-24px_rgba(0,0,0,0.25)] ring-slate-200 bg-white hover:shadow-xl transition-all duration-300">
<div className="relative rounded-2xl ring-1 h-40 overflow-hidden bg-slate-50 ring-black/5">
<div className="absolute inset-0 grid place-items-center bg-cover bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3327dfd4-83f5-40ec-a77c-cae46f6652c2_800w.jpg)] bg-center group-hover:scale-110 transition-transform duration-500">
</div>
</div>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">Real‑Time Analytics</h3>
<p className="font-medium text-slate-600 mb-4">Master Tailor</p>
<p className="mt-1.5 text-sm text-slate-600">Monitor your AI workflows with comprehensive dashboards, performance metrics, and actionable insights.</p>
</div>
</div>
<div className="group slide-up stagger-2 visible">
<div className="rounded-3xl ring-1 p-6 sm:p-7 shadow-[0_2px_0_rgba(0,0,0,0.03),0_24px_48px_-24px_rgba(0,0,0,0.25)] ring-slate-200 bg-white hover:shadow-xl transition-all duration-300">
<div className="relative rounded-2xl ring-1 h-40 overflow-hidden bg-slate-50 ring-black/5">
<div className="absolute inset-0 grid place-items-center bg-cover bg-center group-hover:scale-110 transition-transform duration-500 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b59bad79-703a-4c05-8ed2-fafcc49a7b51_3840w.jpg)]">
</div>
</div>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">Marco Rossi</h3>
<p className="font-medium text-slate-600 mb-4">Master Tailor</p>
<p className="mt-1.5 text-sm text-slate-600">Marco's precision and craftsmanship ensure every garment achieves the perfect fit and exceptional quality.</p>
</div>
</div>
<div className="group slide-up stagger-3 visible">
<div className="rounded-3xl ring-1 p-6 sm:p-7 shadow-[0_2px_0_rgba(0,0,0,0.03),0_24px_48px_-24px_rgba(0,0,0,0.25)] ring-slate-200 bg-white hover:shadow-xl transition-all duration-300">
<div className="relative rounded-2xl ring-1 h-40 overflow-hidden bg-slate-50 ring-black/5">
<div className="absolute inset-0 grid place-items-center bg-cover bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/096dab35-ecaf-418f-a932-5b514543b035_800w.jpg)] bg-center group-hover:scale-110 transition-transform duration-500">
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mt-5">Emma Chen</h3>
<p className="font-medium text-slate-600 mb-4">Personal Stylist</p>
<p className="mt-1.5 text-sm text-slate-600">Emma specializes in understanding each client's unique style and translating it into the perfect wardrobe.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 scroll-reveal visible mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
<div className="text-center mb-16 slide-up visible">
<p className="text-sm text-slate-500 uppercase tracking-wider mb-4">Client Stories</p>
<h2 className="text-5xl sm:text-7xl font-light font-playfair tracking-tight text-gradient mb-6">Loved by Many</h2>
</div>
<div className="relative slide-up stagger-1 visible">

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl ring-1 ring-slate-200 p-12 text-center shadow-slate-900/5 transition-all duration-300 hover:shadow-xl hover:ring-slate-300 hover:-translate-y-2 hover:scale-105 group cursor-pointer">
<div className="w-20 h-20 mx-auto mb-8 rounded-full p-1 bg-white ring-1 ring-slate-200 transition-all duration-300 group-hover:ring-slate-300 group-hover:shadow-lg">
<div className="w-full h-full rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110">
<img alt="Client avatar" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6427e4fe-cc3d-458c-82db-b97593427830_320w.jpg" />
</div>
</div>
<p className="text-slate-600 leading-relaxed mx-auto max-w-md transition-colors duration-300 group-hover:text-slate-700">
      constantly strive to add value in every conversation with prospects and customers. Your team helped us organize assets so sales can find what they need and reach the right prospects at the right time.
    </p>
<div className="w-24 h-px bg-slate-200 mt-6 mr-auto mb-6 ml-auto transition-all duration-300 group-hover:bg-slate-400 group-hover:w-32"></div>
<div className="text-xs tracking-widest text-slate-500 uppercase transition-colors duration-300 group-hover:text-slate-700">
      Sarah Williams
      <div className="mt-1">Bride & CEO</div>
</div>
<div className="mt-8 inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-400 mx-auto transition-all duration-300 group-hover:border-slate-400 group-hover:text-slate-600 group-hover:bg-slate-50 group-hover:scale-110">
<svg className="lucide lucide-quote" data-lucide="quote" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>

<div className="bg-white rounded-3xl ring-1 ring-slate-200 p-12 text-center shadow-slate-900/5 transition-all duration-300 hover:shadow-xl hover:ring-slate-300 hover:-translate-y-2 hover:scale-105 group cursor-pointer">
<div className="w-20 h-20 mx-auto mb-8 rounded-full p-1 bg-white ring-1 ring-slate-200 transition-all duration-300 group-hover:ring-slate-300 group-hover:shadow-lg">
<div className="w-full h-full rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110">
<img alt="Client avatar" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/56000a50-18c1-4db4-bb41-87aa44b5c251_800w.jpg" />
</div>
</div>
<p className="text-slate-600 leading-relaxed mx-auto max-w-md transition-colors duration-300 group-hover:text-slate-700">
      I'm amazed at how quickly the team gets back to me—and in such helpful fashion. The experience feels truly customized to my needs with support staff that's genuinely legendary.
    </p>
<div className="w-24 h-px bg-slate-200 mx-auto mt-6 mb-6 transition-all duration-300 group-hover:bg-slate-400 group-hover:w-32"></div>
<div className="text-xs tracking-widest text-slate-500 uppercase transition-colors duration-300 group-hover:text-slate-700">
      Jessica Martinez
      <div className="mt-1">Fashion Influencer</div>
</div>
<div className="mt-8 inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-400 mx-auto transition-all duration-300 group-hover:border-slate-400 group-hover:text-slate-600 group-hover:bg-slate-50 group-hover:scale-110">
<svg className="lucide lucide-quote" data-lucide="quote" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>

<div className="bg-white rounded-3xl ring-1 ring-slate-200 p-12 text-center shadow-slate-900/5 transition-all duration-300 hover:shadow-xl hover:ring-slate-300 hover:-translate-y-2 hover:scale-105 group cursor-pointer">
<div className="w-20 h-20 mx-auto mb-8 rounded-full p-1 bg-white ring-1 ring-slate-200 transition-all duration-300 group-hover:ring-slate-300 group-hover:shadow-lg">
<div className="w-full h-full rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110">
<img alt="Client avatar" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2911b4b5-c0c3-445a-a157-93edee63f9af_320w.jpg" />
</div>
</div>
<p className="text-slate-600 leading-relaxed mx-auto max-w-md transition-colors duration-300 group-hover:text-slate-700">
      An incredibly effective service—our team can collaborate seamlessly and deliver with confidence. The process is simple, elegant, and consistently reliable.
    </p>
<div className="w-24 h-px bg-slate-200 mx-auto mt-6 mb-6 transition-all duration-300 group-hover:bg-slate-400 group-hover:w-32"></div>
<div className="text-xs tracking-widest text-slate-500 uppercase transition-colors duration-300 group-hover:text-slate-700">
      Michael Thompson
      <div className="mt-1">Executive Director</div>
</div>
<div className="mt-8 inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-400 mx-auto transition-all duration-300 group-hover:border-slate-400 group-hover:text-slate-600 group-hover:bg-slate-50 group-hover:scale-110">
<svg className="lucide lucide-quote" data-lucide="quote" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</div>

<div className="hidden" id="testimonial-slider">
<div className="flex" id="testimonial-track"></div>
</div>
<div className="hidden items-center justify-center gap-4 mt-8">
<button id="prev-testimonial"></button>
<div id="testimonial-dots">
<button></button><button></button><button></button>
</div>
<button id="next-testimonial"></button>
</div>
</div>
</section><section className="max-w-7xl sm:px-6 scroll-reveal visible mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
<div className="text-center mb-16 slide-up visible">
<p className="text-sm text-slate-500 uppercase tracking-wider mb-4">Our Services</p>
<h2 className="text-5xl sm:text-7xl font-light font-playfair tracking-tight text-gradient mb-6">Tailored to You</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="aura-emfalozj5">

<div className="group hover-lift slide-up stagger-1 visible transition-all duration-500 hover:scale-105 rounded-3xl mt-0 mb-20 scale-hover">
<div className="relative glass overflow-hidden bg-white/80 border-slate-200/60 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-lg hover:shadow-2xl hover:bg-slate-900 transition-all duration-500">
<div className="relative z-10">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider group-hover:text-white/70 transition-colors duration-500">Popular</span>
</div>
<h3 className="text-2xl font-semibold mb-4 text-slate-800 group-hover:text-white transition-colors duration-500">Personal Styling</h3>
<p className="mb-6 leading-relaxed text-slate-600 group-hover:text-white/80 transition-colors duration-500">Transform your wardrobe with our person selections.</p>
<div className="mb-6 space-y-3">
<div className="flex items-center gap-3">
<svg className="text-slate-500 group-hover:text-white/70 transition-colors duration-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm text-slate-600 group-hover:text-white/80 transition-colors duration-500">Wardrobe audit & assessment</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-slate-500 group-hover:text-white/70 transition-colors duration-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm text-slate-600 group-hover:text-white/80 transition-colors duration-500">Personalized style guide</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-slate-500 group-hover:text-white/70 transition-colors duration-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm text-slate-600 group-hover:text-white/80 transition-colors duration-500">Shopping recommendations</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-slate-500 group-hover:text-white/70 transition-colors duration-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm text-slate-600 group-hover:text-white/80 transition-colors duration-500">Color palette analysis</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-slate-500 group-hover:text-white/70 transition-colors duration-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm text-slate-600 group-hover:text-white/80 transition-colors duration-500">Follow-up styling tips</span>
</div>
</div>
<div className="mb-8">
<span className="text-4xl font-light tracking-tight text-slate-900 group-hover:text-white transition-colors duration-500">$399</span>
<span className="text-slate-500 ml-2 group-hover:text-white/70 transition-colors duration-500">/ 2 hour session</span>
<p className="text-xs text-slate-500 mt-1 group-hover:text-white/60 transition-colors duration-500">Perfect for style refreshes</p>
</div>
<button className="w-full glass transition-all duration-500 hover:shadow-xl font-medium text-white bg-slate-900 rounded-2xl pt-4 pb-4 group-hover:bg-white group-hover:text-slate-900 hover:scale-105 transform">
                    Book Session
                </button>
</div>
</div>
</div>

<div className="group hover-lift slide-up stagger-2 visible rounded-3xl mb-12 scale-hover transition-all duration-500 hover:scale-105">
<div className="relative glass overflow-hidden bg-slate-900/90 border-slate-300/60 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-lg hover:shadow-2xl hover:bg-white/90 transition-all duration-500">
<div className="absolute -top-8 left-1/2 -translate-x-1/2">
<span className="glass text-sm font-medium rounded-full pt-2 pr-4 pb-2 pl-4 text-white bg-slate-800 group-hover:bg-slate-200 group-hover:text-slate-800 transition-colors duration-500">Most Popular</span>
</div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-white/60 uppercase tracking-wider group-hover:text-slate-600 transition-colors duration-500">Premium</span>
</div>
<h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-slate-900 transition-colors duration-500">Ready-to-Wear</h3>
<p className="leading-relaxed text-white/60 mb-6 group-hover:text-slate-600 transition-colors duration-500">Curated fashion pieces from our latest collections, tailored to fit your personal style perfectly.</p>
<div className="mb-6 space-y-3">
<div className="flex items-center gap-3">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" stroke-linejoin-slate-500="" strokeWidth="2" transition-colors="" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm text-white/80 group-hover:text-slate-600 transition-colors duration-500">Complete styling session (3 hours)</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-white/60 group-hover:text-slate-500 transition-colors duration-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm text-white/80 group-hover:text-slate-600 transition-colors duration-500">5-7 curated pieces selection</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-white/60 group-hover:text-slate-500 transition-colors duration-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm text-white/80 group-hover:text-slate-600 transition-colors duration-500">Professional alterations included</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-white/60 group-hover:text-slate-500 transition-colors duration-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm text-white/80 group-hover:text-slate-600 transition-colors duration-500">Seasonal wardrobe planning</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-white/60 group-hover:text-slate-500 transition-colors duration-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm text-white/80 group-hover:text-slate-600 transition-colors duration-500">6-month styling support</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-white/60 group-hover:text-slate-500 transition-colors duration-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm text-white/80 group-hover:text-slate-600 transition-colors duration-500">Exclusive collection access</span>
</div>
</div>
<div className="mb-8">
<span className="text-4xl font-light text-white tracking-tight group-hover:text-slate-900 transition-colors duration-500">$899</span>
<span className="text-white/60 ml-2 group-hover:text-slate-500 transition-colors duration-500">/ full service</span>
<p className="text-xs text-white/50 mt-1 group-hover:text-slate-500 transition-colors duration-500">Complete wardrobe transformation</p>
</div>
<button className="w-full glass transition-all duration-500 hover:shadow-xl font-medium text-slate-900 bg-white rounded-2xl pt-4 pb-4 group-hover:bg-slate-900 group-hover:text-white hover:scale-105 transform">
                    Explore Collection
                </button>
</div>
</div>
</div>

<div className="group hover-lift slide-up stagger-3 visible rounded-3xl mb-12 scale-hover transition-all duration-500 hover:scale-105">
<div className="relative glass overflow-hidden bg-white/80 border-slate-200/60 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-lg hover:shadow-2xl hover:bg-slate-900 transition-all duration-500">
<div className="relative z-10">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider group-hover:text-white/70 transition-colors duration-500">Luxury</span>
</div>
<h3 className="text-2xl font-semibold mb-4 text-slate-800 group-hover:text-white transition-colors duration-500">Bespoke Couture</h3>
<p className="mb-6 leading-relaxed text-slate-600 group-hover:text-white/80 transition-colors duration-500">Exclusively designed pieces crafted with the finest materials and unparalleled attention to detail.</p>
<div className="mb-6 space-y-3">
<div className="flex items-center gap-3">
<svg className="text-slate-500 group-hover:text-white/70 transition-colors duration-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm text-slate-600 group-hover:text-white/80 transition-colors duration-500">One-on-one design consultation</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-slate-500 group-hover:text-white/70 transition-colors duration-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm text-slate-600 group-hover:text-white/80 transition-colors duration-500">Custom pattern creation</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-slate-500 group-hover:text-white/70 transition-colors duration-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm text-slate-600 group-hover:text-white/80 transition-colors duration-500">Luxury fabric selection</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-slate-500 group-hover:text-white/70 transition-colors duration-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm text-slate-600 group-hover:text-white/80 transition-colors duration-500">Multiple fittings (4-5 sessions)</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-slate-500 group-hover:text-white/70 transition-colors duration-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm text-slate-600 group-hover:text-white/80 transition-colors duration-500">Hand-finished details</span>
</div>
<div className="flex items-center gap-3">
<svg className="text-slate-500 group-hover:text-white/70 transition-colors duration-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-sm text-slate-600 group-hover:text-white/80 transition-colors duration-500">Lifetime garment care service</span>
</div>
</div>
<div className="mb-8">
<span className="text-4xl font-light tracking-tight text-slate-900 group-hover:text-white transition-colors duration-500">$2,999</span>
<span className="text-slate-500 ml-2 group-hover:text-white/70 transition-colors duration-500">/ 8 weeks</span>
<p className="text-xs text-slate-500 mt-1 group-hover:text-white/60 transition-colors duration-500">Truly one-of-a-kind creation</p>
</div>
<button className="w-full glass rounded-2xl py-4 font-medium transition-all duration-500 hover:shadow-xl bg-slate-900 text-white group-hover:bg-white group-hover:text-slate-900 hover:scale-105 transform">
                    Schedule Consultation
                </button>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 scroll-reveal visible mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
<div className="relative glass overflow-hidden slide-up visible text-center bg-cover border rounded-3xl pt-12 pr-12 pb-12 pl-12 shadow-lg bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d7ee1ae4-6186-4fda-8f94-0751ebe55bf2_800w.jpg)] bg-white/80 border-slate-200/60">
<div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br rounded-full opacity-40 blur-2xl transform -translate-x-12 -translate-y-12 from-blue-100 to-indigo-200"></div>
<div className="absolute bottom-0 right-0 w-40 h-40 opacity-40 transform bg-gradient-to-br from-purple-100 to-pink-200 rounded-full blur-2xl translate-x-12 translate-y-12"></div>
<div className="relative z-10">
<h2 className="sm:text-6xl text-gradient text-4xl font-light tracking-tight font-playfair mb-6">Stay Inspired</h2>
<p className="text-xl mb-8 max-w-2xl mx-auto text-slate-600">Get exclusive access to new collections, styling tips, and behind-the-scenes insights from our atelier.</p>
<form className="max-w-md mx-auto">
<div className="flex gap-3">
<input className="flex-1 glass border rounded-2xl px-4 py-3 placeholder-slate-500 focus:outline-none focus:border-slate-400 magnetic bg-white/60 border-slate-200/60 text-slate-800" placeholder="Enter your email" type="email" />
<button className="glass rounded-2xl px-6 py-3 font-medium hover-lift magnetic glow-hover bg-slate-900 text-white" style={{transform: `translate(0px, 0px)`}} type="submit">
                        Subscribe
                    </button>
</div>
</form>
</div>
</div>
</section>

<footer className="glass border-t mt-20 bg-white/80 border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

<div className="lg:col-span-2">
<h3 className="text-4xl font-light font-playfair tracking-tight text-gradient mb-4">ATELIER</h3>
<p className="mb-6 max-w-md leading-relaxed text-slate-600">
                            Crafting timeless elegance through bespoke fashion design. Where your personal style meets our artistic vision.
                        </p>
<div className="flex gap-4">
<a className="glass border rounded-xl p-3 transition hover-lift magnetic bg-slate-100 border-slate-200/60 text-slate-600 hover:text-slate-900" href="#">
<svg className="lucide lucide-instagram h-5 w-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20"></rect><path></path><line></line></svg>
</a>
<a className="glass border rounded-xl p-3 transition hover-lift magnetic bg-slate-100 border-slate-200/60 text-slate-600 hover:text-slate-900" href="#">
<svg className="lucide lucide-linkedin h-5 w-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="12" width="4"></rect><circle cx="4" cy="4"></circle></svg>
</a>
<a className="glass border rounded-xl p-3 transition hover-lift magnetic bg-slate-100 border-slate-200/60 text-slate-600 hover:text-slate-900" href="#" style={{transform: `translate(0px, 0px)`}}>
<svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</a>
</div>
</div>

<div className="">
<h4 className="text-lg font-semibold mb-6 text-slate-800">Services</h4>
<ul className="space-y-3">
<li><a className="transition text-slate-600 hover:text-slate-900" href="#">Personal Styling</a></li>
<li className=""><a className="transition text-slate-600 hover:text-slate-900" href="#">Ready-to-Wear</a></li>
<li><a className="transition text-slate-600 hover:text-slate-900" href="#">Bespoke Couture</a></li>
<li><a className="transition text-slate-600 hover:text-slate-900" href="#">Alterations</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-semibold mb-6 text-slate-800">Contact</h4>
<ul className="space-y-3">
<li className="flex items-center gap-3">
<svg className="text-slate-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="10"></circle></svg>
<span className="text-slate-600">Madison Avenue, NYC</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-slate-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-slate-600">(555) 123-4567</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-slate-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20"></rect><path></path></svg>
<span className="text-slate-600">hello@atelier.com</span>
</li>
</ul>
</div>
</div>

<div className="border-t pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center text-slate-500 border-slate-200">
<p>© 2024 Atelier. All rights reserved.</p>
<div className="flex gap-6 mt-4 sm:mt-0">
<a className="transition hover:text-slate-700" href="#">Privacy Policy</a>
<a className="transition hover:text-slate-700" href="#">Terms of Service</a>
<a className="transition hover:text-slate-700" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>
</main>



    </>
  );
}
