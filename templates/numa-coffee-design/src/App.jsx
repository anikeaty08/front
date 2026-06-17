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
      

<div className="relative w-full lg:w-1/2 min-h-[40vh] lg:min-h-screen bg-[#3E2B26] flex items-center justify-center overflow-hidden group order-1 lg:order-1">

<div className="absolute inset-0 opacity-20 pointer-events-none z-20 mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%221%22/%3E%3C/svg%3E\')'}}></div>

<img alt="Coffee Aesthetic" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay transition-transform duration-[2000ms] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-[#3E2B26]/10 to-[#3E2B26]/40 z-10"></div>
</div>

<div className="w-full lg:w-1/2 flex flex-col justify-between px-6 py-8 lg:p-24 order-2 lg:order-2 bg-[#F9F7F2] min-h-[60vh] lg:min-h-screen">

<div className="max-w-xl mx-auto lg:mx-0 space-y-10 my-auto w-full">

<div className="inline-flex items-center space-x-2 border border-[#3E2B26]/10 rounded-full px-3 py-1 bg-white shadow-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3E2B26] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#3E2B26]"></span>
</span>
<span className="text-xs uppercase tracking-widest font-medium text-[#3E2B26]/70">Coming Soon</span>
</div>

<div className="space-y-6">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#3E2B26] leading-[1.1]">
                    Curated speciality <br className="hidden md:block"/> coffee &amp; design.
                </h1>
<p className="text-lg md:text-xl text-[#3E2B26]/70 font-normal leading-relaxed max-w-md">
                    Elevate your daily coffee routine with our quarterly subscription box. A harmonious blend of taste and aesthetics.
                </p>
</div>

<div className="space-y-4 pt-4">
<div className="flex items-center gap-2 text-[#3E2B26] font-medium">
<i className="w-5 h-5 text-[#3E2B26]/60" data-lucide="arrow-down-right"></i>
<span>Join the waitlist</span>
</div>
<form className="relative group max-w-md" onsubmit="event.preventDefault();">
<div className="flex items-center justify-between w-full bg-white border border-[#3E2B26]/20 rounded-xl p-2 pl-4 shadow-sm transition-all duration-300 focus-within:ring-2 focus-within:ring-[#3E2B26]/10 focus-within:border-[#3E2B26]">
<input className="w-full bg-transparent text-lg text-[#3E2B26] placeholder:text-[#3E2B26]/30 focus:outline-none font-normal" placeholder="your@email.com" required="" type="email"/>
<button className="bg-[#3E2B26] hover:bg-[#2A1C19] text-[#F9F7F2] rounded-lg p-3 transition-colors duration-200 flex items-center justify-center shadow-md" type="submit">
<i className="w-5 h-5" data-lucide="move-right"></i>
</button>
</div>
</form>
<p className="text-sm text-[#3E2B26]/50 pl-1">
                    Be the first to know when we launch. No spam, just vibes.
                </p>
</div>

<div className="pt-8 flex flex-wrap gap-x-6 gap-y-3 text-[#3E2B26]/60">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="box"></i>
<span className="text-sm font-medium">Quarterly Drops</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="coffee"></i>
<span className="text-sm font-medium">Small Batch Roasts</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="sparkles"></i>
<span className="text-sm font-medium">Artisan Objects</span>
</div>
</div>
</div>

<footer className="w-full max-w-xl mx-auto lg:mx-0 pt-16 lg:pt-0 flex flex-col-reverse md:flex-row md:items-end justify-between gap-6 text-[#3E2B26]/40 text-xs font-medium tracking-wide">

<div className="flex items-center gap-4 lg:gap-6">
<span>© 2024 NUMA</span>
<a className="hover:text-[#3E2B26] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#3E2B26] transition-colors" href="#">Terms</a>
</div>

<div className="flex flex-col sm:flex-row gap-4 sm:items-center">
<a className="flex items-center gap-2 hover:text-[#3E2B26] transition-colors group" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
<span>Follow our journey for exclusive behind-the-scenes peeks.</span>
</a>
<a className="hover:text-[#3E2B26] transition-colors group flex items-center gap-2" href="mailto:hello@numa.coffee">
<i className="w-4 h-4" data-lucide="mail"></i>
<span className="sr-only">Email</span>
</a>
</div>
</footer>
</div>


    </>
  );
}
