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



    tailwind.config = {
      theme: {
        extend: {
          colors: {
            dark: '#101014',
            accent: '#5E6AD2',
            subtle: 'rgba(255,255,255,0.1)'
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif']
          }
        }
      }
    }
  


    document.addEventListener('DOMContentLoaded', function() {
      VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x5E6AD2,
        backgroundColor: 0x101014,
        points: 12.00,
        maxDistance: 22.00,
        spacing: 18.00
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

<div className="absolute inset-0 z-0" id="vanta-bg"></div>

<nav className="relative z-10 px-6 py-6 flex items-center justify-between">
<div className="flex items-center">
<svg className="w-8 h-8" fill="none" viewbox="0 0 24 24">
<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 17L12 22L22 17" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 12L12 17L22 12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="ml-3 text-lg font-medium">Quantum</span>
</div>
<div className="hidden md:flex space-x-8 text-sm text-gray-300">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Method</a>
<a className="hover:text-white transition-colors" href="#">Customers</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
</div>
<div>
<a className="hidden md:inline-block px-4 py-2 text-sm font-medium hover:text-white transition-colors" href="#">Sign in</a>
<a className="px-4 py-2 text-sm font-medium bg-white text-dark rounded-full hover:bg-opacity-90 transition-colors" href="#">Get started</a>
</div>
</nav>

<div className="relative z-10 flex flex-col items-center justify-center px-6 pt-16 pb-32 md:pt-32 md:pb-40 text-center">
<div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-accent opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
<span className="px-3 py-1 text-xs font-medium text-accent bg-accent bg-opacity-10 rounded-full mb-8">Launching Q2 2023</span>
<h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl leading-tight">
        Issue tracking reimagined for modern product teams
      </h1>
<p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl">
        Meet the new standard for modern software development.
        Streamline issues, sprints, and product roadmaps.
      </p>
<div className="mt-12 flex flex-col sm:flex-row gap-4">
<a className="px-8 py-3 bg-accent text-white font-medium rounded-full hover:bg-opacity-90 transition-colors" href="#">
          Get started for free
        </a>
<a className="px-8 py-3 bg-subtle text-white font-medium rounded-full hover:bg-opacity-20 transition-colors" href="#">
          Book a demo
        </a>
</div>
<div className="mt-20 flex justify-center">
<div className="w-[768px] h-[400px] bg-[#1E1E26] rounded-lg shadow-2xl border border-subtle overflow-hidden">
<div className="h-8 border-b border-subtle flex items-center px-4">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
</div>
</div>
<div className="p-4 opacity-70">

<div className="flex space-x-4">
<div className="w-48 h-full bg-[#15151B] rounded p-3">
<div className="w-full h-4 bg-subtle rounded mb-3"></div>
<div className="w-3/4 h-3 bg-subtle rounded mb-4"></div>
<div className="space-y-2">
<div className="w-full h-8 bg-[#1E1E26] rounded"></div>
<div className="w-full h-8 bg-[#1E1E26] rounded"></div>
<div className="w-full h-8 bg-[#1E1E26] rounded"></div>
</div>
</div>
<div className="flex-1 bg-[#15151B] rounded p-3">
<div className="w-1/3 h-4 bg-subtle rounded mb-3"></div>
<div className="w-full h-[320px] bg-[#1E1E26] rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
