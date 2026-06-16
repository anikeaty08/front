import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Particle background script
    const container = document.getElementById('particles-container');
    let particles = [];
    function createParticles() {
      particles.forEach(p=>p.el?.remove());
      particles = [];
      for(let i=0;i<40;i++){
        const el=document.createElement('div');
        el.className='particle';
        const sz=Math.random()*2+1.2;
        el.style.width=sz+'px';el.style.height=sz+'px';
        const x=Math.random()*window.innerWidth;
        const y=Math.random()*window.innerHeight;
        el.style.left=x+'px';el.style.top=y+'px';
        const o=Math.random()*0.4+0.15;
        const h=Math.random()*60+220;
        el.style.backgroundColor=`hsla(${h},80%,70%,${o})`;
        container.appendChild(el);
        particles.push({el,x,y,ox:x,oy:y,vx:0,vy:0,speed:Math.random()*0.35+0.15});
      }
    }
    let mx=window.innerWidth/2,my=window.innerHeight/2;
    document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
    function animate(){particles.forEach(p=>{
      const dx=mx-p.x,dy=my-p.y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<80){const f=(80-d)/80;
        p.vx-=(dx/d)*f*0.13;
        p.vy-=(dy/d)*f*0.13;
      }
      p.vx+=(p.ox-p.x)*0.01;p.vy+=(p.oy-p.y)*0.01;
      p.vx*=0.95;p.vy*=0.95;
      p.x+=p.vx*p.speed;p.y+=p.vy*p.speed;
      p.el.style.transform=`translate(${p.x-p.ox}px,${p.y-p.oy}px)`;
    });requestAnimationFrame(animate);}
    createParticles(); animate();
    window.addEventListener('resize',createParticles);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 z-0 pointer-events-none" id="particles-container"></div>
<section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
<div className="w-full max-w-lg bg-indigo-900/30 border border-indigo-800/50 rounded-2xl shadow-2xl p-10 backdrop-blur-sm flex flex-col items-center text-center">
<div className="flex items-center mb-8">
<div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
<span className="text-white font-bold text-xl">N</span>
</div>
<span className="ml-3 text-white text-2xl font-bold">Nebula</span>
</div>
<h2 className="text-3xl font-bold text-white mb-3">Create Your Account</h2>
<p className="text-gray-400 mb-8">Start your journey with secure, next-gen digital banking. It takes less than a minute!</p>
<form className="w-full flex flex-col space-y-5">
<input autocomplete="name" className="glow-input px-4 py-3 rounded-lg border border-gray-700 bg-indigo-950/40 text-gray-100 focus:outline-none focus:border-purple-500 transition" placeholder="Your Name" required="" type="text"/>
<input autocomplete="email" className="glow-input px-4 py-3 rounded-lg border border-gray-700 bg-indigo-950/40 text-gray-100 focus:outline-none focus:border-purple-500 transition" placeholder="Email Address" required="" type="email"/>
<input autocomplete="new-password" className="glow-input px-4 py-3 rounded-lg border border-gray-700 bg-indigo-950/40 text-gray-100 focus:outline-none focus:border-purple-500 transition" placeholder="Password" required="" type="password"/>
<button className="glow-btn mt-2 py-3 w-full rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-lg tracking-wide hover:from-purple-700 hover:to-indigo-700 transition" type="submit">
          Create Account
        </button>
</form>
<div className="mt-7 text-gray-400 text-sm">
        Already have an account?
        <a className="text-purple-400 hover:underline ml-1" href="#">Sign in</a>
</div>
</div>
</section>


    </>
  );
}
