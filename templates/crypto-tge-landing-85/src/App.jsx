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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white">
<iconify-icon icon="solar:asteroid-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-white">AETHERIA</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#tokenomics">Tokenomics</a>
<a className="hover:text-white transition-colors" href="#roadmap">Roadmap</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full glass hover:bg-white/10 transition-all text-sm font-medium text-white border border-indigo-500/30 group">
<iconify-icon className="text-indigo-400 group-hover:text-white transition-colors" icon="solar:wallet-linear" width="18"></iconify-icon>
                    Connect Wallet
                </button>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    TGE Live Now: Stage 1 Ending Soon
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                    The Infrastructure for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 animate-gradient">Sovereign Data</span>
</h1>
<p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl">
                    Aetheria (ATH) is the first decentralized privacy computation layer for AI agents. Secure, scalable, and fully interoperable. Join the future of Web3 infrastructure.
                </p>

<div className="flex gap-4 mb-10">
<div className="glass p-4 rounded-xl text-center min-w-[80px]">
<div className="text-2xl font-semibold text-white tracking-tight">04</div>
<div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Days</div>
</div>
<div className="glass p-4 rounded-xl text-center min-w-[80px]">
<div className="text-2xl font-semibold text-white tracking-tight">12</div>
<div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Hrs</div>
</div>
<div className="glass p-4 rounded-xl text-center min-w-[80px]">
<div className="text-2xl font-semibold text-white tracking-tight">45</div>
<div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Mins</div>
</div>
<div className="glass p-4 rounded-xl text-center min-w-[80px]">
<div className="text-2xl font-semibold text-white tracking-tight">19</div>
<div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Secs</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 rounded-lg bg-white text-black font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                        Participate Now
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
<button className="px-8 py-4 rounded-lg glass text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
                        Whitepaper
                    </button>
</div>
</div>

<div className="relative flex justify-center lg:justify-end">
<div className="relative w-80 h-80 md:w-96 md:h-96">

<div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 rounded-full border border-cyan-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-12 rounded-full border border-purple-500/20 animate-[spin_20s_linear_infinite]"></div>

<div className="absolute inset-0 m-auto w-40 h-40 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>
<div className="absolute inset-0 m-auto w-32 h-32 glass-highlight rounded-full flex items-center justify-center neon-glow border-t border-white/30">
<iconify-icon className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" icon="solar:asteroid-linear" width="64"></iconify-icon>
</div>

<div className="absolute -top-6 -right-6 glass p-3 rounded-lg flex items-center gap-3 animate-bounce shadow-2xl">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400">APY</div>
<div className="text-sm font-semibold text-white">12.5%</div>
</div>
</div>
<div className="absolute -bottom-6 -left-6 glass p-3 rounded-lg flex items-center gap-3 animate-bounce shadow-2xl" style={{animationDelay: '1s'}}>
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400">Audited</div>
<div className="text-sm font-semibold text-white">100% Secure</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 border-y border-white/5 bg-black/40" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="lg:col-span-1">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Why Aetheria?</h2>
<p className="text-slate-400 mb-6">
                        Current blockchain infrastructure lacks the privacy primitives required for enterprise AI adoption. Aetheria solves this through Zero-Knowledge Proof computational shards.
                    </p>
<a className="text-indigo-400 hover:text-indigo-300 text-sm font-medium inline-flex items-center gap-1" href="#">
                        Learn more technology <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group cursor-default">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:server-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Decentralized Compute</h3>
<p className="text-sm text-slate-400">Rent idle GPU power from a distributed network of nodes for AI model training.</p>
</div>
<div className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group cursor-default">
<div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:lock-password-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Privacy by Design</h3>
<p className="text-sm text-slate-400">Data never leaves the owner's enclave unencrypted. ZK-proofs verify all outputs.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="tokenomics">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Tokenomics</h2>
<p className="text-slate-400 max-w-2xl mx-auto">
                    A deflationary utility token designed for long-term sustainability and network incentives.
                </p>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative flex justify-center">

<div className="w-72 h-72 rounded-full relative" style="background: conic-gradient(
                            #6366f1 0% 30%, 
                            #06b6d4 30% 55%, 
                            #a855f7 55% 70%, 
                            #ec4899 70% 85%, 
                            #64748b 85% 100%
                         );">
<div className="absolute inset-8 bg-[#050505] rounded-full flex items-center justify-center flex-col">
<span className="text-3xl font-semibold text-white tracking-tight">1B</span>
<span className="text-xs text-slate-500 uppercase tracking-widest">Total Supply</span>
</div>
</div>
</div>

<div className="space-y-6">
<div className="flex items-center justify-between p-4 glass rounded-xl">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-indigo-500"></div>
<span className="text-white font-medium">Ecosystem &amp; Rewards</span>
</div>
<span className="text-slate-400">30%</span>
</div>
<div className="flex items-center justify-between p-4 glass rounded-xl">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-cyan-500"></div>
<span className="text-white font-medium">Public Sale</span>
</div>
<span className="text-slate-400">25%</span>
</div>
<div className="flex items-center justify-between p-4 glass rounded-xl">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-purple-500"></div>
<span className="text-white font-medium">Team (4yr Vesting)</span>
</div>
<span className="text-slate-400">15%</span>
</div>
<div className="flex items-center justify-between p-4 glass rounded-xl">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-pink-500"></div>
<span className="text-white font-medium">Marketing &amp; Partnerships</span>
</div>
<span className="text-slate-400">15%</span>
</div>
<div className="flex items-center justify-between p-4 glass rounded-xl">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-slate-500"></div>
<span className="text-white font-medium">Liquidity</span>
</div>
<span className="text-slate-400">15%</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-slate-900/50 to-[#050505]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12 text-center">Sale Structure</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass p-8 rounded-2xl opacity-50 border-dashed border-slate-700">
<div className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-4">Phase 1</div>
<h3 className="text-2xl font-semibold text-slate-300 mb-2">Private Sale</h3>
<p className="text-3xl font-medium text-white mb-6">$0.04 <span className="text-sm text-slate-500 font-normal">/ ATH</span></p>
<div className="w-full h-1.5 bg-slate-800 rounded-full mb-2">
<div className="w-full h-full bg-slate-600 rounded-full"></div>
</div>
<p className="text-right text-xs text-slate-400">Sold Out</p>
</div>

<div className="glass-highlight p-8 rounded-2xl border-indigo-500/50 relative overflow-hidden">
<div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Active</div>
<div className="text-sm font-medium text-indigo-400 uppercase tracking-widest mb-4">Phase 2</div>
<h3 className="text-2xl font-semibold text-white mb-2">Pre-Sale</h3>
<p className="text-3xl font-medium text-white mb-6">$0.06 <span className="text-sm text-slate-400 font-normal">/ ATH</span></p>
<div className="w-full h-1.5 bg-slate-800 rounded-full mb-2">
<div className="w-[65%] h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
</div>
</div>
<div className="flex justify-between text-xs text-slate-400">
<span>$2.4M Raised</span>
<span>Hard Cap: $4M</span>
</div>
<div className="mt-8 space-y-3">
<div className="flex justify-between text-sm">
<span className="text-slate-400">Min Allocation</span>
<span className="text-white">500 USDT</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-400">Vesting</span>
<span className="text-white">10% TGE, 6m linear</span>
</div>
</div>
</div>

<div className="glass p-8 rounded-2xl">
<div className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-4">Phase 3</div>
<h3 className="text-2xl font-semibold text-white mb-2">Public Sale</h3>
<p className="text-3xl font-medium text-white mb-6">$0.08 <span className="text-sm text-slate-400 font-normal">/ ATH</span></p>
<div className="w-full h-1.5 bg-slate-800 rounded-full mb-2">
<div className="w-0 h-full bg-slate-600 rounded-full"></div>
</div>
<p className="text-right text-xs text-slate-400">Starts Dec 12th</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-8">How to Participate</h2>
<div className="space-y-8 relative">

<div className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-indigo-500/50 to-transparent"></div>
<div className="relative flex gap-6">
<div className="w-10 h-10 rounded-full bg-[#050505] border border-indigo-500 flex items-center justify-center text-indigo-500 z-10 shrink-0">1</div>
<div>
<h4 className="text-lg font-medium text-white">Connect Wallet</h4>
<p className="text-sm text-slate-400 mt-1">Use MetaMask, Trust Wallet, or WalletConnect. Ensure you are on the Ethereum Mainnet.</p>
</div>
</div>
<div className="relative flex gap-6">
<div className="w-10 h-10 rounded-full bg-[#050505] border border-slate-700 flex items-center justify-center text-slate-400 z-10 shrink-0">2</div>
<div>
<h4 className="text-lg font-medium text-white">Complete KYC</h4>
<p className="text-sm text-slate-400 mt-1">Verify your identity through our secure partner Sumsub. Takes less than 2 minutes.</p>
</div>
</div>
<div className="relative flex gap-6">
<div className="w-10 h-10 rounded-full bg-[#050505] border border-slate-700 flex items-center justify-center text-slate-400 z-10 shrink-0">3</div>
<div>
<h4 className="text-lg font-medium text-white">Purchase Tokens</h4>
<p className="text-sm text-slate-400 mt-1">Enter amount in USDT, USDC, or ETH. Approve transaction and confirm.</p>
</div>
</div>
<div className="relative flex gap-6">
<div className="w-10 h-10 rounded-full bg-[#050505] border border-slate-700 flex items-center justify-center text-slate-400 z-10 shrink-0">4</div>
<div>
<h4 className="text-lg font-medium text-white">Claim</h4>
<p className="text-sm text-slate-400 mt-1">Tokens will be claimable on this dashboard at TGE (Token Generation Event).</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-20"></div>
<div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl">

<div className="h-12 border-b border-white/5 flex items-center px-4 justify-between bg-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs text-slate-500 font-mono">dashboard.aetheria.io</div>
</div>

<div className="p-6">
<div className="flex justify-between items-start mb-8">
<div>
<div className="text-xs text-slate-500 uppercase">My Allocation</div>
<div className="text-2xl font-semibold text-white mt-1">12,500 ATH</div>
</div>
<div className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded border border-green-500/20">KYC Verified</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="p-3 rounded-lg bg-white/5 border border-white/5">
<div className="text-xs text-slate-500">Vested</div>
<div className="text-lg font-medium text-white">1,250 ATH</div>
</div>
<div className="p-3 rounded-lg bg-white/5 border border-white/5">
<div className="text-xs text-slate-500">Next Unlock</div>
<div className="text-lg font-medium text-white">14d 2h</div>
</div>
</div>
<button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors opacity-50 cursor-not-allowed">
                                Claim Tokens (Locked)
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black/40" id="roadmap">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-16 text-center">Development Roadmap</h2>
<div className="grid md:grid-cols-4 gap-6">
<div className="relative group">
<div className="h-1 w-full bg-indigo-500 mb-6 relative">
<div className="absolute -top-1.5 left-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#050505]"></div>
</div>
<div className="text-sm font-semibold text-indigo-400 mb-2">Q3 2024</div>
<h4 className="text-lg font-medium text-white mb-3">Foundation</h4>
<ul className="text-sm text-slate-400 space-y-2">
<li className="flex gap-2 items-start"><iconify-icon className="mt-0.5 text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Whitepaper Release</li>
<li className="flex gap-2 items-start"><iconify-icon className="mt-0.5 text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Private Sale</li>
<li className="flex gap-2 items-start"><iconify-icon className="mt-0.5 text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Smart Contract Audit</li>
</ul>
</div>
<div className="relative group">
<div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-slate-800 mb-6 relative">
<div className="absolute -top-1.5 left-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#050505] shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
</div>
<div className="text-sm font-semibold text-indigo-400 mb-2">Q4 2024 (Current)</div>
<h4 className="text-lg font-medium text-white mb-3">Launch</h4>
<ul className="text-sm text-slate-400 space-y-2">
<li className="flex gap-2 items-start"><iconify-icon className="mt-0.5 text-indigo-400" icon="solar:clock-circle-linear"></iconify-icon> Public Pre-Sale</li>
<li className="flex gap-2 items-start"><iconify-icon className="mt-0.5 text-indigo-400" icon="solar:clock-circle-linear"></iconify-icon> TGE Event</li>
<li className="flex gap-2 items-start"><iconify-icon className="mt-0.5 text-slate-600" icon="solar:clock-circle-linear"></iconify-icon> Uniswap Listing</li>
</ul>
</div>
<div className="relative group">
<div className="h-1 w-full bg-slate-800 mb-6 relative">
<div className="absolute -top-1.5 left-0 w-4 h-4 rounded-full bg-slate-700 border-4 border-[#050505]"></div>
</div>
<div className="text-sm font-semibold text-slate-500 mb-2">Q1 2025</div>
<h4 className="text-lg font-medium text-slate-300 mb-3">Expansion</h4>
<ul className="text-sm text-slate-500 space-y-2">
<li className="flex gap-2 items-start"><iconify-icon className="mt-0.5" icon="solar:circle-linear"></iconify-icon> Betanet Launch</li>
<li className="flex gap-2 items-start"><iconify-icon className="mt-0.5" icon="solar:circle-linear"></iconify-icon> CEX Listings (Tier 1)</li>
<li className="flex gap-2 items-start"><iconify-icon className="mt-0.5" icon="solar:circle-linear"></iconify-icon> Staking Live</li>
</ul>
</div>
<div className="relative group">
<div className="h-1 w-full bg-slate-800 mb-6 relative">
<div className="absolute -top-1.5 left-0 w-4 h-4 rounded-full bg-slate-700 border-4 border-[#050505]"></div>
</div>
<div className="text-sm font-semibold text-slate-500 mb-2">Q2 2025</div>
<h4 className="text-lg font-medium text-slate-300 mb-3">Ecosystem</h4>
<ul className="text-sm text-slate-500 space-y-2">
<li className="flex gap-2 items-start"><iconify-icon className="mt-0.5" icon="solar:circle-linear"></iconify-icon> Mainnet Launch</li>
<li className="flex gap-2 items-start"><iconify-icon className="mt-0.5" icon="solar:circle-linear"></iconify-icon> Developer SDK</li>
<li className="flex gap-2 items-start"><iconify-icon className="mt-0.5" icon="solar:circle-linear"></iconify-icon> Data Marketplace</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group glass rounded-xl open:bg-white/5 transition-colors">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-white">
<span>When is the Token Generation Event (TGE)?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm">
                        The TGE is scheduled for December 2024. Exact dates will be announced on our official social media channels. The Pre-sale is currently live.
                    </div>
</details>
<details className="group glass rounded-xl open:bg-white/5 transition-colors">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-white">
<span>Which currencies are accepted?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm">
                        We accept ETH (ERC-20), USDT (ERC-20 &amp; TRC-20), and USDC. All contributions are calculated based on the USD value at the time of transaction.
                    </div>
</details>
<details className="group glass rounded-xl open:bg-white/5 transition-colors">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-white">
<span>Is there a vesting period?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm">
                        Yes. For Public Pre-sale participants, 10% of tokens are unlocked at TGE, with the remaining 90% vesting linearly over 6 months to ensure price stability.
                    </div>
</details>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center text-white">
<iconify-icon icon="solar:asteroid-linear" width="16"></iconify-icon>
</div>
<span className="font-medium text-white">AETHERIA</span>
</div>
<p className="text-slate-500 text-sm max-w-sm mb-6">
                        Building the computation layer for the sovereign internet. Join the community and shape the future of decentralized AI.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors" href="#">
<iconify-icon icon="ri:twitter-x-fill" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors" href="#">
<iconify-icon icon="ri:discord-fill" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors" href="#">
<iconify-icon icon="ri:telegram-fill" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Resources</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Whitepaper</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Tokenomics</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Audit Report</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Brand Assets</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Newsletter</h4>
<p className="text-xs text-slate-500 mb-4">Subscribe for TGE updates.</p>
<div className="flex gap-2">
<input className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 w-full" placeholder="Email address" type="email"/>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2024 Aetheria Foundation. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-600">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
<p className="text-[10px] text-slate-700 mt-8 text-justify leading-tight">
                Disclaimer: Cryptocurrency investments are subject to high market risk. The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website's content as such. The Aetheria team suggests you conduct your own due diligence and consult your financial advisor before making any investment decisions. Not available to citizens of the United States.
            </p>
</div>
</footer>

    </>
  );
}
