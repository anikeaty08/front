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
      VANTA.GLOBE({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x5E62FF,
        color2: 0x9966FF,
        size: 1.50,
        backgroundColor: 0x000000
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
      
<div className="relative min-h-screen">
<div className="absolute inset-0 z-0" id="vanta-bg"></div>
<nav className="relative z-10 px-6 py-8">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="text-2xl font-bold">nebula<span className="text-indigo-500">.</span></div>
<div className="hidden md:flex space-x-8 text-sm">
<a className="hover:text-indigo-500 transition-colors" href="#">Portfolio</a>
<a className="hover:text-indigo-500 transition-colors" href="#">Capabilities</a>
<a className="hover:text-indigo-500 transition-colors" href="#">Team</a>
<a className="hover:text-indigo-500 transition-colors" href="#">Blog</a>
<a className="hover:text-indigo-500 transition-colors" href="#">Reach Out</a>
</div>
<button className="md:hidden">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</nav>
<main className="relative z-10 px-6 pt-12 pb-24">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-center text-center mb-20">
<div className="inline-block mb-6 px-4 py-1 rounded-full border border-indigo-500 text-xs uppercase tracking-wider">Creative Innovation Studio</div>
<h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            We build <span className="gradient-text">immersive worlds</span> that inspire
          </h1>
<p className="text-lg text-gray-400 max-w-2xl mb-10">
            Pioneering digital experiences that fuse art with technology to transform brands and create meaningful connections.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity" href="#">
              View portfolio
            </a>
<a className="px-8 py-3 bg-transparent border border-white/20 rounded-full text-white font-medium hover:bg-white/10 transition-colors" href="#">
              Contact us
            </a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
<div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm">
<div className="text-indigo-500 text-4xl font-bold mb-1">12+</div>
<div className="text-sm text-gray-400">Years of Innovation</div>
</div>
<div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm">
<div className="text-indigo-500 text-4xl font-bold mb-1">200+</div>
<div className="text-sm text-gray-400">Worlds Created</div>
</div>
<div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm">
<div className="text-indigo-500 text-4xl font-bold mb-1">45+</div>
<div className="text-sm text-gray-400">Creative Minds</div>
</div>
<div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm">
<div className="text-indigo-500 text-4xl font-bold mb-1">25+</div>
<div className="text-sm text-gray-400">Industry Accolades</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
