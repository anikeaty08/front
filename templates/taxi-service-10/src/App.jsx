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
      

<div className="spline-container">
<iframe frameborder="0" height="100%" src="https://my.spline.design/glassmorphlandingpage-nyOS3MRrg0GCft1x8mCtqPwk/" width="100%"></iframe>
</div>

<div className="relative min-h-screen flex flex-col pointer-events-none">

<nav className="px-6 py-8 w-full z-10">
<div className="max-w-6xl mx-auto flex justify-between items-center">
<div className="text-white font-bold text-lg tracking-tight flex items-center gap-2">
<iconify-icon className="text-yellow-400" height="24" icon="solar:taxi-linear" width="24"></iconify-icon>
          LEŠŤ TAXI
        </div>
<div className="hidden md:flex space-x-8 text-white/70 text-sm font-medium">
<a className="hover:text-yellow-400 transition-colors pointer-events-auto" href="#">Domov</a>
<a className="hover:text-yellow-400 transition-colors pointer-events-auto" href="#">Služby</a>
<a className="hover:text-yellow-400 transition-colors pointer-events-auto" href="#">Cenník</a>
<a className="hover:text-yellow-400 transition-colors pointer-events-auto" href="#">Kontakt</a>
</div>
<a className="group flex items-center gap-2 text-white text-xs font-semibold bg-white/10 border border-white/10 rounded-full pl-4 pr-5 py-2.5 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all pointer-events-auto backdrop-blur-md" href="tel:+421900000000">
<iconify-icon height="16" icon="solar:phone-calling-linear" width="16"></iconify-icon>
<span>+421 908 619 409</span>
</a>
</div>
</nav>

<main className="flex-grow flex items-center px-6 mt-10 md:mt-0">
<div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-medium mb-6 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
</span>
            K dispozícii 24 hodín denne
          </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight">
            Bezpečná cesta <br/>
<span className="font-semibold text-white">do vášho cieľa.</span>
</h1>
<p className="text-gray-400 mt-6 text-base md:text-lg leading-relaxed max-w-lg font-light">
            Profesionálna taxislužba v oblasti Lešť, Pliešovce, Zvolen a okolie. Ponúkame komfortnú prepravu osôb, letiskové transfery a kuriérske služby.
          </p>
<div className="mt-10 flex flex-wrap gap-4">
<a className="bg-white text-black rounded-full px-8 py-3.5 text-sm font-semibold hover:bg-yellow-400 transition-all pointer-events-auto flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="tel:+421908619409">
<iconify-icon height="20" icon="solar:phone-calling-linear" width="20"></iconify-icon>
              Objednať Taxi
            </a>
<button className="bg-transparent border border-white/20 text-white rounded-full px-8 py-3.5 text-sm font-medium hover:bg-white/5 transition-all pointer-events-auto backdrop-blur-sm">
              Naše služby
            </button>
</div>

<div className="grid grid-cols-3 gap-8 mt-16 border-t border-white/10 pt-8">
<div>
<iconify-icon className="text-yellow-400 mb-2" height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<p className="text-xl font-medium text-white">Non-stop</p>
<p className="text-white/40 text-xs mt-1 font-medium">Dostupnosť</p>
</div>
<div>
<iconify-icon className="text-yellow-400 mb-2" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
<p className="text-xl font-medium text-white">100%</p>
<p className="text-white/40 text-xs mt-1 font-medium">Spoľahlivosť</p>
</div>
<div>
<iconify-icon className="text-yellow-400 mb-2" height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
<p className="text-xl font-medium text-white">Lešť</p>
<p className="text-white/40 text-xs mt-1 font-medium">A okolie</p>
</div>
</div>
</div>
</div>
</main>

<footer className="px-6 py-8 mt-auto border-t border-white/5 bg-black/20 backdrop-blur-lg">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-white/40 text-xs font-medium">
          © 2023 LEŠŤ TAXI. Všetky práva vyhradené.
        </div>
<div className="flex items-center space-x-6">
<a className="text-white/40 hover:text-white transition-colors pointer-events-auto flex items-center gap-2 text-xs" href="#">
<iconify-icon height="16" icon="solar:letter-linear" width="16"></iconify-icon>
            info@lesttaxi.com
          </a>
<div className="h-3 w-px bg-white/10"></div>
<div className="flex space-x-4">
<a className="text-white/40 hover:text-white transition-colors pointer-events-auto" href="#">
<iconify-icon height="18" icon="solar:facebook-linear" width="18"></iconify-icon>
</a>
<a className="text-white/40 hover:text-white transition-colors pointer-events-auto" href="#">
<iconify-icon height="18" icon="solar:instagram-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
