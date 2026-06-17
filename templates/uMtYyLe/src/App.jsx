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



    const particlesContainer = document.getElementById('particles-container');
    let particles = [];
    
    // Settings with default values
    const settings = {
      count: 80,
      minSize: 2,
      maxSize: 5,
      mouseRadius: 150,
      mouseForce: 0.6,
      minSpeed: 0.2,
      maxSpeed: 1,
      friction: 0.95,
      returnForce: 0.01
    };
    
    // Connect sliders to settings
    const countSlider = document.getElementById('count-slider');
    const countValue = document.getElementById('count-value');
    const minSizeSlider = document.getElementById('min-size-slider');
    const minSizeValue = document.getElementById('min-size-value');
    const maxSizeSlider = document.getElementById('max-size-slider');
    const maxSizeValue = document.getElementById('max-size-value');
    const mouseRadiusSlider = document.getElementById('mouse-radius-slider');
    const mouseRadiusValue = document.getElementById('mouse-radius-value');
    const mouseForceSlider = document.getElementById('mouse-force-slider');
    const mouseForceValue = document.getElementById('mouse-force-value');
    const minSpeedSlider = document.getElementById('min-speed-slider');
    const minSpeedValue = document.getElementById('min-speed-value');
    const maxSpeedSlider = document.getElementById('max-speed-slider');
    const maxSpeedValue = document.getElementById('max-speed-value');
    const frictionSlider = document.getElementById('friction-slider');
    const frictionValue = document.getElementById('friction-value');
    const returnForceSlider = document.getElementById('return-force-slider');
    const returnForceValue = document.getElementById('return-force-value');
    const resetButton = document.getElementById('reset-button');
    
    // Initialize particles
    function createParticles() {
      // Remove existing particles
      particles.forEach(p => {
        if (p.element) p.element.remove();
      });
      particles = [];
      
      // Create new particles
      for (let i = 0; i < settings.count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between minSize and maxSize
        const size = Math.random() * (settings.maxSize - settings.minSize) + settings.minSize;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        // Random opacity
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        
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
        
        particlesContainer.appendChild(particle);
      }
    }
    
    // Track mouse position
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    // Animation loop
    function animate() {
      particles.forEach(particle => {
        // Calculate distance to mouse
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distanceToMouse = Math.sqrt(dx * dx + dy * dy);
        
        // Influence from mouse
        if (distanceToMouse < settings.mouseRadius) {
          const force = (settings.mouseRadius - distanceToMouse) / settings.mouseRadius;
          particle.vx += (dx / distanceToMouse) * force * settings.mouseForce;
          particle.vy += (dy / distanceToMouse) * force * settings.mouseForce;
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
    
    // Handle slider changes
    countSlider.addEventListener('input', function() {
      settings.count = parseInt(this.value);
      countValue.textContent = settings.count;
      createParticles();
    });
    
    minSizeSlider.addEventListener('input', function() {
      settings.minSize = parseFloat(this.value);
      minSizeValue.textContent = `${settings.minSize}px`;
      if (settings.minSize > settings.maxSize) {
        settings.maxSize = settings.minSize;
        maxSizeSlider.value = settings.maxSize;
        maxSizeValue.textContent = `${settings.maxSize}px`;
      }
      createParticles();
    });
    
    maxSizeSlider.addEventListener('input', function() {
      settings.maxSize = parseFloat(this.value);
      maxSizeValue.textContent = `${settings.maxSize}px`;
      if (settings.maxSize < settings.minSize) {
        settings.minSize = settings.maxSize;
        minSizeSlider.value = settings.minSize;
        minSizeValue.textContent = `${settings.minSize}px`;
      }
      createParticles();
    });
    
    mouseRadiusSlider.addEventListener('input', function() {
      settings.mouseRadius = parseInt(this.value);
      mouseRadiusValue.textContent = `${settings.mouseRadius}px`;
    });
    
    mouseForceSlider.addEventListener('input', function() {
      settings.mouseForce = parseFloat(this.value);
      mouseForceValue.textContent = settings.mouseForce;
    });
    
    minSpeedSlider.addEventListener('input', function() {
      settings.minSpeed = parseFloat(this.value);
      minSpeedValue.textContent = settings.minSpeed;
      if (settings.minSpeed > settings.maxSpeed) {
        settings.maxSpeed = settings.minSpeed;
        maxSpeedSlider.value = settings.maxSpeed;
        maxSpeedValue.textContent = settings.maxSpeed;
      }
      createParticles();
    });
    
    maxSpeedSlider.addEventListener('input', function() {
      settings.maxSpeed = parseFloat(this.value);
      maxSpeedValue.textContent = settings.maxSpeed;
      if (settings.maxSpeed < settings.minSpeed) {
        settings.minSpeed = settings.maxSpeed;
        minSpeedSlider.value = settings.minSpeed;
        minSpeedValue.textContent = settings.minSpeed;
      }
      createParticles();
    });
    
    frictionSlider.addEventListener('input', function() {
      settings.friction = parseFloat(this.value);
      frictionValue.textContent = settings.friction;
    });
    
    returnForceSlider.addEventListener('input', function() {
      settings.returnForce = parseFloat(this.value);
      returnForceValue.textContent = settings.returnForce;
    });
    
    // Reset button
    resetButton.addEventListener('click', function() {
      settings.count = 80;
      settings.minSize = 2;
      settings.maxSize = 5;
      settings.mouseRadius = 150;
      settings.mouseForce = 0.6;
      settings.minSpeed = 0.2;
      settings.maxSpeed = 1;
      settings.friction = 0.95;
      settings.returnForce = 0.01;
      
      // Update sliders
      countSlider.value = settings.count;
      countValue.textContent = settings.count;
      minSizeSlider.value = settings.minSize;
      minSizeValue.textContent = `${settings.minSize}px`;
      maxSizeSlider.value = settings.maxSize;
      maxSizeValue.textContent = `${settings.maxSize}px`;
      mouseRadiusSlider.value = settings.mouseRadius;
      mouseRadiusValue.textContent = `${settings.mouseRadius}px`;
      mouseForceSlider.value = settings.mouseForce;
      mouseForceValue.textContent = settings.mouseForce;
      minSpeedSlider.value = settings.minSpeed;
      minSpeedValue.textContent = settings.minSpeed;
      maxSpeedSlider.value = settings.maxSpeed;
      maxSpeedValue.textContent = settings.maxSpeed;
      frictionSlider.value = settings.friction;
      frictionValue.textContent = settings.friction;
      returnForceSlider.value = settings.returnForce;
      returnForceValue.textContent = settings.returnForce;
      
      createParticles();
    });
    
    // Initialize and start animation
    createParticles();
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
      particles.forEach(particle => {
        // Adjust original positions on resize
        particle.originalX = Math.random() * window.innerWidth;
        particle.originalY = Math.random() * window.innerHeight;
        particle.x = particle.originalX;
        particle.y = particle.originalY;
        particle.element.style.left = `${particle.originalX}px`;
        particle.element.style.top = `${particle.originalY}px`;
        particle.element.style.transform = 'translate(0px, 0px)';
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
      
<div id="particles-container"></div>
<div className="fixed right-0 top-0 h-full w-72 bg-zinc-900/80 backdrop-blur-md border-l border-zinc-800 shadow-lg p-6 flex flex-col z-50">
<h2 className="text-2xl font-bold mb-6">Particles Settings</h2>
<div className="space-y-6 flex-1 overflow-auto pr-2">
<div>
<label className="block mb-2 text-sm font-medium text-zinc-400">Particle Count</label>
<input className="mb-1" id="count-slider" max="300" min="10" type="range" value="80"/>
<div className="flex justify-between text-xs text-zinc-500">
<span>10</span>
<span id="count-value">80</span>
<span>300</span>
</div>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-zinc-400">Size Range</label>
<div className="flex gap-4">
<div className="flex-1">
<input className="mb-1" id="min-size-slider" max="10" min="1" step="0.5" type="range" value="2"/>
<div className="text-xs text-zinc-500 text-center" id="min-size-value">2px</div>
</div>
<div className="flex-1">
<input className="mb-1" id="max-size-slider" max="10" min="1" step="0.5" type="range" value="5"/>
<div className="text-xs text-zinc-500 text-center" id="max-size-value">5px</div>
</div>
</div>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-zinc-400">Mouse Influence</label>
<input className="mb-1" id="mouse-radius-slider" max="200" min="0" type="range" value="150"/>
<div className="flex justify-between text-xs text-zinc-500">
<span>0</span>
<span id="mouse-radius-value">150px</span>
<span>200</span>
</div>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-zinc-400">Mouse Force</label>
<input className="mb-1" id="mouse-force-slider" max="2" min="0" step="0.1" type="range" value="0.6"/>
<div className="flex justify-between text-xs text-zinc-500">
<span>0</span>
<span id="mouse-force-value">0.6</span>
<span>2</span>
</div>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-zinc-400">Speed Range</label>
<div className="flex gap-4">
<div className="flex-1">
<input className="mb-1" id="min-speed-slider" max="2" min="0.1" step="0.1" type="range" value="0.2"/>
<div className="text-xs text-zinc-500 text-center" id="min-speed-value">0.2</div>
</div>
<div className="flex-1">
<input className="mb-1" id="max-speed-slider" max="2" min="0.1" step="0.1" type="range" value="1"/>
<div className="text-xs text-zinc-500 text-center" id="max-speed-value">1</div>
</div>
</div>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-zinc-400">Friction</label>
<input className="mb-1" id="friction-slider" max="0.99" min="0.8" step="0.01" type="range" value="0.95"/>
<div className="flex justify-between text-xs text-zinc-500">
<span>More</span>
<span id="friction-value">0.95</span>
<span>Less</span>
</div>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-zinc-400">Return Force</label>
<input className="mb-1" id="return-force-slider" max="0.05" min="0" step="0.005" type="range" value="0.01"/>
<div className="flex justify-between text-xs text-zinc-500">
<span>0</span>
<span id="return-force-value">0.01</span>
<span>0.05</span>
</div>
</div>
</div>
<div className="pt-4 border-t border-zinc-800 mt-4">
<button className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 rounded text-sm font-medium transition-colors" id="reset-button">
        Reset to Defaults
      </button>
</div>
</div>


    </>
  );
}
