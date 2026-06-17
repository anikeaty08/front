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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-black/20 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative w-6 h-6 flex items-center justify-center">
<div className="absolute inset-0 bg-indigo-500/30 blur-sm rounded-full"></div>
<div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
</div>
<span className="text-sm font-medium tracking-tight text-white/90">ORBITAL</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs text-zinc-400 hover:text-indigo-300 transition-colors" href="#">Features</a>
<a className="text-xs text-zinc-400 hover:text-indigo-300 transition-colors" href="#">Integration</a>
<a className="text-xs text-zinc-400 hover:text-indigo-300 transition-colors" href="#">Safety</a>
<a className="text-xs text-zinc-400 hover:text-indigo-300 transition-colors" href="#">Blog</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs text-zinc-400 hover:text-white transition-colors" href="#">Sign In</a>
<button className="text-xs font-medium bg-white/10 text-white px-4 py-2 rounded-full border border-white/5 hover:bg-white/15 transition-all hover:scale-105 active:scale-95">
                    Get Started
                </button>
</div>
</div>
</nav>

<main className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">

<div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>
<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>


<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
<span className="shooting-star" style={{top: '0%', left: '50%', animationDelay: '0s', animationDuration: '4s'}}></span>
<span className="shooting-star" style={{top: '20%', left: '90%', animationDelay: '2s', animationDuration: '3s'}}></span>
<span className="shooting-star" style={{top: '50%', left: '80%', animationDelay: '5s', animationDuration: '5s'}}></span>
<span className="shooting-star" style={{top: '10%', left: '30%', animationDelay: '1.5s', animationDuration: '4.5s'}}></span>
<span className="shooting-star" style={{top: '70%', left: '60%', animationDelay: '3.5s', animationDuration: '4s'}}></span>
<span className="shooting-star" style={{top: '-10%', left: '70%', animationDelay: '6s', animationDuration: '3.5s'}}></span>
<span className="shooting-star" style={{top: '40%', left: '20%', animationDelay: '7s', animationDuration: '5s'}}></span>
</div>

<div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center text-center">

<div className="animate-enter opacity-0 [animation-delay:100ms] inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 backdrop-blur-md mb-8 hover:bg-indigo-500/15 transition-colors cursor-pointer group">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs text-indigo-200 font-medium tracking-wide">Stellar v2.0 is live</span>
<span className="iconify text-indigo-300 group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="12"></span>
</div>

<h1 className="animate-enter opacity-0 [animation-delay:200ms] text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50">Ship at the speed</span>
<br/>
<span className="relative">
                    of starlight.
                    
<svg className="absolute -bottom-2 w-full h-3 text-indigo-500/50" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</span>
</h1>

<p className="animate-enter opacity-0 [animation-delay:300ms] text-base md:text-lg text-zinc-400 max-w-2xl mb-12 leading-relaxed font-light tracking-wide">
                The comprehensive toolkit designed for interstellar engineering teams. 
                Automate your infrastructure, scale instantly across the galaxy, and focus on what matters.
            </p>

<div className="animate-enter opacity-0 [animation-delay:400ms] flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="group relative w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
<span className="iconify" data-icon="lucide:zap" data-width="16"></span>
<span>Start Building</span>
</button>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium text-zinc-300 hover:text-white border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-300 group">
<span className="iconify text-zinc-500 group-hover:text-white transition-colors" data-icon="lucide:book-open" data-width="16"></span>
<span>Documentation</span>
</button>
</div>

<div className="animate-enter opacity-0 [animation-delay:600ms] mt-24 pt-8 border-t border-white/5 w-full max-w-3xl">
<p className="text-xs text-zinc-600 mb-6 uppercase tracking-widest font-semibold">Powering next-gen startups</p>
<div className="flex flex-wrap justify-center gap-10 md:gap-16 opacity-30 hover:opacity-50 transition-opacity duration-500">
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:triangle" data-width="22"></span>
<span className="font-bold tracking-tighter text-lg">PRISM</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:circle-dashed" data-width="22"></span>
<span className="font-bold tracking-tighter text-lg">ORBIT</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:box" data-width="22"></span>
<span className="font-bold tracking-tighter text-lg">CUBE</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:wind" data-width="22"></span>
<span className="font-bold tracking-tighter text-lg">FLOW</span>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
