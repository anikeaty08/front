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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-orange-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 pointer-events-none"></div>

<nav className="absolute top-6 left-6 z-50 animate-reveal">
<div className="flex items-center gap-3 bg-neutral-900/40 backdrop-blur-md border border-white/10 rounded-full py-2 px-4 shadow-lg shadow-black/20 group cursor-pointer hover:border-white/20 transition-all duration-300">
<div className="text-orange-500">
<i className="w-5 h-5" data-lucide="dumbbell"></i>
</div>
<span className="text-sm font-medium text-neutral-300 tracking-tight">Marcus Fit</span>
<div className="w-px h-4 bg-white/10 mx-1"></div>
<i className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" data-lucide="menu"></i>
</div>
</nav>

<main className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 pt-24 lg:pt-0">

<div className="flex-1 flex flex-col justify-center items-start h-full lg:max-w-md space-y-8 order-2 lg:order-1 pb-10 lg:pb-0">

<div className="animate-reveal delay-100">
<div className="inline-flex items-center gap-2 bg-neutral-900/60 border border-white/5 rounded-full px-3 py-1.5 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-xs font-medium text-neutral-400 tracking-wide">Accepting new clients</span>
</div>
</div>

<div className="space-y-4 animate-reveal delay-200">
<h1 className="text-3xl lg:text-4xl leading-[1.1] font-medium tracking-tight text-white">
                    Elite Bodybuilding Coach <br/>
<span className="text-neutral-500">sculpting aesthetics &amp;</span> <br/>
                    peak performance.
                </h1>
<p className="text-lg text-neutral-400 max-w-sm leading-relaxed">
                    Based in Miami. Transforming physiques through science-based training and precision nutrition.
                </p>
</div>
</div>

<div className="flex-1 h-full w-full flex flex-col items-center justify-end relative order-1 lg:order-2 group">

<div className="absolute bottom-[15%] lg:bottom-12 left-1/2 -translate-x-1/2 w-full text-center z-10 mix-blend-difference pointer-events-none">
<h1 className="text-[5rem] lg:text-[13rem] font-medium tracking-tighter text-white leading-none select-none animate-reveal delay-300">
                    MARCUS
                </h1>
</div>

<div className="relative z-20 h-[60vh] lg:h-[85vh] w-auto aspect-[3/4] flex items-end justify-center animate-reveal delay-100">

<div className="absolute top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-orange-500/20 blur-[80px] rounded-full"></div>

<div className="absolute inset-0 z-30 bg-gradient-to-t from-neutral-950 via-transparent to-transparent h-48 bottom-0 w-full"></div>
<img alt="Trainer Portrait" className="h-full w-full object-cover object-top opacity-90 brightness-[0.8] contrast-125 saturate-0 group-hover:saturate-50 transition-all duration-700 ease-out mask-image-gradient" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'}}/>
</div>

<div className="absolute bottom-6 text-center z-30 animate-reveal delay-500">
<p className="text-xs text-neutral-500 tracking-wide uppercase font-medium">Trusted by athletes globally</p>
</div>
</div>

<div className="flex-1 h-full flex flex-col justify-center items-end lg:items-end relative order-3 lg:order-3 w-full lg:w-auto mt-8 lg:mt-0">

<div className="hidden lg:flex flex-col items-center absolute top-6 right-0 h-[40vh] gap-4 animate-reveal delay-300">
<span className="text-xs font-medium text-neutral-400 tracking-widest text-vertical rotate-180">+1 (305) 992-0481</span>
<div className="h-full w-px bg-gradient-to-b from-neutral-800 to-transparent"></div>
<i className="w-4 h-4 text-neutral-600" data-lucide="arrow-down"></i>
</div>

<div className="relative right-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-left-12 z-40 animate-reveal delay-200">
<button className="group relative flex items-center gap-4 bg-orange-600 hover:bg-orange-500 text-white pl-1.5 pr-6 py-1.5 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(234,88,12,0.3)] hover:shadow-[0_0_40px_rgba(234,88,12,0.5)]">
<div className="bg-white text-orange-600 rounded-full p-2.5 transition-transform group-hover:rotate-45 duration-300">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
<span className="font-medium text-lg tracking-tight">Let's Train</span>
</button>
</div>

<div className="hidden lg:flex flex-col gap-6 absolute bottom-12 right-0 animate-reveal delay-300">
<a className="text-neutral-500 hover:text-white transition-colors duration-300" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="text-neutral-500 hover:text-white transition-colors duration-300" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a className="text-neutral-500 hover:text-white transition-colors duration-300" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
</div>

<div className="flex lg:hidden gap-6 w-full justify-center pb-8 pt-4">
<a className="text-neutral-500 hover:text-white" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-neutral-500 hover:text-white" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-neutral-500 hover:text-white" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
</main>


    </>
  );
}
