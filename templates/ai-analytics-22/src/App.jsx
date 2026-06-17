import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-fuchsia-900/20 blur-[120px] mix-blend-screen animate-aurora"></div>
<div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-cyan-900/20 blur-[100px] mix-blend-screen animate-aurora-delayed"></div>
<div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-lime-900/10 blur-[120px] mix-blend-screen animate-aurora"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 opacity-40"></div>
</div>

<nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-slate-950/60 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tighter text-white">AA</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-fuchsia-400 transition-colors" href="#platform">Platform</a>
<a className="hover:text-cyan-400 transition-colors" href="#analytics">Live Data</a>
<a className="hover:text-lime-400 transition-colors" href="#integrations">Ecosystem</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<button className="text-sm font-medium bg-fuchsia-500 text-white px-4 py-1.5 rounded-full hover:bg-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.4)] transition-all">
                    Initialize
                </button>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-24 space-y-32">

<section className="max-w-7xl mx-auto px-6 text-center pt-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lime-500/30 bg-lime-500/10 text-xs font-medium text-lime-400 mb-8 backdrop-blur-sm">
<iconify-icon className="text-base" icon="solar:pulse-linear"></iconify-icon>
<span>Apex Engine v4.0 Online</span>
<div className="w-px h-3 bg-lime-500/30 mx-1"></div>
<a className="text-white hover:underline inline-flex items-center gap-1" href="#">View Telemetry <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-600 max-w-4xl mx-auto mb-6 leading-tight">
                Deep Space Data <br className="hidden md:block"/> Intelligence Grid
            </h1>
<p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-16 font-normal leading-relaxed">
                Harness the power of cyber-electric neural networks. ApexAnalytics processes your planetary-scale data into actionable, hyper-realistic visual nodes instantly.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
<button className="w-full sm:w-auto text-sm font-medium bg-cyan-500 text-slate-950 px-8 py-3.5 rounded-full hover:bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-300 flex items-center justify-center gap-2">
                    Deploy Workspace
                    <iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[700px] flex items-center justify-center pointer-events-none perspective-container">
<div className="absolute inset-0 flex items-center justify-center">

<div className="w-[800px] h-[500px] rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-2xl overflow-hidden isometric-dashboard relative group">

<div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/20 blur-[80px]"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 blur-[80px]"></div>

<div className="h-12 border-b border-white/5 flex items-center justify-between px-6 bg-slate-950/50">
<div className="flex gap-4 items-center">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
</div>
<div className="text-xs font-medium text-slate-500 tracking-widest">APEX // TERMINAL</div>
</div>
<div className="flex gap-3">
<div className="w-16 h-4 bg-slate-800 rounded-full"></div>
<div className="w-4 h-4 rounded-full bg-lime-400/20 border border-lime-400/50 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse"></div>
</div>
</div>
</div>

<div className="p-8 grid grid-cols-3 gap-6 h-full relative">

<div className="col-span-1 space-y-4">
<div className="h-24 rounded-xl border border-white/5 bg-slate-800/40 p-4 flex flex-col justify-between">
<div className="text-xs text-slate-400">Network Load</div>
<div className="text-2xl font-medium text-cyan-400">94.2%</div>
</div>
<div className="h-48 rounded-xl border border-white/5 bg-slate-800/40 p-4 relative overflow-hidden">
<div className="text-xs text-slate-400 mb-4">Query Stream</div>
<div className="space-y-2">
<div className="h-2 w-full bg-slate-700 rounded overflow-hidden"><div className="h-full bg-fuchsia-500 w-3/4"></div></div>
<div className="h-2 w-full bg-slate-700 rounded overflow-hidden"><div className="h-full bg-cyan-400 w-1/2"></div></div>
<div className="h-2 w-full bg-slate-700 rounded overflow-hidden"><div className="h-full bg-lime-400 w-5/6"></div></div>
</div>
</div>
</div>

<div className="col-span-2 space-y-4 relative">

<div className="absolute inset-0 pointer-events-none isometric-layer z-20 flex items-center justify-center">
<div className="w-64 h-32 border border-fuchsia-500/30 bg-slate-900/80 backdrop-blur-md rounded-xl shadow-[0_0_30px_rgba(217,70,239,0.2)] p-4">
<div className="flex items-center gap-2 text-xs font-medium text-fuchsia-400 mb-2">
<iconify-icon icon="solar:cpu-linear"></iconify-icon> Neural Core Active
                                        </div>

<svg className="w-full h-12 stroke-fuchsia-500" fill="none" preserveaspectratio="none" strokeWidth="2" viewbox="0 0 100 30">
<path className="animate-pulse" d="M0 15 Q 12.5 0, 25 15 T 50 15 T 75 15 T 100 15"></path>
</svg>
</div>
</div>
<div className="h-full rounded-xl border border-white/5 bg-slate-800/20 p-6 flex flex-col">
<div className="flex justify-between items-center mb-6">
<div className="text-sm font-medium text-white">Global Render Output</div>
<div className="text-xs text-lime-400 flex items-center gap-1"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> +12.4%</div>
</div>

<div className="flex-1 flex items-end justify-between gap-4 relative">
<div className="w-full bg-slate-800/50 rounded-t h-[40%] relative border-t border-white/10"></div>
<div className="w-full bg-slate-800/50 rounded-t h-[60%] relative border-t border-white/10"></div>
<div className="w-full bg-cyan-500/80 rounded-t h-[85%] relative border-t border-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-cyan-300">Peak</div>
</div>
<div className="w-full bg-slate-800/50 rounded-t h-[50%] relative border-t border-white/10"></div>
<div className="w-full bg-fuchsia-500/80 rounded-t h-[70%] relative border-t border-fuchsia-300 shadow-[0_0_20px_rgba(217,70,239,0.3)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 border-y border-white/5 py-12 bg-slate-900/20 backdrop-blur-sm">
<p className="text-center text-xs font-medium tracking-widest text-slate-500 mb-8 uppercase">Powering infrastructure for tier-1 nodes</p>
<div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 text-xl md:text-2xl font-semibold tracking-tighter text-slate-600">
<span className="hover:text-slate-300 transition-colors cursor-default">NEXUS</span>
<span className="hover:text-slate-300 transition-colors cursor-default">QUANTUM</span>
<span className="hover:text-slate-300 transition-colors cursor-default">ECHO</span>
<span className="hover:text-slate-300 transition-colors cursor-default">PULSAR</span>
<span className="hover:text-slate-300 transition-colors cursor-default">AURA</span>
</div>
</section>

<section className="max-w-7xl mx-auto px-6" id="platform">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Architected for the unknown.</h2>
<p className="text-base text-slate-400 font-normal">Modular, hyper-scalable tools that adapt to your data's darkest depths.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">

<div className="md:col-span-2 relative rounded-2xl border border-slate-800 bg-slate-900/40 p-8 overflow-hidden group hover:border-fuchsia-500/30 transition-colors flex flex-col justify-end">
<div className="absolute -top-24 -right-24 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl group-hover:bg-fuchsia-500/20 transition-all duration-700"></div>
<div className="relative z-10 w-full md:w-2/3">
<div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 mb-6">
<iconify-icon className="text-2xl" icon="solar:code-scan-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Quantum Code Scanning</h3>
<p className="text-sm text-slate-400 font-normal">Automatically untangle spaghetti data structures into pristine, visual node-trees using our proprietary LLM core.</p>
</div>

<div className="absolute top-8 right-8 w-40 h-40 border border-slate-700/50 rounded-full flex items-center justify-center opacity-30 group-hover:opacity-100 group-hover:border-fuchsia-500/30 transition-all duration-500">
<div className="w-24 h-24 border border-slate-600/50 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-fuchsia-500 rounded-full shadow-[0_0_10px_#d946ef]"></div>
</div>

<div className="absolute w-2 h-2 bg-cyan-400 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
</div>
</div>

<div className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-8 overflow-hidden group hover:border-lime-500/30 transition-colors flex flex-col justify-between">
<div className="absolute -bottom-12 -left-12 w-48 h-48 bg-lime-500/10 rounded-full blur-2xl group-hover:bg-lime-500/20 transition-all duration-700"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-lime-400 mb-4">
<iconify-icon className="text-xl" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-white mb-2">Zero-Trust Vaults</h3>
<p className="text-sm text-slate-400 font-normal">Military-grade encryption for every single data packet.</p>
</div>
</div>

<div className="md:col-span-3 relative rounded-2xl border border-slate-800 bg-slate-900/40 p-8 overflow-hidden group hover:border-cyan-500/30 transition-colors flex flex-col md:flex-row items-center justify-between gap-8">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
<div className="max-w-md relative z-10">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-cyan-500/20 bg-cyan-500/10 text-xs font-medium text-cyan-400 mb-4">
<iconify-icon icon="solar:bolt-linear"></iconify-icon> Hyper-Speed Ingestion
                        </div>
<h3 className="text-2xl font-medium tracking-tighter text-white mb-3">Process millions of rows in milliseconds.</h3>
<p className="text-sm text-slate-400 font-normal">Bypass traditional database bottlenecks. Our memory-first architecture means your dashboards never show a loading spinner.</p>
</div>

<div className="flex-1 w-full h-full relative z-10 hidden md:block">
<div className="absolute inset-0 flex flex-col justify-center gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
<div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent relative overflow-hidden">
<div className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full animate-[float-orbit_2s_linear_infinite]"></div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent relative overflow-hidden">
<div className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full animate-[float-orbit_3s_linear_infinite_1s]"></div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-lime-500 to-transparent relative overflow-hidden">
<div className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full animate-[float-orbit_2.5s_linear_infinite_0.5s]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6" id="analytics">
<div className="rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl overflow-hidden p-8 md:p-12 shadow-2xl relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 space-y-6">
<h2 className="text-3xl font-semibold tracking-tighter text-white">Watch your data breathe.</h2>
<p className="text-slate-400 text-sm">Real-time pulse monitoring translates raw server logs into beautiful, kinetic visual feedback. Spot anomalies before they become critical.</p>
<div className="flex items-center gap-6 pt-4">
<div>
<div className="text-2xl font-medium text-white tracking-tight">1.2M</div>
<div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Events / Sec</div>
</div>
<div className="w-px h-10 bg-slate-800"></div>
<div>
<div className="text-2xl font-medium text-cyan-400 tracking-tight">8ms</div>
<div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Latency</div>
</div>
</div>
</div>

<div className="flex-1 w-full h-64 border border-slate-800 bg-slate-950/80 rounded-xl p-6 flex items-end gap-2 relative">

<div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none opacity-20">
<div className="border-b border-slate-600 w-full h-0"></div>
<div className="border-b border-slate-600 w-full h-0"></div>
<div className="border-b border-slate-600 w-full h-0"></div>
<div className="border-b border-slate-600 w-full h-0"></div>
</div>

<div className="w-full bg-cyan-500/20 border border-cyan-500/50 rounded-t-sm animate-bar-1"></div>
<div className="w-full bg-fuchsia-500/20 border border-fuchsia-500/50 rounded-t-sm animate-bar-2"></div>
<div className="w-full bg-slate-700/50 rounded-t-sm animate-bar-3"></div>
<div className="w-full bg-lime-400/20 border border-lime-400/50 rounded-t-sm animate-bar-4"></div>
<div className="w-full bg-cyan-500/20 border border-cyan-500/50 rounded-t-sm animate-bar-2" style={{animationDelay: '0.8s'}}></div>
<div className="w-full bg-slate-700/50 rounded-t-sm animate-bar-1" style={{animationDelay: '1.2s'}}></div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold tracking-tighter text-white">Built for the whole collective</h2>
</div>
<div className="flex justify-center mb-8">
<div className="inline-flex border border-slate-800 rounded-full p-1 bg-slate-900/50 backdrop-blur-sm">
<button className="px-6 py-2 rounded-full text-sm font-medium bg-slate-800 text-white shadow-sm transition-colors">Managers</button>
<button className="px-6 py-2 rounded-full text-sm font-medium text-slate-400 hover:text-white transition-colors">Developers</button>
<button className="px-6 py-2 rounded-full text-sm font-medium text-slate-400 hover:text-white transition-colors">Designers</button>
</div>
</div>

<div className="border border-white/5 bg-slate-900/30 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
<iconify-icon className="text-4xl text-fuchsia-400 mb-6" icon="solar:pie-chart-3-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-4">High-Level Executive Overviews</h3>
<p className="text-slate-400 text-sm max-w-xl mx-auto">Get macro-level insights without getting bogged down in code. Export beautiful, boardroom-ready reports with a single click.</p>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 overflow-hidden py-20 relative" id="integrations">
<div className="text-center relative z-10 mb-16">
<h2 className="text-3xl font-semibold tracking-tighter text-white mb-4">Connects to your universe</h2>
<p className="text-slate-400 text-sm">Seamless ingestion from every tool in your stack.</p>
</div>
<div className="relative w-full max-w-3xl mx-auto h-[400px] flex items-center justify-center pointer-events-none">

<div className="w-24 h-24 rounded-full bg-slate-900 border border-cyan-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.2)] z-20">
<span className="text-xl font-semibold tracking-tighter text-white">AA</span>
</div>

<div className="absolute w-[250px] h-[250px] rounded-full border border-slate-800/80"></div>
<div className="absolute w-[400px] h-[400px] rounded-full border border-slate-800/60"></div>

<div className="absolute w-full h-full flex items-center justify-center z-30">
<div className="orbit-1 absolute flex items-center justify-center">
<div className="w-12 h-12 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center text-slate-300 shadow-xl backdrop-blur-sm -rotate-0">
<iconify-icon className="text-xl text-fuchsia-400" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="absolute -bottom-6 text-[10px] text-slate-500 tracking-widest uppercase">Chat</span>
</div>
</div>
</div>
<div className="absolute w-full h-full flex items-center justify-center z-30">
<div className="orbit-2 absolute flex items-center justify-center" style={{width: '400px', height: '400px'}}>
<div className="w-12 h-12 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center text-slate-300 shadow-xl backdrop-blur-sm">
<iconify-icon className="text-xl text-cyan-400" icon="solar:programming-linear"></iconify-icon>
<span className="absolute -bottom-6 text-[10px] text-slate-500 tracking-widest uppercase">Code</span>
</div>
</div>
</div>
<div className="absolute w-full h-full flex items-center justify-center z-30">
<div className="orbit-3 absolute flex items-center justify-center" style={{width: '250px', height: '250px'}}>
<div className="w-12 h-12 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center text-slate-300 shadow-xl backdrop-blur-sm">
<iconify-icon className="text-xl text-lime-400" icon="solar:wallet-money-linear"></iconify-icon>
<span className="absolute -bottom-6 text-[10px] text-slate-500 tracking-widest uppercase">Pay</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6">
<div className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x">

<div className="min-w-[300px] md:min-w-[400px] p-8 rounded-2xl border border-white/5 bg-slate-900/40 snap-center">
<div className="flex text-lime-400 mb-4 text-sm gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 text-sm mb-6 leading-relaxed">"Switching to ApexAnalytics felt like upgrading from a bicycle to a starship. The visual node-mapping alone saved our dev team hundreds of hours."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full border border-slate-700 bg-gradient-to-br from-fuchsia-600 to-cyan-600 flex items-center justify-center text-white text-xs font-semibold shadow-[0_0_10px_rgba(217,70,239,0.2)]">JD</div>
<div>
<div className="text-sm font-medium text-white">J. Doe</div>
<div className="text-xs text-slate-500">CTO, Nexus Corp</div>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] p-8 rounded-2xl border border-white/5 bg-slate-900/40 snap-center">
<div className="flex text-lime-400 mb-4 text-sm gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 text-sm mb-6 leading-relaxed">"The isometric dashboard isn't just eye-candy; it completely reframed how we understand our user journey flow. Unparalleled fidelity."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full border border-slate-700 bg-gradient-to-br from-lime-600 to-teal-600 flex items-center justify-center text-white text-xs font-semibold shadow-[0_0_10px_rgba(163,230,53,0.2)]">SW</div>
<div>
<div className="text-sm font-medium text-white">S. Williams</div>
<div className="text-xs text-slate-500">VP Data, Quantum</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 text-center" id="pricing">
<h2 className="text-3xl font-semibold tracking-tighter text-white mb-6">Simple, scalable pricing</h2>

<div className="flex items-center justify-center gap-4 mb-12">
<span className="text-sm text-slate-400 font-medium">Monthly</span>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 transition-transform duration-300" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-700 cursor-pointer border border-slate-600 transition-colors duration-300" htmlFor="toggle"></label>
</div>
<span className="text-sm text-white font-medium flex items-center gap-2">Annually <span className="text-[10px] bg-lime-500/10 text-lime-400 px-2 py-0.5 rounded border border-lime-500/20 uppercase tracking-widest">-20%</span></span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">

<div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/30">
<div className="text-slate-400 text-sm font-medium mb-4">Core Vector</div>
<div className="mb-6 flex items-end gap-1">
<span className="text-4xl font-semibold text-white tracking-tighter">$49</span>
<span className="text-slate-500 text-sm mb-1">/mo</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-300">
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Up to 1M events/month</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Standard 2D Dashboards</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> 7-day data retention</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-slate-700 text-sm font-medium text-white hover:bg-slate-800 transition-colors">Start Standard</button>
</div>

<div className="p-8 rounded-2xl border border-fuchsia-500/50 bg-slate-900/60 relative overflow-hidden shadow-[0_0_30px_rgba(217,70,239,0.1)]">
<div className="absolute top-0 right-0 bg-fuchsia-500 text-white text-[10px] uppercase tracking-widest px-3 py-1 font-semibold rounded-bl-lg">Most Popular</div>
<div className="absolute -right-20 -top-20 w-40 h-40 bg-fuchsia-500/20 blur-2xl rounded-full pointer-events-none"></div>
<div className="text-fuchsia-400 text-sm font-medium mb-4 flex items-center gap-2"><iconify-icon icon="solar:crown-star-linear"></iconify-icon> Deep Space Pro</div>
<div className="mb-6 flex items-end gap-1">
<span className="text-4xl font-semibold text-white tracking-tighter">$199</span>
<span className="text-slate-500 text-sm mb-1">/mo</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-300 relative z-10">
<li className="flex items-center gap-2"><iconify-icon className="text-fuchsia-500" icon="solar:check-circle-bold"></iconify-icon> Unlimited events</li>
<li className="flex items-center gap-2"><iconify-icon className="text-fuchsia-500" icon="solar:check-circle-bold"></iconify-icon> Full 3D Isometric Mapping</li>
<li className="flex items-center gap-2"><iconify-icon className="text-fuchsia-500" icon="solar:check-circle-bold"></iconify-icon> Infinite retention vault</li>
<li className="flex items-center gap-2"><iconify-icon className="text-fuchsia-500" icon="solar:check-circle-bold"></iconify-icon> Priority GPU rendering</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-fuchsia-500 text-sm font-medium text-white hover:bg-fuchsia-400 transition-colors shadow-[0_0_15px_rgba(217,70,239,0.3)] relative z-10">Upgrade to Pro</button>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6">
<h3 className="text-lg font-medium text-white mb-6 tracking-tight">Technical Specifications</h3>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse text-sm">
<thead>
<tr className="border-b border-slate-800 text-slate-400">
<th className="py-4 px-4 font-medium w-1/3">Feature</th>
<th className="py-4 px-4 font-medium text-center">Legacy BI</th>
<th className="py-4 px-4 font-medium text-center text-cyan-400 border-b-2 border-cyan-400 bg-slate-900/30 rounded-t">ApexAnalytics</th>
</tr>
</thead>
<tbody className="text-slate-300">
<tr className="border-b border-slate-800/50 hover:bg-slate-900/30 transition-colors">
<td className="py-4 px-4">Render Engine</td>
<td className="py-4 px-4 text-center text-slate-500">DOM-based</td>
<td className="py-4 px-4 text-center text-white bg-slate-900/30">WebGL / WebGPU</td>
</tr>
<tr className="border-b border-slate-800/50 hover:bg-slate-900/30 transition-colors">
<td className="py-4 px-4">Data Latency</td>
<td className="py-4 px-4 text-center text-slate-500">~5-10 seconds</td>
<td className="py-4 px-4 text-center text-lime-400 bg-slate-900/30">&lt; 10ms</td>
</tr>
<tr className="border-b border-slate-800/50 hover:bg-slate-900/30 transition-colors">
<td className="py-4 px-4">UI Topology</td>
<td className="py-4 px-4 text-center text-slate-500">Flat 2D Grids</td>
<td className="py-4 px-4 text-center text-white bg-slate-900/30">Z-Axis Isometric</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tighter text-white mb-8 text-center">Transmission Queries</h2>
<div className="space-y-4">
<details className="group border border-slate-800 bg-slate-900/30 rounded-xl p-6 open:bg-slate-900/60 transition-colors cursor-pointer shadow-sm">
<summary className="flex justify-between items-center font-medium text-sm text-white outline-none list-none">
                        How hard is it to migrate from our legacy warehouse?
                        <iconify-icon className="text-slate-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-slate-400 text-sm mt-4 leading-relaxed pl-2 border-l border-cyan-500/30">
                        Drop in our API key and our ingestion engine handles the rest. Most tier-1 nodes are fully operational within 15 minutes of initialization.
                    </p>
</details>
<details className="group border border-slate-800 bg-slate-900/30 rounded-xl p-6 open:bg-slate-900/60 transition-colors cursor-pointer shadow-sm">
<summary className="flex justify-between items-center font-medium text-sm text-white outline-none list-none">
                        Does the 3D dashboard require a dedicated GPU?
                        <iconify-icon className="text-slate-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-slate-400 text-sm mt-4 leading-relaxed pl-2 border-l border-fuchsia-500/30">
                        No. We leverage cutting-edge WebGL optimizations and compute clusters on our end. If your machine can run a modern browser, it can run ApexAnalytics flawlessly.
                    </p>
</details>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 text-center py-20 relative">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-full h-full max-w-lg bg-cyan-500/10 blur-[100px] rounded-full"></div>
</div>
<div className="relative z-10">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-6">Enter the Grid.</h2>
<p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">Stop looking at dead tables. Start interacting with living data.</p>
<button className="relative inline-flex group items-center justify-center px-10 py-4 text-lg font-medium text-white transition-all duration-300 bg-fuchsia-600 rounded-full hover:bg-fuchsia-500 focus:outline-none overflow-hidden shadow-[0_0_40px_rgba(217,70,239,0.5)]">
<span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
<span className="relative flex items-center gap-2">Initialize Core Sequence <iconify-icon icon="solar:rocket-linear"></iconify-icon></span>
</button>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">

<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<span className="text-lg font-semibold tracking-tighter text-white">AA</span>
</div>
<p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                        Forging the deep space infrastructure for planetary-scale data intelligence.
                    </p>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4">Platform</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Engine v4.0</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Neural Mapping</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Security Vault</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-fuchsia-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-fuchsia-400 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-fuchsia-400 transition-colors" href="#">System Status</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-lime-400 transition-colors" href="#">About Void</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Contact Log</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
<div className="text-xs text-slate-600 font-medium">
                    © 2024 ApexAnalytics. All systems nominal.
                </div>
<div className="flex gap-4 text-lg text-slate-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:link-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:code-circle-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
