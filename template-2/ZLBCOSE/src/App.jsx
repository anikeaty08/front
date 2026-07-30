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
      
    const canvas = document.getElementById('trail-canvas');
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });

    let mouse = { x: width/2, y: height/2 };

    // Mouse events
    window.addEventListener('mousemove', e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // Touch events
    window.addEventListener('touchstart', e => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    }, {passive: false});
    window.addEventListener('touchmove', e => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    }, {passive: false});

    // Particle trail
    const TRAIL_LENGTH = 40;
    const trail = [];
    for (let i = 0; i < TRAIL_LENGTH; i++) {
      trail.push({ x: mouse.x, y: mouse.y });
    }

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    function draw() {
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(0,0,0,0.16)';
      ctx.fillRect(0,0,width,height);

      // Update trail positions (follow the mouse or touch)
      trail[0].x = lerp(trail[0].x, mouse.x, 0.25);
      trail[0].y = lerp(trail[0].y, mouse.y, 0.25);
      for (let i = 1; i < TRAIL_LENGTH; i++) {
        trail[i].x = lerp(trail[i].x, trail[i-1].x, 0.28);
        trail[i].y = lerp(trail[i].y, trail[i-1].y, 0.28);
      }

      // Draw trail
      for (let i = TRAIL_LENGTH-1; i >= 0; i--) {
        const p = trail[i];
        const t = i / TRAIL_LENGTH;
        let radius = lerp(22, 4, t);
        let alpha = lerp(1, 0.2, t);

        let color;
        if (i === 0) {
          color = `rgba(255,255,255,1)`;
        } else {
          let hue = (t * 240 + performance.now()/10) % 360;
          color = `hsla(${hue},100%,60%,${alpha})`;
        }

        ctx.globalCompositeOperation = 'lighter';
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI*2);
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 32 * (1-t);
        ctx.fill();
      }

      // Leading bright white head
      ctx.beginPath();
      ctx.arc(trail[0].x, trail[0].y, 16, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(255,255,255,0.98)';
      ctx.shadowColor = 'white';
      ctx.shadowBlur = 64;
      ctx.fill();

      requestAnimationFrame(draw);
    }

    draw();
  
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
      
<canvas id="trail-canvas"></canvas>


    </>
  );
}
