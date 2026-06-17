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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // Set current year
            document.getElementById('year').textContent = new Date().getFullYear();

            // Navbar scroll effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('nav-scrolled');
                } else {
                    navbar.classList.remove('nav-scrolled');
                }
            });

            // Intersection Observer for scroll animations
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -10% 0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Run once
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-up').forEach(el => {
                observer.observe(el);
            });

            // Form Handling (Client-side simulation)
            const form = document.getElementById('contact-form');
            const successMsg = document.getElementById('form-success');
            const resetBtn = document.getElementById('reset-form');

            if(form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    // Fade out form, fade in success
                    form.style.opacity = '0';
                    setTimeout(() => {
                        form.classList.add('invisible');
                        successMsg.classList.remove('hidden');
                        // Simple entrance animation
                        successMsg.style.opacity = '0';
                        successMsg.style.transform = 'translateY(10px)';
                        requestAnimationFrame(() => {
                            successMsg.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                            successMsg.style.opacity = '1';
                            successMsg.style.transform = 'translateY(0)';
                        });
                    }, 300);
                });
            }

            if(resetBtn) {
                resetBtn.addEventListener('click', () => {
                    form.reset();
                    successMsg.style.opacity = '0';
                    setTimeout(() => {
                        successMsg.classList.add('hidden');
                        form.classList.remove('invisible');
                        form.style.transition = 'opacity 0.5s ease';
                        form.style.opacity = '1';
                    }, 300);
                });
            }

            // Our Work horizontal drag scroll (Applied to the new work track)
            const slider = document.getElementById('work-track');
            let isDown = false;
            let startX;
            let scrollLeft;

            if(slider) {
                slider.addEventListener('mousedown', (e) => {
                    isDown = true;
                    slider.classList.add('active');
                    startX = e.pageX - slider.offsetLeft;
                    scrollLeft = slider.scrollLeft;
                });
                slider.addEventListener('mouseleave', () => {
                    isDown = false;
                    slider.classList.remove('active');
                });
                slider.addEventListener('mouseup', () => {
                    isDown = false;
                    slider.classList.remove('active');
                });
                slider.addEventListener('mousemove', (e) => {
                    if (!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - slider.offsetLeft;
                    const walk = (x - startX) * 2; // Scroll-fast
                    slider.scrollLeft = scrollLeft - walk;
                });
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
      

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12" id="navbar">
<div className="max-w-[1600px] mx-auto flex items-center justify-between">
<a className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-[#1C1C1C] z-10" href="#">
                Copious<span className="text-[#7A9E7E]">.</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm tracking-wide text-[#5A5A5A] hover:text-[#1C1C1C] transition-colors" href="#services">Services</a>
<a className="text-sm tracking-wide text-[#5A5A5A] hover:text-[#1C1C1C] transition-colors" href="#about">About</a>
<a className="text-sm tracking-wide text-[#5A5A5A] hover:text-[#1C1C1C] transition-colors" href="#work">Our Work</a>
<a className="text-sm tracking-wide text-[#5A5A5A] hover:text-[#1C1C1C] transition-colors" href="#reviews">Reviews</a>
</nav>
<a className="inline-flex items-center justify-center min-h-[44px] px-6 py-2 bg-[#1C1C1C] text-[#FAF8F4] text-sm tracking-wide hover:bg-[#7A9E7E] transition-colors duration-300 z-10" href="#quote">
                Get a Quote
            </a>
</div>
</header>
<main className="">

<section className="relative min-h-[95vh] flex items-center pt-32 pb-20 px-6 md:px-12 overflow-hidden">

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none mix-blend-multiply">
<div className="bg-shape-1 absolute top-[-10%] right-[10%] w-[50vw] h-[50vw] blur-[100px] rounded-full"></div>
<div className="bg-shape-2 absolute bottom-[10%] left-[-10%] w-[60vw] h-[60vw] blur-[120px] rounded-full"></div>
</div>
<div className="max-w-[1600px] mx-auto w-full relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
<div className="w-full lg:w-3/5">
<div className="inline-flex items-center gap-3 mb-8 reveal-up">
<span className="block w-8 h-[1px] bg-[#7A9E7E]"></span>
<span className="text-xs uppercase tracking-widest text-[#5A5A5A] font-semibold">London &amp; Surrounding Areas</span>
</div>
<h1 className="font-serif text-fluid-h1 font-semibold tracking-tight text-[#1C1C1C] mb-8 reveal-up delay-100">
                        Impeccable spaces.<br/>
<span className="text-[#7A9E7E] italic font-normal">Unwavering standards.</span>
</h1>
<p className="text-lg md:text-xl text-[#5A5A5A] font-light max-w-xl leading-relaxed mb-12 reveal-up delay-200">
                        Professional cleaning services delivered with care, consistency, and an eye for the finest details. Experience the clarity of a truly clean environment.
                    </p>
<div className="flex flex-wrap items-center gap-6 reveal-up delay-300">
<a className="inline-flex items-center justify-center min-h-[44px] px-8 py-4 bg-[#1C1C1C] text-[#FAF8F4] text-base hover:bg-[#7A9E7E] transition-colors duration-300" href="#quote">
                            Get a Free Quote
                        </a>
<div className="flex items-center gap-3 text-sm text-[#5A5A5A]">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>+44 7305 344748</span>
</div>
</div>
</div>

<div className="hidden lg:block w-2/5 relative h-[600px] reveal-up delay-300">
<div className="absolute inset-0 img-placeholder mix-blend-darken rounded-tl-[120px] rounded-br-[120px] overflow-hidden group">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-[80%] h-[80%] border border-[#1C1C1C]/10 rounded-tl-[80px] rounded-br-[80px] flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
<span className="font-serif text-[#1C1C1C]/20 text-3xl italic tracking-tight">Copious</span>
</div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#E8EDE9] rounded-full flex items-center justify-center z-10 border border-[#FAF8F4]">
<iconify-icon className="text-[#7A9E7E]" icon="solar:leaf-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-white" id="services">
<div className="max-w-[1600px] mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24 reveal-up">
<div className="max-w-2xl">
<h2 className="font-serif text-fluid-h2 font-semibold tracking-tight text-[#1C1C1C] mb-4">
                            Tailored Services
                        </h2>
<p className="text-base text-[#5A5A5A] font-light leading-relaxed">
                            Comprehensive cleaning solutions designed to fit seamlessly into your life and elevate your space.
                        </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[auto]">

<div className="md:col-span-8 bg-[#FAF8F4] p-8 md:p-12 group hover:bg-[#E8EDE9] transition-colors duration-500 reveal-up">
<div className="flex flex-col h-full justify-between min-h-[300px]">
<iconify-icon className="text-[#7A9E7E] mb-8" icon="solar:home-smile-linear" strokeWidth="1.5" width="40"></iconify-icon>
<div>
<h3 className="font-serif text-3xl font-semibold tracking-tight text-[#1C1C1C] mb-3">Domestic House Cleaning</h3>
<p className="text-sm text-[#5A5A5A] font-light max-w-md leading-relaxed">
                                    Meticulous, regular upkeep of your sanctuary. We respect your home, using refined techniques to ensure every room breathes freshness and order.
                                </p>
</div>
</div>
</div>

<div className="md:col-span-4 border border-[#1C1C1C]/10 p-8 group hover:border-[#7A9E7E]/50 transition-colors duration-500 reveal-up delay-100">
<iconify-icon className="text-[#1C1C1C] mb-6 group-hover:text-[#7A9E7E] transition-colors" icon="solar:buildings-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="font-serif text-2xl font-semibold tracking-tight text-[#1C1C1C] mb-3">Office Cleaning</h3>
<p className="text-sm text-[#5A5A5A] font-light leading-relaxed">
                            Professional environments demand professional standards. Unobtrusive service for a pristine workspace.
                        </p>
</div>

<div className="md:col-span-4 border border-[#1C1C1C]/10 p-8 group hover:border-[#7A9E7E]/50 transition-colors duration-500 reveal-up">
<iconify-icon className="text-[#1C1C1C] mb-6 group-hover:text-[#7A9E7E] transition-colors" icon="solar:washing-machine-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="font-serif text-2xl font-semibold tracking-tight text-[#1C1C1C] mb-3">Laundry</h3>
<p className="text-sm text-[#5A5A5A] font-light leading-relaxed">
                            Careful handling of your garments and linens, returned crisp, clean, and ready.
                        </p>
</div>

<div className="md:col-span-4 bg-[#1C1C1C] text-[#FAF8F4] p-8 group reveal-up delay-100">
<iconify-icon className="text-[#7A9E7E] mb-6" icon="solar:wineglass-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="font-serif text-2xl font-semibold tracking-tight text-[#FAF8F4] mb-3">Pre/After Party</h3>
<p className="text-sm text-[#FAF8F4]/70 font-light leading-relaxed">
                            Host without hesitation. We handle the preparation and the aftermath, leaving no trace behind.
                        </p>
</div>

<div className="md:col-span-6 bg-[#FAF8F4] p-8 md:p-10 group hover:bg-[#E8EDE9] transition-colors duration-500 reveal-up">
<div className="flex items-start gap-6">
<iconify-icon className="text-[#7A9E7E] shrink-0" icon="solar:key-linear" strokeWidth="1.5" width="32"></iconify-icon>
<div>
<h3 className="font-serif text-2xl font-semibold tracking-tight text-[#1C1C1C] mb-2">End of Tenancy</h3>
<p className="text-sm text-[#5A5A5A] font-light leading-relaxed">
                                    Thorough, rigorous cleaning designed to satisfy the strictest landlord requirements.
                                </p>
</div>
</div>
</div>

<div className="md:col-span-6 border border-[#1C1C1C]/10 p-8 md:p-10 group hover:border-[#7A9E7E]/50 transition-colors duration-500 reveal-up delay-100">
<div className="flex items-start gap-6">
<iconify-icon className="text-[#1C1C1C] shrink-0 group-hover:text-[#7A9E7E] transition-colors" icon="solar:sparkles-linear" strokeWidth="1.5" width="32"></iconify-icon>
<div>
<h3 className="font-serif text-2xl font-semibold tracking-tight text-[#1C1C1C] mb-2">Deep Cleaning</h3>
<p className="text-sm text-[#5A5A5A] font-light leading-relaxed">
                                    An intensive refresh targeting hidden dust and neglected corners, restoring your home's baseline.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12" id="about">
<div className="max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="order-2 lg:order-1 relative aspect-[4/5] max-w-md mx-auto lg:mx-0 w-full reveal-up">

<div className="absolute inset-0 border border-[#1C1C1C] translate-x-4 translate-y-4"></div>
<div className="absolute inset-0 img-placeholder bg-[#E8EDE9] z-10 flex flex-col items-center justify-center p-8 text-center">
<iconify-icon className="text-[#7A9E7E] mb-4" icon="solar:map-point-linear" strokeWidth="1.5" width="48"></iconify-icon>
<span className="font-serif text-2xl italic text-[#1C1C1C] tracking-tight">Based in London,<br/>serving with pride.</span>
</div>
</div>

<div className="order-1 lg:order-2 reveal-up delay-100">
<div className="inline-flex items-center gap-3 mb-6">
<span className="text-xs uppercase tracking-widest text-[#7A9E7E] font-semibold">About Us</span>
</div>
<h2 className="font-serif text-fluid-h2 font-semibold tracking-tight text-[#1C1C1C] mb-8">
                            A local touch.<br/>A professional standard.
                        </h2>
<div className="space-y-6 text-base text-[#5A5A5A] font-light leading-relaxed">
<p>
                                Copious Cleaning Services is more than just a company; we are an independent London business built on the premise that a clean space fundamentally improves quality of life.
                            </p>
<p>
                                We do not believe in cutting corners. Our approach marries rigorous attention to detail with absolute consistency. Whether we are tending to your family home or preparing an office for the week ahead, our standards remain unwavering.
                            </p>
<p>
                                Over the years, we have cultivated long-term relationships with trusted clients across London, earned through reliability, discretion, and a genuinely human approach to service.
                            </p>
</div>
<div className="mt-12 pt-12 border-t border-[#1C1C1C]/10 flex gap-12">
<div>
<span className="block font-serif text-4xl text-[#1C1C1C] mb-1 tracking-tight">5+</span>
<span className="text-xs text-[#5A5A5A] uppercase tracking-wider font-semibold">Years Exp.</span>
</div>
<div>
<span className="block font-serif text-4xl text-[#1C1C1C] mb-1 tracking-tight">London</span>
<span className="text-xs text-[#5A5A5A] uppercase tracking-wider font-semibold">Service Area</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-[#1C1C1C] text-[#FAF8F4]">
<div className="max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
<div className="lg:col-span-1 reveal-up">
<h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                            The Copious Standard
                        </h2>
<p className="text-sm text-[#FAF8F4]/60 font-light">
                            Principles that guide every visit.
                        </p>
</div>
<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">

<div className="flex gap-6 reveal-up delay-100">
<span className="font-serif text-3xl text-[#7A9E7E] italic">01</span>
<div>
<h4 className="text-lg font-semibold tracking-wide mb-2">Absolute Reliability</h4>
<p className="text-sm text-[#FAF8F4]/70 font-light leading-relaxed">
                                    We respect your time. Punctuality and dependable scheduling are the bedrock of our service.
                                </p>
</div>
</div>

<div className="flex gap-6 reveal-up delay-200">
<span className="font-serif text-3xl text-[#7A9E7E] italic">02</span>
<div>
<h4 className="text-lg font-semibold tracking-wide mb-2">No Cutting Corners</h4>
<p className="text-sm text-[#FAF8F4]/70 font-light leading-relaxed">
                                    Thoroughness is non-negotiable. We clean the hidden spaces, not just the surfaces.
                                </p>
</div>
</div>

<div className="flex gap-6 reveal-up delay-100">
<span className="font-serif text-3xl text-[#7A9E7E] italic">03</span>
<div>
<h4 className="text-lg font-semibold tracking-wide mb-2">Clear Communication</h4>
<p className="text-sm text-[#FAF8F4]/70 font-light leading-relaxed">
                                    Honest, approachable, and responsive. We listen to your specific needs and adapt accordingly.
                                </p>
</div>
</div>

<div className="flex gap-6 reveal-up delay-200">
<span className="font-serif text-3xl text-[#7A9E7E] italic">04</span>
<div>
<h4 className="text-lg font-semibold tracking-wide mb-2">5-Star Quality</h4>
<p className="text-sm text-[#FAF8F4]/70 font-light leading-relaxed">
                                    Refined techniques and premium care result in a finish that speaks for itself.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 pl-6 md:pl-12" id="work">
<div className="max-w-[1600px] mx-auto pr-6 md:pr-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24 reveal-up">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-3 mb-6">
<span className="text-xs uppercase tracking-widest text-[#7A9E7E] font-semibold">Our Work</span>
</div>
<h2 className="font-serif text-fluid-h2 font-semibold tracking-tight text-[#1C1C1C] mb-4">
                            Results that speak.
                        </h2>
<p className="text-base text-[#5A5A5A] font-light leading-relaxed">
                            A glimpse into the spaces we've transformed. Swipe or drag to explore.
                        </p>
</div>
</div>
</div>

<div className="flex overflow-x-auto gap-4 md:gap-6 pb-12 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing max-w-[1600px] mx-auto" id="work-track">

<div className="snap-center shrink-0 w-[85vw] md:w-[450px] h-[400px] md:h-[500px] relative overflow-hidden group img-placeholder reveal-up">
<div className="group-hover:bg-[#1C1C1C]/20 transition-colors duration-500 flex bg-[#1C1C1C]/0 z-10 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#FAF8F4] font-serif text-2xl italic tracking-tight translate-y-4 group-hover:translate-y-0">Kitchen Deep Clean</span>
</div>
<div className="w-full h-full bg-[#E8EDE9] transition-transform duration-700 ease-out group-hover:scale-[1.03]"></div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[350px] h-[400px] md:h-[500px] relative overflow-hidden group img-placeholder reveal-up delay-100">
<div className="absolute inset-0 bg-[#1C1C1C]/0 group-hover:bg-[#1C1C1C]/20 transition-colors duration-500 z-10 flex items-center justify-center">
<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#FAF8F4] font-serif text-2xl italic tracking-tight translate-y-4 group-hover:translate-y-0">Living Space</span>
</div>
<div className="w-full h-full bg-[#E0E5E1] transition-transform duration-700 ease-out group-hover:scale-[1.03]"></div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] h-[400px] md:h-[500px] relative overflow-hidden group img-placeholder reveal-up delay-200">
<div className="absolute inset-0 bg-[#1C1C1C]/0 group-hover:bg-[#1C1C1C]/20 transition-colors duration-500 z-10 flex items-center justify-center">
<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#FAF8F4] font-serif text-2xl italic tracking-tight translate-y-4 group-hover:translate-y-0">Office Reception</span>
</div>
<div className="w-full h-full bg-[#D8DDD9] transition-transform duration-700 ease-out group-hover:scale-[1.03]"></div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[500px] h-[400px] md:h-[500px] relative overflow-hidden group img-placeholder reveal-up">
<div className="absolute inset-0 bg-[#1C1C1C]/0 group-hover:bg-[#1C1C1C]/20 transition-colors duration-500 z-10 flex items-center justify-center">
<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#FAF8F4] font-serif text-2xl italic tracking-tight translate-y-4 group-hover:translate-y-0">End of Tenancy</span>
</div>
<div className="w-full h-full bg-[#E8EDE9] transition-transform duration-700 ease-out group-hover:scale-[1.03]"></div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[350px] h-[400px] md:h-[500px] relative overflow-hidden group img-placeholder reveal-up delay-100">
<div className="absolute inset-0 bg-[#1C1C1C]/0 group-hover:bg-[#1C1C1C]/20 transition-colors duration-500 z-10 flex items-center justify-center">
<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#FAF8F4] font-serif text-2xl italic tracking-tight translate-y-4 group-hover:translate-y-0">Bathroom Polish</span>
</div>
<div className="w-full h-full bg-[#FAF8F4] transition-transform duration-700 ease-out group-hover:scale-[1.03]"></div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] h-[400px] md:h-[500px] relative overflow-hidden group img-placeholder reveal-up delay-200">
<div className="absolute inset-0 bg-[#1C1C1C]/0 group-hover:bg-[#1C1C1C]/20 transition-colors duration-500 z-10 flex items-center justify-center">
<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#FAF8F4] font-serif text-2xl italic tracking-tight translate-y-4 group-hover:translate-y-0">Detailed Finishing</span>
</div>
<div className="w-full h-full bg-[#E0E5E1] transition-transform duration-700 ease-out group-hover:scale-[1.03]"></div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[450px] h-[400px] md:h-[500px] relative overflow-hidden group img-placeholder reveal-up">
<div className="absolute inset-0 bg-[#1C1C1C]/0 group-hover:bg-[#1C1C1C]/20 transition-colors duration-500 z-10 flex items-center justify-center">
<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#FAF8F4] font-serif text-2xl italic tracking-tight translate-y-4 group-hover:translate-y-0">Bedroom Refresh</span>
</div>
<div className="w-full h-full bg-[#D8DDD9] transition-transform duration-700 ease-out group-hover:scale-[1.03]"></div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[350px] h-[400px] md:h-[500px] relative overflow-hidden group img-placeholder reveal-up delay-100">
<div className="absolute inset-0 bg-[#1C1C1C]/0 group-hover:bg-[#1C1C1C]/20 transition-colors duration-500 z-10 flex items-center justify-center">
<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#FAF8F4] font-serif text-2xl italic tracking-tight translate-y-4 group-hover:translate-y-0">After Party Clear</span>
</div>
<div className="w-full h-full bg-[#E8EDE9] transition-transform duration-700 ease-out group-hover:scale-[1.03]"></div>
</div>

<div className="shrink-0 w-6 md:w-12 h-1 block"></div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#FAF8F4] border-t border-[#1C1C1C]/5 overflow-hidden" id="reviews">
<div className="max-w-[1600px] mx-auto relative px-6 md:px-12">
<div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 reveal-up">
<iconify-icon className="text-[#7A9E7E] mb-6" icon="solar:chat-round-like-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h2 className="font-serif text-fluid-h2 font-semibold tracking-tight text-[#1C1C1C] mb-4">
                        Client Sentiments
                    </h2>
<p className="text-base text-[#5A5A5A] font-light">
                        Feedback from our long-term London clientele.
                    </p>
</div>
</div>

<div className="marquee-container flex overflow-hidden w-full relative">

<div className="flex gap-6 md:gap-8 w-max shrink-0 animate-marquee pr-6 md:pr-8">

<div className="shrink-0 w-[85vw] md:w-[400px] border border-[#1C1C1C]/10 p-8 md:p-10 flex flex-col justify-between bg-white">
<div>
<div className="flex gap-1 text-[#1C1C1C] mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="font-serif text-xl md:text-2xl text-[#1C1C1C] tracking-tight leading-snug mb-8">
                                "They did a deep clean for me and the place felt lighter the moment they finished…"
                            </p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#E8EDE9] flex items-center justify-center text-[#7A9E7E] font-serif italic text-lg">J</div>
<span className="text-sm font-semibold tracking-wide text-[#1C1C1C]">John Max</span>
</div>
</div>

<div className="shrink-0 w-[85vw] md:w-[400px] border border-[#1C1C1C]/10 p-8 md:p-10 flex flex-col justify-between bg-white">
<div>
<div className="flex gap-1 text-[#1C1C1C] mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="font-serif text-xl md:text-2xl text-[#1C1C1C] tracking-tight leading-snug mb-8">
                                "Excellent job at my property in Old Kent Road. Excellent value for money. 10/10."
                            </p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#E8EDE9] flex items-center justify-center text-[#7A9E7E] font-serif italic text-lg">D</div>
<span className="text-sm font-semibold tracking-wide text-[#1C1C1C]">Diane Odwyer</span>
</div>
</div>

<div className="shrink-0 w-[85vw] md:w-[400px] bg-[#1C1C1C] text-[#FAF8F4] p-8 md:p-10 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-[#7A9E7E] mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="font-serif text-xl md:text-2xl text-[#FAF8F4] tracking-tight leading-snug mb-8">
                                "Yetunde cleans my property fortnightly to a very high standard. Always on time."
                            </p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#FAF8F4]/10 flex items-center justify-center text-[#FAF8F4] font-serif italic text-lg">L</div>
<span className="text-sm font-semibold tracking-wide text-[#FAF8F4]">Lizzie</span>
</div>
</div>

<div className="shrink-0 w-[85vw] md:w-[400px] border border-[#1C1C1C]/10 p-8 md:p-10 flex flex-col justify-between bg-white">
<div>
<div className="flex gap-1 text-[#1C1C1C] mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="font-serif text-xl md:text-2xl text-[#1C1C1C] tracking-tight leading-snug mb-8">
                                "Attending to cleaning needs in my home for at least 5 years. Standard: very high indeed."
                            </p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#E8EDE9] flex items-center justify-center text-[#7A9E7E] font-serif italic text-lg">T</div>
<span className="text-sm font-semibold tracking-wide text-[#1C1C1C]">Torsten Krebs</span>
</div>
</div>

<div className="shrink-0 w-[85vw] md:w-[400px] border border-[#1C1C1C]/10 p-8 md:p-10 flex flex-col justify-between bg-white">
<div>
<div className="flex gap-1 text-[#1C1C1C] mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="font-serif text-xl md:text-2xl text-[#1C1C1C] tracking-tight leading-snug mb-8">
                                "Superb service. My regular cleaner is thorough and even asks if I am happy before she leaves."
                            </p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#E8EDE9] flex items-center justify-center text-[#7A9E7E] font-serif italic text-lg">R</div>
<span className="text-sm font-semibold tracking-wide text-[#1C1C1C]">Rune Bakken</span>
</div>
</div>
</div>

<div aria-hidden="true" className="flex gap-6 md:gap-8 w-max shrink-0 animate-marquee pr-6 md:pr-8">

<div className="shrink-0 w-[85vw] md:w-[400px] border border-[#1C1C1C]/10 p-8 md:p-10 flex flex-col justify-between bg-white">
<div>
<div className="flex gap-1 text-[#1C1C1C] mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="font-serif text-xl md:text-2xl text-[#1C1C1C] tracking-tight leading-snug mb-8">
                                "They did a deep clean for me and the place felt lighter the moment they finished…"
                            </p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#E8EDE9] flex items-center justify-center text-[#7A9E7E] font-serif italic text-lg">J</div>
<span className="text-sm font-semibold tracking-wide text-[#1C1C1C]">John Max</span>
</div>
</div>

<div className="shrink-0 w-[85vw] md:w-[400px] border border-[#1C1C1C]/10 p-8 md:p-10 flex flex-col justify-between bg-white">
<div>
<div className="flex gap-1 text-[#1C1C1C] mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="font-serif text-xl md:text-2xl text-[#1C1C1C] tracking-tight leading-snug mb-8">
                                "Excellent job at my property in Old Kent Road. Excellent value for money. 10/10."
                            </p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#E8EDE9] flex items-center justify-center text-[#7A9E7E] font-serif italic text-lg">D</div>
<span className="text-sm font-semibold tracking-wide text-[#1C1C1C]">Diane Odwyer</span>
</div>
</div>

<div className="shrink-0 w-[85vw] md:w-[400px] bg-[#1C1C1C] text-[#FAF8F4] p-8 md:p-10 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-[#7A9E7E] mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="font-serif text-xl md:text-2xl text-[#FAF8F4] tracking-tight leading-snug mb-8">
                                "Yetunde cleans my property fortnightly to a very high standard. Always on time."
                            </p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#FAF8F4]/10 flex items-center justify-center text-[#FAF8F4] font-serif italic text-lg">L</div>
<span className="text-sm font-semibold tracking-wide text-[#FAF8F4]">Lizzie</span>
</div>
</div>

<div className="shrink-0 w-[85vw] md:w-[400px] border border-[#1C1C1C]/10 p-8 md:p-10 flex flex-col justify-between bg-white">
<div>
<div className="flex gap-1 text-[#1C1C1C] mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="font-serif text-xl md:text-2xl text-[#1C1C1C] tracking-tight leading-snug mb-8">
                                "Attending to cleaning needs in my home for at least 5 years. Standard: very high indeed."
                            </p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#E8EDE9] flex items-center justify-center text-[#7A9E7E] font-serif italic text-lg">T</div>
<span className="text-sm font-semibold tracking-wide text-[#1C1C1C]">Torsten Krebs</span>
</div>
</div>

<div className="shrink-0 w-[85vw] md:w-[400px] border border-[#1C1C1C]/10 p-8 md:p-10 flex flex-col justify-between bg-white">
<div>
<div className="flex gap-1 text-[#1C1C1C] mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="font-serif text-xl md:text-2xl text-[#1C1C1C] tracking-tight leading-snug mb-8">
                                "Superb service. My regular cleaner is thorough and even asks if I am happy before she leaves."
                            </p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#E8EDE9] flex items-center justify-center text-[#7A9E7E] font-serif italic text-lg">R</div>
<span className="text-sm font-semibold tracking-wide text-[#1C1C1C]">Rune Bakken</span>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#FAF8F4] to-transparent z-10"></div>
<div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#FAF8F4] to-transparent z-10"></div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-white" id="quote">
<div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="reveal-up">
<h2 className="font-serif text-fluid-h2 font-semibold tracking-tight text-[#1C1C1C] mb-6">
                        Request a Quote
                    </h2>
<p className="text-lg text-[#5A5A5A] font-light mb-12 max-w-md">
                        Detail your requirements below. We will respond promptly with a tailored proposal.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<iconify-icon className="text-[#7A9E7E] mt-1" icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-[#1C1C1C] uppercase tracking-wide mb-1">Location</h4>
<p className="text-sm text-[#5A5A5A] font-light">Unit 12C, Tower Workshop<br/>58 Riley Rd, London SE1 3DG</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#7A9E7E] mt-1" icon="solar:phone-calling-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-[#1C1C1C] uppercase tracking-wide mb-1">Direct Line</h4>
<p className="text-sm text-[#5A5A5A] font-light">+44 7305 344748</p>
</div>
</div>
</div>
</div>

<div className="relative reveal-up delay-100">
<form className="space-y-8" id="contact-form">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<label className="sr-only" htmlFor="name">Name</label>
<input className="form-input text-base" id="name" placeholder="Full Name" required="" type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="phone">Phone</label>
<input className="form-input text-base" id="phone" placeholder="Phone Number" required="" type="tel"/>
</div>
</div>
<div>
<label className="sr-only" htmlFor="email">Email</label>
<input className="form-input text-base" id="email" placeholder="Email Address" required="" type="email"/>
</div>
<div>
<label className="sr-only" htmlFor="service">Service Type</label>
<select className="form-input text-base bg-transparent cursor-pointer" id="service" required="">
<option disabled="" selected="" value="">Select a Service</option>
<option value="house">Domestic House Cleaning</option>
<option value="office">Office Cleaning</option>
<option value="laundry">Laundry</option>
<option value="party">Pre/After Party Cleaning</option>
<option value="tenancy">End of Tenancy Cleaning</option>
<option value="deep">Deep Cleaning</option>
</select>
</div>
<div>
<label className="sr-only" htmlFor="message">Message</label>
<textarea className="form-input text-base resize-none" id="message" placeholder="Additional Details (Size of property, frequency, etc.)" rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center min-h-[44px] py-4 bg-[#1C1C1C] text-[#FAF8F4] text-base tracking-wide hover:bg-[#7A9E7E] transition-colors duration-300" type="submit">
                            Submit Request
                        </button>
</form>

<div className="hidden absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-8 z-10" id="form-success">
<div className="w-16 h-16 rounded-full bg-[#E8EDE9] flex items-center justify-center mb-6">
<iconify-icon className="text-[#7A9E7E]" icon="solar:check-read-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="font-serif text-2xl font-semibold tracking-tight text-[#1C1C1C] mb-2">Request Received</h3>
<p className="text-base text-[#5A5A5A] font-light max-w-sm">
                            Thank you. We have received your details and will contact you shortly to confirm your quote.
                        </p>
<button className="mt-8 text-sm font-semibold tracking-wide text-[#7A9E7E] hover:text-[#1C1C1C] transition-colors" id="reset-form">
                            Send another request
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#FAF8F4] pt-20 pb-10 px-6 md:px-12 border-t border-[#1C1C1C]/10">
<div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
<div>
<a className="font-serif text-3xl font-semibold tracking-tight text-[#1C1C1C] block mb-6" href="#">
                    Copious<span className="text-[#7A9E7E]">.</span>
</a>
<p className="text-sm text-[#5A5A5A] font-light">
                    Unit 12C, Tower Workshop<br/>
                    58 Riley Rd, London SE1 3DG<br/>
                    +44 7305 344748
                </p>
</div>
<div className="flex flex-col md:items-end gap-4">
<nav className="flex gap-6 mb-4">
<a className="text-xs uppercase tracking-widest text-[#5A5A5A] font-semibold hover:text-[#1C1C1C] transition-colors" href="#services">Services</a>
<a className="text-xs uppercase tracking-widest text-[#5A5A5A] font-semibold hover:text-[#1C1C1C] transition-colors" href="#about">About</a>
<a className="text-xs uppercase tracking-widest text-[#5A5A5A] font-semibold hover:text-[#1C1C1C] transition-colors" href="#work">Work</a>
</nav>
<p className="text-xs text-[#5A5A5A]/60 font-light">
                    © <span id="year">2026</span> Copious Cleaning Services. All rights reserved.
                </p>
</div>
</div>
</footer>



    </>
  );
}
