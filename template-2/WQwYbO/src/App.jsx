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



      const BALLSIZE = 4; // 5x smaller than 20
      const IMPECTRADIUS = 400;
      const ballsDiv = document.querySelector('.balls');
      const shadowsDiv = document.querySelector('.shadows');
      const balls = [];
      const TOTAL_BALLS = 40;
      function createBall(gridX, gridY) {
        const x = BALLSIZE * gridX, y = BALLSIZE * gridY;
        const ball = document.createElement('div');
        ball.className = "absolute rounded-full";
        ball.style.width = `${BALLSIZE}px`;
        ball.style.height = `${BALLSIZE}px`;
        ball.style.left = `${x - BALLSIZE / 2}px`;
        ball.style.top = `${y - BALLSIZE / 2}px`;
        ball.style.background = "#fff";
        ballsDiv.appendChild(ball);
        balls.push({ ball, x, y });
      }
      for (let i = -TOTAL_BALLS / 2; i < TOTAL_BALLS / 2; i += 2) {
        for (let j = -TOTAL_BALLS / 2; j < TOTAL_BALLS / 2; j += 2) {
          const xWave = Math.sin((j / Math.PI) * 2) * 0.5;
          const yWave = Math.cos((i / Math.PI) * 2) * 0.5;
          createBall(i + xWave, j + yWave);
        }
      }
      window.addEventListener('mousemove', ({ clientX, clientY }) => {
        const mx = clientX - innerWidth / 2;
        const my = clientY - innerHeight / 2;
        balls.forEach(({ ball, x, y }) => {
          const dx = x - mx + BALLSIZE / 2, dy = y - my + BALLSIZE / 2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < IMPECTRADIUS) {
            const distFactor = (IMPECTRADIUS - Math.min(dist, IMPECTRADIUS)) / IMPECTRADIUS;
            const angle = Math.atan2(dy, dx);
            const scale = Math.max(1, distFactor * 2);
            ball.style.transform = `rotate(${angle}rad) scale(${scale})`;
          } else {
            ball.style.transform = '';
          }
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
      
<div className="shadows absolute inset-0 left-1/2 top-1/2 w-0 h-0"></div>
<div className="balls absolute inset-0 left-1/2 top-1/2 w-0 h-0"></div>


    </>
  );
}
