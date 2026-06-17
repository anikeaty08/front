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
      

<header className="w-full border-b border-white/[0.04] backdrop-blur-xl sticky top-0 z-50 bg-[#050505]/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg tracking-tighter flex items-center gap-1.5" href="https://emergeusconference.com/" style={{fontFamily: '\'Georgia\', serif'}}>
<span className="text-[#CC9A18]">E</span>UC
            </a>
<nav className="hidden md:flex items-center gap-8 text-xs font-light tracking-wide">
<a className="text-zinc-500 hover:text-white transition-colors duration-200" href="#">Mission</a>
<a className="text-white transition-colors duration-200" href="#">Overseers &amp; Ambassadors</a>
<a className="text-zinc-500 hover:text-white transition-colors duration-200" href="#">Network</a>
</nav>
</div>
</header>
<main className="flex-grow flex flex-col relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#CC9A18]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

<section className="pt-24 pb-20 md:pt-32 md:pb-28 px-6 relative z-10 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#CC9A18]/20 bg-[#CC9A18]/[0.03] text-[#CC9A18] text-xs font-light uppercase tracking-widest mb-8">
<iconify-icon height="16" icon="solar:diploma-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>Pan Africa Diplomatic Commission</span>
</div>
<h1 className="text-white text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium leading-tight mb-8 max-w-4xl" style={{fontFamily: '\'Georgia\', serif'}}>
                Global Overseers &amp; <br className="hidden md:block"/> Goodwill Ambassadors
            </h1>
<p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                The Pan Africa Diplomatic Commission appoints global leaders who serve as Overseers and Goodwill Ambassadors of the mission.
            </p>
</section>

<section className="px-6 pb-24 relative z-10">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-white/[0.01] border border-white/[0.04] hover:bg-white/[0.02] hover:border-white/[0.08] transition-all duration-300 flex flex-col overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#CC9A18]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center text-zinc-300 group-hover:text-[#CC9A18] group-hover:border-[#CC9A18]/20 transition-all duration-300 mb-8">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-zinc-200 text-xl tracking-tight font-medium mb-4" style={{fontFamily: '\'Georgia\', serif'}}>Humanitarian Commitment</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                        These individuals represent leaders who have demonstrated commitment to humanitarian service, leadership development, and the empowerment of communities.
                    </p>
</div>

<div className="group relative p-8 rounded-2xl bg-white/[0.01] border border-white/[0.04] hover:bg-white/[0.02] hover:border-white/[0.08] transition-all duration-300 flex flex-col overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#CC9A18]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center text-zinc-300 group-hover:text-[#CC9A18] group-hover:border-[#CC9A18]/20 transition-all duration-300 mb-8">
<iconify-icon height="20" icon="solar:eye-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-zinc-200 text-xl tracking-tight font-medium mb-4" style={{fontFamily: '\'Georgia\', serif'}}>Overseers</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                        Serve as guiding leaders responsible for helping expand the mission of THE B. L. A. C. K. Kings &amp; Queens Worldwide across regions and institutions.
                    </p>
</div>

<div className="group relative p-8 rounded-2xl bg-white/[0.01] border border-white/[0.04] hover:bg-white/[0.02] hover:border-white/[0.08] transition-all duration-300 flex flex-col overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#CC9A18]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center text-zinc-300 group-hover:text-[#CC9A18] group-hover:border-[#CC9A18]/20 transition-all duration-300 mb-8">
<iconify-icon height="20" icon="solar:earth-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-zinc-200 text-xl tracking-tight font-medium mb-4" style={{fontFamily: '\'Georgia\', serif'}}>Goodwill Ambassadors</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                        Serve as representatives of diplomacy, cultural unity, and humanitarian outreach on an international scale.
                    </p>
</div>
</div>
</section>

<section className="px-6 pb-32 relative z-10">
<div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#CC9A18]/[0.05] to-transparent border border-[#CC9A18]/10 p-10 md:p-16 text-center relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#CC9A18]/40 to-transparent"></div>
<div className="flex justify-center mb-8">
<iconify-icon className="text-[#CC9A18]/70" height="32" icon="solar:crown-star-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h2 className="text-zinc-200 text-2xl md:text-3xl tracking-tight font-medium mb-6" style={{fontFamily: '\'Georgia\', serif'}}>
                    A Growing International Network
                </h2>
<p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                    These appointments represent a growing international network of leaders committed to making Africa great again through unity, service, and purpose.
                </p>
</div>
</section>
</main>

<footer className="border-t border-white/[0.04] py-8 text-center mt-auto z-10 bg-[#050505]">
<p className="text-xs text-zinc-600 font-light tracking-wide">© 2024 EmergeUs Conference. All rights reserved.</p>
</footer>

    </>
  );
}
