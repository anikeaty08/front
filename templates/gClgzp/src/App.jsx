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
      
<div className="relative bg-gradient-to-br from-white/90 via-white/80 to-white/80 rounded-[40px] shadow-2xl max-w-sm w-full py-6 px-1 border border-white/20">

<div className="flex justify-between items-center px-4 py-2">
<button className="w-9 h-9 rounded-full bg-white/50 border border-black/15 flex items-center justify-center shadow-sm">

<svg fill="none" height="24" stroke="black" strokeLinecap="round" stroke-opacity="0.7" strokeWidth="1.5" width="24">
<line x1="4" x2="20" y1="8" y2="8"></line>
<line x1="4" x2="20" y1="16" y2="16"></line>
</svg>
</button>
<span className="font-bold text-2xl text-black tracking-tight select-none">Aiko</span>
<button className="w-9 h-9 rounded-full bg-neutral-900/10 flex items-center justify-center relative">

<span className="absolute inset-0 rounded-full bg-black/10"></span>
<svg className="relative z-10" fill="none" height="24" viewbox="0 0 24 24" width="24">
<circle cx="8" cy="12" fill="#000" r="2"></circle>
<circle cx="12" cy="12" fill="#000" r="2"></circle>
<circle cx="16" cy="12" fill="#000" r="2"></circle>
</svg>
</button>
</div>

<div className="px-4 pt-6 pb-2">
<h1 className="font-bold text-[34px] leading-[1.18] tracking-tight text-center text-black">
        Where your imagination<br/>can create
      </h1>
</div>

<div className="mt-8 mb-6 px-4 flex flex-col gap-6">

<div className="flex gap-6">

<div className="flex-1 min-w-0 bg-white/70 rounded-xl shadow-md px-3 py-5 flex gap-3 items-center">

<svg fill="none" height="24" viewbox="0 0 24 24" width="24">
<rect fill="#A259FF" height="6" rx="3" width="6" x="6" y="2"></rect>
<rect fill="#F24E1E" height="6" rx="3" width="6" x="12" y="2"></rect>
<rect fill="#FF7262" height="6" rx="3" width="6" x="6" y="8"></rect>
<rect fill="#1ABCFE" height="6" rx="3" width="6" x="12" y="8"></rect>
<rect fill="#0ACF83" height="6" rx="3" width="6" x="6" y="14"></rect>
</svg>
<div>
<p className="text-xs font-medium text-black/70 mb-1">Master UI design techniques now</p>
</div>
</div>

<div className="w-px bg-gradient-to-b from-white/0 via-black/10 to-white/0 rounded-full my-2"></div>

<div className="flex-1 min-w-0 bg-white/70 rounded-xl shadow-md px-3 py-5 flex gap-3 items-center">

<svg fill="none" height="24" viewbox="0 0 24 24" width="24">
<rect fill="#A259FF" height="6" rx="3" width="6" x="6" y="2"></rect>
<rect fill="#F24E1E" height="6" rx="3" width="6" x="12" y="2"></rect>
<rect fill="#FF7262" height="6" rx="3" width="6" x="6" y="8"></rect>
<rect fill="#1ABCFE" height="6" rx="3" width="6" x="12" y="8"></rect>
<rect fill="#0ACF83" height="6" rx="3" width="6" x="6" y="14"></rect>
</svg>
<div>
<p className="text-xs font-medium text-black/70 mb-1">Explore dynamic animations in Figma</p>
</div>
</div>
</div>

<div className="flex gap-6">

<div className="flex-1 min-w-0 bg-white/70 rounded-xl shadow-md px-3 py-5 flex gap-3 items-center">

<svg fill="none" height="24" viewbox="0 0 24 24" width="24">
<ellipse cx="12" cy="12" fill="#2196f3" rx="10" ry="9"></ellipse>
<path d="M8,16Q11,7 16,16" fill="none" stroke="white" strokeWidth="2"></path>
</svg>
<div>
<p className="text-xs font-medium text-black/70 mb-1">Learn new programming languages</p>
</div>
</div>

<div className="w-px bg-gradient-to-b from-white/0 via-black/10 to-white/0 rounded-full my-2"></div>

<div className="flex-1 min-w-0 bg-white/70 rounded-xl shadow-md px-3 py-5 flex gap-3 items-center">

<svg fill="none" height="24" viewbox="0 0 24 24" width="24">
<ellipse cx="12" cy="12" fill="none" rx="9" ry="7" stroke="#1ABCFE" strokeWidth="2"></ellipse>
<ellipse cx="12" cy="12" fill="none" rx="7" ry="9" stroke="#1ABCFE" strokeWidth="2"></ellipse>
<circle cx="12" cy="12" fill="#1ABCFE" r="2.5"></circle>
</svg>
<div>
<p className="text-xs font-medium text-black/70 mb-1">Debug smarter, not harder</p>
</div>
</div>
</div>
</div>

<div className="fixed left-1/2 bottom-24 -translate-x-1/2 z-20 w-[90%] max-w-[360px] mx-auto">
<div className="flex items-center justify-between px-4 py-3 rounded-[30px] border-2 border-white shadow-lg bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 gap-2">

<button className="w-7 h-7 flex items-center justify-center">
<svg fill="none" height="24" stroke="black" strokeLinecap="round" stroke-opacity="0.5" strokeWidth="1.5" width="24">
<line x1="12" x2="12" y1="5" y2="19"></line>
<line x1="5" x2="19" y1="12" y2="12"></line>
</svg>
</button>
<span className="text-base text-black/50 mx-2 flex-1 select-none text-center">Ask Aiko...</span>

<button className="w-7 h-7 flex items-center justify-center">
<svg fill="none" height="20" stroke="black" strokeLinecap="round" stroke-opacity="0.5" strokeWidth="1.5" width="20">
<line x1="10" x2="10" y1="3" y2="17"></line>
<line x1="6" x2="6" y1="6" y2="14"></line>
<line x1="14" x2="14" y1="6" y2="14"></line>
<line x1="3" x2="17" y1="10" y2="10"></line>
<line x1="8" x2="8" y1="8" y2="12"></line>
<line x1="12" x2="12" y1="8" y2="12"></line>
</svg>
</button>
</div>
</div>

<div className="fixed left-1/2 bottom-4 -translate-x-1/2 w-[97%] max-w-[390px] mx-auto z-30">
<div className="bg-white/80 border border-black/10 backdrop-blur-md rounded-[30px] flex items-center justify-between px-4 py-2 gap-4 shadow-md">
<button className="w-12 h-12 flex items-center justify-center">

<svg fill="none" height="24" stroke="black" strokeWidth="1.5" width="24">
<rect height="9" rx="4.5" width="16" x="4" y="10"></rect>
<circle cx="12" cy="14" r="1"></circle>
</svg>
</button>
<button className="w-12 h-12 flex items-center justify-center">

<svg fill="none" height="24" stroke="black" strokeWidth="1.5" width="24">
<rect height="16" rx="4" width="16" x="4" y="4"></rect>
<line x1="8" x2="16" y1="9" y2="9"></line>
<line x1="8" x2="16" y1="12" y2="12"></line>
<line x1="8" x2="16" y1="15" y2="15"></line>
</svg>
</button>
<button className="w-12 h-12 flex items-center justify-center">

<svg fill="none" height="24" stroke="black" strokeWidth="1.5" width="24">
<rect height="14" rx="5" width="16" x="4" y="4"></rect>
<path d="M8 18L4 22"></path>
</svg>
</button>
<button className="w-12 h-12 flex items-center justify-center">

<svg fill="none" height="24" stroke="black" strokeWidth="1.5" width="24">
<rect height="16" rx="3" width="6" x="5" y="4"></rect>
<rect height="16" rx="3" width="6" x="13" y="4"></rect>
<line x1="8" x2="8" y1="4" y2="20"></line>
<line x1="16" x2="16" y1="4" y2="20"></line>
</svg>
</button>
</div>
</div>
</div>

    </>
  );
}
