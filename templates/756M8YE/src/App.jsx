import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // particles
    const canvas=document.getElementById('particle-bg'),ctx=canvas.getContext('2d');
    const colors=['#0ea5e9','#22d3ee','#38bdf8','#0284c7'];
    let particles=[];
    const resize=()=>{canvas.width=innerWidth;canvas.height=innerHeight;};
    class P{constructor(){this.x=Math.random()*canvas.width;this.y=Math.random()*canvas.height;this.vx=(Math.random()-.5)*.7;this.vy=(Math.random()-.5)*.7;this.s=Math.random()*2+.5;this.c=colors[~~(Math.random()*colors.length)];}draw(){this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>canvas.width)this.vx*=-1;if(this.y<0||this.y>canvas.height)this.vy*=-1;ctx.beginPath();ctx.arc(this.x,this.y,this.s,0,Math.PI*2);ctx.fillStyle=this.c;ctx.fill();}}
    const init=()=>{particles=[];for(let i=0;i<160;i++)particles.push(new P());};
    const loop=()=>{ctx.fillStyle='rgba(2,18,26,.07)';ctx.fillRect(0,0,canvas.width,canvas.height);particles.forEach(p=>p.draw());requestAnimationFrame(loop);};
    resize();init();loop();addEventListener('resize',()=>{resize();init();});
    // stagger reveal
    setTimeout(()=>document.querySelectorAll('.animate-seq').forEach((e,i)=>setTimeout(()=>e.classList.add('visible'),i*120)),120);
    lucide.createIcons({strokeWidth:1.5});
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed inset-0 w-full h-full pointer-events-none" height="913" id="particle-bg" style={{zIndex: '-1'}} width="1920"></canvas>

<header className="sticky top-0 z-30 bg-neutral-950/80 border-white/10 border-b backdrop-blur">
<nav className="max-w-7xl flex animate-seq mr-auto ml-auto pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-3">
<img alt="logo" className="w-10 h-10 rounded-md object-contain" src="https://avatars.mds.yandex.net/i?id=b2b5afed348ef114adc631a0b2b1b12f90e4695b-9682103-images-thumbs&amp;n=13"/>
<span className="text-lg font-nunito text-neutral-50" style={{}}>ZION-CITY</span>
</div>
<ul className="hidden md:flex gap-5 text-sm">
<li className=""><a className="font-nunito text-neutral-50 hover:text-white" href="#" style={{}}>Dashboard</a></li>
<li className=""><a className="font-nunito text-neutral-50 hover:text-white" href="#" style={{}}>Gear</a></li>
<li className=""><a className="font-nunito text-neutral-50 hover:text-white" href="#" style={{}}>Matches</a></li>
<li className=""><a className="font-nunito text-neutral-50 hover:text-white" href="#" style={{}}>Profile</a></li>
</ul>
<button className="ml-3 flex items-center gap-2 rounded-full px-2 py-1 ring-1 bg-neutral-900/60 hover:bg-neutral-800/80 ring-white/10">
<img alt="avatar" className="w-7 h-7 rounded-full ring-2 object-cover ring-neutral-400" src="https://randomuser.me/api/portraits/men/22.jpg?w=800&amp;q=80"/>
<span className="hidden sm:inline text-sm font-nunito text-white" style={{}}>Личный кабинет</span>
</button>
<button aria-label="menu" className="md:hidden ml-4">
<svg className="lucide lucide-menu w-6 h-6 text-white" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</nav>
</header>

<main className="max-w-7xl mx-auto px-4 mt-14 lg:mt-20">
<div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center">

<section className="max-w-xl lg:text-left flex flex-col lg:items-start animate-seq visible text-center mt-0 mb-0 py-14 items-center">
<h1 className="sm:text-5xl md:text-6xl mb-5 font-nunito text-3xl font-bold text-white" style={{}}>ZION-CITY Decentralized Internet Operating System</h1>
<p className="sm:text-xl mb-6 font-nunito text-xl text-indigo-300" style={{}}>ЕДИНАЯ ВАЛЮТА ЕAЭС АЛТЫН, СУВЕРЕННЫЙ ИНТЕРНЕТ, ЦИФРОВАЯ ЭКОНОМИКА 2022</p>
<div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto" id="aura-emdiuvvg0">
<button className="btn-primary flex items-center gap-6 font-nunito" style={{}}>
            Регистрация
            <svg className="lucide lucide-rocket w-5 h-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</button>
<button className="btn-secondary flex gap-6 font-nunito pb-123 space-y-0 items-center" id="aura-emdiuvpfc" style={{}}>
            О ZION CITY
            <svg className="lucide lucide-info w-[18px] h-[18px]" data-lucide="info" fill="none" height="24" id="aura-emdiuvtmf" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', color: 'rgb(0, 169, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</button>
</div>
</section>

<section className="w-full max-w-md glass rounded-3xl overflow-hidden animate-seq visible">
<div className="pt-6 pr-6 pb-6 pl-6 space-y-6">

<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="w-9 h-9 rounded-full bg-gradient-to-tr flex items-center justify-center ring-2 to-neutral-400 ring-white/10 from-violet-400" style={{}}>
<svg className="lucide lucide-user w-[18px] h-[18px] text-white" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</span>
<span className="font-nunito font-bold text-xl text-indigo-50" style={{}}>ALTYN</span>
</div>
<span className="inline-flex items-center gap-1 uppercase text-xs border rounded-full pt-1 pr-3 pb-1 pl-3 font-nunito text-neutral-200 bg-neutral-400/30 border-neutral-400/50" style={{}}>Меню<svg className="lucide lucide-menu w-[14px] h-[14px]" data-lucide="menu" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" style={{width: '14px', height: '14px', color: 'rgb(186, 230, 253)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg></span>
</div>

<div className="relative flex controller-animate-group -translate-x-8 -translate-y-3 mr-0 ml-0 px-0 py-12 space-x-20 space-y-0 items-center justify-start"><div className="absolute -inset-4 pointer-events-none blur-[40px]" style={{background: 'radial-gradient(circle at 70% 60%,rgba(34,211,238,.12) 0%,rgba(59,130,246,.14) 60%,transparent 100%)'}}></div><img alt="Zion card art" className="controller-img w-[260px] md:w-[340px] lg:w-[390px] drop-shadow-[0_8px_24px_rgba(34,211,238,.2)] select-none pointer-events-none" draggable="false" loading="lazy" src="https://i.postimg.cc/yDjVDHzJ/your-image.jpg"/></div>

<div className="h-px bg-gradient-to-r from-neutral-400/10 via-neutral-300/20 to-white/10"></div>

<div className="grid grid-cols-2 gap-4 text-sm text-white/90" style={{}}>
<div className="flex gap-3 font-nunito items-center" id="aura-emdiuxly7" style={{}}><span className="w-9 h-9 rounded-lg border flex items-center justify-center bg-neutral-700/30 border-neutral-400/30" style={{}}>
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</span>82% Win Rate</div>
<div className="flex gap-3 font-nunito items-center" id="aura-emdiuy5fk" style={{}}><span className="w-9 h-9 rounded-lg border flex items-center justify-center bg-neutral-800/30 border-neutral-400/30">
<svg className="lucide lucide-vibrate w-5 h-5" data-lucide="vibrate" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m2 8 2 2-2 2 2 2-2 2"></path><path d="m22 8-2 2 2 2-2 2 2 2"></path><rect height="14" rx="1" width="8" x="8" y="5"></rect></svg>
</span>Active </div>
<div className="flex gap-3 font-nunito items-center" id="aura-emdiuxypj" style={{}}><span className="w-9 h-9 rounded-lg border flex items-center justify-center bg-neutral-800/30 border-neutral-400/30">
<svg className="lucide lucide-mic w-5 h-5" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</span>1.6ms</div>
<div className="flex gap-3 font-nunito items-center" id="aura-emdiuye74" style={{}}><span className="w-9 h-9 rounded-lg border flex items-center justify-center bg-neutral-800/30 border-neutral-400/30">
<svg className="lucide lucide-usb w-5 h-5" data-lucide="usb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="7" r="1"></circle><circle cx="4" cy="20" r="1"></circle><path d="M4.7 19.3 19 5"></path><path d="m21 3-3 1 2 2Z"></path><path d="M9.26 7.68 5 12l2 5"></path><path d="m10 14 5 2 3.5-3.5"></path><path d="m18 12 1-1 1 1-1 1Z"></path></svg>
</span>USB-Crypto</div>
</div>
<div className="flex gap-3 pt-4 pb-4 space-y-0 justify-between">
<button className="flex gap-2 hover:scale-105 active:scale-95 transition bg-gradient-to-r border rounded-lg pt-2 pr-4 pb-2 pl-4 items-center font-nunito text-white from-neutral-400/90 to-neutral-400/80 border-neutral-400/40" style={{}}>Купить «Алтын»<svg className="lucide lucide-wallet w-[24px] h-[24px]" data-lucide="wallet" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg></button><button className="flex gap-2 active:scale-95 transition border rounded-lg pt-2 pr-4 pb-2 pl-4 items-center font-nunito hover:bg-neutral-900/15 text-neutral-200 bg-white/5 border-neutral-400/30" style={{}}>Курс валюты<svg className="lucide lucide-bar-chart-3 w-5 h-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg></button>
</div>

</div>
</section>
</div>
</main>


    </>
  );
}
