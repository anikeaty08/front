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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2 text-white">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
<svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-white">BridgeX</span>
</div>
<div className="hidden lg:flex gap-8 text-slate-400 text-sm font-medium items-center">
<a className="hover:text-blue-400 transition-colors" href="#product">Product</a>
<a className="hover:text-blue-400 transition-colors" href="#features">Features</a>
<a className="hover:text-blue-400 transition-colors" href="#developers">Developers</a>
<a className="hover:text-blue-400 transition-colors" href="#compliance">Compliance</a>
<a className="hover:text-blue-400 transition-colors" href="#roadmap">Roadmap</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex text-slate-400 hover:text-white text-xs font-medium transition-colors" href="#">
                    Sign In
                </a>
<a className="hover:bg-white/10 transition-all flex items-center gap-2 text-xs font-semibold text-white bg-white/5 border-white/10 border rounded-lg pt-2 pr-4 pb-2 pl-4" href="#">
    Launch App <svg className="lucide lucide-chevron-right w-3 h-3 text-blue-500" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</nav>

<header className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617] to-[#020617]"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

<div className="absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">

<div className="lg:col-span-7 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wide backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
<span>v1.1 Documentation Live</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.05]">
                        Unified Liquidity.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-white">Global Reach.</span>
</h1>
<p className="text-lg text-slate-400 font-light max-w-xl leading-relaxed">
                        The Toronet Fiat On/Off-Ramp. Bridge stablecoins from Solana, Base, and BSC directly to Toronet assets using local fiat rails across Africa, Europe, and the UK.
                    </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="bg-blue-600 text-white px-6 py-3.5 rounded-lg text-sm font-semibold hover:bg-blue-500 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)]" href="#developers">
                            Start Building <svg className="lucide lucide-code-2 w-4 h-4" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</a>
<a className="hover:bg-white/5 transition-all text-sm font-medium text-white border-white/10 border rounded-lg pt-3.5 pr-6 pb-3.5 pl-6 backdrop-blur-sm" href="#features">
                            Explore Features
                        </a>
</div>
<div className="pt-8 flex items-center gap-8 border-t border-white/5 mt-4">
<div>
<span className="block text-2xl font-semibold text-white tracking-tight">&lt;2 min</span>
<span className="text-xs text-slate-500 uppercase tracking-wide">Payout Time</span>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<span className="block text-2xl font-semibold text-white tracking-tight">5+</span>
<span className="text-xs text-slate-500 uppercase tracking-wide">Chains Bridged</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative">

<div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50"></div>
<div className="relative bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl">
<div className="flex items-center justify-between mb-6">
<div className="">
<h3 className="text-sm font-semibold text-white tracking-tight">Simulate Bridge</h3>
<p className="text-slate-400 text-[10px] mt-0.5">Cross-chain stablecoin transfer</p>
</div>
<div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
<svg className="lucide lucide-arrow-right-left w-4 h-4" data-lucide="arrow-right-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 3 4 4-4 4"></path><path d="M20 7H4"></path><path d="m8 21-4-4 4-4"></path><path d="M4 17h16"></path></svg>
</div>
</div>
<form className="space-y-4">

<div className="bg-[#020617]/50 rounded-lg p-3 border border-white/5 transition-colors hover:border-blue-500/30">
<label className="text-[10px] font-medium text-slate-500 uppercase tracking-wide flex justify-between">
<span className="">From Network</span>
<span className="text-blue-400">Balance: 2,450.00 USDC</span>
</label>
<div className="flex items-center gap-3 mt-2">
<div className="flex items-center gap-2 bg-white/5 px-2 py-1.5 rounded text-white text-xs border border-white/10 cursor-pointer hover:bg-white/10">
<div className="w-4 h-4 rounded-full bg-indigo-500"></div>
<span className="">Solana</span>
<svg className="lucide lucide-chevron-down w-3 h-3 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<input className="bg-transparent text-right w-full text-white font-mono text-sm focus:outline-none" type="text" value="1,000.00"/>
</div>
</div>

<div className="flex justify-center -my-2 relative z-10">
<div className="w-8 h-8 bg-[#1e293b] rounded-full border border-white/10 flex items-center justify-center text-slate-400 shadow-lg">
<svg className="lucide lucide-arrow-down w-3 h-3" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</div>

<div className="bg-[#020617]/50 rounded-lg p-3 border border-white/5 transition-colors hover:border-blue-500/30">
<label className="text-[10px] font-medium text-slate-500 uppercase tracking-wide flex justify-between">
<span className="">To Toronet Asset</span>
<span>Est. Rate: 1:1</span>
</label>
<div className="flex items-center gap-3 mt-2">
<div className="flex items-center gap-2 bg-white/5 px-2 py-1.5 rounded text-white text-xs border border-white/10 cursor-pointer hover:bg-white/10">
<div className="w-4 h-4 rounded-full bg-blue-600"></div>
<span>TUSD</span>
<svg className="lucide lucide-chevron-down w-3 h-3 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<input className="bg-transparent text-right w-full text-white font-mono text-sm focus:outline-none" readonly="" type="text" value="1,000.00"/>
</div>
</div>

<div className="pt-2 px-1">
<label className="text-[10px] text-slate-500 mb-1 block">Slippage Tolerance</label>
<input className="w-full" max="100" min="1" type="range" value="5"/>
<div className="flex justify-between text-[10px] text-slate-600 mt-1">
<span>0.1%</span>
<span>1.0%</span>
</div>
</div>
<button className="group w-full bg-white text-[#020617] py-3 rounded-lg font-semibold text-xs hover:bg-blue-50 transition-all duration-300 mt-2 flex items-center justify-center gap-2" type="button">
                                Bridge Assets
                                <svg className="lucide lucide-arrow-right w-3 h-3 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<div className="flex items-center justify-center gap-2 text-[10px] text-slate-500">
<svg className="lucide lucide-shield-check w-3 h-3 text-green-500" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Audited &amp; Verified Contract</span>
</div>
</form>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-[#0B0E14] border-t border-white/5" id="product">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<span className="text-blue-500 font-semibold tracking-wide uppercase text-xs border-b border-blue-500/30 pb-1">Core Functionality</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-white mt-6 tracking-tight">Seamless Fiat &amp; Chain Interoperability</h2>
</div>
<p className="text-slate-400 max-w-sm text-sm leading-relaxed">
                    Designed for developers, compliance officers, and businesses to connect local economies with the blockchain.
                </p>
</div>

<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-[#020617] p-8 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all duration-300">
<div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-download w-5 h-5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">On-Ramp (Buy)</h3>
<p className="text-slate-500 font-light leading-relaxed text-sm">
                        Convert fiat (NGN, KES, ZAR, EUR, GBP) into Toronet assets instantly via bank transfers and mobile money.
                    </p>
</div>

<div className="group bg-[#020617] p-8 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all duration-300">
<div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-upload w-5 h-5" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Off-Ramp (Sell)</h3>
<p className="text-slate-500 font-light leading-relaxed text-sm">
                        Settle Toronet assets back to local bank accounts or mobile wallets like M-Pesa with transparent pricing.
                    </p>
</div>

<div className="group bg-[#020617] p-8 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all duration-300">
<div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-link w-5 h-5" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Bridge Stablecoins</h3>
<p className="text-slate-500 font-light leading-relaxed text-sm">
                        Move USDC from Solana, Base, BSC, Arbitrum, and Polygon directly into Toronet liquidity pools.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#020617] relative border-t border-white/5" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-blue-400 font-medium tracking-wide uppercase text-xs bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Global Infrastructure</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mt-6">Coverage &amp; Capabilities</h2>
</div>
<div className="grid lg:grid-cols-2 gap-x-12 gap-y-12">

<div className="bg-[#0B0E14] rounded-2xl border border-white/5 p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10">
<svg className="lucide lucide-globe w-32 h-32 text-white" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-6">Fiat Corridors</h3>
<div className="space-y-4">
<div className="flex items-center justify-between border-b border-white/5 pb-2">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-sm text-slate-300">Nigeria (NGN)</span>
</div>
<span className="text-xs text-slate-500 font-mono">Bank Transfer</span>
</div>
<div className="flex items-center justify-between border-b border-white/5 pb-2">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-sm text-slate-300">Kenya (KES)</span>
</div>
<span className="text-xs text-slate-500 font-mono">M-Pesa / Bank</span>
</div>
<div className="flex items-center justify-between border-b border-white/5 pb-2">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-sm text-slate-300">South Africa (ZAR)</span>
</div>
<span className="text-xs text-slate-500 font-mono">EFT Transfer</span>
</div>
<div className="flex items-center justify-between border-b border-white/5 pb-2">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-sm text-slate-300">Europe (EUR)</span>
</div>
<span className="text-xs text-slate-500 font-mono">SEPA</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-sm text-slate-300">UK (GBP)</span>
</div>
<span className="text-xs text-slate-500 font-mono">Faster Payments</span>
</div>
</div>
</div>

<div className="bg-[#0B0E14] rounded-2xl border border-white/5 p-8 group">
<h3 className="text-xl font-semibold text-white mb-6">Supported Assets</h3>
<div className="grid grid-cols-2 gap-4">
<div className="bg-[#020617] p-4 rounded-lg border border-white/5 flex items-center gap-3 hover:border-blue-500/30 transition-colors">
<div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 text-xs font-bold">T</div>
<div>
<div className="text-sm text-white font-medium">Toronet Native</div>
<div className="text-[10px] text-slate-500">TNGN, TUSD, TORO, TEUR</div>
</div>
</div>
<div className="bg-[#020617] p-4 rounded-lg border border-white/5 flex items-center gap-3 hover:border-blue-500/30 transition-colors">
<div className="w-8 h-8 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400 text-xs font-bold">$</div>
<div>
<div className="text-sm text-white font-medium">Bridged Stablecoins</div>
<div className="text-[10px] text-slate-500">USDC (Multi-chain)</div>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-white/5">
<h4 className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">Bridge Networks</h4>
<div className="flex gap-2">
<span className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-300 border border-white/10">Solana</span>
<span className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-300 border border-white/10">Base</span>
<span className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-300 border border-white/10">BSC</span>
<span className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-300 border border-white/10">Arbitrum</span>
<span className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-300 border border-white/10">Polygon</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B0E14] border-t border-white/5" id="developers">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16">

<div className="lg:w-1/2 space-y-8">
<h2 className="text-3xl font-semibold text-white tracking-tight">Built for Developers</h2>
<p className="text-slate-400 text-sm leading-relaxed">
                        Integrate fiat, stablecoin, and Toronet liquidity into your applications with simple APIs and SDKs. Our architecture ensures security, speed, and compliance.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
<svg className="lucide lucide-server w-4 h-4" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<div className="">
<h4 className="text-white font-medium text-sm">Core Services</h4>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">API Gateway, Orchestrator, Payment Adapters, Liquidity Manager, and Bridge Engine.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
<svg className="lucide lucide-shield w-4 h-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div className="">
<h4 className="text-white font-medium text-sm">Compliance &amp; Security</h4>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Tiered KYC, AML screening, and cross-chain transaction monitoring.</p>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2">
<div className="bg-[#020617] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
<div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<span className="text-[10px] font-mono text-slate-500">bridge-api.ts</span>
</div>
<div className="p-6 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto">
<span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> bridgeClient.<span className="text-blue-400">createQuote</span>({
  <span className="text-slate-500">// Bridge USDC from Solana to TUSD</span>
  sourceChain: <span className="text-green-400">'SOLANA'</span>,
  sourceToken: <span className="text-green-400">'USDC'</span>,
  targetAsset: <span className="text-green-400">'TUSD'</span>,
  amount: <span className="text-orange-400">1000.00</span>,
  userWallet: <span className="text-green-400">'0x71C...'</span>
});

<span className="text-slate-500">// Returns executable quote</span>
console.<span className="text-blue-400">log</span>(response.rate); <span className="text-slate-500">// 1.00</span>
console.<span className="text-blue-400">log</span>(response.estimatedTime); <span className="text-slate-500">// "120s"</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mt-4">
<div className="p-3 rounded bg-white/5 border border-white/5 text-center">
<div className="text-[10px] text-slate-500 uppercase">SDKs Available</div>
<div className="text-xs text-white mt-1" style={{}}>Dart, Javascript</div>
</div>
<div className="p-3 rounded bg-white/5 border border-white/5 text-center">
<div className="text-[10px] text-slate-500 uppercase">Webhooks</div>
<div className="text-xs text-white mt-1">Real-time updates</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#020617] border-t border-white/5 relative overflow-hidden" id="roadmap">
<div className="absolute inset-0 z-50 bg-[#020617] flex items-center justify-center overflow-y-auto py-12 md:py-24">
<div className="z-10 w-full max-w-3xl pr-6 pl-6 relative">
<div className="text-center mb-16">
<span className="text-blue-500 font-semibold tracking-wide uppercase text-xs border-b border-blue-500/30 pb-1">Support</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mt-6">Frequently Asked Questions</h2>
<p className="text-slate-400 mt-4 text-sm leading-relaxed max-w-lg mx-auto">Everything you need to know about integrating BridgeX, fees, and supported networks.</p>
</div>
<div className="space-y-3">

<details className="group bg-[#0B0E14] border border-white/5 rounded-xl open:bg-[#0f172a] open:border-blue-500/20 transition-all duration-300">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none">
<span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">Which fiat currencies do you currently support?</span>
<span className="text-slate-500 transition-transform duration-300 group-open:rotate-180 group-open:text-blue-400">
<svg className="w-[18px] h-[18px]" data-icon-replaced="true" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(100, 116, 139)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-slate-400 leading-relaxed font-light">
                    We currently support direct on/off-ramping for Nigerian Naira (NGN) via bank transfer, Kenyan Shilling (KES) via M-Pesa, and South African Rand (ZAR) via EFT. Beta support for Euro (EUR) and British Pound (GBP) is available for enterprise partners.
                </div>
</details>

<details className="group bg-[#0B0E14] border border-white/5 rounded-xl open:bg-[#0f172a] open:border-blue-500/20 transition-all duration-300">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none">
<span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">How fast are settlement times?</span>
<span className="text-slate-500 transition-transform duration-300 group-open:rotate-180 group-open:text-blue-400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-slate-400 leading-relaxed font-light">
                    Bridge transactions are near-instant (1-2 minutes). Fiat payouts typically settle within 10-30 minutes depending on the local banking rails. We provide real-time status webhooks for all transaction stages.
                </div>
</details>

<details className="group bg-[#0B0E14] border border-white/5 rounded-xl open:bg-[#0f172a] open:border-blue-500/20 transition-all duration-300">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none">
<span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">What is the fee structure?</span>
<span className="text-slate-500 transition-transform duration-300 group-open:rotate-180 group-open:text-blue-400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-slate-400 leading-relaxed font-light">
                    We charge a flat 0.5% protocol fee on bridge volumes. Fiat processing fees vary by corridor (typically 1-2%) and are displayed transparently in the quote API. There are no monthly subscription fees for integration.
                </div>
</details>

<details className="group bg-[#0B0E14] border border-white/5 rounded-xl open:bg-[#0f172a] open:border-blue-500/20 transition-all duration-300">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none">
<span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">Is KYC/KYB required?</span>
<span className="text-slate-500 transition-transform duration-300 group-open:rotate-180 group-open:text-blue-400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-slate-400 leading-relaxed font-light">
                    Yes. To access mainnet APIs, businesses must complete our KYB verification process. However, you can start building immediately in our Sandbox environment without any verification.
                </div>
</details>

<details className="group bg-[#0B0E14] border border-white/5 rounded-xl open:bg-[#0f172a] open:border-blue-500/20 transition-all duration-300">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none">
<span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">Which chains can I bridge from?</span>
<span className="text-slate-500 transition-transform duration-300 group-open:rotate-180 group-open:text-blue-400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-slate-400 leading-relaxed font-light">
                    BridgeX supports stablecoin deposits from Solana, Base, BNB Smart Chain (BSC), Arbitrum One, and Polygon. We automatically route liquidity to the Toronet network for final settlement.
                </div>
</details>
</div>
</div>

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">Product Roadmap</h2>
<p className="text-slate-400 text-sm mt-2">Evolution of the Toronet ecosystem.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-blue-900 to-[#1e293b] z-0"></div>

<div className="relative z-10">
<div className="w-12 h-12 bg-blue-600 rounded-full border-4 border-[#020617] flex items-center justify-center text-white shadow-lg mb-6">
<span className="text-xs font-bold">01</span>
</div>
<h3 className="text-lg font-medium text-white">MVP (Live)</h3>
<ul className="mt-4 space-y-2 text-xs text-slate-400">
<li className="flex items-start gap-2"><svg className="lucide lucide-check w-3 h-3 text-blue-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Fiat: NGN (Bank) &amp; KES (M-Pesa)</li>
<li className="flex items-start gap-2"><svg className="lucide lucide-check w-3 h-3 text-blue-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Assets: TNGN, TUSD, TORO</li>
<li className="flex items-start gap-2"><svg className="lucide lucide-check w-3 h-3 text-blue-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Guest Mode &amp; KYC Integration</li>
</ul>
</div>

<div className="relative z-10">
<div className="w-12 h-12 bg-[#0B0E14] rounded-full border-4 border-[#1e293b] flex items-center justify-center text-slate-300 shadow-lg mb-6">
<span className="text-xs font-bold">02</span>
</div>
<h3 className="text-lg font-medium text-white">Expansion</h3>
<ul className="mt-4 space-y-2 text-xs text-slate-400">
<li className="flex items-start gap-2"><svg className="lucide lucide-circle w-3 h-3 text-slate-600 mt-0.5" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> Add ZAR, EUR, GBP corridors</li>
<li className="flex items-start gap-2"><svg className="lucide lucide-circle w-3 h-3 text-slate-600 mt-0.5" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> USDC Bridging (Solana/BSC)</li>
<li className="flex items-start gap-2"><svg className="lucide lucide-circle w-3 h-3 text-slate-600 mt-0.5" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> Bulk payouts for businesses</li>
</ul>
</div>

<div className="relative z-10">
<div className="w-12 h-12 bg-[#0B0E14] rounded-full border-4 border-[#1e293b] flex items-center justify-center text-slate-300 shadow-lg mb-6">
<span className="text-xs font-bold">03</span>
</div>
<h3 className="text-lg font-medium text-white">Ecosystem Scale</h3>
<ul className="mt-4 space-y-2 text-xs text-slate-400">
<li className="flex items-start gap-2"><svg className="lucide lucide-circle w-3 h-3 text-slate-600 mt-0.5" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> Multi-chain (Base, Arb, Poly)</li>
<li className="flex items-start gap-2"><svg className="lucide lucide-circle w-3 h-3 text-slate-600 mt-0.5" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> Automated Liquidity Rebalancing</li>
<li className="flex items-start gap-2"><svg className="lucide lucide-circle w-3 h-3 text-slate-600 mt-0.5" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> Partner Marketplace</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="bg-[#0B0E14] pt-20 pb-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16 text-slate-500">
<div className="col-span-1 md:col-span-2 space-y-6">
<div className="flex items-center gap-2 text-white mb-4">
<svg className="lucide lucide-layers w-5 h-5 text-blue-500" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span className="text-lg font-semibold tracking-tight">BridgeX</span>
</div>
<p className="max-w-xs text-xs font-light leading-relaxed">
                        The unified liquidity and payment gateway connecting fiat, Toronet assets, and cross-chain stablecoins.
                    </p>
</div>
<div className="space-y-4">
<h4 className="text-white font-semibold uppercase tracking-wider text-[10px]">Product</h4>
<ul className="space-y-2 text-xs">
<li className=""><a className="hover:text-blue-400 transition-colors" href="#">On-Ramp</a></li>
<li className=""><a className="hover:text-blue-400 transition-colors" href="#">Off-Ramp</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Stablecoin Bridge</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-white font-semibold uppercase tracking-wider text-[10px]">Developers</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-blue-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">SDKs</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 font-medium">
<p>© 2025 Toronet BridgeX. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Compliance</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
