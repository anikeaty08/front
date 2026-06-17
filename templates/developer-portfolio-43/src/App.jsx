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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#C1272D]/10 rounded-full blur-[120px] animate-pulse"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
</div>

<div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl shadow-black/50 border border-white/10 bg-[#0A0A0A] group z-10 animate-fade-in transition-all duration-500 hover:shadow-[#C1272D]/20 hover:border-[#C1272D]/30">

<div className="absolute inset-0 z-0 overflow-hidden">

<img alt="Hamdi Ben Jarrar" className="w-full h-full object-cover animate-scale-in transition-transform duration-1000 group-hover:scale-105 filter brightness-[0.85] contrast-[1.1] grayscale-[0.1]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-90"></div>

<div className="absolute bottom-0 right-0 w-3/4 h-1/2 bg-gradient-to-t from-[#C1272D]/30 to-transparent blur-2xl mix-blend-overlay"></div>
</div>

<div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-20">

<div className="flex flex-col gap-1 animate-slide-down delay-200">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/60 transition-colors cursor-default">
<div className="relative w-2 h-2">
<span className="absolute inline-flex h-full w-full rounded-full bg-[#C1272D] opacity-75 animate-ping"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#C1272D]"></span>
</div>
<span className="text-xs font-semibold text-[#F5F1E8] tracking-tight font-grotesk">@hamdibenjarrar</span>
</div>
</div>

<div className="animate-slide-down delay-300">
<a className="w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white/80 hover:bg-white/10 hover:text-white hover:scale-110 transition-all duration-300 group/icon" href="#">
<svg className="w-4 h-4 transition-transform group-hover/icon:rotate-45" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="7" x2="17" y1="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
</a>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6 pb-8 z-20 flex flex-col items-center">

<div className="mb-6 animate-slide-up delay-300">
<div className="px-3 py-1 rounded-full border border-[#C1272D]/40 bg-[#C1272D]/10 backdrop-blur-md flex items-center gap-2 shadow-[0_0_20px_rgba(193,39,45,0.15)] animate-float">
<svg className="w-3 h-3" fill="none" height="24" stroke="#C1272D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
<span className="text-[10px] font-bold text-[#C1272D] tracking-widest uppercase font-grotesk">Open to Work</span>
</div>
</div>

<div className="flex flex-col items-center text-center -space-y-2 mb-8 w-full">

<h1 className="font-grotesk text-[4.5rem] leading-[0.9] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#F5F1E8] to-[#F5F1E8]/60 animate-slide-up delay-400 drop-shadow-2xl">
                    HAMDI
                </h1>

<h2 className="font-grotesk text-[2.75rem] leading-[0.9] font-bold tracking-tighter text-[#C1272D] animate-slide-up delay-500 drop-shadow-[0_4px_24px_rgba(193,39,45,0.4)] relative">
                    BEN JARRAR
                    
<div className="absolute inset-0 bg-[#C1272D] blur-3xl opacity-20 -z-10"></div>
</h2>

<div className="mt-4 flex items-center gap-3 animate-slide-up delay-700">
<span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-white/40"></span>
<p className="text-sm font-medium text-white/60 tracking-widest uppercase font-grotesk">Full Stack Developer</p>
<span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-white/40"></span>
</div>
</div>

<div className="w-full animate-slide-up delay-700">
<div className="relative group/card cursor-pointer overflow-hidden rounded-2xl bg-[#1a1a1a]/60 backdrop-blur-xl border border-white/10 hover:bg-[#252525]/80 transition-all duration-300 hover:border-[#C1272D]/30 hover:shadow-[0_0_30px_rgba(193,39,45,0.15)]">

<div className="absolute inset-0 -translate-x-full group-hover/card:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent z-0"></div>
<div className="relative z-10 flex items-center justify-between p-2 pl-3">
<div className="flex items-center gap-3">

<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C1272D] to-[#8a1c20] flex items-center justify-center shadow-lg group-hover/card:scale-105 transition-transform duration-300">
<span className="font-grotesk font-bold text-white text-xs">HB</span>
</div>

<div className="flex flex-col">
<span className="text-xs font-semibold text-[#F5F1E8] tracking-tight group-hover/card:text-[#C1272D] transition-colors">hamdibenjarrar.tech</span>
<span className="text-[10px] text-white/40 group-hover/card:text-white/60">View Portfolio 2025</span>
</div>
</div>

<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover/card:bg-[#F5F1E8] group-hover/card:border-[#F5F1E8] transition-all duration-300">
<svg className="w-4 h-4 text-white group-hover/card:text-black group-hover/card:-rotate-45 transition-all duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none z-30 opacity-50"></div>
</div>



    </>
  );
}
