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
      

<video autoplay="" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" loop="" muted="" playsinline="">
<source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260228_065522_522e2295-ba22-457e-8fdb-fbcd68109c73.mp4" type="video/mp4"/>
</video>

<main className="relative z-10 min-h-[90vh] flex flex-col pt-6 pb-12 px-4 sm:px-6 lg:px-8" style={{fontFamily: '\'Barlow\', sans-serif'}}>

<nav className="w-full max-w-6xl mx-auto bg-white rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-between p-2 pl-6 pr-2">

<a className="text-base font-semibold tracking-tighter text-black uppercase" href="#">
                MIRRIN
            </a>

<div className="hidden md:flex items-center space-x-8 text-sm font-normal text-gray-800 tracking-tight">
<a className="hover:text-black hover:opacity-70 transition-opacity" href="#">About</a>
<a className="hover:text-black hover:opacity-70 transition-opacity" href="#">Works</a>
<a className="hover:text-black hover:opacity-70 transition-opacity" href="#">Services</a>
<a className="hover:text-black hover:opacity-70 transition-opacity" href="#">Testimonial</a>
</div>

<a className="bg-[#222] hover:bg-black text-white text-sm font-normal py-2 px-4 rounded-full flex items-center gap-2 transition-colors" href="#">
<span>Book A Free Meeting</span>
<div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</a>
</nav>

<div className="flex-grow flex flex-col items-center justify-center text-center mt-16 mb-8 w-full max-w-5xl mx-auto">
<h1 className="flex flex-col items-center w-full">
<span className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
                    Agency that makes your
                </span>
<span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl italic text-white mt-2 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] leading-none" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                    videos &amp; reels viral
                </span>
</h1>
<p className="mt-8 text-base md:text-lg font-normal text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] max-w-2xl mx-auto tracking-tight">
                Short-form video editing for Influencers, Creators and Brands
            </p>
<a className="mt-12 bg-white hover:bg-gray-50 text-black rounded-full px-8 py-4 flex items-center gap-3 text-base font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl" href="#">
<iconify-icon height="20" icon="solar:play-linear" width="20"></iconify-icon>
<span className="tracking-tight">See Our Works</span>
</a>
</div>
</main>

    </>
  );
}
