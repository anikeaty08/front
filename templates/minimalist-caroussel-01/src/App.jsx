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



        document.addEventListener('DOMContentLoaded', () => {
            const slides = document.querySelectorAll('.slide');
            const indicators = document.querySelectorAll('.indicator');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            
            let currentIndex = 0;
            const totalSlides = slides.length;
            let interval;

            function updateSlides(index) {
                slides.forEach((slide, i) => {
                    if (i === index) {
                        slide.classList.remove('opacity-0', 'pointer-events-none');
                        slide.classList.add('opacity-100');
                    } else {
                        slide.classList.remove('opacity-100');
                        slide.classList.add('opacity-0', 'pointer-events-none');
                    }
                });

                indicators.forEach((ind, i) => {
                    if (i === index) {
                        ind.classList.remove('w-2', 'bg-stone-700', 'hover:bg-stone-500');
                        ind.classList.add('w-8', 'bg-white');
                    } else {
                        ind.classList.remove('w-8', 'bg-white');
                        ind.classList.add('w-2', 'bg-stone-700', 'hover:bg-stone-500');
                    }
                });
            }

            function nextSlide() {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateSlides(currentIndex);
            }

            function prevSlide() {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateSlides(currentIndex);
            }

            // Expose for indicator clicks
            window.goToSlide = (index) => {
                currentIndex = index;
                updateSlides(currentIndex);
                resetTimer();
            }

            function resetTimer() {
                clearInterval(interval);
                interval = setInterval(nextSlide, 5000);
            }

            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetTimer();
            });

            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetTimer();
            });

            // Init timer
            interval = setInterval(nextSlide, 5000);
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
      

<nav className="w-full border-b border-stone-800/50 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-slate-900 rounded-full"></div>
</div>
<span className="text-white tracking-tight font-medium text-sm">MONOLITH</span>
</div>
<div className="flex items-center gap-6">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Work</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Studio</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col items-center justify-center py-20 px-4 md:px-6">
<div className="w-full max-w-6xl space-y-12">

<div className="space-y-4 max-w-2xl animate-sequence">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-800 bg-slate-800/30">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
<span className="text-xs font-medium text-slate-300">New Collection</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.1]">
                    Capturing light in <br/>
<span className="text-slate-500">motion and stillness.</span>
</h1>
<p className="text-base md:text-lg text-slate-400 font-light max-w-lg leading-relaxed">
                    A curated selection of visual narratives exploring modern architecture and natural environments through a minimalist lens.
                </p>
</div>

<div className="relative w-full aspect-[4/3] md:aspect-[2.35/1] rounded-2xl overflow-hidden border border-stone-800 shadow-md bg-slate-800/20 animate-sequence delay-100 group">

<div className="absolute inset-0 w-full h-full" id="carousel-track">

<div className="slide absolute inset-0 w-full h-full opacity-100 transition-all duration-700 ease-in-out" data-index="0">
<img alt="Minimal Architecture" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-700 select-none" src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 md:p-12 w-full bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent">
<h3 className="text-xl md:text-2xl text-white font-normal tracking-tight mb-1">Brutalist Curves</h3>
<p className="text-sm text-slate-400 font-light">Kyoto, Japan</p>
</div>
</div>

<div className="slide absolute inset-0 w-full h-full opacity-0 pointer-events-none transition-all duration-700 ease-in-out" data-index="1">
<img alt="Abstract Light" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-700 select-none" src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 md:p-12 w-full bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent">
<h3 className="text-xl md:text-2xl text-white font-normal tracking-tight mb-1">Golden Hour Reflections</h3>
<p className="text-sm text-slate-400 font-light">Reykjavik, Iceland</p>
</div>
</div>

<div className="slide absolute inset-0 w-full h-full opacity-0 pointer-events-none transition-all duration-700 ease-in-out" data-index="2">
<img alt="Geometric Shadows" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-700 select-none" src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 md:p-12 w-full bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent">
<h3 className="text-xl md:text-2xl text-white font-normal tracking-tight mb-1">Geometric Solitude</h3>
<p className="text-sm text-slate-400 font-light">Berlin, Germany</p>
</div>
</div>
</div>

<div className="absolute top-6 right-6 md:top-8 md:right-8 flex gap-3 z-10">
<button className="group/btn flex items-center justify-center w-10 h-10 rounded-full border border-stone-700 bg-slate-900/50 backdrop-blur-sm text-slate-300 hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/20" id="prevBtn">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="group/btn flex items-center justify-center w-10 h-10 rounded-full border border-stone-700 bg-slate-900/50 backdrop-blur-sm text-slate-300 hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/20" id="nextBtn">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex gap-2 z-10">
<div className="indicator w-8 h-1 rounded-full bg-white transition-all duration-500 cursor-pointer" onclick="goToSlide(0)"></div>
<div className="indicator w-2 h-1 rounded-full bg-stone-700 hover:bg-stone-500 transition-all duration-500 cursor-pointer" onclick="goToSlide(1)"></div>
<div className="indicator w-2 h-1 rounded-full bg-stone-700 hover:bg-stone-500 transition-all duration-500 cursor-pointer" onclick="goToSlide(2)"></div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-stone-800 pt-8 animate-sequence delay-200">
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">Client</h4>
<p className="text-sm text-slate-400">Vercel Architecture</p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">Year</h4>
<p className="text-sm text-slate-400">2024</p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">Services</h4>
<p className="text-sm text-slate-400">Photography, Art Direction</p>
</div>
<div className="flex items-end justify-start md:justify-end">
<a className="group flex items-center gap-2 text-sm text-white hover:text-slate-300 transition-colors" href="#">
                        View Project
                        <iconify-icon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</main>


    </>
  );
}
