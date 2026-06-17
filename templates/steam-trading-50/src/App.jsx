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



tailwind.config = {
theme: {
extend: {
animation: {
'float-slow': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
},
plugins: [
function({ addUtilities }) {
addUtilities({
'.perspective-1000': { perspective: '1000px' },
'.transform-style-3d': { transformStyle: 'preserve-3d' },
'.rotate-x-12': { transform: 'rotateX(12deg)' },
'.rotate-y-12': { transform: 'rotateY(12deg)' },
})
}
]
}



    // Simple interactivity for flashlight cards
    const cards = document.querySelectorAll('.flashlight-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
  
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
      

<div className="fixed -z-50 overflow-hidden w-full h-full top-0 left-0">
<div className="absolute inset-0 bg-[#0B0E14]"></div>
<div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-indigo-950/20 to-transparent opacity-60"></div>
<div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-float-slow"></div>
<div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen animate-float-slow" style={{animationDelay: '2s'}}></div>
</div>

<nav className="fixed z-50 w-full border-b border-white/5 bg-[#0B0E14]/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="/">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a10 10 0 1 0 10 10"></path>
<path d="M20 12h-4"></path>
<path d="M16 12l4-4"></path>
<path d="M16 12l4 4"></path>
</svg>
</div>
<span className="font-manrope font-semibold text-white tracking-tight text-lg">SteamWebAPI</span>
</a>

<div className="hidden md:flex items-center gap-8">
<div className="relative group h-full flex items-center">
<button className="flex items-center gap-1.5 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors font-manrope outline-none">
                Products
                <span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[500px] invisible opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
<div className="bg-[#0F1117] border border-white/10 rounded-xl p-2 shadow-2xl grid grid-cols-1 gap-1 overflow-hidden backdrop-blur-3xl ring-1 ring-white/5">
<a className="flex gap-4 p-3 rounded-lg hover:bg-white/5 transition-all group/item" href="#">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover/item:text-indigo-300 transition-colors">
<span className="iconify" data-icon="lucide:box" data-width="20"></span>
</div>
<div>
<div className="text-sm font-semibold text-white font-manrope">Inventory API</div>
<div className="text-xs text-slate-400 mt-0.5">Load player inventories in milliseconds.</div>
</div>
</a>
<a className="flex gap-4 p-3 rounded-lg hover:bg-white/5 transition-all group/item" href="#">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover/item:text-emerald-300 transition-colors">
<span className="iconify" data-icon="lucide:trending-up" data-width="20"></span>
</div>
<div>
<div className="text-sm font-semibold text-white font-manrope">Market Prices</div>
<div className="text-xs text-slate-400 mt-0.5">Real-time pricing for CS2, Rust &amp; Dota 2.</div>
</div>
</a>
<a className="flex gap-4 p-3 rounded-lg hover:bg-white/5 transition-all group/item" href="#">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover/item:text-blue-300 transition-colors">
<span className="iconify" data-icon="lucide:arrow-left-right" data-width="20"></span>
</div>
<div>
<div className="text-sm font-semibold text-white font-manrope">Trade Offers</div>
<div className="text-xs text-slate-400 mt-0.5">Automated P2P and bot trading infrastructure.</div>
</div>
</a>
</div>
</div>
</div>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors font-manrope" href="#">Docs</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors font-manrope" href="#">Pricing</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors font-manrope" href="#">Status</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-300 hover:text-white transition-colors font-manrope" href="#">Log in</a>
<a className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-500 rounded-full px-4 py-1.5 transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)] font-manrope" href="#">
            Get API Key
        </a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">

<div className="animate-intro inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
            Now supporting CS2 &amp; Rust Items
        </div>

<h1 className="animate-intro max-w-4xl text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
<span className="title-reflection">The definitive API for</span><br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">Steam trading platforms</span>
</h1>

<p className="animate-intro max-w-2xl text-lg text-slate-400 leading-relaxed mb-10 font-manrope">
            Build trading sites, gambling platforms, and analytics tools without managing proxies or rate limits. 
            Reliable inventory loading, market prices, and trade management.
        </p>

<div className="animate-intro flex flex-col sm:flex-row items-center gap-4 mb-20">
<button className="group relative px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-slate-100 transition-all flex items-center gap-2">
                Start building for free
                <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
<div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all"></div>
</button>
<button className="px-6 py-3 rounded-full bg-white/5 text-white font-medium text-sm border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2">
<span className="iconify" data-icon="lucide:book-open" data-width="16"></span>
                Documentation
            </button>
</div>

<div className="animate-intro w-full max-w-5xl relative perspective-1000 group">

<div className="absolute inset-0 bg-indigo-500/20 blur-[100px] -z-10 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>

<div className="bg-[#0F1117] border border-white/10 rounded-xl shadow-2xl overflow-hidden ring-1 ring-white/5 transform transition-transform duration-700 hover:rotate-x-12 hover:translate-y-[-10px]">

<div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
<div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
<div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
</div>
<div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/20 px-3 py-1 rounded-md border border-white/5">
<span className="text-emerald-500">GET</span>
<span>api.steamwebapi.com/inventory</span>
</div>
<div className="w-16"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">

<div className="border-r border-white/5 p-6 bg-[#0B0E14] text-left">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider font-manrope">Parameters</span>
<span className="text-[10px] text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 font-mono">cURL</span>
</div>
<div className="space-y-4 font-mono text-sm">
<div className="group flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
<span className="text-indigo-400 min-w-[60px]">steam_id</span>
<span className="text-slate-500 select-none">=</span>
<span className="text-emerald-400">76561198000000000</span>
</div>
<div className="group flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
<span className="text-indigo-400 min-w-[60px]">app_id</span>
<span className="text-slate-500 select-none">=</span>
<span className="text-orange-400">730</span>
<span className="text-slate-600 text-xs ml-auto self-center">// CS2</span>
</div>
<div className="group flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
<span className="text-indigo-400 min-w-[60px]">context</span>
<span className="text-slate-500 select-none">=</span>
<span className="text-blue-400">2</span>
</div>
<div className="group flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
<span className="text-indigo-400 min-w-[60px]">key</span>
<span className="text-slate-500 select-none">=</span>
<span className="text-slate-500">sk_live_...</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-manrope">
<span>Throughput</span>
<span className="text-emerald-400">99.99% Success</span>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[92%]"></div>
</div>
</div>
</div>

<div className="p-6 bg-[#0F1117] text-left relative overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs text-slate-400 font-mono">24ms</span>
</div>
</div>
<pre className="font-mono text-xs leading-relaxed overflow-x-auto text-slate-300"><span className="text-slate-500">{</span>
  <span className="text-purple-400">"success"</span>: <span className="text-orange-400">true</span>,
  <span className="text-purple-400">"inventory"</span>: <span className="text-slate-500">[</span>
    <span className="text-slate-500">{</span>
      <span className="text-purple-400">"name"</span>: <span className="text-green-400">"AK-47 | Asiimov"</span>,
      <span className="text-purple-400">"wear"</span>: <span className="text-blue-400">0.3421</span>,
      <span className="text-purple-400">"price"</span>: <span className="text-yellow-400">42.50</span>,
      <span className="text-purple-400">"stickers"</span>: <span className="text-slate-500">[</span>...<span className="text-slate-500">]</span>,
      <span className="text-purple-400">"assetid"</span>: <span className="text-emerald-400">"281930..."</span>,
      <span className="text-purple-400">"tradable"</span>: <span className="text-orange-400">true</span>
    <span className="text-slate-500">}</span>,
    <span className="text-slate-500">{</span>
      <span className="text-purple-400">"name"</span>: <span className="text-green-400">"Karambit | Fade"</span>,
      <span className="text-purple-400">"wear"</span>: <span className="text-blue-400">0.0154</span>,
      <span className="text-purple-400">"price"</span>: <span className="text-yellow-400">1850.00</span>,
      <span className="text-purple-400">"tradable"</span>: <span className="text-orange-400">false</span>,
      <span className="text-purple-400">"cooldown"</span>: <span className="text-orange-400">"2023-11-15T..."</span>
    <span className="text-slate-500">}</span>
  <span className="text-slate-500">]</span>,
  <span className="text-purple-400">"count"</span>: <span className="text-blue-400">452</span>,
  <span className="text-purple-400">"value"</span>: <span className="text-blue-400">12450.25</span>
<span className="text-slate-500">}</span></pre>

<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0F1117] to-transparent"></div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-12 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-slate-500 font-medium mb-8 font-manrope">POWERING THE LARGEST TRADING PLATFORMS</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-white font-semibold text-lg">
<span className="iconify text-indigo-500" data-icon="lucide:gamepad-2" data-width="24"></span>
                CS2Trade
             </div>
<div className="flex items-center gap-2 text-white font-semibold text-lg">
<span className="iconify text-emerald-500" data-icon="lucide:coins" data-width="24"></span>
                SkinMarket
             </div>
<div className="flex items-center gap-2 text-white font-semibold text-lg">
<span className="iconify text-orange-500" data-icon="lucide:swords" data-width="24"></span>
                RustBet
             </div>
<div className="flex items-center gap-2 text-white font-semibold text-lg">
<span className="iconify text-blue-500" data-icon="lucide:bar-chart-2" data-width="24"></span>
                SteamAnalytica
             </div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="bg-grid absolute inset-0 opacity-[0.15] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Everything you need to <span className="text-indigo-400">scale</span></h2>
<p className="text-lg text-slate-400 font-manrope">Stop worrying about Steam rate limits, proxy rotation, and session management. We handle the infrastructure so you can build the product.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flashlight-card rounded-2xl p-1" style={{'--mouse-x': '0px', '--mouse-y': '0px'}}>
<div className="bg-[#0F1117] h-full rounded-xl p-6 flex flex-col relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
<span className="iconify" data-icon="lucide:backpack" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Inventory API</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                        Load user inventories for CS2, Rust, Dota 2, and TF2 instantly. Our smart caching engine ensures you never hit a rate limit while keeping data fresh.
                    </p>

<div className="relative h-32 bg-slate-900/50 rounded-lg border border-white/5 p-3 grid grid-cols-3 gap-2 overflow-hidden">
<div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/10 rounded border border-white/5"></div>
<div className="bg-gradient-to-br from-pink-500/20 to-rose-500/10 rounded border border-white/5"></div>
<div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/10 rounded border border-white/5"></div>
<div className="bg-white/5 rounded"></div>
<div className="bg-white/5 rounded"></div>
<div className="bg-white/5 rounded"></div>

<div className="absolute inset-0 bg-black/20 flex items-center justify-center backdrop-blur-[1px]">
<div className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
<span className="iconify" data-icon="lucide:check" data-width="12"></span> Loaded (45ms)
                            </div>
</div>
</div>
</div>
</div>

<div className="flashlight-card rounded-2xl p-1" style={{'--mouse-x': '0px', '--mouse-y': '0px'}}>
<div className="bg-[#0F1117] h-full rounded-xl p-6 flex flex-col relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
<span className="iconify" data-icon="lucide:line-chart" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Market Prices</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                        Get real-time price data, sales history, and volume for millions of items. Accurate pricing is crucial for trading site profitability.
                    </p>

<div className="relative h-32 bg-slate-900/50 rounded-lg border border-white/5 p-4 overflow-hidden flex items-end justify-between gap-1">
<div className="w-full bg-emerald-500/20 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-emerald-500/30 h-[60%] rounded-t-sm"></div>
<div className="w-full bg-emerald-500/40 h-[50%] rounded-t-sm"></div>
<div className="w-full bg-emerald-500/60 h-[80%] rounded-t-sm relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-emerald-400 font-mono">$124.50</div>
</div>
<div className="w-full bg-emerald-500/50 h-[70%] rounded-t-sm"></div>
</div>
</div>
</div>

<div className="flashlight-card rounded-2xl p-1" style={{'--mouse-x': '0px', '--mouse-y': '0px'}}>
<div className="bg-[#0F1117] h-full rounded-xl p-6 flex flex-col relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Enterprise Reliability</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                        Our intelligent proxy rotation and session management ensures 99.9% uptime. We handle Steam's downtime so your users stay happy.
                    </p>

<div className="relative h-32 bg-slate-900/50 rounded-lg border border-white/5 p-4 flex flex-col gap-2">
<div className="flex items-center justify-between text-xs text-slate-400">
<span>Proxy Pool A</span>
<span className="text-emerald-400">Operational</span>
</div>
<div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="w-full h-full bg-emerald-500"></div>
</div>
<div className="flex items-center justify-between text-xs text-slate-400 mt-2">
<span>Proxy Pool B</span>
<span className="text-emerald-400">Operational</span>
</div>
<div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="w-full h-full bg-emerald-500"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0F1117] relative border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium mb-6">
<span className="iconify" data-icon="lucide:zap" data-width="14"></span>
                    Low Latency
                </div>
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                    Global Proxy Network
                </h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed font-manrope">
                    SteamWebAPI routes your requests through millions of residential and datacenter proxies. We automatically retry failed requests and handle session expiration.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
<span className="text-white font-bold text-sm">1</span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Your Application</h4>
<p className="text-sm text-slate-500">Send a simple REST API request to our endpoint.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20 text-indigo-400">
<span className="font-bold text-sm">2</span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Smart Routing</h4>
<p className="text-sm text-slate-500">We select the best proxy and handle authentication with Steam.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
<span className="text-white font-bold text-sm">3</span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Clean JSON</h4>
<p className="text-sm text-slate-500">Receive standardized, cached data in milliseconds.</p>
</div>
</div>
</div>
</div>

<div className="relative h-[500px] w-full bg-[#0B0E14] rounded-2xl border border-white/5 p-8 flex flex-col justify-between overflow-hidden">

<div className="bg-grid absolute inset-0 opacity-20"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
<path d="M 100 100 C 150 100, 150 250, 200 250" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"></path>
<path className="noodle-path" d="M 100 100 C 150 100, 150 250, 200 250" fill="none" stroke="#6366f1" stroke-dasharray="10 10" strokeWidth="2"></path>
<path d="M 200 250 C 250 250, 300 100, 400 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"></path>
<path className="noodle-path" d="M 200 250 C 250 250, 300 100, 400 100" fill="none" stroke="#10b981" stroke-dasharray="10 10" strokeWidth="2" style={{animationDelay: '1s'}}></path>
<path d="M 200 250 C 250 250, 300 400, 400 400" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"></path>
</svg>


<div className="absolute top-16 left-10 z-10 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg flex items-center gap-3 w-48 shadow-lg">
<div className="w-8 h-8 rounded bg-white text-black flex items-center justify-center">
<span className="iconify" data-icon="lucide:layout" data-width="16"></span>
</div>
<div className="text-xs">
<div className="text-white font-medium">Your Platform</div>
<div className="text-slate-400">Rest API</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-4 bg-indigo-900/20 backdrop-blur-md border border-indigo-500/30 rounded-xl flex flex-col items-center gap-2 w-48 shadow-2xl shadow-indigo-500/10">
<div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-lg bg-indigo-400 opacity-25"></span>
<span className="iconify" data-icon="lucide:server" data-width="20"></span>
</div>
<div className="text-center">
<div className="text-white font-medium text-sm">Proxy Manager</div>
<div className="text-indigo-300 text-[10px] bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20 mt-1">Auto-Scaling</div>
</div>
</div>

<div className="absolute top-16 right-10 z-10 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg flex items-center gap-3 w-48 shadow-lg">
<div className="w-8 h-8 rounded bg-blue-900/50 text-blue-400 border border-blue-500/20 flex items-center justify-center">
<span className="iconify" data-icon="lucide:database" data-width="16"></span>
</div>
<div className="text-xs">
<div className="text-white font-medium">Steam Inventory</div>
<div className="text-slate-400">JSON Data</div>
</div>
</div>

<div className="absolute bottom-16 right-10 z-10 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg flex items-center gap-3 w-48 shadow-lg">
<div className="w-8 h-8 rounded bg-emerald-900/50 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
<span className="iconify" data-icon="lucide:dollar-sign" data-width="16"></span>
</div>
<div className="text-xs">
<div className="text-white font-medium">Community Market</div>
<div className="text-slate-400">Price Data</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white mb-12 text-center">Frequently asked questions</h2>
<div className="space-y-4">

<details className="group p-4 bg-white/[0.02] rounded-xl border border-white/5 open:bg-white/[0.04] transition-all cursor-pointer">
<summary className="flex items-center justify-between text-slate-200 font-medium list-none marker:hidden">
<span>What rate limits apply?</span>
<span className="iconify text-slate-500 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down"></span>
</summary>
<div className="mt-4 text-slate-400 text-sm leading-relaxed">
                Our base plan starts at 1,000 requests per minute. Enterprise plans offer dedicated instances with virtually unlimited throughput.
            </div>
</details>

<details className="group p-4 bg-white/[0.02] rounded-xl border border-white/5 open:bg-white/[0.04] transition-all cursor-pointer">
<summary className="flex items-center justify-between text-slate-200 font-medium list-none marker:hidden">
<span>Do you support proxy rotation?</span>
<span className="iconify text-slate-500 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down"></span>
</summary>
<div className="mt-4 text-slate-400 text-sm leading-relaxed">
                Yes. All requests are automatically routed through our global pool of residential and datacenter proxies to prevent IP bans and rate limits from Steam.
            </div>
</details>

<details className="group p-4 bg-white/[0.02] rounded-xl border border-white/5 open:bg-white/[0.04] transition-all cursor-pointer">
<summary className="flex items-center justify-between text-slate-200 font-medium list-none marker:hidden">
<span>Can I track specific item float values?</span>
<span className="iconify text-slate-500 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down"></span>
</summary>
<div className="mt-4 text-slate-400 text-sm leading-relaxed">
                Absolutely. Our inventory API returns full asset details including float values, paint seeds, stickers, and trade hold status.
            </div>
</details>
</div>
</section>

<footer className="relative overflow-hidden border-t border-white/10 bg-[#0B0E14]">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-950/10 to-blue-900/10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative z-10">
<div className="flex flex-col items-center text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Ready to build?</h2>
<p className="text-slate-400 max-w-xl mb-10 text-lg">Join 2,000+ developers powering the next generation of Steam trading platforms.</p>
<div className="flex gap-4">
<button className="px-8 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    Get API Key
                </button>
<button className="px-8 py-3 rounded-full bg-transparent border border-white/20 text-white font-medium text-sm hover:bg-white/5 transition-all">
                    Contact Sales
                </button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/5 pt-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 0 10 10"></path><path d="M20 12h-4"></path><path d="M16 12l4-4"></path><path d="M16 12l4 4"></path></svg>
</div>
<span className="font-bold text-white">SteamWebAPI</span>
</div>
<p className="text-xs text-slate-500 font-manrope">© 2024 SteamWebAPI.<br/>Not affiliated with Valve Corp.</p>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-sm font-semibold text-white">Products</h4>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Inventory API</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Market Data</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Trade Offers</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-sm font-semibold text-white">Resources</h4>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Documentation</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">API Reference</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Status</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-sm font-semibold text-white">Company</h4>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Privacy Policy</a>
<div className="flex gap-4 mt-2">
<a className="text-slate-500 hover:text-white" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-slate-500 hover:text-white" href="#"><span className="iconify" data-icon="lucide:github" data-width="16"></span></a>
<a className="text-slate-500 hover:text-white" href="#"><span className="iconify" data-icon="lucide:disc" data-width="16"></span></a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
