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
      lucide.createIcons();
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
      
<main className="min-h-screen flex items-center justify-center p-6">
<section className="grid grid-cols-2 grid-rows-2 gap-6 w-full max-w-4xl">

<article className="relative rounded-xl p-6 backdrop-blur-xl bg-white/5 ring-1 ring-white/10 hover:ring-teal-500 transition-all duration-200" style={{animation: 'scaleIn .6s ease-out .0s backwards'}}>
<h2 className="font-[Chewy] font-light tracking-tight text-2xl text-teal-500 mb-1 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="activity"></i>  Activity
        </h2>
<p className="text-[15px] leading-snug">
          Monitor your daily tasks with a playful twist. Stay motivated and organized effortlessly.
        </p>
</article>

<article className="relative rounded-xl p-6 backdrop-blur-xl bg-white/5 ring-1 ring-white/10 hover:ring-teal-500 transition-all duration-200" style={{animation: 'scaleIn .6s ease-out .15s backwards'}}>
<h2 className="font-[Chewy] font-light tracking-tight text-2xl text-teal-500 mb-1 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="book-open"></i>  Learning
        </h2>
<p className="text-[15px] leading-snug">
          Capture notes and ideas in a creative space designed for lifelong learners and makers.
        </p>
</article>

<article className="relative rounded-xl p-6 backdrop-blur-xl bg-white/5 ring-1 ring-white/10 hover:ring-teal-500 transition-all duration-200" style={{animation: 'scaleIn .6s ease-out .3s backwards'}}>
<h2 className="font-[Chewy] font-light tracking-tight text-2xl text-teal-500 mb-1 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="clock"></i>  Schedule
        </h2>
<p className="text-[15px] leading-snug">
          Keep tabs on meetings &amp; deadlines with handwritten-style reminders that feel personal.
        </p>
</article>

<article className="relative rounded-xl p-6 backdrop-blur-xl bg-white/5 ring-1 ring-white/10 hover:ring-teal-500 transition-all duration-200" style={{animation: 'scaleIn .6s ease-out .45s backwards'}}>
<h2 className="font-[Chewy] font-light tracking-tight text-2xl text-teal-500 mb-1 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="heart"></i>  Wellness
        </h2>
<p className="text-[15px] leading-snug">
          Daily reflections, gratitude prompts, and mindful check-ins to nourish the soul.
        </p>
</article>
</section>
</main>




    </>
  );
}
