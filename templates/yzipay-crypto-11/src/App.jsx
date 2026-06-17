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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center transform rotate-3">
<span className="font-bold text-black text-xs">Y</span>
</div>
<span className="text-white font-semibold tracking-tight text-sm">YZIPAY</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal hover:text-white transition-colors" href="#">Personal</a>
<a className="text-sm font-normal hover:text-white transition-colors" href="#">Business</a>
<a className="text-sm font-normal hover:text-white transition-colors" href="#">Developers</a>
<a className="text-sm font-normal hover:text-white transition-colors" href="#">Learn</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-white hover:text-neutral-300 transition-colors hidden sm:block" href="#">Log in</a>
<button className="bg-white text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-neutral-200 transition-colors">
                    Open App
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-12 md:pt-48 md:pb-20 overflow-hidden">

<div className="absolute inset-0 mesh-gradient pointer-events-none"></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 w-fit backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-neutral-300 tracking-tight">YziPay V2 is now Live</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-white tracking-tighter leading-[1.1] mb-6">
                    Pay globally.<br/>
<span className="text-neutral-500">Settle instantly.</span>
</h1>
<p className="text-lg text-neutral-400 mb-8 leading-relaxed max-w-lg font-light">
                    The only wallet you need for every chain. Experience frictionless payments across all L1s and L2s with zero bridge anxiety.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Get YziPay
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16" strokeWidth="2"></span>
</button>
<button className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-neutral-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all">
<span className="iconify" data-icon="lucide:play-circle" data-width="16" strokeWidth="1.5"></span>
                        Watch Demo
                    </button>
</div>
</div>

<div className="relative lg:h-[750px] flex items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-[90px] rounded-full"></div>

<div className="relative w-[340px] h-[680px] bg-[#000] rounded-[55px] border-[8px] border-[#1f1f1f] shadow-2xl overflow-hidden ring-1 ring-white/20 animate-float z-20">

<div className="ios-notch flex items-center justify-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
</div>

<div className="h-full w-full bg-[#080808] flex flex-col relative overflow-hidden">

<div className="h-12 w-full flex justify-between items-center px-6 pt-2 z-40">
<span className="text-[10px] font-semibold text-white">9:41</span>
<div className="flex gap-1.5">
<span className="iconify text-white" data-icon="lucide:signal" data-width="12"></span>
<span className="iconify text-white" data-icon="lucide:wifi" data-width="12"></span>
<span className="iconify text-white" data-icon="lucide:battery-medium" data-width="12"></span>
</div>
</div>

<div className="px-6 py-2 flex justify-between items-center z-40">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-b from-neutral-700 to-neutral-800 border border-white/10 flex items-center justify-center">
<span className="text-[10px] font-bold text-white">YZ</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-neutral-400 font-medium">Hello, Alex</span>
<span className="text-xs text-white font-medium">Personal Account</span>
</div>
</div>
<button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
<span className="iconify text-white" data-icon="lucide:bell" data-width="16"></span>
</button>
</div>

<div className="flex-1 overflow-y-auto pt-6 px-4 no-scrollbar pb-20 relative z-30">

<div className="text-center mb-8">
<div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] text-emerald-400 font-medium">+2.4% today</span>
</div>
<h2 className="text-5xl font-semibold text-white tracking-tighter">$84,230</h2>
</div>

<div className="grid grid-cols-4 gap-2 mb-8">
<button className="flex flex-col items-center gap-2 group">
<div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<span className="text-[10px] font-medium text-neutral-400">Send</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
<span className="iconify" data-icon="lucide:arrow-down-left" data-width="20"></span>
</div>
<span className="text-[10px] font-medium text-neutral-400">Receive</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
<span className="iconify" data-icon="lucide:arrow-left-right" data-width="20"></span>
</div>
<span className="text-[10px] font-medium text-neutral-400">Swap</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
<span className="iconify" data-icon="lucide:scan" data-width="20"></span>
</div>
<span className="text-[10px] font-medium text-neutral-400">Scan</span>
</button>
</div>

<div className="relative w-full h-32 rounded-2xl overflow-hidden mb-6 group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="absolute top-4 left-4">
<span className="text-xs font-semibold text-white/80">YziCard Virtual</span>
</div>
<div className="absolute bottom-4 left-4">
<span className="text-lg font-mono text-white tracking-widest">•••• 4291</span>
</div>
<div className="absolute bottom-4 right-4">
<span className="iconify text-white" data-icon="logos:mastercard" data-width="24"></span>
</div>
<div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-2 py-1 rounded-md">
<span className="text-[10px] font-medium text-white">Frozen</span>
</div>
</div>

<div className="space-y-1">
<div className="flex justify-between items-center mb-2 px-1">
<span className="text-xs font-semibold text-white">Assets</span>
<span className="text-[10px] text-neutral-500">View All</span>
</div>

<div className="p-3 rounded-2xl bg-[#111] border border-white/5 flex items-center justify-between hover:bg-[#161616] transition-colors">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
<span className="iconify" data-icon="logos:ethereum" data-width="20"></span>
</div>
<div>
<div className="text-sm font-medium text-white">Ethereum</div>
<div className="text-[10px] text-neutral-500">2.5 ETH</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white">$4,821.50</div>
<div className="text-[10px] text-emerald-500">+1.2%</div>
</div>
</div>

<div className="p-3 rounded-2xl bg-[#111] border border-white/5 flex items-center justify-between hover:bg-[#161616] transition-colors">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-black border border-white/10 flex items-center justify-center">
<span className="iconify" data-icon="logos:solana" data-width="20"></span>
</div>
<div>
<div className="text-sm font-medium text-white">Solana</div>
<div className="text-[10px] text-neutral-500">450 SOL</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white">$12,450.00</div>
<div className="text-[10px] text-emerald-500">+5.4%</div>
</div>
</div>

<div className="p-3 rounded-2xl bg-[#111] border border-white/5 flex items-center justify-between hover:bg-[#161616] transition-colors">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-[#0052FF] flex items-center justify-center">
<span className="iconify text-white" data-icon="logos:base" data-width="20"></span>
</div>
<div>
<div className="text-sm font-medium text-white">Base</div>
<div className="text-[10px] text-neutral-500">1.2 ETH</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white">$2,210.40</div>
<div className="text-[10px] text-neutral-500">0.0%</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-20 bg-[#080808]/90 backdrop-blur-xl border-t border-white/5 flex justify-around items-center px-2 pb-4 z-50">
<button className="flex flex-col items-center gap-1 p-2 text-white">
<span className="iconify" data-icon="lucide:home" data-width="20" strokeWidth="2.5"></span>
<span className="text-[9px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-neutral-500 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:credit-card" data-width="20"></span>
<span className="text-[9px] font-medium">Cards</span>
</button>
<button className="flex items-center justify-center -mt-6">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg shadow-white/20">
<span className="iconify text-black" data-icon="lucide:plus" data-width="24" strokeWidth="3"></span>
</div>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-neutral-500 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="20"></span>
<span className="text-[9px] font-medium">Market</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-neutral-500 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:settings" data-width="20"></span>
<span className="text-[9px] font-medium">Settings</span>
</button>
</div>

<div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-50"></div>
</div>
</div>

<div className="absolute top-[30%] -right-16 md:right-0 p-4 glass-card rounded-2xl flex items-center gap-3 shadow-2xl animate-bounce z-30" style={{animationDuration: '6s'}}>
<div className="w-10 h-10 rounded-full bg-[#F7931A] flex items-center justify-center text-white border border-white/10">
<span className="iconify" data-icon="logos:bitcoin" data-width="20"></span>
</div>
<div>
<div className="text-xs font-semibold text-white">Received BTC</div>
<div className="text-[10px] text-neutral-400">Layer 1 • Just now</div>
</div>
</div>
<div className="absolute bottom-[25%] -left-16 md:left-0 p-4 glass-card rounded-2xl flex items-center gap-3 shadow-2xl animate-bounce z-30" style={{animationDuration: '7s'}}>
<div className="w-10 h-10 rounded-full bg-[#28A0F0] flex items-center justify-center text-white border border-white/10">
<span className="iconify" data-icon="logos:arbitrum" data-width="24"></span>
</div>
<div>
<div className="text-xs font-semibold text-white">Bridged to Arb</div>
<div className="text-[10px] text-neutral-400">Layer 2 • 2s ago</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-[#030303] overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-6">
<p className="text-center text-xs font-medium text-neutral-500 uppercase tracking-widest">Supported on 100+ L1s &amp; L2s</p>
</div>

<div className="marquee-container w-full overflow-hidden flex mb-8">
<div className="flex animate-scroll-right gap-16 min-w-full items-center">

<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:ethereum" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:bitcoin" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:solana" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:polygon" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:avalanche" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:binance" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:near" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:fantom" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:cardano-icon" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:tron" data-width="32"></span>

<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:ethereum" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:bitcoin" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:solana" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:polygon" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:avalanche" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:binance" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:near" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:fantom" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:cardano-icon" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:tron" data-width="32"></span>
</div>
</div>

<div className="marquee-container w-full overflow-hidden flex">
<div className="flex animate-scroll-right gap-16 min-w-full items-center" style={{animationDelay: '-10s'}}>

<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:arbitrum" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:optimism" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:base" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:zksync" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:starknet" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:sui" data-width="50"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:aptos-icon" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:cosmos-icon" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:polkadot" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:metis-icon" data-width="32"></span>

<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:arbitrum" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:optimism" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:base" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:zksync" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:starknet" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:sui" data-width="50"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:aptos-icon" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:cosmos-icon" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:polkadot" data-width="32"></span>
<span className="iconify text-neutral-500 hover:text-white hover:scale-110 transition-all opacity-60 hover:opacity-100" data-icon="logos:metis-icon" data-width="32"></span>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-6">Designed for the <br/>next generation of money.</h2>
<p className="text-neutral-400 max-w-xl text-lg font-light">
                    We abstracted away the complexities of bridges, gas fees, and network switching. 
                    It just works.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 glass-card p-8 rounded-3xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-all duration-700"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Unified Balance</h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                            Your assets are aggregated into a single, usable balance. Pay for coffee with USDC on Polygon while holding ETH on Mainnet. The protocol handles the routing and settlement instantly.
                        </p>
</div>

<div className="absolute bottom-0 right-0 p-8 opacity-50 group-hover:opacity-100 transition-opacity">
<div className="flex -space-x-3">
<div className="w-12 h-12 rounded-full border-2 border-[#050505] bg-neutral-800 flex items-center justify-center">
<span className="opacity-50 grayscale" data-icon="logos:ethereum" data-width="20"></span>
</div>
<div className="w-12 h-12 rounded-full border-2 border-[#050505] bg-neutral-700 flex items-center justify-center">
<span className="opacity-50 grayscale" data-icon="logos:solana" data-width="20"></span>
</div>
<div className="w-12 h-12 rounded-full border-2 border-[#050505] bg-neutral-600 flex items-center justify-center">
<span className="opacity-50 grayscale" data-icon="logos:bitcoin" data-width="20"></span>
</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-emerald-500/10 to-transparent"></div>
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
<span className="iconify" data-icon="lucide:fuel" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Gas Abstracted</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Never worry about having ETH for gas. Pay transaction fees in any token you hold.
                    </p>
</div>

<div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
<span className="iconify" data-icon="lucide:lock" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">MPC Security</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Private keys are sharded and distributed. You maintain full control without the single point of failure.
                    </p>
</div>

<div className="col-span-1 md:col-span-2 glass-card p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group">
<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full group-hover:bg-orange-500/20 transition-all duration-700"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 border border-orange-500/20">
<span className="iconify" data-icon="lucide:credit-card" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Fiat On/Off Ramp</h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                            Connect your bank account or card. Instant conversion from USD/EUR to crypto and back, with lower fees than centralized exchanges.
                        </p>
</div>

<div className="mt-8 bg-black/40 rounded-lg p-4 font-mono text-xs text-neutral-400 border border-white/5 w-full md:w-2/3 self-end shadow-2xl">
<div className="flex gap-1.5 mb-3">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
</div>
<p><span className="text-purple-400">await</span> YziPay.<span className="text-blue-400">ramp</span>({</p>
<p className="pl-4">amount: <span className="text-orange-400">1000</span>,</p>
<p className="pl-4">currency: <span className="text-green-400">'USD'</span>,</p>
<p className="pl-4">to: <span className="text-green-400">'ETH'</span></p>
<p>});</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Developers first</h2>
<p className="text-neutral-400 mb-12">Integrate omnichain payments into your dApp with 3 lines of code.</p>
<div className="max-w-3xl mx-auto bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden shadow-2xl text-left">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0f0f0f]">
<div className="flex gap-2">
<span className="text-xs text-neutral-500 font-medium">install</span>
</div>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-neutral-700"></span>
<span className="w-2 h-2 rounded-full bg-neutral-700"></span>
</div>
</div>
<div className="p-6 font-mono text-sm overflow-x-auto">
<p className="text-neutral-400 mb-4">
<span className="text-emerald-500">$</span> npm install @yzipay/sdk
                    </p>
<p className="text-neutral-300">
<span className="text-purple-400">import</span> { YziPayment } <span className="text-purple-400">from</span> <span className="text-green-400">'@yzipay/sdk'</span>;
                    </p>
<br/>
<p className="text-neutral-300">
<span className="text-neutral-500">// Initialize a cross-chain payment</span><br/>
<span className="text-purple-400">const</span> tx = <span className="text-purple-400">await</span> YziPayment.<span className="text-blue-400">create</span>({<br/>
                          recipient: <span className="text-green-400">'alice.sol'</span>,<br/>
                          amount: <span className="text-orange-400">50</span>,<br/>
                          token: <span className="text-green-400">'USDC'</span>,<br/>
                          sourceChain: <span className="text-green-400">'ETH'</span><br/>
                        });
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tighter mb-8">
                Ready to transcend boundaries?
            </h2>
<p className="text-lg text-neutral-400 mb-10 font-light">
                Join 100,000+ users accessing the true potential of the decentralized web with YziPay.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-black px-8 py-4 rounded-full font-medium text-sm hover:bg-neutral-200 transition-all">
                    Get the App
                </button>
<button className="bg-transparent text-white border border-white/20 px-8 py-4 rounded-full font-medium text-sm hover:bg-white/5 transition-all">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030303] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center transform rotate-3">
<span className="font-bold text-black text-xs">Y</span>
</div>
<span className="text-white font-medium tracking-tight text-sm">YZIPAY</span>
</div>
<p className="text-sm text-neutral-500 max-w-xs">
                        The world's first truly omnichain payment protocol. 
                        Licensed and regulated.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Mobile App</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Protocol</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Yield</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">YziCard</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Status</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Support</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">About</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<p className="text-xs text-neutral-600">© 2023 YziPay Technologies Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="16"></span></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:disc" data-width="16"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
