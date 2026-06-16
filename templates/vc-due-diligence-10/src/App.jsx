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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
<div className="absolute inset-0 grid-bg opacity-50"></div>

<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#020204]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-6">
<a className="flex items-center gap-2 group" href="#">
<div className="w-5 h-5 bg-white text-black flex items-center justify-center rounded-sm font-bold text-xs group-hover:rotate-180 transition-transform duration-500">A</div>
<span className="font-mono text-xs tracking-widest text-white/80 group-hover:text-white transition-colors">AFRIINVEST // ANALYST</span>
</a>
<div className="hidden md:flex h-4 w-[1px] bg-white/10"></div>
<div className="hidden md:flex items-center gap-1 text-[10px] font-mono text-slate-500">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    AUDIT ENGINE ACTIVE
                </div>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-1 text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/5">
<span className="opacity-50">⌘</span>
<span>K</span>
</div>
<button className="text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 px-4">

<div className="max-w-7xl mx-auto mb-32 relative">

<div className="flex justify-center mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[10px] font-mono tracking-wider uppercase backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Series A Benchmark Updated
                </div>
</div>
<h1 className="text-center text-6xl md:text-8xl font-medium tracking-tighter text-white mb-8 leading-[0.9]">
                Fundraising readiness <br/>
<span className="text-shimmer">analyst angel.</span>
</h1>
<p className="text-center text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12">
                We simulate VC due diligence before you pitch. Audit your data room, stress-test your metrics, and fix cap table issues with an automated analyst.
            </p>

<div className="max-w-lg mx-auto mb-20 relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative flex items-center bg-[#0a0a0c] border border-white/10 rounded-lg p-1 pr-2 shadow-2xl">
<div className="pl-4 pr-3 text-slate-500">
<iconify-icon icon="solar:terminal-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none text-sm text-indigo-300 font-mono focus:ring-0 placeholder-slate-600 outline-none h-10" readonly="" type="text" value="audit --deck=pre_seed_v2.pdf --target=vc_ready"/>
<button className="bg-white text-black text-xs font-semibold px-4 py-2 rounded hover:bg-slate-200 transition-colors flex items-center gap-2">
                        Run Audit
                        <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="relative perspective-1000 mx-auto max-w-5xl group select-none">

<div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 via-transparent to-transparent blur-3xl -z-10"></div>
<div className="relative transform group-hover:rotate-x-2 transition-transform duration-700 ease-out border border-white/10 rounded-xl bg-[#050507]/90 backdrop-blur-xl overflow-hidden shadow-2xl">

<div className="h-8 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02]">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
<div className="ml-auto text-[10px] font-mono text-slate-500">ANALYSIS_REPORT_042.PDF</div>
</div>

<div className="grid grid-cols-12 gap-px bg-white/5">

<div className="col-span-3 bg-[#050507] p-4 flex flex-col gap-4 min-h-[400px] border-r border-white/5">
<div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">Checklist</div>
<div className="space-y-1">
<div className="h-8 w-full bg-indigo-500/10 border border-indigo-500/20 rounded flex items-center px-3 gap-3">
<iconify-icon className="text-indigo-400 text-xs" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-xs text-indigo-200">Legal Structure</span>
</div>
<div className="h-8 w-full hover:bg-white/5 rounded flex items-center px-3 gap-3 transition-colors">
<iconify-icon className="text-amber-500 text-xs" icon="solar:danger-circle-linear"></iconify-icon>
<span className="text-xs text-slate-400">Churn Velocity</span>
</div>
<div className="h-8 w-full hover:bg-white/5 rounded flex items-center px-3 gap-3 transition-colors">
<iconify-icon className="text-slate-600 text-xs" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-xs text-slate-500">Unit Economics</span>
</div>
<div className="h-8 w-full hover:bg-white/5 rounded flex items-center px-3 gap-3 transition-colors">
<iconify-icon className="text-slate-600 text-xs" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-xs text-slate-500">Team Vesting</span>
</div>
</div>
<div className="mt-auto p-3 rounded bg-white/5 border border-white/5">
<div className="text-[10px] text-slate-500 mb-2">READINESS SCORE</div>
<div className="text-2xl font-mono text-white">72<span className="text-slate-600 text-sm">/100</span></div>
<div className="w-full bg-slate-800 h-1 mt-2 rounded-full overflow-hidden">
<div className="bg-indigo-500 h-full w-[72%]"></div>
</div>
</div>
</div>

<div className="col-span-9 bg-[#050507] p-8 relative">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-sm font-medium text-white">Retention Cohort Analysis</h3>
<p className="text-xs text-slate-500 mt-1">Flagged: Month 3 drop-off exceeds regional benchmark.</p>
</div>
<div className="px-2 py-1 rounded border border-amber-500/30 bg-amber-500/10 text-amber-500 text-[10px] font-mono">NEEDS ATTENTION</div>
</div>

<div className="flex justify-between items-end h-48 mb-8 px-4 gap-4 relative border-b border-white/5 pb-4">

<div className="flex-1 flex flex-col gap-1 justify-end group/bar">
<div className="w-full bg-indigo-500/40 h-[90%] rounded-sm group-hover/bar:bg-indigo-500 transition-colors"></div>
<span className="text-[10px] text-center text-slate-600 font-mono">M1</span>
</div>
<div className="flex-1 flex flex-col gap-1 justify-end group/bar">
<div className="w-full bg-indigo-500/40 h-[75%] rounded-sm group-hover/bar:bg-indigo-500 transition-colors"></div>
<span className="text-[10px] text-center text-slate-600 font-mono">M2</span>
</div>
<div className="flex-1 flex flex-col gap-1 justify-end group/bar">
<div className="w-full bg-indigo-500/40 h-[45%] rounded-sm group-hover/bar:bg-indigo-500 transition-colors relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-amber-500 whitespace-nowrap opacity-0 group-hover/bar:opacity-100 transition-opacity">-15% vs Benchmark</div>
</div>
<span className="text-[10px] text-center text-amber-500/80 font-mono">M3</span>
</div>
<div className="flex-1 flex flex-col gap-1 justify-end group/bar">
<div className="w-full bg-indigo-500/40 h-[40%] rounded-sm group-hover/bar:bg-indigo-500 transition-colors"></div>
<span className="text-[10px] text-center text-slate-600 font-mono">M4</span>
</div>
<div className="flex-1 flex flex-col gap-1 justify-end group/bar">
<div className="w-full bg-indigo-500/40 h-[38%] rounded-sm group-hover/bar:bg-indigo-500 transition-colors"></div>
<span className="text-[10px] text-center text-slate-600 font-mono">M5</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full border-y border-white/5 bg-white/[0.01] py-4 mb-32 overflow-hidden relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020204] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020204] to-transparent z-10"></div>
<div className="flex gap-16 whitespace-nowrap animate-marquee">
<span className="text-sm font-mono text-slate-500 flex items-center gap-2">BENCHMARKING AGAINST:</span>
<span className="text-sm font-mono text-slate-500 flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:star-linear"></iconify-icon> PAYSTACK MAFIA</span>
<span className="text-sm font-mono text-slate-500 flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:star-linear"></iconify-icon> YC W23</span>
<span className="text-sm font-mono text-slate-500 flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:star-linear"></iconify-icon> FLUTTERWAVE ALUMNI</span>
<span className="text-sm font-mono text-slate-500 flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:star-linear"></iconify-icon> ANDELA FELLOWS</span>
<span className="text-sm font-mono text-slate-500 flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:star-linear"></iconify-icon> TECHSTARS LAGOS</span>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 mb-32">
<div className="mb-16">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Investment Intelligence.</h2>
<p className="text-slate-400 max-w-xl text-lg font-light">
                    Move beyond the pitch deck. Our engine acts as a pre-seed analyst to ensure your data room is bulletproof.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-3xl bg-[#0a0a0c] border border-white/10 card-glow p-8 flex flex-col justify-between">
<div className="absolute top-0 right-0 p-32 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Traction Simulation</h3>
<p className="text-sm text-slate-400 leading-relaxed">We project your runway and unit economics against Tier-1 VC benchmarks to predict valuation ranges.</p>
</div>
<div className="mt-8 relative h-48 w-full border border-white/5 bg-black/50 rounded-xl overflow-hidden flex items-end px-4 pb-4 gap-2">

<div className="w-full bg-slate-800 h-[30%] rounded-sm"></div>
<div className="w-full bg-slate-800 h-[40%] rounded-sm"></div>
<div className="w-full bg-slate-800 h-[35%] rounded-sm"></div>
<div className="w-full bg-indigo-500 h-[60%] rounded-sm shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
<div className="w-full bg-indigo-500/50 h-[75%] rounded-sm border-t border-dashed border-white/30"></div>
<div className="w-full bg-indigo-500/30 h-[90%] rounded-sm border-t border-dashed border-white/30"></div>
</div>
</div>

<div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-[#0a0a0c] border border-white/10 card-glow p-8 flex flex-col md:flex-row items-center gap-8">
<div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-all"></div>
<div className="flex-1 relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-400 border border-purple-500/20">
<iconify-icon icon="solar:file-check-linear" width="18"></iconify-icon>
</div>
<span className="text-xs font-mono text-purple-300 uppercase tracking-widest">Data Room Audit</span>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Diligence Automation</h3>
<p className="text-sm text-slate-400">Identify missing IP assignments, unsigned employment contracts, and cap table discrepancies before investors do.</p>
</div>
<div className="flex-1 w-full relative h-40 border border-white/5 rounded-lg bg-black/40 p-4 space-y-2">

<div className="flex items-center justify-between p-2 rounded bg-white/5">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-500" icon="solar:file-text-linear"></iconify-icon>
<div className="h-1.5 w-20 bg-slate-700 rounded-full"></div>
</div>
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between p-2 rounded bg-white/5">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-500" icon="solar:file-text-linear"></iconify-icon>
<div className="h-1.5 w-16 bg-slate-700 rounded-full"></div>
</div>
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between p-2 rounded bg-red-500/10 border border-red-500/20">
<div className="flex items-center gap-2">
<iconify-icon className="text-red-400" icon="solar:file-text-linear"></iconify-icon>
<div className="h-1.5 w-24 bg-red-400/30 rounded-full"></div>
</div>
<span className="text-[9px] text-red-400 font-mono">MISSING</span>
</div>
</div>
</div>

<div className="md:col-span-1 relative group overflow-hidden rounded-3xl bg-[#0a0a0c] border border-white/10 card-glow p-6">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-emerald-500 mb-4" icon="solar:pie-chart-2-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Cap Table Cleanliness</h3>
<p className="text-xs text-slate-500">Spot dilution risks and dead equity on your ledger.</p>
</div>

<div className="md:col-span-1 relative group overflow-hidden rounded-3xl bg-[#0a0a0c] border border-white/10 card-glow p-6">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-cyan-500 mb-4" icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Founder Index</h3>
<p className="text-xs text-slate-500">Quantify your team's operational grit against market leaders.</p>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto px-6 text-center pt-20 pb-10">
<h2 className="text-3xl font-medium text-white mb-8 tracking-tight">Prepare your round with precision.</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative px-6 py-3 bg-white text-black font-medium rounded-lg overflow-hidden transition-all hover:pr-8">
<span className="relative z-10 text-sm">Start Analyst Audit</span>
<div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
<div className="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
<button className="px-6 py-3 text-sm text-slate-400 hover:text-white transition-colors font-mono">
                    &gt; view_sample_report
                </button>
</div>
</div>
</main>
<footer className="border-t border-white/10 bg-[#020204] py-12 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-white/10 flex items-center justify-center rounded-sm text-[8px] text-white">A</div>
<span className="text-xs text-slate-500 font-mono">SYSTEM_STATUS: AUDIT READY</span>
</div>
<div className="flex gap-6">
<a className="text-slate-600 hover:text-indigo-400 transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-slate-600 hover:text-indigo-400 transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
<a className="text-slate-600 hover:text-indigo-400 transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
