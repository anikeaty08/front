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
      
<div className="max-w-xl w-full mx-auto relative">

<div className="absolute -top-20 -left-20 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>


<div className="absolute -left-6 md:-left-16 top-20 z-30 animate-pop-1 rotate-[-12deg]">
<div className="bg-white p-3 rounded-2xl shadow-lg border-2 border-rose-100 flex items-center justify-center transform hover:scale-110 transition-transform cursor-default">
<iconify-icon className="text-rose-400" icon="solar:wineglass-triangle-bold" width="32"></iconify-icon>
</div>
</div>

<div className="absolute -right-4 md:-right-12 top-10 z-30 animate-pop-2 rotate-[12deg]">
<div className="bg-white p-3 rounded-2xl shadow-lg border-2 border-rose-100 flex items-center justify-center transform hover:scale-110 transition-transform cursor-default">
<iconify-icon className="text-pink-400" icon="solar:letter-heart-bold" width="32"></iconify-icon>
</div>
</div>

<div className="absolute -right-2 md:-right-8 bottom-32 z-30 animate-pop-3 rotate-[-6deg]">
<div className="bg-white p-3 rounded-2xl shadow-lg border-2 border-rose-100 flex items-center justify-center transform hover:scale-110 transition-transform cursor-default">
<iconify-icon className="text-amber-400" icon="solar:donut-bitten-bold" width="32"></iconify-icon>
</div>
</div>

<main className="relative bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 md:p-12 text-center soft-shadow z-10">

<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-50 text-rose-500 mb-8 border border-rose-100">
<iconify-icon icon="solar:heart-angle-linear" width="24"></iconify-icon>
</div>

<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-rose-950 mb-6 leading-tight">
                Happy Galentine’s<br/> Day <span className="text-rose-500">💕</span>
</h1>

<p className="text-base md:text-lg text-rose-900/70 font-normal leading-relaxed mb-10">
                To my best friend — thank you for being my constant support, my free therapist, 
                and my partner in all the chaos. Life feels easier and happier with you in it. 
                I don’t need a Valentine when I have a best friend like you.
            </p>

<div className="flex justify-center items-center gap-4 mb-12 relative h-48">

<div className="absolute left-1/2 -translate-x-3/4 w-40 h-48 bg-white p-2 rounded-xl shadow-lg rotate-[-6deg] hover:rotate-[-8deg] transition-transform duration-500 animate-float z-10">
<img alt="Besties 1" className="w-full h-full object-cover rounded-lg filter saturate-[0.8]" src="https://images.unsplash.com/photo-1529139574466-a302d2d3f524?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>

<div className="absolute left-1/2 -translate-x-1/4 translate-y-4 w-40 h-48 bg-white p-2 rounded-xl shadow-lg rotate-[6deg] hover:rotate-[8deg] transition-transform duration-500 animate-float-delayed z-20">
<img alt="Besties 2" className="w-full h-full object-cover rounded-lg filter saturate-[0.8]" src="https://images.unsplash.com/photo-1605256408258-006d649cf24b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>

<div className="absolute -right-4 top-0 text-rose-300">
<iconify-icon icon="solar:hearts-linear" width="32"></iconify-icon>
</div>
</div>

<div className="space-y-6 pt-4">
<p className="text-lg font-medium text-rose-900 tracking-tight">
                    Will you be my Galentine forever? 💗
                </p>
<button className="group relative inline-flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-rose-200 hover:shadow-rose-300">
<span className="text-sm font-medium tracking-wide">Always Yes</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</main>

<footer className="text-center mt-8 relative z-10">
<p className="text-xs text-rose-800/40 font-medium tracking-wide uppercase">BFFs Incorporated © 2024</p>
</footer>
</div>

    </>
  );
}
