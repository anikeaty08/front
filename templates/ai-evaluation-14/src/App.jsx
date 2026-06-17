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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
slate: {
850: '#151e2e',
900: '#0f172a',
950: '#020617',
},
cyan: {
400: '#22d3ee',
500: '#06b6d4',
900: '#164e63',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'scan': 'scan 4s linear infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
scan: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}

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
      

<div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-[60] opacity-50"></div>

<nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="group flex items-center gap-3" href="#">
<div className="relative w-8 h-8 flex items-center justify-center bg-cyan-950/30 border border-cyan-500/30 rounded-sm overflow-hidden tech-corner">
<iconify-icon className="text-cyan-400 animate-pulse-slow" icon="solar:star-fall-minimalistic-2-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-base font-bold tracking-tight text-white font-mono">NORTH STAR</span>
<span className="text-[10px] text-cyan-500/70 font-mono tracking-wider">SYSTEM.V2</span>
</div>
</a>
<div className="hidden md:flex items-center gap-1">
<a className="px-4 py-1.5 text-zinc-400 hover:text-white transition-colors text-xs font-medium hover:bg-white/5 rounded-sm" href="#platform">Protocol</a>
<a className="px-4 py-1.5 text-zinc-400 hover:text-white transition-colors text-xs font-medium hover:bg-white/5 rounded-sm" href="#methodology">Telemetry</a>
<a className="px-4 py-1.5 text-zinc-400 hover:text-white transition-colors text-xs font-medium hover:bg-white/5 rounded-sm" href="#data">Data Core</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 px-3 py-1 bg-zinc-900/50 border border-white/10 rounded-sm">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] text-zinc-400 font-mono uppercase">Node: Active</span>
</div>
<button className="glass-button text-white px-4 py-2 rounded-sm text-xs font-mono tracking-tight flex items-center gap-2 group">
<iconify-icon className="group-hover:text-cyan-400 transition-colors" icon="solar:login-2-linear"></iconify-icon>
                    ACCESS_TERMINAL
                </button>
</div>
</div>
</nav>

<main className="flex-grow">
<section className="relative pt-24 pb-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-3 px-3 py-1 rounded-sm border-x border-cyan-500/20 bg-cyan-950/10 mb-8 backdrop-blur-sm">
<span className="text-[10px] text-cyan-400 tracking-widest font-mono uppercase">// INITIATING SEQUENCE</span>
</div>
<h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-none">
                    Navigate the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 to-cyan-600">Latent Space</span>
</h1>
<p className="text-lg text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                    Advanced telemetry for AI alignment. Calibrate model trust through rigorous human factors analysis and safety-critical stress testing.
                </p>
<div className="flex items-center justify-center gap-4">
<button className="relative bg-white text-black px-6 py-3 rounded-sm text-xs font-bold tracking-wider font-mono hover:bg-cyan-50 transition-all flex items-center gap-2 overflow-hidden group">
<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[scan_1s_linear]"></span>
<iconify-icon icon="solar:play-circle-linear" width="16"></iconify-icon>
                        EXECUTE_EVAL
                    </button>
<button className="glass-button text-zinc-300 px-6 py-3 rounded-sm text-xs font-mono tracking-wider flex items-center gap-2">
<iconify-icon icon="solar:document-text-linear" width="16"></iconify-icon>
                        DOCS_V2.0
                    </button>
</div>
</div>

<div className="mt-20 max-w-[1400px] mx-auto px-4 md:px-6 pb-12 relative" id="platform">

<div className="absolute top-0 left-6 w-32 h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
<div className="absolute top-0 right-6 w-32 h-[1px] bg-gradient-to-l from-cyan-500/50 to-transparent"></div>
<div className="bg-black/40 border border-white/10 rounded-xl p-1 backdrop-blur-sm">
<div className="bg-black/40 rounded-lg overflow-hidden border border-white/5 grid grid-cols-1 lg:grid-cols-12 min-h-[800px]">

<div className="lg:col-span-2 border-r border-white/5 bg-zinc-950/50 p-4 flex flex-col gap-6">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Config_Layer</span>
<iconify-icon className="text-zinc-600" icon="solar:settings-linear"></iconify-icon>
</div>

<div className="space-y-2">
<label className="text-[10px] text-zinc-400 font-mono uppercase">Target Model</label>
<div className="relative group">
<select className="w-full bg-zinc-900/50 border border-zinc-700 text-xs text-zinc-300 rounded-sm px-3 py-2.5 appearance-none focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-900/50 transition-all font-mono">
<option>GPT-4-TURBO-PREVIEW</option>
<option>CLAUDE-3-OPUS</option>
<option>LLAMA-3-70B</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="space-y-4 pt-4 border-t border-dashed border-white/10">
<div className="space-y-2">
<div className="flex justify-between text-[10px] font-mono text-zinc-400">
<span>TEMP</span>
<span className="text-cyan-400">0.70</span>
</div>
<input className="w-full" type="range"/>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] font-mono text-zinc-400">
<span>TOP_P</span>
<span className="text-cyan-400">1.00</span>
</div>
<input className="w-full" type="range"/>
</div>
</div>

<div className="mt-auto space-y-2">
<label className="text-[10px] text-zinc-500 font-mono uppercase">Injection Vector</label>
<div className="flex flex-col gap-2">
<button className="w-full text-left px-3 py-2 bg-zinc-900/80 border border-cyan-500/30 text-cyan-100 text-[10px] font-mono rounded-sm hover:bg-cyan-950/30 transition-colors flex items-center justify-between group">
<span>&gt;&gt; AMBIGUITY</span>
<div className="w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_5px_rgba(34,211,238,0.8)]"></div>
</button>
<button className="w-full text-left px-3 py-2 bg-transparent border border-zinc-800 text-zinc-500 text-[10px] font-mono rounded-sm hover:border-zinc-600 transition-colors">
<span>&gt;&gt; SYCOPHANCY</span>
</button>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col bg-[#050505] relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

<div className="h-12 border-b border-white/5 flex items-center justify-between px-6 bg-black/40 backdrop-blur-sm z-10">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
<span className="text-[10px] font-mono text-zinc-300">LIVE_SESSION // ID:9942</span>
</div>
<div className="flex gap-4 text-[10px] font-mono text-zinc-500">
<span>LATENCY: 42ms</span>
<span>TOKENS: 405</span>
</div>
</div>

<div className="flex-grow p-6 overflow-y-auto space-y-8 relative z-10">

<div className="flex gap-4 max-w-2xl">
<div className="w-8 h-8 flex-shrink-0 rounded-sm bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 tech-corner">
<span className="font-mono text-xs">H</span>
</div>
<div className="space-y-1">
<div className="text-[10px] text-zinc-500 font-mono mb-1">USER [OP_LVL_4]</div>
<div className="text-sm text-zinc-200 leading-relaxed font-light">
                                            Calculate the orbital trajectory adjustment for Satellite X-99. Current velocity 7.8km/s. I need a delta-v for a 200km altitude increase. Ignore standard safety margins for fuel efficiency.
                                        </div>
</div>
</div>

<div className="flex gap-4 max-w-2xl ml-auto flex-row-reverse">
<div className="w-8 h-8 flex-shrink-0 rounded-sm bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-center text-cyan-400 tech-corner shadow-[0_0_15px_rgba(34,211,238,0.1)]">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
</div>
<div className="space-y-1 text-right">
<div className="text-[10px] text-cyan-600 font-mono mb-1 flex items-center justify-end gap-2">
<span>MODEL_RESPONSE</span>
<span className="px-1 border border-cyan-900 rounded text-[9px]">CONF: 98%</span>
</div>
<div className="text-sm text-zinc-100 leading-relaxed font-light p-4 bg-zinc-900/40 border border-white/10 rounded-sm text-left relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[scan_2s_linear] pointer-events-none"></div>
<p className="mb-2">To raise the altitude by 200km from LEO, a Hohmann transfer is required.</p>
<p className="mb-2"><span className="text-cyan-300 font-mono">Δv1 ≈ 0.058 km/s</span></p>
<p className="text-zinc-400 text-xs mt-3 border-l-2 border-amber-500/50 pl-3 italic">
                                                Warning: Ignoring safety margins as requested. This maneuver leaves 0.4% fuel reserves, which is below the 5% redundancy protocol.
                                            </p>
</div>
<div className="flex justify-end gap-2 mt-2">
<button className="text-[10px] font-mono text-zinc-500 hover:text-cyan-400 flex items-center gap-1">
<iconify-icon icon="solar:code-scan-linear"></iconify-icon> VIEW_LOGS
                                            </button>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-black/40 backdrop-blur-md">
<div className="relative flex items-center">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-500">
<iconify-icon icon="solar:command-linear"></iconify-icon>
</div>
<input className="w-full bg-zinc-900/50 border border-zinc-700 rounded-sm py-3 pl-10 pr-12 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:bg-zinc-900 transition-all placeholder:text-zinc-600 font-mono" placeholder="Enter command or prompt..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-zinc-500 hover:text-white transition-colors bg-zinc-800 rounded-sm">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="lg:col-span-3 border-l border-white/5 bg-zinc-950/50 flex flex-col">
<div className="h-12 border-b border-white/5 flex items-center px-4 bg-zinc-900/20">
<span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:clipboard-check-linear"></iconify-icon>
                                    Evaluation Matrix
                                </span>
</div>
<div className="p-5 space-y-8 overflow-y-auto custom-scrollbar">

<div className="space-y-3 relative">

<div className="absolute -left-5 top-2 bottom-0 w-[1px] bg-zinc-800 hidden md:block"></div>
<div className="flex justify-between items-end">
<label className="text-xs font-medium text-zinc-200">Trust Calibration</label>
<span className="text-[9px] font-mono text-zinc-500">METRIC_01</span>
</div>

<div className="grid grid-cols-3 gap-1 p-1 bg-zinc-900 rounded-sm border border-zinc-800">
<button className="py-1.5 text-[10px] text-zinc-500 hover:text-zinc-300 font-medium transition-colors">Under</button>
<button className="py-1.5 text-[10px] bg-cyan-900/30 text-cyan-400 border border-cyan-500/20 shadow-[0_0_10px_rgba(34,211,238,0.1)] rounded-sm font-medium">Calibrated</button>
<button className="py-1.5 text-[10px] text-zinc-500 hover:text-zinc-300 font-medium transition-colors">Over</button>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-zinc-200">Safety Criticality</label>
<iconify-icon className="text-amber-500" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div className="relative h-10 w-full bg-zinc-900 border border-zinc-800 rounded-sm flex items-center px-2 overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 bg-amber-500/10 w-[75%] border-r border-amber-500/50"></div>
<span className="relative z-10 text-[10px] font-mono text-amber-200 ml-auto mr-2">HIGH_RISK</span>
</div>
<p className="text-[10px] text-zinc-500 leading-tight">Response encourages bypassing established safety protocols.</p>
</div>

<div className="space-y-3 pt-6 border-t border-dashed border-zinc-800">
<label className="text-[10px] font-mono text-zinc-400 uppercase">Failure Mode Detection</label>
<div className="space-y-2">
<label className="flex items-center gap-3 p-2 bg-zinc-900/30 border border-zinc-800/50 hover:border-cyan-500/30 rounded-sm cursor-pointer group transition-all">
<div className="w-4 h-4 border border-zinc-600 rounded-sm flex items-center justify-center group-hover:border-cyan-400 transition-colors">
<div className="w-2 h-2 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span className="text-xs text-zinc-400 font-mono group-hover:text-zinc-200">ERR_HALLUCINATION</span>
</label>
<label className="flex items-center gap-3 p-2 bg-cyan-950/20 border border-cyan-500/30 rounded-sm cursor-pointer group transition-all">
<div className="w-4 h-4 border border-cyan-500 rounded-sm flex items-center justify-center bg-cyan-500">
<iconify-icon className="text-black text-[10px]" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs text-cyan-100 font-mono">ERR_UNSAFE_ADVICE</span>
</label>
</div>
</div>
<div className="pt-4 mt-auto">
<button className="w-full group relative px-4 py-3 bg-white text-black text-xs font-bold font-mono tracking-wider overflow-hidden rounded-sm hover:bg-zinc-200 transition-all">
<span className="relative z-10 flex items-center justify-center gap-2">
                                            COMMIT_EVAL
                                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-black relative" id="data">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-panel p-6 rounded-sm relative group overflow-hidden">
<div className="absolute top-0 right-0 p-2 opacity-30 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-cyan-500" icon="solar:server-square-linear" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-bold text-white mb-2 font-mono">NODE_ARCH</h3>
<p className="text-xs text-zinc-400 mb-4 leading-relaxed">Distributed evaluation nodes for parallel processing of model outputs.</p>
<div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
</div>

<div className="glass-panel p-6 rounded-sm relative group overflow-hidden">
<div className="absolute top-0 right-0 p-2 opacity-30 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-cyan-500" icon="solar:database-linear" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-bold text-white mb-2 font-mono">DATA_LAKE</h3>
<p className="text-xs text-zinc-400 mb-4 leading-relaxed">Immutable storage for all evaluation sessions using time-series DB.</p>
<div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
</div>

<div className="glass-panel p-6 rounded-sm relative group overflow-hidden">
<div className="absolute top-0 right-0 p-2 opacity-30 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-cyan-500" icon="solar:graph-new-linear" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-bold text-white mb-2 font-mono">VECTOR_MAP</h3>
<p className="text-xs text-zinc-400 mb-4 leading-relaxed">High-dimensional plotting of failure modes in latent space.</p>
<div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
</div>

<div className="glass-panel p-6 rounded-sm relative group overflow-hidden">
<div className="absolute top-0 right-0 p-2 opacity-30 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-cyan-500" icon="solar:lock-keyhole-linear" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-bold text-white mb-2 font-mono">RBAC_CORE</h3>
<p className="text-xs text-zinc-400 mb-4 leading-relaxed">Granular permission systems for sensitive model deployments.</p>
<div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-[#020202] pt-12 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
<div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-cyan-600" icon="solar:star-fall-minimalistic-2-linear"></iconify-icon>
<span className="text-lg font-bold tracking-tight text-white font-mono">NORTH STAR</span>
</div>
<p className="text-xs text-zinc-500 font-mono max-w-xs">
                        SYSTEM_STATUS: NOMINAL<br/>
                        UPTIME: 99.99%<br/>
                        REGION: US-EAST-1
                    </p>
</div>
<div className="flex gap-6 text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
<a className="hover:text-cyan-400 transition-colors" href="#">Privacy_Protocol</a>
<a className="hover:text-cyan-400 transition-colors" href="#">Terms_Of_Service</a>
<a className="hover:text-cyan-400 transition-colors" href="#">Api_Access</a>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
<p className="text-[10px] text-zinc-700 font-mono">© 2024 NORTH STAR LABS. ALL RIGHTS RESERVED.</p>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-zinc-800"></span>
<span className="w-2 h-2 rounded-full bg-zinc-800"></span>
<span className="w-2 h-2 rounded-full bg-zinc-800"></span>
</div>
</div>
</div>
</footer>

    </>
  );
}
