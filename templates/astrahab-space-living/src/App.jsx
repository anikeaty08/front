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
      

<div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/10 blur-[120px] -z-10 pointer-events-none"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[40%] h-[50%] rounded-full bg-blue-900/10 blur-[120px] -z-10 pointer-events-none"></div>
<div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-50 -z-10 pointer-events-none"></div>

<nav className="w-full max-w-6xl mx-auto p-6 flex justify-between items-center relative z-10">
<div className="text-base tracking-tighter font-semibold text-white uppercase">ASTRAHAB</div>
<div className="hidden sm:flex gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors duration-300" href="#problem">Problem</a>
<a className="hover:text-white transition-colors duration-300" href="#work">Phase 0</a>
<a className="hover:text-white transition-colors duration-300" href="#prototypes">Prototypes</a>
<a className="hover:text-white transition-colors duration-300" href="#systems">Systems</a>
</div>
</nav>

<section className="max-w-4xl mx-auto px-6 pt-24 pb-32 md:pt-32 md:pb-40 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-slate-300 mb-8 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400" style={{animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></span>
            System Validation Active
        </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight mb-6">
            Designing the Future of <br className="hidden sm:block"/>Human Survival in Space <span className="inline-block hover:-translate-y-1 transition-transform duration-300 cursor-default">🚀</span>
</h1>
<p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            ASTRAHAB is focused on building sustainable space habitats through system-driven thinking and experimental validation.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-white text-black px-7 py-3 rounded-full text-sm font-medium hover:bg-slate-200 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto" href="#prototypes">Explore Systems</a>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-20 relative z-10 border-t border-white/5" id="problem">
<div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
<div>
<h2 className="text-xs font-semibold text-cyan-500 tracking-widest uppercase mb-6">The Problem</h2>
<p className="text-xl md:text-2xl font-medium tracking-tight text-slate-300 leading-snug">
                    Space is not built for humans. Survival depends on tightly controlled systems — air, temperature, pressure, and human factors. <span className="text-white">Even small failures can be critical.</span>
</p>
</div>
<div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl backdrop-blur-sm">
<h2 className="text-xs font-semibold text-slate-500 tracking-widest uppercase mb-4">What is ASTRAHAB</h2>
<p className="text-sm md:text-base text-slate-400 leading-relaxed font-normal">
                    ASTRAHAB is an early-stage initiative focused on understanding and building the core systems required for human survival in space habitats. Starting from simulations and experiments, evolving toward real-world space integration.
                </p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24 relative z-10 border-t border-white/5" id="work">
<div className="mb-14">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">Current Work — Phase 0</h2>
<p className="text-sm text-slate-400 font-normal">Baseline simulations and terrestrial closed-environment testing.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group border border-white/5 bg-[#0a0a0a] rounded-2xl p-2 hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300">
<div className="aspect-video bg-[#050505] rounded-xl border border-white/5 flex items-center justify-center mb-5 relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]"></div>
<iconify-icon className="text-slate-600 text-3xl group-hover:text-cyan-400 transition-colors duration-500" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="px-4 pb-5">
<h3 className="text-base font-semibold text-white mb-2 tracking-tight">Life Support Simulation</h3>
<p className="text-xs text-slate-400 leading-relaxed font-normal">O₂ / CO₂ balance modeling and algorithmic stability testing under continuous environmental load.</p>
</div>
</div>
<div className="group border border-white/5 bg-[#0a0a0a] rounded-2xl p-2 hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300">
<div className="aspect-video bg-[#050505] rounded-xl border border-white/5 flex items-center justify-center mb-5 relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]"></div>
<iconify-icon className="text-slate-600 text-3xl group-hover:text-cyan-400 transition-colors duration-500" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="px-4 pb-5">
<h3 className="text-base font-semibold text-white mb-2 tracking-tight">Closed Environments</h3>
<p className="text-xs text-slate-400 leading-relaxed font-normal">Physical experiments validating sensor arrays, data telemetry, and automated environmental controls.</p>
</div>
</div>
<div className="group border border-white/5 bg-[#0a0a0a] rounded-2xl p-2 hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300">
<div className="aspect-video bg-[#050505] rounded-xl border border-white/5 flex items-center justify-center mb-5 relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]"></div>
<iconify-icon className="text-slate-600 text-3xl group-hover:text-cyan-400 transition-colors duration-500" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="px-4 pb-5">
<h3 className="text-base font-semibold text-white mb-2 tracking-tight">Human Factors</h3>
<p className="text-xs text-slate-400 leading-relaxed font-normal">Analyzing psychological and systemic behavior impacts of humans operating within strict habitat constraints.</p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24 relative z-10 border-t border-white/5" id="prototypes">

<div className="mb-24">
<div className="mb-14">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">Prototype 1 — Bio-Recovery Chamber</h2>
<p className="text-sm text-slate-400 font-normal">Interactive 3D simulation of core survival systems and telemetry.</p>
</div>
<div className="proto-wrapper w-full h-[500px] md:h-[700px] rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(0,170,255,0.05)]" id="proto-container">
<canvas id="proto-canvas"></canvas>
<div className="proto-breath-overlay"></div>
<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,8,0.85)_100%)] z-[6]"></div>
<div className="proto-noise"></div>
<div className="proto-scan-line"></div>
<div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-7 z-10 font-mono transition-opacity duration-[2000ms]" id="proto-ui">
<div className="flex justify-between items-start">
<div className="anim-fade-in-1 text-xs tracking-[0.25em] text-cyan-200/70 uppercase">
<span className="block text-lg tracking-[0.4em] text-cyan-200/90 mb-1 font-semibold">AstraHab</span>
                            BIO-RECOVERY CHAMBER · UNIT 01
                        </div>
<div className="anim-fade-in-2 flex flex-col gap-2 items-end">
<div className="flex items-center gap-2.5 text-xs tracking-widest text-sky-400/60">
<span>O₂ FLOW</span>
<div className="w-16 h-0.5 bg-white/10 rounded-full overflow-hidden"><div className="h-full rounded-full transition-all duration-[2000ms] ease-out" id="proto-vf1" style={{width: '0%', background: 'linear-gradient(90deg,#0af,#0ff)'}}></div></div>
<span className="text-sm text-cyan-200/90 min-w-[3.25rem] text-right" id="proto-vv1">—</span>
</div>
<div className="flex items-center gap-2.5 text-xs tracking-widest text-sky-400/60">
<span>NEURAL</span>
<div className="w-16 h-0.5 bg-white/10 rounded-full overflow-hidden"><div className="h-full rounded-full transition-all duration-[2000ms] ease-out" id="proto-vf2" style={{width: '0%', background: 'linear-gradient(90deg,#a0f,#6af)'}}></div></div>
<span className="text-sm text-cyan-200/90 min-w-[3.25rem] text-right" id="proto-vv2">—</span>
</div>
<div className="flex items-center gap-2.5 text-xs tracking-widest text-sky-400/60">
<span>CARDIAC</span>
<div className="w-16 h-0.5 bg-white/10 rounded-full overflow-hidden"><div className="h-full rounded-full transition-all duration-[2000ms] ease-out" id="proto-vf3" style={{width: '0%', background: 'linear-gradient(90deg,#f6a,#f4f)'}}></div></div>
<span className="text-sm text-cyan-200/90 min-w-[3.25rem] text-right" id="proto-vv3">—</span>
</div>
<div className="flex items-center gap-2.5 text-xs tracking-widest text-sky-400/60">
<span>EMOTIONAL</span>
<div className="w-16 h-0.5 bg-white/10 rounded-full overflow-hidden"><div className="h-full rounded-full transition-all duration-[2000ms] ease-out" id="proto-vf4" style={{width: '0%', background: 'linear-gradient(90deg,#4f8,#0fa)'}}></div></div>
<span className="text-sm text-cyan-200/90 min-w-[3.25rem] text-right" id="proto-vv4">—</span>
</div>
</div>
</div>
<div className="flex justify-between items-end">
<div className="text-xs tracking-widest text-sky-300/40 uppercase opacity-0 transition-opacity duration-1000" id="proto-phase-label">INITIALIZING CORE SUPPORT</div>
<div className="text-xs tracking-widest text-sky-400/50 uppercase opacity-0 transition-opacity duration-1000" id="proto-status-msg">SYSTEM ACTIVE</div>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-0 pointer-events-none transition-opacity duration-[3000ms] z-20 font-mono" id="proto-final-msg">
<div className="text-xs tracking-[0.5em] text-cyan-300/60 mb-3 uppercase">AstraHab Core Support</div>
<div className="text-2xl md:text-3xl font-semibold tracking-[0.4em] text-cyan-100/95 uppercase">STABILIZED</div>
<div className="text-xs tracking-widest text-sky-400/40 mt-3 uppercase">ASTRAHAB CORE SUPPORT ACTIVE</div>
</div>
</div>
</div>

<div className="mb-24">
<div className="mb-14">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">Prototype 3 — Life Support Failure Simulation</h2>
<p className="text-sm text-slate-400 font-normal">Real-time telemetry breakdown based on NASA HIDH reference constraints.</p>
</div>
<div className="w-full bg-[#030508] border border-white/10 rounded-2xl p-6 md:p-10 font-mono shadow-[0_0_40px_rgba(0,170,255,0.02)] relative overflow-hidden">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-5 mb-8 gap-4">
<div className="text-xs tracking-widest text-cyan-500/60 uppercase">
<span className="block text-base tracking-widest text-cyan-200/90 mb-1 font-semibold">AstraHab</span>
                        Life Support Failure Simulation
                    </div>
<div className="text-xs tracking-widest text-white/20 uppercase text-left md:text-right">
                        ECLSS · EXP-002<br/>Failure Mode Analysis
                    </div>
</div>

<div className="flex justify-between items-center text-xs tracking-widest text-cyan-500/50 mb-6">
<div>MISSION TIME  <span className="text-cyan-400/80" id="p3-missionTime">T+ 00:00:00</span></div>
<div>LIFE SUPPORT  <span className="text-slate-400" id="p3-lsStatus">OFFLINE</span></div>
</div>

<div className="flex items-center gap-4 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 mb-8 transition-colors duration-700" id="p3-statusBar">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse shrink-0" id="p3-statusDot"></div>
<div className="text-sm tracking-widest uppercase text-emerald-500 font-medium transition-colors duration-700" id="p3-statusLabel">STANDBY</div>
<div className="text-xs tracking-wider text-white/30 ml-auto hidden sm:block uppercase" id="p3-statusDesc">Press "Initialize System" to begin</div>
</div>

<div className="grid md:grid-cols-2 gap-6 mb-8">

<div className="relative bg-white/[0.02] border border-white/5 rounded-xl p-6 overflow-hidden transition-colors duration-700" id="p3-o2Panel">
<div className="absolute top-0 left-0 right-0 h-[2px] bg-sky-500/50"></div>
<div className="flex justify-between text-xs tracking-widest text-white/30 uppercase mb-4">
<span>Oxygen · O₂</span>
<span className="text-sky-500/50 text-[10px]" id="p3-o2Src">SOURCE: OFF</span>
</div>
<div className="text-5xl md:text-6xl font-light tracking-tighter text-sky-400 mb-2 transition-colors duration-700" id="p3-o2Value">100.0</div>
<div className="text-[10px] tracking-widest text-white/25 mb-6 uppercase">% atmospheric concentration</div>
<div className="h-1.5 bg-white/5 rounded-full overflow-hidden mb-3">
<div className="h-full bg-sky-400 rounded-full transition-all duration-700" id="p3-o2Bar" style={{width: '100%'}}></div>
</div>
<div className="flex justify-between text-[10px] tracking-wider text-white/20 mb-5">
<span>0%</span><span>10%</span><span>21%</span>
</div>
<div className="flex flex-wrap gap-2 mb-5">
<span className="text-[10px] px-2 py-0.5 rounded border border-emerald-500/30 text-emerald-500/70 tracking-wider">SAFE &gt;19.5%</span>
<span className="text-[10px] px-2 py-0.5 rounded border border-amber-500/30 text-amber-500/70 tracking-wider">WARN 16–19.5%</span>
<span className="text-[10px] px-2 py-0.5 rounded border border-red-500/30 text-red-500/70 tracking-wider">CRIT &lt;16%</span>
</div>
<div className="flex items-center gap-2 text-[10px] text-white/25 uppercase">
<span className="text-red-400 text-sm">↓</span>
<span id="p3-o2Rate">–0.84 kg/hr per crew · awaiting start</span>
</div>
</div>

<div className="relative bg-white/[0.02] border border-white/5 rounded-xl p-6 overflow-hidden transition-colors duration-700" id="p3-co2Panel">
<div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500/50"></div>
<div className="flex justify-between text-xs tracking-widest text-white/30 uppercase mb-4">
<span>Carbon Dioxide · CO₂</span>
<span className="text-orange-500/50 text-[10px]" id="p3-co2Src">SCRUBBER: OFF</span>
</div>
<div className="text-5xl md:text-6xl font-light tracking-tighter text-emerald-500 mb-2 transition-colors duration-700" id="p3-co2Value">400</div>
<div className="text-[10px] tracking-widest text-white/25 mb-6 uppercase">ppm · parts per million</div>
<div className="h-1.5 bg-white/5 rounded-full overflow-hidden mb-3">
<div className="h-full bg-emerald-500 rounded-full transition-all duration-700" id="p3-co2Bar" style={{width: '4%'}}></div>
</div>
<div className="flex justify-between text-[10px] tracking-wider text-white/20 mb-5">
<span>0</span><span>5000</span><span>10000 ppm</span>
</div>
<div className="flex flex-wrap gap-2 mb-5">
<span className="text-[10px] px-2 py-0.5 rounded border border-emerald-500/30 text-emerald-500/70 tracking-wider">SAFE &lt;1000</span>
<span className="text-[10px] px-2 py-0.5 rounded border border-amber-500/30 text-amber-500/70 tracking-wider">WARN 1–5k</span>
<span className="text-[10px] px-2 py-0.5 rounded border border-red-500/30 text-red-500/70 tracking-wider">CRIT &gt;5000</span>
</div>
<div className="flex items-center gap-2 text-[10px] text-white/25 uppercase">
<span className="text-orange-400 text-sm">↑</span>
<span id="p3-co2Rate">+1.0 kg/hr per crew · awaiting start</span>
</div>
</div>
</div>

<div className="bg-white/[0.015] border border-white/5 rounded-xl p-5 mb-8">
<div className="flex justify-between text-[10px] tracking-widest text-white/20 uppercase mb-4">
<span>System Event Log</span>
<span className="text-amber-500/50">Runtime Records</span>
</div>
<div className="custom-scrollbar flex flex-col gap-1 max-h-32 overflow-y-auto pr-2" id="p3-logEntries">

</div>
</div>

<div className="hidden w-full p-6 border border-red-500/30 rounded-xl bg-red-500/5 text-red-400/80 text-xs tracking-widest text-center leading-relaxed mb-8 uppercase" id="p3-endMessage">
<strong className="block text-sm text-red-500/95 tracking-widest mb-3">Simulation Complete</strong>
                    Life support failure leads to loss of survivable conditions.<br/>
                    O₂ depleted below human survival threshold.<br/>
                    CO₂ reached toxic concentration levels.<br/><br/>
                    This is why life support redundancy is the first principle of habitat engineering.
                </div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
<button className="flex flex-col items-start gap-2 p-4 border border-emerald-500/30 rounded-xl text-emerald-500 text-xs tracking-widest uppercase transition-all duration-300 hover:bg-emerald-500/10 hover:border-emerald-500/70 disabled:opacity-30 disabled:cursor-not-allowed" id="p3-btnStart">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
<span className="opacity-70 text-left">Initialize<br/>System</span>
</button>
<button className="flex flex-col items-start gap-2 p-4 border border-orange-500/30 rounded-xl text-orange-500 text-xs tracking-widest uppercase transition-all duration-300 hover:bg-orange-500/10 hover:border-orange-500/70 disabled:opacity-30 disabled:cursor-not-allowed opacity-30" disabled="" id="p3-btnStop">
<iconify-icon className="text-xl" icon="solar:shield-warning-linear"></iconify-icon>
<span className="opacity-70 text-left">Trigger<br/>Failure</span>
</button>
<button className="flex flex-col items-start gap-2 p-4 border border-white/15 rounded-xl text-white/40 text-xs tracking-widest uppercase transition-all duration-300 hover:bg-white/5 hover:border-white/30 hover:text-white/70" id="p3-btnRestart">
<iconify-icon className="text-xl" icon="solar:restart-linear"></iconify-icon>
<span className="opacity-70 text-left">Reset<br/>Simulation</span>
</button>
</div>
</div>
</div>

<div>
<div className="mb-14">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">Prototype 4 — Closed-Loop Life Support</h2>
<p className="text-sm text-slate-400 font-normal">Autonomous ECLSS conversion cycle balancing O₂ generation and CO₂ scrubbing.</p>
</div>
<div className="w-full bg-[#030508] border border-white/10 rounded-2xl p-6 md:p-10 font-mono shadow-[0_0_40px_rgba(150,80,255,0.02)] relative overflow-hidden" id="p4-container">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-5 mb-8 gap-4">
<div className="text-xs tracking-widest text-purple-500/60 uppercase">
<span className="block text-base tracking-widest text-purple-200/90 mb-1 font-semibold">AstraHab</span>
                        Closed-Loop Life Support
                    </div>
<div className="text-xs tracking-widest text-white/20 uppercase text-left md:text-right">
                        ECLSS · EXP-003<br/>Closed Loop Analysis
                    </div>
</div>

<div className="flex justify-between items-center text-xs tracking-widest text-purple-500/50 mb-6 uppercase">
<div>MISSION TIME  <span className="text-purple-400/80" id="p4-mTime">T+ 00:00:00</span></div>
<div>CONVERSION SYS  <span className="text-slate-400" id="p4-convStatus">OFFLINE</span></div>
</div>

<div className="flex items-center gap-4 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 mb-4 transition-colors duration-700" id="p4-statusBar">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse shrink-0" id="p4-sdot"></div>
<div className="text-sm tracking-widest uppercase text-emerald-500 font-medium transition-colors duration-700" id="p4-slabel">STANDBY</div>
<div className="text-xs tracking-wider text-white/30 ml-auto hidden sm:block uppercase" id="p4-sdesc">Press "Start Cycle" to begin</div>
</div>

<div className="hidden items-center gap-3 w-full p-4 rounded-xl border border-amber-500/40 bg-amber-500/10 text-amber-500 text-xs tracking-widest uppercase mb-6 transition-all duration-300" id="p4-alertBanner">
<iconify-icon className="text-lg shrink-0" icon="solar:danger-triangle-linear"></iconify-icon>
<span id="p4-alertText">System adjusting...</span>
</div>

<div className="w-full bg-white/[0.015] border border-white/5 rounded-xl p-6 mb-8 relative">
<div className="text-xs tracking-widest text-white/20 uppercase mb-8 text-center">Closed-Loop Cycle · O₂ → Human → CO₂ → Conversion</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 relative z-10">

<div className="flex flex-col items-center justify-center p-3 border border-sky-500/30 bg-sky-500/5 rounded-lg w-full md:w-auto min-w-[110px] transition-all duration-500" id="p4-fnO2">
<iconify-icon className="text-2xl text-sky-400 mb-2" icon="solar:wind-linear"></iconify-icon>
<div className="text-xs tracking-widest uppercase text-white/80 mb-1">O₂ Supply</div>
<div className="text-xs text-white/30" id="p4-fnO2val">100%</div>
</div>

<div className="flex flex-col items-center px-2 hidden md:flex">
<div className="h-[2px] w-10 bg-white/5 relative overflow-hidden rounded-full mb-1">
<div className="absolute top-0 h-full w-2 bg-sky-400 rounded-full p4-flow-dot hidden" id="p4-arrO2H"></div>
</div>
<div className="text-xs text-sky-500/50 uppercase scale-75">Breathed</div>
</div>

<div className="flex flex-col items-center justify-center p-3 border border-white/10 bg-white/5 rounded-lg w-full md:w-auto min-w-[110px] transition-all duration-500" id="p4-fnHuman">
<iconify-icon className="text-2xl text-white/70 mb-2" icon="solar:user-linear"></iconify-icon>
<div className="text-xs tracking-widest uppercase text-white/80 mb-1">Human</div>
<div className="text-xs text-white/30 uppercase">1 Crew</div>
</div>

<div className="flex flex-col items-center px-2 hidden md:flex">
<div className="h-[2px] w-10 bg-white/5 relative overflow-hidden rounded-full mb-1">
<div className="absolute top-0 h-full w-2 bg-orange-400 rounded-full p4-flow-dot hidden" id="p4-arrHCO2"></div>
</div>
<div className="text-xs text-orange-500/50 uppercase scale-75">Exhaled</div>
</div>

<div className="flex flex-col items-center justify-center p-3 border border-orange-500/30 bg-orange-500/5 rounded-lg w-full md:w-auto min-w-[110px] transition-all duration-500" id="p4-fnCO2">
<iconify-icon className="text-2xl text-orange-400 mb-2" icon="solar:danger-circle-linear"></iconify-icon>
<div className="text-xs tracking-widest uppercase text-white/80 mb-1">CO₂ Level</div>
<div className="text-xs text-white/30" id="p4-fnCO2val">400 ppm</div>
</div>

<div className="flex flex-col items-center px-2 hidden md:flex">
<div className="h-[2px] w-10 bg-white/5 relative overflow-hidden rounded-full mb-1">
<div className="absolute top-0 h-full w-2 bg-purple-400 rounded-full p4-flow-dot hidden" id="p4-arrCO2Conv"></div>
</div>
<div className="text-xs text-purple-500/50 uppercase scale-75">Scrubbed</div>
</div>

<div className="flex flex-col items-center justify-center p-3 border border-purple-500/30 bg-purple-500/5 rounded-lg w-full md:w-auto min-w-[110px] transition-all duration-500" id="p4-fnConv">
<iconify-icon className="text-2xl text-purple-400 mb-2" icon="solar:settings-linear"></iconify-icon>
<div className="text-xs tracking-widest uppercase text-white/80 mb-1">Conversion</div>
<div className="text-xs text-purple-300/50 uppercase" id="p4-fnConvState">Standby</div>
</div>
</div>

<div className="hidden md:flex flex-col items-center w-full mt-6 px-10">
<div className="text-xs tracking-widest text-sky-400/50 uppercase mb-2">← O₂ Regenerated</div>
<div className="w-full max-w-lg h-[2px] bg-gradient-to-r from-sky-500/20 to-purple-500/20 relative overflow-hidden rounded-full">
<div className="absolute top-0 h-full w-8 bg-sky-400 rounded-full p4-return-dot hidden" id="p4-returnLine" style={{boxShadow: '0 0 10px #38bdf8'}}></div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6 mb-8">

<div className="relative bg-white/[0.02] border border-white/5 rounded-xl p-6 overflow-hidden transition-colors duration-700" id="p4-o2Panel">
<div className="absolute top-0 left-0 right-0 h-[2px] bg-sky-500/50 transition-colors duration-700" id="p4-o2TopBar"></div>
<div className="flex justify-between text-xs tracking-widest text-white/30 uppercase mb-4">
<span>Oxygen · O₂</span>
<span className="text-sky-500/50" id="p4-o2src">SOURCE: OFF</span>
</div>
<div className="text-5xl md:text-6xl font-light tracking-tighter text-sky-400 mb-2 transition-colors duration-700" id="p4-o2val">100.0</div>
<div className="text-xs tracking-widest text-white/25 mb-6 uppercase">% NORMALIZED LEVEL</div>
<div className="h-1.5 bg-white/5 rounded-full overflow-hidden mb-3">
<div className="h-full bg-sky-400 rounded-full transition-all duration-700" id="p4-o2bar" style={{width: '100%'}}></div>
</div>
<div className="flex justify-between text-xs tracking-wider text-white/20 mb-5">
<span>0%</span><span>50%</span><span>100%</span>
</div>
<div className="flex flex-wrap gap-2">
<span className="text-xs px-2 py-0.5 rounded border border-emerald-500/30 text-emerald-500/70 tracking-wider">SAFE &gt;75%</span>
<span className="text-xs px-2 py-0.5 rounded border border-amber-500/30 text-amber-500/70 tracking-wider">WARN 50-75%</span>
<span className="text-xs px-2 py-0.5 rounded border border-red-500/30 text-red-500/70 tracking-wider">CRIT &lt;50%</span>
</div>
</div>

<div className="relative bg-white/[0.02] border border-white/5 rounded-xl p-6 overflow-hidden transition-colors duration-700" id="p4-co2Panel">
<div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500/50 transition-colors duration-700" id="p4-co2TopBar"></div>
<div className="flex justify-between text-xs tracking-widest text-white/30 uppercase mb-4">
<span>Carbon Dioxide · CO₂</span>
<span className="text-orange-500/50" id="p4-co2src">SCRUBBER: OFF</span>
</div>
<div className="text-5xl md:text-6xl font-light tracking-tighter text-emerald-500 mb-2 transition-colors duration-700" id="p4-co2val">400</div>
<div className="text-xs tracking-widest text-white/25 mb-6 uppercase">PPM · PARTS PER MILLION</div>
<div className="h-1.5 bg-white/5 rounded-full overflow-hidden mb-3">
<div className="h-full bg-emerald-500 rounded-full transition-all duration-700" id="p4-co2bar" style={{width: '4%'}}></div>
</div>
<div className="flex justify-between text-xs tracking-wider text-white/20 mb-5">
<span>0</span><span>5000</span><span>10000 ppm</span>
</div>
<div className="flex flex-wrap gap-2">
<span className="text-xs px-2 py-0.5 rounded border border-emerald-500/30 text-emerald-500/70 tracking-wider">SAFE &lt;1500</span>
<span className="text-xs px-2 py-0.5 rounded border border-amber-500/30 text-amber-500/70 tracking-wider">WARN 1.5-5k</span>
<span className="text-xs px-2 py-0.5 rounded border border-red-500/30 text-red-500/70 tracking-wider">CRIT &gt;5000</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
<div className="bg-white/[0.015] border border-white/5 rounded-xl p-4 transition-all duration-500" id="p4-comp1">
<div className="text-xs tracking-widest text-white/20 uppercase mb-2">Air Revitalization</div>
<div className="text-sm text-white/50 tracking-wider uppercase transition-colors duration-500" id="p4-comp1-state">Standby</div>
<div className="text-xs text-white/30 mt-1 uppercase" id="p4-comp1-detail">Awaiting load</div>
</div>
<div className="bg-white/[0.015] border border-white/5 rounded-xl p-4 transition-all duration-500" id="p4-comp2">
<div className="text-xs tracking-widest text-white/20 uppercase mb-2">CO₂ Sabatier</div>
<div className="text-sm text-white/50 tracking-wider uppercase transition-colors duration-500" id="p4-comp2-state">Standby</div>
<div className="text-xs text-white/30 mt-1 uppercase" id="p4-comp2-detail">Reactor inactive</div>
</div>
<div className="bg-white/[0.015] border border-white/5 rounded-xl p-4 transition-all duration-500" id="p4-comp3">
<div className="text-xs tracking-widest text-white/20 uppercase mb-2">O₂ Electrolysis</div>
<div className="text-sm text-white/50 tracking-wider uppercase transition-colors duration-500" id="p4-comp3-state">Standby</div>
<div className="text-xs text-white/30 mt-1 uppercase" id="p4-comp3-detail">Water supply locked</div>
</div>
</div>

<div className="bg-white/[0.015] border border-white/5 rounded-xl p-5 mb-8">
<div className="flex justify-between text-xs tracking-widest text-white/20 uppercase mb-4">
<span>Cycle Event Log</span>
<span className="text-purple-500/50">Runtime Records</span>
</div>
<div className="custom-scrollbar flex flex-col gap-1 max-h-32 overflow-y-auto pr-2" id="p4-logEntries">

</div>
</div>

<div className="hidden w-full p-6 border border-red-500/30 rounded-xl bg-red-500/5 text-red-400/80 text-xs tracking-widest text-center leading-relaxed mb-8 uppercase transition-all duration-500" id="p4-endMessage">
<strong className="block text-sm text-red-500/95 tracking-widest mb-3">Simulation Halted</strong>
                    System unable to balance load.<br/>
                    Threshold limits exceeded.<br/>
                    Manual intervention required.
                </div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
<button className="flex flex-col items-start gap-2 p-4 border border-emerald-500/30 rounded-xl text-emerald-500 text-xs tracking-widest uppercase transition-all duration-300 hover:bg-emerald-500/10 hover:border-emerald-500/70 disabled:opacity-30 disabled:cursor-not-allowed" id="p4-btnStart">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
<span className="opacity-70 text-left">Start<br/>Cycle</span>
</button>
<button className="flex flex-col items-start gap-2 p-4 border border-purple-500/30 rounded-xl text-purple-500 text-xs tracking-widest uppercase transition-all duration-300 hover:bg-purple-500/10 hover:border-purple-500/70 disabled:opacity-30 disabled:cursor-not-allowed opacity-30" disabled="" id="p4-btnToggle">
<iconify-icon className="text-xl" icon="solar:settings-bold-duotone"></iconify-icon>
<span className="opacity-70 text-left">Toggle<br/>Conversion</span>
</button>
<button className="flex flex-col items-start gap-2 p-4 border border-white/15 rounded-xl text-white/40 text-xs tracking-widest uppercase transition-all duration-300 hover:bg-white/5 hover:border-white/30 hover:text-white/70" id="p4-btnRestart">
<iconify-icon className="text-xl" icon="solar:restart-linear"></iconify-icon>
<span className="opacity-70 text-left">Reset<br/>System</span>
</button>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24 relative z-10 border-t border-white/5" id="systems">
<div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-start">
<div className="md:w-1/3 sticky top-24">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">System Thinking</h2>
<p className="text-sm text-slate-400 font-normal leading-relaxed">ASTRAHAB focuses on systems, not just static structures. A habitat is a living machine where every variable interacts.</p>
</div>
<div className="md:w-2/3 grid sm:grid-cols-2 gap-4 lg:gap-6">
<div className="flex items-start gap-5 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-[#050505] border border-white/10 flex items-center justify-center shrink-0">
</div></div></div></div></section>
    </>
  );
}
