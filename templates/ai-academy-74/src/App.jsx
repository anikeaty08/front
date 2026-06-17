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



      // Icons
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Simple 2:1 slider
      const track = document.getElementById('slider-track');
      const slides = Array.from(document.querySelectorAll('[data-slide]'));
      const dots = Array.from(document.querySelectorAll('#dots button'));
      const prev = document.getElementById('prevBtn');
      const next = document.getElementById('nextBtn');

      let i = 0;
      let autoplay;

      function goTo(index) {
        i = (index + slides.length) % slides.length;
        track.style.transform = `translateX(-${i * 100}%)`;
        dots.forEach((d, idx) => {
          d.classList.toggle('bg-neutral-900', idx === i);
          d.classList.toggle('bg-neutral-300', idx !== i);
        });
      }

      function startAutoplay() {
        stopAutoplay();
        autoplay = setInterval(() => goTo(i + 1), 5000);
      }

      function stopAutoplay() {
        if (autoplay) clearInterval(autoplay);
      }

      // Dots events
      dots.forEach((d, idx) => {
        d.addEventListener('click', () => {
          goTo(idx);
          startAutoplay();
        });
      });

      // Prev/Next (guards in case controls are not present)
      if (prev) prev.addEventListener('click', () => { goTo(i - 1); startAutoplay(); });
      if (next) next.addEventListener('click', () => { goTo(i + 1); startAutoplay(); });

      // Pause on hover
      const container = track.parentElement;
      container.addEventListener('mouseenter', stopAutoplay);
      container.addEventListener('mouseleave', startAutoplay);

      // Init
      goTo(0);
      startAutoplay();
    
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
      

<div className="w-full bg-black text-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-2 text-sm">
<p className="opacity-90">Early access cohort opens soon — limited seats</p>
<a className="inline-flex items-center gap-1 text-white/80 hover:text-white" href="#waitlist">
<i className="w-4 h-4" data-lucide="sparkles"></i>
<span>Join the waitlist</span>
</a>
</div>
</div>
</div>

<header className="sticky top-0 bg-white/70 backdrop-blur z-40 border-b border-neutral-200/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-neutral-900 text-white font-medium tracking-tight">A</span>
<span className="sr-only">AI Academy</span>
</a>
<nav className="hidden sm:flex items-center gap-6 text-sm">
<a className="text-neutral-600 hover:text-neutral-900" href="#">Programs</a>
<a className="text-neutral-600 hover:text-neutral-900" href="#">Curriculum</a>
<a className="text-neutral-600 hover:text-neutral-900" href="#">Mentors</a>
<a className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-3.5 py-1.5 text-neutral-900 hover:bg-neutral-50" href="#waitlist">
<i className="w-4 h-4" data-lucide="mail"></i>
<span>Join</span>
</a>
</nav>
</div>
</header>

<main className="relative">
<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-24 sm:pt-20 sm:pb-28" style={{fontFamily: 'PPRadioGrotesk-Regular, sans-serif'}}>
<div className="mx-auto max-w-3xl text-center">
<div className="mx-auto mb-10 sm:mb-12 w-full max-w-5xl">

<div className="relative mx-auto w-full aspect-[2/1] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)] bg-neutral-950">

<div className="flex h-full w-full transition-transform duration-700 ease-out" id="slider-track">

<div className="relative w-full shrink-0 grow-0 basis-full" data-slide="">
<img alt="Generative visuals animation" className="h-full w-full object-cover opacity-90" src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif"/>
<div className="absolute left-4 top-4">
<span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-neutral-900">LIVE</span>
</div>
<div className="absolute right-4 bottom-4">
<span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-neutral-900">2 weeks</span>
</div>
</div>

<div className="relative w-full shrink-0 grow-0 basis-full" data-slide="">
<img alt="AI data flow animation" className="h-full w-full object-cover" src="https://media.giphy.com/media/3o7aCTPPm4OHfRLSH6/giphy.gif"/>
<div className="absolute left-4 top-4">
<span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-neutral-900">WORKSHOP</span>
</div>
<div className="absolute right-4 bottom-4">
<span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-neutral-900">4 weeks</span>
</div>
</div>

<div className="relative w-full shrink-0 grow-0 basis-full" data-slide="">
<img alt="Minimal studio with glowing screen" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-4 top-4">
<span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-neutral-900">COHORT</span>
</div>
<div className="absolute right-4 bottom-4">
<span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-neutral-900">8 weeks</span>
</div>
</div>
</div>
</div>

<div className="mt-4 flex items-center justify-center gap-2" id="dots">
<button aria-label="Go to slide 1" className="h-2.5 w-2.5 rounded-full bg-neutral-900"></button>
<button aria-label="Go to slide 2" className="h-2.5 w-2.5 rounded-full bg-neutral-300 hover:bg-neutral-400"></button>
<button aria-label="Go to slide 3" className="h-2.5 w-2.5 rounded-full bg-neutral-300 hover:bg-neutral-400"></button>
</div>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight" style={{fontFamily: 'RadioGrotesk-Medium, sans-serif', fontStyle: 'normal', fontWeight: '400', color: 'rgb(0, 0, 0)', fontSize: '68px', lineHeight: '67px'}}>
            Master AI Skills in 2-8 weeks.
          </h1>
<p className="mt-4 text-base sm:text-lg text-neutral-600" style={{fontFamily: 'PPRadioGrotesk-Regular, sans-serif', fontStyle: 'normal', fontWeight: '400', color: 'rgb(0, 0, 0)', fontSize: '17px', lineHeight: '24px'}}>
            Cohort-based programs that teach practical AI workflows for builders, designers, and product teams. Hands-on projects, mentor support, and a portfolio-ready capstone.
          </p>
<div className="mt-8 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-white bg-neutral-900 border-neutral-900 hover:bg-neutral-800 hover:border-neutral-800" href="#" id="waitlist" style={{fontFamily: 'PPRadioGrotesk-Regular, sans-serif', fontStyle: 'normal', fontWeight: '400', color: 'rgb(255, 255, 255)', fontSize: '26px', lineHeight: '43px'}}>
<i className="w-5 h-5" data-lucide="mail-plus"></i>
<span>Join the waitlist</span>
</a>
<a className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900" href="#" style={{fontFamily: 'PPRadioGrotesk-Regular, sans-serif', fontWeight: '400'}}>
<i className="w-5 h-5" data-lucide="play-circle"></i>
<span className="text-sm">See sample lesson</span>
</a>
</div>
<p className="mt-3 text-sm text-neutral-500" style={{fontFamily: 'PPRadioGrotesk-Regular, sans-serif', fontWeight: '400'}}>Next cohort: Jan 13 • Live online • Limited seats</p>
</div>
</section>
</main>


    </>
  );
}
