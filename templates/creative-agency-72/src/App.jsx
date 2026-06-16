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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Setup preferences
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Initialize Lenis for Smooth Scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // GSAP Initialization
        gsap.registerPlugin(ScrollTrigger);

        if (!reduceMotion) {
            // Header Hide/Show on Scroll
            let lastScrollY = window.scrollY;
            const header = document.getElementById('header');

            lenis.on('scroll', (e) => {
                if (e.scrollY > 100 && e.scrollY > lastScrollY) {
                    header.style.transform = 'translateY(-100%)';
                } else {
                    header.style.transform = 'translateY(0)';
                }
                lastScrollY = e.scrollY;
            });

            // Hero Animation Load
            const heroTimeline = gsap.timeline();
            heroTimeline.to('.title-word', {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.out",
                delay: 0.2
            });

            // Hero Parallax (Blurred Text)
            gsap.to('#hero-glow', {
                yPercent: 40,
                ease: 'none',
                scrollTrigger: {
                    trigger: '#hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // Reveal Up Elements
            gsap.utils.toArray('.reveal-up').forEach(el => {
                gsap.to(el, {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                    }
                });
            });

            // Text Reveal (Testimonial)
            gsap.from('.reveal-text', {
                opacity: 0,
                y: 40,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.reveal-text',
                    start: "top 80%",
                }
            });
        }

        // Hamburger Menu Logic
        const menuBtn = document.getElementById('menu-btn');
        const menuOverlay = document.getElementById('menu-overlay');
        const menuItems = document.querySelectorAll('.menu-item');
        const line1 = document.getElementById('hamburger-line-1');
        const line2 = document.getElementById('hamburger-line-2');
        const line3 = document.getElementById('hamburger-line-3');
        let isMenuOpen = false;

        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;

            // Animate Hamburger
            line1.classList.toggle('translate-y-[6px]');
            line1.classList.toggle('rotate-45');
            line2.classList.toggle('opacity-0');
            line3.classList.toggle('-translate-y-[6px]');
            line3.classList.toggle('-rotate-[45deg]');

            if (isMenuOpen) {
                // Open Menu Overlay
                menuOverlay.classList.remove('opacity-0', 'pointer-events-none');
                menuOverlay.classList.add('opacity-100', 'pointer-events-auto');
                lenis.stop(); // Stop scrolling

                gsap.to(menuItems, {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.out",
                    delay: 0.2
                });
            } else {
                // Close Menu Overlay
                menuOverlay.classList.remove('opacity-100', 'pointer-events-auto');
                menuOverlay.classList.add('opacity-0', 'pointer-events-none');
                lenis.start(); // Resume scrolling

                gsap.to(menuItems, {
                    y: 32,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in"
                });
            }
        });

        // Back to top
        document.getElementById('back-to-top').addEventListener('click', () => {
            lenis.scrollTo(0, { duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 w-full z-50 px-6 py-8 mix-blend-difference flex justify-between items-center transition-transform duration-300" id="header">
<a className="font-['Anton',sans-serif] text-[clamp(1.25rem,2vw,1.5rem)] uppercase z-50 tracking-tight text-[#e2e1d3]" href="#">
            412.digital
        </a>
<button aria-label="Toggle Menu" className="relative z-50 w-8 h-4 flex flex-col justify-between items-end group focus:outline-none" id="menu-btn">
<span className="w-full h-[2px] bg-[#e2e1d3] origin-center transition-all duration-300 ease-in-out" id="hamburger-line-1"></span>
<span className="w-3/4 h-[2px] bg-[#e2e1d3] origin-center transition-all duration-300 ease-in-out group-hover:w-full" id="hamburger-line-2"></span>
<span className="w-full h-[2px] bg-[#e2e1d3] origin-center transition-all duration-300 ease-in-out" id="hamburger-line-3"></span>
</button>
</header>

<div className="fixed flex flex-col transition-opacity duration-500 ease-in-out z-40 pr-10 pl-10 top-0 right-0 bottom-0 left-0 gap-x-6 gap-y-6 justify-center opacity-0 pointer-events-none bg-[#121212]" id="menu-overlay">
<nav className="flex flex-col text-[clamp(2rem,6vw,5rem)] uppercase leading-none tracking-tight font-['Anton',sans-serif] text-left gap-x-6 gap-y-6 text-[#e2e1d3]">
<a className="relative inline-block w-fit translate-y-8 opacity-0 menu-item after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-[400ms] after:ease-[cubic-bezier(0.86,0,0.07,1)] hover:after:scale-x-100 hover:after:origin-bottom-left" href="#">
                Work
            </a>
<a className="relative inline-block w-fit translate-y-8 opacity-0 menu-item after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-[400ms] after:ease-[cubic-bezier(0.86,0,0.07,1)] hover:after:scale-x-100 hover:after:origin-bottom-left" href="#">
                Studio
            </a>
<a className="relative inline-block w-fit translate-y-8 opacity-0 menu-item after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-[400ms] after:ease-[cubic-bezier(0.86,0,0.07,1)] hover:after:scale-x-100 hover:after:origin-bottom-left" href="#">
                Capabilities
            </a>
<a className="relative inline-block w-fit translate-y-8 opacity-0 menu-item after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-[400ms] after:ease-[cubic-bezier(0.86,0,0.07,1)] hover:after:scale-x-100 hover:after:origin-bottom-left" href="#">
                Contact
            </a>
</nav>
</div>
<main>

<section className="min-h-screen flex justify-center overflow-hidden w-full pt-0 pb-0 relative items-center" id="hero">
<div className="text-center w-full max-w-[94vw] mx-auto relative flex flex-col items-center justify-center">
<div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
<div className="text-[clamp(10rem,40vw,50rem)] font-['Anton',sans-serif] leading-none text-[#ff0a2f] blur-[40px] md:blur-[60px] opacity-70 select-none mix-blend-screen" id="hero-glow">
                        RO
                    </div>
</div>
<div className="relative z-10 max-w-[85vw] md:max-w-[70vw] text-center w-full">
<h1 className="font-['Anton',sans-serif] text-[clamp(3.5rem,10vw,12rem)] uppercase text-[#e2e1d3] leading-none tracking-tight text-center">
<div className="overflow-hidden text-center w-full">
<span className="inline-block translate-y-full title-word">WE</span>
<span className="inline-block translate-y-full title-word">TRANSFORM</span>
</div>
<div className="overflow-hidden text-center w-full">
<span className="inline-block translate-y-full title-word">IDEAS</span>
<span className="inline-block translate-y-full title-word">INTO</span>
</div>
</h1>
</div>
</div>
</section>

<section className="relative w-full min-h-screen py-20 px-4 flex justify-center items-center bg-[#0d1210] overflow-hidden">
<div className="absolute left-0 top-0 w-[40%] h-full bg-[#ff1a1a]/20 blur-[150px] pointer-events-none rounded-r-full transform -translate-x-1/2"></div>
<div className="absolute right-0 top-0 w-[40%] h-full bg-[#ff1a1a]/20 blur-[150px] pointer-events-none rounded-l-full transform translate-x-1/2"></div>
<div className="relative z-10 flex flex-col items-center justify-center font-['Anton',sans-serif] uppercase text-[#ff1a1a] leading-[0.85] text-[clamp(4rem,12vw,12rem)] tracking-tight text-center select-none" style={{textShadow: '0 0 40px rgba(255,26,26,0.5), 0 0 80px rgba(255,26,26,0.2)'}}>
<div className="relative whitespace-nowrap">
                    A CULTURE DRIVEN
                    <svg className="absolute left-[15%] -bottom-[10%] w-[35%] h-auto text-white/95 drop-shadow-md z-20" fill="none" stroke="currentColor" strokeLinecap="round" viewbox="0 0 100 20">
<path d="M0 10 Q 50 0 100 15" strokeWidth="4"></path>
<path d="M5 13 Q 50 3 95 18" opacity="0.6" strokeWidth="2"></path>
</svg>
</div>
<div className="relative whitespace-nowrap mt-2">
<svg className="absolute -left-[12%] bottom-[10%] w-[12%] h-auto text-white/95 drop-shadow-md z-20" fill="none" stroke="currentColor" strokeLinecap="round" viewbox="0 0 100 100">
<path d="M25 25 L75 75 M75 25 L25 75" strokeWidth="8"></path>
<path d="M30 20 L70 80 M80 30 L20 70" opacity="0.7" strokeWidth="4"></path>
</svg>
                    CREATIVE
                    <svg className="absolute -right-[15%] top-[0%] w-[15%] h-auto text-white/95 drop-shadow-md z-20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 100 100">
<path d="M30 70 L70 30 M70 30 L40 25 M70 30 L75 60" strokeWidth="6"></path>
<path d="M32 72 L72 32 M72 32 L42 27 M72 32 L77 62" opacity="0.6" strokeWidth="3"></path>
</svg>
</div>
<div className="relative whitespace-nowrap mt-2">
                    AND
                    <span className="text-[clamp(1.5rem,4vw,3.5rem)] z-20 whitespace-nowrap font-medium text-white tracking-tight absolute top-[-10%] left-[130%] -rotate-6 font-['Caveat',cursive]" style={{filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.6))', textShadow: 'none'}}>
                        HERO COLLECTIVE
                    </span>
</div>
<div className="relative whitespace-nowrap mt-2">
<span className="absolute left-[5%] top-[10%] text-white text-[clamp(1.5rem,4vw,3.5rem)] font-medium italic tracking-tight -rotate-12 z-20 font-['Caveat',cursive]" style={{filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.6))', textShadow: 'none'}}>
                        WE
                    </span>
                    DIGITAL SHOP
                    <span className="absolute left-[42%] top-[30%] text-white text-[clamp(1.5rem,4vw,3.5rem)] font-medium italic tracking-tight -rotate-3 z-20 whitespace-nowrap font-['Caveat',cursive]" style={{filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.6))', textShadow: 'none'}}>
                        TURN BRANDS INTO HEROES
                    </span>
</div>
<div className="relative whitespace-nowrap mt-2">
                    BUILT FOR
                    <svg className="absolute right-[12%] top-[20%] w-[6%] h-auto text-white/95 drop-shadow-md z-20" fill="none" stroke="currentColor" strokeLinecap="round" viewbox="0 0 100 100">
<path d="M25 25 L75 75 M75 25 L25 75" strokeWidth="10"></path>
</svg>
</div>
<div className="relative whitespace-nowrap mt-2">
                    THE NEW
                </div>
</div>
</section>

<section className="z-20 reveal-up opacity-0 w-full pt-32 pr-[30px] pb-16 pl-[30px] relative translate-y-10">
<div className="w-full flex justify-between items-end mb-10">
<h2 className="font-['Anton',sans-serif] text-[clamp(3rem,6vw,6rem)] uppercase leading-none tracking-tight text-[#e2e1d3]">
                    Selected Works
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">

<div className="relative aspect-square w-full overflow-hidden group cursor-pointer bg-[#0a0a0a]">
<img alt="Matera Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#121212]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6 backdrop-blur-sm">
<h3 className="font-['Anton',sans-serif] text-[clamp(2.5rem,5vw,4rem)] text-white uppercase tracking-tight leading-none mb-3 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                            Matera
                        </h3>
<p className="font-['Inter',sans-serif] text-[#e2e1d3]/80 uppercase tracking-widest text-sm translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75 font-normal">
                            Brand Identity
                        </p>
</div>
</div>

<div className="relative aspect-square w-full overflow-hidden group cursor-pointer bg-[#0a0a0a]">
<img alt="Chance Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-[#121212]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6 backdrop-blur-sm">
<h3 className="font-['Anton',sans-serif] text-[clamp(2.5rem,5vw,4rem)] text-white uppercase tracking-tight leading-none mb-3 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                            Chance
                        </h3>
<p className="font-['Inter',sans-serif] text-[#e2e1d3]/80 uppercase tracking-widest text-sm translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75 font-normal">
                            Web Experience
                        </p>
</div>
</div>

<div className="relative aspect-square w-full overflow-hidden group cursor-pointer bg-[#0a0a0a]">
<img alt="Silvr Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-[#121212]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6 backdrop-blur-sm">
<h3 className="font-['Anton',sans-serif] text-[clamp(2.5rem,5vw,4rem)] text-white uppercase tracking-tight leading-none mb-3 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                            Silvr
                        </h3>
<p className="font-['Inter',sans-serif] text-[#e2e1d3]/80 uppercase tracking-widest text-sm translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75 font-normal">
                            Motion Graphics
                        </p>
</div>
</div>

<div className="relative aspect-square w-full overflow-hidden group cursor-pointer bg-[#0a0a0a]">
<img alt="Intramuros Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-[#121212]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6 backdrop-blur-sm">
<h3 className="font-['Anton',sans-serif] text-[clamp(2.5rem,5vw,4rem)] text-white uppercase tracking-tight leading-none mb-3 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                            Intramuros
                        </h3>
<p className="font-['Inter',sans-serif] text-[#e2e1d3]/80 uppercase tracking-widest text-sm translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75 font-normal">
                            Digital Editorial
                        </p>
</div>
</div>
</div>
</section>

<section className="flex flex-col z-20 py-24 md:py-32 relative items-center bg-[#ebebeb] min-h-screen justify-center w-full overflow-hidden">
<ul className="w-full flex flex-col items-center justify-center group/list">

<li className="group/item relative w-full text-center flex items-center justify-center py-2 md:py-1">
<span className="font-['Anton',sans-serif] text-[clamp(2.5rem,8vw,8rem)] leading-[0.85] uppercase tracking-tighter text-[#111111] md:text-[#c4c4c4] transition-all duration-500 ease-out md:group-hover/list:opacity-20 md:group-hover/item:!opacity-100 md:group-hover/item:!text-[#111111] cursor-pointer inline-block z-20 relative will-change-auto">
                        ART DIRECTION
                    </span>
<img alt="Art Direction" className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 w-[20vw] max-w-[350px] aspect-[16/10] object-cover rounded-2xl opacity-0 md:group-hover/item:opacity-100 transition-all duration-500 ease-out pointer-events-none z-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] scale-95 md:group-hover/item:scale-100 will-change-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</li>

<li className="group/item relative w-full text-center flex items-center justify-center py-2 md:py-1">
<span className="font-['Anton',sans-serif] text-[clamp(2.5rem,8vw,8rem)] leading-[0.85] uppercase tracking-tighter text-[#111111] md:text-[#c4c4c4] transition-all duration-500 ease-out md:group-hover/list:opacity-20 md:group-hover/item:!opacity-100 md:group-hover/item:!text-[#111111] cursor-pointer inline-block z-20 relative will-change-auto">
                        BRANDING
                    </span>
<img alt="Branding" className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 w-[20vw] max-w-[350px] aspect-[16/10] object-cover rounded-2xl opacity-0 md:group-hover/item:opacity-100 transition-all duration-500 ease-out pointer-events-none z-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] scale-95 md:group-hover/item:scale-100 will-change-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</li>

<li className="group/item relative w-full text-center flex items-center justify-center py-2 md:py-1">
<span className="font-['Anton',sans-serif] text-[clamp(2.5rem,8vw,8rem)] leading-[0.85] uppercase tracking-tighter text-[#111111] md:text-[#c4c4c4] transition-all duration-500 ease-out md:group-hover/list:opacity-20 md:group-hover/item:!opacity-100 md:group-hover/item:!text-[#111111] cursor-pointer inline-block z-20 relative will-change-auto">
                        WEBFLOW
                    </span>
<img alt="Webflow" className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 w-[20vw] max-w-[350px] aspect-[16/10] object-cover rounded-2xl opacity-0 md:group-hover/item:opacity-100 transition-all duration-500 ease-out pointer-events-none z-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] scale-95 md:group-hover/item:scale-100 will-change-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</li>

<li className="group/item relative w-full text-center flex items-center justify-center py-2 md:py-1">
<span className="font-['Anton',sans-serif] text-[clamp(2.5rem,8vw,8rem)] leading-[0.85] uppercase tracking-tighter text-[#111111] md:text-[#c4c4c4] transition-all duration-500 ease-out md:group-hover/list:opacity-20 md:group-hover/item:!opacity-100 md:group-hover/item:!text-[#111111] cursor-pointer inline-block z-20 relative will-change-auto">
                        UI/UX DESIGN
                    </span>
<img alt="UI/UX Design" className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 w-[20vw] max-w-[350px] aspect-[16/10] object-cover rounded-2xl opacity-0 md:group-hover/item:opacity-100 transition-all duration-500 ease-out pointer-events-none z-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] scale-95 md:group-hover/item:scale-100 will-change-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</li>

<li className="group/item relative w-full text-center flex items-center justify-center py-2 md:py-1">
<span className="font-['Anton',sans-serif] text-[clamp(2.5rem,8vw,8rem)] leading-[0.85] uppercase tracking-tighter text-[#111111] md:text-[#c4c4c4] transition-all duration-500 ease-out md:group-hover/list:opacity-20 md:group-hover/item:!opacity-100 md:group-hover/item:!text-[#111111] cursor-pointer inline-block z-20 relative will-change-auto">
                        GSAP ANIMATIONS
                    </span>
<img alt="GSAP Animations" className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 w-[20vw] max-w-[350px] aspect-[16/10] object-cover rounded-2xl opacity-0 md:group-hover/item:opacity-100 transition-all duration-500 ease-out pointer-events-none z-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] scale-95 md:group-hover/item:scale-100 will-change-transform" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</li>

<li className="group/item relative w-full text-center flex items-center justify-center py-2 md:py-1">
<span className="font-['Anton',sans-serif] text-[clamp(2.5rem,8vw,8rem)] leading-[0.85] uppercase tracking-tighter text-[#111111] md:text-[#c4c4c4] transition-all duration-500 ease-out md:group-hover/list:opacity-20 md:group-hover/item:!opacity-100 md:group-hover/item:!text-[#111111] cursor-pointer inline-block z-20 relative will-change-auto">
                        ADVERTISING
                    </span>
<img alt="Advertising" className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 w-[20vw] max-w-[350px] aspect-[16/10] object-cover rounded-2xl opacity-0 md:group-hover/item:opacity-100 transition-all duration-500 ease-out pointer-events-none z-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] scale-95 md:group-hover/item:scale-100 will-change-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</li>

<li className="group/item relative w-full text-center flex items-center justify-center py-2 md:py-1">
<span className="font-['Anton',sans-serif] text-[clamp(2.5rem,8vw,8rem)] leading-[0.85] uppercase tracking-tighter text-[#111111] md:text-[#c4c4c4] transition-all duration-500 ease-out md:group-hover/list:opacity-20 md:group-hover/item:!opacity-100 md:group-hover/item:!text-[#111111] cursor-pointer inline-block z-20 relative will-change-auto">
                        SEO &amp; CONTENT
                    </span>
<img alt="SEO &amp; Content" className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 w-[20vw] max-w-[350px] aspect-[16/10] object-cover rounded-2xl opacity-0 md:group-hover/item:opacity-100 transition-all duration-500 ease-out pointer-events-none z-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] scale-95 md:group-hover/item:scale-100 will-change-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</li>
</ul>
</section>

<section className="py-40 px-6 flex items-center justify-center bg-[#121212]">
<h2 className="font-['Anton',sans-serif] text-[clamp(2rem,5vw,6rem)] text-center max-w-6xl text-[#e2e1d3]/90 reveal-text leading-tight tracking-tight">
                "412.DIGITAL REDEFINED OUR ONLINE PRESENCE. THEIR APPROACH TO MOTION
                AND TYPOGRAPHY CREATED A PLATFORM THAT FEELS MORE LIKE CINEMA THAN
                SOFTWARE."
            </h2>
</section>
</main>

<footer className="pt-20 px-4 md:px-10 pb-6 bg-[#0a0a0a] rounded-t-[2.5rem] mt-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
<div>
<h4 className="font-medium text-xs tracking-widest text-[#e2e1d3]/50 mb-6 uppercase">
                    New Business
                </h4>
<a className="text-xl md:text-[clamp(1.5rem,2vw,2rem)] relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-[400ms] after:ease-[cubic-bezier(0.86,0,0.07,1)] hover:after:scale-x-100 hover:after:origin-bottom-left text-[#e2e1d3]" href="mailto:hello@412.digital">
                    hello@412.digital
                </a>
</div>
<div>
<h4 className="font-medium text-xs tracking-widest text-[#e2e1d3]/50 mb-6 uppercase">
                    Socials
                </h4>
<ul className="flex flex-col gap-3 text-lg">
<li>
<a className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-[400ms] after:ease-[cubic-bezier(0.86,0,0.07,1)] hover:after:scale-x-100 hover:after:origin-bottom-left text-[#e2e1d3]/80 hover:text-[#e2e1d3]" href="#">
                            Instagram
                        </a>
</li>
<li>
<a className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-[400ms] after:ease-[cubic-bezier(0.86,0,0.07,1)] hover:after:scale-x-100 hover:after:origin-bottom-left text-[#e2e1d3]/80 hover:text-[#e2e1d3]" href="#">
                            LinkedIn
                        </a>
</li>
<li>
<a className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-[400ms] after:ease-[cubic-bezier(0.86,0,0.07,1)] hover:after:scale-x-100 hover:after:origin-bottom-left text-[#e2e1d3]/80 hover:text-[#e2e1d3]" href="#">
                            Twitter
                        </a>
</li>
</ul>
</div>
<div>
<h4 className="font-medium text-xs tracking-widest text-[#e2e1d3]/50 mb-6 uppercase">
                    Office
                </h4>
<address className="not-italic text-[#e2e1d3]/80 text-lg leading-relaxed font-normal">
                    412 Innovation Blvd
                    <br/>
                    Suite 300
                    <br/>
                    Pittsburgh, PA 15212
                </address>
</div>
<div className="flex items-start lg:justify-end">
<button aria-label="Back to top" className="w-16 h-16 rounded-full border border-[#e2e1d3]/20 flex items-center justify-center hover:bg-[#e2e1d3] hover:text-[#121212] transition-colors text-2xl" id="back-to-top">
<iconify-icon icon="solar:arrow-up-linear"></iconify-icon>
</button>
</div>
</div>
<div className="border-t border-[#e2e1d3]/10 pt-10 flex flex-col md:flex-row justify-between items-end gap-6 overflow-hidden">
<p className="text-xs text-[#e2e1d3]/50 uppercase tracking-widest order-2 md:order-1 mb-2 md:mb-4 font-normal">
                © 2024 412.digital. All rights reserved.
            </p>
<h2 className="font-['Anton',sans-serif] text-[clamp(4rem,18vw,25rem)] text-[#e2e1d3] uppercase order-1 md:order-2 -mb-[2vw] md:-mb-[1vw] leading-none tracking-tight">
                412.DIGITAL
            </h2>
</div>
</footer>


    </>
  );
}
