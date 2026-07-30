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
      
<div className="relative w-[600px] h-[600px] perspective-[1200px]">

<div className="absolute w-full h-full transform-style-preserve-3d animate-spin-slow">

<div className="absolute top-1/2 left-1/2 w-full h-full transform-style-preserve-3d">

<div className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 transform translate-z-[250px] bg-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50 border-2 border-blue-300">
<span className="text-white font-bold">C1</span>
</div>

<div className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 transform rotateY-45 translate-z-[250px] bg-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50 border-2 border-cyan-300">
<span className="text-white font-bold">C2</span>
</div>

<div className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 transform rotateY-90 translate-z-[250px] bg-teal-500 rounded-lg flex items-center justify-center shadow-lg shadow-teal-500/50 border-2 border-teal-300">
<span className="text-white font-bold">C3</span>
</div>

<div className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 transform rotateY-135 translate-z-[250px] bg-green-500 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/50 border-2 border-green-300">
<span className="text-white font-bold">C4</span>
</div>

<div className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 transform rotateY-180 translate-z-[250px] bg-yellow-500 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/50 border-2 border-yellow-300">
<span className="text-white font-bold">C5</span>
</div>

<div className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 transform rotateY-225 translate-z-[250px] bg-orange-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/50 border-2 border-orange-300">
<span className="text-white font-bold">C6</span>
</div>

<div className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 transform rotateY-270 translate-z-[250px] bg-red-500 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/50 border-2 border-red-300">
<span className="text-white font-bold">C7</span>
</div>

<div className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 transform rotateY-315 translate-z-[250px] bg-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-pink-500/50 border-2 border-pink-300">
<span className="text-white font-bold">C8</span>
</div>
</div>

<div className="absolute top-1/2 left-1/2 w-full h-full transform-style-preserve-3d rotateX-90">

<div className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 transform translate-z-[250px] bg-indigo-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/50 border-2 border-indigo-300">
<span className="text-white font-bold">N1</span>
</div>

<div className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 transform rotateY-90 translate-z-[250px] bg-violet-500 rounded-lg flex items-center justify-center shadow-lg shadow-violet-500/50 border-2 border-violet-300">
<span className="text-white font-bold">N2</span>
</div>
</div>

<div className="absolute top-1/2 left-1/2 w-full h-full transform-style-preserve-3d rotateX--90">

<div className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 transform translate-z-[250px] bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/50 border-2 border-emerald-300">
<span className="text-white font-bold">S1</span>
</div>

<div className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 transform rotateY-90 translate-z-[250px] bg-lime-500 rounded-lg flex items-center justify-center shadow-lg shadow-lime-500/50 border-2 border-lime-300">
<span className="text-white font-bold">S2</span>
</div>
</div>

<div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -ml-[250px] -mt-[250px] rounded-full border border-blue-400/30 transform-style-preserve-3d"></div>
<div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -ml-[250px] -mt-[250px] rounded-full border border-blue-400/20 transform rotateX-30 transform-style-preserve-3d"></div>
<div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -ml-[250px] -mt-[250px] rounded-full border border-blue-400/20 transform rotateX-60 transform-style-preserve-3d"></div>
<div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -ml-[250px] -mt-[250px] rounded-full border border-blue-400/20 transform rotateX-90 transform-style-preserve-3d"></div>
<div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -ml-[250px] -mt-[250px] rounded-full border border-blue-400/20 transform rotateY-30 transform-style-preserve-3d"></div>
<div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -ml-[250px] -mt-[250px] rounded-full border border-blue-400/20 transform rotateY-60 transform-style-preserve-3d"></div>
<div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -ml-[250px] -mt-[250px] rounded-full border border-blue-400/20 transform rotateY-90 transform-style-preserve-3d"></div>

<div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -ml-[250px] -mt-[250px] transform-style-preserve-3d">
<div className="absolute w-full h-full border-t-2 border-cyan-400/70 transform rotateX-15"></div>
<div className="absolute w-full h-full border-t-2 border-teal-400/70 transform rotateX-30"></div>
<div className="absolute w-full h-full border-t-2 border-green-400/70 transform rotateX-45"></div>
<div className="absolute w-full h-full border-t-2 border-emerald-400/70 transform rotateX-60"></div>
<div className="absolute w-full h-full border-t-2 border-lime-400/70 transform rotateX-75"></div>
<div className="absolute w-full h-full border-l-2 border-indigo-400/70 transform rotateY-15"></div>
<div className="absolute w-full h-full border-l-2 border-violet-400/70 transform rotateY-30"></div>
<div className="absolute w-full h-full border-l-2 border-purple-400/70 transform rotateY-45"></div>
<div className="absolute w-full h-full border-l-2 border-fuchsia-400/70 transform rotateY-60"></div>
<div className="absolute w-full h-full border-l-2 border-pink-400/70 transform rotateY-75"></div>
</div>

<div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -ml-[250px] -mt-[250px] transform-style-preserve-3d">
<div className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse-travel transform translate-z-[250px]"></div>
<div className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse-travel-delay-1 transform rotateY-45 translate-z-[250px]"></div>
<div className="absolute w-2 h-2 bg-teal-400 rounded-full animate-pulse-travel-delay-2 transform rotateY-90 translate-z-[250px]"></div>
<div className="absolute w-2 h-2 bg-green-400 rounded-full animate-pulse-travel-delay-3 transform rotateY-135 translate-z-[250px]"></div>
<div className="absolute w-2 h-2 bg-indigo-400 rounded-full animate-pulse-travel-delay-4 transform rotateX-90 translate-z-[250px]"></div>
<div className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-pulse-travel-delay-5 transform rotateX--90 translate-z-[250px]"></div>
</div>
</div>
</div>


    </>
  );
}
