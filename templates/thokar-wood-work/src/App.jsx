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



        // 1. Mouse Spotlight Logic
        const spotlight = document.getElementById('spotlight-overlay');
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            spotlight.style.setProperty('--x', `${x}px`);
            spotlight.style.setProperty('--y', `${y}px`);
        });

        // 2. Scroll Reveal Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    
                    // Trigger counter if it's a counter element
                    const counters = entry.target.querySelectorAll('.counter');
                    if(counters.length > 0) {
                        counters.forEach(counter => {
                            const target = +counter.getAttribute('data-target');
                            const duration = 2000; // 2 seconds
                            const increment = target / (duration / 16); // 60fps
                            
                            let current = 0;
                            const updateCounter = () => {
                                current += increment;
                                if (current < target) {
                                    counter.innerText = Math.ceil(current);
                                    requestAnimationFrame(updateCounter);
                                } else {
                                    counter.innerText = target;
                                }
                            };
                            updateCounter();
                        });
                        // Stop observing once animated
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

        // 3. Horizontal Scroll Buttons
        const scrollContainer = document.getElementById('servicesScroll');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if(nextBtn && prevBtn && scrollContainer) {
            nextBtn.addEventListener('click', () => {
                scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
            });

            prevBtn.addEventListener('click', () => {
                scrollContainer.scrollBy({ left: -400, behavior: 'smooth' });
            });
        }

        // 4. Before/After Slider Logic
        const sliderInput = document.getElementById('sliderInput');
        const afterImage = document.getElementById('afterImage');
        const sliderHandle = document.getElementById('sliderHandle');

        if (sliderInput && afterImage && sliderHandle) {
            sliderInput.addEventListener('input', (e) => {
                const val = e.target.value;
                afterImage.style.width = `${val}%`;
                sliderHandle.style.left = `${val}%`;
            });
        }

        // 5. 3D Tilt Effect for Cards
        const cards = document.querySelectorAll('.tilt-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -5; // Max 5 deg rotation
                const rotateY = ((x - centerX) / centerX) * 5;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        });

        // 6. Navbar Glass Effect on Scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-black/80', 'backdrop-blur-xl', 'shadow-lg');
                navbar.classList.remove('bg-black/50');
            } else {
                navbar.classList.remove('bg-black/80', 'backdrop-blur-xl', 'shadow-lg');
                navbar.classList.add('bg-black/50');
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
      

<div className="fixed inset-0 z-0 pointer-events-none spotlight transition-opacity duration-500 opacity-0 lg:opacity-100" id="spotlight-overlay"></div>
<div className="fixed inset-0 bg-grid z-0 pointer-events-none opacity-40"></div>

<header className="fixed top-0 w-full z-50 border-b border-white/[0.06] bg-black/50 backdrop-blur-xl transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center overflow-hidden rounded-lg">
<div className="absolute inset-0 bg-amber-500 blur opacity-20 group-hover:opacity-60 transition-opacity"></div>
<div className="relative w-full h-full bg-gradient-to-b from-neutral-800 to-neutral-900 border border-white/10 flex items-center justify-center text-amber-500">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
</div>
<span className="font-semibold text-lg tracking-tight text-white/90 group-hover:text-white transition-colors">Thokar Wood</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/50">
<a className="hover:text-white transition-all hover:tracking-wide duration-300" href="#services">Services</a>
<a className="hover:text-white transition-all hover:tracking-wide duration-300" href="#projects">Projects</a>
<a className="hover:text-white transition-all hover:tracking-wide duration-300" href="#testimonials">Reviews</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex h-9 items-center justify-center rounded-full btn-shimmer px-4 text-sm font-medium text-white border border-white/10 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_-5px_rgba(217,119,6,0.3)]" href="#contact">
                    Get Quote
                </a>
<button className="md:hidden text-white/70 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden z-10">
<div className="max-w-7xl mx-auto px-6 text-center relative">

<div className="reveal-on-scroll inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-900/10 px-3 py-1.5 text-xs font-medium text-amber-400 backdrop-blur-md mb-8 ring-1 ring-inset ring-amber-500/20 hover:bg-amber-900/20 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
<span>Premium Kashmir Craftsmanship</span>
</div>

<h1 className="reveal-on-scroll delay-100 mx-auto max-w-5xl text-5xl font-medium tracking-tight text-white sm:text-7xl lg:text-8xl leading-[1.1]">
                Structure meets <br className="hidden sm:block"/>
<span className="text-white/40">artistry in</span>
<span className="text-gradient-gold relative inline-block">
                    wood.
                    <svg className="absolute -bottom-2 w-full h-3 text-amber-600/40" preserveaspectratio="none" viewbox="0 0 100 10">
<path className="path-draw" d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</span>
</h1>
<p className="reveal-on-scroll delay-200 mx-auto mt-8 max-w-2xl text-lg text-white/50 leading-relaxed font-light">
                Specializing in robust <span className="text-white/80 font-normal">roofing systems</span> and bespoke <span className="text-white/80 font-normal">carpentry</span>. We blend structural engineering with traditional Kashmiri wood aesthetics.
            </p>

<div className="reveal-on-scroll delay-300 mt-10 flex flex-wrap items-center justify-center gap-4">
<a className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-medium text-black transition-all hover:bg-neutral-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]" href="https://wa.me/917298335344">
<span className="absolute inset-0 rounded-full bg-white blur opacity-20 group-hover:opacity-40 transition-opacity"></span>
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
<span>WhatsApp Now</span>
</a>
<a className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-8 text-sm font-medium text-white transition-all hover:bg-white/5 hover:border-white/20" href="tel:+917298335344">
<iconify-icon className="text-white/50 group-hover:text-white transition-colors" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<span>+91 72983 35344</span>
</a>
</div>

<div className="reveal-on-scroll delay-300 mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
<div>
<div className="text-3xl font-semibold text-white mb-1"><span className="counter" data-target="15">0</span>+</div>
<div className="text-xs text-white/40 uppercase tracking-widest">Years Exp.</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1"><span className="counter" data-target="500">0</span>+</div>
<div className="text-xs text-white/40 uppercase tracking-widest">Projects</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1"><span className="counter" data-target="100">0</span>%</div>
<div className="text-xs text-white/40 uppercase tracking-widest">Satisfaction</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">Lifetime</div>
<div className="text-xs text-white/40 uppercase tracking-widest">Support</div>
</div>
</div>
</div>
</section>

<div className="relative z-10 border-y border-white/5 bg-neutral-950/50 backdrop-blur-sm overflow-hidden py-4">
<div className="flex animate-scroll whitespace-nowrap w-max gap-16">
<span className="flex items-center gap-4 text-white/30 text-sm uppercase tracking-widest font-medium">
<iconify-icon className="text-amber-600" icon="solar:star-bold"></iconify-icon> Premium Roofing
            </span>
<span className="flex items-center gap-4 text-white/30 text-sm uppercase tracking-widest font-medium">
<iconify-icon className="text-amber-600" icon="solar:star-bold"></iconify-icon> Custom Joinery
            </span>
<span className="flex items-center gap-4 text-white/30 text-sm uppercase tracking-widest font-medium">
<iconify-icon className="text-amber-600" icon="solar:star-bold"></iconify-icon> Structural Repair
            </span>
<span className="flex items-center gap-4 text-white/30 text-sm uppercase tracking-widest font-medium">
<iconify-icon className="text-amber-600" icon="solar:star-bold"></iconify-icon> Wood Polishing
            </span>
<span className="flex items-center gap-4 text-white/30 text-sm uppercase tracking-widest font-medium">
<iconify-icon className="text-amber-600" icon="solar:star-bold"></iconify-icon> Weather Proofing
            </span>

<span className="flex items-center gap-4 text-white/30 text-sm uppercase tracking-widest font-medium">
<iconify-icon className="text-amber-600" icon="solar:star-bold"></iconify-icon> Premium Roofing
            </span>
<span className="flex items-center gap-4 text-white/30 text-sm uppercase tracking-widest font-medium">
<iconify-icon className="text-amber-600" icon="solar:star-bold"></iconify-icon> Custom Joinery
            </span>
<span className="flex items-center gap-4 text-white/30 text-sm uppercase tracking-widest font-medium">
<iconify-icon className="text-amber-600" icon="solar:star-bold"></iconify-icon> Structural Repair
            </span>
<span className="flex items-center gap-4 text-white/30 text-sm uppercase tracking-widest font-medium">
<iconify-icon className="text-amber-600" icon="solar:star-bold"></iconify-icon> Wood Polishing
            </span>
</div>
</div>

<section className="py-24 relative z-10" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal-on-scroll">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-2">Capabilities</h2>
<p className="text-white/40">Precision. Durability. Aesthetics.</p>
</div>
<div className="flex gap-3">
<button className="group w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black transition-all duration-300" id="prevBtn">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="group w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black transition-all duration-300" id="nextBtn">
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-12 -mx-6 px-6" id="servicesScroll">

<div className="tilt-card min-w-[85vw] md:min-w-[400px] snap-center group relative rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-900 aspect-[3/4] transition-all hover:z-10">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="transform group-hover:translate-y-[-8px] transition-transform duration-500">
<div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white mb-4 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-colors duration-300 shadow-lg">
<iconify-icon icon="solar:home-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Roofing Systems</h3>
<p className="text-white/60 text-sm leading-relaxed max-w-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                                Complete truss work, shingle installation, and weather-proofing designed for Kashmir's winters.
                            </p>
</div>
</div>
</div>

<div className="tilt-card min-w-[85vw] md:min-w-[400px] snap-center group relative rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-900 aspect-[3/4] transition-all hover:z-10">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="transform group-hover:translate-y-[-8px] transition-transform duration-500">
<div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white mb-4 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-colors duration-300 shadow-lg">
<iconify-icon icon="solar:ruler-pen-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Custom Joinery</h3>
<p className="text-white/60 text-sm leading-relaxed max-w-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                                Bespoke door frames, windows, and intricate wooden paneling tailored to your architectural plans.
                            </p>
</div>
</div>
</div>

<div className="tilt-card min-w-[85vw] md:min-w-[400px] snap-center group relative rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-900 aspect-[3/4] transition-all hover:z-10">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="transform group-hover:translate-y-[-8px] transition-transform duration-500">
<div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white mb-4 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-colors duration-300 shadow-lg">
<iconify-icon icon="solar:paint-roller-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Premium Finishing</h3>
<p className="text-white/60 text-sm leading-relaxed max-w-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                                High-gloss, matte, and oil-based polishing services to protect and highlight natural wood grain.
                            </p>
</div>
</div>
</div>

<div className="tilt-card min-w-[85vw] md:min-w-[400px] snap-center group relative rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-900 aspect-[3/4] transition-all hover:z-10">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="transform group-hover:translate-y-[-8px] transition-transform duration-500">
<div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white mb-4 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-colors duration-300 shadow-lg">
<iconify-icon icon="solar:wrench-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Restoration</h3>
<p className="text-white/60 text-sm leading-relaxed max-w-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                                Structural repairs and restoration of aged woodwork, ensuring safety and extending lifespan.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-t border-white/5" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="reveal-on-scroll">
<div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-3 py-1.5 text-xs font-medium text-amber-500 mb-6">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
                        Transformation
                    </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">See the <br/><span className="text-gradient-gold">Difference.</span></h2>
<p className="text-white/60 text-lg leading-relaxed mb-8">
                        Drag the slider to see how we transform raw structures into finished masterpieces. From skeleton to shelter.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-white/80">
<iconify-icon className="text-amber-500" icon="solar:check-circle-bold"></iconify-icon>
<span>Laser-aligned trusses</span>
</li>
<li className="flex items-center gap-3 text-white/80">
<iconify-icon className="text-amber-500" icon="solar:check-circle-bold"></iconify-icon>
<span>Weather-sealed roofing sheets</span>
</li>
<li className="flex items-center gap-3 text-white/80">
<iconify-icon className="text-amber-500" icon="solar:check-circle-bold"></iconify-icon>
<span>Premium wood treatment</span>
</li>
</ul>
</div>

<div className="reveal-on-scroll delay-200 relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 group select-none shadow-2xl shadow-amber-900/10">
<div className="absolute inset-0">
<img alt="Before" className="w-full h-full object-cover filter grayscale" src="https://images.unsplash.com/photo-1628135899974-9b247f202689?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-xs font-bold text-white uppercase tracking-wider">Before</div>
</div>
<div className="absolute inset-0 w-[50%] overflow-hidden border-r border-amber-500" id="afterImage">
<img alt="After" className="w-[200%] max-w-none h-full object-cover" src="https://images.unsplash.com/photo-1593456860017-c81969d2d416?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute top-4 right-4 bg-amber-500 text-black px-3 py-1 rounded text-xs font-bold uppercase tracking-wider z-20" style={{right: 'auto', left: 'calc(100% - 70px)'}}>After</div>
</div>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30" id="sliderInput" max="100" min="0" type="range" value="50"/>

<div className="absolute top-0 bottom-0 w-1 bg-amber-500 left-[50%] pointer-events-none z-20 shadow-[0_0_20px_rgba(217,119,6,0.5)]" id="sliderHandle">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-black shadow-lg">
<iconify-icon icon="solar:arrows-left-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 reveal-on-scroll">
<div>
<span className="text-amber-500 text-xs font-semibold tracking-wider uppercase mb-2 block">Client Stories</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">Trusted by <br/><span className="text-white/40">Homeowners.</span></h2>
</div>
<div className="flex flex-col gap-4">
<div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent"></div>
<p className="text-white/50 text-sm max-w-md ml-auto text-right">Our reputation is built on reliability. Here's what our clients across Kashmir have to say about our craftsmanship.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-3xl p-8 flex flex-col justify-between h-full group reveal-on-scroll delay-100">
<div>
<div className="flex gap-1 text-amber-500/80 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-white/80 leading-relaxed mb-6 font-light">"Thokar Wood Work transformed our roof completely. The team was professional, the materials used were top-notch, and they finished ahead of schedule."</p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-white/50 font-medium text-xs">RB</div>
<div>
<p className="text-white font-medium text-sm">Rahul Bhat</p>
<p className="text-white/30 text-xs">Srinagar</p>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 flex flex-col justify-between h-full group bg-white/[0.03] reveal-on-scroll delay-200">
<div>
<div className="flex gap-1 text-amber-500/80 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-white/80 leading-relaxed mb-6 font-light">"The custom woodwork for our interiors is stunning. The attention to detail in the polishing is unlike anything else available locally. A true artist's touch."</p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-white/50 font-medium text-xs">SK</div>
<div>
<p className="text-white font-medium text-sm">Sameer Khan</p>
<p className="text-white/30 text-xs">Architect</p>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 flex flex-col justify-between h-full group reveal-on-scroll delay-300">
<div>
<div className="flex gap-1 text-amber-500/80 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-white/80 leading-relaxed mb-6 font-light">"Highly recommended for roofing repairs. They diagnosed the leak immediately and fixed it permanently. Very honest pricing."</p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-white/50 font-medium text-xs">AM</div>
<div>
<p className="text-white font-medium text-sm">Amit Mir</p>
<p className="text-white/30 text-xs">Business Owner</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-t border-white/5 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">Built on Trust. <br/><span className="text-white/30">Engineered for Life.</span></h2>
<p className="text-white/60 text-lg leading-relaxed">
                        We don't just build roofs; we build protection for your family. Our commitment to quality ensures your investment lasts for generations.
                    </p>
<div className="space-y-6 pt-4">
<div className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-default">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-amber-500 group-hover:scale-110 transition-all">
<iconify-icon icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-lg">Premium Materials</h4>
<p className="text-white/40 text-sm mt-1">Sourced highest grade timber and industry-standard roofing sheets.</p>
</div>
</div>
<div className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-default">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-amber-500 group-hover:scale-110 transition-all">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-lg">On-Time Delivery</h4>
<p className="text-white/40 text-sm mt-1">Respecting your schedule with efficient project management.</p>
</div>
</div>
</div>
</div>
<div className="relative group reveal-on-scroll delay-200">
<div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-transparent blur-[80px] rounded-full group-hover:bg-amber-600/30 transition-colors duration-700"></div>
<div className="rounded-3xl overflow-hidden aspect-square relative border border-white/10">
<img className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-start gap-4">
<iconify-icon className="text-amber-500 shrink-0" icon="solar:quote-up-square-linear" width="24"></iconify-icon>
<p className="text-white/90 font-medium text-lg">"Quality is never an accident; it is always the result of high intention."</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="contact">
<div className="reveal-on-scroll max-w-5xl mx-auto rounded-[3rem] bg-neutral-900 relative overflow-hidden group">

<div className="absolute inset-0 opacity-40 mix-blend-overlay">
<img className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-[2s]" src="https://images.unsplash.com/photo-1620619767323-b95a89183081?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>

<div className="absolute inset-0 border border-white/10 rounded-[3rem] z-20"></div>
<div className="relative z-30 p-12 md:p-24 text-center">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">Ready to start?</h2>
<p className="text-white/60 max-w-xl mx-auto mb-10 text-lg">Whether it's a new roof or custom furniture, let's bring your vision to life with precision.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 text-base font-semibold text-white transition-all hover:bg-[#20bd5a] hover:shadow-[0_0_30px_-5px_rgba(37,211,102,0.6)] hover:-translate-y-1" href="https://wa.me/917298335344">
<iconify-icon icon="solar:brands-whatsapp-linear" width="24"></iconify-icon>
                        WhatsApp Quote
                    </a>
<a className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-semibold text-black transition-all hover:bg-neutral-200 hover:-translate-y-1" href="tel:+917298335344">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
                        Call +91 72983 35344
                    </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-20 pb-10 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 reveal-on-scroll">
<div className="md:col-span-2 space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-black">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
<span className="font-semibold text-xl tracking-tight text-white">Thokar Wood</span>
</a>
<p className="text-white/40 text-sm max-w-sm leading-relaxed">
                        Setting the standard for roofing and carpentry in Kashmir. We combine modern engineering with traditional values of integrity.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition hover:scale-110" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition hover:scale-110" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition hover:scale-110" href="https://wa.me/917298335344"><iconify-icon icon="solar:brands-whatsapp-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Expertise</h4>
<ul className="space-y-4 text-sm text-white/40">
<li><a className="hover:text-amber-500 transition-colors" href="#">Roofing Systems</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Timber Trussing</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Wood Polishing</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Custom Furniture</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Connect</h4>
<ul className="space-y-4 text-sm text-white/40">
<li className="flex items-center gap-3">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
<span className="text-white/60">+91 72983 35344</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
<span className="text-white/60">support@thokar.com</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
<span className="text-white/60">Srinagar, Kashmir</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-white/20">© 2024 Thokar Wood Work. Crafted with precision.</p>
<div className="flex gap-6 text-xs text-white/20">
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
