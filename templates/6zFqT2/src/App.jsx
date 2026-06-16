import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
  }, []);

  return (
    <>
      
<div className="absolute left-1/2 top-1/2" id="lines"></div>


    </>
  );
}
