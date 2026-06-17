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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">

<div className="absolute w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px] bg-[radial-gradient(circle,rgba(76,243,113,0.1)_0%,transparent_50%)] rounded-full anim-core mix-blend-screen"></div>
</div>

<header className="w-full flex justify-center border-b border-[#222] bg-[#050505]/50 z-10 opacity-30 select-none pointer-events-none anim-reveal" style={{animationDelay: '0.1s'}}>
<div className="w-full max-w-[1320px] flex items-center justify-between p-4 sm:px-8">
<div className="flex items-center gap-8 text-sm">
<div className="flex items-center gap-2 text-white">
<div className="w-4 h-4 bg-[#4cf371] rotate-45"></div>
<span className="font-semibold tracking-tight text-lg">TxFlow</span>
</div>
<nav className="hidden lg:flex items-center gap-6 text-zinc-500">
<span>Trade</span>
<span>Vaults</span>
<span>Portfolio</span>
<span>Explorer</span>
<span>Testnet</span>
<span>Referrals</span>
<span>Docs</span>
<span className="text-[#4cf371]">Points</span>
</nav>
</div>
<div className="flex items-center gap-4 text-xs">
<div className="hidden sm:flex items-center gap-2 text-[#4cf371] border border-[#222] px-3 py-1.5 bg-[#111]">
<div className="w-1.5 h-1.5 rounded-full bg-[#4cf371] anim-cursor-blink"></div>
                    BLOCK 123894763
                </div>
<div className="border border-[#4cf371] text-[#4cf371] px-4 py-1.5 bg-[#4cf371]/10">
                    CONNECT WALLET
                </div>
</div>
</div>
</header>

<main className="flex-1 w-full flex p-4 sm:p-8 z-20 relative items-center justify-center">

<div className="w-full max-w-[1320px] mx-auto h-full flex-1 border border-[#222] bg-[#0a0a0a]/90 backdrop-blur-xl shadow-2xl flex flex-col relative overflow-hidden anim-terminal" style={{animationDelay: '0.2s'}}>

<div className="flex items-center justify-between px-4 py-3 border-b border-[#222] bg-[#0f0f0f] text-xs text-zinc-500 z-10">
<div className="flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:code-square-linear"></iconify-icon>
<span>sys_rewards_module.exe</span>
</div>
<div className="flex items-center gap-2 hover:*:bg-zinc-600 *:transition-colors">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
</div>
</div>

<div className="p-6 sm:p-12 flex-1 flex flex-col relative z-10 overflow-y-auto overflow-x-hidden [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

<div className="flex-1 flex flex-col relative">
<div className="flex items-center gap-2 text-[#4cf371] mb-6 text-sm tracking-widest uppercase font-semibold anim-reveal" style={{animationDelay: '0.6s'}}>
<iconify-icon className="text-base" icon="solar:cpu-linear"></iconify-icon>
<span>Status: Upgrading</span>
</div>

<h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight mb-6 uppercase leading-tight">
<div className="text-white">
<span className="anim-blur-reveal inline-block pr-3 sm:pr-4" style={{animationDelay: '0.8s'}}>Points</span><span className="anim-blur-reveal inline-block" style={{animationDelay: '1.0s'}}>System</span>
</div>
<div className="text-[#4cf371] mt-2 anim-pulse-glow flex items-center">
<span className="anim-load-misalign inline-block pr-3 sm:pr-4" style={{animationDelay: '1.2s'}}>
<span className="anim-text-glitch" data-text="Coming" style={{'--glitch-delay': '0s'}}>Coming</span>
</span>
<span className="anim-load-misalign inline-block pr-3 sm:pr-4" style={{animationDelay: '1.4s'}}>
<span className="anim-text-glitch" data-text="Soon" style={{'--glitch-delay': '2s'}}>Soon</span>
</span>
<span className="anim-blur-reveal inline-flex items-center" style={{animationDelay: '1.6s'}}>
<span className="inline-block w-4 h-8 md:w-6 md:h-12 bg-[#4cf371] anim-cursor-blink"></span>
</span>
</div>
</h1>
<p className="text-base md:text-lg text-zinc-400 font-light max-w-3xl leading-relaxed mt-4 md:mt-8 anim-reveal" style={{animationDelay: '2.0s'}}>
                        Before the Market Knows.<br/>
                        TxFlow is now open for limited closed beta.<br/>
                        Early users earn boosted points and fee rebates.<br/>
                        Spots are limited — first come, first served.
                    </p>
<div className="anim-reveal" style={{animationDelay: '2.1s'}}>
<a className="inline-block text-[#4cf371] text-base md:text-lg font-light mt-4 hover:underline underline-offset-4 transition-all" href="#">
                            Get details and apply here →
                        </a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 md:mt-12 w-full">

<div className="border border-[#222] bg-[#0f0f0f]/50 p-4 sm:p-5 flex flex-col gap-2 relative group anim-reveal" style={{animationDelay: '2.2s'}}>
<div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#222] group-hover:border-[#4cf371] transition-colors m-2"></div>
<div className="text-[#4cf371] flex items-center gap-2 mb-1">
<iconify-icon className="text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-semibold">Volume</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed">Trading on TxFlow Perpetual - more volume, more rewards.</p>
</div>

<div className="border border-[#222] bg-[#0f0f0f]/50 p-4 sm:p-5 flex flex-col gap-2 relative group anim-reveal" style={{animationDelay: '2.3s'}}>
<div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#222] group-hover:border-[#4cf371] transition-colors m-2"></div>
<div className="text-[#4cf371] flex items-center gap-2 mb-1">
<iconify-icon className="text-lg" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-semibold">Open Interest</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed">The higher open interest (OI) held longer gives you more points.</p>
</div>

<div className="border border-[#222] bg-[#0f0f0f]/50 p-4 sm:p-5 flex flex-col gap-2 relative group anim-reveal" style={{animationDelay: '2.4s'}}>
<div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#222] group-hover:border-[#4cf371] transition-colors m-2"></div>
<div className="text-[#4cf371] flex items-center gap-2 mb-1">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-semibold">Balances</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed">Keeping a higher account and vault balance boosts your earnings.</p>
</div>

<div className="border border-[#222] bg-[#0f0f0f]/50 p-4 sm:p-5 flex flex-col gap-2 relative group anim-reveal" style={{animationDelay: '2.5s'}}>
<div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#222] group-hover:border-[#4cf371] transition-colors m-2"></div>
<div className="text-[#4cf371] flex items-center gap-2 mb-1">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-semibold">Referrals</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed">Inviter and invitees get point boost respectively.</p>
</div>
</div>
</div>

<div className="mt-8 xl:mt-12 flex flex-col sm:flex-row sm:items-center justify-between pt-8 gap-4 text-xs text-zinc-600 border-t border-[#222] anim-reveal" style={{animationDelay: '2.7s'}}>
<div className="flex items-center gap-6">
<span className="flex items-center gap-2">TARGET: 
                            <span className="text-zinc-400 flex items-center gap-1.5">STAGE_06 <iconify-icon className="text-sm" icon="solar:code-square-linear"></iconify-icon></span>
</span>
<span className="flex gap-2 items-center">SYNC: <span className="text-yellow-500/90">PAUSED</span></span>
</div>
<span className="flex items-center gap-2">
<iconify-icon className="text-xs" icon="solar:lock-keyhole-linear"></iconify-icon>
                        ENCRYPTED // TLS 1.3
                    </span>
</div>
</div>
</div>
</main>

    </>
  );
}
