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
      

<div className="fixed top-0 left-1/4 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-white opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>
<div className="fixed bottom-0 right-1/4 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-slate-400 opacity-[0.02] blur-[100px] rounded-full pointer-events-none"></div>
<main className="w-full max-w-2xl relative z-10">

<header className="flex items-center justify-between mb-12">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm text-black flex items-center justify-center text-xs shadow-lg font-space-grotesk tracking-tight font-bold">
                    EG
                </div>
<span className="text-sm text-white uppercase drop-shadow-sm font-space-grotesk tracking-tight font-bold">Echo Groove</span>
</div>

<div className="flex gap-2 bg-slate-950/20 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] backdrop-blur-md gap-x-2 gap-y-2 items-center">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
<span className="text-xs text-slate-300 uppercase font-space-grotesk tracking-tight font-bold">Live Challenge</span>
</div>
</header>

<section className="mb-10">
<h1 className="text-4xl sm:text-5xl text-white mb-4 drop-shadow-sm font-space-grotesk tracking-tight font-bold">
                You are the chosen one.
            </h1>
<p className="text-base text-slate-400 leading-relaxed max-w-lg font-space-grotesk tracking-tight font-bold">
                The Echo Groove YouTube challenge has been initiated. Complete the mission within the timeframe to secure your place among the chosen few.
            </p>
</section>

<section className="relative overflow-hidden bg-slate-950/20 border border-white/10 rounded-3xl p-6 sm:p-8 mb-8 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group">

<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
<div className="flex flex-col relative z-10">
<span className="text-xs text-slate-400 uppercase mb-2 font-space-grotesk tracking-tight font-bold">Time Remaining</span>
<div className="text-4xl sm:text-5xl text-white tabular-nums flex items-center gap-2 drop-shadow-md font-space-grotesk tracking-tight font-bold">
                    06<span className="text-slate-500 animate-pulse font-space-grotesk tracking-tight font-bold">:</span>59<span className="text-slate-500 animate-pulse font-space-grotesk tracking-tight font-bold">:</span>59
                </div>
<span className="text-sm text-slate-400 mt-2 font-space-grotesk tracking-tight font-bold">Download tune within 7 hrs</span>
</div>
<button className="relative z-10 w-full sm:w-auto flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm text-black px-6 py-3.5 rounded-full text-sm hover:bg-white hover:scale-[0.98] transition-all duration-200 shadow-xl font-space-grotesk tracking-tight font-bold">
<iconify-icon className="text-lg" icon="solar:file-download-linear" strokeWidth="1.5"></iconify-icon>
                Download Tune
            </button>
</section>

<section className="space-y-3">
<h2 className="text-sm text-slate-500 uppercase mb-4 px-2 font-space-grotesk tracking-tight font-bold">Mission Objectives</h2>

<label className="cursor-pointer relative overflow-hidden flex items-start gap-4 p-5 rounded-2xl bg-slate-950/20 backdrop-blur-xl border border-white/5 hover:bg-slate-900/30 hover:border-white/10 transition-all duration-300 group shadow-lg">
<input className="peer sr-only" type="checkbox"/>
<div className="relative z-10 w-5 h-5 mt-0.5 rounded-full border border-slate-500 peer-checked:bg-white peer-checked:border-white flex items-center justify-center transition-all shadow-inner bg-black/20">
<iconify-icon className="text-black opacity-0 peer-checked:opacity-100 text-xs transition-opacity" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 relative z-10">
<h3 className="text-base text-slate-200 peer-checked:text-slate-500 peer-checked:line-through transition-all drop-shadow-sm font-space-grotesk tracking-tight font-bold">1. Live React</h3>
<p className="text-sm text-slate-400 mt-1 peer-checked:opacity-40 transition-opacity font-space-grotesk tracking-tight font-bold">Record your genuine, first-listen reaction to the downloaded track on stream or video.</p>
</div>
<iconify-icon className="relative z-10 text-slate-500 text-xl group-hover:text-slate-300 transition-colors" icon="solar:videocamera-record-linear" strokeWidth="1.5"></iconify-icon>
</label>

<label className="cursor-pointer relative overflow-hidden flex items-start gap-4 p-5 rounded-2xl bg-slate-950/20 backdrop-blur-xl border border-white/5 hover:bg-slate-900/30 hover:border-white/10 transition-all duration-300 group shadow-lg">
<input className="peer sr-only" type="checkbox"/>
<div className="relative z-10 w-5 h-5 mt-0.5 rounded-full border border-slate-500 peer-checked:bg-white peer-checked:border-white flex items-center justify-center transition-all shadow-inner bg-black/20">
<iconify-icon className="text-black opacity-0 peer-checked:opacity-100 text-xs transition-opacity" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 relative z-10">
<h3 className="text-base text-slate-200 peer-checked:text-slate-500 peer-checked:line-through transition-all drop-shadow-sm font-space-grotesk tracking-tight font-bold">2. Flip it in 7 Hours</h3>
<p className="text-sm text-slate-400 mt-1 peer-checked:opacity-40 transition-opacity font-space-grotesk tracking-tight font-bold">You have exactly 7 hours from the moment of download to sample, remix, and finalize your beat.</p>
</div>
<iconify-icon className="relative z-10 text-slate-500 text-xl group-hover:text-slate-300 transition-colors" icon="solar:music-note-slider-2-linear" strokeWidth="1.5"></iconify-icon>
</label>

<label className="cursor-pointer relative overflow-hidden flex items-start gap-4 p-5 rounded-2xl bg-slate-950/20 backdrop-blur-xl border border-white/5 hover:bg-slate-900/30 hover:border-white/10 transition-all duration-300 group shadow-lg">
<input className="peer sr-only" type="checkbox"/>
<div className="relative z-10 w-5 h-5 mt-0.5 rounded-full border border-slate-500 peer-checked:bg-white peer-checked:border-white flex items-center justify-center transition-all shadow-inner bg-black/20">
<iconify-icon className="text-black opacity-0 peer-checked:opacity-100 text-xs transition-opacity" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 relative z-10">
<h3 className="text-base text-slate-200 peer-checked:text-slate-500 peer-checked:line-through transition-all drop-shadow-sm font-space-grotesk tracking-tight font-bold">3. Drop it &amp; Tag</h3>
<p className="text-sm text-slate-400 mt-1 peer-checked:opacity-40 transition-opacity font-space-grotesk tracking-tight font-bold">Upload your flip to YouTube and tag the 10 other chosen ones with the caption <span className="text-slate-200 drop-shadow-sm font-space-grotesk tracking-tight font-bold">"CAN YOU FLIP IT?"</span></p>
</div>
<iconify-icon className="relative z-10 text-slate-500 text-xl group-hover:text-slate-300 transition-colors" icon="solar:mention-circle-linear" strokeWidth="1.5"></iconify-icon>
</label>
</section>
</main>

    </>
  );
}
