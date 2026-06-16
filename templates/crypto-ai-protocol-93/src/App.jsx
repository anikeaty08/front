import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // Page Switching Logic
        function switchPage(pageId) {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(el => {
                el.classList.remove('active');
                setTimeout(() => {
                   if(!el.classList.contains('active')) el.style.display = 'none';
                }, 500); 
            });
            
            // Show selected section
            const target = document.getElementById(pageId);
            target.style.display = 'block';
            // slight delay to allow display block to apply before opacity transition
            setTimeout(() => {
                target.classList.add('active');
            }, 10);

            // Update Nav State
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.setAttribute('data-active', 'false');
                btn.classList.remove('bg-white/10', 'text-cyan-400');
                btn.classList.add('text-slate-400');
            });
            
            // Highlight active button (approximate matching based on onclick)
            const activeBtn = Array.from(document.querySelectorAll('.nav-btn')).find(b => b.getAttribute('onclick').includes(pageId));
            if(activeBtn) {
                activeBtn.setAttribute('data-active', 'true');
                activeBtn.classList.add('bg-white/10', 'text-cyan-400');
                activeBtn.classList.remove('text-slate-400');
            }
        }

        // Risk Slider Logic (DeFi Page)
        function updateRisk(val) {
            const circle = document.getElementById('risk-circle');
            const text = document.getElementById('risk-text');
            const panel = document.getElementById('risk-panel');
            
            // Update Text
            text.innerText = val + '%';
            
            // Update Circle Stroke (440 is circumference approx)
            const offset = 440 - (440 * val) / 100;
            circle.style.strokeDashoffset = offset;

            // Visual Feedback
            if(val > 80) {
                circle.style.stroke = '#ef4444'; // Red
                text.classList.add('glitch-active');
                panel.style.boxShadow = 'inset 0 0 50px rgba(239, 68, 68, 0.1)';
            } else {
                circle.style.stroke = '#22d3ee'; // Cyan
                text.classList.remove('glitch-active');
                panel.style.boxShadow = 'none';
            }
        }

        // Init First Page
        // switchPage('landing'); // Default state is handled by HTML classes, but this would ensure it on load if needed.
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 h-16 flex items-center justify-between px-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
<iconify-icon className="text-white text-xl" icon="solar:atom-linear"></iconify-icon>
</div>
<h1 className="text-lg font-medium tracking-tight text-white uppercase" style={{letterSpacing: '0.15em'}}>Aetheris<span className="text-cyan-400">Prime</span></h1>
</div>
<nav className="hidden md:flex items-center bg-black/30 rounded-full px-2 py-1 border border-white/10 backdrop-blur-md">
<button className="nav-btn px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors rounded-full data-[active=true]:bg-white/10 data-[active=true]:text-cyan-400" data-active="true" onclick="switchPage('landing')">GATEWAY</button>
<button className="nav-btn px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors rounded-full data-[active=true]:bg-white/10 data-[active=true]:text-cyan-400" onclick="switchPage('forge')">NEURAL FORGE</button>
<button className="nav-btn px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors rounded-full data-[active=true]:bg-white/10 data-[active=true]:text-cyan-400" onclick="switchPage('liquidity')">QUANTUM DEFI</button>
<button className="nav-btn px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors rounded-full data-[active=true]:bg-white/10 data-[active=true]:text-cyan-400" onclick="switchPage('dao')">GALACTIC DAO</button>
<button className="nav-btn px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors rounded-full data-[active=true]:bg-white/10 data-[active=true]:text-cyan-400" onclick="switchPage('architect')">ARCHITECT</button>
</nav>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 rounded bg-cyan-900/10 border border-cyan-500/20">
<div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
<span className="text-xs text-cyan-400 font-mono-custom">NET_ONLINE</span>
</div>
<button className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/5 transition-colors">
<iconify-icon className="text-slate-300" icon="solar:bell-bing-linear"></iconify-icon>
</button>
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-white/20"></div>
</div>
</header>

<div className="fixed top-16 w-full z-40 bg-black/60 border-b border-white/5 h-8 flex items-center font-mono-custom text-xs text-slate-400 backdrop-blur-sm">
<div className="ticker-wrap w-full">
<div className="ticker-move flex items-center gap-12">
<span className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="solar:flame-linear"></iconify-icon> ETH GAS: 12 GWEI</span>
<span className="flex items-center gap-2"><iconify-icon className="text-yellow-400" icon="solar:bolt-linear"></iconify-icon> BTC: $64,230.40</span>
<span className="flex items-center gap-2"><iconify-icon className="text-cyan-400" icon="solar:chart-2-linear"></iconify-icon> AETH: $4.20 (+12%)</span>
<span className="flex items-center gap-2"><iconify-icon className="text-violet-400" icon="solar:cpu-bolt-linear"></iconify-icon> AI TRAINING: EPOCH 4092 (98.4%)</span>
<span className="flex items-center gap-2"><iconify-icon className="text-green-400" icon="solar:server-square-linear"></iconify-icon> NODES ACTIVE: 4,120</span>

<span className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="solar:flame-linear"></iconify-icon> ETH GAS: 12 GWEI</span>
<span className="flex items-center gap-2"><iconify-icon className="text-yellow-400" icon="solar:bolt-linear"></iconify-icon> BTC: $64,230.40</span>
<span className="flex items-center gap-2"><iconify-icon className="text-cyan-400" icon="solar:chart-2-linear"></iconify-icon> AETH: $4.20 (+12%)</span>
</div>
</div>
</div>

<main className="flex-grow pt-24 pb-20 relative">

<section className="page-section active px-6 max-w-7xl mx-auto" id="landing">

<div className="relative min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden rounded-3xl border border-white/5 bg-white/[0.01]">

<div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
<div className="w-96 h-96 rounded-full border border-cyan-500/30 animate-spin-slow" style={{borderStyle: 'dashed'}}></div>
<div className="absolute w-72 h-72 rounded-full border border-violet-500/30 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '30s'}}></div>
<div className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-600/20 blur-2xl animate-pulse"></div>
</div>
<div className="relative z-10 max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                        Neural Mainnet V2.0 Live
                    </div>
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-6 leading-tight">
                        Autonomous On-Chain<br/>Intelligence Network
                    </h2>
<p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto font-light">
                        Aetheris Prime merges decentralized finance with self-evolving neural agents. The first hyper-structure for autonomous capital allocation.
                    </p>
<button className="group relative px-8 py-4 bg-white text-black font-medium text-sm tracking-wide rounded hover:bg-cyan-50 transition-all overflow-hidden">
<span className="relative z-10 flex items-center gap-2">
                            INITIALIZE CONNECTION
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-0 left-0 h-[2px] w-full bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
</button>
</div>

<svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#22d3ee', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#22d3ee', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#22d3ee', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<line stroke="url(#grad1)" strokeWidth="1" x1="10%" x2="90%" y1="20%" y2="80%"></line>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="1" x1="80%" x2="20%" y1="10%" y2="90%"></line>
<circle cx="10%" cy="20%" fill="#22d3ee" r="3"></circle>
<circle cx="90%" cy="80%" fill="#22d3ee" r="3"></circle>
<circle cx="50%" cy="50%" fill="none" r="40" stroke="rgba(255,255,255,0.1)"></circle>
</svg>
</div>

<div className="grid md:grid-cols-3 gap-6 mt-6">

<div className="glass-panel p-8 rounded-2xl group hover:border-cyan-500/40 transition-all hover:-translate-y-1 duration-500">
<div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 mb-6 text-cyan-400">
<iconify-icon icon="solar:brain-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2">Neural Forge</h3>
<p className="text-slate-400 text-sm leading-relaxed">Deploy autonomous AI agents that learn from on-chain data and execute complex strategies.</p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:border-violet-500/40 transition-all hover:-translate-y-1 duration-500">
<div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center border border-violet-500/20 mb-6 text-violet-400">
<iconify-icon icon="solar:layers-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2">Quantum Liquidity</h3>
<p className="text-slate-400 text-sm leading-relaxed">Next-gen AMM with concentrated liquidity and flash-loan protection layers.</p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:border-emerald-500/40 transition-all hover:-translate-y-1 duration-500">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-6 text-emerald-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2">Galactic DAO</h3>
<p className="text-slate-400 text-sm leading-relaxed">Governance layer where token weight determines the network's evolution trajectory.</p>
</div>
</div>
</section>

<section className="page-section px-6 h-[calc(100vh-8rem)]" id="forge">
<div className="flex h-full gap-6">

<div className="flex-grow glass-panel rounded-2xl relative overflow-hidden flex flex-col">
<div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-white/5">
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:widget-linear"></iconify-icon>
<span className="text-xs font-mono-custom text-slate-300">AGENT_WORKFLOW_V1</span>
</div>
<div className="flex gap-2">
<button className="p-1 hover:text-white text-slate-500"><iconify-icon icon="solar:play-linear"></iconify-icon></button>
<button className="p-1 hover:text-white text-slate-500"><iconify-icon icon="solar:settings-linear"></iconify-icon></button>
</div>
</div>

<div className="relative flex-grow bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]">

<div className="absolute top-20 left-20 w-48 glass-panel-heavy rounded-lg p-3 border-l-2 border-l-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
<div className="flex justify-between mb-2">
<span className="text-xs text-cyan-400 font-mono-custom">INPUT: ORACLE</span>
<iconify-icon className="text-slate-500" icon="solar:link-circle-linear"></iconify-icon>
</div>
<div className="text-xs text-white">BTC/USD Price Feed</div>
</div>

<svg className="absolute inset-0 pointer-events-none w-full h-full">
<path className="drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" d="M 212 130 C 350 130, 350 250, 480 250" fill="none" stroke="url(#lineGradient)" strokeWidth="2"></path>
<defs>
<lineargradient id="lineGradient">
<stop offset="0%" stop-color="#22d3ee" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#a78bfa" stop-opacity="0.8"></stop>
</lineargradient>
</defs>
<circle cx="0" cy="0" fill="#fff" r="3">
<animatemotion dur="2s" path="M 212 130 C 350 130, 350 250, 480 250" repeatcount="indefinite"></animatemotion>
</circle>
</svg>

<div className="absolute top-52 left-[30rem] w-48 glass-panel-heavy rounded-lg p-3 border-l-2 border-l-violet-400 shadow-[0_0_20px_rgba(167,139,250,0.1)]">
<div className="flex justify-between mb-2">
<span className="text-xs text-violet-400 font-mono-custom">LOGIC: NEURAL</span>
<iconify-icon className="text-slate-500" icon="solar:cpu-linear"></iconify-icon>
</div>
<div className="text-xs text-white">Sentiment Analysis</div>
</div>
</div>

<div className="h-32 border-t border-white/10 bg-black/80 p-4 font-mono-custom text-[10px] text-green-400 overflow-y-auto">
<div className="opacity-50">system &gt; init_sequence</div>
<div>[22:04:12] FETCHING DATA BLOCK 192001... OK</div>
<div>[22:04:13] ANALYZING VOLATILITY... <span className="text-yellow-400">HIGH</span></div>
<div>[22:04:14] AGENT 0x4f... EXECUTING ARBITRAGE</div>
<div className="animate-pulse">_</div>
</div>
</div>

<div className="w-80 flex flex-col gap-4">

<div className="glass-panel p-4 rounded-2xl flex-grow">
<h3 className="text-xs text-slate-400 uppercase tracking-widest mb-4">Active Agents</h3>
<div className="grid grid-cols-2 gap-3">

<div className="bg-white/5 rounded p-2 border border-white/5 text-center">
<div className="h-8 w-full flex items-end justify-center gap-[2px] mb-1">
<div className="w-1 bg-cyan-500/50 h-[40%] animate-pulse"></div>
<div className="w-1 bg-cyan-500/50 h-[80%] animate-pulse" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 bg-cyan-500/50 h-[60%] animate-pulse" style={{animationDelay: '0.2s'}}></div>
<div className="w-1 bg-cyan-500/50 h-[90%] animate-pulse" style={{animationDelay: '0.3s'}}></div>
</div>
<div className="text-[10px] text-slate-300">Alpha-1</div>
</div>

<div className="bg-white/5 rounded p-2 border border-white/5 text-center">
<div className="h-8 w-full flex items-end justify-center gap-[2px] mb-1">
<div className="w-1 bg-violet-500/50 h-[30%] animate-pulse"></div>
<div className="w-1 bg-violet-500/50 h-[50%] animate-pulse" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 bg-violet-500/50 h-[40%] animate-pulse" style={{animationDelay: '0.2s'}}></div>
<div className="w-1 bg-violet-500/50 h-[60%] animate-pulse" style={{animationDelay: '0.3s'}}></div>
</div>
<div className="text-[10px] text-slate-300">Beta-Nodes</div>
</div>
</div>
</div>

<div className="glass-panel p-4 rounded-2xl h-1/2 overflow-y-auto">
<h3 className="text-xs text-slate-400 uppercase tracking-widest mb-4">Trending Models</h3>
<div className="space-y-3">
<div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded transition-colors cursor-pointer">
<div className="w-8 h-8 rounded bg-gradient-to-br from-pink-500 to-orange-400"></div>
<div>
<div className="text-xs text-white font-medium">Sniper V4</div>
<div className="text-[10px] text-slate-500">2.4 ETH / Mo</div>
</div>
<button className="ml-auto text-xs bg-white/10 px-2 py-1 rounded text-cyan-400">Rent</button>
</div>
<div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded transition-colors cursor-pointer">
<div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-indigo-400"></div>
<div>
<div className="text-xs text-white font-medium">DeepYield</div>
<div className="text-[10px] text-slate-500">4.0 ETH / Mo</div>
</div>
<button className="ml-auto text-xs bg-white/10 px-2 py-1 rounded text-cyan-400">Rent</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section px-6 pb-12" id="liquidity">
<div className="grid grid-cols-12 gap-6 h-[80vh]">

<div className="col-span-12 lg:col-span-8 flex flex-col gap-6">

<div className="glass-panel rounded-2xl flex-grow p-4 relative flex flex-col">
<div className="flex justify-between items-center mb-4">
<div className="flex gap-4 text-sm font-medium">
<span className="text-white border-b border-cyan-400 pb-1">AETH/USDC</span>
<span className="text-slate-500 hover:text-white cursor-pointer">WBTC/ETH</span>
</div>
<div className="text-xs text-green-400 font-mono-custom">+4.23% (24H)</div>
</div>

<div className="flex-grow w-full flex items-end justify-between px-2 gap-1 opacity-80">

<div className="w-2 bg-green-500/50 h-[40%] rounded-sm relative"><div className="absolute top-[-10px] left-1/2 w-[1px] h-[calc(100%+20px)] bg-green-500 -translate-x-1/2"></div></div>
<div className="w-2 bg-red-500/50 h-[30%] rounded-sm relative"><div className="absolute top-[-5px] left-1/2 w-[1px] h-[calc(100%+15px)] bg-red-500 -translate-x-1/2"></div></div>
<div className="w-2 bg-green-500/50 h-[60%] rounded-sm relative"><div className="absolute top-[-15px] left-1/2 w-[1px] h-[calc(100%+25px)] bg-green-500 -translate-x-1/2"></div></div>
<div className="w-2 bg-green-500/50 h-[55%] rounded-sm relative"><div className="absolute top-[-5px] left-1/2 w-[1px] h-[calc(100%+10px)] bg-green-500 -translate-x-1/2"></div></div>
<div className="w-2 bg-red-500/50 h-[45%] rounded-sm relative"><div className="absolute top-[-8px] left-1/2 w-[1px] h-[calc(100%+16px)] bg-red-500 -translate-x-1/2"></div></div>
<div className="w-2 bg-green-500/50 h-[70%] rounded-sm relative"><div className="absolute top-[-12px] left-1/2 w-[1px] h-[calc(100%+20px)] bg-green-500 -translate-x-1/2"></div></div>
<div className="w-2 bg-green-500/50 h-[85%] rounded-sm relative"><div className="absolute top-[-10px] left-1/2 w-[1px] h-[calc(100%+15px)] bg-green-500 -translate-x-1/2"></div></div>
</div>
</div>

<div className="h-64 grid grid-cols-2 gap-6">
<div className="glass-panel rounded-2xl p-4">
<h4 className="text-xs text-slate-400 mb-2 font-mono-custom">DEPTH MAP</h4>
<div className="space-y-1">
<div className="flex justify-between text-[10px] relative"><span className="text-red-400">4200.50</span><span className="text-slate-400">0.524</span><div className="absolute right-0 top-0 h-full bg-red-500/10 w-[30%]"></div></div>
<div className="flex justify-between text-[10px] relative"><span className="text-red-400">4200.25</span><span className="text-slate-400">1.200</span><div className="absolute right-0 top-0 h-full bg-red-500/10 w-[50%]"></div></div>
<div className="my-2 border-t border-white/5"></div>
<div className="flex justify-between text-[10px] relative"><span className="text-green-400">4199.80</span><span className="text-slate-400">5.200</span><div className="absolute right-0 top-0 h-full bg-green-500/10 w-[80%]"></div></div>
</div>
</div>
<div className="glass-panel rounded-2xl p-4 overflow-hidden relative group">
<h4 className="text-xs text-slate-400 mb-2 font-mono-custom">CROSS-CHAIN BRIDGE</h4>

<div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
<div className="perspective-1000">
<div className="rotate-x-30 w-32 h-32 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.2)]">
<span className="text-[10px] text-cyan-300 transform -rotate-45">ETH</span>
</div>
</div>
<div className="w-20 h-[1px] bg-gradient-to-r from-cyan-500 to-violet-500 relative">
<div className="absolute -top-1 left-0 w-2 h-2 bg-white rounded-full animate-float" style={{animationDuration: '2s', animationName: 'slide'}}></div>
</div>
<div className="perspective-1000">
<div className="rotate-x-30 w-32 h-32 bg-violet-500/10 border border-violet-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.2)]">
<span className="text-[10px] text-violet-300 transform -rotate-45">SOL</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 flex flex-col gap-6">

<div className="glass-panel p-6 rounded-2xl text-center relative overflow-hidden" id="risk-panel">
<h4 className="text-sm font-medium text-slate-300 mb-6">YIELD OPTIMIZATION</h4>

<div className="relative w-40 h-40 mx-auto mb-6 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle cx="50%" cy="50%" fill="none" r="70" stroke="#1e293b" strokeWidth="8"></circle>
<circle className="transition-all duration-500" cx="50%" cy="50%" fill="none" id="risk-circle" r="70" stroke="#22d3ee" stroke-dasharray="440" stroke-dashoffset="110" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-bold text-white tracking-tight" id="risk-text">75%</span>
<span className="text-[10px] text-slate-500 uppercase">APY Risk</span>
</div>
</div>
<input className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400" max="100" min="0" oninput="updateRisk(this.value)" type="range" value="75"/>
<div className="flex justify-between text-[10px] text-slate-500 mt-2">
<span>SAFE</span>
<span>DEGEN</span>
</div>
</div>

<div className="glass-panel rounded-2xl flex-grow overflow-hidden flex flex-col">
<div className="p-4 border-b border-white/5 bg-white/5">
<h4 className="text-xs font-medium text-white">ASSET INVENTORY</h4>
</div>
<div className="overflow-y-auto p-2 space-y-2">
<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 group border border-transparent hover:border-white/5 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center"><iconify-icon className="text-orange-400" icon="solar:bitcoin-circle-linear"></iconify-icon></div>
<div>
<div className="text-xs text-white">Bitcoin</div>
<div className="text-[10px] text-slate-500">0.42 BTC</div>
</div>
</div>
<div className="text-right">
<div className="text-xs text-white">$26,840</div>
<button className="text-[10px] text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">SWAP</button>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 group border border-transparent hover:border-white/5 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-500/20 flex items-center justify-center"><iconify-icon className="text-slate-300" icon="solar:asteroid-linear"></iconify-icon></div>
<div>
<div className="text-xs text-white">Ethereum</div>
<div className="text-[10px] text-slate-500">4.10 ETH</div>
</div>
</div>
<div className="text-right">
<div className="text-xs text-white">$8,920</div>
<button className="text-[10px] text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">SWAP</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section px-6 pb-12" id="dao">
<div className="max-w-6xl mx-auto">

<div className="grid md:grid-cols-2 gap-12 items-center mb-16 relative">
<div className="order-2 md:order-1">
<h2 className="text-4xl font-medium text-white mb-4 tracking-tight">Galactic Governance</h2>
<p className="text-slate-400 font-light mb-8">Your voting power shapes the protocol. Stake AETH to upgrade your Neural Node and unlock higher governance tiers.</p>
<div className="flex gap-4">
<div className="glass-panel p-4 rounded-xl flex-1 border-l-2 border-l-cyan-400">
<div className="text-[10px] text-slate-500 uppercase mb-1">My Voting Power</div>
<div className="text-2xl text-white font-mono-custom">12,400 VP</div>
</div>
<div className="glass-panel p-4 rounded-xl flex-1 border-l-2 border-l-violet-400">
<div className="text-[10px] text-slate-500 uppercase mb-1">Staked AETH</div>
<div className="text-2xl text-white font-mono-custom">4,000</div>
</div>
</div>
</div>

<div className="order-1 md:order-2 flex justify-center relative">
<div className="w-64 h-64 rounded-full bg-gradient-to-br from-cyan-500 to-violet-900 shadow-[0_0_60px_rgba(34,211,238,0.3)] animate-pulse-glow flex items-center justify-center relative overflow-hidden">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDAgTDEwIDIwIE0wIDEwIEwyMCAxMCIgc3Ryb2tlPSJyd2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] opacity-30 rounded-full" style={{transform: 'scale(1.5)'}}></div>
<iconify-icon className="text-white text-6xl drop-shadow-lg relative z-10" icon="solar:crown-star-linear"></iconify-icon>
</div>

<div className="absolute top-1/2 left-1/2 w-80 h-80 border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute top-1/2 left-1/2 w-96 h-96 border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 border-dashed opacity-50"></div>
</div>
</div>

<div className="mb-12">
<h3 className="text-sm text-slate-400 mb-6 uppercase tracking-wider">Artifact Tiers</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:medal-star-linear" width="60"></iconify-icon>
</div>
<h4 className="text-lg text-white font-medium">Bronze Node</h4>
<div className="text-xs text-slate-500 mb-4">Requirement: 1,000 AETH</div>
<ul className="text-xs text-slate-300 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon> 1x Voting Weight</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon> Basic Yield Access</li>
</ul>
<button className="w-full py-2 rounded bg-white/5 hover:bg-cyan-500 hover:text-black transition-colors text-xs font-medium border border-white/10">STAKE NOW</button>
</div>

<div className="glass-panel p-6 rounded-2xl relative overflow-hidden group border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.05)]">
<div className="absolute -top-3 -right-3 bg-cyan-500 text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
<h4 className="text-lg text-white font-medium">Silver Sentinel</h4>
<div className="text-xs text-slate-500 mb-4">Requirement: 5,000 AETH</div>
<ul className="text-xs text-slate-300 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon> 2.5x Voting Weight</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon> Auto-Compound</li>
</ul>
<button className="w-full py-2 rounded bg-cyan-500 text-black transition-colors text-xs font-medium shadow-[0_0_15px_rgba(34,211,238,0.4)]">STAKE NOW</button>
</div>

<div className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
<h4 className="text-lg text-white font-medium">Diamond Architect</h4>
<div className="text-xs text-slate-500 mb-4">Requirement: 25,000 AETH</div>
<ul className="text-xs text-slate-300 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon> 10x Voting Weight</li>
<li className="flex items-center gap-2"><iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon> Alpha Access</li>
</ul>
<button className="w-full py-2 rounded bg-white/5 hover:bg-violet-500 hover:text-white transition-colors text-xs font-medium border border-white/10">STAKE NOW</button>
</div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6 h-80">

<div className="md:col-span-2 glass-panel rounded-2xl p-6 relative overflow-hidden">
<h3 className="text-sm font-medium text-white mb-4">Active Proposals</h3>
<div className="relative pl-6 border-l border-white/10 space-y-8">

<div className="relative">
<div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
<div className="bg-white/5 p-3 rounded border border-white/5 hover:border-cyan-500/30 transition-colors">
<div className="flex justify-between items-start mb-1">
<h4 className="text-xs text-white">AIP-402: Increase Yield Aggregator Cap</h4>
<span className="text-[10px] text-green-400 bg-green-900/20 px-1 rounded">PASSING</span>
</div>
<p className="text-[10px] text-slate-400">Ends in 12h 30m</p>
</div>
</div>

<div className="relative">
<div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-600 border border-slate-400"></div>
<div className="bg-white/5 p-3 rounded border border-white/5 hover:border-violet-500/30 transition-colors">
<div className="flex justify-between items-start mb-1">
<h4 className="text-xs text-white">AIP-403: Add Solana Bridge Support</h4>
<span className="text-[10px] text-slate-400 bg-slate-800 px-1 rounded">PENDING</span>
</div>
<p className="text-[10px] text-slate-400">Starts Oct 24</p>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-4 flex flex-col relative overflow-hidden">
<div className="absolute inset-0 matrix-bg opacity-30 pointer-events-none"></div>
<h3 className="text-xs font-mono-custom text-slate-400 mb-2 z-10">GOV_CHAT_RELAY</h3>
<div className="flex-grow overflow-hidden relative z-10 space-y-2 text-[10px] font-mono-custom">
<div className="text-cyan-300"><span className="text-slate-500">[dao_god]:</span> Voting YES on 402.</div>
<div className="text-slate-300"><span className="text-slate-500">[anon_0x]:</span> Yields look sustainable?</div>
<div className="text-violet-300"><span className="text-slate-500">[whale_watch]:</span> 500k AETH just moved to stake.</div>
<div className="text-slate-300"><span className="text-slate-500">[sys_admin]:</span> Upgrade deployed.</div>
</div>
<div className="mt-2 flex gap-2 z-10">
<input className="w-full bg-black/50 border border-white/10 rounded px-2 py-1 text-[10px] text-white focus:outline-none focus:border-cyan-500" placeholder="CMD://..." type="text"/>
</div>
</div>
</div>
</div>
</section>

<section className="page-section px-6 pb-12" id="architect">
<div className="grid grid-cols-12 gap-6">

<div className="col-span-12 md:col-span-3 glass-panel rounded-2xl overflow-hidden h-[75vh] flex flex-col">
<div className="p-3 bg-white/5 border-b border-white/5 text-xs font-mono-custom text-slate-300">LIVE_BLOCK_STREAM</div>
<div className="relative flex-grow overflow-hidden">
<div className="absolute inset-0 space-y-2 p-2" id="block-stream">

<div className="p-2 border border-white/5 rounded bg-black/20 text-[10px] font-mono-custom animate-pulse">
<div className="text-cyan-400">BLOCK #1920405</div>
<div className="text-slate-500 truncate">Hash: 0x8a...4b2</div>
<div className="text-slate-500">Txs: 142</div>
</div>
<div className="p-2 border border-white/5 rounded bg-black/20 text-[10px] font-mono-custom opacity-80">
<div className="text-cyan-400">BLOCK #1920404</div>
<div className="text-slate-500 truncate">Hash: 0x3c...9f1</div>
<div className="text-slate-500">Txs: 89</div>
</div>
<div className="p-2 border border-white/5 rounded bg-black/20 text-[10px] font-mono-custom opacity-60">
<div className="text-cyan-400">BLOCK #1920403</div>
<div className="text-slate-500 truncate">Hash: 0x1d...2a4</div>
<div className="text-slate-500">Txs: 201</div>
</div>
<div className="p-2 border border-white/5 rounded bg-black/20 text-[10px] font-mono-custom opacity-40">
<div className="text-cyan-400">BLOCK #1920402</div>
<div className="text-slate-500 truncate">Hash: 0xff...001</div>
<div className="text-slate-500">Txs: 55</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-6 flex flex-col gap-6">

<div className="glass-panel rounded-2xl h-80 relative flex items-center justify-center overflow-hidden bg-black/40">
<div className="absolute top-4 left-4 text-xs font-mono-custom text-white z-10">VALIDATOR_UPTIME_MAP</div>

<div className="w-64 h-64 rounded-full border border-white/10 relative animate-spin-slow" style={{animationDuration: '60s'}}>

<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_lime]"></div>
<div className="absolute top-1/2 left-3/4 w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_lime]"></div>
<div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_10px_yellow]"></div>

<div className="absolute inset-0 rounded-full border border-white/5" style={{transform: 'rotateX(60deg)'}}></div>
<div className="absolute inset-0 rounded-full border border-white/5" style={{transform: 'rotateY(60deg)'}}></div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 flex-grow">
<div className="glass-panel rounded-xl p-4 flex flex-col items-center justify-center">

<svg className="w-20 h-20 transform -rotate-90">
<circle cx="40" cy="40" fill="none" r="36" stroke="#1e293b" strokeWidth="6"></circle>
<circle cx="40" cy="40" fill="none" r="36" stroke="#22d3ee" stroke-dasharray="226" stroke-dashoffset="20" strokeLinecap="round" strokeWidth="6"></circle>
</svg>
<div className="text-lg font-medium text-white mt-2">99.9%</div>
<div className="text-[10px] text-slate-500 uppercase">Uptime</div>
</div>
<div className="glass-panel rounded-xl p-4 flex flex-col items-center justify-center">

<svg className="w-20 h-20 transform -rotate-90">
<circle cx="40" cy="40" fill="none" r="36" stroke="#1e293b" strokeWidth="6"></circle>
<circle cx="40" cy="40" fill="none" r="36" stroke="#a78bfa" stroke-dasharray="226" stroke-dashoffset="100" strokeLinecap="round" strokeWidth="6"></circle>
</svg>
<div className="text-lg font-medium text-white mt-2">42ms</div>
<div className="text-[10px] text-slate-500 uppercase">Avg Latency</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-3 glass-panel rounded-2xl flex flex-col overflow-hidden h-[75vh]">
<div className="p-3 bg-white/5 border-b border-white/5 flex justify-between items-center">
<span className="text-xs font-mono-custom text-slate-300">SDK_PLAYGROUND</span>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
</div>
<div className="p-4 bg-slate-950 font-mono-custom text-[10px] flex-grow overflow-auto text-slate-300">
<span className="text-violet-400">import</span> { AetherisSDK } <span className="text-violet-400">from</span> <span className="text-green-400">'@aetheris/core'</span>;
                        <br/><br/>
<span className="text-slate-500">// Initialize Neural Link</span><br/>
<span className="text-violet-400">const</span> client = <span className="text-violet-400">new</span> AetherisSDK({<br/>
                          apiKey: <span className="text-green-400">'pk_live_...'</span>,<br/>
                          network: <span className="text-green-400">'mainnet'</span><br/>
                        });
                        <br/><br/>
<span className="text-slate-500">// Execute Agent Strategy</span><br/>
<span className="text-violet-400">await</span> client.agents.deploy({<br/>
                          model: <span className="text-green-400">'sniper-v4'</span>,<br/>
                          allocation: <span className="text-orange-400">4.5</span><br/>
                        });
                        <br/><br/>
<span className="text-cyan-400 cursor-blink">|</span>
</div>
<div className="p-3 border-t border-white/5 bg-white/5 text-center">
<button className="w-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 rounded py-1 text-xs hover:bg-cyan-500/30 transition">RUN REQUEST</button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black/80 py-8 px-6 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-cyan-400 text-xl" icon="solar:atom-linear"></iconify-icon>
<span className="text-sm font-medium text-white tracking-widest">AETHERIS</span>
</div>
<div className="text-[10px] text-slate-500 max-w-xs leading-relaxed">
                    Decentralized autonomous intelligence network. Built on Layer Zero. <br/>
                    © 2077 Aetheris Foundation. All protocols secure.
                </div>
</div>
<div className="w-full md:w-auto">
<label className="text-[10px] text-slate-400 mb-2 block font-mono-custom">SUBSCRIBE_TO_UPDATES</label>
<div className="flex">
<div className="flex items-center bg-white/5 border border-white/10 rounded-l px-3 py-2 text-xs font-mono-custom text-slate-300 w-full md:w-64">
<span className="text-cyan-500 mr-2">&gt;</span>
<input className="bg-transparent outline-none w-full placeholder-slate-600" placeholder="enter_email..." type="email"/>
</div>
<button className="bg-cyan-900/30 border border-l-0 border-white/10 text-cyan-400 px-4 py-2 rounded-r hover:bg-cyan-500/20 transition text-xs">EXECUTE</button>
</div>
</div>
</div>
</footer>



    </>
  );
}
