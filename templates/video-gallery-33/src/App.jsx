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



        document.addEventListener('DOMContentLoaded', () => {
            const carousel = document.getElementById('video-carousel');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const indicatorsContainer = document.getElementById('carousel-indicators');
            const items = carousel.children;
            let autoPlayInterval;
            
            // Create indicators
            for (let i = 0; i < items.length; i++) {
                const dot = document.createElement('div');
                dot.className = `w-2 h-2 rounded-full transition-all duration-300 ${i === 0 ? 'bg-white w-4' : 'bg-neutral-700'}`;
                indicatorsContainer.appendChild(dot);
            }
            const dots = indicatorsContainer.children;

            const updateIndicators = () => {
                const scrollLeft = carousel.scrollLeft;
                const itemWidth = items[0].offsetWidth + parseInt(window.getComputedStyle(carousel).gap);
                const activeIndex = Math.round(scrollLeft / itemWidth);
                
                Array.from(dots).forEach((dot, index) => {
                    if (index === activeIndex) {
                        dot.className = 'w-4 h-2 rounded-full bg-white transition-all duration-300';
                    } else {
                        dot.className = 'w-2 h-2 rounded-full bg-neutral-700 transition-all duration-300';
                    }
                });
            };

            const getScrollAmount = () => {
                const itemWidth = items[0].offsetWidth;
                const gap = parseInt(window.getComputedStyle(carousel).gap);
                return itemWidth + gap;
            };

            const scrollNext = () => {
                const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
                if (carousel.scrollLeft >= maxScrollLeft - 10) {
                    carousel.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
                }
            };

            const scrollPrev = () => {
                if (carousel.scrollLeft <= 10) {
                    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
                    carousel.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
                } else {
                    carousel.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
                }
            };

            const startAutoPlay = () => {
                stopAutoPlay();
                autoPlayInterval = setInterval(scrollNext, 5000);
            };

            const stopAutoPlay = () => {
                if (autoPlayInterval) {
                    clearInterval(autoPlayInterval);
                }
            };

            // Event Listeners
            nextBtn.addEventListener('click', () => {
                scrollNext();
                startAutoPlay(); // Reset timer
            });

            prevBtn.addEventListener('click', () => {
                scrollPrev();
                startAutoPlay(); // Reset timer
            });

            carousel.addEventListener('scroll', updateIndicators);
            carousel.addEventListener('mouseenter', stopAutoPlay);
            carousel.addEventListener('mouseleave', startAutoPlay);
            carousel.addEventListener('touchstart', stopAutoPlay, { passive: true });
            carousel.addEventListener('touchend', startAutoPlay, { passive: true });

            // Initialize
            startAutoPlay();
            
            // Adjust on resize
            window.addEventListener('resize', updateIndicators);
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
      
<div className="w-full max-w-7xl mx-auto flex flex-col gap-8">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<div className="text-xs font-medium tracking-tighter text-white border border-neutral-800 bg-neutral-900 rounded px-2 py-1 inline-flex items-center justify-center mb-4">VG</div>
<h2 className="text-3xl font-medium tracking-tight text-neutral-100">Featured Discoveries</h2>
<p className="text-sm text-neutral-400 mt-1">Swipe horizontally or allow auto-play to explore.</p>
</div>

<div className="hidden md:flex items-center gap-2 pb-1" id="carousel-indicators">

</div>
</div>

<div className="relative w-full group">

<button className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-neutral-900/80 backdrop-blur-md border border-neutral-700 flex items-center justify-center text-neutral-300 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-neutral-800 hover:text-white hover:scale-105 z-20 shadow-xl hidden md:flex pointer-events-auto cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20" id="prevBtn">
<iconify-icon icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</button>

<div className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scroll pb-6 pt-2" id="video-carousel">

<div className="relative flex-none w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%] snap-center rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-1 cursor-pointer group/card aspect-[4/5] flex flex-col">
<div className="relative w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden">
<video className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen transition-opacity duration-300 group-hover/card:opacity-100" loop="" muted="" onmouseout="this.pause()" onmouseover="this.play()" playsinline="">
<source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 scale-95 group-hover/card:scale-100">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
<iconify-icon icon="solar:play-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full p-5 flex flex-col gap-1">
<span className="text-xs font-medium text-blue-400 tracking-wide uppercase">Design</span>
<h3 className="text-lg font-medium text-white tracking-tight leading-snug">The Evolution of Interfaces</h3>
<p className="text-sm text-neutral-400 line-clamp-1 mt-1">Exploring the subtle shifts in digital product design over the last decade.</p>
</div>
</div>

<div className="relative flex-none w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%] snap-center rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-1 cursor-pointer group/card aspect-[4/5] flex flex-col">
<div className="relative w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden">
<video className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen transition-opacity duration-300 group-hover/card:opacity-100" loop="" muted="" onmouseout="this.pause()" onmouseover="this.play()" playsinline="">
<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 scale-95 group-hover/card:scale-100">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
<iconify-icon icon="solar:play-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 flex flex-col gap-1">
<span className="text-xs font-medium text-emerald-400 tracking-wide uppercase">Engineering</span>
<h3 className="text-lg font-medium text-white tracking-tight leading-snug">Scalable Architectures</h3>
<p className="text-sm text-neutral-400 line-clamp-1 mt-1">Building systems that grow seamlessly with your user base.</p>
</div>
</div>

<div className="relative flex-none w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%] snap-center rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-1 cursor-pointer group/card aspect-[4/5] flex flex-col">
<div className="relative w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden">
<video className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen transition-opacity duration-300 group-hover/card:opacity-100" loop="" muted="" onmouseout="this.pause()" onmouseover="this.play()" playsinline="">
<source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 scale-95 group-hover/card:scale-100">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
<iconify-icon icon="solar:play-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 flex flex-col gap-1">
<span className="text-xs font-medium text-purple-400 tracking-wide uppercase">Workflow</span>
<h3 className="text-lg font-medium text-white tracking-tight leading-snug">Optimizing Delivery</h3>
<p className="text-sm text-neutral-400 line-clamp-1 mt-1">Techniques to drastically reduce time to market.</p>
</div>
</div>

<div className="relative flex-none w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%] snap-center rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-1 cursor-pointer group/card aspect-[4/5] flex flex-col">
<div className="relative w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden">
<video className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen transition-opacity duration-300 group-hover/card:opacity-100" loop="" muted="" onmouseout="this.pause()" onmouseover="this.play()" playsinline="">
<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 scale-95 group-hover/card:scale-100">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
<iconify-icon icon="solar:play-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 flex flex-col gap-1">
<span className="text-xs font-medium text-amber-400 tracking-wide uppercase">Insights</span>
<h3 className="text-lg font-medium text-white tracking-tight leading-snug">Data-Driven Decisions</h3>
<p className="text-sm text-neutral-400 line-clamp-1 mt-1">Leveraging analytics to build better user experiences.</p>
</div>
</div>

<div className="relative flex-none w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%] snap-center rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-1 cursor-pointer group/card aspect-[4/5] flex flex-col">
<div className="relative w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden">
<video className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen transition-opacity duration-300 group-hover/card:opacity-100" loop="" muted="" onmouseout="this.pause()" onmouseover="this.play()" playsinline="">
<source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 scale-95 group-hover/card:scale-100">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
<iconify-icon icon="solar:play-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5 flex flex-col gap-1">
<span className="text-xs font-medium text-rose-400 tracking-wide uppercase">Community</span>
<h3 className="text-lg font-medium text-white tracking-tight leading-snug">Open Source Ecosystems</h3>
<p className="text-sm text-neutral-400 line-clamp-1 mt-1">The power of collaboration in modern software.</p>
</div>
</div>
</div>

<button className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-neutral-900/80 backdrop-blur-md border border-neutral-700 flex items-center justify-center text-neutral-300 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-neutral-800 hover:text-white hover:scale-105 z-20 shadow-xl hidden md:flex pointer-events-auto cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20" id="nextBtn">
<iconify-icon icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</button>
</div>
</div>


    </>
  );
}
