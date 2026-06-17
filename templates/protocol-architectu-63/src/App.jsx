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
      

<section className="w-full max-w-[1400px] py-12">

<div className="mb-12 md:mb-16 max-w-2xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 uppercase">
          Protocol Architecture
        </h2>
<p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
          Built for high-frequency trading with deterministic execution and
          sovereign security guarantees.
        </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">

<div className="lg:col-span-4 group relative bg-[#0A0C0E] border border-white/5 p-8 flex flex-col justify-between overflow-hidden hover:border-[#7CFF6B]/30 transition-all duration-300 min-h-[400px]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,255,107,0.03),transparent_50%)]"></div>
<div className="relative z-10 flex justify-between items-start">
<div className="w-12 h-12 bg-[#15171A] border border-white/10 flex items-center justify-center group-hover:border-[#7CFF6B]/50 transition-colors">
<iconify-icon className="text-[#7CFF6B] text-2xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<div className="px-3 py-1 border border-white/10 bg-white/5 text-xs font-space text-gray-400">
              400ms
            </div>
</div>

<div className="relative z-10 flex-1 flex items-center justify-center my-6">
<div className="relative w-32 h-32">

<div className="absolute inset-0 border border-dashed border-[#7CFF6B]/20 animate-[spin_10s_linear_infinite]"></div>

<div className="absolute inset-4 border border-white/10"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-2 h-2 bg-[#7CFF6B] shadow-[0_0_20px_#7CFF6B]"></div>
</div>

<div className="absolute top-1/2 left-1/2 w-[60px] h-[1px] bg-gradient-to-r from-transparent to-[#7CFF6B] origin-left animate-[spin_2s_linear_infinite]"></div>
</div>
</div>
<div className="relative z-10">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3 uppercase">
              Sub-second Finality
            </h3>
<p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
              Deterministic execution ensures trades settle instantly without
              rollback risk.
            </p>
</div>
</div>

<div className="lg:col-span-8 group relative bg-[#0A0C0E] border border-white/5 overflow-hidden hover:border-[#7CFF6B]/30 transition-all duration-300 min-h-[400px] flex flex-col md:flex-row">

<div className="absolute inset-0 bg-[linear-gradient(rgba(124,255,107,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,255,107,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

<div className="relative z-10 p-8 md:p-12 flex flex-col justify-between w-full md:w-1/2">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-[#7CFF6B] animate-pulse"></div>
<span className="font-space text-xs font-bold tracking-widest text-[#7CFF6B] uppercase">
                  Live Monitoring
                </span>
</div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white uppercase">
                CORE
                <br/>
                ARCHITECTURE
              </h2>
</div>
<div className="mt-8 md:mt-0">
<p className="text-base md:text-lg text-gray-400 mb-6">
                Decoupled validator sets ensure censorship resistance while
                maximizing throughput.
              </p>

<div className="flex items-center gap-3 p-1 pl-4 pr-1 bg-[#15171A] border border-white/10 w-fit">
<span className="text-xs font-space text-gray-300 uppercase">
                  System Status
                </span>
<div className="h-8 px-4 bg-[#7CFF6B] flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(124,255,107,0.3)] hover:brightness-110 transition-all">
<span className="text-xs font-bold text-black font-space">
                    ONLINE
                  </span>
</div>
</div>
</div>
</div>

<div className="relative z-10 w-full md:w-1/2 h-[300px] md:h-auto bg-[#08090B]/50 border-t md:border-t-0 md:border-l border-white/5 flex items-center justify-center backdrop-blur-sm">

<div className="relative w-64 h-64">

<svg className="absolute inset-0 w-full h-full text-[#7CFF6B]/20" viewbox="0 0 100 100">
<line stroke="currentColor" strokeWidth="0.5" x1="50" x2="20" y1="50" y2="20"></line>
<line stroke="currentColor" strokeWidth="0.5" x1="50" x2="80" y1="50" y2="20"></line>
<line stroke="currentColor" strokeWidth="0.5" x1="50" x2="20" y1="50" y2="80"></line>
<line stroke="currentColor" strokeWidth="0.5" x1="50" x2="80" y1="50" y2="80"></line>
<circle className="opacity-50" cx="20" cy="20" fill="#7CFF6B" r="2"></circle>
<circle className="opacity-50" cx="80" cy="20" fill="#7CFF6B" r="2"></circle>
<circle className="opacity-50" cx="20" cy="80" fill="#7CFF6B" r="2"></circle>
<circle className="opacity-50" cx="80" cy="80" fill="#7CFF6B" r="2"></circle>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#0A0C0E] border border-[#7CFF6B]/30 flex items-center justify-center shadow-[0_0_30px_rgba(124,255,107,0.1)]">
<iconify-icon className="text-[#7CFF6B] text-5xl" icon="solar:cpu-linear"></iconify-icon>
</div>

<div className="absolute top-10 right-10 w-8 h-8 bg-[#15171A] border border-white/10 flex items-center justify-center animate-bounce duration-[3000ms]">
<iconify-icon className="text-gray-400 text-base" icon="solar:server-square-linear"></iconify-icon>
</div>
<div className="absolute bottom-10 left-10 w-8 h-8 bg-[#15171A] border border-white/10 flex items-center justify-center animate-bounce duration-[4000ms]">
<iconify-icon className="text-gray-400 text-base" icon="solar:database-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 group relative bg-[#0A0C0E] border border-white/5 p-8 md:p-12 flex flex-col justify-between overflow-hidden hover:border-[#7CFF6B]/30 transition-all duration-300">
<div className="absolute top-0 right-0 p-12 opacity-20 group-hover:opacity-40 transition-opacity">
<svg fill="none" height="100" viewbox="0 0 200 100" width="200">
<path d="M0 80 C 50 80, 50 20, 100 20 S 150 60, 200 60" stroke="#7CFF6B" stroke-dasharray="4 4" strokeWidth="2"></path>
<path className="opacity-50" d="M0 90 C 50 90, 50 30, 100 30 S 150 70, 200 70" stroke="#7CFF6B" strokeWidth="2"></path>
</svg>
</div>
<div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
<div className="max-w-md">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 bg-[#15171A] border border-white/10 flex items-center justify-center">
<iconify-icon className="text-[#7CFF6B] text-base" icon="solar:chart-square-linear"></iconify-icon>
</div>
<span className="font-space text-sm tracking-wider text-gray-400 uppercase">
                  Performance
                </span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4 uppercase">
                Massive Throughput &amp;
                <br/>
                Infinite Scalability
              </h3>
<p className="text-base md:text-lg text-gray-400">
                Native support for horizontal sharding allows capacity to grow
                with network demand, supporting 100k+ TPS.
              </p>
</div>

<div className="w-full md:w-auto min-w-[240px] bg-[#15171A] border border-white/5 p-6">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-space text-gray-400 uppercase">
                  Current Load
                </span>
<span className="text-xs font-mono text-[#7CFF6B]">98.2%</span>
</div>

<div className="flex items-end gap-1 h-16 mb-6">
<div className="w-1.5 h-[40%] bg-[#7CFF6B]/20"></div>
<div className="w-1.5 h-[60%] bg-[#7CFF6B]/30"></div>
<div className="w-1.5 h-[30%] bg-[#7CFF6B]/20"></div>
<div className="w-1.5 h-[80%] bg-[#7CFF6B]/60"></div>
<div className="w-1.5 h-[50%] bg-[#7CFF6B]/40"></div>
<div className="w-1.5 h-[90%] bg-[#7CFF6B]/80"></div>
<div className="w-1.5 h-[70%] bg-[#7CFF6B]/50"></div>
<div className="w-1.5 h-[100%] bg-[#7CFF6B] shadow-[0_0_10px_#7CFF6B]"></div>
<div className="w-1.5 h-[60%] bg-[#7CFF6B]/40"></div>
<div className="w-1.5 h-[80%] bg-[#7CFF6B]/70"></div>
</div>

<div className="relative h-1.5 bg-gray-800 w-full">
<div className="absolute left-0 top-0 bottom-0 w-[85%] bg-[#7CFF6B]"></div>
<div className="absolute left-[85%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#7CFF6B] shadow-md cursor-pointer hover:scale-110 transition-transform"></div>
</div>
<div className="flex justify-between mt-2 font-mono text-[10px] text-gray-500">
<span>0 TPS</span>
<span>100K TPS</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 group relative bg-[#0A0C0E] border border-white/5 p-8 flex flex-col justify-between hover:border-[#7CFF6B]/30 transition-all duration-300">
<div className="flex justify-between items-start mb-8">
<div className="w-12 h-12 bg-[#15171A] border border-white/10 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
<iconify-icon className="text-[#7CFF6B] text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>

<div className="flex items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
<div className="w-5 h-5 border border-[#7CFF6B] bg-[#7CFF6B]/10 flex items-center justify-center">
<iconify-icon className="text-[#7CFF6B] text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs font-mono text-gray-400">AUDITED</span>
</div>
</div>
<div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3 uppercase">
              Sovereign Security
            </h3>
<p className="text-base md:text-lg text-gray-400 mb-8 font-light">
              Validator set is fully decoupled from execution.
            </p>
<a className="inline-flex items-center gap-2 text-white bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-3 transition-all group-hover:px-6" href="#">
<span className="font-space text-sm font-bold">VIEW AUDIT</span>
<iconify-icon className="text-[#7CFF6B] text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

    </>
  );
}
