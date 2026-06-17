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
      

<aside className="w-64 border-r border-zinc-800/60 bg-zinc-950/50 flex-col hidden lg:flex h-screen sticky top-0 p-6">
<div className="text-xl tracking-tighter font-medium text-zinc-100 mb-10 flex items-center gap-2">
<iconify-icon className="text-zinc-100" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
            betobat
        </div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-zinc-800/40 text-zinc-100 rounded-md transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 rounded-md transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:pie-chart-2-linear" strokeWidth="1.5"></iconify-icon>
                Portfolio
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 rounded-md transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
                Market
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 rounded-md transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
                Transactions
            </a>
</nav>
<div className="mt-auto border-t border-zinc-800/60 pt-4 flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-100 font-medium border border-zinc-700">
                JD
            </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-100">John Doe</span>
<span className="text-xs text-zinc-500">Pro Trader</span>
</div>
<iconify-icon className="ml-auto text-zinc-500 hover:text-zinc-300 cursor-pointer" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
</aside>

<main className="flex-1 p-6 md:p-10 max-w-6xl mx-auto w-full">

<header className="flex lg:hidden justify-between items-center mb-8 border-b border-zinc-800/60 pb-4">
<div className="text-xl tracking-tighter font-medium text-zinc-100">betobat</div>
<iconify-icon className="text-xl text-zinc-400" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</header>

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl tracking-tight font-medium text-zinc-100">Market Overview</h1>
<p className="text-sm text-zinc-500 mt-1">Trade IPL player stocks based on live performance metrics.</p>
</div>
<div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium text-zinc-400">Market Open</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2 text-sm text-zinc-400">
<iconify-icon icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
                        Available Balance
                    </div>
</div>
<div className="text-3xl tracking-tight font-medium text-zinc-100 mb-6">₹42,500.00</div>
<div className="flex gap-2">
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors" placeholder="Amount" type="number"/>
<button className="bg-zinc-100 text-zinc-950 px-4 py-2 rounded-md text-sm font-medium hover:bg-white transition-colors flex items-center justify-center">
                        Add
                    </button>
<button className="bg-zinc-800 text-zinc-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-zinc-700 transition-colors flex items-center justify-center">
                        Withdraw
                    </button>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 relative overflow-hidden">
<div className="absolute -right-4 -top-4 text-zinc-800/30">
<iconify-icon className="text-8xl" icon="solar:graph-up-linear" strokeWidth="1"></iconify-icon>
</div>
<div className="relative z-10">
<div className="text-xs text-zinc-500 mb-1 uppercase tracking-wider font-medium">Top Gainer</div>
<div className="text-lg tracking-tight font-medium text-zinc-100 mb-1">V. Kohli</div>
<div className="text-xs text-zinc-400 mb-4">RCB • Batter</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium text-zinc-100">₹1,245</span>
<span className="text-sm text-emerald-400 flex items-center">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
                            +12.4%
                        </span>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 relative overflow-hidden">
<div className="absolute -right-4 -top-4 text-zinc-800/30">
<iconify-icon className="text-8xl" icon="solar:graph-down-linear" strokeWidth="1"></iconify-icon>
</div>
<div className="relative z-10">
<div className="text-xs text-zinc-500 mb-1 uppercase tracking-wider font-medium">Top Loser</div>
<div className="text-lg tracking-tight font-medium text-zinc-100 mb-1">R. Sharma</div>
<div className="text-xs text-zinc-400 mb-4">MI • Batter</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium text-zinc-100">₹890</span>
<span className="text-sm text-rose-400 flex items-center">
<iconify-icon icon="solar:arrow-right-down-linear" strokeWidth="1.5"></iconify-icon>
                            -4.2%
                        </span>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg tracking-tight font-medium text-zinc-100">Active Market</h2>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" icon="solar:magnifier-linear" strokeWidth="1.5"></iconify-icon>
<input className="bg-zinc-900 border border-zinc-800 rounded-md pl-9 pr-4 py-1.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 w-48 md:w-64" placeholder="Search players..." type="text"/>
</div>
</div>
<div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/30">
<div className="grid grid-cols-4 md:grid-cols-5 gap-4 p-4 border-b border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-500 uppercase tracking-wider">
<div className="col-span-2 md:col-span-1">Player</div>
<div className="hidden md:block">Role/Team</div>
<div className="text-right">Price</div>
<div className="text-right">24h Change</div>
<div className="text-right">Action</div>
</div>

<div className="grid grid-cols-4 md:grid-cols-5 gap-4 p-4 items-center border-b border-zinc-800/50 hover:bg-zinc-800/20 transition-colors group">
<div className="col-span-2 md:col-span-1 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-medium text-zinc-400 group-hover:bg-zinc-700 transition-colors">
                            VK
                        </div>
<span className="text-sm font-medium text-zinc-100">Virat Kohli</span>
</div>
<div className="hidden md:flex flex-col">
<span className="text-sm text-zinc-300">Batter</span>
<span className="text-xs text-zinc-500">RCB</span>
</div>
<div className="text-right text-sm font-medium text-zinc-100">₹1,245.00</div>
<div className="text-right text-sm text-emerald-400">+12.4%</div>
<div className="text-right flex justify-end gap-2">
<button className="px-3 py-1.5 rounded-md bg-zinc-800 text-zinc-300 text-xs font-medium hover:bg-zinc-700 transition-colors border border-zinc-700 hover:text-white">Sell</button>
<button className="px-3 py-1.5 rounded-md bg-zinc-100 text-zinc-950 text-xs font-medium hover:bg-white transition-colors">Buy</button>
</div>
</div>

<div className="grid grid-cols-4 md:grid-cols-5 gap-4 p-4 items-center border-b border-zinc-800/50 hover:bg-zinc-800/20 transition-colors group">
<div className="col-span-2 md:col-span-1 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-medium text-zinc-400 group-hover:bg-zinc-700 transition-colors">
                            MS
                        </div>
<span className="text-sm font-medium text-zinc-100">MS Dhoni</span>
</div>
<div className="hidden md:flex flex-col">
<span className="text-sm text-zinc-300">Wk/Batter</span>
<span className="text-xs text-zinc-500">CSK</span>
</div>
<div className="text-right text-sm font-medium text-zinc-100">₹1,150.50</div>
<div className="text-right text-sm text-emerald-400">+2.1%</div>
<div className="text-right flex justify-end gap-2">
<button className="px-3 py-1.5 rounded-md bg-zinc-800 text-zinc-300 text-xs font-medium hover:bg-zinc-700 transition-colors border border-zinc-700 hover:text-white">Sell</button>
<button className="px-3 py-1.5 rounded-md bg-zinc-100 text-zinc-950 text-xs font-medium hover:bg-white transition-colors">Buy</button>
</div>
</div>

<div className="grid grid-cols-4 md:grid-cols-5 gap-4 p-4 items-center border-b border-zinc-800/50 hover:bg-zinc-800/20 transition-colors group">
<div className="col-span-2 md:col-span-1 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-medium text-zinc-400 group-hover:bg-zinc-700 transition-colors">
                            JB
                        </div>
<span className="text-sm font-medium text-zinc-100">Jasprit Bumrah</span>
</div>
<div className="hidden md:flex flex-col">
<span className="text-sm text-zinc-300">Bowler</span>
<span className="text-xs text-zinc-500">MI</span>
</div>
<div className="text-right text-sm font-medium text-zinc-100">₹980.00</div>
<div className="text-right text-sm text-rose-400">-1.5%</div>
<div className="text-right flex justify-end gap-2">
<button className="px-3 py-1.5 rounded-md bg-zinc-800 text-zinc-300 text-xs font-medium hover:bg-zinc-700 transition-colors border border-zinc-700 hover:text-white">Sell</button>
<button className="px-3 py-1.5 rounded-md bg-zinc-100 text-zinc-950 text-xs font-medium hover:bg-white transition-colors">Buy</button>
</div>
</div>

<div className="grid grid-cols-4 md:grid-cols-5 gap-4 p-4 items-center hover:bg-zinc-800/20 transition-colors group">
<div className="col-span-2 md:col-span-1 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-medium text-zinc-400 group-hover:bg-zinc-700 transition-colors">
                            RS
                        </div>
<span className="text-sm font-medium text-zinc-100">Rohit Sharma</span>
</div>
<div className="hidden md:flex flex-col">
<span className="text-sm text-zinc-300">Batter</span>
<span className="text-xs text-zinc-500">MI</span>
</div>
<div className="text-right text-sm font-medium text-zinc-100">₹890.00</div>
<div className="text-right text-sm text-rose-400">-4.2%</div>
<div className="text-right flex justify-end gap-2">
<button className="px-3 py-1.5 rounded-md bg-zinc-800 text-zinc-300 text-xs font-medium hover:bg-zinc-700 transition-colors border border-zinc-700 hover:text-white">Sell</button>
<button className="px-3 py-1.5 rounded-md bg-zinc-100 text-zinc-950 text-xs font-medium hover:bg-white transition-colors">Buy</button>
</div>
</div>
</div>
<div className="mt-4 flex justify-center">
<button className="text-xs font-medium text-zinc-400 hover:text-zinc-100 flex items-center gap-1 transition-colors">
                    View full market
                    <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</main>

    </>
  );
}
