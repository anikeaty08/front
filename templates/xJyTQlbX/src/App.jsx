import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const particlesContainer = document.getElementById('particles-container');
    const cardParticlesContainer = document.getElementById('card-particles-container');
    let pageParticles = [], cardParticles = [];
    
    const pageSettings = {count: 100, minSize: 1, maxSize: 3, mouseRadius: 100, mouseForce: 0.15, friction: 0.95, returnForce: 0.008};
    const cardSettings = {count: 40, minSize: 1, maxSize: 2.5, mouseRadius: 60, mouseForce: 0.3, friction: 0.95, returnForce: 0.01};
    
    function createParticles(container, particles, settings, width, height) {
      particles.forEach(p => p.element?.remove());
      particles = [];
      
      for (let i = 0; i < settings.count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * (settings.maxSize - settings.minSize) + settings.minSize;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        const x = Math.random() * width;
        const y = Math.random() * height;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        const opacity = Math.random() * 0.4 + 0.1;
        const hue = Math.random() * 60 + 220;
        particle.style.backgroundColor = `hsla(${hue}, 80%, 70%, ${opacity})`;
        
        particles.push({
          element: particle, x, y, size, originalX: x, originalY: y, vx: 0, vy: 0,
          speed: Math.random() * 0.4 + 0.1
        });
        
        container.appendChild(particle);
      }
      
      return particles;
    }
    
    let pageMouseX = window.innerWidth / 2;
    let pageMouseY = window.innerHeight / 2;
    let cardMouseX = 170;
    let cardMouseY = 105;
    let isMouseOverCard = false;
    
    document.addEventListener('mousemove', (e) => {
      pageMouseX = e.clientX;
      pageMouseY = e.clientY;
    });
    
    const card = document.getElementById('card');
    card.addEventListener('mousemove', (e) => {
      const cardBounds = card.getBoundingClientRect();
      cardMouseX = e.clientX - cardBounds.left;
      cardMouseY = e.clientY - cardBounds.top;
      isMouseOverCard = true;
      
      const centerX = cardBounds.width / 2;
      const centerY = cardBounds.height / 2;
      const rotateY = (cardMouseX - centerX) / 10;
      const rotateX = (centerY - cardMouseY) / 5;
      
      card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
      isMouseOverCard = false;
      card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
    
    function animateParticles(particles, mouseX, mouseY, settings, isActive) {
      particles.forEach(particle => {
        if (isActive) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < settings.mouseRadius) {
            const force = (settings.mouseRadius - distance) / settings.mouseRadius;
            particle.vx -= (dx / distance) * force * settings.mouseForce;
            particle.vy -= (dy / distance) * force * settings.mouseForce;
          }
        }
        
        particle.vx += (particle.originalX - particle.x) * settings.returnForce;
        particle.vy += (particle.originalY - particle.y) * settings.returnForce;
        
        particle.vx *= settings.friction;
        particle.vy *= settings.friction;
        
        particle.x += particle.vx * particle.speed;
        particle.y += particle.vy * particle.speed;
        
        particle.element.style.transform = `translate(${particle.x - particle.originalX}px, ${particle.y - particle.originalY}px)`;
      });
    }
    
    function animate() {
      animateParticles(pageParticles, pageMouseX, pageMouseY, pageSettings, true);
      animateParticles(cardParticles, cardMouseX, cardMouseY, cardSettings, isMouseOverCard);
      requestAnimationFrame(animate);
    }
    
    pageParticles = createParticles(particlesContainer, pageParticles, pageSettings, window.innerWidth, window.innerHeight);
    if (cardParticlesContainer) {
      cardParticles = createParticles(cardParticlesContainer, cardParticles, cardSettings, 340, 210);
    }
    animate();
    
    window.addEventListener('resize', () => {
      pageParticles = createParticles(particlesContainer, pageParticles, pageSettings, window.innerWidth, window.innerHeight);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div id="particles-container"></div>
<header className="fixed top-0 left-0 w-full z-10 px-6 py-4">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
<span className="text-white font-bold">N</span>
</div>
<span className="ml-2 text-white font-bold text-xl">Nebula</span>
</div>
</header>
<main className="relative z-1">
<section className="min-h-screen px-6 flex flex-col md:flex-row items-center justify-center">
<div className="md:w-1/2 mb-12 md:mb-0 md:pr-8">
<h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Next Generation <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Digital Banking</span>
</h1>
<p className="text-gray-300 text-lg mb-8 max-w-lg">
          Experience seamless transactions and smart financial management with our innovative banking platform powered by cutting-edge technology.
        </p>
<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
<button className="py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-700 hover:to-indigo-700 transition duration-300 glow">
            Get Started
          </button>
<button className="py-3 px-6 rounded-lg bg-transparent border border-gray-600 text-gray-300 font-medium hover:border-gray-400 hover:text-white transition duration-300">
            Learn More
          </button>
</div>
</div>
<div className="md:w-1/2 flex justify-center">
<div className="credit-card">
<div className="card-inner" id="card">
<div className="card-front">
<div id="card-particles-container"></div>

<div className="absolute inset-0 p-5 flex flex-col justify-between text-white z-10">

<div className="flex justify-between items-start">
<div className="chip"></div>
<div className="text-right font-bold text-lg tracking-wider">NEBULA</div>
</div>

<div className="text-center tracking-widest text-lg mt-2">
<span className="inline-block mx-1 opacity-90">5412</span>
<span className="inline-block mx-1 opacity-90">7534</span>
<span className="inline-block mx-1 opacity-90">8901</span>
<span className="inline-block mx-1 opacity-90">2345</span>
</div>

<div className="flex justify-between items-end text-xs">
<div>
<div className="opacity-70">CARDHOLDER NAME</div>
<div className="tracking-wider">ALEX MORGAN</div>
</div>
<div className="text-right">
<div className="opacity-70">VALID THRU</div>
<div>09/27</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
