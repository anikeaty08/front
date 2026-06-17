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
      
<main className="flex-grow flex flex-col p-8 md:p-12 lg:p-16 max-w-[1600px] mx-auto w-full">

<header className="mb-12">

<div className="flex items-center gap-2 mb-6">
<div className="text-[#4C4CFF]">
<span className="iconify" data-height="32" data-icon="lucide:asterisk" data-width="32" style={{transform: 'rotate(45deg)'}}></span>
</div>
<span className="font-bold text-3xl tracking-tight text-slate-900">Ghost</span>
</div>

<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4C4CFF] tracking-tight">
                Ghost’s context-driven messaging resonates
            </h1>
</header>

<div className="flex flex-col lg:flex-row items-stretch justify-center relative flex-grow gap-6 lg:gap-0">

<div className="w-full lg:w-1/2 flex-1 bg-slate-50/80 border border-slate-200/60 rounded-3xl p-8 lg:p-10 shadow-lg shadow-indigo-100/50 relative z-10 flex flex-col justify-center min-h-[500px]">
<div className="flex items-center gap-3 mb-8">
<h2 className="text-2xl font-bold text-slate-900 tracking-tight">Signals-Driven</h2>
<span className="iconify text-slate-400 rotate-[-15deg]" data-icon="lucide:megaphone" data-width="28"></span>
</div>
<div className="space-y-6 text-lg font-medium text-slate-800">
<p className="font-normal text-slate-900">"Saw you raised Series B — congrats!"</p>
<p>Leads with what <span className="text-slate-500">we found about you</span></p>
<p>Feels like "I researched you"</p>
<p>Signals ARE the hook</p>
<p>Grounded in prospect data</p>
<p>Sounds like every other AI email</p>
</div>
</div>

<div className="hidden lg:flex items-center justify-center -mx-5 z-20 relative w-32 shrink-0 self-center">
<div className="relative w-full filter drop-shadow-xl">
<svg className="w-full text-white" fill="none" viewbox="0 0 140 100" xmlns="http://www.w3.org/2000/svg">
<path d="M0 20H90L130 50L90 80H0V20Z" fill="white" stroke="#E0E7FF" strokeWidth="2"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center pl-2 pb-1">
<span className="text-[#4338ca] font-bold text-lg leading-none">With Ghost</span>
</div>
</div>
</div>

<div className="lg:hidden flex justify-center -my-4 z-20">
<div className="bg-white border border-indigo-100 px-6 py-2 rounded-full shadow-md text-[#4338ca] font-bold flex items-center gap-2">
<span>With Ghost</span>
<span className="iconify" data-icon="lucide:arrow-down" data-width="16"></span>
</div>
</div>

<div className="w-full lg:w-1/2 flex-1 bg-gradient-to-br from-[#4338ca] to-[#312e81] rounded-3xl p-8 lg:p-10 text-white shadow-2xl shadow-indigo-900/20 relative z-10 overflow-hidden flex flex-col justify-center min-h-[500px]">

<div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-8">
<h2 className="text-2xl font-bold text-white tracking-tight">Context-Driven</h2>
<div className="flex">
<span className="iconify text-white" data-icon="lucide:brain-circuit" data-width="28"></span>
<span className="iconify text-white -ml-1 mt-3" data-icon="lucide:search" data-width="14"></span>
</div>
</div>
<div className="space-y-6 text-lg font-medium text-indigo-50/90 leading-relaxed">
<p className="font-normal text-white">"Transitioning from founder-led sales to SDR led sales often requires a codified sales motion...."</p>
<p>Leads with insights about people like you</p>
<p>Feels like "I understand your world"</p>
<p>Signals ADD context to the message</p>
<p>Grounded in your personas, products, proof points</p>
<p>Sounds like your best rep wrote it</p>
</div>
</div>
</div>
</div>
</main>

<footer className="p-8 w-full max-w-[1600px] mx-auto flex items-end justify-between text-slate-300 text-xs mt-auto">
<div className="w-full text-center">
            Confidential &amp; Proprietary — For intended recipient only. Not intended for distribution.
        </div>
<div className="absolute right-8 bottom-8 lg:right-16 lg:bottom-16 text-slate-400 font-medium text-sm">
            3
        </div>
</footer>

    </>
  );
}
