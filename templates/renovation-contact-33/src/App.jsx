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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<div className="absolute inset-0 z-0 pointer-events-none flex flex-col">
<div className="w-full h-[45%] lg:h-[55%] bg-[#F4F3F0]"></div>
<div className="w-full flex-1 bg-[#1C1917]"></div>
</div>

<main className="relative z-10 flex-1 flex flex-col pt-16 sm:pt-24 lg:pt-32 w-full">

<section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 shrink-0">
<div className="bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] w-full flex flex-col lg:flex-row p-8 sm:p-12 lg:p-20 gap-12 lg:gap-24">

<div className="w-full lg:w-[45%] flex gap-4 sm:gap-6 h-[450px] sm:h-[500px] lg:h-[600px]">
<img alt="Travaux de rénovation en cours" className="w-[45%] h-full object-cover object-center bg-neutral-100" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Résultat intérieur rénové" className="w-[55%] h-[92%] self-end object-cover object-center bg-neutral-100" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="w-full lg:w-[55%] flex flex-col justify-center py-4">
<h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] font-semibold tracking-tight text-neutral-900 mb-12">
                        Un projet de rénovation ?<br/>Parlons-en
                    </h2>
<div className="flex flex-col gap-6 mb-12">
<div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
<span className="text-lg font-semibold text-neutral-900 w-28">Téléphone :</span>
<span className="text-lg text-neutral-600">06 XX XX XX XX</span>
</div>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
<span className="text-lg font-semibold text-neutral-900 w-28">Email :</span>
<a className="text-lg text-neutral-600 hover:text-[#B85C44] transition-colors" href="mailto:contact@noia-renovation.com">contact@noia-renovation.com</a>
</div>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
<span className="text-lg font-semibold text-neutral-900 w-28">Zone :</span>
<span className="text-lg text-neutral-600">Clermont-Ferrand et alentours</span>
</div>
</div>
<a className="inline-flex items-center justify-center px-10 py-5 bg-[#B85C44] hover:bg-[#A04E39] text-white text-lg font-medium transition-colors w-fit" href="#">
                        Demander un devis
                    </a>
</div>
</div>
</section>

<footer className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-16 flex flex-col items-center">

<div className="flex items-center gap-3 mb-10 text-white">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="hammer"></i>
<span className="text-3xl font-semibold tracking-tight">NOÏA.</span>
</div>

<nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-12">
<a className="text-lg text-neutral-400 hover:text-white transition-colors" href="#">Accueil</a>
<span className="text-neutral-700 hidden sm:block">|</span>
<a className="text-lg text-neutral-400 hover:text-white transition-colors" href="#">Réalisations</a>
<span className="text-neutral-700 hidden sm:block">|</span>
<a className="text-lg text-neutral-400 hover:text-white transition-colors" href="#">Services</a>
<span className="text-neutral-700 hidden sm:block">|</span>
<a className="text-lg text-neutral-400 hover:text-white transition-colors" href="#">Contact</a>
</nav>

<div className="flex items-center gap-8 mb-10">
<a aria-label="Facebook" className="text-neutral-400 hover:text-white transition-colors" href="#">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="facebook"></i>
</a>
<a aria-label="Instagram" className="text-neutral-400 hover:text-white transition-colors" href="#">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="instagram"></i>
</a>
<a aria-label="LinkedIn" className="text-neutral-400 hover:text-white transition-colors" href="#">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="linkedin"></i>
</a>
<a aria-label="X (Twitter)" className="text-neutral-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="x"></i>
</a>
</div>

<p className="text-base text-neutral-500">
                Copyright © 2026 NOÏA Rénovation. Tous droits réservés.
            </p>
</footer>
</main>


    </>
  );
}
