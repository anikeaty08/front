import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Responsive themed particles
    const container = document.getElementById('particles-container');
    let particles = [];
    function createParticles() {
      particles.forEach(p=>p.el?.remove());
      particles = [];
      for(let i=0;i<65;i++){
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
        if(d<100){
          const f=(100-d)/100;
          p.vx-=(dx/d)*f*0.15;
          p.vy-=(dy/d)*f*0.15;
        }
        p.vx+=(p.ox-p.x)*0.008;p.vy+=(p.oy-p.y)*0.008;
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
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none" id="particles-container"></div>
<section className="relative z-10 pt-24 pb-12 px-6">
<div className="max-w-6xl mx-auto">
<header className="flex items-center mb-16">
<div className="flex items-center">
<div className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
<span className="text-white font-bold text-lg">N</span>
</div>
<span className="ml-2 text-white text-2xl font-bold">Nebula</span>
</div>
<div className="ml-auto"></div>
</header>
<h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-5">Simple, Transparent Pricing</h2>
<p className="text-gray-400 max-w-2xl text-center mx-auto mb-14">Select the plan that fits your lifestyle with no hidden fees. All plans include secure banking, app access, and instant notifications.</p>
<div className="grid md:grid-cols-3 gap-9">

<div className="pricing-card border border-indigo-900/60 bg-indigo-900/20 rounded-2xl px-7 pt-10 pb-8 flex flex-col shadow-lg backdrop-blur-sm">
<h3 className="text-2xl font-semibold text-white mb-2">Basic</h3>
<p className="text-gray-400 mb-5">Essential banking for everyone</p>
<div className="flex items-end mb-6">
<span className="text-4xl font-extrabold text-white">$0</span>
<span className="text-gray-400 ml-1 text-lg">/mo</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start">
<svg className="w-5 h-5 text-purple-400 mr-2 mt-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              No minimum balance
            </li>
<li className="flex items-start">
<svg className="w-5 h-5 text-purple-400 mr-2 mt-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              Digital card
            </li>
<li className="flex items-start">
<svg className="w-5 h-5 text-purple-400 mr-2 mt-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              3 free ATM withdrawals
            </li>
<li className="flex items-start text-gray-500">
<svg className="w-5 h-5 text-gray-500 mr-2 mt-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              AI advisor
            </li>
<li className="flex items-start text-gray-500">
<svg className="w-5 h-5 text-gray-500 mr-2 mt-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              Priority support
            </li>
</ul>
<button className="w-full py-3 rounded-xl border border-purple-500 text-purple-400 bg-transparent hover:bg-purple-600/30 hover:text-white transition font-semibold text-base">Get Started</button>
</div>

<div className="pricing-card border border-purple-500/70 bg-indigo-900/40 rounded-2xl px-7 pt-10 pb-8 flex flex-col shadow-2xl backdrop-blur-sm scale-105">
<h3 className="text-2xl font-semibold text-white mb-2">Premium</h3>
<p className="text-gray-400 mb-5">Everyday luxury banking</p>
<div className="flex items-end mb-6">
<span className="text-4xl font-extrabold text-white">$9</span>
<span className="text-gray-400 ml-1 text-lg">/mo</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start">
<svg className="w-5 h-5 text-purple-400 mr-2 mt-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              No minimum balance
            </li>
<li className="flex items-start">
<svg className="w-5 h-5 text-purple-400 mr-2 mt-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              Premium digital card
            </li>
<li className="flex items-start">
<svg className="w-5 h-5 text-purple-400 mr-2 mt-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              Unlimited withdrawals
            </li>
<li className="flex items-start">
<svg className="w-5 h-5 text-purple-400 mr-2 mt-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              AI advisor
            </li>
<li className="flex items-start text-gray-500">
<svg className="w-5 h-5 text-gray-500 mr-2 mt-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              Priority support
            </li>
</ul>
<button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-base hover:from-purple-700 hover:to-indigo-700 transition">Get Started</button>
</div>

<div className="pricing-card border border-indigo-900/60 bg-indigo-900/20 rounded-2xl px-7 pt-10 pb-8 flex flex-col shadow-lg backdrop-blur-sm">
<h3 className="text-2xl font-semibold text-white mb-2">Ultimate</h3>
<p className="text-gray-400 mb-5">For power users &amp; pros</p>
<div className="flex items-end mb-6">
<span className="text-4xl font-extrabold text-white">$19</span>
<span className="text-gray-400 ml-1 text-lg">/mo</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start">
<svg className="w-5 h-5 text-purple-400 mr-2 mt-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              No minimum balance
            </li>
<li className="flex items-start">
<svg className="w-5 h-5 text-purple-400 mr-2 mt-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              Metal physical card
            </li>
<li className="flex items-start">
<svg className="w-5 h-5 text-purple-400 mr-2 mt-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              Unlimited withdrawals
            </li>
<li className="flex items-start">
<svg className="w-5 h-5 text-purple-400 mr-2 mt-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              Advanced AI advisor
            </li>
<li className="flex items-start">
<svg className="w-5 h-5 text-purple-400 mr-2 mt-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              24/7 priority support
            </li>
</ul>
<button className="w-full py-3 rounded-xl border border-purple-500 text-purple-400 bg-transparent hover:bg-purple-600/30 hover:text-white transition font-semibold text-base">Get Started</button>
</div>
</div>
<div className="text-center text-gray-400 mt-14 mb-2">
<a className="hover:text-purple-400 transition font-semibold" href="#">View full comparison →</a>
</div>
</div>
</section>


    </>
  );
}
