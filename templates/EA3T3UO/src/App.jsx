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


AOS.init({ once: true }); document.getElementById('year').textContent = new Date().getFullYear(); lucide.createIcons({attrs:{strokeWidth:1.5}});
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
      

<div className="fixed inset-0 pointer-events-none mix-blend-screen opacity-60" style={{backgroundImage: 'url(\'https://grainy-gradients.vercel.app/noise.svg\')', backgroundSize: '200px'}}></div>

<header className="h-screen bg-fixed bg-center bg-cover flex items-center justify-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&amp'}}>
<div className="text-center max-w-2xl px-6" data-aos="fade-up" data-aos-duration="800">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">Street Stories in Mono</h1>
<p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto">Black-and-white film frames capturing fleeting moments from cities around the globe.</p>
</div>
</header>

<section className="py-20 md:py-32 px-6 md:px-10 lg:px-20">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8" data-aos="slide-right">About the Photographer</h2>
<p className="text-gray-400 text-lg md:text-xl space-y-4" data-aos="fade" data-aos-delay="100">
        I wander the streets with a battered 35 mm camera, chasing geometry, shadow, and soul. Every shutter click is a quiet conversation with the city—an attempt to suspend its heartbeat in silver grains.
      </p>
</div>
</section>

<section className="h-screen bg-fixed bg-center bg-cover flex items-end" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1533055640609-bc8e33e033d4?auto=format&amp'}}>
<div className="w-full bg-gradient-to-t from-neutral-900/80 to-transparent py-12 px-6">
<h3 className="text-2xl md:text-3xl font-semibold" data-aos="fade-up">Tokyo | Neon Ghosts</h3>
</div>
</section>

<section className="h-screen bg-fixed bg-center bg-cover flex items-end" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1515023115689-589c94056163?auto=format&amp'}}>
<div className="w-full bg-gradient-to-t from-neutral-900/80 to-transparent py-12 px-6">
<h3 className="text-2xl md:text-3xl font-semibold" data-aos="fade-up">Paris | Rain-soaked Alleyways</h3>
</div>
</section>

<section className="h-screen bg-fixed bg-center bg-cover flex items-end" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&amp'}}>
<div className="w-full bg-gradient-to-t from-neutral-900/80 to-transparent py-12 px-6">
<h3 className="text-2xl md:text-3xl font-semibold" data-aos="fade-up">New York | Concrete Heartbeat</h3>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-10 lg:px-20 border-t border-neutral-800">
<div className="max-w-2xl mx-auto text-center space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight" data-aos="zoom-in">Own a Piece of the Journey</h2>
<p className="text-gray-400 text-lg md:text-xl" data-aos="fade" data-aos-delay="100">Limited-run darkroom prints, hand-signed and numbered.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-6 py-3 font-medium shadow transition hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/20" data-aos="fade-up" data-aos-delay="200" href="#buy">
<i className="w-5 h-5" data-lucide="shopping-cart"></i> Buy Prints
        </a>
<a className="inline-flex items-center gap-2 rounded-md border border-white/10 px-6 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20" data-aos="fade-up" data-aos-delay="300" href="https://instagram.com" target="_blank">
<i className="w-5 h-5" data-lucide="instagram"></i> Follow on IG
        </a>
</div>
</div>
</section>

<footer className="py-10 px-6 md:px-10 lg:px-20 border-t border-neutral-800 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center">
<span>© <span id="year"></span> SSIM.</span>
<span className="mt-4 sm:mt-0">Crafted in the Darkroom  ∙  Film Forever</span>
</footer>




    </>
  );
}
