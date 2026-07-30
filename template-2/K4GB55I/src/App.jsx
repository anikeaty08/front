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



  lucide.createIcons();

  /* ----------------- Card-stack carousel (desktop ≥640px) ----------------- */
  const cards = [...document.querySelectorAll('#cardWrapper article')];
  const dots  = [...document.querySelectorAll('#dotNav button')];

  const TRANSITION = 150;            // faster slide speed
  let offset = getOffset();          // px distance between stacked cards
  const scaleStep = .07;             // shrink factor
  const fadeStep  = .15;             // fade factor
  let active = 0, busy = false;

  function isMobile(){ return window.innerWidth < 640; }

  function getOffset() {
    return window.innerWidth < 640 ? 0 : 50;
  }

  function positionCards(index) {
    if(isMobile()){                 // mobile: reset transforms & opacity
      cards.forEach(c=>{
        c.style.transform='none';
        c.style.opacity='1';
        c.style.zIndex='0';
      });
      return;
    }
    cards.forEach((card,i) => {
      const order = (i - index + cards.length) % cards.length;
      card.style.transform = `translateX(${-offset*order}px) scale(${1-scaleStep*order})`;
      card.style.opacity   = 1 - fadeStep*order;
      card.style.zIndex    = cards.length - order;
    });
    dots.forEach((d,i)=>d.className = i===index
      ? 'w-2 h-2 rounded-full bg-violet-500 scale-125'
      : 'w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition');
  }

  function go(to){
    if(busy || to===active) return;
    busy = true; active = to; positionCards(active);
    setTimeout(()=>busy=false,TRANSITION);
  }

  dots.forEach((d,i)=>d.addEventListener('click',()=>go(i)));

  /* swipe support (desktop) */
  let startX=null, wrap=document.getElementById('cardWrapper');
  function down(e){if(isMobile())return; startX=e.touches?e.touches[0].clientX:e.clientX;}
  function up(e){
    if(startX===null || isMobile()) return;
    const end=e.changedTouches?e.changedTouches[0].clientX:e.clientX;
    const diff=end-startX;
    if(Math.abs(diff)>40){
      go(diff<0?(active+1)%cards.length:(active-1+cards.length)%cards.length);
    }
    startX=null;
  }
  wrap.addEventListener('mousedown',down); wrap.addEventListener('touchstart',down,{passive:true});
  window.addEventListener('mouseup',up); window.addEventListener('touchend',up);

  /* autoplay (desktop) */
  setInterval(()=>{ if(!isMobile()) go((active+1)%cards.length); },4000);

  /* responsive */
  window.addEventListener('resize',()=>{
    const newOffset=getOffset();
    if(newOffset!==offset){ offset=newOffset; positionCards(active);}
  });

  positionCards(0);

  /* ----------------- Starfield background ----------------- */
  const canvas=document.getElementById('starCanvas'),ctx=canvas.getContext('2d');
  let stars=[],cx,cy,reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
  function resize(){
    canvas.width=innerWidth; canvas.height=innerHeight;
    cx=canvas.width/2; cy=canvas.height/2; generate();
  }
  function generate(){
    const count=Math.floor(innerWidth/8),maxR=Math.hypot(cx,cy);
    stars=[...Array(count)].map(()=>({
      r:Math.random()*1.5+.5,
      d:Math.random()*maxR,
      a:Math.random()*Math.PI*2,
      s:(Math.random()*.0007+.0003)*(Math.random()<.5?-1:1),
      o:Math.random()*.6+.4,
      dir:Math.random()<.5?-1:1
    }));
  }
  function render(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(const st of stars){
      if(!reduceMotion) st.a+=st.s;
      const x=cx+Math.cos(st.a)*st.d, y=cy+Math.sin(st.a)*st.d;
      st.o+=.005*st.dir; if(st.o<.3||st.o>1) st.dir*=-1;
      ctx.globalAlpha=st.o; ctx.fillStyle='#fff';
      ctx.beginPath(); ctx.arc(x,y,st.r,0,Math.PI*2); ctx.fill();
    }
    requestAnimationFrame(render);
  }
  addEventListener('resize',resize); resize(); render();

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
      

<canvas className="fixed inset-0 w-full h-full -z-10 pointer-events-none" height="631" id="starCanvas" width="1077"></canvas>

<nav className="fixed inset-x-0 top-0 z-40 backdrop-blur-md border-b bg-neutral-900/70 border-white/10"></nav>

<main className="flex-1 flex pt-20 pr-6 pb-24 pl-6 items-center justify-center">
<div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16">

<section className="flex flex-col justify-center">
<p className="uppercase text-xs tracking-widest mb-4 flex items-center space-x-2 text-white/60">
<span className="w-2 h-2 animate-pulse rounded-full bg-yellow-400"></span>
<span className="text-gray-100">Over 2k clients and counting...</span>
</p>
<h1 className="lg:text-6xl leading-tight text-5xl font-medium tracking-tighter mb-6 text-lime-400">
        Bounce back <span className="bg-clip-text text-transparent bg-slate-50">to life</span>
</h1>
<p className="max-w-lg text-lg text-gray-100">Treat ailments ranging from:</p>

<ul className="mt-4 space-y-1 list-disc list-inside text-white/70 text-sm sm:text-base">
<li className="text-slate-100">Weak immune system</li>
<li className="text-slate-100">Cardiovascular challenges</li>
<li className="text-slate-100">Vision challenges</li>
<li className="text-slate-100">Infertility (Male/Female)</li>
<li className="text-slate-100">Infections</li>
<li className="text-slate-100">Diabetes</li>
<li className="text-slate-100">Prostate challenges and more…</li>
</ul>
</section>

<section className="relative flex flex-col space-y-6 items-center">
<h2 className="md:text-4xl text-sm font-thin tracking-tight text-center scale-75">BEST SELLERS</h2>
<div className="relative sm:block flex overflow-x-auto gap-4 sm:overflow-visible snap-x snap-mandatory w-full sm:w-[19rem] h-[32rem] select-none" id="cardWrapper">


<article aria-label="Dynace Rocenta card" className="snap-start shrink-0 w-[85vw] max-w-[19rem] sm:max-w-none sm:w-full sm:absolute inset-0 flex flex-col border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-2xl backdrop-blur-lg bg-white/5 border-white/10 transition-all duration-150 ease-[cubic-bezier(.4,0,.2,1)] will-change-transform will-change-opacity" style={{transform: `translateX(0px) scale(1)`, opacity: `1`, zIndex: `4`}}>
<div className="flex items-center justify-between mb-6">
<span className="uppercase text-xs tracking-wider flex items-center space-x-1 text-white/60">CELL RENAISSANCE</span>
<span className="font-semibold">NGN 30,000</span>
</div>
<div className="flex-1 flex flex-col text-center items-center justify-center">
<div className="w-20 h-20 bg-[url(https://d1yei2z3i6k35z.cloudfront.net/8219284/686b3ff2d006f_ROCENTA333.png?w=800&q=80)] bg-cover rounded-2xl mb-6 scale-150"></div>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Dynace Rocenta</h3>
<p className="max-w-[14rem] text-sm mb-8 text-white/60">Dynace Rocenta is perfect for individuals who struggle with chronic health conditions like high blood pressure, high cholesterol, or blood sugar imbalances.</p>
<div aria-label="5 star rating" className="flex items-center justify-center gap-1 mb-8">
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<button className="w-full transition hover:bg-white/20 font-medium bg-white/10 rounded-xl pt-3 pb-3">View Details</button>
</article>

<article aria-label="Faforon card" className="snap-start shrink-0 w-[85vw] max-w-[19rem] sm:max-w-none sm:w-full sm:absolute inset-0 flex flex-col border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-2xl backdrop-blur-lg bg-white/5 border-white/10 transition-all duration-150 ease-[cubic-bezier(.4,0,.2,1)] will-change-transform will-change-opacity" style={{transform: `translateX(-50px) scale(0.93)`, opacity: `0.85`, zIndex: `3`}}>
<div className="flex items-center justify-between mb-6">
<span className="uppercase text-xs tracking-wider text-white/60">IMMUNE BOOSTER</span>
<span className="font-semibold">NGN 14,000</span>
</div>
<div className="flex-1 flex flex-col text-center items-center justify-center">
<div className="w-20 h-20 bg-[url(https://d1yei2z3i6k35z.cloudfront.net/8219284/679b70fdeb16d_52.png?w=800&q=80)] bg-cover rounded-2xl mb-6 scale-150"></div>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Faforon</h3>
<p className="max-w-[14rem] text-sm mb-8 text-white/60">Faforon is for individuals battling chronic health challenges, weak immunity, fatigue, or slow recovery from illnesses.</p>
<div aria-label="5 star rating" className="flex items-center justify-center gap-1 mb-8">
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<button className="w-full py-3 rounded-xl transition font-medium bg-white/10 hover:bg-white/20">View Details</button>
</article>

<article aria-label="Jinja card" className="snap-start shrink-0 w-[85vw] max-w-[19rem] sm:max-w-none sm:w-full sm:absolute inset-0 flex flex-col border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-2xl backdrop-blur-lg bg-white/5 border-white/10 transition-all duration-150 ease-[cubic-bezier(.4,0,.2,1)] will-change-transform will-change-opacity" style={{transform: `translateX(-100px) scale(0.86)`, opacity: `0.7`, zIndex: `2`}}>
<div className="flex items-center justify-between mb-6">
<span className="uppercase text-xs tracking-wider text-white/60">DETOXIFIER</span>
<span className="font-semibold">NGN 17,000</span>
</div>
<div className="flex-1 flex flex-col text-center items-center justify-center">
<div className="w-20 h-20 bg-[url(https://d1yei2z3i6k35z.cloudfront.net/8219284/686b3f36e2f2f_JINJA333.png?w=800&q=80)] bg-cover rounded-2xl mb-6 scale-150"></div>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Jinja</h3>
<p className="max-w-[14rem] text-sm mb-8 text-white/60">Jinja Herbal Extract is perfect for individuals who experience ulcers, stubborn infections, fibroids and more.</p>
<div aria-label="5 star rating" className="flex items-center justify-center gap-1 mb-8">
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<button className="w-full py-3 rounded-xl transition font-medium bg-white/10 hover:bg-white/20">View Details</button>
</article>

<article aria-label="Jigsimur card" className="snap-start shrink-0 w-[85vw] max-w-[19rem] sm:max-w-none sm:w-full sm:absolute inset-0 flex flex-col border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-2xl backdrop-blur-lg bg-white/5 border-white/10 transition-all duration-150 ease-[cubic-bezier(.4,0,.2,1)] will-change-transform will-change-opacity" style={{transform: `translateX(-150px) scale(0.79)`, opacity: `0.55`, zIndex: `1`}}>
<div className="flex items-center justify-between mb-6">
<span className="uppercase text-xs tracking-wider text-white/60">DETOXIFIER</span>
<span className="font-semibold">NGN 17,500</span>
</div>
<div className="flex-1 flex flex-col text-center items-center justify-center">
<div className="w-20 h-20 bg-[url(https://d1yei2z3i6k35z.cloudfront.net/8219284/686b3f4354a2b_ROCENTA6666.png?w=800&q=80)] bg-cover rounded-2xl mb-6 scale-150"></div>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Jigsimur</h3>
<p className="max-w-[14rem] text-sm mb-8 text-white/60">Jigsimur is perfect for individuals who want a natural way to detox, boost their health, and restore vitality.</p>
<div aria-label="5 star rating" className="flex items-center justify-center gap-1 mb-8">
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<button className="w-full py-3 rounded-xl transition font-medium bg-white/10 hover:bg-white/20">View Details</button>
</article>
</div>

<div className="hidden sm:flex space-x-3 mt-4" id="dotNav">
<button aria-label="Slide 1" className="w-2 h-2 rounded-full bg-violet-500 scale-125"></button>
<button aria-label="Slide 2" className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition"></button>
<button aria-label="Slide 3" className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition"></button>
<button aria-label="Slide 4" className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition"></button>
</div>
</section>
</div>
</main>


    </>
  );
}
