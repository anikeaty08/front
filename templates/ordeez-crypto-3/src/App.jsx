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
      

<nav className="fixed top-0 inset-x-0 h-16 glass-nav z-50 transition-all duration-300">
<div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

<a className="text-base tracking-tight font-semibold uppercase flex items-center gap-2 text-stone-900 z-50" href="#">
<div className="w-8 h-8 rounded-lg bg-stone-900 text-white flex items-center justify-center">
<iconify-icon icon="solar:layers-minimalistic-linear" width="18"></iconify-icon>
</div>
<span className="">Ordeez</span>
</a>

<div className="hidden md:flex items-center gap-8 text-xs font-medium text-stone-500 uppercase tracking-wide">
<a className="hover:text-stone-900 transition-colors" href="#product">Product</a>
<a className="hover:text-stone-900 transition-colors" href="#vaults">Vaults</a>
<a className="hover:text-stone-900 transition-colors" href="#risk">Risk</a>
<a className="hover:text-stone-900 transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-stone-800 rounded-lg hover:bg-stone-100 transition-colors" href="#">
                    Community
                </a>
<a className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-black transition-colors shadow-lg shadow-stone-900/10" href="#">
                    Enter App
                </a>
</div>
</div>
</nav>

<section className="overflow-hidden min-h-screen flex flex-col pt-48 pr-6 pb-32 pl-6 relative justify-center">

<div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#C5A572]/20 to-blue-300/20 rounded-full mix-blend-multiply filter blur-[120px] -z-10 animate-pulse duration-[5000ms]"></div>
<div className="max-w-5xl mx-auto text-center relative z-10">

<div className="flex justify-center mb-10 reveal" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-200 bg-white/50 backdrop-blur-sm shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-[11px] uppercase tracking-wider font-mono-tech text-stone-600">V2 Vaults Live on Mezo</span>
</div>
</div>

<h1 className="md:text-8xl lg:text-9xl leading-[0.95] reveal text-6xl text-stone-900 tracking-tight font-serif-display mb-8" style={{animationDelay: '0.2s'}}>Hold the BTC.<br/> <span className="bg-clip-text font-light italic text-transparent font-serif-display bg-gradient-to-r from-stone-400 to-stone-600 pr-2 pl-2" style={{}}>Earn on Commodities</span></h1>
<p className="text-base md:text-lg text-stone-600 max-w-lg mx-auto mb-14 leading-relaxed reveal font-medium" style={{animationDelay: '0.3s'}}>
                Ordeez lets you borrow against your Bitcoin to rotate into tokenized commodities. Automated LTV protection included.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-5 reveal" style={{animationDelay: '0.4s'}}>

<a className="group w-full sm:w-auto px-10 py-5 liquid-glass-dark rounded-2xl text-sm font-semibold text-white flex items-center justify-center gap-3" href="#">
<span className="relative z-10">Launch App</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform relative z-10" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>

<a className="group w-full sm:w-auto px-10 py-5 liquid-glass-light text-stone-900 rounded-2xl text-sm font-semibold flex items-center justify-center gap-3" href="#">
<iconify-icon className="text-stone-700 group-hover:text-black transition-colors" icon="solar:document-text-linear" width="18"></iconify-icon>
<span className="relative z-10">Read Docs</span>
</a>
</div>

<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto border-t border-stone-200/50 pt-8 reveal" style={{animationDelay: '0.5s'}}>
<div>
<p className="text-[10px] font-mono-tech text-stone-400 uppercase mb-1">Total Value Locked</p>
<p className="text-xl font-serif-display text-stone-800">$42.8M</p>
</div>
<div className="">
<p className="text-[10px] uppercase text-stone-400 font-mono-tech mb-1" style={{}}>ACTIVE USERS</p>
<p className="text-xl text-stone-800 font-serif-display" style={{}}>1,204</p>
</div>
<div className="">
<p className="text-[10px] uppercase text-stone-400 font-mono-tech mb-1" style={{}}>SUPPORTED COMMODITIES</p>
<p className="text-xl text-stone-800 font-serif-display" style={{}}>18</p>
</div>
<div className="">
<p className="text-[10px] font-mono-tech text-stone-400 uppercase mb-1">Current APY</p>
<p className="text-xl text-emerald-600 font-serif-display" style={{}}>~6.5%</p>
</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pr-6 pb-24 pl-6 relative" id="product">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel-card p-10 rounded-[32px]">
<div className="w-12 h-12 flex items-center justify-center bg-stone-100 rounded-2xl mb-8 text-stone-900">
<iconify-icon icon="solar:layers-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif-display text-3xl mb-4">Leverage Loop</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                        Deposit BTC → Borrow stablecoins → Swap for tokenized Gold/Silver → Deposit back into vault. All in one transaction hash.
                    </p>
</div>

<div className="glass-panel-card p-10 rounded-[32px]">
<div className="w-12 h-12 flex items-center justify-center bg-stone-100 rounded-2xl mb-8 text-stone-900">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif-display text-3xl mb-4">Soft Liquidation</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                        We don't just sell your BTC. The protocol sells the commodity collateral first to repay debt, preserving your core stack.
                    </p>
</div>

<div className="glass-panel-card p-10 rounded-[32px]">
<div className="w-12 h-12 flex items-center justify-center bg-stone-100 rounded-2xl mb-8 text-stone-900">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif-display text-3xl mb-4">Yield on Yield</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                        Earn Mezo native yield on your BTC collateral while capturing the price appreciation of the commodities market.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="vaults">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="font-serif-display text-5xl md:text-6xl tracking-tight text-stone-900 mb-4">Active Vaults</h2>
<p className="text-stone-500 max-w-md">Select a strategy based on your risk tolerance and asset preference.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-full border border-stone-200 text-xs font-semibold bg-stone-900 text-white">All Vaults</button>
<button className="px-4 py-2 rounded-full border border-stone-200 text-xs font-semibold hover:bg-stone-50 transition-colors">Precious Metals</button>
<button className="px-4 py-2 rounded-full border border-stone-200 text-xs font-semibold hover:bg-stone-50 transition-colors">Energy</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="group relative rounded-[32px] p-1 bg-gradient-to-b from-stone-200 to-transparent hover:from-[#C5A572] transition-colors duration-500">
<div className="bg-[#FAFAF9] rounded-[30px] p-8 h-full flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100/50 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-8">
<div className="p-3 bg-white border border-stone-100 shadow-sm rounded-xl">
<iconify-icon className="text-yellow-600" icon="solar:star-linear" width="28"></iconify-icon>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 bg-white border border-stone-100 rounded-lg text-[10px] font-mono-tech font-bold uppercase tracking-wider text-stone-500">PAXG</span>
<span className="px-3 py-1 bg-white border border-stone-100 rounded-lg text-[10px] font-mono-tech font-bold uppercase tracking-wider text-stone-500">XAUT</span>
</div>
</div>
<h3 className="font-serif-display text-4xl mb-2">Gold Standard</h3>
<p className="text-stone-500 mb-8">Maximum correlation to spot gold prices. Lowest volatility option.</p>
<div className="grid grid-cols-3 gap-4 mb-8">
<div>
<span className="block text-[10px] text-stone-400 uppercase font-mono-tech mb-1">Max LTV</span>
<span className="block text-lg font-medium">65%</span>
</div>
<div>
<span className="block text-[10px] text-stone-400 uppercase font-mono-tech mb-1">Liquidation</span>
<span className="block text-lg font-medium">80%</span>
</div>
<div>
<span className="block text-[10px] text-stone-400 uppercase font-mono-tech mb-1">Fee</span>
<span className="block text-lg font-medium">0.5%</span>
</div>
</div>
</div>
<a className="inline-flex items-center justify-between w-full p-4 bg-white border border-stone-100 rounded-xl group-hover:border-stone-300 transition-colors" href="#">
<span className="text-sm font-semibold">Deposit BTC</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative rounded-[32px] p-1 bg-gradient-to-b from-stone-200 to-transparent hover:from-stone-400 transition-colors duration-500">
<div className="bg-[#FAFAF9] rounded-[30px] p-8 h-full flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-8">
<div className="p-3 bg-white border border-stone-100 shadow-sm rounded-xl">
<iconify-icon className="text-stone-600" icon="solar:bolt-linear" width="28"></iconify-icon>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 bg-white border border-stone-100 rounded-lg text-[10px] font-mono-tech font-bold uppercase tracking-wider text-stone-500">SLV</span>
<span className="px-3 py-1 bg-white border border-stone-100 rounded-lg text-[10px] font-mono-tech font-bold uppercase tracking-wider text-stone-500">CPR</span>
</div>
</div>
<h3 className="font-serif-display text-4xl mb-2">Industrial Mix</h3>
<p className="text-stone-500 mb-8">Higher beta. Exposure to silver and copper for industrial demand plays.</p>
<div className="grid grid-cols-3 gap-4 mb-8">
<div>
<span className="block text-[10px] text-stone-400 uppercase font-mono-tech mb-1">Max LTV</span>
<span className="block text-lg font-medium">50%</span>
</div>
<div>
<span className="block text-[10px] text-stone-400 uppercase font-mono-tech mb-1">Liquidation</span>
<span className="block text-lg font-medium">70%</span>
</div>
<div>
<span className="block text-[10px] text-stone-400 uppercase font-mono-tech mb-1">Fee</span>
<span className="block text-lg font-medium">0.8%</span>
</div>
</div>
</div>
<a className="inline-flex items-center justify-between w-full p-4 bg-white border border-stone-100 rounded-xl group-hover:border-stone-300 transition-colors" href="#">
<span className="text-sm font-semibold">Deposit BTC</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 mx-4 lg:mx-8 rounded-[40px] bg-[#111114] relative overflow-hidden text-[#FAFAF9]" id="risk">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C5A572] rounded-full mix-blend-screen opacity-[0.05] blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
<div>
<span className="text-[#C5A572] font-mono-tech text-xs uppercase tracking-widest mb-4 block">Risk Management</span>
<h2 className="font-serif-display text-5xl md:text-6xl mb-8 tracking-tight">Sleep soundly <br/>while leveraged.</h2>
<p className="text-stone-400 text-lg mb-12 leading-relaxed">
                    Leverage cuts both ways. We've built an automated Sentinel system that monitors your position health every block and acts before liquidators do.
                </p>
<a className="text-white border-b border-white/30 pb-1 hover:border-white transition-colors text-sm" href="#">Read the audit reports</a>
</div>
<div className="space-y-6">

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-4 mb-3">
<iconify-icon className="text-[#C5A572]" icon="solar:bell-bing-linear" width="24"></iconify-icon>
<h4 className="font-serif-display text-xl">LTV Notifications</h4>
</div>
<p className="text-stone-400 text-sm pl-10">Get alerts via email, Telegram, or Discord when your health factor drops below 1.2.</p>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-4 mb-3">
<iconify-icon className="text-[#C5A572]" icon="solar:refresh-circle-linear" width="24"></iconify-icon>
<h4 className="font-serif-display text-xl">Auto-Repay</h4>
</div>
<p className="text-stone-400 text-sm pl-10">Configure the protocol to automatically sell commodity collateral to pay down debt if LTV hits 65%.</p>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-4 mb-3">
<iconify-icon className="text-[#C5A572]" icon="solar:lock-keyhole-linear" width="24"></iconify-icon>
<h4 className="font-serif-display text-xl">Emergency Unwind</h4>
</div>
<p className="text-stone-400 text-sm pl-10">One-click exit to flash loan repay your debt and return your net BTC to your wallet instantly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="font-serif-display text-4xl mb-12 tracking-tight">Common Questions</h2>
<div className="space-y-2">
<details className="group bg-white rounded-2xl border border-stone-200 overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-lg text-stone-900">
                        Is my Bitcoin wrapped?
                        <iconify-icon className="text-stone-400 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 text-stone-500 text-sm leading-relaxed">
                        Yes, you deposit native BTC into the Mezo bridge, receiving tBTC or wBTC which is then used as collateral in the Ordeez smart contracts.
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-stone-200 overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-lg text-stone-900">
                        What are the fees?
                        <iconify-icon className="text-stone-400 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 text-stone-500 text-sm leading-relaxed">
                        Ordeez charges a 0.5% origination fee on the loan amount and a 10% performance fee on the yield generated by the commodity appreciation.
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-stone-200 overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-lg text-stone-900">
                        Which oracles do you use?
                        <iconify-icon className="text-stone-400 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 text-stone-500 text-sm leading-relaxed">
                        We utilize Chainlink for commodity feeds and RedStone for Bitcoin price feeds to ensure redundancy and prevent manipulation.
                    </div>
</details>
</div>
</div>
</section>

<footer className="pt-24 pb-12 px-6 border-t border-stone-200">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
<div className="max-w-xs">
<a className="text-lg font-semibold uppercase tracking-tight flex items-center gap-2 mb-6" href="#">
<iconify-icon icon="solar:layers-minimalistic-linear"></iconify-icon>
                        Ordeez
                    </a>
<p className="text-sm text-stone-500 leading-relaxed">
                        The bridge between digital scarcity and physical resources. Built for the long-term holder.
                    </p>
</div>
<div className="flex gap-16 flex-wrap">
<div>
<h4 className="font-mono-tech text-xs uppercase text-stone-400 mb-6">App</h4>
<ul className="space-y-4 text-sm font-medium text-stone-600">
<li><a className="hover:text-black" href="#">Dashboard</a></li>
<li><a className="hover:text-black" href="#">Vaults</a></li>
<li><a className="hover:text-black" href="#">Portfolio</a></li>
</ul>
</div>
<div>
<h4 className="font-mono-tech text-xs uppercase text-stone-400 mb-6">Resources</h4>
<ul className="space-y-4 text-sm font-medium text-stone-600">
<li><a className="hover:text-black" href="#">Documentation</a></li>
<li><a className="hover:text-black" href="#">Security</a></li>
<li><a className="hover:text-black" href="#">Brand Kit</a></li>
</ul>
</div>
<div>
<h4 className="font-mono-tech text-xs uppercase text-stone-400 mb-6">Connect</h4>
<ul className="space-y-4 text-sm font-medium text-stone-600">
<li><a className="hover:text-black" href="#">Twitter</a></li>
<li><a className="hover:text-black" href="#">Discord</a></li>
<li><a className="hover:text-black" href="#">Github</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-100 gap-4">
<p className="text-[11px] text-stone-400 font-mono-tech">© 2026 Ordeez Protocol Labs.</p>
<div className="flex gap-6 text-[11px] text-stone-400 font-mono-tech uppercase">
<a className="hover:text-stone-600" href="#">Privacy</a>
<a className="hover:text-stone-600" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
