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

        // Apply split to all elements with class .split-animate
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

            // Footer Parallax Effect
            gsap.from('.footer-sticky > div', {
                y: 100,
                opacity: 0.5,
                scale: 0.9,
                scrollTrigger: {
                    trigger: '.footer-sticky',
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: true
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
<div className="loader-text">ALFEN</div>
<div className="loader-bar"></div>
</div>

<nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
<div className="display font-bold text-xl tracking-tighter">ALFEN</div>
<div className="hidden md:flex gap-10 text-xs uppercase tracking-widest">
<a className="hover:text-gray-300 transition-colors" href="#">Products</a>
<a className="hover:text-gray-300 transition-colors" href="#">Projects</a>
<a className="hover:text-gray-300 transition-colors" href="#">Company</a>
</div>
<div className="md:hidden">MENU</div>
</nav>

<div className="wrapper">

<section className="h-screen relative flex items-center justify-center overflow-hidden">
<img alt="Alfen Architecture" className="absolute inset-0 w-full h-full object-cover brightness-75 hero-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp"/>
<div className="relative z-10 text-center text-white mix-blend-difference">
<h1 className="display text-[12vw] leading-none hero-text overflow-hidden">
<span className="block translate-y-full">OPENING</span>
</h1>
<h1 className="display text-[12vw] leading-none hero-text overflow-hidden">
<span className="block translate-y-full">MATTERS</span>
</h1>
<p className="mt-8 text-sm uppercase tracking-[0.5em] opacity-0 hero-fade mix-blend-difference">Opening That Matters..</p>
</div>
</section>

<section className="py-32 px-6 md:px-20 grid md:grid-cols-2 gap-16 max-w-[1800px] mx-auto bg-[var(--c-bg)]">
<div>
<h2 className="display text-4xl md:text-5xl leading-tight split-animate">
                    Defining the <br/><span className="text-[var(--c-accent)]">view.</span>
</h2>
</div>
<div className="text-xl font-light leading-relaxed text-gray-700">
<p className="mb-8 split-animate">India's premier aluminium fenestration manufacturer. We craft high-performance doors, windows, railings, pergolas, and retractable roofs for residential, commercial, industrial, and hospitality projects.</p>
<div className="h-px w-full bg-black/10 my-8"></div>
<div className="flex gap-12 text-sm uppercase tracking-widest split-animate">
<div>Since 2024</div>
<div>Jaipur / India</div>
</div>
</div>
</section>

<section className="stack-section">
<div className="text-center mb-20 px-6">
<div className="text-xs uppercase tracking-widest mb-4 opacity-50">Selected Works</div>
<h2 className="display text-5xl md:text-7xl">FEATURED PROJECTS</h2>
</div>
<div className="stack-container">

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-[var(--c-bg)] opacity-30">01</div>
<h3 className="text-3xl font-bold">ONYX RESIDENCE</h3>
<p className="text-sm mt-4 opacity-70 uppercase tracking-widest">Jaipur, Rajasthan</p>
</div>
<div className="text-gray-400 font-light">
                                A luxury villa featuring floor-to-ceiling Slimline sliding systems that merge the interior living space with the arid landscape.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-colors">View Details</button>
</div>
<div className="card-img-wrap">
<img alt="Jaipur Project" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-[var(--c-bg)] opacity-30">02</div>
<h3 className="text-3xl font-bold">AZURE TOWERS</h3>
<p className="text-sm mt-4 opacity-70 uppercase tracking-widest">Hyderabad, Telangana</p>
</div>
<div className="text-gray-400 font-light">
                                High-rise facade engineering utilizing thermal-break aluminium casement windows for optimal energy efficiency in urban living.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-colors">View Details</button>
</div>
<div className="card-img-wrap">
<img alt="Hyderabad Project" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-[var(--c-bg)] opacity-30">03</div>
<h3 className="text-3xl font-bold">THE GLASS PAVILION</h3>
<p className="text-sm mt-4 opacity-70 uppercase tracking-widest">Indore, Madhya Pradesh</p>
</div>
<div className="text-gray-400 font-light">
                                Innovative retractable roof systems and automated pergolas creating a versatile commercial hospitality space.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-colors">View Details</button>
</div>
<div className="card-img-wrap">
<img alt="Indore Project" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-[#E3E1DC] text-center flex flex-col items-center justify-center relative z-10">
<h2 className="display text-3xl md:text-5xl mb-8">Engineered Precision</h2>
<div className="max-w-xl text-gray-600 font-light mb-12 leading-relaxed">
                At ALFEN, we believe a window is more than glass and frame. It is the interface between safety and nature. Our systems are built to withstand the elements while framing them beautifully.
            </div>
<div className="h-16 w-px bg-black/20"></div>
</section>
</div>


<footer className="footer-sticky">
<div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center">
<div className="text-center w-full max-w-4xl">
<div className="text-xs uppercase tracking-[0.3em] mb-4 text-gray-500">Get in touch</div>
<a className="display text-[8vw] leading-none hover:text-gray-400 transition-colors" href="mailto:sales@alfen.in">
                    SALES@ALFEN.IN
                </a>
</div>

<div className="grid md:grid-cols-3 gap-12 mt-20 w-full max-w-5xl text-gray-400 text-xs md:text-sm font-light tracking-wide text-center md:text-left">

<div className="flex flex-col items-center md:items-start">
<h4 className="text-white uppercase tracking-widest mb-4 font-semibold">Head Office</h4>
<p className="leading-relaxed">
                        214-217, Sunny Mart,<br/>
                        New Atish Market, Mansarovar,<br/>
                        Jaipur (Rajasthan) - 302020
                    </p>
</div>

<div className="flex flex-col items-center md:items-start">
<h4 className="text-white uppercase tracking-widest mb-4 font-semibold">Manufacturing Plant</h4>
<p className="leading-relaxed">
                        H-44-46, IID Centre,<br/>
                        RIICO Industrial Area, Newai,<br/>
                        Tonk (Rajasthan) - 304021
                    </p>
</div>

<div className="flex flex-col items-center md:items-start">
<h4 className="text-white uppercase tracking-widest mb-4 font-semibold">Contact</h4>
<div className="flex flex-col gap-2">
<a className="hover:text-white transition-colors flex items-center gap-2" href="tel:+919928366665">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon> +91-9928366665
                        </a>
<a className="hover:text-white transition-colors flex items-center gap-2" href="tel:+919928366661">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon> +91-9928366661
                        </a>
</div>
<div className="flex gap-4 mt-6">
<a className="hover:text-white" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-white" href="#"><iconify-icon icon="solar:globus-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="absolute bottom-8 text-[10px] text-gray-700 uppercase tracking-widest">
                © 2025 ALFEN. Opening That Matters..
            </div>
</div>

<img className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp"/>
</footer>


    </>
  );
}
