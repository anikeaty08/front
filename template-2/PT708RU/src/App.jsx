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
      
<div className="relative w-[400px] h-[300px] rounded-[10px] p-[1px] bg-custom-outer overflow-hidden">

<div className="star star1"></div>
<div className="star star2"></div>
<div className="star star3"></div>
<div className="star star4"></div>
<div className="star star5"></div>

<div className="relative w-full h-full rounded-[9px] border border-[#172554] bg-custom-card flex flex-col justify-between text-white z-10 px-10 py-7">

<div className="absolute left-0 w-full h-[1px] line-topl pointer-events-none" style={{top: `10%`}}></div>
<div className="absolute left-0 w-full h-[1px] bg-[#334155] pointer-events-none" style={{bottom: `10%`}}></div>
<div className="absolute top-0 h-full w-[1px] line-leftl pointer-events-none" style={{left: `10%`}}></div>
<div className="absolute top-0 h-full w-[1px] bg-[#334155] pointer-events-none" style={{right: `10%`}}></div>

<div className="absolute w-[220px] h-[45px] rounded-full bg-[#38bdf8] opacity-30 shadow-[0_0_50px_#38bdf8] blur-[10px] left-0 top-0 pointer-events-none" style={{transform: `rotate(40deg)`, transformOrigin: `10%`}}></div>

<div className="flex flex-col flex-1 justify-center items-center gap-5 select-none mt-2">

<div className="mb-1">
<svg fill="none" height="44" viewBox="0 0 32 32" width="44" xmlns="http://www.w3.org/2000/svg">
<path d="M0.69116 21.9548C-0.506476 22.7935 -0.284724 24.2384 2.44769 25.1419C5.18011 26.0455 8.35603 26.2323 11.1505 25.729C11.0707 25.729 11.3102 25.729 11.1505 25.729V22.8774L8.43588 23.8C7.39792 24.1355 6.35997 24.2194 5.32202 23.9677C4.5236 23.7161 4.68328 23.2129 5.64139 22.7935L11.1505 20.7806V17.6774L3.48565 20.4452C2.52754 20.7806 1.56943 21.2839 0.69116 21.9548ZM19.2146 9.37419V17.5097C22.4881 19.1871 25.0431 17.5097 25.0431 13.1484C25.0431 8.70323 23.5261 6.69032 19.1348 5.09677C16.8193 4.25806 14.4241 3.50323 12.0288 3V27.2387L17.6178 29V8.61935C17.6178 7.69677 17.6178 7.02581 18.2565 7.27742C19.1348 7.52903 19.2146 8.45161 19.2146 9.37419ZM29.5941 20.0258C27.2787 19.1871 24.8036 18.8516 22.4083 19.1032C21.0779 19.1906 19.8294 19.5869 18.5759 20.0258V23.2968L23.7656 21.2839C24.8036 20.9484 25.8415 20.8645 26.8795 21.1161C27.6779 21.3677 27.5182 21.871 26.5601 22.2903L18.5759 25.3935V28.5806L29.5941 24.3032C30.3925 23.9677 31.1111 23.5484 31.7499 22.8774C32.3088 22.0387 32.0692 20.8645 29.5941 20.0258Z" fill="#38bdf8" fillOpacity="0.8"></path>
</svg>
</div>

<div className="gradient-text font-extrabold text-center text-3xl tracking-wider mb-1">GIFT CARD</div>

<div className="text-blue-200 text-2xl font-bold text-center">$5000</div>
</div>

<div className="absolute text-xs uppercase tracking-widest text-blue-300 font-light pointer-events-none" style={{right: `10%`, bottom: `10%`, paddingRight: `0.5rem`, paddingBottom: `0.5rem`}}>
        EXP. 2028
      </div>
</div>
</div>

    </>
  );
}
