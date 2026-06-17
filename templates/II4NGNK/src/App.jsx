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
      
<div className="card-container flex items-center justify-center min-h-screen">
<div className="glow-card max-w-[330px] w-[94vw] rounded-2xl">
<div className="main-content overflow-hidden flex flex-col bg-[#18181C] border border-[#23232A]/40 shadow-xl shadow-black/20 subtle-outline rounded-2xl">

<div className="relative w-full flex flex-col items-center justify-center bg-[#18181C] border-b border-[#23232A]/30 pt-8 pb-5 px-4">
<div className="flex items-center justify-center h-full mb-3">
<div className="w-[54px] h-[54px] rounded-xl bg-[#22222A] flex items-center justify-center border border-[#36384a]/30 shadow-sm subtle-outline">
<svg className="w-8 h-8 text-[#8E8EA0]" fill="none" viewbox="0 0 32 32">
<rect fill="currentColor" height="4" rx="2" width="24" x="4" y="8"></rect>
<rect fill="currentColor" height="4" opacity=".6" rx="2" width="16" x="4" y="16"></rect>
<rect fill="currentColor" height="4" opacity=".3" rx="2" width="8" x="4" y="24"></rect>
</svg>
</div>
</div>
<div className="text-[#eaeaea] text-base font-medium text-center max-w-[210px] leading-snug">
            Welcome! A quick setup to get you started.
          </div>
</div>

<div className="px-5 pt-5 pb-1">
<div className="grid grid-cols-2 grid-rows-2 gap-3">

<div className="cell cell-1 flex flex-col items-center bg-[#23232A] rounded-lg py-5 px-2 shadow-xs hover:bg-[#23232a]/70 transition cursor-pointer border subtle-outline-inner subtle-outline">
<div className="w-8 h-8 rounded-md bg-[#22222A] flex items-center justify-center mb-2 border subtle-outline-inner subtle-outline">
<svg className="w-4.5 h-4.5 text-[#8E8EA0]" fill="none" viewbox="0 0 20 20">
<rect fill="currentColor" fillOpacity="0.13" height="20" rx="4" width="20"></rect>
<path d="M6 9.5l3 3 5-5" stroke="#A1A1AA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7"></path>
</svg>
</div>
<span className="text-[13px] text-[#eaeaea] font-medium mt-1">Create Account</span>
</div>

<div className="cell cell-2 flex flex-col items-center bg-[#23232A] rounded-lg py-5 px-2 shadow-xs hover:bg-[#23232a]/70 transition cursor-pointer border subtle-outline-inner subtle-outline">
<div className="w-8 h-8 rounded-md bg-[#22222A] flex items-center justify-center mb-2 border subtle-outline-inner subtle-outline">
<svg className="w-4.5 h-4.5 text-[#8E8EA0]" fill="none" viewbox="0 0 20 20">
<circle cx="10" cy="10" r="8" stroke="#A1A1AA" strokeWidth="1.7"></circle>
<path d="M6.5 10.5l2 2 4-4" stroke="#A1A1AA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-[13px] text-[#eaeaea] font-medium mt-1">Verify Email</span>
</div>

<div className="cell cell-3 flex flex-col items-center bg-[#23232A] rounded-lg py-5 px-2 shadow-xs hover:bg-[#23232a]/70 transition cursor-pointer border subtle-outline-inner subtle-outline">
<div className="w-8 h-8 rounded-md bg-[#22222A] flex items-center justify-center mb-2 border subtle-outline-inner subtle-outline">
<svg className="w-4.5 h-4.5 text-[#8E8EA0]" fill="none" viewbox="0 0 20 20">
<rect height="6" rx="2" stroke="#A1A1AA" strokeWidth="1.7" width="13" x="3.5" y="7"></rect>
<path d="M7 10h6" stroke="#A1A1AA" strokeLinecap="round" strokeWidth="1.4"></path>
</svg>
</div>
<span className="text-[13px] text-[#eaeaea] font-medium mt-1">Set Password</span>
</div>

<div className="cell cell-4 flex flex-col items-center bg-[#23232A] rounded-lg py-5 px-2 shadow-xs hover:bg-[#23232a]/70 transition cursor-pointer border subtle-outline-inner subtle-outline">
<div className="w-8 h-8 rounded-md bg-[#22222A] flex items-center justify-center mb-2 border subtle-outline-inner subtle-outline">
<svg className="w-4.5 h-4.5 text-[#8E8EA0]" fill="none" viewbox="0 0 20 20">
<rect height="8" rx="2" stroke="#A1A1AA" strokeWidth="1.7" width="8" x="6" y="6"></rect>
<path d="M10 8v4" stroke="#A1A1AA" strokeLinecap="round" strokeWidth="1.4"></path>
<path d="M12 10h-4" stroke="#A1A1AA" strokeLinecap="round" strokeWidth="1.4"></path>
</svg>
</div>
<span className="text-[13px] text-[#eaeaea] font-medium mt-1">Personalize</span>
</div>
</div>
</div>

<div className="flex items-center justify-center space-x-2 mt-6 mb-1">
<div className="progress-dot w-2.5 h-2.5 rounded-full bg-[#8E8EA0]"></div>
<div className="progress-dot w-2 h-2 rounded-full bg-[#353542]"></div>
<div className="progress-dot w-2 h-2 rounded-full bg-[#353542]"></div>
</div>

<div className="px-5 pb-5 pt-1">
<button className="w-full rounded-lg py-3 flex items-center justify-center bg-[#29292F] text-[#EAEAEA] text-sm font-medium border border-[#23232A]/40 shadow hover:bg-[#32323a] transition">
            Continue
          </button>
</div>
</div>
</div>
</div>

    </>
  );
}
