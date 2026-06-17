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
      

<div className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] mix-blend-multiply bg-grain"></div>
<div className="flex-grow flex flex-col w-full p-6 md:p-12 relative z-10">

<header className="flex justify-between items-start w-full mb-12 md:mb-0 flex-none">
<div className="font-['Newsreader',_serif] text-xl tracking-tighter uppercase leading-[0.85] font-light">
                T<br/>E<br/>A
            </div>
<div className="font-['Space_Grotesk',_sans-serif] text-xs tracking-[0.2em] uppercase text-right leading-relaxed flex flex-col items-end">
<span>Status: Verified</span>
<span className="text-[#E63946] flex items-center gap-2 mt-1">
                    // <span id="clock">14:24:00 GMT</span>
</span>
</div>
</header>

<main className="flex-grow grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8 items-center mt-auto mb-auto py-12">

<section className="col-span-1 md:col-span-7 lg:col-span-8 flex flex-col justify-center">
<h1 className="font-['Newsreader',_serif] italic font-light text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter text-[#0A0A0A] -ml-1 md:-ml-2">
                    The Archive<br/>is Open.
                </h1>
</section>

<section className="col-span-1 md:col-span-5 lg:col-span-4 flex flex-col justify-center border-l-0 md:border-l border-[#0A0A0A] md:pl-8 lg:pl-12">
<h2 className="font-['Space_Grotesk',_sans-serif] text-xs tracking-[0.2em] uppercase text-[#0A0A0A]/60 mb-8">Manifesto of Delivery</h2>
<div className="flex flex-col w-full group cursor-default">
<div className="border-t border-[#0A0A0A] py-5">
<div className="flex justify-between items-start font-['Space_Grotesk',_sans-serif] text-xs tracking-[0.1em] uppercase mb-3">
<span>Transmission 01</span>
<span className="text-[#E63946]">Immediate</span>
</div>
<p className="font-['Newsreader',_serif] text-2xl tracking-tight leading-none text-[#0A0A0A]">The Welcome Brief</p>
</div>
<div className="border-t border-[#0A0A0A] py-5 opacity-50 hover:opacity-100 transition-none">
<div className="flex justify-between items-start font-['Space_Grotesk',_sans-serif] text-xs tracking-[0.1em] uppercase mb-3">
<span>Transmission 02</span>
<span>Sun, 08:00 EST</span>
</div>
<p className="font-['Newsreader',_serif] text-2xl tracking-tight leading-none text-[#0A0A0A]">The Weekly Dispatch</p>
</div>
<div className="border-t border-b border-[#0A0A0A] py-5 opacity-50 hover:opacity-100 transition-none">
<div className="flex justify-between items-start font-['Space_Grotesk',_sans-serif] text-xs tracking-[0.1em] uppercase mb-3">
<span>Transmission 03</span>
<span>Quarterly</span>
</div>
<p className="font-['Newsreader',_serif] text-2xl tracking-tight leading-none text-[#0A0A0A]">The Master Monograph</p>
</div>
</div>
</section>
</main>

<footer className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 items-end flex-none pt-12 md:pt-0">

<div className="col-span-1 md:col-span-5 lg:col-span-4 h-full">
<a className="block w-full h-full bg-[#0A0A0A] text-[#F2F2ED] hover:bg-[#E63946] hover:text-[#0A0A0A] transition-none p-6 md:p-8 relative group flex flex-col justify-between min-h-[160px]" href="#">
<div className="absolute top-6 right-6 md:top-8 md:right-8 w-1 h-1 bg-[#E63946] group-hover:bg-[#0A0A0A] animate-pulse"></div>
<div className="font-['Space_Grotesk',_sans-serif] text-xs tracking-[0.2em] uppercase mb-8">Path A // Active</div>
<div className="font-['Newsreader',_serif] italic text-3xl md:text-4xl tracking-tight leading-none flex justify-between items-end">
<span>Join the<br/>Syndicate</span>
<iconify-icon className="text-3xl opacity-0 group-hover:opacity-100 transition-none" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>
</div>

<div className="col-span-1 md:col-span-7 lg:col-span-8 pb-4 md:pb-6 border-b border-[#0A0A0A]">
<div className="font-['Space_Grotesk',_sans-serif] text-xs tracking-[0.2em] uppercase text-[#0A0A0A]/60 mb-6 md:mb-8">Path B // Hall of Fame Index</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
<a className="group relative block w-full" href="#">
<div className="font-['Space_Grotesk',_sans-serif] text-xs tracking-[0.1em] uppercase mb-2 text-[#E63946] opacity-0 group-hover:opacity-100 transition-none">Decrypting Design</div>
<span className="font-['Newsreader',_serif] font-light text-2xl md:text-3xl tracking-tight leading-none block group-hover:italic group-hover:pl-4 transition-all duration-75">
                            Architecture of Silence
                        </span>
</a>
<a className="group relative block w-full" href="#">
<div className="font-['Space_Grotesk',_sans-serif] text-xs tracking-[0.1em] uppercase mb-2 text-[#E63946] opacity-0 group-hover:opacity-100 transition-none">Material Studies</div>
<span className="font-['Newsreader',_serif] font-light text-2xl md:text-3xl tracking-tight leading-none block group-hover:italic group-hover:pl-4 transition-all duration-75">
                            The Weight of Ink
                        </span>
</a>
</div>
</div>
</footer>
</div>

    </>
  );
}
