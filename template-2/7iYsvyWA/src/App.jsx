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



    const rings = 7;
    const radiusStep = 33;
    const center = document.createElement("div");
    center.className = "dot";
    center.style.width = center.style.height = "4px";
    center.style.left = "calc(50% - 2px)";
    center.style.top = "calc(50% - 2px)";
    center.style.opacity = "0.85";
    center.style.animationDelay = "0s";
    document.getElementById("container").appendChild(center);

    for(let r=0; r<rings; r++) {
      const radius = 28 + r * radiusStep;
      const dots = 31 + r * 5;
      for(let i=0; i<dots; i++) {
        const angle = (2 * Math.PI * i) / dots;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const dot = document.createElement("div");
        dot.className = "dot";
        dot.style.left = `calc(50% + ${x}px - 1.5px)`;
        dot.style.top = `calc(50% + ${y}px - 1.5px)`;
        dot.style.opacity = `${0.58 - r*0.045}`;
        dot.style.animationDelay = `${(r * 0.13 + i * 0.08)%2.2}s`;
        document.getElementById("container").appendChild(dot);
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
      
<div className="circle-container" id="container"></div>


    </>
  );
}
