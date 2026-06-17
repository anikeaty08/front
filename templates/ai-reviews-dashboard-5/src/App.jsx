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
      

<main className="w-full max-w-md mx-auto min-h-screen flex flex-col px-5 py-6">

<header className="flex justify-between items-center mb-8">
<div className="flex items-center gap-2">

<button className="group flex items-center gap-2 px-3 py-2 bg-zinc-100 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-200 transition-colors">
                    Yesopens
                    <i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 transition-colors" data-lucide="menu"></i>
</button>

<button className="group flex items-center gap-2 px-3 py-2 bg-zinc-100 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-200 transition-colors">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-700" data-lucide="arrow-left"></i>
                    Reviews
                </button>
</div>

<div className="flex items-center gap-2">
<button className="p-2 text-zinc-400 hover:text-zinc-600 transition-colors">
<i className="w-5 h-5" data-lucide="more-vertical"></i>
</button>
<div className="w-8 h-8 rounded-full bg-zinc-200 border border-zinc-100"></div>
</div>
</header>

<div className="flex-1 flex flex-col gap-6">

<article className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-base font-medium tracking-tight text-zinc-900">Marcin</h3>
<p className="text-xs text-zinc-400 mt-0.5">5 reviews</p>
</div>
<span className="text-xs text-zinc-400">1 day ago</span>
</div>
<div className="flex gap-0.5 mb-3">
<i className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">
                    Absolutely loved the flavors—especially the sauce, which tasted rich and homemade. One of the best pizzas I've had in a long time.
                </p>
</article>

<section className="flex flex-col gap-2">

<div className="flex justify-between items-center px-4 py-2 bg-zinc-100 rounded-xl">
<span className="text-sm font-medium text-zinc-600">Versions</span>
<div className="flex items-center gap-3">
<button className="text-zinc-400 hover:text-zinc-600 transition-colors disabled:opacity-50">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<span className="text-xs font-medium text-zinc-500 tabular-nums">1 / 1</span>
<button className="text-zinc-400 hover:text-zinc-600 transition-colors disabled:opacity-50">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="relative group">
<div className="w-full border border-zinc-200 rounded-2xl p-5 bg-white transition-shadow focus-within:ring-1 focus-within:ring-zinc-200 focus-within:border-zinc-300">
<textarea className="w-full bg-transparent border-none p-0 text-base text-zinc-800 leading-relaxed resize-none focus:ring-0 placeholder:text-zinc-300 min-h-[140px]" spellcheck="false">Marcin, this made our day—thank you! We're especially happy you loved the sauce, and we hope to impress you again on your next visit.</textarea>
</div>

<div className="absolute bottom-4 right-4">
<div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-50 border border-zinc-100 shadow-sm cursor-pointer hover:bg-zinc-100 transition-colors">
<span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-400">Tone</span>
<div className="w-px h-3 bg-zinc-200"></div>
<span className="text-xs font-medium text-zinc-600">Friendly</span>
</div>
</div>
</div>
</section>
</div>

<div className="mt-8">
<div className="bg-zinc-100 rounded-3xl p-4">
<div className="flex justify-between items-center mb-3 px-1">
<label className="text-sm font-medium text-zinc-900">Generate this response</label>
</div>
<div className="relative flex items-center">
<input className="w-full bg-white text-zinc-900 text-sm rounded-xl py-3.5 pl-4 pr-12 border-none shadow-sm focus:ring-2 focus:ring-zinc-200 placeholder:text-zinc-400 transition-all" placeholder="Make it a little bit more formal" type="text"/>
<button className="absolute right-2 p-1.5 bg-zinc-100 hover:bg-zinc-200 rounded-lg text-zinc-600 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</main>


    </>
  );
}
