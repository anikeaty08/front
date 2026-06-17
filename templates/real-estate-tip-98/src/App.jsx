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
      

<div className="w-full max-w-3xl">
<div className="mb-2 text-xs font-mono text-gray-400 uppercase tracking-widest">01. Editorial Premium</div>
<div className="bg-[#E7F2FF] rounded-xl border border-[#001B38]/10 p-8 md:p-10 relative overflow-hidden group">
<div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
<div className="flex-shrink-0">
<div className="w-12 h-12 rounded-full border border-[#001B38]/20 flex items-center justify-center bg-white/50 text-[#001B38]">
<iconify-icon height="24" icon="lucide:lightbulb" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="space-y-3">
<h3 className="text-[#001B38] text-sm font-semibold tracking-wide uppercase flex items-center gap-2">
                        Dica
                        <span className="w-8 h-px bg-[#FF1200]"></span>
</h3>
<p className="text-[#001B38] text-lg leading-relaxed font-light">
                        Você pode até manter uma operação funcionando apenas com gestão. Mas não vai construir uma unidade de alto desempenho sem liderança.
                    </p>
</div>
</div>
</div>
</div>

<div className="w-full max-w-3xl">
<div className="mb-2 text-xs font-mono text-gray-400 uppercase tracking-widest">02. Minimalista Clean</div>
<div className="bg-white pl-8 py-6 pr-6 relative w-full">

<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#001B38]"></div>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2.5 text-[#001B38]">
<iconify-icon height="18" icon="lucide:lightbulb" strokeWidth="1.5" width="18"></iconify-icon>
<span className="font-semibold tracking-tight text-sm uppercase">Dica</span>
</div>
<p className="text-[#1C3A62] text-xl md:text-2xl leading-snug font-normal tracking-tight">
                    Você pode até manter uma operação funcionando apenas com gestão. Mas não vai construir uma unidade de alto desempenho sem liderança.
                </p>
</div>
</div>
</div>

<div className="w-full max-w-3xl">
<div className="mb-2 text-xs font-mono text-gray-400 uppercase tracking-widest">03. Blueprint Técnico</div>
<div className="relative bg-[#E7F2FF]/40 p-8 md:p-10">

<div className="absolute top-0 left-0 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-[#001B38]"></div>
<div className="absolute top-0 right-0 w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-[#001B38]"></div>
<div className="absolute bottom-0 left-0 w-6 h-6 border-b-[1.5px] border-l-[1.5px] border-[#001B38]"></div>
<div className="absolute bottom-0 right-0 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-[#001B38]"></div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2 text-[#001B38] opacity-80 mb-1">
<iconify-icon height="16" icon="lucide:sparkles" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">Insight Estratégico</span>
</div>
<div className="space-y-1">
<span className="block text-[#001B38] font-semibold text-base mb-2">Dica</span>
<p className="text-[#001B38] text-lg font-normal leading-relaxed">
                        Você pode até manter uma operação funcionando apenas com gestão. Mas não vai construir uma unidade de alto desempenho sem liderança.
                    </p>
</div>
</div>
</div>
</div>

<div className="w-full max-w-3xl">
<div className="mb-2 text-xs font-mono text-gray-400 uppercase tracking-widest">04. Card de Anotação</div>
<div className="bg-white border-2 border-dashed border-[#001B38]/20 rounded-lg p-8 md:p-12 relative">

<div className="absolute -top-5 left-8 bg-white px-2">
<div className="flex items-center gap-2 text-[#001B38] border border-[#001B38]/20 rounded-full py-1.5 px-4 shadow-sm">
<iconify-icon height="14" icon="lucide:lightbulb" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-tight">Dica RE/MAX</span>
</div>
</div>
<div className="mt-2">
<p className="text-[#001B38] text-lg font-normal leading-8 tracking-normal">
                    Você pode até manter uma operação funcionando apenas com gestão. Mas não vai construir uma unidade de alto desempenho sem liderança.
                </p>

<div className="mt-6 flex items-center justify-end">
<div className="h-1 w-1 bg-[#FF1200] rounded-full"></div>
</div>
</div>
</div>
</div>

    </>
  );
}
