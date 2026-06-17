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
      

<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-300/30 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-cyan-300/30 rounded-full blur-[150px] pointer-events-none"></div>
<main className="max-w-7xl mx-auto px-6 py-20 lg:py-32 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-screen">

<div className="flex flex-col justify-center max-w-xl">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                Pages that connect every experience
            </h1>
<p className="mt-6 text-lg text-slate-500 font-light">
                The central hub connecting your whole platform.
            </p>

<div className="mt-16 flex flex-wrap items-center gap-y-4 gap-x-3 text-sm font-medium">

<div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 transition-colors hover:bg-slate-50 hover:border-slate-300">
<iconify-icon className="text-cyan-500" height="18" icon="solar:global-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                    Web page
                </div>

<iconify-icon className="text-slate-300 hidden sm:block" height="16" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>

<div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 transition-colors hover:bg-slate-50 hover:border-slate-300">
<iconify-icon className="text-cyan-500" height="18" icon="solar:shop-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                    Booth
                </div>

<iconify-icon className="text-slate-300 hidden sm:block" height="16" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>

<div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 transition-colors hover:bg-slate-50 hover:border-slate-300">
<iconify-icon className="text-cyan-500" height="18" icon="solar:gallery-wide-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                    Wall
                </div>

<iconify-icon className="text-slate-300 hidden sm:block" height="16" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>

<div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 transition-colors hover:bg-slate-50 hover:border-slate-300">
<iconify-icon className="text-cyan-500" height="18" icon="solar:gamepad-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                    Games
                </div>

<iconify-icon className="text-slate-300 hidden sm:block" height="16" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>

<div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
<iconify-icon className="text-cyan-600" height="18" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                    Audience engagement
                </div>
</div>
</div>

<div className="relative w-full h-[500px] lg:h-[650px] flex items-center justify-center">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)]"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: '0'}}>
<path className="animate-[dash_20s_linear_infinite]" d="M 50% 50% L 25% 25%" fill="none" stroke="rgba(6, 182, 212, 0.4)" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path className="animate-[dash_20s_linear_infinite]" d="M 50% 50% L 75% 25%" fill="none" stroke="rgba(6, 182, 212, 0.4)" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path className="animate-[dash_20s_linear_infinite]" d="M 50% 50% L 25% 75%" fill="none" stroke="rgba(6, 182, 212, 0.4)" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path className="animate-[dash_20s_linear_infinite]" d="M 50% 50% L 75% 75%" fill="none" stroke="rgba(6, 182, 212, 0.4)" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<style>
                    @keyframes dash {
                        to { stroke-dashoffset: -1000; }
                    }
                </style>
</svg>

<div className="absolute z-20 w-56 h-56 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 ring-1 ring-slate-900/5 group transition-transform duration-700 hover:scale-105">
<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-cyan-500/10 to-transparent opacity-50"></div>
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(6,182,212,0.2)] relative">
<div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-20" style={{animationDuration: '3s'}}></div>
<iconify-icon className="text-white" height="40" icon="solar:widget-5-linear" style={{strokeWidth: '1.5px'}} width="40"></iconify-icon>
</div>
<div className="h-2 w-24 bg-slate-200 rounded-full mb-3"></div>
<div className="h-2 w-16 bg-slate-100 rounded-full mb-4"></div>

<div className="flex gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_5px_rgba(6,182,212,0.5)]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
</div>
</div>


<div className="absolute z-10 top-[15%] left-[10%] w-36 bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl p-4 shadow-lg transform -rotate-3 transition-transform duration-500 hover:rotate-0 hover:-translate-y-1">
<div className="flex items-center gap-2.5 mb-3">
<div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100">
<iconify-icon height="16" icon="solar:window-frame-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</div>
<div className="h-1.5 w-12 bg-slate-200 rounded-full"></div>
</div>
<div className="space-y-2">
<div className="h-1 w-full bg-slate-100 rounded-full"></div>
<div className="h-1 w-5/6 bg-slate-100 rounded-full"></div>
<div className="h-1 w-4/6 bg-slate-100 rounded-full"></div>
</div>
</div>

<div className="absolute z-10 top-[20%] right-[10%] w-44 bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl p-4 shadow-lg transform rotate-3 transition-transform duration-500 hover:rotate-0 hover:-translate-y-1">
<div className="flex justify-between items-center mb-4">
<div className="h-1.5 w-16 bg-slate-200 rounded-full"></div>
<iconify-icon className="text-slate-400" height="14" icon="solar:chart-square-linear" width="14"></iconify-icon>
</div>

<div className="flex items-end gap-1.5 h-10">
<div className="w-full bg-cyan-100 rounded-sm h-[30%] relative"><div className="absolute top-0 inset-x-0 h-0.5 bg-cyan-300"></div></div>
<div className="w-full bg-cyan-200 rounded-sm h-[60%] relative"><div className="absolute top-0 inset-x-0 h-0.5 bg-cyan-400"></div></div>
<div className="w-full bg-cyan-100 rounded-sm h-[45%] relative"><div className="absolute top-0 inset-x-0 h-0.5 bg-cyan-300"></div></div>
<div className="w-full bg-cyan-400 rounded-sm h-[85%] relative shadow-[0_0_10px_rgba(34,211,238,0.3)]"><div className="absolute top-0 inset-x-0 h-0.5 bg-cyan-500"></div></div>
<div className="w-full bg-cyan-100 rounded-sm h-[50%] relative"><div className="absolute top-0 inset-x-0 h-0.5 bg-cyan-300"></div></div>
</div>
</div>

<div className="absolute z-10 bottom-[20%] left-[12%] w-40 bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl p-3.5 shadow-lg transform rotate-2 transition-transform duration-500 hover:rotate-0 hover:translate-y-1">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100 shrink-0">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<div className="space-y-2 flex-1">
<div className="h-1.5 w-full bg-slate-200 rounded-full"></div>
<div className="h-1.5 w-2/3 bg-slate-100 rounded-full"></div>
</div>
</div>
<div className="mt-3 pt-3 border-t border-slate-100 flex gap-1 items-center">
<div className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white z-30"></div>
<div className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white -ml-2 z-20"></div>
<div className="w-6 h-6 rounded-full bg-slate-50 border-2 border-white -ml-2 z-10 flex items-center justify-center"><span className="text-xs font-medium text-slate-500">+</span></div>
</div>
</div>

<div className="absolute z-10 bottom-[15%] right-[15%] w-48 bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl p-4 shadow-lg transform -rotate-2 transition-transform duration-500 hover:rotate-0 hover:translate-y-1">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-500" height="14" icon="solar:settings-linear" width="14"></iconify-icon>
<div className="h-1.5 w-12 bg-slate-200 rounded-full"></div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="h-1.5 w-16 bg-slate-200 rounded-full"></div>
<div className="w-8 h-4 bg-cyan-100 rounded-full relative border border-cyan-200 cursor-default">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_5px_rgba(6,182,212,0.3)]"></div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="h-1.5 w-14 bg-slate-200 rounded-full"></div>
<div className="w-8 h-4 bg-slate-100 rounded-full relative border border-slate-200 cursor-default">
<div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>
</div>

<div className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full top-[25%] left-[35%] shadow-[0_0_8px_rgba(59,130,246,0.6)] animate-pulse"></div>
<div className="absolute w-2 h-2 bg-cyan-500 rounded-full bottom-[35%] right-[30%] shadow-[0_0_8px_rgba(6,182,212,0.6)] animate-pulse" style={{animationDelay: '0.5s'}}></div>
<div className="absolute w-1 h-1 bg-purple-500 rounded-full top-[65%] left-[65%] shadow-[0_0_8px_rgba(168,85,247,0.6)] animate-pulse" style={{animationDelay: '1s'}}></div>
<div className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full top-[40%] right-[45%] shadow-[0_0_6px_rgba(34,211,238,0.6)] animate-pulse" style={{animationDelay: '1.5s'}}></div>
</div>
</main>

    </>
  );
}
