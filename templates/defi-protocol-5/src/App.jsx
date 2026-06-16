import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
neutral: {
850: '#1f1f1f',
950: '#0a0a0a',
}
},
backgroundImage: {
'glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-lg group-hover:opacity-80 transition-opacity">AETHER</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal hover:text-white transition-colors" href="#features">Protocol</a>
<a className="text-sm font-normal hover:text-white transition-colors" href="#tokenomics">Tokenomics</a>
<a className="text-sm font-normal hover:text-white transition-colors" href="#roadmap">Roadmap</a>
</div>
<button className="group relative px-4 py-2 text-sm text-white font-medium bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all hover:bg-white/10 hover:border-white/20 active:scale-95">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
<span className="flex items-center gap-2">
                    Connect Wallet
                    <iconify-icon icon="solar:wallet-linear" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</button>
</div>
</nav>
<main className="relative pt-32 pb-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 opacity-30 pointer-events-none"></div>

<section className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center mb-32 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                V2 Mainnet Live
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 max-w-4xl leading-[1.1]">
                The liquidity layer for the <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">decentralized economy</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 font-light leading-relaxed">
                Seamlessly aggregate liquidity across chains with zero slippage. Built for institutional-grade performance on a decentralized infrastructure.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                    Launch App
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 border border-neutral-800 text-white rounded-lg font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Read Whitepaper
                </button>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-white/5 w-full max-w-5xl">
<div className="text-center">
<p className="text-3xl font-medium text-white tracking-tight mb-1">$1.2B+</p>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Total Volume</p>
</div>
<div className="text-center">
<p className="text-3xl font-medium text-white tracking-tight mb-1">850k</p>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Transactions</p>
</div>
<div className="text-center">
<p className="text-3xl font-medium text-white tracking-tight mb-1">&lt;0.5s</p>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Latency</p>
</div>
<div className="text-center">
<p className="text-3xl font-medium text-white tracking-tight mb-1">12</p>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Chains</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5" id="features">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Architected for scale</h2>
<p className="text-neutral-400 max-w-xl text-lg font-light">
                    Our protocol leverages zero-knowledge proofs to ensure privacy while maintaining composability across all integrated networks.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl group hover:border-indigo-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3 tracking-tight">Institutional Security</h3>
<p className="text-sm leading-relaxed text-neutral-400">
                        Audited by top-tier firms. Multi-sig governance ensures no single point of failure in the protocol architecture.
                    </p>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-purple-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3 tracking-tight">Flash Execution</h3>
<p className="text-sm leading-relaxed text-neutral-400">
                        Optimistic rollups allow for sub-second finality, providing CEX-like speed on a decentralized substrate.
                    </p>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-pink-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:infinity-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3 tracking-tight">Cross-Chain Yield</h3>
<p className="text-sm leading-relaxed text-neutral-400">
                        Automatically route assets to the highest yielding pools across 12+ EVM and non-EVM chains instantly.
                    </p>
</div>

<div className="md:col-span-3 glass-card p-8 md:p-12 rounded-2xl mt-6 relative overflow-hidden group border-white/5">
<div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-indigo-500/5 to-transparent"></div>
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
<div className="max-w-lg">
<h3 className="text-2xl text-white font-medium mb-4 tracking-tight">Developer SDK &amp; API</h3>
<p className="text-neutral-400 leading-relaxed mb-6">
                                Integrate Aether's liquidity engine into your dApp with just a few lines of code. Full TypeScript support and comprehensive documentation.
                            </p>
<a className="text-white text-sm font-medium border-b border-white/30 hover:border-white pb-0.5 transition-colors" href="#">View Documentation</a>
</div>
<div className="w-full md:w-auto bg-neutral-950/80 rounded-lg border border-white/10 p-4 font-mono text-xs text-neutral-300 shadow-2xl">
<div className="flex gap-1.5 mb-3">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>
<p><span className="text-purple-400">import</span> { Swap } <span className="text-purple-400">from</span> '@aether/sdk';</p>
<p className="mt-2"><span className="text-indigo-400">const</span> tx = <span className="text-purple-400">await</span> Swap.execute({</p>
<p className="pl-4">token: 'ETH',</p>
<p className="pl-4">amount: 1.5,</p>
<p className="pl-4">slippage: 0.1</p>
<p>});</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 relative" id="tokenomics">
<div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Tokenomics</h2>
<p className="text-neutral-400 text-lg font-light mb-8">
                        The $ATHR token is the governance and utility heart of the ecosystem, designed with a deflationary burn mechanism.
                    </p>
<div className="space-y-6">
<div className="flex items-center justify-between p-4 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
<span className="text-white font-medium">Ecosystem Rewards</span>
</div>
<span className="font-mono text-neutral-300">40%</span>
</div>
<div className="flex items-center justify-between p-4 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
<span className="text-white font-medium">Treasury</span>
</div>
<span className="font-mono text-neutral-300">20%</span>
</div>
<div className="flex items-center justify-between p-4 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
<span className="text-white font-medium">Team (Vested 4yrs)</span>
</div>
<span className="font-mono text-neutral-300">15%</span>
</div>
<div className="flex items-center justify-between p-4 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
<span className="text-white font-medium">Public Sale</span>
</div>
<span className="font-mono text-neutral-300">15%</span>
</div>
<div className="flex items-center justify-between p-4 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
<span className="text-white font-medium">Airdrop</span>
</div>
<span className="font-mono text-neutral-300">10%</span>
</div>
</div>
</div>
<div className="relative h-[400px] w-full flex items-center justify-center">

<div className="relative w-64 h-64">
<div className="absolute inset-0 rounded-full border-[32px] border-indigo-500/20 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-0 rounded-full border-t-[32px] border-indigo-500 rotate-45 transform"></div>
<div className="absolute inset-0 rounded-full border-r-[32px] border-purple-500 rotate-180 transform opacity-80"></div>
<div className="absolute inset-0 rounded-full border-l-[32px] border-pink-500 -rotate-90 transform opacity-60"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-1">Total Supply</span>
<span className="text-3xl font-bold text-white tracking-tight">100M</span>
</div>
</div>

<div className="absolute top-10 right-0 glass-card p-3 rounded-lg flex items-center gap-3 animate-bounce shadow-lg">
<div className="bg-indigo-500/20 p-1.5 rounded text-indigo-400">
<iconify-icon icon="solar:flame-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-[10px] text-neutral-400 uppercase">Burn Rate</p>
<p className="text-xs text-white font-medium">2.5% / Tx</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24" id="roadmap">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Roadmap to Decentralization</h2>
<p className="text-neutral-400">Our strategic path towards a fully community-governed protocol.</p>
</div>
<div className="relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-1/2"></div>

<div className="relative z-10 flex flex-col md:flex-row gap-8 mb-16 group">
<div className="md:w-1/2 md:text-right pt-2 order-2 md:order-1 px-12 md:px-0">
<span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-3 border border-indigo-500/20">Phase 1</span>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Foundation</h3>
<p className="text-sm text-neutral-400">Protocol architecture design, Smart contract audits, Seed round funding, and Alpha release.</p>
</div>
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-neutral-950 border-4 border-indigo-900 flex items-center justify-center order-1 md:order-2">
<div className="w-2.5 h-2.5 bg-indigo-500 rounded-full"></div>
</div>
<div className="md:w-1/2 order-3"></div>
</div>

<div className="relative z-10 flex flex-col md:flex-row gap-8 mb-16 group">
<div className="md:w-1/2 order-2 md:order-1"></div>
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-neutral-950 border-4 border-white/10 flex items-center justify-center order-1 md:order-2 group-hover:border-purple-900 transition-colors">
<div className="w-2.5 h-2.5 bg-white/20 rounded-full group-hover:bg-purple-500 transition-colors"></div>
</div>
<div className="md:w-1/2 pt-2 order-3 px-12 md:px-0">
<span className="inline-block px-3 py-1 rounded-full bg-white/5 text-neutral-300 text-xs font-medium mb-3 border border-white/10">Phase 2 (Current)</span>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Expansion</h3>
<p className="text-sm text-neutral-400">Public Token Generation Event, Beta Mainnet launch, CEX listings, and first governance vote.</p>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row gap-8 mb-16 group">
<div className="md:w-1/2 md:text-right pt-2 order-2 md:order-1 px-12 md:px-0">
<span className="inline-block px-3 py-1 rounded-full bg-white/5 text-neutral-500 text-xs font-medium mb-3 border border-white/5">Phase 3</span>
<h3 className="text-xl text-neutral-300 font-medium mb-2 tracking-tight">Scaling</h3>
<p className="text-sm text-neutral-500">Cross-chain bridge integration, Mobile wallet launch, L2 Scaling solutions.</p>
</div>
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-neutral-950 border-4 border-white/5 flex items-center justify-center order-1 md:order-2">
<div className="w-2.5 h-2.5 bg-white/10 rounded-full"></div>
</div>
<div className="md:w-1/2 order-3"></div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-24">
<div className="glass-card rounded-3xl p-12 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to start your journey?</h2>
<p className="text-neutral-400 mb-10 max-w-lg mx-auto font-light">Join thousands of users leveraging Aether for the next generation of DeFi.</p>
<button className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform duration-200">
                        Connect Wallet Now
                    </button>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 bg-neutral-950 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs">
<iconify-icon icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight">AETHER</span>
</div>
<p className="text-sm text-neutral-500 mb-6">Building the decentralized future, one block at a time.</p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-discord-linear" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Protocol</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Governance</a></li>
<li><a className="hover:text-white transition-colors" href="#">Tokenomics</a></li>
<li><a className="hover:text-white transition-colors" href="#">Bug Bounty</a></li>
<li><a className="hover:text-white transition-colors" href="#">Developers</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Brand Assets</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Newsletter</h4>
<div className="flex flex-col gap-3">
<input className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors w-full placeholder:text-neutral-600" placeholder="Enter email" type="email"/>
<button className="bg-indigo-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-indigo-500 transition-colors w-full">Subscribe</button>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-600">© 2024 Aether Protocol. All rights reserved.</p>
<div className="flex gap-6 text-xs text-neutral-600">
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
