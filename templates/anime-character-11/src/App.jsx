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



        // Initialize Lucide Icons
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
      

<header className="relative z-50 max-w-[1400px] mx-auto">
<div className="bg-black text-white rounded-b-[2.5rem] px-8 py-5 flex justify-between items-center shadow-xl">

<div className="flex items-center gap-1 select-none cursor-pointer hover:opacity-80 transition-opacity">
<span className="text-2xl font-semibold tracking-tight">crypko</span>
<svg className="mt-1" fill="currentColor" height="12" viewbox="0 0 24 24" width="12">
<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
</svg>
</div>

<nav className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-300">
<a className="hover:text-white transition-colors" href="#">Guideline</a>
<a className="hover:text-white transition-colors" href="#">Faq</a>
<a className="hover:text-white transition-colors" href="#">Contact Us</a>
<a className="hover:text-white transition-colors" href="#">Discord</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</nav>

<button className="bg-[#EBE9DE] text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-white transition-colors">
                Join Us
            </button>
</div>
</header>
<main className="max-w-[1400px] mx-auto mt-12 md:mt-16 relative">

<section className="mb-12 md:mb-20 relative z-10">
<h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] font-semibold uppercase tracking-tighter text-black max-w-5xl">
                Anime Character<br/>
                Generation
            </h1>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">

<div className="hidden lg:flex absolute left-[45%] top-[-8%] z-20 flex-col items-center justify-center w-48 h-48">

<div className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
<svg height="100%" viewbox="0 0 100 100" width="100%">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="circlePath"></path>
<text fontFamily="Inter" fontSize="10" font-weight="600" letter-spacing="2px">
<textpath href="#circlePath" startoffset="0%">
                                ANIME CHARACTER GENERATION PLATFORM CRYPKO V1.0 OFFICIAL RELEASE
                            </textpath>
</text>
</svg>
</div>

<div className="bg-black text-[#EBE9DE] w-20 h-20 rounded-full flex flex-col items-center justify-center text-[0.6rem] font-bold tracking-wider z-10 relative overflow-hidden border-4 border-dashed border-[#EBE9DE] outline outline-4 outline-black">
<span className="z-10">START</span>
<span className="z-10">GENERATE</span>
</div>
</div>

<div className="lg:col-span-7 flex flex-col">
<div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] group">

<div className="w-full h-full overflow-hidden rounded-[2rem] rounded-tr-[6rem] border border-gray-200 bg-gray-200 relative z-0">
<img alt="Anime Street Scene" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1560972550-aba3456b5564?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>

<div className="absolute bottom-12 right-[-1rem] md:right-[-2rem] z-20">
<button className="bg-[#F2F584] hover:bg-[#ecee70] transition-colors text-black w-24 h-36 rounded-full flex flex-col items-center justify-center gap-2 border-[3px] border-[#EBE9DE] shadow-xl">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="dices"></i>
<span className="text-xs font-bold text-center leading-tight">CREATE<br/>ANIME</span>
</button>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-8">

<div className="relative w-full h-[400px] md:h-[420px] flex justify-end">
<div className="w-full max-w-md h-full relative bg-[#E5E2D6] rounded-[2rem] rounded-tl-[4rem] overflow-hidden border border-black/5 flex">

<div className="flex-1 h-full relative overflow-hidden">
<img alt="Anime Character" className="w-full h-full object-cover object-top" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="w-12 bg-[#F2F584] h-full flex flex-col justify-between items-center py-6 border-l border-black/5">
<div className="flex flex-col gap-2">
<i className="w-4 h-4 fill-black text-black" data-lucide="star"></i>
<i className="w-4 h-4 fill-black text-black" data-lucide="star"></i>
</div>
<i className="w-5 h-5 text-black" data-lucide="arrow-up"></i>
</div>
</div>
</div>

<div className="relative mt-auto pt-8">

<div className="absolute top-0 right-0 bg-black text-white px-3 py-1 rounded-t-lg z-10 flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
</div>

<div className="bg-white rounded-[2rem] rounded-tl-[1rem] p-8 shadow-sm border border-black/5 relative z-0">

<div className="absolute -top-[1px] left-0 w-24 h-12 bg-[#EBE9DE] rounded-br-[2rem] border-b border-r border-black/5 z-10"></div>
<div className="mt-4">
<h3 className="text-xl font-semibold tracking-tight mb-4">SMARTPHONE APP MEMES</h3>
<p className="text-lg text-gray-600 leading-relaxed mb-8">
                                The smartphone application MEMES, where Crypko serves as the core technology behind, is now available in Apple App Store &amp; Google Play.
                            </p>
<div className="flex flex-col md:flex-row justify-between items-center gap-4">

<div className="flex gap-3">
<div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
<i className="w-5 h-5 fill-current" data-lucide="app-window"></i>
</div>
<div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
<i className="w-5 h-5 fill-current" data-lucide="play"></i>
</div>
</div>

<button className="w-full md:w-auto flex items-center gap-3 border-2 border-gray-200 rounded-full pl-6 pr-2 py-2 hover:border-gray-400 transition-colors group">
<span className="font-semibold text-sm">Download</span>
<div className="w-8 h-8 rounded-full bg-[#F2F584] flex items-center justify-center group-hover:bg-[#ecee70] transition-colors">
<i className="w-4 h-4 text-black" data-lucide="download"></i>
</div>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="h-20"></div>
</main>


    </>
  );
}
