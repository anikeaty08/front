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



        // Countdown Timer Logic
        function startCountdown() {
            // Set target date (e.g., 20 days and 14 hours from now)
            const now = new Date();
            const targetDate = new Date(now.getTime() + (20 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000));

            function update() {
                const currentTime = new Date().getTime();
                const distance = targetDate - currentTime;

                if (distance < 0) {
                    return; // Expired
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById('cd-d').innerText = days < 10 ? '0' + days : days;
                document.getElementById('cd-h').innerText = hours < 10 ? '0' + hours : hours;
                document.getElementById('cd-m').innerText = minutes < 10 ? '0' + minutes : minutes;
                document.getElementById('cd-s').innerText = seconds < 10 ? '0' + seconds : seconds;
                
                requestAnimationFrame(update);
            }
            
            update();
        }

        // Initialize
        startCountdown();
    
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
      

<nav className="border-b border-neutral-900 bg-black/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2 text-white font-semibold tracking-tight text-lg group cursor-pointer">
<div className="w-5 h-5 bg-green-500 rounded-sm relative overflow-hidden group-hover:bg-green-400 transition-colors">
<div className="absolute inset-0 bg-black/20 transform rotate-45 translate-y-1 translate-x-1"></div>
</div>
<span>TxFlow</span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm">
<a className="hover:text-white transition-colors duration-200" href="#">Trade</a>
<a className="hover:text-white transition-colors duration-200" href="#">Vaults</a>
<a className="text-white font-medium" href="#">Portfolio</a>
<a className="hover:text-white transition-colors duration-200" href="#">Referrals</a>
<a className="hover:text-white transition-colors duration-200" href="#">Explorer</a>
<a className="hover:text-white transition-colors duration-200" href="#">Testnet</a>
<a className="hover:text-white transition-colors duration-200" href="#">Docs</a>
<a className="hover:text-white transition-colors duration-200" href="#">Points</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="bg-green-500 hover:bg-green-400 text-black text-xs font-semibold px-3 py-1.5 rounded-sm transition-all shadow-[0_0_15px_-3px_rgba(34,197,94,0.4)] hover:shadow-[0_0_20px_-3px_rgba(34,197,94,0.6)]">
                    DEPOSIT
                </button>
<button className="flex items-center gap-2 border border-neutral-800 hover:border-neutral-700 bg-neutral-900/50 px-3 py-1.5 rounded-sm text-xs transition-colors">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span>0xEbbe...3EDC</span>
<iconify-icon className="text-neutral-500 text-sm" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="text-neutral-500 hover:text-white transition-colors flex items-center">
<iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="max-w-7xl mx-auto px-6 py-8 relative bg-grid min-h-[calc(100vh-64px)]">

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 animate-[fadeIn_0.5s_ease-out]">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-sm">
<span className="text-green-500">&gt;</span>
<h1 className="text-white text-xl tracking-tight font-medium">SYS_REWARDS_</h1>
</div>
<div className="flex items-center gap-6 mt-2 ml-4 text-sm">
<button className="text-neutral-500 hover:text-white transition-colors">[01] YOUR REWARDS</button>
<button className="text-green-500 border-b border-green-500 pb-0.5">[02] LEADERBOARD</button>
</div>
</div>

<div className="flex flex-nowrap items-center gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
<div className="group relative shrink-0">
<button className="flex items-center gap-8 border border-neutral-800 bg-black hover:border-neutral-700 px-4 py-2 rounded-sm text-xs transition-colors w-48 justify-between whitespace-nowrap">
<span className="text-neutral-500">TARGET: <span className="text-white">STAGE_05</span></span>
<iconify-icon className="text-neutral-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
<div className="group relative shrink-0">
<button className="flex items-center gap-8 border border-neutral-800 bg-black hover:border-neutral-700 px-4 py-2 rounded-sm text-xs transition-colors w-56 justify-between whitespace-nowrap">
<span className="text-neutral-500">EPOCH 7 <span className="text-white ml-2">11/17 - 11/23</span></span>
<iconify-icon className="text-neutral-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 border-b border-neutral-900 pb-12">
<div>
<div className="text-neutral-500 text-sm mb-2">Next Epoch</div>
<div className="text-3xl md:text-4xl text-white font-medium tracking-tight flex items-baseline gap-3" id="countdown">
<span className="tabular-nums" id="cd-d">--</span><span className="text-sm text-neutral-600 font-normal">D</span>
<span className="tabular-nums" id="cd-h">--</span><span className="text-sm text-neutral-600 font-normal">H</span>
<span className="tabular-nums" id="cd-m">--</span><span className="text-sm text-neutral-600 font-normal">M</span>
<span className="tabular-nums" id="cd-s">--</span><span className="text-sm text-neutral-600 font-normal">S</span>
</div>
</div>
<div className="md:text-right">
<div className="text-neutral-500 text-sm mb-2">My Points</div>
<div className="text-3xl md:text-4xl text-white font-medium tracking-tight tabular-nums">248,925.00</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mb-20">

<div className="group relative border border-neutral-800 bg-neutral-900/20 p-6 h-64 flex flex-col items-center justify-center hover:-translate-y-2 transition-all duration-300 hover:border-neutral-700">
<div className="absolute top-4 left-4 text-[10px] text-neutral-600">NODE_02</div>
<div className="absolute top-4 right-4 text-[10px] text-neutral-600">SILVER_NODE</div>
<div className="text-6xl font-bold text-neutral-800 mb-4 select-none group-hover:text-neutral-700 transition-colors">02</div>
<div className="text-xl text-white font-medium mb-1 tracking-tight tabular-nums">834,366,575.00</div>
<div className="text-xs text-green-500/80">dw9as2...53ss</div>

<div className="absolute bottom-0 left-0 w-full flex justify-between px-4 pb-4 opacity-50">
<div className="h-1 w-8 bg-neutral-800"></div>
<div className="h-1 w-8 bg-neutral-800"></div>
</div>
</div>

<div className="relative border border-green-500/30 bg-green-900/5 p-6 h-80 flex flex-col items-center shadow-[0_0_50px_-20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_60px_-15px_rgba(34,197,94,0.3)] transition-all duration-500 scale-105 z-10 overflow-hidden">

<div className="scan-overlay z-0">
<div className="scan-bar"></div>
</div>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50 z-20"></div>
<div className="w-full flex justify-between items-start mb-12 z-10 relative">
<span className="text-[10px] text-green-500 tracking-wider">://DOMINATOR</span>
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,1)]"></div>
</div>
<div className="text-center z-10 relative">
<div className="text-7xl font-bold text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] tabular-nums">01</div>
<div className="text-[10px] tracking-[0.3em] text-green-500 uppercase font-semibold mb-8">Dominator</div>
<div className="bg-gradient-to-t from-green-500/10 to-transparent w-full absolute bottom-0 left-0 h-32 pointer-events-none"></div>
<div className="relative">
<div className="text-2xl text-white font-medium mb-1 tracking-tight tabular-nums">42,000,000</div>
<div className="text-xs text-green-400">dw9as2...53ss</div>
</div>
</div>
<div className="w-full mt-auto flex justify-between items-end text-[10px] text-neutral-500 border-t border-green-500/20 pt-4 z-10 relative">
<div>
<div className="text-neutral-600 mb-1">UPTIME</div>
<div>99.99%</div>
</div>
<div className="text-right">
<div className="text-neutral-600 mb-1">HASH</div>
<div>0X...A4F</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-green-500 z-20"></div>
<div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-green-500 z-20"></div>
<div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-green-500 z-20"></div>
<div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-green-500 z-20"></div>
</div>

<div className="group relative border border-neutral-800 bg-neutral-900/20 p-6 h-64 flex flex-col items-center justify-center hover:-translate-y-2 transition-all duration-300 hover:border-neutral-700">
<div className="absolute top-4 left-4 text-[10px] text-neutral-600">NODE_03</div>
<div className="absolute top-4 right-4 text-[10px] text-neutral-600">BRONZE_NODE</div>
<div className="text-6xl font-bold text-neutral-800 mb-4 select-none group-hover:text-neutral-700 transition-colors">03</div>
<div className="text-xl text-white font-medium mb-1 tracking-tight tabular-nums">453,242,995.00</div>
<div className="text-xs text-green-500/80">rdwj90...s9JK</div>

<div className="absolute bottom-0 left-0 w-full flex justify-between px-4 pb-4 opacity-50">
<div className="h-1 w-8 bg-neutral-800"></div>
<div className="h-1 w-8 bg-neutral-800"></div>
</div>
</div>
</div>

<div className="border border-neutral-800 rounded-sm overflow-hidden bg-black/40 backdrop-blur-sm">

<div className="bg-neutral-900/30 border-b border-neutral-800 px-4 py-2 flex justify-between items-center">
<div className="flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-900/50 border border-red-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-900/50 border border-yellow-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-900/50 border border-green-800"></div>
</div>
<div className="text-xs text-neutral-600 font-mono">root@txflow:~/data/rankings</div>
</div>
<div className="text-[10px] text-green-900 font-bold uppercase tracking-widest">GLOBAL_RANKINGS.JSON</div>
</div>

<div className="grid grid-cols-12 px-6 py-4 text-[10px] tracking-wider text-neutral-600 uppercase border-b border-neutral-800/50">
<div className="col-span-1">Rank</div>
<div className="col-span-7">User Address</div>
<div className="col-span-4 text-right">Total Points</div>
</div>

<div className="text-sm font-mono">

<div className="group grid grid-cols-12 px-6 py-4 border-b border-neutral-900 hover:bg-neutral-900/30 transition-colors cursor-default">
<div className="col-span-1 text-neutral-500 group-hover:text-neutral-300">04</div>
<div className="col-span-7 text-white group-hover:text-green-400 transition-colors">Dwe9f0...4tER</div>
<div className="col-span-4 text-right text-white tabular-nums">122,442,354.54</div>
</div>
<div className="group grid grid-cols-12 px-6 py-4 border-b border-neutral-900 hover:bg-neutral-900/30 transition-colors cursor-default">
<div className="col-span-1 text-neutral-500 group-hover:text-neutral-300">05</div>
<div className="col-span-7 text-white group-hover:text-green-400 transition-colors">Dwe9f0...4tER</div>
<div className="col-span-4 text-right text-white tabular-nums">122,442,354.54</div>
</div>
<div className="group grid grid-cols-12 px-6 py-4 border-b border-neutral-900 hover:bg-neutral-900/30 transition-colors cursor-default">
<div className="col-span-1 text-neutral-500 group-hover:text-neutral-300">06</div>
<div className="col-span-7 text-white group-hover:text-green-400 transition-colors">Dwe9f0...4tER</div>
<div className="col-span-4 text-right text-white tabular-nums">122,442,354.54</div>
</div>
<div className="group grid grid-cols-12 px-6 py-4 border-b border-neutral-900 hover:bg-neutral-900/30 transition-colors cursor-default">
<div className="col-span-1 text-neutral-500 group-hover:text-neutral-300">07</div>
<div className="col-span-7 text-white group-hover:text-green-400 transition-colors">Dwe9f0...4tER</div>
<div className="col-span-4 text-right text-white tabular-nums">122,442,354.54</div>
</div>
<div className="group grid grid-cols-12 px-6 py-4 border-b border-neutral-900 hover:bg-neutral-900/30 transition-colors cursor-default">
<div className="col-span-1 text-neutral-500 group-hover:text-neutral-300">08</div>
<div className="col-span-7 text-white group-hover:text-green-400 transition-colors">Dwe9f0...4tER</div>
<div className="col-span-4 text-right text-white tabular-nums">122,442,354.54</div>
</div>
<div className="group grid grid-cols-12 px-6 py-4 border-b border-neutral-900 hover:bg-neutral-900/30 transition-colors cursor-default">
<div className="col-span-1 text-neutral-500 group-hover:text-neutral-300">09</div>
<div className="col-span-7 text-white group-hover:text-green-400 transition-colors">Dwe9f0...4tER</div>
<div className="col-span-4 text-right text-white tabular-nums">122,442,354.54</div>
</div>
<div className="group grid grid-cols-12 px-6 py-4 border-b border-neutral-900 hover:bg-neutral-900/30 transition-colors cursor-default">
<div className="col-span-1 text-neutral-500 group-hover:text-neutral-300">10</div>
<div className="col-span-7 text-white group-hover:text-green-400 transition-colors">Dwe9f0...4tER</div>
<div className="col-span-4 text-right text-white tabular-nums">122,442,354.54</div>
</div>

<div className="grid grid-cols-12 px-6 py-4 bg-green-900/10 border-t border-green-500/20 text-green-400">
<div className="col-span-1 font-medium">My (--)</div>
<div className="col-span-7 font-medium">Dwe9f0...4tER</div>
<div className="col-span-4 text-right font-medium tabular-nums">0.00</div>
</div>
</div>
</div>

<div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-mono">
<div className="flex items-center gap-2 text-green-700/80">
<span>root@sys:~#</span>
<span className="animate-blink block w-2 h-4 bg-green-700/80"></span>
</div>
<div className="flex items-center gap-4 bg-neutral-900/50 border border-neutral-800 px-3 py-1.5 rounded-sm">
<div className="flex items-center gap-2 text-neutral-500">
<div className="w-2 h-2 bg-green-500 rounded-sm"></div>
<span className="text-[10px] uppercase tracking-wide">Showing <span className="text-white">1-10</span> of 50</span>
</div>
<div className="h-4 w-[1px] bg-neutral-800 mx-2"></div>
<div className="flex items-center gap-1">
<button className="w-6 h-6 flex items-center justify-center border border-neutral-800 hover:bg-neutral-800 text-neutral-500 transition-colors rounded-sm">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="w-6 h-6 flex items-center justify-center bg-green-900/20 border border-green-500/50 text-green-400 rounded-sm">1</button>
<button className="w-6 h-6 flex items-center justify-center hover:bg-neutral-800 text-neutral-500 transition-colors rounded-sm">2</button>
<button className="w-6 h-6 flex items-center justify-center hover:bg-neutral-800 text-neutral-500 transition-colors rounded-sm">3</button>
<span className="text-neutral-600 px-1">...</span>
<button className="w-6 h-6 flex items-center justify-center hover:bg-neutral-800 text-neutral-500 transition-colors rounded-sm">42</button>
<button className="w-6 h-6 flex items-center justify-center border border-neutral-800 hover:bg-neutral-800 text-neutral-500 transition-colors rounded-sm">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</main>


    </>
  );
}
