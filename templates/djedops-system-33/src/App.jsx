import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
// Replaced Cyan with Neon Lime Green Palette
lime: {
300: '#8CFF75',
400: '#39FF14', // Neon Terminal Green
500: '#2ECC10',
900: '#0D2605',
950: '#051102',
},
red: {
500: '#FF2A2A',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
display: ['Unbounded', 'cursive'], // New Font
}
}
}
}



        // Real-time block height simulation
        let currentBlock = 1204550;
        const blockDisplay = document.getElementById('block-height');
        
        setInterval(() => {
            currentBlock++;
            blockDisplay.textContent = `BLOCK: ${currentBlock.toLocaleString()}`;
            // Add a flash effect (green)
            blockDisplay.classList.add('text-lime-50', 'bg-lime-900/40');
            setTimeout(() => {
                blockDisplay.classList.remove('text-lime-50', 'bg-lime-900/40');
            }, 500);
        }, 8000); // New block every 8 seconds

        // Reserve Ratio Count-up Animation
        const targetRatio = 405;
        let currentRatio = 0;
        const ratioDisplay = document.getElementById('reserve-ratio');
        
        const countUp = setInterval(() => {
            currentRatio += 5;
            if (currentRatio >= targetRatio) {
                currentRatio = targetRatio;
                clearInterval(countUp);
            }
            ratioDisplay.textContent = `${currentRatio}%`;
        }, 20);

        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#050505] tech-grid"></div>

<div className="page-scanline"></div>

<div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-lime-900/10 blur-[120px] rounded-full mix-blend-screen opacity-50"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-lime-900/5 blur-[100px] rounded-full mix-blend-screen"></div>
</div>

<div className="grain-overlay"></div>

<nav className="fixed z-50 md:px-12 flex w-full pt-6 pr-6 pb-6 pl-6 top-0 items-center justify-between border-b border-white/5 backdrop-blur-md bg-[#050505]/70">

<div className="hidden md:flex flex-col items-start gap-1">
<div className="flex items-center gap-3">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400 shadow-[0_0_10px_#39FF14]"></span>
</span>
<span className="text-xs uppercase tracking-[0.2em] text-lime-400 font-mono font-bold">System Online</span>
</div>
<span className="text-[10px] text-neutral-500 font-mono pl-5 tracking-wide">UPTIME: 99.99%</span>
</div>

<div className="hidden md:flex flex-col items-center">
<span className="text-xs text-lime-200/80 font-mono tracking-widest border border-lime-900/30 bg-lime-900/10 px-3 py-1 rounded-sm" id="block-height">BLOCK: 1,204,550</span>
</div>

<button className="md:hidden text-white">
<span className="w-6 h-6" data-lucide="menu"></span>
</button>

<a className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-neutral-700 bg-neutral-900/50 hover:bg-neutral-800 hover:border-lime-500/50 transition-all duration-300 group backdrop-blur-sm" href="#">
<span className="w-3 h-3 text-lime-400" data-lucide="wallet"></span>
<span className="text-xs uppercase tracking-widest font-medium text-white">Connect Wallet</span>
<span className="w-3 h-3 text-neutral-500 group-hover:text-lime-400 transition-colors" data-lucide="chevron-right"></span>
</a>
</nav>

<main className="min-h-screen flex flex-col w-full z-10 pt-28 pb-8 relative justify-between">
<div className="container md:px-12 flex flex-col flex-grow h-full mr-auto ml-auto pr-6 pl-6 relative justify-between">

<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-8 md:mt-16">

<div className="md:col-span-8 relative z-20">
<div className="flex flex-col select-none glitch-wrapper cursor-default">
<h1 className="font-display text-[10vw] leading-[0.85] font-black tracking-tight text-white uppercase relative z-20 group">
<span className="glitch-text block md:inline">DJED</span>

<span className="text-hollow md:ml-4 block md:inline glitch-text-hollow">OPS</span>
</h1>
</div>
<div className="flex items-center gap-4 mt-8 ml-2">
<span className="text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase text-lime-400 border border-lime-500/30 px-3 py-1.5 rounded bg-lime-950/20 backdrop-blur-sm">Stability + Resilience</span>
<div className="h-[1px] w-24 bg-gradient-to-r from-lime-900 to-transparent"></div>
</div>
</div>

<div className="md:col-span-4 h-[300px] md:h-[400px] relative flex items-center justify-center wireframe-container">

<div className="sphere-wrapper flex items-center justify-center">
<div className="w-[280px] h-[280px] md:w-[340px] md:h-[340px] wireframe-sphere flex items-center justify-center">
<div className="absolute inset-0 bg-lime-400/5 rounded-full blur-3xl"></div>
<span className="font-mono text-[10px] text-lime-400 tracking-widest opacity-80 animate-pulse bg-black/50 px-2 py-1">RESERVE_SUN</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 w-full pb-8 gap-x-8 gap-y-12 items-end mt-12 md:mt-0">

<div className="md:col-span-6 relative">

<div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-lime-500/50 via-lime-900/20 to-transparent hidden md:block"></div>
<div className="mb-6">
<h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight mb-1 flex items-center gap-3">
                            System Status: <span className="text-lime-400 text-glow">NORMAL</span>
</h2>
<p className="font-mono text-sm text-neutral-500 tracking-wide">
                            Peg Variance: <span className="text-white">0.00%</span>
</p>
</div>

<div className="relative group p-2 mb-8">

<div className="corner-bracket cb-tl"></div>
<div className="corner-bracket cb-tr"></div>
<div className="corner-bracket cb-bl"></div>
<div className="corner-bracket cb-br"></div>
<div className="bg-[#0A0A0A] border border-white/5 rounded-sm p-1 grid grid-cols-1 gap-[1px] backdrop-blur-sm relative z-10">

<div className="bg-[#080808] p-4 flex justify-between items-center hover:bg-[#0c0c0c] transition-colors border-b border-white/5">
<span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Reserve Ratio</span>
<span className="font-mono text-lime-400 font-bold text-lg" id="reserve-ratio">0%</span>
</div>

<div className="bg-[#080808] p-4 flex justify-between items-center hover:bg-[#0c0c0c] transition-colors border-b border-white/5">
<span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Base Reserves</span>
<span className="font-mono text-white">12.5M ERG</span>
</div>

<div className="bg-[#080808] p-4 flex justify-between items-center hover:bg-[#0c0c0c] transition-colors">
<span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Oracle Price</span>
<span className="font-mono text-white">$1.45 USD</span>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-flex justify-center items-center gap-2 px-8 py-3 bg-lime-500/10 border border-lime-500/50 text-lime-400 hover:bg-lime-400 hover:text-black rounded-sm text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(57,255,20,0.1)] hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]">
<span className="w-3 h-3" data-lucide="play"></span>
                            Launch Simulation
                        </button>
<button className="inline-flex justify-center items-center gap-2 px-8 py-3 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 rounded-sm text-xs font-mono font-bold uppercase tracking-widest transition-colors">
<span className="w-3 h-3" data-lucide="file-code"></span>
                            View Contract
                        </button>
</div>
</div>

<div className="hidden md:block md:col-span-2"></div>

<div className="md:col-span-4 flex flex-col justify-end">
<div className="border-t border-neutral-800 pt-6">
<div className="flex items-center gap-4 mb-3">
<div className="flex gap-2">

<div className="w-2 h-2 rounded-full bg-lime-500 dot-seq d1"></div>
<div className="w-2 h-2 rounded-full bg-lime-500 dot-seq d2"></div>
<div className="w-2 h-2 rounded-full bg-lime-500 dot-seq d3"></div>
<div className="w-2 h-2 rounded-full bg-lime-500 dot-seq d4"></div>
<div className="w-2 h-2 rounded-full bg-lime-500 dot-seq d5"></div>
<div className="w-2 h-2 rounded-full bg-lime-500 dot-seq d6"></div>
</div>
<span className="font-mono text-xs text-white">Active Oracles: 6/6</span>
</div>
<span className="text-[10px] text-neutral-600 font-mono uppercase tracking-[0.2em]">Operational Nodes</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-0 w-full px-6 md:px-12 flex justify-between pointer-events-none mix-blend-overlay">
<span className="font-mono text-[9px] text-neutral-600 tracking-[0.5em] uppercase">SYS.V.4.2</span>
<span className="font-mono text-[9px] text-neutral-600 tracking-[0.5em] uppercase">LATENCY: 12ms</span>
</div>
</main>

<section className="py-24 relative z-10 border-t border-white/5 bg-[#050505]">
<div className="container mx-auto px-6 md:px-12">
<div className="max-w-4xl mx-auto text-center">
<span className="text-xs font-mono text-lime-400 mb-6 block tracking-widest uppercase">System Diagnostics</span>
<h2 className="text-3xl md:text-5xl font-display font-semibold text-white tracking-tight mb-6">
                    Autonomous Stability <br/> <span className="text-neutral-600">In a Volatile Environment.</span>
</h2>
<h3 className="text-lg text-neutral-400 font-light mb-12 font-mono">Algorithmic adjustments executing every block.</h3>
<div className="grid md:grid-cols-2 gap-8 text-left mt-16 max-w-4xl mx-auto bg-neutral-900/20 p-1 rounded-sm border border-white/5 backdrop-blur-sm">

<div className="bg-[#080808] p-8 border border-white/5 hover:border-red-500/30 transition-colors group">
<div className="flex items-center gap-3 mb-4 text-red-500/80">
<span className="w-5 h-5" data-lucide="alert-triangle"></span>
<span className="text-xs font-mono uppercase tracking-wider">Critical Threshold</span>
</div>
<p className="text-neutral-400 leading-relaxed text-sm font-mono">
                            &gt; MONITORING RESERVE RATIO<br/>
                            &gt; IF RATIO &lt; 400% THEN<br/>
                            &gt; EXECUTE: BLOCK_MINTING<br/>
                            &gt; STATUS: <span className="text-red-500">INACTIVE</span>
</p>
</div>

<div className="bg-[#080808] p-8 border border-white/5 hover:border-lime-500/30 transition-colors group">
<div className="flex items-center gap-3 mb-4 text-lime-400/80">
<span className="w-5 h-5" data-lucide="shield-check"></span>
<span className="text-xs font-mono uppercase tracking-wider">Stability Protocol</span>
</div>
<p className="text-neutral-400 leading-relaxed text-sm font-mono">
                            &gt; PEGGED TOKEN MINTING<br/>
                            &gt; COLLATERAL CHECK: PASS<br/>
                            &gt; ORACLE FEED: SYNCED<br/>
                            &gt; STATUS: <span className="text-lime-400">OPERATIONAL</span>
</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-neutral-900/5 border-t border-white/5">
<div className="container mx-auto px-6 md:px-12">
<div className="mb-16 md:mb-24 max-w-2xl">
<span className="text-xs font-mono text-lime-400 mb-4 block tracking-widest uppercase">Protocol Architecture</span>
<h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white mb-4">Core Mechanism.</h2>
<p className="text-lg font-light text-neutral-500 font-mono">Formal verification meets economic game theory.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-sm border border-neutral-800 bg-[#080808] hover:border-lime-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[2px] bg-lime-400/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-sm bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-lime-400 group-hover:text-white transition-colors">
<span className="w-5 h-5" data-lucide="cpu"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-3 tracking-tight font-display">Smart Contract Core</h3>
<p className="text-neutral-400 text-xs leading-relaxed font-mono">
                        Verified Scala code running on UTXO model. Deterministic execution ensuring reserve integrity.
                    </p>
</div>

<div className="group relative p-8 rounded-sm border border-neutral-800 bg-[#080808] hover:border-lime-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[2px] bg-lime-400/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-sm bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-lime-400 group-hover:text-white transition-colors">
<span className="w-5 h-5" data-lucide="database"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-3 tracking-tight font-display">Oracle Aggregation</h3>
<p className="text-neutral-400 text-xs leading-relaxed font-mono">
                        Tier 2 Data Pools. Six independent nodes providing price feeds with medianizer logic to prevent manipulation.
                    </p>
</div>

<div className="group relative p-8 rounded-sm border border-neutral-800 bg-[#080808] hover:border-lime-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[2px] bg-lime-400/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-sm bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-lime-400 group-hover:text-white transition-colors">
<span className="w-5 h-5" data-lucide="lock"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-3 tracking-tight font-display">Liquidity Lock</h3>
<p className="text-neutral-400 text-xs leading-relaxed font-mono">
                        Reserve coins (Shen) absorb volatility. Base coins (Djed) maintain 1:1 peg through over-collateralization.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#030303] z-10 pt-24 pb-24 relative border-t border-white/5">
<div className="container md:px-12 mr-auto ml-auto pr-6 pl-6">
<div className="mb-12 flex flex-col md:flex-row justify-between items-end">
<div>
<span className="text-xs font-mono text-lime-400 mb-4 block tracking-widest uppercase">Live Feed</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white font-display">Transaction Log.</h2>
</div>
<div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mt-4 md:mt-0">
<span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></span>
                    SYNCING MEMPOOL
                </div>
</div>

<div className="w-full bg-[#080808] border border-neutral-800 rounded-sm overflow-hidden font-mono text-xs md:text-sm shadow-[0_0_20px_rgba(0,0,0,0.5)]">
<div className="bg-neutral-900/50 border-b border-neutral-800 p-3 flex gap-4 text-neutral-500 uppercase tracking-widest text-[10px]">
<span className="w-24">Tx ID</span>
<span className="w-24">Type</span>
<span className="flex-grow">Details</span>
<span className="w-24 text-right">Age</span>
</div>

<div className="p-4 border-b border-white/5 flex flex-col md:flex-row gap-2 md:gap-4 hover:bg-lime-900/10 transition-colors cursor-pointer group">
<span className="text-neutral-500 w-24">0x4a...9f</span>
<span className="text-lime-400 w-24 group-hover:text-lime-300">MINT_DJED</span>
<span className="text-neutral-300 flex-grow">Input: 1,500 ERG -&gt; Output: 2,175 DJED</span>
<span className="text-neutral-500 w-24 text-right">12s ago</span>
</div>

<div className="p-4 border-b border-white/5 flex flex-col md:flex-row gap-2 md:gap-4 hover:bg-lime-900/10 transition-colors cursor-pointer group">
<span className="text-neutral-500 w-24">0x8b...2c</span>
<span className="text-purple-400 w-24 group-hover:text-purple-300">MINT_SHEN</span>
<span className="text-neutral-300 flex-grow">Input: 5,000 ERG -&gt; Output: 4,200 SHEN</span>
<span className="text-neutral-500 w-24 text-right">45s ago</span>
</div>

<div className="p-4 border-b border-white/5 flex flex-col md:flex-row gap-2 md:gap-4 hover:bg-lime-900/10 transition-colors cursor-pointer group">
<span className="text-neutral-500 w-24">0x1c...aa</span>
<span className="text-lime-400 w-24 group-hover:text-lime-300">REDEEM_DJED</span>
<span className="text-neutral-300 flex-grow">Input: 500 DJED -&gt; Output: 344 ERG</span>
<span className="text-neutral-500 w-24 text-right">1m 12s ago</span>
</div>

<div className="p-4 flex flex-col md:flex-row gap-2 md:gap-4 hover:bg-lime-900/10 transition-colors cursor-pointer group">
<span className="text-neutral-500 w-24">0x9d...ee</span>
<span className="text-lime-400 w-24 group-hover:text-lime-300">MINT_DJED</span>
<span className="text-neutral-300 flex-grow">Input: 10,000 ERG -&gt; Output: 14,500 DJED</span>
<span className="text-neutral-500 w-24 text-right">2m 05s ago</span>
</div>
</div>

<div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-neutral-900/30 border border-neutral-800 p-4 rounded-sm">
<div className="text-[10px] text-neutral-500 uppercase font-mono mb-1">24h Volume</div>
<div className="text-lg text-white font-mono">$1,240,000</div>
</div>
<div className="bg-neutral-900/30 border border-neutral-800 p-4 rounded-sm">
<div className="text-[10px] text-neutral-500 uppercase font-mono mb-1">Fees Generated</div>
<div className="text-lg text-lime-400 font-mono">4,200 ERG</div>
</div>
<div className="bg-neutral-900/30 border border-neutral-800 p-4 rounded-sm">
<div className="text-[10px] text-neutral-500 uppercase font-mono mb-1">Total DJED</div>
<div className="text-lg text-white font-mono">3.2M</div>
</div>
<div className="bg-neutral-900/30 border border-neutral-800 p-4 rounded-sm">
<div className="text-[10px] text-neutral-500 uppercase font-mono mb-1">Total SHEN</div>
<div className="text-lg text-purple-400 font-mono">18.5M</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-t border-white/5">
<div className="container md:px-12 mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-mono text-lime-400 mb-4 block tracking-widest uppercase">Governance</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4 font-display">Protocol Parameters.</h2>
<p className="text-neutral-400 font-light text-lg font-mono text-sm">Immutable rulesets governing the peg.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-sm border border-neutral-800 bg-[#080808] hover:border-neutral-700 transition-colors relative">
<div className="absolute top-0 right-0 p-4 text-neutral-700">
<span className="w-5 h-5" data-lucide="settings"></span>
</div>
<h3 className="text-md font-bold font-mono text-white mb-2 uppercase">Minimal Reserve</h3>
<p className="text-xs text-neutral-500 mb-6 font-mono">Lower bound for SHEN minting.</p>
<div className="mb-8 font-mono text-3xl text-white">400%</div>
<ul className="space-y-3 text-xs text-neutral-400 font-mono border-t border-neutral-800 pt-4">
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-lime-500"></span> Prevents insolvency
                        </li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-lime-500"></span> Triggers mint block
                        </li>
</ul>
</div>

<div className="p-8 rounded-sm border border-lime-500/40 bg-[#080808] shadow-[0_0_30px_-10px_rgba(57,255,20,0.1)] relative">
<div className="absolute top-0 right-0 p-4 text-lime-500 animate-spin-slow">
<span className="w-5 h-5" data-lucide="crosshair"></span>
</div>
<div className="absolute top-0 left-0 w-full h-[1px] bg-lime-500/50"></div>
<h3 className="text-md font-bold font-mono text-lime-400 mb-2 uppercase text-glow">Fee Structure</h3>
<p className="text-xs text-neutral-400 mb-6 font-mono">Dynamic fee allocation model.</p>
<div className="mb-8 font-mono text-3xl text-white">1.5%</div>
<ul className="space-y-3 text-xs text-neutral-300 font-mono border-t border-lime-900/30 pt-4">
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-lime-400"></span> 0.25% to Operators
                        </li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-lime-400"></span> 1.25% to Reserve Pool
                        </li>
</ul>
</div>

<div className="p-8 rounded-sm border border-neutral-800 bg-[#080808] hover:border-neutral-700 transition-colors relative">
<div className="absolute top-0 right-0 p-4 text-neutral-700">
<span className="w-5 h-5" data-lucide="bar-chart"></span>
</div>
<h3 className="text-md font-bold font-mono text-white mb-2 uppercase">Maximum Reserve</h3>
<p className="text-xs text-neutral-500 mb-6 font-mono">Upper bound cap.</p>
<div className="mb-8 font-mono text-3xl text-white">800%</div>
<ul className="space-y-3 text-xs text-neutral-400 font-mono border-t border-neutral-800 pt-4">
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-lime-500"></span> Caps reserve exposure
                        </li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-lime-500"></span> Maintains efficiency
                        </li>
</ul>
</div>
</div>
</div>
</section>

<footer className="relative z-10 pt-24 pb-12 bg-[#020202] border-t border-white/5">
<div className="container mx-auto px-6 md:px-12 text-center">
<div className="inline-block mb-6 p-4 border border-lime-500/20 rounded-full bg-lime-950/10">
<span className="w-8 h-8 text-lime-400 animate-pulse" data-lucide="radio"></span>
</div>
<h2 className="md:text-5xl text-3xl font-bold font-display text-white tracking-tight mb-6">
                Decentralization is Non-Negotiable.
            </h2>
<p className="text-sm md:text-base text-neutral-500 font-mono mb-12">
                DjedOps provides the interface. The blockchain provides the truth.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-24">
<a className="inline-flex justify-center items-center gap-2 px-10 py-4 bg-lime-500 text-black rounded-sm text-sm font-bold font-mono tracking-widest hover:bg-lime-400 transition-colors shadow-[0_0_20px_rgba(57,255,20,0.3)]" href="#">
                    INITIATE PROTOCOL
                </a>
<a className="inline-flex justify-center items-center gap-2 px-10 py-4 border border-neutral-700 text-white rounded-sm text-sm font-bold font-mono tracking-widest hover:bg-neutral-800 transition-colors" href="#">
                    READ WHITE PAPER
                </a>
</div>
<div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-600 font-mono gap-4 uppercase tracking-widest">
<div className="flex gap-6">
<a className="hover:text-lime-400 transition-colors" href="#">Nodes</a>
<a className="hover:text-lime-400 transition-colors" href="#">Telemetry</a>
<a className="hover:text-lime-400 transition-colors" href="#">Contracts</a>
<a className="hover:text-lime-400 transition-colors" href="#">Github</a>
</div>
<div className="">
                    © 2025 DJED OPS SYSTEM. OPEN SOURCE.
                </div>
</div>
</div>
</footer>


    </>
  );
}
