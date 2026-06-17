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
      

<nav className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="font-semibold tracking-tighter text-xl text-zinc-100 flex items-center gap-2" href="#">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="24"></iconify-icon>
                    SKINBID
                </a>

<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
<a className="text-zinc-100 transition-colors" href="#">Live Auctions</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Market</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Sell</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Activity</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full hover:bg-zinc-800/50 text-zinc-400 hover:text-zinc-100 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full hover:bg-zinc-800/50 text-zinc-400 hover:text-zinc-100 transition-colors relative">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
</button>

<button className="flex items-center gap-2 bg-zinc-100 hover:bg-white text-zinc-950 px-4 py-2 rounded-md text-sm font-semibold transition-colors">
<iconify-icon icon="solar:gamepad-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Sign in with Steam
                </button>
</div>
</div>
</nav>

<main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8 md:py-12 flex flex-col gap-12">

<section className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto py-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 mb-4">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                1,204 Active Auctions
            </div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
                The premier marketplace for <br className="hidden sm:block"/> high-tier CS2 skins.
            </h1>
<p className="text-base text-zinc-400 max-w-xl">
                Connect your Steam account to bid on exclusive items, track rare floats, and trade securely with our automated bot system.
            </p>
</section>

<div className="flex flex-col lg:flex-row gap-8">

<aside className="w-full lg:w-64 flex flex-col gap-8 shrink-0">

<div className="flex flex-col gap-3">
<h3 className="text-sm font-semibold text-zinc-100 tracking-tight">Search</h3>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-md py-2 pl-9 pr-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition-colors" placeholder="Dragon Lore, Howl..." type="text"/>
</div>
</div>

<div className="flex flex-col gap-3">
<h3 className="text-sm font-semibold text-zinc-100 tracking-tight">Category</h3>
<div className="flex flex-col gap-2">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center group-hover:border-zinc-500 transition-colors relative">

<div className="w-2 h-2 bg-zinc-100 rounded-sm absolute opacity-100"></div>
</div>
<span className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">Knives</span>
<span className="text-xs text-zinc-600 ml-auto">342</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center group-hover:border-zinc-500 transition-colors"></div>
<span className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">Gloves</span>
<span className="text-xs text-zinc-600 ml-auto">128</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center group-hover:border-zinc-500 transition-colors"></div>
<span className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">Rifles</span>
<span className="text-xs text-zinc-600 ml-auto">891</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center group-hover:border-zinc-500 transition-colors"></div>
<span className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">Pistols</span>
<span className="text-xs text-zinc-600 ml-auto">453</span>
</label>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold text-zinc-100 tracking-tight">Price Range</h3>
<span className="text-xs text-zinc-500">$0 - $10k+</span>
</div>
<div className="relative w-full h-4 flex items-center">

<div className="absolute w-full h-1 bg-zinc-800 rounded-full"></div>

<div className="absolute w-2/3 left-[10%] h-1 bg-zinc-400 rounded-full"></div>

<div className="absolute left-[10%] w-3 h-3 bg-zinc-100 rounded-full shadow border border-zinc-300 -translate-x-1/2 cursor-grab"></div>

<div className="absolute left-[76%] w-3 h-3 bg-zinc-100 rounded-full shadow border border-zinc-300 -translate-x-1/2 cursor-grab"></div>
</div>
<div className="flex items-center gap-2">
<div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-md px-3 py-1.5 flex items-center">
<span className="text-zinc-500 text-sm mr-1">$</span>
<input className="bg-transparent w-full text-sm text-zinc-100 focus:outline-none" readonly="" type="text" value="100"/>
</div>
<span className="text-zinc-600">-</span>
<div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-md px-3 py-1.5 flex items-center">
<span className="text-zinc-500 text-sm mr-1">$</span>
<input className="bg-transparent w-full text-sm text-zinc-100 focus:outline-none" readonly="" type="text" value="8500"/>
</div>
</div>
</div>

<div className="flex items-center justify-between mt-2">
<div className="flex flex-col">
<span className="text-sm font-semibold text-zinc-100 tracking-tight">StatTrak™ Only</span>
<span className="text-xs text-zinc-500">Show items with kill counters</span>
</div>
<div className="w-9 h-5 bg-zinc-800 rounded-full relative cursor-pointer border border-zinc-700 transition-colors">
<div className="w-3 h-3 bg-zinc-400 rounded-full absolute left-1 top-1 transition-transform"></div>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col gap-6">

<div className="flex items-center justify-between border-b border-zinc-800/50 pb-4">
<span className="text-sm text-zinc-400">Showing <span className="text-zinc-100 font-medium">24</span> auctions</span>

<div className="relative flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-md px-3 py-1.5 cursor-pointer hover:border-zinc-700 transition-colors">
<span className="text-sm text-zinc-300">Ending Soonest</span>
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="flex flex-col bg-zinc-900/40 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors group relative glow-red">
<div className="absolute top-3 left-3 z-10">
<span className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider bg-red-500/10 text-red-400 border border-red-500/20 rounded">Covert</span>
</div>

<div className="h-40 w-full relative bg-zinc-950 flex items-center justify-center p-6 border-b border-zinc-800/50">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/40 via-zinc-950 to-zinc-950 opacity-50 group-hover:opacity-70 transition-opacity"></div>
<span className="text-zinc-700 font-semibold text-2xl tracking-tighter z-10 uppercase transform -rotate-12 opacity-50">Knife</span>
</div>
<div className="flex flex-col flex-1 pt-4 pr-4 pb-4 pl-4 gap-x-4 gap-y-4">
<div className="">
<h3 className="text-base font-semibold text-zinc-100 tracking-tight truncate">★ Karambit | Crimson Web</h3>
<p className="text-xs text-zinc-400 mt-1">Minimal Wear • Float: 0.084</p>
</div>
<div className="flex items-end justify-between mt-auto">
<div className="flex flex-col gap-1">
<span className="text-xs text-zinc-500">Current Bid</span>
<span className="text-lg font-semibold text-zinc-100 tracking-tight">$1,450.00</span>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-xs text-zinc-500 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>
                                        Ends in
                                    </span>
<span className="text-sm font-medium text-orange-400">00:14:23</span>
</div>
</div>
<button className="hover:bg-zinc-700 transition-colors cursor-pointer text-sm font-medium text-zinc-100 bg-zinc-800 w-full border-zinc-700 border rounded-md pt-2 pb-2" onclick="window.location.href='/skin'" role="button">
                                Place Bid
                            </button>
</div>
</article>

<article className="flex flex-col bg-zinc-900/40 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors group relative glow-purple">
<div className="absolute top-3 left-3 z-10 flex gap-1">
<span className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded">Restricted</span>
<span className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded">StatTrak™</span>
</div>
<div className="h-40 w-full relative bg-zinc-950 flex items-center justify-center p-6 border-b border-zinc-800/50">

<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-purple-900/20 to-pink-900/20 opacity-50 group-hover:opacity-70 transition-opacity"></div>
<span className="text-zinc-700 font-semibold text-2xl tracking-tighter z-10 uppercase transform -rotate-12 opacity-50">AWP</span>
</div>
<div className="p-4 flex flex-col flex-1 gap-4">
<div>
<h3 className="text-base font-semibold text-zinc-100 tracking-tight truncate">AWP | Neo-Noir</h3>
<p className="text-xs text-zinc-400 mt-1">Factory New • Float: 0.012</p>
</div>
<div className="flex items-end justify-between mt-auto">
<div className="flex flex-col gap-1">
<span className="text-xs text-zinc-500">Current Bid</span>
<span className="text-lg font-semibold text-zinc-100 tracking-tight">$85.50</span>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-xs text-zinc-500 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>
                                        Ends in
                                    </span>
<span className="text-sm font-medium text-zinc-300">2h 45m</span>
</div>
</div>
<button className="hover:bg-zinc-700 transition-colors text-sm font-medium text-zinc-100 bg-zinc-800 w-full border-zinc-700 border rounded-md pt-2 pb-2" onclick="window.location.href='/skin'">
                                Place Bid
                            </button>
</div>
</article>

<article className="flex flex-col bg-zinc-900/40 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors group relative">
<div className="absolute top-3 left-3 z-10">
<span className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider bg-pink-500/10 text-pink-400 border border-pink-500/20 rounded">Classified</span>
</div>
<div className="h-40 w-full relative bg-zinc-950 flex items-center justify-center p-6 border-b border-zinc-800/50">

<div className="absolute inset-0 opacity-20 bg-[radial-gradient(#52525b_1px,transparent_1px)] [background-size:8px_8px]"></div>
<span className="text-zinc-700 font-semibold text-2xl tracking-tighter z-10 uppercase transform -rotate-12 opacity-50">AK-47</span>
</div>
<div className="p-4 flex flex-col flex-1 gap-4">
<div className="">
<h3 className="text-base font-semibold text-zinc-100 tracking-tight truncate">AK-47 | Redline</h3>
<p className="text-xs text-zinc-400 mt-1">Field-Tested • Float: 0.151</p>
<p className="text-[10px] text-zinc-500 mt-1 flex gap-1 items-center">
<iconify-icon icon="solar:sticker-smile-square-linear" width="12"></iconify-icon>
                                    4x iBUYPOWER (Holo) Cologne 2014
                                </p>
</div>
<div className="flex items-end justify-between mt-auto">
<div className="flex flex-col gap-1">
<span className="text-xs text-zinc-500">Starting Bid</span>
<span className="text-lg font-semibold text-zinc-100 tracking-tight">$45.00</span>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-xs text-zinc-500 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>
                                        Ends in
                                    </span>
<span className="text-sm font-medium text-zinc-300">5h 12m</span>
</div>
</div>
<button className="w-full bg-zinc-100 hover:bg-white text-zinc-950 text-sm font-semibold py-2 rounded-md transition-colors" onclick="window.location.href='/skin'">
                                Be First to Bid
                            </button>
</div>
</article>

<article className="flex flex-col bg-zinc-900/40 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors group relative glow-gold">
<div className="absolute top-3 left-3 z-10">
<span className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded">Extraordinary</span>
</div>
<div className="h-40 w-full relative bg-zinc-950 flex items-center justify-center p-6 border-b border-zinc-800/50">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-900/20 via-zinc-950 to-zinc-950 opacity-50 group-hover:opacity-70 transition-opacity"></div>
<span className="text-zinc-700 font-semibold text-2xl tracking-tighter z-10 uppercase transform -rotate-12 opacity-50">Gloves</span>
</div>
<div className="p-4 flex flex-col flex-1 gap-4">
<div>
<h3 className="text-base font-semibold text-zinc-100 tracking-tight truncate">★ Sport Gloves | Vice</h3>
<p className="text-xs text-zinc-400 mt-1">Field-Tested • Float: 0.210</p>
</div>
<div className="flex items-end justify-between mt-auto">
<div className="flex flex-col gap-1">
<span className="text-xs text-zinc-500">Current Bid</span>
<span className="text-lg font-semibold text-zinc-100 tracking-tight">$1,100.00</span>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-xs text-zinc-500 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>
                                        Ends in
                                    </span>
<span className="text-sm font-medium text-zinc-300">1d 4h</span>
</div>
</div>
<button className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-sm font-medium py-2 rounded-md transition-colors border border-zinc-700" onclick="window.location.href='/skin'">
                                Place Bid
                            </button>
</div>
</article>

<article className="flex flex-col bg-zinc-900/40 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors group relative">
<div className="absolute top-3 left-3 z-10">
<span className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider bg-pink-500/10 text-pink-400 border border-pink-500/20 rounded">Classified</span>
</div>
<div className="h-40 w-full relative bg-zinc-950 flex items-center justify-center p-6 border-b border-zinc-800/50">
<span className="text-zinc-700 font-semibold text-2xl tracking-tighter z-10 uppercase transform -rotate-12 opacity-50">M4A1-S</span>
</div>
<div className="p-4 flex flex-col flex-1 gap-4">
<div>
<h3 className="text-base font-semibold text-zinc-100 tracking-tight truncate">M4A1-S | Printstream</h3>
<p className="text-xs text-zinc-400 mt-1">Minimal Wear • Float: 0.071</p>
</div>
<div className="flex items-end justify-between mt-auto">
<div className="flex flex-col gap-1">
<span className="text-xs text-zinc-500">Current Bid</span>
<span className="text-lg font-semibold text-zinc-100 tracking-tight">$180.00</span>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-xs text-zinc-500 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>
                                        Ends in
                                    </span>
<span className="text-sm font-medium text-zinc-300">12h 05m</span>
</div>
</div>
<button className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-sm font-medium py-2 rounded-md transition-colors border border-zinc-700" onclick="window.location.href='/skin'">
                                Place Bid
                            </button>
</div>
</article>

<article className="flex flex-col bg-zinc-900/40 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors group relative opacity-75 grayscale hover:grayscale-0 hover:opacity-100">
<div className="absolute top-3 right-3 z-10">
<span className="px-2 py-1 text-[10px] font-medium tracking-wider bg-zinc-800 text-zinc-300 border border-zinc-700 rounded flex items-center gap-1">
<iconify-icon icon="solar:lock-keyhole-linear" width="10"></iconify-icon> Closed
                            </span>
</div>
<div className="h-40 w-full relative bg-zinc-950 flex items-center justify-center p-6 border-b border-zinc-800/50">
<span className="text-zinc-700 font-semibold text-2xl tracking-tighter z-10 uppercase transform -rotate-12 opacity-50">Deagle</span>
</div>
<div className="p-4 flex flex-col flex-1 gap-4">
<div>
<h3 className="text-base font-semibold text-zinc-100 tracking-tight truncate">Desert Eagle | Blaze</h3>
<p className="text-xs text-zinc-400 mt-1">Factory New • Float: 0.003</p>
</div>
<div className="flex items-end justify-between mt-auto">
<div className="flex flex-col gap-1">
<span className="text-xs text-zinc-500">Winning Bid</span>
<span className="text-lg font-semibold text-zinc-400 tracking-tight line-through decoration-zinc-600">$450.00</span>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-xs text-zinc-500">Winner</span>
<span className="text-sm font-medium text-zinc-300 flex items-center gap-1">
<iconify-icon icon="solar:user-circle-linear" width="14"></iconify-icon> 765611...
                                    </span>
</div>
</div>
<button className="w-full bg-zinc-900 text-zinc-500 cursor-not-allowed text-sm font-medium py-2 rounded-md border border-zinc-800">
                                Auction Ended
                            </button>
</div>
</article>
</div>

<div className="flex items-center justify-center gap-2 mt-8">
<button className="w-8 h-8 rounded-md flex items-center justify-center border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors disabled:opacity-50">
<iconify-icon icon="solar:alt-arrow-left-linear" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-md flex items-center justify-center bg-zinc-800 text-zinc-100 text-sm font-medium">1</button>
<button className="w-8 h-8 rounded-md flex items-center justify-center border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors text-sm font-medium">2</button>
<button className="w-8 h-8 rounded-md flex items-center justify-center border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors text-sm font-medium">3</button>
<span className="text-zinc-600">...</span>
<button className="w-8 h-8 rounded-md flex items-center justify-center border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors">
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</main>

<footer className="border-t border-zinc-800/50 mt-12 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<span className="font-semibold tracking-tighter text-lg text-zinc-100 flex items-center gap-2">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    SKINBID
                </span>
<p className="text-xs text-zinc-500">Not affiliated with Valve Corp. Powered by Steam API.</p>
</div>
<div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Support</a>
<a className="hover:text-zinc-100 transition-colors flex items-center gap-1" href="#">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon> Contact
                </a>
</div>
</div>
</footer>

    </>
  );
}
