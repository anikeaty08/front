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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        (function() {
            const section = document.getElementById('hidden-gems-section');
            const container = document.getElementById('horizontal-scroll-container');
            let isTicking = false;

            function updateScroll() {
                if (section && container) {
                    const rect = section.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    const totalScroll = rect.height - windowHeight;
                    let progress = -rect.top / totalScroll;
                    progress = Math.max(0, Math.min(1, progress));
                    
                    const padding = window.innerWidth >= 768 ? 96 : 48;
                    const maxTranslate = Math.max(0, container.scrollWidth - window.innerWidth + padding);
                    container.style.transform = `translate3d(${-progress * maxTranslate}px, 0, 0)`;
                }
                isTicking = false;
            }

            window.addEventListener('scroll', () => {
                if (!isTicking) {
                    window.requestAnimationFrame(updateScroll);
                    isTicking = true;
                }
            }, { passive: true });
            
            window.addEventListener('resize', () => {
                if (!isTicking) {
                    window.requestAnimationFrame(updateScroll);
                    isTicking = true;
                }
            }, { passive: true });
            
            setTimeout(updateScroll, 100);
        })();
    


        (function() {
            const container = document.getElementById('reveal-wrap-aura-emn3vciak2mjqsgcw');
            const text = document.getElementById('reveal-text-aura-emn3vciak2mjqsgcw');
            if(!container || !text) return;

            const handleScroll = () => {
                const rect = container.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                
                // Animation triggers between 85% and 35% of the viewport height
                const start = windowHeight * 0.85;
                const end = windowHeight * 0.35;
                
                let progress = (start - rect.top) / (start - end);
                progress = Math.max(0, Math.min(1, progress));
                
                // Calculate the inset from the right (100% hidden -> 0% fully revealed)
                const insetRight = 100 - (progress * 100);
                text.style.clipPath = `inset(0 ${insetRight}% 0 0)`;
            };

            window.addEventListener('scroll', handleScroll, {passive: true});
            // Initial check in case it's already in view on load
            setTimeout(handleScroll, 50);
        })();
    


        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Tailwind classes for the 'active' revealed state
                        entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-y-12');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.fade-up-element');
            revealElements.forEach(el => observer.observe(el));

            // Scrollbar Logic
            const scrollContainer = document.getElementById('destinations-scroll-container');
            const scrollThumb = document.getElementById('destinations-scrollbar-thumb');

            if (scrollContainer && scrollThumb) {
                const updateScrollbar = () => {
                    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
                    if (maxScrollLeft > 0) {
                        const scrollPercentage = scrollContainer.scrollLeft / maxScrollLeft;
                        // Thumb width is 25% (w-1/4), so max left offset is 75%
                        scrollThumb.style.left = `${scrollPercentage * 75}%`;
                    }
                };

                scrollContainer.addEventListener('scroll', updateScrollbar, { passive: true });
                window.addEventListener('resize', updateScrollbar, { passive: true });
                // Initial call after small delay to ensure rendering is complete
                setTimeout(updateScrollbar, 100);
            }
        });
    


        document.addEventListener('DOMContentLoaded', () => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const footerObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.footer-reveal').forEach(el => footerObserver.observe(el));
        });
    


    (function() {
        const initScrollReveal = () => {
            const el = document.querySelector('.scroll-reveal-text');
            if (!el) return;
            
            let ticking = false;
            
            const updateReveal = () => {
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                // Define the start and end points for the animation relative to the viewport
                const startReveal = windowHeight * 0.95; 
                const endReveal = windowHeight * 0.25;
                
                // Calculate progress between 0 and 1
                const totalDistance = startReveal - endReveal + rect.height;
                let progress = (startReveal - rect.top) / totalDistance;
                progress = Math.max(0, Math.min(1, progress));
                
                // Map the 0-1 progress to 100%-0% background position for the top-down wipe effect
                const bgPosition = 100 - (progress * 100);
                el.style.backgroundPosition = `0% ${bgPosition}%`;
                
                ticking = false;
            };

            // Attach scroll listener with requestAnimationFrame for performance
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(updateReveal);
                    ticking = true;
                }
            }, { passive: true });
            
            // Trigger an initial update
            setTimeout(updateReveal, 100);
        };
        
        // Ensure DOM is ready before attaching
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initScrollReveal);
        } else {
            initScrollReveal();
        }
    })();



        lucide.createIcons();

        let scrollPos = 0;
        let targetScrollPos = 0;
        const track = document.getElementById('scroll-track');
        const scene = document.getElementById('scene-container');
        const doorPanel = document.getElementById('door-panel');
        const uiLayer = document.getElementById('ui-layer');
        const portalContent = document.getElementById('portal-content');
        const portalGlow = document.getElementById('portal-glow');
        const whiteout = document.getElementById('whiteout');

        window.addEventListener('scroll', () => {
            targetScrollPos = window.scrollY;
        });

        function renderAnimation() {
            scrollPos += (targetScrollPos - scrollPos) * 0.08;

            if (track) {
                const trackHeight = track.offsetHeight - window.innerHeight;
                let progress = 0;
                
                if (trackHeight > 0) {
                    progress = Math.min(Math.max(scrollPos / trackHeight, 0), 1);
                }

                // 1. Camera Push 
                const easeZoom = Math.pow(progress, 3);
                const scale = 1 + (easeZoom * 25); 
                const translateY = easeZoom * 15;
                if (scene) scene.style.transform = `scale(${scale}) translateY(${translateY}%)`;

                // 2. Door Swinging Open
                if (doorPanel) {
                    let angle = 0;
                    if (progress > 0.05) {
                        let doorProgress = Math.min((progress - 0.05) / 0.6, 1);
                        const easeDoor = Math.sin((doorProgress * Math.PI) / 2);
                        angle = -(easeDoor * 115);
                    }
                    doorPanel.style.transform = `rotateY(${angle}deg) translateZ(2px)`;
                }

                // 3. Portal Content Reveal
                if (portalContent && portalGlow) {
                    const revealProgress = Math.min(Math.max((progress - 0.1) / 0.4, 0), 1);
                    portalContent.style.opacity = revealProgress;
                    portalGlow.style.opacity = easeZoom * 1.5;
                }

                // 4. Parallax & Fade UI Elements
                if (uiLayer) {
                    const uiOpacity = Math.max(1 - (progress * 5), 0);
                    uiLayer.style.opacity = uiOpacity;
                    const uiParallax = progress * -100;
                    uiLayer.style.transform = `translateY(${uiParallax}px)`;
                }

                // 5. Whiteout Transition matching the background of the next section
                if (whiteout) {
                    if (progress > 0.8) {
                        // Fade in the #F4F4F5 overlay as we pass through the door
                        whiteout.style.opacity = (progress - 0.8) * 5; 
                    } else {
                        whiteout.style.opacity = 0;
                    }
                }
            }

            requestAnimationFrame(renderAnimation);
        }

        requestAnimationFrame(renderAnimation);
    
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
      

<div className="z-10 bg-[#0B101A] w-full h-[300vh] relative" id="scroll-track">
<div className="sticky overflow-hidden [perspective:1200px] w-full h-screen top-0 right-0 bottom-0 left-0">


<div className="flex [transform-style:preserve-3d] will-change-transform origin-[50%_55%] bg-center bg-cyan-950 opacity-100 absolute top-0 right-0 bottom-0 left-0 items-center justify-center" id="scene-container">
<style className="">
            @keyframes spin-earth {
                0% {
                    background-position: 0 0;
                }

                100% {
                    background-position: 200% 0;
                }
            }

            @keyframes float-flower-1 {

                0%,
                100% {
                    transform: translate3d(0, 0, 20px) rotate(0deg);
                }

                50% {
                    transform: translate3d(-10px, -15px, 20px) rotate(15deg);
                }
            }

            @keyframes float-flower-2 {

                0%,
                100% {
                    transform: translate3d(0, 0, -10px) rotate(0deg);
                }

                50% {
                    transform: translate3d(10px, -20px, -10px) rotate(-10deg);
                }
            }

            @keyframes float-flower-3 {

                0%,
                100% {
                    transform: translate3d(0, 0, 30px) scale(1);
                }

                50% {
                    transform: translate3d(5px, -10px, 30px) scale(1.1);
                }
            }

            @keyframes pulse-glow {

                0%,
                100% {
                    opacity: 0.4;
                    transform: scale(1);
                }

                50% {
                    opacity: 0.7;
                    transform: scale(1.1);
                }
            }
        </style>

<div className="pointer-events-none z-0 absolute top-0 right-0 bottom-0 left-0">
<img alt="Background Environment" className="opacity-60 mix-blend-overlay w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1fb0d000-28e3-4a63-9571-a768c099c566_3840w.png"/>
</div>

<div className="origin-top [transform:rotateX(80deg)_translateZ(-100px)] bg-gradient-to-b from-[#52525B]/95 to-[#18181B] w-[200%] h-[100%] border-[#A1A1AA]/30 border-t absolute top-[60%] left-[-50%] drop-shadow-2xl backdrop-blur-md">
<div className="bg-center opacity-100 mix-blend-soft-light bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05b11cf5-028b-41dd-9248-8b56e028f570_3840w.png)] bg-contain absolute top-0 right-0 bottom-0 left-0 shadow-2xl translate-y-4">
</div>
</div>

<div className="sm:w-[320px] sm:h-[560px] [transform-style:preserve-3d] group xs:w-[260px] xs:h-[460px] -translate-y-8 sm:-translate-y-12 w-[220px] h-[400px] relative">

<div className="bg-center will-change-[opacity] opacity-25 bg-cover rounded-t-[144px] absolute top-[8px] right-[8px] bottom-[8px] left-[8px]" id="portal-content" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&amp'}}>
<div className="bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-t-[144px] absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="bg-[#86A873]/30 opacity-0 mix-blend-screen rounded-t-[144px] absolute top-0 right-0 bottom-0 left-0 blur-xl" id="portal-glow"></div>
</div>

<div className="border-[16px] [transform:translateZ(1px)] bg-transparent border-[#EAE6DF] rounded-t-[160px] absolute top-0 right-0 bottom-0 left-0">
<div className="absolute inset-0 border border-[#C8C3B8] rounded-t-[144px] rounded-b-sm pointer-events-none">
</div>
<div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] rounded-t-[144px] rounded-b-sm pointer-events-none">
</div>
</div>

<div className="sm:inset-[12px] origin-left transition-transform duration-75 ease-out will-change-transform [transform:translateZ(2px)] flex flex-row z-20 overflow-hidden bg-[#4A3018] border-[#2D1B0E] border rounded-t-[148px] absolute top-[8px] right-[8px] bottom-[8px] left-[8px] shadow-[10px_0_20px_rgba(0,0,0,0.5)]" id="door-panel">

<div className="flex-1 border-r border-[#2D1B0E] shadow-[inset_-2px_0_10px_rgba(0,0,0,0.3)] bg-gradient-to-b from-transparent via-black/5 to-black/20">
</div>
<div className="flex-1 bg-gradient-to-b from-transparent via-black/5 to-black/20 border-[#2D1B0E] border-r shadow-[inset_-2px_0_10px_rgba(0,0,0,0.3)]">
</div>
<div className="flex-1 border-r border-[#2D1B0E] shadow-[inset_-2px_0_10px_rgba(0,0,0,0.3)] bg-gradient-to-b from-transparent via-black/5 to-black/20">
</div>
<div className="flex-1 border-r border-[#2D1B0E] shadow-[inset_-2px_0_10px_rgba(0,0,0,0.3)] bg-gradient-to-b from-transparent via-black/5 to-black/20">
</div>
<div className="flex-1 shadow-[inset_-2px_0_10px_rgba(0,0,0,0.3)] bg-gradient-to-b from-transparent via-black/5 to-black/20">
</div>

<div className="absolute top-[25%] left-0 w-full h-5 bg-[#1A1A1A] shadow-[0_2px_5px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] flex justify-around items-center px-4">
<div className="w-2.5 h-2.5 rounded-full bg-[#333] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.2)]">
</div>
<div className="w-2.5 h-2.5 rounded-full bg-[#333] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.2)]">
</div>
<div className="w-2.5 h-2.5 rounded-full bg-[#333] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.2)]">
</div>
<div className="w-2.5 h-2.5 rounded-full bg-[#333] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.2)]">
</div>
</div>
<div className="absolute bottom-[25%] left-0 w-full h-5 bg-[#1A1A1A] shadow-[0_2px_5px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] flex justify-around items-center px-4">
<div className="w-2.5 h-2.5 rounded-full bg-[#333] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.2)]">
</div>
<div className="w-2.5 h-2.5 rounded-full bg-[#333] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.2)]">
</div>
<div className="w-2.5 h-2.5 rounded-full bg-[#333] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.2)]">
</div>
<div className="w-2.5 h-2.5 rounded-full bg-[#333] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.2)]">
</div>
</div>

<div className="w-full h-[45%] border-[#E2E8F0] border-2 rounded-sm relative shadow-[inset_0_2px_5px_rgba(0,0,0,0.02)] hidden" style={{display: 'none'}}></div>

<div className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 border-[5px] border-[#1A1A1A] rounded-full shadow-[2px_2px_6px_rgba(0,0,0,0.6)] flex items-center justify-center [transform-style:preserve-3d]">
<div className="absolute left-[-12px] w-5 h-6 bg-[#1A1A1A] rounded-sm [transform:translateZ(-1px)] shadow-md flex flex-col justify-around py-1">
<div className="w-2 h-1 bg-[#333] mx-auto rounded-full"></div>
<div className="w-2 h-1 bg-[#333] mx-auto rounded-full"></div>
</div>
</div>
</div>

</div>
</div>

<div className="z-50 pointer-events-none flex flex-col md:p-12 will-change-[opacity,transform] p-4 sm:p-6 absolute top-0 right-0 bottom-0 left-0 justify-between" id="ui-layer">
<header className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] pointer-events-auto gap-2 sm:gap-4 text-white w-full relative items-center">

<a className="justify-self-start flex items-center gap-2 sm:gap-3 group transition-all duration-300 hover:opacity-100 focus:outline-none" href="#">
<div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center group-hover:bg-[#C8A96A]/10 group-hover:scale-110 group-hover:border-[#C8A96A]/50 transition-all duration-500 shadow-lg group-hover:shadow-[0_0_20px_rgba(200,169,106,0.4)] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-[#C8A96A]/0 via-[#C8A96A]/20 to-[#C8A96A]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%]">
</div>
<svg className="w-4 h-4 text-white group-hover:text-[#C8A96A] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2 22h20"></path>
<path className="" d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12l5-5 1.5-1.5a2.82 2.82 0 1 1 4 4L17 11l-4 6-5.4 1.36c-.47.12-.96.06-1.4-.16Z"></path>
</svg>
</div>
<div className="flex flex-col text-[10px] sm:text-[11px] uppercase tracking-[0.2em] leading-tight font-light">
<span className="text-white group-hover:text-[#C8A96A] transition-colors duration-300">Portalra</span>
<span className="text-white/60 group-hover:text-white transition-colors duration-300">Escape</span>
</div>
</a>

<div className="hidden md:flex justify-self-center items-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md p-1 px-5 gap-5 shadow-lg hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)] hover:bg-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer group/search">
<button aria-label="Location" className="text-white/70 hover:text-[#C8A96A] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none flex items-center justify-center group">
<svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</button>
<div className="h-3 w-px bg-white/20 group-hover/search:bg-white/40 transition-colors duration-500"></div>
<button aria-label="Dates" className="text-white/70 hover:text-[#C8A96A] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none flex items-center justify-center group">
<svg className="w-4 h-4 group-hover:rotate-3 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
</button>
<div className="h-3 w-px bg-white/20 group-hover/search:bg-white/40 transition-colors duration-500"></div>
<button aria-label="Guests" className="text-white/70 hover:text-[#C8A96A] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none flex items-center justify-center group">
<svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</button>
<div className="h-3 w-px bg-white/20 group-hover/search:bg-white/40 transition-colors duration-500"></div>
<button aria-label="Search" className="bg-[#C8A96A] text-[#1F3E3D] p-1.5 rounded-full hover:bg-white hover:scale-110 active:scale-95 hover:shadow-[0_0_15px_rgba(200,169,106,0.6)] transition-all duration-300 focus:outline-none group">
<svg className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</button>
</div>

<div className="justify-self-end flex items-center gap-2 sm:gap-4 lg:gap-8">
<nav className="hidden lg:flex items-center gap-6">

<div className="relative group">
<button className="flex items-center gap-1.5 text-[11px] font-light uppercase tracking-widest text-white/80 hover:text-white transition-colors py-2 focus:outline-none relative after:absolute after:bottom-1 after:left-0 after:w-full after:h-px after:bg-[#C8A96A] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-right group-hover:after:origin-left">
                            Destinations
                            <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="absolute right-0 top-full mt-2 w-48 bg-[#0B101A]/95 backdrop-blur-md border border-white/10 rounded-sm py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-300 shadow-2xl z-50">
<a className="block px-4 py-2.5 text-[11px] font-light uppercase tracking-widest text-white/70 hover:text-[#C8A96A] hover:bg-white/5 hover:pl-6 transition-all duration-300" href="#">Europe</a>
<a className="block px-4 py-2.5 text-[11px] font-light uppercase tracking-widest text-white/70 hover:text-[#C8A96A] hover:bg-white/5 hover:pl-6 transition-all duration-300" href="#">Latin America</a>
<a className="block px-4 py-2.5 text-[11px] font-light uppercase tracking-widest text-white/70 hover:text-[#C8A96A] hover:bg-white/5 hover:pl-6 transition-all duration-300" href="#">Asia</a>
<a className="block px-4 py-2.5 text-[11px] font-light uppercase tracking-widest text-white/70 hover:text-[#C8A96A] hover:bg-white/5 hover:pl-6 transition-all duration-300" href="#">Africa</a>
</div>
</div>

<div className="relative group">
<button className="flex items-center gap-1.5 text-[11px] font-light uppercase tracking-widest text-white/80 hover:text-white transition-colors py-2 focus:outline-none relative after:absolute after:bottom-1 after:left-0 after:w-full after:h-px after:bg-[#C8A96A] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-right group-hover:after:origin-left">
                            Hotels
                            <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="absolute right-0 top-full mt-2 w-48 bg-[#0B101A]/95 backdrop-blur-md border border-white/10 rounded-sm py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-300 shadow-2xl z-50">
<a className="block px-4 py-2.5 text-[11px] font-light uppercase tracking-widest text-white/70 hover:text-[#C8A96A] hover:bg-white/5 hover:pl-6 transition-all duration-300" href="#">Luxury Resorts</a>
<a className="block px-4 py-2.5 text-[11px] font-light uppercase tracking-widest text-white/70 hover:text-[#C8A96A] hover:bg-white/5 hover:pl-6 transition-all duration-300" href="#">Boutique Villas</a>
<a className="block px-4 py-2.5 text-[11px] font-light uppercase tracking-widest text-white/70 hover:text-[#C8A96A] hover:bg-white/5 hover:pl-6 transition-all duration-300" href="#">Private Islands</a>
</div>
</div>
</nav>
<div className="flex items-center gap-2 sm:gap-4 lg:gap-5 lg:border-l lg:border-white/20 lg:pl-5">

<div className="relative group hidden sm:block">
<button className="flex items-center gap-1.5 text-[11px] font-light uppercase tracking-widest text-white/80 hover:text-white transition-colors py-2 focus:outline-none group-hover:text-white">
                            EN
                            <svg className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</button>
<div className="absolute right-0 top-full mt-2 w-32 bg-[#0B101A]/95 backdrop-blur-md border border-white/10 rounded-sm py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-300 shadow-2xl z-50">
<a className="block px-4 py-2.5 text-[11px] font-light uppercase tracking-widest text-[#C8A96A] bg-white/5 border-l-2 border-[#C8A96A]" href="#">English</a>
<a className="block px-4 py-2.5 text-[11px] font-light uppercase tracking-widest text-white/70 hover:text-[#C8A96A] hover:bg-white/5 hover:pl-5 transition-all duration-300 border-l-2 border-transparent hover:border-[#C8A96A]/50" href="#">Español</a>
</div>
</div>
<a className="hidden sm:block text-[11px] font-light uppercase tracking-widest text-white/80 hover:text-white transition-all duration-300 relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-px after:bg-[#C8A96A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-right hover:after:origin-left hover:-translate-y-0.5" href="#">Login</a>

<button className="lg:hidden text-white/80 hover:text-[#C8A96A] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</div>
</header>

<div className="pointer-events-auto max-w-2xl absolute left-4 sm:left-6 md:left-24" style={{top: 'clamp(18%, 22%, 28%)'}}>
<h1 className="leading-[1.1] sm:text-4xl md:text-6xl text-3xl font-normal text-white tracking-tight drop-shadow-md">Beyond this <span className="font-light italic">Door</span> lies<br/>Portalra Escape</h1>
</div>

<div className="flex flex-col xl:flex-row pointer-events-auto text-white w-full gap-x-12 gap-y-6 sm:gap-y-8 items-end justify-between" style={{paddingBottom: 'clamp(1rem, 4vh, 4rem)'}}>
<div className="flex flex-col sm:gap-6 shrink-0 sm:pb-4 max-w-md pb-2 translate-y-4 gap-x-4 gap-y-4">
<div className="flex items-center gap-3">
<div className="h-px w-8 bg-[#C8A96A]"></div>
<span className="text-[#C8A96A] text-xs font-oswald uppercase tracking-widest">Portalra Highlights</span>
</div>
<p className="text-base md:text-xl text-white/90 leading-relaxed drop-shadow-sm font-light hidden sm:block">
                    Unveil extraordinary dimensions of luxury travel. curates hidden gems and private sanctuaries
                    tailored exclusively for the modern explorer.
                </p>
<button className="bg-[#C8A96A] text-[#1F3E3D] px-6 sm:px-8 py-3 sm:py-4 rounded-sm text-sm font-medium hover:bg-white hover:shadow-[0_6px_20px_rgba(255,255,255,0.2)] transition-all duration-300 w-max shadow-lg flex items-center gap-3 group">
                    Unlock Experiences
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="flex xl:w-[700px] overflow-x-auto hide-scrollbar gap-4 sm:gap-6 snap-x snap-mandatory -mx-2 w-full pt-2 sm:pt-4 pr-2 pb-2 sm:pb-4 pl-2">

<div className="snap-start shrink-0 w-[200px] sm:w-[260px] md:w-[300px] h-[160px] sm:h-[190px] md:h-[220px] rounded-2xl overflow-hidden relative group cursor-pointer shadow-2xl border border-white/10">
<img alt="Alpine Silence" className="transition-transform duration-[1.5s] ease-out group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1759624238836-d229b3ba3bf6?w=800&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#1F3E3D]/90 via-[#1F3E3D]/20 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-black/40 opacity-0 border-white/10 border rounded-full p-2 absolute top-3 right-3 sm:top-4 sm:right-4 backdrop-blur-md translate-y-2">
<svg className="text-white w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</div>
<div className="absolute bottom-4 left-4 right-4 transform transition-transform duration-500 group-hover:-translate-y-2">
<h3 className="text-xl sm:text-2xl font-oswald uppercase tracking-tight text-white mb-1 sm:mb-2">Alpine Silence</h3>
<p className="text-xs sm:text-sm text-white/70 font-light mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden sm:block">
                            Exclusive mountain lodges surrounded by untouched peaks.</p>
<div className="flex items-center gap-2 text-[#C8A96A] text-xs font-oswald tracking-widest uppercase">
<span>Discover</span>
<div className="h-px w-4 bg-[#C8A96A] group-hover:w-8 transition-all duration-500"></div>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[200px] sm:w-[260px] md:w-[300px] h-[160px] sm:h-[190px] md:h-[220px] rounded-2xl overflow-hidden relative group cursor-pointer shadow-2xl border border-white/10">
<img alt="Desert Mirage" className="transition-transform duration-[1.5s] ease-out group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1554089794-0d618f479258?w=800&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#1F3E3D]/90 via-[#1F3E3D]/20 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/40 backdrop-blur-md rounded-full p-2 border border-white/10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<svg className="w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
<div className="absolute bottom-4 left-4 right-4 transform transition-transform duration-500 group-hover:-translate-y-2">
<h3 className="text-xl sm:text-2xl font-oswald uppercase tracking-tight text-white mb-1 sm:mb-2">Desert Mirage</h3>
<p className="text-xs sm:text-sm text-white/70 font-light mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden sm:block">
                            Luxury tented camps under a canopy of infinite stars.</p>
<div className="flex items-center gap-2 text-[#C8A96A] text-xs font-oswald tracking-widest uppercase">
<span>Discover</span>
<div className="h-px w-4 bg-[#C8A96A] group-hover:w-8 transition-all duration-500"></div>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[200px] sm:w-[260px] md:w-[300px] h-[160px] sm:h-[190px] md:h-[220px] rounded-2xl overflow-hidden relative group cursor-pointer shadow-2xl border border-white/10">
<img alt="Coastal Haven" className="transition-transform duration-[1.5s] ease-out group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1671547199419-60db7d9578bb?w=800&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#1F3E3D]/90 via-[#1F3E3D]/20 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/40 backdrop-blur-md rounded-full p-2 border border-white/10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<svg className="w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
<div className="absolute bottom-4 left-4 right-4 transform transition-transform duration-500 group-hover:-translate-y-2">
<h3 className="text-xl sm:text-2xl font-oswald uppercase tracking-tight text-white mb-1 sm:mb-2">Coastal Haven</h3>
<p className="text-xs sm:text-sm text-white/70 font-light mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden sm:block">
                            Private island villas where the ocean meets the sky.</p>
<div className="flex items-center gap-2 text-[#C8A96A] text-xs font-oswald tracking-widest uppercase">
<span>Discover</span>
<div className="h-px w-4 bg-[#C8A96A] group-hover:w-8 transition-all duration-500"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="pointer-events-none z-[100] will-change-[opacity] bg-[#F4F4F5] opacity-0 absolute top-0 right-0 bottom-0 left-0" id="whiteout"></div>
</div>
</div>

<div className="relative z-20 text-black bg-[#F4F4F5] w-full" id="hidden-gems-section" style={{height: '500vh'}}>
<div className="sticky flex flex-col overflow-hidden w-full h-screen top-0 justify-center" style={{paddingTop: 'clamp(3rem, 8vh, 6rem)', paddingBottom: 'clamp(2rem, 5vh, 4rem)'}}>
<main className="flex flex-col w-full" style={{gap: 'clamp(1.5rem, 3vh, 2.5rem)'}}>

<div className="flex flex-col md:flex-row md:items-end md:pr-12 md:pl-12 shrink-0 pr-6 pl-6 items-start justify-between gap-4 md:gap-0">
<div className="md:w-72 lg:w-80 leading-relaxed order-2 md:order-1 hidden sm:block text-xs font-light text-[#1F3E3D]/70 w-full">Discover exclusive Portalra Escape packages and curated itineraries designed for the elite explorer. From luxurious private resorts to hidden cultural treasures, our travel artisans have handpicked the world's most breathtaking destinations.</div>
<h2 className="leading-[0.95] order-1 uppercase md:order-2 md:w-3/5 text-[#1F3E3D] tracking-tight font-oswald" style={{fontSize: 'clamp(2rem, 6vw, 7rem)'}}>Curated Portalra<br className="hidden md:block"/> Escapes Just<br className="hidden md:block"/> For You</h2>
<div className="hidden md:block text-xs uppercase tracking-widest text-[#1F3E3D]/40 order-3 mb-1 whitespace-nowrap">
                Scroll to explore
            </div>
</div>

<div className="flex will-change-transform pl-6 md:pl-12" id="horizontal-scroll-container" style={{gap: 'clamp(0.75rem, 1.5vw, 1.25rem)', paddingRight: '1.5rem', paddingBottom: '1rem', width: 'max-content'}}>

<div className="relative rounded-2xl overflow-hidden group cursor-pointer border border-black/5 shadow-xl bg-[#1A1A1A]" style={{width: 'clamp(200px, 55vw, 300px)', height: 'clamp(320px, 45vh, 480px)', flexShrink: '0'}}>
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&amp'}}></div>
<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-90"></div>
<div className="absolute top-4 left-4 z-20">
<div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[9px] font-normal uppercase tracking-widest text-white/90 shadow-sm">Maldives</div>
</div>
<div className="absolute top-4 right-4 z-20 translate-x-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
<button className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/50 transition-all">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<div className="absolute bottom-4 left-4 right-4 z-20">
<div className="flex justify-between items-end transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[44px]">
<div className="flex flex-col gap-1">
<div className="text-white text-base font-normal tracking-tight drop-shadow-sm">Crystal Clear Waters</div>
<div className="flex items-center gap-1 text-white/70 text-xs font-light">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                Indian Ocean
                            </div>
</div>
<div className="flex flex-col items-end gap-0.5">
<div className="text-white/50 text-[9px] uppercase tracking-widest font-normal">From</div>
<div className="text-white text-sm font-normal tracking-tight drop-shadow-sm">€2,500</div>
</div>
</div>
<div className="absolute left-0 right-0 bottom-0 translate-y-4 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:opacity-100">
<button className="w-full bg-white text-[#1F3E3D] py-2.5 rounded-xl text-xs font-normal flex items-center justify-center gap-1.5 hover:bg-[#C8A96A] transition-colors shadow-lg">
                            View Escape Details
                            <svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden group cursor-pointer border border-black/5 shadow-xl bg-[#1A1A1A]" style={{width: 'clamp(200px, 55vw, 300px)', height: 'clamp(320px, 45vh, 480px)', flexShrink: '0'}}>
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&amp'}}></div>
<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-90"></div>
<div className="absolute top-4 left-4 z-20">
<div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[9px] font-normal uppercase tracking-widest text-white/90 shadow-sm">Greece</div>
</div>
<div className="absolute top-4 right-4 z-20 translate-x-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
<button className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/50 transition-all">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<div className="absolute bottom-4 left-4 right-4 z-20">
<div className="flex justify-between items-end transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[44px]">
<div className="flex flex-col gap-1">
<div className="text-white text-base font-normal tracking-tight drop-shadow-sm">Aegean Sunset</div>
<div className="flex items-center gap-1 text-white/70 text-xs font-light">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                Santorini, Greece
                            </div>
</div>
<div className="flex flex-col items-end gap-0.5">
<div className="text-white/50 text-[9px] uppercase tracking-widest font-normal">From</div>
<div className="text-white text-sm font-normal tracking-tight drop-shadow-sm">€1,800</div>
</div>
</div>
<div className="absolute left-0 right-0 bottom-0 translate-y-4 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:opacity-100">
<button className="w-full bg-white text-[#1F3E3D] py-2.5 rounded-xl text-xs font-normal flex items-center justify-center gap-1.5 hover:bg-[#C8A96A] transition-colors shadow-lg">
                            View Escape Details
                            <svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden group cursor-pointer border border-black/5 shadow-xl bg-[#1A1A1A]" style={{width: 'clamp(200px, 55vw, 300px)', height: 'clamp(320px, 45vh, 480px)', flexShrink: '0'}}>
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&amp'}}></div>
<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-90"></div>
<div className="absolute top-4 left-4 z-20">
<div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[9px] font-normal uppercase tracking-widest text-white/90 shadow-sm">Indonesia</div>
</div>
<div className="absolute top-4 right-4 z-20 translate-x-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
<button className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/50 transition-all">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<div className="absolute bottom-4 left-4 right-4 z-20">
<div className="flex justify-between items-end transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[44px]">
<div className="flex flex-col gap-1">
<div className="text-white text-base font-normal tracking-tight drop-shadow-sm">Tropical Paradise</div>
<div className="flex items-center gap-1 text-white/70 text-xs font-light">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                Bali, Indonesia
                            </div>
</div>
<div className="flex flex-col items-end gap-0.5">
<div className="text-white/50 text-[9px] uppercase tracking-widest font-normal">From</div>
<div className="text-white text-sm font-normal tracking-tight drop-shadow-sm">€1,200</div>
</div>
</div>
<div className="absolute left-0 right-0 bottom-0 translate-y-4 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:opacity-100">
<button className="w-full bg-white text-[#1F3E3D] py-2.5 rounded-xl text-xs font-normal flex items-center justify-center gap-1.5 hover:bg-[#C8A96A] transition-colors shadow-lg">
                            View Escape Details
                            <svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden group cursor-pointer border border-black/5 shadow-xl bg-[#1A1A1A]" style={{width: 'clamp(200px, 55vw, 300px)', height: 'clamp(320px, 45vh, 480px)', flexShrink: '0'}}>
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&amp'}}></div>
<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-90"></div>
<div className="absolute top-4 left-4 z-20">
<div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[9px] font-normal uppercase tracking-widest text-white/90 shadow-sm">Switzerland</div>
</div>
<div className="absolute top-4 right-4 z-20 translate-x-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
<button className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/50 transition-all">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<div className="absolute bottom-4 left-4 right-4 z-20">
<div className="flex justify-between items-end transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[44px]">
<div className="flex flex-col gap-1">
<div className="text-white text-base font-normal tracking-tight drop-shadow-sm">Alpine Retreat</div>
<div className="flex items-center gap-1 text-white/70 text-xs font-light">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                Zermatt, Switzerland
                            </div>
</div>
<div className="flex flex-col items-end gap-0.5">
<div className="text-white/50 text-[9px] uppercase tracking-widest font-normal">From</div>
<div className="text-white text-sm font-normal tracking-tight drop-shadow-sm">€3,000</div>
</div>
</div>
<div className="absolute left-0 right-0 bottom-0 translate-y-4 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:opacity-100">
<button className="w-full bg-white text-[#1F3E3D] py-2.5 rounded-xl text-xs font-normal flex items-center justify-center gap-1.5 hover:bg-[#C8A96A] transition-colors shadow-lg">
                            View Escape Details
                            <svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden group cursor-pointer border border-black/5 shadow-xl bg-[#1A1A1A]" style={{width: 'clamp(200px, 55vw, 300px)', height: 'clamp(320px, 45vh, 480px)', flexShrink: '0'}}>
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&amp'}}></div>
<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-90"></div>
<div className="absolute top-4 left-4 z-20">
<div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[9px] font-normal uppercase tracking-widest text-white/90 shadow-sm">Japan</div>
</div>
<div className="absolute top-4 right-4 z-20 translate-x-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
<button className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/50 transition-all">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<div className="absolute bottom-4 left-4 right-4 z-20">
<div className="flex justify-between items-end transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[44px]">
<div className="flex flex-col gap-1">
<div className="text-white text-base font-normal tracking-tight drop-shadow-sm">Cultural Heritage</div>
<div className="flex items-center gap-1 text-white/70 text-xs font-light">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                Kyoto, Japan
                            </div>
</div>
<div className="flex flex-col items-end gap-0.5">
<div className="text-white/50 text-[9px] uppercase tracking-widest font-normal">From</div>
<div className="text-white text-sm font-normal tracking-tight drop-shadow-sm">€2,100</div>
</div>
</div>
<div className="absolute left-0 right-0 bottom-0 translate-y-4 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:opacity-100">
<button className="w-full bg-white text-[#1F3E3D] py-2.5 rounded-xl text-xs font-normal flex items-center justify-center gap-1.5 hover:bg-[#C8A96A] transition-colors shadow-lg">
                            View Escape Details
                            <svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden group cursor-pointer border border-black/5 shadow-xl bg-[#1A1A1A]" style={{width: 'clamp(200px, 55vw, 300px)', height: 'clamp(320px, 45vh, 480px)', flexShrink: '0'}}>
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&amp'}}></div>
<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-90"></div>
<div className="absolute top-4 left-4 z-20">
<div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[9px] font-normal uppercase tracking-widest text-white/90 shadow-sm">UAE</div>
</div>
<div className="absolute top-4 right-4 z-20 translate-x-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
<button className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/50 transition-all">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<div className="absolute bottom-4 left-4 right-4 z-20">
<div className="flex justify-between items-end transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[44px]">
<div className="flex flex-col gap-1">
<div className="text-white text-base font-normal tracking-tight drop-shadow-sm">Luxury Oasis</div>
<div className="flex items-center gap-1 text-white/70 text-xs font-light">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                Dubai, UAE
                            </div>
</div>
<div className="flex flex-col items-end gap-0.5">
<div className="text-white/50 text-[9px] uppercase tracking-widest font-normal">From</div>
<div className="text-white text-sm font-normal tracking-tight drop-shadow-sm">€2,800</div>
</div>
</div>
<div className="absolute left-0 right-0 bottom-0 translate-y-4 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:opacity-100">
<button className="w-full bg-white text-[#1F3E3D] py-2.5 rounded-xl text-xs font-normal flex items-center justify-center gap-1.5 hover:bg-[#C8A96A] transition-colors shadow-lg">
                            View Escape Details
                            <svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden group cursor-pointer border border-black/5 shadow-xl bg-[#1A1A1A]" style={{width: 'clamp(200px, 55vw, 300px)', height: 'clamp(320px, 45vh, 480px)', flexShrink: '0'}}>
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&amp'}}></div>
<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-90"></div>
<div className="absolute top-4 left-4 z-20">
<div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[9px] font-normal uppercase tracking-widest text-white/90 shadow-sm">Peru</div>
</div>
<div className="absolute top-4 right-4 z-20 translate-x-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
<button className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/50 transition-all">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<div className="absolute bottom-4 left-4 right-4 z-20">
<div className="flex justify-between items-end transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[44px]">
<div className="flex flex-col gap-1">
<div className="text-white text-base font-normal tracking-tight drop-shadow-sm">Ancient Wonders</div>
<div className="flex items-center gap-1 text-white/70 text-xs font-light">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                Andes, Peru
                            </div>
</div>
<div className="flex flex-col items-end gap-0.5">
<div className="text-white/50 text-[9px] uppercase tracking-widest font-normal">From</div>
<div className="text-white text-sm font-normal tracking-tight drop-shadow-sm">€1,600</div>
</div>
</div>
<div className="absolute left-0 right-0 bottom-0 translate-y-4 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:opacity-100">
<button className="w-full bg-white text-[#1F3E3D] py-2.5 rounded-xl text-xs font-normal flex items-center justify-center gap-1.5 hover:bg-[#C8A96A] transition-colors shadow-lg">
                            View Escape Details
                            <svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden group cursor-pointer border border-black/5 shadow-xl bg-[#1A1A1A]" style={{width: 'clamp(200px, 55vw, 300px)', height: 'clamp(320px, 45vh, 480px)', flexShrink: '0'}}>
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&amp'}}></div>
<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-90"></div>
<div className="absolute top-4 left-4 z-20">
<div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[9px] font-normal uppercase tracking-widest text-white/90 shadow-sm">Italy</div>
</div>
<div className="absolute top-4 right-4 z-20 translate-x-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
<button className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/50 transition-all">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<div className="absolute bottom-4 left-4 right-4 z-20">
<div className="flex justify-between items-end transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[44px]">
<div className="flex flex-col gap-1">
<div className="text-white text-base font-normal tracking-tight drop-shadow-sm">Mediterranean Charm</div>
<div className="flex items-center gap-1 text-white/70 text-xs font-light">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                Campania, Italy
                            </div>
</div>
<div className="flex flex-col items-end gap-0.5">
<div className="text-white/50 text-[9px] uppercase tracking-widest font-normal">From</div>
<div className="text-white text-sm font-normal tracking-tight drop-shadow-sm">€2,400</div>
</div>
</div>
<div className="absolute left-0 right-0 bottom-0 translate-y-4 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:opacity-100">
<button className="w-full bg-white text-[#1F3E3D] py-2.5 rounded-xl text-xs font-normal flex items-center justify-center gap-1.5 hover:bg-[#C8A96A] transition-colors shadow-lg">
                            View Escape Details
                            <svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden group cursor-pointer border border-black/5 shadow-xl bg-[#1A1A1A]" style={{width: 'clamp(200px, 55vw, 300px)', height: 'clamp(320px, 45vh, 480px)', flexShrink: '0'}}>
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&amp'}}></div>
<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-90"></div>
<div className="absolute top-4 left-4 z-20">
<div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[9px] font-normal uppercase tracking-widest text-white/90 shadow-sm">Tanzania</div>
</div>
<div className="absolute top-4 right-4 z-20 translate-x-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
<button className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/50 transition-all">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<div className="absolute bottom-4 left-4 right-4 z-20">
<div className="flex justify-between items-end transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[44px]">
<div className="flex flex-col gap-1">
<div className="text-white text-base font-normal tracking-tight drop-shadow-sm">Safari Adventure</div>
<div className="flex items-center gap-1 text-white/70 text-xs font-light">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                Serengeti, Tanzania
                            </div>
</div>
<div className="flex flex-col items-end gap-0.5">
<div className="text-white/50 text-[9px] uppercase tracking-widest font-normal">From</div>
<div className="text-white text-sm font-normal tracking-tight drop-shadow-sm">€3,500</div>
</div>
</div>
<div className="absolute left-0 right-0 bottom-0 translate-y-4 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:opacity-100">
<button className="w-full bg-white text-[#1F3E3D] py-2.5 rounded-xl text-xs font-normal flex items-center justify-center gap-1.5 hover:bg-[#C8A96A] transition-colors shadow-lg">
                            View Escape Details
                            <svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden group cursor-pointer border border-black/5 shadow-xl bg-[#1A1A1A]" style={{width: 'clamp(200px, 55vw, 300px)', height: 'clamp(320px, 45vh, 480px)', flexShrink: '0'}}>
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1589394815804-964ce0fa5894?q=80&amp'}}></div>
<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-90"></div>
<div className="absolute top-4 left-4 z-20">
<div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[9px] font-normal uppercase tracking-widest text-white/90 shadow-sm">French Polynesia</div>
</div>
<div className="absolute top-4 right-4 z-20 translate-x-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
<button className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/50 transition-all">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<div className="absolute bottom-4 left-4 right-4 z-20">
<div className="flex justify-between items-end transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[44px]">
<div className="flex flex-col gap-1">
<div className="text-white text-base font-normal tracking-tight drop-shadow-sm">Overwater Luxury</div>
<div className="flex items-center gap-1 text-white/70 text-xs font-light">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                Bora Bora
                            </div>
</div>
<div className="flex flex-col items-end gap-0.5">
<div className="text-white/50 text-[9px] uppercase tracking-widest font-normal">From</div>
<div className="text-white text-sm font-normal tracking-tight drop-shadow-sm">€4,200</div>
</div>
</div>
<div className="absolute left-0 right-0 bottom-0 translate-y-4 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:opacity-100">
<button className="w-full bg-white text-[#1F3E3D] py-2.5 rounded-xl text-xs font-normal flex items-center justify-center gap-1.5 hover:bg-[#C8A96A] transition-colors shadow-lg">
                            View Escape Details
                            <svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</main>
</div>

</div><section className="flex flex-col lg:gap-y-24 bg-center bg-[#0B101A] w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/09fd4820-ff21-47a8-b915-20b74cb1a37a_3840w.png)] bg-cover z-20 border-white/5 border-t pt-20 pb-24 relative scale-100 gap-x-y-16 gap-y-16">

<div className="flex flex-col lg:flex-row gap-12 lg:gap-20 w-full max-w-7xl mx-auto px-6 md:px-12 items-center">

<div className="w-full lg:w-[45%] flex flex-col gap-8 pt-2 shrink-0 z-10">
<div className="flex items-center gap-3">
<div className="h-px w-8 bg-[#C8A96A]"></div>
<span className="text-[#C8A96A] text-xs font-oswald uppercase tracking-widest">The Portalra Promise</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-white font-oswald uppercase">
                Step through to <span className="text-[#C8A96A]">unrivaled</span> luxury
            </h2>
<p className="text-sm md:text-base leading-relaxed font-light text-white/70 text-left">
                Portalra Escape redefines the art of travel. We don't just book trips; we unlock hidden dimensions of the world's most coveted destinations. From private island buyouts to exclusive cultural immersions, our dedicated artisans craft bespoke journeys that resonate with your deepest desires.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mt-2">
<button className="bg-[#C8A96A] text-[#1F3E3D] px-8 py-3.5 text-sm font-medium rounded-sm w-fit hover:bg-white transition-all duration-300 shadow-[0_4px_14px_rgba(200,169,106,0.15)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.2)] hover:-translate-y-0.5">
                    Begin Your Escape
                </button>
<button className="bg-transparent border border-white/20 text-white px-8 py-3.5 text-sm font-medium rounded-sm w-fit hover:border-[#C8A96A] hover:text-[#C8A96A] transition-all duration-300">
                    View Itineraries
                </button>
</div>

<div className="grid grid-cols-2 gap-6 mt-4 border-t border-white/10 pt-8">
<div className="flex flex-col gap-2">
<span className="text-3xl font-oswald text-[#C8A96A]">500+</span>
<span className="text-xs text-white/50 uppercase tracking-widest font-light">Curated Destinations</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-3xl font-oswald text-[#C8A96A]">24/7</span>
<span className="text-xs text-white/50 uppercase tracking-widest font-light">Dedicated Concierge</span>
</div>
</div>
</div>

<div className="lg:w-[55%] md:h-[60vh] lg:h-[70vh] overflow-hidden shrink-0 group w-full h-[50vh] rounded-3xl relative shadow-[0_0_40px_rgba(0,0,0,0.5)]">
<div className="absolute inset-0 bg-gradient-to-tr from-[#1F3E3D]/40 via-transparent to-black/20 z-10 pointer-events-none transition-colors duration-700 group-hover:from-transparent"></div>
<div className="absolute inset-0 border border-white/10 z-20 pointer-events-none rounded-sm"></div>
<img alt="Luxury Villa with Ocean View" className="object-center group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] w-full h-full object-cover ring-teal-50 rounded-3xl" src="https://images.unsplash.com/photo-1588075147961-e0e9670e98aa?w=1600&amp;q=80"/>

<div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20 bg-[#0B101A]/80 backdrop-blur-md border border-[#C8A96A]/30 p-5 rounded-sm max-w-[220px] shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<div className="flex items-center gap-2 mb-2">
<svg className="w-4 h-4 text-[#C8A96A]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
<span className="text-xs font-oswald tracking-widest uppercase text-white">Private Estates</span>
</div>
<p className="text-[11px] text-white/70 font-light leading-relaxed">Access ultra-exclusive properties and hidden sanctuaries across the globe.</p>
</div>
</div>
</div>

<div className="md:px-12 flex flex-col w-full max-w-7xl mt-8 mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col sm:flex-row sm:items-end justify-between w-full border-b border-white/10 pb-6 gap-4">
<h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-white tracking-tight font-oswald uppercase">
                Transcend the Ordinary
            </h2>
<div className="flex items-center gap-2 text-[#C8A96A] text-sm font-light">
<span className="">Scroll to reveal</span>
<svg className="w-4 h-4 animate-bounce" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</div>
<div className="w-full relative" id="reveal-wrap-aura-emn3vciak2mjqsgcw">

<div className="md:text-4xl lg:text-5xl leading-snug text-2xl font-light text-white/10 tracking-tight text-left">
                Every Portalra itinerary is a masterpiece of logistics and imagination. We forge alliances with legendary hoteliers, elite aviators, and local custodians to guarantee absolute perfection. Elevate your perspective and step into a reality where your wildest travel aspirations materialize flawlessly.
            </div>

<div className="absolute top-0 left-0 text-2xl md:text-4xl lg:text-5xl leading-snug text-[#C8A96A] tracking-tight font-light text-left" id="reveal-text-aura-emn3vciak2mjqsgcw" style={{clipPath: 'inset(0px 100% 0px 0px)'}}>
                Every Portalra itinerary is a masterpiece of logistics and imagination. We forge alliances with legendary hoteliers, elite aviators, and local custodians to guarantee absolute perfection. Elevate your perspective and step into a reality where your wildest travel aspirations materialize flawlessly.
            </div>
</div>
</div>

</section><section className="md:py-16 overflow-hidden z-20 bg-[#F4F4F5] w-full pt-12 pb-12 relative" id="popular-destinations">
<div className="md:px-12 flex flex-col gap-12 md:gap-16 w-full pr-6 pl-6">

<div className="flex items-center gap-6 w-full fade-up-element transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-oswald uppercase tracking-tight text-[#1F3E3D] shrink-0">
                Popular Destinations
            </h2>
<div className="h-[1px] flex-1 bg-[#1F3E3D]/15 mt-2"></div>
</div>
<div className="relative w-full">

<div className="flex overflow-x-auto hide-scrollbar gap-8 snap-x snap-mandatory pb-4 md:pb-8 gap-x-8 gap-y-8" id="destinations-scroll-container">

<div className="flex flex-col gap-8 shrink-0 w-[85vw] md:w-[380px] snap-start fade-up-element transition-all duration-1000 delay-100 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
<div className="relative h-40 md:h-48 rounded-xl overflow-hidden group cursor-pointer shadow-[0_8px_30px_rgba(31,62,61,0.08)]">
<img alt="Europe Landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1F3E3D]/90 via-[#1F3E3D]/40 to-transparent mix-blend-multiply"></div>
<div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-transparent"></div>
<div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
<h3 className="text-3xl md:text-4xl font-oswald text-white tracking-tight drop-shadow-md group-hover:-translate-y-1 transition-transform duration-500">Europe</h3>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full border border-white/60 text-white text-xs font-medium tracking-wide backdrop-blur-sm bg-black/10 hover:bg-[#C8A96A] hover:border-[#C8A96A] hover:text-[#1F3E3D] transition-all duration-300">All Adventures</button>
<button className="px-4 py-1.5 rounded-full border border-white/60 text-white text-xs font-medium tracking-wide backdrop-blur-sm bg-black/10 hover:bg-[#C8A96A] hover:border-[#C8A96A] hover:text-[#1F3E3D] transition-all duration-300">Deals</button>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-y-4 gap-x-6 px-2">
<div className="flex flex-col gap-3">
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Japan</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">South Africa</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Peru</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Canada</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Sri Lanka</span></a>
</div>
<div className="flex flex-col gap-3">
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Finland</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Norway</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">The Arctic</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Mexico</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Great Britain &amp; UK</span></a>
</div>
</div>
</div>

<div className="flex flex-col gap-8 shrink-0 w-[85vw] md:w-[380px] snap-start fade-up-element transition-all duration-1000 delay-200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
<div className="relative h-40 md:h-48 rounded-xl overflow-hidden group cursor-pointer shadow-[0_8px_30px_rgba(31,62,61,0.08)]">
<img alt="Latin America Landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1F3E3D]/90 via-[#1F3E3D]/40 to-transparent mix-blend-multiply"></div>
<div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-transparent"></div>
<div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
<h3 className="text-3xl md:text-4xl font-oswald text-white tracking-tight drop-shadow-md group-hover:-translate-y-1 transition-transform duration-500">Latin America</h3>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full border border-white/60 text-white text-xs font-medium tracking-wide backdrop-blur-sm bg-black/10 hover:bg-[#C8A96A] hover:border-[#C8A96A] hover:text-[#1F3E3D] transition-all duration-300">All Adventures</button>
<button className="px-4 py-1.5 rounded-full border border-white/60 text-white text-xs font-medium tracking-wide backdrop-blur-sm bg-black/10 hover:bg-[#C8A96A] hover:border-[#C8A96A] hover:text-[#1F3E3D] transition-all duration-300">Deals</button>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-y-4 gap-x-6 px-2">
<div className="flex flex-col gap-3">
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Greece</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">South Korea</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Eastern Europe</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">USA</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Bhutan</span></a>
</div>
<div className="flex flex-col gap-3">
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Tuscany</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Chile</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Ireland</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Vietnam</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Portugal</span></a>
</div>
</div>
</div>

<div className="flex flex-col gap-8 shrink-0 w-[85vw] md:w-[380px] snap-start fade-up-element transition-all duration-1000 delay-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
<div className="relative h-40 md:h-48 rounded-xl overflow-hidden group cursor-pointer shadow-[0_8px_30px_rgba(31,62,61,0.08)]">
<img alt="North America Landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1F3E3D]/90 via-[#1F3E3D]/40 to-transparent mix-blend-multiply"></div>
<div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-transparent"></div>
<div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
<h3 className="text-3xl md:text-4xl font-oswald text-white tracking-tight drop-shadow-md group-hover:-translate-y-1 transition-transform duration-500">North America</h3>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full border border-white/60 text-white text-xs font-medium tracking-wide backdrop-blur-sm bg-black/10 hover:bg-[#C8A96A] hover:border-[#C8A96A] hover:text-[#1F3E3D] transition-all duration-300">All Adventures</button>
<button className="px-4 py-1.5 rounded-full border border-white/60 text-white text-xs font-medium tracking-wide backdrop-blur-sm bg-black/10 hover:bg-[#C8A96A] hover:border-[#C8A96A] hover:text-[#1F3E3D] transition-all duration-300">Deals</button>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-y-4 gap-x-6 px-2">
<div className="flex flex-col gap-3">
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Switzerland</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Panama</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Spain</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Alaska</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Amalfi Coast</span></a>
</div>
<div className="flex flex-col gap-3">
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Turkey</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Poland</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Kenya</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Ecuador</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Colombia</span></a>
</div>
</div>
</div>

<div className="flex flex-col gap-8 shrink-0 w-[85vw] md:w-[380px] snap-start fade-up-element transition-all duration-1000 delay-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
<div className="relative h-40 md:h-48 rounded-xl overflow-hidden group cursor-pointer shadow-[0_8px_30px_rgba(31,62,61,0.08)]">
<img alt="Africa Landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#5A3A22]/90 via-[#5A3A22]/40 to-transparent mix-blend-multiply"></div>
<div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-transparent"></div>
<div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
<h3 className="text-3xl md:text-4xl font-oswald text-white tracking-tight drop-shadow-md group-hover:-translate-y-1 transition-transform duration-500">Africa</h3>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full border border-white/60 text-white text-xs font-medium tracking-wide backdrop-blur-sm bg-black/10 hover:bg-[#C8A96A] hover:border-[#C8A96A] hover:text-[#1F3E3D] transition-all duration-300">All Adventures</button>
<button className="px-4 py-1.5 rounded-full border border-white/60 text-white text-xs font-medium tracking-wide backdrop-blur-sm bg-black/10 hover:bg-[#C8A96A] hover:border-[#C8A96A] hover:text-[#1F3E3D] transition-all duration-300">Deals</button>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-y-4 gap-x-6 px-2">
<div className="flex flex-col gap-3">
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Southeast Asia</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Holy Land</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Great Barrier Reef</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Nepal</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Morocco</span></a>
</div>
<div className="flex flex-col gap-3">
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Italy</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Bali</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Argentina</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Costa Rica</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Netherlands</span></a>
</div>
</div>
</div>

<div className="flex flex-col gap-8 shrink-0 w-[85vw] md:w-[380px] snap-start fade-up-element transition-all duration-1000 delay-[500ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
<div className="relative h-40 md:h-48 rounded-xl overflow-hidden group cursor-pointer shadow-[0_8px_30px_rgba(31,62,61,0.08)]">
<img alt="Asia Landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1535139262971-c51845709a48?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1F3E3D]/90 via-[#1F3E3D]/40 to-transparent mix-blend-multiply"></div>
<div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-transparent"></div>
<div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
<h3 className="text-3xl md:text-4xl font-oswald text-white tracking-tight drop-shadow-md group-hover:-translate-y-1 transition-transform duration-500">Asia</h3>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full border border-white/60 text-white text-xs font-medium tracking-wide backdrop-blur-sm bg-black/10 hover:bg-[#C8A96A] hover:border-[#C8A96A] hover:text-[#1F3E3D] transition-all duration-300">All Adventures</button>
<button className="px-4 py-1.5 rounded-full border border-white/60 text-white text-xs font-medium tracking-wide backdrop-blur-sm bg-black/10 hover:bg-[#C8A96A] hover:border-[#C8A96A] hover:text-[#1F3E3D] transition-all duration-300">Deals</button>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-y-4 gap-x-6 px-2">
<div className="flex flex-col gap-3">
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Iceland</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Indonesia</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Jordan</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Germany</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">New Zealand</span></a>
</div>
<div className="flex flex-col gap-3">
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">France</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Antarctica</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Portugal &amp; Spain</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Austria</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Egypt</span></a>
</div>
</div>
</div>

<div className="flex flex-col gap-8 shrink-0 w-[85vw] md:w-[380px] snap-start fade-up-element transition-all duration-1000 delay-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
<div className="relative h-40 md:h-48 rounded-xl overflow-hidden group cursor-pointer shadow-[0_8px_30px_rgba(31,62,61,0.08)]">
<img alt="Australia Landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#5A3A22]/90 via-[#5A3A22]/40 to-transparent mix-blend-multiply"></div>
<div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-transparent"></div>
<div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
<h3 className="text-3xl md:text-4xl font-oswald text-white tracking-tight drop-shadow-md group-hover:-translate-y-1 transition-transform duration-500">Australia/Oceania</h3>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full border border-white/60 text-white text-xs font-medium tracking-wide backdrop-blur-sm bg-black/10 hover:bg-[#C8A96A] hover:border-[#C8A96A] hover:text-[#1F3E3D] transition-all duration-300">All Adventures</button>
<button className="px-4 py-1.5 rounded-full border border-white/60 text-white text-xs font-medium tracking-wide backdrop-blur-sm bg-black/10 hover:bg-[#C8A96A] hover:border-[#C8A96A] hover:text-[#1F3E3D] transition-all duration-300">Deals</button>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-y-4 gap-x-6 px-2">
<div className="flex flex-col gap-3">
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">England</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">South America</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Greek Islands</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Tanzania</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Malaysia</span></a>
</div>
<div className="flex flex-col gap-3">
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Croatia</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Patagonia</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Sicily</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Israel</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">China</span></a>
</div>
</div>
</div>

<div className="flex flex-col gap-8 shrink-0 w-[85vw] md:w-[380px] snap-start fade-up-element transition-all duration-1000 delay-[700ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
<div className="relative h-40 md:h-48 rounded-xl overflow-hidden group cursor-pointer shadow-[0_8px_30px_rgba(31,62,61,0.08)]">
<img alt="Polar Landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1F3E3D]/90 via-[#1F3E3D]/40 to-transparent mix-blend-multiply"></div>
<div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-transparent"></div>
<div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
<h3 className="text-3xl md:text-4xl font-oswald text-white tracking-tight drop-shadow-md group-hover:-translate-y-1 transition-transform duration-500">Polar</h3>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full border border-white/60 text-white text-xs font-medium tracking-wide backdrop-blur-sm bg-black/10 hover:bg-[#C8A96A] hover:border-[#C8A96A] hover:text-[#1F3E3D] transition-all duration-300">All Adventures</button>
<button className="px-4 py-1.5 rounded-full border border-white/60 text-white text-xs font-medium tracking-wide backdrop-blur-sm bg-black/10 hover:bg-[#C8A96A] hover:border-[#C8A96A] hover:text-[#1F3E3D] transition-all duration-300">Deals</button>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-y-4 gap-x-6 px-2">
<div className="flex flex-col gap-3">
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Scandinavia</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Brazil</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Scotland</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Machu Picchu</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Grand Canyon</span></a>
</div>
<div className="flex flex-col gap-3">
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Cambodia</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">India</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Georgia</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Namibia</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Thailand</span></a>
<a className="group flex items-center gap-2 text-sm text-[#1F3E3D]/80 hover:text-[#1F3E3D] transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] scale-0 group-hover:scale-100 transition-transform origin-center shrink-0"></span><span className="group-hover:translate-x-1 transition-transform">Australia</span></a>
</div>
</div>
</div>
</div>

<div className="mt-6 md:mt-8 flex flex-col items-center justify-center gap-3 w-full fade-up-element transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
<div className="flex items-center gap-4 text-[#1F3E3D]/50">
<svg className="lucide lucide-chevron-left w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
<div className="w-48 md:w-80 h-1.5 bg-[#1F3E3D]/10 rounded-full relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-1/4 bg-[#C8A96A] rounded-full transition-all duration-75 ease-linear shadow-[0_0_10px_rgba(200,169,106,0.5)]" id="destinations-scrollbar-thumb" style={{left: '0%'}}></div>
</div>
<svg className="lucide lucide-chevron-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="flex items-center gap-2 mt-1">
<svg className="lucide lucide-mouse w-4 h-4 text-[#C8A96A] animate-bounce" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="7" width="14" x="5" y="2"></rect><path d="M12 6v4"></path></svg>
<span className="text-[10px] md:text-xs uppercase text-[#1F3E3D]/70 tracking-widest font-oswald">Slide to Explore</span>
</div>
</div>
</div>
</div>


</section><section className="w-full bg-[#1F3E3D] py-16 md:py-20 relative z-20 overflow-hidden border-t border-white/5">

<div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-bl from-[#C8A96A]/10 via-transparent to-transparent pointer-events-none mix-blend-screen"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 relative z-10">

<div className="flex flex-col gap-4 w-full lg:w-1/2 text-center lg:text-left">
<h2 className="font-oswald text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight text-white drop-shadow-sm">
                Unlock Exclusive Escapes
            </h2>
<p className="md:text-base lg:mx-0 leading-relaxed text-sm font-light text-white/70 max-w-xl mr-auto ml-auto">Join the Portalra Escape society to receive curated itineraries, early access to new destinations, and private member-only deals delivered directly to you.</p>
</div>

<div className="w-full lg:w-1/2 flex flex-col gap-5 items-center lg:items-end">
<form className="flex flex-col sm:flex-row w-full max-w-md lg:max-w-xl gap-3 relative group">
<div className="relative flex-1">
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-[#C8A96A] transition-colors duration-300" data-lucide="mail" strokeWidth="1.5"></i>
<input className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 pl-11 pr-5 py-3.5 rounded-sm text-sm focus:outline-none focus:border-[#C8A96A]/60 focus:bg-white/10 focus:ring-1 focus:ring-[#C8A96A]/60 transition-all duration-300 backdrop-blur-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]" placeholder="Enter your email address" required="" type="email"/>
</div>
<button className="bg-[#C8A96A] text-[#1F3E3D] px-8 py-3.5 rounded-sm font-medium text-sm whitespace-nowrap hover:bg-white transition-all duration-300 shadow-[0_4px_14px_rgba(200,169,106,0.15)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group/btn" type="submit">
                    Join Now
                    <i className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</form>
<p className="text-xs text-white/40 text-center lg:text-left w-full max-w-md lg:max-w-xl font-light">
                By subscribing, you agree to Portora Escape's <a className="text-white/60 hover:text-white underline decoration-white/20 hover:decoration-white/80 underline-offset-4 transition-all duration-300" href="#">Terms &amp; Conditions</a> and <a className="text-white/60 hover:text-white underline decoration-white/20 hover:decoration-white/80 underline-offset-4 transition-all duration-300" href="#">Privacy Policy</a>.
            </p>
</div>
</div>
</section><section className="md:py-24 z-20 font-inter bg-[#F4F4F5] w-full border-slate-200/50 border-t pt-16 pb-16 relative">
<div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 md:mb-14">
<h2 className="md:text-4xl lg:text-5xl uppercase text-3xl text-[#1F3E3D] tracking-tight font-oswald mb-4">Portalra Escape Spotlight</h2>
<p className="md:text-base leading-relaxed text-sm font-light text-slate-600 max-w-2xl">Discover what's happening in the world of Portalra Escape from the latest luxury travel insights to your exclusive member privileges.</p>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(31,62,61,0.04)] flex flex-col group border border-slate-200/60 hover:shadow-[0_12px_40px_rgba(31,62,61,0.08)] transition-all duration-500 hover:-translate-y-1">
<div className="relative h-48 md:h-52 overflow-hidden bg-slate-100">
<img alt="Exclusive Offers" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow relative bg-white">
<h3 className="font-oswald text-xl uppercase tracking-tight text-[#1F3E3D] mb-3">Exclusive Offers</h3>
<p className="text-sm text-slate-600 font-light leading-relaxed mb-6 flex-grow">
                    Unlock special rates on private villas and chartered yachts in the world's most sought-after destinations, including the Amalfi Coast and Santorini.
                </p>
<a className="text-[#C8A96A] font-normal text-sm mt-auto inline-flex items-center gap-1.5 hover:text-[#1F3E3D] transition-colors w-fit group/link" href="#">
                    View Offers
                    <i className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(31,62,61,0.04)] flex flex-col group border border-slate-200/60 hover:shadow-[0_12px_40px_rgba(31,62,61,0.08)] transition-all duration-500 hover:-translate-y-1">
<div className="relative h-48 md:h-52 overflow-hidden bg-slate-100">
<img alt="Portora Moments" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow relative bg-white">
<h3 className="uppercase text-xl text-[#1F3E3D] tracking-tight font-oswald mb-3">Portalra Moments</h3>
<p className="leading-relaxed flex-grow text-sm font-light text-slate-600 mb-6">
                    Immerse yourself in authentic luxury. Discover what curated, private travel truly feels like through our members' extraordinary journeys.
                </p>
<a className="text-[#C8A96A] font-normal text-sm mt-auto inline-flex items-center gap-1.5 hover:text-[#1F3E3D] transition-colors w-fit group/link" href="#">
                    Explore Moments
                    <i className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(31,62,61,0.04)] flex flex-col group border border-slate-200/60 hover:shadow-[0_12px_40px_rgba(31,62,61,0.08)] transition-all duration-500 hover:-translate-y-1">
<div className="relative h-48 md:h-52 overflow-hidden bg-slate-100">
<img alt="Private Retreats" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow relative bg-white">
<h3 className="font-oswald text-xl uppercase tracking-tight text-[#1F3E3D] mb-3">Private Retreats</h3>
<p className="text-sm text-slate-600 font-light leading-relaxed mb-6 flex-grow">
                    Experience curated seclusion and utmost privacy. Connect with yourself in the world's most serene and exclusive properties.
                </p>
<a className="text-[#C8A96A] font-normal text-sm mt-auto inline-flex items-center gap-1.5 hover:text-[#1F3E3D] transition-colors w-fit group/link" href="#">
                    Find Your Retreat
                    <i className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="flex flex-col gap-4 h-full lg:col-span-1 md:col-span-2">

<div className="bg-white rounded-r-xl rounded-l-sm border border-slate-200/60 border-l-4 border-l-[#1F3E3D]/10 flex flex-row lg:flex-col xl:flex-row items-center gap-5 p-5 md:p-6 shadow-[0_4px_20px_rgba(31,62,61,0.02)] hover:shadow-md hover:border-l-[#C8A96A] hover:-translate-y-0.5 transition-all duration-300 flex-1 group">
<div className="w-12 h-12 shrink-0 rounded-full border border-slate-100 text-[#1F3E3D]/70 flex items-center justify-center bg-slate-50 group-hover:border-[#C8A96A]/30 group-hover:text-[#C8A96A] group-hover:bg-[#C8A96A]/5 transition-colors duration-300">
<i className="w-5 h-5" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-1.5 w-full">
<h4 className="text-sm font-normal text-[#1F3E3D]">Premium Insurance</h4>
<a className="text-xs text-[#C8A96A] hover:text-[#1F3E3D] transition-colors font-normal inline-flex items-center gap-1 group/slink" href="#">
                        Learn More <i className="w-3 h-3 group-hover/slink:translate-x-0.5 transition-transform" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="bg-white rounded-r-xl rounded-l-sm border border-slate-200/60 border-l-4 border-l-[#1F3E3D]/10 flex flex-row lg:flex-col xl:flex-row items-center gap-5 p-5 md:p-6 shadow-[0_4px_20px_rgba(31,62,61,0.02)] hover:shadow-md hover:border-l-[#C8A96A] hover:-translate-y-0.5 transition-all duration-300 flex-1 group">
<div className="w-12 h-12 shrink-0 rounded-full border border-slate-100 text-[#1F3E3D]/70 flex items-center justify-center bg-slate-50 group-hover:border-[#C8A96A]/30 group-hover:text-[#C8A96A] group-hover:bg-[#C8A96A]/5 transition-colors duration-300">
<i className="w-5 h-5" data-lucide="diamond" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-1.5 w-full">
<h4 className="text-sm font-normal text-[#1F3E3D]">Member Rewards</h4>
<a className="text-xs text-[#C8A96A] hover:text-[#1F3E3D] transition-colors font-normal inline-flex items-center gap-1 group/slink" href="#">
                        Learn More <i className="w-3 h-3 group-hover/slink:translate-x-0.5 transition-transform" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="bg-white rounded-r-xl rounded-l-sm border border-slate-200/60 border-l-4 border-l-[#1F3E3D]/10 flex flex-row lg:flex-col xl:flex-row items-center gap-5 p-5 md:p-6 shadow-[0_4px_20px_rgba(31,62,61,0.02)] hover:shadow-md hover:border-l-[#C8A96A] hover:-translate-y-0.5 transition-all duration-300 flex-1 group">
<div className="w-12 h-12 shrink-0 rounded-full border border-slate-100 text-[#1F3E3D]/70 flex items-center justify-center bg-slate-50 group-hover:border-[#C8A96A]/30 group-hover:text-[#C8A96A] group-hover:bg-[#C8A96A]/5 transition-colors duration-300">
<i className="w-5 h-5" data-lucide="headset" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-1.5 w-full">
<h4 className="text-sm font-normal text-[#1F3E3D]">24/7 Concierge</h4>
<a className="text-xs text-[#C8A96A] hover:text-[#1F3E3D] transition-colors font-normal inline-flex items-center gap-1 group/slink" href="#">
                        Contact Us <i className="w-3 h-3 group-hover/slink:translate-x-0.5 transition-transform" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>
</section><footer className="overflow-hidden font-inter bg-[#1F3E3D] w-full z-20 pt-20 pb-8 relative" id="portalra-footer">

<div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96A]/40 to-transparent">
</div>
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-10 border-b border-white/10 footer-reveal transition-all duration-1000 ease-out">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-3">
<span className="text-2xl font-oswald text-white tracking-tight uppercase">Excellent</span>
<div className="flex gap-1">
<i className="w-5 h-5 fill-[#C8A96A] text-[#C8A96A]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-[#C8A96A] text-[#C8A96A]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-[#C8A96A] text-[#C8A96A]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-[#C8A96A] text-[#C8A96A]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-[#C8A96A] text-[#C8A96A]" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
<span className="text-sm text-white/60 font-light">4.9/5 based on 10,000+ reviews on TrustPortal</span>
</div>
<div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
<span className="text-xs font-oswald uppercase tracking-widest text-[#C8A96A]">Associated With</span>
<div className="flex flex-wrap gap-8 items-center text-white/40">
<span className="text-lg font-oswald tracking-widest uppercase hover:text-white/80 transition-colors cursor-default">Virtuoso</span>
<span className="text-lg font-oswald tracking-widest uppercase hover:text-white/80 transition-colors cursor-default">ASTA</span>
<span className="text-lg font-oswald tracking-widest uppercase hover:text-white/80 transition-colors cursor-default">USTOA</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">

<div className="flex flex-col gap-10 footer-reveal transition-all duration-1000 delay-100 ease-out">
<div className="flex flex-col gap-5">
<h4 className="text-base font-oswald uppercase tracking-wider text-white">Company</h4>
<div className="flex flex-col gap-3">
<a className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light" href="#">About
                            us</a>
<a className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light group flex items-center gap-2" href="#">
                            Careers
                            <span className="px-2 py-0.5 rounded-full bg-[#C8A96A]/10 border border-[#C8A96A]/30 text-[#C8A96A] text-xs group-hover:bg-[#C8A96A] group-hover:text-[#1F3E3D] transition-colors">Apply Now!</span>
</a>
<a className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light" href="#">Sustainability</a>
</div>
</div>
<div className="flex flex-col gap-5">
<h4 className="text-base font-oswald uppercase tracking-wider text-white">Travelers</h4>
<div className="flex flex-col gap-3">
<a className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light" href="#">Escape
                            Magazine</a>
<a className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light group flex items-center gap-2" href="#">
                            Win an Adventure
                            <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs group-hover:border-[#C8A96A] group-hover:text-[#C8A96A] transition-colors">Enter Now!</span>
</a>
<a className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light" href="#">Why
                            Portalra?</a>
<a className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light" href="#">Cancellation
                            policy</a>
</div>
</div>
</div>

<div className="flex flex-col gap-10 footer-reveal transition-all duration-1000 delay-200 ease-out">
<div className="flex flex-col gap-5">
<h4 className="text-base font-oswald uppercase tracking-wider text-white">Curated Experiences</h4>
<div className="flex flex-col gap-3">
<a className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light" href="#">Our
                            Platform Explained</a>
<a className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light" href="#">Bespoke
                            Solutions</a>
<a className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light" href="#">Corporate
                            Retreats</a>
</div>
</div>
<div className="flex flex-col gap-5">
<h4 className="text-base font-oswald uppercase tracking-wider text-white">Operators</h4>
<div className="flex flex-col gap-3">
<a className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light" href="#">Partner
                            With Us</a>
<a className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light" href="#">Payment
                            Solutions</a>
<a className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light" href="#">Operator
                            Login</a>
</div>
</div>
</div>

<div className="flex flex-col gap-10 footer-reveal transition-all duration-1000 delay-[300ms] ease-out">
<div className="flex flex-col gap-5">
<h4 className="text-base font-oswald uppercase tracking-wider text-white">Local Guides</h4>
<div className="flex flex-col gap-3">
<a className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light" href="#">Guide
                            of the Year</a>
<a className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light" href="#">Join
                            our Network</a>
<a className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light" href="#">Guide
                            Login</a>
</div>
</div>
<div className="flex flex-col gap-5">
<h4 className="text-base font-oswald uppercase tracking-wider text-white">Affiliates</h4>
<div className="flex flex-col gap-3">
<a className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light" href="#">Travel
                            Advisors</a>
<a className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light" href="#">Creators
                            Program</a>
<a className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light" href="#">Affiliate
                            Login</a>
</div>
</div>
</div>

<div className="flex flex-col gap-10 footer-reveal transition-all duration-1000 delay-[400ms] ease-out">
<div className="flex flex-col gap-5">
<h4 className="text-base font-oswald uppercase tracking-wider text-white">Support</h4>
<div className="flex flex-col gap-3">
<a className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light" href="#">Contact
                            Us</a>
<a className="text-sm text-white/70 hover:text-[#C8A96A] hover:translate-x-1 transition-all duration-300 w-fit font-light mb-2" href="#">Help
                            Center</a>
<div className="flex flex-col gap-1 mt-2">
<span className="text-[10px] font-oswald uppercase tracking-widest text-[#C8A96A]">US &amp; Canada</span>
<a className="text-sm text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit" href="tel:+18338956770">+1
                                833 895 6770</a>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] font-oswald uppercase tracking-widest text-[#C8A96A]">UK &amp; Europe</span>
<a className="text-sm text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit" href="tel:+448008021046">+44
                                800 802 1046</a>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] font-oswald uppercase tracking-widest text-[#C8A96A]">Australia</span>
<a className="text-sm text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit" href="tel:+61731068663">+61
                                7 3106 8663</a>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-10 border-y border-white/10 footer-reveal transition-all duration-1000 delay-[500ms] ease-out">

<div className="flex flex-col gap-5">
<h4 className="text-sm font-oswald uppercase tracking-wider text-white">Select Language</h4>
<div className="flex flex-wrap gap-2">
<button className="w-10 h-10 rounded-full bg-[#C8A96A] text-[#1F3E3D] text-sm font-medium flex items-center justify-center transition-transform hover:scale-105 shadow-[0_0_15px_rgba(200,169,106,0.3)]">EN</button>
<button className="w-10 h-10 rounded-full bg-transparent border border-white/20 text-white/70 text-sm font-normal flex items-center justify-center hover:border-[#C8A96A] hover:text-[#C8A96A] transition-all duration-300">DE</button>
<button className="w-10 h-10 rounded-full bg-transparent border border-white/20 text-white/70 text-sm font-normal flex items-center justify-center hover:border-[#C8A96A] hover:text-[#C8A96A] transition-all duration-300">ES</button>
<button className="w-10 h-10 rounded-full bg-transparent border border-white/20 text-white/70 text-sm font-normal flex items-center justify-center hover:border-[#C8A96A] hover:text-[#C8A96A] transition-all duration-300">FR</button>
</div>
</div>

<div className="flex flex-col gap-5">
<h4 className="text-sm font-oswald uppercase tracking-wider text-white">Follow Us</h4>
<div className="flex gap-6 gap-x-6 gap-y-6 items-center">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-all" href="#">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-all" href="#">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path className="" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-all" href="#">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect className="" height="12" width="4" x="2" y="9"></rect>
<circle className="" cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-all" href="#">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path className="" d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
</div>
</div>

<div className="flex flex-col gap-5">
<h4 className="text-sm font-oswald uppercase tracking-wider text-white">Secure Payments</h4>
<div className="flex flex-wrap gap-4 text-white/30">
<i className="w-8 h-8 hover:text-white/60 transition-colors" data-lucide="credit-card" strokeWidth="1"></i>
<i className="w-8 h-8 hover:text-white/60 transition-colors" data-lucide="banknote" strokeWidth="1"></i>
<i className="w-8 h-8 hover:text-white/60 transition-colors" data-lucide="shield-check" strokeWidth="1"></i>
</div>
</div>

<div className="flex flex-col gap-5">
<h4 className="text-sm font-oswald uppercase tracking-wider text-white">Download App</h4>
<div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
<a className="flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-white/10 px-4 py-2.5 rounded-lg hover:border-[#5A3A22] hover:bg-[#5A3A22]/20 transition-all duration-300 group" href="#">
<i className="w-6 h-6 text-white group-hover:text-[#C8A96A] transition-colors" data-lucide="apple" strokeWidth="1.5"></i>
<div className="flex flex-col">
<span className="text-[10px] text-white/60 font-light leading-none mb-0.5">Download on the</span>
<span className="text-sm font-normal text-white leading-tight">App Store</span>
</div>
</a>
<a className="flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-white/10 px-4 py-2.5 rounded-lg hover:border-[#5A3A22] hover:bg-[#5A3A22]/20 transition-all duration-300 group" href="#">
<i className="w-5 h-5 text-white group-hover:text-[#C8A96A] transition-colors" data-lucide="play" strokeWidth="1.5"></i>
<div className="flex flex-col">
<span className="text-[10px] text-white/60 font-light leading-none mb-0.5">GET IT ON</span>
<span className="text-sm font-normal text-white leading-tight">Google Play</span>
</div>
</a>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-2 pb-6 footer-reveal transition-all duration-1000 delay-[600ms] ease-out">
<span className="text-sm font-light text-white/50 tracking-wide">© 2024 Portalra Escape. Designed by Kunal Lonare.</span>
<div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 text-sm font-light tracking-wide">
<a className="text-white/50 hover:text-[#C8A96A] transition-colors" href="#">Legal Notice</a>
<span className="text-white/20 hidden sm:inline">•</span>
<a className="text-white/50 hover:text-[#C8A96A] transition-colors" href="#">Privacy Policy</a>
<span className="text-white/20 hidden sm:inline">•</span>
<a className="text-white/50 hover:text-[#C8A96A] transition-colors" href="#">Cookies</a>
<span className="text-white/20 hidden sm:inline">•</span>
<a className="text-white/50 hover:text-[#C8A96A] transition-colors" href="#">Terms &amp; Conditions</a>
</div>
</div>
</div>

</footer>


    </>
  );
}
