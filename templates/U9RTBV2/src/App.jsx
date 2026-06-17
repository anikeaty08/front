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



    // Particle background code (unchanged, as above)
    document.addEventListener('DOMContentLoaded', () => {
      const canvas = document.getElementById('particle-bg');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.background = 'radial-gradient(#222a2e 0%, #0ea5e9 100%)';
      canvas.style.transformOrigin = '0 0';
      canvas.style.zIndex = -1;
      // Particle logic
      const App = {};
      App.setup = function(){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.dataToImageRatio = 1;
        this.ctx.imageSmoothingEnabled = false;
        this.xC = this.width/2; this.yC = this.height/2;
        this.stepCount = 0; this.particles = [];
        this.lifespan = 1000; this.popPerBirth = 1; this.maxPop = 300; this.birthFreq = 2;
        this.gridSize = 8; this.gridSteps = Math.floor(1000/this.gridSize); this.grid = [];
        let i=0;
        for(let xx=-500;xx<500;xx+=this.gridSize){
          for(let yy=-500;yy<500;yy+=this.gridSize){
            const r=Math.sqrt(xx*xx+yy*yy),r0=100;
            const field=r<r0?255/r0*r:255-Math.min(255,(r-r0)/2);
            this.grid.push({x:xx,y:yy,busyAge:0,spotIndex:i,
              isEdge:(xx==-500?'left':(xx==(-500+this.gridSize*(this.gridSteps-1))?'right':(yy==-500?'top':(yy==(-500+this.gridSize*(this.gridSteps-1))?'bottom':false)))),field});
            i++;
          }
        }
        this.gridMaxIndex=i; this.drawnInLastFrame=0; this.deathCount=0; this.initDraw();
      };
      App.birth = function(){
        const idx=Math.floor(Math.random()*this.gridMaxIndex),spot=this.grid[idx];
        this.particles.push({hue:188,sat:98,lum:50+Math.floor(30*Math.random()),
          x:spot.x,y:spot.y,xLast:spot.x,yLast:spot.y,xSpeed:0,ySpeed:0,age:0,ageSinceStuck:0,
          attractor:{oldIndex:idx,gridSpotIndex:idx},name:'seed-'+Math.ceil(Math.random()*1e7)});
      };
      App.kill = function(name){this.particles = this.particles.filter(p=>p.name!==name)};
      App.move = function(){
        const k=8,visc=0.4;
        for(let i=0;i<this.particles.length;i++){
          const p=this.particles[i];p.xLast=p.x;p.yLast=p.y;
          let idx=p.attractor.gridSpotIndex,spot=this.grid[idx];
          if(Math.random()<.5&&!spot.isEdge){
            const n=[this.grid[idx-1],this.grid[idx+1],this.grid[idx-this.gridSteps],this.grid[idx+this.gridSteps]],
                  chaos=30,best=n.reduce((a,b)=>((a.field+chaos*Math.random())>(b.field+chaos*Math.random())?a:b));
            if(best.busyAge===0||best.busyAge>15){p.ageSinceStuck=0;p.attractor.oldIndex=idx;p.attractor.gridSpotIndex=best.spotIndex;spot=best;spot.busyAge=1;}
            else p.ageSinceStuck++;
          }else p.ageSinceStuck++;
          if(p.ageSinceStuck===10){this.kill(p.name);}
          const dx=p.x-spot.x,dy=p.y-spot.y,xAcc=-k*dx,yAcc=-k*dy;
          p.xSpeed=(p.xSpeed+xAcc)*visc;p.ySpeed=(p.ySpeed+yAcc)*visc;
          p.x+=0.1*p.xSpeed;p.y+=0.1*p.ySpeed;
          if(++p.age>this.lifespan){this.kill(p.name);this.deathCount++;}
        }
      };
      App.dataXYtoCanvasXY=function(x,y){const z=1.6;return{x:this.xC+x*z*this.dataToImageRatio,y:this.yC+y*z*this.dataToImageRatio};};
      App.draw=function(){
        this.drawnInLastFrame=0;if(!this.particles.length)return;
        const ctx=this.ctx;ctx.fillStyle='rgba(0,10,30,0.08)';ctx.fillRect(0,0,this.width,this.height);
        for(let i=0;i<this.particles.length;i++){
          const p=this.particles[i],h=p.hue+this.stepCount/30,s=p.sat,l=p.lum;
          const last=this.dataXYtoCanvasXY(p.xLast,p.yLast),now=this.dataXYtoCanvasXY(p.x,p.y),
                spot=this.grid[p.attractor.gridSpotIndex],spotXY=this.dataXYtoCanvasXY(spot.x,spot.y),
                old=this.grid[p.attractor.oldIndex],oldXY=this.dataXYtoCanvasXY(old.x,old.y);
          ctx.strokeStyle=`hsla(${h},${s}%,${l}%,1)`;ctx.lineWidth=1.5*this.dataToImageRatio;
          ctx.beginPath();ctx.moveTo(last.x,last.y);ctx.lineTo(now.x,now.y);ctx.stroke();
          ctx.beginPath();ctx.moveTo(oldXY.x,oldXY.y);ctx.lineTo(spotXY.x,spotXY.y);ctx.arc(spotXY.x,spotXY.y,1.5*this.dataToImageRatio,0,Math.PI*2);ctx.stroke();
          this.drawnInLastFrame++;
        }
      };
      App.evolve=function(){
        this.stepCount++;
        this.grid.forEach(e=>{if(e.busyAge>0)e.busyAge++;});
        if(this.stepCount%this.birthFreq===0&&(this.particles.length+this.popPerBirth)<this.maxPop){this.birth();}
        this.move();this.draw();
      };
      App.initDraw=function(){this.ctx.fillStyle='#02121a';this.ctx.fillRect(0,0,this.width,this.height);};
      App.setup(); (function loop(){App.evolve();requestAnimationFrame(loop);})();
      window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;App.width=canvas.width;App.height=canvas.height;App.xC=App.width/2;App.yC=App.height/2;});
      lucide.createIcons();

      // Animate sequence entrance after DOM ready
      setTimeout(() => {
        document.querySelectorAll('.animate-seq').forEach((el, idx) => {
          setTimeout(() => el.classList.add('visible'), idx * 120);
        });
      }, 100);
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
      

<canvas className="fixed inset-0 w-full h-full pointer-events-none" height="923" id="particle-bg" style={{zIndex: '-1', background: 'radial-gradient(rgb(34, 42, 46) 0%, rgb(14, 165, 233) 100%)', transformOrigin: '0px 0px'}} width="1320"></canvas>

<div className="pointer-events-none absolute -top-32 left-0 h-[350px] w-[350px] rounded-full blur-[100px] bg-sky-400/15"></div>
<div className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[320px] rounded-full blur-3xl bg-sky-500/20"></div>

<header className="w-full sticky top-0 z-30 backdrop-blur border-b border-white/10 bg-sky-950/80">
<nav aria-label="Main navigation" className="container max-w-7xl mx-auto flex items-center justify-between px-4 py-3 animate-seq animate-delay-100">
<div className="flex items-center gap-2">
<span className="text-lg text-sky-50 font-geist">GamePulse</span>
</div>
<ul className="hidden md:flex space-x-5">
<li>
<a className="hover:text-white transition focus-visible:ring-2 text-sm rounded pt-1 pr-2 pb-1 pl-2 focus-visible:ring-sky-400 text-sky-50 font-geist" href="#">Dashboard</a>
</li>
<li>
<a className="hover:text-white transition focus-visible:ring-2 text-sm rounded pt-1 pr-2 pb-1 pl-2 focus-visible:ring-sky-400 text-sky-50 font-geist" href="#">Gear</a>
</li>
<li>
<a className="hover:text-white transition focus-visible:ring-2 focus-visible:ring-sky-400 text-sm rounded pt-1 pr-2 pb-1 pl-2 text-sky-50 font-geist" href="#">Matches</a>
</li>
<li>
<a className="hover:text-white transition text-sm rounded pt-1 pr-2 pb-1 pl-2 text-sky-50 font-geist" href="#">Profile</a>
</li>
</ul>
<button className="ml-3 flex items-center gap-2 rounded-full px-2 py-1 transition ring-1 ring-white/10 focus-visible:ring-2 focus-visible:ring-sky-400 bg-sky-900/60 hover:bg-sky-800/80">
<img alt="User avatar" className="w-7 h-7 ring-2 object-cover rounded-full ring-sky-400" src="https://randomuser.me/api/portraits/men/22.jpg"/>
<span className="hidden sm:inline text-sm text-white font-geist">GamerX</span>
</button>
<button aria-label="Open menu" className="md:hidden ml-4 rounded focus-visible:ring-2 focus-visible:ring-sky-400">
<svg className="lucide lucide-menu w-6 h-6 text-white" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</nav>
</header>

<main className="container max-w-7xl mx-auto px-4 mt-14 lg:mt-20 mb-10">
<div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">

<section className="w-full max-w-xl text-center lg:text-left flex flex-col items-center lg:items-start animate-seq animate-delay-300">
<h1 className="sm:text-5xl md:text-6xl text-4xl text-white mb-5 font-space-mono font-medium tracking-tighter" style={{fontFamily: 'Inter, Roboto, sans-serif'}}>Level Up Your Gear<br/>Own the Game</h1>
<p className="sm:text-xl max-w-2xl text-lg text-gray-300 mr-auto mb-6 ml-auto font-geist">Track your performance in real time and reduce input lag.
Customize your setup and take control of every session.</p>

<div className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full sm:w-auto mt-2 mb-1">
<button aria-label="Get Your Controller" className="button font-geist">
<svg aria-hidden="true" className="lucide lucide-gamepad-2 icon" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
            Get Your Controller
          </button>
<button aria-label="Learn More" className="button-secondary font-geist">
<svg className="lucide lucide-info icon" data-lucide="info" fill="none" height="24" stroke="#0091D6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
            Learn More
          </button>
</div>
</section>

<section className="w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl ring-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[18px] border relative animate-seq animate-delay-500 glass-card-gaming ring-sky-400/30 border-sky-500/40 via-sky-900/40" style={{fontFamily: 'Roboto, Inter, sans-serif'}}>
<div className="relative bg-gradient-to-b from-white/15 via-white/0 to-white/0 pt-6 pr-6 pb-6 pl-6 space-y-6 items-center justify-center" style={{backdropFilter: 'blur(25px)', borderBottom: '1px solid rgba(255,255,255,0.09)'}}>

<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-2">
<span className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-cyan400 to-sky-400 shadow-inner ring-2 ring-white/10 via-sky-400">
<svg className="lucide lucide-user text-white w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</span>
<span className="text-2xl text-slate-50 font-space-mono">GamerX</span>
</div>
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs uppercase border bg-sky-400/30 text-sky-200 border-sky-400/50 font-geist">
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
              Elite
            </span>
</div>

<div className="relative flex items-center justify-center mb-8 controller-animate-group" style={{zIndex: '2'}}>
<div className="absolute -inset-4 blur-[40px] pointer-events-none" style={{zIndex: '1', background: 'radial-gradient(circle at 70% 60%, rgba(34,211,238,0.12) 0%,rgba(59,130,246,0.14) 60%,transparent 100%)'}}></div>
<img alt="DualSense Wireless Controller with glowing accents" aria-hidden="true" className="controller-img w-[260px] md:w-[340px] lg:w-[390px] h-auto object-contain drop-shadow-[0_8px_24px_rgba(34,211,238,0.18)] pointer-events-none select-none z-10 relative" draggable="false" loading="lazy" src="https://i.imgur.com/ckSgzLQ.png"/>
</div>

<div className="grid grid-cols-3 gap-2 text-center mb-7">
<div>
<div className="text-2xl text-sky-400 font-space-mono">82%</div>
<div className="uppercase text-xs text-slate-50 font-geist">Win Rate</div>
</div>
<div>
<div className="text-2xl text-sky-400 font-space-mono">1.6ms</div>
<div className="uppercase text-xs text-slate-50 font-geist">Input Lag</div>
</div>
<div>
<div className="text-2xl text-sky-400 font-space-mono">4.5h</div>
<div className="uppercase text-xs text-slate-50 font-geist">Session</div>
</div>
</div>
<div className="h-px bg-gradient-to-r to-white/10 mb-6 from-sky-400/10 via-sky-300/20"></div>

<div className="grid grid-cols-2 gap-x-4 gap-y-5 mb-7">
<div className="flex items-center gap-3">
<span className="w-9 h-9 flex items-center justify-center rounded-lg border shadow-inner bg-sky-700/30 border-sky-400/30 text-sky-100">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Adaptive Triggers</span>
</div>
<div className="flex items-center gap-3">
<span className="w-9 h-9 flex items-center justify-center rounded-lg border shadow-inner bg-sky-800/30 border-sky-400/30 text-sky-100">
<svg className="lucide lucide-vibrate w-5 h-5" data-lucide="vibrate" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m2 8 2 2-2 2 2 2-2 2"></path><path d="m22 8-2 2 2 2-2 2 2 2"></path><rect height="14" rx="1" width="8" x="8" y="5"></rect></svg>
</span>
<span className="text-sm text-white/90 font-geist">Haptic Feedback</span>
</div>
<div className="flex items-center gap-3">
<span className="w-9 h-9 flex items-center justify-center rounded-lg bg-sky-800/30 border border-sky-400/30 shadow-inner text-sky-100">
<svg className="lucide lucide-mic w-5 h-5" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</span>
<span className="text-sm text-white/90 font-geist">Voice Chat</span>
</div>
<div className="flex items-center gap-3">
<span className="w-9 h-9 flex items-center justify-center rounded-lg border shadow-inner bg-sky-800/30 border-sky-400/30 text-sky-100">
<svg className="lucide lucide-usb w-5 h-5" data-lucide="usb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="7" r="1"></circle><circle cx="4" cy="20" r="1"></circle><path d="M4.7 19.3 19 5"></path><path d="m21 3-3 1 2 2Z"></path><path d="M9.26 7.68 5 12l2 5"></path><path d="m10 14 5 2 3.5-3.5"></path><path d="m18 12 1-1 1 1-1 1Z"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">USB-C Fast Charge</span>
</div>
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
