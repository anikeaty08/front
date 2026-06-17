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
      

<div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
<div className="absolute top-0 w-[80vw] max-w-4xl h-[50vh] rounded-full bg-[#CC9A18] opacity-[0.04] blur-[120px]"></div>
<div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] rounded-full bg-[#CC9A18] opacity-[0.02] blur-[100px]"></div>
</div>

<nav className="relative z-50 w-full px-6 py-5 flex items-center justify-between border-b border-white/5 backdrop-blur-xl bg-[#050505]/60">
<a className="flex items-center gap-3 group" href="https://emergeusconference.com/">
<div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-[#CC9A18]/30 transition-colors">
<span className="font-georgia text-white text-sm tracking-widest font-medium">BK</span>
</div>
<span className="font-georgia text-white text-base tracking-[0.15em] hidden sm:block">B.L.A.C.K.</span>
</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2 font-light" href="https://emergeusconference.com/">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
            EmergeUs Home
        </a>
</nav>

<main className="relative z-10 flex-grow flex flex-col items-center pt-24 pb-32 px-6 sm:px-8 md:px-12 w-full max-w-7xl mx-auto">

<header className="text-center flex flex-col items-center w-full mb-20 md:mb-32">
<a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#CC9A18]/20 bg-[#CC9A18]/5 text-[#CC9A18] text-xs font-medium mb-8 hover:bg-[#CC9A18]/10 transition-colors" href="https://www.EmergeUsConference.com/black-kings-queens-worldwide">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5"></iconify-icon>
<span>The Global Movement</span>
</a>
<h1 className="font-georgia text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6 leading-[1.1] max-w-5xl font-medium">
                THE B. L. A. C. K. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#CC9A18] to-[#CC9A18]/70">KINGS &amp; QUEENS</span><br/>
<span className="text-3xl sm:text-4xl md:text-5xl text-neutral-500 tracking-normal font-normal">WORLDWIDE</span>
</h1>

<div className="mt-12 w-full max-w-3xl p-px rounded-2xl bg-gradient-to-b from-white/10 to-transparent">
<div className="bg-[#0a0a0a] rounded-2xl p-6 sm:p-10 flex flex-col items-center text-center">
<p className="text-xs text-neutral-500 mb-6 uppercase tracking-[0.2em] font-medium">B. L. A. C. K. Means</p>
<div className="font-georgia text-lg sm:text-xl md:text-2xl text-white flex flex-wrap justify-center gap-x-4 gap-y-2 leading-relaxed">
<span className="flex items-center group"><span className="text-[#CC9A18] mr-0.5 group-hover:scale-110 transition-transform">B</span>eautiful</span>
<span className="flex items-center group"><span className="text-[#CC9A18] mr-0.5 group-hover:scale-110 transition-transform">L</span>iving</span>
<span className="flex items-center group"><span className="text-[#CC9A18] mr-0.5 group-hover:scale-110 transition-transform">A</span>ncestor</span>
<span className="flex items-center group"><span className="text-[#CC9A18] mr-0.5 group-hover:scale-110 transition-transform">C</span>ontrolling</span>
<span className="flex items-center group"><span className="text-[#CC9A18] mr-0.5 group-hover:scale-110 transition-transform">K</span>ingdom</span>
</div>
</div>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

<div className="group relative p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#CC9A18]/30 transition-all duration-500 overflow-hidden flex flex-col">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#CC9A18]/10 rounded-full blur-3xl -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150 group-hover:bg-[#CC9A18]/20"></div>
<div className="w-12 h-12 rounded-full border border-white/10 bg-[#0a0a0a] flex items-center justify-center text-[#CC9A18] mb-8 relative z-10 group-hover:border-[#CC9A18]/50 transition-colors">
<iconify-icon className="text-xl" icon="solar:flag-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-georgia text-xl sm:text-2xl text-white mb-4 tracking-tight font-medium relative z-10">Visionary Leadership</h3>
<p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light relative z-10 flex-grow">
                    THE B. L. A. C. K. Kings &amp; Queens Worldwide is a global leadership movement committed to raising visionary leaders who operate with purpose, character, and responsibility.
                </p>
</div>

<div className="group relative p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#CC9A18]/30 transition-all duration-500 overflow-hidden flex flex-col">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#CC9A18]/10 rounded-full blur-3xl -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150 group-hover:bg-[#CC9A18]/20"></div>
<div className="w-12 h-12 rounded-full border border-white/10 bg-[#0a0a0a] flex items-center justify-center text-[#CC9A18] mb-8 relative z-10 group-hover:border-[#CC9A18]/50 transition-colors">
<iconify-icon className="text-xl" icon="solar:hand-heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-georgia text-xl sm:text-2xl text-white mb-4 tracking-tight font-medium relative z-10">Humanitarian Service</h3>
<p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light relative z-10 flex-grow">
                    This organization recognizes individuals who have demonstrated extraordinary dedication to humanitarian service, leadership development, education, and community empowerment.
                </p>
</div>

<div className="group relative p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#CC9A18]/30 transition-all duration-500 overflow-hidden flex flex-col">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#CC9A18]/10 rounded-full blur-3xl -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150 group-hover:bg-[#CC9A18]/20"></div>
<div className="w-12 h-12 rounded-full border border-white/10 bg-[#0a0a0a] flex items-center justify-center text-[#CC9A18] mb-8 relative z-10 group-hover:border-[#CC9A18]/50 transition-colors">
<iconify-icon className="text-xl" icon="solar:earth-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-georgia text-xl sm:text-2xl text-white mb-4 tracking-tight font-medium relative z-10">Global Advancement</h3>
<p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light relative z-10 flex-grow">
                    Members of this leadership body include educators, diplomats, innovators, artists, humanitarian leaders, and community builders who have committed themselves to advancing Africa and its global descendants.
                </p>
</div>

<div className="group relative p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#CC9A18]/30 transition-all duration-500 overflow-hidden flex flex-col">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#CC9A18]/10 rounded-full blur-3xl -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150 group-hover:bg-[#CC9A18]/20"></div>
<div className="w-12 h-12 rounded-full border border-white/10 bg-[#0a0a0a] flex items-center justify-center text-[#CC9A18] mb-8 relative z-10 group-hover:border-[#CC9A18]/50 transition-colors">
<iconify-icon className="text-xl" icon="solar:shield-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-georgia text-xl sm:text-2xl text-white mb-4 tracking-tight font-medium relative z-10">Spiritual Integrity</h3>
<p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light relative z-10 flex-grow">
                    This movement emphasizes the development of Christlike character spiritually, encouraging leaders to embody wisdom, courage, compassion, and integrity.
                </p>
</div>
</div>
</main>

<footer className="relative z-10 w-full border-t border-white/5 bg-[#050505] py-8 px-6">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-500 font-light">© Emerge Us Conference. All rights reserved.</p>
<div className="flex items-center gap-1 text-xs text-neutral-600 font-light uppercase tracking-widest font-georgia">
<span className="text-[#CC9A18]">B</span>
<span className="text-[#CC9A18]">L</span>
<span className="text-[#CC9A18]">A</span>
<span className="text-[#CC9A18]">C</span>
<span className="text-[#CC9A18]">K</span>
</div>
</div>
</footer>

    </>
  );
}
