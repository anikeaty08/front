import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const particlesContainer = document.getElementById('particles-container');
    let particles = [];
    const settings = {count: 50, minSize: 2, maxSize: 5, mouseRadius: 100, mouseForce: 0.5, minSpeed: 0.2, maxSpeed: 1, friction: 0.95, returnForce: 0.01};
    
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
        particles.push({element: particle, x, y, size, originalX: x, originalY: y, vx: 0, vy: 0, speed: Math.random() * (settings.maxSpeed - settings.minSpeed) + settings.minSpeed});
        particlesContainer.appendChild(particle);
      }
    }
    
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    document.addEventListener('mousemove', (e) => {mouseX = e.clientX; mouseY = e.clientY;});
    
    function animate() {
      particles.forEach(particle => {
        const dx = mouseX - particle.x, dy = mouseY - particle.y;
        const distanceToMouse = Math.sqrt(dx * dx + dy * dy);
        if (distanceToMouse < settings.mouseRadius) {
          const force = (settings.mouseRadius - distanceToMouse) / settings.mouseRadius;
          particle.vx += (dx / distanceToMouse) * force * settings.mouseForce;
          particle.vy += (dy / distanceToMouse) * force * settings.mouseForce;
        }
        particle.vx += (particle.originalX - particle.x) * settings.returnForce;
        particle.vy += (particle.originalY - particle.y) * settings.returnForce;
        particle.vx *= settings.friction; particle.vy *= settings.friction;
        particle.x += particle.vx * particle.speed; particle.y += particle.vy * particle.speed;
        particle.element.style.transform = `translate(${particle.x - particle.originalX}px, ${particle.y - particle.originalY}px)`;
      });
      requestAnimationFrame(animate);
    }
    
    createParticles(); animate();
    
    document.querySelectorAll('.animate-slide-in').forEach(el => {
      el.style.animationPlayState = 'paused';
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.style.animationPlayState = 'running'; });
      }, { threshold: 0.1 });
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
          Simple, Transparent <span className="text-blue-500">Pricing</span>
</h2>
<p className="text-[16px] md:text-[18px] text-gray-300 max-w-2xl mx-auto">
          Choose the plan that's right for you. All plans include a 14-day free trial.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="pricing-card bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 transition-all duration-300 animate-slide-in" style={{animationDelay: '0.2s'}}>
<div className="text-xl font-semibold mb-2">Basic</div>
<div className="flex items-end mb-6">
<span className="text-4xl font-semibold">$29</span>
<span className="text-gray-400 ml-1">/month</span>
</div>
<div className="border-t border-zinc-800 my-6"></div>
<ul className="space-y-4 mb-8">
<li className="flex items-start">
<svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-300">Up to 5 projects</span>
</li>
<li className="flex items-start">
<svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-300">Basic analytics</span>
</li>
<li className="flex items-start">
<svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-300">24/7 Email support</span>
</li>
</ul>
<a className="block text-center py-3 px-4 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg transition-colors font-medium" href="#">
            Get Started
          </a>
</div>

<div className="pricing-card relative bg-zinc-900/70 backdrop-blur-sm border border-blue-500 rounded-xl p-8 transition-all duration-300 animate-slide-in" style={{animationDelay: '0.3s'}}>
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-bold py-1 px-3 rounded-full">
            MOST POPULAR
          </div>
<div className="text-xl font-semibold mb-2">Pro</div>
<div className="flex items-end mb-6">
<span className="text-4xl font-semibold">$79</span>
<span className="text-gray-400 ml-1">/month</span>
</div>
<div className="border-t border-zinc-800 my-6"></div>
<ul className="space-y-4 mb-8">
<li className="flex items-start">
<svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-300">Unlimited projects</span>
</li>
<li className="flex items-start">
<svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-300">Advanced analytics</span>
</li>
<li className="flex items-start">
<svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-300">Priority support</span>
</li>
<li className="flex items-start">
<svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-300">Custom integrations</span>
</li>
</ul>
<a className="block text-center py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium" href="#">
            Get Started
          </a>
</div>

<div className="pricing-card bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 transition-all duration-300 animate-slide-in" style={{animationDelay: '0.4s'}}>
<div className="text-xl font-semibold mb-2">Enterprise</div>
<div className="flex items-end mb-6">
<span className="text-4xl font-semibold">$199</span>
<span className="text-gray-400 ml-1">/month</span>
</div>
<div className="border-t border-zinc-800 my-6"></div>
<ul className="space-y-4 mb-8">
<li className="flex items-start">
<svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-300">Everything in Pro</span>
</li>
<li className="flex items-start">
<svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-300">Dedicated account manager</span>
</li>
<li className="flex items-start">
<svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-300">Custom development</span>
</li>
<li className="flex items-start">
<svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-gray-300">SLA guarantees</span>
</li>
</ul>
<a className="block text-center py-3 px-4 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg transition-colors font-medium" href="#">
            Contact Sales
          </a>
</div>
</div>
<div className="mt-16 text-center animate-slide-in" style={{animationDelay: '0.5s'}}>
<div className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 max-w-3xl mx-auto">
<h3 className="text-xl font-semibold mb-4">Need a custom plan?</h3>
<p className="text-gray-300 mb-6">
            Contact our sales team for a tailored solution that meets your specific requirements.
          </p>
<a className="inline-block py-3 px-6 bg-white text-black hover:bg-gray-200 rounded-lg transition-colors font-medium" href="#">
            Talk to Sales
          </a>
</div>
</div>
</div>
</section>


    </>
  );
}
