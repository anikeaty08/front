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
        const once = true;

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
            // Safety check for dots
            const dots = dotsContainer ? dotsContainer.children : [];
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');

            // --- Update Dots Helper ---
            const updateDots = (activeIndex) => {
                if (!dots.length) return;
                Array.from(dots).forEach((dot, index) => {
                    if (index === activeIndex) {
                        dot.className = "w-1.5 h-1.5 rounded-full bg-white cursor-pointer hover:scale-125 transition-transform";
                    } else {
                        dot.className = "w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/50 cursor-pointer transition-colors hover:scale-125 transition-transform";
                    }
                });
            };

            // --- Scroll Observer for Dots ---
            if (slider && slides.length > 0) {
                const slideObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const index = Array.from(slides).indexOf(entry.target);
                            if(index !== -1) {
                                updateDots(index);
                            }
                        }
                    });
                }, {
                    root: slider,
                    threshold: 0.6
                });
                slides.forEach(slide => slideObserver.observe(slide));
            }

            // --- Click on Dot to Scroll ---
            if (dots.length > 0) {
                Array.from(dots).forEach((dot, index) => {
                    dot.addEventListener('click', () => {
                        slides[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    });
                });
            }

            // --- Arrow Buttons ---
            const getScrollAmount = () => {
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
      


<main className="flex flex-row overflow-x-auto snap-x snap-mandatory hide-scrollbar md:pt-28 md:pb-10 md:px-10 md:gap-x-12 scroll-smooth w-full pt-20 pr-6 pb-6 pl-6 gap-x-6 gap-y-x-6" style={{maskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)'}}>

<section className="slide-container flex-shrink-0 flex flex-col overflow-hidden snap-center group bg-[#0A0A0A] w-[85vw] md:w-[500px] border-white/10 border relative shadow-2xl justify-between" id="slide-0">

<div className="flex flex-col bg-center z-10 md:p-10 h-full bg-[url(https://i.pinimg.com/1200x/43/d2/15/43d2151c4e4a80f5458c2aa1c0e32076.jpg)] bg-cover pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex [animation:animationIn_0.8s_ease-out_0s_both] animate-on-scroll animate mix-blend-color-dodge mb-4 md:mb-8 items-start justify-between"></div>
<div className="mt-auto mb-8 md:mb-12">
<h1 className="leading-[0.9] [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate md:text-7xl md:mb-8 text-5xl tracking-tighter font-space-grotesk mb-4" style={{}}>
              Solving your Toughest Problems,
              <span className="block text-white/60 tracking-tighter font-space-grotesk" style={{}}>
                with Technology.
              </span>
</h1>
<div className="[animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate">
<p className="uppercase leading-relaxed text-[10px] md:text-xs text-neutral-300 tracking-wide font-mono max-w-[90%] border-orange-500 border-l-2 pl-4">
                Tech Partners for Growth-Stage Companies.
              </p>
</div>
</div>
</div>

<div className="absolute inset-0 z-0 bg-grid-pattern opacity-20"></div>
<div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-neutral-800 to-transparent rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
</section>

<section className="slide-container flex-shrink-0 w-[85vw] md:w-[500px] bg-[#0A0A0A] relative flex flex-col overflow-hidden border border-white/10 shadow-2xl snap-center" id="slide-5">
<div className="flex flex-col md:p-10 h-full z-10 pt-6 pr-6 pb-6 pl-6 justify-between">
<header className="flex justify-between items-center [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<span className="font-mono text-xs text-neutral-500 font-geist">
              [02/09]
            </span>
</header>
<div className="overflow-hidden md:py-16 border-y [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate w-full border-white/5 pt-12 pb-12 relative">

<div className="md:w-20 bg-gradient-to-r from-[#0A0A0A] to-transparent w-10 z-10 absolute top-0 bottom-0 left-0"></div>
<div className="absolute right-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10"></div>

<div className="flex w-[200%] animate-marquee">
<div className="flex justify-around w-1/2 text-neutral-500">
<svg className="lucide lucide-framer w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="framer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"></path>
</svg>
<svg className="lucide lucide-figma w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
</svg>
<svg className="lucide lucide-chrome md:w-10 md:h-10 hover:text-white transition-colors w-[32px] h-[32px]" data-icon-replaced="true" data-lucide="chrome" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.88 21.94 15.46 14"></path>
<path d="M21.17 8H12"></path>
<path d="M3.95 6.06 8.54 14"></path>
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="4"></circle>
</svg>
<svg className="lucide lucide-github w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
<svg className="lucide lucide-codepen w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="codepen" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
<line x1="12" x2="12" y1="22" y2="15.5"></line>
<polyline points="22 8.5 12 15.5 2 8.5"></polyline>
<polyline points="2 15.5 12 8.5 22 15.5"></polyline>
<line x1="12" x2="12" y1="2" y2="8.5"></line>
</svg>
</div>
<div className="flex justify-around w-1/2 text-neutral-500">
<svg className="lucide lucide-framer w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="framer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"></path>
</svg>
<svg className="lucide lucide-figma w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
</svg>
<svg className="lucide lucide-chrome w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="chrome" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.88 21.94 15.46 14"></path>
<path d="M21.17 8H12"></path>
<path d="M3.95 6.06 8.54 14"></path>
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="4"></circle>
</svg>
<svg className="lucide lucide-github w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
<svg className="lucide lucide-codepen w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="codepen" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
<line x1="12" x2="12" y1="22" y2="15.5"></line>
<polyline points="22 8.5 12 15.5 2 8.5"></polyline>
<polyline points="2 15.5 12 8.5 22 15.5"></polyline>
<line x1="12" x2="12" y1="2" y2="8.5"></line>
</svg>
</div>
</div>
<div className="flex w-[200%] animate-marquee mt-4" style={{animationDirection: 'reverse'}}>
<div className="flex justify-around w-1/2 text-neutral-500">
<svg className="lucide lucide-framer w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="framer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"></path></svg><svg className="lucide lucide-figma w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg><svg className="lucide lucide-chrome w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="chrome" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.88 21.94 15.46 14"></path>
<path d="M21.17 8H12"></path>
<path d="M3.95 6.06 8.54 14"></path>
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="4"></circle></svg><svg className="lucide lucide-github w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path></svg><svg className="lucide lucide-codepen w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="codepen" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
<line x1="12" x2="12" y1="22" y2="15.5"></line>
<polyline points="22 8.5 12 15.5 2 8.5"></polyline>
<polyline points="2 15.5 12 8.5 22 15.5"></polyline>
<line x1="12" x2="12" y1="2" y2="8.5"></line>
</svg>
</div>
<div className="flex justify-around w-1/2 text-neutral-500">
<svg className="lucide lucide-framer w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="framer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"></path></svg><svg className="lucide lucide-figma w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg><svg className="lucide lucide-chrome w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="chrome" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.88 21.94 15.46 14"></path>
<path d="M21.17 8H12"></path>
<path d="M3.95 6.06 8.54 14"></path>
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="4"></circle></svg><svg className="lucide lucide-github w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path></svg><svg className="lucide lucide-codepen w-8 h-8 md:w-10 md:h-10 hover:text-white transition-colors" data-lucide="codepen" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
<line x1="12" x2="12" y1="22" y2="15.5"></line>
<polyline points="22 8.5 12 15.5 2 8.5"></polyline>
<polyline points="2 15.5 12 8.5 22 15.5"></polyline>
<line x1="12" x2="12" y1="2" y2="8.5"></line>
</svg>
</div>
</div>
</div>
<div className="[animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate">
<h3 className="md:text-3xl uppercase text-2xl text-white tracking-tighter font-space-grotesk mb-2" id="slider" style={{}}>
              trusted by the ambitious.
            </h3>
<p className="text-[10px] md:text-xs text-neutral-500 font-mono">
              Engineering the technology that powers the fastest-growing
              companies.
            </p>
</div>
</div>
</section>

<section className="slide-container flex-shrink-0 w-[85vw] md:w-[500px] bg-[#0A0A0A] relative flex flex-col overflow-hidden border border-white/10 shadow-2xl snap-center" id="slide-1">
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/28c300b5-bd2f-449c-a915-f968ced09242_1600w.webp)] bg-cover bg-center p-6 md:p-10">
<header className="flex [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate mix-blend-color-dodge mb-8 md:mb-12 items-center justify-between">
<span className="font-mono text-xs text-neutral-500 font-geist">
              [03/09]
            </span>
<span className="font-display text-[10px] md:text-xs font-semibold uppercase tracking-widest text-neutral-500 font-geist">
              Services
            </span>
</header>
<div className="flex-grow flex flex-col justify-center">
<div className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate mb-8">
<h2 className="text-4xl md:text-5xl text-white font-space-grotesk tracking-tighter">
                What we build.
              </h2>
</div>
<div className="[animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate space-y-3">

<div className="bg-neutral-900/40 border border-white/5 p-4 rounded-lg backdrop-blur-md hover:bg-neutral-900/60 transition-colors group">
<p className="text-sm text-neutral-200 font-mono flex items-center gap-4">
<svg className="text-orange-500 group-hover:scale-110 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect>
<path d="M12 18h.01"></path>
</svg>
                  High-performance Web &amp; Mobile Apps
                </p>
</div>

<div className="bg-neutral-900/40 border border-white/5 p-4 rounded-lg backdrop-blur-md hover:bg-neutral-900/60 transition-colors group">
<p className="text-sm text-neutral-200 font-mono flex items-center gap-4">
<svg className="text-orange-500 group-hover:scale-110 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect>
<rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect>
<line x1="6" x2="6.01" y1="6" y2="6"></line>
<line x1="6" x2="6.01" y1="18" y2="18"></line>
</svg>
                  Complex Backend Systems &amp; APIs
                </p>
</div>

<div className="bg-neutral-900/40 border border-white/5 p-4 rounded-lg backdrop-blur-md hover:bg-neutral-900/60 transition-colors group">
<p className="text-sm text-neutral-200 font-mono flex items-center gap-4">
<svg className="text-orange-500 group-hover:scale-110 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
<path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
<path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
<path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
<path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
<path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
<path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
<path d="M6 18a4 4 0 0 1-1.97-3.284"></path>
<path d="M17.97 14.716A4 4 0 0 1 16 18"></path>
</svg>
                  AI &amp; Data Integration
                </p>
</div>

<div className="bg-neutral-900/40 border border-white/5 p-4 rounded-lg backdrop-blur-md hover:bg-neutral-900/60 transition-colors group">
<p className="text-sm text-neutral-200 font-mono flex items-center gap-4">
<svg className="text-orange-500 group-hover:scale-110 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
                  Legacy Modernization for Scale
                </p>
</div>
<div className="bg-neutral-900/40 border border-white/5 p-4 rounded-lg backdrop-blur-md hover:bg-neutral-900/60 transition-colors group">
<p className="text-sm text-neutral-200 font-mono flex items-center gap-4">
<svg className="text-orange-500 group-hover:scale-110 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
                  Custom Engineering Challenges &amp; More
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="slide-container flex-shrink-0 w-[85vw] md:w-[500px] bg-[#0A0A0A] text-white relative flex flex-col overflow-hidden border border-white/10 shadow-2xl snap-center" id="slide-2">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
<div className="p-6 md:p-10 h-full flex flex-col z-10 relative">
<header className="flex justify-between items-center mb-6 md:mb-10 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<span className="font-mono text-xs text-neutral-500 font-geist">
              [04/09]
            </span>
<svg className="lucide lucide-scissors w-5 h-5 text-neutral-600" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="3"></circle>
<path d="M8.12 8.12 12 12"></path>
<path d="M20 4 8.12 15.88"></path>
<circle cx="6" cy="18" r="3"></circle>
<path d="M14.8 14.8 20 20"></path>
</svg>
</header>
<div className="flex-grow flex flex-col justify-center">

<div className="flex gap-3 h-32 md:h-48 mb-8 md:mb-12 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="flex-1 bg-neutral-800 rounded-sm animate-clip" style={{animationDelay: '0s'}}></div>
<div className="flex-1 bg-neutral-700 rounded-sm animate-clip" style={{animationDelay: '0.2s'}}></div>
<div className="flex-1 bg-neutral-600 rounded-sm animate-clip" style={{animationDelay: '0.4s'}}></div>
<div className="flex-1 bg-orange-500 rounded-sm animate-clip" style={{animationDelay: '0.6s'}}></div>
</div>
<div className="[animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<h2 className="text-4xl md:text-5xl mb-4 md:mb-6 text-white font-space-grotesk tracking-tighter" style={{}}>
                High-Velocity Engineering.
              </h2>
<p className="leading-relaxed text-[10px] md:text-xs text-neutral-500 font-mono max-w-sm border-neutral-700 border-l pl-4">
                From prototype to production in weeks. Because speed is your
                only sustainable moat.
              </p>
</div>
</div>
</div>
</section>

<section className="slide-container flex-shrink-0 md:w-[500px] flex flex-col overflow-hidden snap-center bg-[#0A0A0A] w-[85vw] border-white/10 border relative shadow-2xl" id="slide-4">
<div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
<div className="p-6 md:p-10 h-full flex flex-col z-10 relative justify-between">
<header className="flex justify-between items-center mb-6 md:mb-10 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<span className="font-mono text-xs text-neutral-500 font-geist">
              [05/09]
            </span>
<svg className="lucide lucide-terminal w-5 h-5 text-neutral-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="4 17 10 11 4 5"></polyline>
<line x1="12" x2="20" y1="19" y2="19"></line>
</svg>
</header>
<div className="flex-grow flex flex-col justify-center [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<h2 className="text-4xl md:text-5xl text-white font-space-grotesk tracking-tighter mb-4">
              Builders Only.
            </h2>
<p className="text-[10px] md:text-xs text-neutral-400 font-mono leading-relaxed border-l-2 border-orange-500 pl-4 max-w-sm">
              We are always looking for the top 1% of engineering talent.
            </p>
</div>
<div className="mt-8 [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<a className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group" href="https://notion.so" target="_blank">
<span className="font-mono text-xs uppercase tracking-widest border-b border-transparent group-hover:border-orange-500 transition-colors pb-0.5">
                View Open Roles on Notion
              </span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</section>


<section className="slide-container flex-shrink-0 w-[85vw] md:w-[500px] bg-[#0A0A0A] relative flex flex-col overflow-hidden border border-white/10 shadow-2xl snap-center" id="slide-6">
<div className="flex flex-col bg-center md:p-10 h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3612ae9b-1f08-4708-a499-958fde6cc95b_1600w.webp)] bg-cover pt-6 pr-6 pb-6 pl-6">
<header className="flex justify-between items-center mb-6 md:mb-8 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<span className="font-mono text-xs text-neutral-500 font-geist">
              [07/09]
            </span>
<span className="font-display text-[10px] md:text-xs font-semibold uppercase tracking-widest text-neutral-500 font-geist">
              Feedback
            </span>
</header>
<div className="flex-grow flex flex-col [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll items-center justify-center relative w-full h-full p-2 md:p-6">
<style>
              @keyframes cardStackCycle {

                0%,
                25% {
                  transform: translateY(0) scale(1);
                  z-index: 30;
                  opacity: 1;
                  filter: blur(0px);
                }

                33%,
                58% {
                  transform: translateY(-40px) scale(0.85);
                  z-index: 10;
                  opacity: 0.5;
                  filter: blur(2px);
                }

                66%,
                91% {
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

                  0%,
                  25% {
                    transform: translateY(0) scale(1);
                    z-index: 30;
                    opacity: 1;
                    filter: blur(0px);
                  }

                  33%,
                  58% {
                    transform: translateY(-60px) scale(0.85);
                    z-index: 10;
                    opacity: 0.5;
                    filter: blur(2px);
                  }

                  66%,
                  91% {
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
<div className="flex mix-blend-screen mb-4 items-start justify-between">
<div className="flex text-white bg-white/5 w-10 h-10 md:w-12 md:h-12 rounded-full items-center justify-center border border-white/10">
<svg className="lucide lucide-quote w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
</svg>
</div>
<div className="flex gap-1.5 mt-2">
<div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-white"></div>
</div>
</div>
<div className="flex flex-col flex-grow justify-end">
<p className="text-sm md:text-base text-neutral-200 font-space-grotesk font-medium leading-relaxed">
                    "Building fintech products requires zero margin for error.
                    TwoSpoon delivered a robust, secure architecture that
                    allowed us to scale our user base 5x without a single
                    downtime event."
                  </p>
<div className="mt-4 pt-4 border-t border-white/5">
<p className="text-[10px] text-neutral-500 font-mono uppercase tracking-wide">
                      Aman M, CTO PropFirm
                    </p>
</div>
</div>
</div>

<div className="absolute inset-0 w-full h-full rounded-xl md:rounded-2xl bg-neutral-900 border border-white/10 p-6 md:p-8 shadow-2xl flex flex-col justify-between overflow-hidden group" style={{animation: 'cardStackCycle 12s infinite ease-in-out', animationDelay: '-4s', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba('}}></div>
<div className="flex mix-blend-screen mb-4 items-start justify-between">
<div className="flex text-white bg-white/5 w-10 h-10 md:w-12 md:h-12 rounded-full items-center justify-center border border-white/10">
<svg className="lucide lucide-quote w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
</svg>
</div>
<div className="flex gap-1.5 mt-2">
<div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-white"></div>
<div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-neutral-700"></div>
</div>
</div>
<div className="flex flex-col flex-grow justify-end">
<p className="text-sm md:text-base text-neutral-200 font-space-grotesk font-medium leading-relaxed">
                    "Most external teams slow you down with process. TwoSpoon
                    actually accelerated our roadmap."
                  </p>
<div className="mt-4 pt-4 border-t border-white/5">
<p className="text-[10px] text-neutral-500 font-mono uppercase tracking-wide">
                      Vikram R. Co-Founder, SaaS Platform
                    </p>
</div>
</div>
</div>

<div className="absolute inset-0 w-full h-full rounded-xl md:rounded-2xl bg-neutral-900 border border-white/10 p-6 md:p-8 shadow-2xl flex flex-col justify-between overflow-hidden group" style={{animation: 'cardStackCycle 12s infinite ease-in-out', animationDelay: '0s', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.1), transparent 40%)'}}></div>
<div className="flex mix-blend-screen mb-4 items-start justify-between">
<div className="flex text-white bg-white/5 w-10 h-10 md:w-12 md:h-12 rounded-full items-center justify-center border border-white/10">
<svg className="lucide lucide-quote w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
</svg>
</div>
<div className="flex gap-1.5 mt-2">
<div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-white"></div>
<div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-neutral-700"></div>
</div>
</div>
<div className="flex flex-col flex-grow justify-end">
<p className="text-sm md:text-base text-neutral-200 font-space-grotesk font-medium leading-relaxed">
                    "They didn't just build what we asked for; they anticipated
                    scale issues we hadn't even thought of."
                  </p>
<div className="mt-4 pt-4 border-t border-white/5">
<p className="text-[10px] text-neutral-500 font-mono uppercase tracking-wide">
                      Sarah L. CTO, FinTech Startup
                    </p>
</div>
</div>
</div>
</div>

<div className="flex gap-4 z-40">
<button className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-white/20 transition-all duration-200 shadow-lg group">
<svg className="lucide lucide-arrow-left w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
</button>
<button className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-white/20 transition-all duration-200 shadow-lg group">
<svg className="lucide lucide-arrow-right w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
<div className="mt-4 md:mt-8 [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll text-center w-full">
<p className="text-[10px] md:text-xs text-neutral-400 font-mono">
              "Real feedback from founders who shipped fast and scaled hard."
            </p>
</div>
</div>
</section>
<section className="slide-container flex-shrink-0 w-[85vw] md:w-[500px] bg-[#0A0A0A] relative flex flex-col overflow-hidden border border-white/10 shadow-2xl snap-center" id="slide-cta">
<div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
<div className="p-6 md:p-10 h-full flex flex-col z-10 relative justify-center items-center text-center">
<div className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll flex flex-col items-center">
<h2 className="text-4xl md:text-5xl text-white font-space-grotesk tracking-tighter mb-4">
              Ready to scale?
            </h2>
<a className="text-sm md:text-base text-neutral-500 font-mono mb-8 hover:text-white transition-colors" href="mailto:santosh@twospoon.ai">
              santosh@twospoon.ai
            </a>
<a className="inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-full font-mono text-xs font-semibold uppercase tracking-widest hover:bg-neutral-200 transition-colors" href="https://calendly.com" target="_blank">
              Book a Discovery Call
            </a>
</div>
</div>
</section>

</main>




    </>
  );
}
