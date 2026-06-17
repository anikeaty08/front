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
            const penContainer = document.getElementById('pen-container');
            const heroSection = document.getElementById('hero');
            const transitionZone = document.getElementById('transition-zone');
            const finalContent = document.getElementById('final-content');
            
            // Configuration
            let lastScrollY = window.scrollY;
            
            function onScroll() {
                const scrollY = window.scrollY;
                const viewportHeight = window.innerHeight;
                const docHeight = document.body.scrollHeight;
                
                // 1. Pen Rotation & Initial Descent
                // As we scroll down, pen rotates slightly and moves down
                const rotation = Math.min(scrollY * 0.05, 15); // Cap rotation at 15deg
                const heroProgress = Math.min(scrollY / viewportHeight, 1);
                
                // Parallax movement factor
                const movementY = scrollY * 0.8; 
                
                // 2. Docking Logic
                // Calculate where the transition zone starts relative to viewport
                const transitionRect = transitionZone.getBoundingClientRect();
                const dockOffset = 150; // Offset to settle into the curve nicely
                
                // If the transition zone is nearing the center of the screen
                if (transitionRect.top < (viewportHeight / 2) + dockOffset) {
                    // Lock phase
                    // We calculate the exact position where it should stop relative to the document
                    const lockPosition = transitionZone.offsetTop + 180; // 180px into the blue section
                    
                    // Once we pass the lock point, we stop fixing it and let it scroll away or stay absolute
                    // For this design, let's make it "settle" into the curve visually
                    
                    // Visual adjustment for "Settling"
                    // We change the pen scale slightly to imply it landed
                    penContainer.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(0.9)`;
                    
                    // Simple logic: If we are deep in the footer, fade pen out or keep it docked?
                    // Let's fade it out slightly to focus on text
                    if (transitionRect.top < 0) {
                        penContainer.style.opacity = Math.max(0, 1 + (transitionRect.top / 500));
                    } else {
                        penContainer.style.opacity = 1;
                    }

                } else {
                    // Floating Phase
                    penContainer.style.opacity = 1;
                    // Move pen down but slower than scroll (parallax)? 
                    // No, prompt says "moves downward with scroll".
                    // Let's keep it fixed center but rotate, giving the illusion of tumbling through content,
                    // OR translate it slightly Y based on section.
                    
                    // To make it feel "editorial", keep it fixed center but rotate it.
                    // But prompt says: "The pen moves downward with the scroll".
                    // We will translate it Y relative to its fixed position to simulate weight.
                    
                    const travelDistance = Math.min(scrollY * 0.5, 300); // Move down max 300px
                    penContainer.style.transform = `translate(-50%, calc(-50% + ${travelDistance}px)) rotate(${rotation}deg)`;
                }

                // 3. Hero Text Parallax (Stays fixed briefly)
                const heroText = heroSection.querySelector('.text-center');
                if (scrollY < viewportHeight) {
                    heroText.style.transform = `translateY(${scrollY * 0.4}px)`;
                    heroText.style.opacity = 1 - (scrollY / (viewportHeight * 0.8));
                }

                lastScrollY = scrollY;
                requestAnimationFrame(onScroll);
            }

            // Init reveal animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal-text').forEach(el => observer.observe(el));

            window.addEventListener('scroll', () => requestAnimationFrame(onScroll));
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
      

<nav className="fixed md:px-12 md:py-8 flex text-slate-900 mix-blend-difference w-full z-40 pt-6 pr-6 pb-6 pl-6 top-0 items-center justify-between">
<a className="font-sans-clean tracking-[0.2em] font-medium text-xs uppercase z-50 mix-blend-difference text-slate-800 font-custom" href="#" style={{}}>Beaklet</a>
<button className="group flex items-center gap-3 z-50 mix-blend-difference">
<span className="font-sans-clean text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-slate-800 font-custom" style={{}}>Menu</span>
<iconify-icon className="text-slate-800" icon="lucide:menu" strokeWidth="1.5" style={{}} width="20"></iconify-icon>
</button>
</nav>

<div id="pen-container">

<svg className="beaklet-pen" preserveaspectratio="xMidYMid meet" viewbox="0 0 100 600">
<defs>
<lineargradient id="barrelGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#0f172a', stopOpacity: '1'}}></stop>
<stop offset="40%" style={{stopColor: '#334155', stopOpacity: '1'}}></stop>
<stop offset="60%" style={{stopColor: '#334155', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#020617', stopOpacity: '1'}}></stop>
</lineargradient>
<lineargradient id="goldGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#ca8a04', stopOpacity: '1'}}></stop>
<stop offset="50%" style={{stopColor: '#fef08a', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#a16207', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>

<path d="M30,50 L70,50 L70,450 C70,460 65,480 50,490 C35,480 30,460 30,450 Z" fill="url(#barrelGrad)"></path>

<rect fill="url(#barrelGrad)" height="180" rx="2" width="44" x="28" y="50"></rect>

<rect fill="url(#goldGrad)" height="10" width="44" x="28" y="220"></rect>

<path d="M50,60 L54,60 L54,180 L50,190 L46,180 L46,60 Z" fill="url(#goldGrad)"></path>

<path d="M40,490 L50,530 L60,490 Z" fill="url(#goldGrad)"></path>
</svg>
</div>

<section className="flex flex-col z-10 w-full h-screen relative items-center justify-center" id="hero">
<div className="text-center relative top-[-5vh]">
<h1 className="md:text-9xl leading-[0.85] reveal-text text-7xl font-light text-slate-900 tracking-tight font-serif-display visible" style={{}}>
                Cities,<br/>Written
            </h1>
<p className="md:text-5xl reveal-text text-4xl text-slate-500 font-script text-center mt-4 relative left-0 -rotate-2 visible" style={{}}>
                in ink
            </p>
</div>
<div className="absolute bottom-16 md:bottom-24 text-center max-w-xs md:max-w-md px-6 reveal-text visible" style={{}}>
<p className="font-sans-clean text-xs md:text-sm font-light text-slate-500 tracking-wide leading-relaxed font-custom" style={{}}>
                A premium writing instrument collection inspired by the rhythm, culture, and elegance of iconic cities.
            </p>
</div>
</section>

<section className="w-full py-32 relative z-20" id="products">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-24">
<h2 className="font-serif-display text-4xl md:text-5xl text-slate-900 font-light font-custom" style={{}}>New Arrivals</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-center">

<div className="flex flex-col items-center group cursor-pointer">
<div className="h-64 w-full flex items-center justify-center transition-transform duration-700 group-hover:-translate-y-4">

<div className="w-2 h-48 bg-slate-300 rounded-full rotate-[15deg]" style={{}}></div>
</div>
<span className="mt-8 font-sans-clean text-xs tracking-widest uppercase text-slate-500 group-hover:text-slate-900 transition-colors font-custom" style={{}}>The Kyoto</span>
</div>

<div className="flex flex-col items-center group cursor-pointer md:-mt-12">
<div className="relative">
<div className="absolute inset-0 bg-slate-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{}}></div>
<div className="h-80 w-full flex items-center justify-center relative z-10 transition-transform duration-700 group-hover:-translate-y-4">

<div className="w-3 h-64 bg-slate-800 rounded-full" style={{}}></div>
</div>
</div>
<span className="mt-10 font-sans-clean text-xs tracking-widest uppercase text-slate-900 font-medium font-custom" style={{}}>The London • Edition 1</span>
</div>

<div className="flex flex-col items-center group cursor-pointer">
<div className="h-64 w-full flex items-center justify-center transition-transform duration-700 group-hover:-translate-y-4">

<div className="w-2 h-48 bg-slate-300 rounded-full rotate-[-15deg]" style={{}}></div>
</div>
<span className="mt-8 font-sans-clean text-xs tracking-widest uppercase text-slate-500 group-hover:text-slate-900 transition-colors font-custom" style={{}}>The New York</span>
</div>
</div>
<div className="flex justify-center mt-24">
<a className="border-b border-slate-300 pb-1 font-sans-clean text-xs tracking-widest uppercase text-slate-500 hover:text-slate-900 hover:border-slate-900 transition-all font-custom" href="#" style={{}}>View Collection</a>
</div>
</div>
</section>

<section className="w-full py-32 md:py-48 bg-[#FDFDFB] relative z-20" id="story">
<div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

<div className="md:col-span-7">
<h2 className="font-serif-display text-5xl md:text-7xl lg:text-8xl text-slate-900 leading-[1] font-light tracking-tight font-custom" style={{}}>
                    A ritual rooted <br/>
<span className="italic font-serif-display text-slate-400 font-custom" style={{}}>in craft.</span>
</h2>
</div>

<div className="md:col-span-4 md:col-start-9 flex flex-col gap-8 pt-4">
<p className="font-sans-clean text-sm md:text-base font-light text-slate-600 leading-loose font-custom" style={{}}>
                    Beaklet pens are designed as everyday rituals — tools shaped by cities, culture, and the discipline of writing. Each instrument reflects balance, precision, and quiet confidence.
                </p>
<div className="flex gap-6 mt-4">
<button className="font-sans-clean text-xs tracking-widest uppercase border border-slate-200 px-6 py-3 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-500 rounded-sm font-custom" style={{}}>
                        See Products
                    </button>
<button className="font-sans-clean text-xs tracking-widest uppercase text-slate-500 py-3 border-b border-transparent hover:border-slate-300 transition-all font-custom" style={{}}>
                        Craft &amp; Materials
                    </button>
</div>
</div>
</div>
</section>


<div className="relative w-full z-30" id="transition-zone">

<div className="absolute -top-1 w-full overflow-hidden leading-[0] rotate-180 transform z-40">
<svg className="relative block w-[calc(100%+1.3px)] h-[150px] md:h-[250px]" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#FDFDFB"></path>
</svg>
</div>

<section className="w-full bg-[#0B1120] min-h-screen relative pt-48 pb-32 flex flex-col items-center justify-center overflow-hidden">

<div className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none mix-blend-overlay">

<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1516962215378-7fa2e137ae91?q=80&amp;w=2500&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
</div>
<div className="relative z-50 text-center px-6" id="final-content">
<span className="font-script text-3xl text-blue-200/50 mb-6 block font-custom" style={{}}>Crafted Identity</span>
<h2 className="font-serif-display text-5xl md:text-7xl text-white font-light tracking-tight leading-tight mb-12 font-custom" style={{}}>
                    Designed by cities<br/>
<span className="text-blue-200/80 font-custom" style={{}}>Made to be written.</span>
</h2>
<div className="flex flex-col md:flex-row gap-6 md:gap-16 justify-center text-slate-400 font-sans-clean text-xs tracking-[0.2em] uppercase mb-16" style={{}}>
<span className="font-custom" style={{}}>Precision-milled metal</span>
<span className="hidden md:inline text-slate-700 font-custom" style={{}}>•</span>
<span className="font-custom" style={{}}>Balanced weight &amp; flow</span>
<span className="hidden md:inline text-slate-700 font-custom" style={{}}>•</span>
<span className="font-custom" style={{}}>Everyday Rituals</span>
</div>
<a className="inline-block bg-white text-[#0B1120] px-8 py-4 font-sans-clean text-xs font-semibold tracking-widest uppercase hover:bg-blue-50 transition-colors duration-300 font-custom" href="#" style={{}}>
                    Discover Beaklet Pens
                </a>
</div>

<div className="absolute top-32 left-1/2 -translate-x-1/2 w-1 h-1" id="pen-dock"></div>
<footer className="absolute bottom-8 w-full text-center">
<p className="text-slate-700 text-[10px] font-sans-clean tracking-widest uppercase font-custom" style={{}}>© 2024 Beaklet Instruments.</p>
</footer>
</section>
</div>


    </>
  );
}
