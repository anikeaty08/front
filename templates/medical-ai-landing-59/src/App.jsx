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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute inset-0 bg-slate-950" style={{}}></div>
<div className="absolute top-0 left-0 w-full h-full bg-grid opacity-30 mask-image-gradient"></div>
<div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] rounded-full blur-[120px] mix-blend-screen bg-blue-900/20"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] mix-blend-screen bg-indigo-900/20"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 bg-slate-950/70" style={{}}>
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-orange-500 rounded-sm rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.6)]">
<div className="w-2 h-2 rounded-full bg-white" style={{}}></div>
</div>
<span className="text-xl font-semibold tracking-tighter uppercase text-white">Progeny AI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight text-slate-400" style={{}}>
<a className="transition-colors hover:text-white" href="#" style={{}}>Technology</a>
<a className="transition-colors hover:text-white" href="#" style={{}}>Solutions</a>
<a className="transition-colors hover:text-white" href="#" style={{}}>Case Studies</a>
<a className="transition-colors hover:text-white" href="#" style={{}}>Vision</a>
</div>
<button className="group relative px-5 py-2 overflow-hidden rounded-full text-sm font-medium shadow-lg transition-all hover:shadow-orange-500/20 bg-slate-800 text-white" style={{}}>
<span className="absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100 from-orange-600 to-orange-400"></span>
<span className="relative flex items-center gap-2">
                    Join Waitlist
                    <iconify-icon height="16" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</button>
</div>
</nav>

<section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="relative z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-6 bg-blue-950/50 border-blue-800/50 text-blue-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" style={{}}></span>
</span>
                    Introducing SynPlexus v2.0
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-white">
                    The Agent and <br/>
<span className="text-gradient-orange">Model Forge</span> <br/>
                    for Medicine.
                </h1>
<p className="text-lg max-w-xl leading-relaxed mb-8 font-light text-slate-400" style={{}}>
                    Forging self-iterating medical AI with irbAI security architecture. Enabling secure sharing and evolution of Data, Models, and Agents.
                </p>
<div className="flex items-center gap-4">
<button className="px-8 py-3.5 font-semibold rounded-lg transition-colors bg-white text-slate-950 hover:bg-slate-200" style={{}}>
                        Deploy Infrastructure
                    </button>
<button className="px-8 py-3.5 bg-transparent border font-medium rounded-lg transition-colors flex items-center gap-2 border-slate-700 text-white hover:bg-slate-800" style={{}}>
<iconify-icon height="18" icon="lucide:play-circle" strokeWidth="1.5" width="18"></iconify-icon>
                        Watch the Process
                    </button>
</div>
</div>

<div className="relative h-[500px] w-full flex items-center justify-center perspective-[1000px]">

<div className="absolute inset-0 z-0 opacity-20">
<svg className="w-full h-full" viewbox="0 0 400 400">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect className="text-blue-500" fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="relative z-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-forge-pulse"></div>
<div className="relative z-10 w-16 h-16 bg-gradient-to-br to-red-500 rounded-lg rotate-45 shadow-[0_0_50px_rgba(249,115,22,0.8)] animate-pulse flex items-center justify-center from-orange-400" style={{}}>
<iconify-icon className="rotate-[-45deg] text-white" height="32" icon="lucide:cpu" strokeWidth="1.5" width="32"></iconify-icon>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-[300px] h-[300px] border border-blue-500/20 rounded-full animate-forge-spin border-dashed"></div>
<div className="w-[450px] h-[450px] border rounded-full animate-forge-spin border-slate-700/30" style={{animationDirection: 'reverse', animationDuration: '30s'}}>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" style={{}}></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" style={{}}></div>
</div>
</div>

<div className="absolute top-0 left-1/2 w-[1px] h-1/2 bg-gradient-to-b from-transparent via-blue-500 to-orange-500 opacity-50"></div>
<div className="absolute top-1/2 right-0 w-1/2 h-[1px] bg-gradient-to-l from-transparent via-blue-500 to-orange-500 opacity-50"></div>
<div className="absolute bottom-0 left-1/2 w-[1px] h-1/2 bg-gradient-to-t from-transparent via-blue-500 to-orange-500 opacity-50" style={{}}></div>

<div className="absolute top-10 right-10 p-3 backdrop-blur border rounded-lg text-xs font-mono shadow-xl bg-slate-900/80 border-slate-700 text-blue-300" style={{}}>
<div className="flex items-center gap-2 mb-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Model: V-78</div>
<div className="text-slate-500" style={{}}>Optimizing... 98%</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-slate-950/50" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">The Trust Shield &amp; Fusion Engine</h2>
<p className="text-slate-400" style={{}}>Proprietary architecture designed for high-regulation environments.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel rounded-2xl p-8 group relative overflow-hidden transition-all duration-500">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-blue-500/10"></div>
<div className="w-12 h-12 border rounded-lg flex items-center justify-center mb-6 group-hover:text-blue-300 group-hover:border-blue-500/50 transition-colors bg-blue-950 border-blue-800/50 text-blue-400">
<iconify-icon height="24" icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-white">irbAI Framework</h3>
<p className="text-sm mb-6 leading-relaxed text-slate-400" style={{}}>
                        Structural Safety Premium. Ethical, controllable, non-black-box AI shielding core models with autonomy constraints.
                    </p>

<div className="h-24 w-full rounded-lg border flex items-center justify-center relative overflow-hidden bg-slate-900/50 border-white/5" style={{}}>
<div className="absolute inset-0 bg-blue-500/5"></div>
<iconify-icon className="z-10 text-blue-400" icon="lucide:lock" width="20"></iconify-icon>
<div className="absolute inset-0 border-2 border-blue-500/20 rounded-lg animate-pulse"></div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 group relative overflow-hidden transition-all duration-500">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-orange-500/10"></div>
<div className="w-12 h-12 border rounded-lg flex items-center justify-center mb-6 group-hover:text-orange-300 group-hover:border-orange-500/50 transition-colors bg-orange-950/30 border-orange-800/30 text-orange-400" style={{}}>
<iconify-icon height="24" icon="lucide:layers" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-white">SynPlexus Fusion</h3>
<p className="text-sm mb-6 leading-relaxed text-slate-400" style={{}}>
                        Specialized Model Fusion. Blending domain expertise while retaining specific knowledge in a unified luminous block.
                    </p>

<div className="h-24 w-full rounded-lg border flex items-center justify-center gap-2 relative bg-slate-900/50 border-white/5" style={{}}>
<div className="w-4 h-4 bg-blue-500 rounded-sm opacity-50 animate-bounce" style={{animationDelay: '0s'}}></div>
<div className="w-4 h-4 bg-green-500 rounded-sm opacity-50 animate-bounce" style={{animationDelay: '0.2s'}}></div>
<div className="w-4 h-4 bg-purple-500 rounded-sm opacity-50 animate-bounce" style={{animationDelay: '0.4s'}}></div>
<iconify-icon className="mx-1 text-slate-600" icon="lucide:arrow-right" style={{}}></iconify-icon>
<div className="w-6 h-6 bg-gradient-to-br to-pink-500 rounded shadow-[0_0_15px_rgba(251,146,60,0.4)] from-orange-400"></div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 group relative overflow-hidden transition-all duration-500">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-indigo-500/10"></div>
<div className="w-12 h-12 border rounded-lg flex items-center justify-center mb-6 group-hover:text-indigo-300 group-hover:border-indigo-500/50 transition-colors bg-indigo-950/30 border-indigo-800/30 text-indigo-400">
<iconify-icon height="24" icon="lucide:refresh-cw" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-white">Agentic Flywheel</h3>
<p className="text-sm mb-6 leading-relaxed text-slate-400" style={{}}>
                        Auto-labelling workflow. Creating a self-reinforcing loop where raw data is refined into training gold automatically.
                    </p>

<div className="h-24 w-full rounded-lg border flex items-center justify-center relative bg-slate-900/50 border-white/5" style={{}}>
<svg className="w-16 h-16 text-indigo-500 animate-[spin_4s_linear_infinite]" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24">
<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
<path d="M3 3v5h5"></path>
<path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
<path d="M16 21h5v-5"></path>
</svg>
<div className="absolute text-[10px] font-mono px-1 border text-white bg-slate-900 border-slate-700" style={{}}>DATA</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-0 border rounded-3xl overflow-hidden backdrop-blur-sm border-white/10 bg-slate-900/20" style={{}}>

<div className="p-10 lg:p-16 border-b lg:border-b-0 lg:border-r hover:bg-white/[0.02] transition-colors group border-white/10">
<div className="flex items-center gap-4 mb-6">
<div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
<iconify-icon height="28" icon="lucide:building-2" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white">For Medical Centers</h3>
</div>
<p className="mb-8 max-w-sm text-slate-400" style={{}}>Efficient clinical research and secure cross-department collaboration with intra-group data sharing.</p>
<div className="relative h-32 border rounded-xl p-4 overflow-hidden border-white/5 bg-slate-950/50" style={{}}>

<div className="absolute inset-0 flex items-center justify-around px-10">
<div className="w-10 h-10 rounded-md border flex items-center justify-center text-xs z-10 bg-slate-800 border-slate-600 text-slate-300" style={{}}>ER</div>
<div className="h-[2px] flex-1 bg-gradient-to-r via-blue-500 relative overflow-hidden from-slate-600 to-slate-600" style={{}}>
<div className="absolute top-0 left-0 h-full w-10 blur-[2px] animate-[slide_1s_infinite] bg-white" style={{}}></div>
</div>
<div className="w-10 h-10 rounded-md border border-blue-500 flex items-center justify-center text-xs z-10 bg-blue-900/30 text-blue-300">
<iconify-icon icon="lucide:brain-circuit"></iconify-icon>
</div>
<div className="h-[2px] flex-1 bg-gradient-to-r via-blue-500 from-slate-600 to-slate-600" style={{}}></div>
<div className="w-10 h-10 rounded-md border flex items-center justify-center text-xs z-10 bg-slate-800 border-slate-600 text-slate-300" style={{}}>LAB</div>
</div>
</div>
<div className="mt-8 flex items-center text-sm font-medium gap-2 group-hover:gap-4 transition-all cursor-pointer text-blue-400">
                    Explore Clinical Solutions <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>

<div className="p-10 lg:p-16 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-4 mb-6">
<div className="p-3 rounded-lg bg-orange-500/10 text-orange-400" style={{}}>
<iconify-icon height="28" icon="lucide:dna" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white">For Pharma &amp; Biotech</h3>
</div>
<p className="mb-8 max-w-sm text-slate-400" style={{}}>Accelerate new drug development, optimize clinical trials, and de-risk R&amp;D pipelines.</p>
<div className="relative h-32 border rounded-xl p-4 overflow-hidden flex items-center justify-center border-white/5 bg-slate-950/50" style={{}}>

<div className="w-full px-6">
<div className="flex justify-between text-[10px] text-slate-500 mb-2 font-mono uppercase" style={{}}>
<span>Discovery</span>
<span>Trials</span>
<span>Market</span>
</div>
<div className="h-2 rounded-full overflow-hidden relative bg-slate-800" style={{}}>
<div className="absolute top-0 left-0 h-full bg-gradient-to-r w-3/4 from-orange-600 to-orange-400"></div>
<div className="absolute top-0 right-0 h-full w-1/4 animate-pulse bg-white/20"></div>
</div>
<div className="mt-2 flex items-center justify-end text-xs font-semibold text-orange-400" style={{}}>
<iconify-icon className="mr-1" icon="lucide:zap" width="12"></iconify-icon> -40% Time to Market
                        </div>
</div>
</div>
<div className="mt-8 flex items-center text-sm font-medium gap-2 group-hover:gap-4 transition-all cursor-pointer text-orange-400" style={{}}>
                    Explore R&amp;D Solutions <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-slate-900/30" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight mb-12 text-center text-white">Proven Impact</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div>
<h4 className="text-lg font-semibold text-white">S&amp;T BioMed</h4>
<p className="text-sm text-slate-400" style={{}}>Data Purification</p>
</div>
<iconify-icon className="text-slate-600" icon="lucide:filter" style={{}}></iconify-icon>
</div>

<div className="h-40 rounded-lg border relative overflow-hidden mb-4 bg-slate-950 border-white/5" style={{}}>
<div className="absolute inset-0 flex items-center justify-center">

<div className="particle-sort" style={{-RLeft: '10%', -RTop: '20%', -FLeft: '80%', -FTop: '50%', animationDelay: '0s'}}></div>
<div className="particle-sort" style={{-RLeft: '15%', -RTop: '80%', -FLeft: '82%', -FTop: '50%', animationDelay: '0.5s'}}></div>
<div className="particle-sort" style={{-RLeft: '20%', -RTop: '40%', -FLeft: '84%', -FTop: '50%', animationDelay: '1s'}}></div>
<div className="particle-sort" style={{-RLeft: '5%', -RTop: '60%', -FLeft: '86%', -FTop: '50%', animationDelay: '1.5s'}}></div>
<div className="particle-sort" style={{-RLeft: '25%', -RTop: '10%', -FLeft: '88%', -FTop: '50%', animationDelay: '2s'}}></div>

<div className="absolute left-1/2 top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
</div>
<div className="absolute bottom-2 left-4 text-[10px] text-slate-500" style={{}}>Unstructured</div>
<div className="absolute bottom-2 right-4 text-[10px] text-orange-400" style={{}}>Structured</div>
</div>
<p className="text-sm text-slate-400" style={{}}>AI agents autonomously filtered 5PB of unstructured biological data into high-fidelity training sets.</p>
</div>

<div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div>
<h4 className="text-lg font-semibold text-white">Caliway</h4>
<p className="text-sm text-slate-400" style={{}}>Precision Navigation</p>
</div>
<iconify-icon className="text-slate-600" icon="lucide:compass" style={{}}></iconify-icon>
</div>

<div className="h-40 rounded-lg border relative overflow-hidden mb-4 flex items-center justify-center bg-slate-950 border-white/5" style={{}}>
<svg className="w-full h-full opacity-60" viewbox="0 0 200 80">

<path d="M0,40 Q20,20 40,40 T80,40 T120,40 T160,40 T200,40" fill="none" stroke="#334155" strokeWidth="1"></path>
<path d="M0,50 Q20,30 40,50 T80,50 T120,50 T160,50 T200,50" fill="none" stroke="#334155" strokeWidth="1"></path>
<path d="M0,30 Q20,10 40,30 T80,30 T120,30 T160,30 T200,30" fill="none" stroke="#334155" strokeWidth="1"></path>

<path d="M10,60 Q50,60 80,40 T150,20 L190,10" fill="none" stroke="#f97316" stroke-dasharray="200" stroke-dashoffset="200" strokeWidth="2">
<animate attributename="stroke-dashoffset" dur="2s" from="200" repeatcount="indefinite" to="0"></animate>
</path>

<circle cx="10" cy="60" fill="white" r="2"></circle>
<circle cx="190" cy="10" fill="#f97316" r="2"></circle>
</svg>
</div>
<p className="text-sm text-slate-400" style={{}}>Navigated complex biological landscapes to identify optimal drug targets with 99.4% precision.</p>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t pt-16 pb-8 text-sm border-white/5 bg-slate-950" style={{}}>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-4 h-4 bg-orange-500 rounded-sm rotate-45"></div>
<span className="text-lg font-semibold tracking-tighter uppercase text-white">Progeny AI</span>
</div>
<p className="text-slate-500" style={{}}>The Forge for Medical Intelligence.</p>
</div>
<div>
<h5 className="font-medium mb-4 text-white">Platform</h5>
<ul className="space-y-3 text-slate-500" style={{}}>
<li><a className="transition-colors hover:text-orange-400" href="#" style={{}}>irbAI Framework</a></li>
<li><a className="transition-colors hover:text-orange-400" href="#" style={{}}>SynPlexus</a></li>
<li><a className="transition-colors hover:text-orange-400" href="#" style={{}}>Agents</a></li>
</ul>
</div>
<div>
<h5 className="font-medium mb-4 text-white">Company</h5>
<ul className="space-y-3 text-slate-500" style={{}}>
<li><a className="transition-colors hover:text-orange-400" href="#" style={{}}>Vision</a></li>
<li><a className="transition-colors hover:text-orange-400" href="#" style={{}}>Research</a></li>
<li><a className="transition-colors hover:text-orange-400" href="#" style={{}}>Careers</a></li>
</ul>
</div>
<div>
<h5 className="font-medium mb-4 text-white">Stay Updated</h5>
<div className="flex gap-2">
<input className="border rounded px-3 py-2 focus:outline-none focus:border-orange-500 w-full transition-colors bg-slate-900 border-slate-800 text-slate-300" placeholder="email@institution.org" style={{}} type="email"/>
<button className="bg-orange-500 px-3 py-2 rounded transition-colors text-white hover:bg-orange-600">
<iconify-icon icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-xs border-white/5 text-slate-600" style={{}}>
<p>© 2024 Progeny AI Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-400" href="#" style={{}}>Privacy</a>
<a className="hover:text-slate-400" href="#" style={{}}>Terms</a>
<a className="hover:text-slate-400" href="#" style={{}}>Security</a>
</div>
</div>
</footer>

    </>
  );
}
