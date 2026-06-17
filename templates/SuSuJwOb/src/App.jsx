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
    
    // FAQ toggle functionality
    document.querySelectorAll('.faq-item').forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
    
    // Animation on scroll
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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<div className="fixed inset-0 pointer-events-none z-0" id="particles-container"></div>
<section className="relative py-20 z-10">
<div className="container mx-auto px-6 lg:px-8">
<div className="text-center mb-16 animate-slide-in" style={{animationDelay: '0.1s'}}>
<h2 className="text-[40px] md:text-[48px] font-inter font-semibold tracking-tight mb-4">
          Frequently Asked <span className="text-blue-500">Questions</span>
</h2>
<p className="text-[16px] md:text-[18px] text-gray-300 max-w-2xl mx-auto">
          Find answers to common questions about our services and platform.
        </p>
</div>
<div className="max-w-3xl mx-auto space-y-4 animate-slide-in" style={{animationDelay: '0.2s'}}>
<div className="faq-item bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 cursor-pointer">
<div className="flex justify-between items-center">
<h3 className="text-lg font-semibold pr-8">How does the interactive platform work?</h3>
<div className="faq-icon text-blue-500 transition-transform duration-300">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="faq-content text-gray-400 text-[14px] md:text-[16px]">
            Our interactive platform uses advanced algorithms to create responsive experiences that adapt to user behavior. The system processes user interactions in real-time and adjusts the interface accordingly, creating a personalized experience for each visitor.
          </div>
</div>
<div className="faq-item bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 cursor-pointer">
<div className="flex justify-between items-center">
<h3 className="text-lg font-semibold pr-8">Is my data secure with your platform?</h3>
<div className="faq-icon text-blue-500 transition-transform duration-300">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="faq-content text-gray-400 text-[14px] md:text-[16px]">
            Yes, we take data security very seriously. All data is encrypted both in transit and at rest using industry-standard protocols. We comply with GDPR, CCPA, and other relevant regulations, and we never share your data with third parties without explicit consent.
          </div>
</div>
<div className="faq-item bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 cursor-pointer">
<div className="flex justify-between items-center">
<h3 className="text-lg font-semibold pr-8">Can I customize the features to suit my needs?</h3>
<div className="faq-icon text-blue-500 transition-transform duration-300">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="faq-content text-gray-400 text-[14px] md:text-[16px]">
            Absolutely. Our platform is designed with flexibility in mind. You can customize almost every aspect of the system, from the user interface to the underlying functionality. We also offer a robust API that allows for deep integration with your existing systems.
          </div>
</div>
<div className="faq-item bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 cursor-pointer">
<div className="flex justify-between items-center">
<h3 className="text-lg font-semibold pr-8">What kind of support do you offer?</h3>
<div className="faq-icon text-blue-500 transition-transform duration-300">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="faq-content text-gray-400 text-[14px] md:text-[16px]">
            We provide 24/7 support through multiple channels including live chat, email, and phone. Our dedicated support team is always ready to assist you with any questions or issues. For enterprise clients, we also offer dedicated account managers and priority support.
          </div>
</div>
<div className="faq-item bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 cursor-pointer">
<div className="flex justify-between items-center">
<h3 className="text-lg font-semibold pr-8">How do I get started with your platform?</h3>
<div className="faq-icon text-blue-500 transition-transform duration-300">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="faq-content text-gray-400 text-[14px] md:text-[16px]">
            Getting started is easy. Simply sign up for an account on our website, and you'll be guided through the setup process. We offer a 14-day free trial with no credit card required, so you can explore all the features before making a commitment.
          </div>
</div>
</div>
<div className="mt-12 text-center animate-slide-in" style={{animationDelay: '0.3s'}}>
<p className="text-gray-400 mb-4">Still have questions?</p>
<a className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors" href="#">
          Contact Support
        </a>
</div>
</div>
</section>


    </>
  );
}
