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



    (function() {
      const heading = document.getElementById('animated-heading');
      const text = heading.textContent.trim();
      heading.innerHTML = '';
      
      let totalDelay = 0;
      text.split('').forEach((char) => {
        if (char === ' ') {
          heading.appendChild(document.createTextNode(' '));
        } else {
          const span = document.createElement('span');
          span.className = 'letter';
          span.textContent = char;
          span.style.setProperty('--delay', (totalDelay * 0.08) + 's');
          heading.appendChild(span);
          totalDelay++;
        }
      });

      lucide.createIcons();
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
      
<section className="relative z-10 overflow-hidden w-full max-w-7xl mx-auto mt-6 p-6 sm:p-8 bg-neutral-900/60 border border-white/10 rounded-2xl backdrop-blur" style={{height: '500px'}}>
<div className="absolute inset-0">
<div className="flex w-full h-full items-center">

<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tighter max-w-xl leading-[0.95] animate-fadeSlideIn animation-delay-300" id="animated-heading">
              Discover Beautiful Stock Photos
            </h1>
<p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-[60ch] animate-fadeSlideIn animation-delay-400">
              Over 3 million high-quality stock photos from talented photographers worldwide. Free to use for personal and commercial projects.
            </p>
<div className="mt-6 animate-fadeSlideIn animation-delay-500">
<div className="flex items-center gap-4">

<a className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/20 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5" href="tel:+1234567890">
<i className="text-white/90" data-lucide="phone" style={{width: '20px', height: '20px'}}></i>
</a>

<a className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/20 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5" href="mailto:hello@example.com">
<i className="text-white/90" data-lucide="mail" style={{width: '20px', height: '20px'}}></i>
</a>

<a className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/20 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5" href="https://facebook.com" rel="noopener noreferrer" target="_blank">
<i className="text-white/90" data-lucide="facebook" style={{width: '20px', height: '20px'}}></i>
</a>

<a className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/20 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5" href="https://instagram.com" rel="noopener noreferrer" target="_blank">
<i className="text-white/90" data-lucide="instagram" style={{width: '20px', height: '20px'}}></i>
</a>
</div>
</div>
</div>
</div>

<div className="hidden lg:block absolute top-1/2 right-8 -translate-y-1/2 -translate-x-16 pointer-events-none">
<div className="relative" style={{width: '340px', height: '400px'}}>

<div className="floating-img-1 absolute top-0 right-0 w-32 h-40 rounded-xl ring-2 ring-white/20 shadow-2xl overflow-hidden translate-x-8">
<img alt="Floating image 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&amp;h=500&amp;fit=crop"/>
</div>

<div className="floating-img-2 absolute top-24 right-24 w-36 h-44 rounded-xl ring-2 ring-white/20 shadow-2xl overflow-hidden -translate-x-16">
<img alt="Floating image 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&amp;h=500&amp;fit=crop"/>
</div>

<div className="floating-img-3 absolute right-8 bottom-0 w-28 h-36 rounded-xl ring-2 ring-white/20 shadow-2xl overflow-hidden translate-x-12">
<img alt="Floating image 3" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1635776062043-223faf322554?w=400&amp;h=500&amp;fit=crop"/>
</div>

<div className="floating-img-4 absolute top-32 left-0 w-32 h-40 rounded-xl ring-2 ring-white/20 shadow-2xl overflow-hidden -translate-x-3 translate-y-16">
<img alt="Floating image 4" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&amp;h=500&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
