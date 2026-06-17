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



        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
            }
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
      

<div className="w-full max-w-sm bg-[#09090B] border border-white/10 shadow-2xl ring-1 ring-white/5 group">

<div className="relative h-64 w-full overflow-hidden">

<img alt="Paris" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-80"></div>

<div className="absolute top-4 left-4 flex items-center gap-2">
<span className="bg-black/60 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 border border-white/10">
                    Feb 9
                </span>
</div>

<div className="absolute top-4 right-4">
<span className="bg-blue-600/90 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 border border-blue-400/20 shadow-lg shadow-blue-900/20">
                    Business Class
                </span>
</div>
</div>

<div className="px-6 pt-6 pb-6 relative -mt-6 bg-[#09090B] border-t border-white/5 text-center">

<div className="mb-8">
<h1 className="text-3xl font-semibold text-white tracking-tight uppercase">Europe</h1>
<p className="text-zinc-400 text-sm mt-1">8 Routes to Paris</p>
</div>

<div className="flex items-end justify-center gap-3 mb-8 p-5 bg-zinc-900/30 border border-white/5">
<div className="flex flex-col items-center">
<span className="text-xs text-zinc-500 mb-1 font-medium">Roundtrip</span>
<span className="text-3xl font-semibold text-white tracking-tight">$2,781</span>
</div>
<span className="text-sm text-zinc-600 line-through mb-1.5 pb-0.5 decoration-zinc-700 decoration-1">$2,347</span>
</div>

<div className="flex flex-col items-center gap-4 mb-8">

<div className="flex items-center justify-center gap-2 text-xs text-zinc-400 font-medium">
<i className="w-3.5 h-3.5 text-zinc-500" data-lucide="calendar"></i>
<span>Available for 5 months</span>
</div>

<div className="flex items-center justify-center gap-2.5">
<div className="w-7 h-7 rounded-full bg-white p-0.5 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity ring-1 ring-white/10 overflow-hidden">
<img alt="Air France" className="w-full h-full object-contain grayscale opacity-80" src="https://images.kiwi.com/airlines/64/AF.png"/>
</div>
<div className="w-7 h-7 rounded-full bg-white p-0.5 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity ring-1 ring-white/10 overflow-hidden">
<img alt="KLM" className="w-full h-full object-contain grayscale opacity-80" src="https://images.kiwi.com/airlines/64/KL.png"/>
</div>
<div className="w-7 h-7 rounded-full bg-white p-0.5 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity ring-1 ring-white/10 overflow-hidden">
<img alt="United" className="w-full h-full object-contain grayscale opacity-80" src="https://images.kiwi.com/airlines/64/UA.png"/>
</div>
<div className="w-7 h-7 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center hover:bg-zinc-700 transition-colors">
<span className="text-xs text-zinc-400 font-medium">+2</span>
</div>
</div>
</div>

<button className="w-full bg-white hover:bg-zinc-200 active:bg-zinc-300 text-black text-sm font-medium py-3.5 transition-all duration-200 flex items-center justify-center gap-2 group/btn">
                Deal Details
                <i className="w-4 h-4 text-zinc-500 group-hover/btn:text-black transition-colors" data-lucide="arrow-right"></i>
</button>
</div>
</div>


    </>
  );
}
