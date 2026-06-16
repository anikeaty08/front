import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const particlesContainer = document.getElementById('particles-container');
    let particles = [];
    
    // Settings
    const settings = {
      count: 80,
      minSize: 2,
      maxSize: 5,
      mouseRadius: 100,
      mouseForce: 0.5,
      minSpeed: 0.2,
      maxSpeed: 1,
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
  }, []);

  return (
    <>
      
<div id="particles-container"></div>
<div className="relative min-h-screen flex flex-col">
<header className="py-6 px-8 flex justify-between items-center z-10">
<div className="text-2xl font-bold">Company<span className="text-blue-500">.</span></div>
<nav className="hidden md:flex space-x-10">
<a className="hover:text-blue-400 transition-colors" href="#">Home</a>
<a className="hover:text-blue-400 transition-colors" href="#">About</a>
<a className="hover:text-blue-400 transition-colors" href="#">Services</a>
<a className="hover:text-blue-400 transition-colors" href="#">Contact</a>
</nav>
<button className="md:hidden">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</header>
<main className="flex-grow flex items-center z-10">
<div className="container mx-auto px-8">
<div className="max-w-2xl">
<h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Interactive <span className="text-blue-500">Experiences</span> That Stand Out
          </h1>
<p className="text-xl text-gray-300 mb-8">
            Create stunning digital experiences with our cutting-edge interactive solutions that captivate your audience.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg text-center transition-colors" href="#">
              Get Started
            </a>
<a className="border border-white hover:bg-white hover:text-black font-medium px-6 py-3 rounded-lg text-center transition-colors" href="#">
              Learn More
            </a>
</div>
</div>
</div>
</main>
<div className="absolute right-0 bottom-0 hidden lg:block z-10">
<svg fill="none" height="350" viewbox="0 0 350 350" width="350" xmlns="http://www.w3.org/2000/svg">
<circle cx="175" cy="175" r="174" stroke="url(#paint0_linear)" strokeWidth="2"></circle>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="paint0_linear" x1="0" x2="350" y1="0" y2="350">
<stop stop-color="#3B82F6" stop-opacity="0.2"></stop>
<stop offset="1" stop-color="#3B82F6" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="absolute left-0 top-1/3 hidden lg:block z-10">
<svg fill="none" height="250" viewbox="0 0 250 250" width="250" xmlns="http://www.w3.org/2000/svg">
<circle cx="125" cy="125" r="124" stroke="url(#paint1_linear)" strokeWidth="2"></circle>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="paint1_linear" x1="0" x2="250" y1="0" y2="250">
<stop stop-color="#3B82F6" stop-opacity="0.2"></stop>
<stop offset="1" stop-color="#3B82F6" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>


    </>
  );
}
