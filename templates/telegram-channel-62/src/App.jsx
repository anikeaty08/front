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
      

<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[400px] bg-gradient-to-tr from-blue-500/20 to-purple-600/20 blur-[100px] rounded-full pointer-events-none z-0"></div>

<main className="w-full max-w-md bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center shadow-[0_8px_40px_rgba(0,0,0,0.4)] relative z-10 transition-transform duration-500 hover:scale-[1.01]">

<div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-inner relative overflow-hidden">
<div className="absolute inset-0 bg-blue-500/10 blur-xl"></div>
<iconify-icon className="text-3xl sm:text-4xl text-blue-400 relative z-10" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>

<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight bg-gradient-to-r from-blue-300 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
            Sondip Number Sure Shots
        </h1>
<p className="text-sm sm:text-base text-gray-400 mb-10 font-normal">
            Tap to join the official Telegram channel
        </p>

<div className="flex flex-col gap-5 w-full">

<div className="relative group w-full">

<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-500"></div>

<a className="relative flex items-center justify-center w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 rounded-2xl text-white font-medium text-sm sm:text-base tracking-wide transition-all duration-300 active:scale-[0.98] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]" href="https://t.me/+W2nfwHkfpgtjMmI1" rel="noopener noreferrer" target="_blank">
<iconify-icon className="mr-2 text-lg" icon="solar:link-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    JOIN TELEGRAM CHANNEL 001
                </a>
</div>

<div className="relative group w-full">

<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-500"></div>

<a className="relative flex items-center justify-center w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 rounded-2xl text-white font-medium text-sm sm:text-base tracking-wide transition-all duration-300 active:scale-[0.98] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]" href="https://t.me/+W2nfwHkfpgtjMmI1" rel="noopener noreferrer" target="_blank">
<iconify-icon className="mr-2 text-lg" icon="solar:link-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    JOIN TELEGRAM CHANNEL 002
                </a>
</div>
</div>
</main>

<footer className="mt-8 relative z-10">
<p className="text-xs text-gray-500 font-normal tracking-wide flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
            Ad setup by @sondip_09
        </p>
</footer>

    </>
  );
}
