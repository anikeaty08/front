import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const heartContainer = document.getElementById('heartContainer');
    const colors = ['#9e91bc', '#4a4e7c', '#6f7db7'];
    
    // Create Twitter-like heart animation on click
    heartContainer.addEventListener('click', (e) => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      
      // Random heart size between 40 and 80
      const size = Math.floor(Math.random() * 40) + 40;
      
      // Position heart at click location
      heart.style.left = (e.clientX - size/2) + 'px';
      heart.style.top = (e.clientY - size/2) + 'px';
      
      // Random color from our palette
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Create the heart SVG
      heart.innerHTML = `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}">
          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
        </svg>
      `;
      
      heartContainer.appendChild(heart);
      
      // Remove heart after animation completes
      setTimeout(() => {
        heart.remove();
      }, 2000);
    });
    
    // Auto-generate hearts periodically
    setInterval(() => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      
      const event = new MouseEvent('click', {
        clientX: x,
        clientY: y
      });
      
      heartContainer.dispatchEvent(event);
    }, 300);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="heart-container" id="heartContainer">

<div className="floating pulsing absolute top-1/4 left-1/3 opacity-70">
<svg fill="#9e91bc" height="60" viewbox="0 0 24 24" width="60">
<path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
</svg>
</div>
<div className="floating pulsing absolute top-1/2 left-2/3 opacity-60" style={{animationDelay: '0.5s'}}>
<svg fill="#4a4e7c" height="80" viewbox="0 0 24 24" width="80">
<path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
</svg>
</div>
<div className="floating pulsing absolute top-3/4 left-1/4 opacity-80" style={{animationDelay: '1s'}}>
<svg fill="#6f7db7" height="70" viewbox="0 0 24 24" width="70">
<path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
</svg>
</div>
<div className="floating pulsing absolute top-1/3 left-3/4 opacity-50" style={{animationDelay: '1.5s'}}>
<svg fill="#9e91bc" height="50" viewbox="0 0 24 24" width="50">
<path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
</svg>
</div>
<div className="floating pulsing absolute top-2/3 left-1/5 opacity-70" style={{animationDelay: '2s'}}>
<svg fill="#4a4e7c" height="65" viewbox="0 0 24 24" width="65">
<path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
</svg>
</div>
</div>


    </>
  );
}
