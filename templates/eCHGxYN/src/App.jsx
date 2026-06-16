import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const particlesContainer = document.getElementById('particles-container');
    let particles = [];
    
    const settings = {
      count: 50,
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
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    function animate() {
      particles.forEach(particle => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distanceToMouse = Math.sqrt(dx * dx + dy * dy);
        
        if (distanceToMouse < settings.mouseRadius) {
          const force = (settings.mouseRadius - distanceToMouse) / settings.mouseRadius;
          particle.vx += (dx / distanceToMouse) * force * settings.mouseForce;
          particle.vy += (dy / distanceToMouse) * force * settings.mouseForce;
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
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-slide-in').forEach(el => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 pointer-events-none z-0" id="particles-container"></div>
<section className="relative py-20 z-10">
<div className="container mx-auto px-6 lg:px-8">
<div className="text-center mb-16 animate-slide-in" style={{animationDelay: '0.1s'}}>
<h2 className="text-[40px] md:text-[48px] font-inter font-semibold tracking-tight mb-4">
          What Our <span className="text-blue-500">Clients</span> Say
        </h2>
<p className="text-[16px] md:text-[18px] text-gray-300 max-w-2xl mx-auto">
          Don't just take our word for it. See what our clients have to say about their experience.
        </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 transition-all duration-300 animate-slide-in" style={{animationDelay: '0.2s'}}>
<div className="quote-mark text-blue-500 opacity-40">"</div>
<p className="text-gray-300 text-[14px] md:text-[16px] mb-6">
            The interactive elements and seamless user experience have completely transformed our digital presence. Our engagement metrics have increased by 200% since launch.
          </p>
<div className="flex items-center">
<div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center font-semibold text-lg mr-4">JD</div>
<div>
<h4 className="font-semibold">Jane Doe</h4>
<p className="text-gray-400 text-sm">Marketing Director, TechCorp</p>
</div>
</div>
</div>
<div className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 transition-all duration-300 animate-slide-in" style={{animationDelay: '0.3s'}}>
<div className="quote-mark text-blue-500 opacity-40">"</div>
<p className="text-gray-300 text-[14px] md:text-[16px] mb-6">
            I was blown away by the attention to detail and how responsive the team was to our needs. The final product exceeded our expectations in every way possible.
          </p>
<div className="flex items-center">
<div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center font-semibold text-lg mr-4">MS</div>
<div>
<h4 className="font-semibold">Michael Smith</h4>
<p className="text-gray-400 text-sm">CEO, Innovate Inc.</p>
</div>
</div>
</div>
<div className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 transition-all duration-300 animate-slide-in" style={{animationDelay: '0.4s'}}>
<div className="quote-mark text-blue-500 opacity-40">"</div>
<p className="text-gray-300 text-[14px] md:text-[16px] mb-6">
            The analytics dashboard provides us with invaluable insights that have helped us make data-driven decisions and optimize our business processes.
          </p>
<div className="flex items-center">
<div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center font-semibold text-lg mr-4">AJ</div>
<div>
<h4 className="font-semibold">Alex Johnson</h4>
<p className="text-gray-400 text-sm">Operations Manager, DataFlow</p>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center animate-slide-in" style={{animationDelay: '0.5s'}}>
<a className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors" href="#">
<span>View more testimonials</span>
<svg className="h-5 w-5 ml-1" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" fill-rule="evenodd"></path>
</svg>
</a>
</div>
</div>
</section>


    </>
  );
}
