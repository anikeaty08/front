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

        // Spotlight Effect Logic
        const container = document.getElementById('options-container');
        const cards = document.querySelectorAll('.spotlight-card');

        container.addEventListener('mousemove', (e) => {
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            });
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
      

<div className="fixed inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-30 mix-blend-multiply pointer-events-none"></div>

<main className="relative z-10 w-full max-w-5xl h-full md:h-auto md:aspect-[4/3] md:max-h-full newsprint-bg shadow-2xl flex flex-col md:rotate-[0.1deg] border border-stone-300">

<header className="px-4 py-3 md:px-8 md:py-5 border-b-[3px] border-black shrink-0">
<div className="flex justify-between items-end border-b border-black pb-1 mb-2">
<span className="font-body font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-600">Vol. 04</span>
<span className="font-body font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-600">Morning Edition</span>
<span className="font-body font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-600">5¢</span>
</div>
<h1 className="text-4xl md:text-6xl text-center ink-text text-black font-masthead tracking-tight leading-none mb-2 md:mb-3">The Daily Question</h1>
<div className="flex items-center justify-center gap-3 md:gap-6">
<div className="h-px bg-black w-8 md:w-24"></div>
<p className="text-xs md:text-base font-semibold italic text-stone-800 font-headline">"Knowledge Through Analysis"</p>
<div className="h-px bg-black w-8 md:w-24"></div>
</div>
</header>

<section className="px-4 md:px-8 py-3 md:py-4 flex-1 min-h-0 flex flex-col justify-center overflow-hidden max-w-4xl mx-auto">
<div className="border-[2px] border-black p-1 bg-white shadow-sm relative group h-full w-full">

<div className="relative w-full h-full border border-stone-200 overflow-hidden">
<img alt="Main Feature" className="w-full h-full block object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96b2171c-1bee-4591-8b90-a673f0893a09_1600w.jpg"/>

<div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20 bg-[url('https://www.transparenttextures.com/patterns/grid-noise.png')]"></div>

<label className="flex items-center justify-center cursor-pointer hover:bg-black/5 transition-colors duration-300 z-20 absolute top-0 right-0 bottom-0 left-0">
<input accept="image/*" className="hidden" type="file"/>
<div className="bg-white border-[1.5px] border-black px-3 py-1 shadow-md transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
<span className="font-headline font-bold text-[10px] uppercase tracking-widest text-black">Replace</span>
</div>
</label>
</div>
</div>
</section>

<div className="border-t-[2px] border-black mx-4 md:mx-8 shrink-0"></div>

<form className="grid grid-cols-1 md:grid-cols-3 divide-y-[2px] md:divide-y-0 md:divide-x-[2px] divide-black px-4 md:px-8 pb-3 md:pb-6 shrink-0" id="options-container">

<label className="group relative cursor-pointer spotlight-card p-3 md:p-5 hover:bg-stone-900/5 transition-colors">
<input className="peer sr-only" name="personality" type="radio" value="analytical"/>
<div className="absolute inset-0 spotlight-bg pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full justify-start">
<div className="flex justify-between items-center border-b border-stone-400 pb-1 mb-2">
<span className="font-masthead text-lg text-stone-400 group-hover:text-black transition-colors">I.</span>
<svg className="lucide lucide-brain w-4 h-4 text-stone-800 stroke-[1.5]" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
<h3 className="font-headline font-semibold text-lg md:text-xl text-black tracking-tight mb-1 group-hover:underline decoration-1 underline-offset-4">The Analyst</h3>
<p className="text-sm md:text-base leading-tight text-stone-900 font-body">Logical, objective, and driven by data patterns.</p>
</div>
</label>

<label className="group relative cursor-pointer spotlight-card p-3 md:p-5 hover:bg-stone-900/5 transition-colors">
<input className="peer sr-only" name="personality" type="radio" value="creative"/>
<div className="absolute inset-0 spotlight-bg pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full justify-start">
<div className="flex justify-between items-center border-b border-stone-400 pb-1 mb-2">
<span className="font-masthead text-lg text-stone-400 group-hover:text-black transition-colors">II.</span>
<svg className="lucide lucide-wand-2 w-4 h-4 text-stone-800 stroke-[1.5]" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</div>
<h3 className="font-headline font-semibold text-lg md:text-xl text-black tracking-tight mb-1 group-hover:underline decoration-1 underline-offset-4">The Creator</h3>
<p className="text-sm md:text-base leading-tight text-stone-900 font-body">Imaginative, expressive, fueled by ideas.</p>
</div>
</label>

<label className="group relative cursor-pointer spotlight-card p-3 md:p-5 hover:bg-stone-900/5 transition-colors">
<input className="peer sr-only" name="personality" type="radio" value="explorer"/>
<div className="absolute inset-0 spotlight-bg pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full justify-start">
<div className="flex justify-between items-center border-b border-stone-400 pb-1 mb-2">
<span className="font-masthead text-lg text-stone-400 group-hover:text-black transition-colors">III.</span>
<svg className="lucide lucide-compass w-4 h-4 text-stone-800 stroke-[1.5]" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="font-headline font-semibold text-lg md:text-xl text-black tracking-tight mb-1 group-hover:underline decoration-1 underline-offset-4">The Explorer</h3>
<p className="text-sm md:text-base leading-tight text-stone-900 font-body">Curious, adventurous, seeking horizons.</p>
</div>
</label>
</form>

<div className="px-4 md:px-8 pb-3 mt-auto shrink-0">
<div className="border-t border-black pt-2 flex justify-between items-center font-body text-[10px] text-stone-600 uppercase tracking-wider">
<span>Printed in USA</span>
<span className="italic normal-case text-[10px]">Page 1</span>
</div>
</div>
</main>


    </>
  );
}
