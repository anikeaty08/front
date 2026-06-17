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



        lucide.createIcons();
    
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
      

<div className="max-w-7xl mx-auto space-y-6">

<header className="flex items-center justify-between pb-2 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
<i className="w-6 h-6 text-emerald-400 stroke-[1.5]" data-lucide="zap"></i>
</div>
<h1 className="text-2xl font-medium tracking-tight text-white">EV Command Center</h1>
</div>
<div className="flex items-center gap-4">
<span className="flex items-center gap-2 text-sm text-neutral-400">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
</span>
                    System Online
                </span>
<div className="h-8 w-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-neutral-400 stroke-[1.5]" data-lucide="user"></i>
</div>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-neutral-900/40 border border-white/5 rounded-2xl overflow-hidden flex flex-col h-[500px] relative group">

<div className="absolute top-0 left-0 w-full p-6 z-10 flex justify-between items-start bg-gradient-to-b from-neutral-900/90 to-transparent pointer-events-none">
<div>
<h2 className="text-lg font-medium text-white tracking-tight">Live Station Map</h2>
<p className="text-sm text-neutral-500 mt-1">Real-time status tracking</p>
</div>
<div className="flex gap-2 pointer-events-auto">
<span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-medium">12 Active</span>
<span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400 font-medium">3 Offline</span>
</div>
</div>

<div className="w-full h-full bg-[#0a0a0a] relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<svg className="absolute inset-0 w-full h-full stroke-neutral-800 fill-none stroke-[20]" preserveaspectratio="none">

<path d="M-100,400 C200,350 400,450 600,300 S900,100 1200,150"></path>
<path d="M200,-50 C250,200 150,400 300,600"></path>
<path d="M600,-50 C550,200 650,400 500,600"></path>
<path d="M900,600 C850,400 950,200 800,-50"></path>
</svg>

<svg className="absolute inset-0 w-full h-full stroke-emerald-900/30 fill-none stroke-[2]" preserveaspectratio="none">
<path className="animate-pulse" d="M-100,400 C200,350 400,450 600,300 S900,100 1200,150"></path>
</svg>


<div className="absolute top-[30%] left-[20%] group/pin cursor-pointer">
<div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-lg opacity-0 group-hover/pin:opacity-100 transition-opacity"></div>
<div className="relative flex flex-col items-center">
<div className="bg-neutral-900 border-2 border-emerald-500 text-emerald-500 p-1.5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-transform group-hover/pin:scale-110">
<i className="w-4 h-4 fill-current" data-lucide="zap"></i>
</div>
<div className="mt-2 px-2 py-1 bg-neutral-900 border border-white/10 rounded text-xs text-white opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap z-20">
                                Station A-12 <span className="text-neutral-500">| 45kW</span>
</div>
</div>
</div>

<div className="absolute top-[55%] left-[45%] group/pin cursor-pointer">
<div className="relative flex flex-col items-center">
<div className="bg-neutral-900 border-2 border-emerald-500 text-emerald-500 p-1.5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)]">
<i className="w-4 h-4 fill-current" data-lucide="zap"></i>
</div>
</div>
</div>

<div className="absolute top-[25%] left-[70%] group/pin cursor-pointer">
<div className="relative flex flex-col items-center">
<div className="bg-neutral-900 border-2 border-emerald-500 text-emerald-500 p-1.5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)]">
<i className="w-4 h-4 fill-current" data-lucide="zap"></i>
</div>
</div>
</div>

<div className="absolute top-[65%] left-[75%] group/pin cursor-pointer">
<div className="absolute -inset-4 bg-rose-500/20 rounded-full blur-lg opacity-40"></div>
<div className="relative flex flex-col items-center">
<div className="bg-neutral-900 border-2 border-rose-500 text-rose-500 p-1.5 rounded-full shadow-[0_0_15px_rgba(244,63,94,0.4)] animate-pulse">
<i className="w-4 h-4" data-lucide="x"></i>
</div>
<div className="mt-2 px-2 py-1 bg-neutral-900 border border-rose-500/30 rounded text-xs text-rose-200 block z-20">
                                Error #404
                            </div>
</div>
</div>

<div className="absolute top-[40%] left-[85%] group/pin cursor-pointer">
<div className="relative flex flex-col items-center">
<div className="bg-neutral-900 border-2 border-amber-500 text-amber-500 p-1.5 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.4)]">
<i className="w-4 h-4" data-lucide="wrench"></i>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<i className="w-24 h-24 text-white stroke-1" data-lucide="dollar-sign"></i>
</div>
<div className="relative z-10">
<h3 className="text-neutral-400 text-sm font-medium uppercase tracking-wider">Revenue</h3>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-4xl font-medium text-white tracking-tight">$1,250</span>
<span className="text-lg text-neutral-500 font-normal">.00</span>
</div>
<div className="mt-2 flex items-center gap-3 text-sm">
<span className="flex items-center text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
<i className="w-3 h-3 mr-1" data-lucide="trending-up"></i> 27.5%
                            </span>
<span className="text-neutral-500">vs yesterday ($980)</span>
</div>

<div className="mt-6 flex items-end gap-1 h-12">
<div className="w-full bg-neutral-800 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[75%]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-emerald-500 rounded-t-sm h-[90%] shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
</div>
</div>
</div>

<div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-6 flex-1 flex flex-col">
<div className="flex items-center justify-between mb-4">
<h3 className="text-neutral-200 text-base font-medium tracking-tight">Recent Alerts</h3>
<span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">Last 24h</span>
</div>
<div className="space-y-4 overflow-y-auto pr-2">

<div className="flex gap-4 items-start group p-2 hover:bg-white/5 rounded-lg transition-colors">
<div className="mt-1 flex-shrink-0">
<div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]"></div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="text-sm font-medium text-white">Station #4 Disconnected</h4>
<span className="text-xs text-neutral-500 font-mono">2m</span>
</div>
<p className="text-sm text-neutral-400 mt-0.5 leading-relaxed">Network timeout. Auto-reboot attempted failed.</p>
</div>
</div>

<div className="flex gap-4 items-start group p-2 hover:bg-white/5 rounded-lg transition-colors">
<div className="mt-1 flex-shrink-0">
<div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="text-sm font-medium text-white">Voltage Irregularity</h4>
<span className="text-xs text-neutral-500 font-mono">1h</span>
</div>
<p className="text-sm text-neutral-400 mt-0.5 leading-relaxed">Station #12 reporting fluctuations &gt; 5%.</p>
</div>
</div>

<div className="flex gap-4 items-start group p-2 hover:bg-white/5 rounded-lg transition-colors">
<div className="mt-1 flex-shrink-0">
<div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="text-sm font-medium text-white">Firmware Update</h4>
<span className="text-xs text-neutral-500 font-mono">3h</span>
</div>
<p className="text-sm text-neutral-400 mt-0.5 leading-relaxed">Zone B scheduled for OTA update at 02:00.</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 bg-neutral-900/40 border border-white/5 rounded-2xl p-6 relative">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-lg font-medium text-white tracking-tight">Energy Consumption</h2>
<div className="flex items-center gap-2 text-sm text-neutral-500 mt-1">
<span>Total Usage: <span className="text-white font-medium">4,280 kW/h</span></span>
<span className="w-1 h-1 rounded-full bg-neutral-600"></span>
<span>Avg Load: <span className="text-white font-medium">85%</span></span>
</div>
</div>

<div className="flex bg-neutral-900 rounded-lg p-1 border border-white/5">
<button className="px-3 py-1 text-xs font-medium text-white bg-neutral-800 rounded shadow-sm">24H</button>
<button className="px-3 py-1 text-xs font-medium text-neutral-500 hover:text-white transition-colors">7D</button>
<button className="px-3 py-1 text-xs font-medium text-neutral-500 hover:text-white transition-colors">30D</button>
</div>
</div>

<div className="w-full h-64 relative">

<div className="absolute left-0 top-0 bottom-6 w-8 flex flex-col justify-between text-xs text-neutral-600 font-mono text-right pr-2">
<span>400</span>
<span>300</span>
<span>200</span>
<span>100</span>
<span>0</span>
</div>

<div className="absolute left-10 right-0 top-2 bottom-6">

<div className="w-full h-full flex flex-col justify-between">
<div className="w-full h-px bg-white/5 border-t border-dashed border-white/5"></div>
<div className="w-full h-px bg-white/5 border-t border-dashed border-white/5"></div>
<div className="w-full h-px bg-white/5 border-t border-dashed border-white/5"></div>
<div className="w-full h-px bg-white/5 border-t border-dashed border-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
</div>

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none">
<defs>
<lineargradient id="gradientArea" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10b981" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#10b981" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M0,200 C100,200 150,150 250,120 C350,90 450,160 550,100 C650,40 750,80 850,50 C950,20 1000,60 1200,40 L1200,230 L0,230 Z" fill="url(#gradientArea)"></path>

<path d="M0,200 C100,200 150,150 250,120 C350,90 450,160 550,100 C650,40 750,80 850,50 C950,20 1000,60 1200,40" fill="none" stroke="#10b981" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<circle className="fill-neutral-950 stroke-emerald-400 stroke-2" cx="100%" cy="40" r="4"></circle>
<circle className="fill-emerald-400/20 animate-pulse" cx="100%" cy="40" r="8"></circle>
</svg>
</div>

<div className="absolute left-10 right-0 bottom-0 flex justify-between text-xs text-neutral-600 font-mono mt-2">
<span>00:00</span>
<span>04:00</span>
<span>08:00</span>
<span>12:00</span>
<span>16:00</span>
<span>20:00</span>
<span>Now</span>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
