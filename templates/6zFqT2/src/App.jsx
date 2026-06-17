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



      const ROWS = 32, COLS = 32, GAP = 14;
      const root = document.getElementById('lines');
      const lines = [];
      for(let y = -ROWS/2; y < ROWS/2; y++) {
        for(let x = -COLS/2; x < COLS/2; x++) {
          const div = document.createElement('div');
          div.className = "line";
          div.style.transform = `translate(${x*GAP}px,${y*GAP}px) rotate(0deg)`;
          root.appendChild(div);
          lines.push({el: div, x, y});
        }
      }

      function animate() {
        const now = performance.now() * 0.001;
        for (const {el, x, y} of lines) {
          // Smooth trig-based wave, no jumps or resets
          const angle = Math.sin(now + x*0.18 + y*0.23) * 70;
          el.style.transform = `translate(${x*GAP}px,${y*GAP}px) rotate(${angle}deg)`;
        }
        requestAnimationFrame(animate);
      }
      animate();
    
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
      
<div className="absolute left-1/2 top-1/2" id="lines"></div>


    </>
  );
}
