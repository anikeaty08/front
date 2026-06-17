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
      
<section className="min-h-screen flex flex-col overflow-hidden z-0 pt-20 pr-6 pb-20 pl-6 relative items-center justify-center">

<div className="absolute inset-0 -z-10 flex justify-center items-start pt-12 pointer-events-none">
<div className="w-full max-w-[1200px] h-[600px] opacity-40" style={{backgroundImage: 'radial-gradient(#B8B0A3 1.5px, transparent 1.5px)', backgroundSize: '16px 16px', maskImage: 'radial-gradient(ellipse 60% 50% at 50% 40%, black 15%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 40%, black 15%, transparent 80%)'}}>
</div>
</div>

<div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
<div className="absolute top-[5%] left-[-15%] w-[900px] h-[900px] bg-[radial-gradient(circle,_rgba(255,179,167,0.7)_0%,_transparent_60%)] mix-blend-multiply opacity-80"></div>
<div className="absolute top-[20%] right-[-15%] w-[1000px] h-[1000px] bg-[radial-gradient(circle,_rgba(153,179,255,0.7)_0%,_transparent_60%)] mix-blend-multiply opacity-80"></div>
</div>

<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-bold text-[#4A3B32] tracking-tight text-center max-w-4xl mt-12 mb-4 drop-shadow-[0_12px_32px_rgba(74,59,50,0.15)]">
            You keep practicing.<br/>
            You keep making the same mistakes.
        </h1>

<h2 className="md:text-2xl leading-relaxed text-xl font-bold text-gray-500 text-center max-w-2xl mb-20">
            Ora listens to your English conversations and shows you exactly what to fix — then makes you practice it.
        </h2>

<div className="flex flex-col z-10 w-full max-w-3xl mr-auto mb-12 ml-auto relative items-center">
<h3 className="md:text-5xl text-4xl font-bold text-[#2D2A26] tracking-tight text-center mb-6">Join the waiting list.</h3>


<form className="w-full max-w-md mx-auto flex flex-col gap-3" onsubmit="event.preventDefault();">
<div className="relative w-full">
<input className="w-full rounded-full border border-gray-300 px-6 py-4 bg-white/60 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[#4A3B32] focus:border-transparent text-lg placeholder-gray-400 text-[#2D2A26] shadow-sm transition-all" placeholder="your@email.com" required="" type="email"/>
</div>
<button className="w-full rounded-full bg-[#4A3B32] px-8 py-4 text-lg font-normal text-white hover:bg-[#3A2E27] hover:scale-[1.02] transition-all duration-200 shadow-md flex items-center justify-center gap-2" type="submit">
                    Claim your spot
                </button>
</form>
<p className="text-base text-gray-500 font-normal mt-6 text-center">
                53 spots remaining. No credit card required.
            </p>
<p className="text-sm text-gray-400 mt-16 font-normal text-center">
                We'll email you when your access is ready. No spam, unsubscribe anytime.
            </p>
</div>
</section>

    </>
  );
}
