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



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


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
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="uFY4IYPs2LU8fWm96Im2"></div>

</div>

<div className="fixed inset-0 z-0 bg-noise opacity-20 pointer-events-none"></div>

<header className="w-full px-6 flex justify-between items-center z-20 pt-4">

<div className="flex items-center p-1.5 rounded-full bg-black/60 border border-zinc-800/60 backdrop-blur-xl shadow-lg shadow-black/40">
<button className="px-5 py-2 rounded-full bg-white/90 text-black text-sm font-semibold shadow-sm transition-transform active:scale-95">
                Swap
            </button>
<button className="hover:text-zinc-200 transition-colors text-sm font-medium text-zinc-400 rounded-full pt-2 pr-5 pb-2 pl-5">About</button>
<button className="hover:text-zinc-200 transition-colors text-sm font-medium text-zinc-400 rounded-full pt-2 pr-5 pb-2 pl-5">How to use</button>
</div>

<button className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-black/40 hover:bg-black/60 border border-zinc-800/50 hover:border-zinc-700 text-sm font-medium text-zinc-200 transition-all duration-300 backdrop-blur-md">
<span className="">Connect</span>
</button>
</header>

<main className="flex-1 flex flex-col z-10 w-full pt-4 pr-4 pb-4 pl-4 relative items-center justify-center">


<div className="w-full max-w-[480px] rounded-[40px] backdrop-blur-3xl backdrop-saturate-150 bg-[#080808]/70 border border-white/[0.08] shadow-[0_8px_60px_-12px_rgba(0,0,0,0.8)] p-8 relative overflow-hidden ring-1 ring-white/[0.03]">

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-white/[0.02] blur-[60px] pointer-events-none"></div>
<div className="relative z-10 text-center mb-10 mt-2">
<h1 className="text-3xl font-medium text-white tracking-tight mb-2 drop-shadow-md">Send Anonymously.</h1>
<p className="text-zinc-400 font-medium tracking-wide text-sm">Protect Your Privacy.</p>
</div>

<div className="space-y-4 relative z-10">

<div className="group relative rounded-[28px] bg-black/40 border border-white/5 hover:border-white/10 transition-all duration-300 focus-within:border-white/20 focus-within:bg-black/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]">
<div className="flex flex-col pt-5 pr-6 pb-5 pl-6">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500">You send</span>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-zinc-600"></span>
<span className="text-xs font-medium text-zinc-400">Solana</span>
</div>
</div>
<div className="flex items-center justify-between">
<input className="bg-transparent border-none outline-none text-4xl text-white placeholder-zinc-700/50 w-full font-medium tracking-tight appearance-none p-0 drop-shadow-sm" placeholder="0.00" type="text"/>
<button className="ml-4 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-[11px] font-semibold text-zinc-300 tracking-wide transition-colors border border-white/5 uppercase backdrop-blur-sm">
                                Max
                            </button>
</div>
</div>
</div>

<div className="flex justify-center -my-3 relative z-20">
<button className="p-2.5 rounded-full bg-[#0a0a0a] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300 shadow-xl group">
<svg className="lucide lucide-arrow-down-up w-4 h-4 group-hover:rotate-180 transition-transform duration-500" data-lucide="arrow-down-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 16 4 4 4-4"></path><path d="M7 20V4"></path><path d="m21 8-4-4-4 4"></path><path d="M17 4v16"></path></svg>
</button>
</div>

<div className="group relative rounded-[28px] bg-black/40 border border-white/5 hover:border-white/10 transition-all duration-300 focus-within:border-white/20 focus-within:bg-black/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]">
<div className="flex flex-col px-6 py-5">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-medium text-zinc-500">To address</span>
</div>
<input className="w-full bg-transparent border-none outline-none text-lg text-white placeholder-zinc-700/50 font-medium p-0" placeholder="Ens or Address" type="text"/>
</div>
</div>

<button className="w-full mt-4 py-4 rounded-full bg-white/95 hover:bg-white text-black font-semibold text-base tracking-tight shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-2 backdrop-blur-sm">
                    Connect Wallet
                </button>
<div className="flex items-center justify-center gap-2 pt-2">
<span className="text-xs font-medium text-zinc-500/80">Secure &amp; Encrypted Route</span>
</div>
</div>
</div>
</main>

<footer className="flex items-center gap-4 z-10 pb-4">

<a className="group p-3 rounded-full bg-black/20 hover:bg-black/40 border border-transparent hover:border-zinc-800 transition-all duration-300 backdrop-blur-sm" href="#">
<svg className="group-hover:text-zinc-300 transition-colors w-[20px] h-[20px]" data-icon-replaced="true" fill="currentColor" strokeWidth="2" style={{color: 'rgb(212, 212, 216)', width: '20px', height: '20px'}} viewbox="0 0 24 24">
<path className="" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
</svg>
</a>

<a className="group p-3 rounded-full bg-black/20 hover:bg-black/40 border border-transparent hover:border-zinc-800 transition-all duration-300 backdrop-blur-sm" href="#">
<svg className="lucide lucide-github group-hover:text-zinc-300 transition-colors w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(212, 212, 216)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>

<a className="group hover:bg-black/40 hover:border-zinc-800 transition-all duration-300 flex items-center justify-center bg-black/20 border-transparent border rounded-full pt-3 pr-3 pb-3 pl-3 backdrop-blur-sm" href="#">
<svg className="group-hover:text-zinc-300 transition-colors w-[20px] h-[20px]" data-icon-replaced="true" fill="currentColor" strokeWidth="2" style={{color: 'rgb(212, 212, 216)', width: '20px', height: '20px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></svg>
</a>
</footer>


    </>
  );
}
