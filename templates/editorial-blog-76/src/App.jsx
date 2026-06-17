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
      
<div className="max-w-[1400px] mx-auto w-full">

<header className="flex items-center justify-between pb-6">
<div className="text-2xl font-semibold tracking-tight">Norgram®</div>
<nav className="hidden md:flex items-center gap-10 text-sm font-medium uppercase tracking-wide">
<a className="hover:text-gray-600 transition-colors" href="#">Home</a>
<a className="hover:text-gray-600 transition-colors" href="#">About</a>
<a className="hover:text-gray-600 transition-colors" href="#">Blog</a>
<a className="hover:text-gray-600 transition-colors" href="#">Case</a>
</nav>
<div className="flex items-center gap-6">
<a className="text-sm font-medium uppercase tracking-wide hover:text-gray-600 transition-colors hidden sm:block" href="#">Contact</a>
<button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
<i className="w-4 h-4" data-lucide="pen" strokeWidth="1.5"></i>
</button>
</div>
</header>

<div className="w-full border-t-4 border-black mb-16"></div>

<div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-24">
<h1 className="text-7xl sm:text-8xl lg:text-9xl font-semibold tracking-tight leading-[0.9] lg:w-1/2">
                Insights<br/>&amp; Stories
            </h1>
<div className="flex flex-col sm:flex-row lg:w-1/2 justify-between items-start gap-8 lg:pl-12">
<p className="text-xl sm:text-2xl font-medium leading-snug max-w-md pt-3">
                    Thoughts on design, culture, and the work we do — from behind the scenes to what's shaping the industry.
                </p>
<button className="flex items-center gap-2 px-6 py-2.5 border border-black rounded-full hover:bg-gray-50 transition-colors text-sm font-medium uppercase tracking-wide shrink-0 mt-3">
                    Subscribe
                    <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="flex flex-wrap items-center gap-3 mb-8">
<button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2">
                ALL <span className="opacity-70 text-xs font-normal">[52]</span>
</button>
<button className="bg-[#f4f4f5] hover:bg-gray-200 text-gray-950 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-colors">
                DEVELOPMENT <span className="text-gray-500 text-xs font-normal">[52]</span>
</button>
<button className="bg-[#f4f4f5] hover:bg-gray-200 text-gray-950 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-colors">
                DESIGN <span className="text-gray-500 text-xs font-normal">[1]</span>
</button>
<button className="bg-[#f4f4f5] hover:bg-gray-200 text-gray-950 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-colors">
                INSIGHTS <span className="text-gray-500 text-xs font-normal">[1]</span>
</button>
<div className="hidden md:block w-px h-6 bg-gray-300 mx-3"></div>
<button className="bg-[#f4f4f5] hover:bg-gray-200 text-gray-950 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-colors">
                NEWS <span className="text-gray-500 text-xs font-normal">[23]</span>
</button>
</div>

<div className="w-full h-1 bg-[#f4f4f5] mb-12 relative rounded-full overflow-hidden">
<div className="absolute top-0 left-0 h-full w-[30%] bg-black rounded-full"></div>
</div>

<div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 mb-8">

<div className="flex items-center gap-4 md:w-1/4 lg:w-1/5 shrink-0">
<div className="w-12 h-12 bg-[#e4e4e7] rounded-full"></div>
<div>
<div className="text-base font-semibold">Ankit Goyal</div>
<div className="text-sm text-gray-500 font-medium">Digital Designer</div>
</div>
</div>

<div className="w-full flex-1">
<div className="flex justify-between items-start gap-4 mb-16">
<h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.1] max-w-2xl">
                        6 principles behind<br/>how we work
                    </h2>
<div className="hidden sm:flex gap-3 shrink-0 pt-2">
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#f4f4f5] transition-colors text-gray-600">
<i className="w-5 h-5" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#f4f4f5] transition-colors text-gray-600">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="flex flex-wrap justify-between items-center gap-4 text-sm font-medium text-gray-900">
<span className="bg-[#f4f4f5] px-6 py-2.5 rounded-full text-xs uppercase tracking-wider">Design</span>
<span className="text-gray-600">18 min read</span>
<span className="text-gray-600">02.06.26</span>
</div>
</div>
</div>

<div className="w-full h-80 md:h-[500px] bg-[#f4f4f5] border border-gray-200 flex items-center justify-center mt-6">
<span className="text-gray-400 text-sm font-medium tracking-widest uppercase">Placeholder</span>
</div>
</div>


    </>
  );
}
