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



        // --- ICONS ---
        lucide.createIcons();

        // --- LENIS SMOOTH SCROLL ---
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

        // --- GSAP SETUP ---
        gsap.registerPlugin(ScrollTrigger);

        // --- SPLIT TEXT ---
        function splitTextToWords(element) {
            if(!element) return;
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
        document.querySelectorAll('.split-animate').forEach(splitTextToWords);

        // --- LOADER SEQUENCE ---
        const loadTl = gsap.timeline({
            onComplete: () => {
                document.body.style.opacity = 1;
                initAnimations();
            }
        });

        loadTl.to('.loader-line', { width: '100%', duration: 1.2, ease: 'power2.inOut' })
              .to('.loader-text', { y: -20, opacity: 0, duration: 0.6, ease: 'power2.in' }, "-=0.2")
              .to('.loader', { clipPath: 'inset(0 0 100% 0)', duration: 0.8, ease: 'power4.inOut' });

        function initAnimations() {
            // Hero Title Reveal
            const heroTl = gsap.timeline();
            heroTl.to('.hero-title-wrap span', { 
                y: 0, 
                stagger: 0.1, 
                duration: 1.4, 
                ease: 'power3.out' 
            })
            .to('.hero-line', {
                scaleX: 1,
                opacity: 1,
                duration: 1,
                ease: 'expo.out'
            }, "-=1")
            .to('.hero-fade', { opacity: 1, duration: 1 }, "-=0.5");
            
            // Hero Parallax
            gsap.to('.hero-img', {
                yPercent: 20,
                scale: 1.1,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero-img-wrap',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // Text Reveal on Scroll
            document.querySelectorAll('.split-animate').forEach(el => {
                const words = el.querySelectorAll('.word-inner');
                gsap.to(words, {
                    y: "0%",
                    duration: 0.8,
                    ease: "power2.out",
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
                const inner = card.querySelector('.card-inner');
                const nextCard = cards[i+1];
                
                if (nextCard) {
                    gsap.to(inner, {
                        scale: 0.92, // Subtle scale down
                        y: -30,      // Slight move up
                        opacity: 0.6, // Fade out
                        filter: 'blur(2px)', // Add slight blur
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

            // Footer Reveal Parallax
            gsap.from('.footer-sticky > div', {
                y: 50,
                opacity: 0,
                scrollTrigger: {
                    trigger: '.wrapper',
                    start: 'bottom bottom', // When wrapper bottom hits screen bottom
                    end: 'bottom 50%',
                    scrub: 1
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
<div className="loader-text tracking-tighter">LITTLE LINE</div>
<div className="loader-line"></div>
</div>

<nav className="fixed top-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center z-50 mix-blend-difference text-white">
<div className="display-font text-lg font-semibold tracking-tighter flex items-center gap-2">
<i className="w-4 h-4" data-lucide="minus"></i> LITTLE LINE
        </div>
<div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase opacity-80">
<a className="hover:opacity-100 transition-opacity" href="#">Work</a>
<a className="hover:opacity-100 transition-opacity" href="#">Studio</a>
<a className="hover:opacity-100 transition-opacity" href="#">News</a>
<a className="hover:opacity-100 transition-opacity" href="#">Contact</a>
</div>
<button className="md:hidden group">
<i className="w-6 h-6 group-hover:scale-110 transition-transform" data-lucide="menu"></i>
</button>
</nav>

<div className="wrapper">

<section className="h-screen relative flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 w-full h-full hero-img-wrap">
<img alt="Hero Architecture" className="w-full h-[120%] object-cover brightness-[0.6] hero-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp"/>
</div>

<div className="relative z-10 text-center text-white mix-blend-exclusion px-4">
<h1 className="display-font text-[13vw] leading-[0.85] tracking-tighter overflow-hidden hero-title-wrap">
<span className="block translate-y-full">LITTLE</span>
</h1>
<div className="flex items-center justify-center gap-4 md:gap-8 overflow-hidden hero-title-wrap">
<div className="h-[1px] w-[10vw] bg-white mt-2 md:mt-4 hero-line opacity-0 scale-x-0 origin-left"></div>
<h1 className="display-font text-[13vw] leading-[0.85] tracking-tighter">
<span className="block translate-y-full">LINE</span>
</h1>
<div className="h-[1px] w-[10vw] bg-white mt-2 md:mt-4 hero-line opacity-0 scale-x-0 origin-right"></div>
</div>
<p className="mt-8 text-xs md:text-sm font-medium uppercase tracking-[0.4em] opacity-0 hero-fade">
                    Refining Space &amp; Time
                </p>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 mix-blend-exclusion animate-bounce hero-fade opacity-0">
<i className="w-5 h-5" data-lucide="arrow-down"></i>
</div>
</section>

<section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto bg-[var(--c-bg)]">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
<div className="lg:col-span-7">
<h2 className="display-font text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight split-animate text-[#1a1a1a]">
                        We define the <br/>
<span className="text-gray-400">invisible lines</span> between <br/>
                        nature and structure.
                    </h2>
</div>
<div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
<div className="text-lg md:text-xl font-light text-gray-600 leading-relaxed split-animate">
                        Little Line Architect Studio believes that the most profound architecture is often the quietest. We strip away the unnecessary to reveal the essential truth of a space, crafting environments that breathe.
                    </div>
<div className="mt-12 md:mt-24">
<div className="h-[1px] w-full bg-black/10 mb-6"></div>
<div className="flex justify-between items-end">
<div className="flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-widest text-gray-400">Founded</span>
<span className="text-sm font-medium">2024</span>
</div>
<div className="flex flex-col gap-1 text-right">
<span className="text-[10px] uppercase tracking-widest text-gray-400">Location</span>
<span className="text-sm font-medium">Oslo / New York</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="stack-section pb-32">
<div className="px-6 md:px-20 mb-20 flex justify-between items-end">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-black"></div>
<span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Selected Works</span>
</div>
<h2 className="display-font text-4xl md:text-5xl font-semibold tracking-tight">FEATURED<br/>PROJECTS</h2>
</div>
<div className="hidden md:block">
<button className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:opacity-60 transition-opacity">
                        View Archive <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="stack-container px-4 md:px-0">

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div className="w-full">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-mono text-gray-400">01 / 03</span>
<span className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors cursor-pointer"><i className="w-4 h-4 text-gray-800" data-lucide="arrow-up-right"></i></span>
</div>
<h3 className="display-font text-2xl md:text-3xl font-semibold tracking-tight mt-6">SILENT VILLA</h3>
<p className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-2">Kyoto, Japan</p>
</div>
<div className="space-y-6">
<p className="text-sm text-gray-600 leading-relaxed font-light">
                                    A minimalist concrete residence designed to capture the changing shadows of the surrounding bamboo forest. A study in negative space.
                                </p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-600">Residential</span>
<span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-600">2023</span>
</div>
</div>
</div>
<div className="card-img-wrap">
<img alt="Silent Villa" className="card-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div className="w-full">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-mono text-gray-400">02 / 03</span>
<span className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors cursor-pointer"><i className="w-4 h-4 text-gray-800" data-lucide="arrow-up-right"></i></span>
</div>
<h3 className="display-font text-2xl md:text-3xl font-semibold tracking-tight mt-6">VERTICAL FARM</h3>
<p className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-2">Berlin, Germany</p>
</div>
<div className="space-y-6">
<p className="text-sm text-gray-600 leading-relaxed font-light">
                                    Adaptive reuse of a brutalist bunker into a sustainable vertical farm and communal living space.
                                </p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-600">Public</span>
<span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-600">2024</span>
</div>
</div>
</div>
<div className="card-img-wrap">
<img alt="Vertical Farm" className="card-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div className="w-full">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-mono text-gray-400">03 / 03</span>
<span className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors cursor-pointer"><i className="w-4 h-4 text-gray-800" data-lucide="arrow-up-right"></i></span>
</div>
<h3 className="display-font text-2xl md:text-3xl font-semibold tracking-tight mt-6">NORDIC CLIFF</h3>
<p className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-2">Reykjavik, Iceland</p>
</div>
<div className="space-y-6">
<p className="text-sm text-gray-600 leading-relaxed font-light">
                                    A glass and steel structure cantilevered over the volcanic landscape. Blurring the line between shelter and exposure.
                                </p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-600">Concept</span>
<span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-600">2025</span>
</div>
</div>
</div>
<div className="card-img-wrap">
<img alt="Nordic Cliff" className="card-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
<h2 className="display-font text-3xl md:text-5xl font-semibold tracking-tight mb-8 relative z-10">
                Form follows <span className="text-gray-400 italic font-light">fiction.</span>
</h2>
<div className="max-w-lg text-gray-500 font-light leading-relaxed relative z-10">
                We don't just build structures; we draft narratives. Every line we draw is a sentence in the story of the landscape.
            </div>

<div className="absolute inset-0 z-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
</div>
</section>
</div>


<footer className="footer-sticky">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-20 pointer-events-none grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
</div>
<div className="relative z-10 text-center w-full max-w-4xl px-6">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] uppercase tracking-widest text-gray-300">Accepting new commissions</span>
</div>
<a className="block group" href="mailto:hello@littleline.com">
<h2 className="display-font text-[10vw] leading-[0.8] font-semibold tracking-tighter text-white group-hover:text-gray-300 transition-colors duration-500">
                    LET'S BUILD
                </h2>
<div className="h-[1px] w-0 group-hover:w-full bg-white/50 mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] mt-4"></div>
</a>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-left border-t border-white/10 pt-12">
<div className="flex flex-col gap-4">
<span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Socials</span>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Instagram</a>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Are.na</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Office</span>
<p className="text-xs text-gray-400">
                        Akersgata 12<br/>
                        0158 Oslo<br/>
                        Norway
                    </p>
</div>
<div className="flex flex-col gap-4">
<span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Contact</span>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">hello@littleline.com</a>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">+47 22 33 44 55</a>
</div>
<div className="flex flex-col justify-between">
<span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">© 2025</span>
<div className="text-[10px] text-gray-600 uppercase tracking-widest">Little Line Studio</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
