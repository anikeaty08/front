import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
zinc: {
850: '#1f1f22',
950: '#0a0a0c', // Darker background
}
},
animation: {
'flow': 'flow 1.5s linear infinite',
'beam': 'beam 4s linear infinite',
},
keyframes: {
flow: {
'0%': { strokeDashoffset: '20' },
'100%': { strokeDashoffset: '0' },
},
beam: {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(100%)' }
}
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="text-center mb-12 max-w-2xl mx-auto space-y-3 z-10 relative">
<h1 className="text-2xl md:text-3xl font-medium tracking-tight text-white">ECOSYSTEM ARCHITECTURE</h1>
<p className="text-sm md:text-base text-zinc-500">How value flows securely between <span className="text-blue-400">Earn</span> and <span className="text-indigo-400">Borrow</span> users</p>
</div>

<div className="relative w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">


<svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block overflow-visible" style={{zIndex: '0'}}>

<defs>
<marker id="arrow-blue" markerheight="6" markerwidth="6" orient="auto" refx="4" refy="3">
<path d="M0,0 L6,3 L0,6" fill="#3b82f6"></path>
</marker>
<marker id="arrow-indigo" markerheight="6" markerwidth="6" orient="auto" refx="4" refy="3">
<path d="M0,0 L6,3 L0,6" fill="#8b5cf6"></path>
</marker>
</defs>
</svg>

<div className="flex flex-col items-center space-y-6 relative z-10">

<div className="glass-card w-full p-5 rounded-xl border-zinc-800 flex flex-col items-center text-center group transition-colors hover:border-blue-500/30">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-3 text-blue-400">
<i className="w-5 h-5" data-lucide="user"></i>
</div>
<h3 className="text-sm font-medium text-white tracking-tight">EARN USER</h3>
<p className="text-xs text-zinc-500 mt-1">Deposits USDT</p>
</div>

<div className="h-8 w-[1px] bg-gradient-to-b from-zinc-800 to-blue-900/50"></div>

<div className="bg-zinc-900/80 border border-zinc-800 px-4 py-1.5 rounded-full text-xs font-mono text-zinc-300 shadow-sm flex items-center gap-2">
<i className="w-3 h-3 text-blue-500" data-lucide="arrow-down"></i>
                Deposits USDT
            </div>

<div className="h-8 w-[1px] bg-gradient-to-b from-blue-900/50 to-zinc-800"></div>
</div>

<div className="flex flex-col items-center space-y-6 relative z-10">

<div className="glass-card w-full p-5 rounded-xl border-zinc-800 flex flex-col items-center text-center group transition-colors hover:border-indigo-500/30">
<div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center mb-3 text-indigo-400">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h3 className="text-sm font-medium text-white tracking-tight">BORROW USER</h3>
<p className="text-xs text-zinc-500 mt-1">Deposits Collateral</p>
</div>

<div className="h-8 w-[1px] bg-gradient-to-b from-zinc-800 to-indigo-900/50"></div>

<div className="bg-zinc-900/80 border border-zinc-800 px-4 py-1.5 rounded-full text-xs font-mono text-zinc-300 shadow-sm flex items-center gap-2">
<i className="w-3 h-3 text-indigo-500" data-lucide="arrow-down"></i>
                Deposits Collateral
            </div>

<div className="h-8 w-[1px] bg-gradient-to-b from-indigo-900/50 to-zinc-800"></div>
</div>

<div className="md:col-span-2 relative">

<div className="glass-card border-beam-container rounded-2xl p-6 md:p-8 relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

<div className="text-center mb-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700/50 mb-2">
<i className="w-3 h-3 text-emerald-400" data-lucide="cpu"></i>
<span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">Protocol Layer</span>
</div>
<h2 className="text-lg font-medium text-white tracking-tight">GROWMAX PROTOCOL</h2>
<p className="text-xs text-zinc-500 font-mono mt-1">(On-chain smart contracts &amp; rules)</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">

<div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-5 flex flex-col justify-between relative group">
<div className="absolute -inset-px bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none"></div>
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Earn Pool</h4>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-xs">
<i className="w-3 h-3 text-blue-500" data-lucide="check"></i>
<span><span className="text-blue-300 font-mono">12%-18% APY</span> <span className="text-zinc-600">(by plan)</span></span>
</li>
<li className="flex items-center gap-2 text-xs">
<i className="w-3 h-3 text-blue-500" data-lucide="check"></i>
<span>USDT liquidity</span>
</li>
</ul>
</div>

<div className="hidden md:block absolute -bottom-4 left-1/2 w-px h-8 bg-zinc-800"></div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-5 flex flex-col justify-between relative group">
<div className="absolute -inset-px bg-gradient-to-b from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none"></div>
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
<h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Lending Engine</h4>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-xs">
<i className="w-3 h-3 text-indigo-500" data-lucide="check"></i>
<span>Up to <span className="text-indigo-300 font-mono">50% LTV</span></span>
</li>
<li className="flex items-center gap-2 text-xs">
<i className="w-3 h-3 text-indigo-500" data-lucide="lock"></i>
<span>Collateral locked</span>
</li>
</ul>
</div>

<div className="hidden md:block absolute -bottom-4 left-1/2 w-px h-8 bg-zinc-800"></div>
</div>
</div>


<div className="relative mt-8 h-12 hidden md:block">

<svg className="absolute inset-0 w-full h-full overflow-visible">

<path className="connector-line" d="M 205 0 L 205 20 L 630 20 L 630 40" fill="none" stroke="#27272a" strokeWidth="1.5"></path>

<path className="connector-active" d="M 205 0 L 205 20 L 630 20 L 630 40" fill="none"></path>

<foreignobject height="30" width="200" x="300" y="8">
<div className="bg-black/80 backdrop-blur px-2 py-0.5 border border-zinc-800 rounded text-[10px] text-zinc-400 text-center font-mono w-fit mx-auto">
                                USDT loan issued →
                            </div>
</foreignobject>
</svg>
</div>
</div>

<div className="md:hidden flex flex-col items-center py-4">
<div className="h-8 w-px bg-zinc-800"></div>
<div className="bg-zinc-900 border border-zinc-800 text-[10px] px-3 py-1 rounded-full text-zinc-400">USDT Loan Issued</div>
<div className="h-8 w-px bg-zinc-800"></div>
</div>
</div>


<div className="hidden md:block"></div>

<div className="flex flex-col items-center -mt-4 md:-mt-8 relative z-10">
<div className="h-8 w-[1px] bg-gradient-to-b from-zinc-800 to-emerald-900/50"></div>
<div className="bg-zinc-900/90 border border-emerald-500/20 px-5 py-2 rounded-full text-xs font-mono text-emerald-400 shadow-[0_0_15px_-3px_rgba(16,185,129,0.2)] flex items-center gap-2">
<i className="w-3 h-3" data-lucide="wallet"></i>
                [ Receives USDT loan ]
            </div>
<div className="h-12 w-[1px] bg-gradient-to-b from-emerald-900/50 to-zinc-800"></div>
</div>

<div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">

<div className="relative">
<div className="absolute -top-12 left-1/2 -translate-x-1/2 h-12 w-px bg-zinc-800 hidden md:block"></div>
<div className="glass-card p-6 rounded-xl border-zinc-800 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-200">Earns yield (daily)</h3>
<p className="text-xs text-blue-400 mt-1 flex items-center gap-1">
                                 Yield paid out
                                 <i className="w-3 h-3" data-lucide="trending-up"></i>
</p>
</div>
<div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-500">
<i className="w-4 h-4" data-lucide="coins"></i>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="glass-card p-6 rounded-xl border-zinc-800 relative overflow-hidden">
<div className="absolute top-0 right-0 w-1 h-full bg-indigo-500"></div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-200">Repay + interest</h3>
<p className="text-xs text-indigo-400 mt-1 flex items-center gap-1">
                                Collateral unlocked
                                <i className="w-3 h-3" data-lucide="unlock"></i>
</p>
</div>
<div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-500">
<i className="w-4 h-4" data-lucide="refresh-cw"></i>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 text-center max-w-lg mx-auto px-6">
<p className="text-xs text-zinc-600 font-mono border-t border-zinc-900 pt-6">
            Yield source: Borrower interest <span className="text-zinc-500">→</span> distributed to Earn users <span className="text-blue-500/80">(by plan terms)</span>
</p>
</div>


    </>
  );
}
