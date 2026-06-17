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
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'Noto Sans SC', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
925: '#121212',
950: '#050505',
},
amber: {
450: '#F59E0B',
550: '#D97706',
}
},
backgroundImage: {
'glow-gradient': 'radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.15), transparent 70%)',
'card-gradient': 'linear-gradient(to bottom right, rgba(255,255,255,0.03), rgba(0,0,0,0.2))',
'grid-pattern': 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
},
animation: {
'data-flow': 'dataFlow 2s linear infinite',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
dataFlow: {
'0%': { strokeDashoffset: '24' },
'100%': { strokeDashoffset: '0' },
}
}
}
}
}



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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<iconify-icon className="text-xl text-amber-400 group-hover:text-amber-300 transition-colors" icon="solar:cpu-bolt-linear"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-white group-hover:text-amber-100 transition-colors">LISUAN</span>
<span className="text-[10px] font-medium text-amber-500/80 border border-amber-900/50 bg-amber-950/30 px-1.5 py-0.5 rounded uppercase tracking-wider font-mono">Core_V3</span>
</div>
<div className="hidden md:flex gap-8 text-xs font-medium text-neutral-400 uppercase tracking-widest">
<a className="hover:text-amber-400 transition-colors" href="#">Architecture</a>
<a className="hover:text-amber-400 transition-colors" href="#">Instruction Set</a>
<a className="hover:text-amber-400 transition-colors" href="#">Ecosystem</a>
</div>
</div>
</nav>

<header className="relative pt-40 pb-24 px-6 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-glow-gradient pointer-events-none mix-blend-screen opacity-50"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-950/20 text-[10px] font-mono font-medium text-amber-300 mb-8 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                NEXT_GEN_GPGPU_ARCH
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                绝对有效算力<br/>
<span className="text-gradient-gold font-semibold">黄金效能架构</span>
</h1>
<p className="text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto font-light mb-12">
                重构渲染管线与计算单元的拓扑结构。在真实高并发负载下，提供<span className="text-amber-100">无阻塞</span>的指令吞吐与<span className="text-amber-100">零开销</span>上下文切换。
            </p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/5 rounded-lg overflow-hidden max-w-3xl mx-auto">
<div className="bg-neutral-950 p-4 group hover:bg-neutral-900 transition-colors">
<div className="text-xs text-neutral-500 font-mono mb-1">IPC Boost</div>
<div className="text-xl text-white font-mono font-medium group-hover:text-amber-400 transition-colors">+35%</div>
</div>
<div className="bg-neutral-950 p-4 group hover:bg-neutral-900 transition-colors">
<div className="text-xs text-neutral-500 font-mono mb-1">FP32 TFLOPS</div>
<div className="text-xl text-white font-mono font-medium group-hover:text-amber-400 transition-colors">48.5</div>
</div>
<div className="bg-neutral-950 p-4 group hover:bg-neutral-900 transition-colors">
<div className="text-xs text-neutral-500 font-mono mb-1">Cache Bandwidth</div>
<div className="text-xl text-white font-mono font-medium group-hover:text-amber-400 transition-colors">2.4 TB/s</div>
</div>
<div className="bg-neutral-950 p-4 group hover:bg-neutral-900 transition-colors">
<div className="text-xs text-neutral-500 font-mono mb-1">Process</div>
<div className="text-xl text-white font-mono font-medium group-hover:text-amber-400 transition-colors">5nm</div>
</div>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-6 py-12 relative z-10">
<div className="flex items-end justify-between mb-8 border-b border-white/5 pb-4">
<h2 className="text-xl font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:layers-minimalistic-linear"></iconify-icon>
                Architecture Core V3
            </h2>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-neutral-800 border border-neutral-600"></span>
<span className="w-2 h-2 rounded-full bg-neutral-800 border border-neutral-600"></span>
<span className="w-2 h-2 rounded-full bg-amber-500/50 border border-amber-500"></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-xl bg-card-gradient border-subtle p-6 hover:bg-white/[0.02] hover:border-amber-500/20 transition-all duration-500 flex flex-col">
<div className="h-44 mb-6 bg-neutral-950 rounded border border-white/5 relative overflow-hidden flex flex-col items-center justify-center p-4">

<div className="absolute inset-0 bg-[size:20px_20px] bg-grid-pattern opacity-20"></div>
<div className="w-full max-w-[200px] flex flex-col gap-3 relative z-10">

<div className="flex items-center gap-2">
<span className="text-[8px] font-mono text-neutral-500 w-8 text-right">COMP</span>
<div className="flex-1 h-6 bg-neutral-900 border border-white/10 rounded flex items-center px-1 gap-1 overflow-hidden">
<div className="h-3 w-8 bg-amber-500/20 border border-amber-500/40 rounded-[1px] animate-[pulse_2s_infinite]"></div>
<div className="h-3 w-6 bg-amber-500/20 border border-amber-500/40 rounded-[1px] animate-[pulse_2s_infinite] delay-75"></div>
<div className="h-3 w-10 bg-amber-500/20 border border-amber-500/40 rounded-[1px] animate-[pulse_2s_infinite] delay-150"></div>
</div>
</div>

<div className="flex items-center gap-2">
<span className="text-[8px] font-mono text-neutral-500 w-8 text-right">GFX</span>
<div className="flex-1 h-6 bg-neutral-900 border border-white/10 rounded flex items-center px-1 gap-1 overflow-hidden">
<div className="h-3 w-5 bg-neutral-700 border border-neutral-500 rounded-[1px]"></div>
<div className="h-3 w-12 bg-neutral-700 border border-neutral-500 rounded-[1px]"></div>
</div>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-6 h-6 border border-red-900/50 bg-red-950/80 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-red-500 text-xs" icon="solar:forbidden-circle-linear"></iconify-icon>
</div>
</div>
</div>
<h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2 group-hover:text-amber-100 transition-colors">
                    独立指令发射队列
                </h3>
<p className="text-xs text-neutral-400 mb-4 font-light leading-relaxed flex-1">
                    计算与图形任务拥有独立的硬件指令队列 (Instruction Queue)。无需保存现场即可切换任务，实现物理级并发。
                </p>
<div className="pt-4 border-t border-white/5 flex items-center gap-2">
<iconify-icon className="text-amber-500 text-sm" icon="solar:check-read-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider text-neutral-500">Zero-Overhead Switching</span>
</div>
</div>

<div className="group relative rounded-xl bg-card-gradient border-subtle p-6 hover:bg-white/[0.02] hover:border-amber-500/20 transition-all duration-500 flex flex-col">
<div className="h-44 mb-6 bg-neutral-950 rounded border border-white/5 relative overflow-hidden flex items-center justify-center p-4">

<div className="flex flex-col items-center gap-2 w-full max-w-[200px]">

<div className="w-24 h-6 border border-amber-500/50 bg-amber-900/10 rounded flex items-center justify-center text-[8px] font-mono text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.2)] z-10">
                            GLOBAL_DISPATCH
                        </div>

<div className="flex gap-8 text-neutral-600">
<iconify-icon className="text-xs" icon="solar:arrow-down-linear"></iconify-icon>
<iconify-icon className="text-xs text-amber-500 animate-pulse" icon="solar:arrow-right-down-linear"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:arrow-down-linear"></iconify-icon>
</div>

<div className="flex items-end gap-2 w-full justify-between px-4">

<div className="flex flex-col items-center gap-1">
<div className="w-8 bg-neutral-800 rounded-sm flex flex-col-reverse p-0.5 gap-px h-12 border border-white/5">
<div className="w-full h-2 bg-neutral-600 rounded-[1px]"></div>
<div className="w-full h-2 bg-neutral-600 rounded-[1px]"></div>
<div className="w-full h-2 bg-neutral-600 rounded-[1px]"></div>
</div>
<span className="text-[8px] font-mono text-neutral-500">CU0</span>
</div>

<div className="flex flex-col items-center gap-1">
<div className="w-8 bg-neutral-800 rounded-sm flex flex-col-reverse p-0.5 gap-px h-12 border border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.1)]">
<div className="w-full h-2 bg-amber-500 rounded-[1px]"></div>
<div className="w-full h-2 bg-neutral-700/50 rounded-[1px] border border-dashed border-neutral-600"></div>
</div>
<span className="text-[8px] font-mono text-amber-400">CU1</span>
</div>

<div className="flex flex-col items-center gap-1">
<div className="w-8 bg-neutral-800 rounded-sm flex flex-col-reverse p-0.5 gap-px h-12 border border-white/5">
<div className="w-full h-2 bg-neutral-600 rounded-[1px]"></div>
<div className="w-full h-2 bg-neutral-600 rounded-[1px]"></div>
</div>
<span className="text-[8px] font-mono text-neutral-500">CU2</span>
</div>
</div>
</div>
</div>
<h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2 group-hover:text-amber-100 transition-colors">
                    硬件级负载均衡
                </h3>
<p className="text-xs text-neutral-400 mb-4 font-light leading-relaxed flex-1">
                    Global Dispatcher 实时监控所有 CU 的 Wavefront 占用率。当检测到空闲 Slot 时，自动进行微任务窃取分配。
                </p>
<div className="pt-4 border-t border-white/5 flex items-center gap-2">
<iconify-icon className="text-amber-500 text-sm" icon="solar:graph-up-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider text-neutral-500">Auto Task Stealing</span>
</div>
</div>

<div className="group relative rounded-xl bg-card-gradient border-subtle p-6 hover:bg-white/[0.02] hover:border-amber-500/20 transition-all duration-500 flex flex-col">
<div className="h-44 mb-6 bg-neutral-950 rounded border border-white/5 relative overflow-hidden flex items-center justify-center p-4">

<div className="flex flex-col w-full max-w-[160px]">

<div className="h-6 w-full border border-neutral-700 bg-neutral-900 rounded flex items-center justify-between px-2 mb-3">
<span className="text-[8px] font-mono text-neutral-400">INST_FETCH</span>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
</div>
</div>

<div className="flex justify-between px-4 mb-1">
<div className="h-4 w-px bg-neutral-700"></div>
<div className="h-4 w-px bg-neutral-700"></div>
</div>

<div className="flex justify-between gap-2">

<div className="flex-1 h-12 bg-neutral-900 border border-amber-500/30 rounded flex flex-col items-center justify-center gap-1 shadow-[0_0_15px_-5px_rgba(245,158,11,0.3)]">
<span className="text-[7px] font-mono text-neutral-500 uppercase">Integer</span>
<span className="text-[9px] font-bold text-amber-400">ALU 0</span>
</div>

<div className="flex-1 h-12 bg-neutral-900 border border-blue-500/30 rounded flex flex-col items-center justify-center gap-1 shadow-[0_0_15px_-5px_rgba(59,130,246,0.3)]">
<span className="text-[7px] font-mono text-neutral-500 uppercase">Float</span>
<span className="text-[9px] font-bold text-blue-400">ALU 1</span>
</div>
</div>
<div className="text-[8px] text-center mt-2 font-mono text-neutral-500">1 CLOCK CYCLE</div>
</div>
</div>
<h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2 group-hover:text-amber-100 transition-colors">
                    FP32 + INT32 双发射
                </h3>
<p className="text-xs text-neutral-400 mb-4 font-light leading-relaxed flex-1">
                    在同一时钟周期内，同时向 Integer ALU (地址计算/逻辑) 和 Float ALU (数值计算) 发射指令，提升单元利用率。
                </p>
<div className="pt-4 border-t border-white/5 flex items-center gap-2">
<iconify-icon className="text-amber-500 text-sm" icon="solar:bolt-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider text-neutral-500">Dual-Issue Pipeline</span>
</div>
</div>

<div className="group relative rounded-xl bg-card-gradient border-subtle p-6 hover:bg-white/[0.02] hover:border-amber-500/20 transition-all duration-500 flex flex-col">
<div className="h-44 mb-6 bg-neutral-950 rounded border border-white/5 relative overflow-hidden flex items-center justify-center p-4">

<div className="relative w-full max-w-[180px] flex flex-col gap-2">
<div className="text-[8px] font-mono text-neutral-500 text-center">RASTERIZER INPUT</div>
<div className="flex gap-1 justify-center">

<div className="w-8 h-8 border border-neutral-600 bg-neutral-900 flex items-center justify-center text-[10px] text-neutral-400 rounded-sm">
                                T1
                            </div>

<div className="w-12 h-8 border border-red-900/40 bg-red-950/20 flex items-center justify-center text-[10px] text-red-500/50 rounded-sm border-dashed">
                                T2
                            </div>

<div className="w-8 h-8 border border-amber-500 bg-amber-500/10 flex items-center justify-center text-[10px] font-bold text-amber-400 rounded-sm shadow-[0_0_10px_rgba(245,158,11,0.2)] transform -translate-x-4 z-10">
                                T3
                            </div>
</div>
<div className="flex items-center justify-center gap-2 mt-2">
<iconify-icon className="text-amber-500 text-sm" icon="solar:sort-from-top-to-bottom-linear"></iconify-icon>
<span className="text-[8px] font-mono text-amber-500">REORDER_BUFFER_ACTIVE</span>
</div>
</div>
</div>
<h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2 group-hover:text-amber-100 transition-colors">
                    乱序图元处理
                </h3>
<p className="text-xs text-neutral-400 mb-4 font-light leading-relaxed flex-1">
                    允许 Rasterizer 在长耗时图元（如大三角形）阻塞管线时，提前处理后续的小图元，填充管线气泡 (Pipeline Bubbles)。
                </p>
<div className="pt-4 border-t border-white/5 flex items-center gap-2">
<iconify-icon className="text-amber-500 text-sm" icon="solar:refresh-circle-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider text-neutral-500">Pipeline Saturation</span>
</div>
</div>

<div className="group relative rounded-xl bg-card-gradient border-subtle p-6 hover:bg-white/[0.02] hover:border-amber-500/20 transition-all duration-500 flex flex-col">
<div className="h-44 mb-6 bg-neutral-950 rounded border border-white/5 relative overflow-hidden flex items-center justify-center p-4">

<div className="flex items-center gap-2 w-full max-w-[180px]">

<div className="flex-1 flex flex-col gap-1 items-end">
<span className="text-[8px] font-mono text-neutral-500">TEX_UNIT</span>
<div className="h-1 w-full bg-neutral-800 rounded overflow-hidden">
<div className="h-full bg-neutral-600 w-full animate-pulse"></div>
</div>
</div>

<div className="w-16 h-12 border border-white/20 rounded bg-neutral-900 relative overflow-hidden flex items-end">

<div className="w-full bg-amber-600/20 border-t border-amber-500/50 absolute bottom-0 h-[60%] transition-all duration-1000"></div>
<div className="absolute inset-0 flex items-center justify-center text-[8px] font-mono text-amber-200 z-10">L1 BUFFER</div>
</div>

<div className="flex-1 flex flex-col gap-1 items-start">
<span className="text-[8px] font-mono text-neutral-500">LSU_WRITE</span>
<div className="h-1 w-[80%] bg-neutral-800 rounded overflow-hidden">
<div className="h-full bg-amber-500 w-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
</div>
</div>
</div>
</div>
<h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2 group-hover:text-amber-100 transition-colors">
                    自适应带宽节流
                </h3>
<p className="text-xs text-neutral-400 mb-4 font-light leading-relaxed flex-1">
                    在 Texture Unit 与 Load/Store Unit 之间建立弹性缓冲。动态调整读取速率，防止后端存储单元过载。
                </p>
<div className="pt-4 border-t border-white/5 flex items-center gap-2">
<iconify-icon className="text-amber-500 text-sm" icon="solar:tuning-square-2-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider text-neutral-500">Traffic Shaping</span>
</div>
</div>

<div className="group relative rounded-xl bg-card-gradient border-subtle p-6 hover:bg-white/[0.02] hover:border-amber-500/20 transition-all duration-500 flex flex-col">
<div className="overflow-hidden flex bg-neutral-950 h-44 border-white/5 border rounded mb-6 relative">

<div className="flex-1 h-full flex flex-col items-center justify-center gap-3 border-r border-white/5 bg-black/20 p-4 relative group">
<span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest font-semibold">Linear Storage</span>

<div className="grid grid-cols-4 gap-px w-12 h-12 opacity-40 group-hover:opacity-60 transition-opacity duration-300">

<div className="bg-neutral-600 rounded-[1px]"></div><div className="bg-neutral-600 rounded-[1px]"></div><div className="bg-neutral-600 rounded-[1px]"></div><div className="bg-neutral-600 rounded-[1px]"></div>
<div className="bg-neutral-600 rounded-[1px]"></div><div className="bg-neutral-600 rounded-[1px]"></div><div className="bg-neutral-600 rounded-[1px]"></div><div className="bg-neutral-600 rounded-[1px]"></div>
<div className="bg-neutral-600 rounded-[1px]"></div><div className="bg-neutral-600 rounded-[1px]"></div><div className="bg-neutral-600 rounded-[1px]"></div><div className="bg-neutral-600 rounded-[1px]"></div>
<div className="bg-neutral-600 rounded-[1px]"></div><div className="bg-neutral-600 rounded-[1px]"></div><div className="bg-neutral-600 rounded-[1px]"></div><div className="bg-neutral-600 rounded-[1px]"></div>
</div>
<iconify-icon className="text-neutral-600 text-[10px]" icon="solar:arrow-down-linear"></iconify-icon>

<div className="flex gap-px w-24 h-2 opacity-40">
<div className="flex-1 bg-neutral-600 rounded-[1px]"></div>
<div className="flex-1 bg-neutral-600 rounded-[1px]"></div>
<div className="flex-1 bg-neutral-600 rounded-[1px]"></div>
<div className="flex-1 bg-neutral-600 rounded-[1px]"></div>
<div className="flex-1 bg-neutral-600 rounded-[1px]"></div>
<div className="flex-1 bg-neutral-600 rounded-[1px]"></div>
<div className="flex-1 bg-neutral-600 rounded-[1px]"></div>
<div className="flex-1 bg-neutral-600 rounded-[1px]"></div>
</div>
</div>

<div className="flex-1 h-full flex flex-col items-center justify-center gap-3 p-4 relative">
<div className="absolute inset-0 bg-amber-500/5 blur-2xl"></div>
<span className="text-[8px] font-mono text-amber-500 uppercase tracking-widest font-semibold flex items-center gap-1">
            Tiled Storage
            <iconify-icon className="text-amber-500" icon="solar:check-circle-bold"></iconify-icon>
</span>

<div className="grid grid-cols-2 gap-1 w-12 h-12 relative z-10">

<div className="grid grid-cols-2 gap-px border border-amber-500/40 bg-amber-900/20 p-px rounded-[1px]">
<div className="bg-amber-500/60 rounded-[0.5px]"></div><div className="bg-amber-500/60 rounded-[0.5px]"></div>
<div className="bg-amber-500/60 rounded-[0.5px]"></div><div className="bg-amber-500/60 rounded-[0.5px]"></div>
</div>

<div className="grid grid-cols-2 gap-px border border-amber-500/40 bg-amber-900/20 p-px rounded-[1px]">
<div className="bg-amber-500/60 rounded-[0.5px]"></div><div className="bg-amber-500/60 rounded-[0.5px]"></div>
<div className="bg-amber-500/60 rounded-[0.5px]"></div><div className="bg-amber-500/60 rounded-[0.5px]"></div>
</div>

<div className="grid grid-cols-2 gap-px border border-amber-500/40 bg-amber-900/20 p-px rounded-[1px]">
<div className="bg-amber-500/60 rounded-[0.5px]"></div><div className="bg-amber-500/60 rounded-[0.5px]"></div>
<div className="bg-amber-500/60 rounded-[0.5px]"></div><div className="bg-amber-500/60 rounded-[0.5px]"></div>
</div>

<div className="grid grid-cols-2 gap-px border border-amber-500/40 bg-amber-900/20 p-px rounded-[1px]">
<div className="bg-amber-500/60 rounded-[0.5px]"></div><div className="bg-amber-500/60 rounded-[0.5px]"></div>
<div className="bg-amber-500/60 rounded-[0.5px]"></div><div className="bg-amber-500/60 rounded-[0.5px]"></div>
</div>

<div className="absolute -right-3 top-0 bottom-0 flex flex-col justify-between py-0.5 opacity-60">
<div className="h-5 border-l border-t border-b border-amber-500/30 w-1"></div>
<div className="h-5 border-l border-t border-b border-amber-500/30 w-1"></div>
</div>
</div>
<iconify-icon className="text-amber-500 text-[10px] animate-pulse" icon="solar:arrow-down-linear"></iconify-icon>

<div className="flex gap-1.5 relative z-10">
<div className="w-5 h-5 border border-amber-500/30 bg-amber-500/10 grid grid-cols-2 gap-px p-px rounded-[1px]">
<div className="bg-amber-500/40 rounded-[0.5px]"></div><div className="bg-amber-500/40 rounded-[0.5px]"></div>
<div className="bg-amber-500/40 rounded-[0.5px]"></div><div className="bg-amber-500/40 rounded-[0.5px]"></div>
</div>
<div className="w-5 h-5 border border-amber-500/30 bg-amber-500/10 grid grid-cols-2 gap-px p-px rounded-[1px]">
<div className="bg-amber-500/40 rounded-[0.5px]"></div><div className="bg-amber-500/40 rounded-[0.5px]"></div>
<div className="bg-amber-500/40 rounded-[0.5px]"></div><div className="bg-amber-500/40 rounded-[0.5px]"></div>
</div>
<div className="w-5 h-5 border border-amber-500/30 bg-amber-500/10 grid grid-cols-2 gap-px p-px rounded-[1px]">
<div className="bg-amber-500/40 rounded-[0.5px]"></div><div className="bg-amber-500/40 rounded-[0.5px]"></div>
<div className="bg-amber-500/40 rounded-[0.5px]"></div><div className="bg-amber-500/40 rounded-[0.5px]"></div>
</div>
</div>
</div>
</div>
<h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2 group-hover:text-amber-100 transition-colors">
                    内存地址 Swizzling
                </h3>
<p className="text-xs text-neutral-400 mb-4 font-light leading-relaxed flex-1">
                    将线性显存地址映射为 2D 块状结构 (Tiled Layout)。在进行矩阵乘法时，极大提高 L1/L2 Cache 的空间局部性命中率。
                </p>
<div className="pt-4 border-t border-white/5 flex items-center gap-2">
<iconify-icon className="text-amber-500 text-sm" icon="solar:box-minimalistic-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider text-neutral-500">Cache Locality Optimized</span>
</div>
</div>
</div>
</main>

<section className="max-w-7xl mx-auto px-6 py-12 mb-20">
<div className="flex items-end justify-between mb-8 border-b border-white/5 pb-4">
<h2 className="text-xl font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:code-circle-linear"></iconify-icon>
                Developer Ecosystem
            </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="rounded-xl border-subtle bg-neutral-950 overflow-hidden flex flex-col group hover:border-amber-500/30 transition-colors">
<div className="h-48 bg-neutral-900 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 grid grid-cols-2">

<div className="bg-neutral-800 relative overflow-hidden border-r border-white/10">
<div className="absolute inset-0 bg-[size:20px_20px] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] opacity-20"></div>
<div className="absolute center text-neutral-600 font-mono text-xs top-4 left-4">1080P</div>
</div>

<div className="bg-neutral-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
<div className="absolute inset-0 bg-[size:4px_4px] bg-[linear-gradient(to_right,rgba(245,158,11,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,158,11,0.1)_1px,transparent_1px)]"></div>
<div className="absolute center text-amber-400 font-mono text-xs top-4 right-4">4K_AI</div>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-black/50 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-[10px] text-white flex items-center gap-2">
<iconify-icon className="text-amber-400" icon="solar:magic-stick-3-linear"></iconify-icon>
                            Tensor Scaling
                         </div>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="text-base font-medium text-white mb-2">NRSS 超分辨率</h3>
<p className="text-xs text-neutral-500 leading-relaxed">基于 Tensor Core 的时域重建算法。利用运动矢量 (Motion Vectors) 补偿，实现 4K 60FPS 的高保真渲染。</p>
</div>
</div>

<div className="rounded-xl border-subtle bg-neutral-950 overflow-hidden flex flex-col group hover:border-amber-500/30 transition-colors">
<div className="h-48 bg-neutral-900 relative flex items-center justify-center">
<div className="relative w-40 h-24 flex items-end justify-center gap-1">

<div className="w-8 h-16 bg-neutral-800 border border-white/10 rounded-t-sm group-hover:bg-amber-900/20 group-hover:border-amber-500/30 transition-all duration-300"></div>

<div className="w-8 h-20 bg-neutral-800 border border-white/10 rounded-t-sm group-hover:bg-amber-900/20 group-hover:border-amber-500/30 transition-all duration-500"></div>

<div className="w-8 h-24 bg-amber-500/10 border-t border-x border-amber-500 rounded-t-sm relative shadow-[0_-5px_15px_rgba(245,158,11,0.2)]">
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full animate-ping"></div>
</div>

<div className="w-8 h-14 bg-neutral-800 border border-white/10 rounded-t-sm group-hover:bg-amber-900/20 group-hover:border-amber-500/30 transition-all duration-700"></div>
</div>
<div className="absolute bottom-0 w-full h-px bg-white/10"></div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="text-base font-medium text-white mb-2">SR-IOV 虚拟化</h3>
<p className="text-xs text-neutral-500 leading-relaxed">硬件级资源隔离。支持将单颗 GPU 切分为最多 16 个 vGPU 实例，每个实例拥有独立的显存空间与命令流。</p>
</div>
</div>

<div className="rounded-xl border-subtle bg-neutral-950 overflow-hidden flex flex-col group hover:border-amber-500/30 transition-colors">
<div className="h-48 bg-neutral-900 relative flex items-center justify-center">

<div className="flex flex-col w-32 gap-1">
<div className="h-6 w-full border border-neutral-700 bg-neutral-800 rounded text-[9px] text-center flex items-center justify-center text-neutral-400">PyTorch / TF</div>
<div className="h-6 w-full border border-neutral-700 bg-neutral-800 rounded text-[9px] text-center flex items-center justify-center text-neutral-400">ONNX</div>
<div className="flex justify-center h-2"><div className="w-px h-full bg-neutral-600"></div></div>
<div className="h-8 w-full border border-amber-500/50 bg-amber-950/40 rounded text-[9px] text-center flex items-center justify-center text-amber-400 font-bold shadow-[0_0_10px_rgba(245,158,11,0.1)]">
                            LSRT Compiler
                        </div>
<div className="flex justify-center h-2"><div className="w-px h-full bg-amber-500/50"></div></div>
<div className="h-6 w-full border border-neutral-700 bg-neutral-900 rounded text-[9px] text-center flex items-center justify-center text-neutral-500 font-mono">.bin / .so</div>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="text-base font-medium text-white mb-2">LSRT 推理引擎</h3>
<p className="text-xs text-neutral-500 leading-relaxed">完全兼容 TVM 生态。通过图层融合 (Graph Fusion) 与算子自动调优，最大化 Tensor Core 的利用效率。</p>
</div>
</div>
</div>
</section>

<footer className="mt-auto border-t border-white/5 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-neutral-600 font-light flex items-center gap-2">
                © 2024 Lisuan Innovation. 
                <span className="w-1 h-1 rounded-full bg-amber-500/50"></span> 
                Designed for High Performance Computing.
            </div>
<div className="flex gap-6">
<a className="text-neutral-600 hover:text-amber-400 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</a>
<a className="text-neutral-600 hover:text-amber-400 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:code-square-linear"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
