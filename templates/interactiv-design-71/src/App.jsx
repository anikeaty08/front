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
<iframe frameborder="0" height="100%" src="https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW/" width="100%"></iframe>
</div>

<nav className="container content mr-auto ml-auto pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between">
<div className="flex items-center">
<svg className="h-8 w-8 text-indigo-400" fill="currentColor" viewbox="0 0 24 24">
<path className="" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
</svg>
<span className="text-xl font-medium tracking-tight ml-3" style={{}}>IVisionArt</span>
</div>
<div className="hidden md:flex space-x-10 text-sm">
<a className="hover:text-indigo-300 transition-colors" href="#">Work</a>
<a className="hover:text-indigo-300 transition-colors" href="#">TEAM</a>
<a className="hover:text-indigo-300 transition-colors" href="#">About</a>
<a className="hover:text-indigo-300 transition-colors" href="#">Contact</a>
</div>
<div className="">
<button className="hover:bg-indigo-500/10 transition-all text-sm border-indigo-500/30 border rounded-md pt-2 pr-4 pb-2 pl-4">
          Let's Talk
        </button>
</div>
</div>
</nav>
<div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent content"></div>
<div className="relative overflow-hidden">

<div className="container md:py-32 content mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">

<div className="mb-12">
<h1 className="md:text-7xl lg:text-8xl leading-tight text-5xl font-light tracking-tighter mb-6">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Design</span> 
            that shapes the future
          </h1>
<p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-extralight tracking-wide">
            We craft immersive digital experiences that transform brands and elevate businesses to new heights.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="hover:bg-opacity-90 transition-all font-light text-black bg-white rounded-md pt-3 pr-6 pb-3 pl-6">DASHBORAD</button>
<button className="hover:bg-indigo-500/10 transition-all bg-transparent border-indigo-500/30 border rounded-md pt-3 pr-6 pb-3 pl-6">
              Our process
            </button>
</div>
</div>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent my-16"></div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 gap-x-6 gap-y-6">
<div className="">
<p className="text-2xl font-light tracking-tight mb-1 translate-x-3">Brand Identity</p>
<p className="text-gray-400 font-extralight translate-x-2">Crafting unique visual languages</p>
</div>
<div className="">
<p className="text-2xl font-light tracking-tight mb-1 translate-x-4">Photographer</p>
<p className="text-gray-400 font-extralight translate-x-3">You don't take a photo we makeit</p><p className="text-gray-400 font-extralight translate-x-3" style={{}}></p>
</div>
<div className="">
<p className="text-2xl font-light tracking-tight mb-1 translate-x-16">Video Editing</p>
<p className="text-gray-400 font-extralight translate-x-16">Bringing ideas to life</p>
</div>
<div className="text-2xl font-light tracking-tight mb-1 translate-x-16">RETOCH Bringing Bringing ideas to life</div>
</div>
</div>
</div>

    </>
  );
}
