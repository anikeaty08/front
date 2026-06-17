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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 px-6 py-4 flex items-center justify-between">
<div className="text-lg font-semibold tracking-tighter flex items-center gap-2">
<div className="w-2 h-2 bg-emerald-400 rounded-full" style={{animation: 'pulse-node 2s infinite'}}></div>
            INFR
        </div>
<div className="hidden md:flex gap-8 text-xs font-medium text-neutral-400">
<span className="hover:text-white cursor-pointer transition-colors">Topology</span>
<span className="hover:text-white cursor-pointer transition-colors">Compute</span>
<span className="hover:text-white cursor-pointer transition-colors">Network</span>
</div>
<button className="text-xs bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2">
            Access Terminal
        </button>
</nav>

<div className="fixed bottom-6 right-6 z-50 glass-panel border border-white/10 rounded-lg p-4 flex flex-col gap-3 pointer-events-none w-48">
<div className="flex items-center justify-between text-[10px] text-neutral-400 uppercase tracking-widest">
<span>System State</span>
<span className="text-emerald-400">Nominal</span>
</div>
<div className="h-px w-full bg-white/5"></div>
<div className="flex justify-between items-end">
<span className="text-xs text-neutral-500">Global IOPS</span>
<span className="text-sm font-mono text-white">1.2M</span>
</div>
<div className="flex gap-1 h-4 items-end opacity-50">

<div className="w-full bg-emerald-500/40 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-emerald-500/40 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-emerald-500/40 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-emerald-500/40 rounded-t-sm h-[80%]"></div>
<div className="w-full bg-emerald-400 rounded-t-sm h-[100%]"></div>
</div>
</div>

<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 spatial-grid top-[20%]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px]"></div>
<div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
</div>
<div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-4xl">
<div className="border border-white/10 bg-neutral-900/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2 mb-8">
<iconify-icon className="text-neutral-400 text-xs" icon="solar:cpu-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest text-neutral-400">V8.2 Engine Live</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-600 leading-[1.1]">
                Execute at<br/>the edge.
            </h1>
<p className="text-sm md:text-base text-neutral-400 max-w-lg mb-12 font-light leading-relaxed">
                A globally distributed inference network. Route requests to the nearest GPU automatically. Zero configuration, absolute performance.
            </p>
<button className="group relative px-6 py-3 bg-neutral-50 text-neutral-950 rounded-full font-medium text-xs flex items-center gap-3 overflow-hidden">
<span className="relative z-10 flex items-center gap-2">
                    Initialize Deployment
                    <iconify-icon className="text-sm group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>

<div className="absolute inset-0 bg-neutral-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
</button>
</div>

<div className="absolute inset-0 z-20 pointer-events-none">

<div className="absolute top-[30%] left-[20%] flex flex-col items-center opacity-40">
<div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mb-2"></div>
<div className="w-px h-32 bg-gradient-to-b from-emerald-500/50 to-transparent"></div>
</div>

<div className="absolute bottom-[20%] right-[25%] flex flex-col items-center opacity-60">
<div className="w-px h-16 bg-gradient-to-t from-emerald-500/50 to-transparent mb-2"></div>
<div className="w-2 h-2 bg-emerald-400 rounded-full" style={{animation: 'pulse-node 3s infinite'}}></div>
</div>
</div>
</section>

<section className="relative py-32 px-6 border-t border-white/5">
<div className="max-w-6xl mx-auto">
<div className="mb-16 md:w-1/2">
<h2 className="text-2xl font-semibold tracking-tight mb-4">Neural Routing Pathway</h2>
<p className="text-xs text-neutral-400 leading-relaxed">
                    Watch as a simulated payload transverses the global network. The orchestrator dynamically balances load across available clusters to guarantee sub-20ms TTFT (Time To First Token).
                </p>
</div>

<div className="glass-panel border border-white/5 rounded-2xl p-8 relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 mt-8">

<div className="flex flex-col items-center z-10 w-full md:w-auto">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-neutral-900 flex items-center justify-center mb-4 text-neutral-400 relative">
<iconify-icon className="text-xl" icon="solar:smartphone-linear"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">Client_Req</span>
</div>

<div className="flex-1 w-full md:h-px h-8 bg-white/10 relative overflow-hidden md:mx-4">
<div className="absolute top-0 left-0 h-full w-full md:w-1/3 bg-gradient-to-r md:bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent" style={{animation: 'data-stream-x 2s infinite linear'}}></div>
</div>

<div className="flex flex-col items-center z-10 w-full md:w-auto">
<div className="w-16 h-16 rounded-full border border-emerald-500/30 bg-emerald-500/5 flex items-center justify-center mb-4 text-emerald-400" style={{animation: 'pulse-node 4s infinite'}}>
<iconify-icon className="text-2xl" icon="solar:routing-2-linear"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">Global_LB</span>
</div>

<div className="flex-1 w-full md:h-px h-8 bg-white/10 relative overflow-hidden md:mx-4">
<div className="absolute top-0 left-0 h-full w-full md:w-1/3 bg-gradient-to-r md:bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent" style={{animation: 'data-stream-x 2s infinite linear', animationDelay: '1s'}}></div>
</div>

<div className="flex flex-col items-center z-10 w-full md:w-auto">
<div className="w-20 h-20 rounded-2xl border border-white/20 bg-neutral-900 flex items-center justify-center mb-4 relative overflow-hidden">

<div className="grid grid-cols-3 gap-1 p-2 w-full h-full">
<div className="bg-neutral-800 rounded-sm"></div>
<div className="bg-emerald-500/80 rounded-sm shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
<div className="bg-neutral-800 rounded-sm"></div>
<div className="bg-emerald-500/40 rounded-sm"></div>
<div className="bg-neutral-800 rounded-sm"></div>
<div className="bg-emerald-500/80 rounded-sm shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
<div className="bg-neutral-800 rounded-sm"></div>
<div className="bg-neutral-800 rounded-sm"></div>
<div className="bg-emerald-500/60 rounded-sm"></div>
</div>
</div>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">H100_Pool_EU</span>
</div>
</div>

<div className="mt-16 pt-6 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4">
<div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Total Latency</div>
<div className="text-xl font-mono">18<span className="text-xs text-neutral-500">ms</span></div>
</div>
<div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Model Loading</div>
<div className="text-xl font-mono text-emerald-400">0<span className="text-xs text-emerald-700">ms</span> <span className="text-[10px] text-neutral-500">(Warm)</span></div>
</div>
<div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Queue Depth</div>
<div className="text-xl font-mono">0</div>
</div>
<div className="flex items-center justify-end">
<button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs transition-colors border border-white/10 flex items-center gap-2">
<iconify-icon icon="solar:play-linear"></iconify-icon> Resimulate
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 px-6">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="glass-panel border border-white/5 rounded-2xl p-8 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold tracking-tight">Elastic Topology</h3>
<iconify-icon className="text-neutral-500" icon="solar:maximize-square-minimalistic-linear"></iconify-icon>
</div>
<p className="text-xs text-neutral-400 mb-8">
                        Adjust inbound traffic. Observe as the orchestration layer provisions compute nodes instantly to maintain strict latency SLAs.
                    </p>

<div className="mb-12">
<div className="flex justify-between text-[10px] text-neutral-500 uppercase tracking-widest font-mono mb-2">
<span>Req/s: 100</span>
<span>Scale: Max</span>
</div>
<div className="relative w-full h-1.5 bg-neutral-800 rounded-full cursor-pointer">

<div className="absolute top-0 left-0 h-full w-[60%] bg-emerald-400 rounded-full"></div>

<div className="absolute top-1/2 left-[60%] -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] border-2 border-neutral-900"></div>
</div>
</div>
</div>

<div className="relative h-48 w-full flex items-center justify-center">

<div className="absolute z-20 w-12 h-12 bg-neutral-950 border border-white/20 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>

<div className="absolute w-24 h-24 border border-emerald-500/30 rounded-full" style={{animation: 'orbit-slow 8s linear infinite'}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
</div>

<div className="absolute w-40 h-40 border border-dashed border-emerald-500/20 rounded-full" style={{animation: 'orbit-reverse 12s linear infinite'}}>
<div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-400/80 rounded-full"></div>
<div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-400/80 rounded-full"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border border-neutral-600 rounded-full bg-neutral-900"></div>
</div>
</div>
</div>

<div className="glass-panel border border-white/5 rounded-2xl p-8 relative overflow-hidden flex flex-col">
<div className="relative z-10 mb-8">
<h3 className="text-lg font-semibold tracking-tight">Global Distribution</h3>
<p className="text-xs text-neutral-400">Requests map to physical topology based on vector proximity and load.</p>
</div>

<div className="flex-1 relative w-full rounded-xl border border-white/5 bg-neutral-950 overflow-hidden">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle, #525252 1px, transparent 1px)', backgroundSize: '12px 12px'}}></div>


<div className="absolute top-[40%] left-[25%] flex flex-col items-center z-10 group">
<div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mb-1 cursor-pointer transition-all hover:scale-125 hover:bg-emerald-500/40">
<div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
</div>
<div className="text-[8px] text-neutral-300 font-mono bg-neutral-900/80 px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">US-E1</div>
</div>

<div className="absolute top-[35%] left-[55%] flex flex-col items-center z-10 group">
<div className="w-3 h-3 rounded-full bg-neutral-800 border border-white/20 flex items-center justify-center mb-1">
<div className="w-1 h-1 bg-neutral-500 rounded-full"></div>
</div>
<div className="text-[8px] text-neutral-500 font-mono">EU-W1</div>
</div>

<div className="absolute top-[50%] left-[80%] flex flex-col items-center z-10 group">
<div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mb-1">
<div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" style={{animation: 'pulse-node 2s infinite'}}></div>
</div>
<div className="text-[8px] text-emerald-400 font-mono">AP-S1</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: '5'}}>

<path d="M 25% 40% Q 40% 20% 55% 35%" fill="transparent" stroke="rgba(255,255,255,0.1)" stroke-dasharray="2 2" strokeWidth="1"></path>

<path d="M 25% 40% Q 50% 70% 80% 50%" fill="transparent" stroke="url(#arc-grad)" strokeWidth="1.5"></path>
<defs>
<lineargradient id="arc-grad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#34d399" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#34d399" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
</div>
</section>

<section className="relative py-24 px-6 pb-48">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">Telemetry Deep Dive</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="glass-panel border border-white/5 rounded-xl p-5">
<div className="flex items-center justify-between mb-4">
<span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">Throughput</span>
<iconify-icon className="text-emerald-400" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="text-3xl font-light mb-4">42.8<span className="text-sm text-neutral-500 ml-1">k/s</span></div>

<div className="flex items-end gap-[2px] h-10 w-full">
<div className="w-full bg-white/5 h-[30%]"></div>
<div className="w-full bg-white/5 h-[40%]"></div>
<div className="w-full bg-white/5 h-[35%]"></div>
<div className="w-full bg-white/5 h-[60%]"></div>
<div className="w-full bg-emerald-500/40 h-[80%]"></div>
<div className="w-full bg-emerald-400 h-[100%] shadow-[0_0_8px_rgba(52,211,153,0.5)]"></div>
</div>
</div>

<div className="glass-panel border border-white/5 rounded-xl p-5">
<div className="flex items-center justify-between mb-4">
<span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">Error Rate</span>
<iconify-icon className="text-neutral-500" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div className="text-3xl font-light mb-4 text-neutral-300">0.001<span className="text-sm text-neutral-500 ml-1">%</span></div>
<div className="w-full bg-neutral-900 rounded-full h-1 mt-auto">
<div className="bg-white/20 h-1 rounded-full w-[2%]"></div>
</div>
</div>

<div className="md:col-span-3 glass-panel border border-white/5 rounded-xl p-5 h-48 flex flex-col font-mono text-[10px] leading-relaxed relative overflow-hidden mt-4">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950/80 z-10 pointer-events-none"></div>
<div className="text-neutral-600 mb-1"># Connecting to central observer stream...</div>
<div className="text-emerald-500 mb-1">[auth] session established.</div>
<div className="flex flex-col gap-1 text-neutral-400 z-0">
<div className="opacity-40">&gt;&gt; [node-ap-s1] heartbeats nominal. vram capacity: 82%</div>
<div className="opacity-60">&gt;&gt; [router] incoming burst detected from origin: 104.28.xx.xx</div>
<div className="opacity-80">&gt;&gt; [orchestrator] provisioning new container on node-us-e1...</div>
<div className="text-white">&gt;&gt; [system] container ready. traffic diverted. ttft: 14ms <span className="text-emerald-400 animate-pulse">█</span></div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 text-center relative overflow-hidden">
<div className="absolute inset-0 spatial-grid bottom-0 top-auto h-64 transform rotateX-[120deg] opacity-20"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="text-xl font-semibold tracking-tighter mb-4">INFR</div>
<p className="text-xs text-neutral-500 max-w-sm">The architecture of intelligence.</p>
</div>
</footer>

    </>
  );
}
