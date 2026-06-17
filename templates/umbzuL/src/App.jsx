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



    // Generate bubbles
    document.addEventListener('DOMContentLoaded', () => {
      const bubblesContainer = document.getElementById('bubbles');
      const bubbleCount = 40;
      
      for (let i = 0; i < bubbleCount; i++) {
        const size = 2 + Math.random() * 3;
        const distance = 6 + Math.random() * 4;
        const position = -5 + Math.random() * 110;
        const time = 2 + Math.random() * 2;
        const delay = -1 * (2 + Math.random() * 2);
        
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.setProperty('--size', `${size}rem`);
        bubble.style.setProperty('--distance', `${distance}rem`);
        bubble.style.setProperty('--position', `${position}%`);
        bubble.style.setProperty('--time', `${time}s`);
        bubble.style.setProperty('--delay', `${delay}s`);
        
        bubblesContainer.appendChild(bubble);
      }
      
      // Apply filter to bubbles container
      bubblesContainer.style.filter = 'url(#bubble-filter)';
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
      
<div className="max-w-md w-full">
<div className="relative h-96 w-full bg-gradient-to-b from-slate-900 to-black rounded-xl overflow-hidden shadow-lg">

<div className="absolute inset-x-0 bottom-0 h-40">
<div className="absolute bottom-0 left-0 right-0 h-full bg-indigo-600/50 rounded-b-xl">

<div className="absolute bottom-0 left-0 right-0 h-full overflow-hidden" id="bubbles">

</div>
</div>

<svg className="hidden">
<defs>
<filter id="bubble-filter">
<fegaussianblur in="SourceGraphic" result="blur" stddeviation="10"></fegaussianblur>
<fecolormatrix in="blur" mode="matrix" result="blob" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"></fecolormatrix>
</filter>
</defs>
</svg>
</div>

<div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">

<div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-6 float shadow-lg border-2 border-indigo-300/30">
<svg className="w-8 h-8 text-white" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2L5 12l7 10 7-10-7-10zm0 3.5L16 12l-4 5.5-4-5.5 4-5.5z"></path>
</svg>
</div>

<h1 className="text-6xl font-bold text-white mb-3">Aura</h1>

<div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4"></div>
<p className="text-indigo-200 text-lg mb-8">Illuminate your journey</p>

<button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-0.5 font-medium">
          Discover More
        </button>
</div>
</div>
</div>


    </>
  );
}
