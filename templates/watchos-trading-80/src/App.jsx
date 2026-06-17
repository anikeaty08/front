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
      
<div className="max-w-[1600px] mx-auto">
<div className="mb-12 text-center">
<h1 className="text-3xl font-medium tracking-tight text-white mb-2">WatchOS Trading Interface</h1>
<p className="text-sm text-neutral-400 font-normal">32 Screen Explorations</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 place-items-center">

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-4 flex flex-col items-center justify-center relative shadow-2xl">
<div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mb-2">
<span className="text-xl font-semibold tracking-tighter">TRD</span>
</div>
<span className="text-xs text-neutral-500 font-medium tracking-widest uppercase">Securities</span>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-4 flex flex-col relative shadow-2xl overflow-hidden">
<div className="flex items-center gap-1 text-neutral-400 mb-1">
<iconify-icon className="text-xs" icon="solar:wallet-linear"></iconify-icon>
<span className="text-xs font-medium uppercase">Portfolio</span>
</div>
<div className="text-2xl font-medium tracking-tight mb-0.5">$24,592</div>
<div className="text-xs font-medium text-emerald-400 flex items-center gap-0.5 mb-3">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> +$342 (1.4%)
                </div>
<svg className="w-full h-12 stroke-emerald-400 fill-none mt-auto" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 100 30">
<path d="M0,25 L10,22 L20,28 L30,15 L40,18 L50,5 L60,10 L70,2 L80,8 L90,0 L100,5"></path>
<path className="fill-emerald-500/10 stroke-none" d="M0,25 L10,22 L20,28 L30,15 L40,18 L50,5 L60,10 L70,2 L80,8 L90,0 L100,5 L100,30 L0,30 Z"></path>
</svg>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-3.5 flex flex-col relative shadow-2xl">
<span className="text-xs font-medium text-neutral-400 mb-2 px-1">Top Gainers</span>
<div className="flex flex-col gap-1.5 overflow-hidden">
<div className="bg-neutral-900 rounded-2xl p-2 flex justify-between items-center">
<div>
<div className="text-sm font-medium tracking-tight">NVDA</div>
<div className="text-xs text-neutral-500 font-normal">420.50</div>
</div>
<span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-md">+4.2%</span>
</div>
<div className="bg-neutral-900 rounded-2xl p-2 flex justify-between items-center">
<div>
<div className="text-sm font-medium tracking-tight">META</div>
<div className="text-xs text-neutral-500 font-normal">280.12</div>
</div>
<span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-md">+2.8%</span>
</div>
</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-3.5 flex flex-col relative shadow-2xl">
<span className="text-xs font-medium text-neutral-400 mb-2 px-1">Top Losers</span>
<div className="flex flex-col gap-1.5 overflow-hidden">
<div className="bg-neutral-900 rounded-2xl p-2 flex justify-between items-center">
<div>
<div className="text-sm font-medium tracking-tight">TSLA</div>
<div className="text-xs text-neutral-500 font-normal">240.10</div>
</div>
<span className="text-xs font-medium text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded-md">-3.1%</span>
</div>
<div className="bg-neutral-900 rounded-2xl p-2 flex justify-between items-center">
<div>
<div className="text-sm font-medium tracking-tight">COIN</div>
<div className="text-xs text-neutral-500 font-normal">78.50</div>
</div>
<span className="text-xs font-medium text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded-md">-1.8%</span>
</div>
</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-3 flex flex-col relative shadow-2xl">
<div className="flex items-center justify-between mb-2 px-1">
<span className="text-sm font-medium tracking-tight">Watchlist</span>
<iconify-icon className="text-neutral-400" icon="solar:menu-dots-circle-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5 no-scrollbar overflow-y-auto">
<div className="flex justify-between items-center py-1 border-b border-neutral-800">
<span className="text-sm font-medium">AAPL</span>
<div className="text-right">
<div className="text-sm font-medium">178.20</div>
<div className="text-xs text-emerald-400 font-normal">+1.2%</div>
</div>
</div>
<div className="flex justify-between items-center py-1 border-b border-neutral-800">
<span className="text-sm font-medium">MSFT</span>
<div className="text-right">
<div className="text-sm font-medium">330.11</div>
<div className="text-xs text-rose-400 font-normal">-0.4%</div>
</div>
</div>
<div className="flex justify-between items-center py-1">
<span className="text-sm font-medium">AMZN</span>
<div className="text-right">
<div className="text-sm font-medium">134.50</div>
<div className="text-xs text-emerald-400 font-normal">+0.8%</div>
</div>
</div>
</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-3 flex flex-col relative shadow-2xl">
<div className="flex flex-col gap-1.5 no-scrollbar overflow-y-auto mt-1">
<div className="flex justify-between items-center py-1 border-b border-neutral-800">
<span className="text-sm font-medium">GOOGL</span>
<div className="text-right">
<div className="text-sm font-medium">130.20</div>
<div className="text-xs text-emerald-400 font-normal">+0.2%</div>
</div>
</div>
<div className="flex justify-between items-center py-1 border-b border-neutral-800">
<span className="text-sm font-medium">NFLX</span>
<div className="text-right">
<div className="text-sm font-medium">410.05</div>
<div className="text-xs text-rose-400 font-normal">-1.5%</div>
</div>
</div>
<div className="w-full mt-2 bg-neutral-900 text-neutral-300 rounded-full py-1.5 text-xs font-medium flex items-center justify-center gap-1">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Add Ticker
                    </div>
</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-3 flex flex-col relative shadow-2xl">
<div className="flex items-center justify-between mb-2 px-1">
<span className="text-sm font-medium tracking-tight text-emerald-400">Done</span>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-rose-500 text-base" icon="solar:minus-circle-linear"></iconify-icon>
<span className="text-sm font-medium">AAPL</span>
<iconify-icon className="ml-auto text-neutral-600" icon="solar:hamburger-menu-linear"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-rose-500 text-base" icon="solar:minus-circle-linear"></iconify-icon>
<span className="text-sm font-medium">MSFT</span>
<iconify-icon className="ml-auto text-neutral-600" icon="solar:hamburger-menu-linear"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-rose-500 text-base" icon="solar:minus-circle-linear"></iconify-icon>
<span className="text-sm font-medium">AMZN</span>
<iconify-icon className="ml-auto text-neutral-600" icon="solar:hamburger-menu-linear"></iconify-icon>
</div>
</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-4 flex flex-col items-center justify-center relative shadow-2xl">
<div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mb-4 relative">
<div className="absolute inset-0 border-2 border-emerald-500 rounded-full animate-ping opacity-20"></div>
<iconify-icon className="text-2xl text-emerald-400" icon="solar:microphone-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-300">Listening...</span>
<span className="text-xs font-normal text-neutral-500 mt-1">"Apple"</span>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-3 flex flex-col relative shadow-2xl">
<div className="bg-neutral-900 rounded-full px-3 py-1.5 flex items-center gap-2 mb-3">
<iconify-icon className="text-neutral-500 text-xs" icon="solar:magnifer-linear"></iconify-icon>
<span className="text-xs font-medium text-white">Apple</span>
</div>
<div className="flex flex-col gap-2">
<div className="bg-neutral-900/50 rounded-xl p-2 flex justify-between items-center border border-emerald-500/30">
<div>
<div className="text-sm font-medium text-emerald-400">AAPL</div>
<div className="text-xs text-neutral-400 font-normal">Apple Inc.</div>
</div>
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="bg-neutral-900 rounded-xl p-2 flex justify-between items-center">
<div>
<div className="text-sm font-medium">APLE</div>
<div className="text-xs text-neutral-400 font-normal">Hospitality</div>
</div>
</div>
</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-4 flex flex-col relative shadow-2xl overflow-hidden">
<div className="flex justify-between items-start mb-1">
<div className="bg-white text-black text-xs font-medium px-1.5 py-0.5 rounded-md tracking-tight">AAPL</div>
<iconify-icon className="text-neutral-400" icon="solar:star-linear"></iconify-icon>
</div>
<div className="text-2xl font-medium tracking-tight mt-2">$178.20</div>
<div className="text-sm font-medium text-emerald-400 mb-2">+2.40 (1.2%)</div>
<svg className="w-full h-16 stroke-emerald-400 fill-none mt-auto absolute bottom-0 left-0 right-0 opacity-80" strokeLinecap="round" strokeWidth="2" viewbox="0 0 100 40">
<path d="M0,35 L10,30 L20,38 L30,20 L40,25 L50,15 L60,18 L70,5 L80,12 L90,2 L100,8"></path>
</svg>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-3 flex flex-col relative shadow-2xl">
<svg className="w-full h-16 stroke-emerald-400 fill-none mb-2" strokeLinecap="round" strokeWidth="2" viewbox="0 0 100 40">
<path d="M0,35 L10,30 L20,38 L30,20 L40,25 L50,15 L60,18 L70,5 L80,12 L90,2 L100,8"></path>
</svg>
<div className="flex justify-between items-center bg-neutral-900 rounded-full p-1 mt-auto">
<span className="text-xs font-medium text-neutral-400 px-2 py-1">1D</span>
<span className="text-xs font-medium text-black bg-white rounded-full px-2 py-1">1W</span>
<span className="text-xs font-medium text-neutral-400 px-2 py-1">1M</span>
<span className="text-xs font-medium text-neutral-400 px-2 py-1">1Y</span>
</div>
<div className="flex gap-2 mt-3">
<button className="flex-1 bg-emerald-500 text-black text-sm font-medium rounded-full py-1.5">Buy</button>
<button className="flex-1 bg-neutral-800 text-white text-sm font-medium rounded-full py-1.5">Sell</button>
</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-4 flex flex-col relative shadow-2xl">
<span className="text-xs font-medium text-neutral-400 mb-2">Key Stats</span>
<div className="grid grid-cols-2 gap-y-3 gap-x-2">
<div>
<div className="text-xs text-neutral-500 font-normal">Open</div>
<div className="text-sm font-medium">176.50</div>
</div>
<div>
<div className="text-xs text-neutral-500 font-normal">High</div>
<div className="text-sm font-medium">179.10</div>
</div>
<div>
<div className="text-xs text-neutral-500 font-normal">Low</div>
<div className="text-sm font-medium">175.20</div>
</div>
<div>
<div className="text-xs text-neutral-500 font-normal">Vol</div>
<div className="text-sm font-medium">45.2M</div>
</div>
</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-3.5 flex flex-col relative shadow-2xl bg-gradient-to-b from-neutral-900 to-black">
<div className="flex items-center gap-1 mb-3">
<iconify-icon className="text-neutral-400 text-xs" icon="solar:pie-chart-2-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-400 uppercase tracking-wide">Your Position</span>
</div>
<div className="text-xl font-medium tracking-tight mb-1">24.5 Shares</div>
<div className="text-sm font-normal text-neutral-400 mb-3">$4,365.90</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">Return</span>
<span className="text-emerald-400 font-medium">+$210.50</span>
</div>
<div className="w-full bg-neutral-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
<div className="bg-emerald-500 h-full w-[65%] rounded-full"></div>
</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-3 flex flex-col relative shadow-2xl">
<span className="text-xs font-medium text-neutral-400 mb-2 px-1">Latest News</span>
<div className="bg-neutral-900 rounded-2xl overflow-hidden">
<div className="h-16 bg-neutral-800 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
<iconify-icon className="absolute bottom-2 left-2 text-white/50 text-xl" icon="solar:apple-linear"></iconify-icon>
</div>
<div className="p-2">
<p className="text-xs font-medium leading-tight line-clamp-2 mb-1">Apple announces new silicon chips at special event.</p>
<span className="text-[10px] text-neutral-500">2h ago • Bloomberg</span>
</div>
</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-3 flex flex-col items-center justify-center gap-3 relative shadow-2xl">
<div className="text-center mb-2">
<div className="text-sm font-medium tracking-tight">AAPL</div>
<div className="text-xs text-neutral-400">$178.20</div>
</div>
<button className="w-full bg-emerald-500 text-black rounded-full py-2.5 text-sm font-medium flex items-center justify-center gap-1.5">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon> Buy
                </button>
<button className="w-full bg-neutral-900 text-white rounded-full py-2.5 text-sm font-medium flex items-center justify-center gap-1.5 border border-neutral-800">
<iconify-icon className="text-base" icon="solar:arrow-left-down-linear"></iconify-icon> Sell
                </button>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-2 flex flex-col relative shadow-2xl">
<div className="text-center py-2">
<span className="text-sm text-neutral-500">$</span><span className="text-2xl font-medium tracking-tight">500</span><span className="text-emerald-500 ml-1 animate-pulse">|</span>
</div>
<div className="grid grid-cols-3 gap-1 flex-1 mt-1">
<button className="bg-neutral-900 rounded-xl text-sm font-medium">1</button>
<button className="bg-neutral-900 rounded-xl text-sm font-medium">2</button>
<button className="bg-neutral-900 rounded-xl text-sm font-medium">3</button>
<button className="bg-neutral-900 rounded-xl text-sm font-medium">4</button>
<button className="bg-neutral-900 rounded-xl text-sm font-medium">5</button>
<button className="bg-neutral-900 rounded-xl text-sm font-medium">6</button>
<button className="bg-neutral-900 rounded-xl text-sm font-medium text-neutral-500">.</button>
<button className="bg-neutral-900 rounded-xl text-sm font-medium">0</button>
<button className="bg-neutral-900 rounded-xl text-sm font-medium flex items-center justify-center text-neutral-400"><iconify-icon icon="solar:backspace-linear"></iconify-icon></button>
</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-3 flex flex-col relative shadow-2xl justify-center">
<span className="text-xs font-medium text-neutral-400 mb-3 text-center">Order Type</span>
<div className="flex flex-col gap-2">
<div className="bg-neutral-800 border border-emerald-500 rounded-2xl p-2.5 flex justify-between items-center relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
<span className="text-sm font-medium pl-1 text-white">Market</span>
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="bg-neutral-900 rounded-2xl p-2.5 flex justify-between items-center">
<span className="text-sm font-medium text-neutral-400">Limit</span>
</div>
</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-4 flex flex-col relative shadow-2xl">
<span className="text-xs font-medium text-emerald-400 uppercase tracking-wide mb-2">Review Buy</span>
<div className="flex justify-between items-end mb-3">
<div className="text-2xl font-medium tracking-tight">$500</div>
<div className="text-xs text-neutral-400 mb-1">AAPL</div>
</div>
<div className="flex flex-col gap-1 border-t border-neutral-800 pt-2 text-xs">
<div className="flex justify-between text-neutral-400">
<span>Est. Shares</span>
<span className="text-white">2.805</span>
</div>
<div className="flex justify-between text-neutral-400">
<span>Price</span>
<span className="text-white">Market</span>
</div>
</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-3 flex flex-col items-center justify-between relative shadow-2xl">
<div className="text-center mt-4">
<div className="text-sm font-medium tracking-tight">Buy AAPL</div>
<div className="text-xl font-medium mt-1">$500.00</div>
</div>
<div className="w-full bg-neutral-900 rounded-full h-12 p-1 relative flex items-center mb-2 overflow-hidden border border-neutral-800">
<span className="text-xs font-medium text-neutral-500 absolute w-full text-center pointer-events-none pl-6">Swipe to Buy</span>
<div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-black z-10 shadow-lg translate-x-1">
<iconify-icon icon="solar:double-alt-arrow-right-linear"></iconify-icon>
</div>
<div className="absolute left-0 top-0 bottom-0 bg-emerald-500/20 w-8 z-0"></div>
</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-4 flex flex-col items-center justify-center gap-3 relative shadow-2xl">
<div className="w-12 h-12 border-4 border-neutral-800 border-t-emerald-500 rounded-full animate-spin"></div>
<div className="text-center">
<div className="text-sm font-medium">Executing...</div>
<div className="text-xs text-neutral-500 mt-1">Market Order</div>
</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-4 flex flex-col items-center justify-center relative shadow-2xl bg-gradient-to-b from-emerald-900/40 to-black">
<div className="w-14 h-14 bg-emerald-500 text-black rounded-full flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
<iconify-icon className="text-2xl" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="text-sm font-medium tracking-tight">Order Filled</div>
<div className="text-xs text-neutral-400 mt-1 text-center">Purchased 2.805<br/>shares of AAPL</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-3 flex flex-col relative shadow-2xl">
<span className="text-xs font-medium text-neutral-400 text-center mb-2">Sell AAPL</span>
<div className="flex-1 flex items-center justify-between px-2">
<button className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-rose-400 border border-neutral-800">
<iconify-icon icon="solar:minus-linear"></iconify-icon>
</button>
<div className="text-2xl font-medium tracking-tight">10</div>
<button className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-emerald-400 border border-neutral-800">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>
<div className="text-center text-xs text-neutral-500 mb-2">Shares</div>
<button className="w-full bg-neutral-800 text-white rounded-full py-2 text-sm font-medium">Continue</button>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-3 flex flex-col relative shadow-2xl">
<div className="flex items-center justify-between mb-2 px-1">
<span className="text-sm font-medium tracking-tight">Alerts</span>
<iconify-icon className="text-neutral-400" icon="solar:bell-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-2">
<div className="bg-neutral-900 rounded-xl p-2">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium">AAPL</span>
<span className="text-xs font-medium text-emerald-400">Active</span>
</div>
<div className="text-xs text-neutral-400">Price &gt; $180.00</div>
</div>
<div className="bg-neutral-900 rounded-xl p-2">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium">TSLA</span>
<span className="text-xs font-medium text-neutral-500">Off</span>
</div>
<div className="text-xs text-neutral-400">Price &lt; $200.00</div>
</div>
</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-4 flex flex-col justify-center relative shadow-2xl">
<div className="text-center mb-4">
<div className="text-xs text-neutral-400">Target Price</div>
<div className="text-2xl font-medium text-emerald-400 mt-1">$185.50</div>
</div>
<div className="w-full bg-neutral-800 h-2 rounded-full relative mb-4">
<div className="absolute left-0 top-0 h-full w-[70%] bg-emerald-500 rounded-full"></div>
<div className="absolute left-[70%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full shadow-md border-2 border-emerald-500"></div>
</div>
<div className="flex justify-between text-xs text-neutral-500 font-medium px-1">
<span>150</span>
<span>200</span>
</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-2 flex flex-col relative shadow-2xl justify-start pt-6">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/40 via-black to-black -z-10"></div>
<div className="bg-neutral-900/90 backdrop-blur-md rounded-2xl p-3 border border-neutral-700/50 shadow-xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
<div className="flex items-center gap-2 mb-1">
<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon className="text-[10px]" icon="solar:bell-bing-bold"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-300 uppercase tracking-wide">Price Alert</span>
</div>
<div className="text-sm font-medium leading-tight mb-1">AAPL crossed $180.00</div>
<div className="text-xs text-neutral-400">Current: $180.12</div>
</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-4 flex flex-col relative shadow-2xl">
<div className="flex items-center gap-2 mb-3">
<div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center">
<iconify-icon className="text-xs" icon="solar:user-linear"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight">Account</span>
</div>
<div className="bg-neutral-900 rounded-xl p-2.5 mb-2">
<div className="text-xs text-neutral-400 mb-0.5">Buying Power</div>
<div className="text-base font-medium tracking-tight">$4,250.00</div>
</div>
<div className="bg-neutral-900 rounded-xl p-2.5">
<div className="text-xs text-neutral-400 mb-0.5">Withdrawable</div>
<div className="text-base font-medium tracking-tight">$1,100.00</div>
</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-3 flex flex-col relative shadow-2xl">
<span className="text-xs font-medium text-neutral-400 mb-2 px-1">Recent Activity</span>
<div className="flex flex-col gap-2 overflow-y-auto no-scrollbar">
<div className="flex justify-between items-center bg-neutral-900/50 p-2 rounded-xl">
<div>
<div className="text-xs font-medium text-emerald-400">Buy AAPL</div>
<div className="text-[10px] text-neutral-500">Oct 24</div>
</div>
<div className="text-xs font-medium">-$500.00</div>
</div>
<div className="flex justify-between items-center bg-neutral-900/50 p-2 rounded-xl">
<div>
<div className="text-xs font-medium text-rose-400">Sell TSLA</div>
<div className="text-[10px] text-neutral-500">Oct 22</div>
</div>
<div className="text-xs font-medium">+$1,240.00</div>
</div>
<div className="flex justify-between items-center bg-neutral-900/50 p-2 rounded-xl">
<div>
<div className="text-xs font-medium text-blue-400">Deposit</div>
<div className="text-[10px] text-neutral-500">Oct 20</div>
</div>
<div className="text-xs font-medium">+$1,000.00</div>
</div>
</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-3 flex flex-col relative shadow-2xl">
<span className="text-sm font-medium tracking-tight mb-2 px-1 text-center w-full block">Settings</span>
<div className="flex flex-col gap-1">
<div className="bg-neutral-900 rounded-xl p-2.5 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:bell-linear"></iconify-icon>
<span className="text-xs font-medium text-white">Notifications</span>
</div>
<div className="bg-neutral-900 rounded-xl p-2.5 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:shield-keyhole-linear"></iconify-icon>
<span className="text-xs font-medium text-white">Security</span>
</div>
<div className="bg-neutral-900 rounded-xl p-2.5 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:palette-linear"></iconify-icon>
<span className="text-xs font-medium text-white">Appearance</span>
</div>
</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-3 flex flex-col relative shadow-2xl justify-center">
<div className="flex flex-col gap-3">
<div className="flex justify-between items-center px-1">
<span className="text-xs font-medium">Push Alerts</span>

<div className="w-9 h-5 bg-emerald-500 rounded-full relative flex items-center p-0.5">
<div className="w-4 h-4 bg-white rounded-full translate-x-4 shadow-sm"></div>
</div>
</div>
<div className="flex justify-between items-center px-1">
<span className="text-xs font-medium">Live Data</span>

<div className="w-9 h-5 bg-emerald-500 rounded-full relative flex items-center p-0.5">
<div className="w-4 h-4 bg-white rounded-full translate-x-4 shadow-sm"></div>
</div>
</div>
<div className="flex justify-between items-center px-1">
<span className="text-xs font-medium text-neutral-400">Sounds</span>

<div className="w-9 h-5 bg-neutral-700 rounded-full relative flex items-center p-0.5">
<div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-4 flex flex-col relative shadow-2xl justify-center items-center">
<div className="w-full bg-neutral-900/80 rounded-2xl p-2 border border-neutral-800">
<div className="flex justify-between items-end mb-1">
<span className="text-xs font-medium text-emerald-400">TRD</span>
<span className="text-sm font-medium tracking-tight">$24.5k</span>
</div>
<svg className="w-full h-8 stroke-emerald-400 fill-none" strokeLinecap="round" strokeWidth="2" viewbox="0 0 100 20">
<path d="M0,15 L20,12 L40,18 L60,5 L80,8 L100,2"></path>
</svg>
</div>
<span className="text-[10px] text-neutral-500 mt-4 text-center">Modular Large<br/>Complication</span>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-4 flex flex-col relative shadow-2xl justify-center items-center">
<div className="w-16 h-16 rounded-full border-2 border-neutral-800 flex flex-col items-center justify-center relative">
<svg className="absolute inset-0 w-full h-full -rotate-90">
<circle cx="30" cy="30" fill="none" r="28" stroke="#10b981" stroke-dasharray="175" stroke-dashoffset="40" strokeWidth="3"></circle>
</svg>
<span className="text-[10px] font-medium text-neutral-400 leading-none mb-0.5">AAPL</span>
<span className="text-sm font-medium tracking-tight leading-none">178</span>
</div>
<span className="text-[10px] text-neutral-500 mt-6 text-center">Circular<br/>Complication</span>
</div>

<div className="w-44 h-52 bg-black rounded-[2.5rem] border-[4px] border-neutral-800 p-4 flex flex-col items-center justify-center text-center relative shadow-2xl">
<div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-500 mb-3">
<iconify-icon className="text-xl" icon="solar:wifi-router-minimalistic-linear"></iconify-icon>
</div>
<div className="text-sm font-medium tracking-tight text-white mb-1">No Connection</div>
<div className="text-xs text-neutral-500">Check your iPhone<br/>or Wi-Fi.</div>
</div>
</div>
</div>

    </>
  );
}
