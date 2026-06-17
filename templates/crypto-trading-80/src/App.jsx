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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#151b2e',
900: '#0f172a',
925: '#0b1121', // Custom darker shade
950: '#020617',
},
emerald: {
450: '#10b981', // Custom vibrant green
}
},
backgroundImage: {
'hero-pattern': "linear-gradient(to bottom, rgba(2, 6, 23, 0.3), rgba(2, 6, 23, 1)), url('https://images.unsplash.com/photo-1610337673044-69c3113ac143?q=80&w=2940&auto=format&fit=crop')",
}
}
}
}

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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-white" data-icon="lucide:waves" data-width="24"></span>
<span className="text-lg font-bold tracking-tight text-white">MoonWave</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Feature</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">FAQ</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
<a className="hover:text-white transition-colors" href="#">Contact Us</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-slate-300 hover:text-white transition-colors" href="#">Login</a>
<a className="text-xs font-semibold bg-white text-slate-950 px-5 py-2 rounded-full hover:bg-slate-200 transition-colors" href="#">Sign Up</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-4xl mb-16">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-white">
                    Revolutionizing crypto trading <br/> with advanced simplicity
                </h1>
<p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
                    Trade with precision, access real-time data, and manage your assets securely—all in one seamless experience.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-slate-950 rounded-full text-sm font-medium hover:bg-slate-200 transition-all">
                        Join beta test
                    </button>
<button className="w-full sm:w-auto px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/10 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                        Watch demo
                    </button>
</div>
</div>

<div className="relative mx-auto w-full perspective-[2000px] mt-12">
<div className="glass-panel rounded-xl overflow-hidden shadow-2xl bg-[#0f1218]">

<div className="h-10 border-b border-white/5 bg-[#0b0e14] flex items-center justify-between px-4">
<div className="flex items-center gap-4 overflow-x-auto hide-scrollbar">
<div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded text-[10px] text-emerald-400 border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                BTC/USDT <span className="text-emerald-400">+1.6%</span>
</div>
<div className="flex items-center gap-2 text-[10px] text-slate-500 hover:text-slate-300 cursor-pointer">
<span>NEAR/USDT</span> <span className="text-emerald-500">+4.4%</span>
</div>
<div className="flex items-center gap-2 text-[10px] text-slate-500 hover:text-slate-300 cursor-pointer">
<span>GLMR/USDT</span> <span className="text-red-500">-0.3%</span>
</div>
<div className="flex items-center gap-2 text-[10px] text-slate-500 hover:text-slate-300 cursor-pointer">
<span>AVE/USDT</span> <span className="text-emerald-500">+1.32%</span>
</div>
</div>
</div>
<div className="flex flex-col lg:flex-row h-[600px] lg:h-[500px]">

<div className="flex-1 p-4 border-r border-white/5 bg-[#0f1218] flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="iconify text-orange-500" data-icon="lucide:bitcoin" data-width="20"></span>
<h3 className="text-white font-semibold">BTC / USDT</h3>
<span className="text-xs text-slate-500 bg-slate-800 px-1 rounded">1h</span>
</div>
<div className="text-2xl font-bold text-emerald-400 tracking-tight">$106,429.64</div>
<div className="text-xs text-slate-500">Vol 24h: 843M USDT</div>
</div>
<div className="flex gap-2 text-[10px] text-slate-400 font-medium">
<span className="px-2 py-1 hover:bg-white/5 rounded cursor-pointer">1H</span>
<span className="px-2 py-1 bg-white/10 text-white rounded cursor-pointer">4H</span>
<span className="px-2 py-1 hover:bg-white/5 rounded cursor-pointer">1D</span>
<span className="px-2 py-1 hover:bg-white/5 rounded cursor-pointer">1W</span>
</div>
</div>

<div className="flex-1 relative w-full">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 800 300">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10b981" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#10b981" stop-opacity="0"></stop>
</lineargradient>
</defs>

<line stroke="#1e293b" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="50" y2="50"></line>
<line stroke="#1e293b" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="150" y2="150"></line>
<line stroke="#1e293b" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="250" y2="250"></line>

<path d="M0,200 C50,190 100,210 150,180 C200,150 250,160 300,130 C350,100 400,120 450,90 C500,60 550,80 600,50 C650,20 700,40 750,30 L800,10" fill="none" stroke="#10b981" strokeWidth="2"></path>
<path d="M0,200 C50,190 100,210 150,180 C200,150 250,160 300,130 C350,100 400,120 450,90 C500,60 550,80 600,50 C650,20 700,40 750,30 L800,10 V300 H0 Z" fill="url(#chartGradient)" stroke="none"></path>
</svg>

<div className="absolute right-0 top-[10%] bg-emerald-500 text-slate-950 text-[10px] font-bold px-1.5 py-0.5 rounded-l-sm">
                                    106,429
                                </div>
</div>
</div>

<div className="w-full lg:w-80 flex flex-col bg-[#0b0e14]">

<div className="p-4 border-b border-white/5">
<div className="flex justify-between items-center mb-4">
<span className="text-sm font-medium text-white">Place Order</span>
<span className="text-[10px] text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/5 cursor-pointer">Cross Margin</span>
</div>
<div className="flex bg-slate-800/50 p-1 rounded-lg mb-4">
<button className="flex-1 py-1.5 text-xs font-medium bg-emerald-500 text-slate-950 rounded shadow-sm">Buy</button>
<button className="flex-1 py-1.5 text-xs font-medium text-slate-400 hover:text-white">Sell</button>
<button className="flex-1 py-1.5 text-xs font-medium text-slate-400 hover:text-white">Swap</button>
</div>
<div className="space-y-3">
<div>
<div className="flex justify-between text-[10px] text-slate-400 mb-1">
<span>Price</span>
<span>USDT</span>
</div>
<div className="bg-slate-900 border border-white/10 rounded px-3 py-2 flex justify-between items-center">
<span className="text-xs text-white">106,140.80</span>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] text-slate-400 mb-1">
<span>Amount</span>
<span>BTC</span>
</div>
<div className="bg-slate-900 border border-white/10 rounded px-3 py-2 flex justify-between items-center">
<span className="text-xs text-white">0.00051</span>
</div>
</div>
<div className="pt-2">
<div className="flex justify-between text-[10px] text-slate-400 mb-1">
<span>Total</span>
<span>150.00 USDT</span>
</div>
<div className="flex justify-between text-[10px] text-slate-500 mb-3">
<span>Avail Balance</span>
<span>860,120.00 USDT</span>
</div>
<button className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-lg transition-colors">
                                            Buy BTC
                                        </button>
</div>
</div>
</div>

<div className="flex-1 p-4 overflow-hidden">
<div className="flex justify-between text-[10px] text-slate-500 mb-2">
<span>Price (USDT)</span>
<span>Amount (BTC)</span>
</div>
<div className="space-y-1">
<div className="flex justify-between text-[10px]">
<span className="text-red-400">106,152.00</span>
<span className="text-slate-400">0.0512</span>
</div>
<div className="flex justify-between text-[10px]">
<span className="text-red-400">106,151.50</span>
<span className="text-slate-400">1.2405</span>
</div>
<div className="flex justify-between text-[10px]">
<span className="text-red-400">106,150.00</span>
<span className="text-slate-400">0.8500</span>
</div>
<div className="my-2 border-y border-white/5 py-1 text-center text-lg font-medium text-emerald-400 tracking-tight">
                                        106,140.80
                                    </div>
<div className="flex justify-between text-[10px]">
<span className="text-emerald-400">106,139.50</span>
<span className="text-slate-400">2.1054</span>
</div>
<div className="flex justify-between text-[10px]">
<span className="text-emerald-400">106,138.00</span>
<span className="text-slate-400">0.5521</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-slate-950 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-500 mb-8">Empowering Traders Worldwide – Over 20+ Million Users Trust Moonwave For Seamless Crypto Trading</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold text-white flex items-center gap-1"><span className="iconify" data-icon="lucide:search"></span> Google</span>
<span className="text-xl font-bold text-white flex items-center gap-1"><span className="iconify" data-icon="lucide:cloud"></span> DigitalOcean</span>
<span className="text-xl font-bold text-white flex items-center gap-1"><span className="iconify" data-icon="lucide:calculator"></span> Intuit</span>
<span className="text-xl font-bold text-white flex items-center gap-1"><span className="iconify" data-icon="lucide:share-2"></span> ShareSpace</span>
<span className="text-xl font-bold text-white flex items-center gap-1"><span className="iconify" data-icon="lucide:server"></span> AWS</span>
</div>
</div>
</section>

<section className="py-24 bg-slate-950">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Features that drive your crypto success</h2>
<p className="text-slate-400 text-lg max-w-2xl mx-auto">Unlock powerful tools designed for seamless trading and portfolio management.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group bg-slate-900 rounded-2xl p-1 overflow-hidden hover:bg-slate-800 transition-colors border border-white/5">
<div className="bg-[#0b0e14] rounded-xl overflow-hidden h-64 p-6 relative flex flex-col justify-end">
<div className="absolute inset-0 feature-card-visual opacity-50"></div>

<div className="relative z-10 w-full bg-slate-950/80 backdrop-blur border border-white/10 rounded-lg p-4 mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex justify-between items-center mb-3">
<div className="flex items-center gap-2">
<span className="text-xs text-orange-400 font-bold">BTC/USDT</span>
<span className="iconify text-yellow-500" data-icon="lucide:star" data-width="10"></span>
</div>
<span className="text-xs text-slate-500">All</span>
</div>
<div className="text-2xl font-bold text-white tracking-tight mb-1">$106,429.64</div>
<div className="text-[10px] text-emerald-400 flex items-center gap-1 mb-4">
<span className="iconify" data-icon="lucide:trending-up" data-width="10"></span>
                                +4.6% ($186.00)
                            </div>
<svg className="w-full h-12" viewbox="0 0 200 50">
<path d="M0,40 C20,35 40,45 60,25 C80,10 100,20 120,30 C140,40 160,15 200,5" fill="none" stroke="#10b981" strokeWidth="2"></path>
<circle className="animate-ping" cx="150" cy="22" fill="#10b981" r="3"></circle>
<circle cx="150" cy="22" fill="#10b981" r="3"></circle>
</svg>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-white mb-2">Real-time trading</h3>
<p className="text-sm text-slate-400">Stay ahead with live market updates and instant execution. Monitor market movements and execute in in real time.</p>
</div>
</div>

<div className="group bg-slate-900 rounded-2xl p-1 overflow-hidden hover:bg-slate-800 transition-colors border border-white/5">
<div className="bg-[#0b0e14] rounded-xl overflow-hidden h-64 p-6 relative flex flex-col justify-center">
<div className="absolute inset-0 feature-card-visual opacity-50"></div>

<div className="relative z-10 w-full space-y-3 transform group-hover:scale-105 transition-transform duration-500">
<div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/80 border border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white"><span className="iconify" data-icon="lucide:bitcoin" data-width="16"></span></div>
<div><div className="text-xs font-bold text-white">Bitcoin</div><div className="text-[10px] text-slate-500">0.002355 BTC</div></div>
</div>
<div className="text-right"><div className="text-xs font-bold text-white">+$41,140</div><div className="text-[10px] text-emerald-400">↗ 10.0%</div></div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/80 border border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white"><span className="iconify" data-icon="lucide:gem" data-width="16"></span></div>
<div><div className="text-xs font-bold text-white">Ethereum</div><div className="text-[10px] text-slate-500">0.002899 ETH</div></div>
</div>
<div className="text-right"><div className="text-xs font-bold text-white">+$49.80</div><div className="text-[10px] text-emerald-400">↗ 12.0%</div></div>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-white mb-2">Asset Management</h3>
<p className="text-sm text-slate-400">Get a comprehensive overview of your portfolio and make informed decisions with intuitive tracking tools.</p>
</div>
</div>

<div className="group bg-slate-900 rounded-2xl p-1 overflow-hidden hover:bg-slate-800 transition-colors border border-white/5">
<div className="bg-[#0b0e14] rounded-xl overflow-hidden h-64 p-6 relative flex flex-col items-center justify-center">
<div className="absolute inset-0 feature-card-visual opacity-50"></div>

<div className="relative z-10 w-full max-w-[280px] bg-slate-950/90 backdrop-blur rounded-xl border border-white/10 p-4 transform group-hover:translate-y-2 transition-transform duration-500 shadow-2xl">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-semibold text-white">Place Order</span>
<span className="text-[10px] text-slate-400 bg-white/5 px-1.5 py-0.5 rounded">Cross margin</span>
</div>
<div className="grid grid-cols-4 gap-1 mb-3">
<div className="h-6 rounded bg-emerald-500 text-slate-950 text-[10px] font-bold flex items-center justify-center">Buy</div>
<div className="h-6 rounded bg-slate-800 text-slate-400 text-[10px] flex items-center justify-center">Sell</div>
<div className="h-6 rounded bg-slate-800 text-slate-400 text-[10px] flex items-center justify-center col-span-2">Swap</div>
</div>
<div className="space-y-2">
<div className="bg-slate-900 rounded p-2 flex justify-between items-center border border-white/5">
<span className="text-[10px] text-slate-400">Price</span>
<span className="text-[10px] text-white font-mono">106,145.80</span>
</div>
<div className="bg-slate-900 rounded p-2 flex justify-between items-center border border-white/5">
<span className="text-[10px] text-slate-400">Amount</span>
<span className="text-[10px] text-white font-mono">0.005</span>
</div>
<div className="h-1 w-full bg-slate-800 rounded-full mt-2 overflow-hidden">
<div className="h-full w-2/3 bg-emerald-500"></div>
</div>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-white mb-2">User-friendly Platform</h3>
<p className="text-sm text-slate-400">Moonwave's intuitive interface ensures a smooth experience for both beginners and seasoned traders.</p>
</div>
</div>

<div className="group bg-slate-900 rounded-2xl p-1 overflow-hidden hover:bg-slate-800 transition-colors border border-white/5">
<div className="bg-[#0b0e14] rounded-xl overflow-hidden h-64 p-6 relative flex flex-col items-center justify-center">
<div className="absolute inset-0 feature-card-visual opacity-50"></div>

<div className="relative z-10 w-full max-w-[280px] bg-slate-950/90 backdrop-blur rounded-xl border border-white/10 p-4 transform group-hover:rotate-1 transition-transform duration-500 shadow-2xl">
<div className="bg-slate-900/50 rounded-lg p-3 border border-white/5 mb-1 relative">
<div className="flex justify-between mb-1">
<span className="text-[10px] text-slate-400">You pay</span>
<div className="flex items-center gap-1 bg-slate-800 px-1.5 py-0.5 rounded-full">
<div className="w-3 h-3 rounded-full bg-blue-500"></div>
<span className="text-[10px] text-white font-medium">ADA</span>
<span className="iconify text-slate-400" data-icon="lucide:chevron-down" data-width="10"></span>
</div>
</div>
<div className="text-sm font-semibold text-white">9900</div>
</div>
<div className="flex justify-center -my-3 relative z-20">
<div className="w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-emerald-500">
<span className="iconify" data-icon="lucide:arrow-down-up" data-width="12"></span>
</div>
</div>
<div className="bg-slate-900/50 rounded-lg p-3 border border-white/5 mt-1">
<div className="flex justify-between mb-1">
<span className="text-[10px] text-slate-400">You get</span>
<div className="flex items-center gap-1 bg-slate-800 px-1.5 py-0.5 rounded-full">
<div className="w-3 h-3 rounded-full bg-orange-500"></div>
<span className="text-[10px] text-white font-medium">BTC</span>
<span className="iconify text-slate-400" data-icon="lucide:chevron-down" data-width="10"></span>
</div>
</div>
<div className="text-sm font-semibold text-white">0.00118</div>
</div>
<div className="mt-3 flex justify-between items-center text-[10px] text-slate-500">
<span>Current Price</span>
<span>1 ADA ≈ 0.000055 BTC</span>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-white mb-2">Swap Crypto Coins</h3>
<p className="text-sm text-slate-400">Quickly and securely swap between cryptocurrencies. Enjoy fast and easy conversions.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-6">Download Moonwave App Today</h2>
<p className="text-slate-400 mb-10">Trade on the go with seamless access to real-time markets, secure transactions, and more.</p>
<div className="flex gap-4 mb-12">
<button className="px-5 py-2 rounded-lg bg-slate-950 border border-white/20 hover:border-white/40 flex items-center gap-2 transition-colors">
<span className="iconify text-white" data-icon="lucide:play-circle" data-width="20"></span>
<div className="text-left">
<div className="text-[9px] uppercase font-bold text-slate-400">Get it on</div>
<div className="text-sm font-bold text-white leading-none">Google Play</div>
</div>
</button>
<button className="px-5 py-2 rounded-lg bg-slate-950 border border-white/20 hover:border-white/40 flex items-center gap-2 transition-colors">
<span className="iconify text-white" data-icon="lucide:apple" data-width="20"></span>
<div className="text-left">
<div className="text-[9px] uppercase font-bold text-slate-400">Download on the</div>
<div className="text-sm font-bold text-white leading-none">App Store</div>
</div>
</button>
</div>
<div className="space-y-8 relative pl-4 border-l border-white/10">
<div className="relative">
<span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-slate-900"></span>
<h4 className="text-white font-medium mb-1">Trade anywhere, anytime</h4>
<p className="text-sm text-slate-500">Seamlessly buy, sell, and manage assets on the go with a few taps.</p>
</div>
<div className="relative">
<span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-700 border-2 border-slate-900"></span>
<h4 className="text-white font-medium mb-1">Track your portfolio</h4>
<p className="text-sm text-slate-500">Get an instant overview of your holdings with real-time updates.</p>
</div>
<div className="relative">
<span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-700 border-2 border-slate-900"></span>
<h4 className="text-white font-medium mb-1">Custom price alerts</h4>
<p className="text-sm text-slate-500">Set personalized notifications to stay ahead of market movements.</p>
</div>
<div className="relative">
<span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-700 border-2 border-slate-900"></span>
<h4 className="text-white font-medium mb-1">Enhanced app security</h4>
<p className="text-sm text-slate-500">Protect your trades and data with advanced biometric authentication.</p>
</div>
</div>
</div>

<div className="flex-1 flex justify-center lg:justify-end relative">
<div className="w-[300px] h-[600px] rounded-[3rem] border-8 border-slate-800 bg-slate-950 relative overflow-hidden shadow-2xl z-10">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>

<div className="h-full w-full bg-[#05080f] p-4 pt-10 flex flex-col">

<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center"><span className="iconify text-white" data-icon="lucide:waves" data-width="12"></span></div>
<span className="text-sm font-bold text-white">MoonWave</span>
</div>
<div className="flex gap-2 text-white">
<span className="iconify" data-icon="lucide:search" data-width="16"></span>
<span className="iconify" data-icon="lucide:bell" data-width="16"></span>
</div>
</div>

<div className="mb-6">
<div className="text-xs text-slate-500 mb-1">Your Balance</div>
<div className="text-3xl font-bold text-white mb-1">$43,909.23</div>
<div className="text-xs text-emerald-400 font-medium">+12.5%</div>
</div>

<div className="grid grid-cols-4 gap-2 mb-8">
<div className="flex flex-col items-center gap-1">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white"><span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span></div>
<span className="text-[10px] text-slate-400">Send</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white"><span className="iconify" data-icon="lucide:arrow-down-left" data-width="16"></span></div>
<span className="text-[10px] text-slate-400">Receive</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950"><span className="iconify" data-icon="lucide:plus" data-width="16"></span></div>
<span className="text-[10px] text-white font-medium">Buy</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></div>
<span className="text-[10px] text-slate-400">More</span>
</div>
</div>

<div className="flex-1 space-y-3">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-semibold text-white">My Assets</span>
<span className="text-[10px] text-slate-500">View all</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center"><span className="iconify" data-icon="lucide:bitcoin" data-width="16"></span></div>
<div>
<div className="text-xs font-semibold text-white">Bitcoin</div>
<div className="text-[10px] text-slate-500">0.45 BTC</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-semibold text-white">$41,140</div>
<div className="text-[10px] text-emerald-400">+1.2%</div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-500 flex items-center justify-center"><span className="iconify" data-icon="lucide:gem" data-width="16"></span></div>
<div>
<div className="text-xs font-semibold text-white">Ethereum</div>
<div className="text-[10px] text-slate-500">4.2 ETH</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-semibold text-white">$9,230</div>
<div className="text-[10px] text-emerald-400">+3.5%</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-emerald-500/10 blur-[80px] z-0 rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-2">What our users say</h2>
<p className="text-slate-500">Hear from individuals who trust Moonwave for their trading journey, regardless of experience.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-8 rounded-2xl bg-slate-900 border border-white/5 hover:border-white/10 transition-colors">
<div className="text-[10px] text-slate-500 uppercase tracking-wider mb-4">February 15, 2024</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"Moonwave makes trading so intuitive and stress-free. As someone who was hesitant about entering the crypto world, I appreciate how easy it is to navigate and execute trades. The real-time updates and smooth design have been crucial in helping me feel confident every step of the way."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=1"/>
</div>
<div>
<div className="text-sm font-semibold text-white">Sarah Lopez</div>
<div className="text-xs text-slate-500">Freelance Writer</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-900 border border-white/5 hover:border-white/10 transition-colors">
<div className="text-[10px] text-slate-500 uppercase tracking-wider mb-4">March 3, 2024</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"The portfolio tracking feature on Moonwave is a game changer for me. I can view all my assets in one place without jumping between platforms. The app's clear visuals and instant updates have made managing my finances simpler than I ever thought possible."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=2"/>
</div>
<div>
<div className="text-sm font-semibold text-white">David Kim</div>
<div className="text-xs text-slate-500">Photographer</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-900 border border-white/5 hover:border-white/10 transition-colors">
<div className="text-[10px] text-slate-500 uppercase tracking-wider mb-4">January 10, 2024</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"I've never been tech-savvy, but Moonwave has made me feel like a pro. The app's user-friendly interface guided me step-by-step, and within minutes, I was trading with confidence. It's perfect for beginners and saves so much time!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=3"/>
</div>
<div>
<div className="text-sm font-semibold text-white">Emily Carter</div>
<div className="text-xs text-slate-500">Event Planner</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-900 border border-white/5 hover:border-white/10 transition-colors">
<div className="text-[10px] text-slate-500 uppercase tracking-wider mb-4">April 22, 2024</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"The coin swap feature is incredibly fast and hassle-free. I was able to exchange multiple cryptocurrencies without any confusion. Moonwave is my go-to app for managing my growing portfolio. It's safe, reliable, and so easy to use."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=4"/>
</div>
<div>
<div className="text-sm font-semibold text-white">Jason Reed</div>
<div className="text-xs text-slate-500">Fulltime Gus</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-2 text-center">FAQs</h2>
<p className="text-slate-500 text-center mb-12">Got questions? We've got answers to help you get started</p>
<div className="space-y-4">

<div className="group border border-white/5 bg-slate-900 rounded-lg overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left">
<span className="text-sm font-semibold text-white">What is Moonwave?</span>
<span className="iconify text-slate-500 group-hover:text-white transition-colors" data-icon="lucide:minus"></span>
</button>
<div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed">
                        Moonwave is a user-friendly crypto trading platform designed to simplify buying, selling, and managing digital assets. real-time market updates, portfolio tracking, and secure trading tools.
                    </div>
</div>

<div className="group border border-white/5 bg-slate-900 rounded-lg overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left">
<span className="text-sm font-semibold text-white">Is Moonwave suitable for beginners?</span>
<span className="iconify text-slate-500 group-hover:text-white transition-colors" data-icon="lucide:plus"></span>
</button>
</div>

<div className="group border border-white/5 bg-slate-900 rounded-lg overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left">
<span className="text-sm font-semibold text-white">How secure is Moonwave?</span>
<span className="iconify text-slate-500 group-hover:text-white transition-colors" data-icon="lucide:plus"></span>
</button>
</div>

<div className="group border border-white/5 bg-slate-900 rounded-lg overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left">
<span className="text-sm font-semibold text-white">Can I swap cryptocurrencies on Moonwave?</span>
<span className="iconify text-slate-500 group-hover:text-white transition-colors" data-icon="lucide:plus"></span>
</button>
</div>

<div className="group border border-white/5 bg-slate-900 rounded-lg overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left">
<span className="text-sm font-semibold text-white">Does Moonwave have a mobile app?</span>
<span className="iconify text-slate-500 group-hover:text-white transition-colors" data-icon="lucide:plus"></span>
</button>
</div>

<div className="group border border-white/5 bg-slate-900 rounded-lg overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left">
<span className="text-sm font-semibold text-white">Is it free?</span>
<span className="iconify text-slate-500 group-hover:text-white transition-colors" data-icon="lucide:plus"></span>
</button>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-slate-950">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Transform your crypto <br/> experience with Moonwave</h2>
<p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">Discover the platform built for seamless trading, portfolio management, and real-time market insights. Simplify your journey into the future of finance.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-3 bg-white text-slate-950 rounded-full text-sm font-bold hover:bg-slate-200 transition-colors w-full sm:w-auto">Join Beta test</button>
<button className="px-8 py-3 bg-transparent border border-white/10 text-white rounded-full text-sm font-medium hover:bg-white/5 transition-colors w-full sm:w-auto">Watch demo</button>
</div>
</div>
</section>

<footer className="bg-slate-925 border-t border-white/5 pt-16 pb-8 text-xs">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-white" data-icon="lucide:waves" data-width="20"></span>
<span className="font-bold text-white tracking-tight">MoonWave</span>
</div>
<p className="text-slate-500 leading-relaxed max-w-xs">Revolutionizing crypto trading with advanced simplicity.</p>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Platform Service</h4>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Our Team</a></li>
<li><a className="hover:text-white transition-colors" href="#">Mission and Values</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">News and Updates</a></li>
<li><a className="hover:text-white transition-colors" href="#">Testimonials</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Support</h4>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Digital Transactions</a></li>
<li><a className="hover:text-white transition-colors" href="#">Subscription Management</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Company</h4>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Knowledge Base</a></li>
<li><a className="hover:text-white transition-colors" href="#">Customer Support</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Refund Policy</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Term</h4>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Customer Agreement</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Disclaimer</a></li>
<li><a className="hover:text-white transition-colors" href="#">Risk Notice</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<p className="text-slate-600">© 2024 MoonWave | All Rights Reserved</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="14"></span></a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="14"></span></a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="14"></span></a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all" href="#"><span className="iconify" data-icon="lucide:youtube" data-width="14"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
