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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-3/4 h-3/4 bg-blue-900/10 rounded-full blur-[120px]"></div>
<div className="absolute top-[20%] right-[-10%] w-1/2 h-1/2 bg-indigo-900/10 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 bg-grid opacity-20"></div>
</div>

<nav className="w-full relative z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

<div className="flex items-center gap-2">
<iconify-icon className="opacity-90" height="24" icon="logos:vercel" width="96"></iconify-icon>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#">Methodology</a>
<a className="hover:text-white transition-colors" href="#">Mentorship</a>
<a className="hover:text-white transition-colors" href="#">Outcomes</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Apply</a>
</div>

<div className="hidden md:block">
<button className="bg-white text-black text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gray-200 transition-all flex items-center gap-2">
                    Start Application
                </button>
</div>

<div className="md:hidden text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</div>
</div>
</nav>

<main className="flex-grow flex items-center justify-center relative z-10 py-12 lg:py-0">
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col justify-center space-y-8 lg:space-y-10">

<div className="space-y-6">
<p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase">
                        Systems Architecture Course
                    </p>

<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
                        SYSTEMS <br/>
                        — POWER <br/>
                        THE LOGIC.
                    </h1>
</div>

<div className="space-y-4 max-w-lg">
<h2 className="text-2xl text-gray-300 font-medium tracking-tight">
                        Scalability, reliability, and precision.
                    </h2>
<p className="text-lg text-gray-500 leading-relaxed">
                        Master the art of building distributed backends with Node.js. Acquire production-grade skills and architect real-world systems ready for scale.
                    </p>
</div>

<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-white text-black px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group">
                        Apply for Access
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="border border-white/10 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/5 transition-colors flex items-center justify-center">
                        View Curriculum
                    </button>
</div>
</div>

<div className="relative w-full h-[500px] lg:h-[700px] flex items-end justify-center lg:justify-end">

<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20 h-40 bottom-0"></div>

<div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-[#0a0a0a]">
<img alt="Mentor Portrait" className="w-full h-full object-cover grayscale opacity-90 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
</div>
</div>
</div>
</main>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 hidden lg:flex">
<span className="text-[10px] tracking-[0.2em] uppercase text-gray-400">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
</div>

    </>
  );
}
