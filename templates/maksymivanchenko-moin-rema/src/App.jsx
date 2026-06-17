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



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


        document.addEventListener('DOMContentLoaded', () => {
            // 1. Preloader Logic
            const preloader = document.getElementById('preloader');
            setTimeout(() => {
                preloader.classList.add('loaded');
                document.body.classList.add('hero-revealed');
            }, 800);

            // 2. Custom Cursor Logic
            const cursor = document.getElementById('cursor');
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });
            const interactiveElements = document.querySelectorAll('a, button, .cursor-hover, .gallery-item, .magnetic-button');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
            });

            // 3. Scroll Reveal Logic
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);
            document.querySelectorAll('.reveal').forEach((el) => {
                revealObserver.observe(el);
            });

            // 4. C-Suite Carousel Logic
            const container = document.getElementById('cards-container');
            const dots = [1, 2, 3, 4].map(n => document.getElementById(`dot-${n}`));
            let currentCard = 4;

            function setActiveCard(index) {
                container.className = `stack-section card-${index}-active relative`;
                dots.forEach((dot, i) => {
                    if(dot) {
                        if (i + 1 === index) {
                            dot.className = 'cursor-hover w-3 h-3 rounded-full bg-[#007bff] transition-all duration-300 scale-125 shadow-[0_0_10px_#007bff]';
                        } else {
                            dot.className = 'cursor-hover w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300';
                        }
                    }
                });
                currentCard = index;
            }

            dots.forEach((dot, index) => {
                if(dot) {
                    dot.addEventListener('click', () => {
                        setActiveCard(index + 1);
                    });
                }
            });

            setInterval(() => {
                let next = currentCard % 4 + 1;
                setActiveCard(next);
            }, 4000);

            // 5. GSAP Footer Reveal Animation
            const wrapperRef = document.getElementById('footer-wrapper');
            const giantTextRef = document.getElementById('footer-giant-text');
            const headingRef = document.getElementById('footer-heading');
            const linksRef = document.getElementById('footer-links');

            if(wrapperRef && typeof gsap !== 'undefined') {
                gsap.registerPlugin(ScrollTrigger);

                // Giant Text Scroll Effect
                gsap.fromTo(giantTextRef,
                    { y: "10vh", scale: 0.8, opacity: 0 },
                    { y: "0vh", scale: 1, opacity: 1, ease: "power1.out",
                      scrollTrigger: { trigger: wrapperRef, start: "top 80%", end: "bottom bottom", scrub: 1 } }
                );

                // Content Reveal Stagger
                gsap.fromTo([headingRef, linksRef],
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.15, ease: "power3.out",
                      scrollTrigger: { trigger: wrapperRef, start: "top 40%", end: "bottom bottom", scrub: 1 } }
                );
            }

            // 6. Magnetic Buttons Effect
            const magneticButtons = document.querySelectorAll('.magnetic-button');
            magneticButtons.forEach(element => {
                element.addEventListener("mousemove", (e) => {
                    if (typeof gsap === 'undefined') return;
                    const rect = element.getBoundingClientRect();
                    const h = rect.width / 2;
                    const w = rect.height / 2;
                    const x = e.clientX - rect.left - h;
                    const y = e.clientY - rect.top - w;
                    gsap.to(element, { 
                        x: x * 0.4, y: y * 0.4, 
                        rotationX: -y * 0.15, rotationY: x * 0.15, 
                        scale: 1.05, ease: "power2.out", duration: 0.4 
                    });
                });
                element.addEventListener("mouseleave", () => {
                    if (typeof gsap === 'undefined') return;
                    gsap.to(element, { 
                        x: 0, y: 0, rotationX: 0, rotationY: 0, 
                        scale: 1, ease: "elastic.out(1, 0.3)", duration: 1.2 
                    });
                });
            });

            // 7. Scroll to Top Behavior
            const scrollToTopBtn = document.getElementById('scroll-to-top');
            if(scrollToTopBtn) {
                scrollToTopBtn.addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>
</div>
<div className="video-background-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>
<div className="" id="cursor" style={{left: '964px', top: '107px'}}></div>
<div className="noise-overlay"></div>

<div className="fixed overflow-hidden top-0 right-0 bottom-0 left-0">
<div className="liquid-blob bg-[#007bff]" style={{width: '500px', height: '500px', top: '-100px', left: '-100px', animationDuration: '15s'}}></div>
<div className="liquid-blob bg-purple-600" style={{width: '400px', height: '400px', top: '40%', right: '-100px', animationDuration: '20s', animationDelay: '-5s'}}></div>
<div className="liquid-blob bg-cyan-600" style={{width: '600px', height: '600px', bottom: '-150px', left: '20%', animationDuration: '25s', animationDelay: '-10s'}}></div>
</div>
<div className="" id="preloader">
<div className="flex flex-col text-center z-20 pr-4 pl-4 items-center">
<span className="font-heading tracking-[0.2em] text-xs uppercase text-white/50" id="loader-text">INITIATING EXECUTIVE SEARCH</span>
<div className="loader-bar">
<div className="loader-progress" id="loader-progress" style={{width: '100%'}}></div>
</div>
</div>
</div>

<nav className="fixed transition-all duration-300 w-full max-w-[100vw] z-[60] pt-4 pb-4 top-0">
<div className="max-w-7xl mx-auto px-4">

<div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between">
<a className="cursor-hover group flex flex-col w-fit" href="#">
<span className="leading-none flex items-center text-xl font-medium text-white tracking-tighter font-heading">
<img alt="Company Logo" className="w-16 h-15 object-cover rounded-3xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e3c5378-91c7-4439-a64c-15252f7c6920_320w.png"/>
</span>
<div className="mt-1 w-full"></div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="cursor-hover uppercase hover:text-white transition-colors text-xs font-medium text-white/70 tracking-widest" href="/#about">Über Mich</a>
<a className="cursor-hover uppercase hover:text-white transition-colors text-xs font-medium text-white/70 tracking-widest" href="#identity">Für Unternehmen</a>
<a className="cursor-hover uppercase hover:text-white transition-colors text-xs font-medium text-white/70 tracking-widest" href="#sectors">Für Bewerber</a>
<a className="cursor-hover uppercase hover:text-white transition-colors text-xs font-medium text-white/70 tracking-widest" href="#c-suite">Für Netzwerkpartner</a>
</div>
<div className="hidden md:block">
<button className="cursor-hover uppercase hover:bg-white hover:text-black transition-colors text-xs font-semibold tracking-widest bg-white/5 border-white/20 border rounded-full pt-2 pr-5 pb-2 pl-5 backdrop-blur-sm">Beratung</button>
</div>
<button className="md:hidden text-white cursor-hover flex items-center">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="relative z-20">

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden max-w-[100vw]" id="hero">
<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Dubai Skyline" className="parallax-element hero-zoom w-full h-[120%] object-cover opacity-60 will-change-transform" data-parallax-speed="0.5" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=3840&amp;q=80"/>
<div className="bg-gradient-to-t from-[#050a14] via-[#050a14]/30 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 flex flex-col text-center w-full max-w-7xl mt-12 mr-auto ml-auto pr-6 pl-6 relative items-center">
<h1 className="sm:text-[4rem] md:text-[6.5rem] lg:text-[8.5rem] xl:text-[9.5rem] leading-[0.85] text-5xl font-medium text-white tracking-tight font-heading drop-shadow-2xl">
<span className="split-line"><span className="block scale-100">EXZELLENTE</span></span>
<span className="split-line"><span className="block bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20">TALENTE</span></span>
</h1>
<p className="leading-relaxed reveal delay-200 active md:text-xl text-base font-thin text-gray-300/80 opacity-0 max-w-2xl rounded-lg mt-8 mr-auto ml-auto pt-2 pr-2 pb-2 pl-2 shadow-sm backdrop-blur-none">Ich finde die richtigen Mitarbeiter für Ihr Unternehmen – schnell, präzise und mit echtem Verständnis für Menschen und Markt.</p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 reveal opacity-0 delay-300 w-full active">
<a className="cursor-hover sm:w-auto uppercase hover:bg-white hover:text-black transition-all duration-300 text-xs font-bold text-white tracking-widest text-center bg-[#007bff] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_0_20px_rgba(0,123,255,0.4)]" href="#contact">Talente gewinnen</a>
<a className="cursor-hover sm:w-auto glass-panel uppercase hover:bg-white hover:text-black transition-all duration-300 text-xs font-bold text-white tracking-widest text-center w-full border-white/20 border rounded-full pt-4 pr-8 pb-4 pl-8" href="/#contact">Beratung Starten</a>
</div>
</div>
</header>

<section className="pt-32 pb-12 relative z-10" id="about">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="reveal active">
<h2 className="md:text-5xl leading-tight text-4xl font-medium text-white tracking-tight font-heading mb-8">Du brauchst keine Bewerbungen.<br/><span className="text-gray-500">Du brauchst die richtigen Menschen.</span></h2>
</div>
<div className="reveal delay-100 space-y-6 text-lg text-gray-400 leading-relaxed font-light mx-auto active">
<p className="">Denn nachhaltiger Unternehmenserfolg entsteht nicht durch Quantität, sondern durch die Qualität der Entscheidungen. Die richtigen Menschen zur richtigen Zeit machen den Unterschied – für Teams, für Kultur und für Wachstum. Ich identifiziere Persönlichkeiten, die fachlich überzeugen, Verantwortung übernehmen und langfristig zu Ihrem Unternehmen passen. Mit einem klaren Blick für das Wesentliche und einem tiefen Verständnis für Markt und Menschen. Keine Lebensläufe. Klare Entscheidungen. Messbare Ergebnisse.</p>
<p>Für Besetzungen, die nicht nur heute funktionieren – sondern morgen den Unterschied machen.</p>
</div>
</div>
</section>

<section className="z-10 pt-12 pb-32 relative" id="identity">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal flex flex-col md:flex-row justify-between items-end gap-6 active">
<div>
<h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">Human<br/><span className="text-gray-500">Capital</span></h2>
<p className="text-lg text-gray-400 max-w-md">Wir verstehen Recruiting nicht als Dienstleistung, sondern als strategische Partnerschaft. Denn jede Schlüsselbesetzung ist eine Investition – in Menschen, in Struktur und in die Zukunft Ihres Unternehmens.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] gap-6 gap-x-6 gap-y-6" id="gallery-grid">

<div className="gallery-item glass-panel rounded-2xl overflow-hidden cursor-hover group gallery-card-hover reveal delay-100 relative">
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-all duration-500"></div>
<img alt="Executive Boardroom" className="w-full h-full object-cover gallery-img transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b29d7496-57da-4652-b9aa-ddc3ed78884e_800w.jpg"/>
<div className="flex flex-col gallery-overlay transition-opacity duration-300 opacity-0 z-20 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h4 className="text-2xl font-bold text-white font-heading">Leadership / C-Level</h4>
<p className="text-xs text-gray-300 mt-1 drop-shadow-md">Klare Führung für nachhaltigen Unternehmenserfolg</p>
</div>
</div>

<div className="gallery-item glass-panel rounded-2xl overflow-hidden cursor-hover group reveal delay-200 border border-white/10 relative">
<div className="absolute inset-0 z-0">
<img alt="Tech Innovation" className="w-full h-full object-cover transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f4faead-98df-4cf4-9273-94a4068a7c4f_800w.jpg"/>
</div>
<div className="absolute bottom-0 w-full p-6 z-20 bg-gradient-to-t from-black/90 to-transparent">
<h4 className="text-2xl font-bold text-white font-heading mb-1">Strategy</h4>
<p className="leading-snug text-xs text-gray-300">Strategische Entscheidungen mit langfristiger Wirkung</p>
</div>
</div>

<div className="gallery-item glass-panel rounded-2xl overflow-hidden cursor-hover group reveal delay-150 relative bg-[#050a14]">
<div className="absolute inset-0 z-0">
<img alt="Dubai Cityscape" className="w-full h-full object-cover filter opacity-80 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d38fdec-f122-4fd7-b619-a16cfd8feaf6_800w.jpg"/>
</div>
<div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-4">
<span className="block text-2xl font-bold text-white tracking-tighter font-heading drop-shadow-lg">Growth</span>
<span className="uppercase block text-xs tracking-widest bg-black/40 rounded-none mt-2 pt-1 pr-2 pb-1 pl-2 drop-shadow-md">Gezieltes Wachstum durch die richtigen Talente</span>
</div>
</div>

<div className="gallery-item glass-panel rounded-2xl overflow-hidden cursor-hover group gallery-card-hover reveal delay-100 relative">
<img alt="New York" className="w-full h-full object-cover gallery-img transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f6b4efa-3311-46ac-915d-d7df1265f1cf_800w.png"/>
<div className="group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-20 absolute bottom-6 left-6">
<h4 className="text-2xl font-bold text-white drop-shadow-lg">Innovation</h4><span className="glass-panel uppercase inline-block text-xs text-gray-300">Neue Impulse für moderne Unternehmensstrukturen</span>
</div>
</div>

<div className="gallery-item glass-panel rounded-2xl overflow-hidden cursor-hover group reveal delay-300 relative border border-white/10">
<div className="absolute inset-0 z-0">
<img alt="Corporate Partnership" className="w-full h-full object-cover opacity-80 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/56196c35-d166-4819-9bdc-5d7d44bece82_800w.png"/>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-[#050a14] to-transparent z-10"></div>
<div className="flex flex-col z-20 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="leading-tight text-2xl font-bold text-white font-heading mb-4 drop-shadow-lg">Team<br/></h3>
<button className="uppercase hover:scale-105 transition-transform text-xs text-neutral-50 w-fit rounded-full">Starke Teams durch passgenaue Besetzungen</button>
</div>
</div>

<div className="gallery-item glass-panel rounded-2xl overflow-hidden cursor-hover group reveal delay-200 border border-white/10 relative">
<div className="absolute inset-0 z-0">
<img alt="Australia Infrastructure" className="w-full h-full object-cover transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92b2fdf4-f6b8-462e-8ea7-bab705209512_800w.jpg"/>
</div>
<div className="absolute bottom-0 w-full p-6 z-20 bg-gradient-to-t from-black/90 to-transparent">
<h4 className="text-2xl font-bold text-white font-heading mb-1">Vision</h4>
<p className="leading-snug text-xs text-gray-300">Zukunft gestalten mit klarer unternehmerischer Perspektive</p>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 pt-32 pb-32 relative" id="global-reach">
<div className="max-w-7xl mx-auto px-6">
<div className="reveal mb-24">
<h2 className="md:text-5xl text-4xl font-medium text-white tracking-tight font-heading mb-4">Für Unternehmen <br/><span className="text-gray-500">mit hohen Ansprüchen</span></h2>
<p className="text-lg text-gray-400 max-w-sm">Ich verbinde strategisches Denken mit operativer Stärke und unterstütze Unternehmen dabei, nachhaltig zu wachsen und ihre Ziele effizient zu erreichen.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">
<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,123,255,0.3)] hover:border-[#007bff]/50">
<div className="absolute inset-0 bg-gradient-to-br from-[#007bff]/0 to-purple-600/0 group-hover:from-[#007bff]/10 group-hover:to-purple-600/10 transition-colors duration-500 z-0"></div>
<div className="relative z-10">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500">
<iconify-icon className="text-[#007bff] text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="flex group-hover:scale-110 group-hover:bg-[#007bff] group-hover:text-white transition-all duration-500 text-[#007bff] bg-gradient-to-br from-[#007bff]/10 to-transparent w-14 h-14 border-[#007bff]/20 border rounded-2xl mb-6 shadow-inner items-center justify-center">
<iconify-icon className="text-2xl" height="24" icon="solar:map-point-linear" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</div>
<h3 className="group-hover:text-[#007bff] transition-colors duration-300 text-xl font-medium text-white tracking-tight font-heading mb-3">Startups &amp; wachsende Unternehmen</h3>
<p className="leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-base text-gray-400 mb-6">Unternehmen im Aufbau oder in schneller Wachstumsphase, die keine Zeit für Fehlbesetzungen haben. Ich unterstütze dabei, Strukturen im Recruiting zu schaffen und die richtigen Talente frühzeitig zu gewinnen – bevor der Markt sie verliert.</p>
</div>
</div>
<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal delay-100 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.3)] hover:border-orange-500/50">
<div className="group-hover:from-orange-500/10 group-hover:to-red-600/10 transition-colors duration-500 bg-gradient-to-br from-orange-500/0 to-red-600/0 z-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500">
<iconify-icon className="text-orange-400 text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="flex group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 text-orange-400 bg-gradient-to-br from-orange-500/10 to-transparent w-14 h-14 border-center border-orange-500/20 border rounded-2xl mb-6 shadow-inner items-center justify-center">
<iconify-icon className="text-2xl" height="24" icon="solar:buildings-linear" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</div>
<h3 className="group-hover:text-orange-400 transition-colors duration-300 text-xl font-medium text-white tracking-tight font-heading mb-3">Kleine und mittelständische Betriebe</h3>
<p className="leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-base text-gray-400 mb-6">KMU, die eine verlässliche, diskrete und effiziente Recruiting-Lösung suchen. Ohne interne Überlastung, ohne Umwege – mit Fokus auf Qualität, Passgenauigkeit und langfristige Stabilität im Team.</p>
</div>
</div>
<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal delay-200 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.3)] hover:border-emerald-500/50">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-600/0 group-hover:from-emerald-500/10 group-hover:to-teal-600/10 transition-colors duration-500 z-0"></div>
<div className="relative z-10">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500">
<iconify-icon className="text-emerald-400 text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="flex group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 text-emerald-400 bg-gradient-to-br from-emerald-500/10 to-transparent w-14 h-14 border-emerald-500/20 border rounded-2xl mb-6 shadow-inner items-center justify-center">
<iconify-icon className="text-2xl" height="24" icon="solar:people-nearby-outline" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</div>
<h3 className="group-hover:text-emerald-400 transition-colors duration-300 text-xl font-medium text-white tracking-tight font-heading mb-3">Unternehmen mit akutem Personalbedarf</h3>
<p className="leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-base text-gray-400 mb-6">Organisationen, die schnell handeln müssen und keine Zeit für klassische, langwierige Prozesse haben. Ich liefere gezielte Lösungen, die sofort Wirkung zeigen – präzise, strukturiert und auf den Punkt.</p>
</div>
</div>
</div>
</div>
</section>
<section className="z-10 bg-black/20 pt-32 pb-32 relative" id="sectors">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="reveal mb-24">
<h2 className="md:text-5xl text-4xl font-medium text-white tracking-tight font-heading mb-4">Strategische<br/><span className="text-gray-500">Besetzung</span></h2>
<p className="text-lg text-gray-400 max-w-sm">Wir besetzen Schlüsselpositionen mit Persönlichkeiten, die nicht nur passen, sondern Wirkung entfalten und Unternehmen nachhaltig voranbringen.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="glass-panel cursor-hover group reveal z-10 rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="flex text-[#007bff] bg-gradient-to-br from-white/10 to-transparent w-14 h-14 border-white/10 border rounded-2xl mb-6 shadow-inner items-center justify-center">
<iconify-icon className="text-2xl" height="24" icon="solar:compass-linear" style={{color: 'rgb(0, 123, 255)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight font-heading mb-3">Executive Search</h3>
<p className="leading-relaxed text-base text-gray-400 mb-6">Diskrete Besetzung von Führungspositionen mit höchstem Qualitätsanspruch.</p>
</div>
<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal delay-100">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center text-[#007bff] mb-6 shadow-inner">
<iconify-icon className="text-2xl" height="24" icon="solar:user-circle-outline" style={{color: 'rgb(0, 123, 255)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight font-heading mb-3">Fachkräfte</h3>
<p className="leading-relaxed text-base text-gray-400 mb-6">Gezielte Auswahl qualifizierter Spezialisten für nachhaltige Ergebnisse.</p>
</div>
<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal delay-200">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center text-[#007bff] mb-6 shadow-inner">
<iconify-icon className="text-2xl" height="24" icon="solar:crown-outline" style={{color: 'rgb(0, 123, 255)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight font-heading mb-3">Führungskräfte</h3>
<p className="leading-relaxed text-base text-gray-400 mb-6">Identifikation von Persönlichkeiten, die Verantwortung übernehmen und Teams stärken.</p>
</div>
<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center text-[#007bff] mb-6 shadow-inner">
<iconify-icon className="text-2xl" height="24" icon="solar:pie-chart-3-outline" style={{color: 'rgb(0, 123, 255)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight font-heading mb-3">HR-Strategie</h3>
<p className="leading-relaxed text-base text-gray-400 mb-6">Klare Strukturen und fundierte Entscheidungen für langfristigen Erfolg.</p>
</div>
<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal delay-100">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center text-[#007bff] mb-6 shadow-inner">
<iconify-icon className="text-2xl" height="24" icon="solar:chart-2-outline" style={{color: 'rgb(0, 123, 255)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight font-heading mb-3">Wachstum</h3>
<p className="leading-relaxed text-base text-gray-400 mb-6">Unterstützung in dynamischen Phasen – vom Aufbau bis zur Skalierung.</p>
</div>
<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal delay-200">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center text-[#007bff] mb-6 shadow-inner">
<iconify-icon className="text-2xl" height="24" icon="solar:shield-minimalistic-outline" style={{color: 'rgb(0, 123, 255)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight font-heading mb-3">Diskretion</h3>
<p className="leading-relaxed text-base text-gray-400 mb-6">Vertrauliche Prozesse und direkte Ansprache auf höchstem Niveau.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden z-10 min-h-screen flex bg-black/20 max-w-[100vw] pt-32 pb-32 relative items-center" id="c-suite">
<div className="max-w-7xl mx-auto px-6 w-full h-full">
<div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
<div className="flex-1 max-w-xl lg:pr-8 reveal">
<div className="flex items-center space-x-2 mb-6">
<div className="w-1.5 h-1.5 bg-[#007bff] rounded-full animate-pulse shadow-[0_0_10px_#007bff]"></div>
<p className="uppercase text-xs font-medium text-white/60 tracking-[0.2em]">Premium Testimonials</p>
</div>
<div className="mb-12">
<h2 className="font-heading text-4xl lg:text-6xl font-medium leading-tight tracking-tight mb-6 text-white">
<span className="block">Erfolgreiche</span>
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#007bff] to-cyan-400">Zusammenarbeit</span>
</h2>
<p className="leading-relaxed text-lg text-white/70 max-w-md">Unternehmen vertrauen auf präzise Entscheidungen und nachhaltige Besetzungen – und genau das spiegelt sich in ihren Erfahrungen wider.</p>
</div>
<div className="flex pl-1 space-x-4 items-center">
<button className="cursor-hover w-3 h-3 rounded-full bg-[#007bff] transition-all duration-300 scale-125 shadow-[0_0_10px_#007bff]" id="dot-1"></button>
<button className="cursor-hover w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300" id="dot-2"></button>
<button className="cursor-hover w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300" id="dot-3"></button>
<button className="cursor-hover w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300" id="dot-4"></button>
</div>
</div>
<div className="flex flex-col space-y-8 items-center w-full lg:w-auto reveal delay-200">
<div className="stack-section card-1-active relative" id="cards-container">

<div className="stack-card glass-panel rounded-2xl h-[30rem] md:h-[32rem] border border-white/10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-[#007bff]/20 to-purple-900/40 z-0"></div>
<div className="flex flex-col z-10 h-full pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<iconify-icon className="text-[#007bff] text-lg" icon="solar:crown-star-linear"></iconify-icon>
<span className="uppercase text-xs font-semibold text-white/60 tracking-widest">Unternehmer</span>
</div>
<span className="glass-panel text-xs text-white rounded pt-1 pr-2 pb-1 pl-2">5.0</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="flex shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500 bg-gradient-to-br from-[#007bff] to-blue-400 w-40 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/afaa8cfb-96fc-40c4-a3a9-3bf19e739185_320w.jpg)] bg-cover bg-center rounded-xl mb-6 shadow-lg items-center justify-center">
</div>
<h3 className="text-2xl font-bold text-white font-heading mb-2">Fabian Hardt</h3>
<p className="text-sm text-gray-300">Klare Kommunikation und ein starkes Gespür für die richtigen Persönlichkeiten.</p>
</div>
</div>
</div>

<div className="stack-card glass-panel rounded-2xl h-[30rem] md:h-[32rem] border border-white/10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-900/40 z-0"></div>
<div className="relative z-10 h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<iconify-icon className="text-lg text-emerald-400" height="18" icon="solar:chat-square-2-outline" style={{color: 'rgb(52, 211, 153)'}} width="18"></iconify-icon>
<span className="uppercase text-xs font-semibold text-white/60 tracking-widest">Gründer</span>
</div>
<span className="glass-panel text-xs text-white rounded pt-1 pr-2 pb-1 pl-2">4.9</span>
</div>
<div className="flex-1 flex flex-col text-center items-center justify-center">
<div className="flex shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-500 bg-gradient-to-br from-emerald-500 to-teal-400 w-40 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8932065a-b324-40a0-9910-2bd89dec6264_800w.jpg)] bg-cover bg-center rounded-xl mb-6 shadow-lg items-center justify-center">
</div>
<h3 className="text-2xl font-bold text-white font-heading mb-2">Michael Kabon</h3>
<p className="text-sm text-gray-300">Endlich ein Recruiting-Ansatz, der funktioniert. Weniger Zeitaufwand, bessere Ergebnisse und die richtigen Menschen im Team.</p>
</div>
</div>
</div>

<div className="stack-card glass-panel md:h-[32rem] overflow-hidden group h-[30rem] border-white/10 border rounded-2xl relative">
<div className="z-0 bg-gradient-to-br from-orange-500/20 to-red-900/40 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 h-full flex flex-col p-8">
<div className="flex mb-6 items-center justify-between">
<div className="flex space-x-2 items-center">
<iconify-icon className="text-lg text-orange-400" height="18" icon="solar:shield-user-outline" style={{color: 'rgb(251, 146, 60)'}} width="18"></iconify-icon>
<span className="uppercase text-xs font-semibold text-white/60 tracking-widest">HR-Leitung</span>
</div>
<span className="glass-panel text-xs text-white rounded pt-1 pr-2 pb-1 pl-2">5.0</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="flex shadow-orange-500/20 group-hover:scale-110 transition-transform duration-500 bg-center bg-gradient-to-br from-orange-500 to-red-400 w-40 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ca92e76-dcfd-4082-93b6-43e61ba0a109_800w.jpg)] bg-cover rounded-xl mb-6 shadow-lg items-center justify-center">
</div>
<h3 className="text-2xl font-bold text-white font-heading mb-2">Anna Petersen</h3>
<p className="text-sm text-gray-300">Professionell, diskret und absolut zuverlässig. Genau so stellt man sich Executive Search vor.</p>
</div>
</div>
</div>

<div className="stack-card glass-panel rounded-2xl h-[30rem] md:h-[32rem] border border-white/10 relative overflow-hidden group">
<div className="z-0 bg-gradient-to-br from-purple-500/20 to-indigo-900/40 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 flex flex-col h-full pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex mb-6 items-center justify-between">
<div className="flex space-x-2 items-center">
<iconify-icon className="text-lg text-purple-400" height="18" icon="solar:user-outline" style={{color: 'rgb(192, 132, 252)'}} width="18"></iconify-icon>
<span className="uppercase text-xs font-semibold text-white/60 tracking-widest">Geschäftsführer</span>
</div>
<span className="glass-panel text-xs text-white rounded pt-1 pr-2 pb-1 pl-2">4.8</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="flex shadow-purple-500/20 group-hover:scale-110 transition-transform duration-500 bg-center bg-gradient-to-br from-purple-500 to-indigo-400 w-40 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8f201ed-0899-4212-9b62-51e56482a7fc_800w.jpg)] bg-cover rounded-xl mb-6 shadow-lg items-center justify-center">
</div>
<h3 className="text-2xl font-bold text-white font-heading mb-2">Michael Claußen</h3>
<p className="text-sm text-gray-300">Sehr präzise Auswahl und schnelle Umsetzung. Die Kandidaten haben perfekt zu unserem Team gepasst.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>


<div className="relative h-screen w-full" id="footer-wrapper" style={{clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)'}}>
<footer className="fixed flex flex-col overflow-hidden cinematic-footer-wrapper bg-center text-white bg-[#050a14] w-full h-screen bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9183ba4b-43a6-4a05-8d12-5027a8443511_3840w.webp)] bg-cover bottom-0 left-0 justify-between">

<div className="footer-aurora -translate-x-1/2 -translate-y-1/2 animate-footer-breathe blur-[80px] pointer-events-none z-0 w-[80vw] h-[60vh] rounded-[50%] absolute top-1/2 left-1/2"></div>
<div className="footer-bg-grid z-0 pointer-events-none absolute top-0 right-0 bottom-0 left-0"></div>

<div className="footer-giant-bg-text -bottom-[5vh] -translate-x-1/2 whitespace-nowrap select-none z-0 pointer-events-none absolute top-1 left-1/2">Recruiting</div>

<div className="absolute top-12 left-0 w-full overflow-hidden border-y border-white/10 bg-[#050a14]/60 backdrop-blur-md py-4 z-10 -rotate-2 scale-110 shadow-2xl">
<div className="flex w-max animate-footer-scroll-marquee text-xs md:text-sm font-bold tracking-[0.3em] text-gray-400 uppercase">
<div className="flex items-center space-x-12 px-6">
<span>Executive Search</span> <span className="text-[#007bff]/60">✦</span>
<span>Passgenaue Besetzung</span> <span className="text-cyan-400/60">✦</span>
<span>Nachhaltiges Wachstum</span> <span className="text-[#007bff]/60">✦</span>
<span>Diskrete Prozesse</span> <span className="text-cyan-400/60">✦</span>
<span>Strategische Partnerschaft</span> <span className="text-[#007bff]/60">✦</span>
</div>
<div className="flex items-center space-x-12 px-6">
<span>Executive Search</span> <span className="text-[#007bff]/60">✦</span>
<span>Passgenaue Besetzung</span> <span className="text-cyan-400/60">✦</span>
<span>Nachhaltiges Wachstum</span> <span className="text-[#007bff]/60">✦</span>
<span>Diskrete Prozesse</span> <span className="text-cyan-400/60">✦</span>
<span>Strategische Partnerschaft</span> <span className="text-[#007bff]/60">✦</span>
</div>
</div>
</div>

<div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-20 w-full max-w-5xl mx-auto">
<h2 className="text-5xl md:text-7xl lg:text-8xl font-black footer-text-glow tracking-tighter mb-12 text-center font-heading" id="footer-heading">
                    Bereit für den nächsten Schritt?
                </h2>

<div className="flex flex-col items-center gap-6 w-full" id="footer-links">

<div className="flex flex-wrap justify-center gap-4 w-full">
<a className="magnetic-button cursor-hover footer-glass-pill md:text-base flex items-center gap-3 group text-sm font-bold text-white rounded-full pt-5 pr-10 pb-5 pl-10" href="/#contact">
<iconify-icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors text-2xl flex items-center justify-center" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
                            Kontakt aufnehmen
                        </a>
<a className="magnetic-button cursor-hover footer-glass-pill px-10 py-5 rounded-full text-white font-bold text-sm md:text-base flex items-center gap-3 group" href="#">
<iconify-icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors text-2xl flex items-center justify-center" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                            LinkedIn Profil
                        </a>
</div>

<div className="flex flex-wrap justify-center gap-3 md:gap-6 w-full mt-2">
<a className="magnetic-button cursor-hover footer-glass-pill px-6 py-3 rounded-full text-gray-400 font-medium text-xs md:text-sm hover:text-white transition-colors" href="#">
                            Impressum
                        </a>
<a className="magnetic-button cursor-hover footer-glass-pill px-6 py-3 rounded-full text-gray-400 font-medium text-xs md:text-sm hover:text-white transition-colors" href="#">
                            Datenschutz
                        </a>
<a className="magnetic-button cursor-hover footer-glass-pill px-6 py-3 rounded-full text-gray-400 font-medium text-xs md:text-sm hover:text-white transition-colors" href="#">
                            AGB
                        </a>
</div>
</div>
</div>

<div className="relative z-20 w-full pb-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

<div className="text-[10px] md:text-xs uppercase order-2 md:order-1 font-semibold text-gray-400 tracking-widest">© 2026 Moin Recruiting. Alle Rechte vorbehalten.</div>


<button className="magnetic-button cursor-hover w-12 h-12 rounded-full footer-glass-pill flex items-center justify-center text-gray-400 hover:text-white group order-3 transition-colors" id="scroll-to-top">
<iconify-icon className="text-xl transform group-hover:-translate-y-1.5 transition-transform duration-300" icon="solar:alt-arrow-up-linear"></iconify-icon>
</button>
</div>
</footer>
</div>



    </>
  );
}
