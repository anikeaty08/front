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



tailwind.config = {
theme: {
extend: {
fontFamily: {
display: ['Space Grotesk', 'sans-serif'],
body: ['Inter', 'sans-serif'],
},
colors: {
bg: '#F5F5F7',
card: '#FFFFFF',
dark: '#0A0A0A',
border: 'rgba(0,0,0,0.06)',
},
letterSpacing: {
tightest: '-0.06em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- 1. UTILS ---
        const lerp = (a, b, n) => (1 - n) * a + n * b;
        
        const getLocalPointerPos = (e, rect) => {
            let clientX = 0, clientY = 0;
            if (e.touches && e.touches.length > 0) {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            } else {
                clientX = e.clientX;
                clientY = e.clientY;
            }
            return {
                x: clientX - rect.left,
                y: clientY - rect.top
            };
        };

        const getMouseDistance = (p1, p2) => Math.hypot(p1.x - p2.x, p1.y - p2.y);

        // --- 2. TRAIL CLASSES ---
        class ImageItem {
            constructor(DOM_el) {
                this.DOM = { el: DOM_el };
                this.DOM.inner = this.DOM.el.querySelector('.content__img-inner');
                this.defaultStyle = { scale: 1, x: 0, y: 0, opacity: 0 };
                this.rect = null;
                this.getRect();
                this.initEvents();
            }
            initEvents() {
                this.resize = () => {
                    gsap.set(this.DOM.el, this.defaultStyle);
                    this.getRect();
                };
                window.addEventListener('resize', this.resize);
            }
            getRect() {
                this.rect = this.DOM.el.getBoundingClientRect();
            }
        }

        class ImageTrail {
            constructor(container) {
                this.container = container;
                this.DOM = { el: container };
                this.images = [...this.DOM.el.querySelectorAll('.content__img')].map(img => new ImageItem(img));
                this.imagesTotal = this.images.length;
                this.imgPosition = 0;
                this.zIndexVal = 1;
                this.activeImagesCount = 0;
                this.isIdle = true;
                this.threshold = 80;

                this.mousePos = { x: 0, y: 0 };
                this.lastMousePos = { x: 0, y: 0 };
                this.cacheMousePos = { x: 0, y: 0 };

                const handlePointerMove = ev => {
                    const rect = this.container.getBoundingClientRect();
                    this.mousePos = getLocalPointerPos(ev, rect);
                    
                    // Update custom cursor
                    gsap.to('.cursor-dot', {
                        x: ev.clientX,
                        y: ev.clientY,
                        duration: 0.1,
                        ease: 'power2.out'
                    });
                };
                container.addEventListener('mousemove', handlePointerMove);
                container.addEventListener('touchmove', handlePointerMove);

                const initRender = ev => {
                    const rect = this.container.getBoundingClientRect();
                    this.mousePos = getLocalPointerPos(ev, rect);
                    this.cacheMousePos = { ...this.mousePos };
                    requestAnimationFrame(() => this.render());
                    container.removeEventListener('mousemove', initRender);
                    container.removeEventListener('touchmove', initRender);
                };
                container.addEventListener('mousemove', initRender);
                container.addEventListener('touchmove', initRender);
            }

            render() {
                let distance = getMouseDistance(this.mousePos, this.lastMousePos);
                this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
                this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

                if (distance > this.threshold) {
                    this.showNextImage();
this.lastMousePos = { ...this.mousePos };
                }

                requestAnimationFrame(() => this.render());
            }

            showNextImage() {
                const img = this.images[this.imgPosition];
                // Kill any ongoing tweens on this image
                gsap.killTweensOf(img.DOM.el);
                gsap.killTweensOf(img.DOM.inner);

                img.DOM.el.style.zIndex = this.zIndexVal++;
                
                // Position centered to mouse
                const x = this.mousePos.x - img.rect.width / 2;
                const y = this.mousePos.y - img.rect.height / 2;

                // Set initial state
                gsap.set(img.DOM.el, {
                    x: x,
                    y: y,
                    opacity: 1,
                    scale: 1,
                    rotation: Math.random() * 10 - 5
                });
                gsap.set(img.DOM.inner, { scale: 1.2 });

                // Animate inner image scale
                gsap.to(img.DOM.inner, {
                    duration: 1.5,
                    ease: "power3.out",
                    scale: 1
                });

                // Animate image fade out and shrink
                gsap.to(img.DOM.el, {
                    duration: 0.8,
                    ease: "power2.out",
                    opacity: 0,
                    scale: 0.8,
                    delay: 0.4
                });

                // Update position for next cycle
                this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
            }
        }

        // --- 3. INIT ANIMATIONS & LOGIC ---
        document.addEventListener('DOMContentLoaded', () => {
            // Register GSAP ScrollTrigger
            gsap.registerPlugin(ScrollTrigger);

            // Initialize Lenis Smooth Scroll
            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                direction: 'vertical',
                gestureDirection: 'vertical',
                smooth: true,
                mouseMultiplier: 1,
                smoothTouch: false,
                touchMultiplier: 2,
            });

            // Synchronize Lenis and GSAP ScrollTrigger
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => { lenis.raf(time * 1000) });
            gsap.ticker.lagSmoothing(0);

            // Start RAF loop
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);

            // --- LOADER TIMELINE ---
            const tlLoader = gsap.timeline();
            let counter = { value: 0 };
            
            tlLoader.to(counter, {
                value: 100,
                duration: 2,
                ease: "power3.inOut",
                onUpdate: () => {
                    const val = Math.round(counter.value);
                    document.querySelector('.loader-counter').innerText = val;
                }
            }, 0)
            .to('.loader-progress', { width: '100%', duration: 2, ease: "power3.inOut" }, 0)
            .to('.loader-counter', { y: '0%', duration: 1, ease: "power4.out" }, 0)
            .to('.loader', { yPercent: -100, duration: 1, ease: "power4.inOut", delay: 0.3 })
            .to('body', { opacity: 1, duration: 0.1 }, "-=1") // Reveal page wrapper
            .from('.wrapper', { y: 100, duration: 1.2, ease: "power3.out" }, "-=0.8")
            .call(() => {
                // Initialize Image Trail on Hero Section once loaded
                const container = document.querySelector('.content');
                if (container) new ImageTrail(container);
            });

            // --- TEXT SCRUB EFFECT (INTRO) ---
            const introText = document.querySelector('.intro-scrub-text');
            if (introText) {
                const text = introText.innerText;
                introText.innerHTML = '';
                // Split by words
                text.split(' ').forEach(word => {
                    const span = document.createElement('span');
                    span.className = 'scrub-word';
                    span.innerText = word + ' ';
                    introText.appendChild(span);
                });

                gsap.to('.scrub-word', {
                    scrollTrigger: {
                        trigger: '.intro-scrub-text',
                        start: "top 80%",
                        end: "bottom 50%",
                        scrub: 1,
                    },
                    opacity: 1,
                    stagger: 0.1,
                    ease: "none"
                });
            }

            // --- STACKING CARDS EFFECT ---
            const cards = gsap.utils.toArray('.card-item');
            cards.forEach((card, i) => {
                const inner = card.querySelector('.card-inner');
                // Calculate scale and brightness reductions based on position
                const scaleDown = 1 - ((cards.length - i - 1) * 0.04);
                const brightnessDown = 1 - ((cards.length - i - 1) * 0.15);

                gsap.to(inner, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 10vh",
                        endTrigger: ".stack-section",
                        end: "bottom bottom",
                        scrub: true,
                    },
                    scale: scaleDown,
                    filter: `brightness(${brightnessDown})`,
                    ease: "none"
                });
            });

            // --- HORIZONTAL SCROLL SECTION ---
            const horizSection = document.querySelector('#horiz-scroll');
            const horizWrap = document.querySelector('.horiz-wrap');
            
            if (horizSection && horizWrap) {
                let totalWidth = horizWrap.offsetWidth - window.innerWidth;
                gsap.to(horizWrap, {
                    x: -totalWidth,
                    ease: "none",
                    scrollTrigger: {
                        trigger: horizSection,
                        pin: true,
                        scrub: 1,
                        // Pin duration relative to the horizontal width
                        end: () => "+=" + totalWidth
                    }
                });
            }

            // --- PARALLAX GRID ---
            const parallaxCols = document.querySelectorAll('.parallax-col');
            parallaxCols.forEach((col, i) => {
                // Alternate directions for columns
                const direction = i % 2 === 0 ? -120 : 80;
                gsap.to(col, {
                    y: direction,
                    ease: "none",
                    scrollTrigger: {
                        trigger: '#parallax-grid',
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });

            // --- FADE UP REVEALS ---
            const revealItems = document.querySelectorAll('.reveal-item');
            revealItems.forEach(item => {
                gsap.from(item, {
                    y: 60,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%"
                    }
                });
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

<div className="loader fixed inset-0 z-[9999] bg-dark text-white flex flex-col items-center justify-center">
<div className="overflow-hidden h-[1.2em] mb-6">
<div className="loader-counter font-display text-8xl md:text-9xl font-medium tracking-tighter leading-none translate-y-full">
                100
            </div>
</div>
<div className="w-64 h-[1px] bg-white/10 overflow-hidden">
<div className="loader-progress w-0 h-full bg-white"></div>
</div>
</div>

<nav className="fixed top-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center z-50 mix-blend-exclusion text-white transition-all duration-300">
<div className="font-display text-lg font-medium tracking-tighter flex items-center gap-2">
            BORJAWORLD
        </div>
<div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase opacity-80">
<a className="hover:opacity-100 transition-opacity" href="#">Work</a>
<a className="hover:opacity-100 transition-opacity" href="#">Studio</a>
<a className="hover:opacity-100 transition-opacity" href="#">News</a>
<a className="hover:opacity-100 transition-opacity" href="#">Contact</a>
</div>
<button className="md:hidden group text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>

<div className="wrapper">

<section className="relative h-screen w-full bg-[#F5F5F7] overflow-hidden" id="hero">

<div className="content">

<div className="cursor-dot hidden md:block"></div>

<div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 pointer-events-none z-30 mix-blend-difference text-white">
<div className="mt-24">
<p className="text-xs font-mono tracking-widest opacity-60 uppercase">Move your cursor</p>
</div>
<div>
<h1 className="font-display text-[15vw] leading-[0.8] tracking-tightest font-medium block">
                            BORJAWORLD
                        </h1>
<div className="flex justify-between items-end mt-4">
<p className="max-w-xs text-sm font-light leading-relaxed opacity-80">
                                Spatial design studio focused on void, light, and silence.
                            </p>
<span className="animate-bounce">
<iconify-icon icon="solar:arrow-down-linear" width="24"></iconify-icon>
</span>
</div>
</div>
</div>


<div className="content__img">
<div className="content__img-inner" style={{backgroundImage: 'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/820a6b98-1866-428e-8ec7-a7b50fbb1095_3840w.webp)'}}></div>
</div>
<div className="content__img">
<div className="content__img-inner" style={{backgroundImage: 'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/97c65e8c-b22b-4453-854a-d8fcd8c0189d_1600w.webp)'}}></div>
</div>
<div className="content__img">
<div className="content__img-inner" style={{backgroundImage: 'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e51b786-c9d3-46ed-9b4f-4120dffdfffb_1600w.webp)'}}></div>
</div>
<div className="content__img">
<div className="content__img-inner" style={{backgroundImage: 'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a82ca5b-ffa7-4e34-81d1-7b20a0bbd06d_1600w.webp)'}}></div>
</div>
<div className="content__img">
<div className="content__img-inner" style={{backgroundImage: 'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b06aa955-b6b1-4e6f-b981-73a9b99d4089_1600w.webp)'}}></div>
</div>
<div className="content__img">
<div className="content__img-inner" style={{backgroundImage: 'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47fe88db-5cb4-420e-a432-93e70710424e_1600w.webp)'}}></div>
</div>
<div className="content__img">
<div className="content__img-inner" style={{backgroundImage: 'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/accbf142-6114-4514-998a-cc7f14a62c91_1600w.jpg)'}}></div>
</div>
<div className="content__img">
<div className="content__img-inner" style={{backgroundImage: 'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6dd84541-a76d-49cb-bf81-43adff44a39a_1600w.webp)'}}></div>
</div>
<div className="content__img">
<div className="content__img-inner" style={{backgroundImage: 'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/086cf2b0-6c11-4854-be3e-89d7f32408a1_1600w.webp)'}}></div>
</div>
<div className="content__img">
<div className="content__img-inner" style={{backgroundImage: 'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/820a6b98-1866-428e-8ec7-a7b50fbb1095_3840w.webp)'}}></div>
</div>
</div>
</section>

<section className="pt-32 pb-32 px-6 md:px-20 max-w-[1600px] mx-auto relative z-20">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 flex flex-col justify-between border-t border-black/10 pt-4">
<span className="text-xs font-mono text-gray-400 tracking-widest uppercase">01 — Manifesto</span>
</div>
<div className="lg:col-span-8 lg:col-start-5">
<h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight max-w-6xl intro-scrub-text text-dark">
                        Architecture is not about filling space. It is about creating the void that remains. We excavate the atmosphere to reveal the essential silence of a place.
                    </h2>
</div>
</div>
</section>

<section className="stack-section pb-32 bg-bg">
<div className="px-6 md:px-20 mb-20 flex justify-between items-end">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-1.5 h-1.5 rounded-full bg-dark"></div>
<span className="text-xs font-medium uppercase tracking-widest text-gray-500">Case Studies</span>
</div>
<h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-dark">
                        RECENT
                        <br/>
                        ARTIFACTS
                    </h2>
</div>
<div className="hidden md:block">
<button className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:opacity-60 transition-opacity">
                        View Archive
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="w-full max-w-7xl mx-auto px-4 md:px-6">

<div className="card-item">
<div className="card-inner w-full md:w-[95%] h-full bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.5fr]">
<div className="p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border h-[40%] lg:h-full order-2 lg:order-1">
<div className="w-full">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-mono text-gray-400">01 / 03</span>
<span className="p-2 border border-border rounded-full hover:bg-gray-50 transition-colors cursor-pointer flex items-center justify-center text-dark">
<iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</span>
</div>
<h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight mt-6 text-dark">VOID RESIDENCE</h3>
<p className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-2">Kyoto, Japan</p>
</div>
<div className="space-y-6 hidden lg:block">
<p className="text-sm text-gray-500 leading-relaxed font-normal">
                                    A minimalist concrete residence composed entirely of shadows and planes. A study in absolute privacy using light as a raw material.
                                </p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-gray-50 border border-border rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-500">Residential</span>
<span className="px-3 py-1 bg-gray-50 border border-border rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-500">2023</span>
</div>
</div>
</div>
<div className="relative h-[60%] lg:h-full order-1 lg:order-2 overflow-hidden bg-gray-100">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/97c65e8c-b22b-4453-854a-d8fcd8c0189d_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner w-full md:w-[95%] h-full bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.5fr]">
<div className="p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border h-[40%] lg:h-full order-2 lg:order-1">
<div className="w-full">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-mono text-gray-400">02 / 03</span>
<span className="p-2 border border-border rounded-full hover:bg-gray-50 transition-colors cursor-pointer flex items-center justify-center text-dark">
<iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</span>
</div>
<h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight mt-6 text-dark">AETHER GALLERY</h3>
<p className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-2">Berlin, Germany</p>
</div>
<div className="space-y-6 hidden lg:block">
<p className="text-sm text-gray-500 leading-relaxed font-normal">
                                    An exhibition space that disappears into the fog. White on white materials create an infinite horizon for art to exist within.
                                </p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-gray-50 border border-border rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-500">Public</span>
<span className="px-3 py-1 bg-gray-50 border border-border rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-500">2024</span>
</div>
</div>
</div>
<div className="relative h-[60%] lg:h-full order-1 lg:order-2 overflow-hidden bg-gray-100">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e51b786-c9d3-46ed-9b4f-4120dffdfffb_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner w-full md:w-[95%] h-full bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.5fr]">
<div className="p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border h-[40%] lg:h-full order-2 lg:order-1">
<div className="w-full">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-mono text-gray-400">03 / 03</span>
<span className="p-2 border border-border rounded-full hover:bg-gray-50 transition-colors cursor-pointer flex items-center justify-center text-dark">
<iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</span>
</div>
<h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight mt-6 text-dark">ECHO TOWER</h3>
<p className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-2">Seattle, USA</p>
</div>
<div className="space-y-6 hidden lg:block">
<p className="text-sm text-gray-500 leading-relaxed font-normal">
                                    A monolithic structure reflecting the constant rain. Glass and steel merge to form a vertical river in the city skyline.
                                </p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-gray-50 border border-border rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-500">Concept</span>
<span className="px-3 py-1 bg-gray-50 border border-border rounded-full text-[10px] uppercase tracking-wider font-medium text-gray-500">2025</span>
</div>
</div>
</div>
<div className="relative h-[60%] lg:h-full order-1 lg:order-2 overflow-hidden bg-gray-100">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a82ca5b-ffa7-4e34-81d1-7b20a0bbd06d_1600w.webp"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-screen overflow-hidden bg-bg border-t border-border" id="horiz-scroll">
<div className="horiz-wrap flex h-full w-[300vw]">

<div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 border-r border-border">
<span className="text-xs font-mono text-gray-400 mb-6 tracking-widest">01 — CAPABILITY</span>
<h2 className="font-display text-6xl md:text-8xl font-medium tracking-tight text-dark">STRATEGY</h2>
<p className="mt-8 max-w-md text-gray-500 text-lg leading-relaxed font-light">
                        Defining the problem before shaping the solution. We analyze cultural currents to position projects where they belong.
                    </p>
</div>

<div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 border-r border-border bg-[#F0F0F2]">
<span className="text-xs font-mono text-gray-400 mb-6 tracking-widest">02 — CAPABILITY</span>
<h2 className="font-display text-6xl md:text-8xl font-medium tracking-tight text-dark">SPACE</h2>
<p className="mt-8 max-w-md text-gray-500 text-lg leading-relaxed font-light">
                        Physical environments that breathe. Architecture as a frame for life, stripping away the inessential to focus on being.
                    </p>
</div>

<div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 bg-white">
<span className="text-xs font-mono text-gray-400 mb-6 tracking-widest">03 — CAPABILITY</span>
<h2 className="font-display text-6xl md:text-8xl font-medium tracking-tight text-dark">DIGITAL</h2>
<p className="mt-8 max-w-md text-gray-500 text-lg leading-relaxed font-light">
                        Translating physical sensibilities into screens. Tactile digital experiences that respect the user's attention.
                    </p>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto bg-bg overflow-hidden" id="parallax-grid">
<div className="mb-24 flex justify-between items-end">
<h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-dark">
                    STUDIO
                    <br/>
                    ATMOSPHERE
                </h2>
<p className="text-xs font-mono text-gray-400 hidden md:block">PROCESS / MATERIALS / RAW</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 min-h-[120vh]">

<div className="parallax-col flex flex-col gap-4 md:gap-6 pt-20">
<img className="w-full aspect-[3/4] object-cover grayscale opacity-90 rounded-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b06aa955-b6b1-4e6f-b981-73a9b99d4089_1600w.webp"/>
<img className="w-full aspect-[4/5] object-cover grayscale opacity-90 rounded-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47fe88db-5cb4-420e-a432-93e70710424e_1600w.webp"/>
<div className="p-8 flex flex-col justify-center aspect-[4/5] bg-white rounded-md border border-border">
<span className="font-display text-4xl text-dark">Aa</span>
<span className="text-xs text-gray-400 mt-2">Space Grotesk</span>
</div>
</div>

<div className="parallax-col flex flex-col gap-4 md:gap-6">
<img className="w-full aspect-[3/4] object-cover grayscale opacity-90 rounded-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/accbf142-6114-4514-998a-cc7f14a62c91_1600w.jpg"/>
<div className="p-8 border border-border bg-white flex items-center justify-center text-center aspect-square rounded-md">
<p className="font-mono text-xs leading-relaxed tracking-widest uppercase text-gray-500">
                            "Form follows fiction."
                        </p>
</div>
<img className="w-full aspect-[4/3] object-cover grayscale opacity-90 rounded-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6dd84541-a76d-49cb-bf81-43adff44a39a_1600w.webp"/>
</div>

<div className="parallax-col flex flex-col gap-4 md:gap-6 pt-40 hidden md:flex">
<div className="w-full aspect-[3/4] bg-[#111] text-white flex items-center justify-center rounded-md">
<iconify-icon className="opacity-50" icon="solar:box-minimalistic-linear" width="48"></iconify-icon>
</div>
<img className="w-full aspect-[4/5] object-cover grayscale opacity-90 rounded-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/086cf2b0-6c11-4854-be3e-89d7f32408a1_1600w.webp"/>
</div>
</div>
</section>

<section className="py-48 bg-dark text-white relative z-20" id="inverted-section">
<div className="px-6 md:px-20 max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16">
<div className="reveal-item">
<span className="text-xs font-mono text-gray-500 block mb-6 tracking-widest">RECOGNITION</span>
<h2 className="font-display text-5xl md:text-7xl font-medium tracking-tighter leading-none text-white">
                        SELECTED
                        <br/>
                        AWARDS
                    </h2>
</div>
<div className="flex flex-col gap-0 reveal-item">
<div className="flex justify-between items-baseline border-b border-white/10 py-6 group hover:pl-4 transition-all duration-300 cursor-default">
<span className="text-lg md:text-xl font-normal text-gray-300 group-hover:text-white transition-colors">Pritzker Emerging</span>
<span className="text-xs font-mono text-gray-600">2024</span>
</div>
<div className="flex justify-between items-baseline border-b border-white/10 py-6 group hover:pl-4 transition-all duration-300 cursor-default">
<span className="text-lg md:text-xl font-normal text-gray-300 group-hover:text-white transition-colors">Dezeen Awards / Gold</span>
<span className="text-xs font-mono text-gray-600">2023</span>
</div>
<div className="flex justify-between items-baseline border-b border-white/10 py-6 group hover:pl-4 transition-all duration-300 cursor-default">
<span className="text-lg md:text-xl font-normal text-gray-300 group-hover:text-white transition-colors">Mies van der Rohe</span>
<span className="text-xs font-mono text-gray-600">2023</span>
</div>
<div className="flex justify-between items-baseline border-b border-white/10 py-6 group hover:pl-4 transition-all duration-300 cursor-default">
<span className="text-lg md:text-xl font-normal text-gray-300 group-hover:text-white transition-colors">AIA Honor Award</span>
<span className="text-xs font-mono text-gray-600">2022</span>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-bg">
<h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight mb-8 relative z-10 text-dark">
                Silence is the
                <span className="text-gray-400 italic font-light">loudest sound.</span>
</h2>
<div className="max-w-lg text-gray-500 font-light leading-relaxed relative z-10">
                We reduce until only the truth remains. Every project is an attempt to capture the invisible.
            </div>

<div className="absolute inset-0 z-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
</section>
</div>


<footer className="footer-sticky bg-[#050505] text-white">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-20 pointer-events-none grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
</div>
<div className="relative z-10 text-center w-full max-w-5xl mx-auto px-6">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] uppercase tracking-widest text-gray-300 font-medium">Accepting new commissions</span>
</div>
<a className="block group" href="mailto:hello@borjaworld.com">
<h2 className="font-display text-[10vw] leading-[0.8] font-medium tracking-tighter text-white group-hover:text-gray-300 transition-colors duration-500">
                    START PROJECT
                </h2>
<div className="h-[1px] w-0 group-hover:w-full bg-white/50 mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] mt-8"></div>
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
<p className="text-xs text-gray-400">Akersgata 12<br/>0158 Oslo Norway</p>
</div>
<div className="flex flex-col gap-4">
<span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Contact</span>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">hello@borjaworld.com</a>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">+47 22 33 44 55</a>
</div>
<div className="flex flex-col justify-between">
<span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">© 2025</span>
<div className="text-[10px] text-gray-600 uppercase tracking-widest">Borjaworld Studio</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
