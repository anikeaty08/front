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
      

<header className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 py-4">
<div className="flex flex-col gap-4">

<div className="flex items-center justify-between">
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Net Liquidity</p>
<h1 className="text-3xl text-zinc-50 font-medium tracking-tight mt-1">$1,248,050.42</h1>
</div>
<button className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors md:hidden">
<iconify-icon icon="lucide:bell" width="20"></iconify-icon>
</button>

<div className="hidden md:flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors">
<iconify-icon icon="lucide:download" width="16"></iconify-icon>
<span>Reports</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-900/20">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
<span>Deposit</span>
</button>
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between text-xs font-medium">
<span className="text-emerald-400">Safe</span>
<span className="text-zinc-500">Margin Maint: $436,817</span>
<span className="text-zinc-500">35% Used</span>
</div>
<div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden flex relative">

<div className="h-full bg-emerald-500 w-[35%] rounded-full relative z-10"></div>

<div className="absolute top-0 bottom-0 left-[75%] w-0.5 bg-zinc-700 z-0"></div>
</div>
<div className="flex justify-between items-center text-xs text-zinc-400 pt-1">
<div className="flex gap-4">
<span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Equity</span>
<span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> Options</span>
<span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Futures</span>
</div>
<span className="text-zinc-300 font-medium">BP: $811,233</span>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 mt-2">
<nav className="flex space-x-1 overflow-x-auto no-scrollbar pb-2 border-b border-zinc-800/0 md:border-zinc-800/50">
<button className="whitespace-nowrap px-4 py-2 text-sm font-medium text-white border-b-2 border-indigo-500 bg-zinc-900/50 rounded-t-lg">Overview</button>
<button className="whitespace-nowrap px-4 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent hover:bg-zinc-900/30 rounded-t-lg transition-all">Equity Margin</button>
<button className="whitespace-nowrap px-4 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent hover:bg-zinc-900/30 rounded-t-lg transition-all">Futures</button>
<button className="whitespace-nowrap px-4 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent hover:bg-zinc-900/30 rounded-t-lg transition-all">Options</button>
<button className="whitespace-nowrap px-4 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent hover:bg-zinc-900/30 rounded-t-lg transition-all">Forex</button>
</nav>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 py-6 space-y-8">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="relative w-full sm:w-64 group">
<iconify-icon className="absolute left-3 top-2.5 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" icon="lucide:search" width="18"></iconify-icon>
<input className="w-full bg-zinc-900/50 border border-zinc-800 text-sm rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all text-zinc-200 placeholder-zinc-600" placeholder="Filter positions..." type="text"/>
</div>
<div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-zinc-500">Simulate Mode</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-zinc-800 appearance-none cursor-pointer transition-all duration-300" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-800 cursor-pointer" htmlFor="toggle"></label>
</input></div>
</div>
</div>
</div>

<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="lucide:bar-chart-2"></iconify-icon>
                    Equity Margin
                </h2>
<span className="text-xs bg-zinc-900 text-zinc-400 border border-zinc-800 px-2 py-1 rounded-md">Reg T</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="bg-zinc-900/40 border border-amber-900/30 rounded-xl p-4 relative overflow-hidden group hover:border-amber-700/50 transition-all">
<div className="absolute top-0 right-0 p-2 opacity-100">
<div className="flex items-center gap-1 bg-amber-900/20 text-amber-500 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase border border-amber-900/30">
                            High Util
                        </div>
</div>
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-white text-black flex items-center justify-center font-bold text-sm tracking-tighter">TSLA</div>
<div>
<h3 className="font-medium text-zinc-100">Tesla Inc</h3>
<p className="text-xs text-zinc-500">150 Shares @ $240.50</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-4">
<div>
<p className="text-xs text-zinc-500 mb-0.5">Market Value</p>
<p className="text-sm font-medium text-zinc-200">$36,075.00</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-0.5">Margin Used</p>
<p className="text-sm font-medium text-amber-400">$18,037.50</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-0.5">Initial Req</p>
<p className="text-sm text-zinc-300">50%</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-0.5">Maint Req</p>
<p className="text-sm text-zinc-300">30%</p>
</div>
</div>
<div className="pt-3 border-t border-zinc-800/50 flex justify-between items-center">
<div className="text-xs text-zinc-500">Concentration: <span className="text-zinc-300">18%</span></div>
<button className="text-xs text-indigo-400 font-medium flex items-center gap-1 hover:text-indigo-300">
                            Details <iconify-icon icon="lucide:chevron-down"></iconify-icon>
</button>
</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-all">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-zinc-800 text-zinc-300 flex items-center justify-center font-bold text-sm tracking-tighter">AAPL</div>
<div>
<h3 className="font-medium text-zinc-100">Apple Inc</h3>
<p className="text-xs text-zinc-500">400 Shares @ $185.20</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-4">
<div>
<p className="text-xs text-zinc-500 mb-0.5">Market Value</p>
<p className="text-sm font-medium text-zinc-200">$74,080.00</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-0.5">Margin Used</p>
<p className="text-sm font-medium text-zinc-200">$22,224.00</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-0.5">Initial Req</p>
<p className="text-sm text-zinc-300">30%</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-0.5">Maint Req</p>
<p className="text-sm text-zinc-300">25%</p>
</div>
</div>
<div className="pt-3 border-t border-zinc-800/50 flex justify-between items-center">
<div className="text-xs text-zinc-500">Concentration: <span className="text-zinc-300">8%</span></div>
<button className="text-xs text-zinc-500 font-medium flex items-center gap-1 hover:text-zinc-300">
                            Details <iconify-icon icon="lucide:chevron-down"></iconify-icon>
</button>
</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-all">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-zinc-800 text-zinc-300 flex items-center justify-center font-bold text-sm tracking-tighter">NVDA</div>
<div>
<h3 className="font-medium text-zinc-100">NVIDIA</h3>
<p className="text-xs text-zinc-500">50 Shares @ $480.00</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-4">
<div>
<p className="text-xs text-zinc-500 mb-0.5">Market Value</p>
<p className="text-sm font-medium text-zinc-200">$24,000.00</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-0.5">Margin Used</p>
<p className="text-sm font-medium text-zinc-200">$8,400.00</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-0.5">Initial Req</p>
<p className="text-sm text-zinc-300">35%</p>
</div>
<div>
<p className="text-xs text-zinc-500 mb-0.5">Maint Req</p>
<p className="text-sm text-zinc-300">25%</p>
</div>
</div>
<div className="pt-3 border-t border-zinc-800/50 flex justify-between items-center">
<div className="text-xs text-zinc-500">Concentration: <span className="text-zinc-300">4%</span></div>
<button className="text-xs text-zinc-500 font-medium flex items-center gap-1 hover:text-zinc-300">
                            Details <iconify-icon icon="lucide:chevron-down"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="lucide:candlestick-chart"></iconify-icon>
                    Futures Margin
                </h2>
<span className="text-xs bg-zinc-900 text-zinc-400 border border-zinc-800 px-2 py-1 rounded-md">SPAN</span>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">

<div className="grid grid-cols-3 divide-x divide-zinc-800 border-b border-zinc-800 bg-zinc-900/50">
<div className="p-4 text-center">
<p className="text-xs text-zinc-500">Initial Margin</p>
<p className="text-sm font-medium text-zinc-200 mt-1">$45,200</p>
</div>
<div className="p-4 text-center">
<p className="text-xs text-zinc-500">Maint. Margin</p>
<p className="text-sm font-medium text-zinc-200 mt-1">$38,500</p>
</div>
<div className="p-4 text-center">
<p className="text-xs text-zinc-500">Unrealized P/L</p>
<p className="text-sm font-medium text-emerald-400 mt-1">+$2,450</p>
</div>
</div>

<div className="hidden md:block">
<table className="w-full text-left text-sm">
<thead className="bg-zinc-900/80 text-zinc-500">
<tr>
<th className="px-4 py-3 font-medium">Contract</th>
<th className="px-4 py-3 font-medium">Pos</th>
<th className="px-4 py-3 font-medium text-right">Price</th>
<th className="px-4 py-3 font-medium text-right">Notional</th>
<th className="px-4 py-3 font-medium text-right">Margin Req</th>
<th className="px-4 py-3 font-medium text-right">P/L Day</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800">
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-4 py-3 font-medium text-zinc-200 flex items-center gap-2">
<div className="w-1 h-8 rounded-full bg-amber-500/80"></div>
                                    /ESZ3
                                </td>
<td className="px-4 py-3 text-zinc-300">+2</td>
<td className="px-4 py-3 text-zinc-300 text-right">4,550.25</td>
<td className="px-4 py-3 text-zinc-400 text-right">$455,025</td>
<td className="px-4 py-3 text-zinc-200 text-right font-medium">$24,600</td>
<td className="px-4 py-3 text-emerald-400 text-right">+$850</td>
</tr>
<tr className="hover:bg-zinc-800/30 transition-colors">
<td className="px-4 py-3 font-medium text-zinc-200 flex items-center gap-2">
<div className="w-1 h-8 rounded-full bg-amber-500/40"></div>
                                    /CLZ3
                                </td>
<td className="px-4 py-3 text-zinc-300">-1</td>
<td className="px-4 py-3 text-zinc-300 text-right">78.40</td>
<td className="px-4 py-3 text-zinc-400 text-right">$78,400</td>
<td className="px-4 py-3 text-zinc-200 text-right font-medium">$7,200</td>
<td className="px-4 py-3 text-rose-400 text-right">-$210</td>
</tr>
</tbody>
</table>
</div>

<div className="md:hidden divide-y divide-zinc-800">
<div className="p-4 hover:bg-zinc-900/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="font-medium text-zinc-200 text-base">/ESZ3</h3>
<p className="text-xs text-zinc-500">S&amp;P 500 E-mini • Dec 23</p>
</div>
<div className="text-right">
<p className="font-medium text-emerald-400 text-sm">+$850.00</p>
<p className="text-xs text-zinc-500">Day P/L</p>
</div>
</div>
<div className="flex justify-between items-end mt-3">
<div>
<span className="block text-xs text-zinc-500 mb-1">Margin Req</span>
<span className="text-sm text-zinc-200 font-medium">$24,600</span>
</div>
<div className="flex items-center gap-2 bg-zinc-800 px-3 py-1 rounded text-xs text-zinc-300">
<span>+2 Contracts</span>
</div>
</div>
</div>
<div className="p-4 hover:bg-zinc-900/50 transition-colors">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="font-medium text-zinc-200 text-base">/CLZ3</h3>
<p className="text-xs text-zinc-500">Crude Oil • Dec 23</p>
</div>
<div className="text-right">
<p className="font-medium text-rose-400 text-sm">-$210.00</p>
<p className="text-xs text-zinc-500">Day P/L</p>
</div>
</div>
<div className="flex justify-between items-end mt-3">
<div>
<span className="block text-xs text-zinc-500 mb-1">Margin Req</span>
<span className="text-sm text-zinc-200 font-medium">$7,200</span>
</div>
<div className="flex items-center gap-2 bg-zinc-800 px-3 py-1 rounded text-xs text-zinc-300">
<span>-1 Contract</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="lucide:layers"></iconify-icon>
                    Options Strategies
                </h2>
<span className="text-xs bg-zinc-900 text-zinc-400 border border-zinc-800 px-2 py-1 rounded-md">Portfolio Margin</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

<div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-0 overflow-hidden">
<div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/60">
<div className="flex items-center gap-2">
<span className="text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-1.5 py-0.5 rounded">Short Put</span>
<span className="text-sm font-medium text-zinc-200">SPY 420P</span>
</div>
<span className="text-xs text-zinc-500">Exp: 14 Days</span>
</div>
<div className="p-4">
<div className="flex justify-between items-center mb-4">
<div className="flex gap-2">
<div className="bg-zinc-800 px-2 py-1 rounded text-[10px] text-zinc-400 flex flex-col items-center min-w-[3rem]">
<span className="text-zinc-500">Delta</span>
<span className="text-zinc-200">0.14</span>
</div>
<div className="bg-zinc-800 px-2 py-1 rounded text-[10px] text-zinc-400 flex flex-col items-center min-w-[3rem]">
<span className="text-zinc-500">Theta</span>
<span className="text-zinc-200">8.42</span>
</div>
</div>
<div className="text-right">
<p className="text-xs text-zinc-500">Margin Req</p>
<p className="text-base font-medium text-zinc-100">$4,200</p>
</div>
</div>

<div className="relative pt-4 pb-2">
<div className="h-1.5 bg-zinc-800 rounded-full w-full relative">

<div className="absolute top-1/2 -translate-y-1/2 left-[60%] w-2 h-2 bg-white rounded-full shadow border border-zinc-900 z-10"></div>

<div className="absolute top-0 h-full left-0 w-[40%] bg-indigo-900/30 rounded-l-full"></div>
</div>
<div className="flex justify-between text-[10px] text-zinc-500 mt-1">
<span>380</span>
<span>Cur: 432</span>
<span>460</span>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-0 overflow-hidden">
<div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/60">
<div className="flex items-center gap-2">
<span className="text-xs font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20 px-1.5 py-0.5 rounded">Iron Condor</span>
<span className="text-sm font-medium text-zinc-200">IWM</span>
</div>
<span className="text-xs text-zinc-500">Exp: 2 Days</span>
</div>
<div className="p-4">
<div className="flex justify-between items-center mb-4">
<div className="flex gap-2">
<div className="bg-zinc-800 px-2 py-1 rounded text-[10px] text-zinc-400 flex flex-col items-center min-w-[3rem]">
<span className="text-zinc-500">Delta</span>
<span className="text-zinc-200">-0.02</span>
</div>
<div className="bg-zinc-800 px-2 py-1 rounded text-[10px] text-zinc-400 flex flex-col items-center min-w-[3rem]">
<span className="text-zinc-500">Theta</span>
<span className="text-zinc-200">12.1</span>
</div>
</div>
<div className="text-right">
<p className="text-xs text-zinc-500">Margin Req</p>
<p className="text-base font-medium text-zinc-100">$2,500</p>
</div>
</div>

<div className="space-y-1">
<div className="flex justify-between text-xs text-zinc-400">
<span>+1 170P</span>
<span className="text-zinc-600">Leg 1</span>
</div>
<div className="flex justify-between text-xs text-zinc-400">
<span>-1 175P</span>
<span className="text-zinc-600">Leg 2</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<div className="fixed bottom-20 right-4 z-40 md:bottom-8 md:right-8">
<button className="bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-900/40 rounded-full px-5 py-3 flex items-center gap-2 font-medium transition-transform active:scale-95 border border-indigo-400/20">
<iconify-icon icon="lucide:zap" width="18"></iconify-icon>
<span className="text-sm">Simulate Impact</span>
</button>
</div>

<nav className="fixed bottom-0 w-full bg-zinc-950/90 backdrop-blur-lg border-t border-zinc-800 z-50 pb-safe md:hidden">
<div className="flex justify-around items-center h-16">
<a className="flex flex-col items-center justify-center w-full h-full text-zinc-500 hover:text-white group" href="#">
<iconify-icon className="mb-1 group-hover:scale-110 transition-transform" icon="lucide:home" width="20"></iconify-icon>
<span className="text-[10px]">Home</span>
</a>
<a className="flex flex-col items-center justify-center w-full h-full text-indigo-400 hover:text-indigo-300 group" href="#">
<iconify-icon className="mb-1 group-hover:scale-110 transition-transform" icon="lucide:pie-chart" width="20"></iconify-icon>
<span className="text-[10px]">Portfolio</span>
</a>
<a className="flex flex-col items-center justify-center w-full h-full text-zinc-500 hover:text-white group relative" href="#">
<div className="absolute -top-3 bg-zinc-800 p-3 rounded-full border border-zinc-700 shadow-xl">
<iconify-icon className="text-white" icon="lucide:arrow-left-right" width="20"></iconify-icon>
</div>
<span className="text-[10px] mt-8">Trade</span>
</a>
<a className="flex flex-col items-center justify-center w-full h-full text-zinc-500 hover:text-white group" href="#">
<iconify-icon className="mb-1 group-hover:scale-110 transition-transform" icon="lucide:activity" width="20"></iconify-icon>
<span className="text-[10px]">Activity</span>
</a>
<a className="flex flex-col items-center justify-center w-full h-full text-zinc-500 hover:text-white group" href="#">
<iconify-icon className="mb-1 group-hover:scale-110 transition-transform" icon="lucide:menu" width="20"></iconify-icon>
<span className="text-[10px]">Menu</span>
</a>
</div>
</nav>

<div className="hidden md:flex fixed bottom-0 w-full bg-zinc-950 border-t border-zinc-800 px-6 py-2 z-50 justify-between items-center text-xs text-zinc-500">
<div className="flex gap-4">
<span className="flex items-center gap-1"><div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div> Market Open</span>
<span>Data Delayed: 15min</span>
</div>
<div className="flex gap-4">
<span>VIX: 14.20 <span className="text-rose-400">(-2.1%)</span></span>
<span>SPX: 4,450.00 <span className="text-emerald-400">(+0.4%)</span></span>
</div>
</div>

    </>
  );
}
