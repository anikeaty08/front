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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2 group" href="#">
<div className="w-5 h-5 bg-indigo-500 rounded-sm rotate-45 group-hover:rotate-0 transition-all duration-300"></div>
                    TRADEX
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-normal">
<a className="text-zinc-300 hover:text-white transition-colors" href="#">Markets</a>
<a className="hover:text-white transition-colors" href="#">Exchange</a>
<a className="hover:text-white transition-colors" href="#">Perpetuals</a>
<a className="hover:text-white transition-colors" href="#">Earn</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="search"></i>
<span>Search pairs</span>
<span className="bg-zinc-800 px-1.5 py-0.5 rounded text-[10px] text-zinc-500">⌘K</span>
</button>
<div className="h-4 w-px bg-white/10 hidden sm:block"></div>
<button className="text-sm font-medium text-white bg-white/10 hover:bg-white/15 px-4 py-1.5 rounded-full border border-white/5 transition-all">
                    Connect Wallet
                </button>
</div>
</div>
</nav>

<main className="flex-grow pt-24 pb-20">

<section className="max-w-7xl mx-auto px-6 mb-16 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                V2 Protocol is live
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500">
                Institutional grade <br/> trading infrastructure.
            </h1>
<p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Experience zero-latency execution, deep liquidity, and advanced order types. <br className="hidden md:block"/> Built for professional traders who demand precision.
            </p>
<div className="flex items-center justify-center gap-4">
<button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-full font-medium text-sm transition-all shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)]">
                    Start Trading
                </button>
<button className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 px-8 py-3 rounded-full font-medium text-sm transition-all flex items-center gap-2">
                    View Documentation
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-6 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="glass-panel rounded-xl overflow-hidden shadow-2xl relative z-10 grid grid-cols-1 lg:grid-cols-4 min-h-[600px] border border-zinc-800/50">

<div className="hidden lg:flex flex-col border-r border-white/5 bg-zinc-950/30">
<div className="p-4 border-b border-white/5 flex items-center justify-between">
<span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Watchlist</span>
<i className="w-4 h-4 text-zinc-600 cursor-pointer hover:text-zinc-400" data-lucide="settings-2"></i>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar">
<div className="p-2 space-y-1">

<div className="flex items-center justify-between p-2 rounded bg-white/5 cursor-pointer border border-white/5">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-[10px] text-indigo-300 font-bold">E</div>
<div>
<div className="text-sm text-white font-medium">ETH-USD</div>
<div className="text-[10px] text-zinc-500">Perpetual</div>
</div>
</div>
<div className="text-right">
<div className="text-sm text-white font-mono">2,240.50</div>
<div className="text-[10px] text-emerald-500 font-mono">+4.2%</div>
</div>
</div>

<div className="flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-pointer border border-transparent hover:border-white/5 transition-colors">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-[10px] text-orange-300 font-bold">B</div>
<div>
<div className="text-sm text-zinc-300 font-medium">BTC-USD</div>
<div className="text-[10px] text-zinc-500">Perpetual</div>
</div>
</div>
<div className="text-right">
<div className="text-sm text-zinc-300 font-mono">43,120.00</div>
<div className="text-[10px] text-emerald-500 font-mono">+1.2%</div>
</div>
</div>

<div className="flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-pointer border border-transparent hover:border-white/5 transition-colors">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-300 font-bold">S</div>
<div>
<div className="text-sm text-zinc-300 font-medium">SOL-USD</div>
<div className="text-[10px] text-zinc-500">Perpetual</div>
</div>
</div>
<div className="text-right">
<div className="text-sm text-zinc-300 font-mono">98.45</div>
<div className="text-[10px] text-rose-500 font-mono">-2.4%</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-2 flex flex-col bg-zinc-950/50">

<div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-zinc-950/50 backdrop-blur">
<div className="flex items-center gap-4">
<div className="flex flex-col">
<h2 className="text-lg font-medium text-white flex items-center gap-2">
                                    ETH-USD
                                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-bold tracking-wide">LONG</span>
</h2>
</div>
<div className="h-8 w-px bg-white/5"></div>
<div className="flex flex-col">
<span className="text-xl font-mono text-emerald-400 font-medium">2,240.50</span>
<span className="text-xs text-zinc-500">Mark Price</span>
</div>
</div>
<div className="flex gap-4 text-xs">
<div className="flex flex-col items-end">
<span className="text-zinc-300">24h Change</span>
<span className="text-emerald-500 font-mono">+4.20%</span>
</div>
<div className="flex flex-col items-end">
<span className="text-zinc-300">24h Vol</span>
<span className="text-white font-mono">842M</span>
</div>
</div>
</div>

<div className="flex-1 relative p-6 w-full overflow-hidden group">

<div className="absolute inset-0 z-0">
<div className="w-full h-full border-b border-white/5" style={{backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .03) 25%, rgba(255, 255, 255, .03) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .03) 75%, rgba(255, 255, 255, .03) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .03) 25%, rgba(255, 255, 255, .03) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .03) 75%, rgba(255, 255, 255, .03) 76%, transparent 77%, transparent)', backgroundSize: '50px 50px'}}></div>
</div>

<svg className="w-full h-full overflow-visible z-10 relative" preserveaspectratio="none" viewbox="0 0 800 300">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10b981" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#10b981" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]" d="M0,250 C50,240 100,260 150,220 C200,180 250,210 300,180 C350,150 400,170 450,140 C500,110 550,130 600,100 C650,70 700,90 750,50 L800,40" fill="none" stroke="#10b981" strokeWidth="2"></path>
<path d="M0,250 C50,240 100,260 150,220 C200,180 250,210 300,180 C350,150 400,170 450,140 C500,110 550,130 600,100 C650,70 700,90 750,50 L800,40 L800,300 L0,300 Z" fill="url(#chartGradient)" stroke="none"></path>

<line className="opacity-0 group-hover:opacity-20 transition-opacity" stroke="#ffffff" stroke-dasharray="4 4" strokeWidth="1" x1="600" x2="600" y1="0" y2="300"></line>
<circle className="opacity-0 group-hover:opacity-100 transition-opacity" cx="600" cy="100" fill="#10b981" r="4"></circle>
</svg>

<div className="absolute bottom-4 left-4 flex gap-1 p-1 bg-zinc-900/80 rounded-lg border border-white/5 backdrop-blur z-20">
<button className="px-2 py-1 text-[10px] text-zinc-400 hover:text-white rounded hover:bg-white/5 transition-colors">1H</button>
<button className="px-2 py-1 text-[10px] text-white bg-white/10 rounded border border-white/5">4H</button>
<button className="px-2 py-1 text-[10px] text-zinc-400 hover:text-white rounded hover:bg-white/5 transition-colors">1D</button>
<button className="px-2 py-1 text-[10px] text-zinc-400 hover:text-white rounded hover:bg-white/5 transition-colors">1W</button>
</div>
</div>

<div className="h-48 border-t border-white/5 bg-zinc-950/30">
<div className="flex items-center gap-6 px-4 py-2 border-b border-white/5">
<button className="text-xs font-medium text-white border-b border-indigo-500 pb-2 -mb-2.5">Open Positions (1)</button>
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-300 pb-2 -mb-2.5 transition-colors">Open Orders</button>
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-300 pb-2 -mb-2.5 transition-colors">History</button>
</div>
<div className="p-0 overflow-x-auto">
<table className="w-full text-left">
<thead className="text-[10px] uppercase text-zinc-500 bg-white/2">
<tr>
<th className="px-4 py-2 font-medium">Symbol</th>
<th className="px-4 py-2 font-medium">Size</th>
<th className="px-4 py-2 font-medium">Entry Price</th>
<th className="px-4 py-2 font-medium">Mark Price</th>
<th className="px-4 py-2 font-medium">PNL (ROE%)</th>
</tr>
</thead>
<tbody className="text-xs font-mono">
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="px-4 py-3 text-emerald-400">ETH-USD</td>
<td className="px-4 py-3 text-white">12.50 ETH</td>
<td className="px-4 py-3 text-zinc-300">2,150.00</td>
<td className="px-4 py-3 text-zinc-300">2,240.50</td>
<td className="px-4 py-3 text-emerald-500 font-medium">+$1,131.25 (4.2%)</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="col-span-1 border-l border-white/5 bg-zinc-950/30 flex flex-col">

<div className="grid grid-cols-2 p-1 gap-1 m-3 bg-zinc-900 rounded-lg border border-zinc-800">
<button className="py-1.5 text-xs font-medium rounded text-white bg-zinc-800 shadow-sm transition-all">Buy / Long</button>
<button className="py-1.5 text-xs font-medium rounded text-zinc-500 hover:text-zinc-300 transition-all">Sell / Short</button>
</div>
<div className="p-4 space-y-5">

<div className="flex items-center justify-between text-xs text-zinc-400">
<span>Order Type</span>
<div className="flex items-center gap-1 text-white cursor-pointer hover:text-indigo-400 transition-colors">
                                Limit <i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
</div>

<div className="space-y-1.5">
<label className="text-[10px] text-zinc-500 uppercase font-medium tracking-wider">Price (USD)</label>
<div className="relative group">
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-white font-mono focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-right group-hover:border-zinc-700" type="text" value="2238.50"/>
<span className="absolute left-3 top-2.5 text-xs text-zinc-500">USD</span>
</div>
</div>

<div className="space-y-1.5">
<label className="text-[10px] text-zinc-500 uppercase font-medium tracking-wider flex justify-between">
<span>Amount (ETH)</span>
<span className="text-zinc-400">Max: 4.2 ETH</span>
</label>
<div className="relative group">
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-white font-mono focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-right group-hover:border-zinc-700" type="text" value="1.5"/>
<span className="absolute left-3 top-2.5 text-xs text-zinc-500">ETH</span>
</div>
</div>

<div className="space-y-3 pt-2">
<div className="flex justify-between text-[10px] text-zinc-400 font-medium">
<span>Leverage</span>
<span className="text-indigo-400">20x</span>
</div>

<div className="h-6 relative flex items-center cursor-pointer group">
<div className="absolute w-full h-1 bg-zinc-800 rounded-full"></div>

<div className="absolute w-1/4 h-1 bg-indigo-500 rounded-full"></div>

<div className="absolute left-1/4 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform"></div>

<div className="absolute w-full flex justify-between px-0.5">
<div className="w-0.5 h-1 bg-zinc-700 rounded-full mt-3"></div>
<div className="w-0.5 h-1 bg-zinc-700 rounded-full mt-3"></div>
<div className="w-0.5 h-1 bg-zinc-700 rounded-full mt-3"></div>
<div className="w-0.5 h-1 bg-zinc-700 rounded-full mt-3"></div>
<div className="w-0.5 h-1 bg-zinc-700 rounded-full mt-3"></div>
</div>
</div>
<div className="flex justify-between text-[10px] text-zinc-600 font-mono">
<span>1x</span>
<span>25x</span>
<span>50x</span>
<span>100x</span>
</div>
</div>

<div className="border-t border-white/5 pt-4 space-y-2">
<div className="flex justify-between text-xs">
<span className="text-zinc-500">Cost</span>
<span className="text-zinc-300 font-mono">167.88 USD</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-zinc-500">Fees</span>
<span className="text-zinc-300 font-mono">0.08 USD</span>
</div>
</div>

<button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 rounded-lg text-sm shadow-[0_4px_14px_-4px_rgba(16,185,129,0.4)] transition-all transform active:scale-[0.98]">
                            Buy / Long ETH
                        </button>
</div>

<div className="flex-1 border-t border-white/5 flex flex-col overflow-hidden">
<div className="px-4 py-2 text-[10px] font-medium text-zinc-500 uppercase tracking-wider bg-zinc-900/30">Order Book</div>
<div className="flex-1 overflow-hidden p-2 space-y-0.5">

<div className="flex justify-between text-[10px] px-2 py-0.5 relative group cursor-pointer hover:bg-rose-500/10 rounded-sm">
<span className="text-rose-500 font-mono">2,241.50</span>
<span className="text-zinc-400 font-mono">12.4K</span>
<div className="absolute right-0 top-0 bottom-0 bg-rose-500/10 w-[30%] opacity-50 pointer-events-none"></div>
</div>
<div className="flex justify-between text-[10px] px-2 py-0.5 relative group cursor-pointer hover:bg-rose-500/10 rounded-sm">
<span className="text-rose-500 font-mono">2,241.00</span>
<span className="text-zinc-400 font-mono">4.2K</span>
<div className="absolute right-0 top-0 bottom-0 bg-rose-500/10 w-[10%] opacity-50 pointer-events-none"></div>
</div>

<div className="py-1 text-center text-[10px] text-zinc-500 font-mono my-1 border-y border-white/5 bg-white/2">2,240.50</div>

<div className="flex justify-between text-[10px] px-2 py-0.5 relative group cursor-pointer hover:bg-emerald-500/10 rounded-sm">
<span className="text-emerald-500 font-mono">2,240.00</span>
<span className="text-zinc-400 font-mono">54.1K</span>
<div className="absolute right-0 top-0 bottom-0 bg-emerald-500/10 w-[60%] opacity-50 pointer-events-none"></div>
</div>
<div className="flex justify-between text-[10px] px-2 py-0.5 relative group cursor-pointer hover:bg-emerald-500/10 rounded-sm">
<span className="text-emerald-500 font-mono">2,239.50</span>
<span className="text-zinc-400 font-mono">15.8K</span>
<div className="absolute right-0 top-0 bottom-0 bg-emerald-500/10 w-[25%] opacity-50 pointer-events-none"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/40 transition-colors group">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-200 mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/5">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Microsecond Latency</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Our matching engine processes orders in under 50 microseconds, ensuring you never miss a tick in volatile markets.
                    </p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/40 transition-colors group">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-200 mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/5">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Self-Custody</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Trade directly from your wallet. Smart contracts are audited by top-tier firms to guarantee fund security.
                    </p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/40 transition-colors group">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-200 mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/5">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Deep Liquidity</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Aggregated liquidity from top market makers ensures minimal slippage even on large institutional orders.
                    </p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mt-32 text-center pb-20">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Ready to start treading?</h2>
<p className="text-zinc-500 mb-8">Join thousands of traders executing billions in volume.</p>
<form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
<input className="bg-zinc-900/50 border border-zinc-800 text-white px-4 py-2.5 rounded-lg text-sm w-full focus:outline-none focus:border-indigo-500/50 transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-white text-zinc-950 font-medium px-6 py-2.5 rounded-lg text-sm hover:bg-zinc-200 transition-colors whitespace-nowrap">
                    Get Access
                </button>
</form>
</section>
</main>

<footer className="border-t border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-zinc-700 rounded-sm rotate-45"></div>
<span className="text-sm font-medium text-zinc-300 tracking-tight">TRADEX</span>
</div>
<div className="flex gap-8 text-xs text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Status</a>
<a className="hover:text-zinc-300 transition-colors" href="#">API</a>
</div>
<div className="text-xs text-zinc-600">
                © 2024 TradeX Protocol. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
