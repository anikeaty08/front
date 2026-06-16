import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    const gradient = document.querySelector('.gradient');
    const updatePosition = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      gradient.style.setProperty('--x', `${x}%`);
      gradient.style.setProperty('--y', `${y}%`);
    };
    window.addEventListener('pointermove', updatePosition, {passive:true});
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div aria-hidden="true" className="gradient-wrap">
<div className="gradient"></div>
</div>

<div aria-label="Decorative glass card, no shadow" className="card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400" tabindex="0"></div>


    </>
  );
}
