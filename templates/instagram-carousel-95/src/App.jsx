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
      

<div className="max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="relative aspect-square bg-black border border-white/10 rounded-none overflow-hidden shadow-2xl flex flex-col justify-between p-8 group transition-all duration-500 hover:border-emerald-500/30 hover:shadow-emerald-900/20">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/40 via-black to-black opacity-80"></div>

<div className="relative z-10 flex justify-between items-center opacity-60">
<span className="text-[10px] uppercase tracking-widest font-semibold text-emerald-500">Strategy</span>
<svg className="lucide lucide-sparkles w-4 h-4 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>

<div className="relative z-10 text-center space-y-5 my-auto">
<h1 className="font-serif text-5xl font-medium text-emerald-400 tracking-tight leading-[0.9]">
                    WHAT YOUR
                    <span className="text-white">CUSTOMERS</span>
                    ACTUALLY
                    WANT
                </h1>
<p className="text-base text-zinc-400 font-normal leading-snug px-2">
                    Hint: It’s not the automation tool you’re selling.
                </p>
</div>

<div className="relative z-10 flex justify-between items-center pt-2 border-t border-white/5 mt-auto">
<div className="text-xs text-zinc-500 font-mono">01/04</div>
<div className="flex items-center gap-2 text-xs font-medium text-white/80 group-hover:text-emerald-400 transition-colors">
<span>Swipe</span>
<svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="relative aspect-square bg-black border border-white/10 rounded-none overflow-hidden shadow-2xl flex flex-col justify-between p-8 group hover:border-white/20 transition-all duration-300">

<div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,_var(--tw-gradient-stops))] from-zinc-900/50 to-black"></div>

<div className="relative z-10 opacity-60">
<span className="text-[10px] uppercase tracking-widest font-semibold">Misconception</span>
</div>

<div className="relative z-10 flex flex-col items-center justify-center flex-grow space-y-6">

<div className="relative w-full h-24 flex items-center justify-center mb-2">
<div className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg border border-zinc-700 bg-zinc-900/50 flex items-center justify-center">
<svg className="lucide lucide-workflow w-4 h-4 text-zinc-500" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<div className="absolute h-px w-8 bg-zinc-800 left-[3.5rem] top-1/2 -translate-y-1/2"></div>
<div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 rounded-xl border border-zinc-600 bg-zinc-800/50 flex items-center justify-center z-10">
<span className="font-bold text-sm text-zinc-400">n8n</span>
</div>
<div className="absolute h-px w-8 bg-zinc-800 right-[3.5rem] top-1/2 -translate-y-1/2"></div>
<div className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg border border-zinc-700 bg-zinc-900/50 flex items-center justify-center">
<svg className="lucide lucide-database w-4 h-4 text-zinc-500" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-80">
<div className="w-3/4 h-px bg-red-500 rotate-12 absolute"></div>
<div className="w-3/4 h-px bg-red-500 -rotate-12 absolute"></div>
</div>
</div>
<div className="text-center space-y-3">
<h2 className="font-serif text-2xl font-medium tracking-tight leading-tight">
                        They don't wantanother workflow.
                    </h2>
<p className="text-sm text-zinc-400 leading-relaxed px-2">
                        Clients aren't buying your nodes or API keys. Stop selling mechanics.
                    </p>
</div>
</div>

<div className="relative z-10 flex justify-center gap-1.5 pt-4">
<div className="w-1 h-1 rounded-full bg-zinc-700"></div>
<div className="w-1 h-1 rounded-full bg-white"></div>
<div className="w-1 h-1 rounded-full bg-zinc-700"></div>
<div className="w-1 h-1 rounded-full bg-zinc-700"></div>
</div>
</div>

<div className="relative aspect-square bg-black border border-white/10 rounded-none overflow-hidden shadow-2xl flex flex-col justify-between p-8 group hover:border-emerald-500/20 transition-all duration-300">

<div className="absolute top-0 right-0 w-48 h-48 bg-emerald-900/20 blur-[60px] rounded-full pointer-events-none"></div>
<div className="relative z-10 opacity-60">
<span className="text-[10px] uppercase tracking-widest font-semibold">The Reality</span>
</div>
<div className="relative z-10 flex flex-col justify-center flex-grow space-y-6">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
<svg className="lucide lucide-eye w-5 h-5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h2 className="font-serif text-3xl font-medium text-white tracking-tight leading-none">
                    They want <span className="text-emerald-400 italic">understanding.</span>
</h2>
<div className="space-y-3 pt-1">
<div className="flex gap-3 items-start">
<svg className="lucide lucide-check w-4 h-4 text-emerald-500 mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<p className="text-sm text-zinc-300 leading-snug">
                            Someone who sees the problems they are having <span className="text-white font-medium">right now</span>.
                        </p>
</div>
<div className="flex gap-3 items-start">
<svg className="lucide lucide-check w-4 h-4 text-emerald-500 mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<p className="text-sm text-zinc-300 leading-snug">
                            Someone who anticipates the bottlenecks they will face <span className="text-white font-medium">later</span>.
                        </p>
</div>
</div>
</div>

<div className="relative z-10 flex justify-center gap-1.5 pt-4">
<div className="w-1 h-1 rounded-full bg-zinc-700"></div>
<div className="w-1 h-1 rounded-full bg-zinc-700"></div>
<div className="w-1 h-1 rounded-full bg-white"></div>
<div className="w-1 h-1 rounded-full bg-zinc-700"></div>
</div>
</div>

<div className="relative aspect-square bg-black border border-white/10 rounded-none overflow-hidden shadow-2xl flex flex-col justify-between p-8 group hover:border-emerald-500/30 transition-all duration-300">

<div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-emerald-950/50 to-transparent opacity-60"></div>
<div className="relative z-10 opacity-60">
<span className="text-[10px] uppercase tracking-widest font-semibold">Solution</span>
</div>
<div className="relative z-10 flex flex-col justify-center flex-grow text-center space-y-5">
<div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-black shadow-lg shadow-emerald-900/40">
<svg className="lucide lucide-arrow-left-right w-6 h-6" data-lucide="arrow-left-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>
</div>
<h2 className="font-serif text-3xl font-medium text-white tracking-tight">
                    Turn chaos into <span className="text-emerald-400">business.</span>
</h2>
<p className="text-sm text-zinc-300 leading-relaxed px-2">
                    Accept their mess. Structure it. Sell the <span className="text-white font-medium underline decoration-emerald-500/50 underline-offset-2">inevitability of success</span>, not just the code.
                </p>
</div>

<div className="relative z-10 mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-zinc-400" style={{}}>@theresonanceagency</span>
</div>
<div className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
<svg className="lucide lucide-bookmark w-4 h-4 text-white" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</div>
</div>
</div>
</div>


    </>
  );
}
