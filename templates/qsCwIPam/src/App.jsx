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



    const rainContainer = document.getElementById('rain-container');
    const rainCount = 100;
    
    for (let i = 0; i < rainCount; i++) {
      const raindrop = document.createElement('div');
      raindrop.classList.add('raindrop');
      
      raindrop.style.left = `${Math.random() * 100}%`;
      raindrop.style.opacity = Math.random() * 0.4 + 0.1;
      
      const duration = Math.random() * 1 + 0.5;
      raindrop.style.animationDuration = `${duration}s`;
      raindrop.style.animationDelay = `${Math.random() * 2}s`;
      raindrop.style.height = `${Math.random() * 20 + 10}px`;
      
      rainContainer.appendChild(raindrop);
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
      
<div className="fixed top-0 left-0 w-full h-full" id="rain-container"></div>
<div className="flex items-center justify-center min-h-screen p-4 relative z-10">
<div className="max-w-sm w-full glass rounded-xl overflow-hidden shadow-2xl">

<div className="px-6 pt-6 pb-4 border-b border-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse-slow"></div>
<h2 className="text-gray-100 font-medium text-sm">San Francisco</h2>
</div>
<span className="text-xs text-gray-300">Updated just now</span>
</div>
</div>

<div className="px-6 py-8">
<div className="flex items-center justify-between">
<div>
<div className="flex items-baseline">
<span className="text-4xl font-light text-white">58°</span>
<span className="ml-1 text-gray-300 text-sm">F</span>
</div>
<p className="text-gray-300 text-sm mt-1">Rainy</p>
</div>

<div className="text-blue-300 animate-float">
<svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
</div>

<div className="px-6 py-4 bg-white/5 grid grid-cols-3 gap-2 text-center">
<div className="px-2 py-3">
<p className="text-xs text-gray-300 uppercase tracking-wide">Humidity</p>
<p className="text-gray-100 font-medium mt-1">89%</p>
</div>
<div className="px-2 py-3">
<p className="text-xs text-gray-300 uppercase tracking-wide">Wind</p>
<p className="text-gray-100 font-medium mt-1">12 mph</p>
</div>
<div className="px-2 py-3">
<p className="text-xs text-gray-300 uppercase tracking-wide">Feels like</p>
<p className="text-gray-100 font-medium mt-1">54°</p>
</div>
</div>

<div className="px-6 py-4 border-t border-white/10">
<div className="grid grid-cols-5 gap-2">
<div className="text-center">
<p className="text-xs text-gray-300">Mon</p>
<svg className="w-6 h-6 mx-auto my-1 text-blue-300 animate-float" fill="none" stroke="currentColor" strokeWidth="1" style={{animationDelay: '0.1s'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-xs font-medium text-gray-100">56°</p>
</div>
<div className="text-center">
<p className="text-xs text-gray-300">Tue</p>
<svg className="w-6 h-6 mx-auto my-1 text-blue-300 animate-float" fill="none" stroke="currentColor" strokeWidth="1" style={{animationDelay: '0.3s'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-xs font-medium text-gray-100">58°</p>
</div>
<div className="text-center">
<p className="text-xs text-gray-300">Wed</p>
<svg className="w-6 h-6 mx-auto my-1 text-gray-300 animate-spin-slow" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-xs font-medium text-gray-100">65°</p>
</div>
<div className="text-center">
<p className="text-xs text-gray-300">Thu</p>
<svg className="w-6 h-6 mx-auto my-1 text-gray-300 animate-spin-slow" fill="none" stroke="currentColor" strokeWidth="1" style={{animationDelay: '0.2s'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-xs font-medium text-gray-100">68°</p>
</div>
<div className="text-center">
<p className="text-xs text-gray-300">Fri</p>
<svg className="w-6 h-6 mx-auto my-1 text-gray-300 animate-float" fill="none" stroke="currentColor" strokeWidth="1" style={{animationDelay: '0.5s'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-xs font-medium text-gray-100">62°</p>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
