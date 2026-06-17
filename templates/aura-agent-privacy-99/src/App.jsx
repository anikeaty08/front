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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 bg-tech-grid w-full h-full pointer-events-none z-0"></div>
<div className="glow-spot top-[-200px] left-1/2 -translate-x-1/2"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="flex md:px-8 h-16 max-w-[1400px] mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div className="flex items-center gap-4">
<a className="group flex items-center gap-2" href="#">
<div className="flex bg-center text-xs font-bold text-black bg-gradient-to-br from-[#ff2a2a] to-[#990000] w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce67b5f5-211d-4aee-bb88-16cb0af7f8b0_800w.png?w=800&amp;q=80)] bg-contain rounded-sm items-center justify-center">L</div>
<span className="text-white font-bold tracking-tight text-lg pl-2">CLOAKCLAW</span>
</a>
<div className="hidden md:flex items-center gap-2 pl-4 border-l border-white/10 text-[10px] font-mono text-gray-500">
<span className="w-1.5 h-1.5 bg-[#ff2a2a] rounded-full shadow-[0_0_10px_#ff2a2a]"></span>
                    MAINNET: LIVE
                </div>
</div>
<div className="flex items-center gap-8">
<div className="hidden md:flex gap-6 font-mono text-xs tracking-wide text-gray-400">
<a className="hover:text-white transition-colors" href="#">SOLUTIONS</a>
<a className="hover:text-white transition-colors" href="#">NETWORK</a>
<a className="hover:text-white transition-colors" href="#">DEVELOPERS</a>
</div>
<button className="hover:bg-[#ff2a2a] transition-colors uppercase text-xs font-bold text-black tracking-wider font-mono bg-white pt-2 pr-5 pb-2 pl-5" style={{}}>IINTEGRATE</button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-[1400px] mx-auto">

<div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-32 items-center">

<div className="lg:col-span-7 flex flex-col relative justify-center">

<div className="absolute -left-12 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#ff2a2a]/50 to-transparent hidden xl:block"></div>
<div className="inline-flex items-center gap-3 mb-8">
<div className="px-3 py-1 rounded-full border border-[#ff2a2a]/30 bg-[#ff2a2a]/10 text-[#ff2a2a] text-[10px] font-mono tracking-widest uppercase">
                        v2.0 Beta Release
                    </div>
<div className="h-[1px] w-12 bg-[#ff2a2a]/30"></div>
</div>
<h1 className="md:text-8xl leading-[0.9] text-6xl font-medium text-white tracking-tighter mb-8">
                    LIQUIDITY <br/>
                    HAS A NEW <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a2a] to-white glow-text">PREDATOR.</span>
</h1>
<p className="text-gray-400 text-xl font-light max-w-xl leading-relaxed mb-10">
                    The first execution layer designed for autonomous AI agents. 
                    <span className="text-white">Snipe, arbitrate, and settle</span> across 40+ chains with sub-millisecond latency.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="h-14 px-8 bg-[#ff2a2a] hover:bg-[#ff4444] text-black text-sm font-mono font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,42,42,0.3)] flex items-center justify-center gap-3 group">
<iconify-icon className="text-lg group-hover:rotate-12 transition-transform" icon="solar:programming-linear"></iconify-icon>
                        Start Building
                    </button>
<button className="h-14 px-8 bg-transparent border border-white/20 hover:border-white hover:bg-white/5 text-white text-sm font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-3">
                        View Documentation
                    </button>
</div>
<div className="mt-12 flex gap-8 border-t border-white/10 pt-8">
<div>
<div className="text-2xl font-bold text-white">$4.2B+</div>
<div className="text-xs text-gray-500 uppercase font-mono mt-1">Volume Processed</div>
</div>
<div>
<div className="text-2xl font-bold text-white">12ms</div>
<div className="text-xs text-gray-500 uppercase font-mono mt-1">Avg Latency</div>
</div>
<div>
<div className="text-2xl font-bold text-white">99.9%</div>
<div className="text-xs text-gray-500 uppercase font-mono mt-1">Uptime</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative">

<div className="absolute inset-0 bg-gradient-to-br from-[#ff2a2a]/10 to-transparent blur-3xl -z-10"></div>
<div className="glass-panel rounded-lg overflow-hidden technical-border">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#ff2a2a]/20 border border-[#ff2a2a]"></div>
<div className="w-3 h-3 rounded-full bg-white/10 border border-white/20"></div>
</div>
<span className="font-mono text-[10px] text-gray-500">AGENT_CONFIG.TS</span>
</div>

<div className="p-6 font-mono text-xs leading-relaxed relative min-h-[340px]">
<div className="scan-line"></div>

<table className="w-full">
<tbody className="">
<tr className="text-gray-500">
<td className="pr-4 select-none text-gray-700 text-right w-8">1</td>
<td className=""><span className="text-[#ff7b7b]">import</span> { Swarm } <span className="text-[#ff7b7b]">from</span> '@cloakclaw/sdk';</td>
</tr>
<tr className="">
<td className="pr-4 select-none text-gray-700 text-right">2</td>
<td className=""></td>
</tr>
<tr className="">
<td className="pr-4 select-none text-gray-700 text-right">3</td>
<td className=""><span className="text-gray-500">// Initialize MEV-protected agent</span></td>
</tr>
<tr className="">
<td className="pr-4 select-none text-gray-700 text-right">4</td>
<td className=""><span className="text-[#ff7b7b]">const</span> predator = <span className="text-[#ff7b7b]">new</span> Swarm({</td>
</tr>
<tr className="">
<td className="pr-4 select-none text-gray-700 text-right">5</td>
<td className="pl-4 text-[#e5e5e5]">strategy: <span className="text-[#88ff88]">'ARBITRAGE_V3'</span>,</td>
</tr>
<tr className="">
<td className="pr-4 select-none text-gray-700 text-right">6</td>
<td className="pl-4 text-[#e5e5e5]">chains: [<span className="text-[#88ff88]">'SOL'</span>, <span className="text-[#88ff88]">'BASE'</span>, <span className="text-[#88ff88]">'ARB'</span>],</td>
</tr>
<tr className="">
<td className="pr-4 select-none text-gray-700 text-right">7</td>
<td className="pl-4 text-[#e5e5e5]">risk_tolerance: <span className="text-[#ff2a2a]">0.95</span>,</td>
</tr>
<tr className="">
<td className="pr-4 select-none text-gray-700 text-right">8</td>
<td className="pl-4 text-[#e5e5e5]">execution: <span className="text-[#88ff88]">'TEE_ENCLAVE'</span></td>
</tr>
<tr className="">
<td className="pr-4 select-none text-gray-700 text-right">9</td>
<td className="">});</td>
</tr>
<tr className="">
<td className="pr-4 select-none text-gray-700 text-right">10</td>
<td className=""></td>
</tr>
<tr className="">
<td className="pr-4 select-none text-gray-700 text-right">11</td>
<td className=""><span className="text-[#ff7b7b]">await</span> predator.deploy();</td>
</tr>
</tbody>
</table>

<div className="mt-6 pt-4 border-t border-dashed border-white/10">
<div className="text-[10px] text-gray-500 mb-2 uppercase tracking-widest">Live Execution Logs</div>
<div className="space-y-1.5">
<div className="flex items-center gap-2 text-[10px]">
<span className="text-green-500">●</span>
<span className="text-gray-300">Scanning mempool (Base)...</span>
<span className="ml-auto text-gray-600">14ms</span>
</div>
<div className="flex items-center gap-2 text-[10px]">
<span className="text-[#ff2a2a]">●</span>
<span className="text-white">Opportunity detected: WETH/USDC</span>
<span className="ml-auto text-gray-600 font-bold">+2.4%</span>
</div>
<div className="flex items-center gap-2 text-[10px]">
<span className="text-blue-500">●</span>
<span className="text-gray-300">Tx Submitted (Flashbots Bundle)</span>
<span className="ml-auto text-gray-600">Hash: 0x8a...f2</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-y border-white/10 py-6 mb-32 relative bg-black/50">
<div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
<div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
<div className="marquee-container font-mono text-sm text-gray-500 tracking-wider">
<div className="marquee-content flex items-center gap-16">
<span className="flex items-center gap-2"><iconify-icon className="text-[#ff2a2a]" icon="solar:shield-check-linear"></iconify-icon> AUDITED BY TRAIL OF BITS</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#ff2a2a]" icon="solar:server-square-linear"></iconify-icon> TEE INFRASTRUCTURE</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#ff2a2a]" icon="solar:chart-square-linear"></iconify-icon> $250M+ TVL SECURED</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#ff2a2a]" icon="solar:global-linear"></iconify-icon> CROSS-CHAIN NATIVE</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#ff2a2a]" icon="solar:shield-check-linear"></iconify-icon> AUDITED BY TRAIL OF BITS</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#ff2a2a]" icon="solar:server-square-linear"></iconify-icon> TEE INFRASTRUCTURE</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#ff2a2a]" icon="solar:chart-square-linear"></iconify-icon> $250M+ TVL SECURED</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#ff2a2a]" icon="solar:global-linear"></iconify-icon> CROSS-CHAIN NATIVE</span>
</div>
</div>
</div>

<div className="mb-32">
<div className="mb-12 flex items-end justify-between">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white">
                    INFRASTRUCTURE <br/>FOR THE <span className="text-[#ff2a2a] glow-text">MACHINE ECONOMY</span>
</h2>
<div className="hidden md:block text-right">
<div className="text-xs font-mono text-gray-500 mb-1">SYSTEM STATUS</div>
<div className="flex items-center gap-2 text-[#ff2a2a] text-sm font-bold animate-pulse">
<span className="w-2 h-2 bg-[#ff2a2a] rounded-full"></span>
                        OPERATIONAL
                    </div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 glass-panel p-8 rounded-xl relative group overflow-hidden border border-white/10 hover:border-[#ff2a2a]/50 transition-colors">
<div className="absolute top-0 right-0 p-6 opacity-50">
<iconify-icon className="text-5xl text-gray-700 group-hover:text-[#ff2a2a] transition-colors" icon="solar:bolt-circle-linear"></iconify-icon>
</div>
<div className="h-full flex flex-col justify-between relative z-10">
<div>
<h3 className="text-2xl text-white font-medium mb-2">Settlement Agnostic</h3>
<p className="text-gray-400 text-sm max-w-sm">Execute orders across Solana, Ethereum, and Cosmos simultaneously. Our solver network finds the optimal route instantly.</p>
</div>

<div className="mt-8 bg-black/50 rounded-lg p-4 border border-white/5">
<div className="flex justify-between text-[10px] font-mono text-gray-500 mb-2 uppercase">
<span>Execution Speed</span>
<span>vs Competitors</span>
</div>
<div className="space-y-3">
<div>
<div className="flex justify-between text-xs text-white mb-1">
<span>CloakClaw</span>
<span className="text-[#ff2a2a]">12ms</span>
</div>
<div className="h-1.5 w-full bg-[#1a1a1a] rounded-full overflow-hidden">
<div className="h-full bg-[#ff2a2a] w-[95%] shadow-[0_0_10px_#ff2a2a]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs text-gray-500 mb-1">
<span>Standard RPC</span>
<span>140ms</span>
</div>
<div className="h-1.5 w-full bg-[#1a1a1a] rounded-full overflow-hidden">
<div className="h-full bg-gray-600 w-[40%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 glass-panel p-6 rounded-xl border border-white/10 hover:border-white/30 transition-colors flex flex-col justify-between group">
<div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-white/10 group-hover:border-[#ff2a2a] transition-colors mb-4">
<iconify-icon className="text-xl text-white" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg text-white font-medium mb-2">SGX Privacy</h3>
<p className="text-xs text-gray-400 leading-relaxed">Your strategy logic runs inside Intel SGX enclaves. Observers see the transaction, never the trigger.</p>
</div>
</div>

<div className="md:col-span-1 glass-panel p-6 rounded-xl border border-white/10 hover:border-white/30 transition-colors flex flex-col justify-between group">
<div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-white/10 group-hover:border-[#ff2a2a] transition-colors mb-4">
<iconify-icon className="text-xl text-white" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg text-white font-medium mb-2">Agent Swarms</h3>
<p className="text-xs text-gray-400 leading-relaxed">Deploy multiple agents that coordinate off-chain to execute complex hedging strategies.</p>
</div>
</div>

<div className="md:col-span-2 glass-panel p-6 rounded-xl border border-white/10 hover:border-white/30 transition-colors flex items-center gap-6 group">
<div className="w-16 h-16 shrink-0 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-white/10 text-3xl text-white group-hover:text-[#ff2a2a] transition-colors">
<iconify-icon icon="solar:code-circle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl text-white font-medium mb-1">Developer First SDK</h3>
<p className="text-sm text-gray-400 mb-3">Fully typed TypeScript &amp; Python SDKs. No new languages to learn.</p>
<div className="flex gap-2 text-[10px] font-mono">
<span className="bg-white/5 px-2 py-1 rounded text-gray-300 border border-white/5">npm install @cloakclaw/sdk</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center mb-32 border border-white/5 bg-[#080808] p-8 md:p-12 rounded-3xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#ff2a2a]/10 to-transparent blur-[100px] pointer-events-none"></div>
<div>
<h2 className="text-3xl font-medium text-white mb-6">GLOBAL SOLVER NETWORK</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-[#ff2a2a]/20 border border-[#ff2a2a] text-[#ff2a2a] flex items-center justify-center text-xs font-mono">1</div>
<div className="h-full w-[1px] bg-white/10 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-white font-medium">Intent Propagation</h4>
<p className="text-sm text-gray-400 mt-1">Your agent broadcasts an intent to our private gossip network, bypassing public mempools.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/20 text-gray-300 flex items-center justify-center text-xs font-mono">2</div>
<div className="h-full w-[1px] bg-white/10 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-white font-medium">Solver Competition</h4>
<p className="text-sm text-gray-400 mt-1">Solvers compete to fulfill your order at the best price. Winner takes execution rights.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/20 text-gray-300 flex items-center justify-center text-xs font-mono">3</div>
</div>
<div>
<h4 className="text-white font-medium">Atomic Settlement</h4>
<p className="text-sm text-gray-400 mt-1">Funds are swapped atomically. Zero slippage, zero failed transactions.</p>
</div>
</div>
</div>
</div>

<div className="relative h-[400px] w-full bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden group">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>

<div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#ff2a2a] rounded-full shadow-[0_0_20px_#ff2a2a] animate-pulse"></div>
<div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full opacity-50"></div>
<div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white rounded-full opacity-50"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none">
<line stroke="rgba(255, 42, 42, 0.3)" strokeWidth="1" x1="25%" x2="50%" y1="25%" y2="50%"></line>
<line stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" x1="50%" x2="75%" y1="50%" y2="66%"></line>
<circle className="animate-[spin_10s_linear_infinite] origin-center" cx="50%" cy="50%" fill="none" r="100" stroke="rgba(255,42,42,0.1)" strokeWidth="1"></circle>
</svg>

<div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur border border-[#ff2a2a]/30 p-4 rounded-lg">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] text-[#ff2a2a] font-mono uppercase">Active Solvers</span>
<span className="text-xs text-white font-mono">2,048</span>
</div>
<div className="w-full bg-[#333] h-1 rounded-full overflow-hidden">
<div className="bg-[#ff2a2a] w-3/4 h-full"></div>
</div>
</div>
</div>
</div>

<div className="text-center py-24 border-t border-white/10">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">
                READY TO <span className="text-[#ff2a2a]">DEPLOY?</span>
</h2>
<p className="text-gray-400 mb-8 text-lg max-w-lg mx-auto">Join the new era of programmable liquidity. Get your API key today.</p>
<div className="flex justify-center gap-4">
<button className="h-12 px-8 bg-white text-black hover:bg-gray-200 transition-colors font-mono text-sm font-bold uppercase tracking-wide">
                    Get API Keys
                </button>
<button className="h-12 px-8 bg-transparent border border-white/20 text-white hover:border-[#ff2a2a] hover:text-[#ff2a2a] transition-colors font-mono text-sm font-bold uppercase tracking-wide">
                    Contact Sales
                </button>
</div>
</div>
</main>

<footer className="border-t border-white/10 bg-[#020202]">
<div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-[#ff2a2a] flex items-center justify-center text-black font-bold text-[10px] rounded-sm">L</div>
<span className="text-white font-bold tracking-tight">CLOAKCLAW</span>
</a>
<p className="text-xs text-gray-500 leading-relaxed">
                        The autonomous liquidity layer for the machine economy. Built for speed, privacy, and scale.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-bold mb-4">Platform</h4>
<ul className="space-y-2 text-xs text-gray-500 font-mono">
<li><a className="hover:text-[#ff2a2a]" href="#">Documentation</a></li>
<li><a className="hover:text-[#ff2a2a]" href="#">API Reference</a></li>
<li><a className="hover:text-[#ff2a2a]" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-bold mb-4">Company</h4>
<ul className="space-y-2 text-xs text-gray-500 font-mono">
<li><a className="hover:text-[#ff2a2a]" href="#">About</a></li>
<li><a className="hover:text-[#ff2a2a]" href="#">Blog</a></li>
<li><a className="hover:text-[#ff2a2a]" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-bold mb-4">Connect</h4>
<div className="flex gap-4 text-gray-400">
<iconify-icon className="text-xl hover:text-white cursor-pointer" icon="solar:brand-twitter-linear"></iconify-icon>
<iconify-icon className="text-xl hover:text-white cursor-pointer" icon="solar:brand-github-linear"></iconify-icon>
<iconify-icon className="text-xl hover:text-white cursor-pointer" icon="solar:brand-discord-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<span className="text-[10px] text-gray-600 font-mono">© 2024 LOBSTER LABS INC. ALL RIGHTS RESERVED.</span>
<div className="flex gap-6 text-[10px] text-gray-600 font-mono uppercase">
<a href="#">Privacy Policy</a>
<a href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
