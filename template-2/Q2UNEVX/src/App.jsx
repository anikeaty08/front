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



document.addEventListener('DOMContentLoaded',()=>{lucide.createIcons();const iR=document.getElementById('industryRange'),sR=document.getElementById('scoreRange'),iV=document.getElementById('industryValue'),sV=document.getElementById('scoreValue');iR.addEventListener('input',()=>iV.textContent=iR.value+'%');sR.addEventListener('input',()=>sV.textContent=sR.value+'%');const ctx=document.getElementById('chart1').getContext('2d'),bars=50,maxH=ctx.canvas.height;ctx.fillStyle='rgba(255,255,255,0.3)';for(let i=0;i<bars;i++){const h=Math.random()*maxH,w=ctx.canvas.width/bars*0.6,x=i*(ctx.canvas.width/bars);ctx.fillRect(x,maxH-h,w,h);}});

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
      
<div className="min-h-screen flex flex-col gap-8 bg-gradient-to-r from-blue-400 to-cyan-400 pt-4 pr-4 pb-4 pl-4 items-center justify-center">
<div className="flex flex-col md:flex-row gap-8">

<div className="w-80 h-[700px] rounded-3xl bg-gradient-to-br from-violet-800 via-purple-700 to-fuchsia-500 relative overflow-hidden shadow-2xl">
<div className="absolute inset-0 pointer-events-none">
<svg className="absolute bottom-0 translate-y-1/2" fill="none" height="200" viewBox="0 0 640 200" width="640">
<defs>
<lineargradient id="chart" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(255,255,255,0.4)"></stop>
<stop offset="100%" stop-color="rgba(255,255,255,0)"></stop>
</lineargradient>
</defs>
<rect fill="url(#chart)" height="200" width="640"></rect>
</svg>
</div>
<div className="relative flex flex-col h-full bg-gradient-to-br from-slate-900 to-slate-700 pt-14 pr-5 pb-28 pl-5 space-y-6">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="p-2 rounded-full bg-white/10 backdrop-blur">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-white/80" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
<div className="w-8 h-8 rounded-full border-2 border-white/30 overflow-hidden">
<img alt="avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=1080&q=80" />
</div>
</div>
<button className="p-2 rounded-full bg-white/10 backdrop-blur">
<svg className="lucide lucide-chevron-down w-4 h-4 text-white/80" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>

<h2 className="leading-snug text-sm font-normal">
What are my Top 3 strategies for CTO<br />to optimize performance and cost efficiency?
</h2>

<div className="flex items-center gap-2">
<button className="text-sm font-medium text-white bg-white/10 rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur">Performance</button>
<button className="text-sm font-medium text-white/70 bg-white/20 rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur">Cost Impact</button>
<button className="ml-auto p-2 rounded-full bg-white/10 backdrop-blur"><svg className="lucide lucide-more-horizontal w-4 h-4 text-white/80" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</div>

<div className="flex-1 rounded-3xl bg-black/20 backdrop-blur p-5 flex flex-col justify-between">
<div className="">
<div className="flex items-start justify-between">
<div className="">
<span className="text-6xl font-semibold tracking-tight">37</span><span className="text-3xl">%</span>
<p className="text-sm text-white/60 mt-1">Efficiency gain</p>
</div>
<button className="p-3 rounded-xl bg-white/10">
<svg className="lucide lucide-external-link w-5 h-5" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
</div>
<div className="h-24 w-full">
<canvas className="w-full h-full" id="chart1"></canvas>
</div>
</div>

<div className="flex items-center justify-between gap-2">
<button className="flex-1 rounded-full bg-black/20 backdrop-blur p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
<div className="text-left">
<p className="text-sm font-medium">Level A</p>
<p className="text-xs text-white/60">Current</p>
</div>
</div>
<svg className="lucide lucide-arrow-right w-4 h-4 text-white/50" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="flex-1 rounded-full bg-black/20 backdrop-blur p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-emerald-400"></span>
<div className="text-left">
<p className="text-sm font-medium">Level A+</p>
<p className="text-xs text-white/60">Target</p>
</div>
</div>
<svg className="lucide lucide-arrow-right w-4 h-4 text-white/50" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<button className="absolute left-1/2 bottom-5 -translate-x-1/2 w-16 h-16 flex ring-2 ring-violet-400/30 bg-gradient-to-tr from-violet-800 via-purple-600 to-fuchsia-400 rounded-full shadow-lg items-center justify-center">
<svg className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</button>
</div>
</div>

<div className="w-80 h-[700px] rounded-3xl bg-gradient-to-br from-violet-800 via-purple-700 to-fuchsia-500 relative overflow-hidden shadow-2xl">
<div className="relative flex flex-col h-full bg-gradient-to-br from-slate-900 to-slate-700 pt-14 pr-5 pb-28 pl-5 space-y-6">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="p-2 rounded-full bg-white/10 backdrop-blur">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-white/80" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
<div className="w-8 h-8 rounded-full border-2 border-white/30 overflow-hidden">
<img alt="avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=1080&q=80" />
</div>
</div>
<button className="p-2 rounded-full bg-white/10 backdrop-blur">
<svg className="lucide lucide-chevron-down w-4 h-4 text-white/80" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>

<h2 className="leading-snug text-sm font-normal">
Show me detailed insights about<br />my industry benchmarks
</h2>

<div className="flex items-center gap-2">
<button className="text-sm font-medium text-white/70 bg-white/10 rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur">Performance</button>
<button className="text-sm font-medium text-white bg-white/30 rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur">Cost Impact</button>
<button className="ml-auto p-2 rounded-full bg-white/10 backdrop-blur"><svg className="lucide lucide-more-horizontal w-4 h-4 text-white/80" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</div>

<div className="flex-1 rounded-3xl bg-black/20 backdrop-blur p-5 space-y-6">
<div className="">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium">Industry</span>
<span className="text-sm font-medium" id="industryValue">85%</span>
</div>
<input className="w-full accent-sky-400" id="industryRange" max="100" min="0" type="range" value="85" />
</div>
<div className="">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium">Your Score</span>
<span className="text-sm font-medium" id="scoreValue">62%</span>
</div>
<input className="w-full accent-emerald-400" id="scoreRange" max="100" min="0" type="range" value="62" />
</div>
</div>

<div className="flex items-center justify-center">
<button className="p-2 rounded-full bg-white/10 backdrop-blur"><svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button>
</div>

<button className="absolute left-1/2 bottom-5 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-tr from-violet-800 via-purple-600 to-fuchsia-400 flex items-center justify-center shadow-lg ring-2 ring-violet-400/30">
<svg className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
