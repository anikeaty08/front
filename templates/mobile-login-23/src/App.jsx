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
      

<main className="relative w-full max-w-md h-[100dvh] sm:h-[844px] sm:max-h-[90vh] bg-[#FFFFFF] sm:rounded-[40px] sm:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col ring-1 ring-slate-900/5">

<div className="flex-1 flex flex-col px-6 pt-14 pb-8">

<header className="flex justify-center mb-16">
<span className="text-xl font-semibold tracking-tighter text-slate-900 uppercase">
                    KOLI
                </span>
</header>

<div className="mb-8">
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">
                    Log in or sign up
                </h1>
<p className="text-sm font-normal text-slate-500">
                    Enter your phone number to proceed.
                </p>
</div>

<div className="relative flex items-center w-full h-14 rounded-[24px] border border-slate-200 bg-white px-4 mb-5 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500 transition-all shadow-sm">

<button className="flex items-center gap-1.5 pr-3 border-r border-slate-100 mr-3 hover:opacity-80 transition-opacity" type="button">
<span className="text-sm font-medium text-slate-600">+1</span>
<iconify-icon className="text-slate-400 text-base" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>

<input className="flex-1 h-full bg-transparent outline-none text-sm font-medium text-slate-900 placeholder:text-slate-400" placeholder="Phone Number" type="tel"/>
</div>

<button className="w-full h-14 rounded-[24px] bg-gradient-to-r from-purple-600 to-orange-500 text-white text-sm font-medium flex items-center justify-center transition-transform hover:opacity-95 active:scale-[0.98] shadow-sm">
                Continue
            </button>

<div className="flex items-center my-8">
<div className="flex-1 h-px bg-slate-100"></div>
<span className="px-4 text-sm font-normal text-slate-400">or</span>
<div className="flex-1 h-px bg-slate-100"></div>
</div>

<div className="flex flex-col gap-4">

<button className="w-full h-14 rounded-[24px] border border-slate-200 bg-white text-slate-800 text-sm font-medium flex items-center justify-center gap-3 hover:bg-slate-50 transition-colors active:scale-[0.98] shadow-sm">
<iconify-icon className="text-lg" icon="logos:google-icon"></iconify-icon>
                    Continue with Google
                </button>

<button className="w-full h-14 rounded-[24px] border border-slate-200 bg-white text-slate-800 text-sm font-medium flex items-center justify-center gap-3 hover:bg-slate-50 transition-colors active:scale-[0.98] shadow-sm">
<iconify-icon className="text-2xl text-slate-900" icon="ic:baseline-apple"></iconify-icon>
                    Continue with Apple
                </button>
</div>

<div className="mt-auto pt-6 flex flex-col items-center gap-6">

<p className="text-xs font-normal text-slate-400 text-center leading-relaxed">
                    By continuing, you agree to our <br/>
<a className="text-slate-900 font-medium underline underline-offset-2 hover:opacity-80" href="#">Terms of Service</a>, <a className="text-slate-900 font-medium underline underline-offset-2 hover:opacity-80" href="#">Privacy Policy</a>, and <a className="text-slate-900 font-medium underline underline-offset-2 hover:opacity-80" href="#">Cookie Policy</a>.
                </p>

<button className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">
<iconify-icon className="text-base" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    United States
                    <iconify-icon className="text-base" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</main>

    </>
  );
}
