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



        document.addEventListener('DOMContentLoaded', () => {
            // Elements
            const penWrapper = document.getElementById('pen-wrapper');
            const penSvg = penWrapper.querySelector('svg');
            const dockTarget = document.getElementById('dock-target');
            const menuBtn = document.getElementById('menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');
            const navbar = document.getElementById('navbar');

            // --- ANIMATION CONFIGURATION ---
            
            // Initial Rotation (Starting tilted)
            const START_ROTATION = -20;
            // Target Rotation (Full spin)
            const END_ROTATION = 360; 
            
            let isMobileMenuOpen = false;

            // --- SCROLL LOGIC ---
            function updatePenPosition() {
                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;
                
                // 1. Calculate Docking Point
                // Get the absolute position of the dock target relative to the document
                const dockRect = dockTarget.getBoundingClientRect();
                const dockAbsoluteTop = scrollY + dockRect.top;
                
                // We want the pen's center to land exactly on the dock target
                // Pen wrapper is fixed at 20% top initially.
                // Let's calculate the travel distance.
                
                // The point where the fixed pen would visually hit the dock target if we just scrolled
                // Since Pen is fixed at top: 20vh, we compare scrollY to (dockAbsoluteTop - 20vh)
                const penFixedTopPx = windowHeight * 0.2; // 20%
                const stopScrollY = dockAbsoluteTop - penFixedTopPx - (penWrapper.offsetHeight / 2);

                // 2. Determine State (Moving vs Docked)
                if (scrollY < stopScrollY) {
                    // --- STATE: FLOATING & ROTATING ---
                    
                    // Progress 0 to 1 based on how close we are to the dock point
                    // We start counting progress immediately or after a small buffer?
                    // Let's map progress over the first section + products section
                    const travelDistance = stopScrollY;
                    let progress = Math.min(Math.max(scrollY / travelDistance, 0), 1);

                    // A. Y-Axis Movement
                    // Prompt: "Pen moves downward on Y-axis"
                    // We add a parallax effect. Pen moves down slower than scroll to feel "heavy"
                    // But we must ensure it doesn't overshoot the dock point visually before the logic switches.
                    // Actually, to make it reach the dock point smoothly, we augment the fixed top.
                    
                    const yOffset = progress * 150; // Move down 150px during the scroll
                    
                    // B. Rotation Logic
                    // -20deg to 360deg based on progress
                    const currentRotation = START_ROTATION + (progress * (END_ROTATION - START_ROTATION));

                    // Apply styles (Fixed position)
                    penWrapper.style.position = 'fixed';
                    penWrapper.style.top = '20%'; 
                    penWrapper.style.left = '50%';
                    penWrapper.style.transform = `translate(-50%, ${yOffset}px) rotate(${currentRotation}deg)`;
                    
                } else {
                    // --- STATE: LOCKED / DOCKED ---
                    // The scroll has passed the point where pen meets curve.
                    // We switch to absolute positioning relative to the page, essentially "sticking" it to the curve.
                    
                    penWrapper.style.position = 'absolute';
                    // Calculate exactly where it should freeze in the document
                    // It should be at dockAbsoluteTop relative to body
                    // Centered on the dockTarget
                    penWrapper.style.top = `${dockAbsoluteTop - (penWrapper.offsetHeight/2)}px`;
                    penWrapper.style.left = '50%';
                    
                    // Final rotation state
                    penWrapper.style.transform = `translate(-50%, 0px) rotate(${END_ROTATION}deg)`;
                }

                requestAnimationFrame(updatePenPosition);
            }

            // Start Animation Loop
            requestAnimationFrame(updatePenPosition);


            // --- INTERSECTION OBSERVER FOR FADE-INS ---
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));


            // --- MOBILE MENU LOGIC ---
            menuBtn.addEventListener('click', () => {
                isMobileMenuOpen = !isMobileMenuOpen;
                if (isMobileMenuOpen) {
                    mobileMenu.classList.remove('translate-x-full');
                    document.body.style.overflow = 'hidden'; // Lock scroll
                    menuBtn.innerHTML = `<span class="font-sans-clean text-[10px] tracking-widest uppercase text-slate-900">Close</span><iconify-icon icon="solar:close-circle-linear" width="24" class="text-slate-900"></iconify-icon>`;
                } else {
                    mobileMenu.classList.add('translate-x-full');
                    document.body.style.overflow = '';
                    menuBtn.innerHTML = `<span class="font-sans-clean text-[10px] tracking-widest uppercase text-slate-900">Menu</span><iconify-icon icon="solar:hamburger-menu-linear" width="24" class="text-slate-900"></iconify-icon>`;
                }
            });

            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    isMobileMenuOpen = false;
                    mobileMenu.classList.add('translate-x-full');
                    document.body.style.overflow = '';
                    menuBtn.innerHTML = `<span class="font-sans-clean text-[10px] tracking-widest uppercase text-slate-900">Menu</span><iconify-icon icon="solar:hamburger-menu-linear" width="24" class="text-slate-900"></iconify-icon>`;
                });
            });

            // --- NAVBAR SCROLL EFFECT ---
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('shadow-sm');
                    navbar.querySelector('div').classList.remove('h-20');
                    navbar.querySelector('div').classList.add('h-16');
                } else {
                    navbar.classList.remove('shadow-sm');
                    navbar.querySelector('div').classList.add('h-20');
                    navbar.querySelector('div').classList.remove('h-16');
                }
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
      

<nav className="fixed top-0 w-full z-[60] bg-white/95 backdrop-blur-sm border-b border-transparent transition-all duration-300" id="navbar">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

<a className="font-sans-clean tracking-[0.25em] font-semibold text-sm uppercase text-slate-900 z-50" href="#">
                Beaklet
            </a>

<div className="hidden md:flex items-center gap-12">
<a className="font-sans-clean text-xs tracking-widest uppercase text-slate-500 hover:text-slate-900 transition-colors" href="#products">Our Products</a>
<a className="font-sans-clean text-xs tracking-widest uppercase text-slate-500 hover:text-slate-900 transition-colors" href="#story">Partnership</a>
<a className="font-sans-clean text-xs tracking-widest uppercase text-slate-900 border-b border-slate-900 pb-0.5" href="#">Shop</a>
</div>

<button className="md:hidden z-50 group flex items-center gap-2" id="menu-btn">
<span className="font-sans-clean text-[10px] tracking-widest uppercase text-slate-900">Menu</span>
<iconify-icon className="text-slate-900" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-white z-[55] translate-x-full flex flex-col items-center justify-center pt-20" id="mobile-menu">
<div className="flex flex-col gap-8 text-center">
<a className="font-serif-display text-4xl text-slate-900 mobile-link" href="#products">Our Products</a>
<a className="font-serif-display text-4xl text-slate-900 mobile-link" href="#story">Partnership</a>
<a className="font-serif-display text-4xl text-slate-900 mobile-link" href="#">Journal</a>
</div>
</div>

<section className="flex flex-col overflow-hidden bg-white w-full h-screen z-10 relative items-center justify-center" id="hero">

<div className="text-center relative z-0 mt-32 md:mt-0">
<div className="inline-block mb-6 relative">
<h1 className="font-serif-display text-7xl md:text-9xl text-slate-900 leading-[0.9] tracking-tight reveal-up">
                    Cities,<br/>Written
                </h1>
<span className="md:left-[70%] -translate-y-1/2 md:text-6xl whitespace-nowrap reveal-up text-4xl text-slate-400 font-script absolute top-[40%] left-[60%] -rotate-6" style={{transitionDelay: '0.1s'}}>
                    in ink
                </span>
</div>
<p className="max-w-xs md:max-w-md mx-auto font-sans-clean text-xs md:text-sm text-slate-500 leading-relaxed tracking-wide mt-8 reveal-up" style={{transitionDelay: '0.2s'}}>
                A premium writing instrument collection inspired by the rhythm, culture, and elegance of iconic cities.
            </p>
</div>
</section>


<div id="pen-wrapper">
<svg className="beaklet-pen" preserveaspectratio="xMidYMid meet" viewbox="0 0 100 600">
<defs>
<lineargradient id="bodyGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#1e293b', stopOpacity: '1'}}></stop>
<stop offset="50%" style={{stopColor: '#475569', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#0f172a', stopOpacity: '1'}}></stop>
</lineargradient>
<lineargradient id="goldGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#ca8a04', stopOpacity: '1'}}></stop>
<stop offset="50%" style={{stopColor: '#fef08a', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#a16207', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>

<path d="M42,500 L50,560 L58,500 Z" fill="url(#goldGrad)"></path>

<path d="M45,500 L55,500 L50,540 Z" fill="#000"></path>

<path d="M35,450 Q30,480 40,500 L60,500 Q70,480 65,450 Z" fill="#000"></path>

<rect fill="url(#bodyGrad)" height="300" rx="2" width="36" x="32" y="150"></rect>

<rect fill="url(#bodyGrad)" height="180" rx="4" width="44" x="28" y="20"></rect>

<path d="M50,30 L54,30 L53,160 L50,170 L47,160 L46,30 Z" fill="url(#goldGrad)"></path>

<rect fill="url(#goldGrad)" height="8" width="44" x="28" y="190"></rect>
<rect fill="url(#goldGrad)" height="4" width="36" x="32" y="440"></rect>
</svg>
</div>

<section className="relative w-full py-32 bg-[#F9F9F7] z-20" id="products">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="text-center mb-24 reveal-up">
<h2 className="font-serif-display text-4xl md:text-5xl text-slate-900 font-light tracking-tight">New Arrivals</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-12 items-end">

<div className="flex flex-col items-center group cursor-pointer reveal-up">
<div className="h-64 w-full flex items-center justify-center relative">

<div className="w-[6px] h-48 bg-slate-300 rounded-full group-hover:bg-slate-800 transition-colors duration-500 transform rotate-6"></div>
</div>
<span className="mt-8 font-sans-clean text-[10px] tracking-[0.2em] uppercase text-slate-500">The Kyoto</span>
<span className="mt-2 font-serif-display text-xl text-slate-900 italic">New Pen</span>
</div>

<div className="flex flex-col items-center group cursor-pointer reveal-up md:-translate-y-12">
<div className="h-80 w-full flex items-center justify-center relative">
<div className="absolute w-24 h-64 bg-slate-200/50 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="w-[10px] h-64 bg-slate-800 rounded-full shadow-2xl transform"></div>
</div>
<span className="mt-8 font-sans-clean text-[10px] tracking-[0.2em] uppercase text-slate-900 font-semibold">The London</span>
<span className="mt-2 font-serif-display text-2xl text-slate-900 italic">Limited Edition</span>
</div>

<div className="flex flex-col items-center group cursor-pointer reveal-up">
<div className="h-64 w-full flex items-center justify-center relative">

<div className="w-[6px] h-48 bg-slate-300 rounded-full group-hover:bg-slate-800 transition-colors duration-500 transform -rotate-6"></div>
</div>
<span className="mt-8 font-sans-clean text-[10px] tracking-[0.2em] uppercase text-slate-500">The New York</span>
<span className="mt-2 font-serif-display text-xl text-slate-900 italic">New Pen</span>
</div>
</div>
</div>
</section>

<section className="relative w-full py-32 md:py-48 bg-white z-20 overflow-hidden" id="story">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

<div className="reveal-up">
<h2 className="font-serif-display text-5xl md:text-7xl lg:text-8xl text-slate-900 leading-[0.95] tracking-tight">
                    A ritual rooted <br/>
<span className="text-slate-300 italic">in craft.</span>
</h2>
</div>

<div className="flex flex-col gap-10 reveal-up">
<p className="font-sans-clean text-sm md:text-base font-light text-slate-600 leading-loose max-w-md">
                    Beaklet pens are designed as everyday rituals — shaped by cities, culture, and the discipline of writing. Each piece balances precision, weight, and timeless form to create a connection between thought and paper.
                </p>
<div className="flex flex-row gap-8 items-center">
<a className="px-8 py-4 bg-slate-900 text-white font-sans-clean text-[11px] font-medium tracking-widest uppercase hover:bg-slate-800 transition-colors" href="#">
                        See Products
                    </a>
<a className="font-sans-clean text-[11px] font-medium tracking-widest uppercase text-slate-500 border-b border-transparent hover:border-slate-300 hover:text-slate-900 transition-all pb-1" href="#">
                        Craft &amp; Materials
                    </a>
</div>
</div>
</div>
</section>


<div className="relative w-full z-30 bg-white" id="docking-zone">

<div className="w-full relative block leading-[0]">

<svg className="w-full h-[150px] md:h-[300px] block" preserveaspectratio="none" viewbox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">

<path d="M0,320L1440,320L1440,160C1200,160 1000,280 720,280C440,280 240,160 0,160Z" fill="#0B1120" fillOpacity="1"></path>

</svg>

<div className="absolute bottom-[40%] left-1/2 w-1 h-1 bg-red-500 opacity-0" id="dock-target"></div>
</div>
</div>

<section className="relative w-full bg-[#0B1120] pb-32 pt-12 md:pt-24 z-30 overflow-hidden">

<div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<span className="block font-script text-3xl md:text-4xl text-blue-200/40 mb-8 reveal-up">Crafted Identity</span>
<h2 className="font-serif-display text-6xl md:text-8xl text-white font-light leading-[0.95] tracking-tight mb-16 reveal-up">
                Designed by cities
                <span className="text-blue-300/60 italic">Made to be written.</span>
</h2>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-slate-400 font-sans-clean text-[10px] md:text-xs tracking-[0.25em] uppercase mb-20 reveal-up">
<span>Precision-milled metal</span>
<span className="hidden md:inline w-1 h-1 rounded-full bg-slate-700"></span>
<span>Balanced weight &amp; flow</span>
<span className="hidden md:inline w-1 h-1 rounded-full bg-slate-700"></span>
<span>Everyday writing rituals</span>
</div>
<div className="reveal-up">
<a className="inline-block border border-white/20 bg-white/5 backdrop-blur-sm text-white px-10 py-5 font-sans-clean text-[11px] font-semibold tracking-widest uppercase hover:bg-white hover:text-[#0B1120] transition-all duration-500" href="#">
                    Discover Beaklet Pens
                </a>
</div>
<footer className="mt-32 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] uppercase tracking-widest font-sans-clean">
<p>© 2024 Beaklet Instruments</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
</footer>
</div>
</section>


    </>
  );
}
