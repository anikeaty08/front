import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const DOTS = 400;
    const RADIUS = 150;
    const SIZE = 2.2;
    const CENTER = 170;
    const dots = [];
    const container = document.getElementById('dots');
    for (let i = 0; i < DOTS; i++) {
      // Random distance and random angle for each dot
      const r = Math.sqrt(Math.random()) * RADIUS;
      const theta0 = Math.random() * 2 * Math.PI;
      const x = CENTER + r * Math.cos(theta0);
      const y = CENTER + r * Math.sin(theta0);
      const dot = document.createElement('div');
      dot.className = 'dot';
      dot.style.left = (x - SIZE/2) + 'px';
      dot.style.top = (y - SIZE/2) + 'px';
      // Spread the pulsing start times
      dot.style.animationDelay = (Math.random()*2).toFixed(2) + 's';
      container.appendChild(dot);
      dots.push({ dom: dot, r, theta0, offset: Math.random()*6.28 });
    }
    // Slower swirl: rotate around center; outer dots can go slower
    function animate(ts) {
      const t = ts / 1000;
      for(let i=0;i<DOTS;i++) {
        const { dom, r, theta0, offset } = dots[i];
        const pct = r / RADIUS;
        // Rotation speed: all slow, even slower as they go outward
        const theta = theta0 + t * (0.18 + 0.18 * (1-pct)) + offset;
        const x = CENTER + r * Math.cos(theta);
        const y = CENTER + r * Math.sin(theta);
        dom.style.left = (x - SIZE/2) + 'px';
        dom.style.top = (y - SIZE/2) + 'px';
      }
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="dots-container" id="dots"></div>


    </>
  );
}
