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



    // Mobile menu toggle
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
      document.getElementById('mobile-menu').classList.toggle('hidden');
    });

    // Initialize wave background
    document.addEventListener('DOMContentLoaded', function() {
      VANTA.WAVES({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x050505,
        shininess: 30.00,
        waveHeight: 15.00,
        waveSpeed: 0.75,
        zoom: 0.65
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
      

<header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
<div className="container mx-auto px-6">
<nav className="py-4 flex justify-between items-center">
<a className="text-xl font-bold tracking-wider" href="#">DESIGN<span className="text-blue-500">.</span></a>

<button className="md:hidden text-white" id="mobile-menu-button">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>

<div className="hidden md:flex space-x-8">
<a className="nav-link relative text-sm tracking-wider hover:text-gray-300 transition" href="#">Work</a>
<a className="nav-link relative text-sm tracking-wider hover:text-gray-300 transition" href="#">Services</a>
<a className="nav-link relative text-sm tracking-wider hover:text-gray-300 transition" href="#">About</a>
<a className="nav-link relative text-sm tracking-wider hover:text-gray-300 transition" href="#">Contact</a>
</div>
</nav>
</div>

<div className="hidden md:hidden bg-black/95 backdrop-blur-md" id="mobile-menu">
<div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
<a className="text-sm tracking-wider py-2 border-b border-gray-800" href="#">Work</a>
<a className="text-sm tracking-wider py-2 border-b border-gray-800" href="#">Services</a>
<a className="text-sm tracking-wider py-2 border-b border-gray-800" href="#">About</a>
<a className="text-sm tracking-wider py-2" href="#">Contact</a>
</div>
</div>
</header>

<section className="relative h-screen flex items-center" id="hero">
<div className="absolute inset-0 z-0" id="vanta-bg"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="max-w-5xl mx-auto text-center">
<h1 className="hero-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 leading-[0.9] px-4">MINIMALIST</h1>
<p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-8 px-4">
          We create clean, sophisticated designs that communicate clearly and stand the test of time.
        </p>
<div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 px-4">
<a className="px-8 py-3 border border-white hover:bg-white hover:text-black transition duration-300 text-sm tracking-wider" href="#">
            View Our Work
          </a>
<a className="px-8 py-3 bg-white text-black hover:bg-transparent hover:text-white border border-white transition duration-300 text-sm tracking-wider" href="#">
            Get In Touch
          </a>
</div>
</div>
</div>
<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</section>


    </>
  );
}
