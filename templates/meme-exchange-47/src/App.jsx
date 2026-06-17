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



        lucide.createIcons();
    
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
      

<nav className="sticky top-0 z-50 bg-stone-100/80 backdrop-blur-md border-b border-stone-200">
<div className="max-w-[1400px] mx-auto px-4 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-200">
<span className="font-medium tracking-tighter text-sm">MX</span>
</div>
<span className="text-sm font-medium tracking-tight text-stone-900">Meme Exchange</span>
</a>
<div className="hidden md:flex items-center gap-1 bg-stone-200/50 p-1 rounded-lg">
<button className="px-3 py-1 rounded-[6px] bg-white shadow-sm text-xs font-medium text-stone-900">Market</button>
<button className="px-3 py-1 rounded-[6px] hover:bg-stone-200/50 text-xs font-medium text-stone-500 transition-colors">IPO</button>
<button className="px-3 py-1 rounded-[6px] hover:bg-stone-200/50 text-xs font-medium text-stone-500 transition-colors">Portfolio</button>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white border border-stone-200 rounded-lg shadow-sm">
<i className="w-3.5 h-3.5 text-stone-400" data-lucide="search"></i>
<input className="text-xs bg-transparent border-none outline-none w-48 placeholder:text-stone-400 text-stone-800" placeholder="Search ticker (e.g. $PEPE)" type="text"/>
<span className="text-[10px] text-stone-400 font-mono bg-stone-100 px-1.5 py-0.5 rounded border border-stone-200">/</span>
</div>
<div className="flex items-center gap-3 pl-4 border-l border-stone-200">
<div className="text-right hidden sm:block">
<p className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">Buying Power</p>
<p className="text-xs font-medium tabular-nums">$12,450.00</p>
</div>
<button className="w-8 h-8 rounded-full bg-gradient-to-tr from-stone-200 to-stone-300 border border-white shadow-sm flex items-center justify-center overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</button>
</div>
</div>
</div>
</nav>

<main className="flex-1 max-w-[1400px] mx-auto w-full p-4 md:p-6 lg:p-8">

<div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="space-y-2">
<div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
<span className="hover:text-stone-900 cursor-pointer">Market</span>
<i className="w-3 h-3 text-stone-400" data-lucide="chevron-right"></i>
<span className="hover:text-stone-900 cursor-pointer">Viral</span>
<i className="w-3 h-3 text-stone-400" data-lucide="chevron-right"></i>
<span className="text-stone-900 font-medium">Distracted Boyfriend ($DIST)</span>
</div>
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 leading-tight">Distracted Boyfriend</h1>
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded border border-stone-200 bg-white text-[10px] font-mono text-stone-500 shadow-sm uppercase">$DIST</span>
<span className="flex items-center gap-1 text-xs text-stone-500">
<i className="w-3 h-3" data-lucide="clock"></i> IPO 2017
                    </span>
<span className="flex items-center gap-1 text-xs text-stone-500">
<i className="w-3 h-3" data-lucide="users"></i> 4.2k Holders
                    </span>
</div>
</div>
<div className="flex items-end gap-6">
<div>
<div className="text-[10px] uppercase tracking-wider text-stone-500 font-medium mb-1">Current Price</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-medium tracking-tight text-stone-900 tabular-nums">$42.80</span>
<span className="text-sm font-medium text-emerald-600 flex items-center gap-0.5">
<i className="w-3.5 h-3.5" data-lucide="trending-up"></i>
                            +12.4%
                        </span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-8 space-y-6">

<div className="bg-white rounded-xl overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] border border-transparent">

<div className="relative bg-stone-50 aspect-video w-full flex items-center justify-center overflow-hidden group cursor-pointer">
<img alt="Meme Context" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>

<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded text-[10px] font-medium tracking-wide">ORIGINAL</span>
</div>
</div>

<div className="p-5 flex items-center justify-between border-t border-stone-100">
<div className="flex items-center gap-4">
<button className="flex items-center gap-1.5 text-stone-500 hover:text-stone-900 transition-colors group">
<div className="p-1.5 rounded-full group-hover:bg-stone-100 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-big-up"></i>
</div>
<span className="text-xs font-medium tabular-nums">15.4k</span>
</button>
<button className="flex items-center gap-1.5 text-stone-500 hover:text-stone-900 transition-colors group">
<div className="p-1.5 rounded-full group-hover:bg-stone-100 transition-colors">
<i className="w-4 h-4" data-lucide="message-circle"></i>
</div>
<span className="text-xs font-medium tabular-nums">234</span>
</button>
<button className="flex items-center gap-1.5 text-stone-500 hover:text-stone-900 transition-colors group">
<div className="p-1.5 rounded-full group-hover:bg-stone-100 transition-colors">
<i className="w-4 h-4" data-lucide="share-2"></i>
</div>
<span className="text-xs font-medium">Share</span>
</button>
</div>
<div className="flex items-center gap-2">
<img className="w-5 h-5 rounded-full bg-stone-200" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jude"/>
<span className="text-xs text-stone-500">Posted by <span className="text-stone-900 font-medium">@meme_lord</span></span>
<span className="text-xs text-stone-300">•</span>
<span className="text-xs text-stone-400">2h ago</span>
</div>
</div>
</div>

<div>
<h3 className="text-lg font-medium text-stone-900 mb-4 tracking-tight">Market Analysis &amp; Discussion</h3>

<div className="flex gap-4 mb-8">
<div className="w-8 h-8 rounded-full bg-stone-200 flex-shrink-0 overflow-hidden">
<img className="w-full h-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div className="flex-1">
<div className="relative">
<textarea className="w-full bg-white border border-stone-200 rounded-lg p-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-300 focus:border-stone-300 min-h-[100px] resize-none shadow-sm" placeholder="Share your thesis on $DIST..."></textarea>
<div className="absolute bottom-2 right-2 flex items-center gap-2">
<button className="text-stone-400 hover:text-stone-600 transition-colors"><i className="w-4 h-4" data-lucide="image"></i></button>
<button className="bg-black text-white text-xs font-medium px-3 py-1.5 rounded hover:bg-stone-800 transition-colors shadow-sm">Post</button>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="flex gap-4 group">
<div className="w-8 h-8 rounded-full bg-stone-200 flex-shrink-0 overflow-hidden">
<img className="w-full h-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Annie"/>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-medium text-stone-900">crypto_queen</span>
<span className="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-medium rounded border border-emerald-100">BULLISH</span>
<span className="text-xs text-stone-400">45m ago</span>
</div>
<p className="text-sm text-stone-600 leading-relaxed">The template versatility here is unmatched. I'm seeing a resurgence on Twitter with the new AI variants. Definitely a hold for Q3.</p>
<div className="flex items-center gap-4 mt-2">
<button className="flex items-center gap-1 text-stone-400 hover:text-stone-700 text-xs font-medium transition-colors">
<i className="w-3.5 h-3.5" data-lucide="thumbs-up"></i> 12
                                    </button>
<button className="text-stone-400 hover:text-stone-700 text-xs font-medium transition-colors">Reply</button>
</div>
</div>
</div>

<div className="flex gap-4 group">
<div className="w-8 h-8 rounded-full bg-stone-200 flex-shrink-0 overflow-hidden">
<img className="w-full h-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bob"/>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-medium text-stone-900">short_king_99</span>
<span className="px-1.5 py-0.5 bg-rose-50 text-rose-700 text-[10px] font-medium rounded border border-rose-100">BEARISH</span>
<span className="text-xs text-stone-400">1h ago</span>
</div>
<p className="text-sm text-stone-600 leading-relaxed">Oversaturated. Sell signal was last week when my grandma sent me one on Facebook.</p>
<div className="flex items-center gap-4 mt-2">
<button className="flex items-center gap-1 text-stone-400 hover:text-stone-700 text-xs font-medium transition-colors">
<i className="w-3.5 h-3.5" data-lucide="thumbs-up"></i> 8
                                    </button>
<button className="text-stone-400 hover:text-stone-700 text-xs font-medium transition-colors">Reply</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-6">

<div className="bg-white rounded-xl p-5 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-stone-900">Price Performance</h3>
<div className="flex bg-stone-100 rounded p-0.5">
<button className="px-2 py-0.5 text-[10px] font-medium text-stone-500 hover:text-stone-900">1H</button>
<button className="px-2 py-0.5 text-[10px] font-medium text-stone-900 bg-white shadow-sm rounded-sm">1D</button>
<button className="px-2 py-0.5 text-[10px] font-medium text-stone-500 hover:text-stone-900">1W</button>
<button className="px-2 py-0.5 text-[10px] font-medium text-stone-500 hover:text-stone-900">1Y</button>
</div>
</div>

<div className="h-48 w-full relative group">

<div className="absolute inset-0 flex flex-col justify-between text-[9px] text-stone-300 font-mono">
<div className="border-b border-stone-100 w-full h-0"></div>
<div className="border-b border-stone-100 w-full h-0"></div>
<div className="border-b border-stone-100 w-full h-0"></div>
<div className="border-b border-stone-100 w-full h-0"></div>
<div className="border-b border-stone-100 w-full h-0"></div>
</div>
<svg className="w-full h-full overflow-visible preserve-3d" viewbox="0 0 300 100">
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'rgb(16, 185, 129)', stopOpacity: '0.1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgb(16, 185, 129)', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path d="M0,80 C20,80 30,50 50,60 C70,70 80,90 100,85 C120,80 140,20 160,30 C180,40 200,60 220,50 C240,40 260,10 300,5" fill="url(#gradient)" stroke="none"></path>
<path d="M0,80 C20,80 30,50 50,60 C70,70 80,90 100,85 C120,80 140,20 160,30 C180,40 200,60 220,50 C240,40 260,10 300,5" fill="none" stroke="#059669" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<circle cx="300" cy="5" fill="#059669" r="3" stroke="white" strokeWidth="2"></circle>
</svg>

<div className="absolute top-0 right-0 bg-stone-900 text-white text-[10px] font-mono px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            $42.80
                        </div>
</div>
<div className="grid grid-cols-2 gap-4 mt-6 border-t border-stone-100 pt-4">
<div>
<p className="text-[10px] text-stone-500 uppercase tracking-wide mb-0.5">Market Cap</p>
<p className="text-sm font-medium text-stone-900 tabular-nums">$42.8M</p>
</div>
<div>
<p className="text-[10px] text-stone-500 uppercase tracking-wide mb-0.5">24h Vol</p>
<p className="text-sm font-medium text-stone-900 tabular-nums">$1.2M</p>
</div>
<div>
<p className="text-[10px] text-stone-500 uppercase tracking-wide mb-0.5">High</p>
<p className="text-sm font-medium text-stone-900 tabular-nums">$45.00</p>
</div>
<div>
<p className="text-[10px] text-stone-500 uppercase tracking-wide mb-0.5">Low</p>
<p className="text-sm font-medium text-stone-900 tabular-nums">$38.20</p>
</div>
</div>
</div>

<div className="bg-white rounded-xl p-5 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] sticky top-20">
<div className="flex p-1 bg-stone-100 rounded-lg mb-5">
<button className="flex-1 py-1.5 text-xs font-medium rounded-[6px] bg-white text-stone-900 shadow-sm transition-all">Buy</button>
<button className="flex-1 py-1.5 text-xs font-medium rounded-[6px] text-stone-500 hover:text-stone-900 transition-all">Sell</button>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between mb-1.5">
<label className="text-xs font-medium text-stone-600">Order Type</label>
</div>
<div className="relative">
<select className="w-full appearance-none bg-white border border-stone-200 rounded-lg py-2 pl-3 pr-8 text-sm text-stone-900 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-shadow cursor-pointer">
<option>Market Order</option>
<option>Limit Order</option>
<option>Stop Loss</option>
</select>
<i className="absolute right-3 top-2.5 w-4 h-4 text-stone-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<div className="flex justify-between mb-1.5">
<label className="text-xs font-medium text-stone-600">Shares</label>
<span className="text-[10px] text-stone-400">Max: 290</span>
</div>
<div className="relative group">
<input className="w-full bg-white border border-stone-200 rounded-lg py-2 pl-3 pr-10 text-sm font-medium text-stone-900 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-shadow tabular-nums placeholder:text-stone-300" type="number" value="10"/>
<div className="absolute right-3 top-2 text-xs text-stone-400 font-medium">SHARES</div>
</div>
</div>
<div className="pt-2 pb-4 border-b border-stone-100">
<div className="flex justify-between items-center text-sm mb-1">
<span className="text-stone-500">Est. Cost</span>
<span className="font-medium text-stone-900 tabular-nums">$428.00</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-stone-400">Fee (0.5%)</span>
<span className="text-stone-500 tabular-nums">$2.14</span>
</div>
</div>
<button className="w-full bg-black hover:bg-stone-800 text-white font-medium py-2.5 rounded-lg shadow-sm transition-all active:scale-[0.99] flex items-center justify-center gap-2 text-sm">
                            Place Buy Order
                        </button>
<p className="text-center text-[10px] text-stone-400 leading-snug">
                            By placing this order you agree to the Meme Exchange Terms of Service.
                        </p>
</div>
</div>

<div className="pt-4">
<h4 className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-3">Trending Memes</h4>
<div className="space-y-3">
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-[10px]">
                                    PEPE
                                </div>
<div>
<p className="text-xs font-medium text-stone-900 group-hover:underline">Sad Frog ($PEPE)</p>
<p className="text-[10px] text-stone-500">Vol: $5.2M</p>
</div>
</div>
<span className="text-xs font-medium text-emerald-600">+5.4%</span>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-[10px]">
                                    DOGE
                                </div>
<div>
<p className="text-xs font-medium text-stone-900 group-hover:underline">Doge ($DOGE)</p>
<p className="text-[10px] text-stone-500">Vol: $12.1M</p>
</div>
</div>
<span className="text-xs font-medium text-emerald-600">+1.2%</span>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-red-600 font-bold text-[10px]">
                                    FINE
                                </div>
<div>
<p className="text-xs font-medium text-stone-900 group-hover:underline">This is Fine ($FINE)</p>
<p className="text-[10px] text-stone-500">Vol: $800K</p>
</div>
</div>
<span className="text-xs font-medium text-rose-600">-2.8%</span>
</div>
</div>
</div>
</div>
</div>
</main>
<footer className="mt-12 py-8 border-t border-stone-200 bg-white">
<div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-stone-900 text-white flex items-center justify-center rounded text-xs font-bold">M</div>
<span className="text-xs font-medium text-stone-900">Meme Exchange © 2023</span>
</div>
<div className="flex gap-6 text-xs text-stone-500">
<a className="hover:text-stone-900" href="#">Privacy</a>
<a className="hover:text-stone-900" href="#">Terms</a>
<a className="hover:text-stone-900" href="#">API</a>
<a className="hover:text-stone-900" href="#">Status</a>
</div>
</div>
</footer>


    </>
  );
}
