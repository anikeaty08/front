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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="relative z-10 flex flex-col items-center justify-center p-10">

<div className="relative w-[320px] h-[320px] flex items-center justify-center">

<div className="absolute inset-0 pointer-events-none opacity-40">
<div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-gray-600 rounded-tl-sm"></div>
<div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-gray-600 rounded-tr-sm"></div>
<div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-gray-600 rounded-bl-sm"></div>
<div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-gray-600 rounded-br-sm"></div>
</div>

<svg fill="none" height="220" viewbox="0 0 200 200" width="220" xmlns="http://www.w3.org/2000/svg">
<defs>
<clippath id="square-mask">
<rect height="100" width="100" x="50" y="50"></rect>
</clippath>

<pattern height="4" id="lines-pattern" patternunits="userSpaceOnUse" width="10" x="0" y="0">
<rect fill="#FFD60A" fillOpacity="1" height="1" width="10" y="2"></rect>
</pattern>
</defs>

<rect fill="#FFD60A" fillOpacity="0.05" height="100" width="100" x="50" y="50"></rect>

<g clipPath="url(#square-mask)">

<rect className="fill-pulse" fill="url(#lines-pattern)" height="200" width="200" x="0" y="0"></rect>

<line className="shadow-[0_0_10px_white]" stroke="#fff7cc" strokeWidth="2" x1="0" x2="200" y1="50" y2="50"></line>
</g>

<rect className="error-glitch shadow-[0_0_15px_#FFD60A]" fill="none" height="100" stroke="#FFD60A" strokeWidth="2" width="100" x="50" y="50"></rect>


<path className="z-20 relative backdrop-blur-sm" d="M100 75 V110" stroke="#080d00" strokeLinecap="butt" stroke-opacity="0.6" strokeWidth="10"></path>

<rect className="z-20 relative backdrop-blur-sm" fill="#080d00" fillOpacity="0.6" height="10" width="10" x="95" y="120"></rect>

<circle cx="50" cy="50" fill="#fff" r="2"></circle>
<circle cx="150" cy="50" fill="#FFD60A" r="2"></circle>
<circle cx="150" cy="150" fill="#FFD60A" r="2"></circle>
<circle cx="50" cy="150" fill="#FFD60A" r="2"></circle>

<path d="M10 100 H20 M180 100 H190 M100 10 V20 M100 180 V190" stroke="#525252" strokeWidth="1"></path>
</svg>
</div>

<div className="mt-4 flex flex-col items-center gap-2">
<p className="font-mono text-[10px] tracking-[0.2em] text-[#FFD60A] font-semibold animate-pulse">CAPACITY_FULL</p>

<div className="flex gap-1.5 opacity-60">
<div className="w-1 h-1 rounded-full bg-[#FFD60A]"></div>
<div className="w-1 h-1 rounded-full bg-[#FFD60A]"></div>
<div className="w-1 h-1 rounded-full bg-[#FFD60A]"></div>
</div>
<p className="text-[10px] text-gray-500 tracking-tight font-mono mt-2">THRESHOLD LIMIT REACHED</p>
</div>
</div>

    </>
  );
}
