import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-[#0A0A0A] relative z-20">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="h-8 w-8 bg-rose-600 flex items-center justify-center cyber-border shadow-[0_0_15px_rgba(225,29,72,0.4)]">
<i className="text-white w-5 h-5" data-lucide="zap"></i>
</div>
<span className="text-2xl font-semibold tracking-tight text-white group-hover:text-rose-500 transition-colors">NIGHT<span className="font-light text-rose-500">CORP</span></span>
</div>
<nav className="hidden lg:flex items-center gap-1">
<button className="px-4 py-1 text-rose-500 border-b-2 border-rose-500 bg-rose-500/5 font-mono text-sm tracking-widest shadow-[0_4px_12px_rgba(225,29,72,0.2)]">TRADE</button>
<button className="px-4 py-1 text-slate-400 hover:text-white hover:bg-white/5 border-b-2 border-transparent transition-all font-mono text-sm tracking-widest">MARKETS</button>
<button className="px-4 py-1 text-slate-400 hover:text-white hover:bg-white/5 border-b-2 border-transparent transition-all font-mono text-sm tracking-widest">WALLETS</button>
<button className="px-4 py-1 text-slate-400 hover:text-white hover:bg-white/5 border-b-2 border-transparent transition-all font-mono text-sm tracking-widest">ANALYSIS</button>
</nav>
</div>
<div className="flex items-center gap-6 font-mono">
<div className="flex flex-col items-end border-r border-white/10 pr-6">
<span className="text-xs text-slate-500 uppercase tracking-wider">Net Value</span>
<span className="text-lg text-[#00e600] text-shadow-green">€$ 147,803.00</span>
</div>
<div className="flex flex-col items-end">
<span className="text-xs text-slate-500 uppercase tracking-wider">Connection</span>
<span className="text-sm text-cyan-400 flex items-center gap-2">
                    ENCRYPTED <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
</span>
</div>
<div className="h-10 w-10 border border-white/20 flex items-center justify-center text-rose-500 hover:bg-rose-500 hover:text-white transition-colors cursor-pointer">
<i className="w-5 h-5" data-lucide="user"></i>
</div>
</div>
</header>
<main className="flex-1 flex overflow-hidden">

<aside className="w-72 border-r border-white/10 flex flex-col bg-[#080808] hidden md:flex">

<div className="p-4 border-b border-white/10">
<div className="relative group">
<i className="absolute left-3 top-2.5 w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" data-lucide="search"></i>
<input className="w-full bg-white/5 border border-white/10 py-2 pl-10 pr-4 text-sm font-mono text-cyan-400 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all cyber-border" placeholder="SEARCH ASSET" type="text"/>
</div>
</div>

<div className="flex-1 overflow-y-auto">
<div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
<span className="text-xs font-mono text-slate-400">PAIR</span>
<span className="text-xs font-mono text-slate-400">PRICE</span>
<span className="text-xs font-mono text-slate-400">24H</span>
</div>

<div className="group flex items-center justify-between px-4 py-3 border-b border-white/5 hover:bg-white/5 cursor-pointer border-l-2 border-l-transparent hover:border-l-rose-500 transition-all">
<div className="flex flex-col">
<span className="text-base font-semibold text-white group-hover:text-rose-500 tracking-tight">BTC/USD</span>
<span className="text-xs text-slate-500 font-mono">Bitcoin</span>
</div>
<div className="flex flex-col items-end">
<span className="text-base font-mono text-white">42,109.50</span>
<span className="text-xs font-mono text-[#00e600]">+2.45%</span>
</div>
</div>
<div className="group flex items-center justify-between px-4 py-3 border-b border-white/5 hover:bg-white/5 cursor-pointer border-l-2 border-l-transparent hover:border-l-rose-500 transition-all">
<div className="flex flex-col">
<span className="text-base font-semibold text-white group-hover:text-rose-500 tracking-tight">ETH/USD</span>
<span className="text-xs text-slate-500 font-mono">Ethereum</span>
</div>
<div className="flex flex-col items-end">
<span className="text-base font-mono text-white">2,450.10</span>
<span className="text-xs font-mono text-[#ff003c]">-0.89%</span>
</div>
</div>
<div className="group flex items-center justify-between px-4 py-3 border-b border-white/5 hover:bg-white/5 cursor-pointer border-l-2 border-l-transparent hover:border-l-rose-500 transition-all bg-white/[0.02]">
<div className="flex flex-col">
<span className="text-base font-semibold text-cyan-400 tracking-tight">SOL/USD</span>
<span className="text-xs text-slate-500 font-mono">Solana</span>
</div>
<div className="flex flex-col items-end">
<span className="text-base font-mono text-cyan-400">98.45</span>
<span className="text-xs font-mono text-[#00e600]">+12.30%</span>
</div>
</div>
<div className="group flex items-center justify-between px-4 py-3 border-b border-white/5 hover:bg-white/5 cursor-pointer border-l-2 border-l-transparent hover:border-l-rose-500 transition-all">
<div className="flex flex-col">
<span className="text-base font-semibold text-white group-hover:text-rose-500 tracking-tight">LINK/USD</span>
<span className="text-xs text-slate-500 font-mono">Chainlink</span>
</div>
<div className="flex flex-col items-end">
<span className="text-base font-mono text-white">15.20</span>
<span className="text-xs font-mono text-[#00e600]">+1.12%</span>
</div>
</div>
</div>

<div className="p-4 border-t border-white/10 bg-[#0c0c0c]">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-mono text-slate-500">SYSTEM LOAD</span>
<span className="text-xs font-mono text-rose-500">89%</span>
</div>
<div className="h-1 w-full bg-slate-800 relative">
<div className="absolute h-full w-[89%] bg-rose-500 shadow-[0_0_8px_rgba(225,29,72,0.8)]"></div>
</div>
</div>
</aside>

<section className="flex-1 flex flex-col relative bg-[#0A0A0A] grid-bg">

<div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-[#0A0A0A]/80 backdrop-blur-sm">
<div className="flex items-center gap-6">
<h1 className="text-2xl font-semibold tracking-tight text-white flex items-center gap-2">
                        SOL/USD <span className="text-xs font-mono text-cyan-400 border border-cyan-400/30 px-1 py-0.5 rounded-sm">PERP</span>
</h1>
<div className="h-6 w-px bg-white/10"></div>
<div className="flex items-center gap-4">
<span className="font-mono text-lg text-[#00e600]">98.45</span>
<span className="font-mono text-xs text-slate-400">Index: 98.42</span>
<span className="font-mono text-xs text-slate-400">24h Vol: <span className="text-white">4.2M</span></span>
</div>
</div>
<div className="flex items-center gap-1 font-mono text-sm">
<button className="px-3 py-1 hover:text-cyan-400 transition-colors">15m</button>
<button className="px-3 py-1 text-cyan-400 bg-cyan-950/30 border border-cyan-400/30 cyber-border">1H</button>
<button className="px-3 py-1 hover:text-cyan-400 transition-colors">4H</button>
<button className="px-3 py-1 hover:text-cyan-400 transition-colors">1D</button>
<div className="ml-4 flex gap-2 text-slate-500">
<i className="w-4 h-4 hover:text-white cursor-pointer" data-lucide="bar-chart-2"></i>
<i className="w-4 h-4 hover:text-white cursor-pointer" data-lucide="settings"></i>
<i className="w-4 h-4 hover:text-white cursor-pointer" data-lucide="camera"></i>
</div>
</div>
</div>

<div className="flex-1 relative p-6 flex items-end gap-[1%] px-10 border-b border-white/10">

<div className="absolute inset-0 pointer-events-none">
<div className="w-full h-1/4 border-b border-white/5 border-dashed"></div>
<div className="w-full h-1/4 border-b border-white/5 border-dashed top-1/4 absolute"></div>
<div className="w-full h-1/4 border-b border-white/5 border-dashed top-2/4 absolute"></div>
</div>


<div className="w-full h-[30%] bg-[#00e600]/20 border border-[#00e600] relative group">
<div className="absolute left-1/2 -translate-x-1/2 -top-8 h-[calc(100%+60px)] w-px bg-[#00e600]"></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-12 left-1/2 text-xs font-mono text-[#00e600] bg-black/80 px-2 border border-[#00e600] z-10 transition-opacity">94.20</div>
</div>
<div className="w-full h-[45%] bg-[#00e600]/20 border border-[#00e600] relative mb-[10%]"><div className="absolute left-1/2 -translate-x-1/2 -top-4 h-[calc(100%+30px)] w-px bg-[#00e600]"></div></div>

<div className="w-full h-[20%] bg-[#ff003c]/20 border border-[#ff003c] relative mb-[35%]"><div className="absolute left-1/2 -translate-x-1/2 -top-12 h-[calc(100%+60px)] w-px bg-[#ff003c]"></div></div>
<div className="w-full h-[15%] bg-[#ff003c]/20 border border-[#ff003c] relative mb-[20%]"><div className="absolute left-1/2 -translate-x-1/2 -top-2 h-[calc(100%+10px)] w-px bg-[#ff003c]"></div></div>

<div className="w-full h-[35%] bg-[#00e600]/20 border border-[#00e600] relative mb-[5%]"><div className="absolute left-1/2 -translate-x-1/2 -top-8 h-[calc(100%+50px)] w-px bg-[#00e600]"></div></div>
<div className="w-full h-[55%] bg-[#00e600]/20 border border-[#00e600] relative mb-[10%]"><div className="absolute left-1/2 -translate-x-1/2 -top-12 h-[calc(100%+80px)] w-px bg-[#00e600]"></div></div>
<div className="w-full h-[25%] bg-[#00e600]/20 border border-[#00e600] relative mb-[40%]"><div className="absolute left-1/2 -translate-x-1/2 -top-4 h-[calc(100%+20px)] w-px bg-[#00e600]"></div></div>

<div className="w-full h-[40%] bg-[#ff003c]/20 border border-[#ff003c] relative mb-[25%]"><div className="absolute left-1/2 -translate-x-1/2 -top-6 h-[calc(100%+25px)] w-px bg-[#ff003c]"></div></div>

<div className="w-full h-[10%] bg-[#00e600]/20 border border-[#00e600] relative mb-[25%]"><div className="absolute left-1/2 -translate-x-1/2 -top-8 h-[calc(100%+40px)] w-px bg-[#00e600]"></div></div>
<div className="w-full h-[60%] bg-[#00e600]/20 border border-[#00e600] relative mb-[30%] shadow-[0_0_20px_rgba(0,230,0,0.2)]">
<div className="absolute left-1/2 -translate-x-1/2 -top-10 h-[calc(100%+50px)] w-px bg-[#00e600]"></div>
</div>

<div className="absolute right-0 top-[30%] w-full border-t border-dashed border-[#00e600] flex items-center justify-end pointer-events-none opacity-80">
<span className="bg-[#00e600] text-black font-mono text-xs px-2 py-0.5">98.45</span>
</div>
</div>

<div className="h-64 bg-[#0A0A0A] flex flex-col">
<div className="flex items-center gap-6 px-6 py-2 border-b border-white/10 text-xs font-mono tracking-widest">
<button className="text-cyan-400 border-b border-cyan-400 pb-2 -mb-2.5">POSITIONS (1)</button>
<button className="text-slate-500 hover:text-white transition-colors">OPEN ORDERS</button>
<button className="text-slate-500 hover:text-white transition-colors">HISTORY</button>
<button className="text-slate-500 hover:text-white transition-colors">TRANSFERS</button>
</div>
<div className="flex-1 overflow-auto p-4">
<table className="w-full text-left">
<thead>
<tr className="text-xs font-mono text-slate-500 border-b border-white/10">
<th className="pb-2 font-light">SYMBOL</th>
<th className="pb-2 font-light">SIZE</th>
<th className="pb-2 font-light">ENTRY PRICE</th>
<th className="pb-2 font-light">MARK PRICE</th>
<th className="pb-2 font-light">LIQ. PRICE</th>
<th className="pb-2 font-light text-right">PNL (ROE%)</th>
</tr>
</thead>
<tbody>
<tr className="text-sm font-mono border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-3 text-cyan-400 flex items-center gap-2">
<span className="text-[#00e600]">●</span> SOL/USD
                                </td>
<td className="py-3 text-white">450.00 SOL</td>
<td className="py-3 text-slate-300">87.50</td>
<td className="py-3 text-slate-300">98.45</td>
<td className="py-3 text-rose-500">12.40</td>
<td className="py-3 text-right">
<span className="text-[#00e600] text-shadow-green">+4,927.50 (12.5%)</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="absolute bottom-4 left-4 text-[10px] font-mono text-white/10 pointer-events-none select-none">
                01001011 01010010 00100000 01101111 01100110 01100110
            </div>
</section>

<aside className="w-80 border-l border-white/10 bg-[#0c0c0c] flex flex-col z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]">

<div className="p-3 border-b border-white/10 flex justify-between items-center">
<span className="text-sm font-semibold tracking-tight text-white">ORDER BOOK</span>
<div className="flex gap-2">
<div className="w-1 h-1 bg-slate-500 rounded-full"></div>
<div className="w-1 h-1 bg-slate-500 rounded-full"></div>
<div className="w-1 h-1 bg-slate-500 rounded-full"></div>
</div>
</div>

<div className="flex-1 overflow-hidden flex flex-col text-xs font-mono">

<div className="flex justify-between px-3 py-1 text-slate-500 mb-1">
<span>PRICE</span>
<span>SIZE</span>
<span>TOTAL</span>
</div>

<div className="flex-1 flex flex-col justify-end overflow-hidden pb-1 space-y-0.5">
<div className="flex justify-between px-3 py-0.5 hover:bg-[#ff003c]/10 cursor-pointer relative group">
<span className="text-[#ff003c]">98.50</span>
<span className="text-slate-300">452</span>
<span className="text-slate-400">452</span>
<div className="absolute top-0 right-0 h-full bg-[#ff003c]/10 w-[10%]"></div>
</div>
<div className="flex justify-between px-3 py-0.5 hover:bg-[#ff003c]/10 cursor-pointer relative">
<span className="text-[#ff003c]">98.49</span>
<span className="text-slate-300">1.2K</span>
<span className="text-slate-400">1.6K</span>
<div className="absolute top-0 right-0 h-full bg-[#ff003c]/10 w-[30%]"></div>
</div>
<div className="flex justify-between px-3 py-0.5 hover:bg-[#ff003c]/10 cursor-pointer relative">
<span className="text-[#ff003c]">98.48</span>
<span className="text-slate-300">800</span>
<span className="text-slate-400">2.4K</span>
<div className="absolute top-0 right-0 h-full bg-[#ff003c]/10 w-[20%]"></div>
</div>
<div className="flex justify-between px-3 py-0.5 hover:bg-[#ff003c]/10 cursor-pointer relative">
<span className="text-[#ff003c]">98.47</span>
<span className="text-slate-300">240</span>
<span className="text-slate-400">2.6K</span>
<div className="absolute top-0 right-0 h-full bg-[#ff003c]/10 w-[5%]"></div>
</div>
<div className="flex justify-between px-3 py-0.5 hover:bg-[#ff003c]/10 cursor-pointer relative">
<span className="text-[#ff003c]">98.46</span>
<span className="text-slate-300">10K</span>
<span className="text-slate-400">12K</span>
<div className="absolute top-0 right-0 h-full bg-[#ff003c]/10 w-[80%]"></div>
</div>
</div>

<div className="py-2 px-3 border-y border-white/10 bg-[#161616] flex justify-between items-center my-1">
<span className="text-lg text-white font-bold tracking-tighter">98.45</span>
<i className="w-3 h-3 text-[#00e600]" data-lucide="arrow-up"></i>
</div>

<div className="flex-1 overflow-hidden pt-1 space-y-0.5">
<div className="flex justify-between px-3 py-0.5 hover:bg-[#00e600]/10 cursor-pointer relative">
<span className="text-[#00e600]">98.44</span>
<span className="text-slate-300">500</span>
<span className="text-slate-400">500</span>
<div className="absolute top-0 right-0 h-full bg-[#00e600]/10 w-[15%]"></div>
</div>
<div className="flex justify-between px-3 py-0.5 hover:bg-[#00e600]/10 cursor-pointer relative">
<span className="text-[#00e600]">98.43</span>
<span className="text-slate-300">1.5K</span>
<span className="text-slate-400">2.0K</span>
<div className="absolute top-0 right-0 h-full bg-[#00e600]/10 w-[35%]"></div>
</div>
<div className="flex justify-between px-3 py-0.5 hover:bg-[#00e600]/10 cursor-pointer relative">
<span className="text-[#00e600]">98.42</span>
<span className="text-slate-300">200</span>
<span className="text-slate-400">2.2K</span>
<div className="absolute top-0 right-0 h-full bg-[#00e600]/10 w-[5%]"></div>
</div>
<div className="flex justify-between px-3 py-0.5 hover:bg-[#00e600]/10 cursor-pointer relative">
<span className="text-[#00e600]">98.41</span>
<span className="text-slate-300">4.5K</span>
<span className="text-slate-400">6.7K</span>
<div className="absolute top-0 right-0 h-full bg-[#00e600]/10 w-[60%]"></div>
</div>
<div className="flex justify-between px-3 py-0.5 hover:bg-[#00e600]/10 cursor-pointer relative">
<span className="text-[#00e600]">98.40</span>
<span className="text-slate-300">12K</span>
<span className="text-slate-400">18K</span>
<div className="absolute top-0 right-0 h-full bg-[#00e600]/10 w-[90%]"></div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/10 bg-[#0A0A0A]">
<div className="flex gap-1 mb-4 bg-white/5 p-1 cyber-border">
<button className="flex-1 py-1.5 text-sm font-semibold bg-[#00e600] text-black shadow-[0_0_10px_rgba(0,230,0,0.5)] cyber-border">BUY</button>
<button className="flex-1 py-1.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors">SELL</button>
</div>
<div className="space-y-3">
<div className="space-y-1">
<div className="flex justify-between text-[10px] text-slate-500 font-mono">
<span>TYPE</span>
<span className="text-cyan-400">LIMIT</span>
</div>
<div className="relative">
<input className="w-full bg-[#111] border border-white/10 py-2 px-3 text-right font-mono text-white text-sm focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all cyber-border" type="text" value="98.45"/>
<span className="absolute left-3 top-2 text-xs text-slate-500">PRICE</span>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between text-[10px] text-slate-500 font-mono">
<span>AMOUNT</span>
<span>Max: 400 SOL</span>
</div>
<div className="relative">
<input className="w-full bg-[#111] border border-white/10 py-2 px-3 text-right font-mono text-white text-sm focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all cyber-border" type="text" value="10.0"/>
<span className="absolute left-3 top-2 text-xs text-slate-500">SOL</span>
</div>
</div>
<div className="pt-2">
<div className="flex justify-between text-xs text-slate-400 font-mono mb-1">
<span>Margin</span>
<span className="text-white">20x</span>
</div>
<input className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-3 [&amp;::-webkit-slider-thumb]:h-3 [&amp;::-webkit-slider-thumb]:bg-cyan-400 [&amp;::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(34,211,238,1)]" type="range"/>
</div>
<button className="w-full mt-4 py-3 bg-cyan-950/30 border border-cyan-400 text-cyan-400 font-semibold tracking-widest cyber-border hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all cyber-glitch">
                        LONG SOL
                    </button>
</div>
</div>
</aside>
</main>
<footer className="h-6 bg-[#050505] border-t border-white/10 flex items-center px-4 justify-between text-[10px] text-slate-600 font-mono uppercase tracking-widest">
<div className="flex gap-4">
<span className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-[#00e600] rounded-full"></div> Operational</span>
<span>Latency: 12ms</span>
<span>v.2.0.77</span>
</div>
<div className="flex gap-4">
<span>Server: NightCity-1</span>
<span>Support</span>
</div>
</footer>


    </>
  );
}
