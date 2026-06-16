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



        // Initialize Icons
        lucide.createIcons();

        // Intersection Observer for Scroll Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-item');
            elements.forEach(el => observer.observe(el));
        });

        // Interactive Range Slider Logic for Simulator
        const slider = document.querySelector('.custom-range');
        const depositInput = document.querySelector('input[type="text"]');
        
        if(slider && depositInput) {
            slider.addEventListener('input', (e) => {
                const val = (e.target.value / 100 * 14.5).toFixed(1);
                depositInput.value = val;
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#030305]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#030305]/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
<div className="w-6 h-6 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-lg shadow-[0_0_15px_-3px_rgba(34,211,238,0.4)]"></div>
<span className="text-white font-semibold tracking-tight text-lg">NEXUS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide">
<a className="text-slate-300 hover:text-white transition-colors relative group" href="#">
                    Vaults
                    <span className="absolute -bottom-4 left-0 w-full h-[1px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
</a>
<a className="hover:text-white transition-colors" href="#">Analytics</a>
<a className="hover:text-white transition-colors" href="#">Developers</a>
<a className="hover:text-white transition-colors" href="#">Governance</a>
</div>
<button className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium px-4 py-2 rounded-full transition-all hover:border-white/20 btn-glow">
<i className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors" data-lucide="wallet"></i>
                Connect
            </button>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse" style={{animationDuration: '8s'}}></div>
<div className="absolute top-40 right-[-200px] w-[800px] h-[600px] bg-cyan-500/5 rounded-full blur-[130px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl relative z-10">
<div className="reveal-item inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-300 text-[10px] uppercase font-semibold tracking-wider mb-8 hover:bg-cyan-500/10 transition-colors cursor-default">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
</span>
                    Protocol V2 Live
                </div>
<h1 className="reveal-item delay-100 text-5xl lg:text-[4rem] font-semibold text-white tracking-tight leading-[1.05] mb-6">
                    Yield generation <br/>
<span className="accent-gradient-text">reimagined.</span>
</h1>
<p className="reveal-item delay-200 text-lg text-slate-400 leading-relaxed mb-10 max-w-lg font-light">
                    Nexus aggregates cross-chain liquidity to deliver sustainable returns. Algorithmic compounding, audited security, and <span className="text-white font-normal">real yield</span>.
                </p>
<div className="reveal-item delay-300 flex flex-col sm:flex-row gap-4">
<button className="group inline-flex justify-center items-center gap-2 bg-white text-black hover:bg-slate-200 px-8 py-3.5 rounded-lg font-medium text-sm transition-all btn-primary-glow">
                        Launch App
                        <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex justify-center items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-lg font-medium text-sm transition-all hover:border-white/20 btn-glow">
<i className="w-4 h-4 text-slate-400" data-lucide="file-text"></i>
                        Documentation
                    </button>
</div>
<div className="reveal-item delay-300 mt-16 pt-8 border-t border-white/5 grid grid-cols-3 gap-8">
<div className="group cursor-default">
<div className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest mb-1 group-hover:text-cyan-400 transition-colors">TVL</div>
<div className="text-xl text-white font-medium tracking-tight">$42.8M+</div>
</div>
<div className="group cursor-default">
<div className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest mb-1 group-hover:text-cyan-400 transition-colors">Users</div>
<div className="text-xl text-white font-medium tracking-tight">15.2k</div>
</div>
<div className="group cursor-default">
<div className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest mb-1 group-hover:text-cyan-400 transition-colors">APY</div>
<div className="text-xl text-cyan-400 font-medium tracking-tight">2,555%</div>
</div>
</div>
</div>

<div className="reveal-item delay-200 relative group perspective-1000">

<div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500/30 to-blue-600/30 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
<div className="glass-panel rounded-2xl p-6 relative transform transition-transform duration-500 hover:-translate-y-1">

<div className="flex justify-between items-start mb-8">
<div>
<div className="text-[11px] text-slate-500 font-medium uppercase tracking-wider mb-1">Your Balance</div>
<div className="text-3xl text-white font-medium tracking-tight">$12,450.00</div>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 bg-[#0A0A0C] rounded-full border border-white/10 hover:border-white/20 transition-colors cursor-pointer shadow-inner">
<div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[9px] text-white font-bold ring-2 ring-[#0A0A0C]">E</div>
<span className="text-xs text-white font-medium">ETH</span>
<i className="w-3 h-3 text-slate-500" data-lucide="chevron-down"></i>
</div>
</div>

<div className="space-y-6">
<div className="relative group/input">
<div className="flex justify-between text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-3">
<span>Deposit Amount</span>
<span>Max: 14.5 ETH</span>
</div>
<div className="flex items-center bg-[#050507] border border-white/10 rounded-lg p-4 transition-all group-hover/input:border-white/20 group-focus-within/input:border-cyan-500/50 group-focus-within/input:ring-1 group-focus-within/input:ring-cyan-500/20">
<input className="bg-transparent text-white text-xl font-medium outline-none w-full placeholder-slate-700" readonly="" type="text" value="5.0"/>
<div className="flex items-center gap-2">
<button className="text-[10px] font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded hover:bg-cyan-500/20 transition-colors">MAX</button>
<span className="text-xs text-slate-500 font-medium">ETH</span>
</div>
</div>
</div>
<div className="py-2 relative">
<input className="custom-range" max="100" min="0" type="range" value="65"/>
</div>
<div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/5 border border-cyan-500/20 rounded-lg p-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50"></div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-cyan-100/70">Estimated Daily Return</span>
<span className="text-sm text-cyan-300 font-medium">+0.35 ETH</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-cyan-100/70">ROI (30 Days)</span>
<span className="text-sm text-cyan-300 font-medium">210%</span>
</div>
</div>
<button className="w-full bg-white text-black font-medium text-sm py-4 rounded-lg hover:bg-slate-100 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                            Approve &amp; Deposit
                        </button>
<div className="flex justify-center items-center gap-2 text-[10px] text-slate-500 mt-2">
<i className="w-3 h-3 text-green-500" data-lucide="shield-check"></i>
                            Audited by Certik &amp; PeckShield
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-[#020204]">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-[10px] uppercase font-semibold tracking-wider mb-6">
<i className="w-3 h-3" data-lucide="workflow"></i>
                    Workflow Engine
                </div>
<h2 className="reveal-item text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                    Complete control from <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">deposit to yield</span>
</h2>
<p className="reveal-item delay-100 text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                    Manage positions, integrate with your favorite wallets, and structure your portfolio with our intelligent strategy suite.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal-item delay-100 group relative bg-[#0B0C15] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden shadow-lg">
<div className="relative z-10 flex flex-col h-full">
<h3 className="text-xl text-white font-semibold mb-2 tracking-tight">Live Arbitrage Sync</h3>
<p className="text-sm text-slate-500 mb-10 leading-relaxed">Invite bots and validators to collaborate on your yield generation in real-time.</p>
<div className="mt-auto space-y-3">

<div className="bg-[#13141C] rounded-xl p-3 flex items-center gap-3 border border-white/5 group-hover:border-white/10 transition-colors">
<i className="w-4 h-4 text-slate-600" data-lucide="search"></i>
<span className="text-xs text-slate-600 font-medium">Scanning mempool...</span>
</div>

<div className="bg-[#13141C] rounded-xl p-4 border border-white/5 group-hover:border-white/10 transition-colors">
<div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mb-3">Active Now</div>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-xs font-bold shadow-md">B</div>
<div>
<div className="text-sm text-white font-medium">Bot-Alpha</div>
<div className="text-xs text-slate-500">Arbitrage • UNI-V3</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-green-500 font-medium">Live</span>
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
</div>
</div>
<div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-2/3 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="reveal-item delay-200 group relative bg-[#0B0C15] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col items-center text-center justify-between shadow-lg">
<div className="relative w-full h-48 flex items-center justify-center mb-4">

<div className="absolute top-4 left-10 w-10 h-10 bg-[#13141C] border border-white/5 rounded-lg flex items-center justify-center shadow-lg animate-bounce" style={{animationDuration: '3s'}}>
<i className="w-4 h-4 text-cyan-400" data-lucide="zap"></i>
</div>
<div className="absolute top-8 right-10 w-10 h-10 bg-[#13141C] border border-white/5 rounded-lg flex items-center justify-center shadow-lg animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
<i className="w-4 h-4 text-blue-400" data-lucide="activity"></i>
</div>

<div className="relative z-10">
<div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 rounded-full group-hover:opacity-30 transition-opacity duration-500"></div>
<div className="w-16 h-16 bg-gradient-to-b from-[#1F2937] to-[#000] rounded-2xl border border-blue-500/30 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] flex items-center justify-center relative z-10">
<div className="w-8 h-8 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-lg shadow-inner"></div>
</div>
</div>

<div className="absolute bottom-4 w-10 h-10 bg-[#13141C] border border-white/5 rounded-lg flex items-center justify-center shadow-lg animate-bounce" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}>
<i className="w-4 h-4 text-purple-400" data-lucide="wifi"></i>
</div>
</div>
<div>
<h3 className="text-xl text-white font-semibold mb-2 tracking-tight">Liquidity Hub</h3>
<p className="text-sm text-slate-500 leading-relaxed">Connects seamlessly with Curve, Uniswap, Balancer, and Aave V3.</p>
</div>
</div>

<div className="reveal-item delay-300 group relative bg-[#0B0C15] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500 shadow-lg">
<div className="h-full flex flex-col">
<h3 className="text-xl text-white font-semibold mb-2 tracking-tight">Smart Auditing</h3>
<p className="text-sm text-slate-500 mb-8 leading-relaxed">Every strategy execution is simulated and indexed automatically. Never lose funds.</p>
<div className="mt-auto space-y-4 bg-[#13141C] rounded-xl p-4 border border-white/5 group-hover:border-white/10 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-slate-400 border border-slate-700/50">
<i className="w-4 h-4" data-lucide="sliders"></i>
</div>
<div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
</div>
<div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center shadow-[0_0_10px_-2px_rgba(59,130,246,0.4)]">
<i className="w-3 h-3 text-blue-400" data-lucide="check"></i>
</div>
</div>
<div className="space-y-2 pt-1">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_5px_rgba(251,146,60,0.5)]"></div>
<span className="text-xs text-slate-400">Slippage protection</span>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.5)]"></div>
<span className="text-xs text-slate-400">Flashloan security chain</span>
</div>
</div>
<div className="bg-slate-800/30 rounded px-3 py-2 text-[10px] text-slate-400 font-mono border border-white/5">
                                Simulation completed in 2.4s
                            </div>
</div>
</div>
</div>

<div className="reveal-item delay-100 md:col-span-2 group relative bg-[#0B0C15] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500 min-h-[320px] shadow-lg">
<div className="max-w-md relative z-10">
<h3 className="text-xl text-white font-semibold mb-2 tracking-tight">Intelligent Routing</h3>
<p className="text-sm text-slate-500 mb-8 leading-relaxed">Stop searching for the right pool. Automatically generate yield structures based on market standards and risk levels.</p>
</div>

<div className="border border-white/5 bg-[#13141C] rounded-xl p-6 mt-4 relative overflow-hidden group-hover:border-white/10 transition-colors">
<div className="flex items-center gap-2 mb-8">
<i className="w-4 h-4 text-blue-400" data-lucide="git-branch"></i>
<span className="text-xs text-slate-300 font-medium">Auto-Router Mode</span>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-12 relative pb-2">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent hidden md:block"></div>

<div className="absolute top-[-20px] md:top-[-40px] px-4 py-2 rounded-lg bg-[#0B0C15] border border-white/10 text-xs text-blue-400 font-medium z-10 shadow-xl">
                                Strategy: Delta Neutral
                            </div>

<div className="bg-[#1A1B23] border border-white/10 p-4 rounded-lg w-40 relative z-10 shadow-lg">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
<span className="text-[11px] text-white font-medium">Entry</span>
</div>
<div className="text-[10px] text-slate-500">10 ETH • High Priority</div>
</div>

<div className="bg-[#1A1B23] border border-white/10 p-4 rounded-lg w-40 relative z-10 shadow-lg">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
<span className="text-[11px] text-white font-medium">Farm</span>
</div>
<div className="text-[10px] text-slate-500">Aave • 5x Leverage</div>
</div>
</div>
</div>
</div>

<div className="reveal-item delay-200 group relative bg-[#0B0C15] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col shadow-lg">

<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
<i className="w-5 h-5 text-purple-400" data-lucide="database"></i>
</div>
<div>
<div className="text-sm text-white font-medium">Nexus Vault</div>
<div className="text-[10px] text-slate-500">Contract Metadata</div>
</div>
<button className="ml-auto w-6 h-6 rounded bg-[#13141C] border border-white/10 flex items-center justify-center hover:bg-white/5 text-slate-400 transition-colors">
<i className="w-3 h-3" data-lucide="chevron-right"></i>
</button>
</div>

<div className="bg-[#13141C] border border-white/5 rounded-xl p-4 mb-6 flex-1 group-hover:border-white/10 transition-colors">
<div className="flex items-center gap-2 mb-3 text-[10px] text-slate-500">
<i className="w-3 h-3" data-lucide="tag"></i>
<span>tags@nexus.protocol</span>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-[10px] font-medium border border-blue-500/10">#YieldBearing</span>
<span className="px-2 py-1 rounded bg-slate-800 text-slate-400 text-[10px] font-medium border border-white/5">#ERC4626</span>
</div>
<div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px]">
<span className="text-slate-400">Export Strategy JSON</span>
<i className="w-3 h-3 text-slate-500 group-hover:text-white transition-colors" data-lucide="download"></i>
</div>
</div>
<div>
<h3 className="text-lg text-white font-semibold mb-1 tracking-tight">Export Ready</h3>
<p className="text-xs text-slate-500 leading-relaxed">Tax reports and split sheets generated instantly.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="glass-panel rounded-2xl border border-white/5 overflow-hidden reveal-item">
<div className="grid lg:grid-cols-2">
<div className="p-10 lg:p-16 flex flex-col justify-center">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-8">Sustainable Tokenomics</h2>
<div className="space-y-8">
<div className="flex gap-5 group">
<div className="mt-1 relative">
<div className="absolute inset-0 bg-cyan-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div className="relative w-8 h-8 rounded-full bg-[#0A0A0C] flex items-center justify-center border border-white/10 text-xs text-white font-medium z-10">1</div>
<div className="absolute top-8 left-4 w-[1px] h-12 bg-gradient-to-b from-white/10 to-transparent -z-0"></div>
</div>
<div>
<h4 className="text-white font-medium mb-1.5">Deposit Assets</h4>
<p className="text-sm text-slate-500 leading-relaxed">Support for ETH, USDT, USDC, and DAI on Ethereum Mainnet and major L2s.</p>
</div>
</div>
<div className="flex gap-5 group">
<div className="mt-1 relative">
<div className="absolute inset-0 bg-blue-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div className="relative w-8 h-8 rounded-full bg-[#0A0A0C] flex items-center justify-center border border-white/10 text-xs text-white font-medium z-10">2</div>
<div className="absolute top-8 left-4 w-[1px] h-12 bg-gradient-to-b from-white/10 to-transparent -z-0"></div>
</div>
<div>
<h4 className="text-white font-medium mb-1.5">Protocol Deployment</h4>
<p className="text-sm text-slate-500 leading-relaxed">Capital is efficiently deployed into Delta-neutral farming strategies with hedged risk.</p>
</div>
</div>
<div className="flex gap-5 group">
<div className="mt-1 relative">
<div className="absolute inset-0 bg-green-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div className="relative w-8 h-8 rounded-full bg-[#0A0A0C] flex items-center justify-center border border-white/10 text-xs text-white font-medium z-10">3</div>
</div>
<div>
<h4 className="text-white font-medium mb-1.5">Earn Daily</h4>
<p className="text-sm text-slate-500 leading-relaxed">Claim your 7% daily returns instantly to your wallet or compound for exponential growth.</p>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-[#050507] to-black p-10 lg:p-16 border-l border-white/5 flex items-center justify-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px]"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 blur-[80px]"></div>
<div className="w-full max-w-md bg-[#0A0A0C] rounded-xl border border-white/10 p-6 shadow-2xl font-mono text-[11px] relative z-10 group transform transition-transform duration-500 hover:scale-[1.02]">

<div className="flex items-center gap-1.5 mb-6 border-b border-white/5 pb-4">
<div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-80"></div>
<div className="ml-auto text-slate-600 text-[10px]">RewardController.sol</div>
</div>

<div className="space-y-1.5 text-slate-500 leading-relaxed">
<p><span className="text-purple-400">function</span> <span className="text-blue-400">calculateReward</span>(address staker) <span className="text-purple-400">public view returns</span> (uint256) {</p>
<p className="pl-4 border-l border-white/5 ml-1">uint256 staked = balances[staker];</p>
<p className="pl-4 border-l border-white/5 ml-1">uint256 rate = <span className="text-cyan-400">700</span>; <span className="text-slate-600">// 7.00% daily bps</span></p>
<p className="pl-4 border-l border-white/5 ml-1">uint256 timeDelta = block.timestamp - lastClaim[staker];</p>
<p className="pl-4 border-l border-white/5 ml-1"><span className="text-slate-600">// Precision adjustment for accumulation</span></p>
<p className="pl-4 border-l border-white/5 ml-1"><span className="text-purple-400">return</span> (staked * rate * timeDelta) / 10000 days;</p>
<p>}</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/10 blur-[120px] -z-10 pointer-events-none rounded-full"></div>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="reveal-item text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to optimize your holdings?</h2>
<p className="reveal-item delay-100 text-slate-400 mb-12 text-lg font-light">Join over 15,000 investors earning passive income with Nexus Protocol's automated yield strategies.</p>
<div className="reveal-item delay-200 flex flex-col sm:flex-row justify-center gap-4">
<button className="group inline-flex justify-center items-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-medium text-sm hover:bg-slate-200 transition-all shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)] hover:scale-105">
                    Connect Wallet
                    <i className="w-4 h-4 transition-transform group-hover:-rotate-12" data-lucide="wallet"></i>
</button>
<button className="inline-flex justify-center items-center gap-2 bg-[#0A0A0C] border border-white/10 text-slate-300 px-8 py-4 rounded-lg font-medium text-sm hover:text-white hover:border-white/20 transition-all hover:bg-white/5">
                    View Documentation
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030305] pt-20 pb-10 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-5 h-5 bg-gradient-to-tr from-slate-200 to-slate-400 rounded-md"></div>
<span className="text-white font-semibold tracking-tight">NEXUS</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed pr-4">
                        DeFi yield aggregator providing best-in-class returns through automated strategies. Built for the future of finance.
                    </p>
</div>
<div>
<h4 className="text-white text-[11px] font-bold uppercase tracking-widest mb-6">Protocol</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Vaults</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Stats</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Tokenomics</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-[11px] font-bold uppercase tracking-widest mb-6">Support</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Audits</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Discord</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-[11px] font-bold uppercase tracking-widest mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Risks</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[11px] text-slate-600">© 2023 Nexus Protocol. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-slate-600 hover:text-white transition-colors hover:scale-110 transform" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-slate-600 hover:text-white transition-colors hover:scale-110 transform" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-slate-600 hover:text-white transition-colors hover:scale-110 transform" href="#"><i className="w-4 h-4" data-lucide="message-circle"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
