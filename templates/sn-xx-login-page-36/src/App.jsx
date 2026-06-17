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
      

<div className="absolute top-0 left-0 w-full h-64 overflow-hidden pointer-events-none z-0">
<div className="absolute top-0 left-1/2 w-full max-w-lg h-32 bg-[#FF5700] rounded-full blur-[100px] opacity-[0.15] -translate-x-1/2 -translate-y-1/2"></div>
</div>

<main className="relative z-10 w-full max-w-md px-6 pt-8 flex flex-col gap-10">

<nav className="flex items-center justify-between w-full">
<button className="text-zinc-400 hover:text-white transition-colors p-2 -ml-2 rounded-full hover:bg-white/5 group">
<iconify-icon height="24" icon="solar:arrow-left-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="font-semibold tracking-tighter text-lg absolute left-1/2 -translate-x-1/2">
                Snäxx
            </div>
<div className="w-8"></div> 
</nav>

<div className="flex flex-col items-start gap-3 mt-4">
<h1 className="text-3xl font-semibold tracking-tight text-white">
                Forgot Password?
            </h1>
<p className="text-zinc-400 text-sm font-light leading-relaxed">
                Enter your email address and we'll send you a link to reset your password.
            </p>
</div>

<form className="w-full flex flex-col gap-8" onsubmit="event.preventDefault(); document.getElementById('success-message').classList.remove('hidden'); this.classList.add('hidden');">

<div className="flex flex-col gap-2">
<div className="group relative w-full">
<input className="w-full bg-[#121212] text-zinc-200 placeholder-zinc-600 rounded-xl py-4 px-5 border border-zinc-800 outline-none focus:border-[#FF8D00] focus:ring-1 focus:ring-[#FF8D00]/50 transition-all duration-300 text-sm font-light shadow-sm" placeholder="Enter your registered email" required="" type="email"/>
</div>
</div>

<button className="w-full py-4 rounded-full bg-gradient-to-r from-[#FF5700] to-[#FFC400] text-black font-semibold text-sm tracking-wide hover:shadow-[0_0_25px_-5px_rgba(255,141,0,0.4)] hover:brightness-105 active:scale-[0.98] transition-all duration-300 shadow-lg shadow-black/20" type="submit">
                Send Reset Link
            </button>
</form>

<div className="hidden w-full flex flex-col items-center text-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500" id="success-message">
<div className="w-16 h-16 rounded-full bg-[#121212] border border-zinc-800 flex items-center justify-center text-[#FF8D00] shadow-[0_0_30px_-10px_rgba(255,141,0,0.2)]">
<iconify-icon height="32" icon="solar:letter-unread-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="space-y-2">
<h3 className="text-xl font-medium text-white">Check your Inbox!</h3>
<p className="text-zinc-400 text-sm font-light">
                    We have sent a password recover instructions to your email.
                </p>
</div>
<button className="mt-2 text-sm text-[#FF8D00] hover:text-[#FFC400] font-medium transition-colors" onclick="window.location.reload()">
                Back to Login
            </button>
</div>
</main>

    </>
  );
}
