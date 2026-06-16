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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-16 h-full flex flex-col items-center py-6 border-r border-white/[0.05] bg-white/[0.01] backdrop-blur-3xl z-20">
<div className="mb-12 flex items-center justify-center">

<span className="text-white text-base font-semibold tracking-tighter">SG</span>
</div>
<nav className="flex flex-col gap-8 items-center w-full">
<button className="text-cyan-400 relative group flex justify-center w-full">
<div className="absolute inset-0 bg-cyan-400/10 blur-md rounded-full w-8 h-8 m-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="relative z-10" icon="solar:widget-5-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="text-slate-500 hover:text-slate-300 transition-colors flex justify-center w-full">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="text-slate-500 hover:text-slate-300 transition-colors flex justify-center w-full">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="text-slate-500 hover:text-slate-300 transition-colors flex justify-center w-full relative">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute top-0 right-3 w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_5px_#f59e0b]"></span>
</button>
<button className="text-slate-500 hover:text-slate-300 transition-colors flex justify-center w-full">
<iconify-icon icon="solar:tuning-square-2-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
</nav>
<div className="mt-auto flex flex-col gap-6 items-center">
<button className="text-slate-500 hover:text-slate-300 transition-colors flex justify-center w-full">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-900 to-slate-800 border border-white/10 flex items-center justify-center overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" src="https://i.pravatar.cc/100?img=33"/>
</div>
</div>
</aside>

<main className="relative flex-1 h-full w-full overflow-hidden bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.03)_0%,transparent_70%)]">

<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">

<div className="w-[1200px] h-[1200px] relative" style={{transform: 'perspective(1000px) rotateX(55deg) rotateZ(-40deg) scale(1.6)', transformStyle: 'preserve-3d'}}>

<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

<div className="absolute inset-0 opacity-20" style={{background: 'radial-gradient(circle at 40% 40%, rgba(6,182,212,0.4) 0%, transparent 40%), radial-gradient(circle at 70% 60%, rgba(245,158,11,0.2) 0%, transparent 30%)', filter: 'blur(40px)'}}></div>

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="xMidYMid slice" viewbox="0 0 1200 1200">
<defs>

<filter height="140%" id="glow-cyan" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="6"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>

<filter height="200%" id="glow-amber" width="200%" x="-50%" y="-50%">
<fegaussianblur result="blur" stddeviation="8"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>

<lineargradient id="line-grad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#06b6d4" stop-opacity="0.8"></stop>
<stop offset="50%" stop-color="#3b82f6" stop-opacity="0.4"></stop>
<stop offset="100%" stop-color="#06b6d4" stop-opacity="0.8"></stop>
</lineargradient>
</defs>

<path d="M100,500 L300,400 L500,600 L800,300 L1100,500 M200,800 L400,600 L600,900 L900,700" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></path>

<g filter="url(#glow-cyan)">
<path d="M300,600 L500,450 L750,550 L1000,350" fill="none" stroke="url(#line-grad)" strokeWidth="2" style={{strokeDasharray: '1000', strokeDashoffset: '0'}}></path>
<path d="M300,600 L450,750 L700,650 L950,850" fill="none" opacity="0.8" stroke="#06b6d4" strokeWidth="1.5"></path>
<path d="M500,450 L600,300 L850,200" fill="none" opacity="0.6" stroke="#06b6d4" strokeWidth="1.5"></path>
<path d="M750,550 L700,650" fill="none" opacity="0.5" stroke="#06b6d4" strokeWidth="1"></path>
<path d="M450,750 L200,850" fill="none" opacity="0.7" stroke="#06b6d4" strokeWidth="1.5"></path>
</g>

<circle cx="300" cy="600" fill="#fff" filter="url(#glow-cyan)" r="4"></circle>
<circle cx="500" cy="450" fill="#fff" filter="url(#glow-cyan)" r="5"></circle>
<circle cx="750" cy="550" fill="#fff" filter="url(#glow-cyan)" r="6"></circle>
<circle cx="1000" cy="350" fill="#fff" filter="url(#glow-cyan)" r="3"></circle>
<circle cx="450" cy="750" fill="#fff" filter="url(#glow-cyan)" r="4"></circle>
<circle cx="700" cy="650" fill="#fff" filter="url(#glow-cyan)" r="5"></circle>
<circle cx="950" cy="850" fill="#fff" filter="url(#glow-cyan)" r="3"></circle>
<circle cx="600" cy="300" fill="#fff" filter="url(#glow-cyan)" r="3"></circle>

<g filter="url(#glow-amber)">
<circle cx="750" cy="550" fill="none" opacity="0.5" r="12" stroke="#f59e0b" strokeWidth="2"></circle>
<circle cx="750" cy="550" fill="#f59e0b" r="4"></circle>
<circle cx="450" cy="750" fill="none" opacity="0.4" r="8" stroke="#f59e0b" strokeWidth="1.5"></circle>
<circle cx="450" cy="750" fill="#f59e0b" r="3"></circle>

<path d="M750,550 L800,600" fill="none" stroke="#f59e0b" stroke-dasharray="2 4" strokeWidth="1"></path>
<path d="M450,750 L400,700" fill="none" stroke="#f59e0b" stroke-dasharray="2 4" strokeWidth="1"></path>
</g>
</svg>

<div className="absolute top-[35%] left-[25%] w-1 h-1 bg-cyan-300 rounded-full shadow-[0_0_8px_#67e8f9] animate-pulse"></div>
<div className="absolute top-[50%] left-[60%] w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_12px_#22d3ee] opacity-80"></div>
<div className="absolute top-[40%] left-[45%] w-1 h-1 bg-amber-400 rounded-full shadow-[0_0_10px_#fbbf24] animate-ping" style={{animationDuration: '3s'}}></div>
<div className="absolute top-[70%] left-[80%] w-1 h-1 bg-cyan-300 rounded-full shadow-[0_0_8px_#67e8f9]"></div>
<div className="absolute top-[20%] left-[70%] w-0.5 h-0.5 bg-white rounded-full shadow-[0_0_5px_#fff]"></div>

<div className="absolute top-[45%] left-[41.6%] w-[1px] h-32 bg-gradient-to-t from-cyan-400 to-transparent opacity-30 transform -rotate-x-90 origin-bottom"></div>
<div className="absolute top-[55%] left-[62.5%] w-[2px] h-48 bg-gradient-to-t from-amber-500 to-transparent opacity-40 transform -rotate-x-90 origin-bottom"></div>
</div>
</div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#030508_100%)] pointer-events-none z-0"></div>

<div className="absolute inset-0 z-10 p-6 flex justify-between pointer-events-none">

<div className="flex flex-col gap-5 w-80 pointer-events-auto">

<div className="bg-[#0c0f14]/80 backdrop-blur-xl border border-white/[0.04] rounded-2xl shadow-2xl shadow-black/50 overflow-hidden relative">

<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
<div className="p-5 flex flex-col gap-4">
<div className="flex items-center justify-between">
<h2 className="text-xs font-medium text-slate-400 tracking-wide uppercase">Live Telemetry</h2>
<div className="flex items-center gap-1.5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="text-xs text-cyan-400 font-medium tracking-tight">Syncing</span>
</div>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-[0.65rem] text-slate-500 mb-1">GRID FREQUENCY</p>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-medium tracking-tighter text-white">50.02</span>
<span className="text-xs text-slate-500 font-medium">Hz</span>
</div>
</div>
<div className="text-right">
<p className="text-[0.65rem] text-slate-500 mb-1">SYSTEM LOAD</p>
<div className="flex items-baseline gap-1 justify-end">
<span className="text-lg font-medium tracking-tight text-white">4.2</span>
<span className="text-xs text-slate-500 font-medium">GW</span>
</div>
</div>
</div>

<div className="w-full h-16 mt-2 relative">

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 200 40">
<path d="M0,20 Q12.5,0 25,20 T50,20 T75,20 T100,20 T125,20 T150,20 T175,20 T200,20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></path>
</svg>

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" style={{filter: 'drop-shadow(0 0 4px rgba(6,182,212,0.5))'}} viewbox="0 0 200 40">
<path className="animate-[dash_3s_linear_infinite]" d="M0,20 Q12.5,0 25,20 T50,20 T75,20 T100,20 T125,20 T150,20 T175,20 T200,20" fill="none" stroke="#06b6d4" stroke-dasharray="200" stroke-dashoffset="0" strokeLinecap="round" strokeWidth="1.5"></path>
<style>
                                    @keyframes dash {
                                        to { stroke-dashoffset: -200; }
                                    }
                                </style>
</svg>

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.05]"></div>
</div>
</div>
</div>

<div className="bg-[#0c0f14]/80 backdrop-blur-xl border border-white/[0.04] rounded-2xl p-5 shadow-2xl shadow-black/50">
<h2 className="text-xs font-medium text-slate-400 tracking-wide uppercase mb-4">Node Health Index</h2>
<div className="flex gap-4">

<div className="flex-1 flex flex-col items-center gap-3">
<div className="relative w-16 h-16">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#06b6d4" stroke-dasharray="92, 100" strokeLinecap="round" strokeWidth="3" style={{filter: 'drop-shadow(0 0 3px rgba(6,182,212,0.4))'}}></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-sm font-medium text-white tracking-tight">92%</span>
</div>
</div>
<span className="text-[0.65rem] text-slate-500 uppercase tracking-wider">Substations</span>
</div>

<div className="flex-1 flex flex-col items-center gap-3">
<div className="relative w-16 h-16">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f59e0b" stroke-dasharray="64, 100" strokeLinecap="round" strokeWidth="3" style={{filter: 'drop-shadow(0 0 3px rgba(245,158,11,0.4))'}}></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-sm font-medium text-amber-500 tracking-tight">64%</span>
</div>
</div>
<span className="text-[0.65rem] text-slate-500 uppercase tracking-wider">Transformers</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/[0.04] flex items-center justify-between">
<span className="text-xs text-slate-400">Maintenance required</span>
<div className="px-2 py-0.5 rounded text-[0.65rem] font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">3 Nodes</div>
</div>
</div>
</div>

<div className="flex flex-col gap-5 w-80 pointer-events-auto">

<div className="bg-[#0c0f14]/80 backdrop-blur-xl border border-white/[0.04] rounded-2xl p-5 shadow-2xl shadow-black/50">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xs font-medium text-slate-400 tracking-wide uppercase">Load Prediction</h2>
<span className="text-[0.65rem] text-slate-500 border border-white/10 px-1.5 py-0.5 rounded bg-white/5">+4 Hours</span>
</div>

<div className="grid grid-cols-12 gap-1 mb-3">


<div className="aspect-square rounded-[2px] bg-cyan-900/40"></div>
<div className="aspect-square rounded-[2px] bg-cyan-800/50"></div>
<div className="aspect-square rounded-[2px] bg-cyan-600/60"></div>
<div className="aspect-square rounded-[2px] bg-cyan-400/80"></div>
<div className="aspect-square rounded-[2px] bg-amber-500/60 shadow-[0_0_5px_rgba(245,158,11,0.3)]"></div>
<div className="aspect-square rounded-[2px] bg-amber-500/90 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
<div className="aspect-square rounded-[2px] bg-amber-600/80"></div>
<div className="aspect-square rounded-[2px] bg-cyan-500/60"></div>
<div className="aspect-square rounded-[2px] bg-cyan-700/50"></div>
<div className="aspect-square rounded-[2px] bg-cyan-900/40"></div>
<div className="aspect-square rounded-[2px] bg-slate-800/40"></div>
<div className="aspect-square rounded-[2px] bg-slate-800/30"></div>

<div className="aspect-square rounded-[2px] bg-cyan-800/40"></div>
<div className="aspect-square rounded-[2px] bg-cyan-500/60"></div>
<div className="aspect-square rounded-[2px] bg-cyan-400/90 shadow-[0_0_8px_rgba(6,182,212,0.4)]"></div>
<div className="aspect-square rounded-[2px] bg-amber-400/80"></div>
<div className="aspect-square rounded-[2px] bg-amber-500/90 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
<div className="aspect-square rounded-[2px] bg-amber-600/90"></div>
<div className="aspect-square rounded-[2px] bg-amber-700/70"></div>
<div className="aspect-square rounded-[2px] bg-cyan-600/50"></div>
<div className="aspect-square rounded-[2px] bg-cyan-800/40"></div>
<div className="aspect-square rounded-[2px] bg-slate-800/40"></div>
<div className="aspect-square rounded-[2px] bg-slate-800/30"></div>
<div className="aspect-square rounded-[2px] bg-slate-800/20"></div>

<div className="aspect-square rounded-[2px] bg-slate-800/40"></div>
<div className="aspect-square rounded-[2px] bg-cyan-800/40"></div>
<div className="aspect-square rounded-[2px] bg-cyan-600/60"></div>
<div className="aspect-square rounded-[2px] bg-cyan-500/80"></div>
<div className="aspect-square rounded-[2px] bg-amber-600/60"></div>
<div className="aspect-square rounded-[2px] bg-cyan-500/60"></div>
<div className="aspect-square rounded-[2px] bg-cyan-700/40"></div>
<div className="aspect-square rounded-[2px] bg-cyan-900/30"></div>
<div className="aspect-square rounded-[2px] bg-slate-800/30"></div>
<div className="aspect-square rounded-[2px] bg-slate-800/20"></div>
<div className="aspect-square rounded-[2px] bg-slate-800/20"></div>
<div className="aspect-square rounded-[2px] bg-slate-800/20"></div>
</div>
<div className="flex items-center justify-between text-[0.65rem] text-slate-500 mt-2">
<span>Low Capacity</span>
<div className="flex items-center gap-1">
<div className="w-16 h-1 bg-gradient-to-r from-cyan-900 via-cyan-400 to-amber-500 rounded-full"></div>
</div>
<span>Overload Risk</span>
</div>
</div>

<div className="bg-[#0c0f14]/80 backdrop-blur-xl border border-white/[0.04] rounded-2xl p-5 shadow-2xl shadow-black/50 flex-1 flex flex-col">
<h2 className="text-xs font-medium text-slate-400 tracking-wide uppercase mb-4">Critical Events</h2>
<div className="flex flex-col gap-3 overflow-y-auto pr-1" style={{scrollbarWidth: 'none'}}>

<div className="flex gap-3 p-3 rounded-xl bg-amber-500/[0.03] border border-amber-500/10 relative overflow-hidden group hover:bg-amber-500/[0.05] transition-colors cursor-pointer">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-amber-500 shadow-[0_0_5px_#f59e0b]"></div>
<div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-amber-500" icon="solar:bolt-linear" width="16"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-200 tracking-tight leading-tight mb-1">Voltage Spike Detected</h3>
<p className="text-xs text-slate-500 line-clamp-1">Sector 7G distribution node exceeding threshold.</p>
<div className="flex items-center gap-2 mt-2">
<span className="text-[0.65rem] text-slate-400">2 min ago</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span className="text-[0.65rem] font-medium text-amber-500">Auto-routing active</span>
</div>
</div>
</div>

<div className="flex gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] relative hover:bg-white/[0.04] transition-colors cursor-pointer">
<div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-cyan-400" icon="solar:info-circle-linear" width="16"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-200 tracking-tight leading-tight mb-1">Firmware Update</h3>
<p className="text-xs text-slate-500 line-clamp-1">Substation Alpha completed OTA sync.</p>
<div className="flex items-center gap-2 mt-2">
<span className="text-[0.65rem] text-slate-400">14 min ago</span>
</div>
</div>
</div>
</div>
<button className="w-full mt-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors border border-white/[0.05] rounded-lg bg-white/[0.01] hover:bg-white/[0.04]">
                        View Log
                    </button>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 z-20 flex gap-2 pointer-events-auto">
<button className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-zoom-in-linear" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-zoom-out-linear" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-cyan-500/10 backdrop-blur-md border border-cyan-500/20 flex items-center justify-center text-cyan-400 transition-colors shadow-[0_0_10px_rgba(6,182,212,0.2)]">
<iconify-icon icon="solar:target-linear" width="16"></iconify-icon>
</button>
</div>
</main>

    </>
  );
}
