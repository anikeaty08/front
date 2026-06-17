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
      

<div className="relative w-full max-w-7xl h-[calc(100dvh-2rem)] sm:h-auto sm:aspect-video rounded-3xl overflow-hidden group cursor-pointer shadow-[0_0_80px_rgba(0,0,0,0.6)]" onclick="this.classList.toggle('is-active')">


<img alt="Day Office" className="absolute inset-0 w-full h-full object-cover object-[calc(20%_-_150px)_center] sm:object-center z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37df9b9c-6860-40ad-928b-23e85832d1bf_1600w.jpg"/>


<img alt="Night Party" className="object-[calc(20%_-_150px)_center] group-[.is-active]:opacity-100 transition-all duration-1000 ease-out sm:object-center opacity-0 w-full h-full object-cover z-40 absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12832136-803b-424f-9712-cbc9768da354_1600w.jpg"/>

<div className="z-30 pointer-events-none absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-12 z-40 pointer-events-none">

<div className="absolute left-0 top-0 bottom-0 sm:top-auto sm:bottom-12 my-auto sm:my-0 h-fit flex flex-col items-center opacity-100 translate-y-0 scale-100 blur-0 transition-all duration-700 ease-out transform group-[.is-active]:opacity-0 group-[.is-active]:translate-y-8 group-[.is-active]:scale-95 group-[.is-active]:blur-md w-full px-6">
<div className="inline-flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-white shadow-[0_0_40px_rgba(0,0,0,0.4)]">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-white" data-lucide="mouse-pointer-2" strokeWidth="1.5"></i>
<p className="text-base sm:text-lg font-medium tracking-tight">
              Click to find out how your night will look like in a few days.
            </p>
</div>
</div>

<div className="absolute left-0 top-0 bottom-0 sm:top-auto sm:bottom-12 my-auto sm:my-0 h-fit flex flex-col items-center opacity-0 translate-y-12 scale-90 blur-md transition-all duration-700 delay-100 ease-out transform group-[.is-active]:translate-y-0 group-[.is-active]:opacity-100 group-[.is-active]:scale-100 group-[.is-active]:blur-0 w-full px-6">
<h1 className="text-6xl sm:text-7xl md:text-8xl font-medium tracking-tighter mb-6 sm:mb-8 text-center leading-tight drop-shadow-2xl py-4">
<span className="text-white inline-block pb-1 [text-shadow:0_0_15px_#60a5fa,_0_0_30px_#3b82f6,_0_0_45px_#2563eb]">
              Happy
            </span>
<br/>
<span className="italic font-light inline-block mt-2 [text-shadow:0_0_15px_#60a5fa,_0_0_30px_#3b82f6,_0_0_45px_#2563eb]">
<span className="text-[#2200F6] font-medium">6/</span>
<span className="text-white">6th</span>
</span>
</h1>
<div className="inline-flex items-center justify-center gap-3 px-5 py-3 sm:px-8 sm:py-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-white shadow-[0_0_40px_rgba(0,0,0,0.4)] transition-colors duration-300">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300" data-lucide="sparkles" strokeWidth="1.5"></i>
<p className="text-sm sm:text-base md:text-lg font-medium tracking-tight text-center">
              See you on 10th April at ^ a t o m's office, 06:00PM onwards.
            </p>
</div>
</div>
</div>
</div>


    </>
  );
}
