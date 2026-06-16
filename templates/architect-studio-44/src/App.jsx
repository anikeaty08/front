import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- ICONS ---
        lucide.createIcons();

        // --- LENIS SMOOTH SCROLL ---
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
            smoothTouch: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // --- GSAP SETUP ---
        gsap.registerPlugin(ScrollTrigger);

        // --- TEXT SPLITTING ---
        const splitText = (selector) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                const text = el.innerText;
                el.innerHTML = text.split(' ').map(word => 
                    `<span class="word-wrap"><span class="word-inner">${word}&nbsp;</span></span>`
                ).join('');
            });
        };
        splitText('.split-animate');

        // --- PRELOADER SEQUENCE ---
        const tl = gsap.timeline({
            onComplete: () => {
                // Ensure scroll works after load
                document.body.style.overflow = 'visible'; 
                initAnimations();
            }
        });

        tl.to('.loader-bar', { width: '100%', duration: 1.2, ease: 'expo.inOut' })
          .to('.loader-text', { y: -50, opacity: 0, duration: 0.6, ease: 'power3.in' }, "-=0.2")
          .to('.loader', { yPercent: -100, duration: 1.0, ease: 'power4.inOut' })
          .set('body', { opacity: 1 }, 0); // Ensure body is visible immediately, loader covers it

        // --- SITE ANIMATIONS ---
        function initAnimations() {
            
            // Hero
            const heroTl = gsap.timeline();
            heroTl.to('.hero-text span', { 
                y: 0, 
                stagger: 0.1, 
                duration: 1.8, 
                ease: 'power4.out',
                delay: 0.2 
            })
            .to('.hero-fade', { opacity: 1, duration: 1 }, "-=1");

            // Hero Parallax
            gsap.to('.hero-img', {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.wrapper',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // Text Reveals
            document.querySelectorAll('.split-animate').forEach(el => {
                gsap.to(el.querySelectorAll('.word-inner'), {
                    y: "0%",
                    duration: 1.2,
                    ease: "power3.out",
                    stagger: 0.015,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    }
                });
            });

            // Card Stack Logic
            // We scale the current card down as the next one approaches
            const cards = gsap.utils.toArray('.card-item');
            
            cards.forEach((card, i) => {
                const nextCard = cards[i + 1];
                if (nextCard) {
                    gsap.to(card.querySelector('.card-inner'), {
                        scale: 0.92,
                        filter: "brightness(0.6)",
                        ease: "none",
                        scrollTrigger: {
                            trigger: nextCard,
                            start: "top bottom",
                            end: "top 10vh", 
                            scrub: true
                        }
                    });
                }
            });

            // Footer Parallax Content
            gsap.from('.footer-sticky > div.relative', {
                y: 150,
                opacity: 0.5,
                scrollTrigger: {
                    trigger: '.wrapper', 
                    start: 'bottom 100%', 
                    end: 'bottom 20%', 
                    scrub: true
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise"></div>

<div className="loader">
<div className="loader-text font-display text-4xl md:text-6xl font-bold tracking-tighter">AETHEREAL</div>
<div className="loader-bar"></div>
</div>

<nav className="fixed top-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none">
<div className="font-display font-semibold text-lg tracking-tighter pointer-events-auto cursor-pointer">AETHEREAL</div>
<div className="hidden md:flex gap-8 text-[11px] font-medium uppercase tracking-[0.2em] pointer-events-auto">
<a className="hover:text-white/70 transition-colors duration-300" href="#">Projects</a>
<a className="hover:text-white/70 transition-colors duration-300" href="#">Studio</a>
<a className="hover:text-white/70 transition-colors duration-300" href="#">Journal</a>
<a className="hover:text-white/70 transition-colors duration-300" href="#">Contact</a>
</div>
<button className="md:hidden pointer-events-auto">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</nav>

<div className="wrapper">

<section className="h-screen relative flex flex-col items-center justify-center overflow-hidden bg-[var(--c-bg)]">
<div className="absolute inset-0 w-full h-full overflow-hidden">
<img alt="Concrete Architecture" className="hero-img w-full h-full object-cover brightness-[0.8] scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp"/>
</div>
<div className="relative z-10 text-center text-white mix-blend-difference px-4 w-full">
<div className="flex flex-col items-center justify-center gap-2 md:gap-4">
<h1 className="font-display text-[13vw] leading-[0.85] font-semibold tracking-tighter overflow-hidden hero-text">
<span className="block translate-y-full">CONCRETE</span>
</h1>
<h1 className="font-display text-[13vw] leading-[0.85] font-semibold tracking-tighter overflow-hidden hero-text">
<span className="block translate-y-full">DREAMS</span>
</h1>
</div>
<div className="mt-12 flex justify-between items-end w-full max-w-[90vw] mx-auto opacity-0 hero-fade">
<div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-left">
                        Based in<br/>Tokyo / London
                    </div>
<div className="hidden md:block h-px w-24 bg-white/50"></div>
<div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-right">
                        Scroll to<br/>Explore
                    </div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-12 max-w-[1600px] mx-auto grid md:grid-cols-12 gap-12 items-start">
<div className="md:col-span-7">
<h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tighter split-animate text-[var(--c-dark)]">
                    Structure as <br/>
<span className="text-[var(--c-accent)] opacity-80">living sculpture.</span>
</h2>
</div>
<div className="md:col-span-5 md:pt-4">
<div className="text-lg md:text-xl font-light leading-relaxed text-gray-700 split-animate text-balance">
                    We believe that architecture is frozen music. Our studio specializes in brutalist forms softened by biophilic integration. We create spaces that do not just shelter, but inspire, provoking a dialogue between the built environment and the natural world.
                </div>
<div className="mt-12 pt-8 border-t border-black/10 flex flex-col gap-4">
<div className="flex justify-between text-xs uppercase tracking-[0.15em] font-semibold text-gray-500">
<span>Architecture</span>
<span>01</span>
</div>
<div className="flex justify-between text-xs uppercase tracking-[0.15em] font-semibold text-gray-500">
<span>Interior</span>
<span>02</span>
</div>
<div className="flex justify-between text-xs uppercase tracking-[0.15em] font-semibold text-gray-500">
<span>Sustainability</span>
<span>03</span>
</div>
</div>
</div>
</section>

<section className="stack-section py-24 md:py-32">
<div className="px-6 md:px-12 mb-20 flex justify-between items-end max-w-[1600px] mx-auto">
<div>
<span className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">Selected Works</span>
<h2 className="font-display text-4xl md:text-6xl tracking-tighter">Recent Projects</h2>
</div>
<div className="hidden md:block text-right">
<span className="text-xs font-medium text-white/40 uppercase tracking-widest">( 2023 — 2025 )</span>
</div>
</div>
<div className="w-full max-w-[1600px] mx-auto pb-[10vh]">

<div className="card-item group">
<div className="card-inner">
<div className="p-8 md:p-16 flex flex-col justify-between relative z-10 bg-[#0A0A0A]">
<div>
<div className="font-display text-4xl text-white/10 mb-6">01</div>
<h3 className="font-display text-2xl md:text-4xl tracking-tighter mb-2">The Void House</h3>
<span className="text-xs font-medium uppercase tracking-[0.15em] text-white/50">Kyoto, Japan</span>
</div>
<div className="max-w-xs">
<p className="text-sm font-light text-gray-400 leading-relaxed mb-8">
                                    A minimal concrete residence focused on negative space and light manipulation. Designed for deep meditation and silence amidst the urban chaos.
                                </p>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:text-white/70 transition-colors" href="#">
                                    View Case Study <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
<div className="relative h-full overflow-hidden order-first md:order-last">
<img alt="The Void House" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
</div>
</div>

<div className="card-item group">
<div className="card-inner">
<div className="p-8 md:p-16 flex flex-col justify-between relative z-10 bg-[#0A0A0A]">
<div>
<div className="font-display text-4xl text-white/10 mb-6">02</div>
<h3 className="font-display text-2xl md:text-4xl tracking-tighter mb-2">Moss Bunker</h3>
<span className="text-xs font-medium uppercase tracking-[0.15em] text-white/50">Berlin, Germany</span>
</div>
<div className="max-w-xs">
<p className="text-sm font-light text-gray-400 leading-relaxed mb-8">
                                    Adaptive reuse of a WWII bunker into a sustainable vertical farm and living space. A brutalist icon reclaimed by nature.
                                </p>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:text-white/70 transition-colors" href="#">
                                    View Case Study <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
<div className="relative h-full overflow-hidden order-first md:order-last">
<img alt="Moss Bunker" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
</div>
</div>

<div className="card-item group">
<div className="card-inner">
<div className="p-8 md:p-16 flex flex-col justify-between relative z-10 bg-[#0A0A0A]">
<div>
<div className="font-display text-4xl text-white/10 mb-6">03</div>
<h3 className="font-display text-2xl md:text-4xl tracking-tighter mb-2">Sky Cliff</h3>
<span className="text-xs font-medium uppercase tracking-[0.15em] text-white/50">Reykjavik, Iceland</span>
</div>
<div className="max-w-xs">
<p className="text-sm font-light text-gray-400 leading-relaxed mb-8">
                                    A glass and steel structure cantilevered over the volcanic landscape. Blending immediate danger with uncompromising luxury.
                                </p>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:text-white/70 transition-colors" href="#">
                                    View Case Study <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
<div className="relative h-full overflow-hidden order-first md:order-last">
<img alt="Sky Cliff" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 bg-[var(--c-bg)] text-center flex flex-col items-center">
<h2 className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tighter mb-8 split-animate">Designing for Eternity</h2>
<div className="max-w-2xl text-gray-600 font-light text-lg md:text-xl leading-relaxed mb-16 split-animate text-balance">
                Our philosophy is rooted in the belief that buildings should age, not deteriorate. We use materials that develop a patina, recording the passage of time on their surface.
            </div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
<div className="flex flex-col items-center gap-4">
<i className="w-6 h-6 stroke-1" data-lucide="hexagon"></i>
<span>Form</span>
</div>
<div className="flex flex-col items-center gap-4">
<i className="w-6 h-6 stroke-1" data-lucide="sun"></i>
<span>Light</span>
</div>
<div className="flex flex-col items-center gap-4">
<i className="w-6 h-6 stroke-1" data-lucide="mountain-snow"></i>
<span>Material</span>
</div>
<div className="flex flex-col items-center gap-4">
<i className="w-6 h-6 stroke-1" data-lucide="infinity"></i>
<span>Time</span>
</div>
</div>
<div className="h-24 w-px bg-gradient-to-b from-gray-300 to-transparent mt-24"></div>
</section>
</div>


<footer className="footer-sticky">
<div className="absolute inset-0 z-0">
<img alt="Footer Background" className="w-full h-full object-cover opacity-20 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
</div>
<div className="relative z-10 text-center w-full px-4">
<div className="text-xs uppercase tracking-[0.3em] mb-8 text-gray-500 font-semibold">Start a Project</div>
<a className="group block w-fit mx-auto relative overflow-hidden" href="mailto:hello@aethereal.com">
<span className="font-display text-[12vw] leading-[0.85] tracking-tighter block transition-transform duration-500 group-hover:-translate-y-full">LET'S TALK</span>
<span className="font-display text-[12vw] leading-[0.85] tracking-tighter block absolute top-0 left-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-gray-500">LET'S TALK</span>
</a>
<div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1400px] mx-auto mt-24 px-6 md:px-12">
<div className="text-[10px] uppercase tracking-widest text-gray-600 mb-6 md:mb-0">
                    © 2025 Aethereal Architecture<br/>All Rights Reserved
                </div>
<div className="flex gap-12 text-xs uppercase tracking-[0.2em] font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Behance</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
