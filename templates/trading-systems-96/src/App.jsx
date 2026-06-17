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
      

<div className="absolute inset-0 z-0 bg-grid opacity-60"></div>
<div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.03),_transparent_40%)]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

<div className="absolute inset-x-0 top-[15%] bottom-[15%] z-0 flex items-center overflow-hidden pointer-events-none opacity-40 mix-blend-screen">

<div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#111111] to-transparent z-10"></div>
<div className="flex items-center gap-1.5 md:gap-3 h-full w-full justify-end pr-12 md:pr-32">


<div className="relative h-full w-1.5 md:w-2 flex justify-center candle-enter" style={{animationDelay: '0.1s'}}>
<div className="absolute w-px bg-emerald-500/20" style={{top: '55%', height: '25%'}}></div>
<div className="absolute w-full rounded-[1px] bg-emerald-500/30" style={{top: '60%', height: '15%'}}></div>
</div>
<div className="relative h-full w-1.5 md:w-2 flex justify-center candle-enter" style={{animationDelay: '0.2s'}}>
<div className="absolute w-px bg-rose-500/20" style={{top: '58%', height: '18%'}}></div>
<div className="absolute w-full rounded-[1px] bg-rose-500/30" style={{top: '60%', height: '8%'}}></div>
</div>
<div className="relative h-full w-1.5 md:w-2 flex justify-center candle-enter" style={{animationDelay: '0.3s'}}>
<div className="absolute w-px bg-emerald-500/20" style={{top: '45%', height: '20%'}}></div>
<div className="absolute w-full rounded-[1px] bg-emerald-500/30" style={{top: '50%', height: '10%'}}></div>
</div>
<div className="relative h-full w-1.5 md:w-2 flex justify-center candle-enter" style={{animationDelay: '0.4s'}}>
<div className="absolute w-px bg-emerald-500/20" style={{top: '35%', height: '25%'}}></div>
<div className="absolute w-full rounded-[1px] bg-emerald-500/30" style={{top: '40%', height: '10%'}}></div>
</div>
<div className="relative h-full w-1.5 md:w-2 flex justify-center candle-enter" style={{animationDelay: '0.5s'}}>
<div className="absolute w-px bg-rose-500/20" style={{top: '38%', height: '22%'}}></div>
<div className="absolute w-full rounded-[1px] bg-rose-500/30" style={{top: '45%', height: '12%'}}></div>
</div>
<div className="relative h-full w-1.5 md:w-2 flex justify-center candle-enter" style={{animationDelay: '0.6s'}}>
<div className="absolute w-px bg-rose-500/20" style={{top: '45%', height: '15%'}}></div>
<div className="absolute w-full rounded-[1px] bg-rose-500/30" style={{top: '48%', height: '8%'}}></div>
</div>
<div className="relative h-full w-1.5 md:w-2 flex justify-center candle-enter" style={{animationDelay: '0.7s'}}>
<div className="absolute w-px bg-emerald-500/20" style={{top: '35%', height: '20%'}}></div>
<div className="absolute w-full rounded-[1px] bg-emerald-500/30" style={{top: '42%', height: '8%'}}></div>
</div>
<div className="relative h-full w-1.5 md:w-2 flex justify-center candle-enter" style={{animationDelay: '0.8s'}}>
<div className="absolute w-px bg-emerald-500/20" style={{top: '20%', height: '25%'}}></div>
<div className="absolute w-full rounded-[1px] bg-emerald-500/30" style={{top: '25%', height: '17%'}}></div>
</div>
<div className="relative h-full w-1.5 md:w-2 flex justify-center candle-enter" style={{animationDelay: '0.9s'}}>
<div className="absolute w-px bg-emerald-500/20" style={{top: '15%', height: '15%'}}></div>
<div className="absolute w-full rounded-[1px] bg-emerald-500/30" style={{top: '18%', height: '7%'}}></div>
</div>
<div className="relative h-full w-1.5 md:w-2 flex justify-center candle-enter" style={{animationDelay: '1.0s'}}>
<div className="absolute w-px bg-rose-500/20" style={{top: '16%', height: '25%'}}></div>
<div className="absolute w-full rounded-[1px] bg-rose-500/30" style={{top: '22%', height: '12%'}}></div>
</div>
<div className="relative h-full w-1.5 md:w-2 flex justify-center candle-enter" style={{animationDelay: '1.1s'}}>
<div className="absolute w-px bg-rose-500/20" style={{top: '28%', height: '20%'}}></div>
<div className="absolute w-full rounded-[1px] bg-rose-500/30" style={{top: '32%', height: '10%'}}></div>
</div>
<div className="relative h-full w-1.5 md:w-2 flex justify-center candle-enter" style={{animationDelay: '1.2s'}}>
<div className="absolute w-px bg-emerald-500/20" style={{top: '25%', height: '18%'}}></div>
<div className="absolute w-full rounded-[1px] bg-emerald-500/30" style={{top: '28%', height: '8%'}}></div>
</div>

<div className="relative h-full w-2 md:w-3 flex justify-center candle-enter z-20" style={{animationDelay: '1.4s'}}>

<div className="absolute w-px bg-emerald-500/30 live-wick blur-[0.3px]"></div>

<div className="absolute w-full rounded-[1.5px] bg-emerald-400/60 live-body backdrop-blur-sm z-10"></div>

<div className="absolute right-0 w-[100vw] h-px border-t border-dashed border-emerald-500/30 live-price-line z-0">
<div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
</div>
</div>
</div>
</div>

<main className="relative z-10 w-full max-w-4xl px-4 md:px-8 flex flex-col items-center">
<div className="glass-panel rounded-3xl p-8 md:p-12 w-full flex flex-col gap-8 opacity-0 animate-[fadeUpIn_1s_ease-out_1s_forwards]">

<div className="flex justify-between items-center w-full pb-6 border-b border-white/[0.04]">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-neutral-100 to-neutral-400 flex items-center justify-center shadow-lg">
<span className="text-[#111111] text-xs font-medium tracking-tighter">TRD</span>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-neutral-300 tracking-wider uppercase">Quant Systems</span>
<span className="text-[0.65rem] text-neutral-500 font-light">Internal Review Q3</span>
</div>
</div>

<div className="flex items-center gap-3 bg-black/20 px-3 py-1.5 rounded-full border border-white/[0.03]">
<span className="text-xs text-neutral-400 font-light">Live Execution</span>
<button className="relative inline-flex h-4 w-8 items-center rounded-full bg-emerald-500/20 transition-colors focus:outline-none" type="button">
<span className="inline-block h-3 w-3 translate-x-4 rounded-full bg-emerald-400 transition-transform shadow-[0_0_10px_rgba(52,211,153,0.6)]"></span>
</button>
</div>
</div>

<div className="flex flex-col gap-5 mt-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 w-fit">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs text-emerald-400 font-light tracking-wide">Algorithm Alpha-v4 Active</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 leading-tight">
                    Predictive Volatility <br/> &amp; Momentum Modeling
                </h1>
<p className="text-sm md:text-base text-neutral-400 max-w-2xl leading-relaxed font-light">
                    Análisis estructural de la microestructura del mercado en tiempo real. Nuestro modelo propietario captura ineficiencias intradiarias con una latencia inferior a 2 milisegundos, ajustando el riesgo dinámicamente según el flujo de órdenes.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

<div className="flex flex-col gap-3 p-5 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] transition-colors">
<div className="flex items-center gap-2 text-neutral-500">
<iconify-icon className="text-lg" icon="solar:chart-square-linear"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Sharpe Ratio</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-light tracking-tighter text-neutral-100">3.14</span>
<span className="text-xs text-emerald-400 font-medium">+0.22</span>
</div>
</div>

<div className="flex flex-col gap-3 p-5 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] transition-colors">
<div className="flex items-center gap-2 text-neutral-500">
<iconify-icon className="text-lg" icon="solar:cpu-linear"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Model Accuracy</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-light tracking-tighter text-neutral-100">84.2%</span>
<span className="text-xs text-emerald-400 font-medium tracking-tight">Optimized</span>
</div>
</div>

<div className="flex flex-col gap-3 p-5 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] transition-colors">
<div className="flex items-center gap-2 text-neutral-500">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-xs font-medium tracking-wide">Avg Latency</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-light tracking-tighter text-neutral-100">1.2</span>
<span className="text-xs text-neutral-500 font-light">ms</span>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
