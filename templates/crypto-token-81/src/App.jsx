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
      

<div className="fixed inset-0 z-[-1]">
<div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen opacity-40"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] mix-blend-screen opacity-30"></div>
<div className="absolute inset-0 grid-bg z-[-1]"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-white via-slate-200 to-slate-400 flex items-center justify-center text-black font-semibold tracking-tighter group-hover:scale-105 transition-transform">
                    V
                </div>
<span className="text-white tracking-tight font-medium">VOID</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#mission">Manifesto</a>
<a className="hover:text-white transition-colors" href="#tokenomics">Economics</a>
<a className="hover:text-white transition-colors" href="#terminal">Terminal</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:copy" strokeWidth="1.5" width="14"></iconify-icon>
<span>0x7...E4a1</span>
</a>
<button className="bg-white/10 hover:bg-white text-white hover:text-black px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border border-white/10 btn-glow">
                    Connect Wallet
                </button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-8 animate-float">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
                Protocol V2 is live on Mainnet
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 text-glow leading-[1.1]">
                The currency of <br className="hidden md:block"/>
<span className="gradient-text">internet culture.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Void is not just a meme coin. It is a deflationary asset layer built for the new economy of attention. Zero taxes. Liquidity burnt.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full font-medium text-sm hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2">
                    Start Trading
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 glass-panel text-white rounded-full font-medium text-sm hover:bg-white/5 transition-colors border border-white/10 flex items-center justify-center gap-2">
<iconify-icon icon="lucide:file-text" strokeWidth="1.5" width="16"></iconify-icon>
                    Read Whitepaper
                </button>
</div>
</div>
</main>

<div className="border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden py-4">
<div className="flex items-center gap-12 animate-marquee whitespace-nowrap min-w-full justify-center md:justify-between px-6 text-xs font-mono tracking-widest uppercase text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-400" icon="lucide:trending-up" strokeWidth="1.5" width="14"></iconify-icon>
<span>VOID/USD +24.5%</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-purple-400" icon="lucide:users" strokeWidth="1.5" width="14"></iconify-icon>
<span>Holders: 14,203</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-400" icon="lucide:flame" strokeWidth="1.5" width="14"></iconify-icon>
<span>Burned: 42.0%</span>
</div>
<div className="hidden md:flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="lucide:activity" strokeWidth="1.5" width="14"></iconify-icon>
<span>Vol 24h: $4.2M</span>
</div>
<div className="hidden md:flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="lucide:globe" strokeWidth="1.5" width="14"></iconify-icon>
<span>Global Rank: #802</span>
</div>
</div>
</div>

<section className="py-24 px-6 max-w-7xl mx-auto" id="tokenomics">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Architecture</h2>
<p className="text-slate-400 max-w-xl">Designed for sustainable growth through algorithmic scarcity and community-governed treasury protocols.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-3xl col-span-1 md:col-span-2 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
<iconify-icon icon="lucide:bar-chart-2" strokeWidth="1.0" width="120"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Hyper-Deflationary</h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                            Every transaction triggers a 0.5% auto-burn mechanism, permanently reducing supply and increasing scarcity over time.
                        </p>
</div>
<div className="mt-8 flex gap-4">
<div className="text-xs font-mono text-slate-500">
<span className="block text-white text-lg font-medium mb-1">10B</span>
                            Total Supply
                        </div>
<div className="w-px h-10 bg-white/10"></div>
<div className="text-xs font-mono text-slate-500">
<span className="block text-white text-lg font-medium mb-1">0%</span>
                            Buy/Sell Tax
                        </div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl col-span-1 row-span-1 md:row-span-2 flex flex-col relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent"></div>
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white relative z-10">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 relative z-10">Audited &amp; Locked</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8 relative z-10">
                    Liquidity locked for 100 years. Contract ownership renounced. Security is not an option, it's the standard.
                </p>
<div className="mt-auto relative z-10 bg-black/40 rounded-xl p-4 border border-white/5">
<div className="flex items-center justify-between mb-3">
<span className="text-xs text-slate-500">Security Score</span>
<span className="text-xs text-green-400 font-mono">98/100</span>
</div>
<div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
<div className="bg-green-500 h-full w-[98%]"></div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl col-span-1 flex flex-col justify-center hover:bg-white/5 transition-colors cursor-default">
<iconify-icon className="text-purple-400 mb-4" icon="lucide:globe-2" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-1">DAO Governance</h3>
<p className="text-xs text-slate-400">Community led decisions.</p>
</div>

<div className="glass-panel p-8 rounded-3xl col-span-1 flex flex-col justify-center hover:bg-white/5 transition-colors cursor-default">
<iconify-icon className="text-blue-400 mb-4" icon="lucide:smartphone" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-1">Mobile Native</h3>
<p className="text-xs text-slate-400">Seamless dApp integration.</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gradient-to-b from-transparent to-black/40" id="terminal">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Instant Swap</h2>
<p className="text-slate-400">Low latency trading directly from the interface.</p>
</div>

<div className="glass-panel rounded-3xl border border-white/10 p-1 md:p-2 max-w-md mx-auto relative shadow-2xl shadow-purple-900/10">

<div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
<span className="text-sm font-medium text-white">Swap</span>
<iconify-icon className="text-slate-500 hover:text-white cursor-pointer" icon="lucide:settings" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="p-6 space-y-2">

<div className="bg-black/30 rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
<div className="flex justify-between mb-2">
<span className="text-xs text-slate-500 font-medium">From</span>
<span className="text-xs text-slate-500">Balance: 4.20 ETH</span>
</div>
<div className="flex items-center justify-between">
<input className="bg-transparent text-3xl font-medium text-white outline-none w-1/2 placeholder-slate-600" disabled="" type="text" value="1.5"/>
<div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
<div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold">E</div>
<span className="text-sm font-medium text-white">ETH</span>
<iconify-icon className="text-slate-400" icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>
</div>

<div className="flex justify-center -my-3 relative z-10">
<div className="bg-[#1a1a2e] border border-white/10 p-2 rounded-xl text-white">
<iconify-icon icon="lucide:arrow-down" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>

<div className="bg-black/30 rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
<div className="flex justify-between mb-2">
<span className="text-xs text-slate-500 font-medium">To</span>
<span className="text-xs text-slate-500">Balance: 0.00 VOID</span>
</div>
<div className="flex items-center justify-between">
<input className="bg-transparent text-3xl font-medium text-white outline-none w-1/2 placeholder-slate-600" disabled="" type="text" value="420,069"/>
<div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
<div className="w-5 h-5 rounded bg-gradient-to-tr from-white to-slate-400 flex items-center justify-center text-[10px] text-black font-bold">V</div>
<span className="text-sm font-medium text-white">VOID</span>
<iconify-icon className="text-slate-400" icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-4 px-1">
<div className="flex items-center gap-2">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600"></div>
<span className="ml-2 text-xs text-slate-500 font-medium">MEV Protection</span>
</label>
</div>
<span className="text-xs text-slate-500 font-mono">Gas: <span className="text-green-400">$2.40</span></span>
</div>
<button className="w-full mt-4 bg-white text-black font-semibold py-4 rounded-xl text-sm hover:scale-[1.02] transition-transform shadow-lg shadow-white/5">
                        Connect Wallet to Swap
                    </button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-20 pb-10 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-white flex items-center justify-center text-black text-xs font-bold">V</div>
<span className="text-white tracking-tight font-medium">VOID</span>
</a>
<p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                        A decentralized experiment in community structured finance. Built for the void, by the void.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Ecosystem</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Terminal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Governance</a></li>
<li><a className="hover:text-white transition-colors" href="#">Treasury</a></li>
<li><a className="hover:text-white transition-colors" href="#">Staking</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Social</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><iconify-icon icon="lucide:twitter" width="14"></iconify-icon> Twitter</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><iconify-icon icon="lucide:message-circle" width="14"></iconify-icon> Discord</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><iconify-icon icon="lucide:send" width="14"></iconify-icon> Telegram</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
<p className="text-xs text-slate-600">© 2024 Void Protocol. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-600 hover:text-slate-400" href="#">Privacy Policy</a>
<a className="text-xs text-slate-600 hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
