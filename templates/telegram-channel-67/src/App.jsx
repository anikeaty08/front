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
      

<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<main className="relative bg-slate-900/80 backdrop-blur-xl px-6 py-10 md:px-8 rounded-[2rem] w-11/12 max-w-md text-center shadow-2xl shadow-black/50 border border-white/5">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2 bg-gradient-to-r from-[#5ddcff] to-[#ff3b3b] bg-clip-text text-transparent">
            Jalwa Number Sure Shots
        </h1>
<p className="text-sm text-slate-400 mb-8 font-medium">
            Tap to join the official Telegram channel
        </p>
<div className="flex flex-col gap-4">
<a className="group relative flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#ff4d4d] to-[#ff0000] text-white text-sm font-semibold shadow-lg shadow-red-600/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-red-600/40 active:scale-[0.98] border border-white/10 overflow-hidden" href="https://t.me/+W2nfwHkfpgtjMmI1" target="_blank">
<div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<iconify-icon className="text-lg" icon="solar:plain-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                JOIN TELEGRAM CHANNEL 001
            </a>
<a className="group relative flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#ff4d4d] to-[#ff0000] text-white text-sm font-semibold shadow-lg shadow-red-600/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-red-600/40 active:scale-[0.98] border border-white/10 overflow-hidden" href="https://t.me/+W2nfwHkfpgtjMmI1" target="_blank">
<div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<iconify-icon className="text-lg" icon="solar:plain-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                JOIN TELEGRAM CHANNEL 002
            </a>
</div>
<footer className="mt-8 text-xs font-medium text-slate-500">
            Ad setup by 
            <a className="text-[#ff2e2e] hover:text-red-400 hover:underline transition-colors ml-1" href="https://t.me/+W2nfwHkfpgtjMmI1" target="_blank">
                @SONDIP_09
            </a>
</footer>
</main>

    </>
  );
}
