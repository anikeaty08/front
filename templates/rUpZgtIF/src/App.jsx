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



    const LINES = 400;
    const RADIUS = 150;
    const LENGTH = 10, THICK = 1;
    const CENTER = 170;
    const lines = [];
    const container = document.getElementById('lines');
    for (let i = 0; i < LINES; i++) {
      const r = Math.sqrt(Math.random()) * RADIUS;
      const theta0 = Math.random() * 2 * Math.PI;
      const x = CENTER + r * Math.cos(theta0);
      const y = CENTER + r * Math.sin(theta0);
      const line = document.createElement('div');
      line.className = 'line';
      line.style.left = (x - LENGTH/2) + 'px';
      line.style.top = (y - THICK/2) + 'px';
      line.style.animationDelay = (Math.random()*2).toFixed(2) + 's';
      container.appendChild(line);
      // Each line gets a unique rotation for an organic effect
      const phi = Math.random() * 2 * Math.PI;
      lines.push({ dom: line, r, theta0, offset: Math.random()*6.28, phi });
    }
    function animate(ts) {
      const t = ts / 1000;
      for (let i=0; i<LINES; i++) {
        const { dom, r, theta0, offset, phi } = lines[i];
        const pct = r / RADIUS;
        const theta = theta0 + t * (0.18 + 0.18 * (1-pct)) + offset;
        const x = CENTER + r * Math.cos(theta);
        const y = CENTER + r * Math.sin(theta);
        dom.style.left = (x - LENGTH/2) + 'px';
        dom.style.top = (y - THICK/2) + 'px';
        // Most lines are horizontal (<), angled slightly for uniqueness
        dom.style.transform = `rotate(${phi * 180 / Math.PI}deg)`;
      }
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  
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
      
<div className="lines-container" id="lines"></div>


    </>
  );
}
