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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-bg"></div>

<div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
<div className="perspective-grid absolute top-0 left-0 w-full h-[60vh] opacity-20"></div>
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
<div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-full px-1.5 py-1.5 flex items-center shadow-2xl shadow-black/80 ring-1 ring-white/5">
<div className="pl-5 pr-8 font-display font-bold tracking-tight text-white flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                GROWTHX
            </div>
<div className="hidden md:flex bg-white/5 rounded-full px-1">
<a className="px-5 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors duration-300" href="#work">WORK</a>
<a className="px-5 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors duration-300" href="#system">SYSTEM</a>
<a className="px-5 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors duration-300" href="#ethos">ETHOS</a>
</div>
<a className="ml-4 md:ml-2 bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-indigo-50 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-white/10" href="#contact">
                Start Project
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</a>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
<div className="max-w-5xl w-full text-center relative z-10 flex flex-col items-center">

<div className="opacity-0 animate-reveal group cursor-pointer mb-10 inline-flex items-center gap-3 border border-indigo-500/20 bg-indigo-950/20 backdrop-blur-md px-4 py-1.5 rounded-full shadow-[0_0_20px_-5px_rgba(99,102,241,0.15)] hover:border-indigo-500/40 transition-colors">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-[11px] uppercase font-semibold tracking-widest text-indigo-200">v2.0 Systems Available</span>
<span className="w-px h-3 bg-indigo-500/30"></span>
<span className="text-[11px] font-medium text-indigo-400 group-hover:text-white transition-colors">Q4 2024</span>
</div>
<h1 className="opacity-0 animate-reveal delay-100 font-display text-6xl md:text-8xl font-medium tracking-tight text-white leading-[0.95] mb-8">
                Design with <br/>
<span className="text-gradient">Velocity.</span>
</h1>
<p className="opacity-0 animate-reveal delay-200 text-sm md:text-lg text-zinc-400 max-w-xl leading-relaxed mb-12 font-light">
                We engineer high-fidelity digital experiences for ambitious brands. 
                Merging systemic design with brutalist performance.
            </p>
<div className="opacity-0 animate-reveal delay-300 flex flex-col md:flex-row gap-5 w-full justify-center items-center">
<button className="group relative px-8 py-3.5 bg-zinc-100 text-black text-xs md:text-sm font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
<span className="relative flex items-center gap-2">
                        INITIATE SEQUENCE
                        <iconify-icon className="text-zinc-600 group-hover:text-black" icon="solar:command-linear"></iconify-icon>
</span>
</button>
<button className="px-8 py-3.5 border border-white/10 bg-white/5 text-zinc-300 text-xs md:text-sm font-medium rounded-lg hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 flex items-center gap-2 backdrop-blur-sm">
<iconify-icon icon="solar:layers-minimalistic-linear"></iconify-icon>
                    Explore Stack
                </button>
</div>
</div>

<div className="absolute bottom-12 w-full max-w-4xl opacity-0 animate-reveal delay-500">
<p className="text-center text-[10px] uppercase tracking-widest text-zinc-600 mb-6">Trusted by engineering teams at</p>
<div className="flex justify-between items-center px-10 md:px-20 opacity-40 grayscale mix-blend-screen pointer-events-none select-none">
<span className="font-display font-bold text-xl tracking-tighter">ACME</span>
<span className="font-display font-bold text-xl tracking-tighter">VERTEX</span>
<span className="font-display font-bold text-xl tracking-tighter">NEXUS</span>
<span className="font-display font-bold text-xl tracking-tighter">PULSE</span>
<span className="font-display font-bold text-xl tracking-tighter">ORBIT</span>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10 border-t border-white/5 bg-zinc-950/50 backdrop-blur-sm">
<div className="max-w-6xl mx-auto">
<div className="flex items-end justify-between mb-16">
<div>
<h2 className="font-display text-3xl md:text-4xl font-medium text-white tracking-tight mb-2">Core Architecture</h2>
<p className="text-zinc-500 text-sm max-w-md">Our modular capabilities designed for scale.</p>
</div>
<div className="hidden md:flex gap-2">
<div className="w-2 h-2 rounded-full bg-zinc-800"></div>
<div className="w-2 h-2 rounded-full bg-zinc-800"></div>
<div className="w-2 h-2 rounded-full bg-indigo-500"></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-5 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 card-hover-effect relative bg-zinc-900/30 border border-white/5 rounded-3xl p-8 overflow-hidden flex flex-col justify-between group">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-display text-white mb-3">Neural Interfaces</h3>
<p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
                            We integrate Large Language Models directly into the user experience, creating adaptive interfaces that learn and evolve.
                        </p>
</div>

<div className="relative w-full bg-black/40 border border-white/5 rounded-xl p-4 mt-8 font-mono text-[10px] text-zinc-500 overflow-hidden">
<div className="flex gap-1.5 mb-3 border-b border-white/5 pb-2">
<div className="w-2 h-2 rounded-full bg-red-500/20"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
<div className="w-2 h-2 rounded-full bg-green-500/20"></div>
</div>
<div className="space-y-1.5 opacity-70">
<div className="flex"><span className="text-indigo-400 mr-2">const</span> <span className="text-white">agent</span> = <span className="text-yellow-300">new</span> Agent({</div>
<div className="pl-4"><span className="text-zinc-400">model:</span> <span className="text-green-400">'gpt-4-turbo'</span>,</div>
<div className="pl-4"><span className="text-zinc-400">context:</span> <span className="text-indigo-400">true</span>,</div>
<div className="pl-4"><span className="text-zinc-400">latency:</span> <span className="text-purple-400">12ms</span></div>
<div>});</div>
<div className="text-zinc-600">// Optimizing vectors...</div>
</div>

<div className="absolute top-0 left-0 w-full h-[2px] bg-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.5)] animate-[scanline_3s_ease-in-out_infinite] opacity-50"></div>
</div>
</div>

<div className="md:col-span-2 card-hover-effect relative bg-zinc-900/30 border border-white/5 rounded-3xl p-8 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 group">
<div className="relative z-10 flex-1">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-yellow-400 text-xl" icon="solar:bolt-linear"></iconify-icon>
<h3 className="text-lg font-display text-white">Hyper Performance</h3>
</div>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Sub-100ms interaction times. WebGL rendering pipelines for fluid, native-like 60fps experiences on the web.
                        </p>
</div>

<div className="w-full md:w-48 h-24 flex items-end justify-between gap-1 pr-4">
<div className="w-full bg-zinc-800/50 rounded-t-sm h-[40%] group-hover:h-[50%] transition-all duration-500 delay-75"></div>
<div className="w-full bg-zinc-800/50 rounded-t-sm h-[70%] group-hover:h-[85%] transition-all duration-500 delay-100"></div>
<div className="w-full bg-zinc-800/50 rounded-t-sm h-[50%] group-hover:h-[60%] transition-all duration-500 delay-150"></div>
<div className="w-full bg-indigo-500 rounded-t-sm h-[90%] shadow-[0_0_15px_-2px_rgba(99,102,241,0.5)] group-hover:h-[100%] transition-all duration-500"></div>
</div>
</div>

<div className="card-hover-effect relative bg-zinc-900/30 border border-white/5 rounded-3xl p-8 overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-emerald-500 text-3xl" icon="solar:shield-check-bold"></iconify-icon>
</div>
<div className="mt-auto h-full flex flex-col justify-end">
<h3 className="text-lg font-display text-white mb-2">Enterprise Grade</h3>
<p className="text-xs text-zinc-500">SOC2 Compliant Architecture.</p>
<div className="mt-4 flex items-center gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] uppercase tracking-wider text-emerald-500 font-semibold">Secure</span>
</div>
</div>
</div>

<div className="card-hover-effect relative bg-zinc-900/30 border border-white/5 rounded-3xl p-8 overflow-hidden group">
<div className="absolute -right-4 -bottom-4 w-24 h-40 border-4 border-zinc-800 rounded-2xl bg-black transform rotate-12 group-hover:rotate-6 transition-transform duration-500 shadow-2xl">
<div className="w-full h-full bg-zinc-900 flex flex-col items-center pt-2">
<div className="w-8 h-1 bg-zinc-800 rounded-full mb-2"></div>
<div className="w-16 h-16 rounded-full border border-white/10 mt-4 flex items-center justify-center">
<div className="w-10 h-10 rounded-full bg-indigo-500/20"></div>
</div>
</div>
</div>
<div className="relative z-10">
<h3 className="text-lg font-display text-white mb-2">Mobile First</h3>
<p className="text-xs text-zinc-500 max-w-[120px]">Native responsiveness across all viewports.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 relative overflow-hidden bg-black" id="system">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest border border-indigo-500/20 px-3 py-1 rounded-full bg-indigo-500/5 mb-4 inline-block">System Visualization</span>
<h2 className="font-display text-4xl font-medium text-white mb-4">Command Center</h2>
<p className="text-zinc-500 text-sm max-w-lg mx-auto">Real-time observability into your application's metrics. We build dashboards that make data beautiful.</p>
</div>

<div className="relative rounded-xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm shadow-2xl overflow-hidden group">

<div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 justify-between">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
</div>
<div className="flex gap-4 text-[10px] font-mono text-zinc-500">
<span>CPU: 12%</span>
<span>MEM: 402MB</span>
<span className="text-emerald-500">ONLINE</span>
</div>
</div>

<div className="grid grid-cols-12 h-[400px]">

<div className="col-span-1 hidden md:flex flex-col items-center py-6 border-r border-white/5 gap-6">
<iconify-icon className="text-zinc-400 hover:text-white transition-colors cursor-pointer" icon="solar:home-smile-linear"></iconify-icon>
<iconify-icon className="text-indigo-400 cursor-pointer" icon="solar:chart-2-linear"></iconify-icon>
<iconify-icon className="text-zinc-400 hover:text-white transition-colors cursor-pointer" icon="solar:users-group-rounded-linear"></iconify-icon>
<iconify-icon className="text-zinc-400 hover:text-white transition-colors cursor-pointer mt-auto" icon="solar:settings-linear"></iconify-icon>
</div>

<div className="col-span-12 md:col-span-11 p-6 md:p-8">
<div className="flex justify-between items-center mb-8">
<div>
<h4 className="text-white text-lg font-display">Traffic Overview</h4>
<p className="text-xs text-zinc-500">Last 24 hours</p>
</div>
<button className="bg-indigo-600 text-white text-[10px] font-bold px-3 py-1.5 rounded hover:bg-indigo-500 transition-colors">EXPORT CSV</button>
</div>

<div className="h-48 flex items-end gap-2 mb-8 relative">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
</div>

<div className="flex-1 bg-indigo-500/20 hover:bg-indigo-500/40 transition-colors h-[40%] rounded-t-sm"></div>
<div className="flex-1 bg-indigo-500/20 hover:bg-indigo-500/40 transition-colors h-[65%] rounded-t-sm"></div>
<div className="flex-1 bg-indigo-500/20 hover:bg-indigo-500/40 transition-colors h-[50%] rounded-t-sm"></div>
<div className="flex-1 bg-indigo-500/20 hover:bg-indigo-500/40 transition-colors h-[85%] rounded-t-sm relative group/bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[9px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">2,402 Visits</div>
</div>
<div className="flex-1 bg-indigo-500/20 hover:bg-indigo-500/40 transition-colors h-[60%] rounded-t-sm"></div>
<div className="flex-1 bg-indigo-500/20 hover:bg-indigo-500/40 transition-colors h-[75%] rounded-t-sm"></div>
<div className="flex-1 bg-indigo-500/20 hover:bg-indigo-500/40 transition-colors h-[90%] rounded-t-sm bg-gradient-to-t from-indigo-500/20 to-indigo-500/60"></div>
<div className="flex-1 bg-indigo-500/20 hover:bg-indigo-500/40 transition-colors h-[55%] rounded-t-sm"></div>
</div>

<div className="grid grid-cols-3 gap-6">
<div className="bg-white/5 rounded-lg p-4 border border-white/5">
<div className="text-xs text-zinc-500 mb-1">Total Users</div>
<div className="text-xl text-white font-mono">84,201</div>
</div>
<div className="bg-white/5 rounded-lg p-4 border border-white/5">
<div className="text-xs text-zinc-500 mb-1">Latency</div>
<div className="text-xl text-emerald-400 font-mono">24ms</div>
</div>
<div className="bg-white/5 rounded-lg p-4 border border-white/5 flex items-center justify-between">
<div>
<div className="text-xs text-zinc-500 mb-1">Status</div>
<div className="text-xl text-white font-mono">Healthy</div>
</div>
<div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-black relative" id="work">
<div className="max-w-6xl mx-auto">
<div className="flex items-end justify-between mb-20">
<div>
<h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white">Selected Work</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white transition-colors group" href="#">
                    VIEW ARCHIVE [24] 
                    <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="space-y-24">

<div className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-[1px] bg-indigo-500"></div>
<span className="text-xs font-mono text-indigo-400">FINTECH</span>
</div>
<h3 className="text-4xl font-display text-white mb-4 group-hover:text-indigo-400 transition-colors">Nova Protocol</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-8 max-w-md">
                            A decentralized liquidity aggregator processing $50M+ daily volume. We engineered the smart contract integration and the high-frequency trading interface.
                        </p>
<div className="flex gap-4 mb-8">
<span className="px-3 py-1 border border-white/10 rounded-full text-[10px] text-zinc-400">React</span>
<span className="px-3 py-1 border border-white/10 rounded-full text-[10px] text-zinc-400">Web3.js</span>
<span className="px-3 py-1 border border-white/10 rounded-full text-[10px] text-zinc-400">Solidity</span>
</div>
<a className="inline-flex items-center gap-2 text-sm font-bold text-white hover:gap-4 transition-all" href="#">
                            View Case Study <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="order-1 md:order-2 relative h-[360px] rounded-2xl overflow-hidden border border-white/10 group-hover:border-indigo-500/30 transition-all duration-500 bg-zinc-900">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black opacity-50"></div>

<div className="absolute inset-0 flex items-center justify-center p-8">
<div className="w-full max-w-xs bg-black border border-white/10 rounded-xl p-6 shadow-2xl transform rotate-y-12 rotate-x-12 group-hover:rotate-0 transition-transform duration-700">
<div className="flex justify-between items-center mb-6">
<div className="w-8 h-8 bg-white/10 rounded-full"></div>
<div className="text-xs text-zinc-500 font-mono">NOVA-ETH</div>
</div>
<div className="text-2xl font-mono text-white mb-1">1,402.24</div>
<div className="text-xs text-emerald-500 mb-6">+2.4%</div>
<div className="h-16 w-full flex items-end gap-1">
<div className="w-full bg-indigo-500/20 h-[30%] rounded-sm"></div>
<div className="w-full bg-indigo-500/40 h-[50%] rounded-sm"></div>
<div className="w-full bg-indigo-500 h-[80%] rounded-sm"></div>
<div className="w-full bg-indigo-500/40 h-[40%] rounded-sm"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-2">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-[1px] bg-purple-500"></div>
<span className="text-xs font-mono text-purple-400">ARCHITECTURE</span>
</div>
<h3 className="text-4xl font-display text-white mb-4 group-hover:text-purple-400 transition-colors">HyperBase</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-8 max-w-md">
                            Real-time collaboration suite for enterprise architects. Zero-latency 3D rendering engine built on WebGL and WebSockets.
                        </p>
<div className="flex gap-4 mb-8">
<span className="px-3 py-1 border border-white/10 rounded-full text-[10px] text-zinc-400">WebGL</span>
<span className="px-3 py-1 border border-white/10 rounded-full text-[10px] text-zinc-400">Rust</span>
<span className="px-3 py-1 border border-white/10 rounded-full text-[10px] text-zinc-400">AWS</span>
</div>
<a className="inline-flex items-center gap-2 text-sm font-bold text-white hover:gap-4 transition-all" href="#">
                            View Case Study <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="order-1 md:order-1 relative h-[360px] rounded-2xl overflow-hidden border border-white/10 group-hover:border-purple-500/30 transition-all duration-500 bg-zinc-900">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black opacity-50"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-48 h-48 border border-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
<div className="absolute inset-0 border border-purple-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="w-24 h-24 bg-purple-500/10 rounded-full backdrop-blur-md flex items-center justify-center border border-purple-500/20">
<iconify-icon className="text-3xl text-purple-200" icon="solar:cube-linear"></iconify-icon>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_white]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-zinc-950 relative overflow-hidden" id="ethos">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-block mb-6 p-3 rounded-full bg-zinc-900 border border-white/5">
<iconify-icon className="text-indigo-500 text-3xl animate-pulse" icon="solar:infinity-linear"></iconify-icon>
</div>
<h2 className="font-display text-4xl md:text-6xl font-medium text-white leading-[1.1] tracking-tight mb-10">
                We don't sell hours. <br/> <span className="text-zinc-600">We sell momentum.</span>
</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-left border-t border-white/5 pt-12">
<div className="group">
<h4 className="text-white font-medium mb-2 group-hover:text-indigo-400 transition-colors">01. Precision</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Pixel-perfect implementation of complex design systems.</p>
</div>
<div className="group">
<h4 className="text-white font-medium mb-2 group-hover:text-indigo-400 transition-colors">02. Speed</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Rapid iteration cycles using modern component architecture.</p>
</div>
<div className="group">
<h4 className="text-white font-medium mb-2 group-hover:text-indigo-400 transition-colors">03. Scale</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Infrastructure built to handle millions of concurrent users.</p>
</div>
<div className="group">
<h4 className="text-white font-medium mb-2 group-hover:text-indigo-400 transition-colors">04. Future</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Integration of AI and autonomous agents at the core.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden bg-black" id="contact">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="font-display text-5xl md:text-7xl font-semibold text-white tracking-tight mb-8">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">Scale?</span>
</h2>
<p className="text-zinc-400 mb-12 text-sm md:text-base">Accepting strictly limited ventures for Q4 2024.</p>
<form className="max-w-md mx-auto space-y-4 mb-20 text-left">
<div className="relative group">
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-indigo-500 focus:bg-zinc-900 transition-all placeholder:text-zinc-600" placeholder="Enter your work email" type="email"/>
<div className="absolute right-2 top-2 bottom-2">
<button className="h-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 rounded-lg shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)] transition-all hover:scale-105 text-xs tracking-wide">
                            INITIATE
                        </button>
</div>
</div>
<div className="flex items-center gap-2 justify-center text-[10px] text-zinc-600">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon>
<span>Secure encrypted communication</span>
</div>
</form>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-10 gap-6">
<div className="flex items-center gap-2 text-xs text-zinc-600 font-mono">
<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    SYSTEMS OPERATIONAL
                </div>
<div className="text-xs text-zinc-600 font-mono tracking-widest">
                    GROWTHX STUDIO © 2024
                </div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</section>

    </>
  );
}
