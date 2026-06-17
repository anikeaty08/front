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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 brightness-50 saturate-50"><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="TIWE0oFfvUmetsFoxL6u"></div>

</div></div>

<section className="pt-24 pb-24 relative" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1)">
<div className="md:px-8 flex mr-auto ml-auto pr-6 pl-6 justify-center" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1)">

<div className="grid grid-cols-1 xl:grid-cols-3 lg:gap-12 w-full max-w-[1400px] gap-x-8 gap-y-8 items-center" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1)">

<div className="flex justify-center [animation:fadeSlideIn_1s_ease-out_0.1s_both]" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1)">
<div className="iphone-shadow rounded-[50px] relative shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1)" style={{width: '393px'}}>

<div className="bg-slate-900 ring-slate-800 ring-1 rounded-[3rem] pt-3 pr-3 pb-3 pl-3" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1)">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-slate-900 rounded-b-3xl z-10"></div>

<div className="bg-slate-950 rounded-[2.5rem] overflow-hidden relative" style={{width: '369px', height: '852px'}}>

<div className="absolute top-0 left-0 right-0 h-14 bg-slate-950 z-10 flex items-center justify-between px-10 pt-2">
<span className="text-white text-sm font-medium">9:41</span>
<div className="flex items-center gap-1.5">
<svg className="w-5 h-5 text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"></path></svg>
<svg className="w-4 h-4 text-white" fill="currentColor" viewbox="0 0 16 16"><path d="M11.5 1a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-4 3a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 .5-.5zm-4 4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5z"></path></svg>
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24"><rect height="12" rx="2" ry="2" width="18" x="1" y="6"></rect><path d="M23 11v2"></path></svg>
</div>
</div>

<div className="overflow-y-auto h-full pt-16 pr-5 pb-6 pl-5">

<div className="pointer-events-none z-0 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute inset-y-0 left-[33%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[66%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-[25%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-[50%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-[75%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
</div>
<div className="space-y-5 relative z-10">

<div className="bg-slate-900/40 ring-1 ring-white/10 rounded-2xl p-5 backdrop-blur-sm">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-2.5 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 font-geist mb-3">
<svg className="w-3 h-3" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>
        Real-time metrics
      </div>
<p className="text-sm text-slate-300 font-geist leading-relaxed mb-4">
        AI market growth <span className="text-orange-300">59%</span> by 2025
      </p>
<div className="rounded-lg bg-black/20 ring-1 ring-white/10 p-3">
<div className="flex gap-1.5 h-16 items-end" data-element-id="aura-emgc41vptsoyw4y6" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(2) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1)">
<div className="w-3 rounded bg-white/10" style={{height: '18px'}}></div>
<div className="w-3 rounded bg-white/10" style={{height: '22px'}}></div>
<div className="w-3 rounded bg-white/10" style={{height: '28px'}}></div>
<div className="w-3 rounded bg-white/10" style={{height: '32px'}}></div>
<div className="w-3 rounded bg-white/10" style={{height: '40px'}}></div>
<div className="w-3 rounded bg-orange-400/70" style={{height: '52px'}}></div>
<div className="w-3 rounded bg-orange-400/80" style={{height: '64px'}}></div>
<div className="w-3 rounded bg-orange-400/90" style={{height: '58px'}}></div>
<div className="w-3 rounded bg-white/10" style={{height: '48px'}}></div>
<div className="w-3 rounded bg-white/10" style={{height: '35px'}}></div>
<div className="bg-white/10 w-3 rounded" data-element-id="aura-emgc42t56vylcoq9" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(2) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(11)" style={{height: '26px'}}></div>
<div className="bg-white/10 w-3 rounded" data-element-id="aura-emgc42q5mtqzudrk" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(2) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(12)" style={{height: '20px'}}></div><div className="bg-white/10 w-3 rounded" data-element-id="aura-emgc42ubrw6lyfa0" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(2) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(13)" style={{height: '26px'}}></div><div className="bg-white/10 w-3 rounded" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(2) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(13)" style={{height: '26px'}}></div><div className="bg-white/10 w-3 rounded" data-element-id="aura-emgc42s6xulpyjqr" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(2) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(13)" style={{height: '20px'}}></div>
</div>
</div>
<div className="mt-3 pt-3 border-t border-white/5">
<div className="text-3xl font-normal tracking-tighter font-geist text-white">$40B</div>
<p className="text-slate-400 text-xs font-geist mt-1">Expected valuation</p>
</div>
</div>

<div className="overflow-hidden flex flex-col bg-gradient-to-b from-white/10 to-white/5 ring-white/10 ring-1 rounded-2xl p-3 backdrop-blur-sm">
<div className="relative rounded-xl overflow-hidden ring-1 ring-white/10 flex-1">
<img alt="Face scan" className="w-full h-32 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/820cceaf-9743-4f59-bbcf-550dce410acb_800w.webp"/>
<div className="absolute top-3 left-3 right-3 flex items-center justify-between">
<span className="text-white text-sm font-normal font-geist">98%</span>
<span className="text-xs text-slate-300/80 font-geist">Face detection</span>
</div>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-orange-300"></div>
<span className="text-[10px] text-slate-200 font-geist">Live</span>
</div>
</div>
</div>
<div className="pt-3 px-1">
<h3 className="text-base font-normal tracking-tight font-geist text-white">AI Face Verification</h3>
<p className="text-xs text-slate-400 font-geist">Identity match in milliseconds</p>
</div>
</div>

<div className="bg-slate-900/60 ring-1 ring-white/10 rounded-2xl p-5 backdrop-blur-sm">
<p className="text-sm text-slate-300 font-geist leading-relaxed mb-3">
<span className="text-orange-300">75%</span> project success rate
      </p>
<div className="grid grid-cols-3 gap-3 mb-4">
<div>
<div className="text-xl font-normal tracking-tighter font-geist text-white">63%</div>
<p className="text-slate-400 text-[10px] font-geist">Succeeded</p>
</div>
<div>
<div className="text-xl font-normal tracking-tighter font-geist text-white">24%</div>
<p className="text-slate-400 text-[10px] font-geist">In Progress</p>
</div>
<div>
<div className="text-xl font-normal tracking-tighter font-geist text-white">13%</div>
<p className="text-slate-400 text-[10px] font-geist">Failed</p>
</div>
</div>
<div className="space-y-2">
<div className="relative h-4 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="bg-orange-400/80 absolute top-0 bottom-0 left-0" style={{width: '63%'}}></div>
</div>
<div className="relative h-4 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="bg-red-500/80 absolute top-0 bottom-0 left-0" style={{width: '24%'}}></div>
</div>
<div className="relative h-4 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="bg-slate-300/40 absolute top-0 bottom-0 left-0" style={{width: '13%'}}></div>
</div>
</div>
</div>

<div className="bg-slate-900/40 ring-1 ring-white/10 rounded-2xl p-5 backdrop-blur-sm">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-2.5 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 font-geist mb-3">
<svg className="w-3 h-3" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
<line x1="9" x2="9.01" y1="9" y2="9"></line>
<line x1="15" x2="15.01" y1="9" y2="9"></line>
</svg>
        Customer satisfaction
      </div>
<div className="flex items-center justify-center py-4">
<div className="relative w-20 h-20">
<div className="absolute inset-0 rounded-full" style={{background: 'conic-gradient(rgba(163,230,53,0.85) 0% 86%, rgba(255,255,255,0.12) 86% 100%)'}}></div>
<div className="absolute inset-2 rounded-full bg-black/20 ring-1 ring-white/10"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-2xl font-normal tracking-tighter font-geist text-white">4.8</div>
</div>
</div>
</div>
<p className="text-center text-slate-400 text-xs font-geist mb-3">CSAT • last 90 days</p>
<div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/5">
<div className="text-center">
<div className="text-base font-normal text-slate-300 font-geist">1,240</div>
<p className="text-[10px] text-slate-400 font-geist">Responses</p>
</div>
<div className="text-center">
<div className="text-base font-normal text-slate-300 font-geist">+0.3</div>
<p className="text-[10px] text-slate-400 font-geist">vs. Last Period</p>
</div>
</div>
</div>

<div className="bg-slate-900/60 ring-1 ring-white/10 rounded-2xl p-5 backdrop-blur-sm">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-2.5 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 font-geist mb-3">
<svg className="w-3 h-3" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
        Deployment speed
      </div>
<div className="text-3xl font-normal tracking-tighter font-geist text-white">14 days</div>
<p className="text-slate-400 text-xs font-geist mb-3">Avg. from kickoff to production</p>
<div className="flex items-center justify-between gap-2 mb-3">
<div className="flex flex-col items-center gap-1.5">
<div className="w-5 h-5 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
<svg className="w-3 h-3 text-orange-300" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-[10px] text-slate-300 font-geist">Discovery</span>
</div>
<div className="flex flex-col items-center gap-1.5">
<div className="w-5 h-5 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
<svg className="w-3 h-3 text-orange-300" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-[10px] text-slate-300 font-geist">MVP</span>
</div>
<div className="flex flex-col items-center gap-1.5">
<div className="w-5 h-5 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
<svg className="w-3 h-3 text-orange-300" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-[10px] text-slate-300 font-geist">Prod</span>
</div>
</div>
<div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/5">
<div>
<div className="text-base font-normal text-slate-300 font-geist">98%</div>
<p className="text-[10px] text-slate-400 font-geist">On-time delivery</p>
</div>
<div>
<div className="text-base font-normal text-slate-300 font-geist">24/7</div>
<p className="text-[10px] text-slate-400 font-geist">Support coverage</p>
</div>
</div>
</div>

<div className="bg-slate-900/40 ring-1 ring-white/10 rounded-2xl p-5 backdrop-blur-sm">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-2.5 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 font-geist mb-3">
<svg className="w-3 h-3" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
        Model latency
      </div>
<div className="text-3xl font-normal tracking-tighter font-geist text-white">120ms</div>
<p className="text-slate-400 text-xs font-geist mb-3">p95 response time</p>
<div className="relative h-3 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden mb-2">
<div className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-400/80 to-red-500/80" style={{width: '60%'}}></div>
</div>
<div className="flex items-center justify-between text-[10px] text-slate-400 font-geist mb-3">
<span>0ms</span>
<span>200ms</span>
</div>
<div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/5">
<div>
<div className="text-base font-normal text-slate-300 font-geist">99.9%</div>
<p className="text-[10px] text-slate-400 font-geist">Uptime SLA</p>
</div>
<div>
<div className="text-base font-normal text-slate-300 font-geist">50ms</div>
<p className="text-[10px] text-slate-400 font-geist">p50 latency</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center [animation:fadeSlideIn_1s_ease-out_0.2s_both]" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2)">
<div className="iphone-shadow rounded-[50px] relative shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1)" style={{width: '393px'}}>

<div className="bg-slate-900 ring-slate-800 ring-1 rounded-[3rem] pt-3 pr-3 pb-3 pl-3" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1)">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-slate-900 rounded-b-3xl z-10"></div>

<div className="bg-slate-950 rounded-[2.5rem] overflow-hidden relative" style={{width: '369px', height: '852px'}}>

<img alt="" className="pointer-events-none w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5870ea03-2a63-47fa-ac34-5b3060d51f67_800w.jpg"/>

<div className="absolute top-0 left-0 right-0 h-14 bg-transparent z-10 flex items-center justify-between px-10 pt-2">
<span className="text-white text-sm font-medium">9:41</span>
<div className="flex items-center gap-1.5">
<svg className="w-5 h-5 text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"></path></svg>
<svg className="w-4 h-4 text-white" fill="currentColor" viewbox="0 0 16 16"><path d="M11.5 1a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-4 3a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 .5-.5zm-4 4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5z"></path></svg>
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24"><rect height="12" rx="2" ry="2" width="18" x="1" y="6"></rect><path d="M23 11v2"></path></svg>
</div>
</div>

<header className="z-10 border-white/5 border-b relative pt-14">
<div className="flex pt-4 pr-5 pb-4 pl-5 items-center justify-between">
<div className="flex ring-white/5 ring-1 rounded-full pt-1 pr-1 pb-1 pl-1 gap-2 items-center">
<a className="inline-flex items-center justify-center bg-center w-[90px] h-[28px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f7466370-2832-4fdd-84c2-0932bb0dd850_800w.png)] bg-cover rounded-full" href="#"></a>
</div>
<div className="flex ring-white/5 ring-1 rounded-full pt-1 pr-1 pb-1 pl-1 gap-2 items-center">
<a className="inline-flex items-center gap-2 transition text-xs font-medium text-white/90 font-geist bg-white/10 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm ring-1 ring-white/15" href="#">
                        Contact
                      </a>
</div>
</div>
</header>

<main className="z-10 flex h-[calc(100%-140px)] relative items-end">
<section className="w-full pr-5 pb-8 pl-5">
<div className="space-y-5">
<div className="inline-flex text-xs font-medium text-white/80 font-geist bg-white/5 ring-white/10 ring-1 rounded-full mb-3 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm gap-2 items-center">
<svg className="w-3 h-3 text-white/80" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                        Next-Gen AI Solutions
                      </div>
<h1 className="leading-tight text-3xl tracking-tighter font-geist text-white">
                        Transform Your Business
                        <span className="block bg-clip-text text-transparent tracking-tighter font-geist bg-gradient-to-r from-white via-white to-white/70">with Intelligent AI</span>
</h1>
<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4"></div>
<p className="leading-relaxed text-sm text-white/70 font-geist">
                        We partner with forward-thinking companies to design, build, and deploy production-ready AI systems.
                      </p>
<div className="flex gap-2">
<a className="inline-flex items-center justify-center gap-2 text-xs font-medium text-white/90 font-geist bg-white/10 ring-white/15 ring-1 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 backdrop-blur-sm" href="#">
                          Case Studies
                          <svg className="w-3 h-3" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 text-xs font-medium text-neutral-900 font-geist bg-white rounded-full pt-2 pr-3.5 pb-2 pl-3.5 ring-1 ring-white/20" href="#">
                          Consultation
                          <svg className="w-3 h-3" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
</div>
</div>
</section>
</main>
</div>
</div>
</div>
</div>

<div className="flex justify-center [animation:fadeSlideIn_1s_ease-out_0.3s_both]" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3)">
<div className="iphone-shadow rounded-[50px] relative shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(1)" style={{width: '393px'}}>

<div className="bg-slate-900 ring-slate-800 ring-1 rounded-[3rem] pt-3 pr-3 pb-3 pl-3" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1)">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-slate-900 rounded-b-3xl z-10"></div>

<div className="bg-slate-950 rounded-[2.5rem] overflow-hidden relative" style={{width: '369px', height: '852px'}}>

<div className="absolute top-0 left-0 right-0 h-14 bg-slate-950 z-10 flex items-center justify-between px-10 pt-2">
<span className="text-white text-sm font-medium">9:41</span>
<div className="flex items-center gap-1.5">
<svg className="w-5 h-5 text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"></path></svg>
<svg className="w-4 h-4 text-white" fill="currentColor" viewbox="0 0 16 16"><path d="M11.5 1a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-4 3a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 .5-.5zm-4 4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5z"></path></svg>
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24"><rect height="12" rx="2" ry="2" width="18" x="1" y="6"></rect><path d="M23 11v2"></path></svg>
</div>
</div>

<div className="overflow-y-auto h-full pt-16 pr-5 pb-6 pl-5">

<div className="pointer-events-none z-0 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute inset-y-0 left-[33%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[66%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-[25%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-[50%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-[75%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
</div>
<div className="relative z-10">

<div className="mb-5">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-2.5 py-1.5 text-xs font-medium text-white/70 ring-1 ring-white/10 font-geist">
<svg className="w-3 h-3" fill="none" height="14" stroke="currentColor" strokeWidth="1.75" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
<path d="M5 3v4"></path>
<path d="M19 17v4"></path>
<path d="M3 5h4"></path>
<path d="M17 19h4"></path>
</svg>
        Key Features
      </div>
<h2 className="mt-3 text-2xl font-normal tracking-tighter text-white font-geist">
        AI-Powered Excellence
      </h2>
</div>

<div className="space-y-4">

<div className="bg-slate-900/50 ring-1 ring-white/10 rounded-2xl p-5 backdrop-blur-sm">
<h3 className="text-base font-normal tracking-tight font-geist text-white">Intelligent Recording</h3>
<p className="mt-2 text-xs text-slate-400 font-geist leading-relaxed">
          Capture every moment with precision. Advanced transcription technology delivers unmatched accuracy.
        </p>

<div className="mt-4 rounded-xl bg-black/30 ring-1 ring-white/10 p-3">
<div className="flex items-center justify-between mb-3">
<div className="inline-flex items-center gap-2 text-xs text-slate-300 font-geist">
<svg className="w-3 h-3 opacity-80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10v3"></path>
<path d="M6 6v11"></path>
<path d="M10 3v18"></path>
<path d="M14 8v7"></path>
<path d="M18 5v13"></path>
<path d="M22 10v3"></path>
</svg>
              Live
            </div>
<div className="inline-flex items-center gap-1.5 bg-white/5 ring-1 ring-white/10 px-2 py-1 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-orange-300"></div>
<span className="text-[10px] text-slate-200 font-geist">Recording</span>
</div>
</div>
<div className="space-y-1.5">
<div className="text-[10px] text-slate-300/90 font-geist">Welcome to the session</div>
<div className="text-[10px] text-slate-300/90 font-geist">How can we assist you today?</div>
<div className="text-[10px] text-slate-300/90 font-geist">Let's review the details</div>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden ring-1 ring-white/15 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm">
<div className="absolute inset-0">
<img alt="Collaboration" className="opacity-70 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6aca3833-7e40-4385-8396-5e27810e348d_800w.webp" style={{}}/>
<div className="bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent absolute inset-0"></div>
</div>
<div className="relative p-5">
<h3 className="text-base font-normal tracking-tight font-geist text-white">Seamless Collaboration</h3>
<p className="mt-2 text-xs text-slate-200/80 font-geist leading-relaxed">
            Focus on what matters. Spend less time managing and more time building connections.
          </p>
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1.5 text-[10px] text-white/80 ring-1 ring-white/15 font-geist mt-3">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
            Auto-summaries &amp; insights
          </div>
</div>
</div>

<div className="bg-slate-900/50 ring-1 ring-white/10 rounded-2xl p-5 backdrop-blur-sm">
<h3 className="text-base font-normal tracking-tight font-geist text-white">Customizable Templates</h3>
<p className="mt-2 text-xs text-slate-400 font-geist leading-relaxed">
          Built for professionals who demand flexibility. Adapts to your unique workflow.
        </p>

<div className="mt-4 rounded-xl bg-black/30 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-2 mb-3">
<div className="w-6 h-6 rounded-lg bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
<svg className="w-3.5 h-3.5 text-slate-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<div>
<p className="text-xs font-normal text-slate-200 font-geist">Professional</p>
<p className="text-[10px] text-slate-400 font-geist">Session docs</p>
</div>
</div>
<div className="grid grid-cols-2 gap-2 text-[10px] text-slate-300 font-geist mb-3">
<div className="flex items-center gap-1.5">
<svg className="w-3 h-3 opacity-80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
</svg>
<span>Nov 21, 2025</span>
</div>
<div className="flex items-center gap-1.5">
<svg className="w-3 h-3 opacity-80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
<span>Virtual</span>
</div>
</div>
<div className="space-y-1.5 pt-2 border-t border-white/5">
<p className="text-[10px] text-slate-400 font-geist"><span className="text-slate-300">Subject:</span> Strategic planning</p>
<p className="text-[10px] text-slate-400 font-geist"><span className="text-slate-300">Focus:</span> Implementation roadmap</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-2 mt-5 pt-4 border-t border-white/5">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-neutral-900 ring-1 ring-white/20 px-4 py-2.5 text-xs font-medium font-geist" href="#">
        Start free trial
        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white ring-1 ring-white/15 px-4 py-2.5 text-xs font-medium font-geist" href="#">
        Explore features
      </a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
