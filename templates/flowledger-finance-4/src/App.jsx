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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-md flex items-center justify-center text-slate-950">
<iconify-icon icon="lucide:activity" width="16"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tighter text-lg">FlowLedger</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#company">Company</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="text-sm font-medium bg-white text-slate-950 px-4 py-2 rounded-full hover:bg-slate-200 transition-colors" href="#">Start Free</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                New: AI-Powered Forecasting v2.0
            </div>

<h1 className="text-5xl md:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
                Your Entire Cashflow,<br/> In One Smart Dashboard
            </h1>

<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Consolidate bank accounts, track real-time expenses, and forecast runway with precision. The operating system for modern startup finance.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="group relative px-6 py-3 bg-white text-slate-950 text-sm font-medium rounded-lg hover:bg-slate-100 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Get Started
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="px-6 py-3 text-sm font-medium text-slate-300 border border-white/10 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:play-circle" width="16"></iconify-icon>
                    Watch Demo
                </button>
</div>

<div className="relative max-w-5xl mx-auto perspective-[2000px]">

<div className="animate-float relative bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden aspect-[16/10] ring-1 ring-white/10">

<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-20"></div>

<div className="flex h-full text-left">

<div className="w-16 md:w-64 border-r border-white/5 bg-slate-900/50 flex flex-col p-4">
<div className="h-8 w-8 rounded bg-white/10 mb-8"></div>
<div className="space-y-2">
<div className="h-8 w-full rounded bg-white/10 flex items-center px-3 gap-3">
<iconify-icon className="text-white/60" icon="lucide:layout-grid"></iconify-icon>
<div className="hidden md:block h-2 w-20 bg-white/20 rounded-full"></div>
</div>
<div className="h-8 w-full rounded hover:bg-white/5 flex items-center px-3 gap-3 transition-colors">
<iconify-icon className="text-white/40" icon="lucide:wallet"></iconify-icon>
<div className="hidden md:block h-2 w-16 bg-white/10 rounded-full"></div>
</div>
<div className="h-8 w-full rounded hover:bg-white/5 flex items-center px-3 gap-3 transition-colors">
<iconify-icon className="text-white/40" icon="lucide:pie-chart"></iconify-icon>
<div className="hidden md:block h-2 w-24 bg-white/10 rounded-full"></div>
</div>
</div>
<div className="mt-auto flex items-center gap-3 px-1">
<div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
<div className="hidden md:block h-2 w-20 bg-white/10 rounded-full"></div>
</div>
</div>

<div className="flex-1 flex flex-col bg-slate-950/30">

<div className="h-14 border-b border-white/5 flex items-center justify-between px-6">
<div className="h-2 w-32 bg-white/10 rounded-full"></div>
<div className="flex gap-3">
<div className="h-8 w-8 rounded-full border border-white/10"></div>
<div className="h-8 w-8 rounded-full border border-white/10"></div>
</div>
</div>

<div className="p-6 grid grid-cols-3 gap-6 overflow-hidden">

<div className="col-span-3 md:col-span-2 bg-slate-900 border border-white/5 rounded-lg p-5 relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div>
<div className="text-xs text-slate-500 mb-1">Total Revenue</div>
<div className="text-2xl font-semibold text-white tracking-tight">$284,500.00</div>
</div>
<div className="flex gap-1">
<div className="h-6 w-12 bg-white/5 rounded text-[10px] flex items-center justify-center text-slate-400">12M</div>
<div className="h-6 w-12 bg-white/10 rounded text-[10px] flex items-center justify-center text-white">30D</div>
</div>
</div>

<div className="h-32 w-full flex items-end gap-2 opacity-80">
<div className="w-full bg-indigo-500/20 h-[40%] rounded-t-sm relative group hover:bg-indigo-500/40 transition-all"></div>
<div className="w-full bg-indigo-500/20 h-[65%] rounded-t-sm hover:bg-indigo-500/40 transition-all"></div>
<div className="w-full bg-indigo-500/20 h-[50%] rounded-t-sm hover:bg-indigo-500/40 transition-all"></div>
<div className="w-full bg-indigo-500/20 h-[80%] rounded-t-sm hover:bg-indigo-500/40 transition-all"></div>
<div className="w-full bg-indigo-500/20 h-[60%] rounded-t-sm hover:bg-indigo-500/40 transition-all"></div>
<div className="w-full bg-indigo-500/20 h-[75%] rounded-t-sm hover:bg-indigo-500/40 transition-all"></div>
<div className="w-full bg-gradient-to-t from-indigo-500 to-cyan-400 h-[95%] rounded-t-sm shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
</div>
</div>

<div className="col-span-3 md:col-span-1 space-y-6">
<div className="bg-slate-900 border border-white/5 rounded-lg p-5">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-emerald-400" icon="lucide:arrow-up-right"></iconify-icon>
<span className="text-xs text-slate-400">Net Profit</span>
</div>
<div className="text-xl font-medium text-white tracking-tight mb-2">$12,402</div>
<div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
<div className="bg-emerald-500 w-[70%] h-full rounded-full"></div>
</div>
</div>
<div className="bg-slate-900 border border-white/5 rounded-lg p-5">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-purple-400" icon="lucide:credit-card"></iconify-icon>
<span className="text-xs text-slate-400">Burn Rate</span>
</div>
<div className="text-xl font-medium text-white tracking-tight mb-2">$4,200</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="text-emerald-400 font-medium">-12%</span> vs last month
                                        </div>
</div>
</div>

<div className="col-span-3 bg-slate-900 border border-white/5 rounded-lg p-5">
<div className="flex flex-col gap-3">
<div className="flex justify-between items-center opacity-60">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-white/10"></div>
<div className="h-2 w-24 bg-white/20 rounded-full"></div>
</div>
<div className="h-2 w-16 bg-white/20 rounded-full"></div>
</div>
<div className="flex justify-between items-center opacity-40">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-white/10"></div>
<div className="h-2 w-32 bg-white/20 rounded-full"></div>
</div>
<div className="h-2 w-16 bg-white/20 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 left-4 right-4 h-12 bg-indigo-500/30 blur-[60px] rounded-[100%] z-0"></div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-slate-950/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-500 mb-8">TRUSTED BY INNOVATIVE FINANCE TEAMS</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale">

<div className="flex items-center gap-2"><div className="w-5 h-5 bg-white rounded-full"></div><span className="font-bold text-lg">Acme Corp</span></div>
<div className="flex items-center gap-2"><div className="w-5 h-5 bg-white rounded-sm"></div><span className="font-bold text-lg">GlobalBank</span></div>
<div className="flex items-center gap-2"><div className="w-5 h-5 border-2 border-white rounded-full"></div><span className="font-bold text-lg">Stark Ind</span></div>
<div className="flex items-center gap-2"><div className="w-5 h-5 bg-white rotate-45 rounded-sm"></div><span className="font-bold text-lg">Omega</span></div>
<div className="flex items-center gap-2"><div className="w-5 h-5 border border-white rounded-sm"></div><span className="font-bold text-lg">Nexus</span></div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-10 w-10 bg-slate-900 border border-white/10 rounded-lg flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
<iconify-icon icon="lucide:bar-chart-2" width="20"></iconify-icon>
</div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1 group-hover:text-indigo-200 transition-colors"><span className="text-emerald-400">+120%</span></div>
<h3 className="text-base font-medium text-white mb-2">Faster Insights</h3>
<p className="text-sm text-slate-400 leading-relaxed">Real-time KPIs derived instantly from your synced accounts.</p>
</div>
</div>

<div className="group relative p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-10 w-10 bg-slate-900 border border-white/10 rounded-lg flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
</div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1 group-hover:text-cyan-200 transition-colors">24/7</div>
<h3 className="text-base font-medium text-white mb-2">Smart Monitoring</h3>
<p className="text-sm text-slate-400 leading-relaxed">AI-driven cashflow analysis that never sleeps, spotting trends early.</p>
</div>
</div>

<div className="group relative p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-10 w-10 bg-slate-900 border border-white/10 rounded-lg flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
<iconify-icon icon="lucide:file-text" width="20"></iconify-icon>
</div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1 group-hover:text-purple-200 transition-colors">1-Click</div>
<h3 className="text-base font-medium text-white mb-2">Automated Reports</h3>
<p className="text-sm text-slate-400 leading-relaxed">Generate board-ready financial PDFs without opening a spreadsheet.</p>
</div>
</div>

<div className="group relative p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-10 w-10 bg-slate-900 border border-white/10 rounded-lg flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
<iconify-icon icon="lucide:layers" width="20"></iconify-icon>
</div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1 group-hover:text-pink-200 transition-colors">100+</div>
<h3 className="text-base font-medium text-white mb-2">Multi-account Sync</h3>
<p className="text-sm text-slate-400 leading-relaxed">Connect Stripe, PayPal, and major banks in a unified ledger view.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 relative border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Powerful capabilities.</h2>
<p className="text-slate-400 text-lg">Everything you need to manage your financial health.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">

<div className="md:col-span-2 bg-slate-900 border border-white/5 rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col">
<h3 className="text-2xl font-semibold text-white mb-2">Global Ledger Sync</h3>
<p className="text-slate-400 mb-8 max-w-sm">Connect accounts from 40+ countries. Real-time FX conversion and consolidation.</p>

<div className="flex-1 w-full bg-slate-950 border border-white/10 rounded-t-xl overflow-hidden shadow-2xl translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
<div className="flex items-center gap-2 p-3 border-b border-white/5 bg-slate-900/50">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>
<div className="p-4 space-y-3">
<div className="flex justify-between items-center p-3 rounded bg-white/[0.03]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400"><iconify-icon icon="lucide:landmark"></iconify-icon></div>
<div className="text-sm text-slate-300">Chase Business</div>
</div>
<span className="text-sm text-white font-mono">$124,000.00</span>
</div>
<div className="flex justify-between items-center p-3 rounded bg-white/[0.03]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-400"><iconify-icon icon="lucide:credit-card"></iconify-icon></div>
<div className="text-sm text-slate-300">Stripe Payments</div>
</div>
<span className="text-sm text-white font-mono">$42,305.20</span>
</div>
<div className="flex justify-between items-center p-3 rounded bg-white/[0.03]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-emerald-500/20 flex items-center justify-center text-emerald-400"><iconify-icon icon="lucide:banknote"></iconify-icon></div>
<div className="text-sm text-slate-300">Wise (EUR)</div>
</div>
<span className="text-sm text-white font-mono">€12,100.00</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-900 border border-white/5 rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 border border-cyan-500/20">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Smart Limits</h3>
<p className="text-slate-400 text-sm mb-8">Auto-lock cards when budget thresholds are reached.</p>

<div className="mt-auto bg-slate-950/50 rounded-lg p-4 border border-white/5">
<div className="flex justify-between text-xs text-slate-400 mb-2">
<span>Marketing Budget</span>
<span className="text-white">82%</span>
</div>
<div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-4">
<div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 w-[82%]"></div>
</div>
<div className="flex items-center gap-2 text-xs text-amber-400 bg-amber-500/10 p-2 rounded">
<iconify-icon icon="lucide:alert-circle"></iconify-icon>
                                Approaching limit
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Simple, transparent pricing</h2>
<p className="text-slate-400 text-lg mb-8">No hidden fees. Cancel anytime.</p>

<div className="flex items-center justify-center gap-3">
<span className="text-sm font-medium text-slate-400">Monthly</span>
<label className="relative inline-flex items-center cursor-pointer" htmlFor="billing-toggle">
<input className="sr-only peer toggle-checkbox" id="billing-toggle" type="checkbox"/>
<div className="w-11 h-6 bg-slate-800 border border-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all toggle-label"></div>
</label>
<span className="text-sm font-medium text-white">Yearly <span className="text-indigo-400 text-xs ml-1 font-normal">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="bg-slate-900/50 border border-white/5 rounded-xl p-8 flex flex-col hover:border-white/10 transition-colors">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<div className="text-4xl font-semibold text-white tracking-tight mb-1">$0</div>
<p className="text-sm text-slate-500 mb-6">Forever free for solo founders.</p>
<button className="w-full py-2 rounded-lg bg-white/5 border border-white/5 text-sm font-medium hover:bg-white/10 transition-colors text-white mb-8">Start Free</button>
<ul className="space-y-3 text-sm text-slate-400">
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> 2 Bank Connections</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Basic Reporting</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> 7-Day History</li>
</ul>
</div>

<div className="relative bg-slate-900 border rounded-xl p-8 flex flex-col shadow-2xl z-10 overflow-hidden">

<div className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-b from-indigo-500 to-transparent pointer-events-none -z-10"></div>
<div className="absolute top-0 inset-x-0 h-[1px] bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)]"></div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-indigo-400">Growth</h3>
<span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-semibold border border-indigo-500/20 uppercase tracking-wide">Popular</span>
</div>
<div className="text-4xl font-semibold text-white tracking-tight mb-1">$49</div>
<p className="text-sm text-slate-500 mb-6">Per month, billed annually.</p>
<button className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors text-sm font-medium text-white shadow-lg shadow-indigo-500/25 mb-8">Get Started</button>
<ul className="space-y-3 text-sm text-slate-300">
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Unlimited Connections</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> AI Forecasting</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Team Permissions</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Export to Xero/Quickbooks</li>
</ul>
</div>

<div className="bg-slate-900/50 border border-white/5 rounded-xl p-8 flex flex-col hover:border-white/10 transition-colors">
<h3 className="text-lg font-medium text-white mb-2">Scale</h3>
<div className="text-4xl font-semibold text-white tracking-tight mb-1">$199</div>
<p className="text-sm text-slate-500 mb-6">For larger finance teams.</p>
<button className="w-full py-2 rounded-lg bg-white/5 border border-white/5 text-sm font-medium hover:bg-white/10 transition-colors text-white mb-8">Contact Sales</button>
<ul className="space-y-3 text-sm text-slate-400">
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Custom API Access</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Dedicated Account Manager</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Audit Logs</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> SSO / SAML</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-950/50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center text-3xl font-semibold text-white mb-16 tracking-tight">Loved by founders</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-slate-900 border border-white/5 p-6 rounded-xl">
<div className="flex items-center gap-1 text-amber-400 mb-4">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"Finally, a dashboard that understands startup finance. The forecasting tool saved us from a cash crunch last quarter."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500"></div>
<div>
<div className="text-white text-sm font-medium">Sarah Jenkins</div>
<div className="text-slate-500 text-xs">CEO, TechFlow</div>
</div>
</div>
</div>

<div className="bg-slate-900 border border-white/5 p-6 rounded-xl">
<div className="flex items-center gap-1 text-amber-400 mb-4">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"The Stripe integration is flawless. I used to spend 5 hours a week on spreadsheets, now it takes 5 minutes."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-500"></div>
<div>
<div className="text-white text-sm font-medium">Mark Davies</div>
<div className="text-slate-500 text-xs">Founder, Sitemate</div>
</div>
</div>
</div>

<div className="bg-slate-900 border border-white/5 p-6 rounded-xl">
<div className="flex items-center gap-1 text-amber-400 mb-4">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"Beautiful UI, rock-solid data. It's the first tab I open every morning. The burn rate alerts are a lifesaver."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-indigo-500"></div>
<div>
<div className="text-white text-sm font-medium">Elena Rodriguez</div>
<div className="text-slate-500 text-xs">CFO, Bloom</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-white/10 rounded flex items-center justify-center text-white">
<iconify-icon icon="lucide:activity" width="12"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight">FlowLedger</span>
</div>
<p className="text-sm text-slate-500 mb-4">The operating system for modern finance teams.</p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Product</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Stay updated</h4>
<div className="flex gap-2">
<input className="bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors w-full" placeholder="Enter your email" type="email"/>
<button className="bg-white text-slate-950 px-3 py-2 rounded text-sm font-medium hover:bg-slate-200 transition-colors">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-slate-500">
<p>© 2024 FlowLedger Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
