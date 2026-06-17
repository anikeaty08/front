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



    document.addEventListener('DOMContentLoaded', function() {
      VANTA.DOTS({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xffffff,
        color2: 0xffff00,
        backgroundColor: 0x000000,
        size: 3.00,
        spacing: 33.00
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
      
<div className="relative min-h-screen overflow-hidden">
<div className="absolute inset-0 z-0 opacity-40" id="vanta-bg"></div>

<nav className="relative z-10 border-b-4 border-white">
<div className="container mx-auto flex justify-between items-center px-4 py-3">
<div className="text-2xl font-bold tracking-tighter uppercase">RAW</div>
<div className="flex space-x-4">
<a className="hover:underline hover:text-yellow-300 text-xs uppercase" href="#">WORKS</a>
<a className="hover:underline hover:text-yellow-300 text-xs uppercase" href="#">ABOUT</a>
<a className="hover:underline hover:text-yellow-300 text-xs uppercase" href="#">CONTACT</a>
</div>
</div>
</nav>
<main className="relative z-10 container mx-auto px-4 pt-12">

<div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
<div className="md:col-span-7">
<h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-6">
            UNAPOLOGETIC DESIGN
          </h1>
<div className="w-full h-4 bg-yellow-300 mb-8"></div>
<p className="text-lg mb-8 font-mono">
            Embracing the raw. Rejecting the polished. Building digital experiences that confront and challenge.
          </p>
<a className="inline-block bg-white text-black py-3 px-8 text-lg font-bold uppercase hover:bg-yellow-300 transition-colors" href="#">
            EXPLORE
          </a>
</div>
<div className="md:col-span-5 border-4 border-white p-0">
<div className="aspect-square bg-yellow-300 relative">
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-black text-9xl font-bold">!</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-0">
<div className="border-4 border-white p-6 hover:bg-white hover:text-black transition-colors">
<h2 className="text-2xl font-bold mb-4 uppercase">RAW POWER</h2>
<p className="mb-4">Unfiltered. Uncompromising. Digital concrete.</p>
<div className="w-1/2 h-1 bg-yellow-300"></div>
</div>
<div className="border-4 border-white p-6 hover:bg-white hover:text-black transition-colors">
<h2 className="text-2xl font-bold mb-4 uppercase">BOLD MOVES</h2>
<p className="mb-4">Rejecting convention. Embracing contrast.</p>
<div className="w-1/2 h-1 bg-yellow-300"></div>
</div>
<div className="border-4 border-white p-6 hover:bg-white hover:text-black transition-colors">
<h2 className="text-2xl font-bold mb-4 uppercase">PURE FORM</h2>
<p className="mb-4">Function exposed. Structure revealed.</p>
<div className="w-1/2 h-1 bg-yellow-300"></div>
</div>
</div>

<footer className="mt-24 border-t-4 border-white py-6">
<div className="flex flex-col md:flex-row justify-between items-start">
<div className="text-xs uppercase">
            © 2023 BRUTALIST STUDIO
          </div>
<div className="text-xs uppercase">
            FORM FOLLOWS FUNCTION
          </div>
</div>
</footer>
</main>
</div>


    </>
  );
}
