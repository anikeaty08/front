import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Particle animation
    const container = document.getElementById('particles-container');
    let particles = [];
    function createParticles() {
      particles.forEach(p=>p.el?.remove());
      particles = [];
      for(let i=0;i<45;i++){
        const el=document.createElement('div');
        el.className='particle';
        const sz=Math.random()*2+1.3;
        el.style.width=sz+'px';el.style.height=sz+'px';
        const x=Math.random()*window.innerWidth;
        const y=Math.random()*window.innerHeight;
        el.style.left=x+'px';el.style.top=y+'px';
        const o=Math.random()*0.35+0.18;
        const h=Math.random()*60+220;
        el.style.backgroundColor=`hsla(${h},80%,70%,${o})`;
        container.appendChild(el);
        particles.push({el,x,y,ox:x,oy:y,vx:0,vy:0,speed:Math.random()*0.28+0.12});
      }
    }
    let mx=window.innerWidth/2,my=window.innerHeight/2;
    document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
    function animate(){
      particles.forEach(p=>{
        const dx=mx-p.x,dy=my-p.y,d=Math.sqrt(dx*dx+dy*dy);
        if(d<75){const f=(75-d)/75;
          p.vx-=(dx/d)*f*0.11;
          p.vy-=(dy/d)*f*0.11;
        }
        p.vx+=(p.ox-p.x)*0.011;p.vy+=(p.oy-p.y)*0.011;
        p.vx*=0.94;p.vy*=0.94;
        p.x+=p.vx*p.speed;p.y+=p.vy*p.speed;
        p.el.style.transform=`translate(${p.x-p.ox}px
,${p.y-p.oy}px)`;
      });
      requestAnimationFrame(animate);
    }
    createParticles();
    animate();
    window.addEventListener('resize', createParticles);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 z-0 pointer-events-none" id="particles-container"></div>

<header className="fixed top-0 left-0 w-full z-10 px-6 py-4 bg-indigo-950/30 border-b border-indigo-900/30 backdrop-blur-sm">
<div className="max-w-4xl mx-auto flex items-center">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
<span className="text-white font-bold">N</span>
</div>
<span className="ml-2 text-white font-bold text-xl">Nebula</span>
</div>
<span className="ml-auto text-gray-400 text-sm hidden sm:block">Already a member? <a className="text-purple-400 hover:underline" href="#">Sign in</a></span>
</div>
</header>

<main className="flex items-center justify-center min-h-screen pt-32 pb-12 px-4 relative z-10">
<div className="w-full max-w-2xl rounded-2xl bg-indigo-900/30 border border-indigo-800/60 shadow-2xl py-12 px-7 md:px-14 backdrop-blur-md flex flex-col relative">

<ol className="flex justify-between items-center mb-12">
<li className="flex-1 flex flex-col items-center relative z-10">
<div className="mb-1 w-9 h-9 flex items-center justify-center rounded-full active-step font-bold shadow">1</div>
<span className="text-xs text-purple-200">Personal</span>
</li>
<div className="hidden sm:block h-1 flex-1 bg-purple-700/30 mx-1"></div>
<li className="flex-1 flex flex-col items-center relative">
<div className="mb-1 w-9 h-9 flex items-center justify-center rounded-full bg-indigo-700/60 text-white font-bold">2</div>
<span className="text-xs text-purple-100 opacity-80">Verification</span>
</li>
<div className="hidden sm:block h-1 flex-1 bg-purple-700/30 mx-1"></div>
<li className="flex-1 flex flex-col items-center relative">
<div className="mb-1 w-9 h-9 flex items-center justify-center rounded-full bg-indigo-700/60 text-white font-bold">3</div>
<span className="text-xs text-purple-100 opacity-80">Complete</span>
</li>
</ol>

<form className="w-full flex flex-col gap-6 z-10">
<h2 className="text-2xl font-bold text-white mb-2">Create your account</h2>
<p className="text-gray-400 mb-2">Let’s get started with your basic information.</p>
<div className="flex flex-col gap-4">
<div className="flex flex-col md:flex-row md:gap-4">
<input className="px-4 py-3 rounded-lg border border-gray-700 bg-indigo-950/40 text-gray-100 flex-1 focus:outline-none focus:border-purple-500 transition" placeholder="First Name" required="" type="text"/>
<input className="px-4 py-3 rounded-lg border border-gray-700 bg-indigo-950/40 text-gray-100 flex-1 mt-4 md:mt-0 focus:outline-none focus:border-purple-500 transition" placeholder="Last Name" required="" type="text"/>
</div>
<input className="px-4 py-3 rounded-lg border border-gray-700 bg-indigo-950/40 text-gray-100 focus:outline-none focus:border-purple-500 transition" placeholder="Email Address" required="" type="email"/>
<input className="px-4 py-3 rounded-lg border border-gray-700 bg-indigo-950/40 text-gray-100 focus:outline-none focus:border-purple-500 transition" placeholder="Create Password" required="" type="password"/>
<input className="px-4 py-3 rounded-lg border border-gray-700 bg-indigo-950/40 text-gray-100 focus:outline-none focus:border-purple-500 transition" placeholder="Mobile Number" type="tel"/>
</div>
<button className="glow mt-2 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-lg tracking-wide hover:from-purple-700 hover:to-indigo-700 transition" type="submit">Continue</button>
</form>
<div className="mt-8 text-center text-xs text-gray-400">
        By creating an account, you agree to Nebula’s <a className="text-purple-400 hover:underline" href="#">Terms of Service</a> &amp;
        <a className="text-purple-400 hover:underline ml-1" href="#">Privacy Policy</a>.
      </div>
<div className="absolute -inset-4 blur-2xl pointer-events-none z-0">
<div className="w-full h-full rounded-2xl bg-gradient-to-r from-purple-700/10 via-indigo-700/15 to-transparent"></div>
</div>
</div>
</main>


    </>
  );
}
