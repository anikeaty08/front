import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.31/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.31/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.31/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.31/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.31/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



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
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="rOckgwd0fvktpb8agzJw"></div>
</div>

<div className="noise"></div>


<div className="loader fixed inset-0 z-[9999] bg-dark text-white flex flex-col items-center justify-center">
<div className="overflow-hidden h-[1.2em] mb-6">
<div className="loader-counter font-display text-8xl md:text-9xl font-medium tracking-tighter leading-none translate-y-full">100</div>
</div>
<div className="w-64 h-[1px] bg-white/10 overflow-hidden">
<div className="loader-progress w-0 h-full bg-white" style={{width: '100%'}}></div>
</div>
</div><nav className="fixed md:px-12 md:py-8 flex z-50 transition-all duration-300 text-white mix-blend-exclusion w-full pt-6 pr-6 pb-6 pl-6 top-0 items-center justify-between"><div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="rOckgwd0fvktpb8agzJw"></div>
</div>
<div className="flex text-lg font-medium tracking-tighter font-display gap-x-2 gap-y-2 items-center">RISHABH SRIVASTAVA</div>
<div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase opacity-80">
<a className="hover:opacity-100 transition-opacity" href="#">ABOUT ME</a>
<a className="hover:opacity-100 transition-opacity" href="#">SKILLS</a>
<a className="hover:opacity-100 transition-opacity" href="#">PROJECTS</a><a className="hover:opacity-100 transition-opacity" href="#">ON SITE WORK</a>
<a className="hover:opacity-100 transition-opacity" href="#">Contact</a>
</div>
<button className="md:hidden group text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>

<div className="wrapper">

<section className="relative h-screen w-full bg-[#F5F5F7] overflow-hidden" id="hero">

<div className="content"><div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true"><div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true"><div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true"><div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true"><div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true"><div data-us-project="qO2hJSXvjk0iEIVJ5nim" id="bg-unicorn"></div>
<style>
  #bg-unicorn {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    pointer-events: none;
  }
</style>
</div><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="rOckgwd0fvktpb8agzJw"></div>
</div><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="rOckgwd0fvktpb8agzJw"></div>
</div><div className="aura-background-component top-0 w-full h-screen -z-10 fixed" data-alpha-mask="47" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 47%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 47%, transparent)'}}>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="3eLGLP7pmQS4ozfklmrX"></div>

</div></div><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="rOckgwd0fvktpb8agzJw"></div>
</div>

<div className="cursor-dot hidden md:block"></div>

<div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 pointer-events-none z-30 mix-blend-difference text-white">
<div className="mt-24">
<p className="text-xs font-mono tracking-widest opacity-60 uppercase">Move your cursor</p>
</div>
<div>
<h1 className="font-display text-[15vw] leading-[0.8] tracking-tightest font-medium block">
                            RISHABH SRIVASTAVA
                        </h1>
<div className="flex justify-between items-end mt-4">
<p className="max-w-xs text-sm font-light leading-relaxed opacity-80">
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

<section className="md:px-20 z-20 max-w-[1600px] mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 relative">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 flex flex-col bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/088ece08-88fa-4fb7-8910-5cfa44a0ae95_3840w.jpg?w=800&amp;q=80)] bg-cover border-black/10 border-t pt-4 space-x-2 space-y-8 justify-between">
<span className="uppercase text-4xl text-gray-950 tracking-widest font-playfair">ABOUT ME.......</span>
</div>
<div className="lg:col-span-8 lg:col-start-5">
<h2 className="leading-[1.05] intro-scrub-text text-dark text-4xl font-thin tracking-wide font-display max-w-6xl md:text-6xl lg:text-5xl"><span className="scrub-word">I’m </span><span className="scrub-word">a </span><span className="scrub-word">BIM </span><span className="scrub-word">Architect </span><span className="scrub-word">&amp; </span><span className="scrub-word">Interior </span><span className="scrub-word">Designer </span><span className="scrub-word">who </span><span className="scrub-word">believes </span><span className="scrub-word">that </span><span className="scrub-word">great </span><span className="scrub-word">interiors </span><span className="scrub-word">are </span><span className="scrub-word">not </span><span className="scrub-word">just </span><span className="scrub-word">designed—they </span><span className="scrub-word">are </span><span className="scrub-word">engineered. </span><span className="scrub-word">By </span><span className="scrub-word">combining </span><span className="scrub-word">creative </span><span className="scrub-word">vision </span><span className="scrub-word">with </span><span className="scrub-word">advanced </span><span className="scrub-word">BIM </span><span className="scrub-word">workflows, </span><span className="scrub-word">I </span><span className="scrub-word">create </span><span className="scrub-word">spaces </span><span className="scrub-word">that </span><span className="scrub-word">are </span><span className="scrub-word">both </span><span className="scrub-word">visually </span><span className="scrub-word">compelling </span><span className="scrub-word">and </span><span className="scrub-word">technically </span><span className="scrub-word">sound. </span><span className="scrub-word">Using </span><span className="scrub-word">platforms </span><span className="scrub-word">like </span><span className="scrub-word">Autodesk </span><span className="scrub-word">Revit, </span><span className="scrub-word">I </span><span className="scrub-word">develop </span><span className="scrub-word">intelligent </span><span className="scrub-word">3D </span><span className="scrub-word">models </span><span className="scrub-word">that </span><span className="scrub-word">go </span><span className="scrub-word">beyond </span><span className="scrub-word">visualization, </span><span className="scrub-word">embedding </span><span className="scrub-word">realworld </span><span className="scrub-word">data </span><span className="scrub-word">for </span><span className="scrub-word">better </span><span className="scrub-word">decision-making </span><span className="scrub-word">and </span><span className="scrub-word">coordination. </span><span className="scrub-word">My </span><span className="scrub-word">approach </span><span className="scrub-word">focuses </span><span className="scrub-word">on </span><span className="scrub-word">efficiency, </span><span className="scrub-word">sustainability, </span><span className="scrub-word">and </span><span className="scrub-word">delivering </span><span className="scrub-word">designs </span><span className="scrub-word">that </span><span className="scrub-word">work </span><span className="scrub-word">seamlessly </span><span className="scrub-word">in </span><span className="scrub-word">the </span><span className="scrub-word">real </span><span className="scrub-word">world. </span></h2>
</div>
</div>
</section>

<section className="stack-section pb-32">
<div className="px-6 md:px-20 mb-20 flex justify-between items-end">
<div className="">
<div className="flex items-center gap-2 mb-4">
<div className="w-1.5 h-1.5 rounded-full bg-dark"></div>
</div>
<h2 className="md:text-5xl text-dark text-4xl font-medium tracking-tight font-display">SKILLS.......</h2>
</div>
<div className="hidden md:block">
</div>
</div>
<div className="w-full max-w-7xl mx-auto px-4 md:px-6">

<div className="card-item">
<div className="card-inner w-full md:w-[95%] h-full bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.5fr]" style={{filter: 'none'}}>
<div className="md:p-12 flex flex-col lg:border-b-0 lg:border-r border-border lg:h-full order-2 lg:order-1 h-[40%] border-b pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="w-full">
<p className="uppercase text-lg font-medium text-gray-400 tracking-widest font-playfair mt-2">Precision-driven BIM MASTER specializing in intelligent 3D modeling and coordinated design workflows. Expert in AutoCAD, Revit Architecture &amp; Structure, delivering data-rich, construction-ready models. Skilled in Navisworks for clash detection, ensuring seamless interdisciplinary coordination. Transforming concepts into accurate, buildable digital environments through BIM methodologies. Focused on efficiency, detailing, and high-quality documentation aligned with real-world execution.</p>
</div>
<div className="space-y-6 hidden lg:block">
<div className="flex gap-2">
</div>
</div>
</div>
<div className="relative h-[60%] lg:h-full order-1 lg:order-2 overflow-hidden bg-gray-100">
<img alt="Project" className="transition-transform duration-1000 hover:scale-105 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-neutral-400 to-neutral-600 w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/64782409-d0f2-4011-b275-bcc92cfc467d_1600w.jpg"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner w-full md:w-[95%] h-full bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.5fr]" style={{filter: 'none'}}>
<div className="p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border h-[40%] lg:h-full order-2 lg:order-1">
<div className="w-full">
<div className="flex justify-between items-start mb-2">
<span className="p-2 border border-border rounded-full hover:bg-gray-50 transition-colors cursor-pointer flex items-center justify-center text-dark">
<iconify-icon className="" height="18" icon="solar:city-outline" style={{color: 'rgb(10, 10, 10)'}} width="18"></iconify-icon>
</span>
</div>
<h3 className="md:text-3xl text-dark text-2xl font-medium tracking-tight font-display mt-6">PROJECT SAUDI VILLA....</h3>
</div>
<div className="space-y-6 hidden lg:block">
<p className="leading-relaxed text-sm font-normal text-gray-500">This project presents a modern villa designed
and modeled using Autodesk Revit, focusing
on efficient space planning and
contemporary aesthetics. The BIM-based
workflow enabled the creation of an
intelligent 3D model with coordinated plans,
sections, elevations, and realistic
visualizations. The design emphasizes open
layouts, natural lighting, and functional
zoning, while incorporating parametric
components, material detailing, and basic
interior elements. This project highlights skills
in architectural modeling, visualization, and
the development of a complete residential
design using professional tools.</p>
<div className="flex gap-2">
</div>
</div>
</div>
<div className="relative h-[60%] lg:h-full order-1 lg:order-2 overflow-hidden bg-gray-100">
<img alt="Project" className="transition-transform duration-1000 hover:scale-105 w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/daf3fbbc-8636-49db-b68f-f601610e3528_1600w.png"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner w-full md:w-[95%] h-full bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.5fr]" style={{filter: 'none'}}>
<div className="p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border h-[40%] lg:h-full order-2 lg:order-1">
<div className="w-full">
<div className="flex justify-between items-start mb-2">
<span className="p-2 border border-border rounded-full hover:bg-gray-50 transition-colors cursor-pointer flex items-center justify-center text-dark">
<iconify-icon className="" height="18" icon="solar:double-alt-arrow-right-outline" style={{color: 'rgb(10, 10, 10)'}} width="18"></iconify-icon>
</span>
</div>
<h3 className="md:text-3xl text-dark text-2xl font-medium tracking-tight font-display mt-6">SECTIONS AND FLOOR PLAN..</h3>
</div>
<div className="space-y-6 hidden lg:block">
<div className="flex gap-2">
</div>
</div>
</div>
<div className="relative h-[60%] lg:h-full order-1 lg:order-2 overflow-hidden bg-gray-100">
<img alt="Project" className="transition-transform duration-1000 hover:scale-105 w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/efb21493-7979-4519-85da-1b9d8b41c3ce_1600w.png"/><img alt="Project" className="transition-transform duration-1000 hover:scale-105 w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/efb21493-7979-4519-85da-1b9d8b41c3ce_1600w.png"/><img alt="Project" className="transition-transform duration-1000 hover:scale-105 w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/efb21493-7979-4519-85da-1b9d8b41c3ce_1600w.png"/>
</div>
</div>
</div>
</div>
</section>

<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6e20da3-c609-4ed3-a38b-9f7c4d5f8031_3840w.png)] bg-repeat" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '-0.25px 0px 10499.8px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d435a014-b3a8-461b-b97f-490ee5854949_3840w.png)] bg-contain" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10499.6px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10499.6px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/edae350c-417a-41a3-a89d-ba3dac12f2e6_3840w.png)] bg-contain" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10499.6px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad69d1ea-2d07-4d84-9990-f44847b530cd_3840w.jpg)] bg-contain" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10499.6px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10499.6px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10499.6px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10499.6px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/065219e3-3b0e-4c1f-af66-4a8344e43680_3840w.jpg)] bg-contain" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10499.6px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10499.6px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10451.6px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10451.6px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10451.6px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10451.6px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10451.6px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10451.6px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10451.6px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10451.6px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10451.6px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 12124.4px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 12124.4px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 12124.4px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11537.6px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11537.6px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11537.6px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11384.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11384.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11384.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11384.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11384.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11384.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11384.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11384.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10692.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10666.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10666.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10666.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10666.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10666.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10666.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10666.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10666.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10666.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10666.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10666.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10666.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10666.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10666.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10666.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10666.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10666.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 10666.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11018.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11018.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11018.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11018.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11018.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11018.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11018.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11018.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11018.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11018.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11018.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11018.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11018.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11018.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11018.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11018.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 0px 11018.2px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1417px', height: '3769px', padding: '0px 0px 2864px'}}><section className="overflow-hidden border-border h-screen border-t relative" id="horiz-scroll" style={{inset: '0px auto auto 0px', margin: '0px', maxWidth: '1417px', width: '1417px', maxHeight: '905px', height: '905px', padding: '0px', boxSizing: 'border-box', position: 'fixed'}}>
<div className="horiz-wrap flex h-full w-[300vw]">


<div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 border-r border-border bg-[#F0F0F2]">
<span className="text-xs font-mono text-gray-400 mb-6 tracking-widest"></span>
<h2 className="font-display text-6xl md:text-8xl font-medium tracking-tight text-dark">
<p className="mt-8 max-w-md text-gray-500 text-lg leading-relaxed font-light">
</p>
</h2></div>

</div>
</section></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>

<section className="overflow-hidden md:pr-6 md:pl-64 bg-[url(https://images.unsplash.com/photo-1643228995868-bf698f67d053?w=3840&amp;q=80)] max-w-[1600px] bg-contain mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 shadow-md" id="parallax-grid">
<div className="mb-24 flex justify-between items-end">
<h2 className="md:text-5xl text-dark text-4xl font-medium tracking-tight font-display">SOME OTHER PROJECTS....</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 min-h-[120vh] gap-x-10 gap-y-4">

<div className="parallax-col flex flex-col gap-4 md:gap-6 pt-20">
<img className="aspect-[3/4] opacity-90 w-full object-contain rounded-md grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d0b784df-204f-4729-91c0-965e6f9dc55d_1600w.png"/>
<img className="aspect-[4/5] opacity-90 w-full object-cover rounded-md grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b115b547-24a3-4e46-b4e5-821961b8eec7_1600w.png"/>
<div className="flex flex-col aspect-[4/5] border-border bg-white bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/437ac953-ce42-4c15-9bdc-9f25ee00f2ab_1600w.png)] bg-cover bg-center border rounded-md pt-8 pr-8 pb-8 pl-8 justify-center">
</div>
</div>

<div className="parallax-col flex flex-col gap-4 md:gap-6">
<img className="aspect-[3/4] opacity-90 w-full object-cover rounded-md grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ae77512-eccd-4d0f-97f0-7af65e6880bd_1600w.png"/>
<div className="border-border flex aspect-square text-center bg-white bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/258094bf-8d13-4f96-8c98-ffd236b8e275_1600w.png)] bg-contain border rounded-md pt-8 pr-8 pb-8 pl-8 items-center justify-center">
</div>
<img className="aspect-[4/3] opacity-90 w-full object-cover rounded-md grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/56056126-1acf-43e2-8b38-8220f9b66482_1600w.png"/>
</div>

<div className="parallax-col flex flex-col gap-4 md:gap-6 pt-40 hidden md:flex">
<div className="aspect-[3/4] flex text-white bg-[#111] w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e227d76d-0dc3-404e-a376-4f6a488eeec2_1600w.png)] bg-contain rounded-md items-center justify-center">
</div>
<img className="aspect-[4/5] opacity-90 w-full object-cover rounded-md grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f98b7892-3196-4e13-918a-d85b842a93cd_1600w.png"/>
</div>
</div><div className="grid grid-cols-2 min-h-[120vh] bg-center md:grid-cols-3 md:gap-6 text-3xl font-playfair text-left bg-stone-800 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f174a50c-251d-4002-a0d0-96a6f245f013_3840w.jpg?w=800&amp;q=80)] bg-contain border-slate-500 border-8 rounded-xl ring-slate-700 ring-8 translate-x-16 space-x-5 gap-x-10 gap-y-0">ON SITE WORK.....
</div>
</section>


<section className="py-32 md:py-48 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-bg">
<h2 className="md:text-5xl z-10 text-dark text-3xl font-medium tracking-tight font-display mb-8 relative">Digitally built. <span className="font-light italic text-gray-400"> Precisely delivered.</span></h2>
<div className="leading-relaxed font-light text-gray-500 max-w-lg z-10 relative">Engineered in BIM. Executed with confidence.</div>

<div className="z-0 opacity-[0.03] absolute top-0 right-0 bottom-0 left-0 gap-x-10" style={{backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
</section>
</div>


<footer className="footer-sticky bg-[#050505] text-white">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-20 pointer-events-none grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp"/>
<div className="bg-gradient-to-t from-black via-black/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 text-center w-full max-w-5xl mx-auto px-6">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] uppercase font-medium text-gray-300 tracking-widest">Grateful for your time — looking forward to creating together.</span>
</div>
<a className="block group" href="mailto:hello@borjaworld.com">
<h2 className="font-display text-[10vw] leading-[0.8] font-medium tracking-tighter text-white group-hover:text-gray-300 transition-colors duration-500">
                    START PROJECT
                </h2>
<div className="h-[1px] w-0 group-hover:w-full bg-white/50 mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] mt-8"></div>
</a>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-left border-t border-white/10 pt-12">
<div className="flex flex-col gap-4">
<span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Contact</span>
<a className="hover:text-white transition-colors text-xs text-gray-400" href="#">rishabh.sri8@gmail.com</a>
<a className="hover:text-white transition-colors text-xs text-gray-400" href="#">+91-8299280331</a>
</div>
<div className="flex flex-col justify-between">
</div>
</div>
</div>
</footer>


    </>
  );
}
