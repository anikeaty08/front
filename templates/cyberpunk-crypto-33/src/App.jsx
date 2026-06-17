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
      

<header className="h-12 border-b border-zinc-800/60 bg-[#0A0A0A] flex items-center justify-between px-4 shrink-0 z-20">
<div className="flex items-center gap-6">

<div className="flex items-center gap-2 text-zinc-100 tracking-tight font-medium group cursor-pointer">
<div className="w-6 h-6 bg-zinc-900 border border-zinc-700 flex items-center justify-center rounded-sm group-hover:border-cyan-500/50 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-300">
<iconify-icon className="text-zinc-100" icon="lucide:box" width="14"></iconify-icon>
</div>
<span className="text-sm tracking-widest font-semibold">NEXUS<span className="text-cyan-500">.TERMINAL</span></span>
</div>

<div className="hidden md:flex items-center gap-4 text-xs font-mono border-l border-zinc-800 pl-6 h-6">
<div className="flex items-center gap-2">
<span className="text-zinc-500">BTC/USD</span>
<span className="text-green-400">42,931.50</span>
</div>
<div className="flex items-center gap-2">
<span className="text-zinc-500">ETH/USD</span>
<span className="text-red-400">2,410.20</span>
</div>
<div className="flex items-center gap-2">
<span className="text-zinc-500">SOL/USD</span>
<span className="text-green-400">98.45</span>
</div>
</div>
</div>

<div className="flex items-center gap-4">
<div className="flex items-center gap-1 text-xs font-mono bg-zinc-900/50 border border-zinc-800/50 rounded px-2 py-1">
<span className="w-2 h-2 rounded-full bg-green-500 live-indicator"></span>
<span className="text-green-500">CONNECTED</span>
<span className="text-zinc-600 ml-1">14ms</span>
</div>
<button className="p-1.5 hover:text-cyan-400 transition-colors">
<iconify-icon icon="lucide:bell" width="16"></iconify-icon>
</button>
<button className="p-1.5 hover:text-cyan-400 transition-colors">
<iconify-icon icon="lucide:settings" width="16"></iconify-icon>
</button>
<div className="w-7 h-7 bg-gradient-to-tr from-cyan-900 to-blue-900 rounded-full border border-zinc-700 flex items-center justify-center text-xs text-white font-medium cursor-pointer hover:border-cyan-500 transition-colors">
                OX
            </div>
</div>
</header>

<main className="flex-1 flex overflow-hidden">

<aside className="w-14 border-r border-zinc-800/60 bg-[#0C0C0C] flex flex-col items-center py-4 gap-4 shrink-0 z-10">
<button className="p-2.5 rounded text-cyan-400 bg-cyan-950/20 border border-cyan-900/50 shadow-[0_0_8px_rgba(6,182,212,0.15)] relative">
<iconify-icon icon="lucide:bar-chart-2" width="18"></iconify-icon>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-cyan-500 rounded-r shadow-[0_0_8px_#06b6d4]"></div>
</button>
<button className="p-2.5 rounded text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900 transition-all">
<iconify-icon icon="lucide:wallet" width="18"></iconify-icon>
</button>
<button className="p-2.5 rounded text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900 transition-all">
<iconify-icon icon="lucide:history" width="18"></iconify-icon>
</button>
<button className="p-2.5 rounded text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900 transition-all">
<iconify-icon icon="lucide:layers" width="18"></iconify-icon>
</button>
<div className="flex-1"></div>
<button className="p-2.5 rounded text-zinc-500 hover:text-red-400 hover:bg-red-950/20 transition-all">
<iconify-icon icon="lucide:log-out" width="18"></iconify-icon>
</button>
</aside>

<section className="flex-1 flex flex-col min-w-0 relative">

<div className="h-14 border-b border-zinc-800/60 flex items-center justify-between px-4 shrink-0 bg-[#0A0A0A]">
<div className="flex items-center gap-4">
<div className="flex flex-col">
<div className="flex items-baseline gap-2">
<h1 className="text-zinc-100 font-semibold tracking-tight text-lg">BTC/USD</h1>
<span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-1 rounded border border-zinc-800">PERP</span>
</div>
</div>
<div className="h-8 w-px bg-zinc-800 mx-2"></div>
<div className="flex flex-col font-mono">
<span className="text-[10px] text-zinc-500 uppercase">Last Price</span>
<span className="text-sm text-green-400 font-medium tracking-tight">42,931.50</span>
</div>
<div className="flex flex-col font-mono">
<span className="text-[10px] text-zinc-500 uppercase">24h Change</span>
<span className="text-sm text-green-400 font-medium tracking-tight">+2.45%</span>
</div>
<div className="flex flex-col font-mono hidden lg:flex">
<span className="text-[10px] text-zinc-500 uppercase">24h Vol</span>
<span className="text-sm text-zinc-300 font-medium tracking-tight">842.1M</span>
</div>
</div>

<div className="flex bg-zinc-900/50 p-0.5 rounded border border-zinc-800">
<button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">15m</button>
<button className="px-3 py-1 text-xs font-medium text-zinc-100 bg-zinc-800 rounded shadow-sm">1H</button>
<button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">4H</button>
<button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">1D</button>
<button className="px-2 py-1 text-zinc-500 hover:text-zinc-300 border-l border-zinc-700/50 ml-1">
<iconify-icon icon="lucide:chevron-down" width="12"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 relative bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBMMCAwTDQwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIyMjIyMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')]">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="text-6xl font-bold tracking-tighter text-zinc-800/30">BTC/USD</span>
</div>

<div className="absolute inset-0 flex items-end justify-around px-10 pb-10 pt-20 gap-1 overflow-hidden opacity-90">


<div className="relative w-full h-full group flex flex-col justify-end items-center pb-[30%]">
<div className="w-[1px] h-[120px] bg-green-500/50 absolute bottom-[25%]"></div>
<div className="w-full max-w-[8px] h-[60px] bg-green-500/90 shadow-[0_0_8px_rgba(34,197,94,0.3)] z-10 hover:brightness-110 cursor-crosshair"></div>
</div>

<div className="relative w-full h-full group flex flex-col justify-end items-center pb-[38%]">
<div className="w-[1px] h-[90px] bg-red-500/50 absolute bottom-[35%]"></div>
<div className="w-full max-w-[8px] h-[40px] bg-red-500/90 shadow-[0_0_8px_rgba(239,68,68,0.3)] z-10"></div>
</div>

<div className="relative w-full h-full group flex flex-col justify-end items-center pb-[42%]">
<div className="w-[1px] h-[140px] bg-green-500/50 absolute bottom-[38%]"></div>
<div className="w-full max-w-[8px] h-[85px] bg-green-500/90 shadow-[0_0_8px_rgba(34,197,94,0.3)] z-10"></div>
</div>

<div className="relative w-full h-full group flex flex-col justify-end items-center pb-[20%]">
<div className="w-[1px] h-[200px] bg-red-500/50 absolute bottom-[15%]"></div>
<div className="w-full max-w-[8px] h-[120px] bg-red-500/90 shadow-[0_0_8px_rgba(239,68,68,0.3)] z-10"></div>
</div>

<div className="relative w-full h-full group flex flex-col justify-end items-center pb-[25%]">
<div className="w-[1px] h-[80px] bg-green-500/50 absolute bottom-[22%]"></div>
<div className="w-full max-w-[8px] h-[30px] bg-green-500/90 shadow-[0_0_8px_rgba(34,197,94,0.3)] z-10"></div>
</div>

<div className="relative w-full h-full group flex flex-col justify-end items-center pb-[28%]">
<div className="w-[1px] h-[100px] bg-green-500/50 absolute bottom-[26%]"></div>
<div className="w-full max-w-[8px] h-[50px] bg-green-500/90 shadow-[0_0_8px_rgba(34,197,94,0.3)] z-10"></div>
</div>

<div className="relative w-full h-full group flex flex-col justify-end items-center pb-[31%]">
<div className="w-[1px] h-[50px] bg-red-500/50 absolute bottom-[29%]"></div>
<div className="w-full max-w-[8px] h-[20px] bg-red-500/90 shadow-[0_0_8px_rgba(239,68,68,0.3)] z-10"></div>
</div>

<div className="relative w-full h-full group flex flex-col justify-end items-center pb-[45%]">
<div className="w-[1px] h-[180px] bg-green-500/50 absolute bottom-[40%]"></div>
<div className="w-full max-w-[8px] h-[140px] bg-green-500/90 shadow-[0_0_15px_rgba(34,197,94,0.4)] z-10 relative">

<div className="absolute top-0 -right-[50vw] w-[100vw] h-[1px] border-t border-dashed border-zinc-600/50 hidden group-hover:block pointer-events-none"></div>
</div>
</div>

<div className="relative w-full h-full group flex flex-col justify-end items-center pb-[50%]">
<div className="w-[1px] h-[90px] bg-green-500/50 absolute bottom-[48%] animate-pulse"></div>
<div className="w-full max-w-[8px] h-[45px] bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] z-10 live-indicator">

<div className="absolute top-0 right-0 translate-x-[110%] -translate-y-1/2 bg-green-500 text-black text-[10px] font-mono font-bold px-1 rounded-sm whitespace-nowrap z-20">
                                42,931.50
                            </div>
<div className="absolute top-0 right-0 w-[50vw] h-[1px] bg-green-500/50 z-0"></div>
</div>
</div>

<div className="w-full max-w-[8px] h-full"></div>
<div className="w-full max-w-[8px] h-full"></div>
<div className="w-full max-w-[8px] h-full"></div>
</div>
</div>

<div className="h-48 border-t border-zinc-800/60 bg-[#0A0A0A] flex flex-col">
<div className="flex items-center border-b border-zinc-800/60">
<button className="px-4 py-2 text-xs font-medium text-cyan-400 border-b-2 border-cyan-400 bg-cyan-950/10">Open Orders (2)</button>
<button className="px-4 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">Positions (0)</button>
<button className="px-4 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">Trade History</button>
<button className="px-4 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">Funds</button>
</div>
<div className="flex-1 overflow-auto p-0">
<table className="w-full text-left border-collapse">
<thead className="sticky top-0 bg-[#0A0A0A] z-10 text-[10px] uppercase text-zinc-500 font-mono tracking-wider">
<tr>
<th className="py-2 px-4 font-normal">Time</th>
<th className="py-2 px-4 font-normal">Pair</th>
<th className="py-2 px-4 font-normal">Type</th>
<th className="py-2 px-4 font-normal">Side</th>
<th className="py-2 px-4 font-normal text-right">Price</th>
<th className="py-2 px-4 font-normal text-right">Amount</th>
<th className="py-2 px-4 font-normal text-right">Filled</th>
<th className="py-2 px-4 font-normal text-right">Action</th>
</tr>
</thead>
<tbody className="text-xs font-mono text-zinc-300 divide-y divide-zinc-900">
<tr className="hover:bg-zinc-900/40 transition-colors group">
<td className="py-2.5 px-4 text-zinc-500">14:02:45</td>
<td className="py-2.5 px-4 font-semibold">BTC-PERP</td>
<td className="py-2.5 px-4 text-zinc-400">Limit</td>
<td className="py-2.5 px-4 text-green-400">Buy</td>
<td className="py-2.5 px-4 text-right">42,500.00</td>
<td className="py-2.5 px-4 text-right">0.500 BTC</td>
<td className="py-2.5 px-4 text-right">0.00%</td>
<td className="py-2.5 px-4 text-right">
<button className="text-zinc-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all">Cancel</button>
</td>
</tr>
<tr className="hover:bg-zinc-900/40 transition-colors group">
<td className="py-2.5 px-4 text-zinc-500">12:30:11</td>
<td className="py-2.5 px-4 font-semibold">ETH-PERP</td>
<td className="py-2.5 px-4 text-zinc-400">Limit</td>
<td className="py-2.5 px-4 text-red-400">Sell</td>
<td className="py-2.5 px-4 text-right">2,450.00</td>
<td className="py-2.5 px-4 text-right">10.00 ETH</td>
<td className="py-2.5 px-4 text-right">45.5%</td>
<td className="py-2.5 px-4 text-right">
<button className="text-zinc-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all">Cancel</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<aside className="w-72 border-l border-zinc-800/60 bg-[#0C0C0C] flex flex-col shrink-0">

<div className="px-3 py-2 border-b border-zinc-800/60 flex items-center justify-between">
<span className="text-xs font-medium text-zinc-400">Order Book</span>
<div className="flex gap-1">
<button className="p-1 hover:bg-zinc-800 rounded text-zinc-500 hover:text-zinc-300">
<iconify-icon icon="lucide:more-horizontal" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 flex flex-col min-h-0 font-mono text-[11px]">

<div className="flex justify-between px-3 py-1 text-zinc-600 uppercase text-[10px] tracking-wide">
<span>Price</span>
<span>Amount</span>
<span>Total</span>
</div>

<div className="flex-1 overflow-hidden flex flex-col justify-end gap-[1px] pb-1">

<div className="flex relative items-center px-3 py-0.5 cursor-pointer hover:bg-zinc-900 group">
<div className="absolute right-0 top-0 bottom-0 bg-red-900/20 w-[30%]"></div>
<span className="text-red-400 w-1/3 z-10">42,945.50</span>
<span className="text-zinc-400 w-1/3 text-right z-10">0.024</span>
<span className="text-zinc-500 w-1/3 text-right z-10">4.12</span>
</div>
<div className="flex relative items-center px-3 py-0.5 cursor-pointer hover:bg-zinc-900">
<div className="absolute right-0 top-0 bottom-0 bg-red-900/20 w-[15%]"></div>
<span className="text-red-400 w-1/3 z-10">42,944.00</span>
<span className="text-zinc-400 w-1/3 text-right z-10">0.550</span>
<span className="text-zinc-500 w-1/3 text-right z-10">4.10</span>
</div>
<div className="flex relative items-center px-3 py-0.5 cursor-pointer hover:bg-zinc-900">
<div className="absolute right-0 top-0 bottom-0 bg-red-900/20 w-[60%]"></div>
<span className="text-red-400 w-1/3 z-10">42,940.00</span>
<span className="text-zinc-400 w-1/3 text-right z-10">1.240</span>
<span className="text-zinc-500 w-1/3 text-right z-10">3.55</span>
</div>
<div className="flex relative items-center px-3 py-0.5 cursor-pointer hover:bg-zinc-900">
<div className="absolute right-0 top-0 bottom-0 bg-red-900/20 w-[45%]"></div>
<span className="text-red-400 w-1/3 z-10">42,938.50</span>
<span className="text-zinc-400 w-1/3 text-right z-10">0.890</span>
<span className="text-zinc-500 w-1/3 text-right z-10">2.31</span>
</div>
<div className="flex relative items-center px-3 py-0.5 cursor-pointer hover:bg-zinc-900">
<div className="absolute right-0 top-0 bottom-0 bg-red-900/20 w-[20%]"></div>
<span className="text-red-400 w-1/3 z-10">42,935.00</span>
<span className="text-zinc-400 w-1/3 text-right z-10">0.150</span>
<span className="text-zinc-500 w-1/3 text-right z-10">1.42</span>
</div>
</div>

<div className="py-2 border-y border-zinc-800/60 bg-zinc-900/30 flex items-center justify-center gap-2">
<span className="text-lg font-medium text-white tracking-tight">42,931.50</span>
<iconify-icon className="text-green-500" icon="lucide:arrow-up" width="14"></iconify-icon>
<span className="text-xs text-zinc-500">$42,931.50</span>
</div>

<div className="flex-1 overflow-hidden flex flex-col justify-start gap-[1px] pt-1">
<div className="flex relative items-center px-3 py-0.5 cursor-pointer hover:bg-zinc-900">
<div className="absolute right-0 top-0 bottom-0 bg-green-900/20 w-[10%]"></div>
<span className="text-green-400 w-1/3 z-10">42,930.00</span>
<span className="text-zinc-400 w-1/3 text-right z-10">0.110</span>
<span className="text-zinc-500 w-1/3 text-right z-10">0.11</span>
</div>
<div className="flex relative items-center px-3 py-0.5 cursor-pointer hover:bg-zinc-900">
<div className="absolute right-0 top-0 bottom-0 bg-green-900/20 w-[55%]"></div>
<span className="text-green-400 w-1/3 z-10">42,928.50</span>
<span className="text-zinc-400 w-1/3 text-right z-10">1.500</span>
<span className="text-zinc-500 w-1/3 text-right z-10">1.61</span>
</div>
<div className="flex relative items-center px-3 py-0.5 cursor-pointer hover:bg-zinc-900">
<div className="absolute right-0 top-0 bottom-0 bg-green-900/20 w-[30%]"></div>
<span className="text-green-400 w-1/3 z-10">42,925.00</span>
<span className="text-zinc-400 w-1/3 text-right z-10">0.650</span>
<span className="text-zinc-500 w-1/3 text-right z-10">2.26</span>
</div>
<div className="flex relative items-center px-3 py-0.5 cursor-pointer hover:bg-zinc-900">
<div className="absolute right-0 top-0 bottom-0 bg-green-900/20 w-[80%]"></div>
<span className="text-green-400 w-1/3 z-10">42,922.00</span>
<span className="text-zinc-400 w-1/3 text-right z-10">3.200</span>
<span className="text-zinc-500 w-1/3 text-right z-10">5.46</span>
</div>
<div className="flex relative items-center px-3 py-0.5 cursor-pointer hover:bg-zinc-900">
<div className="absolute right-0 top-0 bottom-0 bg-green-900/20 w-[40%]"></div>
<span className="text-green-400 w-1/3 z-10">42,920.00</span>
<span className="text-zinc-400 w-1/3 text-right z-10">0.900</span>
<span className="text-zinc-500 w-1/3 text-right z-10">6.36</span>
</div>
</div>
</div>

<div className="p-3 border-t border-zinc-800/60 bg-[#0A0A0A]">

<div className="flex bg-zinc-900 p-0.5 rounded border border-zinc-800 mb-3">
<button className="flex-1 py-1.5 text-xs font-medium text-zinc-100 bg-zinc-800 rounded shadow-sm">Limit</button>
<button className="flex-1 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">Market</button>
<button className="flex-1 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">Stop</button>
</div>

<div className="space-y-2 mb-3">
<div className="relative group">
<span className="absolute left-3 top-2 text-[10px] text-zinc-500 uppercase font-mono">Price (USD)</span>
<input className="w-full bg-[#0C0C0C] border border-zinc-800 rounded px-3 pt-5 pb-1 text-sm font-mono text-zinc-200 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all placeholder-zinc-700" type="number" value="42931.5"/>
</div>
<div className="relative group">
<span className="absolute left-3 top-2 text-[10px] text-zinc-500 uppercase font-mono">Amount (BTC)</span>
<input className="w-full bg-[#0C0C0C] border border-zinc-800 rounded px-3 pt-5 pb-1 text-sm font-mono text-zinc-200 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all placeholder-zinc-700" placeholder="0.00" type="number"/>
</div>
</div>

<div className="mb-4 px-1">
<div className="flex justify-between text-[10px] text-zinc-500 mb-1">
<span>Leverage</span>
<span className="text-cyan-400 font-mono">20x</span>
</div>
<div className="h-1.5 bg-zinc-800 rounded-full relative cursor-pointer group">
<div className="absolute left-0 top-0 bottom-0 w-[40%] bg-gradient-to-r from-cyan-900 to-cyan-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.4)]"></div>
<div className="absolute left-[40%] top-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-100 rounded-full border border-cyan-500 shadow-md group-hover:scale-110 transition-transform"></div>

<div className="absolute top-2 w-full flex justify-between px-0.5">
<span className="w-px h-1 bg-zinc-800"></span>
<span className="w-px h-1 bg-zinc-800"></span>
<span className="w-px h-1 bg-zinc-800"></span>
<span className="w-px h-1 bg-zinc-800"></span>
<span className="w-px h-1 bg-zinc-800"></span>
</div>
</div>
</div>

<div className="flex gap-2">
<button className="flex-1 bg-green-500 hover:bg-green-400 text-black font-semibold py-2.5 rounded text-sm transition-all shadow-[0_0_10px_rgba(34,197,94,0.2)] hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] active:scale-[0.98]">
                        Buy / Long
                    </button>
<button className="flex-1 bg-red-500 hover:bg-red-400 text-black font-semibold py-2.5 rounded text-sm transition-all shadow-[0_0_10px_rgba(239,68,68,0.2)] hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] active:scale-[0.98]">
                        Sell / Short
                    </button>
</div>
<div className="flex justify-between items-center mt-3 text-[10px] text-zinc-500 font-mono">
<span>Avail: 4.502 BTC</span>
<span>Max: 12.00 BTC</span>
</div>
</div>
</aside>
</main>

<footer className="h-6 bg-[#0A0A0A] border-t border-zinc-800/60 flex items-center justify-between px-2 text-[10px] text-zinc-600 font-mono shrink-0 select-none">
<div className="flex gap-4">
<span className="hover:text-zinc-400 cursor-pointer">Stable connection</span>
<span className="hover:text-zinc-400 cursor-pointer">v2.4.0-beta</span>
</div>
<div className="flex gap-4">
<span className="flex items-center gap-1 hover:text-zinc-400 cursor-pointer">
<iconify-icon icon="lucide:wifi" width="10"></iconify-icon> System Normal
            </span>
<span className="hover:text-zinc-400 cursor-pointer">Support</span>
</div>
</footer>

    </>
  );
}
