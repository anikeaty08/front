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
      

<header className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-6 py-8 md:px-12 lg:px-16 text-xs font-medium uppercase tracking-widest text-white mix-blend-difference">
<span>H. K. S.</span>
<span>RETREAT</span>
</header>

<main className="flex-grow relative flex flex-col justify-center min-h-screen w-full overflow-hidden">

<div className="absolute inset-0 w-full h-full">
<img alt="Retreat location view" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-black/5"></div>
</div>

<div className="relative z-10 w-full bg-white/95 backdrop-blur-md border-y border-gray-200/60 shadow-sm">
<div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-4 md:py-5">

<div className="flex flex-wrap justify-center lg:justify-between items-center gap-y-3 gap-x-6 text-sm md:text-base font-medium">
<div className="w-full md:w-auto text-center lg:text-left text-gray-900">
                        Весняний ретрит
                    </div>
<div className="w-full md:w-auto text-center text-gray-900">
                        Film &amp; Flow: Türkiye
                    </div>
<div className="w-full lg:w-auto text-center text-gray-600">
                        15.05.2026 - 21.05.2026
                    </div>
<div className="w-[calc(50%-0.75rem)] lg:w-auto text-right lg:text-center text-gray-600">
                        2 локації
                    </div>
<div className="w-[calc(50%-0.75rem)] lg:w-auto text-left lg:text-right text-gray-600">
                        10 учасниць
                    </div>
</div>
</div>
</div>
</main>

<footer className="absolute bottom-0 left-0 right-0 z-20 flex justify-between items-center px-6 py-8 md:px-12 lg:px-16 text-sm font-medium text-white mix-blend-difference">
<a className="hover:opacity-70 transition-opacity duration-300 ease-out" href="#">Instagram</a>
<a className="hover:opacity-70 transition-opacity duration-300 ease-out" href="#">Email</a>
</footer>


    </>
  );
}
