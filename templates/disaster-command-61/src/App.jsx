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
      

<header className="h-14 border-b flex items-center justify-between px-4 backdrop-blur-md z-50 shrink-0 border-slate-800 bg-slate-950/80">
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded flex items-center justify-center border bg-slate-800 border-slate-700">
<span className="font-mono font-bold tracking-tighter text-white">ND</span>
</div>
<div>
<h1 className="text-xs font-semibold tracking-widest uppercase text-slate-400">National Disaster Management</h1>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-mono text-cyan-400">SYSTEM ONLINE // DEFCON 3</span>
</div>
</div>
</div>
<div className="h-8 w-px bg-slate-800"></div>
<div className="flex items-center gap-3">
<div className="px-2 py-1 rounded bg-red-500/10 border border-red-500/30 flex items-center gap-2">
<iconify-icon className="text-red-500" icon="solar:danger-triangle-linear"></iconify-icon>
<span className="font-semibold text-red-500 tracking-tight">TYPHOON HELENA</span>
</div>
<span className="text-xs font-mono px-1.5 py-0.5 rounded border bg-slate-800 text-white border-slate-700">CAT 5</span>
<span className="text-xs text-slate-400">920 hPa</span>
<span className="text-xs text-slate-400">NW 280km/h</span>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right">
<div className="text-xs font-mono text-cyan-400">AI CONFIDENCE 94%</div>
<div className="text-xs text-slate-500 font-mono">MODEL: SAT-ERA5-LIVE</div>
</div>
<div className="h-8 w-px bg-slate-800"></div>
<div className="text-right">
<div className="text-sm font-mono font-medium tabular-nums text-white">14:02:45 UTC</div>
<div className="text-xs text-slate-500 font-mono">LOCAL: 22:02:45</div>
</div>
<div className="flex items-center gap-2">
<button className="w-8 h-8 rounded border flex items-center justify-center transition-colors border-slate-700 hover:bg-slate-800 text-slate-400">
<iconify-icon icon="solar:bell-bing-linear" width="18"></iconify-icon>
</button>
<button className="w-8 h-8 rounded border flex items-center justify-center transition-colors border-slate-700 hover:bg-slate-800 text-slate-400">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr border flex items-center justify-center text-xs font-bold from-cyan-600 to-blue-600 border-cyan-400 text-white">
                    CMD
                </div>
</div>
</div>
</header>

<main className="flex-1 grid grid-cols-12 gap-1 p-2 overflow-hidden bg-slate-950">

<div className="col-span-3 flex flex-col gap-2 h-full overflow-hidden">

<div className="glass-panel rounded-lg p-3 flex flex-col gap-3 flex-shrink-0">
<div className="flex justify-between items-center pb-2 border-b border-slate-800">
<h2 className="text-xs font-semibold uppercase tracking-widest flex items-center gap-2 text-red-400">
<iconify-icon icon="solar:shield-warning-linear"></iconify-icon>
                        Immediate Action
                    </h2>
<span className="text-[10px] bg-red-500/20 px-1 rounded font-mono text-red-400">4 CRITICAL</span>
</div>
<div className="flex flex-col gap-2 overflow-y-auto max-h-64">

<div className="bg-red-500/5 border-l-2 border-red-500 p-2.5 rounded hover:bg-red-500/10 transition-colors group cursor-pointer">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-semibold text-red-200">Surge Zone Clearance</span>
<span className="text-[10px] font-mono text-red-400">T-minus 2h</span>
</div>
<p className="text-xs mb-2 text-slate-400">120k civilians remain in Zone A red sectors. Transport bottleneck detected.</p>
<div className="flex gap-2">
<button className="text-[10px] px-2 py-0.5 rounded border flex items-center gap-1 bg-red-600/20 hover:bg-red-600/30 text-red-300 border-red-600/30">
<iconify-icon icon="solar:plain-2-linear"></iconify-icon> Deploy Assets
                            </button>
<span className="ml-auto text-[10px] text-cyan-500 flex items-center gap-1 border rounded px-1.5 border-cyan-900/50 bg-cyan-900/10">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> AI: Re-route Hwy 4
                            </span>
</div>
</div>

<div className="bg-amber-500/5 border-l-2 border-amber-500 p-2.5 rounded hover:bg-amber-500/10 transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-semibold text-amber-200">Grid Stability Risk</span>
<span className="text-[10px] font-mono text-amber-400">Prob: 72%</span>
</div>
<p className="text-xs text-slate-400">Substation Delta showing pre-failure signs. Hospital backup status unknown.</p>
</div>

<div className="border-l-2 p-2.5 rounded transition-colors cursor-pointer opacity-70 bg-slate-800/30 border-slate-600 hover:bg-slate-800/50">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-semibold text-slate-300">Port Clearance</span>
<span className="text-[10px] font-mono text-emerald-400">90% Done</span>
</div>
<p className="text-xs text-slate-500">Only small fishing vessels remain. Coast guard en route.</p>
</div>
</div>
</div>

<div className="glass-panel rounded-lg p-3 flex-1 flex flex-col min-h-0">
<div className="flex justify-between items-center mb-3">
<h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Population Dynamics</h2>
<iconify-icon className="text-slate-500" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="grid grid-cols-2 gap-3 mb-4">
<div className="p-2 rounded border bg-slate-900/50 border-slate-800">
<div className="text-[10px] text-slate-500 uppercase">Exposed</div>
<div className="text-lg font-mono tracking-tight text-white">2.4M</div>
<div className="text-[10px] text-red-400">+12% vs est.</div>
</div>
<div className="p-2 rounded border bg-slate-900/50 border-slate-800">
<div className="text-[10px] text-slate-500 uppercase">Sheltered</div>
<div className="text-lg font-mono tracking-tight text-emerald-400">840k</div>
<div className="text-[10px] text-slate-500">Cap: 1.2M</div>
</div>
</div>
<div className="space-y-4 overflow-y-auto pr-1">

<div>
<div className="flex justify-between text-[10px] uppercase mb-1 text-slate-400">
<span>Evacuation: Coastal Zone</span>
<span className="text-white">68%</span>
</div>
<div className="h-1.5 w-full rounded-full overflow-hidden bg-slate-800">
<div className="h-full bg-gradient-to-r from-amber-500 to-red-500 w-[68%]"></div>
</div>
<div className="flex justify-between items-center mt-1">
<span className="text-[10px] text-slate-600">ETA Complete: 4h 12m</span>
<span className="text-[10px] text-cyan-500 px-1 rounded bg-cyan-900/20">AI: Pace Lagging</span>
</div>
</div>

<div>
<div className="flex justify-between text-[10px] uppercase mb-1 text-slate-400">
<span>Hospital Transfers</span>
<span className="text-white">92%</span>
</div>
<div className="h-1.5 w-full rounded-full overflow-hidden bg-slate-800">
<div className="h-full bg-emerald-500 w-[92%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-[10px] uppercase mb-1 text-slate-400">
<span>Traffic Density (Main Arteries)</span>
<span className="text-red-400">CRITICAL</span>
</div>
<div className="h-1.5 w-full rounded-full overflow-hidden bg-slate-800">
<div className="h-full w-[98%] animate-pulse bg-red-600"></div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-lg p-3 shrink-0">
<div className="flex gap-2 mb-2">
<button className="flex-1 hover:bg-cyan-500 text-xs font-medium py-1.5 rounded flex items-center justify-center gap-2 transition-colors bg-cyan-600 text-white">
<iconify-icon icon="solar:smartphone-2-linear"></iconify-icon> Blast SMS
                    </button>
<button className="flex-1 border text-xs font-medium py-1.5 rounded flex items-center justify-center gap-2 transition-colors bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300">
<iconify-icon icon="solar:radio-linear"></iconify-icon> EAS Alert
                    </button>
</div>
<div className="text-[10px] text-slate-500 text-center font-mono">CHANNEL: SECURE-GOV-1 // ENCRYPTED</div>
</div>
</div>

<div className="col-span-6 flex flex-col h-full gap-2 relative group">

<div className="flex-1 rounded-lg border relative overflow-hidden grid-bg border-slate-800 bg-slate-900">

<div className="absolute top-4 left-4 z-20 flex gap-2">
<div className="glass-panel px-3 py-1.5 rounded flex items-center gap-3">
<span className="text-xs font-semibold tracking-tight text-slate-300">LIVE TRACKING</span>
<div className="flex gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
</div>
</div>
<div className="glass-panel px-3 py-1.5 rounded flex items-center gap-3 border-l-2 border-cyan-500">
<span className="text-[10px] uppercase text-slate-400">Landfall Prediction</span>
<span className="text-xs font-mono text-cyan-300">18:00 UTC (+/- 1h)</span>
</div>
</div>

<div className="absolute top-4 right-4 z-20 flex flex-col gap-1">
<button className="w-8 h-8 glass-panel rounded flex items-center justify-center border-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.2)] text-cyan-400">
<iconify-icon icon="solar:layers-linear"></iconify-icon>
</button>
<button className="w-8 h-8 glass-panel rounded flex items-center justify-center transition-colors text-slate-400 hover:text-white">
<iconify-icon icon="solar:cloud-rain-linear"></iconify-icon>
</button>
<button className="w-8 h-8 glass-panel rounded flex items-center justify-center transition-colors text-slate-400 hover:text-white">
<iconify-icon icon="solar:wind-linear"></iconify-icon>
</button>
<button className="w-8 h-8 glass-panel rounded flex items-center justify-center transition-colors text-slate-400 hover:text-white">
<iconify-icon icon="solar:bolt-circle-linear"></iconify-icon>
</button>
</div>

<div className="absolute inset-0 z-0 opacity-80 mix-blend-screen pointer-events-none">
<div className="scan-line"></div>

<svg height="100%" preserveaspectratio="none" viewbox="0 0 800 600" width="100%">
<path d="M600,0 C620,100 580,200 650,300 C700,380 620,450 640,600 L800,600 L800,0 Z" fill="#0f172a" stroke="#334155" strokeWidth="1.5"></path>

<circle className="city-marker" cx="630" cy="250" fill="#cbd5e1" r="3"></circle>
<text fill="#64748b" fontFamily="monospace" fontSize="10" x="640" y="255">CAPITAL REGION</text>
<circle cx="680" cy="400" fill="#cbd5e1" r="3"></circle>
<text fill="#64748b" fontFamily="monospace" fontSize="10" x="690" y="405">PORT CITY</text>

<path d="M100,400 L550,200 L600,280 L100,500 Z" fill="url(#coneGradient)" opacity="0.2"></path>

<path d="M100,450 Q300,400 580,240" stroke="#f43f5e" stroke-dasharray="4 4" strokeWidth="2"></path>

<circle cx="580" cy="240" fill="none" opacity="0.5" r="40" stroke="#f43f5e" strokeWidth="1">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="38;42;38"></animate>
</circle>
<circle className="pulse-critical" cx="580" cy="240" fill="#f43f5e" r="5"></circle>
<defs>
<lineargradient id="coneGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: 'rgba(255,255,255,0)', stopOpacity: '0'}}></stop>
<stop offset="100%" style={{stopColor: 'rgba(244,63,94,0.5)', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
</svg>
</div>

<div className="absolute top-[40%] left-[65%] z-10">
<div className="border border-cyan-500/50 p-2 rounded shadow-lg backdrop-blur text-xs max-w-[180px] bg-slate-900/90 text-cyan-400">
<div className="flex items-center gap-2 mb-1">
<iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="font-bold tracking-tight">IMPACT ZONE</span>
</div>
<p className="text-[10px] leading-snug text-slate-300">
                            High probability of landfall in sector 4. Storm surge exp &gt; 4m.
                        </p>
</div>
<div className="w-0.5 h-8 bg-cyan-500/50 mx-auto"></div>
</div>

<div className="absolute bottom-4 left-4 right-4 z-20">
<div className="glass-panel p-2 rounded-lg border-t border-cyan-500/30 flex flex-col gap-2">
<div className="flex justify-between items-center text-[10px] uppercase tracking-wider font-mono text-slate-400">
<span>Now</span>
<span>+3h</span>
<span>+6h</span>
<span className="text-cyan-400">+12h (Landfall)</span>
<span>+24h</span>
</div>
<div className="relative h-6 rounded flex items-center px-1 cursor-pointer group/slider bg-slate-800/50">
<div className="absolute top-0 bottom-0 left-[45%] w-1 bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)] z-10"></div>
<div className="w-full h-1 rounded overflow-hidden bg-slate-700">
<div className="h-full w-[45%] bg-cyan-900"></div>
</div>
</div>
<div className="flex justify-between items-center">
<div className="flex gap-2">
<button className="text-[10px] px-2 py-0.5 rounded flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-white">
<iconify-icon icon="solar:play-linear"></iconify-icon> Run Sim
                                </button>
<button className="text-[10px] px-2 py-0.5 rounded flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-white">
<iconify-icon icon="solar:restart-linear"></iconify-icon> Reset
                                </button>
</div>
<span className="text-[10px] text-cyan-500 flex items-center gap-1">
<iconify-icon icon="solar:cpu-linear"></iconify-icon>
                                SIMULATION ENGINE ACTIVE
                            </span>
</div>
</div>
</div>
</div>

<div className="h-32 grid grid-cols-4 gap-2 shrink-0">

<div className="glass-panel rounded border relative overflow-hidden group border-slate-800">
<div className="absolute top-1 left-2 text-[8px] px-1 rounded z-10 bg-red-600 text-white">LIVE</div>
<div className="absolute bottom-1 left-2 text-[10px] font-mono z-10 drop-shadow-md text-white">CAM-04 COASTAL</div>
<div className="w-full h-full flex items-center justify-center bg-slate-800">
<iconify-icon className="text-3xl text-slate-600" icon="solar:videocamera-record-linear"></iconify-icon>
</div>

<div className="absolute top-1/2 left-1/3 w-10 h-8 border z-10 opacity-70 border-yellow-400"></div>
<div className="absolute top-[45%] left-1/3 text-[8px] px-0.5 text-yellow-400 bg-black/50">HIGH WAVES</div>
</div>

<div className="glass-panel rounded border relative overflow-hidden border-slate-800">
<div className="absolute top-1 left-2 text-[8px] px-1 rounded z-10 bg-red-600 text-white">LIVE</div>
<div className="absolute bottom-1 left-2 text-[10px] font-mono z-10 drop-shadow-md text-white">DRONE-ALPHA</div>
<div className="w-full h-full flex items-center justify-center bg-slate-800">
<iconify-icon className="text-3xl text-slate-600" icon="solar:airbuds-case-charge-linear"></iconify-icon>
</div>
</div>

<div className="glass-panel rounded border relative overflow-hidden border-slate-800">
<div className="absolute top-1 left-2 text-[8px] px-1 rounded z-10 bg-red-600 text-white">LIVE</div>
<div className="absolute bottom-1 left-2 text-[10px] font-mono z-10 drop-shadow-md text-white">HWY-9 TRAFFIC</div>
<div className="w-full h-full flex items-center justify-center bg-slate-800">
<iconify-icon className="text-3xl text-slate-600" icon="solar:streets-linear"></iconify-icon>
</div>

<div className="absolute bottom-4 right-4 w-12 h-6 border border-red-500 z-10 opacity-70"></div>
<div className="absolute bottom-10 right-4 text-[8px] text-red-500 px-0.5 bg-black/50">GRIDLOCK</div>
</div>

<div className="glass-panel rounded border p-2 flex flex-col justify-between border-slate-800">
<div className="text-[10px] text-slate-500 uppercase">Sensor Array</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between text-xs font-mono">
<span className="text-slate-400">Rain</span>
<span className="text-cyan-400">45mm/h</span>
</div>
<div className="flex justify-between text-xs font-mono">
<span className="text-slate-400">Wind</span>
<span className="text-red-400">140kts</span>
</div>
<div className="flex justify-between text-xs font-mono">
<span className="text-slate-400">Tide</span>
<span className="text-amber-400">+2.1m</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-3 flex flex-col gap-2 h-full overflow-hidden">

<div className="glass-panel rounded-lg p-3 shrink-0">
<div className="flex justify-between items-center mb-3">
<h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Impact Model</h2>
<iconify-icon className="text-slate-500" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="space-y-3">

<div>
<div className="flex justify-between mb-1">
<span className="text-[10px] text-slate-400">Infrastructure Damage Prob.</span>
<span className="text-[10px] font-mono text-red-400">HIGH</span>
</div>
<div className="flex gap-0.5 h-6">
<div className="flex-1 rounded-l border-r bg-green-900/40 border-slate-900"></div>
<div className="flex-1 border-r bg-green-700/40 border-slate-900"></div>
<div className="flex-1 border-r bg-yellow-600/40 border-slate-900"></div>
<div className="flex-1 border-r bg-orange-600/60 border-slate-900"></div>
<div className="flex-1 rounded-r border bg-red-600/80 border-white/20"></div>
</div>
</div>

<div className="grid grid-cols-2 gap-2">
<div className="p-2 rounded bg-slate-800/30">
<div className="text-[10px] text-slate-500">Power Outage</div>
<div className="text-lg font-mono tracking-tighter text-white">84%</div>
<div className="h-1 w-full rounded-full mt-1 bg-slate-700">
<div className="w-[84%] bg-amber-500 h-full rounded-full"></div>
</div>
</div>
<div className="p-2 rounded bg-slate-800/30">
<div className="text-[10px] text-slate-500">Telecom</div>
<div className="text-lg font-mono tracking-tighter text-white">45%</div>
<div className="h-1 w-full rounded-full mt-1 bg-slate-700">
<div className="w-[45%] bg-blue-500 h-full rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-lg p-3 flex-1 flex flex-col min-h-0">
<div className="flex justify-between items-center mb-2">
<h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Assets Deployed</h2>
<span className="text-[10px] px-1.5 py-0.5 rounded border bg-slate-800 text-cyan-400 border-slate-700">AI OPTIMIZED</span>
</div>
<div className="overflow-y-auto flex-1 pr-1">
<table className="w-full text-left border-collapse">
<thead className="text-[10px] text-slate-500 font-mono uppercase sticky top-0 bg-slate-900/50">
<tr>
<th className="py-1 pl-1">Unit</th>
<th className="py-1">Loc</th>
<th className="py-1 text-right pr-1">Stat</th>
</tr>
</thead>
<tbody className="text-xs">

<tr className="border-b border-slate-800 hover:bg-slate-800/30">
<td className="py-2 pl-1 font-mono text-slate-300">SAR-Heli-01</td>
<td className="py-2 text-slate-400">Sec 4</td>
<td className="py-2 text-right pr-1"><span className="text-[10px] px-1 rounded text-emerald-400 bg-emerald-900/20">ACTIVE</span></td>
</tr>

<tr className="border-b border-slate-800 hover:bg-slate-800/30">
<td className="py-2 pl-1 font-mono text-slate-300">Boat Team B</td>
<td className="py-2 text-slate-400">Delta</td>
<td className="py-2 text-right pr-1"><span className="text-[10px] px-1 rounded text-amber-400 bg-amber-900/20">STAGING</span></td>
</tr>

<tr className="border-b border-slate-800 hover:bg-slate-800/30">
<td className="py-2 pl-1 font-mono text-slate-300">Med-Evac 9</td>
<td className="py-2 text-slate-400">Hwy 1</td>
<td className="py-2 text-right pr-1"><span className="text-[10px] px-1 rounded text-emerald-400 bg-emerald-900/20">ACTIVE</span></td>
</tr>

<tr className="border-b border-slate-800 hover:bg-slate-800/30">
<td className="py-2 pl-1 font-mono text-slate-300">Relief Convoy</td>
<td className="py-2 text-slate-400">Base</td>
<td className="py-2 text-right pr-1"><span className="text-[10px] px-1 rounded text-slate-400 bg-slate-800">LOADING</span></td>
</tr>

<tr className="border-b border-slate-800 hover:bg-slate-800/30">
<td className="py-2 pl-1 font-mono text-slate-300">Drone Sq 4</td>
<td className="py-2 text-slate-400">Coast</td>
<td className="py-2 text-right pr-1"><span className="text-[10px] px-1 rounded text-emerald-400 bg-emerald-900/20">SCANNING</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="glass-panel rounded-lg p-3 shrink-0">
<h2 className="text-xs font-semibold uppercase tracking-widest mb-2 text-slate-400">Transport Control</h2>
<div className="grid grid-cols-2 gap-2">
<div className="border border-red-500/30 bg-red-500/5 p-2 rounded">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-red-400" icon="solar:plane-linear"></iconify-icon>
<span className="text-[10px] font-bold text-red-200">AIRPORTS</span>
</div>
<div className="text-xs font-mono text-red-400">ALL FLIGHTS GROUNDED</div>
<div className="text-[10px] text-slate-500">Next update: 1h</div>
</div>
<div className="border border-amber-500/30 bg-amber-500/5 p-2 rounded">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-amber-400" icon="solar:anchor-linear"></iconify-icon>
<span className="text-[10px] font-bold text-amber-200">PORTS</span>
</div>
<div className="text-xs font-mono text-amber-400">LEVEL 4 LOCKDOWN</div>
<div className="text-[10px] text-slate-500">Vessels secured</div>
</div>
</div>
</div>
</div>
</main>
<footer className="h-6 border-t flex items-center justify-between px-4 text-[10px] uppercase font-mono shrink-0 z-50 bg-slate-950 border-slate-800 text-slate-600">
<span>Restricted Access // Official Use Only</span>
<div className="flex gap-4">
<span>Data Latency: 12ms</span>
<span>Server: AP-SOUTHEAST-1</span>
</div>
</footer>

    </>
  );
}
