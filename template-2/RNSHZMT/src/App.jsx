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
            dark: '#000000',
            light: '#ffffff',
            subtle: 'rgba(255,255,255,0.1)'
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif']
          }
        }
      }
    }
  
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

<div className="fixed inset-0 z-0">
<iframe className="w-full h-full" frameborder="0" height="100%" src="https://my.spline.design/thresholddarkambientui-v0gkZCfi6zXm69kE0wccy70f/" width="100%"></iframe>
</div>

<nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-opacity-5 border-opacity-10 bg-white border-white border rounded-full pt-3 pr-4 pb-3 pl-4 shadow-xl backdrop-blur-md">
<div className="flex items-center justify-between">
<div className="flex items-center">
<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
<circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"></circle>
<circle cx="12" cy="12" fill="white" r="3"></circle>
</svg>
<span className="ml-2 text-sm font-medium">Minimal</span>
</div>
<div className="hidden md:flex items-center space-x-6 text-xs text-gray-300 ml-8">
<a className="hover:text-white transition-colors" href="#">Work</a>
<a className="hover:text-white transition-colors" href="#">Studio</a>
<a className="hover:text-white transition-colors" href="#">Process</a>
<a className="hover:text-white transition-colors" href="#">Journal</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center space-x-3 ml-8">
<a className="hidden md:inline-block text-xs font-medium hover:text-white transition-colors" href="#">Login</a>
<a className="hover:bg-gray-200 transition-colors text-xs font-medium text-black bg-white rounded-full pt-1.5 pr-3 pb-1.5 pl-3" href="#">Start Project</a>
</div>
</div>
</nav>

<div className="relative z-10 flex flex-col items-center justify-center px-6 pt-32 pb-32 md:pt-40 md:pb-40 text-center min-h-screen">
<div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-white opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
<span className="px-3 py-1 text-xs font-medium text-white bg-white bg-opacity-10 backdrop-blur-sm rounded-full mb-8 border border-white border-opacity-20">Design Studio</span>
<h1 className="md:text-6xl max-w-4xl leading-tight text-4xl font-medium tracking-tighter">
        Crafting digital experiences through minimalist design
      </h1>
<p className="md:text-xl max-w-2xl text-lg text-neutral-300 mt-6">
        We believe in the power of simplicity. Clean lines, purposeful spaces, 
        and thoughtful interactions that speak volumes.
      </p>
<div className="mt-12 flex flex-col sm:flex-row gap-4">
<a className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl" href="#">
          View Our Work
        </a>
<a className="px-8 py-3 bg-white bg-opacity-10 backdrop-blur-sm text-white font-medium rounded-full hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20" href="#">
          Let's Talk
        </a>
</div>
<div className="mt-20 flex justify-center">
<div className="w-[768px] h-[400px] bg-black bg-opacity-40 backdrop-blur-md rounded-lg shadow-2xl border border-white border-opacity-10 overflow-hidden">
<div className="h-8 border-b border-white border-opacity-10 flex items-center px-4">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-white bg-opacity-30"></div>
<div className="w-3 h-3 rounded-full bg-white bg-opacity-30"></div>
<div className="w-3 h-3 rounded-full bg-white bg-opacity-30"></div>
</div>
</div>
<div className="p-4 opacity-70">

<div className="flex space-x-4">
<div className="w-48 h-full bg-white bg-opacity-5 backdrop-blur-sm rounded p-3 border border-white border-opacity-5">
<div className="w-full h-4 bg-white bg-opacity-20 rounded mb-3"></div>
<div className="w-3/4 h-3 bg-white bg-opacity-15 rounded mb-4"></div>
<div className="space-y-2">
<div className="w-full h-8 bg-white bg-opacity-10 rounded"></div>
<div className="w-full h-8 bg-white bg-opacity-10 rounded"></div>
<div className="w-full h-8 bg-white bg-opacity-10 rounded"></div>
</div>
</div>
<div className="flex-1 bg-white bg-opacity-5 backdrop-blur-sm rounded p-3 border border-white border-opacity-5">
<div className="w-1/3 h-4 bg-white bg-opacity-15 rounded mb-3"></div>
<div className="w-full h-[320px] bg-white bg-opacity-10 rounded flex items-center justify-center">
<div className="w-32 h-32 border-2 border-white border-opacity-20 rounded-full flex items-center justify-center">
<div className="w-16 h-16 bg-white bg-opacity-10 rounded-full"></div>
</div>
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
