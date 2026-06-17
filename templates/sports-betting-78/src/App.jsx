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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
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
      

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 -z-10"></div>

<header className="border-b border-white/5 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-40">
<div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-6 w-6 text-cyan-500" data-lucide="trending-up" strokeWidth="1.5"></i>
<span className="text-xl font-medium tracking-tight text-white">#Trendyname</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-white transition-colors" href="#">Home</a>
<a className="text-base font-medium text-zinc-400 hover:text-white transition-colors" href="#">Review</a>
<a className="text-base font-medium text-zinc-400 hover:text-white transition-colors" href="#">About</a>
<a className="text-base font-medium text-zinc-400 hover:text-white transition-colors" href="#">Track</a>
</nav>
<button className="md:hidden p-2 text-zinc-400 hover:text-white">
<i className="h-6 w-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>

<main className="flex-1 flex flex-col items-center justify-center px-6 relative z-0">
<div className="text-center max-w-3xl mx-auto blur-[2px] opacity-40 transition-all duration-700 select-none">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6">
                Data-Driven <span className="text-cyan-500">Sports Predictions</span>
</h1>
<p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
                Elevate your strategy with our advanced analytics and expert insights. Track records, reviews, and daily premium picks.
            </p>
</div>
</main>

<div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity duration-300" id="offer-modal">

<div className="relative w-full max-w-lg bg-zinc-900 rounded-3xl shadow-2xl ring-1 ring-white/10 overflow-hidden transform transition-all scale-100 opacity-100 animate-in fade-in zoom-in duration-500">

<div className="absolute inset-x-0 -top-px h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-70"></div>
<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-24 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none"></div>

<button className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-zinc-300 hover:bg-white/5 rounded-full transition-colors z-10" onclick="document.getElementById('offer-modal').style.display='none'; document.querySelector('main &gt; div').classList.remove('blur-[2px]', 'opacity-40');">
<i className="h-5 w-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
<div className="p-8 sm:p-12 flex flex-col items-center text-center relative z-0">

<div className="flex items-center justify-center gap-1.5 mb-6 text-amber-400">
<i className="h-6 w-6 fill-current opacity-80" data-lucide="star" strokeWidth="1.5"></i>
<i className="h-8 w-8 fill-current drop-shadow-[0_0_12px_rgba(251,191,36,0.4)]" data-lucide="star" strokeWidth="1.5"></i>
<i className="h-6 w-6 fill-current opacity-80" data-lucide="star" strokeWidth="1.5"></i>
</div>

<div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 mb-5 ring-1 ring-inset ring-cyan-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
<span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Limited Offer</span>
</div>

<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-2">
                    Subscribe For
                </h2>
<div className="text-5xl sm:text-6xl font-semibold tracking-tight text-amber-400 mb-10 drop-shadow-sm">
                    3+ ODDS
                </div>

<div className="w-full relative flex flex-col items-center">

<div className="absolute -top-5 flex items-center gap-2 text-red-400/80 animate-bounce">
<i className="h-4 w-4" data-lucide="arrow-down" strokeWidth="1.5"></i>
<span className="text-xs font-medium tracking-wide uppercase">Claim Now</span>
<i className="h-4 w-4" data-lucide="arrow-down" strokeWidth="1.5"></i>
</div>

<button className="group relative w-full flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-zinc-950 transition-all hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
<span className="text-xl font-semibold tracking-tight">BUY GHC 20</span>
<i className="h-5 w-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="mt-8 inline-flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-xl ring-1 ring-emerald-500/20 text-emerald-400">
<i className="h-5 w-5" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="text-base font-medium tracking-tight">100% Assurance Win</span>
</div>
</div>
</div>
</div>



    </>
  );
}
