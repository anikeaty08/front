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



        // --- CONFIG & UTILS ---
        gsap.registerPlugin(ScrollTrigger);
        
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
            touchMultiplier: 2
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // --- SPLIT TEXT ---
        function splitText(selector) {
            document.querySelectorAll(selector).forEach(el => {
                const text = el.innerText;
                el.innerHTML = text.split(' ').map(word => 
                    `<span class="word-wrap"><span class="word-inner">${word}&nbsp;</span></span>`
                ).join('');
            });
        }
        splitText('.split-animate');

        // --- INIT ANIMATIONS ---
        const init = () => {
            
            // 1. Hero Reveal
            const heroTl = gsap.timeline();
            heroTl.to('.hero-text span', {
                y: "0%",
                duration: 1.8,
                ease: "power4.out",
                stagger: 0.15
            })
            .to('.hero-sub', {
                y: "0%",
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }, "-=1");

            // 2. Parallax Hero Image
            gsap.to('.hero-img', {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: '.hero-img',
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // 3. Text Reveals on Scroll
            document.querySelectorAll('.split-animate').forEach(el => {
                gsap.to(el.querySelectorAll('.word-inner'), {
                    y: "0%",
                    opacity: 1,
                    duration: 1,
                    stagger: 0.02,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // 4. Card Stack Effect
            const cards = gsap.utils.toArray('.card-item');
            cards.forEach((card, i) => {
                const inner = card.querySelector('div'); // The inner card container
                const nextCard = cards[i + 1];
                
                if (nextCard) {
                    gsap.to(inner, {
                        scale: 0.9,
                        opacity: 0.5,
                        filter: 'blur(5px)',
                        ease: "none",
                        scrollTrigger: {
                            trigger: nextCard,
                            start: "top bottom", 
                            end: "top 20vh", 
                            scrub: true
                        }
                    });
                }
            });

            // 5. Footer Parallax Text
            gsap.from('.footer-link', {
                yPercent: 100,
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: '.footer-sticky',
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: 1
                }
            });
        };

        // --- PRELOADER SEQUENCE ---
        window.addEventListener('load', () => {
            const tl = gsap.timeline({
                onComplete: () => {
                    document.body.style.opacity = 1;
                    init();
                }
            });

            tl.to('.loader-bar', {
                width: '100%',
                duration: 1.2,
                ease: "expo.inOut"
            })
            .to('.loader-text', {
                y: -50,
                opacity: 0,
                duration: 0.6,
                ease: "power3.in"
            })
            .to('.loader', {
                yPercent: -100,
                duration: 1,
                ease: "expo.inOut"
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
      

<div className="noise"></div>

<div className="loader">
<div className="flex flex-col items-center gap-4">
<div className="font-display text-4xl md:text-6xl font-semibold tracking-tighter loader-text">AETHEREAL</div>
<div className="w-64 h-px bg-white/20 overflow-hidden relative">
<div className="absolute inset-0 bg-white w-0 loader-bar"></div>
</div>
</div>
</div>

<nav className="fixed top-0 w-full p-6 md:p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
<a className="font-display text-lg tracking-tighter font-semibold hover:opacity-70 transition-opacity" href="#">AETHEREAL</a>
<div className="hidden md:flex gap-12 text-xs uppercase tracking-[0.2em] font-medium">
<a className="hover-line" href="#work">Projects</a>
<a className="hover-line" href="#studio">Studio</a>
<a className="hover-line" href="#contact">Contact</a>
</div>
<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>

<div className="wrapper">

<section className="h-screen relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-stone-900">
<img alt="Concrete Architecture" className="w-full h-full object-cover brightness-[0.6] hero-img scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp"/>
</div>
<div className="relative z-10 text-center text-[#E3E1DC] mix-blend-difference px-4">
<div className="overflow-hidden">
<h1 className="font-display text-[13vw] leading-[0.85] tracking-tighter hero-text">
<span className="block translate-y-full">CONCRETE</span>
</h1>
</div>
<div className="overflow-hidden">
<h1 className="font-display text-[13vw] leading-[0.85] tracking-tighter hero-text">
<span className="block translate-y-full">DREAMS</span>
</h1>
</div>
<div className="mt-8 md:mt-12 overflow-hidden flex justify-center">
<p className="hero-sub text-xs md:text-sm uppercase tracking-[0.4em] translate-y-full opacity-0">
                        Sculpting Light &amp; Void
                    </p>
</div>
</div>
<div className="absolute bottom-8 left-8 text-xs uppercase tracking-widest text-white/50 hidden md:block mix-blend-difference">
                Scroll to explore
            </div>
</section>

<section className="py-24 md:py-40 px-6 md:px-12 max-w-[1800px] mx-auto" id="studio">
<div className="grid md:grid-cols-12 gap-12 md:gap-20 border-t border-black/10 pt-12">
<div className="md:col-span-4">
<h2 className="font-display text-3xl md:text-4xl leading-tight tracking-tight split-animate">
                        NOT JUST <br/>
<span className="text-[var(--c-accent)]">SHELTER.</span>
</h2>
</div>
<div className="md:col-span-8">
<p className="text-xl md:text-3xl font-light leading-relaxed text-neutral-800 split-animate">
                        We design for the silence between sounds. Our architecture focuses on the tactile nature of materials—raw concrete, aged timber, and glass—creating spaces that breathe with the environment.
                    </p>

<div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20">
<div className="flex flex-col gap-4 group cursor-pointer">
<div className="p-4 border border-black/10 w-fit rounded-full group-hover:bg-black group-hover:text-white transition-colors duration-500">
<iconify-icon icon="lucide:pen-tool" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xs uppercase tracking-widest font-semibold">Architectural<br/>Design</h3>
</div>
<div className="flex flex-col gap-4 group cursor-pointer">
<div className="p-4 border border-black/10 w-fit rounded-full group-hover:bg-black group-hover:text-white transition-colors duration-500">
<iconify-icon icon="lucide:trees" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xs uppercase tracking-widest font-semibold">Landscape<br/>Integration</h3>
</div>
<div className="flex flex-col gap-4 group cursor-pointer">
<div className="p-4 border border-black/10 w-fit rounded-full group-hover:bg-black group-hover:text-white transition-colors duration-500">
<iconify-icon icon="lucide:box" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xs uppercase tracking-widest font-semibold">Interior<br/>Sculpting</h3>
</div>
</div>
</div>
</div>
</section>

<section className="card-stack py-24 px-4 md:px-0" id="work">
<div className="container mx-auto max-w-[1400px]">
<div className="mb-20 px-6 md:px-0 flex items-end justify-between">
<h2 className="font-display text-4xl md:text-6xl tracking-tighter">SELECTED WORKS</h2>
<span className="hidden md:block text-xs uppercase tracking-widest opacity-50 mb-2">(2023 — 2025)</span>
</div>

<div className="card-item flex items-center justify-center">
<div className="w-full md:w-[90%] h-full bg-[#1e1e1e] border border-white/10 overflow-hidden relative group grid grid-cols-1 md:grid-cols-2 shadow-2xl">
<div className="p-8 md:p-16 flex flex-col justify-between order-2 md:order-1 relative z-10 bg-[#1e1e1e]">
<div>
<div className="font-display text-6xl md:text-8xl opacity-10 absolute top-4 left-4 md:top-8 md:left-8 select-none">01</div>
<div className="mt-12 md:mt-0">
<h3 className="font-display text-2xl md:text-4xl tracking-tight mb-2">THE VOID HOUSE</h3>
<p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-8">Kyoto, Japan</p>
<p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-sm">
                                        A study in subtraction. We removed 40% of the floor plate to create a central light well that tracks the sun's movement throughout the day.
                                    </p>
</div>
</div>
<div className="pt-8 flex items-center gap-4 text-xs uppercase tracking-widest group-hover:text-white transition-colors">
<span>View Case Study</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="relative h-full overflow-hidden order-1 md:order-2">
<img alt="Void House" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item flex items-center justify-center">
<div className="w-full md:w-[90%] h-full bg-[#1e1e1e] border border-white/10 overflow-hidden relative group grid grid-cols-1 md:grid-cols-2 shadow-2xl">
<div className="p-8 md:p-16 flex flex-col justify-between order-2 md:order-1 relative z-10 bg-[#1e1e1e]">
<div>
<div className="font-display text-6xl md:text-8xl opacity-10 absolute top-4 left-4 md:top-8 md:left-8 select-none">02</div>
<div className="mt-12 md:mt-0">
<h3 className="font-display text-2xl md:text-4xl tracking-tight mb-2">MOSS BUNKER</h3>
<p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-8">Berlin, Germany</p>
<p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-sm">
                                        Adaptive reuse of Brutalist infrastructure. We introduced hydroponic vertical gardens into the thick concrete walls, merging defense with life.
                                    </p>
</div>
</div>
<div className="pt-8 flex items-center gap-4 text-xs uppercase tracking-widest group-hover:text-white transition-colors">
<span>View Case Study</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="relative h-full overflow-hidden order-1 md:order-2">
<img alt="Moss Bunker" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item flex items-center justify-center">
<div className="w-full md:w-[90%] h-full bg-[#1e1e1e] border border-white/10 overflow-hidden relative group grid grid-cols-1 md:grid-cols-2 shadow-2xl">
<div className="p-8 md:p-16 flex flex-col justify-between order-2 md:order-1 relative z-10 bg-[#1e1e1e]">
<div>
<div className="font-display text-6xl md:text-8xl opacity-10 absolute top-4 left-4 md:top-8 md:left-8 select-none">03</div>
<div className="mt-12 md:mt-0">
<h3 className="font-display text-2xl md:text-4xl tracking-tight mb-2">SKY CLIFF</h3>
<p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-8">Reykjavik, Iceland</p>
<p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-sm">
                                        Cantilevered 40 meters over volcanic rock. A structural marvel designed to endure extreme weather while offering panoramic solitude.
                                    </p>
</div>
</div>
<div className="pt-8 flex items-center gap-4 text-xs uppercase tracking-widest group-hover:text-white transition-colors">
<span>View Case Study</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="relative h-full overflow-hidden order-1 md:order-2">
<img alt="Sky Cliff" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp"/>
</div>
</div>
</div>
</div>
</section>

<section className="h-[60vh] flex flex-col items-center justify-center bg-[var(--c-bg)] relative z-20">
<div className="text-center px-4">
<iconify-icon className="mb-8 opacity-50 animate-spin-slow" icon="lucide:aperture" strokeWidth="1" width="48"></iconify-icon>
<p className="text-sm md:text-base uppercase tracking-[0.3em] font-medium text-gray-600 mb-4">The Future is Built</p>
<h2 className="font-display text-3xl md:text-5xl tracking-tight mb-12">TIMELESS FORM</h2>
<div className="h-16 w-px bg-black/20 mx-auto"></div>
</div>
</section>
</div> 

<footer className="footer-sticky" id="contact">
<div className="absolute inset-0 opacity-20">
<img alt="Footer bg" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp"/>
</div>
<div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full">
<div className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-400 mb-8">Start a Project</div>
<a className="font-display text-[12vw] leading-none text-white tracking-tighter hover:text-neutral-400 transition-colors duration-500 footer-link" href="mailto:hello@aethereal.com">
                HELLO
            </a>
<div className="flex flex-col md:flex-row gap-8 md:gap-24 mt-16 md:mt-24 items-center text-xs uppercase tracking-widest text-gray-400">
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">ArchDaily</a>
</div>
<div className="w-px h-4 bg-gray-700 hidden md:block"></div>
<div>
                    Tokyo / London / NYC
                </div>
</div>
<div className="absolute bottom-8 w-full text-center">
<p className="text-[10px] text-gray-600 uppercase tracking-widest">© 2025 Aethereal Studios. All Rights Reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
