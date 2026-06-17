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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="text-white font-medium tracking-tight text-sm">EXCHANGE</span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Winners</a>
<a className="hover:text-white transition-colors" href="#">Methodology</a>
<a className="hover:text-white transition-colors" href="#">Partners</a>
</div>
<button className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
                Share Report
            </button>
</div>
</nav>

<header className="relative pt-32 pb-20 px-6">
<div className="max-w-7xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-6">
<iconify-icon height="14" icon="solar:cup-star-linear" width="14"></iconify-icon>
<span>Annual Industry Report</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-8 max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                The Global <br/> Exchange Awards.
            </h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed">
                Recognizing excellence in the digital asset infrastructure. We analyzed liquidity, compliance, user experience, and growth metrics to determine this year's industry leaders.
            </p>
</div>
</header>

<main className="px-6 pb-24">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

<article className="glass-card rounded-3xl p-8 group transition-all duration-300 relative overflow-hidden">

<div className="absolute top-6 right-6 z-10">
<span className="text-white font-semibold tracking-tight text-base">Binance</span>
</div>

<div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
<iconify-icon className="text-white" height="120" icon="solar:globe-linear" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="mb-8 relative z-10">
<h3 className="text-sm font-medium text-zinc-500 mb-1">Category</h3>
<h2 className="text-xl text-white font-medium tracking-tight">Best Global Exchange</h2>
</div>
<div className="mb-8 relative z-10">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-yellow-400" icon="solar:medal-ribbon-linear" width="18"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium text-yellow-400/80">Winner</span>
</div>
<div className="text-4xl text-white font-medium tracking-tighter">Binance</div>
</div>
<p className="text-sm text-zinc-500 leading-relaxed mb-8 border-l border-white/10 pl-4 relative z-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus mauris et diam pulvinar suscipit. Fusce lorem nibh, accumsan at enim sed, luctus rhoncus velit. Pellentesque diam diam.
                </p>
<div className="pt-6 border-t border-white/5 relative z-10">
<span className="text-xs text-zinc-600 font-medium uppercase tracking-wider mb-3 block">Nominees</span>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Binance</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Coinbase</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">OKX</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Bybit</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Kraken</span>
</div>
</div>
</article>

<article className="glass-card rounded-3xl p-8 group transition-all duration-300 relative overflow-hidden">

<div className="absolute top-6 right-6 z-10">
<span className="text-white font-semibold tracking-tight text-base">Hyperliquid</span>
</div>
<div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
<iconify-icon className="text-white" height="120" icon="solar:link-circle-linear" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="mb-8 relative z-10">
<h3 className="text-sm font-medium text-zinc-500 mb-1">Category</h3>
<h2 className="text-xl text-white font-medium tracking-tight">Best DEX</h2>
</div>
<div className="mb-8 relative z-10">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-blue-400" icon="solar:medal-ribbon-linear" width="18"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium text-blue-400/80">Winner</span>
</div>
<div className="text-4xl text-white font-medium tracking-tighter">Hyperliquid</div>
</div>
<p className="text-sm text-zinc-500 leading-relaxed mb-8 border-l border-white/10 pl-4 relative z-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus mauris et diam pulvinar suscipit. Fusce lorem nibh, accumsan at enim sed, luctus rhoncus velit. Pellentesque diam diam.
                </p>
<div className="pt-6 border-t border-white/5 relative z-10">
<span className="text-xs text-zinc-600 font-medium uppercase tracking-wider mb-3 block">Nominees</span>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Hyperliquid</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">lighter</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Aster</span>
</div>
</div>
</article>

<article className="glass-card rounded-3xl p-8 group transition-all duration-300 relative overflow-hidden">

<div className="absolute top-6 right-6 z-10">
<span className="text-white font-semibold tracking-tight text-base">Binance</span>
</div>
<div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
<iconify-icon className="text-white" height="120" icon="solar:chart-square-linear" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="mb-8 relative z-10">
<h3 className="text-sm font-medium text-zinc-500 mb-1">Category</h3>
<h2 className="text-xl text-white font-medium tracking-tight">Best Derivatives Exchange</h2>
</div>
<div className="mb-8 relative z-10">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-purple-400" icon="solar:medal-ribbon-linear" width="18"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium text-purple-400/80">Winner</span>
</div>
<div className="text-4xl text-white font-medium tracking-tighter">Binance</div>
</div>
<p className="text-sm text-zinc-500 leading-relaxed mb-8 border-l border-white/10 pl-4 relative z-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus mauris et diam pulvinar suscipit. Fusce lorem nibh, accumsan at enim sed, luctus rhoncus velit. Pellentesque diam diam.
                </p>
<div className="pt-6 border-t border-white/5 relative z-10">
<span className="text-xs text-zinc-600 font-medium uppercase tracking-wider mb-3 block">Nominees</span>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Binance</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">OKX</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Bybit</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Bitget</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Deribit</span>
</div>
</div>
</article>

<article className="glass-card rounded-3xl p-8 group transition-all duration-300 relative overflow-hidden">

<div className="absolute top-6 right-6 z-10">
<span className="text-white font-semibold tracking-tight text-base">Binance</span>
</div>
<div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
<iconify-icon className="text-white" height="120" icon="solar:wallet-money-linear" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="mb-8 relative z-10">
<h3 className="text-sm font-medium text-zinc-500 mb-1">Category</h3>
<h2 className="text-xl text-white font-medium tracking-tight">Best Spot Exchange</h2>
</div>
<div className="mb-8 relative z-10">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-emerald-400" icon="solar:medal-ribbon-linear" width="18"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium text-emerald-400/80">Winner</span>
</div>
<div className="text-4xl text-white font-medium tracking-tighter">Binance</div>
</div>
<p className="text-sm text-zinc-500 leading-relaxed mb-8 border-l border-white/10 pl-4 relative z-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus mauris et diam pulvinar suscipit. Fusce lorem nibh, accumsan at enim sed, luctus rhoncus velit. Pellentesque diam diam.
                </p>
<div className="pt-6 border-t border-white/5 relative z-10">
<span className="text-xs text-zinc-600 font-medium uppercase tracking-wider mb-3 block">Nominees</span>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Binance</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">OKX</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Coinbase</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Kraken</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">KuCoin</span>
</div>
</div>
</article>

<article className="glass-card rounded-3xl p-8 group transition-all duration-300 relative overflow-hidden">

<div className="absolute top-6 right-6 z-10">
<span className="text-white font-semibold tracking-tight text-base">OKX</span>
</div>
<div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
<iconify-icon className="text-white" height="120" icon="solar:smartphone-linear" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="mb-8 relative z-10">
<h3 className="text-sm font-medium text-zinc-500 mb-1">Category</h3>
<h2 className="text-xl text-white font-medium tracking-tight">Best UX / UI</h2>
</div>
<div className="mb-8 relative z-10">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-pink-400" icon="solar:medal-ribbon-linear" width="18"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium text-pink-400/80">Winner</span>
</div>
<div className="text-4xl text-white font-medium tracking-tighter">OKX</div>
</div>
<p className="text-sm text-zinc-500 leading-relaxed mb-8 border-l border-white/10 pl-4 relative z-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus mauris et diam pulvinar suscipit. Fusce lorem nibh, accumsan at enim sed, luctus rhoncus velit. Pellentesque diam diam.
                </p>
<div className="pt-6 border-t border-white/5 relative z-10">
<span className="text-xs text-zinc-600 font-medium uppercase tracking-wider mb-3 block">Nominees</span>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">OKX</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Binance</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Coinbase</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Bitget</span>
</div>
</div>
</article>

<article className="glass-card rounded-3xl p-8 group transition-all duration-300 relative overflow-hidden">

<div className="absolute top-6 right-6 z-10">
<span className="text-white font-semibold tracking-tight text-base">Coinbase</span>
</div>
<div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
<iconify-icon className="text-white" height="120" icon="solar:shield-check-linear" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="mb-8 relative z-10">
<h3 className="text-sm font-medium text-zinc-500 mb-1">Category</h3>
<h2 className="text-xl text-white font-medium tracking-tight">Best Compliance Momentum</h2>
</div>
<div className="mb-8 relative z-10">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-cyan-400" icon="solar:medal-ribbon-linear" width="18"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium text-cyan-400/80">Winner</span>
</div>
<div className="text-4xl text-white font-medium tracking-tighter">Coinbase</div>
</div>
<p className="text-sm text-zinc-500 leading-relaxed mb-8 border-l border-white/10 pl-4 relative z-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus mauris et diam pulvinar suscipit. Fusce lorem nibh, accumsan at enim sed, luctus rhoncus velit. Pellentesque diam diam.
                </p>
<div className="pt-6 border-t border-white/5 relative z-10">
<span className="text-xs text-zinc-600 font-medium uppercase tracking-wider mb-3 block">Nominees</span>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Coinbase</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Kraken</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">OKX</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Bitstamp</span>
</div>
</div>
</article>

<article className="glass-card rounded-3xl p-8 group transition-all duration-300 relative overflow-hidden">

<div className="absolute top-6 right-6 z-10">
<span className="text-white font-semibold tracking-tight text-base">Bitget</span>
</div>
<div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
<iconify-icon className="text-white" height="120" icon="solar:rocket-2-linear" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="mb-8 relative z-10">
<h3 className="text-sm font-medium text-zinc-500 mb-1">Category</h3>
<h2 className="text-xl text-white font-medium tracking-tight">Fastest-Growing Exchange</h2>
</div>
<div className="mb-8 relative z-10">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-orange-400" icon="solar:medal-ribbon-linear" width="18"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium text-orange-400/80">Winner</span>
</div>
<div className="text-4xl text-white font-medium tracking-tighter">Bitget</div>
</div>
<p className="text-sm text-zinc-500 leading-relaxed mb-8 border-l border-white/10 pl-4 relative z-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus mauris et diam pulvinar suscipit. Fusce lorem nibh, accumsan at enim sed, luctus rhoncus velit. Pellentesque diam diam.
                </p>
<div className="pt-6 border-t border-white/5 relative z-10">
<span className="text-xs text-zinc-600 font-medium uppercase tracking-wider mb-3 block">Nominees</span>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Bitget</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Bybit</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">OKX</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">BloFin</span>
</div>
</div>
</article>

<article className="glass-card rounded-3xl p-8 group transition-all duration-300 relative overflow-hidden">

<div className="absolute top-6 right-6 z-10">
<span className="text-white font-semibold tracking-tight text-base">Bitget</span>
</div>
<div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
<iconify-icon className="text-white" height="120" icon="solar:stars-minimalistic-linear" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="mb-8 relative z-10">
<h3 className="text-sm font-medium text-zinc-500 mb-1">Category</h3>
<h2 className="text-xl text-white font-medium tracking-tight">Most Potential Exchange</h2>
</div>
<div className="mb-8 relative z-10">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-indigo-400" icon="solar:medal-ribbon-linear" width="18"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium text-indigo-400/80">Winner</span>
</div>
<div className="text-4xl text-white font-medium tracking-tighter">Bitget</div>
</div>
<p className="text-sm text-zinc-500 leading-relaxed mb-8 border-l border-white/10 pl-4 relative z-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus mauris et diam pulvinar suscipit. Fusce lorem nibh, accumsan at enim sed, luctus rhoncus velit. Pellentesque diam diam.
                </p>
<div className="pt-6 border-t border-white/5 relative z-10">
<span className="text-xs text-zinc-600 font-medium uppercase tracking-wider mb-3 block">Nominees</span>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Bitget</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">Bybit</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">OKX</span>
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">BloFin</span>
</div>
</div>
</article>
</div>
</main>

<footer className="mt-auto border-t border-white/5 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<span className="text-zinc-500 text-sm font-medium">EXCHANGE © 2024</span>
</div>
<div className="flex gap-6">
<a className="text-zinc-600 hover:text-white text-xs transition-colors" href="#">Privacy</a>
<a className="text-zinc-600 hover:text-white text-xs transition-colors" href="#">Terms</a>
<a className="text-zinc-600 hover:text-white text-xs transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>

    </>
  );
}
