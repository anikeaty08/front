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
      

<div className="fixed top-0 inset-x-0 h-screen overflow-hidden pointer-events-none z-0">
<div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-full max-w-3xl aspect-square bg-[#CC9A18]/5 rounded-full blur-[120px]"></div>
</div>

<main className="relative z-10 flex-grow flex items-center justify-center p-6 sm:p-12 md:p-24">
<div className="w-full max-w-3xl flex flex-col items-center text-center">

<a className="mb-16 group flex flex-col items-center gap-2" href="https://emergeusconference.com/">
<div className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center group-hover:border-[#CC9A18]/40 transition-colors duration-500">
<span className="text-lg font-medium tracking-tighter text-zinc-200">EU</span>
</div>
</a>

<iconify-icon className="text-[#CC9A18] text-5xl sm:text-6xl mb-8" icon="solar:diploma-verified-linear" style={{strokeWidth: '1.5'}}></iconify-icon>

<div className="space-y-6 mb-12">
<span className="text-xs sm:text-sm font-light tracking-[0.25em] text-[#CC9A18] uppercase">
                    Awards Ceremony
                </span>
<h1 className="text-4xl sm:text-5xl md:text-6xl text-zinc-50 font-normal tracking-tight leading-tight" style={{fontFamily: 'Georgia, serif'}}>
                    LIFETIME PhD GRADUATION
                </h1>
<a className="inline-flex items-center gap-2 text-xs sm:text-sm text-zinc-500 hover:text-[#CC9A18] transition-colors duration-300 border-b border-transparent hover:border-[#CC9A18]/30 pb-1 mt-4 group" href="https://www.EmergeUsConference.com/lphd-graduation" rel="noopener noreferrer" target="_blank">
                    EmergeUsConference.com/lphd-graduation
                    <iconify-icon className="text-base opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="w-full relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/20 backdrop-blur-md p-8 sm:p-12 md:p-16">

<div className="absolute inset-0 bg-gradient-to-b from-zinc-800/10 to-transparent pointer-events-none"></div>
<div className="relative z-10 space-y-12">
<p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                        During the awards ceremony, distinguished leaders will receive the <span className="text-zinc-200 font-normal">Lifetime PhD (LPhD)</span> conferred by:
                    </p>

<div className="py-10 relative">
<div className="absolute inset-x-8 sm:inset-x-24 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#CC9A18]/40 to-transparent"></div>
<div className="space-y-3">
<h2 className="text-2xl sm:text-3xl md:text-4xl text-zinc-100 tracking-tight font-normal" style={{fontFamily: 'Georgia, serif'}}>
                                THE B.L.A.C.K.W.O.O.D
                            </h2>
<p className="text-xs sm:text-sm text-[#CC9A18] font-light tracking-[0.2em] uppercase">
                                Worldwide Institute of Change
                            </p>
</div>
<div className="absolute inset-x-8 sm:inset-x-24 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#CC9A18]/40 to-transparent"></div>
</div>
<p className="text-sm sm:text-base text-zinc-500 font-light leading-relaxed max-w-xl mx-auto">
                        This recognition honors individuals whose life work reflects exceptional dedication to <span className="text-zinc-300">leadership</span>, <span className="text-zinc-300">education</span>, and <span className="text-zinc-300">humanitarian service</span>.
                    </p>
</div>
</div>
</div>
</main>

    </>
  );
}
