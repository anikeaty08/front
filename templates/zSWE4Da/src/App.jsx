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
    
    const settings = {
      count: 70,
      minSize: 1,
      maxSize: 3,
      mouseRadius: 100,
      mouseForce: 0.15,
      friction: 0.95,
      returnForce: 0.008
    };
    
    function createParticles() {
      particles.forEach(p => p.element?.remove());
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
        
        const opacity = Math.random() * 0.4 + 0.1;
        const hue = Math.random() * 60 + 220;
        particle.style.backgroundColor = `hsla(${hue}, 80%, 70%, ${opacity})`;
        
        particles.push({
          element: particle, x, y, size, originalX: x, originalY: y, vx: 0, vy: 0,
          speed: Math.random() * 0.4 + 0.1
        });
        
        particlesContainer.appendChild(particle);
      }
      
      return particles;
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
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < settings.mouseRadius) {
          const force = (settings.mouseRadius - distance) / settings.mouseRadius;
          particle.vx -= (dx / distance) * force * settings.mouseForce;
          particle.vy -= (dy / distance) * force * settings.mouseForce;
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
      
<div className="fixed inset-0 z-0 pointer-events-none" id="particles-container"></div>
<header className="fixed top-0 left-0 w-full z-10 px-6 py-4">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
<span className="text-white font-bold">N</span>
</div>
<span className="ml-2 text-white font-bold text-xl">Nebula</span>
</div>
</header>
<main className="relative z-1">
<section className="min-h-screen px-6 py-24 flex flex-col items-center justify-center">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Mission</span></h1>
<p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Redefining the future of banking through innovation, security, and exceptional customer experiences.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
<div>
<h2 className="text-3xl font-bold text-white mb-6">Who We Are</h2>
<p className="text-gray-300 mb-4">
              Founded in 2019, Nebula Banking emerged from a simple vision: to create a banking experience that feels as seamless and boundless as the cosmos itself.
            </p>
<p className="text-gray-300 mb-4">
              Our team of financial experts and technology innovators came together with a shared belief that banking should be intuitive, transparent, and accessible to everyone.
            </p>
<p className="text-gray-300">
              Today, we serve over 2 million customers worldwide, providing them with the tools they need to navigate their financial universe with confidence.
            </p>
</div>
<div className="relative">
<div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-purple-600/20 to-indigo-600/20 blur-xl"></div>
<div className="relative bg-indigo-900/30 border border-indigo-800/50 rounded-2xl overflow-hidden">
<img alt="Nebula Team" className="w-full h-80 object-cover object-center opacity-80" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
<div className="bg-indigo-900/20 rounded-xl p-6 border border-indigo-800/30 backdrop-blur-sm hover:bg-indigo-900/30 transition duration-300">
<div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-5">
<svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Trust &amp; Security</h3>
<p className="text-gray-300">We prioritize your financial security with military-grade encryption and biometric authentication, ensuring your assets are always protected.</p>
</div>
<div className="bg-indigo-900/20 rounded-xl p-6 border border-indigo-800/30 backdrop-blur-sm hover:bg-indigo-900/30 transition duration-300">
<div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-5">
<svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
<p className="text-gray-300">Our dedicated research team constantly explores new technologies to bring you cutting-edge financial services that simplify your life.</p>
</div>
<div className="bg-indigo-900/20 rounded-xl p-6 border border-indigo-800/30 backdrop-blur-sm hover:bg-indigo-900/30 transition duration-300">
<div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-5">
<svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Transparency</h3>
<p className="text-gray-300">We believe in clear communication and no hidden fees. Our straightforward approach helps you make informed financial decisions.</p>
</div>
</div>
<div className="text-center">
<h2 className="text-3xl font-bold text-white mb-6">Our Leadership</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
<div className="bg-indigo-900/30 rounded-xl overflow-hidden border border-indigo-800/40">
<img alt="CEO" className="w-full h-48 object-cover object-center" src="https://randomuser.me/api/portraits/women/23.jpg"/>
<div className="p-4">
<h3 className="font-semibold text-white">Alexandra Chen</h3>
<p className="text-purple-300 text-sm">CEO &amp; Co-Founder</p>
</div>
</div>
<div className="bg-indigo-900/30 rounded-xl overflow-hidden border border-indigo-800/40">
<img alt="CTO" className="w-full h-48 object-cover object-center" src="https://randomuser.me/api/portraits/men/54.jpg"/>
<div className="p-4">
<h3 className="font-semibold text-white">Marcus Johnson</h3>
<p className="text-purple-300 text-sm">CTO &amp; Co-Founder</p>
</div>
</div>
<div className="bg-indigo-900/30 rounded-xl overflow-hidden border border-indigo-800/40">
<img alt="CFO" className="w-full h-48 object-cover object-center" src="https://randomuser.me/api/portraits/women/45.jpg"/>
<div className="p-4">
<h3 className="font-semibold text-white">Sophia Rodriguez</h3>
<p className="text-purple-300 text-sm">CFO</p>
</div>
</div>
<div className="bg-indigo-900/30 rounded-xl overflow-hidden border border-indigo-800/40">
<img alt="COO" className="w-full h-48 object-cover object-center" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div className="p-4">
<h3 className="font-semibold text-white">David Kim</h3>
<p className="text-purple-300 text-sm">COO</p>
</div>
</div>
</div>
<a className="inline-block py-3 px-8 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-700 hover:to-indigo-700 transition duration-300 glow" href="#">
            Join Our Team
          </a>
</div>
</div>
</section>
</main>


    </>
  );
}
