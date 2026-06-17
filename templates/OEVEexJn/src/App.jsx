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



    // Cosmic particle animation
    const c = document.getElementById('particles-container');
    let p = [];
    function createParticles() {
      p.forEach(a=>a.el?.remove());
      p = [];
      for(let i=0;i<33;i++){
        const el=document.createElement('div');
        el.className='particle';
        const sz=Math.random()*2+1.2;
        el.style.width=sz+'px';el.style.height=sz+'px';
        const x=Math.random()*window.innerWidth;
        const y=Math.random()*window.innerHeight;
        el.style.left=x+'px';el.style.top=y+'px';
        const o=Math.random()*0.4+0.18;
        const h=Math.random()*60+220;
        el.style.backgroundColor=`hsla(${h},80%,70%,${o})`;
        c.appendChild(el);
        p.push({el,x,y,ox:x,oy:y,vx:0,vy:0,speed:Math.random()*0.29+0.11});
      }
    }
    let mx=window.innerWidth/2,my=window.innerHeight/2;
    document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
    function animate(){
      p.forEach(a=>{
        const dx=mx-a.x,dy=my-a.y,d=Math.sqrt(dx*dx+dy*dy);
        if(d<75){const f=(75-d)/75;
          a.vx-=(dx/d)*f*0.11;
          a.vy-=(dy/d)*f*0.11;
        }
        a.vx+=(a.ox-a.x)*0.011;a.vy+=(a.oy-a.y)*0.011;
        a.vx*=0.94;a.vy*=0.94;

a.x+=a.vx*a.speed;a.y+=a.vy*a.speed;
        a.el.style.transform=`translate(${a.x-a.ox}px,${a.y-a.oy}px)`;
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
<header className="fixed top-0 left-0 w-full z-10 px-6 py-4 bg-indigo-950/30 border-b border-indigo-900/30 backdrop-blur-sm">
<div className="max-w-4xl mx-auto flex items-center">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
<span className="text-white font-bold">N</span>
</div>
<span className="ml-2 text-white font-bold text-xl">Nebula</span>
</div>
<span className="ml-auto text-gray-400 text-sm hidden sm:block">Need help? <a className="text-purple-400 hover:underline" href="#">Contact Support</a></span>
</div>
</header>
<main className="flex items-center justify-center min-h-screen pt-32 pb-12 px-4 relative z-10">
<div className="w-full max-w-lg rounded-2xl bg-indigo-900/30 border border-indigo-800/60 shadow-2xl py-14 px-6 md:px-12 backdrop-blur-md flex flex-col relative items-center">
<div className="flex flex-col items-center gap-7">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-indigo-700 flex items-center justify-center shadow-2xl mb-5 glow">
<svg className="w-11 h-11" fill="none" viewbox="0 0 48 48">
<circle cx="24" cy="24" fill="#a78bfa" fillOpacity=".22" r="24"></circle>
<path d="M14 26.5l7 6.5 14-15" stroke="#a78bfa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<h1 className="text-3xl sm:text-4xl font-bold text-white text-center">Welcome to Nebula!</h1>
<p className="text-lg text-gray-200 text-center max-w-md">Your account has been created and verified successfully.<br/>You’re now ready to explore the future of digital banking!</p>
<a className="mt-8 px-7 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-lg rounded-lg text-white font-semibold shadow glow hover:from-purple-700 hover:to-indigo-700 transition" href="#">Go to Your Dashboard</a>
<div className="mt-8 text-center text-gray-400 text-xs max-w-xs">
          Need help getting started? Explore our <a className="text-purple-400 hover:underline" href="#">help center</a> or <a className="text-purple-400 hover:underline" href="#">contact support</a>.
        </div>
</div>
<div className="absolute -inset-6 blur-2xl pointer-events-none z-0">
<div className="w-full h-full rounded-2xl bg-gradient-to-r from-purple-700/10 via-indigo-700/15 to-transparent"></div>
</div>
</div>
</main>


    </>
  );
}
