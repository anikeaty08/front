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
      

<div className="max-w-[1200px] mx-auto mb-6">
<h1 className="text-xl text-white font-medium tracking-tight">Takeoffmedia24.de Leistung im Januar 2026 vs. Dezember 2025</h1>
</div>

<div className="max-w-[1200px] mx-auto bg-[#121214] rounded-xl shadow-xl border border-white/5 overflow-hidden">

<div className="flex flex-nowrap overflow-x-auto no-scrollbar border-b border-white/5">

<div className="min-w-[280px] w-full md:w-1/4 p-6 bg-[#3b82f6] text-white flex flex-col justify-between h-40 shrink-0 relative group cursor-pointer transition-all hover:bg-[#2563eb]">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-xl opacity-90" icon="solar:check-square-linear"></iconify-icon>
<span className="text-sm font-medium opacity-90">Klicks insgesamt</span>
</div>
<div>
<div className="text-3xl font-medium tracking-tight mb-1">4.643</div>
<div className="text-xs opacity-80 mb-3">Januar 2026</div>
<div className="flex items-baseline justify-between">
<div>
<div className="text-sm font-medium opacity-90">3.738</div>
<div className="text-xs opacity-70">Dezember 2025</div>
</div>
</div>
</div>
<iconify-icon className="absolute bottom-4 right-4 text-lg opacity-60 hover:opacity-100 transition-opacity" icon="solar:question-circle-linear"></iconify-icon>
</div>

<div className="min-w-[280px] w-full md:w-1/4 p-6 bg-[#8b5cf6] text-white flex flex-col justify-between h-40 shrink-0 relative group cursor-pointer transition-all hover:bg-[#7c3aed] border-l border-white/10">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-xl opacity-90" icon="solar:eye-linear"></iconify-icon>
<span className="text-sm font-medium opacity-90 truncate">Impressionen insges...</span>
</div>
<div>
<div className="text-3xl font-medium tracking-tight mb-1">185.399</div>
<div className="text-xs opacity-80 mb-3">Januar 2026</div>
<div className="flex items-baseline justify-between">
<div>
<div className="text-sm font-medium opacity-90">161.015</div>
<div className="text-xs opacity-70">Dezember 2025</div>
</div>
</div>
</div>
<iconify-icon className="absolute bottom-4 right-4 text-lg opacity-60 hover:opacity-100 transition-opacity" icon="solar:question-circle-linear"></iconify-icon>
</div>

<div className="min-w-[280px] w-full md:w-1/4 p-6 bg-[#18181b] text-zinc-400 flex flex-col justify-between h-40 shrink-0 relative group cursor-pointer hover:bg-[#202024] transition-colors border-r border-white/5 md:border-r-0 md:border-l">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-xl text-zinc-500" icon="solar:chart-square-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-400">Durchschnittliche CTR</span>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-zinc-100 mb-1">2,5 %</div>
<div className="text-xs text-zinc-500 mb-3">Januar 2026</div>
<div className="flex items-baseline justify-between">
<div>
<div className="text-sm font-medium text-zinc-300">2,3 %</div>
<div className="text-xs text-zinc-600">Dezember 2025</div>
</div>
</div>
</div>
<iconify-icon className="absolute bottom-4 right-4 text-lg text-zinc-600 hover:text-zinc-400 transition-colors" icon="solar:question-circle-linear"></iconify-icon>
</div>

<div className="min-w-[280px] w-full md:w-1/4 p-6 bg-[#18181b] text-zinc-400 flex flex-col justify-between h-40 shrink-0 relative group cursor-pointer hover:bg-[#202024] transition-colors border-l border-white/5">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-xl text-zinc-500" icon="solar:sort-vertical-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-400 truncate">Durchschnittliche Po...</span>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-zinc-100 mb-1">11,4</div>
<div className="text-xs text-zinc-500 mb-3">Januar 2026</div>
<div className="flex items-baseline justify-between">
<div>
<div className="text-sm font-medium text-zinc-300">12</div>
<div className="text-xs text-zinc-600">Dezember 2025</div>
</div>
</div>
</div>
<iconify-icon className="absolute bottom-4 right-4 text-lg text-zinc-600 hover:text-zinc-400 transition-colors" icon="solar:question-circle-linear"></iconify-icon>
</div>
</div>

<div className="p-4 md:p-8 bg-[#121214]">

<div className="flex justify-end mb-8">
<div className="relative inline-block text-left">
<button className="inline-flex justify-between items-center w-full rounded-md border border-white/10 shadow-sm px-4 py-2 bg-[#18181b] text-sm font-medium text-zinc-300 hover:bg-[#202024] focus:outline-none transition-colors" type="button">
                        Täglich
                        <iconify-icon className="ml-2 text-base" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>

<div className="relative w-full h-[350px] md:h-[400px]">

<div className="absolute -top-6 left-0 text-xs text-zinc-500 font-medium">Klicks</div>

<div className="absolute -top-6 right-0 text-xs text-zinc-500 text-right font-medium">Impressionen</div>

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">

<div className="w-full flex items-center">
<span className="w-8 text-xs text-zinc-600 text-right pr-2">225</span>
<div className="flex-1 border-t border-white/5"></div>
<span className="w-12 text-xs text-zinc-600 pl-2 text-right">9k</span>
</div>

<div className="w-full flex items-center">
<span className="w-8 text-xs text-zinc-600 text-right pr-2">150</span>
<div className="flex-1 border-t border-white/5"></div>
<span className="w-12 text-xs text-zinc-600 pl-2 text-right">6k</span>
</div>

<div className="w-full flex items-center">
<span className="w-8 text-xs text-zinc-600 text-right pr-2">75</span>
<div className="flex-1 border-t border-white/5"></div>
<span className="w-12 text-xs text-zinc-600 pl-2 text-right">3k</span>
</div>

<div className="w-full flex items-center">
<span className="w-8 text-xs text-zinc-600 text-right pr-2">0</span>
<div className="flex-1 border-t border-white/10"></div>
<span className="w-12 text-xs text-zinc-600 pl-2 text-right">0</span>
</div>
</div>

<div className="absolute inset-0 mx-8 mt-2 mb-2">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 1000 300">


<path d="M0,180 Q50,190 70,160 T140,130 T210,140 T280,110 T350,100 T420,150 T490,140 T560,110 T630,120 T700,160 T770,110 T840,110 T910,130 T1000,150" fill="none" opacity="0.6" stroke="#a78bfa" stroke-dasharray="4,4" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>

<path d="M0,140 Q40,230 70,210 T140,150 T210,140 T280,160 T350,180 T420,110 T490,160 T560,170 T630,150 T700,110 T770,190 T840,130 T910,150 T1000,210" fill="none" opacity="0.6" stroke="#60a5fa" stroke-dasharray="4,4" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>


<path d="M0,130 Q50,125 70,120 T140,100 T210,110 T280,90 T350,110 T420,105 T490,105 T560,115 T630,90 T700,110 T770,130 T840,120 T910,90 T1000,120" fill="none" stroke="#8b5cf6" strokeWidth="2.5" vector-effect="non-scaling-stroke"></path>

<path d="M0,110 Q50,110 70,120 T140,80 T210,120 T280,125 T350,120 T420,90 T490,70 T560,110 T630,100 T700,150 T770,160 T840,140 T910,80 T1000,110" fill="none" stroke="#3b82f6" strokeWidth="2.5" vector-effect="non-scaling-stroke"></path>

<circle className="cursor-pointer hover:r-6 transition-all shadow-lg" cx="630" cy="100" fill="#18181b" r="4" stroke="#3b82f6" strokeWidth="2"></circle>
<circle className="cursor-pointer hover:r-6 transition-all shadow-lg" cx="630" cy="90" fill="#18181b" r="4" stroke="#8b5cf6" strokeWidth="2"></circle>
</svg>
</div>

<div className="absolute bottom-[-24px] left-8 right-12 flex justify-between text-xs text-zinc-600 font-medium">
<span>02</span>
<span>04</span>
<span>06</span>
<span>08</span>
<span>10</span>
<span>12</span>
<span>14</span>
<span>16</span>
<span>18</span>
<span>20</span>
<span>22</span>
<span>24</span>
<span>26</span>
<span>28</span>
</div>
</div>

<div className="h-6"></div>
</div>
</div>

    </>
  );
}
