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



        document.addEventListener('DOMContentLoaded', () => {
            // Smooth Scroll Setup (Lenis)
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

            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);

            // Custom Cursor Logic
            const cursorDot = document.getElementById('cursor-dot');
            const interactables = document.querySelectorAll('.interactive-element, a, button');
            let mouseX = 0;
            let mouseY = 0;
            let cursorX = 0;
            let cursorY = 0;

            // Follow mouse
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            // Smooth follow animation
            function animateCursor() {
                // Ease factor
                let ease = 0.2;
                cursorX += (mouseX - cursorX) * ease;
                cursorY += (mouseY - cursorY) * ease;
                
                cursorDot.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
                requestAnimationFrame(animateCursor);
            }
            animateCursor();

            // Hover states
            interactables.forEach(el => {
                el.addEventListener('mouseenter', () => cursorDot.classList.add('active'));
                el.addEventListener('mouseleave', () => cursorDot.classList.remove('active'));
            });

            // Stats Counter Animation
            const counters = document.querySelectorAll('.counter-val');
            const speed = 200; // lower is slower

            const animateCounters = (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const counter = entry.target;
                        const target = +counter.getAttribute('data-target');
                        
                        const updateCount = () => {
                            const count = +counter.innerText;
                            const inc = target / speed;
                            if (count < target) {
                                counter.innerText = Math.ceil(count + inc);
                                setTimeout(updateCount, 20);
                            } else {
                                counter.innerText = target + (target > 50 ? '+' : '');
                            }
                        };
                        updateCount();
                        observer.unobserve(counter);
                    }
                });
            };

            const counterObserver = new IntersectionObserver(animateCounters, {
                threshold: 0.5
            });

            counters.forEach(counter => {
                counterObserver.observe(counter);
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
      
<div className="noise-bg"></div>
<div id="cursor-dot"></div>

<nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-8 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
<div className="font-serif-custom text-xl tracking-tighter font-semibold pointer-events-auto cursor-pointer interactive-element">MJD.</div>
<button className="text-xs uppercase tracking-[0.15em] font-medium pointer-events-auto interactive-element flex items-center gap-2">
            Menu <iconify-icon icon="solar:hamburger-menu-linear" width="1.2rem"></iconify-icon>
</button>
</nav>
<main>

<section className="relative min-h-screen flex items-center pt-32 pb-20 px-4 md:px-8 overflow-hidden">

<div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-[#D4C5E8] mix-blend-multiply filter blur-[80px] opacity-50 animate-orb -z-10"></div>
<div className="absolute bottom-[20%] left-[5%] w-[35vw] h-[35vw] rounded-full bg-[#C8D5C0] mix-blend-multiply filter blur-[90px] opacity-40 animate-orb -z-10" style={{animationDelay: '-5s'}}></div>
<div className="max-w-[1400px] w-full mx-auto relative z-10">
<div className="flex flex-col gap-6 w-full">
<p className="text-xs uppercase tracking-[0.15em] font-medium text-black/60 flex items-center gap-4">
<span className="w-2 h-2 rounded-full bg-black/40"></span>
                        Independent Digital Studio
                    </p>
<h1 className="font-serif-custom text-[clamp(4rem,11vw,12rem)] leading-[0.85] tracking-tighter text-[#0A0A0A] max-w-[95%]">
                        We design &amp; <br/>
<span className="italic font-light text-black/80">build</span> the web's <br/>
                        most ambitious projects.
                    </h1>
</div>

<div className="absolute right-[5%] bottom-[15%] hidden lg:flex flex-col gap-4">
<div className="glass-card rounded-full px-6 py-3 flex items-center gap-3 interactive-element cursor-pointer transform hover:-translate-y-1 transition-transform">
<div className="w-2 h-2 rounded-full bg-[#C8D5C0]"></div>
<span className="text-xs uppercase tracking-widest font-medium">Vibe-Coding</span>
</div>
<div className="glass-card rounded-full px-6 py-3 flex items-center gap-3 interactive-element cursor-pointer transform hover:-translate-y-1 transition-transform ml-[-2rem]">
<div className="w-2 h-2 rounded-full bg-[#D4C5E8]"></div>
<span className="text-xs uppercase tracking-widest font-medium">Premium Websites</span>
</div>
<div className="glass-card rounded-full px-6 py-3 flex items-center gap-3 interactive-element cursor-pointer transform hover:-translate-y-1 transition-transform ml-[-4rem]">
<div className="w-2 h-2 rounded-full bg-[#F2D5C4]"></div>
<span className="text-xs uppercase tracking-widest font-medium">Custom Dashboards</span>
</div>
</div>
</div>
</section>

<section className="py-4 border-y border-black/10 overflow-hidden bg-white/10 backdrop-blur-sm relative z-20 flex flex-col gap-2">
<div className="flex w-[200%] animate-marquee">
<div className="flex-1 flex items-center justify-around whitespace-nowrap text-xs uppercase tracking-[0.2em] font-medium text-black/70">
<span>Premium Websites</span> <iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<span>Vibe-Coding</span> <iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<span>Custom Apps</span> <iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<span>Dashboards</span> <iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<span>CRM Systems</span> <iconify-icon icon="solar:star-fall-linear"></iconify-icon>

<span>Premium Websites</span> <iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<span>Vibe-Coding</span> <iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<span>Custom Apps</span> <iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<span>Dashboards</span> <iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<span>CRM Systems</span> <iconify-icon icon="solar:star-fall-linear"></iconify-icon>
</div>
</div>
</section>

<section className="py-32 px-4 md:px-8 max-w-[1280px] mx-auto">

<div className="flex items-center gap-6 mb-16 md:mb-24">
<span className="text-xs uppercase tracking-[0.2em] font-semibold text-black/40">01</span>
<div className="h-px bg-black/10 flex-1 max-w-[10rem]"></div>
<span className="text-xs uppercase tracking-[0.2em] font-semibold text-black/40">The Studio</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
<div className="md:col-span-4">
<p className="text-sm font-medium text-black/60 tracking-wide uppercase">Our Manifesto</p>
</div>
<div className="md:col-span-8 flex flex-col gap-8 text-xl md:text-3xl leading-[1.4] font-light text-black/80">
<p>
                        We are a Prague-based digital atelier. We reject the template, the generic, and the bloated.
                    </p>
<p>
                        Our practice sits at the intersection of rigorous engineering and editorial aesthetics. We employ <span className="font-serif-custom italic text-black">modern AI-assisted development (vibe-coding)</span> alongside deep technical expertise to craft platforms that feel alive.
                    </p>
<p className="text-base text-black/50 max-w-lg mt-4">
                        For ambitious brands who understand that their digital presence is their most vital architectural space.
                    </p>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 bg-black/[0.02]">
<div className="max-w-[1400px] mx-auto">
<div className="flex items-center gap-6 mb-20">
<span className="text-xs uppercase tracking-[0.2em] font-semibold text-black/40">02</span>
<div className="h-px bg-black/10 flex-1 max-w-[10rem]"></div>
<span className="text-xs uppercase tracking-[0.2em] font-semibold text-black/40">Expertise</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">

<div className="glass-card rounded-[2rem] p-10 flex flex-col justify-between group interactive-element min-h-[24rem]">
<div>
<div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center mb-8 bg-white/50 text-black/60 group-hover:bg-[#C8D5C0] group-hover:text-black transition-colors">
<iconify-icon icon="solar:global-linear" width="1.5rem"></iconify-icon>
</div>
<h3 className="font-serif-custom text-3xl mb-4 tracking-tight">Premium Websites</h3>
<p className="text-sm text-black/60 leading-relaxed font-light">Bespoke marketing sites with immersiveWebGL, smooth interactions, and editorial layouts built on headless CMS.</p>
</div>
<div className="mt-12 overflow-hidden">
<p className="text-xs uppercase tracking-widest font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2">
                                Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</p>
</div>
</div>

<div className="glass-card rounded-[2rem] p-10 flex flex-col justify-between group interactive-element lg:row-span-2 min-h-[24rem] bg-gradient-to-b from-white/40 to-[#D4C5E8]/20">
<div>
<div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center mb-8 bg-white/50 text-black/60 group-hover:bg-[#D4C5E8] group-hover:text-black transition-colors">
<iconify-icon icon="solar:code-square-linear" width="1.5rem"></iconify-icon>
</div>
<h3 className="font-serif-custom text-3xl md:text-5xl mb-4 tracking-tight">Vibe-Coding</h3>
<p className="text-base text-black/60 leading-relaxed font-light max-w-sm">Leveraging advanced AI integration to rapidly prototype, iterate, and build complex logic without sacrificing code quality. A new paradigm of development speed.</p>
</div>
<div className="mt-12 overflow-hidden">
<p className="text-xs uppercase tracking-widest font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2">
                                Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</p>
</div>
</div>

<div className="glass-card rounded-[2rem] p-10 flex flex-col justify-between group interactive-element min-h-[24rem]">
<div>
<div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center mb-8 bg-white/50 text-black/60 group-hover:bg-[#F2D5C4] group-hover:text-black transition-colors">
<iconify-icon icon="solar:database-linear" width="1.5rem"></iconify-icon>
</div>
<h3 className="font-serif-custom text-3xl mb-4 tracking-tight">Dashboards &amp; CRM</h3>
<p className="text-sm text-black/60 leading-relaxed font-light">Custom data visualization, internal tools, and client relationship systems designed for clarity and power.</p>
</div>
<div className="mt-12 overflow-hidden">
<p className="text-xs uppercase tracking-widest font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2">
                                Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
<div className="flex items-center gap-6 mb-24">
<span className="text-xs uppercase tracking-[0.2em] font-semibold text-black/40">03</span>
<div className="h-px bg-black/10 flex-1 max-w-[10rem]"></div>
<span className="text-xs uppercase tracking-[0.2em] font-semibold text-black/40">Selected Works</span>
</div>
<div className="flex flex-col gap-32">

<div className="group cursor-pointer interactive-element">
<div className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden rounded-2xl bg-black/5 mb-8">
<img alt="Project 1" className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2800&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 glass-card px-4 py-2 rounded-full hidden md:flex items-center gap-3">
<span className="text-xs font-medium uppercase tracking-widest">E-Commerce</span>
<div className="w-1 h-1 rounded-full bg-black/30"></div>
<span className="text-xs font-medium uppercase tracking-widest">2023</span>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-2">
<h2 className="font-serif-custom text-4xl md:text-6xl tracking-tight leading-none group-hover:italic transition-all">Aura Botanica</h2>
<p className="text-sm font-medium text-black/50 uppercase tracking-[0.1em]">Brand &amp; Digital Platform</p>
</div>
</div>

<div className="group cursor-pointer interactive-element md:w-[80%] md:ml-auto">
<div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-2xl bg-black/5 mb-8">
<img alt="Project 2" className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-2">
<h2 className="font-serif-custom text-4xl md:text-6xl tracking-tight leading-none group-hover:italic transition-all">Nexus CRM</h2>
<p className="text-sm font-medium text-black/50 uppercase tracking-[0.1em]">Web Application</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 md:px-8 border-t border-black/10 bg-[#0A0A0A] text-[#F7F4EE]">
<div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

<div className="md:col-span-5 relative">
<div className="sticky top-32 flex flex-col gap-4">
<div className="flex items-center gap-6 mb-8">
<span className="text-xs uppercase tracking-[0.2em] font-semibold text-white/40">04</span>
<div className="h-px bg-white/10 flex-1 max-w-[5rem]"></div>
<span className="text-xs uppercase tracking-[0.2em] font-semibold text-white/40">Methodology</span>
</div>
<h2 className="font-serif-custom text-5xl md:text-7xl tracking-tighter leading-none">
                            How we<br/><span className="italic text-white/70">operate.</span>
</h2>
</div>
</div>

<div className="md:col-span-7 flex flex-col gap-24 pt-12 md:pt-32">
<div className="flex flex-col gap-6">
<span className="font-serif-custom text-7xl md:text-8xl leading-none text-outline" style={{WebkitTextStroke: '1px rgba(247, 244, 238, 0.2)'}}>01</span>
<h3 className="text-xl font-medium tracking-wide uppercase">Discover &amp; Align</h3>
<p className="text-white/60 font-light leading-relaxed max-w-md text-base">We begin by deconstructing your goals. No assumptions. We map the technical architecture and define the aesthetic territory.</p>
<hr className="border-white/10 mt-8"/>
</div>
<div className="flex flex-col gap-6">
<span className="font-serif-custom text-7xl md:text-8xl leading-none text-outline" style={{WebkitTextStroke: '1px rgba(247, 244, 238, 0.2)'}}>02</span>
<h3 className="text-xl font-medium tracking-wide uppercase">Design &amp; Prototype</h3>
<p className="text-white/60 font-light leading-relaxed max-w-md text-base">Wireframes evolve into high-fidelity designs. We build interactive prototypes early, focusing on the motion and tactile feel of the interface.</p>
<hr className="border-white/10 mt-8"/>
</div>
<div className="flex flex-col gap-6">
<span className="font-serif-custom text-7xl md:text-8xl leading-none text-outline" style={{WebkitTextStroke: '1px rgba(247, 244, 238, 0.2)'}}>03</span>
<h3 className="text-xl font-medium tracking-wide uppercase">Vibe-Code &amp; Build</h3>
<p className="text-white/60 font-light leading-relaxed max-w-md text-base">The engineering phase. We pair human expertise with AI assistance to rapidly build robust, scalable front-ends and back-ends.</p>
<hr className="border-white/10 mt-8"/>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 md:px-8 max-w-[1000px] mx-auto text-center overflow-hidden">
<h2 className="text-sm font-medium tracking-[0.2em] uppercase text-black/50 mb-12">The Stack</h2>
<div className="flex flex-wrap justify-center gap-3 md:gap-4 relative z-10">

<div className="glass-card rounded-full px-6 py-3 text-sm font-medium tracking-wide interactive-element cursor-default hover:bg-white transition-colors" style={{animation: 'float-pill 6s ease-in-out infinite'}}>Next.js</div>
<div className="glass-card rounded-full px-6 py-3 text-sm font-medium tracking-wide interactive-element cursor-default hover:bg-white transition-colors" style={{animation: 'float-pill 7s ease-in-out infinite 0.5s'}}>TypeScript</div>
<div className="glass-card rounded-full px-6 py-3 text-sm font-medium tracking-wide interactive-element cursor-default hover:bg-white transition-colors" style={{animation: 'float-pill 5s ease-in-out infinite 1s'}}>Tailwind CSS</div>
<div className="glass-card rounded-full px-6 py-3 text-sm font-medium tracking-wide interactive-element cursor-default hover:bg-white transition-colors" style={{animation: 'float-pill 6.5s ease-in-out infinite 0.2s'}}>React</div>
<div className="glass-card rounded-full px-6 py-3 text-sm font-medium tracking-wide interactive-element cursor-default hover:bg-white transition-colors" style={{animation: 'float-pill 5.5s ease-in-out infinite 0.8s'}}>Framer Motion</div>
<div className="glass-card rounded-full px-6 py-3 text-sm font-medium tracking-wide interactive-element cursor-default hover:bg-white transition-colors" style={{animation: 'float-pill 6s ease-in-out infinite 1.2s'}}>Sanity CMS</div>
<div className="glass-card rounded-full px-6 py-3 text-sm font-medium tracking-wide interactive-element cursor-default hover:bg-white transition-colors" style={{animation: 'float-pill 7.5s ease-in-out infinite 0.3s'}}>Supabase</div>
<div className="glass-card rounded-full px-6 py-3 text-sm font-medium tracking-wide interactive-element cursor-default hover:bg-white transition-colors" style={{animation: 'float-pill 5s ease-in-out infinite 0.9s'}}>Three.js</div>
<div className="glass-card rounded-full px-6 py-3 text-sm font-medium tracking-wide interactive-element cursor-default hover:bg-white transition-colors" style={{animation: 'float-pill 6.2s ease-in-out infinite 0.6s'}}>GSAP</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 border-y border-black/10">
<div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x divide-black/5">
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="font-serif-custom text-[clamp(4rem,6vw,8rem)] leading-none tracking-tighter counter-val" data-target="120">0</span>
<span className="text-xs uppercase tracking-[0.15em] font-medium text-black/50 mt-4">Projects</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="font-serif-custom text-[clamp(4rem,6vw,8rem)] leading-none tracking-tighter counter-val" data-target="8">0</span>
<span className="text-xs uppercase tracking-[0.15em] font-medium text-black/50 mt-4">Years Exp.</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="font-serif-custom text-[clamp(4rem,6vw,8rem)] leading-none tracking-tighter counter-val" data-target="40">0</span>
<span className="text-xs uppercase tracking-[0.15em] font-medium text-black/50 mt-4">Happy Clients</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="font-serif-custom text-[clamp(4rem,6vw,8rem)] leading-none tracking-tighter">∞</span>
<span className="text-xs uppercase tracking-[0.15em] font-medium text-black/50 mt-4">Lines of Code</span>
</div>
</div>
</section>

<section className="py-32 px-4 md:px-8 max-w-[1280px] mx-auto">
<div className="flex items-center gap-6 mb-20">
<span className="text-xs uppercase tracking-[0.2em] font-semibold text-black/40">05</span>
<div className="h-px bg-black/10 flex-1 max-w-[10rem]"></div>
<span className="text-xs uppercase tracking-[0.2em] font-semibold text-black/40">Words</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
<div className="glass-card rounded-[2rem] p-8 md:col-span-2 flex flex-col justify-between">
<iconify-icon className="text-3xl text-black/20 mb-6" icon="solar:quote-left-linear"></iconify-icon>
<p className="font-serif-custom text-2xl md:text-4xl leading-tight tracking-tight mb-12">"MJ Design transformed our vague concept into a digital powerhouse. The attention to micro-interactions and typography is unparalleled in the region."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-black/10 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-semibold">David K.</p>
<p className="text-xs text-black/50 uppercase tracking-wide">CEO, Nexus Tech</p>
</div>
</div>
</div>
<div className="glass-card rounded-[2rem] p-8 flex flex-col justify-between bg-white/60">
<iconify-icon className="text-3xl text-black/20 mb-6" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-base font-light leading-relaxed mb-12">"Fast, intuitive, and visually striking. The vibe-coding process meant we launched weeks ahead of schedule."</p>
<div>
<p className="text-sm font-semibold">Sarah M.</p>
<p className="text-xs text-black/50 uppercase tracking-wide">Founder, Aura</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 max-w-[1000px] mx-auto">
<h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-black/40 mb-12">Project Archive</h3>
<div className="flex flex-col border-t border-black/10">

<div className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-black/10 cursor-pointer interactive-element relative">
<div className="flex items-center gap-8 md:w-2/3">
<span className="text-sm font-medium text-black/40 w-12">2024</span>
<h4 className="font-serif-custom text-2xl md:text-4xl tracking-tight group-hover:italic group-hover:translate-x-2 transition-all duration-300">Lumina Dashboard</h4>
</div>
<div className="mt-2 md:mt-0 md:w-1/3 md:text-right">
<span className="text-xs uppercase tracking-widest text-black/60">Fintech Web App</span>
</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-black/10 cursor-pointer interactive-element relative">
<div className="flex items-center gap-8 md:w-2/3">
<span className="text-sm font-medium text-black/40 w-12">2023</span>
<h4 className="font-serif-custom text-2xl md:text-4xl tracking-tight group-hover:italic group-hover:translate-x-2 transition-all duration-300">Kinetix Identity</h4>
</div>
<div className="mt-2 md:mt-0 md:w-1/3 md:text-right">
<span className="text-xs uppercase tracking-widest text-black/60">Brand &amp; Website</span>
</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-black/10 cursor-pointer interactive-element relative">
<div className="flex items-center gap-8 md:w-2/3">
<span className="text-sm font-medium text-black/40 w-12">2023</span>
<h4 className="font-serif-custom text-2xl md:text-4xl tracking-tight group-hover:italic group-hover:translate-x-2 transition-all duration-300">Oasis Reservation</h4>
</div>
<div className="mt-2 md:mt-0 md:w-1/3 md:text-right">
<span className="text-xs uppercase tracking-widest text-black/60">Custom Booking System</span>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="text-xs uppercase tracking-[0.15em] font-medium border-b border-black pb-1 interactive-element hover:text-black/60 hover:border-black/60 transition-colors">View full archive</button>
</div>
</section>

<section className="py-32 px-4 md:px-8 bg-black text-[#F7F4EE] relative overflow-hidden rounded-t-[3rem]">

<div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[120px] -z-0"></div>
<div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
<div className="flex flex-col justify-between">
<div>
<h2 className="font-serif-custom text-[clamp(3rem,6vw,6rem)] leading-[0.9] tracking-tighter mb-8">
                            Let's build<br/><span className="italic text-white/70">something</span><br/>extraordinary.
                        </h2>
<p className="text-white/50 text-base font-light max-w-sm">Currently accepting new projects for Q3. Reach out to discuss your vision.</p>
</div>
<div className="mt-16 md:mt-0 flex flex-col gap-4 text-sm font-medium uppercase tracking-widest text-white/70">
<a className="hover:text-white transition-colors interactive-element w-fit" href="mailto:hello@mjdesign.studio">hello@mjdesign.studio</a>
<a className="hover:text-white transition-colors interactive-element w-fit" href="tel:+420123456789">+420 123 456 789</a>
</div>
</div>

<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12">
<form className="flex flex-col gap-8">
<div className="flex flex-col">
<label className="text-xs uppercase tracking-widest text-white/40 mb-2">Name</label>
<input className="bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-white transition-colors rounded-none font-light placeholder-white/20" placeholder="John Doe" type="text"/>
</div>
<div className="flex flex-col">
<label className="text-xs uppercase tracking-widest text-white/40 mb-2">Email</label>
<input className="bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-white transition-colors rounded-none font-light placeholder-white/20" placeholder="john@company.com" type="email"/>
</div>

<div className="flex flex-col">
<label className="text-xs uppercase tracking-widest text-white/40 mb-2">Project Type</label>
<div className="relative">
<select className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-white transition-colors rounded-none font-light appearance-none cursor-pointer">
<option className="text-black" disabled="" selected="" value="">Select an option</option>
<option className="text-black" value="website">Premium Website</option>
<option className="text-black" value="app">Web Application</option>
<option className="text-black" value="crm">Dashboard / CRM</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col">
<label className="text-xs uppercase tracking-widest text-white/40 mb-2">Message</label>
<textarea className="bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-white transition-colors rounded-none font-light placeholder-white/20 resize-none hide-scrollbar" placeholder="Tell us about your goals..." rows="3"></textarea>
</div>
<button className="mt-4 bg-white text-black px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase flex items-center justify-center gap-3 interactive-element hover:bg-[#C8D5C0] transition-colors w-fit" type="button">
                            Submit Request <iconify-icon icon="solar:arrow-right-up-linear" width="1.2rem"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="pt-24 pb-8 px-4 md:px-8 bg-black text-white rounded-t-[3rem] -mt-12 relative z-0">
<div className="max-w-[1400px] mx-auto flex flex-col gap-16">

<div className="w-full text-center">
<h2 className="font-serif-custom text-[clamp(4rem,15vw,20vw)] leading-[0.7] tracking-tighter text-outline select-none" style={{WebkitTextStroke: '1px rgba(255,255,255,0.15)'}}>MJ DESIGN</h2>
</div>
<div className="flex flex-col md:flex-row justify-between items-end gap-8 border-t border-white/10 pt-8">
<div className="flex gap-8 text-xs font-medium uppercase tracking-[0.15em] text-white/50">
<a className="hover:text-white transition-colors interactive-element" href="#">Instagram</a>
<a className="hover:text-white transition-colors interactive-element" href="#">Twitter / X</a>
<a className="hover:text-white transition-colors interactive-element" href="#">LinkedIn</a>
</div>
<p className="text-xs font-medium uppercase tracking-[0.15em] text-white/30 flex items-center gap-2">
                        Made with <iconify-icon icon="solar:cup-linear"></iconify-icon> in Prague
                    </p>
<div className="flex gap-6 text-xs font-medium uppercase tracking-[0.15em] text-white/30">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<span>© 2024</span>
</div>
</div>
</div>
</footer>
</main>



    </>
  );
}
