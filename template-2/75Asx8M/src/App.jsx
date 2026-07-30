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



    const container = document.getElementById("grid");
    const grid = 22, spacing = 9, size = 7;
    const offset = -((spacing * (grid - 1)) / 2);
    let cells = [];

    for(let y = 0; y < grid; y++) {
      for(let x = 0; x < grid; x++) {
        const cell = document.createElement('div');
        cell.className = `absolute w-[${size}px] h-[${size}px] 
          bg-[#184d26] 
          opacity-40 
          border border-[#e0f0df22] 
          transition-all 
          duration-700 
          will-change-[opacity,transform,background-color]`;
        const px = offset + x * spacing, py = offset + y * spacing;
        cell.style.left = `calc(50% + ${px}px - ${size/2}px)`;
        cell.style.top  = `calc(50% + ${py}px - ${size/2}px)`;
        container.appendChild(cell);
        cells.push(cell);
      }
    }

    function randomizeSquares() {
      cells.forEach(cell => {
        cell.classList.remove('bg-[#39d353]', 'opacity-100', 'scale-110');
        cell.classList.add('bg-[#184d26]', 'opacity-40', 'scale-100');
      });
      const activeCount = Math.floor(cells.length/4 + Math.random()*cells.length/10);
      const indices = Array.from(cells.keys());
      for(let i=0; i<activeCount; ++i) {
        const idx = indices.splice(Math.floor(Math.random()*indices.length), 1)[0];
        const cell = cells[idx];
        cell.classList.remove('bg-[#184d26]', 'opacity-40', 'scale-100');
        cell.classList.add('bg-[#39d353]', 'opacity-100', 'scale-110');
      }
    }

    randomizeSquares();
    setInterval(randomizeSquares, 1200);
  
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
      
<div className="relative w-[216px] h-[216px] flex items-center justify-center" id="grid"></div>


    </>
  );
}
