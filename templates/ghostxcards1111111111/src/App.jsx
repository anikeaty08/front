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
      

<div className="fixed inset-0 glow-bg pointer-events-none z-0"></div>

<nav className="relative z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="w-full px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-md flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="text-white font-medium tracking-tight text-sm font-sans" style={{}}>GHOSTCARD</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>Features</a>
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>Pricing</a>
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>Check Balance</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/5 px-4 py-2 rounded-full transition-all font-sans" href="#" style={{}}>
                    Connect Wallet
                </a>
</div>
</div>
</nav>

<section className="md:pt-28 md:pb-20 text-center z-10 pt-20 pr-6 pb-12 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8 font-sans" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
            Now supporting USDT &amp; BTC
        </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl text-white tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1] font-manrope font-medium" style={{}}>
            Spend anywhere.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-600 font-manrope font-medium" style={{color: 'rgba(0, 0, 0, 0)', position: 'static'}}>Traceable by no one.</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-sans" style={{}}>
            Instant virtual prepaid cards loaded with value. No ID verification. No banking history. 
            Pure purchasing power delivered to your screen in seconds.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="sm:w-auto hover:bg-slate-200 transition-colors text-sm font-medium text-black bg-white w-full rounded-full pt-3 pr-8 pb-3 pl-8">
                Get a Card
            </button>
<button className="w-full sm:w-auto px-8 py-3 bg-white/5 text-white border border-white/10 font-medium rounded-full hover:bg-white/10 transition-colors text-sm flex items-center justify-center gap-2 font-sans" style={{}}>
                View Fees <iconify-icon icon="lucide:arrow-down" width="16"></iconify-icon>
</button>
</div>
</section>

<section className="relative z-10 py-12 px-4 md:px-8 w-full max-w-7xl mx-auto">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

<div className="group relative bg-neutral-900/50 border border-white/5 rounded-2xl p-5 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col">
<div className="card-shimmer aspect-[1.58/1] w-full rounded-xl bg-gradient-to-br from-neutral-800 to-black border border-white/10 p-6 flex flex-col justify-between mb-8 shadow-lg">
<div className="flex justify-between items-start">
<iconify-icon className="text-white/20" icon="lucide:nfc" strokeWidth="1.5" width="28"></iconify-icon>
<span className="text-white/40 font-mono text-xs tracking-widest font-sans" style={{}}>DEBIT</span>
</div>
<div className="flex justify-between items-end">
<div>
<div className="text-3xl text-white tracking-tight mb-2 font-manrope font-medium" style={{}}>$100</div>
<div className="text-xs text-white/40 font-mono tracking-widest font-sans" style={{}}>**** 4921</div>
</div>
<iconify-icon icon="logos:mastercard" width="32"></iconify-icon>
</div>
</div>
<div className="space-y-5 mt-auto">
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<span className="text-sm text-slate-400 font-sans" style={{}}>Card Value</span>
<span className="text-base text-white font-medium font-sans" style={{}}>$100.00</span>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-slate-500 font-sans" style={{}}>Total + 10% fee</span>
<span className="text-2xl text-white tracking-tight font-manrope font-medium" style={{}}>$110.00</span>
</div>
<span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-emerald-500/80 bg-emerald-500/10 px-2 py-1 rounded font-sans" style={{}}>
<iconify-icon icon="lucide:shield-check" width="12"></iconify-icon> NO KYC
                        </span>
</div>
<button className="w-full py-3 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 hover:border-transparent rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-white group-hover:text-black font-sans" style={{}}>
                        Purchase $100 <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group relative bg-neutral-900/50 border border-white/5 rounded-2xl p-5 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col">
<div className="card-shimmer aspect-[1.58/1] w-full rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 border border-white/10 p-6 flex flex-col justify-between mb-8 shadow-lg">
<div className="flex justify-between items-start">
<iconify-icon className="text-white/30" icon="lucide:nfc" strokeWidth="1.5" width="28"></iconify-icon>
<span className="text-white/40 font-mono text-xs tracking-widest font-sans" style={{}}>SILVER</span>
</div>
<div className="flex justify-between items-end">
<div>
<div className="text-3xl text-white tracking-tight mb-2 font-manrope font-medium" style={{}}>$500</div>
<div className="text-xs text-white/40 font-mono tracking-widest font-sans" style={{}}>**** 8210</div>
</div>
<iconify-icon icon="logos:mastercard" width="32"></iconify-icon>
</div>
</div>
<div className="space-y-5 mt-auto">
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<span className="text-sm text-slate-400 font-sans" style={{}}>Card Value</span>
<span className="text-base text-white font-medium font-sans" style={{}}>$500.00</span>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-slate-500 font-sans" style={{}}>Total + 10% fee</span>
<span className="text-2xl text-white tracking-tight font-manrope font-medium" style={{}}>$550.00</span>
</div>
<span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-emerald-500/80 bg-emerald-500/10 px-2 py-1 rounded font-sans" style={{}}>
<iconify-icon icon="lucide:shield-check" width="12"></iconify-icon> NO KYC
                        </span>
</div>
<button className="w-full py-3 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 hover:border-transparent rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-white group-hover:text-black font-sans" style={{}}>
                        Purchase $500 <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group relative bg-neutral-900/50 border border-white/5 rounded-2xl p-5 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col">
<div className="card-shimmer aspect-[1.58/1] w-full rounded-xl bg-gradient-to-br from-indigo-900 to-black border border-indigo-500/30 p-6 flex flex-col justify-between mb-8 shadow-lg shadow-indigo-500/10">
<div className="flex justify-between items-start">
<iconify-icon className="text-white/30" icon="lucide:nfc" strokeWidth="1.5" width="28"></iconify-icon>
<span className="text-indigo-200/50 font-mono text-xs tracking-widest font-sans" style={{}}>GOLD</span>
</div>
<div className="flex justify-between items-end">
<div>
<div className="text-3xl text-white tracking-tight mb-2 font-manrope font-medium" style={{}}>$2,500</div>
<div className="text-xs text-white/40 font-mono tracking-widest font-sans" style={{}}>**** 1192</div>
</div>
<iconify-icon icon="logos:mastercard" width="32"></iconify-icon>
</div>
</div>
<div className="space-y-5 mt-auto">
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<span className="text-sm text-slate-400 font-sans" style={{}}>Card Value</span>
<span className="text-base text-white font-medium font-sans" style={{}}>$2,500.00</span>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-slate-500 font-sans" style={{}}>Total + 10% fee</span>
<span className="text-2xl text-white tracking-tight font-manrope font-medium" style={{}}>$2,750.00</span>
</div>
<span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-emerald-500/80 bg-emerald-500/10 px-2 py-1 rounded font-sans" style={{}}>
<iconify-icon icon="lucide:shield-check" width="12"></iconify-icon> NO KYC
                        </span>
</div>
<button className="w-full py-3 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 hover:border-transparent rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-white group-hover:text-black font-sans" style={{}}>
                        Purchase $2.5k <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group relative bg-neutral-900/50 border border-white/5 rounded-2xl p-5 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col">
<div className="card-shimmer aspect-[1.58/1] w-full rounded-xl bg-gradient-to-br from-slate-900 via-cyan-950 to-black border border-cyan-500/20 p-6 flex flex-col justify-between mb-8 shadow-lg shadow-cyan-900/10">
<div className="flex justify-between items-start">
<iconify-icon className="text-white/30" icon="lucide:nfc" strokeWidth="1.5" width="28"></iconify-icon>
<span className="text-cyan-200/50 font-mono text-xs tracking-widest font-sans" style={{}}>PLATINUM</span>
</div>
<div className="flex justify-between items-end">
<div>
<div className="text-3xl text-white tracking-tight mb-2 font-manrope font-medium" style={{}}>$5,000</div>
<div className="text-xs text-white/40 font-mono tracking-widest font-sans" style={{}}>**** 7743</div>
</div>
<iconify-icon icon="logos:mastercard" width="32"></iconify-icon>
</div>
</div>
<div className="space-y-5 mt-auto">
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<span className="text-sm text-slate-400 font-sans" style={{}}>Card Value</span>
<span className="text-base text-white font-medium font-sans" style={{}}>$5,000.00</span>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-slate-500 font-sans" style={{}}>Total + 10% fee</span>
<span className="text-2xl text-white tracking-tight font-manrope font-medium" style={{}}>$5,500.00</span>
</div>
<span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-emerald-500/80 bg-emerald-500/10 px-2 py-1 rounded font-sans" style={{}}>
<iconify-icon icon="lucide:shield-check" width="12"></iconify-icon> NO KYC
                        </span>
</div>
<button className="w-full py-3 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 hover:border-transparent rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-white group-hover:text-black font-sans" style={{}}>
                        Purchase $5k <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group relative bg-neutral-900/50 border border-white/5 rounded-2xl p-5 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col">
<div className="card-shimmer aspect-[1.58/1] w-full rounded-xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-black border border-white/20 p-6 flex flex-col justify-between mb-8 shadow-lg ring-1 ring-white/5">
<div className="flex justify-between items-start">
<iconify-icon className="text-white/30" icon="lucide:nfc" strokeWidth="1.5" width="28"></iconify-icon>
<span className="text-white/30 font-mono text-xs tracking-widest font-sans" style={{}}>OBSIDIAN</span>
</div>
<div className="flex justify-between items-end">
<div>
<div className="text-3xl text-white tracking-tight mb-2 font-manrope font-medium" style={{}}>$10,000</div>
<div className="text-xs text-white/40 font-mono tracking-widest font-sans" style={{}}>**** 0001</div>
</div>
<iconify-icon icon="logos:mastercard" width="32"></iconify-icon>
</div>
</div>
<div className="space-y-5 mt-auto">
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<span className="text-sm text-slate-400 font-sans" style={{}}>Card Value</span>
<span className="text-base text-white font-medium font-sans" style={{}}>$10,000.00</span>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-slate-500 font-sans" style={{}}>Total + 10% fee</span>
<span className="text-2xl text-white tracking-tight font-manrope font-medium" style={{}}>$11,000.00</span>
</div>
<span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-emerald-500/80 bg-emerald-500/10 px-2 py-1 rounded font-sans" style={{}}>
<iconify-icon icon="lucide:shield-check" width="12"></iconify-icon> NO KYC
                        </span>
</div>
<button className="w-full py-3 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 hover:border-transparent rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-white group-hover:text-black font-sans" style={{}}>
                        Purchase $10k <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group relative bg-neutral-900/50 border border-white/5 rounded-2xl p-5 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-semibold px-3 py-1 rounded-full border border-indigo-400 shadow-lg shadow-indigo-500/40 z-20 whitespace-nowrap font-sans" style={{}}>
                    ELITE TIER
                </div>
<div className="card-shimmer aspect-[1.58/1] w-full rounded-xl bg-gradient-to-br from-indigo-950 via-purple-950 to-black border border-indigo-500/40 p-6 flex flex-col justify-between mb-8 shadow-lg shadow-indigo-500/20">
<div className="flex justify-between items-start">
<iconify-icon className="text-white/40" icon="lucide:nfc" strokeWidth="1.5" width="28"></iconify-icon>
<span className="text-indigo-200 font-mono text-xs tracking-widest font-semibold font-sans" style={{}}>WHALE</span>
</div>
<div className="flex justify-between items-end">
<div>
<div className="text-3xl text-white tracking-tight mb-2 font-manrope font-medium" style={{}}>$50,000</div>
<div className="text-xs text-indigo-200/60 font-mono tracking-widest font-sans" style={{}}>**** 9999</div>
</div>
<iconify-icon icon="logos:mastercard" width="32"></iconify-icon>
</div>
</div>
<div className="space-y-5 mt-auto">
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<span className="text-sm text-slate-400 font-sans" style={{}}>Card Value</span>
<span className="text-base text-white font-medium font-sans" style={{}}>$50,000.00</span>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-slate-500 font-sans" style={{}}>Total + 10% fee</span>
<span className="text-2xl text-white tracking-tight font-manrope font-medium" style={{}}>$55,000.00</span>
</div>
<span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-emerald-500/80 bg-emerald-500/10 px-2 py-1 rounded font-sans" style={{}}>
<iconify-icon icon="lucide:shield-check" width="12"></iconify-icon> NO KYC
                        </span>
</div>
<button className="w-full py-3 bg-white text-black border border-transparent rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:bg-slate-200 font-sans" style={{}}>
                        Purchase $50k <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-16 px-6 border-t border-white/5 bg-neutral-900/20">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
<iconify-icon icon="lucide:ghost" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg font-sans" style={{}}>100% Anonymous</h3>
<p className="text-sm text-slate-400 leading-relaxed font-sans" style={{}}>
                        We do not require ID, utility bills, or any personal information. Your privacy is our product.
                    </p>
</div>
<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg font-sans" style={{}}>Instant Delivery</h3>
<p className="text-sm text-slate-400 leading-relaxed font-sans" style={{}}>
                        Cards are generated instantly upon payment confirmation on the blockchain. Ready to use immediately.
                    </p>
</div>
<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
<iconify-icon icon="lucide:globe" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg font-sans" style={{}}>Global Acceptance</h3>
<p className="text-sm text-slate-400 leading-relaxed font-sans" style={{}}>
                        Works anywhere major credit cards are accepted. Online subscriptions, digital goods, and services.
                    </p>
</div>
</div>
</div>
</section>

<footer className="relative z-10 py-12 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col gap-1">
<span className="text-white font-medium tracking-tight text-sm font-sans" style={{}}>GHOSTCARD</span>
<span className="text-xs text-slate-500 font-sans" style={{}}>© 2024 GhostCard Inc. All rights reserved.</span>
</div>
<div className="flex items-center gap-6 text-xs text-slate-500">
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>Terms of Service</a>
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>Privacy Policy</a>
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>Support</a>
</div>
</div>
</footer>

    </>
  );
}
