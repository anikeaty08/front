import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
jup: {
dark: '#13171F',
card: '#1C2129',
input: '#10141A',
accent: '#C7F284',
secondary: '#303847',
border: '#28303F',
text: '#9CA3AF'
}
},
fontSize: {
xxs: '0.65rem'
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#1FCFF1] opacity-[0.03] blur-[120px] rounded-full"></div>
<div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-[#C7F284] opacity-[0.04] blur-[120px] rounded-full"></div>
<div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] bg-[#784BF8] opacity-[0.03] blur-[150px] rounded-full"></div>
</div>

<header className="w-full flex items-center justify-between px-4 py-4 md:px-6 z-50">

<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-[#C7F284] to-[#1FCFF1] flex items-center justify-center text-jup-dark font-bold text-lg tracking-tighter">
                    J
                </div>
<span className="font-semibold text-lg tracking-tight text-white group-hover:text-jup-accent transition-colors">Jupiter</span>
</a>

<nav className="hidden md:flex items-center gap-1 bg-[#191E27] p-1 rounded-xl border border-jup-border/50">
<a className="px-4 py-2 rounded-lg bg-[#252B36] text-jup-accent text-sm font-medium shadow-sm" href="#">Swap</a>
<a className="px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#252B36]/50 text-sm font-medium transition-all" href="#">Limit Order</a>
<a className="px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#252B36]/50 text-sm font-medium transition-all" href="#">DCA</a>
<a className="px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#252B36]/50 text-sm font-medium transition-all" href="#">Bridge</a>
<a className="px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#252B36]/50 text-sm font-medium transition-all" href="#">Perpetual</a>
</nav>
</div>

<div className="flex items-center gap-3">

<button className="md:hidden p-2 text-gray-400 hover:text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>

<div className="hidden sm:flex items-center gap-2">
<button className="h-10 w-10 flex items-center justify-center rounded-full text-gray-400 hover:bg-[#252B36] hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:globe" data-strokeWidth="1.5" data-width="20"></span>
</button>
<button className="h-10 w-10 flex items-center justify-center rounded-full text-gray-400 hover:bg-[#252B36] hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:settings" data-strokeWidth="1.5" data-width="20"></span>
</button>
</div>

<button className="relative group bg-[#191E27] hover:bg-[#252B36] border border-jup-border hover:border-jup-accent/30 text-white text-sm font-semibold py-2.5 px-5 rounded-xl transition-all duration-300 flex items-center gap-2 overflow-hidden">
<span className="relative z-10 flex items-center gap-2">
<span className="iconify text-jup-accent" data-icon="lucide:wallet" data-strokeWidth="1.5" data-width="18"></span>
                    Connect Wallet
                </span>
</button>
</div>
</header>

<main className="flex-grow flex flex-col items-center justify-center p-4 relative z-10 w-full max-w-7xl mx-auto">

<div className="md:hidden w-full mb-6 overflow-x-auto pb-2 scrollbar-hide">
<nav className="flex items-center gap-1 bg-[#191E27] p-1 rounded-xl border border-jup-border/50 min-w-max mx-auto">
<a className="px-4 py-2 rounded-lg bg-[#252B36] text-jup-accent text-sm font-medium shadow-sm" href="#">Swap</a>
<a className="px-4 py-2 rounded-lg text-gray-400 text-sm font-medium" href="#">Limit</a>
<a className="px-4 py-2 rounded-lg text-gray-400 text-sm font-medium" href="#">DCA</a>
<a className="px-4 py-2 rounded-lg text-gray-400 text-sm font-medium" href="#">Bridge</a>
<a className="px-4 py-2 rounded-lg text-gray-400 text-sm font-medium" href="#">Perp</a>
</nav>
</div>

<div className="w-full max-w-[480px] bg-jup-card border border-jup-border rounded-3xl p-4 shadow-2xl relative glow-green">

<div className="flex items-center justify-between mb-4 px-2">
<div className="flex items-center gap-2">
<button className="text-xs font-semibold text-gray-400 hover:text-white transition-colors bg-[#252B36] px-2 py-1 rounded-md border border-transparent hover:border-gray-600">
                        Dynamic
                   </button>
<button className="text-xs font-semibold text-gray-400 hover:text-white transition-colors px-2 py-1 rounded-md">
                        Fixed
                   </button>
</div>
<div className="flex items-center gap-3">
<button className="text-gray-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:refresh-ccw" data-strokeWidth="1.5" data-width="18"></span>
</button>
<button className="text-gray-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:sliders-horizontal" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
</div>

<div className="flex flex-col gap-1 relative">

<div className="bg-jup-input rounded-xl p-4 border border-transparent hover:border-jup-border transition-colors group focus-within:border-jup-border input-group-focus">
<div className="flex justify-between mb-2">
<span className="text-xs font-medium text-gray-400">You're paying</span>
<div className="flex items-center gap-2">
<button className="text-xs font-medium text-jup-accent bg-jup-accent/10 px-2 py-0.5 rounded-md border border-jup-accent/20 hover:bg-jup-accent/20 transition-colors">Max</button>
<span className="text-xs font-medium text-gray-400">Balance: 0.00</span>
</div>
</div>
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-2 cursor-pointer hover:bg-[#252B36] p-1.5 -ml-1.5 rounded-full pr-3 transition-colors">
<div className="w-7 h-7 rounded-full bg-black overflow-hidden flex items-center justify-center border border-gray-700">
<img alt="SOL" className="w-5 h-5" src="https://cryptologos.cc/logos/solana-sol-logo.svg?v=026"/>
</div>
<span className="font-semibold text-lg text-white">SOL</span>
<span className="iconify text-gray-400" data-icon="lucide:chevron-down" data-strokeWidth="2" data-width="16"></span>
</div>
<input className="bg-transparent text-right text-2xl font-semibold text-white placeholder-gray-600 focus:outline-none w-full" placeholder="0.00" type="text" value="1"/>
</div>
<div className="flex justify-between mt-2">
<span className="text-xxs text-gray-500">Solana</span>
<span className="text-xs text-gray-500">≈ $145.23</span>
</div>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
<button className="w-10 h-10 bg-[#191E27] border-[4px] border-jup-card rounded-xl flex items-center justify-center text-gray-400 hover:text-jup-accent transition-colors swap-arrow shadow-md">
<span className="iconify" data-icon="lucide:arrow-down" data-strokeWidth="2" data-width="20"></span>
</button>
</div>

<div className="bg-jup-input rounded-xl p-4 border border-transparent hover:border-jup-border transition-colors group focus-within:border-jup-border input-group-focus">
<div className="flex justify-between mb-2">
<span className="text-xs font-medium text-gray-400">To receive</span>
<span className="text-xs font-medium text-gray-400">Balance: 0.00</span>
</div>
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-2 cursor-pointer hover:bg-[#252B36] p-1.5 -ml-1.5 rounded-full pr-3 transition-colors">
<div className="w-7 h-7 rounded-full bg-[#2775CA] overflow-hidden flex items-center justify-center border border-transparent">
<img alt="USDC" className="w-5 h-5 bg-white rounded-full" src="https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=026"/>
</div>
<span className="font-semibold text-lg text-white">USDC</span>
<span className="iconify text-gray-400" data-icon="lucide:chevron-down" data-strokeWidth="2" data-width="16"></span>
</div>
<input className="bg-transparent text-right text-2xl font-semibold text-white placeholder-gray-600 focus:outline-none w-full" placeholder="0.00" readonly="" type="text" value="145.12"/>
</div>
<div className="flex justify-between mt-2">
<span className="text-xxs text-gray-500">USD Coin</span>
<span className="text-xs text-gray-500">≈ $145.12</span>
</div>
</div>
</div>

<div className="mt-4 px-2 space-y-2">
<div className="flex items-center justify-between text-xs text-gray-400">
<span className="flex items-center gap-1 cursor-help">
                        Rate
                    </span>
<span className="flex items-center gap-1">
                        1 SOL ≈ 145.12 USDC
                        <span className="iconify text-gray-500 hover:text-white cursor-pointer" data-icon="lucide:arrow-left-right" data-strokeWidth="2" data-width="12"></span>
</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-400">
<span className="flex items-center gap-1 cursor-help border-b border-dashed border-gray-600 pb-0.5">
                        Price Impact
                    </span>
<span className="text-gray-500">&lt; 0.1%</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-400">
<span className="flex items-center gap-1 cursor-help border-b border-dashed border-gray-600 pb-0.5">
                        Min. Received
                    </span>
<span>144.98 USDC</span>
</div>
</div>

<button className="w-full mt-6 bg-[#C7F284] hover:bg-[#b8e86e] text-[#13171F] font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(199,242,132,0.3)] transition-all duration-300 transform active:scale-[0.99]">
                Connect Wallet
            </button>
</div>

<div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-4xl text-center opacity-80">
<div className="flex flex-col items-center gap-1">
<span className="text-[10px] uppercase tracking-wider font-semibold text-gray-500">Total Volume</span>
<span className="text-sm font-semibold text-white">$124.5B+</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-[10px] uppercase tracking-wider font-semibold text-gray-500">Total Users</span>
<span className="text-sm font-semibold text-white">1.8M+</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-[10px] uppercase tracking-wider font-semibold text-gray-500">Integrated Dexes</span>
<span className="text-sm font-semibold text-white">35+</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-[10px] uppercase tracking-wider font-semibold text-gray-500">Transaction Speed</span>
<span className="text-sm font-semibold text-jup-accent flex items-center gap-1">
<span className="iconify" data-icon="lucide:zap" data-width="12"></span> Ultra Fast
                </span>
</div>
</div>
</main>

<footer className="w-full px-6 py-3 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 border-t border-jup-border/30 bg-[#13171F]/90 backdrop-blur-sm z-40">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-green-500 font-medium">Operational</span>
</div>
<span className="hidden md:inline">v3.0.1</span>
</div>
<div className="flex items-center gap-6 mt-2 md:mt-0">
<a className="hover:text-white transition-colors" href="#">RPC: <span className="text-gray-300">Triton</span></a>
<div className="flex items-center gap-3">
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="14"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:disc" data-width="14"></span></a> 
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="14"></span></a>
</div>
</div>
</footer>

    </>
  );
}
