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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
<div className="w-[40rem] h-[40rem] rounded-full border border-slate-200/60 absolute"></div>
<div className="w-[55rem] h-[55rem] rounded-full border border-slate-200/60 absolute opacity-70"></div>
<div className="w-[70rem] h-[70rem] rounded-full border border-slate-200/50 absolute opacity-50"></div>
</div>

<nav className="fixed flex z-50 pr-6 pl-6 top-8 right-0 left-0 items-center justify-center">
<div className="absolute left-8 lg:left-12 flex items-center gap-2">
<div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
<iconify-icon className="" height="20" icon="solar:layers-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-medium text-lg tracking-tight text-slate-900 hidden md:block">Encrypto</span>
</div>
<div className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] rounded-full px-1.5 py-1.5 flex items-center gap-1">
<a className="text-sm font-medium text-slate-900 bg-white rounded-full pt-2 pr-5 pb-2 pl-5 shadow-sm" href="#">Home</a>
<a className="hover:bg-slate-100/50 transition-colors text-sm font-medium text-slate-500 rounded-full pt-2 pr-5 pb-2 pl-5" href="#">Partners</a>
<a className="px-5 py-2 rounded-full hover:bg-slate-100/50 text-sm font-medium text-slate-500 transition-colors" href="#">Business</a>
<a className="px-5 py-2 rounded-full hover:bg-slate-100/50 text-sm font-medium text-slate-500 transition-colors" href="#">Developers</a>
</div>
<div className="absolute right-8 lg:right-12">

<div className="button-wrap relative z-10 rounded-full bg-transparent pointer-events-none" style={{animation: 'fadeIn 1s ease-out 0.3s both'}}>
<button className="glass-button all-unset cursor-pointer relative rounded-full pointer-events-auto z-30 outline-none focus:outline-none">
<span className="button-text relative block select-none font-medium text-slate-900 tracking-tight px-5 py-2.5" style={{fontSize: '14px'}}>
                        Sign In
                    </span>
<div className="button-shine"></div>
</button>
</div>
</div>
</nav>

<main className="min-h-screen flex flex-col lg:flex-row lg:px-12 z-10 w-full max-w-[1600px] mr-auto ml-auto pt-32 pb-12 relative items-center justify-center">

<div className="lg:w-5/12 flex flex-col order-2 lg:order-1 lg:mt-0 lg:px-0 w-full mt-12 pr-6 pl-6 space-y-10 items-start">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-medium uppercase tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
                    Now Live on Mainnet
                </div>
<h1 className="lg:text-7xl leading-[1.05] text-5xl font-medium text-slate-900 tracking-tight">Unlock The New Era of Banking</h1>
<p className="leading-relaxed text-xl font-normal text-slate-500 max-w-md">Spend any token on any chain at any merchant. The first truly interoperable crypto banking experience.</p>
</div>
<div className="flex flex-wrap gap-4 items-center">

<div className="button-wrap relative z-10 rounded-full bg-transparent pointer-events-none" style={{animation: 'fadeIn 1s ease-out 0.3s both'}}>
<button className="glass-button all-unset cursor-pointer relative rounded-full pointer-events-auto z-30 outline-none focus:outline-none">
<span className="button-text relative flex items-center gap-2 select-none font-medium text-slate-900 tracking-tight px-8 py-4" style={{fontSize: '17px'}}>
                            Get Started 
                            <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</span>
<div className="button-shine"></div>
</button>
</div>
</div>
<div className="pt-8 flex items-center gap-4 cursor-pointer group">
<div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 text-slate-900 pl-1">
<iconify-icon height="24" icon="solar:play-linear" width="24"></iconify-icon>
</div>
<span className="text-base font-medium text-slate-600 group-hover:text-slate-900 transition-colors">See how it works</span>
</div>
</div>

<div className="w-full lg:w-4/12 relative flex items-center justify-center order-1 lg:order-2 h-[50vh] lg:h-auto px-6 lg:px-0"></div>

<div className="lg:w-3/12 flex flex-col lg:pl-12 order-3 lg:py-0 w-full pt-12 pr-6 pb-12 pl-6 space-y-12 justify-center">
<div className="flex items-start gap-4 group cursor-pointer">
<div className="relative mt-1">
<div className="w-12 h-8 bg-slate-800 rounded flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
<div className="w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_8px_rgba(45,212,191,0.6)]"></div>
</div>
</div>
<div className="flex-1 border-b border-slate-200 pb-8 group-hover:border-slate-300 transition-colors">
<div className="flex justify-between items-center mb-1">
<h3 className="text-base font-medium text-slate-900">Select Provider</h3>
<iconify-icon className="text-slate-400 group-hover:text-teal-600 transition-colors" height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-500 font-normal">Choose from 50+ wallets and exchange providers.</p>
</div>
</div>
<div className="flex items-start gap-4 group cursor-pointer">
<div className="relative mt-1">
<div className="w-12 h-8 bg-white border border-slate-200 rounded flex items-center justify-center group-hover:border-teal-500 transition-colors">
<iconify-icon className="text-slate-900" height="18" icon="solar:scanner-linear" width="18"></iconify-icon>
</div>
</div>
<div className="flex-1 border-b border-slate-200 pb-8 group-hover:border-slate-300 transition-colors">
<div className="flex justify-between items-center mb-1">
<h3 className="text-base font-medium text-slate-900">Verify Identity</h3>
<iconify-icon className="text-slate-400 group-hover:text-teal-600 transition-colors" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-500 font-normal">Instant KYC powered by decentralized identity.</p>
</div>
</div>
<div className="flex items-start gap-4 group cursor-pointer">
<div className="relative mt-1">
<div className="w-12 h-8 bg-white border border-slate-200 rounded flex items-center justify-center group-hover:border-teal-500 transition-colors">
<iconify-icon className="text-slate-900" height="18" icon="solar:card-linear" width="18"></iconify-icon>
</div>
</div>
<div className="flex-1 pb-2">
<div className="flex justify-between items-center mb-1">
<h3 className="text-base font-medium text-slate-900">Start Spending</h3>
<iconify-icon className="text-slate-400 group-hover:text-teal-600 transition-colors" height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-500 font-normal">Virtual cards issued instantly. Physical cards shipped.</p>
</div>
</div>
</div>
</main>

<section className="lg:px-12 lg:py-32 z-10 w-full max-w-[1600px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 mb-16 gap-x-12 gap-y-12 items-end">
<div className="text-center lg:text-left">
<h2 className="lg:text-6xl leading-[1.05] text-4xl font-medium text-slate-900 tracking-tight mb-6">
                    Crypto is Powerful. 
                    <span className="text-teal-600">But it's also Broken.</span>
</h2>
<p className="leading-relaxed lg:mx-0 text-lg font-normal text-slate-600 max-w-lg mr-auto ml-auto">Crypto-natives juggle wallets, bridges, and CEXs just to spend their money. Everyday people can't access DeFi yields or borderless payments.</p>
</div>
<div className="flex justify-center lg:justify-end">
<div className="inline-flex gap-4">
<div className="flex flex-col gap-1">
<span className="text-3xl font-semibold text-slate-900 tracking-tight">300M+</span>
<span className="text-sm text-slate-500 uppercase tracking-wide font-medium">Users</span>
</div>
<div className="w-px h-12 bg-slate-200 mx-4"></div>
<div className="flex flex-col gap-1">
<span className="text-3xl font-semibold text-slate-900 tracking-tight">$2T+</span>
<span className="text-sm text-slate-500 uppercase tracking-wide font-medium">Market Cap</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-gradient-to-b from-white/60 to-white/30 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between h-[360px] relative overflow-hidden">
<div className="[background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 flex pt-8 pb-8 relative justify-center">
<div className="flex gap-3">
<div className="w-12 h-12 rounded-xl bg-white/50 border border-white/60 flex items-center justify-center text-slate-400 shadow-sm backdrop-blur-sm">
<iconify-icon height="24" icon="solar:wallet-linear" width="24"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl bg-white/50 border border-white/60 flex items-center justify-center text-slate-400 shadow-sm opacity-50 backdrop-blur-sm">
<iconify-icon height="24" icon="solar:card-recive-linear" width="24"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl bg-white/50 border border-white/60 flex items-center justify-center text-slate-400 shadow-sm opacity-30 backdrop-blur-sm">
<iconify-icon height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-50/80 backdrop-blur-md rounded-full flex items-center justify-center border border-red-100 text-red-500 shadow-sm">
<iconify-icon className="" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
</div>
</div>
<div className="relative z-10">
<h3 className="text-xl font-medium text-slate-900 mb-2">Fragmented Liquidity</h3>
<p className="text-sm text-slate-600 leading-relaxed">Assets trapped on different chains require complex bridging, risking loss of funds.</p>
</div>
</div>

<div className="group hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all flex flex-col overflow-hidden bg-gradient-to-b from-white/60 to-white/30 backdrop-blur-xl h-[360px] border-white/50 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_8px_32px_rgba(0,0,0,0.04)] justify-between">
<div className="relative z-10 flex flex-col items-center justify-center h-48 space-y-3">
<div className="w-full max-w-[200px] bg-white/40 border border-white/50 rounded-lg p-3 text-[10px] font-mono text-slate-500 break-all select-none backdrop-blur-sm">
                        0x71C7656EC7ab88b098defB751B7401B5f6d8976F
                    </div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/60 shadow-sm flex items-center gap-2">
<span className="w-2 h-2 bg-amber-400 rounded-full"></span>
<span className="text-xs font-medium text-slate-600">Confusing</span>
</div>
</div>
<div className="relative z-10">
<h3 className="text-xl font-medium text-slate-900 mb-2">Complex UX</h3>
<p className="text-sm text-slate-600 leading-relaxed">Hexadecimal addresses and seed phrases are terrifying for the average user.</p>
</div>
</div>

<div className="group bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-xl transition-all flex flex-col justify-between h-[360px] relative overflow-hidden lg:col-span-1 md:col-span-2">
<div className="bg-gradient-to-tr from-teal-500/20 to-transparent absolute top-0 right-0 bottom-0 left-0 pointer-events-none"></div>
<div className="relative z-10 flex items-center justify-center h-48">
<div className="w-64 h-24 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-4 flex items-center justify-between shadow-2xl">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-teal-500/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(20,184,166,0.5)]">
<iconify-icon height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div>
<div className="w-20 h-2 bg-white/20 rounded mb-1.5"></div>
<div className="w-12 h-2 bg-white/10 rounded"></div>
</div>
</div>
<div className="text-teal-400 font-medium text-sm">Solved</div>
</div>
</div>
<div className="relative z-10">
<h3 className="text-xl font-medium text-white mb-2">The Encrypto Fix</h3>
<p className="text-sm text-slate-400 leading-relaxed">We abstract the complexity. One account, zero gas fees, instant settlement.</p>
<div className="mt-4 flex items-center gap-2 text-teal-400 text-sm font-medium cursor-pointer group-hover:gap-3 transition-all">
                        Learn more <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="lg:px-12 w-full max-w-[1600px] z-10 mr-auto ml-auto pb-32 px-6 relative">
<div className="mb-12">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight">About Platform</h2>
<p className="text-slate-500 mt-2">Everything you need to scale your crypto operations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="animate-slide-up delay-100 bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.02)] rounded-2xl p-6 hover:bg-white/40 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-teal-50/50 border border-teal-100/50 backdrop-blur-sm text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:globe-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Global Access</h3>
<p className="text-sm text-slate-600 leading-relaxed">Available in 150+ countries with local settlement rails for seamless fiat on-ramps.</p>
</div>

<div className="animate-slide-up delay-200 bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.02)] rounded-2xl p-6 hover:bg-white/40 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-teal-50/50 border border-teal-100/50 backdrop-blur-sm text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Bank-Grade Security</h3>
<p className="text-sm text-slate-600 leading-relaxed">SOC2 Type II certified infrastructure with multi-party computation wallets.</p>
</div>

<div className="animate-slide-up delay-300 bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.02)] rounded-2xl p-6 hover:bg-white/40 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-teal-50/50 border border-teal-100/50 backdrop-blur-sm text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Instant Settlement</h3>
<p className="text-sm text-slate-600 leading-relaxed">Experience T+0 settlement for all transactions, regardless of the underlying blockchain.</p>
</div>

<div className="animate-slide-up delay-400 bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.02)] rounded-2xl p-6 hover:bg-white/40 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-teal-50/50 border border-teal-100/50 backdrop-blur-sm text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:code-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Developer First</h3>
<p className="text-sm text-slate-600 leading-relaxed">Robust SDKs and APIs designed for easy integration into existing fintech stacks.</p>
</div>

<div className="animate-slide-up delay-500 bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.02)] rounded-2xl p-6 hover:bg-white/40 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-teal-50/50 border border-teal-100/50 backdrop-blur-sm text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Community Driven</h3>
<p className="text-sm text-slate-600 leading-relaxed">Governance token holders vote on protocol upgrades and treasury allocations.</p>
</div>

<div className="animate-slide-up delay-600 bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.02)] rounded-2xl p-6 hover:bg-white/40 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-teal-50/50 border border-teal-100/50 backdrop-blur-sm text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:headset-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">24/7 Support</h3>
<p className="text-sm text-slate-600 leading-relaxed">Dedicated account managers and technical support available around the clock.</p>
</div>
</div>
</section>

<footer className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-8 flex justify-between items-center border-t border-slate-200">
<p className="text-xs text-slate-400">© 2024 Encrypto Inc.</p>
<div className="flex gap-4">
<iconify-icon className="text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" height="20" icon="solar:globe-linear" width="20"></iconify-icon>
<iconify-icon className="text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" height="20" icon="brandico:twitter-bird" width="20"></iconify-icon>
</div>
</footer>

<div className="fixed bottom-8 right-8 hidden lg:flex gap-3 z-40">
<div className="flex gap-2">
<div className="h-10 px-4 bg-white rounded-full shadow-sm border border-slate-200 flex items-center gap-2 hover:border-slate-300 transition-colors cursor-pointer group">
<span className="text-sm font-medium text-slate-900 group-hover:text-teal-600 transition-colors">Help</span>
</div>
<div className="w-10 h-10 bg-slate-900 rounded-full shadow-xl shadow-slate-900/20 flex items-center justify-center cursor-pointer hover:bg-slate-800 transition-all hover:scale-105">
<iconify-icon className="text-white" height="20" icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</div>
</div>
</div>

    </>
  );
}
