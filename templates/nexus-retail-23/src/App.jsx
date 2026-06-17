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

        // Mouse Parallax Logic
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;

            // Move Background Text
            const bgText = document.querySelector('h1');
            bgText.style.transform = `translateX(${x}px) translateY(${y}px)`;

            // Subtle rotation of 3D object based on mouse
            const object = document.getElementById('hero-object');
            const rotateX = y * 0.5;
            const rotateY = x * 0.5;
            object.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
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
      

<nav className="absolute top-0 w-full p-6 md:p-8 flex justify-between items-center z-50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-[#1D1D1F] rounded-full"></div>
<span className="font-semibold text-lg tracking-tight">Nexus</span>
</div>
<button className="hidden md:block text-sm font-medium text-gray-500 hover:text-black transition-colors">Menu</button>
</nav>

<div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0 pointer-events-none" id="parallax-bg">
<h1 className="text-[15vw] md:text-[22vw] font-bold text-gray-300/30 tracking-tighter whitespace-nowrap select-none scale-110 transition-transform duration-100 ease-out transform translate-y-[-5%]" style={{fontStretch: 'expanded'}}>
            NEXUS
        </h1>
</div>

<main className="relative z-10 w-full h-screen max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:grid md:grid-cols-12 md:gap-8">

<div className="order-1 md:order-none col-span-12 md:col-span-4 flex flex-col justify-start pt-16 md:pt-32 reveal-1">
<div className="inline-flex self-start items-center gap-2 px-3 py-1 mb-6 border border-gray-200 bg-white/50 backdrop-blur-sm rounded-full shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-[#007AFF] animate-pulse"></div>
<span className="text-xs font-semibold tracking-wide uppercase text-gray-500">POS Built for Scale</span>
</div>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-[#1D1D1F]">
                Sell Faster,<br/>
<span className="text-gray-400">Grow Smarter</span>
</h2>
</div>

<div className="order-2 md:order-none col-span-12 md:col-span-4 flex items-center justify-center relative h-[40vh] md:h-auto reveal-2">

<div className="absolute w-48 h-48 md:w-64 md:h-64 core-glow animate-glow z-0"></div>

<div className="relative z-10 w-56 h-56 md:w-80 md:h-80 animate-float transition-transform duration-200 ease-out" id="hero-object">

<div className="abstract-shape absolute inset-0 rounded-[3rem] rotate-45 transform skew-x-12 skew-y-6 opacity-90 border border-white/40"></div>

<div className="abstract-shape absolute inset-4 rounded-[2.5rem] bg-gradient-to-br from-white via-gray-100 to-transparent opacity-80 backdrop-blur-md rotate-[20deg]"></div>

<div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-bl from-white to-transparent rounded-full opacity-60 blur-xl"></div>

<div className="absolute bottom-10 left-10 w-20 h-20 bg-[#1D1D1F] rounded-full blur-2xl opacity-20 mix-blend-multiply"></div>
</div>
</div>

<div className="order-3 md:order-none col-span-12 md:col-span-4 flex flex-col justify-end items-start md:items-end pb-12 md:pb-32 reveal-3">
<p className="text-lg md:text-xl text-gray-500 leading-relaxed md:text-right max-w-sm mb-8">
                Revolutionize your retail experience with a high-performance, cloud-based POS system designed for speed, security, and effortless scaling.
            </p>
<button className="group relative inline-flex items-center gap-3 bg-[#1D1D1F] text-white pl-6 pr-4 py-3 rounded-full hover:bg-black transition-all duration-300 hover:scale-105 hover:shadow-lg">
<span className="font-medium text-sm">Get Started</span>
<span className="bg-white/20 rounded-full p-1 group-hover:bg-white group-hover:text-black transition-colors duration-300">
<i className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" data-lucide="arrow-right"></i>
</span>
</button>
</div>
</main>

<div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F5F5F7] to-transparent pointer-events-none z-20 md:hidden"></div>


    </>
  );
}
