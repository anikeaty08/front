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
      
<div className="flex flex-wrap justify-center gap-6 max-w-7xl w-full">

<div className="bg-black text-white w-[320px] h-[320px] rounded-[2.5rem] p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden ring-1 ring-white/10">

<div className="flex items-center gap-2 text-zinc-400">
<i className="w-5 h-5 opacity-80" data-lucide="sun" strokeWidth="1.5"></i>
<h2 className="text-xs font-medium tracking-wide uppercase text-zinc-400/80">UV Index</h2>
</div>

<div className="flex flex-col mt-2">
<div className="flex flex-col">
<span className="text-8xl font-medium tracking-tighter leading-none -ml-1">6</span>
<span className="text-3xl font-medium tracking-tight mt-1">High</span>
</div>
</div>

<div className="relative w-full h-2 mt-4 mb-2">
<div className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,#4ade80_0%,#facc15_30%,#fb923c_60%,#f43f5e_80%,#d946ef_100%)] opacity-80"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[55%] h-5 w-1.5 bg-white rounded-full ring-[3px] ring-black shadow-sm z-10"></div>
</div>

<div className="mt-auto">
<p className="text-lg font-medium text-zinc-200 leading-snug tracking-tight">
                    Use sun protection<br/>
                    until 16:00
                </p>
</div>
</div>

<div className="bg-black text-white w-[320px] h-[320px] rounded-[2.5rem] p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden ring-1 ring-white/10">

<div className="flex items-center gap-2 text-zinc-400">
<i className="w-5 h-5 opacity-80" data-lucide="sunset" strokeWidth="1.5"></i>
<h2 className="text-xs font-medium tracking-wide uppercase text-zinc-400/80">Sunset</h2>
</div>

<div className="flex flex-col mt-4 z-10">
<span className="text-6xl font-medium tracking-tighter leading-none">20:38</span>
<span className="text-zinc-400 font-medium mt-1 text-base">Sunrise: 05:42</span>
</div>

<div className="absolute bottom-0 left-0 right-0 h-40 w-full px-0 pointer-events-none">
<svg className="w-full h-full" viewbox="0 0 320 160">
<defs>
<lineargradient id="sunGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'rgba(251, 146, 60, 0.2)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgba(251, 146, 60, 0)', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<line stroke="#3f3f46" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="320" y1="110" y2="110"></line>
<path d="M -20,110 Q 160,-60 340,110" fill="url(#sunGradient)" stroke="none"></path>
<path className="opacity-80" d="M -20,110 Q 160,-60 340,110" fill="none" stroke="#fb923c" strokeLinecap="round" strokeWidth="2"></path>
<circle className="shadow-[0_0_15px_rgba(251,146,60,0.8)]" cx="230" cy="55" fill="white" r="5" stroke="#fb923c" strokeWidth="2"></circle>
</svg>
</div>

<div className="mt-auto relative z-10">
<p className="text-lg font-medium text-zinc-200 leading-snug tracking-tight">
                    Light is decreasing<br/>
                    by 2m 30s
                </p>
</div>
</div>

<div className="bg-black text-white w-[320px] h-[320px] rounded-[2.5rem] p-7 flex flex-col shadow-2xl relative overflow-hidden ring-1 ring-white/10">

<div className="flex items-center gap-2 text-zinc-400 absolute top-7 left-7 z-20">
<i className="w-5 h-5 opacity-80" data-lucide="sunset" strokeWidth="1.5"></i>
<h2 className="text-xs font-medium tracking-wide uppercase text-zinc-400/80">Sunset</h2>
</div>

<div className="flex-1 flex flex-col items-center justify-center pt-8 relative z-10">

<span className="text-[3.5rem] font-medium tracking-tighter text-white leading-none mb-1">18:57</span>

<div className="w-full h-32 relative flex items-center justify-center">
<svg className="w-full h-full overflow-visible" viewbox="0 0 264 100">
<defs>
<lineargradient id="waveGradientNew" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#facc15"></stop>
<stop offset="50%" stop-color="#fb923c"></stop>
<stop offset="100%" stop-color="#f43f5e"></stop>
</lineargradient>
<mask id="maskAbove">
<rect fill="white" height="80" width="300" x="-20" y="-20"></rect>
</mask>
<mask id="maskBelow">
<rect fill="white" height="60" width="300" x="-20" y="60"></rect>
</mask>
</defs>

<line stroke="#3f3f46" strokeWidth="1.5" x1="-20" x2="284" y1="60" y2="60"></line>



<path d="M -10,90 C 70,90 90,20 132,20 C 174,20 194,90 274,90" fill="none" mask="url(#maskBelow)" opacity="0.6" stroke="#52525b" strokeLinecap="round" strokeWidth="5"></path>

<path d="M -10,90 C 70,90 90,20 132,20 C 174,20 194,90 274,90" fill="none" mask="url(#maskAbove)" stroke="url(#waveGradientNew)" strokeLinecap="round" strokeWidth="5"></path>


<rect className="ring-2 ring-transparent" fill="#18181b" height="12" rx="2" width="4" x="130" y="14"></rect>
</svg>
</div>
</div>

<div className="mt-auto z-20">
<p className="text-base font-medium text-zinc-400">
                    Sunrise: <span className="text-zinc-200">06:33</span>
</p>
</div>
</div>
</div>


    </>
  );
}
