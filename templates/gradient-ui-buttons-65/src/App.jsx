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
      
<div className="flex flex-col gap-8 w-full max-w-xs">

<button className="group relative w-full h-[72px] rounded-full bg-gradient-to-r from-[#d62df6] via-[#f75d9e] to-[#ff9838] p-2 pl-8 pr-2 flex items-center justify-between shadow-xl shadow-pink-500/25 transition-transform duration-300 hover:scale-[1.02] hover:shadow-pink-500/35 active:scale-[0.98]">
<span className="text-white font-medium tracking-widest text-sm uppercase">Share Now</span>
<div className="h-14 w-[72px] bg-white rounded-full flex items-center justify-center text-[#ff9838]">
<i className="w-6 h-6 stroke-[2]" data-lucide="square-arrow-out-up-right"></i>
</div>
</button>

<button className="group relative w-full h-[72px] rounded-full bg-gradient-to-r from-[#f01e74] to-[#ff7b7b] p-2 pl-8 pr-2 flex items-center justify-between shadow-xl shadow-rose-500/25 transition-transform duration-300 hover:scale-[1.02] hover:shadow-rose-500/35 active:scale-[0.98]">
<span className="text-white font-medium tracking-widest text-sm uppercase">Play Now</span>
<div className="h-14 w-[72px] bg-white rounded-full flex items-center justify-center text-[#f01e74]">

<i className="w-6 h-6 stroke-[1.5] fill-current ml-1" data-lucide="play"></i>
</div>
</button>

<button className="group relative w-full h-[72px] rounded-full bg-gradient-to-r from-[#1c77f0] to-[#b640f7] p-2 pl-8 pr-2 flex items-center justify-between shadow-xl shadow-indigo-500/25 transition-transform duration-300 hover:scale-[1.02] hover:shadow-indigo-500/35 active:scale-[0.98]">
<span className="text-white font-medium tracking-widest text-sm uppercase">Rate Now</span>
<div className="h-14 w-[72px] bg-white rounded-full flex items-center justify-center text-[#8e52f5]">
<i className="w-6 h-6 stroke-[1.5] fill-current" data-lucide="star"></i>
</div>
</button>

<button className="group relative w-full h-[72px] rounded-full bg-gradient-to-r from-[#007aff] to-[#2acbf7] p-2 pl-8 pr-2 flex items-center justify-between shadow-xl shadow-blue-500/25 transition-transform duration-300 hover:scale-[1.02] hover:shadow-blue-500/35 active:scale-[0.98]">
<span className="text-white font-medium tracking-widest text-sm uppercase">Donate</span>
<div className="h-14 w-[72px] bg-white rounded-full flex items-center justify-center text-[#008cff]">
<i className="w-7 h-7 stroke-[1.5] fill-current opacity-90" data-lucide="heart-handshake"></i>
</div>
</button>
</div>


    </>
  );
}
