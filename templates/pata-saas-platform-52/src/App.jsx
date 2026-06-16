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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[20%] w-[50vw] aspect-square rounded-full bg-indigo-500/10 blur-[120px]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[60vw] aspect-square rounded-full bg-fuchsia-500/10 blur-[150px]"></div>
</div>

<nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-slate-950/60 border-b border-white/[0.05]">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-slate-50 flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                    PATA
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-normal text-slate-400">
<a className="hover:text-slate-50 transition-colors" href="#">Products</a>
<a className="hover:text-slate-50 transition-colors" href="#">Solutions</a>
<a className="hover:text-slate-50 transition-colors" href="#">Developers</a>
<a className="hover:text-slate-50 transition-colors" href="#">Company</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-normal text-slate-400 hover:text-slate-50 transition-colors" href="#">Sign in</a>
<a className="relative inline-flex h-9 items-center justify-center rounded-full bg-slate-50 px-4 text-sm font-medium text-slate-950 shadow transition-all hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-950" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-normal text-slate-300 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
                Pata 2.0 is now live
                <iconify-icon className="text-slate-500" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6 leading-[1.1]">
                Uncover your <br className="hidden md:block"/>
                digital potential.
            </h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-normal mb-10 leading-relaxed">
                A unified platform to discover, manage, and scale your operations with unprecedented clarity and speed.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto relative inline-flex h-11 items-center justify-center rounded-full bg-slate-50 px-8 text-sm font-medium text-slate-950 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all hover:bg-slate-200 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                    Start building for free
                </button>
<button className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-full bg-white/[0.03] px-8 text-sm font-medium text-slate-300 border border-white/[0.08] backdrop-blur-sm transition-all hover:bg-white/[0.08] hover:text-slate-50">
                    Book a demo
                </button>
</div>

<div className="mt-24 relative mx-auto w-full max-w-5xl flex justify-center perspective-[2000px] h-[400px] md:h-[600px]" style={{perspective: '2000px'}}>

<div className="absolute inset-x-4 md:inset-x-12 top-0 bottom-12 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_0_100px_rgba(99,102,241,0.15)] overflow-hidden transition-transform duration-1000 ease-out" style={{transform: 'rotateX(12deg) rotateY(-8deg) rotateZ(2deg)', transformStyle: 'preserve-3d'}}>

<div className="h-14 border-b border-white/[0.05] bg-slate-950/50 flex items-center px-6 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
</div>
<div className="mx-auto w-64 h-6 rounded-md bg-slate-800/50 border border-white/[0.02] flex items-center justify-center text-xs text-slate-500 font-mono">
                            pata.co.bw/dashboard
                        </div>
</div>

<div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 h-full bg-[radial-gradient(ellipse_at_top,rgba(30,41,59,0.5),transparent_80%)]">

<div className="col-span-1 space-y-4">
<div className="h-32 rounded-xl bg-white/[0.02] border border-white/[0.05] p-4 flex flex-col justify-between">
<div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:chart-square-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-500 mb-1">Total Volume</div>
<div className="text-lg font-semibold text-slate-200 tracking-tight">$2.4M</div>
</div>
</div>
<div className="h-48 rounded-xl bg-white/[0.02] border border-white/[0.05] p-4 relative overflow-hidden">
<div className="text-xs text-slate-500 mb-4">Activity</div>

<svg className="absolute bottom-0 left-0 w-full h-24 text-fuchsia-500/20" preserveaspectratio="none" viewbox="0 0 100 50">
<path d="M0,50 L0,30 C20,40 30,10 50,20 C70,30 80,5 100,15 L100,50 Z" fill="currentColor"></path>
<path d="M0,30 C20,40 30,10 50,20 C70,30 80,5 100,15" fill="none" stroke="#d946ef" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="col-span-1 md:col-span-2 rounded-xl bg-slate-950/50 border border-white/[0.05] p-6 shadow-inner">
<div className="flex items-center justify-between mb-6">
<div className="text-sm font-medium text-slate-300">Recent Transactions</div>
<iconify-icon className="text-slate-500" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.01] border border-white/[0.02]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="solar:wallet-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-300">Stripe Payout</div>
<div className="text-[10px] text-slate-500">Today, 14:20</div>
</div>
</div>
<div className="text-xs font-medium text-emerald-400">+$4,200.00</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.01] border border-white/[0.02]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="solar:server-square-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-300">AWS Cloud</div>
<div className="text-[10px] text-slate-500">Yesterday</div>
</div>
</div>
<div className="text-xs font-medium text-slate-300">-$124.50</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute right-[5%] md:right-[-2%] top-[30%] w-64 rounded-xl bg-slate-800/90 backdrop-blur-2xl border border-white/[0.1] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_0_20px_rgba(168,85,247,0.2)] p-5 transition-transform duration-1000 ease-out z-20" style={{transform: 'translateZ(80px) rotateX(12deg) rotateY(-8deg) rotateZ(2deg)'}}>
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-fuchsia-500 to-indigo-500 p-[1px]">
<div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
<iconify-icon className="text-slate-200" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Active</span>
</div>
<div className="text-sm font-medium text-slate-200 mb-1">Security Status</div>
<div className="text-xs text-slate-400 mb-4">All systems operational and encrypted.</div>
<div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
<div className="w-full h-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 shadow-[0_0_10px_#a855f7]"></div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50 mb-4">Engineered for scale.</h2>
<p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">Everything you need to build, deploy, and manage your digital infrastructure with zero friction.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(250px,auto)]">

<div className="md:col-span-2 row-span-2 group relative overflow-hidden rounded-3xl bg-slate-900/50 border border-white/[0.05] p-8 md:p-12 hover:bg-slate-900/80 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 w-full h-full flex flex-col justify-between">
<div>
<iconify-icon className="text-indigo-400 mb-6" icon="solar:bolt-linear" width="32"></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight text-slate-50 mb-3">Lightning Fast Execution</h3>
<p className="text-sm text-slate-400 max-w-md">Our global edge network ensures your data reaches its destination with single-digit millisecond latency.</p>
</div>

<div className="mt-8 h-40 w-full relative flex items-end overflow-hidden">
<div className="w-full flex items-end gap-2 px-4 opacity-50">
<div className="w-1/6 bg-indigo-500/20 rounded-t-sm h-[20%] transition-all group-hover:h-[40%] group-hover:bg-indigo-500/40 duration-500"></div>
<div className="w-1/6 bg-indigo-500/20 rounded-t-sm h-[40%] transition-all group-hover:h-[60%] group-hover:bg-indigo-500/40 duration-500 delay-75"></div>
<div className="w-1/6 bg-indigo-500/20 rounded-t-sm h-[30%] transition-all group-hover:h-[80%] group-hover:bg-indigo-500/40 duration-500 delay-100"></div>
<div className="w-1/6 bg-indigo-500/20 rounded-t-sm h-[60%] transition-all group-hover:h-[50%] group-hover:bg-indigo-500/40 duration-500 delay-150"></div>
<div className="w-1/6 bg-indigo-500/40 rounded-t-sm h-[80%] transition-all group-hover:h-[100%] group-hover:bg-indigo-500/60 duration-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
<div className="w-1/6 bg-indigo-500/20 rounded-t-sm h-[50%] transition-all group-hover:h-[70%] group-hover:bg-indigo-500/40 duration-500 delay-75"></div>
</div>
</div>
</div>
</div>

<div className="col-span-1 rounded-3xl bg-slate-900/50 border border-white/[0.05] p-8 hover:bg-slate-900/80 transition-colors relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-fuchsia-500/20 blur-3xl group-hover:bg-fuchsia-500/30 transition-colors"></div>
<iconify-icon className="text-slate-300 mb-6" icon="solar:lock-password-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-slate-50 mb-2">End-to-End Encryption</h3>
<p className="text-sm text-slate-400">Military-grade security protocols securing your data at rest and in transit.</p>
</div>

<div className="col-span-1 rounded-3xl bg-slate-900/50 border border-white/[0.05] p-8 hover:bg-slate-900/80 transition-colors">
<iconify-icon className="text-slate-300 mb-6" icon="solar:widget-add-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-slate-50 mb-2">Seamless Integrations</h3>
<p className="text-sm text-slate-400">Connect with your favorite tools via our robust, well-documented API.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20">
<div className="rounded-[2.5rem] bg-slate-900/30 border border-white/[0.05] overflow-hidden relative">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50 mb-6">Control everything from a single endpoint.</h2>
<p className="text-slate-400 text-sm md:text-base mb-8">Customize your experience with deeply integrated settings. Toggle features, adjust parameters, and see changes reflect instantly.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Real-time synchronization
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Granular permissions
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Audit logging
                            </li>
</ul>
</div>

<div className="bg-slate-950/80 rounded-2xl border border-white/[0.08] p-6 shadow-2xl backdrop-blur-sm transform lg:rotate-2 transition-transform hover:rotate-0 duration-500">
<div className="space-y-6">

<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-slate-200">Auto-Scaling</div>
<div className="text-xs text-slate-500">Dynamically adjust resources based on load.</div>
</div>
<button className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none">
<span className="sr-only">Use setting</span>
<span className="pointer-events-none absolute mx-auto h-4 w-8 rounded-full bg-indigo-500 transition-colors duration-200 ease-in-out"></span>
<span className="pointer-events-none absolute left-0 inline-block h-5 w-5 translate-x-4 transform rounded-full border border-slate-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out"></span>
</button>
</div>
<hr className="border-white/[0.05]"/>

<div>
<div className="flex justify-between mb-2">
<div className="text-sm font-medium text-slate-200">Compute Limit</div>
<div className="text-xs font-mono text-slate-400">8 Cores</div>
</div>
<div className="relative w-full h-1.5 bg-slate-800 rounded-full">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 w-2/3 rounded-full"></div>
<div className="absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow cursor-pointer border-2 border-slate-900"></div>
</div>
</div>
<hr className="border-white/[0.05]"/>

<div>
<div className="text-sm font-medium text-slate-200 mb-2">Region</div>
<div className="w-full flex items-center justify-between bg-slate-900 border border-white/[0.08] rounded-lg px-3 py-2 cursor-pointer hover:bg-slate-800 transition-colors">
<div className="flex items-center gap-2 text-sm text-slate-300">
<iconify-icon className="text-slate-500" icon="solar:map-point-linear"></iconify-icon>
                                        US-East-1 (N. Virginia)
                                    </div>
<iconify-icon className="text-slate-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/[0.05] bg-slate-950/50 backdrop-blur-lg relative z-10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-xl font-semibold tracking-tighter text-slate-50 mb-4 inline-block text-glow" href="#">PATA</a>
<p className="text-sm text-slate-400 max-w-xs">Building the connective tissue for modern digital businesses. Fast, secure, and reliable.</p>
</div>
<div>
<h4 className="text-sm font-medium text-slate-200 mb-4">Product</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-slate-50 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-slate-50 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-slate-50 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-slate-50 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-200 mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-slate-50 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-slate-50 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-slate-50 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-slate-50 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-200 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-slate-50 transition-colors" href="#">About</a></li>
<li><a className="hover:text-slate-50 transition-colors" href="#">Customers</a></li>
<li><a className="hover:text-slate-50 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-slate-50 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500">© 2024 Pata Inc. All rights reserved.</p>
<div className="flex items-center gap-4 text-slate-500">
<a className="hover:text-slate-300 transition-colors" href="#"><iconify-icon icon="solar:twiter-linear" width="20"></iconify-icon></a>
<a className="hover:text-slate-300 transition-colors" href="#"><iconify-icon icon="solar:github-linear" width="20"></iconify-icon></a>
<a className="hover:text-slate-300 transition-colors" href="#"><iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
