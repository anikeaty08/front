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



    const N = 250, R = 140;
    const globe = document.getElementById('globe');
    const dots = [];
    const positions = [];
    for (let i=0; i<N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const radius = Math.sqrt(1 - y*y);
      const theta = Math.PI * (3 - Math.sqrt(5)) * i;
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      positions.push({x, y, z});
      const dot = document.createElement('div');
      dot.className = 'dot';
      globe.appendChild(dot);
      dots.push(dot);
    }
    function randomBreathing() {
      dots.forEach(dot => dot.classList.remove('active'));
      const n = Math.floor(N/5 + Math.random()*N/8);
      const indices = Array.from({length:N}, (_,i)=>i);
      for (let i=0; i<n; ++i) {
        const idx = indices.splice(Math.floor(Math.random()*indices.length),1)[0];
        dots[idx].classList.add('active');
      }
    }
    randomBreathing();
    setInterval(randomBreathing, 1400);
    let start;
    function animate(ts) {
      if (!start) start = ts;
      const t = (ts-start) / 1400;
      const ry = t * 0.44;
      const rx = Math.sin(t*0.35) * 0.28;
      const sinRy = Math.sin(ry), cosRy = Math.cos(ry);
      const sinRx = Math.sin(rx), cosRx = Math.cos(rx);
      for (let i=0; i<N; i++) {
        let {x, y, z} = positions[i];
        let x1 = cosRy*x - sinRy*z;
        let z1 = sinRy*x + cosRy*z;
        let y1 = cosRx*y - sinRx*z1;
        let z2 = sinRx*y + cosRx*z1;
        const persp = 350/(350+z2*R);
        const px = x1 * R * persp;
        const py = y1 * R * persp;
        let scale = 1;
        if(dots[i].classList.contains('active')) {
          scale = 2+0.08*Math.sin(ts/450+i);
        }
        dots[i].style.transform =
          `translate(-50%,-50%) translate(${px}px,${py}px) scale(${scale})`;
        dots[i].style.zIndex = 100+Math.round(z2*100);
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
      
<div className="globe-container" id="globe"></div>


    </>
  );
}
