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



        // Initialize Icons
        lucide.createIcons();

        /* --- SYSTEM 1: SCROLL OBSERVER --- */
        const observerOptions = {
            root: null,
            rootMargin: '0px', // Trigger exactly when entering viewport
            threshold: 0.15    // 15% of element must be visible
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-visible');
                    // Optional: Stop observing once revealed
                    obs.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        // Attach observer to all elements with animation classes
        document.querySelectorAll('.scroll-hidden, .scroll-scale-hidden').forEach((el) => {
            observer.observe(el);
        });


        /* --- SYSTEM 2: SLIDER LOGIC --- */
        const slides = document.querySelectorAll('.slide');
        const indicators = document.querySelectorAll('.slider-nav > div');
        let currentSlide = 0;
        const SLIDE_DURATION = 5000; // 5 Seconds
        let slideInterval;

        function updateSlider(index) {
            // 1. Reset all slides
            slides.forEach(s => s.classList.remove('active'));
            
            // 2. Reset all indicators (remove class and reset width manually to be safe)
            indicators.forEach(ind => {
                ind.classList.remove('active-indicator');
                const fill = ind.querySelector('.progress-fill');
                fill.style.transition = 'none'; 
                fill.style.width = '0%';
            });

            // 3. Activate current slide
            slides[index].classList.add('active');

            // 4. Animate current indicator
            const currentIndicator = indicators[index];
            currentIndicator.classList.add('active-indicator');
            
            // Force reflow to allow transition to restart
            void currentIndicator.offsetWidth; 

            // Start filling the bar
            const fill = currentIndicator.querySelector('.progress-fill');
            fill.style.transition = `width ${SLIDE_DURATION}ms linear`;
            fill.style.width = '100%';
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlider(currentSlide);
        }

        // Initialize
        updateSlider(0);
        slideInterval = setInterval(nextSlide, SLIDE_DURATION);

        // Optional: Pause on hover (not implemented in CSS but logic would go here)
    
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
      

<section className="relative w-full h-[60vh] bg-slate-900 overflow-hidden text-white">

<div className="slide active" data-index="0">
<div className="absolute inset-0 bg-slate-800">

<div className="slide-bg bg-gradient-to-br from-indigo-900 to-slate-900"></div>
</div>
<div className="slide-content relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
<span className="text-[#FBC02D] font-mono text-xs mb-4">01. ANIMATION SYSTEM</span>
<h1 className="text-6xl font-semibold tracking-tight mb-4">Fade &amp; Scale</h1>
<p className="text-xl text-slate-300 max-w-lg">Background images scale slowly (Ken Burns) while content slides up with a cubic-bezier ease.</p>
</div>
</div>

<div className="slide" data-index="1">
<div className="absolute inset-0 bg-slate-800">
<div className="slide-bg bg-gradient-to-br from-slate-900 to-indigo-900"></div>
</div>
<div className="slide-content relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
<span className="text-[#FBC02D] font-mono text-xs mb-4">02. PROGRESS</span>
<h1 className="text-6xl font-semibold tracking-tight mb-4">Timed Indicators</h1>
<p className="text-xl text-slate-300 max-w-lg">The progress bars below sync perfectly with the JavaScript interval timer.</p>
</div>
</div>

<div className="slider-nav absolute bottom-10 left-6 flex gap-4 z-20">

<div className="w-16 h-1 bg-white/20 rounded overflow-hidden active-indicator" id="indicator-0">
<div className="progress-fill"></div>
</div>
<div className="w-16 h-1 bg-white/20 rounded overflow-hidden" id="indicator-1">
<div className="progress-fill"></div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-24 space-y-24">
<div className="space-y-6">
<h2 className="text-3xl font-semibold text-slate-900">Scroll Trigger System</h2>
<p className="text-slate-600">Scroll down to see elements reveal themselves.</p>
</div>

<div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm scroll-hidden">
<div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
<svg className="w-5 h-5" data-lucide="arrow-up"></svg>
</div>
<h3 className="text-xl font-medium mb-2">Translate Y Reveal</h3>
<p className="text-slate-500">This element uses <code>.scroll-hidden</code>. It translates from Y:24px to Y:0px while fading in.</p>
</div>

<div className="grid grid-cols-2 gap-6">
<div className="aspect-square bg-indigo-500 rounded-2xl scroll-scale-hidden flex items-center justify-center text-white font-medium">
                Scale Reveal
            </div>
<div className="aspect-square bg-indigo-400 rounded-2xl scroll-scale-hidden delay-200 flex items-center justify-center text-white font-medium">
                Delay 200ms
            </div>
</div>

<div className="space-y-4">
<div className="h-16 bg-white border border-slate-200 rounded-xl flex items-center px-6 scroll-hidden">List Item 1</div>
<div className="h-16 bg-white border border-slate-200 rounded-xl flex items-center px-6 scroll-hidden delay-100">List Item 2 (100ms delay)</div>
<div className="h-16 bg-white border border-slate-200 rounded-xl flex items-center px-6 scroll-hidden delay-200">List Item 3 (200ms delay)</div>
</div>
</section>


    </>
  );
}
