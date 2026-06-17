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
                document.body.style.overflow = 'visible'; 
                initAnimations();
            }
        });

        tl.to('.loader-bar', { width: '100%', duration: 1.2, ease: 'expo.inOut' })
          .to('.loader-text', { y: -50, opacity: 0, duration: 0.6, ease: 'power3.in' }, "-=0.2")
          .to('.loader', { yPercent: -100, duration: 1.0, ease: 'power4.inOut' })
          .set('body', { opacity: 1 }, 0); 

        // --- SITE ANIMATIONS ---
        function initAnimations() {
            
            // Hero Letter Effect (Clean Slide Up)
            const heroTl = gsap.timeline();
            heroTl.to('.hero-char', { 
                y: 0, 
                opacity: 1,
                stagger: 0.05, 
                duration: 1.5, 
                ease: 'power4.out',
                delay: 0.2 
            })
            .to('.hero-fade', { opacity: 1, duration: 1, y: 0 }, "-=1");

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
            const cards = gsap.utils.toArray('.card-item');
            cards.forEach((card, i) => {
                const nextCard = cards[i + 1];
                if (nextCard) {
                    gsap.to(card.querySelector('.card-inner'), {
                        filter: "brightness(0.5)",
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
<div className="loader-text font-display text-4xl md:text-6xl font-bold tracking-tighter">XARUHOME</div>
<div className="loader-bar"></div>
</div>

<nav className="fixed top-0 w-full px-6 py-4 md:px-12 md:py-6 flex justify-between items-center z-50 text-white pointer-events-none">

<div className="glass-morphism pointer-events-auto px-5 py-3 rounded-full flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
<iconify-icon className="text-white" icon="solar:smart-home-angle-linear" width="18"></iconify-icon>
<div className="font-display font-semibold text-xs md:text-sm tracking-widest text-white">XARUHOME</div>
</div>

<div className="glass-morphism pointer-events-auto px-2 py-1.5 rounded-full flex items-center gap-1">
<div className="hidden md:flex gap-1 text-[11px] font-medium uppercase tracking-[0.2em]">
<a className="px-5 py-2 hover:bg-white/10 rounded-full transition-all duration-300 text-white/90 hover:text-white" href="#">Properties</a>
<a className="px-5 py-2 hover:bg-white/10 rounded-full transition-all duration-300 text-white/90 hover:text-white" href="#">Commercial</a>
<a className="px-5 py-2 hover:bg-white/10 rounded-full transition-all duration-300 text-white/90 hover:text-white" href="#">Investment</a>
</div>

<button className="md:hidden p-3 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</div>
</nav>

<div className="wrapper">

<section className="h-screen relative flex flex-col items-center justify-center overflow-hidden bg-[#050505]">

<div className="absolute inset-0 w-full h-full overflow-hidden">
<img alt="Abu Dhabi Luxury Real Estate" className="hero-img w-full h-full object-cover brightness-[0.4] scale-110" src="https://images.unsplash.com/photo-1512453979798-5ea904f92580?q=80&amp;w=2840&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
</div>

<div className="relative z-10 text-center text-white w-full px-4 h-full flex flex-col justify-center pt-20">

<div className="flex flex-col items-center justify-center gap-2 drop-shadow-2xl opacity-100">
<h1 className="font-display text-[10vw] md:text-[9vw] leading-[0.85] font-semibold tracking-tighter overflow-hidden flex justify-center gap-[0.5vw]">
<span className="hero-char">L</span>
<span className="hero-char">U</span>
<span className="hero-char">X</span>
<span className="hero-char">U</span>
<span className="hero-char">R</span>
<span className="hero-char">Y</span>
</h1>
<h1 className="font-display text-[10vw] md:text-[9vw] leading-[0.85] font-semibold tracking-tighter overflow-hidden flex justify-center gap-[0.5vw]">
<span className="hero-char">B</span>
<span className="hero-char">R</span>
<span className="hero-char">O</span>
<span className="hero-char">K</span>
<span className="hero-char">E</span>
<span className="hero-char">R</span>
<span className="hero-char">A</span>
<span className="hero-char">G</span>
<span className="hero-char">E</span>
</h1>
<p className="hero-fade opacity-0 mt-8 text-xs md:text-sm font-light tracking-[0.3em] uppercase text-white/70">
                        Redefining Assets in Abu Dhabi
                    </p>
</div>

<div className="absolute bottom-12 left-0 w-full flex justify-center opacity-0 hero-fade">
<div className="glass-morphism rounded-full p-2 pl-8 pr-2 flex items-center gap-8 md:gap-16 max-w-[90vw] transition-colors duration-500">
<div className="flex flex-col text-left">
<span className="text-[9px] uppercase tracking-widest text-white/50 mb-1">Market</span>
<span className="text-[11px] font-semibold tracking-widest text-white">Abu Dhabi</span>
</div>
<div className="flex flex-col text-left hidden md:flex">
<span className="text-[9px] uppercase tracking-widest text-white/50 mb-1">Focus</span>
<span className="text-[11px] font-semibold tracking-widest text-white">High-Yield</span>
</div>
<div className="flex flex-col text-left hidden md:flex">
<span className="text-[9px] uppercase tracking-widest text-white/50 mb-1">Available</span>
<span className="text-[11px] font-semibold tracking-widest text-white">24 Units</span>
</div>
<a className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform duration-300" href="#">
<iconify-icon height="24" icon="solar:arrow-down-linear" width="24"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-12 max-w-[1600px] mx-auto grid md:grid-cols-12 gap-12 items-start">
<div className="md:col-span-7">
<h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tighter split-animate text-[var(--c-dark)]">
                    Curating the <br/>
<span className="text-[var(--c-accent)] opacity-80">exceptional.</span>
</h2>
</div>
<div className="md:col-span-5 md:pt-4">
<div className="text-lg md:text-xl font-light leading-relaxed text-gray-700 split-animate text-balance">
                    We are Abu Dhabi's premier real estate consultancy, bridging the gap between vision and value. From high-yield commercial towers to exclusive waterfront residences, we offer bespoke brokerage services for investors who demand excellence.
                </div>
<div className="mt-12 pt-8 border-t border-black/10 flex flex-col gap-4">
<div className="flex justify-between text-xs uppercase tracking-[0.15em] font-semibold text-gray-500">
<span>Luxury Residential</span>
<span>01</span>
</div>
<div className="flex justify-between text-xs uppercase tracking-[0.15em] font-semibold text-gray-500">
<span>Commercial &amp; Offices</span>
<span>02</span>
</div>
<div className="flex justify-between text-xs uppercase tracking-[0.15em] font-semibold text-gray-500">
<span>Investment Management</span>
<span>03</span>
</div>
</div>
</div>
</section>

<section className="stack-section py-24 md:py-32">
<div className="px-6 md:px-12 mb-20 flex justify-between items-end max-w-[1600px] mx-auto">
<div>
<span className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">Exclusive Portfolio</span>
<h2 className="font-display text-4xl md:text-6xl tracking-tighter">Featured Listings</h2>
</div>
<div className="hidden md:block text-right">
<span className="text-xs font-medium text-white/40 uppercase tracking-widest">Market: Abu Dhabi</span>
</div>
</div>
<div className="w-full max-w-[1600px] mx-auto pb-[10vh]">

<div className="card-item group">
<div className="card-inner">
<div className="p-8 md:p-16 flex flex-col justify-between relative z-10 bg-[#0A0A0A]">
<div>
<div className="font-display text-4xl text-white/10 mb-6">01</div>
<h3 className="font-display text-2xl md:text-4xl tracking-tighter mb-2 text-white">Global Market Tower</h3>
<span className="text-xs font-medium uppercase tracking-[0.15em] text-white/50">Al Maryah Island, Abu Dhabi</span>
</div>
<div className="max-w-xs">
<p className="text-sm font-light text-gray-400 leading-relaxed mb-8">
                                    Grade A office space in the heart of the financial district. Full floor availability with panoramic views of the skyline.
                                </p>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:text-white/70 transition-colors" href="#">
                                    View Listing <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="relative h-full overflow-hidden order-first md:order-last">
<img alt="Office Tower" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
</div>
</div>

<div className="card-item group">
<div className="card-inner">
<div className="p-8 md:p-16 flex flex-col justify-between relative z-10 bg-[#0A0A0A]">
<div>
<div className="font-display text-4xl text-white/10 mb-6">02</div>
<h3 className="font-display text-2xl md:text-4xl tracking-tighter mb-2 text-white">Saadiyat Grove</h3>
<span className="text-xs font-medium uppercase tracking-[0.15em] text-white/50">Saadiyat Cultural District</span>
</div>
<div className="max-w-xs">
<p className="text-sm font-light text-gray-400 leading-relaxed mb-8">
                                    Ultra-luxury 4BR penthouse overlooking the Louvre Abu Dhabi. Featuring private elevator access and smart home integration.
                                </p>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:text-white/70 transition-colors" href="#">
                                    View Listing <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="relative h-full overflow-hidden order-first md:order-last">
<img alt="Luxury Interior" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
</div>
</div>

<div className="card-item group">
<div className="card-inner">
<div className="p-8 md:p-16 flex flex-col justify-between relative z-10 bg-[#0A0A0A]">
<div>
<div className="font-display text-4xl text-white/10 mb-6">03</div>
<h3 className="font-display text-2xl md:text-4xl tracking-tighter mb-2 text-white">Yas Creative Hub</h3>
<span className="text-xs font-medium uppercase tracking-[0.15em] text-white/50">Yas Island, Abu Dhabi</span>
</div>
<div className="max-w-xs">
<p className="text-sm font-light text-gray-400 leading-relaxed mb-8">
                                    Flexible commercial spaces designed for media and tech companies. High ROI investment opportunity.
                                </p>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:text-white/70 transition-colors" href="#">
                                    View Listing <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="relative h-full overflow-hidden order-first md:order-last">
<img alt="Creative Office" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
</div>
</div>

<div className="card-item group">
<div className="card-inner">
<div className="p-8 md:p-16 flex flex-col justify-between relative z-10 bg-[#0A0A0A]">
<div>
<div className="font-display text-4xl text-white/10 mb-6">04</div>
<h3 className="font-display text-2xl md:text-4xl tracking-tighter mb-2 text-white">Etihad Towers</h3>
<span className="text-xs font-medium uppercase tracking-[0.15em] text-white/50">Corniche, Abu Dhabi</span>
</div>
<div className="max-w-xs">
<p className="text-sm font-light text-gray-400 leading-relaxed mb-8">
                                    Premium full-floor penthouses and corporate headquarters. Iconic architecture offering unparalleled views.
                                </p>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:text-white/70 transition-colors" href="#">
                                    View Listing <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="relative h-full overflow-hidden order-first md:order-last">
<img alt="Etihad Towers" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 bg-[var(--c-bg)] text-center flex flex-col items-center">
<h2 className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tighter mb-8 split-animate">Investment in Excellence</h2>
<div className="max-w-2xl text-gray-600 font-light text-lg md:text-xl leading-relaxed mb-16 split-animate text-balance">
                Our philosophy is rooted in data-driven insight and exclusive access. We don't just find properties; we secure high-performing assets that build long-term wealth and legacy.
            </div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
<div className="flex flex-col items-center gap-4">
<iconify-icon height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
<span>Yield</span>
</div>
<div className="flex flex-col items-center gap-4">
<iconify-icon height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
<span>Location</span>
</div>
<div className="flex flex-col items-center gap-4">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
<span>Security</span>
</div>
<div className="flex flex-col items-center gap-4">
<iconify-icon height="24" icon="solar:crown-linear" width="24"></iconify-icon>
<span>Prestige</span>
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
<div className="text-xs uppercase tracking-[0.3em] mb-8 text-gray-500 font-semibold">Acquire Your Next Asset</div>
<a className="group block w-fit mx-auto relative overflow-hidden" href="mailto:invest@xaruhome.com">
<span className="text-white font-display text-[12vw] leading-[0.85] tracking-tighter block transition-transform duration-500 group-hover:-translate-y-full">INQUIRE</span>
<span className="text-white font-display text-[12vw] leading-[0.85] tracking-tighter block absolute top-0 left-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-gray-500">INQUIRE</span>
</a>
<div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1400px] mx-auto mt-24 px-6 md:px-12">
<div className="text-[10px] uppercase tracking-widest text-gray-600 mb-6 md:mb-0">
                    © 2025 XARUHOME Real Estate<br/>Abu Dhabi, UAE
                </div>
<div className="flex gap-12 text-xs uppercase tracking-[0.2em] font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#">Listings</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Whatsapp</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
