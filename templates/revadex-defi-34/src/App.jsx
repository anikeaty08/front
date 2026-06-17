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
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
400: '#38bdf8',
500: '#0ea5e9',
600: '#0284c7',
900: '#0c4a6e',
950: '#082f49',
},
dark: '#030508'
},
animation: {
'blob': 'blob 10s infinite',
'tilt': 'tilt 10s infinite linear',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
tilt: {
'0%, 50%, 100%': { transform: 'rotate(0deg)' },
'25%': { transform: 'rotate(1deg)' },
'75%': { transform: 'rotate(-1deg)' },
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-900 via-dark to-dark"></div>

<div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
<div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000" style={{animationDelay: '2s'}}></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-4000" style={{animationDelay: '4s'}}></div>

<div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-dark/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform duration-300">
                    R
                </div>
<span className="text-white font-medium tracking-tight text-lg">REVADEX</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Swap</a>
<a className="hover:text-white transition-colors" href="#">Tokens</a>
<a className="hover:text-white transition-colors" href="#">Pools</a>
<a className="hover:text-white transition-colors" href="#">Bridge</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs font-medium text-slate-300 hover:bg-white/5 transition-all hover:border-white/20">
<span className="iconify" data-icon="lucide:wallet" data-width="14"></span>
                    Connect Wallet
                </button>
<button className="px-4 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2 group">
                    Launch App
                    <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 px-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                    V2 is now live with Zero Gas
                </div>
<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                    Trade crypto at the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">speed of light.</span>
</h1>
<p className="text-lg text-slate-400 max-w-xl leading-relaxed font-light">
                    The most advanced DEX aggregator on the market. Get the best rates across multiple chains with optimized routing and minimal slippage.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="h-12 px-8 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] flex items-center gap-2">
                        Start Trading
                    </button>
<button className="h-12 px-8 rounded-full border border-white/10 hover:bg-white/5 text-white font-medium transition-all flex items-center gap-2">
<span className="iconify" data-icon="lucide:file-text" data-width="16"></span>
                        Read Docs
                    </button>
</div>
<div className="pt-8 flex items-center gap-8 border-t border-white/5">
<div>
<div className="text-2xl font-semibold text-white tracking-tight">$4.2B+</div>
<div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Total Volume</div>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight">2M+</div>
<div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Trades</div>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight">0.01s</div>
<div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Latency</div>
</div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-purple-500/20 rounded-full blur-[80px]"></div>

<div className="relative w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl ring-1 ring-white/5 animate-tilt">
<div className="flex items-center justify-between mb-6">
<span className="text-white font-medium">Swap</span>
<div className="flex gap-2 text-slate-400">
<button className="p-2 hover:bg-white/5 rounded-lg transition-colors"><span className="iconify" data-icon="lucide:settings-2" data-width="18"></span></button>
</div>
</div>

<div className="bg-dark/50 p-4 rounded-xl border border-white/5 mb-2 hover:border-white/10 transition-colors group cursor-text">
<div className="flex justify-between text-xs text-slate-400 mb-2">
<span>You pay</span>
<span>Balance: 4.204 ETH</span>
</div>
<div className="flex items-center justify-between">
<input className="bg-transparent text-3xl text-white font-medium outline-none w-32 placeholder-slate-600" placeholder="0.0" type="text" value="1.5"/>
<button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 rounded-full transition-colors border border-white/5">
<span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[10px]">E</span>
<span className="font-medium text-sm">ETH</span>
<span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</button>
</div>
<div className="text-xs text-slate-500 mt-2">~$2,840.52</div>
</div>

<div className="relative h-4 flex justify-center z-10">
<button className="absolute -top-3 bg-slate-800 border border-dark p-2 rounded-lg text-brand-400 hover:text-white hover:scale-110 transition-all shadow-lg">
<span className="iconify" data-icon="lucide:arrow-down" data-width="16"></span>
</button>
</div>

<div className="bg-dark/50 p-4 rounded-xl border border-white/5 mt-[-1rem] hover:border-white/10 transition-colors">
<div className="flex justify-between text-xs text-slate-400 mb-2">
<span>You receive</span>
<span>Balance: 0.00</span>
</div>
<div className="flex items-center justify-between">
<input className="bg-transparent text-3xl text-brand-400 font-medium outline-none w-32 cursor-default" readonly="" type="text" value="2,450.22"/>
<button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 rounded-full transition-colors border border-white/5">
<span className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-[10px]">U</span>
<span className="font-medium text-sm">USDC</span>
<span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</button>
</div>
<div className="flex justify-between items-center mt-2">
<div className="text-xs text-slate-500">~$2,450.22 <span className="text-emerald-500 ml-2">(-0.01%)</span></div>
<div className="flex items-center gap-1 bg-brand-500/10 px-2 py-0.5 rounded text-[10px] text-brand-400 font-medium">
<span className="iconify" data-icon="lucide:fuel" data-width="10"></span>
                                $2.45
                            </div>
</div>
</div>

<button className="w-full mt-4 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-semibold py-4 rounded-xl shadow-lg shadow-brand-500/20 active:scale-[0.98] transition-all relative overflow-hidden group">
<div className="shine-effect"></div>
<span className="relative z-10">Connect Wallet to Swap</span>
</button>
</div>
</div>
</div>
</main>

<section className="relative z-10 py-20 border-t border-white/5 bg-black/20 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight mb-4">Why Revadex?</h2>
<p className="text-slate-400">Built for traders, by traders. Experience the difference.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-500/30 transition-all hover:bg-white/[0.07] cursor-default">
<div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Lightning Fast</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Execute trades instantly with our optimized routing engine that finds the fastest path across chains.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all hover:bg-white/[0.07] cursor-default">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Audited Security</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Your funds are safe. Our smart contracts are audited by top-tier security firms in the industry.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-white/[0.07] cursor-default">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Cross-Chain</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Seamlessly swap assets between Ethereum, BSC, Polygon, and more with a single click.
                    </p>
</div>
</div>
</div>
</section>

<div className="py-10 border-t border-white/5 overflow-hidden relative z-10">
<div className="max-w-7xl mx-auto px-6 mb-6 text-center">
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest">Supported Networks</p>
</div>
<div className="flex gap-12 justify-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2"><span className="iconify text-white" data-icon="cryptocurrency:eth" data-width="24"></span><span className="text-sm font-semibold">Ethereum</span></div>
<div className="flex items-center gap-2"><span className="iconify text-blue-500" data-icon="cryptocurrency:matic" data-width="24"></span><span className="text-sm font-semibold">Polygon</span></div>
<div className="flex items-center gap-2"><span className="iconify text-yellow-500" data-icon="cryptocurrency:bnb" data-width="24"></span><span className="text-sm font-semibold">BSC</span></div>
<div className="flex items-center gap-2"><span className="iconify text-purple-500" data-icon="simple-icons:solana" data-width="24"></span><span className="text-sm font-semibold">Solana</span></div>
<div className="flex items-center gap-2"><span className="iconify text-red-500" data-icon="cryptocurrency:avax" data-width="24"></span><span className="text-sm font-semibold">Avalanche</span></div>
</div>
</div>

<footer className="border-t border-white/5 pt-16 pb-8 relative z-10 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-brand-500 flex items-center justify-center text-white font-bold text-xs">R</div>
<span className="text-white font-medium tracking-tight">REVADEX</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                        The decentralized trading protocol for the next generation of finance.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Protocol</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-brand-400 transition-colors" href="#">Markets</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Prices</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Docs</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Governance</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-brand-400 transition-colors" href="#">DAO</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Voting</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Token</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Social</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-brand-400 transition-colors" href="#">Twitter</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Discord</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Medium</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-slate-600">
<p>© 2023 Revadex Protocol. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
