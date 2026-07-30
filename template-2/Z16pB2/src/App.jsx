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
      

<div className="fixed inset-0 overflow-hidden">
<div className="star absolute h-2 w-2 bg-white rounded-full top-[15%] left-[20%] opacity-70" style={{animationDelay: `0.5s`}}></div>
<div className="star absolute h-2 w-2 bg-white rounded-full top-[45%] left-[80%] opacity-70" style={{animationDelay: `1.5s`}}></div>
<div className="star absolute h-3 w-3 bg-white rounded-full top-[65%] left-[35%] opacity-80" style={{animationDelay: `0.7s`}}></div>
<div className="star absolute h-2 w-2 bg-white rounded-full top-[25%] left-[60%] opacity-70" style={{animationDelay: `2.1s`}}></div>
<div className="star absolute h-2 w-2 bg-white rounded-full top-[75%] left-[75%] opacity-70" style={{animationDelay: `1.2s`}}></div>
<div className="star absolute h-3 w-3 bg-white rounded-full top-[55%] left-[15%] opacity-90" style={{animationDelay: `0.3s`}}></div>
<div className="star absolute h-2 w-2 bg-white rounded-full top-[85%] left-[50%] opacity-80" style={{animationDelay: `1.8s`}}></div>
<div className="star absolute h-2 w-2 bg-white rounded-full top-[10%] left-[40%] opacity-70" style={{animationDelay: `2.5s`}}></div>
<div className="star absolute h-3 w-3 bg-white rounded-full top-[35%] left-[25%] opacity-80" style={{animationDelay: `0.9s`}}></div>
<div className="star absolute h-2 w-2 bg-white rounded-full top-[5%] left-[70%] opacity-70" style={{animationDelay: `1.7s`}}></div>
<div className="star absolute h-2 w-2 bg-white rounded-full top-[92%] left-[12%] opacity-80" style={{animationDelay: `0.2s`}}></div>
<div className="star absolute h-1 w-1 bg-white rounded-full top-[30%] left-[88%] opacity-70" style={{animationDelay: `1.3s`}}></div>
<div className="star absolute h-1 w-1 bg-white rounded-full top-[68%] left-[6%] opacity-80" style={{animationDelay: `2.2s`}}></div>
<div className="star absolute h-1 w-1 bg-white rounded-full top-[18%] left-[95%] opacity-70" style={{animationDelay: `0.8s`}}></div>
<div className="star absolute h-1 w-1 bg-white rounded-full top-[82%] left-[30%] opacity-80" style={{animationDelay: `1.9s`}}></div>

<div className="shooting-star" style={{top: `10%`, right: `10%`, animation: `shootingStar 2s ease-in-out 0.2s infinite`}}>
<div className="star-tail"></div>
</div>
<div className="shooting-star" style={{top: `5%`, right: `30%`, animation: `shootingStar 2.5s ease-in-out 1.7s infinite`}}>
<div className="star-tail"></div>
</div>
<div className="shooting-star" style={{top: `15%`, right: `50%`, animation: `shootingStar 1.8s ease-in-out 3.2s infinite`}}>
<div className="star-tail"></div>
</div>
</div>

<header className="fixed top-0 left-0 right-0 z-50">
<nav className="glass border-b border-neutral-800/30 px-6 py-4">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center">
<a className="text-white font-['Barlow_Condensed'] text-2xl font-medium tracking-tight" href="#">COSMIC</a>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-white text-sm hover:text-blue-400 transition-colors" href="#">Home</a>
<a className="text-neutral-400 text-sm hover:text-white transition-colors" href="#">Explore</a>
<a className="text-neutral-400 text-sm hover:text-white transition-colors" href="#">Gallery</a>
<a className="text-neutral-400 text-sm hover:text-white transition-colors" href="#">About</a>
</div>
<div>
<button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded transition-colors">
            Connect
          </button>
</div>
<button className="md:hidden text-white">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</nav>
</header>

<div className="relative min-h-screen flex items-center justify-center px-4 py-20 md:px-8">
<div className="w-full max-w-5xl">
<div className="p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
<div className="w-full md:w-3/5 space-y-6">
<div className="animate-slide" style={{animationDelay: `0.1s`}}>
<h2 className="text-blue-500 font-['Barlow_Condensed'] text-lg md:text-xl tracking-normal uppercase">Explore the cosmos</h2>
</div>
<div className="animate-slide" style={{animationDelay: `0.2s`}}>
<h1 className="font-['Barlow_Condensed'] text-white text-5xl md:text-6xl lg:text-7xl font-medium tracking-normal leading-tight">Journey Through<br />The Stars</h1>
</div>
<div className="animate-slide" style={{animationDelay: `0.3s`}}>
<p className="text-neutral-300 text-sm md:text-base max-w-xl">Discover the wonders of the universe as we guide you through an immersive experience of cosmic proportions. From distant galaxies to nearby nebulae, your adventure awaits.</p>
</div>
<div className="animate-slide pt-4 flex flex-col sm:flex-row gap-4" style={{animationDelay: `0.4s`}}>
<button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all font-medium">
              Begin Journey
            </button>
<button className="px-8 py-3 border border-neutral-700 hover:border-neutral-600 text-white rounded-lg transition-all">
              Learn More
            </button>
</div>
</div>
<div className="w-full md:w-2/5 animate-slide" style={{animationDelay: `0.5s`}}>
<div className="relative w-full aspect-square max-w-sm mx-auto">
<div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
<div className="relative h-full flex items-center justify-center">
<div className="w-4/5 h-4/5 rounded-full bg-neutral-800/30 border border-neutral-700/50 flex items-center justify-center">
<div className="w-3/5 h-3/5 rounded-full bg-blue-500/20 flex items-center justify-center">
<div className="w-2/5 h-2/5 rounded-full bg-blue-400"></div>
</div>
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
