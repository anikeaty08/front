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
      

<div className="fixed top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<header className="max-w-3xl mx-auto text-center mb-24 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/[0.03] mb-8">
<span className="text-[10px] uppercase tracking-[0.2em] text-amber-400/90 font-medium">The New Standard</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 mb-8 leading-[1.1] tracking-tight">
            Clarity is the <br/> ultimate <span className="not-italic text-white">luxury</span>.
        </h1>
<p className="text-lg md:text-xl text-zinc-500 font-light tracking-wide max-w-xl mx-auto leading-relaxed">
            Transition from the chaos of manual data to the elegance of automated intelligence.
        </p>
</header>

<main className="w-full max-w-5xl mx-auto relative z-10">

<div className="grid grid-cols-1 md:grid-cols-2 mb-8 px-4 md:px-8">
<div className="pb-2 border-b border-white/5 md:border-none">
<h2 className="text-xs uppercase tracking-[0.25em] text-zinc-600 font-medium">The Old Way</h2>
</div>
<div className="hidden md:block pb-2">
<h2 className="text-xs uppercase tracking-[0.25em] text-amber-500/80 font-medium pl-8">The Intellania Way</h2>
</div>
</div>

<div className="flex flex-col gap-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-2xl overflow-hidden p-[1px]">
<div className="bg-[#080808] rounded-2xl overflow-hidden">

<div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors duration-700 group relative">

<div className="p-6 md:p-10 flex items-start gap-5 opacity-60 group-hover:opacity-40 transition-opacity duration-500">
<iconify-icon className="text-zinc-600 text-xl shrink-0 mt-1" icon="solar:close-square-linear"></iconify-icon>
<p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed">
                            Hours spent exporting and manually fixing broken spreadsheets
                        </p>
</div>

<div className="md:hidden px-6 pb-2">
<span className="text-[10px] uppercase tracking-widest text-amber-500/60">Solution</span>
</div>

<div className="p-6 md:p-10 md:pl-8 flex items-start gap-5 relative bg-gradient-to-r from-transparent via-transparent to-amber-900/[0.02]">
<div className="absolute left-0 top-8 bottom-8 w-px bg-white/[0.04] hidden md:block"></div>
<iconify-icon className="text-amber-400 text-xl shrink-0 mt-1 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" icon="solar:verified-check-linear"></iconify-icon>
<p className="text-base md:text-lg text-zinc-100 font-normal leading-relaxed tracking-wide">
                            Dashboards update <span className="text-white border-b border-amber-500/30 pb-0.5">automatically</span> in real-time
                        </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors duration-700 group relative">
<div className="p-6 md:p-10 flex items-start gap-5 opacity-60 group-hover:opacity-40 transition-opacity duration-500">
<iconify-icon className="text-zinc-600 text-xl shrink-0 mt-1" icon="solar:close-square-linear"></iconify-icon>
<p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed">
                            Data scattered across CRM, billing, booking and Excel files
                        </p>
</div>
<div className="md:hidden px-6 pb-2">
<span className="text-[10px] uppercase tracking-widest text-amber-500/60">Solution</span>
</div>
<div className="p-6 md:p-10 md:pl-8 flex items-start gap-5 relative bg-gradient-to-r from-transparent via-transparent to-amber-900/[0.02]">
<div className="absolute left-0 top-8 bottom-8 w-px bg-white/[0.04] hidden md:block"></div>
<iconify-icon className="text-amber-400 text-xl shrink-0 mt-1 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" icon="solar:database-linear"></iconify-icon>
<p className="text-base md:text-lg text-zinc-100 font-normal leading-relaxed tracking-wide">
                            One unified, immaculate source of truth
                        </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors duration-700 group relative">
<div className="p-6 md:p-10 flex items-start gap-5 opacity-60 group-hover:opacity-40 transition-opacity duration-500">
<iconify-icon className="text-zinc-600 text-xl shrink-0 mt-1" icon="solar:close-square-linear"></iconify-icon>
<p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed">
                            Slow decisions because the data simply isn't ready
                        </p>
</div>
<div className="md:hidden px-6 pb-2">
<span className="text-[10px] uppercase tracking-widest text-amber-500/60">Solution</span>
</div>
<div className="p-6 md:p-10 md:pl-8 flex items-start gap-5 relative bg-gradient-to-r from-transparent via-transparent to-amber-900/[0.02]">
<div className="absolute left-0 top-8 bottom-8 w-px bg-white/[0.04] hidden md:block"></div>
<iconify-icon className="text-amber-400 text-xl shrink-0 mt-1 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" icon="solar:bolt-linear"></iconify-icon>
<p className="text-base md:text-lg text-zinc-100 font-normal leading-relaxed tracking-wide">
                            Insights delivered instantly for faster strategy
                        </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors duration-700 group relative">
<div className="p-6 md:p-10 flex items-start gap-5 opacity-60 group-hover:opacity-40 transition-opacity duration-500">
<iconify-icon className="text-zinc-600 text-xl shrink-0 mt-1" icon="solar:close-square-linear"></iconify-icon>
<p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed">
                            Endless manual tasks and repetitive follow-ups
                        </p>
</div>
<div className="md:hidden px-6 pb-2">
<span className="text-[10px] uppercase tracking-widest text-amber-500/60">Solution</span>
</div>
<div className="p-6 md:p-10 md:pl-8 flex items-start gap-5 relative bg-gradient-to-r from-transparent via-transparent to-amber-900/[0.02]">
<div className="absolute left-0 top-8 bottom-8 w-px bg-white/[0.04] hidden md:block"></div>
<iconify-icon className="text-amber-400 text-xl shrink-0 mt-1 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" icon="solar:magic-stick-3-linear"></iconify-icon>
<p className="text-base md:text-lg text-zinc-100 font-normal leading-relaxed tracking-wide">
                            AI-driven workflows that run autonomously
                        </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 hover:bg-white/[0.02] transition-colors duration-700 group relative">
<div className="p-6 md:p-10 flex items-start gap-5 opacity-60 group-hover:opacity-40 transition-opacity duration-500">
<iconify-icon className="text-zinc-600 text-xl shrink-0 mt-1" icon="solar:close-square-linear"></iconify-icon>
<p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed">
                            Hiring senior analysts or BI talent is expensive
                        </p>
</div>
<div className="md:hidden px-6 pb-2">
<span className="text-[10px] uppercase tracking-widest text-amber-500/60">Solution</span>
</div>
<div className="p-6 md:p-10 md:pl-8 flex items-start gap-5 relative bg-gradient-to-r from-transparent via-transparent to-amber-900/[0.02]">
<div className="absolute left-0 top-8 bottom-8 w-px bg-white/[0.04] hidden md:block"></div>
<iconify-icon className="text-amber-400 text-xl shrink-0 mt-1 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" icon="solar:crown-star-linear"></iconify-icon>
<p className="text-base md:text-lg text-zinc-100 font-normal leading-relaxed tracking-wide">
                            Simple monthly subscription with <span className="text-white">white-glove</span> support
                        </p>
</div>
</div>
</div>
</div>

<div className="flex justify-center mt-12 opacity-30">
<div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
</div>
</main>

    </>
  );
}
