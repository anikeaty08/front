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
      

<div className="fixed inset-0 pointer-events-none z-0">

<div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#D6D4D0] -translate-x-1/2"></div>

<div className="absolute left-0 right-0 bottom-[28%] h-[1px] bg-[#D6D4D0]"></div>

<div className="bg-circle"></div>
</div>

<header className="relative z-20 w-full px-6 py-8 md:px-12 md:py-10 grid grid-cols-2 md:grid-cols-12 gap-4">

<div className="col-span-1 md:col-span-5 flex justify-between md:pr-20">

<div className="group cursor-pointer">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-1 group-hover:text-[#FF4400] transition-colors">Info</h2>
<p className="text-[10px] md:text-xs font-medium text-neutral-500 uppercase tracking-widest">About Me</p>
</div>

<div className="group cursor-pointer">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-1 group-hover:text-[#FF4400] transition-colors">Work</h2>
<p className="text-[10px] md:text-xs font-medium text-neutral-500 uppercase tracking-widest">Some Cases</p>
</div>
</div>

<div className="hidden md:block md:col-span-2"></div>

<div className="col-span-1 md:col-span-5 flex justify-between md:pl-20 text-right md:text-left">

<div className="group cursor-pointer">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-1 group-hover:text-[#FF4400] transition-colors">Workflow</h2>
<p className="text-[10px] md:text-xs font-medium text-neutral-500 uppercase tracking-widest">All the processes</p>
</div>

<div className="group cursor-pointer">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-1 group-hover:text-[#FF4400] transition-colors">Contact me</h2>
<p className="text-[10px] md:text-xs font-medium text-neutral-500 uppercase tracking-widest">For any collaborations</p>
</div>
</div>
</header>

<main className="flex-1 relative z-10 w-full h-full flex flex-col justify-center">

<div className="absolute top-[25%] left-0 right-0 w-full px-8 md:px-16 flex justify-between text-neutral-400 text-sm font-medium pointer-events-none">
<div className="flex gap-24 md:gap-48">
<span>0 1</span>
<span>0 2</span>
<span>0 3</span>
</div>
<div className="flex gap-24 md:gap-48 text-right">
<span>0 7</span>
<span>0 8</span>
<span>0 9</span>
</div>
</div>

<div className="relative w-full flex items-center justify-center h-[50vh] md:h-[60vh]">

<div className="absolute inset-0 flex items-center justify-between px-4 md:px-12 pointer-events-none">
<h1 className="font-serif-display text-white text-[12vw] leading-none select-none mix-blend-hard-light opacity-90">
                    Zhenya
                </h1>
<h1 className="font-serif-display text-white text-[12vw] leading-none select-none mix-blend-hard-light opacity-90">
                    Rynzhuk
                </h1>
</div>

<div className="relative z-20 h-[300px] w-[300px] md:h-[500px] md:w-[450px] bg-neutral-200 overflow-hidden shadow-xl">
<img alt="Portrait" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="absolute bottom-[8%] left-0 right-0 px-6 md:px-12 grid grid-cols-2 md:grid-cols-12 pointer-events-none">

<div className="col-span-1 md:col-span-5 flex items-end pointer-events-auto">
<div className="group flex flex-col gap-2 cursor-pointer">
<span className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-800 group-hover:text-[#FF4400] transition-colors">
                        Play<br/>Showreel
                    </span>
</div>
</div>

<div className="hidden md:block md:col-span-2"></div>

<div className="col-span-1 md:col-span-5 flex flex-col md:flex-row items-start md:items-end justify-between pl-0 md:pl-20 pointer-events-auto relative">

<div className="absolute -top-32 left-0 md:left-10 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">

<div className="absolute w-full h-full animate-spin-slow">
<svg height="100%" viewbox="0 0 100 100" width="100%">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="curve"></path>
<text fill="#FF4400" fontSize="11" font-weight="bold" letter-spacing="2">
<textpath xlink:href="#curve">
                                     CLICK CLICK CLICK CLICK
                                 </textpath>
</text>
</svg>
</div>

<svg className="w-12 h-12 md:w-16 md:h-16 text-[#FF4400] transform rotate-12" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path>
</svg>
</div>

<div className="mt-20 md:mt-0 md:ml-auto text-left space-y-2">
<p className="text-lg md:text-xl font-serif-display italic md:not-italic md:font-normal text-neutral-800 cursor-pointer hover:text-[#FF4400] transition-colors">Art direction</p>
<p className="text-lg md:text-xl font-serif-display italic md:not-italic md:font-normal text-neutral-800 cursor-pointer hover:text-[#FF4400] transition-colors">Digital production</p>
<p className="text-lg md:text-xl font-serif-display italic md:not-italic md:font-normal text-neutral-800 cursor-pointer hover:text-[#FF4400] transition-colors">Branding</p>
</div>
</div>
</div>
</main>

<footer className="relative z-20 w-full px-6 py-6 md:px-12 md:pb-8 flex justify-between items-end text-[10px] md:text-xs font-bold tracking-widest uppercase text-neutral-600">
<div className="w-1/3">
<span className="hover:text-black cursor-pointer transition-colors">In Red</span>
</div>
<div className="w-1/3 flex justify-center gap-8 md:gap-16 font-serif-display normal-case text-base md:text-lg text-neutral-500 italic md:not-italic md:font-sans md:text-xs md:font-bold md:uppercase md:tracking-widest">
<a className="hover:text-black transition-colors" href="#">Dribbble</a>
<a className="hover:text-black transition-colors" href="#">Behance</a>
<a className="hover:text-black transition-colors" href="#">Twitter</a>
</div>
<div className="w-1/3 text-right">
<span className="text-[#FF4400] hover:text-[#cc3700] cursor-pointer transition-colors">In Light</span>
</div>
</footer>


    </>
  );
}
