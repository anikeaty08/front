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
      

<div className="absolute inset-0 particle-bg opacity-30 z-0"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 pointer-events-none z-10"></div>

<div className="flex-1 flex flex-col p-6 z-20 animate-hud-shake w-full h-full gap-4 max-w-[1920px] mx-auto">

<header className="flex-none h-20 glass-panel rounded-2xl px-8 flex items-center justify-between animate-pulse-glow border-l-4 border-l-[#007AFF]">
<div className="flex items-center gap-6">
<div className="relative w-3 h-3">
<div className="absolute inset-0 bg-red-500 rounded-full animate-ping"></div>
<div className="absolute inset-0 bg-red-500 rounded-full"></div>
</div>
<div>
<h1 className="text-xl font-bold tracking-tight text-white uppercase">Эмоции пользователя</h1>
<div className="flex items-center gap-2 font-mono text-sm text-gray-400">
<span>REC</span>
<span className="w-px h-3 bg-gray-600"></span>
<span className="text-white tracking-widest">01:35<span className="animate-pulse text-gray-500">:</span>12</span>
<span className="text-gray-600">–</span>
<span>01:50:00</span>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<div className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Статус</div>
<div className="text-sm font-bold text-[#30D158] tracking-wider">Оптимально</div>
</div>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<span className="iconify animate-spin" data-duration="3s" data-icon="lucide:loader-2" data-width="20"></span>
</div>
</div>
</header>

<div className="flex-1 grid grid-cols-4 gap-4 min-h-0">

<div className="hud-card rounded-2xl p-6 flex flex-col justify-between group relative">
<div className="flex justify-between items-start z-10">
<div className="text-sm font-bold text-gray-400 tracking-widest uppercase flex items-center gap-2">
<span className="iconify text-[#30D158]" data-icon="lucide:eye" data-width="16"></span>
                        ВНИМАНИЕ
                    </div>
<div className="w-8 h-8 rounded-full bg-[#30D158]/20 flex items-center justify-center border border-[#30D158]/30 shadow-[0_0_10px_rgba(48,209,88,0.3)] animate-bounce">
<span className="iconify text-[#30D158]" data-icon="lucide:check" data-strokeWidth="3" data-width="16"></span>
</div>
</div>
<div className="flex flex-col z-10">
<div className="font-massive font-black text-white tracking-tighter leading-none mix-blend-overlay opacity-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-150 blur-xl">88</div>
<div className="text-7xl font-black text-white tracking-tighter tabular-nums mt-4 leading-none">
                        88<span className="text-4xl text-[#30D158]">.4%</span>
</div>

<div className="mt-8 flex justify-center gap-4 opacity-80">
<div className="w-16 h-8 border-2 border-white/20 rounded-full relative overflow-hidden bg-black/50">
<div className="absolute w-3 h-3 bg-[#30D158] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-eye shadow-[0_0_8px_#30D158]"></div>
<div className="absolute inset-0 bg-black/20 animate-blink origin-top"></div>
</div>
<div className="w-16 h-8 border-2 border-white/20 rounded-full relative overflow-hidden bg-black/50">
<div className="absolute w-3 h-3 bg-[#30D158] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-eye shadow-[0_0_8px_#30D158]"></div>
<div className="absolute inset-0 bg-black/20 animate-blink origin-top"></div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-[#30D158] shadow-[0_0_20px_#30D158]"></div>
</div>

<div className="hud-card rounded-2xl p-6 flex flex-col justify-between relative">
<div className="flex justify-between items-start z-10">
<div className="text-sm font-bold text-gray-400 tracking-widest uppercase flex items-center gap-2">
<span className="iconify text-[#FF3B30]" data-icon="lucide:activity" data-width="16"></span>
                        ГНЕВ
                    </div>
<div className="px-3 py-1 bg-[#FF3B30]/20 rounded border border-[#FF3B30]/30 text-[#FF3B30] text-xs font-black animate-pulse">
                        DETECTED
                    </div>
</div>
<div className="flex flex-col z-10">
<div className="text-7xl font-black text-white tracking-tighter mt-4 leading-none flex items-baseline gap-2">
<span className="text-[#FF3B30] text-4xl">+</span>
<div className="relative h-[1em] w-[0.6em] overflow-hidden">
<div className="ticker-number">
<span>1</span>
</div>
</div>
</div>

<div className="mt-8 h-16 flex items-end gap-1 w-full justify-between">
<div className="w-2 bg-[#FF3B30]/30 rounded-sm h-4 animate-[heartbeat-spike_1s_ease-in-out_infinite] delay-[0ms]"></div>
<div className="w-2 bg-[#FF3B30]/30 rounded-sm h-6 animate-[heartbeat-spike_1s_ease-in-out_infinite] delay-[100ms]"></div>
<div className="w-2 bg-[#FF3B30]/30 rounded-sm h-3 animate-[heartbeat-spike_1s_ease-in-out_infinite] delay-[200ms]"></div>
<div className="w-2 bg-[#FF3B30] rounded-sm h-12 animate-[heartbeat-spike_1s_ease-in-out_infinite] delay-[300ms] shadow-[0_0_10px_#FF3B30]"></div>
<div className="w-2 bg-[#FF3B30]/30 rounded-sm h-5 animate-[heartbeat-spike_1s_ease-in-out_infinite] delay-[400ms]"></div>
<div className="w-2 bg-[#FF3B30]/30 rounded-sm h-8 animate-[heartbeat-spike_1s_ease-in-out_infinite] delay-[500ms]"></div>
<div className="w-2 bg-[#FF3B30]/30 rounded-sm h-4 animate-[heartbeat-spike_1s_ease-in-out_infinite] delay-[600ms]"></div>
</div>
</div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,59,48,0.15)_100%)] animate-pulse"></div>
</div>

<div className="hud-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
<div className="scan-line-overlay animate-scan z-20"></div>
<div className="flex justify-between items-start z-10">
<div className="text-sm font-bold text-gray-400 tracking-widest uppercase flex items-center gap-2">
<span className="iconify text-[#FF9F0a]" data-icon="lucide:zap" data-width="16"></span>
                        СТРАХ
                    </div>
<div className="flex gap-1">
<div className="w-1 h-3 bg-[#FF9F0a]"></div>
<div className="w-1 h-3 bg-[#FF9F0a]/50"></div>
<div className="w-1 h-3 bg-[#FF9F0a]/20"></div>
</div>
</div>
<div className="flex flex-col z-10">
<div className="text-7xl font-black text-white tracking-tighter mt-4 leading-none tabular-nums">
                        942
                    </div>
<div className="text-xs font-mono text-[#FF9F0a] mt-2 tracking-wider">ИНТЕНСИВНОСТЬ МИКРО-ПРОЯВЛЕНИЯ</div>

<div className="mt-6 relative h-20 w-full overflow-hidden">
<svg className="w-full h-full" viewbox="0 0 200 40">
<path d="M0,20 Q50,5 100,20 T200,20" fill="none" stroke="#FF9F0a" stroke-opacity="0.2" strokeWidth="2"></path>
<path d="M0,20 Q50,5 100,20 T200,20" fill="none" stroke="#FF9F0a" stroke-dasharray="200" stroke-dashoffset="0" strokeLinecap="round" strokeWidth="4">
<animate attributename="stroke-dashoffset" dur="2s" from="200" repeatcount="indefinite" to="0"></animate>
</path>
</svg>
</div>
</div>
</div>

<div className="hud-card rounded-2xl p-6 flex flex-col justify-between relative">
<div className="flex justify-between items-start z-10">
<div className="text-sm font-bold text-gray-400 tracking-widest uppercase flex items-center gap-2">
<span className="iconify text-[#30D158]" data-icon="lucide:lock" data-width="16"></span>
                        УДЕРЖАНИЕ
                    </div>
<span className="text-sm font-black text-white bg-[#30D158] px-2 rounded shadow-[0_0_10px_#30D158]">100%</span>
</div>
<div className="flex flex-col z-10 mt-auto">
<div className="text-6xl font-black text-white tracking-tighter leading-none mb-4">
<span className="text-gray-600 text-4xl align-top">УВЕРЕННОСТЬ</span><br/>
                        ВЫСОКАЯ
                    </div>
<div className="w-full bg-gray-800 h-4 rounded-full overflow-hidden relative border border-white/10">
<div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] w-1/2 animate-[scan-sweep_1.5s_infinite_linear] skew-x-12"></div>
<div className="bg-[#30D158] h-full rounded-full shadow-[0_0_15px_#30D158] w-full origin-left animate-[pulse-glow_2s_infinite]"></div>
</div>
</div>
</div>
</div>

<div className="flex-none h-64 grid grid-cols-3 gap-4">

<div className="col-span-2 glass-panel rounded-2xl p-6 relative flex flex-col overflow-hidden">
<div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
<div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5"></div><div className="border-b border-white/5"></div>
<div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5"></div><div className="border-b border-white/5"></div>
<div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5"></div><div className="border-b border-white/5"></div>
<div className="border-r border-white/5"></div><div className="border-r border-white/5"></div><div className="border-r border-white/5"></div><div className="border-r border-white/5"></div><div className="border-r border-white/5"></div><div></div>
</div>
<h3 className="relative z-10 text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
<span className="w-2 h-2 bg-[#007AFF] rounded-full shadow-[0_0_8px_#007AFF]"></span>
                    Время просмотра vs Интенсивность
                </h3>
<div className="relative flex-1 w-full mt-2">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none">
<defs>
<lineargradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#007AFF" stop-opacity="0.4"></stop>
<stop offset="100%" stop-color="#007AFF" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path className="drop-shadow-[0_0_15px_#007AFF]" d="M0,100 L50,90 L100,95 L150,40 L200,60 L250,80 L300,20 L350,50 L400,90 L450,10 L500,50 L550,80 L600,30 L650,60 L700,90 L750,100" fill="url(#areaGradient)" stroke="#007AFF" strokeWidth="3" vector-effect="non-scaling-stroke">
<animate attributename="d" dur="3s" repeatcount="indefinite" values="M0,100 L50,90 L100,95 L150,40 L200,60 L250,80 L300,20 L350,50 L400,90 L450,10 L500,50 L550,80 L600,30 L650,60 L700,90 L750,100;
                                             M0,100 L50,85 L100,90 L150,30 L200,50 L250,90 L300,10 L350,60 L400,80 L450,20 L500,40 L550,70 L600,20 L650,50 L700,80 L750,100;
                                             M0,100 L50,90 L100,95 L150,40 L200,60 L250,80 L300,20 L350,50 L400,90 L450,10 L500,50 L550,80 L600,30 L650,60 L700,90 L750,100"></animate>
</path>

<line className="opacity-50" stroke="white" stroke-dasharray="4 4" strokeWidth="1" x1="70%" x2="70%" y1="0" y2="100%"></line>
</svg>

<div className="absolute top-[20%] left-[68%] -translate-x-full px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-md text-xs font-bold text-white shadow-lg animate-pulse">
                        ПИК: 01:42
                    </div>
</div>
</div>

<div className="col-span-1 glass-panel rounded-2xl relative overflow-hidden flex items-center justify-center group animate-glitch-enter" style={{animationDelay: '0.5s'}}>
<div className="absolute inset-0 bg-[#30D158]/10 animate-pulse"></div>
<div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.2)_10px,rgba(0,0,0,0.2)_20px)] opacity-30"></div>
<div className="relative z-10 text-center">
<div className="flex justify-center mb-4">
<div className="w-20 h-20 rounded-full border-4 border-[#30D158] flex items-center justify-center shadow-[0_0_30px_#30D158] bg-black/40">
<span className="iconify text-[#30D158] animate-pulse" data-icon="lucide:fingerprint" data-width="48"></span>
</div>
</div>
<div className="glitch-text text-2xl font-black text-white uppercase tracking-tighter leading-none" data-text="ОДОБРЕНО">
                        ОДОБРЕНО
                    </div>
</div>

<div className="absolute top-0 left-0 h-full w-2 bg-white/50 blur-sm animate-[scan-sweep_3s_infinite_linear] skew-x-12"></div>
</div>
</div>
</div>

    </>
  );
}
