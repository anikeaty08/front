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



    const cardParticlesContainer = document.getElementById('card-particles-container');
    let particles = [];
    
    // Settings with default values
    const settings = {
      count: 60,
      minSize: 1,
      maxSize: 3,
      mouseRadius: 80,
      mouseForce: 0.3,
      minSpeed: 0.1,
      maxSpeed: 0.5,
      friction: 0.95,
      returnForce: 0.01
    };
    
    // Initialize particles
    function createParticles() {
      // Remove existing particles
      particles.forEach(p => {
        if (p.element) p.element.remove();
      });
      particles = [];
      
      const cardBounds = document.querySelector('.credit-card').getBoundingClientRect();
      
      // Create new particles
      for (let i = 0; i < settings.count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between minSize and maxSize
        const size = Math.random() * (settings.maxSize - settings.minSize) + settings.minSize;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position within card
        const x = Math.random() * 360;
        const y = Math.random() * 220;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        // Random opacity and color
        const opacity = Math.random() * 0.4 + 0.1;
        const hue = Math.random() * 60 + 220; // Blue to purple range
        particle.style.backgroundColor = `hsla(${hue}, 80%, 70%, ${opacity})`;
        
        // Store properties
        particles.push({
          element: particle,
          x,
          y,
          size,
          originalX: x,
          originalY: y,
          vx: 0,
          vy: 0,
          speed: Math.random() * (settings.maxSpeed - settings.minSpeed) + settings.minSpeed
        });
        
        cardParticlesContainer.appendChild(particle);
      }
    }
    
    // Track mouse position relative to card
    let mouseX = 180;
    let mouseY = 110;
    let isMouseOverCard = false;
    
    document.querySelector('.credit-card').addEventListener('mousemove', (e) => {
      const cardBounds = document.querySelector('.credit-card').getBoundingClientRect();
      mouseX = e.clientX - cardBounds.left;
      mouseY = e.clientY - cardBounds.top;
      isMouseOverCard = true;
      
      // Update card tilt based on mouse position
      const card = document.querySelector('.credit-card');
      const centerX = cardBounds.width / 2;
      const centerY = cardBounds.height / 2;
      const rotateY = (mouseX - centerX) / 10;
      const rotateX = (centerY - mouseY) / 5;
      
      card.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });
    
    document.querySelector('.credit-card').addEventListener('mouseleave', () => {
      isMouseOverCard = false;
      
      // Reset card rotation when mouse leaves
      document.querySelector('.credit-card').style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    });
    
    // Animation loop
    function animate() {
      particles.forEach(particle => {
        if (isMouseOverCard) {
          // Calculate distance to mouse
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distanceToMouse = Math.sqrt(dx * dx + dy * dy);
          
          // Influence from mouse
          if (distanceToMouse < settings.mouseRadius) {
            const force = (settings.mouseRadius - distanceToMouse) / settings.mouseRadius;
            particle.vx -= (dx / distanceToMouse) * force * settings.mouseForce;
            particle.vy -= (dy / distanceToMouse) * force * settings.mouseForce;
          }
        }
        
        // Return to original position
        particle.vx += (particle.originalX - particle.x) * settings.returnForce;
        particle.vy += (particle.originalY - particle.y) * settings.returnForce;
        
        // Apply friction
        particle.vx *= settings.friction;
        particle.vy *= settings.friction;
        
        // Update position
        particle.x += particle.vx * particle.speed;
        particle.y += particle.vy * particle.speed;
        
        // Update DOM element
        particle.element.style.transform = `translate(${particle.x - particle.originalX}px, ${particle.y - particle.originalY}px)`;
      });
      
      requestAnimationFrame(animate);
    }
    
    // Initialize and start animation
    createParticles();
    animate();
    
    // Handle window resize
    window.addEventListener('resize', createParticles);
  
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
      
<div className="credit-card">
<div className="card-particles">
<div id="card-particles-container"></div>
</div>

<div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">

<div className="flex justify-between items-start">
<div className="chip"></div>
<div className="text-right font-bold text-xl tracking-wider">NEBULA</div>
</div>

<div className="text-center tracking-widest text-xl mt-2">
<span className="inline-block mx-1 opacity-90">5412</span>
<span className="inline-block mx-1 opacity-90">7534</span>
<span className="inline-block mx-1 opacity-90">8901</span>
<span className="inline-block mx-1 opacity-90">2345</span>
</div>

<div className="flex justify-between items-end text-sm">
<div>
<div className="text-xs opacity-70">CARDHOLDER NAME</div>
<div className="tracking-wider">ALEX MORGAN</div>
</div>
<div className="text-right">
<div className="text-xs opacity-70">VALID THRU</div>
<div>09/27</div>
</div>
</div>
</div>

<div className="holographic-effect"></div>
</div>


    </>
  );
}
