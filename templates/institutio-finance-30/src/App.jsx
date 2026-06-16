import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] bg-black pointer-events-none">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/[0.05]">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-normal tracking-tight text-zinc-100 uppercase">Nexus</span>
</div>
<div className="hidden md:flex items-center gap-8 relative">

<div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-150 pointer-events-none"></div>
<a className="text-base font-light text-zinc-400 hover:text-zinc-100 transition-colors duration-300 relative z-10" href="#features">Platform</a>
<a className="text-base font-light text-zinc-400 hover:text-zinc-100 transition-colors duration-300 relative z-10" href="#workflow">Solutions</a>
<a className="text-base font-light text-zinc-400 hover:text-zinc-100 transition-colors duration-300 relative z-10" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-5 relative z-10">
<a className="hidden md:block text-base font-light text-zinc-400 hover:text-zinc-100 transition-colors duration-300" href="#">Sign in</a>
<a className="px-5 py-2.5 text-sm font-normal rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" href="#">Client Portal</a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md mb-8 ring-1 ring-white/5">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] animate-pulse"></span>
<span className="text-xs font-normal text-zinc-300 uppercase tracking-widest">Nexus OS 2.0 Live</span>
</div>
<h1 className="text-5xl md:text-7xl font-normal tracking-tighter leading-tight mb-6 max-w-4xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50">
                Institutional Grade <br/>
                Financial Intelligence
            </h1>
<p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mb-10 leading-relaxed font-light">
                Command your wealth with absolute precision. Advanced analytics, secure workflows, and elite portfolio management designed for high-net-worth operations.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-black font-normal text-base transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-100 flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]" href="#">
                    Request Access
                    <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/[0.03] border border-white/10 text-zinc-200 font-normal text-base transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2 backdrop-blur-sm" href="#">
                    View Documentation
                </a>
</div>

<div className="mt-24 w-full max-w-5xl relative group perspective-1000 z-20">

<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 blur-[80px] -z-10 rounded-[3rem] transition-opacity duration-700 group-hover:opacity-100 opacity-60"></div>
<div className="rounded-2xl border border-white/10 bg-[#050505]/90 backdrop-blur-2xl shadow-[0_0_50px_-12px_rgba(99,102,241,0.15)] overflow-hidden relative transition-transform duration-700 hover:scale-[1.01] flex flex-col h-[450px] md:h-[550px] ring-1 ring-white/5">

<div className="h-14 border-b border-white/5 bg-white/[0.01] flex items-center justify-between px-5 shrink-0">
<div className="flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-white/[0.03] border border-white/5">
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">Live System</span>
</div>
</div>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="w-16 border-r border-white/5 bg-black/40 flex flex-col items-center py-5 gap-6 shrink-0">
<div className="p-2.5 rounded-xl bg-white/[0.05] text-zinc-100 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"><i className="w-5 h-5" data-lucide="layout-dashboard"></i></div>
<div className="p-2.5 rounded-xl text-zinc-600 hover:text-zinc-300 transition-colors cursor-pointer"><i className="w-5 h-5" data-lucide="line-chart"></i></div>
<div className="p-2.5 rounded-xl text-zinc-600 hover:text-zinc-300 transition-colors cursor-pointer"><i className="w-5 h-5" data-lucide="wallet"></i></div>
<div className="p-2.5 rounded-xl text-zinc-600 hover:text-zinc-300 transition-colors mt-auto cursor-pointer"><i className="w-5 h-5" data-lucide="settings"></i></div>
</div>

<div className="flex-1 p-6 md:p-8 flex flex-col gap-6 overflow-hidden relative bg-black/20">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
<div className="p-5 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-md">
<div className="text-sm text-zinc-500 font-normal mb-1">Total Monitored</div>
<div className="text-3xl font-normal text-zinc-100 tracking-tight">$42.8B</div>
<div className="text-sm text-emerald-400/80 mt-2 flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="trending-up"></i> +12.4% vs last quarter</div>
</div>
<div className="p-5 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-md">
<div className="text-sm text-zinc-500 font-normal mb-1">Global Exposure</div>
<div className="text-3xl font-normal text-zinc-100 tracking-tight">Optimized</div>
<div className="text-sm text-indigo-400/80 mt-2 flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="shield-check"></i> Within risk parameters</div>
</div>
<div className="p-5 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-md">
<div className="text-sm text-zinc-500 font-normal mb-1">Active AI Nodes</div>
<div className="text-3xl font-normal text-zinc-100 tracking-tight">1,024</div>
<div className="text-sm text-zinc-400 mt-2 flex items-center gap-1.5"><i className="w-4 h-4 text-yellow-500/80" data-lucide="zap"></i> Processing streams</div>
</div>
</div>

<div className="flex-1 border border-white/5 rounded-2xl bg-black relative overflow-hidden flex flex-col pt-6">
<div className="absolute top-6 left-6 z-20">
<div className="text-base font-normal text-zinc-200 tracking-tight">Alpha Generation Matrix</div>
</div>
<div className="absolute inset-0 flex flex-col justify-end pb-10 px-6 opacity-20 pointer-events-none z-0">
<div className="w-full h-px border-b border-dashed border-white/20 mb-12"></div>
<div className="w-full h-px border-b border-dashed border-white/20 mb-12"></div>
<div className="w-full h-px border-b border-dashed border-white/20"></div>
</div>
<div className="w-full flex-1 relative mt-10 z-10">
<svg className="w-full h-full absolute bottom-0" preserveaspectratio="none" viewbox="0 0 800 200">
<defs>
<lineargradient id="chart-grad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(99, 102, 241, 0.25)"></stop>
<stop offset="100%" stop-color="rgba(99, 102, 241, 0)"></stop>
</lineargradient>
</defs>
<path d="M0,200 L0,150 C100,140 200,180 300,120 C400,60 500,100 600,40 C700,-10 750,30 800,20 L800,200 Z" fill="url(#chart-grad)"></path>
<path d="M0,150 C100,140 200,180 300,120 C400,60 500,100 600,40 C700,-10 750,30 800,20" fill="none" stroke="#818cf8" strokeWidth="2.5" style={{filter: 'drop-shadow(0 4px 10px rgba(99,102,241,0.4))'}}></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-sm font-normal text-indigo-400 uppercase tracking-widest mb-3">Core Capabilities</h2>
<h3 className="text-4xl md:text-5xl font-normal tracking-tight text-zinc-100">Precision at scale</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-zinc-950/50 border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-500 backdrop-blur-sm">
<div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/[0.06] transition-colors duration-500">
<i className="w-6 h-6 text-zinc-400 group-hover:text-zinc-100 transition-colors duration-500" data-lucide="shield"></i>
</div>
<h4 className="text-xl font-normal text-zinc-100 mb-3 tracking-tight">Bank-Grade Security</h4>
<p className="text-base text-zinc-400 leading-relaxed font-light">
                        End-to-end encryption, multi-signature authentications, and air-gapped cold storage integration for ultimate asset protection.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-950/50 border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-500 backdrop-blur-sm">
<div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/[0.06] transition-colors duration-500">
<i className="w-6 h-6 text-zinc-400 group-hover:text-zinc-100 transition-colors duration-500" data-lucide="bar-chart-2"></i>
</div>
<h4 className="text-xl font-normal text-zinc-100 mb-3 tracking-tight">Real-Time Analytics</h4>
<p className="text-base text-zinc-400 leading-relaxed font-light">
                        Aggregate global portfolios across jurisdictions. Instantly analyze risk exposure, liquidity metrics, and performance attribution.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-950/50 border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-500 backdrop-blur-sm">
<div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/[0.06] transition-colors duration-500">
<i className="w-6 h-6 text-zinc-400 group-hover:text-zinc-100 transition-colors duration-500" data-lucide="file-text"></i>
</div>
<h4 className="text-xl font-normal text-zinc-100 mb-3 tracking-tight">Automated Reporting</h4>
<p className="text-base text-zinc-400 leading-relaxed font-light">
                        Generate compliant, board-ready reports in seconds. Customize data points for stakeholders, tax authorities, and auditors seamlessly.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="workflow">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-16 text-center md:text-left">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-zinc-100 mb-4">Streamlined execution</h2>
<p className="text-xl text-zinc-400 max-w-2xl font-light mx-auto md:mx-0">Complex operations reduced to intuitive steps. Engineered for family offices and institutional managers.</p>
</div>
<div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 text-zinc-500 group-hover:text-indigo-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-500 z-10 backdrop-blur-md">
<span className="text-base font-normal">1</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-2xl bg-white/[0.01] border border-white/5 transition-all duration-500 group-hover:border-white/10 group-hover:bg-white/[0.03] backdrop-blur-sm">
<h4 className="text-xl font-normal text-zinc-100 mb-2 tracking-tight">Connect Data Sources</h4>
<p className="text-base text-zinc-400 leading-relaxed font-light">Integrate API feeds from prime brokers, custodians, and private equity platforms for unified visibility.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 text-zinc-500 group-hover:text-indigo-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-500 z-10 backdrop-blur-md">
<span className="text-base font-normal">2</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-2xl bg-white/[0.01] border border-white/5 transition-all duration-500 group-hover:border-white/10 group-hover:bg-white/[0.03] backdrop-blur-sm">
<h4 className="text-xl font-normal text-zinc-100 mb-2 tracking-tight">Define Logic &amp; Parameters</h4>
<p className="text-base text-zinc-400 leading-relaxed font-light">Set custom risk thresholds, compliance rules, and automated rebalancing triggers specific to entity structures.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 text-zinc-500 group-hover:text-indigo-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-500 z-10 backdrop-blur-md">
<span className="text-base font-normal">3</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-2xl bg-white/[0.01] border border-white/5 transition-all duration-500 group-hover:border-white/10 group-hover:bg-white/[0.03] backdrop-blur-sm">
<h4 className="text-xl font-normal text-zinc-100 mb-2 tracking-tight">Deploy &amp; Monitor</h4>
<p className="text-base text-zinc-400 leading-relaxed font-light">Execute strategies securely. Monitor performance via encrypted dashboards with role-based access controls.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-y border-white/5 bg-zinc-950/30 backdrop-blur-sm relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/5">
<div className="text-center md:text-left md:px-8 first:pl-0">
<div className="text-4xl md:text-5xl font-normal text-zinc-100 tracking-tight mb-2">$40B+</div>
<div className="text-sm text-zinc-500 uppercase tracking-widest font-normal">Assets Monitored</div>
</div>
<div className="text-center md:text-left md:px-8">
<div className="text-4xl md:text-5xl font-normal text-zinc-100 tracking-tight mb-2">99.99%</div>
<div className="text-sm text-zinc-500 uppercase tracking-widest font-normal">Uptime SLA</div>
</div>
<div className="text-center md:text-left md:px-8">
<div className="text-4xl md:text-5xl font-normal text-zinc-100 tracking-tight mb-2">0ms</div>
<div className="text-sm text-zinc-500 uppercase tracking-widest font-normal">Latency Execution</div>
</div>
<div className="text-center md:text-left md:px-8">
<div className="text-4xl md:text-5xl font-normal text-zinc-100 tracking-tight mb-2">SOC 2</div>
<div className="text-sm text-zinc-500 uppercase tracking-widest font-normal">Type II Certified</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10">
<div className="max-w-5xl mx-auto px-6">

<div className="rounded-3xl p-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent hover:from-white/20 transition-all duration-700 shadow-2xl relative overflow-hidden group">
<div className="bg-zinc-950/90 backdrop-blur-2xl rounded-[23px] p-10 md:p-16 relative overflow-hidden h-full flex flex-col md:flex-row items-center gap-16">

<div className="absolute -right-32 -bottom-32 w-96 h-96 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-indigo-500/30 transition-colors duration-700"></div>
<div className="flex-1 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 mb-6">
<i className="w-4 h-4 text-indigo-400" data-lucide="wand-2"></i>
<span className="text-sm font-normal text-zinc-300 tracking-wide">Nexus AI Engine</span>
</div>
<h3 className="text-4xl font-normal tracking-tight text-zinc-100 mb-5">Predictive modeling, elevated.</h3>
<p className="text-xl text-zinc-400 leading-relaxed mb-8 font-light">
                            Harness proprietary machine learning models to stress-test portfolios against thousands of macroeconomic scenarios instantly. Move beyond historical data and anticipate market shifts before they occur.
                        </p>
<a className="inline-flex items-center gap-2 text-base font-normal text-zinc-200 hover:text-white transition-colors duration-300 group/link" href="#">
                            Explore AI Capabilities 
                            <i className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>

<div className="w-full md:w-[400px] h-56 rounded-2xl border border-white/10 bg-black/50 flex flex-col p-5 relative overflow-hidden z-10 backdrop-blur-md shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] group-hover:border-white/20 transition-colors duration-700">
<div className="flex items-center justify-between border-b border-white/5 pb-4 mb-5">
<span className="text-sm text-zinc-500 font-mono tracking-tight">sys.predict_scenario()</span>
<i className="w-4 h-4 text-zinc-500" data-lucide="play"></i>
</div>
<div className="flex-1 flex flex-col justify-center space-y-4">
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500/60 w-3/4 rounded-full relative">
<div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/50 blur-sm"></div>
</div>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-purple-500/60 w-1/2 rounded-full relative">
<div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/50 blur-sm"></div>
</div>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-zinc-500/40 w-5/6 rounded-full relative">
<div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/50 blur-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-zinc-100 mb-4">Transparent licensing</h2>
<p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light">Select the architecture that aligns with your operational scale.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">

<div className="p-8 rounded-3xl bg-zinc-950/40 border border-white/5 flex flex-col backdrop-blur-sm hover:bg-white/[0.02] transition-colors duration-500">
<h3 className="text-xl font-normal text-zinc-100 mb-2 tracking-tight">Professional</h3>
<p className="text-base text-zinc-400 mb-8 h-10 font-light">Essential tools for independent managers.</p>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-5xl font-normal tracking-tighter text-zinc-100">$950</span>
<span className="text-base text-zinc-500">/mo</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-base text-zinc-400 font-light">
<i className="text-zinc-500 mt-1 shrink-0 w-5 h-5" data-lucide="check-circle"></i>
                            Up to $100M AUM tracked
                        </li>
<li className="flex items-start gap-3 text-base text-zinc-400 font-light">
<i className="text-zinc-500 mt-1 shrink-0 w-5 h-5" data-lucide="check-circle"></i>
                            Standard reporting suite
                        </li>
<li className="flex items-start gap-3 text-base text-zinc-400 font-light">
<i className="text-zinc-500 mt-1 shrink-0 w-5 h-5" data-lucide="check-circle"></i>
                            Email support
                        </li>
</ul>
<a className="w-full py-3.5 rounded-xl border border-white/10 text-center text-base font-normal text-zinc-200 hover:bg-white/5 transition-colors duration-300" href="#">Select Plan</a>
</div>

<div className="p-8 rounded-3xl bg-zinc-950/80 border border-indigo-500/30 flex flex-col relative transform md:scale-105 shadow-[0_0_50px_-12px_rgba(99,102,241,0.15)] z-20 backdrop-blur-xl">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-50"></div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-normal text-zinc-100 tracking-tight">Institutional</h3>
<span className="px-3 py-1 text-xs font-normal uppercase tracking-widest bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">Popular</span>
</div>
<p className="text-base text-zinc-400 mb-8 h-10 font-light">Advanced architecture for family offices.</p>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-5xl font-normal tracking-tighter text-zinc-100">$3,500</span>
<span className="text-base text-zinc-500">/mo</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-base text-zinc-200 font-light">
<i className="text-indigo-400 mt-1 shrink-0 w-5 h-5" data-lucide="check-circle"></i>
                            Unlimited AUM tracking
                        </li>
<li className="flex items-start gap-3 text-base text-zinc-200 font-light">
<i className="text-indigo-400 mt-1 shrink-0 w-5 h-5" data-lucide="check-circle"></i>
                            Nexus AI Predictive Engine
                        </li>
<li className="flex items-start gap-3 text-base text-zinc-200 font-light">
<i className="text-indigo-400 mt-1 shrink-0 w-5 h-5" data-lucide="check-circle"></i>
                            Custom API integrations
                        </li>
<li className="flex items-start gap-3 text-base text-zinc-200 font-light">
<i className="text-indigo-400 mt-1 shrink-0 w-5 h-5" data-lucide="check-circle"></i>
                            24/7 Priority support
                        </li>
</ul>
<a className="w-full py-3.5 rounded-xl bg-white text-black text-center text-base font-normal hover:bg-zinc-200 transition-colors duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]" href="#">Start Free Trial</a>
</div>

<div className="p-8 rounded-3xl bg-zinc-950/40 border border-white/5 flex flex-col backdrop-blur-sm hover:bg-white/[0.02] transition-colors duration-500">
<h3 className="text-xl font-normal text-zinc-100 mb-2 tracking-tight">Enterprise</h3>
<p className="text-base text-zinc-400 mb-8 h-10 font-light">Custom deployment for global funds.</p>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-5xl font-normal tracking-tighter text-zinc-100">Custom</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-base text-zinc-400 font-light">
<i className="text-zinc-500 mt-1 shrink-0 w-5 h-5" data-lucide="check-circle"></i>
                            Dedicated private cloud
                        </li>
<li className="flex items-start gap-3 text-base text-zinc-400 font-light">
<i className="text-zinc-500 mt-1 shrink-0 w-5 h-5" data-lucide="check-circle"></i>
                            White-labeling options
                        </li>
<li className="flex items-start gap-3 text-base text-zinc-400 font-light">
<i className="text-zinc-500 mt-1 shrink-0 w-5 h-5" data-lucide="check-circle"></i>
                            On-premise deployment
                        </li>
<li className="flex items-start gap-3 text-base text-zinc-400 font-light">
<i className="text-zinc-500 mt-1 shrink-0 w-5 h-5" data-lucide="check-circle"></i>
                            Dedicated success manager
                        </li>
</ul>
<a className="w-full py-3.5 rounded-xl border border-white/10 text-center text-base font-normal text-zinc-200 hover:bg-white/5 transition-colors duration-300" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex flex-col justify-between p-10 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-sm">
<i className="w-8 h-8 text-zinc-600 mb-8" data-lucide="quote"></i>
<p className="text-xl text-zinc-200 mb-10 leading-relaxed font-light">"Nexus transformed our operations. The speed at which we can now aggregate multi-currency portfolios across six jurisdictions is unprecedented. It's not just software; it's a strategic advantage."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-base font-normal text-zinc-300">EH</div>
<div>
<div className="text-base font-normal text-zinc-100">Elena Rostova</div>
<div className="text-sm text-zinc-500 mt-0.5 font-light">Managing Partner, Vesper Capital</div>
</div>
</div>
</div>
<div className="flex flex-col justify-between p-10 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-sm">
<i className="w-8 h-8 text-zinc-600 mb-8" data-lucide="quote"></i>
<p className="text-xl text-zinc-200 mb-10 leading-relaxed font-light">"The AI predictive modeling module identified a critical exposure in our emerging markets sector two weeks before the shift occurred. It paid for itself in a single quarter."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-base font-normal text-zinc-300">JM</div>
<div>
<div className="text-base font-normal text-zinc-100">Jonathan Mercer</div>
<div className="text-sm text-zinc-500 mt-0.5 font-light">CIO, Mercer Family Office</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden z-10 border-t border-white/5">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-950/10 pointer-events-none"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-indigo-500/10 blur-[120px] rounded-t-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-5xl md:text-6xl font-normal tracking-tighter text-zinc-100 mb-6">Elevate your infrastructure.</h2>
<p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light">Join the world's most sophisticated financial institutions already leveraging Nexus.</p>
<a className="inline-flex items-center justify-center px-9 py-4 rounded-full bg-white text-black font-normal text-base transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-100 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] gap-3" href="#">
                Request a Private Demo
                <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-8 relative z-10 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
<div className="col-span-2">
<span className="text-xl font-normal tracking-tighter text-zinc-100 uppercase mb-6 block">Nexus</span>
<p className="text-base text-zinc-500 max-w-xs mb-8 font-light leading-relaxed">Institutional grade financial intelligence for the modern era.</p>
<div className="flex gap-5">
<a className="text-zinc-500 hover:text-zinc-200 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-zinc-500 hover:text-zinc-200 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="text-base font-normal text-zinc-100 mb-5">Platform</h4>
<ul className="space-y-4">
<li><a className="text-base text-zinc-400 hover:text-zinc-100 transition-colors font-light" href="#">Analytics</a></li>
<li><a className="text-base text-zinc-400 hover:text-zinc-100 transition-colors font-light" href="#">Security</a></li>
<li><a className="text-base text-zinc-400 hover:text-zinc-100 transition-colors font-light" href="#">AI Engine</a></li>
<li><a className="text-base text-zinc-400 hover:text-zinc-100 transition-colors font-light" href="#">API</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-normal text-zinc-100 mb-5">Company</h4>
<ul className="space-y-4">
<li><a className="text-base text-zinc-400 hover:text-zinc-100 transition-colors font-light" href="#">About</a></li>
<li><a className="text-base text-zinc-400 hover:text-zinc-100 transition-colors font-light" href="#">Careers</a></li>
<li><a className="text-base text-zinc-400 hover:text-zinc-100 transition-colors font-light" href="#">Blog</a></li>
<li><a className="text-base text-zinc-400 hover:text-zinc-100 transition-colors font-light" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-normal text-zinc-100 mb-5">Legal</h4>
<ul className="space-y-4">
<li><a className="text-base text-zinc-400 hover:text-zinc-100 transition-colors font-light" href="#">Privacy</a></li>
<li><a className="text-base text-zinc-400 hover:text-zinc-100 transition-colors font-light" href="#">Terms</a></li>
<li><a className="text-base text-zinc-400 hover:text-zinc-100 transition-colors font-light" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-zinc-600 font-light">© 2023 Nexus Intelligence. All rights reserved.</p>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02]">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
<span className="text-sm font-normal text-zinc-400">All systems operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
