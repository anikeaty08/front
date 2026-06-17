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
            
            // 1. Lenis Smooth Scroll Initialization (Strictly per requirements)
            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 2
            });

            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);

            // Disable on touch devices < 768px
            if (window.innerWidth < 768 && matchMedia('(pointer: coarse)').matches) {
                lenis.destroy();
            }

            // 2. Sticky Nav Glassmorphism
            const nav = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    nav.classList.add('backdrop-blur-xl', 'bg-white/80', 'border-b', 'border-black/5');
                } else {
                    nav.classList.remove('backdrop-blur-xl', 'bg-white/80', 'border-b', 'border-black/5');
                }
            });

            // 3. Custom Cursor Logic
            if (window.innerWidth >= 1024) {
                const dot = document.querySelector('.cursor-dot');
                const outline = document.querySelector('.cursor-outline');
                
                window.addEventListener('mousemove', (e) => {
                    // Slight delay on outline for smooth trailing effect
                    dot.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
                    
                    outline.animate({
                        transform: `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`
                    }, { duration: 200, fill: "forwards", easing: "ease-out" });
                });

                // Hover states
                document.querySelectorAll('.interactive').forEach(el => {
                    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
                    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
                });

                document.querySelectorAll('.cursor-view').forEach(el => {
                    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-view'));
                    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-view'));
                });
            }

            // 4. Magnetic Buttons
            if (window.innerWidth >= 1024) {
                document.querySelectorAll('.magnetic').forEach(btn => {
                    btn.addEventListener('mousemove', (e) => {
                        const rect = btn.getBoundingClientRect();
                        const x = e.clientX - rect.left - rect.width / 2;
                        const y = e.clientY - rect.top - rect.height / 2;
                        
                        // Limit translation
                        const tx = x * 0.2; 
                        const ty = y * 0.2;
                        
                        btn.style.transform = `translate(${tx}px, ${ty}px) scale(1.05)`;
                    });
                    
                    btn.addEventListener('mouseleave', () => {
                        btn.style.transform = `translate(0px, 0px) scale(1)`;
                    });
                });
            }

            // 5. Scroll Reveals (Intersection Observer)
            const revealElements = document.querySelectorAll('.reveal-text');
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

            revealElements.forEach(el => revealObserver.observe(el));

            // 6. Bento 3D Tilt Effect
            if (window.innerWidth >= 1024) {
                document.querySelectorAll('.interactive-bento').forEach(card => {
                    card.addEventListener('mousemove', (e) => {
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        
                        const rotateX = ((y - centerY) / centerY) * -4; // Max 4 deg tilt
                        const rotateY = ((x - centerX) / centerX) * 4;
                        
                        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                        
                        // Parallax inner content opposite to tilt
                        const inners = card.querySelectorAll('.bento-inner');
                        inners.forEach(inner => {
                            inner.style.transform = `translateZ(30px) translateX(${rotateY * -0.5}px) translateY(${rotateX * 0.5}px)`;
                        });
                    });
                    
                    card.addEventListener('mouseleave', () => {
                        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                        const inners = card.querySelectorAll('.bento-inner');
                        inners.forEach(inner => {
                            inner.style.transform = `translateZ(30px) translateX(0) translateY(0)`;
                        });
                    });
                });
            }

            // 7. Horizontal Scroll Logic (CSS Sticky + JS calculation)
            if (window.innerWidth >= 768) {
                const wrapper = document.querySelector('.horizontal-scroll-wrapper');
                const sticky = document.querySelector('.horizontal-scroll-sticky');
                const track = document.querySelector('.horizontal-scroll-track');

                window.addEventListener('scroll', () => {
                    if (!wrapper) return;
                    const rect = wrapper.getBoundingClientRect();
                    const maxScroll = wrapper.offsetHeight - window.innerHeight;
                    
                    // Only apply if section is in view
                    if(rect.top <= 0 && rect.bottom >= window.innerHeight) {
                        let progress = Math.abs(rect.top) / maxScroll;
                        progress = Math.max(0, Math.min(1, progress));
                        
                        const maxTranslate = track.scrollWidth - window.innerWidth;
                        track.style.transform = `translate3d(-${progress * maxTranslate}px, 0, 0)`;
                    } else if (rect.top > 0) {
                        track.style.transform = `translate3d(0, 0, 0)`;
                    } else if (rect.bottom < window.innerHeight) {
                        const maxTranslate = track.scrollWidth - window.innerWidth;
                        track.style.transform = `translate3d(-${maxTranslate}px, 0, 0)`;
                    }
                });
            }
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
      
<div className="bg-grid-overlay"></div>
<div className="cursor-dot"></div>
<div className="cursor-outline"></div>

<nav className="fixed top-0 left-0 w-full z-40 transition-all duration-300 py-6 px-6 md:px-12 flex justify-between items-center" id="navbar">
<a className="text-xl font-semibold tracking-tighter interactive z-10 text-[#1A1A1A]" href="#">MJ.</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500 z-10">
<a className="hover:text-black transition-colors interactive" href="#services">Services</a>
<a className="hover:text-black transition-colors interactive" href="#process">Process</a>
<a className="hover:text-black transition-colors interactive" href="#work">Work</a>
</div>
<button className="bg-[#1A1A1A] text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-black transition-colors flex items-center gap-2 interactive magnetic z-10">
            Start a project <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</nav>
<main>

<section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden">

<div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vh] stripe-gradient opacity-60 blur-[60px] pointer-events-none -z-10 rotate-12 transform-gpu"></div>
<div className="max-w-[82.5rem] mx-auto w-full relative z-10">
<div className="flex flex-col items-start gap-6">
<span className="font-mono text-xs text-gray-500 uppercase tracking-[0.1em] reveal-text">
                        // MJ DESIGN STUDIO — EST. 2018
                    </span>
<h1 className="text-[clamp(3.5rem,8.5vw,8.5rem)] leading-[0.95] font-semibold tracking-tighter text-[#1A1A1A] max-w-[15ch] reveal-text" style={{transitionDelay: '0.1s'}}>
                        Premium websites &amp; <span className="text-gradient">vibe-coded</span> apps for ambitious brands.
                    </h1>
<p className="text-base md:text-lg text-gray-600 max-w-2xl font-normal leading-relaxed reveal-text" style={{transitionDelay: '0.2s'}}>
                        Independent digital studio building custom websites, web applications, dynamic dashboards &amp; powerful CRM systems.
                    </p>
<div className="flex flex-wrap items-center gap-4 pt-4 reveal-text" style={{transitionDelay: '0.3s'}}>
<button className="bg-[#1A1A1A] text-white text-sm font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform magnetic interactive">
                            See our work <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="bg-transparent border border-black/10 text-[#1A1A1A] text-sm font-medium px-6 py-3 rounded-full hover:bg-black/5 transition-colors magnetic interactive">
                            Book intro call
                        </button>
</div>
</div>

<div className="mt-32 border-t border-black/5 pt-8 reveal-text" style={{transitionDelay: '0.4s'}}>
<p className="font-mono text-xs text-gray-400 mb-6 uppercase tracking-[0.1em]">Trusted by innovative teams</p>
<div className="flex flex-wrap items-center gap-8 md:gap-16 opacity-40 grayscale">
<div className="text-xl font-semibold tracking-tight">Acme Corp</div>
<div className="text-xl font-semibold tracking-tight">Quantum</div>
<div className="text-xl font-semibold tracking-tight">Globex</div>
<div className="text-xl font-semibold tracking-tight">Soylent</div>
<div className="text-xl font-semibold tracking-tight">Initech</div>
</div>
</div>
</div>
</section>

<div className="w-full bg-[#1A1A1A] text-white/70 py-4 border-y border-white/10 relative z-20">
<div className="marquee-container">
<div className="marquee-content font-mono text-xs tracking-[0.1em]">
<span>PREMIUM WEBSITES</span> • <span>VIBE-CODING</span> • <span>CUSTOM APPS</span> • <span>DASHBOARDS</span> • <span>CRM</span> • <span>RESERVATION SYSTEMS</span> • 
                    <span>PREMIUM WEBSITES</span> • <span>VIBE-CODING</span> • <span>CUSTOM APPS</span> • <span>DASHBOARDS</span> • <span>CRM</span> • <span>RESERVATION SYSTEMS</span> •
                </div>
</div>
</div>

<section className="py-32 px-6 md:px-12 bg-[#FAFAFA]" id="services">
<div className="max-w-[82.5rem] mx-auto">
<div className="mb-16 reveal-text">
<span className="font-mono text-xs text-gray-500 uppercase tracking-[0.1em]">01 / Capabilities</span>
<h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-tight mt-4">Built with intent.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[20rem]">

<div className="bento-card col-span-1 md:col-span-2 md:row-span-2 p-8 md:p-12 flex flex-col justify-between overflow-hidden group interactive-bento">
<div className="relative z-10 bento-inner">
<h3 className="text-2xl font-semibold tracking-tight mb-2">Premium Websites</h3>
<p className="text-sm text-gray-500 max-w-sm">Bespoke marketing sites engineered for performance, smooth animations, and high conversion rates.</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-700 pointer-events-none">
<div className="w-[20rem] h-[20rem] rounded-full stripe-gradient blur-[40px] opacity-20"></div>
<div className="absolute w-[15rem] h-[15rem] border border-black/5 rounded-full"></div>
<div className="absolute w-[10rem] h-[10rem] border border-black/10 rounded-full"></div>
</div>
<div className="relative z-10 self-end w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="bento-card col-span-1 md:col-span-1 md:row-span-2 p-8 flex flex-col group interactive-bento bg-[#F7F7F8]">
<div className="z-10 bento-inner">
<h3 className="text-xl font-semibold tracking-tight mb-2">Vibe-Coding</h3>
<p className="text-sm text-gray-500">AI-assisted rapid development for complex logic.</p>
</div>
<div className="flex-grow flex items-center justify-center mt-8 bento-inner">
<div className="w-full bg-white rounded-lg border border-black/10 p-4 shadow-sm font-mono text-[0.6rem] text-gray-400 leading-relaxed overflow-hidden">
<span className="text-[#FF1F8F]">const</span> studio = <span className="text-[#3A86FF]">await</span> <span className="text-[#7B2CBF]">MJ.build</span>({<br/>
                                  stack: [<span className="text-gray-800">'Next.js'</span>, <span className="text-gray-800">'Tailwind'</span>],<br/>
                                  speed: <span className="text-[#FF6B35]">Infinity</span><br/>
                                });<br/>
<span className="text-[#3A86FF]">return</span> studio.launch();
                            </div>
</div>
</div>

<div className="bento-card col-span-1 md:col-span-2 md:row-span-1 p-8 flex justify-between items-center group interactive-bento overflow-hidden relative">
<div className="z-10 max-w-[14rem] bento-inner">
<h3 className="text-xl font-semibold tracking-tight mb-2">Custom Web Apps</h3>
<p className="text-sm text-gray-500">Scalable dashboards and SaaS products.</p>
</div>
<div className="absolute right-[-10%] top-[20%] w-[60%] h-[120%] bg-white rounded-tl-xl border-t border-l border-black/10 shadow-lg p-4 bento-inner group-hover:-translate-x-2 transition-transform duration-500">

<div className="flex gap-2 mb-4 border-b border-black/5 pb-2">
<div className="w-3 h-3 rounded-full bg-black/10"></div>
<div className="w-16 h-3 rounded bg-black/5"></div>
</div>
<div className="flex gap-4">
<div className="w-1/3 h-20 rounded bg-black/5"></div>
<div className="w-2/3 h-20 rounded bg-gradient-to-r from-black/5 to-transparent"></div>
</div>
</div>
</div>

<div className="bento-card col-span-1 md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between group interactive-bento">
<div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-[#1A1A1A] mb-4 bento-inner">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="bento-inner">
<h3 className="text-base font-semibold tracking-tight">CRM Systems</h3>
<p className="text-xs text-gray-500 mt-1">Custom data management.</p>
</div>
</div>

<div className="bento-card col-span-1 md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between group interactive-bento">
<div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-[#1A1A1A] mb-4 bento-inner">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="bento-inner">
<h3 className="text-base font-semibold tracking-tight">Reservation Tech</h3>
<p className="text-xs text-gray-500 mt-1">Seamless booking flows.</p>
</div>
</div>
</div>
</div>
</section>

<section className="horizontal-scroll-wrapper bg-white" id="process">
<div className="horizontal-scroll-sticky">
<div className="absolute top-12 left-6 md:left-12 z-10 reveal-text">
<span className="font-mono text-xs text-gray-500 uppercase tracking-[0.1em]">02 / Methodology</span>
</div>
<div className="horizontal-scroll-track w-full">

<div className="hidden md:block min-w-[5vw]"></div>

<div className="process-card min-w-[22rem] md:min-w-[28rem] h-[28rem] bg-[#FAFAFA] border border-black/5 rounded-2xl p-8 flex flex-col relative overflow-hidden group">
<span className="font-mono text-4xl text-black/10 font-semibold absolute top-8 right-8 transition-colors group-hover:text-[#FF6B35]">01</span>
<div className="mt-auto">
<h3 className="text-2xl font-semibold tracking-tight mb-3">Discover</h3>
<p className="text-sm text-gray-600">Deep dive into technical requirements, business goals, and defining the optimal tech stack. No assumptions, just data.</p>
</div>
<div className="absolute top-8 left-8 w-12 h-1 border-t-2 border-black/20"></div>
</div>

<div className="process-card min-w-[22rem] md:min-w-[28rem] h-[28rem] bg-[#FAFAFA] border border-black/5 rounded-2xl p-8 flex flex-col relative overflow-hidden group">
<span className="font-mono text-4xl text-black/10 font-semibold absolute top-8 right-8 transition-colors group-hover:text-[#FF1F8F]">02</span>
<div className="mt-auto">
<h3 className="text-2xl font-semibold tracking-tight mb-3">Design</h3>
<p className="text-sm text-gray-600">Wireframing logic, establishing design systems, and creating high-fidelity prototypes focused on clean UI and UX.</p>
</div>
<div className="absolute top-8 left-8 w-12 h-1 border-t-2 border-black/20"></div>
</div>

<div className="process-card min-w-[22rem] md:min-w-[28rem] h-[28rem] bg-[#FAFAFA] border border-black/5 rounded-2xl p-8 flex flex-col relative overflow-hidden group">
<span className="font-mono text-4xl text-black/10 font-semibold absolute top-8 right-8 transition-colors group-hover:text-[#7B2CBF]">03</span>
<div className="mt-auto">
<h3 className="text-2xl font-semibold tracking-tight mb-3">Build</h3>
<p className="text-sm text-gray-600">Vibe-coding mixed with strict engineering principles. Next.js, custom APIs, database modeling, and buttery animations.</p>
</div>
<div className="absolute top-8 left-8 w-12 h-1 border-t-2 border-black/20"></div>
</div>

<div className="process-card min-w-[22rem] md:min-w-[28rem] h-[28rem] bg-[#FAFAFA] border border-black/5 rounded-2xl p-8 flex flex-col relative overflow-hidden group">
<span className="font-mono text-4xl text-black/10 font-semibold absolute top-8 right-8 transition-colors group-hover:text-[#3A86FF]">04</span>
<div className="mt-auto">
<h3 className="text-2xl font-semibold tracking-tight mb-3">Launch</h3>
<p className="text-sm text-gray-600">Rigorous QA, performance optimization, secure deployment to Vercel/AWS, and hand-off of a production-ready system.</p>
</div>
<div className="absolute top-8 left-8 w-12 h-1 border-t-2 border-black/20"></div>
</div>

<div className="hidden md:block min-w-[10vw]"></div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#FAFAFA] relative" id="work">
<div className="max-w-[82.5rem] mx-auto">
<div className="mb-16 reveal-text">
<span className="font-mono text-xs text-gray-500 uppercase tracking-[0.1em]">03 / Selected Work</span>
<h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-tight mt-4">Proof of concept.</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">

<div className="bento-card p-4 pb-8 group interactive-bento project-link cursor-view">
<div className="w-full aspect-[4/3] bg-gray-100 rounded-xl mb-6 overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-50 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
<div className="w-3/4 h-3/4 bg-white shadow-sm rounded-md border border-black/5 relative overflow-hidden">
<div className="absolute top-0 w-full h-4 bg-gray-100 border-b border-black/5 flex items-center px-2 gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-black/20"></div>
<div className="w-1.5 h-1.5 rounded-full bg-black/20"></div>
</div>
<div className="mt-8 mx-4 h-24 bg-gradient-to-r from-[#FF6B35]/20 to-transparent rounded"></div>
</div>
</div>
</div>
<div className="px-4 bento-inner flex justify-between items-end">
<div>
<span className="font-mono text-[0.65rem] text-gray-500 uppercase tracking-widest mb-2 block">Fintech • 2024</span>
<h3 className="text-xl font-semibold tracking-tight">Nova Dashboard</h3>
</div>
<div className="text-xs font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">View →</div>
</div>
</div>

<div className="bento-card p-4 pb-8 group interactive-bento project-link cursor-view mt-0 md:mt-12">
<div className="w-full aspect-[4/3] bg-gray-100 rounded-xl mb-6 overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-50 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
<div className="w-2/3 h-5/6 bg-white shadow-sm rounded-xl border border-black/5 flex flex-col gap-2 p-4">
<div className="w-full h-1/2 bg-[#3A86FF]/10 rounded-lg"></div>
<div className="w-full h-1/4 bg-gray-100 rounded-lg"></div>
</div>
</div>
</div>
<div className="px-4 bento-inner flex justify-between items-end">
<div>
<span className="font-mono text-[0.65rem] text-gray-500 uppercase tracking-widest mb-2 block">SaaS • 2023</span>
<h3 className="text-xl font-semibold tracking-tight">Aura Booking</h3>
</div>
<div className="text-xs font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">View →</div>
</div>
</div>
</div>

<div className="border-t border-black/10">
<ul className="work-list">
<li className="group relative border-b border-black/10 py-6 flex flex-col md:flex-row md:items-center justify-between interactive cursor-view">
<div className="flex items-center gap-4 md:gap-12 w-full md:w-1/2">
<span className="font-mono text-xs text-gray-400 w-12">2023</span>
<h4 className="text-xl md:text-2xl font-medium tracking-tight group-hover:pl-4 transition-all duration-300">Nexus Commerce</h4>
</div>
<div className="flex justify-between items-center w-full md:w-1/2 mt-2 md:mt-0">
<span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Custom E-com</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2 group-hover:-translate-y-2 duration-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</li>
<li className="group relative border-b border-black/10 py-6 flex flex-col md:flex-row md:items-center justify-between interactive cursor-view">
<div className="flex items-center gap-4 md:gap-12 w-full md:w-1/2">
<span className="font-mono text-xs text-gray-400 w-12">2022</span>
<h4 className="text-xl md:text-2xl font-medium tracking-tight group-hover:pl-4 transition-all duration-300">Verta CRM</h4>
</div>
<div className="flex justify-between items-center w-full md:w-1/2 mt-2 md:mt-0">
<span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Internal Tools</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2 group-hover:-translate-y-2 duration-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</li>
<li className="group relative border-b border-black/10 py-6 flex flex-col md:flex-row md:items-center justify-between interactive cursor-view">
<div className="flex items-center gap-4 md:gap-12 w-full md:w-1/2">
<span className="font-mono text-xs text-gray-400 w-12">2022</span>
<h4 className="text-xl md:text-2xl font-medium tracking-tight group-hover:pl-4 transition-all duration-300">Horizon Marketing</h4>
</div>
<div className="flex justify-between items-center w-full md:w-1/2 mt-2 md:mt-0">
<span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Websites</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2 group-hover:-translate-y-2 duration-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-white border-t border-black/5">
<div className="max-w-[82.5rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-7">
<div className="mb-12 reveal-text">
<span className="font-mono text-xs text-gray-500 uppercase tracking-[0.1em]">04 / Tech Stack</span>
<h2 className="text-2xl font-semibold tracking-tight mt-4">Modern primitive tools.</h2>
</div>
<div className="flex flex-wrap gap-3">

<div className="px-4 py-2 border border-black/10 rounded-full flex items-center gap-2 text-sm bg-[#FAFAFA] hover:bg-white hover:border-black/20 transition-colors interactive cursor-hover">
<iconify-icon icon="logos:nextjs-icon"></iconify-icon> <span className="font-mono text-xs">Next.js</span>
</div>
<div className="px-4 py-2 border border-black/10 rounded-full flex items-center gap-2 text-sm bg-[#FAFAFA] hover:bg-white hover:border-black/20 transition-colors interactive cursor-hover">
<iconify-icon icon="logos:react"></iconify-icon> <span className="font-mono text-xs">React</span>
</div>
<div className="px-4 py-2 border border-black/10 rounded-full flex items-center gap-2 text-sm bg-[#FAFAFA] hover:bg-white hover:border-black/20 transition-colors interactive cursor-hover">
<iconify-icon icon="logos:typescript-icon"></iconify-icon> <span className="font-mono text-xs">TypeScript</span>
</div>
<div className="px-4 py-2 border border-black/10 rounded-full flex items-center gap-2 text-sm bg-[#FAFAFA] hover:bg-white hover:border-black/20 transition-colors interactive cursor-hover">
<iconify-icon icon="devicon:tailwindcss"></iconify-icon> <span className="font-mono text-xs">Tailwind</span>
</div>
<div className="px-4 py-2 border border-black/10 rounded-full flex items-center gap-2 text-sm bg-[#FAFAFA] hover:bg-white hover:border-black/20 transition-colors interactive cursor-hover">
<iconify-icon icon="logos:supabase-icon"></iconify-icon> <span className="font-mono text-xs">Supabase</span>
</div>
<div className="px-4 py-2 border border-black/10 rounded-full flex items-center gap-2 text-sm bg-[#FAFAFA] hover:bg-white hover:border-black/20 transition-colors interactive cursor-hover">
<iconify-icon icon="logos:vercel-icon"></iconify-icon> <span className="font-mono text-xs">Vercel</span>
</div>
<div className="px-4 py-2 border border-black/10 rounded-full flex items-center gap-2 text-sm bg-[#FAFAFA] hover:bg-white hover:border-black/20 transition-colors interactive cursor-hover">
<iconify-icon className="text-black" icon="ph:framer-logo-duotone"></iconify-icon> <span className="font-mono text-xs">Framer Motion</span>
</div>
<div className="px-4 py-2 border border-black/10 rounded-full flex items-center gap-2 text-sm bg-[#FAFAFA] hover:bg-white hover:border-black/20 transition-colors interactive cursor-hover">
<iconify-icon icon="logos:nodejs-icon"></iconify-icon> <span className="font-mono text-xs">Node.js</span>
</div>
</div>
</div>

<div className="lg:col-span-5 grid grid-cols-2 gap-4">
<div className="bento-card p-6 flex flex-col justify-center items-center text-center bg-[#F7F7F8] border-none shadow-none group">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#1A1A1A] group-hover:scale-110 transition-transform">120<span className="text-[#FF6B35]">+</span></div>
<div className="font-mono text-[0.65rem] text-gray-500 uppercase mt-2">Projects Delivered</div>
</div>
<div className="bento-card p-6 flex flex-col justify-center items-center text-center bg-[#F7F7F8] border-none shadow-none group">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#1A1A1A] group-hover:scale-110 transition-transform">8</div>
<div className="font-mono text-[0.65rem] text-gray-500 uppercase mt-2">Years Experience</div>
</div>
<div className="bento-card p-6 flex flex-col justify-center items-center text-center bg-[#F7F7F8] border-none shadow-none group">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#1A1A1A] group-hover:scale-110 transition-transform">40<span className="text-[#7B2CBF]">+</span></div>
<div className="font-mono text-[0.65rem] text-gray-500 uppercase mt-2">Happy Clients</div>
</div>
<div className="bento-card p-6 flex flex-col justify-center items-center text-center bg-[#F7F7F8] border-none shadow-none group">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#1A1A1A] group-hover:scale-110 transition-transform">99<span className="text-[#3A86FF]">%</span></div>
<div className="font-mono text-[0.65rem] text-gray-500 uppercase mt-2">Client Retention</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#1A1A1A] text-white relative overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-[#1A1A1A] to-[#1A1A1A] pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 reveal-text">
<iconify-icon className="text-4xl text-white/20 mb-8" icon="solar:quote-left-bold"></iconify-icon>
<h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-tight tracking-tight mb-12">
                    "MJ Design doesn't just build websites; they engineer digital infrastructure. Their grasp of modern tech stacks and obsessive attention to detail completely transformed our SaaS platform. True vibe-coders."
                </h3>
<div className="flex flex-col items-center gap-3">
<div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FF6B35] to-[#FF1F8F] flex items-center justify-center font-mono text-sm font-bold">DT</div>
<div>
<div className="text-sm font-semibold">David Thompson</div>
<div className="font-mono text-xs text-white/50 uppercase tracking-wider mt-1">CTO, Nova Metrics</div>
</div>
</div>
</div>
</section>

<section className="relative py-40 px-6 md:px-12 overflow-hidden flex flex-col items-center text-center bg-white">
<div className="absolute inset-0 w-full h-full stripe-gradient opacity-30 blur-[80px] pointer-events-none z-0"></div>
<div className="relative z-10 max-w-2xl reveal-text">
<h2 className="text-[clamp(3rem,6vw,5rem)] font-semibold tracking-tighter leading-none mb-6">Got an ambitious project?</h2>
<p className="text-lg text-gray-600 mb-10">Let's talk. We respond within 24 hours. No fluff, just straight to technical solutions.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-[#1A1A1A] text-white text-sm font-medium px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-transform magnetic interactive">
                        Start a project <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full sm:w-auto bg-white/50 backdrop-blur border border-black/10 text-[#1A1A1A] text-sm font-medium px-8 py-4 rounded-full hover:bg-white transition-colors magnetic interactive">
                        Book a call
                    </button>
</div>
<div className="mt-12 font-mono text-xs text-gray-400 uppercase tracking-widest">
                    // HELLO@MJDESIGN.CZ
                </div>
</div>
</section>
</main>

<footer className="bg-[#FAFAFA] pt-20 px-6 md:px-12 border-t border-black/5 relative overflow-hidden">
<div className="max-w-[82.5rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 relative z-10">
<div className="col-span-1 md:col-span-1">
<div className="text-2xl font-semibold tracking-tighter mb-4">MJ.</div>
<p className="text-sm text-gray-500 max-w-[15rem] mb-6">Independent digital studio building modern web architecture.</p>
</div>
<div className="col-span-1 flex flex-col gap-3">
<div className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-2">Services</div>
<a className="text-sm font-medium hover:text-[#FF6B35] transition-colors interactive w-fit" href="#">Premium Websites</a>
<a className="text-sm font-medium hover:text-[#FF1F8F] transition-colors interactive w-fit" href="#">Vibe-Coding</a>
<a className="text-sm font-medium hover:text-[#7B2CBF] transition-colors interactive w-fit" href="#">Web Apps</a>
<a className="text-sm font-medium hover:text-[#3A86FF] transition-colors interactive w-fit" href="#">CRM Systems</a>
</div>
<div className="col-span-1 flex flex-col gap-3">
<div className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-2">Company</div>
<a className="text-sm font-medium hover:text-black transition-colors interactive w-fit" href="#">Work</a>
<a className="text-sm font-medium hover:text-black transition-colors interactive w-fit" href="#">Process</a>
<a className="text-sm font-medium hover:text-black transition-colors interactive w-fit" href="#">About</a>
<a className="text-sm font-medium hover:text-black transition-colors interactive w-fit" href="#">Contact</a>
</div>
<div className="col-span-1 flex flex-col gap-3">
<div className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-2">Connect</div>
<a className="text-sm font-medium hover:text-black transition-colors interactive w-fit flex items-center gap-2" href="#">Twitter <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon></a>
<a className="text-sm font-medium hover:text-black transition-colors interactive w-fit flex items-center gap-2" href="#">LinkedIn <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon></a>
<a className="text-sm font-medium hover:text-black transition-colors interactive w-fit flex items-center gap-2" href="#">GitHub <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon></a>
</div>
</div>
<div className="w-full relative z-10 border-t border-black/5 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="font-mono text-[0.6rem] text-gray-400 uppercase tracking-widest">
                // MADE IN PRAGUE • 2024 © MJ DESIGN
            </div>
<div className="font-mono text-[0.6rem] text-gray-400 uppercase tracking-widest flex gap-4">
<a className="hover:text-black interactive" href="#">Privacy</a>
<a className="hover:text-black interactive" href="#">Terms</a>
</div>
</div>

<div className="relative w-full overflow-hidden flex justify-center pb-[-5%] z-0 select-none pointer-events-none opacity-5">
<h1 className="text-[20vw] font-bold tracking-tighter leading-none whitespace-nowrap text-transparent" style={{WebkitTextStroke: '2px #1A1A1A'}}>
                MJ DESIGN
            </h1>
</div>
</footer>



    </>
  );
}
