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
      

<nav className="border-b border-zinc-800/80 bg-[#0A0A0A]/90 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-10">

<div className="flex items-center gap-2 text-[#8DF885] font-semibold tracking-tighter uppercase">
<iconify-icon className="text-xl" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base">TX_FLOW</span>
</div>

<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400 font-mono">
<a className="hover:text-[#8DF885] transition-colors" href="#">/Trade</a>
<a className="hover:text-[#8DF885] transition-colors" href="#">/Vaults</a>
<a className="text-zinc-100 border-b border-[#8DF885] pb-0.5" href="#">/Portfolio</a>
<a className="hover:text-[#8DF885] transition-colors" href="#">/Referrals</a>
<a className="hover:text-[#8DF885] transition-colors" href="#">/Explorer</a>
</div>
</div>
<div className="flex items-center gap-3 font-mono">
<button className="bg-[#8DF885] hover:bg-[#8DF885]/80 text-black text-sm font-semibold px-4 py-2 transition-colors uppercase tracking-widest">
                    Deposit
                </button>
<button className="border border-zinc-800 hover:border-[#8DF885]/50 bg-zinc-900/50 text-sm font-medium px-4 py-2 flex items-center gap-2 transition-colors">
<div className="w-2 h-2 bg-[#8DF885] shadow-[0_0_8px_rgba(141,248,133,0.6)]"></div>
<span className="text-xs">0xEbBe...3EDC</span>
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="border border-zinc-800 hover:border-[#8DF885]/50 bg-zinc-900/50 p-2 transition-colors text-zinc-400 hover:text-[#8DF885]">
<iconify-icon className="text-lg" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="max-w-[1600px] mx-auto px-6 mt-10">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
<div className="flex flex-col gap-6">
<h1 className="text-3xl font-medium tracking-tight flex items-center gap-3 uppercase">
<iconify-icon className="text-[#8DF885] text-2xl" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    System Rewards
                </h1>
<div className="flex items-center gap-6 text-sm font-medium text-zinc-400 font-mono">
<button className="text-[#8DF885] border-b border-[#8DF885] pb-1.5 px-1 uppercase tracking-wider">Your Rewards</button>
<button className="hover:text-zinc-100 pb-1.5 px-1 transition-colors uppercase tracking-wider">Leaderboard</button>
</div>
</div>
<button className="flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-[#8DF885] transition-colors bg-zinc-900/40 border border-zinc-800/80 px-4 py-2 uppercase">
<iconify-icon icon="solar:document-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Docs
            </button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">

<div className="lg:col-span-7 xl:col-span-8 border border-zinc-800/80 bg-zinc-900/30 p-8 flex flex-col relative overflow-hidden group">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8DF885]/5 blur-[120px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100"></div>
<div className="flex justify-between items-start mb-10 relative z-10 font-mono">
<div className="inline-flex items-center gap-2 bg-[#8DF885]/10 border border-[#8DF885]/30 text-[#8DF885] text-xs px-3 py-1.5 font-medium uppercase tracking-widest">
<div className="w-1.5 h-1.5 bg-[#8DF885]"></div>
                        Status: Extended
                    </div>
<div className="text-xs text-zinc-500 font-medium flex items-center gap-2 uppercase tracking-widest">
                        Sync: <span className="text-[#8DF885]">Active</span>
</div>
</div>
<div className="text-center mb-16 relative z-10 flex-grow flex flex-col justify-center">
<h2 className="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em] mb-4">Total Accrued Points</h2>
<div className="text-6xl md:text-8xl font-medium tracking-tighter text-zinc-50 font-mono drop-shadow-sm">248,925.00</div>
<div className="text-[#8DF885] font-mono tracking-widest uppercase mt-4 text-sm">X_Points</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-zinc-800/80 relative z-10">
<div>
<div className="text-xs font-mono text-zinc-500 mb-1.5 uppercase tracking-wider">Hash</div>
<div className="text-sm font-mono text-zinc-300">0x8A...29F</div>
</div>
<div className="md:col-span-2">
<div className="text-xs font-mono text-zinc-500 mb-1.5 uppercase tracking-wider">Next Epoch</div>
<div className="text-base font-medium text-zinc-200 font-mono">
                            20<span className="text-zinc-500 text-xs mx-1">D</span> 
                            33<span className="text-zinc-500 text-xs mx-1">H</span> 
                            58<span className="text-zinc-500 text-xs mx-1">M</span> 
                            10<span className="text-[#8DF885] text-xs mx-1 animate-pulse">S</span>
</div>
</div>
<div className="text-right">
<div className="text-xs font-mono text-zinc-500 mb-1.5 uppercase tracking-wider">Global Rank</div>
<div className="text-base font-medium text-[#8DF885] font-mono">#29,852</div>
</div>
</div>
</div>

<div className="lg:col-span-5 xl:col-span-4 border border-zinc-800/80 bg-zinc-900/30 p-8 flex flex-col relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%),linear-gradient(0deg,transparent_50%,#fff_50%)] bg-[length:100%_100%,_100%_4px]"></div>
<div className="grid grid-cols-3 gap-4 mb-10 pb-6 border-b border-zinc-800/80 relative z-10">
<div>
<div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2 leading-tight">Pool Status</div>
<div className="text-lg font-medium font-mono text-zinc-200">Tier_01</div>
</div>
<div>
<div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2 leading-tight">Vol [USD]</div>
<div className="text-lg font-medium font-mono text-zinc-200">12.4B</div>
</div>
<div>
<div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2 leading-tight">Target</div>
<div className="text-lg font-medium font-mono text-[#8DF885] drop-shadow-[0_0_8px_rgba(141,248,133,0.4)]">36.0B</div>
</div>
</div>

<div className="mt-auto h-64 relative flex items-end justify-between gap-3 pt-8 pb-4 z-10">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-[40px] pt-8 opacity-40">
<div className="w-full h-px bg-zinc-800 relative"><span className="absolute -top-3 right-0 text-xs text-zinc-700 font-mono scale-75 origin-right">MAX</span></div>
<div className="w-full h-px bg-zinc-800/50"></div>

<div className="w-full h-px bg-[#8DF885]/30 relative border-b border-dashed border-[#8DF885]/40 shadow-[0_0_5px_rgba(141,248,133,0.2)]">
<span className="absolute -top-3 right-0 text-xs text-[#8DF885]/60 font-mono scale-75 origin-right">PROJ</span>
</div>
<div className="w-full h-px bg-zinc-800/50"></div>
<div className="w-full h-px bg-zinc-800 relative"><span className="absolute -top-3 right-0 text-xs text-zinc-700 font-mono scale-75 origin-right">MIN</span></div>
</div>

<div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] mix-blend-overlay"></div>

<div className="absolute top-0 left-0 text-xs font-mono text-zinc-600 scale-75 origin-top-left uppercase tracking-[0.3em] flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-[#8DF885] animate-pulse"></div>
                        SYS.YIELD.PROJECTION //
                    </div>

<div className="w-full h-full flex flex-col justify-end items-center gap-2 relative group z-10">
<span className="text-xs text-[#8DF885] font-mono group-hover:text-[#8DF885] transition-colors drop-shadow-[0_0_8px_rgba(141,248,133,0.5)]">[ 1.0x ]</span>
<div className="w-full h-[25%] relative cursor-pointer overflow-hidden border border-[#8DF885]/40 bg-zinc-950 group-hover:border-[#8DF885] transition-all duration-300">

<div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(141,248,133,0.15)_1px,transparent_1px)] bg-[size:100%_4px] group-hover:bg-[linear-gradient(0deg,rgba(141,248,133,0.25)_1px,transparent_1px)] transition-all"></div>

<div className="absolute top-0 left-0 w-full h-[2px] bg-[#8DF885] shadow-[0_0_10px_rgba(141,248,133,0.8)]"></div>
</div>
<span className="text-xs text-[#8DF885] font-mono mt-1">&gt; 7B</span>
</div>

<div className="w-full h-full flex flex-col justify-end items-center gap-2 relative group z-10">
<span className="text-xs text-zinc-500 font-mono group-hover:text-zinc-300 transition-colors">[ 1.2x ]</span>
<div className="w-full h-[45%] relative cursor-pointer overflow-hidden border border-zinc-800 bg-zinc-950/80 group-hover:border-[#8DF885]/50 group-hover:bg-zinc-900 transition-all duration-300">

<div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] group-hover:bg-[linear-gradient(0deg,rgba(141,248,133,0.08)_1px,transparent_1px)] transition-all"></div>
<div className="absolute top-0 left-0 w-full h-[1px] bg-zinc-600 group-hover:bg-[#8DF885]/60 transition-colors"></div>
</div>
<span className="text-xs text-zinc-500 font-mono mt-1 group-hover:text-zinc-400">&gt; 14B</span>
</div>

<div className="w-full h-full flex flex-col justify-end items-center gap-2 relative group z-10">
<span className="text-xs text-zinc-500 font-mono group-hover:text-zinc-300 transition-colors">[ 1.5x ]</span>
<div className="w-full h-[65%] relative cursor-pointer overflow-hidden border border-zinc-800 bg-zinc-950/80 group-hover:border-[#8DF885]/50 group-hover:bg-zinc-900 transition-all duration-300">

<div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] group-hover:bg-[linear-gradient(0deg,rgba(141,248,133,0.08)_1px,transparent_1px)] transition-all"></div>
<div className="absolute top-0 left-0 w-full h-[1px] bg-zinc-600 group-hover:bg-[#8DF885]/60 transition-colors"></div>
</div>
<span className="text-xs text-zinc-500 font-mono mt-1 group-hover:text-zinc-400">&gt; 28B</span>
</div>

<div className="w-full h-full flex flex-col justify-end items-center gap-2 relative group z-10">
<span className="text-xs text-zinc-500 font-mono group-hover:text-[#8DF885]/80 transition-colors">[ 2.0x ]</span>
<div className="w-full h-[80%] relative cursor-pointer overflow-hidden border border-zinc-700 bg-zinc-950 group-hover:border-[#8DF885]/60 group-hover:bg-zinc-900 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] inset">

<div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_4px] group-hover:bg-[linear-gradient(0deg,rgba(141,248,133,0.15)_1px,transparent_1px)] transition-all"></div>
<div className="absolute top-0 left-0 w-full h-[1px] bg-zinc-500 group-hover:bg-[#8DF885]/80 transition-colors group-hover:shadow-[0_0_8px_rgba(141,248,133,0.5)]"></div>
</div>
<span className="text-xs text-zinc-500 font-mono mt-1 group-hover:text-[#8DF885]/80">&gt; 32B</span>
</div>

<div className="w-full h-full flex flex-col justify-end items-center gap-2 relative group z-10">
<span className="text-xs text-[#8DF885] font-mono group-hover:text-[#8DF885] transition-colors animate-pulse drop-shadow-[0_0_5px_rgba(141,248,133,0.3)]">[ 3.0x ]</span>
<div className="w-full h-[95%] relative cursor-pointer overflow-hidden border border-[#8DF885]/60 bg-zinc-950 group-hover:bg-[#8DF885]/5 transition-all duration-300 group-hover:border-[#8DF885] group-hover:shadow-[0_0_20px_rgba(141,248,133,0.15)]">

<div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(141,248,133,0.2)_1px,transparent_1px)] bg-[size:100%_6px] opacity-80 group-hover:opacity-100 transition-opacity"></div>

<div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#8DF885]/30"></div>

<div className="absolute top-0 left-0 w-full h-[3px] bg-[#8DF885] shadow-[0_0_15px_#8DF885]"></div>

<div className="absolute top-0 left-0 w-1.5 h-1.5 border-t-2 border-l-2 border-[#8DF885]"></div>
<div className="absolute top-0 right-0 w-1.5 h-1.5 border-t-2 border-r-2 border-[#8DF885]"></div>
</div>
<span className="text-xs text-[#8DF885] font-mono mt-1 tracking-widest font-semibold drop-shadow-[0_0_8px_rgba(141,248,133,0.4)]">&gt;&gt; 36B</span>
</div>
</div>

<div className="absolute bottom-4 left-8 right-8 flex justify-between items-center z-10 pointer-events-none opacity-40">
<div className="flex gap-1">
<div className="w-3 h-[2px] bg-zinc-600"></div>
<div className="w-1 h-[2px] bg-zinc-600"></div>
</div>
<div className="flex gap-1">
<div className="w-1 h-[2px] bg-[#8DF885]"></div>
<div className="w-3 h-[2px] bg-[#8DF885]"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-8">

<div className="flex flex-col gap-5">
<div className="flex items-center justify-between pb-2 border-b border-zinc-800/80">
<h2 className="text-xl font-medium tracking-tight flex items-center gap-2 uppercase">
<iconify-icon className="text-[#8DF885]" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Boost Vectors
                    </h2>
<span className="text-xs text-[#8DF885] bg-[#8DF885]/10 px-2 py-1 border border-[#8DF885]/30 font-mono tracking-widest uppercase">Loaded_4_Modules</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="border border-zinc-800/80 hover:border-[#8DF885]/50 bg-zinc-900/20 hover:bg-zinc-900/60 transition-all p-6 flex flex-col h-full group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#8DF885]/0 via-[#8DF885]/40 to-[#8DF885]/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-5">
<div className="p-2 border border-zinc-800 bg-zinc-950 text-zinc-300 group-hover:text-[#8DF885] group-hover:border-[#8DF885]/30 transition-colors">
<iconify-icon className="text-xl" icon="solar:pulse-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-mono text-zinc-500 group-hover:text-[#8DF885] transition-colors">MOD_01</span>
</div>
<h3 className="text-sm font-medium mb-2 text-zinc-100 uppercase tracking-wide">Perps Trading Vol</h3>
<p className="text-sm text-zinc-500 mb-8 leading-relaxed flex-grow">Trading activity on TxFlow Perpetual directly converts into Points. Trade more to earn more.</p>
<button className="w-full py-2.5 border border-[#8DF885]/30 bg-[#8DF885]/10 text-[#8DF885] text-xs font-mono uppercase tracking-widest hover:bg-[#8DF885] hover:text-black transition-colors flex items-center justify-center gap-2">
                            Initializing
                            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>

<div className="border border-zinc-800/80 hover:border-[#8DF885]/50 bg-zinc-900/20 hover:bg-zinc-900/60 transition-all p-6 flex flex-col h-full group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#8DF885]/0 via-[#8DF885]/40 to-[#8DF885]/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-5">
<div className="p-2 border border-zinc-800 bg-zinc-950 text-zinc-300 group-hover:text-[#8DF885] group-hover:border-[#8DF885]/30 transition-colors">
<iconify-icon className="text-xl" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-mono text-zinc-500 group-hover:text-[#8DF885] transition-colors">MOD_02</span>
</div>
<h3 className="text-sm font-medium mb-2 text-zinc-100 uppercase tracking-wide">OI Booster</h3>
<p className="text-sm text-zinc-500 mb-8 leading-relaxed flex-grow">The more open interest (OI) you hold and the longer you hold it, the more points you earn.</p>
<button className="w-full py-2.5 border border-zinc-700 bg-zinc-900/50 text-zinc-300 text-xs font-mono uppercase tracking-widest hover:border-[#8DF885] hover:text-[#8DF885] transition-colors flex items-center justify-center gap-2">
                            Execute
                            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>

<div className="border border-zinc-800/80 hover:border-[#8DF885]/50 bg-zinc-900/20 hover:bg-zinc-900/60 transition-all p-6 flex flex-col h-full group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#8DF885]/0 via-[#8DF885]/40 to-[#8DF885]/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-5">
<div className="p-2 border border-zinc-800 bg-zinc-950 text-zinc-300 group-hover:text-[#8DF885] group-hover:border-[#8DF885]/30 transition-colors">
<iconify-icon className="text-xl" icon="solar:card-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-mono text-zinc-500 group-hover:text-[#8DF885] transition-colors">MOD_03</span>
</div>
<h3 className="text-sm font-medium mb-2 text-zinc-100 uppercase tracking-wide">Balance Booster</h3>
<p className="text-sm text-zinc-500 mb-8 leading-relaxed flex-grow">Maintaining a higher account balance during the event significantly increases earnings.</p>
<button className="w-full py-2.5 border border-zinc-700 bg-zinc-900/50 text-zinc-300 text-xs font-mono uppercase tracking-widest hover:border-[#8DF885] hover:text-[#8DF885] transition-colors flex items-center justify-center gap-2">
                            Inject Funds
                            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>

<div className="border border-zinc-800/80 hover:border-[#8DF885]/50 bg-zinc-900/20 hover:bg-zinc-900/60 transition-all p-6 flex flex-col h-full group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#8DF885]/0 via-[#8DF885]/40 to-[#8DF885]/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-5">
<div className="p-2 border border-zinc-800 bg-zinc-950 text-zinc-300 group-hover:text-[#8DF885] group-hover:border-[#8DF885]/30 transition-colors">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-mono text-zinc-500 group-hover:text-[#8DF885] transition-colors">MOD_04</span>
</div>
<h3 className="text-sm font-medium mb-2 text-zinc-100 uppercase tracking-wide">Network Protocol</h3>
<p className="text-sm text-zinc-500 mb-8 leading-relaxed flex-grow">Inviter and invitees receive +10% / +5% boost in points respectively.</p>
<button className="w-full py-2.5 border border-zinc-700 bg-zinc-900/50 text-zinc-300 text-xs font-mono uppercase tracking-widest hover:border-[#8DF885] hover:text-[#8DF885] transition-colors flex items-center justify-center gap-2">
                            Establish Link
                            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex flex-col gap-5 mt-4">
<div className="flex items-center justify-between pb-2 border-b border-zinc-800/80">
<h2 className="text-xl font-medium tracking-tight flex items-center gap-2 uppercase">
<iconify-icon className="text-[#8DF885]" icon="solar:history-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Distribution History
                    </h2>
<div className="relative">
<button className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest bg-zinc-900/80 border border-zinc-800/80 px-3 py-2 hover:border-[#8DF885]/50 hover:text-[#8DF885] transition-colors group">
<span className="text-zinc-500">Target:</span>
<span className="text-zinc-200 group-hover:text-[#8DF885]">Stage_05</span>
<iconify-icon className="text-zinc-500 group-hover:text-[#8DF885] transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
<div className="border border-zinc-800/80 bg-zinc-900/20 flex flex-col">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr className="border-b border-zinc-800/80 text-xs font-mono text-zinc-500 bg-zinc-950 uppercase tracking-widest">
<th className="py-4 px-6 font-medium">Cycle_Period</th>
<th className="py-4 px-6 font-medium text-right">Base_Yield</th>
<th className="py-4 px-6 font-medium text-right">Network_Yield</th>
<th className="py-4 px-6 font-medium text-right">Net_Output</th>
</tr>
</thead>
<tbody className="text-sm text-zinc-300 font-mono">
<tr className="border-b border-zinc-800/50 hover:bg-zinc-800/40 transition-colors">
<td className="py-4 px-6 text-zinc-400">2025-07-15 <span className="text-zinc-600 mx-1">-&gt;</span> 2025-07-21</td>
<td className="py-4 px-6 text-right">0.00832</td>
<td className="py-4 px-6 text-right">0.00832</td>
<td className="py-4 px-6 text-right text-zinc-100">0.00832</td>
</tr>

<tr className="border-b border-zinc-800/50 bg-[#8DF885]/5 text-[#8DF885] hover:bg-[#8DF885]/10 transition-colors relative">
<td className="py-4 px-6">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#8DF885]"></div>
                                        2025-07-08 <span className="text-[#8DF885]/40 mx-1">-&gt;</span> 2025-07-14
                                        <span className="ml-3 text-[10px] border border-[#8DF885]/30 bg-[#8DF885]/10 px-1.5 py-0.5 uppercase tracking-widest">Active</span>
</td>
<td className="py-4 px-6 text-right font-medium">10.00832</td>
<td className="py-4 px-6 text-right font-medium">10.00832</td>
<td className="py-4 px-6 text-right font-medium drop-shadow-[0_0_8px_rgba(141,248,133,0.5)]">0.00832</td>
</tr>
<tr className="border-b border-zinc-800/50 hover:bg-zinc-800/40 transition-colors">
<td className="py-4 px-6 text-zinc-400">2025-07-01 <span className="text-zinc-600 mx-1">-&gt;</span> 2025-07-07</td>
<td className="py-4 px-6 text-right">0.00832</td>
<td className="py-4 px-6 text-right">0.00832</td>
<td className="py-4 px-6 text-right text-zinc-100">0.00832</td>
</tr>
<tr className="border-b border-zinc-800/50 hover:bg-zinc-800/40 transition-colors">
<td className="py-4 px-6 text-zinc-400">2025-06-24 <span className="text-zinc-600 mx-1">-&gt;</span> 2025-06-30</td>
<td className="py-4 px-6 text-right">0.00832</td>
<td className="py-4 px-6 text-right">0.00832</td>
<td className="py-4 px-6 text-right text-zinc-100">0.00832</td>
</tr>
<tr className="border-b border-zinc-800/50 hover:bg-zinc-800/40 transition-colors">
<td className="py-4 px-6 text-zinc-400">2025-06-17 <span className="text-zinc-600 mx-1">-&gt;</span> 2025-06-23</td>
<td className="py-4 px-6 text-right">0.00832</td>
<td className="py-4 px-6 text-right">0.00832</td>
<td className="py-4 px-6 text-right text-zinc-100">0.00832</td>
</tr>
<tr className="hover:bg-zinc-800/40 transition-colors">
<td className="py-4 px-6 text-zinc-400">2025-06-10 <span className="text-zinc-600 mx-1">-&gt;</span> 2025-06-16</td>
<td className="py-4 px-6 text-right">0.00832</td>
<td className="py-4 px-6 text-right">0.00832</td>
<td className="py-4 px-6 text-right text-zinc-100">0.00832</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-3 border-t border-zinc-800/80 bg-zinc-950 flex justify-between items-center text-xs font-mono text-zinc-600 mt-auto uppercase tracking-widest">
<span>SYS_MEM: 64MB [OK]</span>
<span className="text-[#8DF885]/60 flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-[#8DF885]/60"></div>
                            ENCRYPTED // TLS 1.3
                        </span>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
