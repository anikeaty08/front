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



        lucide.createIcons();
    


      (function () {
        // --- Intro Animations ---
        const once = true; // Set to true to animate only once

        if (!window.__inViewIO) {
          window.__inViewIO = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                if (once) window.__inViewIO.unobserve(entry.target);
              }
            });
          }, { threshold: 0.2, rootMargin: "0px -10% 0px -10%" });
        }

        window.initInViewAnimations = function (selector = ".animate-on-scroll") {
          document.querySelectorAll(selector).forEach((el) => {
            window.__inViewIO.observe(el); 
          });
        };

        document.addEventListener("DOMContentLoaded", () => {
            initInViewAnimations();
            initPagination();
        });

        // --- Pagination & Slider Logic ---
        function initPagination() {
            const slider = document.getElementById('slider');
            const slides = document.querySelectorAll('.slide-container');
            const dotsContainer = document.getElementById('pagination-dots');
            const dots = dotsContainer.children;
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');

            // --- Update Dots Helper ---
            const updateDots = (activeIndex) => {
                Array.from(dots).forEach((dot, index) => {
                    if (index === activeIndex) {
                        dot.className = "w-1.5 h-1.5 rounded-full bg-white cursor-pointer hover:scale-125 transition-transform";
                    } else {
                        dot.className = "w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/50 cursor-pointer transition-colors hover:scale-125 transition-transform";
                    }
                });
            };

            // --- Scroll Observer for Dots ---
            // Using the slider as root ensures we track what is currently centered in the scroll area
            const slideObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Find the index based on the ID or element comparison
                        const index = Array.from(slides).indexOf(entry.target);
                        if(index !== -1) {
                            updateDots(index);
                        }
                    }
                });
            }, { 
                root: slider, 
                threshold: 0.6 // High threshold means the slide must be mostly visible to be "active"
            });

            slides.forEach(slide => slideObserver.observe(slide));

            // --- Click on Dot to Scroll ---
            Array.from(dots).forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    slides[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                });
            });

            // --- Arrow Buttons ---
            // Calculate scroll amount dynamically
            const getScrollAmount = () => {
                 // Check if mobile or desktop
                 return window.innerWidth < 768 ? window.innerWidth * 0.85 : 548;
            };

            if(prevBtn && nextBtn && slider) {
                nextBtn.addEventListener('click', () => {
                    slider.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
                });
                
                prevBtn.addEventListener('click', () => {
                    slider.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
                });
            }
        }
      })();
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/10 h-16">

<div className="flex items-center gap-2 w-auto md:w-1/3">
<span className="font-display text-sm font-semibold tracking-tight text-white font-geist">Instagram Slides</span>
</div>

<div className="hidden sm:flex items-center justify-center gap-2 w-1/3" id="pagination-dots">

<div className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/50 cursor-pointer transition-colors hover:scale-125 transition-transform" data-index="0"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/50 cursor-pointer transition-colors hover:scale-125 transition-transform" data-index="1"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/50 cursor-pointer transition-colors hover:scale-125 transition-transform" data-index="2"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/50 cursor-pointer transition-colors hover:scale-125 transition-transform" data-index="3"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/50 cursor-pointer transition-colors hover:scale-125 transition-transform" data-index="4"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/50 cursor-pointer transition-colors hover:scale-125 transition-transform" data-index="5"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/50 cursor-pointer transition-colors hover:scale-125 transition-transform" data-index="6"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white cursor-pointer hover:scale-125 transition-transform" data-index="7"></div>
</div>

<div className="hidden md:flex items-center justify-end gap-2 w-1/3">
<button className="p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors disabled:opacity-30" id="prevBtn">
<svg className="lucide lucide-arrow-left w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors" id="nextBtn">
<svg className="lucide lucide-arrow-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="md:hidden flex items-center justify-end w-auto text-neutral-500 text-xs gap-1">
<span className="font-mono">SWIPE</span>
<svg className="lucide lucide-move-horizontal" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="18 8 22 12 18 16"></polyline><polyline points="6 8 2 12 6 16"></polyline><line x1="2" x2="22" y1="12" y2="12"></line></svg>
</div>
</nav>

<main className="flex flex-row overflow-x-auto snap-x snap-mandatory hide-scrollbar w-full pt-20 md:pt-28 pb-6 md:pb-10 px-6 md:px-10 gap-x-6 md:gap-x-12 scroll-smooth" id="slider" style={{maskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)'}}>

<section className="slide-container flex-shrink-0 flex flex-col overflow-hidden snap-center group bg-[#0A0A0A] w-[85vw] md:w-[500px] border-white/10 border relative shadow-2xl justify-between" id="slide-0">

<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5071d056-5442-4e08-adcf-cea83397ba23_1600w.webp)] bg-cover z-10 p-6 md:p-10 relative">
<div className="flex [animation:animationIn_0.8s_ease-out_0s_both] animate-on-scroll animate mix-blend-color-dodge mb-4 md:mb-8 items-start justify-between">
<span className="font-mono text-[10px] md:text-xs text-neutral-500 uppercase tracking-widest font-geist">[01/08] // SYS.INIT</span>
<div className="p-2 bg-white/5 rounded-full border border-white/10">
<svg className="lucide lucide-aperture w-4 h-4 md:w-5 md:h-5 text-white" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
</div>
</div>
<div className="mt-auto mb-8 md:mb-12">
<h1 className="leading-[0.9] [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate text-5xl md:text-7xl tracking-tighter font-space-grotesk mb-4 md:mb-8">
                Gemini 3
                <span className="block text-white/60 tracking-tighter font-space-grotesk">Animations</span>
</h1>
<div className="[animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate">
<p className="uppercase leading-relaxed text-[10px] md:text-xs text-neutral-400 tracking-wide font-mono max-w-[90%] border-orange-500 border-l-2 pl-4">
                    The best model at creating animations. It's not even close.
                </p>
</div>
</div>
<div className="pt-4 md:pt-6 border-t border-white/10 flex justify-between items-end [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll animate">
<div className="flex flex-col">
<span className="font-mono text-[10px] text-neutral-600 uppercase mb-1 font-geist">Author</span>
<span className="font-display text-sm md:text-lg tracking-wide text-neutral-200 font-geist">@MengTo</span>
</div>
<div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
<svg className="lucide lucide-arrow-right w-4 h-4 md:w-5 md:h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="absolute inset-0 z-0 bg-grid-pattern opacity-20"></div>
<div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-neutral-800 to-transparent rounded-full blur-[100px] opacity-40 pointer-events-none">
</div>
</section>

<section className="slide-container flex-shrink-0 w-[85vw] md:w-[500px] bg-[#0A0A0A] relative flex flex-col overflow-hidden border border-white/10 shadow-2xl snap-center" id="slide-1">
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/28c300b5-bd2f-449c-a915-f968ced09242_1600w.webp)] bg-cover bg-center p-6 md:p-10">
<header className="flex [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate mix-blend-color-dodge mb-8 md:mb-12 items-center justify-between">
<span className="font-mono text-xs text-neutral-500 font-geist">[02/08]</span>
<span className="font-display text-[10px] md:text-xs font-semibold uppercase tracking-widest text-neutral-500 font-geist">Intro &amp; Scroll</span>
</header>
<div className="flex-grow space-y-6 md:space-y-8">

<div className="overflow-hidden [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate bg-gradient-to-b from-white/30 to-white/0 rounded-lg p-6 md:p-8 relative shadow-inner backdrop-blur-xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '8px'}}>

<div className="space-y-4">
<div className="animate-pulse bg-gradient-to-b from-white/10 to-white/0 w-1/3 h-4 rounded" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '4px'}}></div>
<div className="animate-pulse delay-75 bg-gradient-to-b from-white/10 to-white/0 w-full h-24 md:h-32 rounded backdrop-blur-lg" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '4px'}}></div>
<div className="animate-pulse delay-150 bg-gradient-to-b from-white/10 to-white/0 w-2/3 h-4 rounded" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '4px'}}></div>
</div>
<div className="absolute top-4 right-4">
<span className="font-mono text-[8px] md:text-[10px] bg-white text-black px-1.5 py-0.5 rounded font-bold font-geist">VIEWPORT</span>
</div>
</div>
<div className="space-y-3 md:space-y-4 [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate">
<h2 className="text-3xl md:text-4xl text-white font-space-grotesk tracking-tighter" style={{}}>Animate on View</h2>
<div className="leading-relaxed text-[10px] md:text-xs text-neutral-400 font-mono bg-neutral-900/50 border-white/5 border rounded p-4 md:p-5 shadow-sm backdrop-blur-lg">
                            "Animate when in view: fade in, slide in, blur in, element by element. Use 'both' instead of 'forwards'. Don't use opacity 0."
                        </div>
</div>
</div>
<div className="mt-auto pt-4 md:pt-6 border-t border-white/5 [animation:animationIn_0.8s_ease-out_0.7s_both] animate-on-scroll animate">
<p className="uppercase text-[10px] md:text-xs font-medium text-neutral-500 tracking-wider font-geist">Key places: Hero Intro</p>
</div>
</div>
</section>

<section className="slide-container flex-shrink-0 w-[85vw] md:w-[500px] bg-[#0A0A0A] text-white relative flex flex-col overflow-hidden border border-white/10 shadow-2xl snap-center" id="slide-2">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
<div className="p-6 md:p-10 h-full flex flex-col z-10">
<header className="flex justify-between items-center mb-6 md:mb-10 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<span className="font-mono text-xs text-neutral-500 font-geist">[03/08]</span>
<svg className="lucide lucide-scissors w-5 h-5 text-neutral-600" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</header>
<div className="flex-grow flex flex-col justify-center">

<div className="flex gap-3 h-32 md:h-48 mb-8 md:mb-12 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="flex-1 bg-neutral-800 rounded-sm animate-clip" style={{animationDelay: '0s'}}></div>
<div className="flex-1 bg-neutral-700 rounded-sm animate-clip" style={{animationDelay: '0.2s'}}></div>
<div className="flex-1 bg-neutral-600 rounded-sm animate-clip" style={{animationDelay: '0.4s'}}></div>
<div className="flex-1 bg-orange-500 rounded-sm animate-clip" style={{animationDelay: '0.6s'}}></div>
</div>
<div className="[animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<h2 className="text-4xl md:text-5xl mb-4 md:mb-6 text-white font-space-grotesk tracking-tighter" style={{}}>Clip Animation</h2>
<p className="leading-relaxed text-[10px] md:text-xs text-neutral-500 font-mono max-w-sm border-neutral-700 border-l pl-4">
                            "Add a clip animation to the background, column by column using clip-path."
                        </p>
</div>
</div>
</div>
</section>

<section className="slide-container flex-shrink-0 w-[85vw] md:w-[500px] bg-[#0A0A0A] relative flex flex-col overflow-hidden border border-white/10 shadow-2xl snap-center" id="slide-3">
<div className="p-6 md:p-10 h-full flex flex-col">
<header className="flex justify-between items-center mb-6 md:mb-10 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<span className="font-mono text-xs text-neutral-500 font-geist">[04/08]</span>
<span className="font-display text-[10px] md:text-xs font-semibold uppercase tracking-widest text-neutral-500 font-geist">Interaction</span>
</header>
<div className="flex-grow flex flex-col space-y-8 md:space-y-12 items-center justify-center">

<button className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll scale-90 md:scale-100">

<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

<span className="absolute inset-0 rounded-full bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>

<span className="flex items-center justify-center gap-2 uppercase transition-colors duration-300 group-hover:text-white text-xs font-medium text-zinc-400 tracking-widest bg-gradient-to-b from-zinc-800 to-zinc-950 w-full h-full rounded-full pt-2.5 pr-6 pb-2.5 pl-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
<span className="relative z-10">Request Demo</span>
<svg className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
<div className="w-full [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll text-center md:text-left">
<h2 className="text-2xl md:text-3xl text-white tracking-tighter font-space-grotesk mb-4">Border Beam</h2>
<div className="bg-neutral-900/50 border-white/5 border rounded-xl p-4 md:p-5 shadow-sm text-left">
<p className="text-[10px] md:text-xs text-neutral-400 font-mono">
        "Add a 1px border beam animation around the pill-shaped button on hover."
      </p>
</div>
</div>
</div>
</div>
</section>

<section className="slide-container flex-shrink-0 w-[85vw] md:w-[500px] bg-[#0A0A0A] relative flex flex-col overflow-hidden border border-white/10 shadow-2xl snap-center" id="slide-4">
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aedd68a9-659a-45bf-ae0a-842c1d982c93_1600w.webp)] bg-cover bg-center p-6 md:p-10">
<header className="flex justify-between items-center mb-6 md:mb-10 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<span className="font-mono text-xs text-neutral-500 font-geist">[05/08]</span>
<svg className="lucide lucide-type w-5 h-5 text-neutral-600" data-lucide="type" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16"></path><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path></svg>
</header>
<div className="flex-grow flex flex-col justify-center">

<div className="mb-8 md:mb-12 border-b border-white/10 pb-8 md:pb-12 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="overflow-hidden h-14 md:h-20 flex items-center">
<h2 className="text-5xl md:text-7xl text-white animate-fade-up font-space-grotesk tracking-tighter" style={{}}>
                                Reveal
                            </h2>
</div>
<div className="overflow-hidden h-14 md:h-20 flex items-center">
<h2 className="animate-fade-up text-5xl md:text-7xl text-white/60 tracking-tighter font-space-grotesk" style={{animationDelay: '0.2s'}}>
                                Typography
                            </h2>
</div>
</div>
<div className="space-y-3 [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<span className="text-[10px] font-bold uppercase tracking-widest text-orange-500 font-geist">Prompt</span>
<p className="leading-relaxed text-[10px] md:text-xs text-neutral-400 font-mono">
                            "Add a vertical text clip slide down animation letter by letter."
                        </p>
</div>
</div>
</div>
</section>

<section className="slide-container flex-shrink-0 w-[85vw] md:w-[500px] bg-[#0A0A0A] relative flex flex-col overflow-hidden border border-white/10 shadow-2xl snap-center" id="slide-5">
<div className="flex flex-col z-10 h-full p-6 md:p-10 justify-between">
<header className="flex justify-between items-center [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<span className="font-mono text-xs text-neutral-500 font-geist">[06/08]</span>
<span className="font-display text-[10px] md:text-xs font-semibold uppercase tracking-widest text-neutral-500 font-geist">Social Proof</span>
</header>
<div className="w-full overflow-hidden relative py-12 md:py-16 border-y border-white/5 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">

<div className="absolute left-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10"></div>

<div className="flex w-[200%] animate-marquee">
<div className="flex justify-around w-1/2 text-neutral-500">
<svg className="lucide lucide-framer w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="framer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"></path></svg>
<svg className="lucide lucide-figma w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
<svg className="lucide lucide-chrome w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="chrome" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.88 21.94 15.46 14"></path><path d="M21.17 8H12"></path><path d="M3.95 6.06 8.54 14"></path><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle></svg>
<svg className="lucide lucide-github w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<svg className="lucide lucide-codepen w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="codepen" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" x2="12" y1="22" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" x2="12" y1="2" y2="8.5"></line></svg>
</div>
<div className="flex justify-around w-1/2 text-neutral-500">
<svg className="lucide lucide-framer w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="framer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"></path></svg>
<svg className="lucide lucide-figma w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
<svg className="lucide lucide-chrome w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="chrome" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.88 21.94 15.46 14"></path><path d="M21.17 8H12"></path><path d="M3.95 6.06 8.54 14"></path><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle></svg>
<svg className="lucide lucide-github w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<svg className="lucide lucide-codepen w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="codepen" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" x2="12" y1="22" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" x2="12" y1="2" y2="8.5"></line></svg>
</div>
</div>
</div>
<div className="[animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<h3 className="text-2xl md:text-3xl text-white mb-2 uppercase font-space-grotesk tracking-tighter" style={{}}>Infinite Loop</h3>
<p className="text-[10px] md:text-xs text-neutral-500 font-mono">"Add a marquis infinite loop slow animation to the logos using alpha mask."</p>
</div>
</div>
</section>

<section className="slide-container flex-shrink-0 w-[85vw] md:w-[500px] bg-[#0A0A0A] relative flex flex-col overflow-hidden border border-white/10 shadow-2xl snap-center" id="slide-6">
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3612ae9b-1f08-4708-a499-958fde6cc95b_1600w.webp)] bg-cover p-6 md:p-10">
<header className="flex justify-between items-center mb-6 md:mb-8 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<span className="font-mono text-xs text-neutral-500 font-geist">[07/08]</span>
<span className="font-display text-[10px] md:text-xs font-semibold uppercase tracking-widest text-neutral-500 font-geist">Cards</span>
</header>
<div className="flex-grow flex flex-col [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll items-center justify-center relative w-full h-full p-2 md:p-6">
<style>
        @keyframes cardStackCycle {
            0%, 25% {
                transform: translateY(0) scale(1);
                z-index: 30;
                opacity: 1;
                filter: blur(0px);
            }
            33%, 58% {
                transform: translateY(-40px) scale(0.85);
                z-index: 10;
                opacity: 0.5;
                filter: blur(2px);
            }
            66%, 91% {
                transform: translateY(-20px) scale(0.92);
                z-index: 20;
                opacity: 0.75;
                filter: blur(1px);
            }
            100% {
                transform: translateY(0) scale(1);
                z-index: 30;
                opacity: 1;
                filter: blur(0px);
            }
        }
        @media (min-width: 768px) {
            @keyframes cardStackCycle {
                0%, 25% {
                    transform: translateY(0) scale(1);
                    z-index: 30;
                    opacity: 1;
                    filter: blur(0px);
                }
                33%, 58% {
                    transform: translateY(-60px) scale(0.85);
                    z-index: 10;
                    opacity: 0.5;
                    filter: blur(2px);
                }
                66%, 91% {
                    transform: translateY(-30px) scale(0.92);
                    z-index: 20;
                    opacity: 0.75;
                    filter: blur(1px);
                }
                100% {
                    transform: translateY(0) scale(1);
                    z-index: 30;
                    opacity: 1;
                    filter: blur(0px);
                }
            }
        }
    </style>
<div className="relative w-full max-w-[280px] md:max-w-[320px] aspect-square mb-8 md:mb-10">

<div className="absolute inset-0 w-full h-full rounded-xl md:rounded-2xl bg-neutral-900 border border-white/10 p-6 md:p-8 shadow-2xl flex flex-col justify-between overflow-hidden group" style={{animation: 'cardStackCycle 12s infinite ease-in-out', animationDelay: '-8s', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.1), transparent 40%)'}}></div>
<div className="flex mix-blend-screen mb-8 items-start justify-between">
<div className="flex text-white bg-white/5 w-10 h-10 md:w-12 md:h-12 rounded-full items-center justify-center border border-white/10">
<svg className="lucide lucide-zap w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="flex gap-1.5">
<div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-white"></div>
<div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-neutral-700"></div>
</div>
</div>
<div className="space-y-4">
<div className="bg-neutral-800 w-20 h-3 rounded border border-white/5"></div>
<div className="bg-neutral-800 w-full h-24 md:h-32 rounded-lg border border-white/5"></div>
</div>
</div>

<div className="absolute inset-0 w-full h-full rounded-xl md:rounded-2xl bg-neutral-900 border border-white/10 p-6 md:p-8 shadow-2xl flex flex-col justify-between overflow-hidden group" style={{animation: 'cardStackCycle 12s infinite ease-in-out', animationDelay: '-4s', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.1), transparent 40%)'}}></div>
<div className="flex mix-blend-screen mb-8 items-start justify-between">
<div className="flex text-white bg-white/5 w-10 h-10 md:w-12 md:h-12 rounded-full items-center justify-center border border-white/10">
<svg className="lucide lucide-zap w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="flex gap-1.5">
<div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-white"></div>
<div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-neutral-700"></div>
</div>
</div>
<div className="space-y-4">
<div className="bg-neutral-800 w-20 h-3 rounded border border-white/5"></div>
<div className="bg-neutral-800 w-full h-24 md:h-32 rounded-lg border border-white/5"></div>
</div>
</div>

<div className="absolute inset-0 w-full h-full rounded-xl md:rounded-2xl bg-neutral-900 border border-white/10 p-6 md:p-8 shadow-2xl flex flex-col justify-between overflow-hidden group" style={{animation: 'cardStackCycle 12s infinite ease-in-out', animationDelay: '0s', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.1), transparent 40%)'}}></div>
<div className="flex mix-blend-screen mb-8 items-start justify-between">
<div className="flex text-white bg-white/5 w-10 h-10 md:w-12 md:h-12 rounded-full items-center justify-center border border-white/10">
<svg className="lucide lucide-zap w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="flex gap-1.5">
<div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-white"></div>
<div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-neutral-700"></div>
</div>
</div>
<div className="space-y-4">
<div className="bg-neutral-800 w-20 h-3 rounded border border-white/5"></div>
<div className="bg-neutral-800 w-full h-24 md:h-32 rounded-lg border border-white/5"></div>
</div>
</div>
</div>

<div className="flex gap-4 z-40">
<button className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-white/20 transition-all duration-200 shadow-lg group">
<svg className="lucide lucide-arrow-left w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-white/20 transition-all duration-200 shadow-lg group">
<svg className="lucide lucide-arrow-right w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="mt-4 md:mt-8 space-y-2 md:space-y-4 [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<p className="text-[10px] md:text-xs text-neutral-400 font-mono border-white border-l-2 pl-3">
                        "Animate the big card to rotate between 3 cards in a loop."
                    </p>
<p className="text-[10px] md:text-xs text-neutral-500 font-mono border-orange-500 border-l-2 pl-3">
                        "Add a subtle flashlight effect on hover."
                    </p>
</div>
</div>
</section>

<section className="slide-container flex-shrink-0 w-[85vw] md:w-[500px] bg-[#0A0A0A] relative flex flex-col overflow-hidden border border-white/10 shadow-2xl snap-center" id="slide-7">

<div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4ad25ed-2717-4e73-8585-2438242e676c_1600w.webp)] bg-cover z-10 p-6 md:p-10 relative justify-between">
<header className="flex justify-between items-center [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<span className="font-mono text-xs text-neutral-500 font-geist">[08/08]</span>
<div className="flex gap-1">
<div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
</div>
</header>
<div className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll text-center">
<h2 className="uppercase leading-tight text-4xl md:text-6xl font-semibold tracking-tighter font-space-grotesk mb-6 md:mb-8 drop-shadow-lg">
                        Good Prompting
                        <span className="block text-white/60 tracking-tighter font-space-grotesk">Is Everything</span>
</h2>
<p className="leading-relaxed text-xs md:text-base text-neutral-400 font-mono max-w-[90%] md:max-w-[360px] mr-auto mb-8 md:mb-10 ml-auto">
                        Gemini 3 relies heavily on good prompting, ideally with image or code.
                    </p>

<a className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors group" href="#">
<span className="font-geist text-sm md:text-base">Get Prompts</span>
<svg className="lucide lucide-arrow-up-right w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="flex items-center justify-center gap-4 pt-6 md:pt-8 border-t border-white/10 [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<div className="w-10 h-10 md:w-12 md:h-12 bg-neutral-800 rounded-full overflow-hidden border border-white/5 shadow-sm">

<div className="flex text-lg text-white font-display w-full h-full items-center justify-center">M</div>
</div>
<div className="text-left">
<div className="font-display text-xs md:text-sm uppercase tracking-wide font-medium font-geist">Meng To</div>
<div className="font-mono text-[10px] text-neutral-500 font-geist">Design Engineer</div>
</div>
</div>
</div>
</section>
</main>




    </>
  );
}
