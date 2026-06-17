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
      
<section className="w-full max-w-7xl mx-auto px-6 md:px-12 relative animate-fade-in">

<div className="absolute top-0 left-6 right-6 h-px bg-[#191919]/10 w-full hidden md:block"></div>
<div className="flex flex-col items-center justify-center py-20 md:py-32 space-y-20">

<div className="text-center space-y-4 max-w-2xl mx-auto">
<h2 className="font-serif text-5xl md:text-6xl text-[#191919] tracking-tight leading-tight">
                    How booking works
                </h2>
<p className="font-sans text-lg md:text-xl text-[#191919]/70 tracking-wide font-light">
                    A clear, calm process designed for your comfort.
                </p>
</div>

<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12 lg:gap-x-20 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9B68A]/40 to-transparent"></div>

<div className="group flex flex-col items-start space-y-6 relative">
<div className="flex items-center justify-between w-full">
<span className="font-serif italic text-4xl md:text-5xl text-[#C9B68A]">01</span>

<div className="md:hidden h-px bg-[#C9B68A]/30 flex-grow ml-6"></div>
</div>
<div className="space-y-3 pt-2">
<h3 className="font-serif text-2xl md:text-3xl tracking-tight text-[#191919]">Selection</h3>
<p className="font-sans text-lg text-[#191919]/80 leading-relaxed font-light">
                            Select one to three profiles that match your specific moment and preferences.
                        </p>
</div>
</div>

<div className="group flex flex-col items-start space-y-6 relative">
<div className="flex items-center justify-between w-full">
<span className="font-serif italic text-4xl md:text-5xl text-[#C9B68A]">02</span>

<div className="md:hidden h-px bg-[#C9B68A]/30 flex-grow ml-6"></div>
</div>
<div className="space-y-3 pt-2">
<h3 className="font-serif text-2xl md:text-3xl tracking-tight text-[#191919]">Request</h3>
<p className="font-sans text-lg text-[#191919]/80 leading-relaxed font-light">
                            Submit your booking request with city, timing, duration, and desired setting.
                        </p>
</div>
</div>

<div className="group flex flex-col items-start space-y-6 relative">
<div className="flex items-center justify-between w-full">
<span className="font-serif italic text-4xl md:text-5xl text-[#C9B68A]">03</span>

<div className="md:hidden h-px bg-[#C9B68A]/30 flex-grow ml-6"></div>
</div>
<div className="space-y-3 pt-2">
<h3 className="font-serif text-2xl md:text-3xl tracking-tight text-[#191919]">Confirmation</h3>
<p className="font-sans text-lg text-[#191919]/80 leading-relaxed font-light">
                            Receive a discreet confirmation with final alignment and details.
                        </p>
</div>
</div>
</div>

<div className="flex flex-col items-center space-y-12 pt-10 max-w-3xl text-center">
<p className="text-xl md:text-2xl text-[#191919]/90 font-light leading-relaxed font-sans">
                    No unnecessary back-and-forth. A structured flow designed to feel as <span className="font-serif italic text-[#191919]">considered</span> as the service itself.
                </p>
<button className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-none border border-[#191919] bg-transparent overflow-hidden transition-all duration-500 hover:bg-[#191919]">
<span className="relative z-10 font-sans text-sm uppercase tracking-[0.2em] font-medium text-[#191919] transition-colors duration-300 group-hover:text-[#F7F3EE]">
                        Booking request
                    </span>
<i className="relative z-10 w-4 h-4 text-[#191919] transition-colors duration-300 group-hover:text-[#F7F3EE] stroke-[1.5]" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="absolute bottom-0 left-6 right-6 h-px bg-[#191919]/10 w-full hidden md:block"></div>
</section>


    </>
  );
}
