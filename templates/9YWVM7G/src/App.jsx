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



    // Animate glowing gradient on iPhone outline
    document.addEventListener('DOMContentLoaded', function () {
      const grad = document.getElementById('glowGrad');
      if (!grad) return;
      let angle = 0;
      function animateGrad() {
        angle = (angle + 1) % 360;
        const x1 = 50 + 45 * Math.cos(angle * Math.PI / 180);
        const y1 = 50 + 45 * Math.sin(angle * Math.PI / 180);
        const x2 = 50 + 45 * Math.cos((angle + 180) * Math.PI / 180);
        const y2 = 50 + 45 * Math.sin((angle + 180) * Math.PI / 180);
        grad.setAttribute('x1', `${x1}%`);
        grad.setAttribute('y1', `${y1}%`);
        grad.setAttribute('x2', `${x2}%`);
        grad.setAttribute('y2', `${y2}%`);
        requestAnimationFrame(animateGrad);
      }
      animateGrad();
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
      
<div className="card-container relative">
<div className="max-w-[320px] min-w-[230px] w-[296px] rounded-[28px] overflow-hidden flex flex-col bg-[#191b22] border border-white/10 shadow-xl shadow-black/30 relative">

<div className="relative w-full h-[210px] overflow-hidden bg-gradient-to-b from-[#20223a] to-[#191b22] flex items-center justify-center">
<div className="relative w-[184px]">

<div className="phone-body absolute w-[184px] h-[372px] rounded-[36px] top-[-85px] left-0 bg-gradient-to-br from-white/10 to-white/5 border border-white/15 shadow-lg"></div>

<div className="screen-shape absolute top-[-76px] left-[8px] w-[168px] h-[348px] rounded-[28px] bg-gradient-to-b from-[#292b3a] to-[#191b22] border border-white/10 z-10">

<div className="screen-content w-full h-full rounded-[24px] overflow-hidden bg-gradient-to-br from-[#3B4058] to-[#212234] flex flex-col items-center justify-center px-5 pt-8 pb-6 select-none">

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
<div className="blob blob-1"></div>
<div className="blob blob-2"></div>
</div>

<div className="relative z-10 flex flex-col items-center justify-center">
<svg className="mb-2" fill="none" height="70" viewbox="0 0 80 80" width="70">
<circle cx="40" cy="40" fill="#4D7CFE" fillOpacity="0.12" r="36"></circle>
<rect fill="#4D7CFE" height="28" rx="8" width="32" x="24" y="34"></rect>
<rect fill="#fff" fillOpacity="0.95" height="18" rx="6" width="14" x="33" y="25"></rect>
<circle cx="40" cy="52" fill="#fff" fillOpacity="0.7" r="3"></circle>
<rect fill="#fff" fillOpacity="0.9" height="7" rx="2" width="4" x="38" y="39"></rect>
</svg>
<div className="mt-1 text-white/90 text-base font-medium text-center">Welcome!</div>
</div>

<div className="flex items-center justify-center mt-4 space-x-2 z-10">
<span className="inline-block w-2 h-2 bg-[#4D7CFE] rounded-full"></span>
<span className="inline-block w-2 h-2 bg-white/30 rounded-full"></span>
<span className="inline-block w-2 h-2 bg-white/30 rounded-full"></span>
</div>
</div>
</div>

<svg className="absolute top-[-85px] left-0 w-[184px] h-[372px] z-30 pointer-events-none" viewbox="0 0 184 372" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="glowGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(77,124,254,0)"></stop>
<stop offset="35%" stop-color="rgba(77,124,254,0.14)"></stop>
<stop offset="48%" stop-color="rgba(77,124,254,0.7)"></stop>
<stop offset="50%" stop-color="rgba(77,124,254,1)"></stop>
<stop offset="52%" stop-color="rgba(77,124,254,0.7)"></stop>
<stop offset="70%" stop-color="rgba(77,124,254,0.12)"></stop>
<stop offset="100%" stop-color="rgba(77,124,254,0)"></stop>
</lineargradient>
</defs>
<path className="phone-path" d="M 30,2 H 154 C 169,2 182,15 182,30 V 342 C 182,357 169,370 154,370 H 30 C 15,370 2,357 2,342 V 30 C 2,15 15,2 30,2 Z" fill="none" filter="drop-shadow(0 0 5px rgba(77,124,254,0.23))" stroke="url(#glowGrad)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</div>
<div className="absolute bottom-0 left-0 right-0 h-[50px] bg-gradient-to-t from-[#191b22] to-transparent"></div>
</div>

<div className="flex flex-col items-center px-6 pt-6 pb-8 space-y-6 bg-[#191b22] border-t border-white/5">
<div className="onboard-text flex flex-col items-center space-y-2">
<h3 className="text-white text-xl font-semibold text-center leading-tight">Let's get started!</h3>
<p className="text-white text-sm opacity-75 text-center leading-snug max-w-xs">
            Discover features, personalize your experience, and unlock your full potential with our guided onboarding.
          </p>
</div>
<div className="actions w-full flex flex-col gap-2">
<button className="w-full rounded-xl py-3 flex items-center justify-center bg-gradient-to-r from-[#4D7CFE] to-[#3361D8] shadow-lg shadow-blue-900/20 hover:from-[#5A89FF] hover:to-[#3D6BE0] transition-all duration-300">
<span className="text-white text-base font-semibold">Continue</span>
</button>
<button className="w-full rounded-xl py-3 flex items-center justify-center border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200">
<span className="text-white/80 text-base font-medium">Skip</span>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
