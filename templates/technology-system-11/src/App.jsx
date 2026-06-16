import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
950: '#030712',
},
emerald: {
50: '#ECFDF5',
100: '#D1FAE5',
200: '#A7F3D0',
300: '#6EE7B7',
400: '#34D399',
500: '#10B981',
600: '#059669',
700: '#047857',
800: '#065F46',
900: '#064E3B',
950: '#022C22',
},
red: {
50: '#FEF2F2',
100: '#FEE2E2',
200: '#FECACA',
300: '#FCA5A5',
400: '#F87171',
500: '#EF4444',
600: '#DC2626',
700: '#B91C1C',
800: '#991B1B',
900: '#7F1D1D',
950: '#450A0A',
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
  }, []);

  return (
    <>
      

<main className="w-full max-w-7xl mx-auto relative z-10">

<header className="mb-12 animate-enter">
<div className="flex flex-col gap-6">

<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
<span className="font-mono text-xs font-semibold text-gray-500 tracking-widest uppercase">[ System Monitor ]</span>
</div>

<div className="flex items-center gap-2 pl-4 border-l border-gray-800">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</div>
<span className="font-mono text-[10px] font-medium text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shadow-sm">Live Simulation</span>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
                            EXECUTION ENGINE
                        </h1>
</div>
<div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-gray-800 to-transparent mx-8 mb-4"></div>
</div>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">

<div className="lg:col-span-8 flex flex-col gap-6 animate-enter" style={{animationDelay: '0.1s'}}>

<div className="relative group rounded-xl border border-red-900/30 bg-red-950/10 p-6 overflow-hidden transition-all duration-300 hover:border-red-800/50 hover:shadow-sm h-48">

<div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:24px_24px]"></div>

<div className="flex justify-between items-center mb-6 relative z-10">
<div className="flex items-center gap-2 text-red-400">
<iconify-icon height="16" icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="font-mono text-xs font-bold tracking-widest uppercase">[ Fragmented Layer ]</span>
</div>
<div className="font-mono text-[10px] font-medium text-red-400 uppercase bg-red-500/10 px-2 py-1 rounded border border-red-500/20">Latency: High</div>
</div>

<div className="relative h-24 w-full flex items-center">

<div className="absolute w-full h-px border-b border-dashed border-red-900/50 top-1/2 -translate-y-1/2"></div>

<div className="absolute left-[15%] top-1/2 -translate-y-1/2 z-10 flex flex-col items-center group-hover:scale-105 transition-transform">
<div className="w-2 h-8 bg-[#0A0A0A] border border-red-900/50 rounded-sm"></div>
<span className="font-mono text-[9px] uppercase text-red-500 mt-1">Wait</span>
</div>
<div className="absolute left-[45%] top-1/2 -translate-y-1/2 z-10 flex flex-col items-center group-hover:scale-105 transition-transform">
<div className="w-2 h-8 bg-[#0A0A0A] border border-red-900/50 rounded-sm"></div>
<span className="font-mono text-[9px] uppercase text-red-500 mt-1">Verify</span>
</div>


<div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded shadow-[0_0_10px_rgba(239,68,68,0.5)] z-20 animate-stutter flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-full opacity-70"></div>
</div>

<div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded shadow-[0_0_10px_rgba(239,68,68,0.5)] z-20 animate-stutter-delay flex items-center justify-center border border-red-400">
<div className="w-1.5 h-1.5 bg-white rounded-full opacity-70"></div>
</div>
</div>
</div>

<div className="relative rounded-xl border border-emerald-900/30 bg-[#0A0A0A] p-0 overflow-hidden shadow-sm h-64 flex flex-col group">

<div className="px-6 py-4 border-b border-emerald-900/30 flex justify-between items-center bg-emerald-950/10 z-20 relative backdrop-blur-sm">
<div className="flex items-center gap-2 text-emerald-400">
<iconify-icon height="16" icon="solar:bolt-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="font-mono text-xs font-bold tracking-widest uppercase">[ Unified Execution ]</span>
</div>
<div className="font-mono text-[10px] font-medium text-emerald-400 uppercase bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">Latency: &lt;10ms</div>
</div>

<div className="relative flex-1 w-full bg-emerald-950/5 flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

<div className="absolute w-full h-[1px] bg-emerald-900/30 top-1/2 -translate-y-1/2"></div>

<div className="absolute w-24 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent top-1/2 -translate-y-1/2 z-0 animate-flow-fast blur-[1px]"></div>
<div className="absolute w-32 h-[1px] bg-emerald-300 top-1/2 -translate-y-1/2 z-0 animate-flow-fast-delay-1"></div>
<div className="absolute w-16 h-[3px] bg-emerald-500/30 top-1/2 -translate-y-1/2 z-0 animate-flow-fast-delay-2 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>

<div className="relative z-10 bg-[#0A0A0A] border border-emerald-900/50 rounded-lg shadow-[0_8px_30px_rgba(16,185,129,0.05)] p-1.5 transition-transform duration-500 hover:scale-105">

<div className="absolute inset-0 rounded-lg border border-emerald-500/50 animate-pulse-ring z-0"></div>
<div className="bg-gray-900 rounded border border-emerald-500/30 px-8 py-4 min-w-[160px] flex flex-col items-center justify-center relative overflow-hidden z-10">

<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-emerald-500/50"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-emerald-500/50"></div>
<span className="font-mono text-[9px] text-gray-400 uppercase tracking-wider mb-1">Module</span>
<span className="font-mono text-xl font-bold text-white tracking-tight">TxFlow</span>

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col h-full relative animate-enter" style={{animationDelay: '0.2s'}}>

<div className="absolute left-0 top-0 h-[20%] w-px bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent hidden lg:block animate-scan"></div>
<div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800/50 hidden lg:block"></div>
<div className="flex flex-col gap-10 lg:pl-10 h-full">

<div className="flex flex-col gap-8">

<div className="group cursor-default">
<div className="flex items-center justify-between mb-2">
<span className="font-mono text-xs text-gray-500 uppercase tracking-widest group-hover:text-emerald-500 transition-colors">Throughput</span>
<span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">OPTIMAL</span>
</div>
<div className="flex items-baseline gap-1">
<span className="font-mono text-4xl lg:text-5xl font-bold text-white tracking-tighter group-hover:text-emerald-400 transition-colors duration-300">&gt;100K</span>
</div>

<div className="h-1 w-full bg-gray-800/50 mt-4 overflow-hidden rounded-full relative">
<div className="absolute inset-0 bg-emerald-500 w-[95%] rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
<div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]"></div>
</div>
</div>

<div className="group cursor-default">
<div className="flex items-center justify-between mb-2">
<span className="font-mono text-xs text-gray-500 uppercase tracking-widest group-hover:text-emerald-500 transition-colors">Block Time</span>
</div>
<div className="flex items-baseline gap-1">
<span className="font-mono text-4xl lg:text-5xl font-bold text-white tracking-tighter group-hover:text-emerald-400 transition-colors duration-300">&lt;10MS</span>
</div>
<div className="h-1 w-full bg-gray-800/50 mt-4 overflow-hidden rounded-full relative">
<div className="h-full w-[10%] bg-emerald-500 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30 absolute"></div>
<div className="h-full w-[25%] bg-emerald-500 rounded-full relative shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
</div>
</div>

<div className="flex-1 mt-4 min-h-[250px] bg-[#111827] border border-gray-800 rounded-lg p-5 font-mono text-xs relative overflow-hidden flex flex-col shadow-2xl group transition-all hover:border-gray-700">

<div className="flex items-center gap-1.5 mb-4 opacity-50 border-b border-gray-800 pb-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500 transition-colors"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 group-hover:bg-emerald-500 transition-colors"></div>
<span className="ml-auto text-gray-500 text-[10px]">bash — 80x24</span>
</div>

<div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-2 relative z-10 text-gray-300">
<div className="flex flex-col gap-1 opacity-50">
<div className="flex items-center gap-2">
<span className="text-emerald-500 select-none">➜</span>
<span>init_sequence --force</span>
</div>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="text-emerald-500 select-none">➜</span>
<span>monitoring_pools.sh</span>
</div>
<div className="text-emerald-400 pl-4 text-[10px] leading-relaxed">
                                    [OK] Connection established<br/>
                                    [OK] Latency check: 4ms<br/>
                                    [OK] Mempool sync complete
                                </div>
</div>
<div className="flex flex-col gap-1 mt-2">
<div className="flex items-center gap-2">
<span className="text-emerald-500 select-none">➜</span>
<span>stream_logs --live</span>
</div>
<div className="pl-4 flex flex-col gap-1">
<div className="flex items-center gap-2 text-gray-400">
<span className="text-[10px] opacity-50">14:02:41</span>
<span className="text-emerald-300">Block #184920 finalized</span>
</div>
<div className="flex items-center gap-2 text-gray-400">
<span className="text-[10px] opacity-50">14:02:41</span>
<span className="text-emerald-300">TxBatch [0x4a...9f] processed</span>
</div>
<div className="flex items-center gap-2 text-gray-400 animate-pulse">
<span className="text-[10px] opacity-50">14:02:42</span>
<span className="text-white">Optimizing route...</span>
</div>
</div>
</div>

<div className="flex items-center gap-2 mt-auto pt-2 border-t border-gray-800">
<span className="text-emerald-500 select-none">➜</span>
<span className="w-2 h-4 bg-emerald-500 animate-cursor"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
