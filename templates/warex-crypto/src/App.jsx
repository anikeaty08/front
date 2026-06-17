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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
orange: {
50: '#fff7ed',
100: '#ffedd5',
200: '#fed7aa',
300: '#fdba74',
400: '#fb923c',
500: '#f97316',
600: '#ea580c',
700: '#c2410c',
},
neutral: {
25: '#fcfcfc',
50: '#fafafa',
100: '#f5f5f5',
200: '#e5e5e5',
300: '#d4d4d4',
400: '#a3a3a3',
500: '#737373',
600: '#525252',
800: '#262626',
900: '#171717',
}
},
boxShadow: {
'soft': '0 2px 10px rgba(0, 0, 0, 0.03)',
'card': '0 0 0 1px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.04)',
'card-hover': '0 0 0 1px rgba(234, 88, 12, 0.15), 0 8px 30px rgba(0,0,0,0.04)',
'glow-orange': '0 0 40px -10px rgba(249, 115, 22, 0.2)',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'float-slow': 'float 8s ease-in-out 1s infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
'50%': { transform: 'translateY(-20px) rotate(2deg)' },
}
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
      

<nav className="fixed top-0 w-full z-50 glass-light transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-10">
<a className="flex items-center gap-2 group" href="#">
<span className="flex items-center h-8">
<div className="flex items-center gap-2.5 cursor-pointer">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-600 shadow-sm text-white ring-1 ring-inset ring-white/10">
<span className="text-[10px] font-semibold tracking-tight">W&amp;X</span>
</div>
<span className="text-lg font-semibold tracking-tight text-neutral-900">Warex</span>
</div>
</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#markets">Assets</a>
<a className="hover:text-neutral-900 transition-colors" href="#platforms">Exchange</a>
<a className="text-neutral-900 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200/60 hover:border-neutral-300 transition-colors" href="#">Airdrops</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 px-2 transition-colors" href="#">Log in</a>
<a className="hover:bg-orange-700 transition-all hover:shadow-orange-500/20 text-sm font-semibold text-white bg-orange-600 border-transparent border rounded-lg pt-2 pr-2 pb-2 pl-2 shadow-sm" href="#">
                    Connect Wallet
                </a>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden bg-neutral-25 pt-32 pb-20 relative">

<div className="absolute inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-grid-black opacity-60"></div>

<div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[120px] mix-blend-multiply opacity-50"></div>
<div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-50/60 rounded-full blur-[100px] mix-blend-multiply opacity-60"></div>
<div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] bg-yellow-50/50 rounded-full blur-[80px] mix-blend-multiply animate-pulse-slow opacity-40"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 lg:gap-20 gap-x-12 gap-y-12 items-center">

<div className="max-w-2xl">
<div className="inline-flex gap-2 uppercase text-[11px] font-bold text-emerald-700 tracking-wider bg-emerald-50/50 border-emerald-200/60 border rounded-full mb-8 py-1.5 pl-2 pr-4 shadow-sm items-center backdrop-blur-sm">
<span className="relative flex h-2 w-2 ml-1">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Bull Run Special
                    </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-neutral-900 mb-6 leading-[1.05]">
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">50%</span> Crypto<br/>
                        Deposit Match
                    </h1>
<p className="text-neutral-500 text-lg md:text-xl font-normal mb-10 leading-relaxed max-w-lg border-l-2 border-orange-200 pl-6">
                        Supercharge your portfolio. Deposit USDT, BTC, or ETH and get 50% extra trading power for perpetuals and spot.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="w-full sm:w-auto bg-orange-600 text-white h-12 px-8 rounded-lg text-base font-semibold hover:bg-orange-700 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_14px_rgba(234,88,12,0.4)] hover:shadow-[0_4px_20px_rgba(234,88,12,0.3)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                            Claim USDT Bonus
                            <iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<p className="text-neutral-400 text-xs sm:ml-2">*Staking T&amp;Cs apply</p>
</div>
</div>

<div className="lg:h-[600px] flex select-none relative perspective-[2000px] items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-orange-100/40 via-transparent to-transparent opacity-60 blur-3xl rounded-full pointer-events-none z-0"></div>

<div className="absolute -left-4 top-24 z-20 animate-float pointer-events-none">
<div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-card-hover rotate-[-12deg] flex flex-col items-center justify-center border border-white/50 ring-1 ring-orange-100/50 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-white to-orange-50/30 opacity-50"></div>
<span className="relative text-2xl font-bold text-orange-600 tracking-tight">50%</span>
<span className="relative text-[9px] font-bold text-orange-400 uppercase tracking-wider mt-0.5">Yield</span>
</div>
</div>

<div className="absolute right-4 top-12 z-0 animate-float-delayed pointer-events-none">
<div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-xl shadow-card rotate-[12deg] flex items-center justify-center border border-white/50 ring-1 ring-neutral-100">
<iconify-icon className="text-orange-500" height="28" icon="solar:bitcoin-circle-linear" width="28"></iconify-icon>
</div>
</div>

<div className="relative w-[300px] h-[600px] bg-neutral-900 rounded-[2.5rem] border-[6px] border-neutral-800 shadow-2xl rotate-[-6deg] transform hover:rotate-0 transition-transform duration-700 ease-out z-10 ring-1 ring-black/5">
<div className="absolute top-0 left-0 w-full h-full bg-neutral-50 rounded-[2.2rem] overflow-hidden flex flex-col">

<div className="relative flex text-[10px] z-20 font-semibold text-neutral-900 bg-white/80 backdrop-blur-md h-12 pr-6 pb-2 pl-6 items-end justify-between border-b border-neutral-100/50">
<span>9:41</span>
<span className="absolute left-1/2 -translate-x-1/2 bottom-2 font-medium text-orange-600 text-[10px] bg-orange-50 px-2 py-0.5 rounded-full">Boost Active</span>
<div className="flex gap-1.5 items-center opacity-80">
<iconify-icon height="12" icon="solar:signal-linear" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:wi-fi-router-minimalistic-linear" width="12"></iconify-icon>
<iconify-icon height="14" icon="solar:battery-full-linear" width="14"></iconify-icon>
</div>
</div>

<div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30"></div>

<div className="bg-white px-5 pt-3 pb-4 border-b border-neutral-100">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex text-[10px] font-bold text-orange-600 bg-orange-50 w-8 h-8 rounded-full border border-orange-100 items-center justify-center">W3</div>
<div className="">
<div className="text-[10px] text-neutral-400 font-medium">Hello Trader</div>
<div className="leading-tight text-sm font-bold text-neutral-900">0x84f...a92</div>
</div>
</div>
<button className="w-8 h-8 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-500 bg-white hover:bg-neutral-50 transition-colors">
<iconify-icon height="16" icon="solar:bell-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 overflow-hidden relative bg-neutral-50">
<div className="p-5 space-y-5">

<div className="w-full bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-5 text-white shadow-lg shadow-neutral-900/10 relative overflow-hidden group ring-1 ring-white/10">

<div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-[0.03] rounded-full -mr-10 -mt-10 blur-2xl"></div>
<div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500 opacity-20 rounded-full -ml-10 -mb-10 blur-xl"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="">
<div className="text-[10px] text-neutral-400 font-medium tracking-wide uppercase">Est. Portfolio Value</div>
<div className="text-3xl font-bold tracking-tight mt-1">$15,420.00</div>
</div>
<div className="bg-orange-600/90 backdrop-blur text-[9px] font-bold px-2 py-1 rounded text-white flex items-center gap-1 shadow-sm border border-orange-500">
<iconify-icon height="10" icon="solar:stars-minimalistic-linear" width="10"></iconify-icon>
                                                    +50% APY
                                                </div>
</div>
<div className="flex gap-3">
<div className="flex-1 p-2 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
<div className="text-[9px] text-neutral-400 mb-0.5">Spot (USDT)</div>
<div className="text-sm font-semibold">10,000.00</div>
</div>
<div className="flex-1 p-2 bg-orange-500/10 rounded-lg border border-orange-500/20 backdrop-blur-sm">
<div className="text-[9px] text-orange-200 mb-0.5">Bonus (USDT)</div>
<div className="text-sm font-semibold text-orange-50">5,000.00</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-3">
<button className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl border border-neutral-200 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-orange-200 transition-colors group">
<div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-600 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
<iconify-icon height="16" icon="solar:card-recive-linear" width="16"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-neutral-600 group-hover:text-neutral-900">Deposit</span>
</button>
<button className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl border border-neutral-200 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-orange-200 transition-colors group">
<div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-600 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
<iconify-icon height="16" icon="solar:card-send-linear" width="16"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-neutral-600 group-hover:text-neutral-900">Withdraw</span>
</button>
<button className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl border border-neutral-200 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-orange-200 transition-colors group">
<div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-600 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
<iconify-icon height="16" icon="solar:transfer-horizontal-linear" width="16"></iconify-icon>
</div>
<span className="text-[10px] group-hover:text-neutral-900 font-medium text-neutral-600">Swap</span>
</button>
</div>

<div className="">
<div className="flex justify-between items-center mb-3">
<h3 className="text-xs font-bold text-neutral-900">Recent Transactions</h3>
<a className="text-[10px] text-orange-600 font-medium hover:text-orange-700" href="#">Explorer</a>
</div>
<div className="space-y-2.5">

<div className="flex items-center justify-between p-3 bg-white rounded-xl border border-neutral-100 shadow-sm relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
<iconify-icon height="14" icon="solar:gift-linear" width="14"></iconify-icon>
</div>
<div>
<div className="text-xs font-bold text-neutral-900">Airdrop Bonus</div>
<div className="text-[10px] text-neutral-400">Block 1849...22</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-bold text-emerald-600">+ 5,000 USDT</div>
<div className="text-[9px] text-orange-500 font-medium">Confirmed</div>
</div>
</div>

<div className="flex items-center justify-between p-3 bg-white rounded-xl border border-neutral-100 shadow-sm group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-50 text-neutral-600 flex items-center justify-center border border-neutral-100">
<iconify-icon height="14" icon="solar:wallet-money-linear" width="14"></iconify-icon>
</div>
<div>
<div className="text-xs font-bold text-neutral-900">Deposit (ETH)</div>
<div className="text-[10px] text-neutral-400">0x3f...e11</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-bold text-neutral-900">+ 4.2 ETH</div>
<div className="text-[9px] text-neutral-400">Success</div>
</div>
</div>
</div>
</div>

<div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100 flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon height="12" icon="solar:shield-check-linear" width="12"></iconify-icon>
</div>
<div>
<div className="text-xs font-bold text-emerald-900">Funds SAFU</div>
<div className="text-[10px] text-emerald-700 leading-tight mt-0.5">Assets stored in cold wallets.</div>
</div>
</div>
</div>
</div>

<div className="h-14 bg-white/90 backdrop-blur border-t border-neutral-100 flex items-center justify-between px-6 pb-1">
<button className="flex flex-col items-center gap-0.5 text-orange-600">
<iconify-icon height="20" icon="solar:wallet-linear" width="20"></iconify-icon>
<span className="text-[9px] font-bold">Wallet</span>
</button>
<button className="flex flex-col items-center gap-0.5 text-neutral-400 hover:text-neutral-900 transition-colors">
<iconify-icon height="20" icon="solar:graph-new-up-linear" width="20"></iconify-icon>
<span className="text-[9px] font-medium">Trade</span>
</button>
<button className="flex flex-col items-center gap-0.5 text-neutral-400 hover:text-neutral-900 transition-colors">
<iconify-icon height="20" icon="solar:history-linear" width="20"></iconify-icon>
<span className="text-[9px] font-medium">History</span>
</button>
<button className="flex flex-col items-center gap-0.5 text-neutral-400 hover:text-neutral-900 transition-colors">
<iconify-icon height="20" icon="solar:settings-linear" width="20"></iconify-icon>
<span className="text-[9px] font-medium">Settings</span>
</button>
</div>
</div>

<div className="absolute -right-1.5 top-24 w-1.5 h-10 bg-neutral-800 rounded-r-sm shadow-sm"></div>
<div className="absolute -left-1.5 top-20 w-1.5 h-8 bg-neutral-800 rounded-l-sm shadow-sm"></div>
<div className="absolute -left-1.5 top-32 w-1.5 h-12 bg-neutral-800 rounded-l-sm shadow-sm"></div>
</div>

<div className="absolute -right-8 bottom-32 z-20 animate-float pointer-events-none">
<div className="w-16 h-16 rounded-full bg-white shadow-card rotate-6 flex items-center justify-center border-b-4 border-emerald-100">
<div className="w-12 h-12 rounded-full border border-emerald-50 flex items-center justify-center bg-emerald-50 text-emerald-600">
<iconify-icon height="24" icon="solar:verified-check-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-white border-neutral-100 py-12">
<div className="text-center max-w-7xl mr-auto ml-auto pr-6 pl-6">
<p className="text-[10px] text-neutral-400 font-bold mb-10 uppercase tracking-[0.2em]">Instant Crypto Deposits • Global Networks</p>
<div className="flex flex-wrap gap-x-12 gap-y-8 items-center justify-center transition-opacity duration-500">

<div className="flex items-center gap-2 group cursor-default transition-all duration-300">
<div className="w-8 h-8 rounded-full bg-[#F7931A] flex items-center justify-center text-white">
<iconify-icon height="20" icon="mdi:bitcoin" width="20"></iconify-icon>
</div>
<span className="font-semibold text-lg text-neutral-800 tracking-tight">Bitcoin</span>
</div>

<div className="flex items-center gap-2 group cursor-default transition-all duration-300">
<div className="w-8 h-8 rounded-full bg-[#627EEA] flex items-center justify-center text-white">
<iconify-icon height="20" icon="mdi:ethereum" width="20"></iconify-icon>
</div>
<span className="font-semibold text-lg text-neutral-800 tracking-tight">Ethereum</span>
</div>

<div className="flex items-center gap-2 group cursor-default transition-all duration-300">
<div className="w-8 h-8 rounded-full bg-[#26A17B] flex items-center justify-center text-white">
<iconify-icon height="18" icon="simple-icons:tether" width="18"></iconify-icon>
</div>
<span className="font-semibold text-lg text-neutral-800 tracking-tight">USDT</span>
</div>

<div className="hidden md:block w-px h-8 bg-neutral-200 mx-2"></div>

<div className="flex items-center gap-2 group cursor-default transition-all duration-300">
<div className="w-8 h-8 rounded-full bg-[#F3BA2F] flex items-center justify-center text-neutral-900">
<iconify-icon height="18" icon="simple-icons:binance" width="18"></iconify-icon>
</div>
<span className="font-semibold text-lg text-neutral-800 tracking-tight">Binance Pay</span>
</div>

<div className="flex items-center gap-2 group cursor-default transition-all duration-300">
<div className="flex relative w-8 h-8 items-center justify-center bg-black rounded-full text-white">
<iconify-icon height="16" icon="simple-icons:solana" width="16"></iconify-icon>
</div>
<span className="font-semibold text-lg text-neutral-800 hidden sm:block">Solana</span>
</div>

<div className="flex items-center gap-2 group cursor-default pl-2 transition-all duration-300">
<div className="w-8 h-8 rounded-full bg-[#2775CA] flex items-center justify-center text-white z-10 ring-2 ring-white shadow-sm">
<iconify-icon height="16" icon="simple-icons:usdcoin" width="16"></iconify-icon>
</div>
<span className="font-medium text-lg text-neutral-800">USDC</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative border-b border-neutral-100" id="markets">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-4">Explore the Cryptoverse</h2>
<p className="text-neutral-500 text-lg font-light">Diversify your digital assets with access to over 200+ pairs across 6 distinct sectors.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-neutral-25 border border-neutral-200/60 hover:border-orange-200 hover:shadow-card-hover transition-all duration-300">
<div className="w-12 h-12 mb-6 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-orange-600 group-hover:border-orange-100 transition-colors shadow-sm">
<iconify-icon height="24" icon="solar:crown-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2 tracking-tight">Blue Chips</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Trade the market leaders like Bitcoin (BTC) and Ethereum (ETH) with deep liquidity and zero slippage.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-25 border border-neutral-200/60 hover:border-orange-200 hover:shadow-card-hover transition-all duration-300">
<div className="w-12 h-12 mb-6 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-orange-600 group-hover:border-orange-100 transition-colors shadow-sm">
<iconify-icon height="24" icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2 tracking-tight">DeFi Protocol</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Access decentralized finance tokens like UNI, AAVE, and MKR representing the future of banking.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-25 border border-neutral-200/60 hover:border-orange-200 hover:shadow-card-hover transition-all duration-300">
<div className="w-12 h-12 mb-6 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-orange-600 group-hover:border-orange-100 transition-colors shadow-sm">
<iconify-icon height="24" icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2 tracking-tight">Layer 1 Chains</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Buy and sell native coins of competing blockchains like Solana (SOL), Cardano (ADA), and Avalanche (AVAX).</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-25 border border-neutral-200/60 hover:border-orange-200 hover:shadow-card-hover transition-all duration-300">
<div className="w-12 h-12 mb-6 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-orange-600 group-hover:border-orange-100 transition-colors shadow-sm">
<iconify-icon height="24" icon="solar:gamepad-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2 tracking-tight">GameFi &amp; Metaverse</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Invest in virtual worlds with tokens like SAND, MANA, and AXS powering the next gen of gaming.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-25 border border-neutral-200/60 hover:border-orange-200 hover:shadow-card-hover transition-all duration-300">
<div className="w-12 h-12 mb-6 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-orange-600 group-hover:border-orange-100 transition-colors shadow-sm">
<iconify-icon height="24" icon="solar:cat-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2 tracking-tight">Meme Coins</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Ride the viral waves of Dogecoin (DOGE), Shiba Inu (SHIB), and PEPE with high-leverage options.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-25 border border-neutral-200/60 hover:border-orange-200 hover:shadow-card-hover transition-all duration-300">
<div className="w-12 h-12 mb-6 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-orange-600 group-hover:border-orange-100 transition-colors shadow-sm">
<iconify-icon height="24" icon="solar:dollar-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2 tracking-tight">Stablecoins</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Park your funds securely in USDT, USDC, or DAI pairs to hedge against market volatility.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-25 relative border-b border-neutral-100" id="platforms">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-4">Professional Crypto Terminals</h2>
<p className="text-neutral-500 text-lg font-light">Analyze chart patterns and execute trades on institutional-grade platforms compatible with crypto CFDs.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden group hover:border-orange-200 hover:shadow-card-hover transition-all duration-300 flex flex-col">
<div className="p-8 pb-0 flex-1">
<div className="flex items-center justify-between mb-4">
<h3 className="text-2xl font-bold tracking-tight text-neutral-900">Warex Pro (MT4)</h3>
<span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 bg-neutral-100 px-2 py-1 rounded">Classic</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed mb-6">The reliable choice for crypto CFD trading. Perfect for running automated HODL strategies and trading bots.</p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-sm text-neutral-600">
<iconify-icon className="text-orange-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Custom Crypto Indicators</span>
</li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<iconify-icon className="text-orange-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Algorithmic Trading Support</span>
</li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<iconify-icon className="text-orange-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Ultra-low Latency Execution</span>
</li>
</ul>
</div>

<div className="relative bg-neutral-100 h-64 mx-8 rounded-t-lg border-x border-t border-neutral-200 overflow-hidden flex flex-col shadow-sm">

<div className="h-8 bg-white border-b border-neutral-200 flex items-center px-3 gap-2">
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
<div className="w-2 h-2 rounded-full bg-green-400"></div>
</div>
<div className="w-px h-4 bg-neutral-200 mx-2"></div>
<div className="w-16 h-1.5 bg-neutral-100 rounded"></div>
<div className="w-10 h-1.5 bg-neutral-100 rounded"></div>
</div>
<div className="flex flex-1 overflow-hidden">

<div className="w-24 bg-neutral-50 border-r border-neutral-200 p-2 space-y-2 hidden sm:block">
<div className="h-1.5 w-12 bg-neutral-200 rounded mb-3"></div>
<div className="flex justify-between items-center"><div className="w-8 h-1.5 bg-neutral-300 rounded"></div><div className="w-4 h-1.5 bg-green-500/20 rounded"></div></div>
<div className="flex justify-between items-center"><div className="w-8 h-1.5 bg-neutral-300 rounded"></div><div className="w-4 h-1.5 bg-red-500/20 rounded"></div></div>
<div className="flex justify-between items-center"><div className="w-8 h-1.5 bg-neutral-300 rounded"></div><div className="w-4 h-1.5 bg-green-500/20 rounded"></div></div>
<div className="flex justify-between items-center"><div className="w-8 h-1.5 bg-neutral-300 rounded"></div><div className="w-4 h-1.5 bg-red-500/20 rounded"></div></div>
</div>

<div className="flex-1 bg-white relative p-4 flex items-end justify-between gap-1 group-hover:scale-[1.02] transition-transform duration-500 origin-bottom">

<div className="w-full h-full flex items-end justify-around gap-1 opacity-80">
<div className="w-2 h-[40%] bg-emerald-500 rounded-sm relative"><div className="absolute top-[-10px] left-1/2 -translate-x-1/2 h-[calc(100%+20px)] w-px bg-emerald-500"></div></div>
<div className="w-2 h-[30%] bg-red-500 rounded-sm relative"><div className="absolute top-[-5px] left-1/2 -translate-x-1/2 h-[calc(100%+15px)] w-px bg-red-500"></div></div>
<div className="w-2 h-[55%] bg-emerald-500 rounded-sm relative"><div className="absolute top-[-15px] left-1/2 -translate-x-1/2 h-[calc(100%+20px)] w-px bg-emerald-500"></div></div>
<div className="w-2 h-[45%] bg-emerald-500 rounded-sm relative"><div className="absolute top-[-8px] left-1/2 -translate-x-1/2 h-[calc(100%+12px)] w-px bg-emerald-500"></div></div>
<div className="w-2 h-[25%] bg-red-500 rounded-sm relative"><div className="absolute top-[-20px] left-1/2 -translate-x-1/2 h-[calc(100%+30px)] w-px bg-red-500"></div></div>
<div className="w-2 h-[60%] bg-emerald-500 rounded-sm relative"><div className="absolute top-[-10px] left-1/2 -translate-x-1/2 h-[calc(100%+15px)] w-px bg-emerald-500"></div></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="none">
<path d="M10 100 L 40 140 L 80 80 L 120 100 L 160 150 L 200 60" fill="none" stroke="#ea580c" stroke-opacity="0.3" strokeWidth="2"></path>
</svg>
</div>

<div className="absolute top-4 left-4 bg-white border border-neutral-200 shadow-sm rounded p-1.5 flex gap-2">
<div className="bg-red-50 text-red-600 text-[8px] font-bold px-1.5 py-0.5 rounded border border-red-100">SHORT</div>
<div className="bg-emerald-50 text-emerald-600 text-[8px] font-bold px-1.5 py-0.5 rounded border border-emerald-100">LONG</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden group hover:border-orange-200 hover:shadow-card-hover transition-all duration-300 flex flex-col">
<div className="p-8 pb-0 flex-1">
<div className="flex items-center justify-between mb-4">
<h3 className="text-2xl font-bold tracking-tight text-neutral-900">Warex X (MT5)</h3>
<span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-1 rounded border border-orange-100">Advanced</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed mb-6">Next-gen platform for serious crypto traders. View DOM (Depth of Market) and trade exotic pairs with ease.</p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-sm text-neutral-600">
<iconify-icon className="text-orange-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Depth of Market (Level 2)</span>
</li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<iconify-icon className="text-orange-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Built-in Crypto Calendar</span>
</li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<iconify-icon className="text-orange-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Multi-asset Tester</span>
</li>
</ul>
</div>

<div className="relative bg-neutral-900 h-64 mx-8 rounded-t-lg border-x border-t border-neutral-800 overflow-hidden flex flex-col shadow-lg">

<div className="h-8 bg-neutral-800 border-b border-neutral-700 flex items-center px-3 gap-2">
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-neutral-600"></div>
<div className="w-2 h-2 rounded-full bg-neutral-600"></div>
<div className="w-2 h-2 rounded-full bg-neutral-600"></div>
</div>
<div className="w-px h-4 bg-neutral-700 mx-2"></div>
<div className="w-16 h-1.5 bg-neutral-700 rounded"></div>
</div>
<div className="flex flex-1 overflow-hidden">

<div className="flex-1 grid grid-cols-2 grid-rows-1 gap-px bg-neutral-800 p-px">

<div className="bg-neutral-900 relative p-3">
<div className="text-[8px] font-mono text-neutral-400 mb-2">BTCUSD, H1</div>
<div className="flex items-end h-24 gap-0.5 justify-end">
<div className="w-1.5 h-8 bg-neutral-700 rounded-sm"></div>
<div className="w-1.5 h-12 bg-neutral-700 rounded-sm"></div>
<div className="w-1.5 h-6 bg-orange-600 rounded-sm shadow-[0_0_10px_rgba(234,88,12,0.5)]"></div>
<div className="w-1.5 h-10 bg-neutral-700 rounded-sm"></div>
</div>
</div>

<div className="bg-neutral-900 relative p-3">
<div className="text-[8px] font-mono text-neutral-400 mb-2">ETHUSD, M15</div>
<svg className="w-full h-24" preserveaspectratio="none" viewbox="0 0 100 50">
<path d="M0 40 Q 20 30 40 35 T 80 10 L 100 20" fill="none" stroke="#22c55e" strokeWidth="1.5"></path>
<lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#22c55e', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: '#22c55e', stopOpacity: '0'}}></stop>
</lineargradient>
<path d="M0 40 Q 20 30 40 35 T 80 10 L 100 20 V 50 H 0 Z" fill="url(#grad1)" stroke="none"></path>
</svg>
</div>
</div>
</div>

<div className="h-6 bg-neutral-800 border-t border-neutral-700 flex items-center px-3 justify-between">
<div className="flex gap-2">
<div className="w-8 h-1 bg-neutral-600 rounded"></div>
<div className="w-8 h-1 bg-neutral-600 rounded"></div>
</div>
<div className="w-12 h-1 bg-orange-600/50 rounded"></div>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<div className="inline-flex items-center gap-6 text-sm text-neutral-500 font-medium">
<span className="flex items-center gap-2">
<iconify-icon height="16" icon="solar:monitor-linear" width="16"></iconify-icon>
                         Windows / Mac
                     </span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="flex items-center gap-2">
<iconify-icon height="16" icon="solar:smartphone-linear" width="16"></iconify-icon>
                         iOS / Android
                     </span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="flex items-center gap-2">
<iconify-icon height="16" icon="solar:globe-linear" width="16"></iconify-icon>
                         Web Terminal
                     </span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 relative">
<div className="absolute inset-0 bg-grid-black opacity-[0.6] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-4">Why claim the crypto bonus?</h2>
<p className="text-neutral-500 leading-relaxed text-lg font-light">Liquidity is king in crypto. We provide more of it so you can execute your HODL or swing strategies without compromise.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-white rounded-2xl p-8 border border-neutral-200/60 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden group">
<div className="relative z-10">
<div className="w-12 h-12 bg-neutral-50 rounded-xl border border-neutral-200 flex items-center justify-center mb-6 shadow-sm group-hover:bg-orange-50 group-hover:border-orange-100 group-hover:text-orange-600 transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-orange-600 transition-colors" height="24" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Leverage your HODL</h3>
<p className="text-neutral-500 text-sm leading-relaxed max-w-sm">With 50% more margin, you can open larger perp positions or hedge your spot holdings without liquidating your long-term assets.</p>
</div>
<div className="absolute right-0 bottom-0 w-80 h-64 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-105 transition-all duration-500 text-orange-600">
<svg fill="currentColor" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.9,32.3C59.6,43.1,48.3,51.8,36.4,58.6C24.5,65.4,12,70.3,-1.5,72.9C-15,75.5,-30,75.8,-43.3,69.5C-56.6,63.2,-68.2,50.3,-75.6,35.6C-83,20.9,-86.2,4.4,-82.9,-10.6C-79.6,-25.6,-69.8,-39.1,-57.4,-47.1C-45,-55.1,-30,-57.6,-16.2,-60.9C-2.4,-64.2,10.2,-68.3,30.5,-83.6" transform="translate(100 100)"></path>
</svg>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-neutral-200/60 shadow-card hover:shadow-card-hover transition-all duration-300 group flex flex-col justify-between">
<div>
<div className="w-12 h-12 bg-neutral-50 rounded-xl border border-neutral-200 flex items-center justify-center mb-6 text-neutral-400 group-hover:bg-orange-50 group-hover:border-orange-100 group-hover:text-orange-600 transition-colors">
<iconify-icon height="24" icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Survive Volatility</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Crypto markets swing hard. The extra USDT buffer helps you weather -20% candles without triggering liquidation.</p>
</div>
<div className="mt-8 pt-6 border-t border-dashed border-neutral-200 flex items-center gap-3 text-xs font-medium text-neutral-500 group-hover:text-neutral-800 transition-colors">
<iconify-icon className="text-emerald-500" height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
                        Insurance Fund Protection
                    </div>
</div>

<div className="bg-white rounded-2xl p-8 border border-neutral-200/60 shadow-card hover:shadow-card-hover transition-all duration-300 group">
<div className="flex items-center justify-between mb-5">
<div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center text-neutral-400 border border-neutral-200 group-hover:border-orange-200 group-hover:text-orange-600 transition-colors">
<iconify-icon height="20" icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-mono bg-neutral-100 px-2 py-1 rounded text-neutral-500 border border-neutral-200">AUTO</span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2 tracking-tight">Instant Credit</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Bonus USDT is automatically airdropped to your account as soon as the blockchain confirms your deposit.</p>
</div>

<div className="bg-white rounded-2xl p-8 border border-neutral-200/60 shadow-card hover:shadow-card-hover transition-all duration-300 group">
<div className="flex items-center justify-between mb-5">
<div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center text-neutral-400 border border-neutral-200 group-hover:border-orange-200 group-hover:text-orange-600 transition-colors">
<iconify-icon height="20" icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-mono bg-emerald-50 text-emerald-600 px-2 py-1 rounded border border-emerald-100">LIVE</span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2 tracking-tight">Fully Tradable</h3>
<p className="text-neutral-500 text-sm leading-relaxed">The bonus isn't just for show. Use it to farm yields, open shorts, and generate real profit in any market condition.</p>
</div>
</div>
</div>
</section>

<section className="bg-white border-neutral-100 border-t pt-24 pb-24">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-bold mb-4 tracking-tight text-center text-neutral-900">Frequently Asked Questions</h2>
<p className="text-neutral-500 text-center mb-12">Everything you need to know about the 50% Crypto Deposit Bonus</p>
<div className="grid md:grid-cols-2 gap-4">

<div className="space-y-4">

<details className="group bg-white rounded-xl border border-neutral-200/60 hover:border-orange-200 open:bg-neutral-50 open:border-neutral-200 transition-all duration-300 shadow-sm">
<summary className="flex cursor-pointer list-none hover:text-neutral-900 transition-colors text-sm font-medium text-neutral-700 p-5 items-center justify-between select-none">
                            Which cryptos can I deposit?
                            <span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-hover:text-orange-500">
<iconify-icon height="18" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="text-neutral-500 text-xs leading-relaxed mt-0 px-5 pb-5 border-t border-neutral-100 pt-3">
                            You can deposit USDT (TRC20/ERC20), BTC, ETH, or USDC. The 50% bonus is calculated based on the USD value of your crypto at the time of arrival.
                        </div>
</details>

<details className="group bg-white rounded-xl border border-neutral-200/60 hover:border-orange-200 open:bg-neutral-50 open:border-neutral-200 transition-all duration-300 shadow-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-neutral-700 hover:text-neutral-900 transition-colors select-none">
                            What are the deposit limits?
                            <span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-hover:text-orange-500">
<iconify-icon height="18" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="text-neutral-500 text-xs leading-relaxed mt-0 px-5 pb-5 border-t border-neutral-100 pt-3">
                            The minimum deposit required is equivalent to $100. The 50% bonus is capped at a maximum of $500 (applying to a $1,000 deposit). Only your first on-chain deposit qualifies.
                        </div>
</details>

<details className="group bg-white rounded-xl border border-neutral-200/60 hover:border-orange-200 open:bg-neutral-50 open:border-neutral-200 transition-all duration-300 shadow-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-neutral-700 hover:text-neutral-900 transition-colors select-none">
                            Is the bonus withdrawable?
                            <span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-hover:text-orange-500">
<iconify-icon height="18" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="text-neutral-500 text-xs leading-relaxed mt-0 px-5 pb-5 border-t border-neutral-100 pt-3">
                            The bonus funds are for margin support only (credits). However, any crypto profits generated using the bonus are fully withdrawable to your external wallet after volume requirements are met.
                        </div>
</details>

<details className="group bg-white rounded-xl border border-neutral-200/60 hover:border-orange-200 open:bg-neutral-50 open:border-neutral-200 transition-all duration-300 shadow-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-neutral-700 hover:text-neutral-900 transition-colors select-none">
                            Do I need KYC?
                            <span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-hover:text-orange-500">
<iconify-icon height="18" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="text-neutral-500 text-xs leading-relaxed mt-0 px-5 pb-5 border-t border-neutral-100 pt-3">
                            Yes. Basic identity verification (KYC) is required to ensure compliance and prevent money laundering before the bonus is credited.
                        </div>
</details>
</div>

<div className="space-y-4">

<details className="group bg-white rounded-xl border border-neutral-200/60 hover:border-orange-200 open:bg-neutral-50 open:border-neutral-200 transition-all duration-300 shadow-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-neutral-700 hover:text-neutral-900 transition-colors select-none">
                            How long is the bonus valid?
                            <span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-hover:text-orange-500">
<iconify-icon height="18" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="text-neutral-500 text-xs leading-relaxed mt-0 px-5 pb-5 border-t border-neutral-100 pt-3">
                            The bonus is valid for 30 days from the moment it hits your account. Use it to trade any crypto pair during this period.
                        </div>
</details>

<details className="group bg-white rounded-xl border border-neutral-200/60 hover:border-orange-200 open:bg-neutral-50 open:border-neutral-200 transition-all duration-300 shadow-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-neutral-700 hover:text-neutral-900 transition-colors select-none">
                            What if I withdraw my crypto?
                            <span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-hover:text-orange-500">
<iconify-icon height="18" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="text-neutral-500 text-xs leading-relaxed mt-0 px-5 pb-5 border-t border-neutral-100 pt-3">
                            Any withdrawal request to an external address before meeting the trading requirements will result in the immediate removal of the bonus credits.
                        </div>
</details>

<details className="group bg-white rounded-xl border border-neutral-200/60 hover:border-orange-200 open:bg-neutral-50 open:border-neutral-200 transition-all duration-300 shadow-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-neutral-700 hover:text-neutral-900 transition-colors select-none">
                            Can I hedge my positions?
                            <span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-hover:text-orange-500">
<iconify-icon height="18" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="text-neutral-500 text-xs leading-relaxed mt-0 px-5 pb-5 border-t border-neutral-100 pt-3">
                            No. Hedging (opening opposite positions on the same asset to neutralize risk) using bonus funds is considered arbitrage and is prohibited.
                        </div>
</details>

<details className="group bg-white rounded-xl border border-neutral-200/60 hover:border-orange-200 open:bg-neutral-50 open:border-neutral-200 transition-all duration-300 shadow-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-neutral-700 hover:text-neutral-900 transition-colors select-none">
                            Is high-frequency trading allowed?
                            <span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-hover:text-orange-500">
<iconify-icon height="18" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="text-neutral-500 text-xs leading-relaxed mt-0 px-5 pb-5 border-t border-neutral-100 pt-3">
                            Yes, but abusive strategies like latency arbitrage or exploiting price feeds on illiquid altcoins are strictly prohibited.
                        </div>
</details>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-50 text-neutral-900 border-t border-neutral-200">

<div className="max-w-7xl mx-auto px-6 py-20">
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-7 space-y-10">

<div className="flex gap-2 group gap-x-2 gap-y-2 items-center">
</div>

<h2 className="text-4xl md:text-5xl font-medium tracking-tight mt-6">
                        Trade Crypto <span className="text-orange-600">24/7/365</span>
</h2>

<div className="space-y-6 text-neutral-500 text-sm leading-relaxed max-w-2xl font-normal">
<p className="">Warex is a premier crypto CFD provider, trusted by 200,000+ traders globally. We offer institutional-grade access to the digital asset market with deep liquidity and lightning-fast execution (99.9% uptime). Trade Bitcoin, Ethereum, Solana, and 200+ altcoins with leverage up to 500x.</p>
<p className="">Secure your assets with our segregated cold storage protocols and trade confidently on desktop or mobile using advanced crypto terminals. Deposit via Blockchain, Binance Pay, or Lightning Network instantly.</p>
</div>

<div className="flex items-center gap-3">
<button className="bg-white text-orange-600 border border-orange-200 px-6 py-3 rounded-full text-xs font-semibold tracking-wide shadow-sm hover:-translate-y-0.5 transition-transform">Warex Pro</button>
<button className="bg-neutral-100 text-neutral-500 border border-neutral-200 px-6 py-3 rounded-full text-xs font-semibold tracking-wide hover:text-neutral-900 hover:bg-white hover:border-neutral-300 transition-all hover:-translate-y-0.5">Warex X</button>
</div>

<div className="">
<p className="text-[11px] text-neutral-900 font-medium italic mb-4">Available on Desktop, iOS, Android &amp; Web</p>
<div className="flex gap-3">
<div className="w-11 h-11 bg-white rounded flex items-center justify-center text-neutral-400 hover:text-orange-600 hover:border-orange-200 transition-colors border border-neutral-200 shadow-sm cursor-pointer hover:shadow-md">
<iconify-icon height="20" icon="solar:monitor-linear" width="20"></iconify-icon>
</div>
<div className="w-11 h-11 bg-white rounded flex items-center justify-center text-neutral-400 hover:text-orange-600 hover:border-orange-200 transition-colors border border-neutral-200 shadow-sm cursor-pointer hover:shadow-md">
<iconify-icon height="20" icon="solar:laptop-minimalistic-linear" width="20"></iconify-icon>
</div>
<div className="w-11 h-11 bg-white rounded flex items-center justify-center text-neutral-400 hover:text-orange-600 hover:border-orange-200 transition-colors border border-neutral-200 shadow-sm cursor-pointer hover:shadow-md">
<iconify-icon height="20" icon="solar:smartphone-linear" width="20"></iconify-icon>
</div>
<div className="w-11 h-11 bg-white rounded flex items-center justify-center text-neutral-400 hover:text-orange-600 hover:border-orange-200 transition-colors border border-neutral-200 shadow-sm cursor-pointer hover:shadow-md">
<iconify-icon height="20" icon="solar:tablet-linear" width="20"></iconify-icon>
</div>
<div className="w-11 h-11 bg-white rounded flex items-center justify-center text-neutral-400 hover:text-orange-600 hover:border-orange-200 transition-colors border border-neutral-200 shadow-sm cursor-pointer hover:shadow-md">
<iconify-icon height="20" icon="solar:globe-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="pt-2">
<h4 className="text-sm font-semibold mb-3 text-neutral-900">Support</h4>
<button className="bg-white border border-neutral-200 hover:border-blue-500 hover:bg-blue-50 transition-all rounded-xl p-2.5 flex items-center gap-3 pr-6 group shadow-sm hover:shadow-md">
<div className="w-9 h-9 rounded-lg bg-blue-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
<iconify-icon height="20" icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</div>
<div className="text-left">
<div className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">24/7 Live Support</div>
<div className="text-sm font-bold text-neutral-900 leading-none mt-0.5">TELEGRAM</div>
</div>
</button>
</div>
</div>

<div className="lg:col-span-5 pt-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">

<div className="">
<h5 className="text-[9px] font-bold text-neutral-400 uppercase tracking-[0.15em] mb-6">Trade</h5>
<ul className="space-y-3.5 text-[11px] font-medium text-neutral-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Spot Market</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Perpetuals</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Demo Trading</a></li>
</ul>
</div>

<div className="">
<h5 className="text-[9px] font-bold text-neutral-400 uppercase tracking-[0.15em] mb-6">Assets</h5>
<ul className="space-y-3.5 text-[11px] font-medium text-neutral-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Bitcoin</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Ethereum</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Solana</a></li>
</ul>
</div>

<div>
<h5 className="text-[9px] font-bold text-neutral-400 uppercase tracking-[0.15em] mb-6">Earn</h5>
<ul className="space-y-3.5 text-[11px] font-medium text-neutral-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Staking</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Affiliates</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Copy Trading</a></li>
</ul>
</div>

<div className="">
</div></div></div></div></div></footer>
    </>
  );
}
