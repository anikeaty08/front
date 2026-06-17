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
      

<div className="absolute top-8 left-10 z-50 flex items-center gap-2 pointer-events-none">
<span className="font-mono text-xs font-medium tracking-tight text-black font-geist">N X S</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span className="font-mono text-xs text-zinc-400 font-geist">SYS_CORE</span>
</div>

<div className="w-full h-full grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-4 md:gap-6">

<div className="bg-white rounded-[2rem] p-8 md:p-14 flex flex-col justify-center border border-zinc-200 relative overflow-hidden animate-blur delay-1">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 text-xs font-mono text-zinc-500 mb-8 w-max font-geist">
<span className="w-1.5 h-1.5 rounded-full bg-black relative">
<span className="absolute inset-0 rounded-full bg-black animate-ping opacity-50"></span>
</span> 
                Gen-3 Architecture
            </div>
<h1 className="md:text-5xl lg:text-6xl leading-[1.05] text-4xl text-black tracking-tight max-w-lg font-geist font-semibold">
                The intelligence layer for next-gen models.
            </h1>
<p className="mt-6 text-base md:text-lg text-zinc-500 max-w-md font-light leading-relaxed font-geist">
                Deploy, scale, and orchestrate massive AI workloads with zero operational overhead. We built the hardware layer so you can focus on the model.
            </p>
<div className="mt-12 flex items-center gap-4">
<button className="bg-black text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2 group font-geist">
                    Deploy Core 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="bg-white rounded-[2rem] border border-zinc-200 p-8 flex flex-col relative overflow-hidden animate-blur delay-2 bg-grid">
<div className="flex justify-between items-center mb-8 relative z-10">
<h3 className="font-mono text-sm text-black font-medium font-geist">Global Mesh State</h3>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only custom-toggle-input" type="checkbox"/>
<div className="custom-toggle-bg w-10 h-6 bg-zinc-200 rounded-full transition-colors relative">
<div className="custom-toggle-dot absolute top-[2px] left-[2px] bg-white border border-zinc-200 rounded-full h-5 w-5 transition-transform duration-300 shadow-sm flex items-center justify-center">
<span className="w-1 h-1 bg-zinc-300 rounded-full"></span>
</div>
</div>
</label>
</div>
<div className="flex-1 relative flex items-center justify-center">

<svg className="absolute inset-0 w-full h-full text-zinc-200" fill="none" stroke="currentColor" strokeWidth="1">
<path d="M 30% 50% L 50% 30% L 70% 50% L 50% 70% Z" stroke-dasharray="2 4"></path>
<line stroke-dasharray="2 4" x1="50%" x2="50%" y1="30%" y2="70%"></line>
</svg>

<div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white border border-zinc-200 rounded-full flex items-center justify-center shadow-sm z-10">
<iconify-icon className="text-black" icon="solar:server-square-linear" width="22"></iconify-icon>
</div>
<div className="absolute top-[50%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center z-10 hover:border-black transition-colors cursor-pointer">
<span className="w-1.5 h-1.5 rounded-full bg-black"></span>
</div>
<div className="absolute top-[50%] left-[70%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center z-10 hover:border-black transition-colors cursor-pointer">
<span className="w-1.5 h-1.5 rounded-full bg-black"></span>
</div>
<div className="absolute top-[70%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center z-10 hover:border-black transition-colors cursor-pointer">
<span className="w-1.5 h-1.5 rounded-full bg-black"></span>
</div>
</div>
<div className="mt-auto flex justify-between items-end border-t border-zinc-100 pt-5 relative z-10">
<div className="flex flex-col">
<span className="text-xs text-zinc-400 uppercase tracking-widest mb-1.5 font-light font-geist">Routing</span>
<span className="text-sm font-mono text-black font-geist">Active (4/4 Nodes)</span>
</div>
<iconify-icon className="text-zinc-300" icon="solar:radar-linear" width="24"></iconify-icon>
</div>
</div>

<div className="bg-white rounded-[2rem] border border-zinc-200 p-8 md:p-10 flex flex-col justify-between animate-blur delay-3">
<h3 className="font-mono text-sm text-black font-medium mb-10 font-geist">Telemetry</h3>
<div className="grid grid-cols-2 gap-y-10 gap-x-6 mb-auto">
<div className="flex flex-col border-l border-zinc-200 pl-5">
<span className="text-4xl md:text-5xl text-black tracking-tight font-geist font-semibold">14<span className="text-xl md:text-2xl text-zinc-300 ml-1 font-geist font-semibold">ms</span></span>
<span className="text-xs text-zinc-500 mt-2 font-light font-geist">Global Avg Latency</span>
</div>
<div className="flex flex-col border-l border-zinc-200 pl-5">
<span className="text-4xl md:text-5xl text-black tracking-tight font-geist font-semibold">1.2<span className="text-xl md:text-2xl text-zinc-300 ml-1 font-geist font-semibold">tb</span></span>
<span className="text-xs text-zinc-500 mt-2 font-light font-geist">Network Throughput</span>
</div>
<div className="flex flex-col border-l border-zinc-200 pl-5">
<span className="text-4xl md:text-5xl text-black tracking-tight font-geist font-semibold">40<span className="text-xl md:text-2xl text-zinc-300 ml-1 font-geist font-semibold">+</span></span>
<span className="text-xs text-zinc-500 mt-2 font-light font-geist">Physical POPs</span>
</div>
<div className="flex flex-col border-l border-zinc-200 pl-5">
<span className="text-4xl md:text-5xl text-black tracking-tight font-geist font-semibold">99<span className="text-xl md:text-2xl text-zinc-300 ml-1 font-geist font-semibold">%</span></span>
<span className="text-xs text-zinc-500 mt-2 font-light font-geist">Uptime SLA</span>
</div>
</div>

<div className="mt-8 pt-6 border-t border-zinc-100">
<div className="flex justify-between items-center mb-4">
<span className="text-xs text-zinc-400 uppercase tracking-widest font-light font-geist">Elastic Compute</span>
<span className="font-mono text-xs text-black font-geist">H100 Allocation</span>
</div>
<div className="relative w-full h-1.5 bg-zinc-100 rounded-full">
<div className="absolute top-0 left-0 h-full bg-black rounded-full" style={{width: '75%'}}></div>
<div className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full cursor-grab shadow-sm transition-transform hover:scale-110"></div>
</div>
</div>
</div>

<div className="bg-black text-zinc-400 rounded-[2rem] p-8 md:p-10 flex flex-col shadow-xl animate-blur delay-4 overflow-hidden relative">

<div className="absolute -top-20 -right-20 w-64 h-64 bg-zinc-800/30 rounded-full blur-[60px] pointer-events-none"></div>
<div className="flex items-center gap-2 mb-10 border-b border-zinc-800 pb-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
</div>
<span className="ml-4 font-mono text-xs text-zinc-500 tracking-tight font-geist">nexus-cli — terminal</span>
</div>
<div className="flex-1 font-mono text-sm flex flex-col gap-4 leading-relaxed">
<div className="flex gap-4">
<span className="text-zinc-600 select-none font-geist">$</span>
<span className="text-white font-geist">nexus init --cluster=h100-alpha</span>
</div>
<div className="text-zinc-500 pl-6 flex items-center justify-between">
<span className="font-geist">Authenticating physical link..</span>
<span className="text-zinc-400 font-geist">[OK]</span>
</div>
<div className="text-zinc-500 pl-6 flex items-center justify-between">
<span className="font-geist">Allocating 8x SXM5 nodes..</span>
<span className="text-zinc-400 font-geist">[OK]</span>
</div>
<div className="flex gap-4 mt-4">
<span className="text-zinc-600 select-none font-geist">$</span>
<span className="text-white font-geist">nexus deploy ./llama-3-8b</span>
</div>
<div className="text-zinc-500 pl-6 flex items-center justify-between">
<span className="font-geist">Compiling matrix..</span>
<span className="text-zinc-400 font-geist">[ONNX]</span>
</div>
<div className="text-zinc-500 pl-6 font-geist">Pushing weights to edge registry..</div>
<div className="flex gap-4 mt-2 items-center">
<span className="text-zinc-600 select-none font-geist">$</span>
<div className="w-2 h-4 bg-white animate-pulse"></div>
</div>
</div>
<div className="mt-auto border-t border-zinc-900 pt-5 flex justify-between items-center relative z-10">
<span className="text-xs font-mono text-zinc-500 font-geist">Secure Vault Enclave</span>
<iconify-icon className="text-zinc-600" icon="solar:shield-check-linear" width="18"></iconify-icon>
</div>
</div>
</div>

    </>
  );
}
