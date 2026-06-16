import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
mono: ['"JetBrains Mono"', 'monospace'],
sans: ['"Inter"', 'sans-serif'],
},
colors: {
green: {
400: '#4ade80',
500: '#22c55e',
900: '#14532d',
950: '#052e16',
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>

<header className="relative z-10 border-b border-white/10 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2 text-white font-bold tracking-tight text-lg">
<svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
<span>TxFlow</span>
</div>
<nav className="hidden md:flex gap-6 text-sm font-medium">
<a className="text-white hover:text-green-400 transition-colors duration-200" href="#">Trade</a>
<a className="hover:text-green-400 transition-colors duration-200" href="#">Vaults</a>
<a className="text-green-400 neon-text" href="#">Portfolio</a>
<a className="hover:text-green-400 transition-colors duration-200" href="#">Referrals</a>
<a className="hover:text-green-400 transition-colors duration-200" href="#">Explorer</a>
<a className="hover:text-green-400 transition-colors duration-200" href="#">Testnet</a>
<a className="hover:text-green-400 transition-colors duration-200" href="#">Docs</a>
<a className="hover:text-green-400 transition-colors duration-200" href="#">Points</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="bg-green-600 hover:bg-green-500 text-black font-semibold px-4 py-1.5 rounded-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] text-xs">
                    Deposit
                </button>
<div className="flex items-center gap-2 border border-white/10 rounded-sm px-3 py-1.5 hover:border-green-500/50 transition-colors cursor-pointer group">
<span className="text-xs text-gray-300 group-hover:text-white">0xEbBe...3EDC</span>
<iconify-icon className="text-gray-500 group-hover:text-green-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<button className="p-2 border border-white/10 rounded-sm hover:border-green-500/50 hover:text-green-400 transition-all flex items-center justify-center">
<iconify-icon height="16" icon="solar:monitor-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="relative z-10 border-b border-white/10 bg-black/50">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<div className="text-white text-base tracking-tight font-medium flex items-center gap-2">
<span className="text-green-500">&gt;</span> SYS_REWARDS_
                </div>
<div className="flex gap-6 text-xs tracking-wider">
<button className="hover:text-white transition-colors">[01] YOUR REWARDS</button>
<button className="text-green-400 border-b border-green-500 pb-0.5 neon-text">[02] LEADERBOARD</button>
</div>
</div>
<div className="flex gap-4">
<button className="flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1.5 text-xs hover:border-green-500/30 transition-all">
<span className="text-green-500">TARGET:</span>
<span className="text-white">STAGE_05</span>
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1.5 text-xs hover:border-green-500/30 transition-all">
<span className="text-green-500">EPOCH7</span>
<span className="text-gray-300">11/17 - 11/23</span>
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<main className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex-1 w-full flex flex-col gap-16">

<section className="flex flex-col md:flex-row justify-center items-end gap-6 mt-8 perspective-1000">

<div className="w-full md:w-1/4 opacity-0 animate-slide-up delay-100 group cursor-default">
<div className="relative border border-white/10 bg-black/40 p-6 pt-10 h-64 flex flex-col items-center justify-between backdrop-blur-sm hover:bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-green-500/30 neon-border-hover">

<div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/20 group-hover:border-green-500 transition-colors"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20 group-hover:border-green-500 transition-colors"></div>
<div className="w-full flex justify-between text-[10px] text-gray-600 uppercase tracking-widest px-1">
<span>Node_02</span>
<span>Silver_Node</span>
</div>
<div className="text-7xl font-bold text-white/10 select-none group-hover:text-green-500/10 transition-colors duration-500">02</div>
<div className="text-center w-full space-y-2 z-10">
<div className="text-2xl font-medium text-white tracking-tight group-hover:text-green-400 transition-colors">834,366,575.00</div>
<div className="text-xs text-green-500 font-mono bg-green-900/20 px-2 py-0.5 rounded inline-block">dw9as2...53ss</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 group-hover:bg-green-500/50 transition-colors duration-500 mx-auto w-1/2"></div>
</div>
</div>

<div className="w-full md:w-1/3 opacity-0 animate-slide-up relative z-10 group cursor-default">

<div className="relative border border-green-500/30 bg-black/60 h-80 flex flex-col backdrop-blur-md shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(34,197,94,0.2)] hover:-translate-y-4 hover:scale-105 neon-border overflow-hidden">

<div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent shadow-[0_0_15px_#22c55e] z-20 animate-scan fade-mask-x"></div>
<div className="absolute inset-x-0 h-32 bg-gradient-to-b from-green-500/0 via-green-500/10 to-green-500/0 z-10 animate-scan translate-y-[-50%] pointer-events-none fade-mask-x"></div>


<div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-green-500 z-30"></div>
<div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-green-500 z-30"></div>
<div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-green-500 z-30"></div>
<div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-green-500 z-30"></div>

<div className="p-4 border-b border-green-500/10 flex justify-between items-center relative z-20">
<span className="text-[10px] tracking-[0.2em] text-green-500">://DOMINATOR</span>
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_#22c55e]"></div>
</div>

<div className="flex-1 flex flex-col items-center justify-center relative">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent h-full w-full animate-float opacity-20 pointer-events-none"></div>
<div className="text-8xl font-bold text-white tracking-tighter drop-shadow-2xl relative z-10 mt-[-20px]">
                            01
                        </div>
<div className="text-xs tracking-[0.3em] text-green-500 font-bold uppercase mt-2 mb-6 relative z-10">Dominator</div>
<div className="w-full bg-green-900/10 border-y border-green-500/20 py-4 text-center backdrop-blur-sm relative z-20">
<div className="text-3xl font-medium text-white tracking-tight neon-text">42,000,000</div>
</div>
</div>

<div className="p-4 flex justify-between items-end text-[10px] text-gray-500 font-mono relative z-20">
<div>
<div className="uppercase mb-1 text-gray-600">Uptime</div>
<div className="text-green-400">99.99%</div>
</div>
<div className="text-right">
<div className="uppercase mb-1 text-gray-600">Hash</div>
<div className="text-green-400">0X...A4F</div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/4 opacity-0 animate-slide-up delay-200 group cursor-default">
<div className="relative border border-white/10 bg-black/40 p-6 pt-10 h-64 flex flex-col items-center justify-between backdrop-blur-sm hover:bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-green-500/30 neon-border-hover">

<div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/20 group-hover:border-green-500 transition-colors"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20 group-hover:border-green-500 transition-colors"></div>
<div className="w-full flex justify-between text-[10px] text-gray-600 uppercase tracking-widest px-1">
<span>Node_03</span>
<span>Bronze_Node</span>
</div>
<div className="text-7xl font-bold text-white/10 select-none group-hover:text-green-500/10 transition-colors duration-500">03</div>
<div className="text-center w-full space-y-2 z-10">
<div className="text-2xl font-medium text-white tracking-tight group-hover:text-green-400 transition-colors">453,242,995.00</div>
<div className="text-xs text-green-500 font-mono bg-green-900/20 px-2 py-0.5 rounded inline-block">rdwj90...s9JK</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 group-hover:bg-green-500/50 transition-colors duration-500 mx-auto w-1/2"></div>
</div>
</div>
</section>

<section className="opacity-0 animate-slide-up delay-300 w-full max-w-5xl mx-auto">
<div className="border border-white/10 bg-black rounded-sm overflow-hidden shadow-2xl">

<div className="bg-white/5 border-b border-white/10 px-4 py-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
<span className="ml-3 text-xs text-gray-500 font-mono">root@txflow:~/data/rankings</span>
</div>
<div className="text-[10px] text-green-600 uppercase tracking-widest">global_rankings.json</div>
</div>

<div className="p-6 font-mono text-sm">
<div className="grid grid-cols-12 gap-4 text-[10px] uppercase text-gray-600 mb-4 px-4 tracking-widest">
<div className="col-span-1">Rank</div>
<div className="col-span-7">User Address</div>
<div className="col-span-4 text-right">Total Points</div>
</div>
<div className="space-y-1">

<div className="group grid grid-cols-12 gap-4 px-4 py-3 rounded-sm hover:bg-green-900/10 border border-transparent hover:border-green-500/20 transition-all duration-200 cursor-pointer items-center">
<div className="col-span-1 text-gray-500 group-hover:text-green-400">04</div>
<div className="col-span-7 text-gray-300 group-hover:text-white transition-colors">Dwe9f0...4tER</div>
<div className="col-span-4 text-right text-gray-300 font-medium group-hover:text-green-400 group-hover:neon-text transition-all">122,442,354.54</div>
</div>
<div className="group grid grid-cols-12 gap-4 px-4 py-3 rounded-sm hover:bg-green-900/10 border border-transparent hover:border-green-500/20 transition-all duration-200 cursor-pointer items-center">
<div className="col-span-1 text-gray-500 group-hover:text-green-400">05</div>
<div className="col-span-7 text-gray-300 group-hover:text-white transition-colors">Dwe9f0...4tER</div>
<div className="col-span-4 text-right text-gray-300 font-medium group-hover:text-green-400 group-hover:neon-text transition-all">122,442,354.54</div>
</div>
<div className="group grid grid-cols-12 gap-4 px-4 py-3 rounded-sm hover:bg-green-900/10 border border-transparent hover:border-green-500/20 transition-all duration-200 cursor-pointer items-center">
<div className="col-span-1 text-gray-500 group-hover:text-green-400">06</div>
<div className="col-span-7 text-gray-300 group-hover:text-white transition-colors">Dwe9f0...4tER</div>
<div className="col-span-4 text-right text-gray-300 font-medium group-hover:text-green-400 group-hover:neon-text transition-all">122,442,354.54</div>
</div>
<div className="group grid grid-cols-12 gap-4 px-4 py-3 rounded-sm hover:bg-green-900/10 border border-transparent hover:border-green-500/20 transition-all duration-200 cursor-pointer items-center">
<div className="col-span-1 text-gray-500 group-hover:text-green-400">07</div>
<div className="col-span-7 text-gray-300 group-hover:text-white transition-colors">Dwe9f0...4tER</div>
<div className="col-span-4 text-right text-gray-300 font-medium group-hover:text-green-400 group-hover:neon-text transition-all">122,442,354.54</div>
</div>
<div className="group grid grid-cols-12 gap-4 px-4 py-3 rounded-sm hover:bg-green-900/10 border border-transparent hover:border-green-500/20 transition-all duration-200 cursor-pointer items-center">
<div className="col-span-1 text-gray-500 group-hover:text-green-400">08</div>
<div className="col-span-7 text-gray-300 group-hover:text-white transition-colors">Dwe9f0...4tER</div>
<div className="col-span-4 text-right text-gray-300 font-medium group-hover:text-green-400 group-hover:neon-text transition-all">122,442,354.54</div>
</div>
<div className="group grid grid-cols-12 gap-4 px-4 py-3 rounded-sm hover:bg-green-900/10 border border-transparent hover:border-green-500/20 transition-all duration-200 cursor-pointer items-center">
<div className="col-span-1 text-gray-500 group-hover:text-green-400">09</div>
<div className="col-span-7 text-gray-300 group-hover:text-white transition-colors">Dwe9f0...4tER</div>
<div className="col-span-4 text-right text-gray-300 font-medium group-hover:text-green-400 group-hover:neon-text transition-all">122,442,354.54</div>
</div>
<div className="group grid grid-cols-12 gap-4 px-4 py-3 rounded-sm hover:bg-green-900/10 border border-transparent hover:border-green-500/20 transition-all duration-200 cursor-pointer items-center">
<div className="col-span-1 text-gray-500 group-hover:text-green-400">10</div>
<div className="col-span-7 text-gray-300 group-hover:text-white transition-colors">Dwe9f0...4tER</div>
<div className="col-span-4 text-right text-gray-300 font-medium group-hover:text-green-400 group-hover:neon-text transition-all">122,442,354.54</div>
</div>
</div>

<div className="mt-6 flex items-center gap-2 text-green-500 px-4 opacity-70">
<span>root@sys:~#</span>
<span className="w-2 h-4 bg-green-500 animate-blink block"></span>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-black/90 py-2 px-6 z-20">
<div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] uppercase tracking-widest font-mono text-gray-600">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
<span>SYS.STATUS: ONLINE</span>
</div>
<div className="text-green-900">
                ENCRYPTED // TLS 1.3
            </div>
</div>
</footer>

    </>
  );
}
