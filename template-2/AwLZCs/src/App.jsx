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



    // Cosmic Particle Background Animation
    const container = document.getElementById('particles-container');
    let particles = [];
    function createParticles() {
      particles.forEach(p=>p.el?.remove());
      particles = [];
      for(let i=0;i<40;i++){
        const el=document.createElement('div');
        el.className='particle';
        const sz=Math.random()*2+1;
        el.style.width=sz+'px';el.style.height=sz+'px';
        const x=Math.random()*window.innerWidth;
        const y=Math.random()*window.innerHeight;
        el.style.left=x+'px';el.style.top=y+'px';
        const o=Math.random()*0.4+0.1;
        const h=Math.random()*60+220;
        el.style.backgroundColor=`hsla(${h},80%,70%,${o})`;
        container.appendChild(el);
        particles.push({el,x,y,ox:x,oy:y,vx:0,vy:0,speed:Math.random()*0.4+0.1});
      }
    }
    let mx=window.innerWidth/2,my=window.innerHeight/2;
    document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
    function animate(){
      particles.forEach(p=>{
        const dx=mx-p.x,dy=my-p.y,d=Math.sqrt(dx*dx+dy*dy);
        if(d<80){
          const f=(80-d)/80;
          p.vx-=(dx/d)*f*0.13;
          p.vy-=(dy/d)*f*0.13;
        }
        p.vx+=(p.ox-p.x)*0.01;p.vy+=(p.oy-p.y)*0.01;
        p.vx*=0.95;p.vy*=0.95;
        p.x+=p.vx*p.speed;p.y+=p.vy*p.speed;
        p.el.style.transform=`translate(${p.x-p.ox}px,${p.y-p.oy}px)`;
      });
      requestAnimationFrame(animate);
    }
    createParticles(); animate();
    window.addEventListener('resize',createParticles);
  
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
<section className="relative z-10 py-24 px-6">
<div className="max-w-5xl mx-auto">
<h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">What Our Customers Say</h2>
<p className="text-gray-400 text-center max-w-xl mx-auto mb-16">Nebula empowers thousands to take control of their finances. Here’s why our users love us:</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="testimonial-card bg-indigo-900/30 border border-indigo-800/50 rounded-2xl p-8 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full testimonial-avatar flex items-center justify-center mb-6">
<img alt="Jessica" className="rounded-full w-14 h-14 border-4 border-indigo-700 object-cover" src="https://randomuser.me/api/portraits/women/44.jpg" />
</div>
<blockquote className="text-lg text-gray-100 mb-6">
            “Switching to Nebula has made my banking experience effortless. The app is fast, secure, and I get instant insights into my spending!”
          </blockquote>
<div>
<div className="font-semibold text-purple-300">Jessica Smith</div>
<span className="text-purple-100 text-xs opacity-70">UX Designer</span>
</div>
</div>

<div className="testimonial-card bg-indigo-900/30 border border-purple-500/70 rounded-2xl p-8 flex flex-col items-center text-center scale-105">
<div className="w-16 h-16 rounded-full testimonial-avatar flex items-center justify-center mb-6">
<img alt="Carlos" className="rounded-full w-14 h-14 border-4 border-purple-500 object-cover" src="https://randomuser.me/api/portraits/men/76.jpg" />
</div>
<blockquote className="text-lg text-gray-100 mb-6">
            “I love the AI-powered advisor and customizable cards. Nebula makes saving money fun and stress-free. Highly recommended!”
          </blockquote>
<div>
<div className="font-semibold text-purple-300">Carlos Rivera</div>
<span className="text-purple-100 text-xs opacity-70">Entrepreneur</span>
</div>
</div>

<div className="testimonial-card bg-indigo-900/30 border border-indigo-800/50 rounded-2xl p-8 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full testimonial-avatar flex items-center justify-center mb-6">
<img alt="Imran" className="rounded-full w-14 h-14 border-4 border-indigo-700 object-cover" src="https://randomuser.me/api/portraits/men/64.jpg" />
</div>
<blockquote className="text-lg text-gray-100 mb-6">
            “Instant transfers and top-level security give me peace of mind. Nebula’s support team is always there. Couldn’t ask for more.”
          </blockquote>
<div>
<div className="font-semibold text-purple-300">Imran Qureshi</div>
<span className="text-purple-100 text-xs opacity-70">Freelance Consultant</span>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
