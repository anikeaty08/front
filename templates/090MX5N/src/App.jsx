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



// Particle background (unchanged)
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('particle-bg');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  let particles = []; const colors = ['#0ea5e9','#22d3ee','#38bdf8','#0284c7'];
  function Particle(){this.x=Math.random()*canvas.width;this.y=Math.random()*canvas.height;this.vx=(Math.random()-0.5)*0.7;this.vy=(Math.random()-0.5)*0.7;this.size=Math.random()*2+0.5;this.color=colors[Math.floor(Math.random()*colors.length)];}
  function init(){particles=[];for(let i=0;i<160;i++)particles.push(new Particle());}
  function handleParticles(){
    for(let i=0;i<particles.length;i++){
      const p=particles[i];
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>canvas.width)p.vx*=-1;
      if(p.y<0||p.y>canvas.height)p.vy*=-1;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
      ctx.fillStyle=p.color; ctx.fill();
    }
  }
  function animate(){
    ctx.fillStyle='rgba(2,18,26,0.07)'; ctx.fillRect(0,0,canvas.width,canvas.height);
    handleParticles(); requestAnimationFrame(animate);
  }
  init(); animate();
  window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;init();});
  lucide.createIcons();
  setTimeout(()=>{document.querySelectorAll('.animate-seq').forEach((el,idx)=>{setTimeout(()=>el.classList.add('visible'),idx*120);});},100);
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
      

<canvas className="fixed inset-0 w-full h-full pointer-events-none" height="913" id="particle-bg" style={{zIndex: '-1', background: 'radial-gradient(rgb(34,42,46) 0%,rgb(14,165,233) 100%)', transformOrigin: '0 0'}} width="1440"></canvas>

<div className="pointer-events-none absolute -top-32 left-0 h-[350px] w-[350px] rounded-full blur-[100px] bg-sky-400/15"></div>
<div className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[320px] rounded-full blur-3xl bg-sky-500/20"></div>
<header className="w-full sticky top-0 z-30 bg-sky-950/80 border-white/10 border-b backdrop-blur">
<nav aria-label="Main navigation" className="container max-w-7xl flex animate-seq animate-delay-100 mr-auto ml-auto pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-4">
<img alt="Company Logo" className="w-10 h-10 object-contain rounded-md" src="https://avatars.mds.yandex.net/i?id=b2b5afed348ef114adc631a0b2b1b12f90e4695b-9682103-images-thumbs&amp;n=13" style={{flexShrink: '0'}}/>
<span className="text-lg text-sky-50 font-geist">ZION-CITY</span>
</div>
<ul className="hidden md:flex space-x-5">
<li><a className="hover:text-white transition focus-visible:ring-2 text-sm rounded pt-1 pr-2 pb-1 pl-2 focus-visible:ring-sky-400 text-sky-50 font-geist" href="#">Dashboard</a></li>
<li><a className="hover:text-white transition focus-visible:ring-2 text-sm rounded pt-1 pr-2 pb-1 pl-2 focus-visible:ring-sky-400 text-sky-50 font-geist" href="#">Gear</a></li>
<li><a className="hover:text-white transition focus-visible:ring-2 focus-visible:ring-sky-400 text-sm rounded pt-1 pr-2 pb-1 pl-2 text-sky-50 font-geist" href="#">Matches</a></li>
<li className=""><a className="hover:text-white transition text-sm rounded pt-1 pr-2 pb-1 pl-2 text-sky-50 font-geist" href="#">Profile</a></li>
</ul>
<button className="ml-3 flex items-center gap-2 rounded-full px-2 py-1 transition ring-1 ring-white/10 focus-visible:ring-2 focus-visible:ring-sky-400 bg-sky-900/60 hover:bg-sky-800/80">
<img alt="User avatar" className="w-7 h-7 ring-2 object-cover rounded-full ring-sky-400" src="https://randomuser.me/api/portraits/men/22.jpg"/>
<span className="hidden sm:inline flex items-center gap-2 text-sm text-white font-geist">Личный кабинет</span>
</button>
<button aria-label="Open menu" className="md:hidden ml-4 rounded focus-visible:ring-2 focus-visible:ring-sky-400">
<svg className="lucide lucide-menu w-6 h-6 text-white" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</nav>
</header>
<main className="container max-w-7xl lg:mt-20 mt-14 mr-auto mb-10 ml-auto pr-4 pl-4">
<div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center">

<section className="w-full max-w-xl text-center lg:text-left flex flex-col items-center lg:items-start animate-seq animate-delay-300 visible">
<h1 className="sm:text-5xl md:text-6xl text-4xl font-medium text-white tracking-tighter font-space-mono mb-5" style={{fontFamily: 'Inter, Roboto, sans-serif'}}>ZION-CITY Decentralized Internet Operating System</h1>
<p className="sm:text-xl max-w-2xl text-lg text-gray-300 font-geist mr-auto mb-6 ml-auto">ЕДИНАЯ ВАЛЮТА ЕAЭС АЛТЫН, СУВЕРЕННЫЙ ИНТЕРНЕТ, ЦИФРОВАЯ ЭКОНОМИКА 2022</p>

<div className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full sm:w-auto mt-2 mb-1">
<button aria-label="Get Started" className="button font-geist">Регистрация<svg className="lucide lucide-rocket icon" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg></button>
<button aria-label="Learn More" className="button-secondary font-geist">О ZION CITY<svg className="lucide lucide-info icon" data-lucide="info" fill="none" height="24" stroke="#0091D6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></button>
</div>
</section>

<section className="w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl ring-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[18px] border relative animate-seq animate-delay-500 glass-card-gaming ring-sky-400/30 border-sky-500/40 via-sky-900/40 visible" style={{fontFamily: 'Roboto, Inter, sans-serif'}}>
<div className="relative bg-gradient-to-b from-white/15 via-white/0 to-white/0 pt-6 pr-6 pb-6 pl-6 space-y-6 items-center justify-center" style={{backdropFilter: 'blur(25px)', borderBottom: '1px solid rgba(255,255,255,0.09)'}}>

<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-2">
<span className="w-9 h-9 flex items-center justify-center ring-2 ring-white/10 bg-gradient-to-tr from-cyan400 to-sky-400 via-sky-400 rounded-full shadow-inner">
<svg className="lucide lucide-user w-[20px] h-[20px]" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</span>
<span className="text-2xl text-slate-50 font-space-mono">ALTYN</span>
</div>
<span className="inline-flex items-center gap-1 uppercase text-xs text-sky-200 font-geist bg-sky-400/30 border-sky-400/50 border rounded-full pt-1 pr-3 pb-1 pl-3">Избранное<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></span>
</div>

<div className="relative flex controller-animate-group mb-8 items-center justify-center" style={{zIndex: '2'}}>
<div className="absolute -inset-4 blur-[40px] pointer-events-none" style={{zIndex: '1', background: 'radial-gradient(circle at 70% 60%,rgba(34,211,238,.12) 0%,rgba(59,130,246,.14) 60%,transparent 100%)'}}></div>
<img alt="Eight-pointed star" className="controller-img w-[260px] md:w-[340px] lg:w-[390px] h-auto object-contain drop-shadow-[0_8px_24px_rgba(34,211,238,0.18)] pointer-events-none select-none z-10 relative" draggable="false" loading="lazy" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>

<div className="grid grid-cols-3 gap-2 text-center mb-7">
<div className=""><div className="text-2xl text-sky-400 font-space-mono">82%</div><div className="uppercase text-xs text-slate-50 font-geist">Win Rate</div></div>
<div className=""><div className="text-2xl text-sky-400 font-space-mono">1.6ms</div><div className="uppercase text-xs text-slate-50 font-geist">Input Lag</div></div>
<div><div className="text-2xl text-sky-400 font-space-mono">4.5h</div><div className="uppercase text-xs text-slate-50 font-geist">Session</div></div>
</div>
<div className="h-px bg-gradient-to-r to-white/10 mb-6 from-sky-400/10 via-sky-300/20"></div>

<div className="grid grid-cols-2 gap-x-4 gap-y-5 mb-7">
<div className="flex items-center gap-3"><span className="w-9 h-9 flex items-center justify-center rounded-lg border shadow-inner bg-sky-700/30 border-sky-400/30 text-sky-100"><svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></span><span className="text-sm text-white/90 font-geist">Adaptive Triggers</span></div>
<div className="flex items-center gap-3"><span className="w-9 h-9 flex items-center justify-center rounded-lg border shadow-inner bg-sky-800/30 border-sky-400/30 text-sky-100"><svg className="lucide lucide-vibrate w-5 h-5" data-lucide="vibrate" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m2 8 2 2-2 2 2 2-2 2"></path><path d="m22 8-2 2 2 2-2 2 2 2"></path><rect height="14" rx="1" width="8" x="8" y="5"></rect></svg></span><span className="text-sm text-white/90 font-geist">Haptic Feedback</span></div>
<div className="flex items-center gap-3"><span className="w-9 h-9 flex items-center justify-center rounded-lg bg-sky-800/30 border border-sky-400/30 shadow-inner text-sky-100"><svg className="lucide lucide-mic w-5 h-5" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg></span><span className="text-sm text-white/90 font-geist">Voice Chat</span></div>
<div className="flex items-center gap-3"><span className="w-9 h-9 flex items-center justify-center rounded-lg border shadow-inner bg-sky-800/30 border-sky-400/30 text-sky-100"><svg className="lucide lucide-usb w-5 h-5" data-lucide="usb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="7" r="1"></circle><circle cx="4" cy="20" r="1"></circle><path d="M4.7 19.3 19 5"></path><path d="m21 3-3 1 2 2Z"></path><path d="M9.26 7.68 5 12l2 5"></path><path d="m10 14 5 2 3.5-3.5"></path><path d="m18 12 1-1 1 1-1 1Z"></path></svg></span><span className="text-sm text-white/90 font-geist">USB-C Fast Charge</span></div>
</div>
<div className="h-px bg-gradient-to-r to-white/10 mb-6 via-sky-300/20 from-sky-400/10"></div>

<div className="flex items-center justify-between gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r text-white rounded-lg shadow-md hover:scale-105 active:scale-95 transition border focus-visible:ring-2 from-sky-400/90 border-sky-400/40 focus-visible:ring-sky-400 to-sky-400/80 font-geist">
<svg className="lucide lucide-play-circle w-5 h-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
            Start Match
          </button>
<button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 rounded-lg border active:scale-95 transition focus-visible:ring-2 text-sky-200 border-sky-400/30 hover:bg-sky-900/15 focus-visible:ring-sky-400 font-geist">
<svg className="lucide lucide-bar-chart-3 w-5 h-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
            Stats
          </button>
</div>
</div>
</section>
</div>
</main>


    </>
  );
}
