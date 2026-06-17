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
            VANTA.BIRDS({
                el: "#vanta-bg",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: 0x0f172a,
                color1: 0x5f27cd,
                color2: 0x6c5ce7,
                birdSize: 1.20,
                wingSpan: 20.00,
                speedLimit: 4.00,
                separation: 30.00,
                quantity: 3.00
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
      
<div className="relative flex items-center justify-center min-h-screen w-full overflow-hidden" id="hero">

<div className="absolute inset-0 z-0" id="vanta-bg"></div>

<div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
<h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
<span className="block">Discover Something</span>
<span className="block text-indigo-400">Extraordinary</span>
</h1>
<p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future with our innovative solutions designed to transform your digital presence.
            </p>
<div className="mt-10 flex justify-center gap-4">
<a className="px-8 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-xl" href="#">
                    Get Started
                </a>
<a className="px-8 py-3 rounded-md bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors duration-300 border border-gray-600" href="#">
                    Learn More
                </a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
</svg>
</div>
</div>


    </>
  );
}
