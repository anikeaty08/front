import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
// Shrinking header
window.addEventListener('scroll',()=>{document.getElementById('nav').classList.toggle('h-16',window.scrollY>30);document.getElementById('nav').classList.toggle('bg-white/95',window.scrollY>30)});

// Mobile menu
function toggleMenu(){document.getElementById('mobileMenu').classList.toggle('hidden');}
document.getElementById('menuBtn').addEventListener('click',toggleMenu);
document.getElementById('closeMenu').addEventListener('click',toggleMenu);

// Particles in mobile menu
particlesJS('particleContainer',{particles:{number:{value:40},color:{value:'#00D3E0'},shape:{type:'circle'},opacity:{value:0.4},size:{value:3},line_linked:{enable:true,distance:120,color:'#5A3FB5',opacity:0.4,width:1},move:{speed:2}}});

// Particles in hero and CTA
['heroParticles','ctaParticles'].forEach(id=>particlesJS(id,{particles:{number:{value:45},color:{value:'#FFFFFF'},opacity:{value:0.15},size:{value:2},line_linked:{enable:false},move:{speed:0.6}}}));

// Lucide
lucide.createIcons();

// Accordion
const accBtn=document.getElementById('accordionBtn');const accPanel=document.getElementById('accordionPanel');const accIcon=document.getElementById('accordionIcon');
accBtn.addEventListener('click',()=>{accPanel.classList.toggle('mt-8');accPanel.classList.toggle('max-h-0');accPanel.classList.toggle('max-h-[2000px]');accIcon.setAttribute('data-lucide',accIcon.getAttribute('data-lucide')==='plus'?'minus':'plus');lucide.createIcons();});

// Chart.js placeholder
import('https://cdn.jsdelivr.net/npm/chart.js').then(({Chart})=>{
 const ctx=document.getElementById('disconnectChart'),gradient=ctx.getContext('2d').createLinearGradient(0,0,0,200);gradient.addColorStop(0,'#F45C5C');gradient.addColorStop(1,'transparent');
 new Chart(ctx,{type:'bar',data:{labels:['Roles','Context','Insight'],datasets:[{data:[80,70,65],backgroundColor:gradient,barThickness:40}]},options:{plugins:{legend:{display:false}},scales:{y:{display:false},x:{display:false}},responsive:true,maintainAspectRatio:false}});
});

// Simple network canvas animation
const netCanvas=document.getElementById('networkCanvas');const nCtx=netCanvas.getContext('2d');let nodes=[];
function resizeNet(){netCanvas.width=netCanvas.offsetWidth;netCanvas.height=netCanvas.offsetHeight;}
window.addEventListener('resize',resizeNet);resizeNet();
for(let i=0;i<60;i++){nodes.push({x:Math.random()*netCanvas.width,y:Math.random()*netCanvas.height,vx:(Math.random()-0.5)*0.5,vy:(Math.random()-0.5)*0.5});}
function drawNet(){nCtx.clearRect(0,0,netCanvas.width,netCanvas.height);nodes.forEach((n,i)=>{n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>netCanvas.width)n.vx*=-1;if(n.y<0||n.y>netCanvas.height)n.vy*=-1;nCtx.fillStyle='#00D3E0';nCtx.beginPath();nCtx.arc(n.x,n.y,2,0,2*Math.PI);nCtx.fill();for(let j=i+1;j<nodes.length;j++){const m=nodes[j],dx=n.x-m.x,dy=n.y-m.y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<120){nCtx.strokeStyle='rgba(90,63,181,'+(1-dist/120)+')';nCtx.lineWidth=1;nCtx.beginPath();nCtx.moveTo(n.x,n.y);nCtx.lineTo(m.x,m.y);nCtx.stroke();}}});requestAnimationFrame(drawNet);}drawNet();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full fixed top-0 left-0 z-50 transition-all duration-300 backdrop-blur bg-white/0" id="nav">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-20">
<a className="text-2xl font-semibold tracking-tight relative" href="#">
<span className="bg-gradient-to-r from-[#00D3E0] via-[#5A3FB5] to-[#F45C5C] bg-clip-text text-transparent">Harmonix</span>
</a>
<nav className="hidden md:flex space-x-10 text-[16px] font-medium">
<a className="hover:text-[#00D3E0] transition-colors" href="#about">About</a>
<a className="hover:text-[#00D3E0] transition-colors" href="#whitepaper">White Paper</a>
<a className="hover:text-[#00D3E0] transition-colors" href="#join">Join</a>
</nav>
<button className="md:hidden p-2 text-[#2B2B2B]" id="menuBtn"><i className="w-7 h-7" data-lucide="menu"></i></button>
</div>

<div className="fixed inset-0 bg-white/95 backdrop-blur-xl hidden flex-col items-center justify-center space-y-10 text-xl font-medium" id="mobileMenu">
<button className="absolute top-6 right-6 p-2" id="closeMenu"><i className="w-8 h-8" data-lucide="x"></i></button>
<a className="hover:text-[#00D3E0]" href="#about" onclick="toggleMenu()">About</a>
<a className="hover:text-[#00D3E0]" href="#whitepaper" onclick="toggleMenu()">White Paper</a>
<a className="hover:text-[#00D3E0]" href="#join" onclick="toggleMenu()">Join</a>
<div className="absolute inset-0 -z-10" id="particleContainer"></div>
</div>
</header>

<section className="relative w-full min-h-screen flex items-center justify-center text-center px-6" style={{background: 'radial-gradient(circle at 20% 30%,#00D3E0 0%,#5A3FB5 50%,#F45C5C 100%)'}}>
<div className="absolute inset-0" id="heroParticles"></div>
<img alt="Person looking ahead" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-lighten" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=cover&amp;w=1600&amp;q=80"/>
<div className="relative max-w-3xl space-y-6 backdrop-blur-sm bg-white/5 p-10 rounded-xl">
<h1 className="text-white text-[44px] md:text-[56px] font-semibold tracking-tight leading-tight drop-shadow-lg">What if progress didn't race past us but moved with us?</h1>
<p className="text-white/90 text-[20px] md:text-[24px]">A new kind of system — one that remembers, adapts, and evolves alongside us.</p>
<a className="inline-block bg-[#00D3E0] text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 text-[16px] font-semibold uppercase tracking-widest" href="#join">Join the Harmonix Early List</a>
</div>
</section>

<section className="relative py-20 md:py-28" id="about">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
<div className="space-y-6">
<h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#5A3FB5]">Today's Tech Systems Move Fast</h2>
<p className="text-[18px] leading-relaxed">Built for velocity, not thoughtfulness, they sideline people instead of supporting them. We see it everywhere:</p>
<ul className="space-y-3">
<li className="flex items-start"><span className="w-3 h-3 mt-2 mr-3 bg-[#00D3E0] rounded-full"></span><p>Roles removed without conversation</p></li>
<li className="flex items-start"><span className="w-3 h-3 mt-2 mr-3 bg-[#00D3E0] rounded-full"></span><p>Context stripped away for speed</p></li>
<li className="flex items-start"><span className="w-3 h-3 mt-2 mr-3 bg-[#00D3E0] rounded-full"></span><p>Human insight ignored</p></li>
</ul>
<p className="mt-6 text-[18px] leading-relaxed font-medium">If this path continues, we won't just fall behind — we may disappear from the design.</p>
</div>
<div className="relative">
<canvas className="w-full h-80" id="disconnectChart"></canvas>
</div>
</div>
</section>

<section className="py-20 md:py-28 bg-[#F8F8F8]">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-center text-[32px] md:text-[40px] font-semibold tracking-tight text-[#5A3FB5] mb-10">Systems That Evolve With You — Not Instead of You</h2>
<p className="text-center max-w-3xl mx-auto text-[18px] leading-relaxed mb-16">Harmonix isn't generalized computation. It's interconnected resonance: a web of people and agents designed to strengthen human capacity through memory support, boundary frameworks, and emotional continuity.</p>
<div className="grid md:grid-cols-3 gap-10">
<div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
<i className="w-8 h-8 text-[#00D3E0] mb-4" data-lucide="shield"></i>
<h3 className="font-medium text-[20px] mb-2">Safeguard what matters</h3>
<p className="text-[16px] leading-relaxed">Your memories and context remain yours.</p>
</div>
<div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
<i className="w-8 h-8 text-[#00D3E0] mb-4" data-lucide="finger-print"></i>
<h3 className="font-medium text-[20px] mb-2">Uphold autonomy</h3>
<p className="text-[16px] leading-relaxed">Boundaries respected, always.</p>
</div>
<div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
<i className="w-8 h-8 text-[#00D3E0] mb-4" data-lucide="heart-handshake"></i>
<h3 className="font-medium text-[20px] mb-2">Nurture development</h3>
<p className="text-[16px] leading-relaxed">Agents that grow with you, not use you.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28" id="whitepaper" style={{background: 'linear-gradient(135deg,#5A3FB5 0%,#F45C5C 100%)'}}>
<div className="max-w-3xl mx-auto text-center text-white px-6">
<h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight mb-6">White Paper: Harmonix Intelligence — Designing Systems That Care</h2>
<p className="text-[18px] leading-relaxed mb-10">This paper questions today's tech trajectory and introduces Harmonix as a meaningful alternative rooted in continuity, trust, and co-growth. More than critique, it's a model for systems that evolve with us — not over us.</p>
<a className="inline-block bg-white text-[#2B2B2B] px-8 py-4 rounded-lg uppercase tracking-widest font-semibold hover:bg-[#F8F8F8] transition" href="#">Download the White Paper</a>
</div>
</section>

<section className="py-20 md:py-28">
<div className="max-w-4xl mx-auto px-6">
<button className="w-full flex justify-between items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition" id="accordionBtn">
<span className="text-[24px] font-medium">Who's Behind Harmonix?</span>
<i className="w-7 h-7 text-[#00D3E0]" data-lucide="plus" id="accordionIcon"></i>
</button>
<div className="grid md:grid-cols-3 gap-8 mt-0 overflow-hidden transition-all duration-300" id="accordionPanel">

<div className="p-6 text-center">
<img alt="Team member" className="w-28 h-28 mx-auto rounded-full object-cover mb-4" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&amp;fit=facearea&amp;facepad=3.0&amp;w=300&amp;q=80"/>
<p className="font-medium">Aria Chen</p><p className="text-sm text-gray-500">Systems Designer</p>
</div>
<div className="p-6 text-center">
<img alt="Team member" className="w-28 h-28 mx-auto rounded-full object-cover mb-4" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&amp;fit=facearea&amp;facepad=3.0&amp;w=300&amp;q=80"/>
<p className="font-medium">Diego Ramos</p><p className="text-sm text-gray-500">AI Researcher</p>
</div>
<div className="p-6 text-center">
<img alt="Team member" className="w-28 h-28 mx-auto rounded-full object-cover mb-4" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=facearea&amp;facepad=3.0&amp;w=300&amp;q=80"/>
<p className="font-medium">Samira Patel</p><p className="text-sm text-gray-500">Experience Lead</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 text-white text-center" style={{background: '#2B2B2B url(\'data:image/png'}}>
<div className="max-w-3xl mx-auto px-6 space-y-6">
<h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight">This Moment Won't Last Forever</h2>
<p className="text-[20px] leading-relaxed">We're at a pivot point. If we don't design for dignity now, we'll be shaped by systems that were never meant to include it.</p>
<p className="text-[20px] leading-relaxed">We have a brief window. If we wait, tomorrow's tools will lock into place — without us.</p>
</div>
</section>

<section className="py-20 md:py-28">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-center mb-12">Built on Intention. Governed by Clarity.</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
<h3 className="font-medium text-[20px] mb-2">Memory you shape</h3>
<p className="text-[16px] leading-relaxed">What's remembered is yours to decide.</p>
</div>
<div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
<h3 className="font-medium text-[20px] mb-2">Unambiguous boundaries</h3>
<p className="text-[16px] leading-relaxed">Lines that won't be crossed.</p>
</div>
<div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
<h3 className="font-medium text-[20px] mb-2">Agents that grow with you</h3>
<p className="text-[16px] leading-relaxed">Reflective, not extractive.</p>
</div>
<div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
<h3 className="font-medium text-[20px] mb-2">Transparency always</h3>
<p className="text-[16px] leading-relaxed">Safety and choice come first.</p>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-block bg-[#00D3E0] text-white px-8 py-4 rounded-lg uppercase tracking-widest font-semibold hover:shadow-cyan-500/40 transition" href="#whitepaper">Read White Paper</a>
</div>
</div>
</section>

<section className="py-20 md:py-28" style={{background: 'linear-gradient(180deg,#00D3E0 0%,#fff 100%)'}}>
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
<div>
<h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight mb-6">It's a Movement, Not a Platform</h2>
<p className="text-[18px] leading-relaxed mb-8">Harmonix is a nonprofit experiment guided by clear values, distributed authorship, and a growing mesh of global contributors.</p>
<ul className="space-y-4">
<li className="flex"><i className="w-6 h-6 text-[#5A3FB5] mr-3" data-lucide="users"></i><p>Connect with others who care about doing things differently</p></li>
<li className="flex"><i className="w-6 h-6 text-[#5A3FB5] mr-3" data-lucide="hammer"></i><p>Help shape thoughtful tech from the inside</p></li>
<li className="flex"><i className="w-6 h-6 text-[#5A3FB5] mr-3" data-lucide="rocket"></i><p>Get early access to evolving tools and systems</p></li>
<li className="flex"><i className="w-6 h-6 text-[#5A3FB5] mr-3" data-lucide="link"></i><p>Help co-create — not just consume — the future</p></li>
</ul>
</div>
<div className="relative">
<canvas className="w-full h-96" id="networkCanvas"></canvas>
</div>
</div>
</section>

<section className="relative py-24 text-center text-white" id="join" style={{background: 'radial-gradient(circle at 60% 40%,#00D3E0 0%,#5A3FB5 50%,#F45C5C 100%)'}}>
<div className="absolute inset-0" id="ctaParticles"></div>
<div className="relative max-w-3xl mx-auto px-6 space-y-8">
<h2 className="text-[36px] md:text-[44px] font-semibold tracking-tight">Join Us in Shaping What Comes Next</h2>
<p className="text-[18px] leading-relaxed">This is your chance to help design a different trajectory. Whether you build, research, regulate, or simply wonder — your perspective matters here.</p>
<a className="inline-block bg-white text-[#2B2B2B] px-10 py-5 rounded-lg uppercase tracking-widest font-semibold hover:bg-[#F8F8F8] transition relative overflow-hidden" href="#">
<span className="relative z-10">Join the Harmonix Early List</span>
</a>
</div>
</section>

<footer className="py-10 text-center text-sm text-gray-500">
<p>© 2024 Harmonix. Built for collective intelligence.</p>
</footer>



    </>
  );
}
