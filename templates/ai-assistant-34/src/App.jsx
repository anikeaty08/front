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
      

<div className="spline-container fixed top-0 w-full h-screen -z-10 hue-rotate-180" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><iframe frameborder="0" height="100%" src="https://my.spline.design/retrofuturismbganimation-NxFdKwfgAmDCwr6RHv5vQT3c/" width="100%"></iframe></div>

<div className="fixed inset-0 z-0 pointer-events-none">

<img alt="Abstract Green Data Waves" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen" src="default"/>

<div className="absolute inset-0 bg-gradient-to-r to-transparent from-black via-black/90"></div>
<div className="absolute inset-0 bg-gradient-to-t via-transparent from-black to-black/20"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] blur-[120px] rounded-full mix-blend-screen bg-sky-500/10"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
<nav className="flex shadow-black/50 bg-white/5 w-full max-w-[1100px] border-white/10 border rounded-full pt-2 pr-2 pb-2 pl-6 relative shadow-2xl backdrop-blur-xl items-center justify-between">

<div className="flex items-center gap-3">

<iconify-icon className="text-2xl text-white" icon="simple-icons:abstract"></iconify-icon>
<span className="font-medium tracking-tight text-lg text-zinc-100">Horizon</span>
</div>

<div className="hidden md:flex -translate-x-1/2 absolute top-1/2 left-1/2 gap-x-8 gap-y-8 items-center">
<a className="transition-colors duration-300 hover:text-white text-sm font-normal text-zinc-400" href="#">Home</a>
<a className="text-sm font-normal transition-colors duration-300 text-zinc-400 hover:text-white" href="#">Resources</a>
<a className="text-sm font-normal transition-colors duration-300 text-zinc-400 hover:text-white" href="#">Features</a>
<a className="text-sm font-normal transition-colors duration-300 text-zinc-400 hover:text-white" href="#">Community</a>
<a className="transition-colors duration-300 hover:text-white text-sm font-normal text-zinc-400" href="#">Pricing</a>
</div>

<div className="flex items-center gap-5 pl-4 md:pl-0">
<a className="hidden sm:block text-sm font-normal transition-colors text-zinc-300 hover:text-white" href="#">Login</a>
<button className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all uppercase bg-white hover:bg-zinc-200 text-black">
                    Get Started
                </button>
</div>
</nav>
</header>

<main className="flex flex-col min-h-screen sm:px-12 lg:px-24 w-full max-w-[1400px] z-10 mr-auto ml-auto pt-32 pr-6 pb-12 pl-6 relative justify-center">

<div className="flex mb-10 justify-start">
<a className="group flex items-center gap-3 backdrop-blur-md border rounded-full pl-1.5 pr-5 py-1.5 transition-all duration-300 bg-zinc-900/40 border-white/10 hover:border-white/20" href="#">
<div className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-black">
<iconify-icon className="text-sm" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-normal tracking-wide group-hover:text-white transition-colors text-zinc-300">
                    Series D funding round was closed
                </span>
</a>
</div>

<div className="max-w-4xl mb-8">
<h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.05] tracking-tight font-medium text-white">
                Your smartest AI assistant <br className=""/>
<span className="bg-clip-text text-gradient text-transparent bg-gradient-to-br from-sky-400 to-sky-600">
                    work faster and smarter
                </span>
</h1>
</div>

<div className="max-w-xl mb-12">
<p className="text-lg sm:text-xl font-light leading-relaxed text-zinc-400">
                Smarter sales, faster decisions: AI powered dashboard with call analytics, transcripts, summaries and more.
            </p>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
<button className="group flex gap-2 items-center transition-all duration-500 hover:scale-[1.03] text-sm font-semibold text-white tracking-wide bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full pt-4 pr-9 pb-4 pl-9 relative shadow-[inset_0_0_20px_rgba(255,255,255,0.05),0_0_0_1px_rgba(255,255,255,0.1),0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.1),0_0_0_1px_rgba(255,255,255,0.2),0_0_40px_-5px_rgba(56,189,248,0.5)] hover:bg-white/10 hover:border-white/30 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 opacity-50 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"></div>
<span className="z-10 relative">GET STARTED</span>
<iconify-icon className="text-lg relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:arrow-right-up-linear" strokeWidth="2"></iconify-icon>
</button>
<a className="text-xs sm:text-sm font-medium underline underline-offset-8 decoration-1 transition-all uppercase tracking-widest text-zinc-300 hover:text-white decoration-zinc-600 hover:decoration-sky-500" href="#">
                Discover More
            </a>
</div>
</main>

    </>
  );
}
