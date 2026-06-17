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
                    animation: {
                        first: "moveVertical 30s ease infinite",
                        second: "moveInCircle 20s reverse infinite",
                        third: "moveInCircle 40s linear infinite",
                    },
                    keyframes: {
                        moveInCircle: {
                            "0%": { transform: "rotate(0deg)" },
                            "50%": { transform: "rotate(180deg)" },
                            "100%": { transform: "rotate(360deg)" }
                        },
                        moveVertical: {
                            "0%": { transform: "translateY(-10%)" },
                            "50%": { transform: "translateY(10%)" },
                            "100%": { transform: "translateY(-10%)" }
                        }
                    }
                }
            }
        };
    
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
      
<div className="w-[340px] h-[220px] relative overflow-hidden rounded-3xl shadow-xl">

<div className="absolute inset-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]">
<div className="gradients-container h-full w-full blur-lg">
<div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--first-color),0.8)_0,_rgba(var(--first-color),0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[100%] h-[100%] top-0 left-0 [transform-origin:center_center] animate-first opacity-100"></div>
<div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[100%] h-[100%] top-0 left-0 [transform-origin:calc(50%-100px)] animate-second opacity-100"></div>
<div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[100%] h-[100%] top-0 left-0 [transform-origin:calc(50%+100px)] animate-third opacity-100"></div>
</div>
</div>

<div className="relative z-10 h-full w-full p-6 flex flex-col text-white">

<div className="flex justify-between items-start">

<div className="w-12 h-10">
<svg fill="none" viewbox="0 0 48 40" xmlns="http://www.w3.org/2000/svg">
<rect height="38" rx="5" stroke="gold" strokeWidth="2" width="46" x="1" y="1"></rect>
<rect fill="gold" height="16" width="28" x="10" y="12"></rect>
</svg>
</div>

<div className="text-xl font-bold tracking-wider">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">NEXUS</span>
</div>
</div>

<div className="mt-8 text-xl tracking-widest font-mono text-center">
<span className="opacity-90">4929 1122 3344 5566</span>
</div>

<div className="mt-auto flex justify-between items-end">

<div className="flex flex-col">
<span className="text-xs opacity-70">CARDHOLDER</span>
<span className="font-medium tracking-wide">JOHN SMITH</span>
</div>

<div className="flex flex-col items-end">
<span className="text-xs opacity-70">EXPIRES</span>
<span className="font-medium">12/25</span>
</div>
</div>
</div>
</div>

    </>
  );
}
