import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
binance: '#F0B90B',
eth: '#627EEA',
trump: '#FF4D4D',
aave: '#B6509E'
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
      

<nav className="w-full border-b border-white/5 bg-black/80 backdrop-blur-xl sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white/10 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-white text-lg" icon="solar:cup-star-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-white tracking-tight">TokenInsight</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium">
<a className="text-white hover:text-slate-300 transition-colors" href="#">Awards</a>
<a className="hover:text-white transition-colors" href="#">Methodology</a>
<a className="hover:text-white transition-colors" href="#">Winners</a>
</div>
<button className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 text-sm font-medium transition-colors flex items-center gap-2">
<span>Read Report</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-24 pb-20 px-6 max-w-7xl mx-auto text-center z-10">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-500/10 to-purple-500/0 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium uppercase tracking-wide">Winners Announced</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 text-glow">
            Crypto Awards 2025
        </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Recognizing the protocols, tokens, and exchanges defining the future of decentralized value.
        </p>
</header>

<main className="max-w-[1400px] mx-auto px-6 pb-32">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group relative flex flex-col h-[520px] overflow-hidden rounded-2xl glass-panel card-hover transition-all duration-300" href="#">
<div className="p-6 relative z-20">
<div className="flex items-center justify-between mb-2">
<h3 className="text-brand-binance text-xs font-semibold tracking-wider uppercase">Exchange</h3>
<iconify-icon className="text-slate-500 text-lg" icon="solar:chart-2-linear"></iconify-icon>
</div>
<div className="text-xl font-medium text-white tracking-tight">Best Global Exchange</div>
</div>

<div className="flex-1 relative w-full overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-binance/5"></div>

<div className="relative w-48 h-48 animate-float">

<div className="absolute inset-0 border-b border-r border-white/5"></div>
<div className="absolute bottom-1/4 w-full h-[1px] bg-white/5"></div>
<div className="absolute bottom-2/4 w-full h-[1px] bg-white/5"></div>
<div className="absolute left-1/4 h-full w-[1px] bg-white/5"></div>

<div className="absolute bottom-10 left-8 w-4 h-16 bg-white/5 rounded-sm"></div>
<div className="absolute bottom-20 left-16 w-4 h-12 bg-white/10 rounded-sm"></div>
<div className="absolute bottom-16 left-24 w-4 h-24 bg-brand-binance/80 rounded-sm shadow-[0_0_20px_rgba(240,185,11,0.4)] ring-1 ring-brand-binance"></div>
<div className="absolute top-10 right-10 w-4 h-8 bg-white/5 rounded-sm"></div>

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none">
<path className="opacity-50" d="M0,150 C50,150 50,100 100,100 C150,100 150,50 200,50" fill="none" stroke="#F0B90B" strokeWidth="2"></path>
<circle className="animate-pulse" cx="200" cy="50" fill="#F0B90B" r="3"></circle>
</svg>
</div>
</div>
<div className="p-6 relative z-20 border-t border-white/5 bg-black/40 backdrop-blur-md">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-brand-binance text-lg" icon="solar:cup-first-linear"></iconify-icon>
<span className="text-brand-binance/90 font-medium text-sm">Winner</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-brand-binance text-3xl" icon="simple-icons:binance"></iconify-icon>
<div className="text-3xl font-semibold text-white tracking-tight">Binance</div>
</div>
</div>
</a>

<a className="group relative flex flex-col h-[520px] overflow-hidden rounded-2xl glass-panel card-hover transition-all duration-300" href="#">
<div className="p-6 relative z-20">
<div className="flex items-center justify-between mb-2">
<h3 className="text-brand-eth text-xs font-semibold tracking-wider uppercase">Public Chain</h3>
<iconify-icon className="text-slate-500 text-lg" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<div className="text-xl font-medium text-white tracking-tight">Layer-1 Award</div>
</div>

<div className="flex-1 relative w-full overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-eth/5"></div>
<div className="relative w-40 h-40 animate-float-delayed">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-20 border border-white/10 bg-white/5 rounded-lg transform rotate-x-12 scale-90 z-0"></div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-20 border border-white/20 bg-brand-eth/10 rounded-lg transform rotate-x-12 backdrop-blur-sm z-10 transition-transform group-hover:bottom-10 duration-500"></div>

<div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-32 h-20 border border-brand-eth/50 bg-brand-eth/20 rounded-lg transform rotate-x-12 backdrop-blur-md shadow-[0_0_30px_rgba(98,126,234,0.3)] z-20 transition-transform group-hover:bottom-20 duration-500 flex items-center justify-center">
<div className="w-8 h-8 rounded-full border border-brand-eth/50 flex items-center justify-center">
<div className="w-2 h-2 bg-brand-eth rounded-full animate-pulse"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 w-[1px] h-20 bg-gradient-to-t from-brand-eth to-transparent -translate-x-1/2 opacity-50"></div>
</div>
</div>
<div className="p-6 relative z-20 border-t border-white/5 bg-black/40 backdrop-blur-md">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-brand-eth text-lg" icon="solar:cup-first-linear"></iconify-icon>
<span className="text-brand-eth/90 font-medium text-sm">Winner</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-brand-eth text-3xl" icon="simple-icons:ethereum"></iconify-icon>
<div className="text-3xl font-semibold text-white tracking-tight">Ethereum</div>
</div>
</div>
</a>

<a className="group relative flex flex-col h-[520px] overflow-hidden rounded-2xl glass-panel card-hover transition-all duration-300" href="#">
<div className="p-6 relative z-20">
<div className="flex items-center justify-between mb-2">
<h3 className="text-brand-trump text-xs font-semibold tracking-wider uppercase">Token</h3>
<iconify-icon className="text-slate-500 text-lg" icon="solar:star-circle-linear"></iconify-icon>
</div>
<div className="text-xl font-medium text-white tracking-tight">Token Award</div>
</div>

<div className="flex-1 relative w-full overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-trump/5"></div>
<div className="relative w-full h-full flex items-center justify-center">

<div className="absolute w-48 h-48 border border-white/5 rounded-full opacity-50 rotate-45 group-hover:rotate-90 transition-transform duration-[2s]"></div>
<div className="absolute w-32 h-32 border border-brand-trump/20 rounded-full opacity-50"></div>

<div className="relative z-10 animate-float">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-trump/20 to-transparent border border-brand-trump/50 flex items-center justify-center backdrop-blur-sm shadow-[0_0_40px_rgba(255,77,77,0.25)]">
<iconify-icon className="text-brand-trump text-3xl" icon="solar:flag-bold"></iconify-icon>
</div>

<div className="absolute -right-4 -top-4 w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center">
<iconify-icon className="text-brand-trump text-sm" icon="solar:graph-up-linear"></iconify-icon>
</div>
</div>

<div className="absolute w-1 h-1 bg-brand-trump rounded-full top-1/4 left-1/4 animate-pulse"></div>
<div className="absolute w-1 h-1 bg-white rounded-full bottom-1/3 right-1/4 animate-pulse" style={{animationDelay: '0.5s'}}></div>
</div>
</div>
<div className="p-6 relative z-20 border-t border-white/5 bg-black/40 backdrop-blur-md">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-brand-trump text-lg" icon="solar:cup-first-linear"></iconify-icon>
<span className="text-brand-trump/90 font-medium text-sm">Winner</span>
</div>
<div className="flex items-center gap-3">

<iconify-icon className="text-brand-trump text-3xl" icon="fa6-solid:flag-usa"></iconify-icon>
<div className="text-3xl font-semibold text-white tracking-tight">Trump</div>
</div>
</div>
</a>

<a className="group relative flex flex-col h-[520px] overflow-hidden rounded-2xl glass-panel card-hover transition-all duration-300" href="#">
<div className="p-6 relative z-20">
<div className="flex items-center justify-between mb-2">
<h3 className="text-brand-aave text-xs font-semibold tracking-wider uppercase">DeFi</h3>
<iconify-icon className="text-slate-500 text-lg" icon="solar:ghost-smile-linear"></iconify-icon>
</div>
<div className="text-xl font-medium text-white tracking-tight">Liquidity Award</div>
</div>

<div className="flex-1 relative w-full overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-aave/5"></div>
<div className="relative w-40 h-40">

<div className="absolute top-0 right-0 w-24 h-24 bg-brand-aave/20 rounded-full blur-xl animate-float-delayed"></div>
<div className="absolute bottom-0 left-0 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-float"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-24 h-24 rounded-2xl border border-brand-aave/30 bg-white/5 backdrop-blur-md flex items-center justify-center transform rotate-3 group-hover:rotate-0 transition-all duration-500 shadow-[0_0_30px_rgba(182,80,158,0.2)]">
<iconify-icon className="text-brand-aave text-4xl" icon="solar:ghost-linear"></iconify-icon>
</div>
</div>

<div className="absolute -top-4 left-1/2 w-px h-8 bg-brand-aave/30"></div>
<div className="absolute -bottom-4 left-1/2 w-px h-8 bg-brand-aave/30"></div>
<div className="absolute top-1/2 -left-4 w-8 h-px bg-brand-aave/30"></div>
<div className="absolute top-1/2 -right-4 w-8 h-px bg-brand-aave/30"></div>
</div>
</div>
<div className="p-6 relative z-20 border-t border-white/5 bg-black/40 backdrop-blur-md">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-brand-aave text-lg" icon="solar:cup-first-linear"></iconify-icon>
<span className="text-brand-aave/90 font-medium text-sm">Winner</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-brand-aave text-3xl" icon="simple-icons:aave"></iconify-icon>
<div className="text-3xl font-semibold text-white tracking-tight">Aave</div>
</div>
</div>
</a>
</div>
</main>

<footer className="border-t border-white/5 mt-auto bg-black/50">
<div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-slate-500 text-sm">
<span>© 2025 TokenInsight.</span>
<span className="hidden md:inline text-slate-700">|</span>
<span className="hidden md:inline">Data driven crypto ratings.</span>
</div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="ri:twitter-x-line" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="ri:github-line" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="ri:linkedin-line" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
