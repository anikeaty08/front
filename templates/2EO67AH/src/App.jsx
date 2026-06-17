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



    const canvas = document.getElementById('shader-bg');
    const ctx = canvas.getContext('2d');
    let w = window.innerWidth, h = window.innerHeight;
    function resize() {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w; canvas.height = h;
    }
    resize();
    window.addEventListener('resize', resize);

    function f(x, y, t) {
      return Math.sin(x + Math.sin(y + t * 0.1)) * Math.sin(y * x * 0.1 + t * 0.2);
    }

    function drawVectorField(t) {
      ctx.clearRect(0, 0, w, h);
      const scale = 6;
      const density = 52; // grid lines

      for (let i = 0; i < density; i++) {
        for (let j = 0; j < density; j++) {
          let px = i / density - 0.5, py = j / density - 0.5;
          px *= w / h;
          px *= scale; py *= scale;
          let ep = 0.05;
          let t0 = f(px, py, t);
          let t1 = f(px + ep, py, t);
          let t2 = f(px, py + ep, t);
          let gx = (t1 - t0) / ep, gy = (t2 - t0) / ep;
          let vx = -gy, vy = gx;
          let len = Math.sqrt(vx * vx + vy * vy) + 0.01;
          vx /= len; vy /= len;
          let m = Math.min(0.1, Math.pow(len, 0.5) * (0.45 / density));
          vx *= m * h; vy *= m * h;
          const r = Math.floor(180 + 70 * vx);
          const g = Math.floor(140 + 90 * vy);
          const b = 210;
          ctx.strokeStyle = `rgba(${r},${g},${b},0.85)`;
          ctx.beginPath();
          let cx = (i + 0.5) * w / density,
              cy = (j + 0.5) * h / density;
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx + vx, cy + vy);
          ctx.stroke();
          let angle = Math.atan2(vy, vx);
          ctx.beginPath();
          ctx.moveTo(cx + vx, cy + vy);
          ctx.lineTo(cx + vx - 3 * Math.cos(angle - Math.PI/6), cy + vy - 3 * Math.sin(angle - Math.PI/6));
          ctx.moveTo(cx + vx, cy + vy);
          ctx.lineTo(cx + vx - 3 * Math.cos(angle + Math.PI/6), cy + vy - 3 * Math.sin(angle + Math.PI/6));
          ctx.stroke();
        }
      }
    }

    function animate() {
      const now = performance.now() / 1000;
      drawVectorField(now);
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
      
<canvas id="shader-bg"></canvas>


    </>
  );
}
