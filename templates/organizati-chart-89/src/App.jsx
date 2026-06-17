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
      

<div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-x-auto w-full max-w-7xl scrollbar-hide">
<div className="min-w-max p-8 md:p-16 flex flex-col items-center">

<div className="flex flex-col items-center relative z-20 w-full">
<div className="relative flex justify-center items-center">

<div className="z-20 transition-all hover:shadow-md hover:-translate-y-0.5 text-white text-center bg-[#29154a] w-[200px] rounded-[1rem] pt-5 pr-8 pb-5 pl-8 relative shadow-sm">
<h2 className="text-lg font-medium tracking-tight mb-1">Sergio Abreu</h2>
<p className="uppercase text-sm font-medium text-white/80 tracking-widest">CEO</p>
</div>

<div className="hidden lg:flex absolute left-[100%] top-1/2 -translate-y-1/2 items-center pl-2 z-10">

<div className="w-8 border-t-[2.5px] border-dashed border-[#29154a]"></div>
<div className="flex items-center">

<div className="bg-white border-[2.5px] border-dashed border-[#29154a] rounded-[1rem] px-5 py-3.5 text-center w-[160px] transition-colors hover:bg-slate-50">
<p className="leading-snug text-base font-medium italic text-slate-500">Real Estate<br/>Advisor</p>
</div>
<div className="w-5 border-t-[2.5px] border-dashed border-[#29154a]"></div>

<div className="bg-white border-[2.5px] border-dashed border-[#29154a] rounded-[1rem] px-5 py-3.5 text-center w-[160px] transition-colors hover:bg-slate-50">
<p className="font-medium text-base text-slate-500 italic leading-snug">Compliance<br/>Advisor</p>
</div>
<div className="w-5 border-t-[2.5px] border-dashed border-[#29154a]"></div>

<div className="bg-white border-[2.5px] border-dashed border-[#29154a] rounded-[1rem] px-5 py-3.5 text-center w-[160px] transition-colors hover:bg-slate-50">
<p className="font-medium text-base text-slate-500 italic leading-snug">SaaS Scaling<br/>Advisor</p>
</div>
</div>
</div>
</div>

<div className="flex lg:hidden flex-col items-center w-full mt-2 z-10">
<div className="h-6 border-l-[2.5px] border-dashed border-[#29154a]"></div>
<div className="flex flex-col gap-0 items-center">
<div className="bg-white border-[2.5px] border-dashed border-[#29154a] rounded-[1rem] px-5 py-3 text-center w-[170px]">
<p className="font-medium text-base text-slate-500 italic leading-snug">Real Estate<br/>Advisor</p>
</div>
<div className="h-4 border-l-[2.5px] border-dashed border-[#29154a]"></div>
<div className="bg-white border-[2.5px] border-dashed border-[#29154a] rounded-[1rem] px-5 py-3 text-center w-[170px]">
<p className="font-medium text-base text-slate-500 italic leading-snug">Compliance<br/>Advisor</p>
</div>
<div className="h-4 border-l-[2.5px] border-dashed border-[#29154a]"></div>
<div className="bg-white border-[2.5px] border-dashed border-[#29154a] rounded-[1rem] px-5 py-3 text-center w-[170px]">
<p className="font-medium text-base text-slate-500 italic leading-snug">SaaS Scaling<br/>Advisor</p>
</div>
</div>
</div>

<div className="w-[2.5px] h-8 bg-[#29154a]"></div>
</div>

<div className="flex flex-row justify-center w-full">

<div className="relative flex flex-col items-center px-2 md:px-4 flex-1">
<div className="absolute top-0 right-0 w-[50%] border-t-[2.5px] border-[#29154a]"></div>
<div className="w-[2.5px] h-6 bg-[#29154a]"></div>
<div className="border-[2.5px] transition-all hover:shadow-md hover:-translate-y-0.5 text-center bg-[#594379] w-full max-w-[200px] z-10 border-[#594379] rounded-[1rem] pt-4 pr-3 pb-4 pl-3 relative shadow-sm">
<h3 className="font-medium text-base md:text-lg tracking-tight mb-1 text-white">Dimitra Karagiorgiadi</h3>
<p className="font-medium text-sm md:text-[15px] uppercase tracking-widest text-white/80">COO</p>
</div>
</div>

<div className="relative flex flex-col items-center px-2 md:px-4 flex-1">
<div className="absolute top-0 left-0 w-full border-t-[2.5px] border-[#29154a]"></div>
<div className="w-[2.5px] h-6 bg-[#29154a]"></div>
<div className="bg-[#594379] border-[2.5px] border-[#594379] rounded-[1rem] px-3 py-4 text-center w-full max-w-[200px] shadow-sm relative z-10 transition-all hover:shadow-md hover:-translate-y-0.5">
<h3 className="font-medium text-base md:text-lg tracking-tight mb-1 text-white">Ioannis Petridis</h3>
<p className="font-medium text-sm md:text-[15px] uppercase tracking-widest text-white/80">CAIO</p>
</div>
</div>

<div className="relative flex flex-col items-center px-2 md:px-4 flex-1">
<div className="absolute top-0 left-0 w-full border-t-[2.5px] border-[#29154a]"></div>
<div className="w-[2.5px] h-6 bg-[#29154a]"></div>
<div className="bg-[#594379] border-[2.5px] border-[#594379] rounded-[1rem] px-3 py-4 text-center w-full max-w-[200px] shadow-sm relative z-10 transition-all hover:shadow-md hover:-translate-y-0.5">
<h3 className="font-medium text-base md:text-lg tracking-tight mb-1 text-white">Mirko Simunovic</h3>
<p className="font-medium text-sm md:text-[15px] uppercase tracking-widest text-white/80">CTO</p>
</div>

<div className="w-[2.5px] h-6 bg-[#29154a]"></div>
<div className="flex flex-row justify-center w-full min-w-[280px]">

<div className="relative flex flex-col items-center px-2.5 flex-1">
<div className="absolute top-0 right-0 w-[50%] border-t-[2.5px] border-[#29154a]"></div>
<div className="w-[2.5px] h-6 bg-[#29154a]"></div>
<div className="bg-[#f97316] text-white rounded-[1rem] py-3.5 px-3 text-center w-full h-[90px] flex items-center justify-center shadow-sm relative z-10 transition-colors hover:bg-[#ea580c]">
<p className="font-medium text-base tracking-tight">Developer</p>
</div>
</div>

<div className="relative flex flex-col items-center px-2.5 flex-1">
<div className="absolute top-0 left-0 w-[50%] border-t-[2.5px] border-[#29154a]"></div>
<div className="w-[2.5px] h-6 bg-[#29154a]"></div>
<div className="bg-[#f97316] text-white rounded-[1rem] py-3.5 px-3 text-center w-full h-[90px] flex items-center justify-center shadow-sm relative z-10 transition-colors hover:bg-[#ea580c]">
<p className="font-medium text-base tracking-tight">UX Designer</p>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col items-center px-2 md:px-4 flex-1">
<div className="absolute top-0 left-0 w-[50%] border-t-[2.5px] border-[#29154a]"></div>
<div className="w-[2.5px] h-6 bg-[#29154a]"></div>
<div className="bg-[#594379] border-[2.5px] border-[#594379] rounded-[1rem] px-3 py-4 text-center w-full max-w-[200px] shadow-sm relative z-10 transition-all hover:shadow-md hover:-translate-y-0.5">
<h3 className="font-medium text-base md:text-lg tracking-tight mb-1 text-white">Rudolfs Senkans</h3>
<p className="font-medium text-sm md:text-[15px] uppercase tracking-widest text-white/80">CGO</p>
</div>

<div className="w-[2.5px] h-6 bg-[#29154a]"></div>
<div className="flex flex-row justify-center w-full min-w-[300px]">

<div className="relative flex flex-col items-center px-2.5 flex-1">
<div className="absolute top-0 right-0 w-[50%] border-t-[2.5px] border-[#29154a]"></div>
<div className="w-[2.5px] h-6 bg-[#29154a]"></div>
<div className="bg-[#8dc63f] text-white rounded-[1rem] py-3.5 px-3 text-center w-full h-[90px] flex items-center justify-center shadow-sm relative z-10 transition-colors hover:bg-[#7eb535]">
<p className="font-medium text-base tracking-tight leading-snug">B2B Customer<br/>Success Lead</p>
</div>
</div>

<div className="relative flex flex-col items-center px-2.5 flex-1">
<div className="absolute top-0 left-0 w-[50%] border-t-[2.5px] border-[#29154a]"></div>
<div className="w-[2.5px] h-6 bg-[#29154a]"></div>
<div className="bg-[#8dc63f] text-white rounded-[1rem] py-3.5 px-3 text-center w-full h-[90px] flex items-center justify-center shadow-sm relative z-10 transition-colors hover:bg-[#7eb535]">
<p className="font-medium text-base tracking-tight leading-snug">Marketing Lead</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
