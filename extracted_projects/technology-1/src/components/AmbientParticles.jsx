import React, { useEffect, useRef } from 'react';

export default function AmbientParticles() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    const numParticles = 20;
    const particles = [];

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute bg-white rounded-full';
        particle.style.width = Math.random() > 0.5 ? '2px' : '3px';
        particle.style.height = particle.style.width;
        particle.style.left = (Math.random() * 100) + '%';
        particle.style.opacity = (Math.random() * 0.2 + 0.05).toString();
        
        particle._y = Math.random() * 100;
        particle._speed = Math.random() * 0.05 + 0.02;
        
        container.appendChild(particle);
        particles.push(particle);
    }

    let animationFrameId;
    function animateParticles() {
        particles.forEach(p => {
            p._y -= p._speed;
            if (p._y < -5) { 
                p._y = 105;
                p.style.left = (Math.random() * 100) + '%';
            }
            p.style.top = p._y + '%';
        });
        animationFrameId = requestAnimationFrame(animateParticles);
    }
    animateParticles();

    return () => {
        cancelAnimationFrame(animationFrameId);
        container.innerHTML = '';
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />
  );
}