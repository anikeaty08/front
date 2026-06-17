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



    const button = document.getElementById('magic-hover-btn');
    const intensitySettings = {
      low: { throttle: 120, maxSize: 15 },
      medium: { throttle: 80, maxSize: 20 },
      high: { throttle: 50, maxSize: 30 },
    };
    const animationIntensity = 'medium';
    const { throttle, maxSize } = intensitySettings[animationIntensity];
    let isListening = false, lastAdded = 0;

    const gradients = [
      'radial-gradient(circle at 30% 30%, #ff6b6b, #4ecdc4 70%)',
      'radial-gradient(circle at 70% 70%, #a78bfa, #3b82f6 60%)',
      'radial-gradient(circle at 50% 50%, #facc15, #f472b6 80%)',
      'radial-gradient(circle at 30% 30%, #93c5fd, #3b82f6 90%)'
    ];

    function createCircle(x, y) {
      // Dynamic color from x position (as in the React version)
      const buttonRect = button.getBoundingClientRect();
      const xPos = x / buttonRect.width;
      const color = gradients[Math.floor(Math.random() * gradients.length)];

      const size = Math.random() * (maxSize - 10) + 10;
      const rotation = Math.random() * 360;
      const div = document.createElement('div');
      div.className = 'circle-anim';
      div.style.left = x + "px";
      div.style.top = y + "px";
      div.style.width = size + "px";
      div.style.height = size + "px";
      div.style.background = color;
      div.style.boxShadow = `0 0 ${size/2}px rgba(255,255,255,0.3)`;
      div.style.transform = `translate(-50%,-50%) rotate(${rotation}deg) scale(0.5)`;

      button.appendChild(div);
      setTimeout(() => {
        div.classList.add('circle-in');
      }, 10);

      setTimeout(() => {
        div.classList.remove('circle-in');
        div.classList.add('circle-out');
      }, 810);

      setTimeout(() => {
        if (div.parentNode) div.parentNode.removeChild(div);
      }, 2100);
    }

    button.addEventListener('pointerenter', () => { isListening = true; });
    button.addEventListener('pointerleave', () => { isListening = false; });

    button.addEventListener('pointermove', (ev) => {
      if (!isListening) return;
      const now = Date.now();
      if (now - lastAdded > throttle) {
        lastAdded = now;
        const rect = button.getBoundingClientRect();
        createCircle(ev.clientX - rect.left, ev.clientY - rect.top);
      }
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
      

<button className="relative isolate px-10 py-4 rounded-full text-white font-semibold text-lg backdrop-blur-xl bg-[rgba(43,55,80,0.2)] shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:pointer-events-none before:z-[1] before:shadow-[inset_0_0_20px_rgba(255,255,255,0.2),0_0_30px_rgba(59,130,246,0.5)] before:mix-blend-overlay before:transition-transform before:duration-300 active:before:scale-[0.95] active:scale-95" id="magic-hover-btn" style={{overflow: 'hidden'}} type="button">
<span className="relative z-10 drop-shadow-md select-none">Hover Magic</span>
</button>


    </>
  );
}
