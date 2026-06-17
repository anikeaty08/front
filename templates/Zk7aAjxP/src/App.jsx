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
      
<div className="w-[350px] bg-[#1a1b25] border border-neutral-800 rounded-xl shadow-lg flex flex-col overflow-hidden">

<div className="flex items-center justify-between border-b border-neutral-800 px-4 py-4">
<div className="flex-1 min-w-0">
<div className="text-white text-lg font-semibold truncate">Content performance</div>
<div className="text-neutral-400 text-xs mt-1 truncate">Last 14 days</div>
</div>
<button className="rounded-md px-3 py-1.5 text-cyan-600 font-medium text-sm border border-cyan-600 bg-transparent hover:bg-cyan-600/10 ml-3 shrink-0">More</button>
</div>

<div className="flex border-b border-neutral-800 bg-[#181926]">
<button className="flex-1 text-cyan-400 border-b-2 border-cyan-400 font-medium text-sm py-3 transition">Videos</button>
<button className="flex-1 text-neutral-400 border-b-2 border-transparent font-medium text-sm py-3 transition hover:text-cyan-300">Shorts</button>
<button className="flex-1 text-neutral-400 border-b-2 border-transparent font-medium text-sm py-3 transition hover:text-cyan-300">Live</button>
</div>

<div className="flex items-center justify-between px-4 py-4 border-b border-neutral-800">
<div className="flex items-end gap-1">
<span className="text-white text-xl font-bold">$</span>
<span className="text-white text-2xl font-bold">6,295.29</span>
</div>
<span className="text-neutral-400 text-xs font-medium whitespace-nowrap pl-2">Estimated revenue</span>
</div>

<div className="flex flex-col divide-y divide-neutral-800">

<div className="flex items-center gap-3 px-4 py-3">
<span className="bg-cyan-500/10 rounded-md flex items-center justify-center w-12 h-8 border border-cyan-400/40 shrink-0">
<svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect className="stroke-current" height="12" rx="2" width="16" x="4" y="4"></rect>
<path className="stroke-current" d="M10 10l4 2-4 2v-4z" strokeLinejoin="round"></path>
<rect className="stroke-current" height="2" rx="1" width="8" x="8" y="18"></rect>
</svg>
</span>
<div className="flex flex-col flex-1 min-w-0">
<div className="text-white text-sm font-medium max-w-full truncate">Explainer Animation Video Strategies</div>
<div className="h-1.5 mt-2 bg-neutral-800 rounded-full overflow-hidden w-full">
<div className="bg-gradient-to-r from-cyan-400 to-green-400 h-1.5 rounded-full" style={{width: '72%'}}></div>
</div>
</div>
<div className="text-neutral-300 text-sm font-medium ml-3 whitespace-nowrap shrink-0">$436.47</div>
</div>

<div className="flex items-center gap-3 px-4 py-3">
<span className="bg-purple-500/10 rounded-md flex items-center justify-center w-12 h-8 border border-purple-400/40 shrink-0">
<svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle className="stroke-current" cx="12" cy="12" r="6"></circle>
<path className="stroke-current" d="M13 9v2l1 1m-2 4h.01" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<div className="flex flex-col flex-1 min-w-0">
<div className="text-white text-sm font-medium max-w-full truncate">Creative Shorts: Tips &amp; Ideas</div>
<div className="h-1.5 mt-2 bg-neutral-800 rounded-full overflow-hidden w-full">
<div className="bg-gradient-to-r from-cyan-400 to-green-400 h-1.5 rounded-full" style={{width: '64%'}}></div>
</div>
</div>
<div className="text-neutral-300 text-sm font-medium ml-3 whitespace-nowrap shrink-0">$382.90</div>
</div>

<div className="flex items-center gap-3 px-4 py-3">
<span className="bg-pink-500/10 rounded-md flex items-center justify-center w-12 h-8 border border-pink-400/40 shrink-0">
<svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path className="stroke-current" d="M15 10l4.553-1.181A1 1 0 0121 9.764v7.313c0 .614-.38 1.164-.958 1.377l-7.42 2.794A3 3 0 017 18.438V13"></path>
<rect className="stroke-current" height="7" rx="2" width="9" x="2" y="7"></rect>
</svg>
</span>
<div className="flex flex-col flex-1 min-w-0">
<div className="text-white text-sm font-medium max-w-full truncate">Build an Interactive site with Wix Studio</div>
<div className="h-1.5 mt-2 bg-neutral-800 rounded-full overflow-hidden w-full">
<div className="bg-gradient-to-r from-cyan-400 to-green-400 h-1.5 rounded-full" style={{width: '60%'}}></div>
</div>
</div>
<div className="text-neutral-300 text-sm font-medium ml-3 whitespace-nowrap shrink-0">$356.67</div>
</div>

<div className="flex items-center gap-3 px-4 py-3">
<span className="bg-amber-500/10 rounded-md flex items-center justify-center w-12 h-8 border border-amber-400/40 shrink-0">
<svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect className="stroke-current" height="6" rx="2" width="18" x="3" y="11"></rect>
<rect className="stroke-current" height="7" rx="2" width="10" x="7" y="7"></rect>
<rect className="stroke-current" height="6" rx="2" width="4" x="10" y="3"></rect>
</svg>
</span>
<div className="flex flex-col flex-1 min-w-0">
<div className="text-white text-sm font-medium max-w-full truncate">Live Q&amp;A: Web Development in 2024</div>
<div className="h-1.5 mt-2 bg-neutral-800 rounded-full overflow-hidden w-full">
<div className="bg-gradient-to-r from-cyan-400 to-green-400 h-1.5 rounded-full" style={{width: '65%'}}></div>
</div>
</div>
<div className="text-neutral-300 text-sm font-medium ml-3 whitespace-nowrap shrink-0">$667.49</div>
</div>
</div>
</div>

    </>
  );
}
