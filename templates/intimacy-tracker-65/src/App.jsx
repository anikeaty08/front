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
      

<div className="glow-point top-0 left-1/4 -translate-y-1/2"></div>
<div className="glow-point bottom-0 right-1/4 translate-y-1/2"></div>

<nav className="w-full border-b border-white/5 relative z-50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">

<div className="h-6 w-6 bg-white rounded-full flex items-center justify-center">
<span className="text-black text-xs font-bold tracking-tighter">?</span>
</div>
<span className="text-white text-sm font-semibold tracking-tighter">Having Sex ?</span>
</div>
<div className="flex items-center gap-6">
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Manifesto</a>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Login</a>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col items-center justify-center relative z-10 pt-20 pb-12 px-4">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 hover:bg-white/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-300 tracking-tight">Accepting early access</span>
</div>

<div className="text-center max-w-4xl mx-auto mb-16">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-6 leading-[1.1] text-glow">
                Did you, <span className="text-zinc-500">today?</span>
</h1>
<p className="text-base md:text-lg text-zinc-500 max-w-lg mx-auto leading-relaxed font-normal tracking-tight">
                The daily ritual to track your intimacy. Sign up every day. Verify your status. Visualize your life in pixels.
            </p>
</div>

<div className="relative w-full max-w-[320px] mx-auto mb-16 transform hover:scale-[1.01] transition-transform duration-500">

<div className="absolute -top-16 left-0 right-0 text-center">
<h3 className="text-2xl text-white font-semibold tracking-tighter">One-tap Check-in</h3>
</div>

<div className="relative bg-zinc-900 border-[12px] border-zinc-800 rounded-[3rem] shadow-2xl shadow-emerald-500/10 h-[640px] overflow-hidden">

<div className="bg-white px-6 pt-4 pb-2 flex justify-between items-center text-zinc-900 text-[11px] font-semibold sticky top-0 z-20">
<span className="tracking-wide">9:41</span>
<div className="flex gap-1.5 items-center">
<iconify-icon icon="lucide:signal" strokeWidth="2.5" width="12"></iconify-icon>
<iconify-icon icon="lucide:wifi" strokeWidth="2.5" width="12"></iconify-icon>
<iconify-icon icon="lucide:battery-full" strokeWidth="2.5" width="14"></iconify-icon>
</div>
</div>

<div className="bg-white h-full w-full flex flex-col items-center pt-12 px-6 pb-8 font-sans">

<div className="w-full space-y-8 mb-auto">
<div className="flex items-center justify-center gap-2 group cursor-pointer">
<span className="text-sm text-zinc-300 font-normal">Your name</span>
<iconify-icon className="text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:pencil" width="12"></iconify-icon>
</div>
<div className="flex items-center justify-center gap-2 group cursor-pointer">
<span className="text-sm text-zinc-300 font-normal">Emergency contact's email</span>
<iconify-icon className="text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:pencil" width="12"></iconify-icon>
</div>
</div>

<div className="relative flex items-center justify-center mb-16">

<div className="absolute w-64 h-64 bg-emerald-50 rounded-full animate-ripple pointer-events-none"></div>
<div className="absolute w-52 h-52 bg-emerald-100/50 rounded-full pointer-events-none"></div>

<button className="relative w-40 h-40 bg-[#00D668] rounded-full shadow-lg shadow-emerald-500/30 flex flex-col items-center justify-center text-white hover:scale-105 transition-all duration-300 active:scale-95 z-10 group">
<iconify-icon className="mb-2 text-white group-hover:-translate-y-1 transition-transform" icon="lucide:ghost" strokeWidth="2" width="36"></iconify-icon>
<span className="font-semibold text-sm tracking-tight">Check in today</span>
</button>
</div>

<div className="bg-zinc-50 rounded-xl p-4 w-full mb-6">
<div className="flex gap-3 items-start">
<iconify-icon className="text-[#00D668] shrink-0 mt-0.5 stroke-[2.5]" icon="lucide:info" width="14"></iconify-icon>
<p className="text-[10px] leading-relaxed text-zinc-400 font-medium">
                                If you haven't checked in for 1 days, the system will send an alert to your emergency contact in your name on the next day.
                            </p>
</div>
</div>

<div className="text-[9px] text-zinc-400 text-center leading-relaxed">
<p className="mb-1">Checking in means agreeing to</p>
<div className="space-x-1">
<a className="text-[#00D668] font-medium hover:underline" href="#">User Agreement</a>
<span>and</span>
<a className="text-[#00D668] font-medium hover:underline" href="#">Privacy Policy</a>
</div>
</div>

<div className="mt-6 h-1 w-24 bg-zinc-200 rounded-full"></div>
</div>
</div>
</div>

<div className="w-full max-w-md mx-auto flex flex-col gap-4">
<form className="flex items-center p-1 rounded-full bg-zinc-900/80 border border-zinc-800 focus-within:border-zinc-600 transition-colors shadow-lg shadow-black/50">
<iconify-icon className="text-zinc-500 ml-4 stroke-[1.5]" icon="lucide:mail" width="18"></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm text-white placeholder-zinc-600 w-full px-3 py-3" placeholder="Enter your email for access..." required="" type="email"/>
<button className="bg-white hover:bg-zinc-200 text-black text-sm font-semibold rounded-full px-6 py-2.5 transition-colors whitespace-nowrap tracking-tight" type="submit">
                    Join Wishlist
                </button>
</form>
<div className="grid grid-cols-2 gap-3">
<button className="group flex items-center justify-center gap-2 w-full py-3 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all text-sm font-medium tracking-tight">

<svg className="h-3.5 w-3.5 fill-current opacity-70 group-hover:opacity-100 transition-opacity" viewbox="0 0 24 24">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
</svg>
<span>Share on X</span>
</button>
<button className="group flex items-center justify-center gap-2 w-full py-3 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all text-sm font-medium tracking-tight">
<iconify-icon className="opacity-70 group-hover:opacity-100 transition-opacity stroke-[1.5]" icon="lucide:at-sign" width="15"></iconify-icon>
<span>Share on Threads</span>
</button>
</div>
</div>

<div className="mt-16 flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-zinc-800 rounded-full flex items-center justify-center text-[10px] font-bold text-white">L</div>
<span className="text-xs font-medium tracking-tight">Linear</span>
</div>
<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-zinc-800 rounded-full flex items-center justify-center text-[10px] font-bold text-white">▲</div>
<span className="text-xs font-medium tracking-tight">Vercel</span>
</div>
<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-zinc-800 rounded-full flex items-center justify-center text-[10px] font-bold text-white">S</div>
<span className="text-xs font-medium tracking-tight">Stripe</span>
</div>
</div>
<p className="mt-4 text-[10px] text-zinc-700 uppercase tracking-widest font-medium">Design inspired by the best</p>
</main>

<footer className="w-full border-t border-white/5 py-8 mt-auto relative z-10 bg-black">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-600">
                © 2023 Having Sex ?. All rights reserved.
            </p>
<div className="flex items-center gap-6">
<a className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors" href="#">Privacy</a>
<a className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors" href="#">Terms</a>
<a className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>

    </>
  );
}
