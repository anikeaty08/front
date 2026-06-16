import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const particlesContainer = document.getElementById('particles-container');
    let particles = [];
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
    function createParticles() {
      particles.forEach(p => { if (p.element) p.element.remove(); });
      particles = [];
      for (let i = 0; i < settings.count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * (settings.maxSize - settings.minSize) + settings.minSize;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        Object.assign(particle.style, {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.7)',
          borderRadius: '50%',
          pointerEvents: 'none',
          transition: 'transform 0.1s ease-out'
        });
        particles.push({
          element: particle,
          x, y, size,
          originalX: x,
          originalY: y,
          vx: 0, vy: 0,
          speed: Math.random() * (settings.maxSpeed - settings.minSpeed) + settings.minSpeed
        });
        particlesContainer.appendChild(particle);
      }
    }
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });
    function animate() {
      particles.forEach(particle => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < settings.mouseRadius) {
          const force = (settings.mouseRadius - dist) / settings.mouseRadius;
          particle.vx += (dx / dist) * force * settings.mouseForce;
          particle.vy += (dy / dist) * force * settings.mouseForce;
        }
        particle.vx += (particle.originalX - particle.x) * settings.returnForce;
        particle.vy += (particle.originalY - particle.y) * settings.returnForce;
        particle.vx *= settings.friction;
        particle.vy *= settings.friction;
        particle.x += particle.vx * particle.speed;
        particle.y += particle.vy * particle.speed;
        particle.element.style.transform = `translate(${particle.x - particle.originalX}px, ${particle.y - particle.originalY}px)`;
      });
      requestAnimationFrame(animate);
    }
    createParticles();
    animate();
    window.addEventListener('resize', () => {
      particles.forEach(particle => {
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
      
<div className="absolute inset-0 z-0" id="particles-container"></div>
<div className="relative z-10 flex flex-col min-h-screen">
<header className="py-6 px-8 flex justify-between items-center">
<div className="text-2xl font-semibold font-inter tracking-tight">Company<span className="text-blue-500">.</span></div>
<nav className="hidden md:flex space-x-8 text-base font-inter">
<a className="hover:text-blue-400 transition-colors" href="#">Home</a>
<a className="hover:text-blue-400 transition-colors" href="#">About</a>
<a className="hover:text-blue-400 transition-colors" href="#">Services</a>
<a className="hover:text-blue-400 transition-colors" href="#">Contact</a>
</nav>
</header>
<main className="flex flex-1 items-center px-8">
<div className="max-w-2xl">
<h1 className="font-inter font-semibold tracking-tight text-[48px] md:text-[64px] leading-tight animate-slide-in">
          Interactive <span className="text-blue-500">Experiences</span><br/>That Stand Out
        </h1>
<p className="mt-5 text-gray-300 text-[16px] md:text-[18px] animate-slide-in" style={{animationDelay: '0.25s'}}>
          Create stunning digital experiences with our cutting-edge interactive solutions that captivate your audience.
        </p>
<div className="flex flex-col sm:flex-row gap-4 mt-8 animate-slide-in" style={{animationDelay: '0.35s'}}>
<a className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg text-center transition-colors" href="#">
            Get Started
          </a>
<a className="border border-white hover:bg-white hover:text-black font-medium px-6 py-3 rounded-lg text-center transition-colors" href="#">
            Learn More
          </a>
</div>
</div>
</main>
</div>


    </>
  );
}
