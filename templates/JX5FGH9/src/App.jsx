import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons();

    /* Reveal on scroll */
    const reveals=document.querySelectorAll('.reveal');
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){ entry.target.classList.add('show'); observer.unobserve(entry.target); }
      });
    },{threshold:0.15});
    reveals.forEach(r=>observer.observe(r));

    /* Hero canvas animation */
    const canvas=document.getElementById('heroCanvas');
    const ctx=canvas.getContext('2d');
    function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;}
    resize();window.addEventListener('resize',resize);
    const dots=Array.from({length:120},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,vy:1+Math.random()*1}));
    function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);dots.forEach(d=>{ctx.fillStyle='#1E90FF22';ctx.beginPath();ctx.arc(d.x,d.y,1.2,0,Math.PI*2);ctx.fill();d.y+=d.vy;if(d.y>canvas.height){d.y=0;}ctx.beginPath();ctx.strokeStyle='#3F8CFF11';ctx.moveTo(d.x,d.y);ctx.lineTo(canvas.width/2,canvas.height/2);ctx.stroke();});requestAnimationFrame(draw);}
    draw();

    /* Hamster wheel moving dot */
    const wheel=document.getElementById('movingDot');
    anime({
      targets: wheel,
      translateX: function() { return ['160','-160']; },
      easing: 'linear',
      loop:true,
      duration: 8000,
      rotate:360,
      translateY:0,
      update: function(anim) {
        const progress=anim.progress/100 * 2 * Math.PI;
        const r=140;
        const x=160 + r*Math.cos(progress);
        const y=160 + r*Math.sin(progress);
        wheel.style.transform=`translate(${x-6}px,${y-6}px)`; // -6 to center
      }
    });

    /* Aqueduct canvas */
    const aqCanvas=document.getElementById('aqueductCanvas');
    const aqCtx=aqCanvas.getContext('2d');
    function resizeAq(){aqCanvas.width=aqCanvas.clientWidth;aqCanvas.height=aqCanvas.clientHeight;}
    resizeAq();window.addEventListener('resize',resizeAq);
    let t=0;
    function drawAq(){
        aqCtx.clearRect(0,0,aqCanvas.width,aqCanvas.height);
        t+=0.01;
        // dots to line
        for(let i=0;i<180;i++){
            const progress=Math.min(1,(window.scrollY/1200));
            const sx=Math.random()*aqCanvas.width;
            const sy=Math.random()*aqCanvas.height;
            const ex=aqCanvas.width*i/180;
            const ey=aqCanvas.height/2;
            const x=sx+(ex-sx)*progress;
            const y=sy+(ey-sy)*progress;
            aqCtx.fillStyle=`rgba(62,140,255,${0.6*progress})`;
            aqCtx.beginPath();aqCtx.arc(x,y,1.5,0,Math.PI*2);aqCtx.fill();
        }
        requestAnimationFrame(drawAq);
    }
    drawAq();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">

<canvas className="absolute inset-0 opacity-60" id="heroCanvas"></canvas>
<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto reveal">Stop Hiring People to Fix a Broken System.</h1>
<p className="mt-6 text-xl md:text-2xl max-w-2xl mx-auto reveal">Here’s How to Build the <span className="gradient-text">Operational Aqueduct</span> That Creates Scalable Growth and Reclaims Your Freedom.</p>
<p className="mt-4 text-[#A6A6A6] max-w-xl mx-auto reveal">You did it. You built a successful business... And you're feeling the pains of scale.</p>
<button className="btn-ghost reveal mt-10 px-8 py-3 rounded-lg text-white">Get the Blueprint</button>
</section>

<section className="py-24 px-6 text-center space-y-16">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight reveal">The Hamster Wheel of Hiring More “Help”</h2>
<div className="relative flex items-center justify-center">

<svg className="absolute" height="320" width="320">
<circle cx="160" cy="160" fill="none" r="140" stroke="#3F8CFF20" stroke-dasharray="4 8" strokeWidth="2"></circle>
</svg>

<div className="w-3 h-3 bg-[#3F8CFF] rounded-full absolute" id="movingDot"></div>

<div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 bg-[#1C1C1E] p-6 rounded-lg shadow reveal">
<span className="text-[#3F8CFF] font-semibold text-xl">1.</span>
<p className="mt-2 text-[#A6A6A6]">You hire a “specialist” to fix the bottleneck.</p>
</div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 bg-[#1C1C1E] p-6 rounded-lg shadow reveal">
<span className="text-[#3F8CFF] font-semibold text-xl">2.</span>
<p className="mt-2 text-[#A6A6A6]">Their quick fix adds more moving parts—and more chaos.</p>
</div>
<div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-64 bg-[#1C1C1E] p-6 rounded-lg shadow reveal">
<span className="text-[#3F8CFF] font-semibold text-xl">3.</span>
<p className="mt-2 text-[#A6A6A6]">You’re still stuck—only now you’re burning even more cash.</p>
</div>
</div>
</section>

<section className="py-28 px-6 text-center">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto reveal">The Single Belief That Separates Stalled Businesses From Unstoppable Ones</h2>
<p className="mt-6 text-[#A6A6A6] max-w-2xl mx-auto reveal">The problem isn't your people... you need to build an aqueduct... unlock scalable growth without adding complexity or chaos.</p>
<p className="mt-6 text-2xl md:text-3xl font-semibold reveal max-w-4xl mx-auto">“<span className="gradient-text">You don't need more people to carry buckets of water; you need to build an aqueduct.</span>”</p>

<div className="mt-20 max-w-5xl mx-auto">
<canvas className="w-full h-64 md:h-96" id="aqueductCanvas"></canvas>
</div>
</section>

<section className="py-28 px-6 text-center">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight reveal">Introducing The Growth Alignment System™: Your Blueprint for Building the Aqueduct</h2>
<p className="mt-6 text-[#A6A6A6] max-w-3xl mx-auto reveal">The aqueduct isn't just a metaphor... This is targeted, strategic surgery...</p>
<div className="grid md:grid-cols-4 gap-6 mt-16">

<div className="pillar relative bg-[#1C1C1E] border border-transparent p-8 rounded-lg transition-all reveal">
<div className="w-8 h-8 mx-auto stroke-[1.5]" data-lucide="target"></div>
<h3 className="mt-6 font-semibold text-lg">Clarity Mapping</h3>
<p className="mt-3 text-[#A6A6A6] text-sm">Map every process bottleneck stopping your growth.</p>
</div>

<div className="pillar relative bg-[#1C1C1E] border border-transparent p-8 rounded-lg transition-all reveal">
<div className="w-8 h-8 mx-auto stroke-[1.5]" data-lucide="workflow"></div>
<h3 className="mt-6 font-semibold text-lg">Flow Engineering</h3>
<p className="mt-3 text-[#A6A6A6] text-sm">Engineer streamlined workflows that scale without drama.</p>
</div>

<div className="pillar relative bg-[#1C1C1E] border border-transparent p-8 rounded-lg transition-all reveal">
<div className="w-8 h-8 mx-auto stroke-[1.5]" data-lucide="cpu"></div>
<h3 className="mt-6 font-semibold text-lg">Automation Layer</h3>
<p className="mt-3 text-[#A6A6A6] text-sm">Leverage tech to eliminate manual, error-prone tasks.</p>
</div>

<div className="pillar relative bg-[#1C1C1E] border border-transparent p-8 rounded-lg transition-all reveal">
<div className="w-8 h-8 mx-auto stroke-[1.5]" data-lucide="shield-check"></div>
<h3 className="mt-6 font-semibold text-lg">Control Dashboard</h3>
<p className="mt-3 text-[#A6A6A6] text-sm">Gain crystal-clear visibility and governance over ops.</p>
</div>
</div>
</section>

<section className="py-28 px-6">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center reveal">This Isn't Magic. It's Operational Science.</h2>
<div className="grid md:grid-cols-2 gap-6 mt-16">

<div className="bg-[#1C1C1E] p-10 rounded-lg reveal">
<p className="text-6xl font-extrabold gradient-text tracking-tight">40%</p>
<p className="mt-4 text-[#A6A6A6]">Average reduction in operating costs across 32 clients.</p>
</div>

<div className="bg-[#1C1C1E] p-10 rounded-lg reveal flex items-start">
<div className="w-8 h-8 stroke-[1.5] flex-shrink-0" data-lucide="link-2-off"></div>
<p className="ml-4 text-[#A6A6A6]">Identified &amp; eliminated the single weakest link in every process chain—before it snapped.</p>
</div>
</div>

<div className="mt-16 bg-[#1C1C1E] p-10 rounded-lg reveal">
<div className="flex items-start">
<div className="w-10 h-10 stroke-[1.5] text-[#3F8CFF]" data-lucide="quote"></div>
<p className="ml-4 text-lg italic">“Before Automatick, we were drowning in complexity. Six weeks in, our ops run smoother than ever—and I finally sleep at night.”</p>
</div>
<p className="mt-4 text-[#A6A6A6]">— Sarah G., SaaS Founder</p>
</div>
</section>

<section className="py-28 px-6 text-center">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight reveal">Your 12-Week Acceleration Sprint</h2>
<p className="mt-4 text-[#A6A6A6] reveal">Your alternative is to gamble...</p>
<ul className="mt-10 space-y-4 max-w-xl mx-auto text-left">
<li className="flex items-start reveal"><div className="w-5 h-5 stroke-[1.5] text-[#3F8CFF] flex-shrink-0" data-lucide="check-circle"></div><span className="ml-3">Full process mapping &amp; bottleneck audit</span></li>
<li className="flex items-start reveal"><div className="w-5 h-5 stroke-[1.5] text-[#3F8CFF] flex-shrink-0" data-lucide="check-circle"></div><span className="ml-3">Custom-built automation roadmap</span></li>
<li className="flex items-start reveal"><div className="w-5 h-5 stroke-[1.5] text-[#3F8CFF] flex-shrink-0" data-lucide="check-circle"></div><span className="ml-3">Weekly implementation sprints</span></li>
<li className="flex items-start reveal"><div className="w-5 h-5 stroke-[1.5] text-[#3F8CFF] flex-shrink-0" data-lucide="check-circle"></div><span className="ml-3">Real-time KPI dashboard</span></li>
<li className="flex items-start reveal"><div className="w-5 h-5 stroke-[1.5] text-[#3F8CFF] flex-shrink-0" data-lucide="check-circle"></div><span className="ml-3">Lifetime access to process playbooks</span></li>
</ul>

<div className="grid md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
<div className="guarantee p-8 rounded-lg reveal">
<div className="w-8 h-8 mx-auto stroke-[1.5]" data-lucide="shield-check"></div>
<h3 className="mt-4 font-semibold text-lg">Guarantee #1</h3>
<p className="mt-2 text-[#A6A6A6] text-sm">Operational Cost-Down Assurance—save at least 15% or we work for free until you do.</p>
</div>
<div className="guarantee p-8 rounded-lg reveal">
<div className="w-8 h-8 mx-auto stroke-[1.5]" data-lucide="shield-check"></div>
<h3 className="mt-4 font-semibold text-lg">Guarantee #2</h3>
<p className="mt-2 text-[#A6A6A6] text-sm">Process-Clarity Promise—leave with a complete blueprint or your money back.</p>
</div>
</div>

<div className="bonus rounded-xl mt-12 mx-auto max-w-xl reveal">
<div className="bonus-inner p-6 rounded-[11px]">
<div className="flex items-center justify-center">
<div className="w-6 h-6 stroke-[1.5]" data-lucide="clock"></div>
<p className="ml-3 font-semibold">TIME-SENSITIVE BONUS</p>
</div>
<p className="mt-3">Sign on before <span className="font-semibold">Friday, August 29, 2025</span> and receive a private, on-site optimization workshop (value: $7,500).</p>
</div>
</div>
<button className="btn-solid mt-10 px-10 py-4 rounded-lg text-white font-medium reveal">Book Your No-Obligation Strategy Call</button>
</section>

<section className="py-24 px-6 text-center">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight reveal">Your Business Will Either Scale With Chaos or With Clarity. The Choice is Yours.</h2>
<p className="mt-4 reveal">We only have the capacity to partner with <span className="font-semibold">3 new clients per month</span>.</p>
<button className="btn-solid mt-8 px-12 py-5 rounded-lg text-white font-medium text-lg reveal">Claim Your Spot Now</button>
<p className="mt-4 text-sm italic text-[#A6A6A6] reveal">P.S. The aqueduct won't build itself.</p>
</section>

<footer className="py-6 text-center text-xs text-[#A6A6A6]">
    © 2024 Growth Alignment System™
</footer>


    </>
  );
}
