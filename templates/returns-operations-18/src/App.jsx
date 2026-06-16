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



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px]"></div>
<div className="absolute top-[20%] right-[0%] w-[40%] h-[40%] bg-violet-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[0%] left-[20%] w-[60%] h-[40%] bg-blue-900/10 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#05050A]/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30">
<i className="text-white w-5 h-5" data-lucide="layers"></i>
</div>
<span className="font-semibold text-lg tracking-tight text-white">ReturnSpec</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Product</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Customers</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-300 hover:text-white hidden sm:block" href="#">Sign In</a>
<a className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-500 transition-all border border-indigo-500/50" href="#">
                        Get Started
                    </a>
</div>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">

<div className="text-center max-w-4xl mx-auto mb-16 relative">
<div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-sm text-indigo-300 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
                    New: Shopify Plus Integration
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                    Define return grading once. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 text-glow">Execute consistently everywhere.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
                    Eliminate subjective judgment calls. Give your 3PLs a visual source of truth to grade returns with 100% accuracy.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto rounded-lg bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/40 hover:bg-indigo-500 transition-all border border-indigo-500/50" href="#">
                        Request a Demo
                    </a>
<a className="w-full sm:w-auto rounded-lg bg-white/5 border border-white/10 px-8 py-3 text-base font-medium text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2" href="#">
                        Talk to founding team
                    </a>
</div>
</div>

<div className="mt-20 relative">
<div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-center max-w-5xl mx-auto relative z-10">

<div className="relative group perspective-[1000px]">
<div className="absolute -top-12 left-0 text-slate-500 text-sm font-medium">Brand</div>
<div className="glass-card rounded-xl p-2 shadow-2xl transition-transform duration-500 transform lg:rotate-y-6 lg:group-hover:rotate-y-0">

<div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700 relative aspect-[4/3]">

<div className="bg-slate-800 px-3 py-2 flex items-center justify-between border-b border-slate-700">
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-amber-500/50"></div>
</div>
<div className="h-1 w-16 bg-slate-700 rounded-full"></div>
</div>

<div className="p-4 flex flex-col items-center justify-center h-full relative">
<div className="w-32 h-16 bg-gradient-to-br from-slate-700 to-slate-600 rounded -rotate-12 mb-4 shadow-lg relative">
<div className="absolute top-2 right-4 w-3 h-3 bg-white/20 rounded-full"></div>
<div className="absolute bottom-0 w-full h-2 bg-black/20"></div>
</div>
<div className="absolute top-[35%] left-[55%] w-8 h-8 border-2 border-red-500 rounded-full animate-ping opacity-75"></div>
<div className="absolute top-[35%] left-[55%] w-8 h-8 border-2 border-red-500 rounded-full"></div>
<div className="w-full space-y-2 mt-4">
<div className="flex items-center gap-2 bg-slate-800/80 p-2 rounded border border-slate-700">
<div className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/50 text-[10px] text-red-400">!</div>
<div className="h-1.5 w-24 bg-slate-600 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-center justify-center px-4 relative">

<div className="absolute top-1/2 left-0 right-0 h-[1px] bg-indigo-500/30 -z-10"></div>
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-indigo-400/50 overflow-hidden -z-10">
<div className="w-1/2 h-full bg-indigo-400 blur-[2px] animate-[shimmer_2s_infinite]"></div>
</div>
<div className="w-20 h-20 bg-[#05050A] border border-indigo-500/30 rounded-full flex flex-col items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.2)] z-10 relative">
<i className="w-8 h-8 text-indigo-400" data-lucide="cloud"></i>
<div className="absolute -bottom-1 -right-1 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center border-2 border-[#05050A]">
<i className="w-3 h-3 text-white" data-lucide="refresh-cw"></i>
</div>
</div>
<div className="mt-3 text-xs font-medium text-indigo-300 bg-indigo-950/50 px-3 py-1 rounded-full border border-indigo-500/20">
                            Spec to 3PL Network
                        </div>
</div>

<div className="relative group perspective-[1000px]">
<div className="absolute -top-12 right-0 text-slate-500 text-sm font-medium">Warehouse</div>
<div className="relative">

<div className="absolute -right-8 -bottom-4 z-20 w-32 pointer-events-none transform translate-x-4 translate-y-4">

<div className="w-10 h-24 bg-slate-800 rounded-lg absolute bottom-0 right-8 transform -rotate-12 border-r border-slate-700 scanner-grip"></div>

<div className="w-24 h-16 bg-slate-800 rounded-xl absolute bottom-16 right-0 border border-slate-600 flex items-center justify-center shadow-2xl">
<div className="w-20 h-12 bg-slate-900 rounded border border-slate-700"></div>

<div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-green-400 blur-md"></div>
</div>
</div>

<div className="glass-card rounded-xl p-2 shadow-2xl transition-transform duration-500 transform lg:-rotate-y-6 lg:group-hover:rotate-y-0 relative z-10">
<div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700 relative aspect-[4/3]">

<div className="bg-emerald-900/20 px-3 py-2 flex items-center justify-between border-b border-emerald-500/20">
<div className="text-[10px] text-emerald-400 font-mono">SCAN_MODE</div>
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
</div>

<div className="p-4 flex flex-col items-center justify-center h-full">
<div className="w-32 h-16 bg-gradient-to-br from-slate-700 to-slate-600 rounded -rotate-12 mb-4 opacity-80 relative overflow-hidden">
<div className="absolute inset-0 scan-line bg-emerald-500/20 h-1 w-full shadow-[0_0_10px_#10b981]"></div>
</div>
<div className="flex gap-2 w-full mt-2">
<div className="flex-1 bg-emerald-600/20 border border-emerald-500/50 rounded p-1.5 flex items-center justify-center gap-1">
<div className="w-3 h-3 rounded-full bg-emerald-500 flex items-center justify-center text-[8px] text-black font-bold">✓</div>
<span className="text-[10px] text-emerald-200">Match</span>
</div>
</div>
</div>

<div className="absolute top-4 right-4 bg-emerald-500 w-8 h-8 rounded-full flex items-center justify-center shadow-lg z-20">
<i className="w-5 h-5 text-white stroke-[3]" data-lucide="check"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 bg-slate-900/30 border-y border-white/5 relative">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-12">
<h2 className="text-2xl font-semibold text-white tracking-tight">How It Works</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/5 transition-all group">
<div className="mb-6 relative">
<div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-indigo-400" data-lucide="pen-tool"></i>
</div>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Define Visually</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Use images, comments, and conditional logic to build crystal-clear SOPs.
                    </p>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/5 transition-all group">
<div className="mb-6 relative">
<div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-violet-400" data-lucide="git-fork"></i>
</div>
<div className="absolute -top-2 -right-2 bg-emerald-500 text-[10px] text-white font-bold px-1.5 py-0.5 rounded">New</div>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Condition?</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Turn tribal knowledge into actionable systematic grading rules.
                    </p>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/5 transition-all group">
<div className="mb-6 relative">
<div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-emerald-400" data-lucide="folder-search"></i>
</div>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Execution</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Empower operators with the exact info at the precise moment.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-2xl font-semibold text-white tracking-tight">Designed for Operational Excellence</h2>
</div>
<div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">

<div className="glass-solid rounded-xl border border-slate-700 overflow-hidden shadow-2xl">

<div className="bg-slate-800 px-4 py-3 flex items-center gap-4 border-b border-slate-700">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-slate-600"></div>
<div className="w-3 h-3 rounded-full bg-slate-600"></div>
</div>
<div className="flex-1 bg-slate-900 rounded h-6 w-full max-w-sm mx-auto opacity-50"></div>
</div>

<div className="p-6 bg-[#0B0F15] min-h-[400px]">
<div className="flex gap-6">

<div className="w-16 flex flex-col gap-4 items-center pt-2">
<div className="w-8 h-8 rounded bg-indigo-600/20 text-indigo-400 flex items-center justify-center"><i className="w-4 h-4" data-lucide="layout-dashboard"></i></div>
<div className="w-8 h-8 rounded hover:bg-white/5 text-slate-500 flex items-center justify-center"><i className="w-4 h-4" data-lucide="box"></i></div>
<div className="w-8 h-8 rounded hover:bg-white/5 text-slate-500 flex items-center justify-center"><i className="w-4 h-4" data-lucide="users"></i></div>
</div>

<div className="flex-1">
<div className="flex justify-between items-center mb-6">
<h3 className="text-white font-medium">Return #99281</h3>
<span className="text-xs bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded border border-indigo-500/20">Processing</span>
</div>
<div className="grid grid-cols-2 gap-6">

<div className="aspect-square bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-center p-8">
<div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg -rotate-12 shadow-xl relative">
<div className="absolute bottom-0 w-full h-4 bg-white/5"></div>
</div>
</div>

<div className="space-y-4">
<div className="bg-slate-900/50 p-3 rounded border border-slate-800">
<div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Product</div>
<div className="text-sm text-white">Nike Air Zoom Pegasus</div>
<div className="text-xs text-slate-400">Black / Size 10</div>
</div>
<div className="bg-slate-900/50 p-3 rounded border border-slate-800">
<div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Detected Issue</div>
<div className="flex items-center gap-2">
<i className="w-3 h-3 text-amber-500" data-lucide="alert-triangle"></i>
<span className="text-sm text-white">Minor Scuffing</span>
</div>
</div>
<div className="space-y-2 pt-2">
<div className="h-2 bg-slate-800 rounded w-full"></div>
<div className="h-2 bg-slate-800 rounded w-2/3"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col h-full">
<div className="mb-10">
<h3 className="text-xl font-semibold text-white mb-4">Real Value for <br/>Real Operations</h3>
<p className="text-sm font-semibold text-indigo-400 mb-2">For Brands</p>
<ul className="space-y-3 mb-6">
<li className="flex items-start gap-2 text-sm text-slate-400">
<i className="w-4 h-4 text-indigo-500 mt-0.5" data-lucide="check"></i>
                                Control grading decisions
                            </li>
<li className="flex items-start gap-2 text-sm text-slate-400">
<i className="w-4 h-4 text-indigo-500 mt-0.5" data-lucide="check"></i>
                                Reduce disputes &amp; chargebacks
                            </li>
<li className="flex items-start gap-2 text-sm text-slate-400">
<i className="w-4 h-4 text-indigo-500 mt-0.5" data-lucide="check"></i>
                                Faster operator training
                            </li>
</ul>
</div>

<div className="relative w-[240px] mx-auto lg:mx-0">

<div className="bg-slate-800 rounded-[2rem] p-3 border-4 border-slate-700 shadow-2xl relative">

<div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-black rounded-full z-20 opacity-50"></div>

<div className="bg-slate-950 rounded-[1.5rem] overflow-hidden aspect-[9/18] flex flex-col">

<div className="bg-slate-900 p-3 flex justify-between items-center border-b border-white/5">
<i className="w-4 h-4 text-white" data-lucide="menu"></i>
<span className="text-[10px] text-slate-400">Task #402</span>
<i className="w-4 h-4 text-white" data-lucide="user"></i>
</div>

<div className="flex-1 p-3 flex flex-col">
<div className="bg-slate-900 rounded-lg aspect-square mb-3 flex items-center justify-center border border-white/5">
<div className="w-24 h-12 bg-gradient-to-br from-slate-700 to-slate-600 rounded -rotate-12"></div>
</div>
<div className="mt-auto space-y-2">
<button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-lg text-sm font-bold shadow-lg shadow-emerald-500/20 transition-colors">
                                            SELLABLE
                                        </button>
<button className="w-full bg-amber-600 hover:bg-amber-500 text-white py-3 rounded-lg text-sm font-bold shadow-lg shadow-amber-500/20 transition-colors">
                                            DAMAGED
                                        </button>
<div className="text-[10px] text-center text-slate-500 mt-2">
                                            Send to: <span className="text-slate-300">Bin A-44</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-4 top-12 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-indigo-400 animate-pulse">
                            Operator View
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 overflow-hidden border-t border-white/5 bg-[#020408]">
<div className="absolute inset-0 bg-indigo-950/20"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-indigo-600/10 blur-[100px] rounded-full"></div>
<div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center z-10">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-6">
                Ready to streamline your returns?
            </h2>
<p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
                Built from 0 to 1 with teams who care. Designed with operators in mind.
            </p>
<div className="flex items-center justify-center gap-x-6">
<a className="rounded-lg bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 hover:bg-indigo-500 hover:shadow-indigo-500/60 transition-all border border-indigo-500/50" href="#">
                    Request a Demo
                </a>
<a className="rounded-lg bg-white/5 border border-white/10 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all" href="#">
                    Talk to Founding Team
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020408] py-12">
<div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-indigo-600/20 rounded flex items-center justify-center border border-indigo-500/30">
<i className="text-indigo-400 w-3 h-3" data-lucide="layers"></i>
</div>
<span className="text-sm text-slate-400">© 2024 ReturnSpec Inc.</span>
</div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors text-sm" href="#">Privacy</a>
<a className="text-slate-500 hover:text-white transition-colors text-sm" href="#">Terms</a>
<a className="text-slate-500 hover:text-white transition-colors text-sm" href="#">Twitter</a>
<a className="text-slate-500 hover:text-white transition-colors text-sm" href="#">LinkedIn</a>
</div>
</div>
</footer>


    </>
  );
}
