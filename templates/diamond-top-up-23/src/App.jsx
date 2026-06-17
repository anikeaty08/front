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
      

<header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/[0.05]">
<div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 cursor-pointer group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center group-hover:opacity-90 transition-opacity">
<iconify-icon icon="solar:diamond-linear" strokeWidth="1.5" style={{color: 'white'}} width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-white">FFD</span>
</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">
                Need help?
            </a>
</div>
</header>

<main className="flex-grow flex items-center justify-center w-full px-4 sm:px-6 py-12">
<div className="w-full max-w-sm flex flex-col gap-8">

<div className="flex flex-col gap-3 text-center items-center">
<div className="w-12 h-12 rounded-2xl border border-white/[0.1] bg-white/[0.02] flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(34,211,238,0.05)]">
<iconify-icon className="text-white" icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Welcome back</h1>
<p className="text-sm text-neutral-400">Enter your details to access your account.</p>
</div>
<form className="flex flex-col gap-5">

<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-300">Email address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
<iconify-icon className="text-neutral-500" icon="solar:letter-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<input className="w-full bg-white/[0.02] border border-white/[0.1] rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="name@example.com" type="email"/>
</div>
</div>

<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-300">Password</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
<iconify-icon className="text-neutral-500" icon="solar:lock-password-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<input className="w-full bg-white/[0.02] border border-white/[0.1] rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="••••••••" type="password"/>
</div>
</div>

<div className="flex items-center justify-between mt-1">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4">
<input checked="" className="peer hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-white/[0.2] bg-white/[0.02] peer-checked:bg-cyan-500 peer-checked:border-cyan-500 transition-all flex items-center justify-center group-hover:border-white/[0.3]">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-linear" strokeWidth="2.5" width="12"></iconify-icon>
</div>
</div>
<span className="text-xs font-medium text-neutral-400 group-hover:text-neutral-300 transition-colors">Remember me</span>
</label>
<a className="text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors" href="#">Forgot password?</a>
</div>

<button className="w-full mt-2 px-4 py-3 bg-white text-black text-sm font-medium rounded-xl hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" type="button">
                    Sign In
                    <iconify-icon icon="solar:login-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</form>

<div className="flex items-center gap-4 w-full">
<div className="h-px bg-white/[0.05] flex-grow"></div>
<span className="text-xs text-neutral-600 font-medium uppercase tracking-widest">Or</span>
<div className="h-px bg-white/[0.05] flex-grow"></div>
</div>

<button className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.05] text-white text-sm font-medium rounded-xl hover:bg-white/[0.04] transition-colors flex items-center justify-center gap-2" type="button">
<iconify-icon icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Sign in with Passkey
            </button>

<p className="text-center text-sm text-neutral-500 mt-2">
                Don't have an account? 
                <a className="font-medium text-white hover:text-cyan-400 transition-colors underline decoration-white/[0.2] underline-offset-4 hover:decoration-cyan-400/50" href="#">Sign up</a>
</p>
</div>
</main>

<footer className="border-t border-white/[0.05] py-8 mt-auto text-center">
<p className="text-xs text-neutral-600 font-medium tracking-wide uppercase">© FFD Topup Service. All rights reserved.</p>
</footer>

    </>
  );
}
