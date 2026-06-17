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



        // --- SETUP ---
        gsap.registerPlugin(ScrollTrigger);

        // --- LENIS SCROLL ---
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // --- TEXT SPLITTER UTILITY ---
        function splitTextToWords(element) {
            const text = element.innerText;
            const words = text.split(' ');
            element.innerHTML = '';
            words.forEach(word => {
                const wordWrap = document.createElement('span');
                wordWrap.classList.add('word-wrap');
                wordWrap.innerHTML = `<span class="word-inner">${word}&nbsp;</span>`;
                element.appendChild(wordWrap);
            });
        }

        document.querySelectorAll('.split-animate').forEach(el => {
            splitTextToWords(el);
        });

        // --- LOADER ---
        const loadTl = gsap.timeline({
            onComplete: () => {
                document.body.style.opacity = 1;
                initSite();
            }
        });

        loadTl.to('.loader-bar', { width: '100%', duration: 1.5, ease: 'power2.inOut' })
              .to('.loader-text', { y: -50, opacity: 0, duration: 0.5 })
              .to('.loader', { yPercent: -100, duration: 1, ease: 'power4.inOut' });

        function initSite() {
            // Hero Animations
            gsap.to('.hero-text span', { 
                y: 0, 
                stagger: 0.1, 
                duration: 1.5, 
                ease: 'power4.out' 
            });
            gsap.to('.hero-fade', { opacity: 1, duration: 1, delay: 0.5 });
            
            // Hero Parallax
            gsap.to('.hero-img', {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero-img',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // --- TEXT REVEAL ON SCROLL ---
            const splitElements = document.querySelectorAll('.split-animate');
            splitElements.forEach(el => {
                const words = el.querySelectorAll('.word-inner');
                gsap.to(words, {
                    y: "0%",
                    duration: 1,
                    ease: "power3.out",
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%", 
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // --- CARD STACK ANIMATION ---
            const cards = gsap.utils.toArray('.card-item');
            
            cards.forEach((card, i) => {
                const nextCard = cards[i+1];
                if (nextCard) {
                    gsap.to(card.querySelector('.card-inner'), {
                        scale: 0.9,
                        opacity: 0.4, 
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

            // --- FOOTER REVEAL ANIMATIONS ---
            // Main Footer Text Parallax
            gsap.from('.footer-main-content', {
                y: 100,
                scale: 0.9,
                opacity: 0.5,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.footer-sticky', 
                    start: 'top bottom', // As footer enters viewport (technically wrapper leaves)
                    end: 'bottom bottom',
                    scrub: true
                }
            });

            // Contact Info Stagger Reveal
            // We use the wrapper's bottom edge as the trigger for the footer contents
            gsap.to('.contact-reveal', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.wrapper',
                    start: 'bottom bottom', // When wrapper bottom hits screen bottom
                    toggleActions: 'play none none reverse'
                }
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
      

<div className="noise-overlay"></div>

<div className="loader">
<div className="loader-text">AETHEREAL</div>
<div className="loader-bar"></div>
</div>

<nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
<div className="display font-bold text-xl tracking-tighter">AETHEREAL</div>
<div className="hidden md:flex gap-10 text-xs uppercase tracking-widest">
<a className="hover:text-gray-300 transition-colors" href="#">Work</a>
<a className="hover:text-gray-300 transition-colors" href="#">Studio</a>
<a className="hover:text-gray-300 transition-colors" href="#">Contact</a>
</div>
<div className="md:hidden">MENU</div>
</nav>

<div className="wrapper">

<section className="h-screen relative flex items-center justify-center overflow-hidden">
<img alt="Hero" className="absolute inset-0 w-full h-full object-cover brightness-75 hero-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp"/>
<div className="relative z-10 text-center text-white mix-blend-difference">
<h1 className="display text-[12vw] leading-none hero-text overflow-hidden">
<span className="block translate-y-full">CONCRETE</span>
</h1>
<h1 className="display text-[12vw] leading-none hero-text overflow-hidden">
<span className="block translate-y-full">DREAMS</span>
</h1>
<p className="mt-8 text-sm uppercase tracking-[0.5em] opacity-0 hero-fade mix-blend-difference">Future Architecture</p>
</div>
</section>

<section className="py-32 px-6 md:px-20 grid md:grid-cols-2 gap-16 max-w-[1800px] mx-auto bg-[var(--c-bg)]">
<div>
<h2 className="display text-4xl md:text-5xl leading-tight split-animate">
                    Structure as <br/><span className="text-[var(--c-accent)]">sculpture.</span>
</h2>
</div>
<div className="text-xl font-light leading-relaxed text-gray-700">
<p className="mb-8 split-animate">We believe that architecture is frozen music. Our studio specializes in brutalist forms softened by biophilic integration. We create spaces that do not just shelter, but inspire.</p>
<div className="h-px w-full bg-black/10 my-8"></div>
<div className="flex gap-12 text-sm uppercase tracking-widest split-animate">
<div>Est. 2024</div>
<div>Tokyo / London</div>
</div>
</div>
</section>

<section className="stack-section">
<div className="text-center mb-20 px-6">
<div className="text-xs uppercase tracking-widest mb-4 opacity-50">Selected Works</div>
<h2 className="display text-5xl md:text-7xl">RECENT PROJECTS</h2>
</div>
<div className="stack-container">

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-[var(--c-bg)] opacity-30">01</div>
<h3 className="text-3xl font-bold">THE VOID HOUSE</h3>
<p className="text-sm mt-4 opacity-70 uppercase tracking-widest">Kyoto, Japan</p>
</div>
<div className="text-gray-400 font-light">
                                A minimal concrete residence focused on negative space and light manipulation. Designed for meditation and silence.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-colors">View Project</button>
</div>
<div className="card-img-wrap">
<img alt="Project 1" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-[var(--c-bg)] opacity-30">02</div>
<h3 className="text-3xl font-bold">MOSS BUNKER</h3>
<p className="text-sm mt-4 opacity-70 uppercase tracking-widest">Berlin, Germany</p>
</div>
<div className="text-gray-400 font-light">
                                Adaptive reuse of a WWII bunker into a sustainable vertical farm and living space.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-colors">View Project</button>
</div>
<div className="card-img-wrap">
<img alt="Project 2" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-[var(--c-bg)] opacity-30">03</div>
<h3 className="text-3xl font-bold">SKY CLIFF</h3>
<p className="text-sm mt-4 opacity-70 uppercase tracking-widest">Reykjavik, Iceland</p>
</div>
<div className="text-gray-400 font-light">
                                A glass and steel structure cantilevered over the volcanic landscape, blending danger with luxury.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-colors">View Project</button>
</div>
<div className="card-img-wrap">
<img alt="Project 3" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-[#E3E1DC] text-center flex flex-col items-center justify-center relative z-10 shadow-2xl">
<h2 className="display text-3xl md:text-5xl mb-8">Designing for Eternity</h2>
<div className="max-w-xl text-gray-600 font-light mb-12 leading-relaxed px-6">
                Our philosophy is rooted in the belief that buildings should age, not deteriorate. We use materials that develop a patina, recording the passage of time.
            </div>
<div className="h-16 w-px bg-black/20"></div>
<div className="mt-8 text-xs uppercase tracking-widest opacity-50">Scroll to Contact</div>
</section>
</div>


<footer className="footer-sticky px-6">
<div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">

<div className="text-center mb-16 footer-main-content">
<div className="text-xs uppercase tracking-[0.3em] mb-6 text-gray-500">Have a project?</div>
<a className="display text-[10vw] md:text-[8vw] leading-none hover:text-gray-400 transition-colors block" href="mailto:hello@aethereal.com">
                    LET'S TALK
                </a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 w-full border-t border-white/10 pt-12 pb-8">

<div className="contact-reveal flex flex-col items-center md:items-start opacity-0 translate-y-10">
<div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 mb-3">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
<span>Call Us</span>
</div>
<a className="text-lg md:text-xl font-light hover:text-gray-300 transition-colors" href="tel:+15550000000">+1 (555) 000-0000</a>
</div>

<div className="contact-reveal flex flex-col items-center md:items-start opacity-0 translate-y-10">
<div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 mb-3">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
<span>Email</span>
</div>
<a className="text-lg md:text-xl font-light hover:text-gray-300 transition-colors" href="mailto:hello@aethereal.com">hello@aethereal.com</a>
</div>

<div className="contact-reveal flex flex-col items-center md:items-start opacity-0 translate-y-10">
<div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 mb-3">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
<span>Visit</span>
</div>
<div className="text-lg md:text-xl font-light text-center md:text-left">
                        123 Concrete Ave,<br/>Tokyo 150-0001
                    </div>
</div>
</div>

<div className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs uppercase tracking-widest text-gray-600 mt-8 contact-reveal opacity-0">
<div className="flex gap-6 mb-4 md:mb-0">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Behance</a>
</div>
<div>
                    © 2025 AETHEREAL ARCHITECTURE
                </div>
</div>
</div>

<img className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp"/>
</footer>


    </>
  );
}
