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



    // Initialize Lucide icons
    lucide.createIcons();
    
    // Stagger animation initialization
    setTimeout(() => {
      document.querySelectorAll('.initial-hidden').forEach((el, index) => {
        el.classList.remove('initial-hidden');
      });
    }, 100);
  
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
      

<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-8 flex items-center justify-center">
<div className="max-w-7xl mx-auto">

<div className="text-center mb-16 animate-fade-in-up">
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

<div className="animate-slide-in-left delay-300 relative">
<div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-lg animate-pulse-slow"></div>
<div className="relative w-80 h-[700px] glass glow-green animate-float rounded-3xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6">

<div className="flex justify-between items-center mb-8">
<div className="flex gap-1">
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
</div>
<div className="text-xs text-gray-400">9:41</div>
<div className="flex gap-1">
<div className="w-4 h-2 border border-white/30 rounded-sm">
<div className="w-3 h-1 bg-white rounded-sm m-0.5"></div>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
<img alt="Profile" className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=1080&q=80" />
</div>
<div className="">
<p className="font-medium">Alex Rivera</p>
<p className="text-xs text-gray-400">Premium Trader</p>
</div>
</div>
<button className="w-10 h-10 glass-card rounded-xl flex items-center justify-center hover:bg-white/10 transition-all">
<svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
</div>

<div className="mb-8">
<div className="flex items-center gap-2 mb-3">
<p className="text-xs text-gray-400 uppercase tracking-wider">Total Portfolio</p>
<div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 rounded-full">
<div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
<span className="text-xs text-green-400">+28.4%</span>
</div>
</div>
<p className="text-4xl font-light mb-2">$342,891</p>
<p className="text-sm text-gray-400">+$76,234 this month</p>
</div>

<div className="grid grid-cols-4 gap-3 mb-8">
<button className="glass-card rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-white/10 transition-all">
<div className="w-8 h-8 gradient-green rounded-xl flex items-center justify-center">
<svg className="lucide lucide-arrow-down w-4 h-4 text-white" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
<span className="text-xs text-gray-300">Buy</span>
</button>
<button className="glass-card rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-white/10 transition-all">
<div className="w-8 h-8 gradient-blue rounded-xl flex items-center justify-center">
<svg className="lucide lucide-arrow-up w-4 h-4 text-white" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</div>
<span className="text-xs text-gray-300">Sell</span>
</button>
<button className="glass-card rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-white/10 transition-all">
<div className="w-8 h-8 gradient-purple rounded-xl flex items-center justify-center">
<svg className="lucide lucide-send w-4 h-4 text-white" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
<span className="text-xs text-gray-300">Send</span>
</button>
<button className="glass-card rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-white/10 transition-all">
<div className="w-8 h-8 gradient-orange rounded-xl flex items-center justify-center">
<svg className="lucide lucide-wallet w-4 h-4 text-white" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<span className="text-xs text-gray-300">Wallet</span>
</button>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<p className="font-medium">Top Holdings</p>
<button className="text-xs text-gray-400 hover:text-white">View All</button>
</div>
<div className="glass-card rounded-2xl p-4 hover:bg-white/10 transition-all">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 gradient-orange rounded-xl flex items-center justify-center">
<span className="font-bold text-white">₿</span>
</div>
<div>
<p className="font-medium">Bitcoin</p>
<p className="text-xs text-gray-400">3.2456 BTC</p>
</div>
</div>
<div className="text-right">
<p className="font-medium">$143,567</p>
<p className="text-xs text-green-400">+3.2%</p>
</div>
</div>
</div>
<div className="glass-card rounded-2xl p-4 hover:bg-white/10 transition-all">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 gradient-blue rounded-xl flex items-center justify-center">
<span className="font-bold text-white">Ξ</span>
</div>
<div>
<p className="font-medium">Ethereum</p>
<p className="text-xs text-gray-400">28.45 ETH</p>
</div>
</div>
<div className="text-right">
<p className="font-medium">$89,234</p>
<p className="text-xs text-green-400">+7.1%</p>
</div>
</div>
</div>
<div className="glass-card rounded-2xl p-4 hover:bg-white/10 transition-all">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 gradient-purple rounded-xl flex items-center justify-center">
<span className="font-bold text-white">◎</span>
</div>
<div>
<p className="font-medium">Solana</p>
<p className="text-xs text-gray-400">445.8 SOL</p>
</div>
</div>
<div className="text-right">
<p className="font-medium">$34,567</p>
<p className="text-xs text-red-400">-2.1%</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="animate-fade-in-up delay-600 relative">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-lg animate-pulse-slow delay-500"></div>
<div className="relative w-80 h-[700px] mx-auto glass rounded-3xl p-6 glow-blue animate-float delay-1000 overflow-hidden">

<div className="flex justify-between items-center mb-8">
<div className="flex gap-1">
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
</div>
<div className="text-xs text-gray-400">9:41</div>
<div className="flex gap-1">
<div className="w-4 h-2 border border-white/30 rounded-sm">
<div className="w-3 h-1 bg-white rounded-sm m-0.5"></div>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-8">
<div className="">
<p className="text-xl font-medium">Trade</p>
<p className="text-xs text-gray-400">Lightning fast execution</p>
</div>
<div className="flex items-center gap-1">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span className="text-xs text-green-400">Live</span>
</div>
</div>

<div className="glass-card rounded-2xl p-4 mb-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 gradient-orange rounded-lg flex items-center justify-center">
<span className="text-sm font-bold text-white">₿</span>
</div>
<div>
<p className="font-medium">BTC/USD</p>
<p className="text-xs text-gray-400">Bitcoin</p>
</div>
</div>
<div className="text-right">
<p className="text-lg font-medium">$44,287</p>
<p className="text-xs text-green-400">+2.34%</p>
</div>
</div>

<div className="h-32 flex items-end justify-between gap-1">
<div className="w-2 bg-gradient-to-t from-orange-500 to-orange-300 rounded-full" style={{height: `40%`}}></div>
<div className="w-2 bg-gradient-to-t from-orange-500 to-orange-300 rounded-full" style={{height: `60%`}}></div>
<div className="w-2 bg-gradient-to-t from-orange-500 to-orange-300 rounded-full" style={{height: `35%`}}></div>
<div className="w-2 bg-gradient-to-t from-orange-500 to-orange-300 rounded-full" style={{height: `80%`}}></div>
<div className="w-2 bg-gradient-to-t from-orange-500 to-orange-300 rounded-full" style={{height: `55%`}}></div>
<div className="w-2 bg-gradient-to-t from-orange-500 to-orange-300 rounded-full" style={{height: `90%`}}></div>
<div className="w-2 bg-gradient-to-t from-orange-500 to-orange-300 rounded-full" style={{height: `75%`}}></div>
<div className="w-2 bg-gradient-to-t from-orange-500 to-orange-300 rounded-full" style={{height: `95%`}}></div>
<div className="w-2 bg-gradient-to-t from-green-500 to-green-300 rounded-full" style={{height: `100%`}}></div>
<div className="w-2 bg-gradient-to-t from-green-500 to-green-300 rounded-full" style={{height: `85%`}}></div>
</div>
</div>

<div className="space-y-4">
<div className="flex bg-gray-800/50 rounded-xl p-1">
<button className="flex-1 py-2 px-4 bg-white/10 rounded-lg text-sm font-medium">Buy</button>
<button className="flex-1 py-2 px-4 text-sm font-medium text-gray-400">Sell</button>
</div>
<div className="glass-card rounded-2xl p-4">
<div className="flex items-center justify-between mb-3">
<span className="text-xs text-gray-400">Amount</span>
<span className="text-xs text-gray-400">Balance: 0.5 BTC</span>
</div>
<div className="flex items-center gap-3">
<input className="bg-transparent text-2xl font-light flex-1 outline-none" type="text" value="0.25" />
<div className="flex items-center gap-2 px-3 py-2 glass-card rounded-lg">
<span className="text-sm font-medium text-orange-400">₿</span>
<span className="text-sm">BTC</span>
</div>
</div>
<p className="text-xs text-gray-400 mt-2">≈ $11,071.75 USD</p>
</div>
<div className="glass-card rounded-2xl p-4">
<div className="flex items-center justify-between mb-3">
<span className="text-xs text-gray-400">Price</span>
<span className="text-xs text-blue-400">Market Price</span>
</div>
<div className="flex items-center gap-3">
<input className="bg-transparent text-2xl font-light flex-1 outline-none" type="text" value="44,287" />
<span className="text-sm text-gray-400">USD</span>
</div>
</div>
<button className="w-full py-4 gradient-green rounded-2xl font-medium hover:scale-[1.02] transition-transform">
                Execute Buy Order
              </button>
<div className="flex justify-between text-xs text-gray-400">
<span>Fee: 0.1%</span>
<span>Est. Total: $11,082.89</span>
</div>
</div>
</div>
</div>

<div className="animate-slide-in-right delay-1000 relative">
<div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-lg animate-pulse-slow delay-1000"></div>
<div className="relative w-80 h-[700px] mx-auto glass rounded-3xl p-6 glow-purple animate-float delay-500">

<div className="flex justify-between items-center mb-8">
<div className="flex gap-1">
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
</div>
<div className="text-xs text-gray-400">9:41</div>
<div className="flex gap-1">
<div className="w-4 h-2 border border-white/30 rounded-sm">
<div className="w-3 h-1 bg-white rounded-sm m-0.5"></div>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-8">
<div className="">
<p className="text-xl font-medium">Markets</p>
<p className="text-xs text-gray-400">Real-time analytics</p>
</div>
<button className="w-10 h-10 glass-card rounded-xl flex items-center justify-center hover:bg-white/10 transition-all">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="glass-card rounded-2xl p-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
<span className="text-xs text-gray-400">Market Cap</span>
</div>
<p className="text-lg font-medium">$2.8T</p>
<p className="text-xs text-green-400">+4.2%</p>
</div>
<div className="glass-card rounded-2xl p-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
<span className="text-xs text-gray-400">24h Volume</span>
</div>
<p className="text-lg font-medium">$124B</p>
<p className="text-xs text-blue-400">+12.8%</p>
</div>
</div>

<div className="mb-6">
<div className="flex items-center justify-between mb-4">
<p className="font-medium">Trending</p>
<div className="flex items-center gap-1">
<div className="w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
<span className="text-xs text-red-400">Hot</span>
</div>
</div>
<div className="space-y-3">
<div className="glass-card rounded-2xl p-4 hover:bg-white/10 transition-all">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
<span className="text-sm font-bold text-white">D</span>
</div>
<div>
<p className="font-medium">Dogecoin</p>
<p className="text-xs text-gray-400">DOGE</p>
</div>
</div>
<div className="text-right">
<p className="font-medium">$0.087</p>
<p className="text-xs text-green-400">+24.5%</p>
</div>
</div>
</div>
<div className="glass-card rounded-2xl p-4 hover:bg-white/10 transition-all">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
<span className="text-sm font-bold text-white">A</span>
</div>
<div className="">
<p className="font-medium">Cardano</p>
<p className="text-xs text-gray-400">ADA</p>
</div>
</div>
<div className="text-right">
<p className="font-medium">$0.52</p>
<p className="text-xs text-green-400">+18.3%</p>
</div>
</div>
</div>
<div className="glass-card rounded-2xl p-4 hover:bg-white/10 transition-all">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
<span className="text-sm font-bold text-white">P</span>
</div>
<div>
<p className="font-medium">Polygon</p>
<p className="text-xs text-gray-400">MATIC</p>
</div>
</div>
<div className="text-right">
<p className="font-medium">$1.34</p>
<p className="text-xs text-green-400">+15.7%</p>
</div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2 mb-3">
<div className="w-6 h-6 gradient-purple rounded-lg flex items-center justify-center">
<svg className="lucide lucide-brain-circuit w-3 h-3 text-white" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<span className="text-sm font-medium">AI Insight</span>
</div>
<p className="text-xs text-gray-300 leading-relaxed">
                Market sentiment is bullish with strong institutional buying. 
                Bitcoin showing resistance at $45k level. 
                <span className="text-purple-400">Recommend DCA strategy.</span>
</p>
</div>
</div>
</div>
</div>

</div>
</div>


    </>
  );
}
