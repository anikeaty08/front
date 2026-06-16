import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Random "breathing" grid like Github graph
    const container = document.getElementById("breathing-grid");
    const grid = 18, spacing = 8, ds = 2;
    const offset = -(spacing * (grid - 1)) / 2;
    let dots = [];

    for(let y = 0; y < grid; y++) {
      for(let x = 0; x < grid; x++) {
        const d = document.createElement('div');
        d.className = 'dot';
        d.style.width = d.style.height = ds + 'px';
        const px = offset + x * spacing, py = offset + y * spacing;
        d.style.left = `calc(50% + ${px}px - ${ds/2}px)`;
        d.style.top = `calc(50% + ${py}px - ${ds/2}px)`;
        container.appendChild(d);
        dots.push(d);
      }
    }

    function randomizeBreathing() {
      // Reset all
      dots.forEach(dot => dot.classList.remove('active'));
      // Randomly activate about a third of the dots
      const activeCount = Math.floor(dots.length/3 + Math.random()*dots.length/8);
      const indices = Array.from(dots.keys());
      for(let i=0;i<activeCount;++i) {
        const idx = indices.splice(Math.floor(Math.random()*indices.length),1)[0];
        dots[idx].classList.add('active');
      }
    }

    randomizeBreathing();
    setInterval(randomizeBreathing, 1200);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="grid-container" id="breathing-grid"></div>


    </>
  );
}
