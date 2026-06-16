import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="h-16 flex-none px-6 flex items-center justify-between z-20 bg-gradient-to-b from-[#121212] to-[#0A0A0A] shadow-lg border-b border-white/5">

<div className="flex items-center gap-4">
<div className="text-cyan-400">
<iconify-icon icon="lucide:anchor" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h1 className="text-base font-semibold text-white tracking-tight">HMNZS Aotearoa</h1>
<p className="text-xs text-neutral-500 font-medium">Engine Control System</p>
</div>
</div>

<div className="flex items-center gap-8">
<div className="flex items-center gap-2 bg-neutral-900/80 px-3 py-1.5 rounded-full border border-white/5">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
<span className="text-xs font-medium text-green-400">Online</span>
</div>
<div className="text-sm font-medium text-neutral-400">
<span className="text-white">17°C</span>
</div>
<div className="text-2xl font-light tracking-tight text-white font-mono">14:32</div>
<div className="text-xs text-neutral-500 font-mono">4ms</div>
</div>

<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10 relative">
<iconify-icon className="text-neutral-400" icon="lucide:user" width="20"></iconify-icon>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#0A0A0A] rounded-full"></div>
</div>
</div>
</header>

<main className="flex-1 p-3 flex gap-3 overflow-hidden relative">

<aside className="w-[280px] flex-none glass-panel rounded-xl flex flex-col p-4 gap-4 z-10">

<div className="relative group">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-cyan-400 transition-colors">
<iconify-icon icon="lucide:search" width="18"></iconify-icon>
</div>
<input className="w-full bg-[#0A0A0A] h-11 pl-10 pr-4 rounded-full text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/30 border border-transparent transition-all" placeholder="Search equipment..." type="text"/>
</div>

<div className="flex-1 overflow-y-auto pr-1">
<div className="text-[10px] font-medium text-neutral-500 tracking-widest mb-3 uppercase pl-1">Equipment</div>
<div className="flex flex-col gap-1">

<div className="flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-white/5 cursor-pointer text-neutral-300">
<iconify-icon className="text-neutral-500" icon="lucide:chevron-down" width="14"></iconify-icon>
<div className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5">
<iconify-icon icon="lucide:ship" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium">HMNZS Aotearoa</span>
</div>
<div className="pl-4 flex flex-col gap-1 border-l border-white/5 ml-3.5">

<div className="flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-white/5 cursor-pointer text-neutral-300">
<iconify-icon className="text-neutral-500" icon="lucide:chevron-down" width="14"></iconify-icon>
<div className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5">
<iconify-icon icon="lucide:cog" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium">Engine Room Main</span>
</div>
<div className="pl-4 flex flex-col gap-1 border-l border-white/5 ml-3.5">

<div className="flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-white/5 cursor-pointer text-neutral-300">
<iconify-icon className="text-neutral-500" icon="lucide:chevron-down" width="14"></iconify-icon>
<div className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5">
<iconify-icon icon="lucide:wrench" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium">Main Turbine A</span>
</div>

<div className="pl-4 border-l border-white/5 ml-3.5 flex flex-col gap-1">
<div className="flex items-center gap-3 px-2 py-2 rounded-lg bg-cyan-500/10 border-l-2 border-cyan-400 cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-cyan-400/5 blur-sm"></div>
<div className="w-6 h-6 rounded-full bg-cyan-900/30 flex items-center justify-center relative z-10">
<iconify-icon className="text-cyan-400" icon="lucide:bar-chart-2" width="12"></iconify-icon>
</div>
<span className="text-xs font-medium text-white relative z-10">Vibration X-4</span>
</div>
<div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 cursor-pointer text-neutral-400">
<div className="w-6 h-6 rounded-full bg-neutral-800/50 flex items-center justify-center">
<iconify-icon icon="lucide:bar-chart-2" width="12"></iconify-icon>
</div>
<span className="text-xs font-medium">Vibration X-3</span>
</div>
<div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 cursor-pointer text-neutral-400">
<div className="w-6 h-6 rounded-full bg-neutral-800/50 flex items-center justify-center">
<iconify-icon icon="lucide:thermometer" width="12"></iconify-icon>
</div>
<span className="text-xs font-medium">Temperature</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="pt-4 border-t border-white/5">
<div className="text-[10px] font-medium text-neutral-500 tracking-widest mb-3 uppercase pl-1">Cylinder View</div>
<div className="grid grid-cols-3 gap-2">

<button className="h-[52px] rounded-lg bg-[#151515] border border-white/5 hover:bg-[#202020] hover:border-white/10 transition-all flex flex-col items-center justify-center gap-1 group">
<span className="text-xs font-medium text-neutral-400 group-hover:text-white">C1</span>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</button>

<button className="h-[52px] rounded-lg bg-[#151515] border border-white/5 hover:bg-[#202020] transition-all flex flex-col items-center justify-center gap-1">
<span className="text-xs font-medium text-neutral-400">C2</span>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</button>

<button className="h-[52px] rounded-lg bg-[#151515] border border-white/5 hover:bg-[#202020] transition-all flex flex-col items-center justify-center gap-1">
<span className="text-xs font-medium text-neutral-400">C3</span>
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.4)]"></div>
</button>

<button className="h-[52px] rounded-lg bg-cyan-900/20 border border-cyan-500/30 flex flex-col items-center justify-center gap-1 cyan-glow relative">
<span className="text-xs font-semibold text-cyan-400">C4</span>
<div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]"></div>
</button>

<button className="h-[52px] rounded-lg bg-[#151515] border border-white/5 hover:bg-[#202020] transition-all flex flex-col items-center justify-center gap-1">
<span className="text-xs font-medium text-neutral-400">C5</span>
<div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.4)]"></div>
</button>

<button className="h-[52px] rounded-lg bg-[#151515] border border-white/5 hover:bg-[#202020] transition-all flex flex-col items-center justify-center gap-1">
<span className="text-xs font-medium text-neutral-400">C6</span>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</button>
</div>
<button className="w-full mt-2 h-7 rounded-full bg-white/5 hover:bg-white/10 text-[10px] text-neutral-400 font-medium transition-colors">View All Cylinders</button>
</div>
</aside>

<section className="flex-1 glass-panel rounded-xl flex flex-col relative overflow-hidden">

<div className="h-14 flex items-center justify-between px-6 border-b border-white/5 bg-gradient-to-r from-white/[0.02] to-transparent">
<div className="flex items-center gap-4">
<h2 className="text-sm font-semibold tracking-wide text-white">VIB_X4_AXIAL</h2>
<div className="flex items-center gap-1.5 bg-green-500/10 px-2.5 py-1 rounded-full border border-green-500/20">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-[10px] font-bold text-green-400 tracking-wide">LIVE</span>
</div>
</div>
<div className="flex bg-black/40 p-1 rounded-full border border-white/5">
<button className="px-3 py-1 rounded-full text-[10px] font-medium text-neutral-400 hover:text-white transition-colors">1H</button>
<button className="px-3 py-1 rounded-full bg-neutral-800 text-[10px] font-medium text-white shadow-sm">4H</button>
<button className="px-3 py-1 rounded-full text-[10px] font-medium text-neutral-400 hover:text-white transition-colors">12H</button>
<button className="px-3 py-1 rounded-full text-[10px] font-medium text-neutral-400 hover:text-white transition-colors">24H</button>
</div>
</div>

<div className="flex-1 relative bg-gradient-to-b from-transparent to-[#050505] p-6 flex flex-col">

<div className="absolute top-6 left-6 z-10 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg p-3">
<div className="flex items-center gap-2 mb-1">
<div className="w-3 h-0.5 bg-cyan-400 rounded-full"></div>
<span className="text-[10px] text-neutral-300">Primary (X-4)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-0.5 bg-[#FF6B6B] rounded-full opacity-50"></div>
<span className="text-[10px] text-neutral-500">Reference (X-3)</span>
</div>
</div>

<div className="absolute top-24 left-[60%] z-20 bg-[#151515]/90 backdrop-blur-md border border-white/10 rounded-lg p-3 w-[110px] shadow-xl pointer-events-none transform -translate-x-1/2 -translate-y-full mb-2">
<div className="text-[9px] font-mono text-neutral-500 mb-1">14:32:05</div>
<div className="text-lg font-light text-white font-mono tracking-tight">128.4 <span className="text-xs text-neutral-500">Hz</span></div>
<div className="flex items-center gap-1 text-[10px] text-green-400 mt-0.5">
<iconify-icon icon="lucide:arrow-up" width="10"></iconify-icon>
<span>+2.4%</span>
</div>
<div className="text-[9px] text-neutral-500 mt-1 border-t border-white/10 pt-1">Ref: 122.1</div>
</div>

<div className="flex-1 w-full relative">

<div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[10px] font-mono text-neutral-600 pointer-events-none h-full pr-2">
<span>200</span>
<span>150</span>
<span>100</span>
<span>50</span>
<span>0</span>
</div>

<svg className="w-full h-full ml-8 overflow-visible" preserveaspectratio="none" viewbox="0 0 1000 300">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#00D4FF" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#00D4FF" stop-opacity="0.0"></stop>
</lineargradient>
<lineargradient id="coralGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#FF6B6B" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#FF6B6B" stop-opacity="0.0"></stop>
</lineargradient>
</defs>

<line className="chart-grid" x1="0" x2="1000" y1="0" y2="0"></line>
<line className="chart-grid" x1="0" x2="1000" y1="75" y2="75"></line>
<line className="chart-grid" x1="0" x2="1000" y1="150" y2="150"></line>
<line className="chart-grid" x1="0" x2="1000" y1="225" y2="225"></line>
<line stroke="#333" strokeWidth="1" x1="0" x2="1000" y1="300" y2="300"></line>

<line stroke="#F59E0B" stroke-dasharray="4 4" stroke-opacity="0.5" strokeWidth="1" x1="0" x2="1000" y1="50" y2="50"></line>

<path d="M0,180 C100,175 200,190 300,160 C400,140 500,150 600,145 C700,140 800,155 900,150 C950,148 1000,152 1000,152" fill="none" stroke="#FF6B6B" stroke-opacity="0.4" strokeWidth="1.5"></path>

<path d="M0,160 C50,155 100,165 150,140 C200,115 250,130 300,120 C350,110 400,125 450,100 C500,80 550,90 600,85 C650,110 700,120 750,130 C800,140 850,135 900,125 C950,115 1000,120 1000,120 L1000,300 L0,300 Z" fill="url(#chartGradient)"></path>
<path d="M0,160 C50,155 100,165 150,140 C200,115 250,130 300,120 C350,110 400,125 450,100 C500,80 550,90 600,85 C650,110 700,120 750,130 C800,140 850,135 900,125 C950,115 1000,120 1000,120" fill="none" stroke="#00D4FF" strokeLinejoin="round" strokeWidth="2"></path>

<line stroke="#00D4FF" stroke-dasharray="2 2" stroke-opacity="0.3" strokeWidth="1" x1="600" x2="600" y1="0" y2="300"></line>
<circle className="animate-pulse shadow-[0_0_10px_#00D4FF]" cx="600" cy="85" fill="#00D4FF" r="4"></circle>
</svg>

<div className="flex justify-between mt-2 ml-8 text-[9px] font-mono text-neutral-500">
<span>14:00</span>
<span>14:10</span>
<span>14:20</span>
<span>14:30</span>
<span>14:40</span>
<span>14:50</span>
</div>
</div>

<div className="h-8 mt-4 ml-8 flex items-center gap-4">

<div className="flex-1 h-full bg-[#0A0A0A] rounded overflow-hidden relative border border-white/5">
<svg className="w-full h-full opacity-30" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0,15 L10,12 L20,16 L30,8 L40,10 L50,5 L60,12 L70,14 L80,10 L90,12 L100,8 L100,20 L0,20 Z" fill="#00D4FF"></path>
</svg>
<div className="absolute inset-y-0 right-[20%] w-[30%] border-2 border-cyan-500/50 bg-cyan-500/5 cursor-grab rounded-sm"></div>
</div>

<div className="flex items-center gap-2">
<button className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:zoom-in" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:zoom-out" width="16"></iconify-icon>
</button>
<button className="px-3 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-[10px] font-medium text-neutral-300 hover:text-white transition-colors gap-2">
<iconify-icon icon="lucide:download" width="12"></iconify-icon>
                            Export
                        </button>
</div>
</div>
</div>

<div className="h-[140px] border-t border-white/5 bg-[#121212] p-4 grid grid-cols-3 gap-4">

<div className="rounded-lg bg-gradient-to-br from-[#1A1A1A] to-[#121212] border border-white/5 p-3 flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-2 relative z-10">
<span className="text-[10px] uppercase font-medium text-neutral-500 tracking-wide">Temperature</span>
<span className="text-lg font-light text-white font-mono">42.5°C</span>
</div>
<div className="flex-1 relative">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 40">
<defs>
<lineargradient id="amberGrad" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#F59E0B" stop-opacity="0.2"></stop><stop offset="1" stop-color="#F59E0B" stop-opacity="0"></stop></lineargradient>
</defs>
<path d="M0,30 Q25,35 50,20 T100,10 V40 H0 Z" fill="url(#amberGrad)"></path>
<path d="M0,30 Q25,35 50,20 T100,10" fill="none" stroke="#F59E0B" strokeWidth="1.5"></path>
</svg>
</div>
</div>

<div className="rounded-lg bg-gradient-to-br from-[#1A1A1A] to-[#121212] border border-white/5 p-3 flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-2 relative z-10">
<span className="text-[10px] uppercase font-medium text-neutral-500 tracking-wide">Pressure</span>
<span className="text-lg font-light text-white font-mono">1,024 <span className="text-[10px] text-neutral-500">PSI</span></span>
</div>
<div className="flex-1 relative">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 40">
<defs>
<lineargradient id="greenGrad" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#22C55E" stop-opacity="0.2"></stop><stop offset="1" stop-color="#22C55E" stop-opacity="0"></stop></lineargradient>
</defs>
<path d="M0,20 L20,22 L40,18 L60,20 L80,15 L100,18 V40 H0 Z" fill="url(#greenGrad)"></path>
<path d="M0,20 L20,22 L40,18 L60,20 L80,15 L100,18" fill="none" stroke="#22C55E" strokeWidth="1.5"></path>
</svg>
</div>
</div>

<div className="rounded-lg bg-gradient-to-br from-[#1A1A1A] to-[#121212] border border-white/5 p-3 flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-2 relative z-10">
<span className="text-[10px] uppercase font-medium text-neutral-500 tracking-wide">RPM</span>
<span className="text-lg font-light text-white font-mono">2,400</span>
</div>
<div className="flex-1 relative">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 40">
<defs>
<lineargradient id="coralGrad" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#FF6B6B" stop-opacity="0.2"></stop><stop offset="1" stop-color="#FF6B6B" stop-opacity="0"></stop></lineargradient>
</defs>
<path d="M0,35 L20,30 L40,10 L60,15 L80,5 L100,8 V40 H0 Z" fill="url(#coralGrad)"></path>
<path d="M0,35 L20,30 L40,10 L60,15 L80,5 L100,8" fill="none" stroke="#FF6B6B" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</section>

<aside className="w-[300px] flex-none glass-panel rounded-xl flex flex-col gap-4 p-4 z-10 overflow-y-auto pb-20">

<div className="bg-[#121212] rounded-xl p-4 border border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

<div className="relative h-32 w-full flex items-center justify-center mt-2">
<svg className="w-48 h-48 transform -rotate-90" viewbox="0 0 100 100">

<circle cx="50" cy="50" fill="none" r="40" stroke="#262626" stroke-dasharray="200" stroke-dashoffset="50" strokeLinecap="round" strokeWidth="6"></circle>

<circle cx="50" cy="50" fill="none" opacity="0.8" r="40" stroke="#22C55E" stroke-dasharray="251.2" stroke-dashoffset="150" strokeWidth="6"></circle>

<circle cx="50" cy="50" fill="none" opacity="0.8" r="40" stroke="#F59E0B" stroke-dasharray="251.2" stroke-dashoffset="210" strokeWidth="6" transform="rotate(144 50 50)"></circle>

<circle cx="50" cy="50" fill="none" opacity="0.8" r="40" stroke="#EF4444" stroke-dasharray="251.2" stroke-dashoffset="230" strokeWidth="6" transform="rotate(216 50 50)"></circle>

<circle className="drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" cx="50" cy="50" fill="none" r="34" stroke="#00D4FF" stroke-dasharray="1 250" stroke-dashoffset="-140" strokeWidth="1"></circle>
</svg>
<div className="absolute flex flex-col items-center">
<span className="text-4xl font-light text-white font-mono tracking-tight text-glow">128.4</span>
<span className="text-xs text-neutral-500 font-medium">Hz</span>
</div>
</div>

<div className="grid grid-cols-3 gap-2 mt-4 mb-4">
<div className="bg-[#1A1A1A] rounded-lg p-2 text-center border border-white/5">
<div className="text-[9px] text-neutral-500 uppercase">Min</div>
<div className="text-xs font-mono text-white mt-0.5">42.1</div>
</div>
<div className="bg-[#1A1A1A] rounded-lg p-2 text-center border border-white/5">
<div className="text-[9px] text-neutral-500 uppercase">Max</div>
<div className="text-xs font-mono text-white mt-0.5">180.2</div>
</div>
<div className="bg-[#1A1A1A] rounded-lg p-2 text-center border border-white/5">
<div className="text-[9px] text-neutral-500 uppercase">Avg</div>
<div className="text-xs font-mono text-white mt-0.5">112.5</div>
</div>
</div>
<div className="flex justify-between items-center text-[10px] text-neutral-500 border-t border-white/5 pt-3">
<span>ID: X4-229</span>
<span>Vibration Sensor</span>
</div>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between px-1">
<div className="text-[10px] font-medium text-neutral-500 tracking-widest uppercase">Alerts</div>
<div className="px-2 py-0.5 bg-red-500/20 text-red-400 rounded-full text-[10px] font-bold border border-red-500/20">1 NEW</div>
</div>

<div className="bg-gradient-to-r from-red-500/10 to-[#151515] border-l-2 border-red-500 rounded-lg p-4 relative overflow-hidden group">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
<span className="text-xs font-bold text-red-400 tracking-wide">CRITICAL</span>
</div>
<span className="text-[9px] font-mono text-neutral-500">14:30:05</span>
</div>
<p className="text-xs text-neutral-200 leading-relaxed mb-3">Hydraulic pressure drop detected in Sector 7.</p>
<div className="flex justify-end">
<button className="text-[10px] font-medium text-neutral-400 hover:text-white px-3 py-1 rounded-full hover:bg-white/5 transition-colors">Dismiss</button>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mt-auto">
<button className="h-12 bg-[#1A1A1A] rounded-lg border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-900/10 flex items-center justify-center gap-2 transition-all group">
<div className="w-6 h-6 rounded-full bg-neutral-800 group-hover:bg-cyan-500/20 flex items-center justify-center">
<iconify-icon className="text-neutral-400 group-hover:text-cyan-400" icon="lucide:settings-2" width="12"></iconify-icon>
</div>
<span className="text-[11px] font-medium text-neutral-300">Calibrate</span>
</button>
<button className="h-12 bg-[#1A1A1A] rounded-lg border border-white/5 hover:border-white/20 hover:bg-[#202020] flex items-center justify-center gap-2 transition-all">
<div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center">
<iconify-icon className="text-neutral-400" icon="lucide:file-text" width="12"></iconify-icon>
</div>
<span className="text-[11px] font-medium text-neutral-300">Report</span>
</button>
<button className="h-12 bg-[#1A1A1A] rounded-lg border border-white/5 hover:border-white/20 hover:bg-[#202020] flex items-center justify-center gap-2 transition-all">
<div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center">
<iconify-icon className="text-neutral-400" icon="lucide:sliders" width="12"></iconify-icon>
</div>
<span className="text-[11px] font-medium text-neutral-300">Settings</span>
</button>
<button className="h-12 bg-[#1A1A1A] rounded-lg border border-white/5 hover:border-red-500/50 hover:bg-red-900/10 flex items-center justify-center gap-2 transition-all group">
<div className="w-6 h-6 rounded-full bg-neutral-800 group-hover:bg-red-500/20 flex items-center justify-center">
<iconify-icon className="text-red-400" icon="lucide:power" width="12"></iconify-icon>
</div>
<span className="text-[11px] font-medium text-neutral-300 group-hover:text-red-400">Stop</span>
</button>
</div>
</aside>
</main>

<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50">
<div className="glass-dock px-6 py-2 rounded-2xl flex items-center gap-8">
<button className="group flex flex-col items-center gap-1 w-12">
<div className="w-11 h-11 rounded-full hover:bg-white/10 flex items-center justify-center transition-all duration-300 transform group-active:scale-95">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors" icon="lucide:home" width="22"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-500 font-medium group-hover:text-neutral-300">Home</span>
</button>
<button className="group flex flex-col items-center gap-1 w-12 relative">
<div className="absolute -bottom-2 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_#00D4FF]"></div>
<div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 transform group-active:scale-95 border border-white/5">
<iconify-icon className="text-cyan-400" icon="lucide:bar-chart-2" width="22"></iconify-icon>
</div>
<span className="text-[10px] text-white font-medium">Charts</span>
</button>
<button className="group flex flex-col items-center gap-1 w-12 relative">
<div className="absolute top-0 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#151515] flex items-center justify-center">
<span className="text-[8px] font-bold text-white">1</span>
</div>
<div className="w-11 h-11 rounded-full hover:bg-white/10 flex items-center justify-center transition-all duration-300 transform group-active:scale-95">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors" icon="lucide:alert-triangle" width="22"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-500 font-medium group-hover:text-neutral-300">Alerts</span>
</button>
<button className="group flex flex-col items-center gap-1 w-12">
<div className="w-11 h-11 rounded-full hover:bg-white/10 flex items-center justify-center transition-all duration-300 transform group-active:scale-95">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors" icon="lucide:settings" width="22"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-500 font-medium group-hover:text-neutral-300">Set</span>
</button>
<button className="group flex flex-col items-center gap-1 w-12">
<div className="w-11 h-11 rounded-full hover:bg-white/10 flex items-center justify-center transition-all duration-300 transform group-active:scale-95">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors" icon="lucide:zap" width="22"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-500 font-medium group-hover:text-neutral-300">Power</span>
</button>
<button className="group flex flex-col items-center gap-1 w-12">
<div className="w-11 h-11 rounded-full hover:bg-white/10 flex items-center justify-center transition-all duration-300 transform group-active:scale-95">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors" icon="lucide:help-circle" width="22"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-500 font-medium group-hover:text-neutral-300">Help</span>
</button>
</div>
</div>

    </>
  );
}
