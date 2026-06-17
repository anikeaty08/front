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
      

<nav className="w-full flex justify-between items-center px-6 py-6 md:px-12 md:py-8 z-50 relative">

<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-[#6DA048] flex items-center justify-center">
<i className="text-white fill-white w-5 h-5 stroke-[0]" data-lucide="zap"></i>
</div>
</div>

<div className="hidden md:flex space-x-10">
<a className="text-base font-medium text-neutral-800 hover:text-black transition-colors" href="#">About us</a>
<a className="text-base font-medium text-neutral-800 hover:text-black transition-colors" href="#">Product</a>
<a className="text-base font-medium text-neutral-800 hover:text-black transition-colors" href="#">FAQ</a>
</div>

<div className="flex items-center space-x-6">
<button className="flex items-center space-x-2 text-base font-medium text-neutral-800 hover:text-black">
<i className="w-5 h-5" data-lucide="menu"></i>
<span>Menu</span>
</button>
<button className="flex items-center space-x-2 bg-black text-white px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors">
<span className="text-sm font-medium">Cart</span>
<i className="w-4 h-4" data-lucide="shopping-bag"></i>
</button>
</div>
</nav>

<main className="flex-grow relative flex flex-col md:flex-row w-full px-6 md:px-12 pt-10 md:pt-0">

<div className="w-full md:w-[55%] flex flex-col justify-center relative z-10 md:mt-[-5vh]">
<h1 className="text-[13vw] md:text-[8rem] lg:text-[9.5rem] leading-[0.85] tracking-tighter font-semibold text-black hero-text-shadow">
                Organic<br/>
<span className="relative z-0">Fertilizers</span>
</h1>
<div className="mt-10 md:mt-14 max-w-md">
<p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-medium">
                    Turning food waste into clean energy and organic fertilizers, we create a sustainable future while reducing landfill pollution and carbon emissions.
                </p>
<div className="flex items-center mt-10 space-x-4">
<button className="bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-neutral-800 transition-colors">
                        View Product
                    </button>
<button className="w-14 h-14 bg-[#FFBE3C] rounded-full flex items-center justify-center hover:bg-[#FDB528] transition-colors">
<i className="w-6 h-6 text-black" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>


<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] md:-translate-y-[45%] md:translate-x-[10%] w-[90%] md:w-[45%] h-[60vh] md:h-[80vh] pointer-events-none z-0 flex justify-center items-end select-none">
<img alt="Sprout in soil" className="w-full h-full object-contain object-bottom drop-shadow-xl mix-blend-multiply opacity-95" src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&amp;w=2025&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3"/>
</div>

<div className="hidden md:flex flex-col justify-center w-[30%] ml-auto relative z-20 pl-10 md:mt-[-5vh]">
<div className="flex flex-col space-y-0">

<div className="group flex items-center justify-between py-6 border-b border-neutral-300 cursor-default">
<span className="text-xl text-neutral-700 font-medium group-hover:text-black transition-colors">Decrease Carbon</span>
<i className="w-7 h-7 text-[#6DA048] stroke-[1.5]" data-lucide="leaf"></i>
</div>

<div className="group flex items-center justify-between py-6 border-b border-neutral-300 cursor-default">
<span className="text-xl text-neutral-700 font-medium group-hover:text-black transition-colors">Promotes Soil Health</span>
<i className="w-7 h-7 text-[#6DA048] stroke-[1.5]" data-lucide="sprout"></i>
</div>

<div className="group flex items-center justify-between py-6 border-b border-neutral-300 cursor-default">
<span className="text-xl text-neutral-700 font-medium group-hover:text-black transition-colors">Saves Water &amp; Resources</span>
<i className="w-7 h-7 text-[#6DA048] stroke-[1.5]" data-lucide="recycle"></i>
</div>
</div>
</div>
</main>

<footer className="w-full px-6 md:px-12 pb-8 md:pb-12 flex flex-col md:flex-row justify-between items-end z-20 mt-10 md:mt-0">

<div className="max-w-sm">
<p className="text-lg text-neutral-600 font-medium leading-normal">
                Turning food waste into clean energy<br/>and organic fertilizers.
            </p>
<a className="inline-block mt-2 text-lg font-medium text-[#5C8A3D] underline decoration-2 underline-offset-4 hover:text-[#4A7030]" href="#">
                Learn More
            </a>
</div>

<div className="text-right mt-8 md:mt-0">
<div className="flex items-center justify-end space-x-2">
<span className="text-5xl md:text-6xl font-medium tracking-tight text-black">4.8/5</span>
<i className="w-6 h-6 text-[#FFBE3C] fill-[#FFBE3C]" data-lucide="star"></i>
</div>
<p className="mt-2 text-base text-neutral-600 font-medium">
                Explore our trusts &amp;<br/>customer Reviews
            </p>
</div>
</footer>


    </>
  );
}
