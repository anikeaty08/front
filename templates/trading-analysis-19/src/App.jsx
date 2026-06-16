import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
      

<header className="h-14 border-b border-slate-800/60 bg-slate-950 flex items-center justify-between px-4 shrink-0 relative z-20">

<div className="flex items-center gap-6">
<div className="text-white font-semibold text-lg tracking-tight select-none flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:chart-square-linear"></iconify-icon>
                SMCX
            </div>
<div className="flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors rounded-md px-3 py-1.5 cursor-pointer">
<div className="flex items-center gap-1.5">
<span className="font-medium text-slate-200 text-sm">BTC</span>
<span className="text-slate-500 text-sm">USDT</span>
</div>
<iconify-icon className="text-slate-500 text-sm" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="h-4 w-px bg-slate-800"></div>

<div className="flex items-center gap-1 text-xs font-medium">
<button className="px-2 py-1 rounded text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors">1m</button>
<button className="px-2 py-1 rounded text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors">5m</button>
<button className="px-2 py-1 rounded bg-slate-800 text-blue-400">15m</button>
<button className="px-2 py-1 rounded text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors">1H</button>
<button className="px-2 py-1 rounded text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors">4H</button>
<button className="px-2 py-1 rounded text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors">1D</button>
</div>
</div>

<div className="hidden md:flex items-center gap-4 text-xs">
<div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                Live WebSocket
            </div>
<span className="text-slate-500">Vol: 1.2k BTC</span>
</div>

<div className="flex items-center gap-3">
<button className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded transition-colors" title="Alerts">
<iconify-icon className="text-base" icon="solar:bell-linear"></iconify-icon>
</button>
<button className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded transition-colors" title="Settings">
<iconify-icon className="text-base" icon="solar:settings-linear"></iconify-icon>
</button>
<div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-500 flex items-center justify-center text-white text-xs font-medium ml-2 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                TX
            </div>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<aside className="w-12 border-r border-slate-800/60 bg-slate-950 flex flex-col items-center py-2 gap-2 shrink-0 z-10">
<button className="p-2 text-slate-300 hover:bg-slate-800 rounded-md transition-colors bg-slate-800">
<iconify-icon className="text-base" icon="solar:cursor-square-linear"></iconify-icon>
</button>
<div className="w-6 h-px bg-slate-800 my-1"></div>
<button className="p-2 text-slate-400 hover:text-slate-300 hover:bg-slate-800 rounded-md transition-colors">
<iconify-icon className="text-base" icon="solar:pen-linear"></iconify-icon>
</button>
<button className="p-2 text-slate-400 hover:text-slate-300 hover:bg-slate-800 rounded-md transition-colors">
<iconify-icon className="text-base" icon="solar:ruler-linear"></iconify-icon>
</button>
<button className="p-2 text-slate-400 hover:text-slate-300 hover:bg-slate-800 rounded-md transition-colors">
<iconify-icon className="text-base" icon="solar:text-square-linear"></iconify-icon>
</button>
<div className="w-6 h-px bg-slate-800 my-1"></div>
<button className="p-2 text-blue-400 hover:bg-slate-800 rounded-md transition-colors relative group">
<iconify-icon className="text-base" icon="solar:graph-up-linear"></iconify-icon>
<div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">SMC Tools</div>
</button>
<button className="p-2 text-slate-400 hover:text-slate-300 hover:bg-slate-800 rounded-md transition-colors">
<iconify-icon className="text-base" icon="solar:layers-linear"></iconify-icon>
</button>
<div className="mt-auto flex flex-col gap-2">
<button className="p-2 text-slate-400 hover:text-slate-300 hover:bg-slate-800 rounded-md transition-colors">
<iconify-icon className="text-base" icon="solar:magnet-linear"></iconify-icon>
</button>
<button className="p-2 text-slate-400 hover:text-slate-300 hover:bg-slate-800 rounded-md transition-colors">
<iconify-icon className="text-base" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 relative flex flex-col bg-[#0a0e17] overflow-hidden chart-grid">

<div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start pointer-events-none z-10">
<div className="flex flex-col gap-1 font-mono text-xs">
<div className="flex items-center gap-3">
<span className="text-slate-300 font-medium">BTCUSDT</span>
<span className="text-slate-500">15m</span>
<span className="text-slate-500">Binance</span>
</div>
<div className="flex gap-3 text-slate-400">
<span>O <span className="text-emerald-500">64210.50</span></span>
<span>H <span className="text-slate-300">64350.00</span></span>
<span>L <span className="text-slate-300">64180.25</span></span>
<span>C <span className="text-emerald-500">64305.80</span></span>
</div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
<span className="text-[12rem] font-semibold tracking-tighter">BTCUSDT</span>
</div>

<div className="absolute inset-0 pt-20 pb-10 px-10 relative pointer-events-none">

<div className="absolute right-0 top-[20%] w-full h-[30%] bg-rose-500/[0.02] border-t border-b border-rose-500/10 flex items-center justify-end pr-4">
<span className="text-rose-500/50 text-xs font-mono">Premium (Sell Zone) - 0.786</span>
</div>
<div className="absolute right-0 top-[50%] w-full h-px bg-slate-500/20 flex items-center justify-end pr-4">
<span className="text-slate-500 text-xs font-mono bg-[#0a0e17] px-1 translate-y-[-50%]">Equilibrium 0.5</span>
</div>
<div className="absolute right-0 top-[50%] w-full h-[30%] bg-emerald-500/[0.02] border-b border-emerald-500/10 flex items-end justify-end pr-4 pb-2">
<span className="text-emerald-500/50 text-xs font-mono">Discount (Buy Zone) - 0.618</span>
</div>

<div className="absolute left-[20%] top-[70%] w-[15%] h-px border-b-2 border-dashed border-rose-500/40">
<span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-rose-400 font-mono bg-[#0a0e17] px-1">SSL SWEEP</span>
</div>

<div className="absolute left-[40%] top-[60%] w-[10%] h-px border-b border-blue-500/50">
<span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] text-blue-400 font-mono bg-[#0a0e17] px-1">CHOCH</span>
</div>

<div className="absolute left-[45%] top-[65%] w-[4%] h-[8%] bg-amber-500/10 border-l border-r border-amber-500/30">
<span className="absolute top-1/2 -right-8 -translate-y-1/2 text-[10px] text-amber-500/70 font-mono">+FVG</span>
</div>

<div className="absolute left-[50%] top-[72%] w-[8%] h-[6%] bg-emerald-500/15 border border-emerald-500/40 rounded-sm">
<span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-emerald-500 font-mono font-medium">+OB Validated</span>
</div>

<div className="absolute left-[58%] top-[68%] w-1.5 h-8 bg-emerald-500"></div>
<div className="absolute left-[60%] top-[60%] w-1.5 h-12 bg-emerald-500"></div>
<div className="absolute left-[62%] top-[55%] w-1.5 h-10 bg-emerald-500"></div>
<div className="absolute left-[64%] top-[58%] w-1.5 h-6 bg-rose-500"></div>
<div className="absolute left-[66%] top-[50%] w-1.5 h-14 bg-emerald-500 relative">

<div className="absolute top-0 left-full w-[40vw] h-px bg-emerald-500 border-t border-dashed border-emerald-500 z-20"></div>
</div>

<div className="absolute right-0 top-[35%] w-[35%] h-px border-t border-dashed border-blue-400/50">
<span className="absolute -top-4 right-10 text-[10px] text-blue-400 font-mono">TP2: EQH (Internal Liq)</span>
</div>
</div>

<div className="absolute right-0 top-0 w-16 h-full bg-slate-950/80 border-l border-slate-800/60 flex flex-col justify-between py-10 font-mono text-[10px] text-slate-400 text-right pr-2 select-none z-10 backdrop-blur-sm">
<span>65000</span>
<span>64800</span>
<span>64600</span>
<span>64400</span>
<span className="text-emerald-500 bg-emerald-500/10 px-1 rounded">64305.8</span>
<span>64200</span>
<span>64000</span>
<span>63800</span>
</div>

<div className="absolute bottom-0 left-0 w-full h-8 bg-slate-950/80 border-t border-slate-800/60 flex justify-between px-20 items-center font-mono text-[10px] text-slate-400 select-none z-10 backdrop-blur-sm">
<span>08:00 (London Open)</span>
<span>09:00</span>
<span>10:00</span>
<span>11:00</span>
<span>12:00</span>
<span className="text-blue-400">13:30 (NY Open)</span>
<span>14:00</span>
</div>
</main>

<aside className="w-[340px] bg-slate-950 border-l border-slate-800/60 flex flex-col shrink-0 overflow-y-auto z-20 shadow-[-10px_0_20px_rgba(0,0,0,0.2)]">

<div className="flex border-b border-slate-800/60 p-1">
<button className="flex-1 py-1.5 text-xs font-medium bg-slate-800 text-slate-200 rounded shadow-sm">Analysis</button>
<button className="flex-1 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-300 transition-colors">Watchlist</button>
<button className="flex-1 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-300 transition-colors">History</button>
</div>
<div className="p-4 flex flex-col gap-5">

<div>
<h3 className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-2">Market Structure Model</h3>
<div className="grid grid-cols-2 gap-2">
<div className="bg-slate-900/50 border border-slate-800 rounded p-2 flex flex-col items-center justify-center">
<span className="text-[10px] text-slate-400 mb-1">HTF (4H) Trend</span>
<span className="text-xs font-medium text-emerald-500 flex items-center gap-1">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> Bullish
                            </span>
</div>
<div className="bg-slate-900/50 border border-slate-800 rounded p-2 flex flex-col items-center justify-center">
<span className="text-[10px] text-slate-400 mb-1">LTF (15m) Status</span>
<span className="text-xs font-medium text-blue-400 flex items-center gap-1">
                                Retracement
                            </span>
</div>
</div>
</div>
<div className="h-px bg-slate-800/60"></div>

<div>
<div className="flex items-center justify-between mb-3">
<h2 className="text-sm font-semibold tracking-tight text-slate-200">Live AI Signal</h2>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 animate-pulse">ACTIVE</span>
</div>

<div className="bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 rounded-lg p-3 relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<div>
<div className="text-emerald-500 font-medium text-lg tracking-tight mb-1">LONG BTCUSDT</div>
<div className="text-xs text-slate-400 font-mono">Generated: 2m ago</div>
</div>
<div className="text-right">
<div className="text-xs text-slate-400 mb-0.5">Risk/Reward</div>
<div className="text-sm font-medium text-slate-200">1 : 3.5</div>
</div>
</div>

<div className="space-y-2 mb-4 font-mono text-xs relative z-10">
<div className="flex justify-between items-center bg-slate-950/50 p-1.5 rounded border border-slate-800/50">
<span className="text-slate-500 w-12">ENTRY</span>
<span className="text-slate-200 font-medium">64,250.00</span>
<button className="text-slate-500 hover:text-blue-400"><iconify-icon icon="solar:copy-linear"></iconify-icon></button>
</div>
<div className="flex justify-between items-center bg-rose-500/5 p-1.5 rounded border border-rose-500/10">
<span className="text-rose-500/70 w-12">SL</span>
<span className="text-rose-400 font-medium">63,800.00</span>
<span className="text-rose-500/50 text-[10px]">-0.7%</span>
</div>
<div className="flex justify-between items-center bg-emerald-500/5 p-1.5 rounded border border-emerald-500/10">
<span className="text-emerald-500/70 w-12">TP1</span>
<span className="text-emerald-400 font-medium">65,825.00</span>
<span className="text-emerald-500/50 text-[10px]">+2.4%</span>
</div>
</div>

<div className="bg-slate-950 rounded border border-slate-800/80 p-2.5 relative z-10">
<div className="flex items-center gap-1.5 text-[10px] text-blue-400 mb-1.5 font-medium uppercase tracking-wider">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> AI Commentary
                            </div>
<p className="text-[11px] leading-relaxed text-slate-400">
                                Signal generated because price swept Sell-Side Liquidity (SSL) during London session, created a bullish CHOCH on 15m, and returned to a validated bullish Order Block overlapping with a Fair Value Gap in the 0.618 Fibonacci discount zone.
                            </p>
</div>
</div>
</div>
<div className="h-px bg-slate-800/60"></div>

<div>
<div className="flex justify-between items-end mb-3">
<h3 className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Confluence Score</h3>
<span className="text-xs font-semibold text-emerald-400">9/10 (A+ Setup)</span>
</div>

<div className="w-full h-1.5 bg-slate-800 rounded-full mb-3 overflow-hidden flex">
<div className="h-full bg-emerald-500 w-[90%]"></div>
</div>

<div className="space-y-1.5">
<div className="flex items-center justify-between text-[11px]">
<div className="flex items-center gap-2 text-slate-300">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
                                HTF Structure Alignment
                            </div>
<span className="text-slate-500">+3 pts</span>
</div>
<div className="flex items-center justify-between text-[11px]">
<div className="flex items-center gap-2 text-slate-300">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
                                Liquidity Sweep Validated
                            </div>
<span className="text-slate-500">+2 pts</span>
</div>
<div className="flex items-center justify-between text-[11px]">
<div className="flex items-center gap-2 text-slate-300">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
                                Untested Order Block
                            </div>
<span className="text-slate-500">+2 pts</span>
</div>
<div className="flex items-center justify-between text-[11px]">
<div className="flex items-center gap-2 text-slate-300">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
                                FVG Overlap
                            </div>
<span className="text-slate-500">+2 pts</span>
</div>
<div className="flex items-center justify-between text-[11px]">
<div className="flex items-center gap-2 text-slate-500 opacity-50">
<iconify-icon className="text-slate-600" icon="solar:close-circle-linear"></iconify-icon>
                                Volume Spike Confirmation
                            </div>
<span className="text-slate-600">0 pts</span>
</div>
</div>
</div>

<div className="mt-auto pt-4 flex gap-2">
<button className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium py-2 rounded transition-colors border border-slate-700">Dismiss</button>
<button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium py-2 rounded transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)]">Auto-Trade via API</button>
</div>
</div>
</aside>
</div>

    </>
  );
}
