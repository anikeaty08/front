import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<aside className="w-full md:w-16 lg:w-56 border-b md:border-b-0 md:border-r border-zinc-800/50 bg-[#09090b] flex flex-col shrink-0 z-20">

<div className="h-14 flex items-center justify-between md:justify-center lg:justify-start px-4 lg:px-6 border-b border-zinc-800/50 shrink-0">
<span className="text-lg tracking-tighter font-medium text-zinc-100">X<span className="text-zinc-600">TRD</span></span>
<button className="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</div>

<nav className="hidden md:flex flex-col gap-1 p-2 lg:p-3 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-zinc-900/50 text-zinc-100 group" href="#">
<iconify-icon className="text-zinc-100" icon="solar:chart-square-linear" width="18"></iconify-icon>
<span className="text-sm font-medium hidden lg:block tracking-tight">Trade</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/30 transition-all group" href="#">
<iconify-icon className="group-hover:text-zinc-300" icon="solar:pie-chart-2-linear" width="18"></iconify-icon>
<span className="text-sm font-normal hidden lg:block tracking-tight">Markets</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/30 transition-all group" href="#">
<iconify-icon className="group-hover:text-zinc-300" icon="solar:wallet-linear" width="18"></iconify-icon>
<span className="text-sm font-normal hidden lg:block tracking-tight">Portfolio</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/30 transition-all group" href="#">
<iconify-icon className="group-hover:text-zinc-300" icon="solar:history-linear" width="18"></iconify-icon>
<span className="text-sm font-normal hidden lg:block tracking-tight">History</span>
</a>
</nav>
<div className="mt-auto hidden md:flex flex-col gap-1 p-2 lg:p-3 border-t border-zinc-800/50">
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/30 transition-all group" href="#">
<iconify-icon className="group-hover:text-zinc-300" icon="solar:settings-linear" width="18"></iconify-icon>
<span className="text-sm font-normal hidden lg:block tracking-tight">Settings</span>
</a>
<div className="flex items-center gap-3 px-3 py-2 mt-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-500 shrink-0"></div>
<div className="hidden lg:flex flex-col">
<span className="text-xs font-medium text-zinc-200">User_8492</span>
<span className="text-xs text-zinc-600 font-mono tabular-nums">0.245 BTC</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative bg-[#09090b]">

<header className="h-14 border-b border-zinc-800/50 flex items-center px-4 gap-6 lg:gap-10 overflow-x-auto whitespace-nowrap shrink-0 z-10">
<div className="flex items-center gap-3 pr-4 border-r border-zinc-800/50 h-8">
<div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<iconify-icon className="text-zinc-100" icon="solar:bitcoin-linear" width="16"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<h1 className="text-lg font-medium tracking-tight text-zinc-100">BTC-PERP</h1>
<span className="text-xs text-zinc-500">Bitcoin</span>
</div>
</div>
<div className="flex flex-col justify-center">
<span className="text-xs text-zinc-500 mb-0.5">Mark Price</span>
<span className="text-sm text-emerald-400 font-medium tabular-nums tracking-tight">64,230.50</span>
</div>
<div className="flex flex-col justify-center">
<span className="text-xs text-zinc-500 mb-0.5">Index Price</span>
<span className="text-sm text-zinc-200 font-medium tabular-nums tracking-tight">64,228.10</span>
</div>
<div className="flex flex-col justify-center">
<span className="text-xs text-zinc-500 mb-0.5">24h Change</span>
<span className="text-sm text-emerald-400 font-medium tabular-nums tracking-tight">+2.45%</span>
</div>
<div className="flex flex-col justify-center">
<span className="text-xs text-zinc-500 mb-0.5">24h Volume</span>
<span className="text-sm text-zinc-200 font-medium tabular-nums tracking-tight">1.2B USD</span>
</div>
<div className="flex flex-col justify-center">
<span className="text-xs text-zinc-500 mb-0.5">Funding / Countdown</span>
<span className="text-sm text-amber-400/80 font-medium tabular-nums tracking-tight">0.0100% / 03:45:12</span>
</div>
</header>

<div className="flex-1 flex flex-col xl:flex-row min-h-0 overflow-auto xl:overflow-hidden">

<div className="flex-1 flex flex-col min-w-0 border-r border-zinc-800/50 h-full">

<div className="flex-1 relative flex flex-col min-h-[400px] xl:min-h-0">

<div className="h-10 border-b border-zinc-800/50 flex items-center justify-between px-4 shrink-0 bg-[#09090b]">
<div className="flex items-center gap-1 bg-zinc-900/50 p-0.5 rounded border border-zinc-800/50">
<button className="text-xs px-2 py-1 rounded text-zinc-500 hover:text-zinc-200 transition-colors">15m</button>
<button className="text-xs px-2 py-1 rounded text-zinc-500 hover:text-zinc-200 transition-colors">1H</button>
<button className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-100 shadow-sm font-medium transition-colors">4H</button>
<button className="text-xs px-2 py-1 rounded text-zinc-500 hover:text-zinc-200 transition-colors">1D</button>
</div>
<div className="flex items-center gap-3 text-zinc-500">
<button className="hover:text-zinc-200 transition-colors"><iconify-icon icon="solar:maximize-square-linear" width="16"></iconify-icon></button>
<button className="hover:text-zinc-200 transition-colors"><iconify-icon icon="solar:settings-linear" width="16"></iconify-icon></button>
</div>
</div>

<div className="flex-1 w-full h-full relative overflow-hidden bg-[#0a0a0c]">

<div className="absolute right-0 top-0 bottom-0 w-14 border-l border-zinc-800/30 flex flex-col justify-between py-8 text-xs text-zinc-600 font-mono text-right pr-2 bg-[#09090b]/80 z-10 pointer-events-none tabular-nums">
<span>65,000</span>
<span>64,500</span>
<span className="text-emerald-400 bg-[#09090b] relative -right-2 pr-2 py-0.5 border border-emerald-500/20 rounded-l">64,230</span>
<span>63,500</span>
<span>63,000</span>
</div>

<div className="absolute left-0 bottom-0 right-14 h-6 border-t border-zinc-800/30 flex justify-between items-center px-4 text-xs text-zinc-600 font-mono bg-[#09090b]/80 z-10 pointer-events-none tabular-nums">
<span>04:00</span>
<span>08:00</span>
<span>12:00</span>
<span>16:00</span>
<span>20:00</span>
</div>

<svg className="w-full h-full absolute inset-0 pl-0 pr-14 pb-6 pt-0" preserveaspectratio="none" viewbox="0 0 1000 400">
<defs>
<pattern height="50" id="grid" patternunits="userSpaceOnUse" width="100">
<path d="M 100 0 L 0 0 0 50" fill="none" stroke="#27272a" stroke-opacity="0.3" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>

<g fill="#34d399" opacity="0.1">
<rect height="50" width="15" x="50" y="350"></rect>
<rect height="80" width="15" x="150" y="320"></rect>
<rect height="60" width="15" x="350" y="340"></rect>
<rect height="100" width="15" x="550" y="300"></rect>
<rect height="40" width="15" x="750" y="360"></rect>
<rect height="120" width="15" x="850" y="280"></rect>
<rect height="90" width="15" x="950" y="310"></rect>
</g>
<g fill="#f87171" opacity="0.1">
<rect height="30" width="15" x="100" y="370"></rect>
<rect height="40" width="15" x="250" y="360"></rect>
<rect height="70" width="15" x="450" y="330"></rect>
<rect height="20" width="15" x="650" y="380"></rect>
</g>

<path className="chart-gradient" d="M0,300 C100,280 200,320 300,250 C400,180 500,200 600,150 C700,100 800,120 900,60 C950,30 980,80 1000,80 L1000,400 L0,400 Z"></path>

<path d="M0,300 C100,280 200,320 300,250 C400,180 500,200 600,150 C700,100 800,120 900,60 C950,30 980,80 1000,80" fill="none" stroke="#34d399" strokeLinecap="round" strokeWidth="1.5"></path>

<line stroke="#34d399" stroke-dasharray="2 4" stroke-opacity="0.4" strokeWidth="1" x1="0" x2="1000" y1="80" y2="80"></line>
<circle cx="1000" cy="80" fill="#34d399" r="3"></circle>
<circle className="animate-pulse" cx="1000" cy="80" fill="#34d399" opacity="0.2" r="8"></circle>
</svg>
</div>
</div>

<div className="h-64 border-t border-zinc-800/50 bg-[#09090b] flex-col shrink-0 hidden xl:flex z-10">
<div className="flex items-center gap-6 px-4 border-b border-zinc-800/50 h-10 shrink-0">
<button className="text-sm font-medium text-zinc-100 border-b border-zinc-100 h-full pt-0.5">Positions (1)</button>
<button className="text-sm font-normal text-zinc-500 hover:text-zinc-300 h-full transition-colors">Open Orders (0)</button>
<button className="text-sm font-normal text-zinc-500 hover:text-zinc-300 h-full transition-colors">Order History</button>
</div>
<div className="flex-1 overflow-auto">
<table className="w-full text-left whitespace-nowrap border-collapse">
<thead className="text-xs text-zinc-500 sticky top-0 bg-[#09090b] z-10 border-b border-zinc-800/30">
<tr>
<th className="font-normal py-2 px-4 w-32">Symbol</th>
<th className="font-normal py-2 px-4 w-24">Size</th>
<th className="font-normal py-2 px-4 w-32">Entry Price</th>
<th className="font-normal py-2 px-4 w-32">Mark Price</th>
<th className="font-normal py-2 px-4 w-32">Liq. Price</th>
<th className="font-normal py-2 px-4 text-right">PNL (ROE)</th>
</tr>
</thead>
<tbody className="text-sm font-mono text-zinc-300">
<tr className="border-b border-zinc-800/20 hover:bg-zinc-900/20 transition-colors group">
<td className="py-3 px-4 font-sans text-zinc-100 flex items-center gap-2">
<div className="w-1 h-3 rounded-full bg-emerald-400"></div>
                                        BTC-PERP
                                        <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded ml-1 font-sans">10x</span>
</td>
<td className="py-3 px-4 tabular-nums">0.500</td>
<td className="py-3 px-4 tabular-nums">61,200.00</td>
<td className="py-3 px-4 tabular-nums">64,230.50</td>
<td className="py-3 px-4 tabular-nums text-amber-500/80">55,420.00</td>
<td className="py-3 px-4 text-right text-emerald-400 tabular-nums font-medium group-hover:text-emerald-300 transition-colors">
                                        +1,515.25 <span className="text-xs ml-1">(+24.5%)</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row xl:flex-row w-full xl:w-[620px] shrink-0 bg-[#09090b] border-t xl:border-t-0 border-zinc-800/50">

<div className="w-full md:w-[280px] border-r border-zinc-800/50 flex flex-col h-[400px] xl:h-full shrink-0">
<div className="h-10 border-b border-zinc-800/50 flex justify-between items-center px-4 shrink-0">
<div className="flex gap-3">
<button className="text-zinc-200"><iconify-icon className="rotate-90" icon="solar:menu-dots-square-linear" width="16"></iconify-icon></button>
<button className="text-zinc-600 hover:text-zinc-400 transition-colors"><iconify-icon icon="solar:sort-from-bottom-to-top-linear" width="16"></iconify-icon></button>
<button className="text-zinc-600 hover:text-zinc-400 transition-colors"><iconify-icon icon="solar:sort-from-top-to-bottom-linear" width="16"></iconify-icon></button>
</div>
<div className="flex items-center gap-1 text-xs text-zinc-500 bg-zinc-900/50 px-1.5 py-0.5 rounded">
                            0.1 <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
<div className="flex text-xs text-zinc-500 px-4 py-2 shrink-0">
<div className="flex-1">Price(USD)</div>
<div className="w-16 text-right">Size(BTC)</div>
<div className="w-16 text-right">Total</div>
</div>
<div className="flex-1 flex flex-col text-xs font-mono tabular-nums overflow-hidden pb-2">

<div className="flex-1 flex flex-col justify-end px-2 gap-0.5 overflow-hidden">
<div className="flex items-center relative py-0.5 cursor-pointer hover:bg-zinc-900/50 group">
<div className="absolute right-0 top-0 bottom-0 bg-red-500/10 w-[85%] z-0 rounded-l-sm group-hover:bg-red-500/20 transition-colors"></div>
<div className="flex-1 text-red-400 z-10 pl-2">64,240.00</div>
<div className="w-16 text-right text-zinc-300 z-10">1.250</div>
<div className="w-16 text-right text-zinc-500 z-10 pr-2">4.850</div>
</div>
<div className="flex items-center relative py-0.5 cursor-pointer hover:bg-zinc-900/50 group">
<div className="absolute right-0 top-0 bottom-0 bg-red-500/10 w-[60%] z-0 rounded-l-sm group-hover:bg-red-500/20 transition-colors"></div>
<div className="flex-1 text-red-400 z-10 pl-2">64,238.50</div>
<div className="w-16 text-right text-zinc-300 z-10">0.800</div>
<div className="w-16 text-right text-zinc-500 z-10 pr-2">3.600</div>
</div>
<div className="flex items-center relative py-0.5 cursor-pointer hover:bg-zinc-900/50 group">
<div className="absolute right-0 top-0 bottom-0 bg-red-500/10 w-[45%] z-0 rounded-l-sm group-hover:bg-red-500/20 transition-colors"></div>
<div className="flex-1 text-red-400 z-10 pl-2">64,235.00</div>
<div className="w-16 text-right text-zinc-300 z-10">2.100</div>
<div className="w-16 text-right text-zinc-500 z-10 pr-2">2.800</div>
</div>
<div className="flex items-center relative py-0.5 cursor-pointer hover:bg-zinc-900/50 group">
<div className="absolute right-0 top-0 bottom-0 bg-red-500/10 w-[15%] z-0 rounded-l-sm group-hover:bg-red-500/20 transition-colors"></div>
<div className="flex-1 text-red-400 z-10 pl-2">64,232.00</div>
<div className="w-16 text-right text-zinc-300 z-10">0.450</div>
<div className="w-16 text-right text-zinc-500 z-10 pr-2">0.700</div>
</div>
<div className="flex items-center relative py-0.5 cursor-pointer hover:bg-zinc-900/50 group">
<div className="absolute right-0 top-0 bottom-0 bg-red-500/10 w-[5%] z-0 rounded-l-sm group-hover:bg-red-500/20 transition-colors"></div>
<div className="flex-1 text-red-400 z-10 pl-2">64,231.50</div>
<div className="w-16 text-right text-zinc-300 z-10">0.250</div>
<div className="w-16 text-right text-zinc-500 z-10 pr-2">0.250</div>
</div>
</div>

<div className="py-2 px-4 my-1 border-y border-zinc-800/30 flex items-center justify-between shrink-0 bg-[#0a0a0c]">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-emerald-400">64,230.50</span>
<iconify-icon className="text-emerald-400" icon="solar:arrow-up-linear" width="14"></iconify-icon>
</div>
<span className="text-xs text-zinc-500 font-sans line-through decoration-zinc-700">64,232.00</span>
</div>

<div className="flex-1 flex flex-col px-2 gap-0.5 overflow-hidden">
<div className="flex items-center relative py-0.5 cursor-pointer hover:bg-zinc-900/50 group">
<div className="absolute right-0 top-0 bottom-0 bg-emerald-500/10 w-[10%] z-0 rounded-l-sm group-hover:bg-emerald-500/20 transition-colors"></div>
<div className="flex-1 text-emerald-400 z-10 pl-2">64,230.00</div>
<div className="w-16 text-right text-zinc-300 z-10">0.550</div>
<div className="w-16 text-right text-zinc-500 z-10 pr-2">0.550</div>
</div>
<div className="flex items-center relative py-0.5 cursor-pointer hover:bg-zinc-900/50 group">
<div className="absolute right-0 top-0 bottom-0 bg-emerald-500/10 w-[30%] z-0 rounded-l-sm group-hover:bg-emerald-500/20 transition-colors"></div>
<div className="flex-1 text-emerald-400 z-10 pl-2">64,228.50</div>
<div className="w-16 text-right text-zinc-300 z-10">1.200</div>
<div className="w-16 text-right text-zinc-500 z-10 pr-2">1.750</div>
</div>
<div className="flex items-center relative py-0.5 cursor-pointer hover:bg-zinc-900/50 group">
<div className="absolute right-0 top-0 bottom-0 bg-emerald-500/10 w-[55%] z-0 rounded-l-sm group-hover:bg-emerald-500/20 transition-colors"></div>
<div className="flex-1 text-emerald-400 z-10 pl-2">64,225.00</div>
<div className="w-16 text-right text-zinc-300 z-10">1.800</div>
<div className="w-16 text-right text-zinc-500 z-10 pr-2">3.550</div>
</div>
<div className="flex items-center relative py-0.5 cursor-pointer hover:bg-zinc-900/50 group">
<div className="absolute right-0 top-0 bottom-0 bg-emerald-500/10 w-[70%] z-0 rounded-l-sm group-hover:bg-emerald-500/20 transition-colors"></div>
<div className="flex-1 text-emerald-400 z-10 pl-2">64,220.00</div>
<div className="w-16 text-right text-zinc-300 z-10">3.400</div>
<div className="w-16 text-right text-zinc-500 z-10 pr-2">6.950</div>
</div>
<div className="flex items-center relative py-0.5 cursor-pointer hover:bg-zinc-900/50 group">
<div className="absolute right-0 top-0 bottom-0 bg-emerald-500/10 w-[95%] z-0 rounded-l-sm group-hover:bg-emerald-500/20 transition-colors"></div>
<div className="flex-1 text-emerald-400 z-10 pl-2">64,215.00</div>
<div className="w-16 text-right text-zinc-300 z-10">5.100</div>
<div className="w-16 text-right text-zinc-500 z-10 pr-2">12.050</div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-[#09090b] relative z-20">
<div className="p-4 flex flex-col h-full">

<div className="flex rounded-md p-1 bg-zinc-900/50 border border-zinc-800/50 mb-5">
<button className="flex-1 py-1.5 text-sm font-medium rounded text-emerald-400 bg-[#09090b] border border-zinc-800/80 shadow-sm transition-all">Buy / Long</button>
<button className="flex-1 py-1.5 text-sm font-normal rounded text-zinc-500 hover:text-zinc-300 transition-all">Sell / Short</button>
</div>

<div className="flex gap-4 border-b border-zinc-800/50 pb-3 mb-5 px-1">
<button className="text-xs font-medium text-zinc-200 border-b border-zinc-200 pb-3 -mb-[13px]">Limit</button>
<button className="text-xs font-normal text-zinc-500 hover:text-zinc-300 pb-3 -mb-[13px] transition-colors">Market</button>
<button className="text-xs font-normal text-zinc-500 hover:text-zinc-300 pb-3 -mb-[13px] transition-colors">Stop Limit</button>
</div>
<div className="space-y-4 flex-1">

<div className="flex justify-between items-center text-xs px-1">
<span className="text-zinc-500">Avail</span>
<span className="text-zinc-200 font-mono">15,420.50 USD</span>
</div>

<div className="relative group">
<label className="text-xs text-zinc-500 absolute left-3 top-2.5 z-10 pointer-events-none">Price</label>
<input className="w-full bg-[#09090b] border border-zinc-800/80 rounded-md py-2.5 pl-14 pr-12 text-sm text-right text-zinc-100 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 font-mono transition-all hover:border-zinc-700" type="number" value="64230.50"/>
<span className="text-xs text-zinc-500 absolute right-3 top-3 pointer-events-none">USD</span>
</div>
<div className="relative group">
<label className="text-xs text-zinc-500 absolute left-3 top-2.5 z-10 pointer-events-none">Size</label>
<input className="w-full bg-[#09090b] border border-zinc-800/80 rounded-md py-2.5 pl-12 pr-12 text-sm text-right text-zinc-100 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 font-mono transition-all hover:border-zinc-700" placeholder="0.00" type="number"/>
<span className="text-xs text-zinc-500 absolute right-3 top-3 pointer-events-none">BTC</span>
</div>

<div className="py-2 px-1">
<div className="h-1 bg-zinc-800/80 rounded-full relative cursor-pointer group">

<div className="absolute left-0 top-0 bottom-0 w-[25%] bg-emerald-500/80 rounded-l-full group-hover:bg-emerald-400 transition-colors"></div>

<div className="absolute left-[25%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-zinc-100 rounded-full border-2 border-[#09090b] shadow-[0_0_0_3px_rgba(52,211,153,0.15)] group-hover:shadow-[0_0_0_4px_rgba(52,211,153,0.25)] transition-all z-10"></div>

<div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#09090b] border border-zinc-700 rounded-full -translate-x-1"></div>
<div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#09090b] border border-emerald-500 rounded-full -translate-x-1"></div>
<div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#09090b] border border-zinc-700 rounded-full -translate-x-1"></div>
<div className="absolute left-3/4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#09090b] border border-zinc-700 rounded-full -translate-x-1"></div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#09090b] border border-zinc-700 rounded-full translate-x-1"></div>
</div>
<div className="flex justify-between mt-3 text-[10px] text-zinc-500 font-mono">
<span>0%</span>
<span>25%</span>
<span>50%</span>
<span>75%</span>
<span>100%</span>
</div>
</div>

<div className="flex items-center justify-between px-1 py-2 border-y border-zinc-800/30">
<span className="text-xs text-zinc-500 flex items-center gap-1 cursor-help">
                                    Post Only <iconify-icon icon="solar:info-circle-linear" width="12"></iconify-icon>
</span>

<button className="w-7 h-4 rounded-full bg-zinc-800 relative transition-colors focus:outline-none">
<span className="absolute left-0.5 top-0.5 w-3 h-3 bg-zinc-400 rounded-full transition-transform"></span>
</button>
</div>

<div className="space-y-2 px-1 pt-2">
<div className="flex justify-between text-xs">
<span className="text-zinc-500">Cost</span>
<span className="text-zinc-200 font-mono">0.00 USD</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-zinc-500">Max</span>
<span className="text-zinc-200 font-mono">0.240 BTC</span>
</div>
</div>
</div>

<div className="mt-4 shrink-0">
<button className="w-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-md py-3 text-sm font-medium transition-all shadow-sm">
                                Buy / Long
                            </button>
</div>
</div>
</div>
</div>

<div className="h-auto shrink-0 xl:hidden flex flex-col border-t border-zinc-800/50 bg-[#09090b]">
<div className="flex items-center gap-6 px-4 border-b border-zinc-800/50 h-12 overflow-x-auto whitespace-nowrap">
<button className="text-sm font-medium text-zinc-100 border-b border-zinc-100 h-full pt-1">Positions (1)</button>
<button className="text-sm font-normal text-zinc-500 h-full">Open Orders (0)</button>
</div>
<div className="p-4 text-center text-sm text-zinc-500 py-8">
                    View active positions here.
                </div>
</div>
</div>
</main>

    </>
  );
}
