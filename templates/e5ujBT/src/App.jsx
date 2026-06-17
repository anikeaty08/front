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



        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('dots-container');
            const containerRect = container.getBoundingClientRect();
            const dotCount = 1500;
            
            for (let i = 0; i < dotCount; i++) {
                const dot = document.createElement('div');
                dot.className = 'dot';
                
                // Calculate position in a grid with slight randomization
                const col = i % 50;
                const row = Math.floor(i / 50);
                
                // Dots are now 2x smaller
                const size = Math.random() * 2 + 1;
                const xPos = (col / 50) * containerRect.width + (Math.random() * 10 - 5);
                const yPos = (row / 30) * containerRect.height + (Math.random() * 10 - 5) + ((i % 2) * 5);
                
                // Set dot properties
                dot.style.width = `${size}px`;
                dot.style.height = `${size}px`;
                dot.style.left = `${xPos}px`;
                dot.style.top = `${yPos}px`;
                
                // Add randomized animation delay
                dot.style.animationDelay = `${Math.random() * 3.8}s`;
                
                container.appendChild(dot);
            }
            
            // Add mouse interaction
            container.addEventListener('mousemove', (e) => {
                const mouseX = e.clientX;
                const mouseY = e.clientY;
                
                document.querySelectorAll('.dot').forEach(dot => {
                    const dotRect = dot.getBoundingClientRect();
                    const dotX = dotRect.left + dotRect.width/2;
                    const dotY = dotRect.top + dotRect.height/2;
                    
                    const distance = Math.sqrt(Math.pow(mouseX - dotX, 2) + Math.pow(mouseY - dotY, 2));
                    const maxDistance = 100;
                    
                    if (distance < maxDistance) {
                        const scale = 1 + (1 - distance/maxDistance) * 0.5;
                        dot.style.transform = `scale(${scale})`;
                        dot.style.zIndex = "10";
                    }
                });
            });
            
            // Reset on mouse leave
            container.addEventListener('mouseleave', () => {
                document.querySelectorAll('.dot').forEach(dot => {
                    dot.style.transform = "";
                    dot.style.zIndex = "";
                });
            });
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
      
<div className="dots-container" id="dots-container"></div>

    </>
  );
}
