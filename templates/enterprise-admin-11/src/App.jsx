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
      

<header className="p-6 border-b flex items-center w-full border-white/10">
<div className="font-medium tracking-tighter text-lg text-white">VO</div>
</header>

<main className="flex-1 w-full max-w-md mx-auto p-6 flex flex-col justify-center pb-20">

<div className="mb-10 text-center">
<h1 className="text-3xl font-medium tracking-tight mb-3 text-white">
          Voice Order
        </h1>
<p className="text-sm font-normal leading-relaxed text-white/60">
          Click on component below to start recording order.
        </p>
</div>

<div className="w-full bg-[#FFFFFF] border border-[#0D2B63]/10 p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_4px_40px_-10px_rgba(13,43,99,0.05)] mb-8">

<div className="absolute w-36 h-36 bg-[#004F9F]/5 animate-ping" style={{animationDuration: '3s'}}></div>
<div className="absolute w-24 h-24 bg-[#004F9F]/10 animate-ping" style={{animationDuration: '2s', animationDelay: '0.5s'}}></div>

<button className="relative z-10 w-20 h-20 bg-[#004F9F] text-[#FFFFFF] flex items-center justify-center shadow-lg shadow-[#004F9F]/20 transition-transform active:scale-95 group">
<iconify-icon height="32" icon="solar:microphone-2-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</button>

<div className="mt-8 flex items-center gap-4 relative z-10">
<div className="flex items-center gap-2 bg-[#0D2B63]/5 px-4 py-2 border border-[#0D2B63]/5">
<div className="w-2 h-2 bg-red-500 animate-pulse"></div>
<span className="text-sm font-medium text-[#0D2B63] tracking-wide w-12 text-center">
              00:14
            </span>
</div>
<button className="flex items-center gap-1.5 text-xs font-medium text-[#0D2B63]/60 hover:text-[#0D2B63] bg-[#FFFFFF] px-4 py-2 border border-[#0D2B63]/10 shadow-sm transition-colors">
<iconify-icon height="18" icon="solar:stop-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
            Stop
          </button>
</div>
</div>

<div className="w-full flex flex-col gap-3 mb-10">
<h2 className="text-xs font-medium uppercase tracking-widest px-2 text-white/40">
          Recorded Order
        </h2>
<div className="bg-[#FFFFFF] border border-[#0D2B63]/10 p-3.5 flex items-center gap-4 shadow-sm hover:border-[#0D2B63]/20 transition-colors group">

<button className="w-10 h-10 shrink-0 bg-[#004F9F] text-[#FFFFFF] flex items-center justify-center shadow-md shadow-[#004F9F]/20 transition-transform active:scale-95">
<iconify-icon height="20" icon="solar:play-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>

<div className="flex-1 flex items-end gap-[3px] h-8 pt-1">

<div className="w-1 bg-[#004F9F]" style={{height: '30%'}}></div>
<div className="w-1 bg-[#004F9F]" style={{height: '60%'}}></div>
<div className="w-1 bg-[#004F9F]" style={{height: '100%'}}></div>
<div className="w-1 bg-[#004F9F]" style={{height: '80%'}}></div>
<div className="w-1 bg-[#004F9F]" style={{height: '40%'}}></div>
<div className="w-1 bg-[#004F9F]" style={{height: '70%'}}></div>

<div className="w-1 bg-[#0D2B63]/10" style={{height: '90%'}}></div>
<div className="w-1 bg-[#0D2B63]/10" style={{height: '50%'}}></div>
<div className="w-1 bg-[#0D2B63]/10" style={{height: '30%'}}></div>
<div className="w-1 bg-[#0D2B63]/10" style={{height: '60%'}}></div>
<div className="w-1 bg-[#0D2B63]/10" style={{height: '100%'}}></div>
<div className="w-1 bg-[#0D2B63]/10" style={{height: '80%'}}></div>
<div className="w-1 bg-[#0D2B63]/10" style={{height: '40%'}}></div>
<div className="w-1 bg-[#0D2B63]/10" style={{height: '70%'}}></div>
<div className="w-1 bg-[#0D2B63]/10" style={{height: '50%'}}></div>
<div className="w-1 bg-[#0D2B63]/10" style={{height: '90%'}}></div>
<div className="w-1 bg-[#0D2B63]/10" style={{height: '60%'}}></div>
<div className="w-1 bg-[#0D2B63]/10" style={{height: '30%'}}></div>
</div>

<div className="text-xs font-medium text-[#0D2B63]/60 tracking-wide shrink-0">
            01:23
          </div>

<button className="shrink-0 w-8 h-8 flex items-center justify-center text-[#0D2B63]/30 hover:text-red-500 hover:bg-red-50 transition-colors">
<iconify-icon height="18" icon="solar:trash-bin-trash-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>

<button className="w-full py-4 px-6 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 group mt-auto bg-white hover:bg-gray-50 text-[#0e2b63] shadow-[0_8px_30px_-8px_rgba(0,0,0,0.2)]">
<span>Apply Audio &amp; Start Creation</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</main>

    </>
  );
}
