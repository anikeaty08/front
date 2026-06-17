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
      
<div className="noise-overlay"></div>
<div className="spotlight spotlight-1"></div>
<div className="spotlight spotlight-2"></div>
<div className="spotlight spotlight-3"></div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
<div className="glass-panel rounded-full px-6 h-12 flex items-center justify-between w-full max-w-4xl shadow-2xl shadow-indigo-500/10">
<div className="flex items-center gap-6">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
<span className="iconify" data-icon="lucide:disc-3" data-width="14"></span>
</div>
<span className="text-sm font-semibold text-white tracking-tight">Orbit</span>
</a>
<div className="hidden md:flex items-center gap-5">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Features</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Method</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Customers</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>
</div>
<div className="flex items-center gap-3">
<a className="text-xs font-medium text-slate-300 hover:text-white transition-colors" href="#">Sign In</a>
<a className="h-7 px-3 rounded-full bg-white text-[#030014] text-xs font-semibold flex items-center hover:bg-slate-200 transition-colors" href="#">Get Started</a>
</div>
</div>
</nav>

<section className="relative min-h-screen pt-40 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden hero-trigger">
<div className="relative z-10 max-w-4xl mx-auto text-center mb-16">

<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 backdrop-blur-md mb-8 hover:border-indigo-500/40 transition-colors cursor-pointer group">
<span className="flex h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_#818cf8]"></span>
<span className="text-[11px] font-medium text-indigo-200 tracking-wide uppercase">New Version 2.0</span>
<span className="w-px h-3 bg-indigo-500/20 mx-1"></span>
<span className="text-[11px] text-indigo-300 group-hover:text-white transition-colors flex items-center gap-1">
                    See what's changed <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="10"></span>
</span>
</div>

<h1 className="reveal delay-100 text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95] mb-6 text-gradient-hero">
                Linearity for <br/>
<span className="text-glow-accent relative inline-block">
                    hyper-growth.
                    
<span className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></span>
</span>
</h1>
<p className="reveal delay-200 text-lg md:text-xl text-slate-400 font-light max-w-xl mx-auto leading-relaxed mb-10">
                The intelligent workspace for high-performance product teams. Orchestrate tasks, sync code, and ship faster than ever before.
            </p>

<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="btn-shine h-12 px-8 rounded-full bg-[#030014] text-white text-sm font-medium relative group overflow-hidden gradient-border-mask shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_-10px_rgba(99,102,241,0.6)] transition-shadow">
<span className="relative z-10 flex items-center">
                        Start for free
                        <span className="iconify ml-2 group-hover:translate-x-1 transition-transform" data-icon="lucide:chevron-right" data-width="16"></span>
</span>
</button>
<button className="h-12 px-8 rounded-full text-slate-400 text-sm font-medium hover:text-white hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/10 flex items-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
                    Watch workflow
                </button>
</div>
</div>

<div className="reveal delay-300 w-full max-w-5xl h-[500px] perspective-container relative z-0 mt-8">
<div className="w-full h-full rotate-card relative">

<div className="layer layer-base rounded-xl bg-[#0B0B0E] border border-white/[0.08] shadow-2xl overflow-hidden flex flex-col">

<div className="h-10 border-b border-white/[0.06] bg-white/[0.02] flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
</div>

<div className="flex-1 flex">
<div className="w-60 border-r border-white/[0.06] bg-white/[0.01] p-5 hidden md:block">
<div className="w-24 h-4 bg-white/5 rounded mb-6"></div>
<div className="space-y-3">
<div className="w-full h-8 bg-white/5 rounded-md border border-white/5"></div>
<div className="w-3/4 h-6 bg-white/[0.02] rounded"></div>
<div className="w-5/6 h-6 bg-white/[0.02] rounded"></div>
</div>
</div>
<div className="flex-1 p-8 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#0B0B0E] to-[#0B0B0E]">

<div className="flex gap-8 mb-6">
<div className="w-1/3 h-4 bg-white/5 rounded"></div>
<div className="w-1/3 h-4 bg-white/5 rounded"></div>
<div className="w-1/3 h-4 bg-white/5 rounded"></div>
</div>

<div className="grid grid-cols-3 gap-8 opacity-30">
<div className="h-32 rounded-lg border border-white/10 bg-white/5"></div>
<div className="h-32 rounded-lg border border-white/10 bg-white/5"></div>
<div className="h-32 rounded-lg border border-white/10 bg-white/5"></div>
</div>
</div>
</div>
</div>

<div className="layer layer-mid flex items-center justify-center pointer-events-none">
<div className="w-[420px] bg-[#131316] rounded-xl border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] p-6 relative backdrop-blur-sm">

<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-lg -z-10"></div>
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-2">
<span className="text-[10px] font-mono text-slate-500">ORB-349</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span className="text-[10px] text-indigo-400 font-medium bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">High Priority</span>
</div>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-indigo-500 border border-[#131316] text-[8px] flex items-center justify-center text-white">JD</div>
<div className="w-6 h-6 rounded-full bg-emerald-500 border border-[#131316] text-[8px] flex items-center justify-center text-white">AL</div>
</div>
</div>
<h3 className="text-base font-medium text-white mb-2">Integrate Quantum Search API</h3>
<p className="text-xs text-slate-500 leading-relaxed mb-6">Implement vector-based semantic search across the entire documentation codebase using the new v2 endpoints.</p>
<div className="space-y-3">
<div className="flex items-center justify-between p-2 rounded bg-white/[0.03] border border-white/[0.05]">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-indigo-500/50 flex items-center justify-center">
<span className="iconify text-indigo-400" data-icon="lucide:check" data-width="10"></span>
</div>
<span className="text-xs text-slate-300 line-through decoration-slate-600">Define schema types</span>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded bg-white/[0.03] border border-white/[0.05]">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-slate-600"></div>
<span className="text-xs text-white">Connect vector database</span>
</div>
<span className="iconify text-purple-400" data-icon="lucide:sparkles" data-width="12"></span>
</div>
</div>
</div>
</div>

<div className="layer layer-top pointer-events-none">

<div className="absolute top-[20%] right-[15%] flex items-center gap-2 bg-[#1A1A1E] border border-white/10 px-3 py-2 rounded-lg shadow-xl animate-float" style={{animationDelay: '1s'}}>
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
<span className="text-[10px] text-slate-300 font-medium">Deployment Ready</span>
</div>

<div className="absolute bottom-[25%] left-[10%] flex items-center gap-3 bg-[#1A1A1E] border border-white/10 px-3 py-2 rounded-lg shadow-xl animate-float">
<span className="iconify text-blue-400" data-icon="lucide:git-pull-request" data-width="14"></span>
<div>
<div className="text-[10px] text-white font-medium">PR #204 Merged</div>
<div className="text-[9px] text-slate-500">Just now by Sarah</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-white/[0.005]">
<div className="max-w-6xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-600 uppercase tracking-widest mb-8">Powering next-gen teams at</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale mix-blend-screen">
<div className="flex items-center gap-2 hover:opacity-100 transition-opacity duration-500">
<span className="iconify w-6 h-6" data-icon="lucide:hexagon"></span>
<span className="font-bold text-lg tracking-tight">Acme Corp</span>
</div>
<div className="flex items-center gap-2 hover:opacity-100 transition-opacity duration-500">
<span className="iconify w-6 h-6" data-icon="lucide:triangle"></span>
<span className="font-bold text-lg tracking-tight">Vortex</span>
</div>
<div className="flex items-center gap-2 hover:opacity-100 transition-opacity duration-500">
<span className="iconify w-6 h-6" data-icon="lucide:aperture"></span>
<span className="font-bold text-lg tracking-tight">Lumina</span>
</div>
<div className="flex items-center gap-2 hover:opacity-100 transition-opacity duration-500">
<span className="iconify w-6 h-6" data-icon="lucide:command"></span>
<span className="font-bold text-lg tracking-tight">Command</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative">
<div className="max-w-6xl mx-auto">
<div className="mb-24 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Engineered for flow state.</h2>
<p className="text-lg text-slate-400 font-light leading-relaxed">
                    Every interaction is refined to remove friction. Orbit predicts your next move, automates the mundane, and keeps your team focused on shipping.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="md:col-span-2 bento-card rounded-3xl p-8 md:p-10 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
<span className="iconify text-indigo-400 w-64 h-64 -rotate-12" data-icon="lucide:cpu"></span>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="mb-8">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:wand-2" data-width="24"></span>
</div>
<h3 className="text-2xl font-medium text-white mb-3">AI-Native Orchestration</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed max-w-md">
                                Orbit's engine runs in the background, analyzing commit history and context to auto-assign issues, estimate effort, and generate release notes.
                            </p>
</div>

<div className="w-full bg-[#0E0E11] border border-white/10 rounded-xl p-4 shadow-xl translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
<span className="iconify text-purple-400" data-icon="lucide:sparkles" data-width="14"></span>
</div>
<div className="flex-1">
<div className="h-2 w-24 bg-slate-700 rounded mb-1.5"></div>
<div className="h-1.5 w-16 bg-slate-800 rounded"></div>
</div>
</div>
<div className="flex gap-2 pl-11">
<div className="px-3 py-1.5 rounded bg-indigo-600/20 border border-indigo-500/30 text-[10px] text-indigo-300">Auto-assign: @alex</div>
<div className="px-3 py-1.5 rounded bg-emerald-600/20 border border-emerald-500/30 text-[10px] text-emerald-300">Priority: High</div>
</div>
</div>
</div>
</div>

<div className="bento-card rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:zap" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Real-time Sync</h3>
<p className="text-sm text-slate-400 font-light mb-8">
                            Zero latency. Cursor tracking and live updates without refreshing.
                        </p>
<div className="flex-1 flex items-center justify-center">
<div className="relative w-full h-32">

<div className="absolute top-0 left-0 flex flex-col items-start gap-1 animate-float" style={{animationDuration: '4s'}}>
<span className="iconify text-indigo-500" data-icon="lucide:mouse-pointer-2" data-width="20"></span>
<span className="px-1.5 py-0.5 bg-indigo-500 text-[9px] text-white rounded">Sarah</span>
</div>

<div className="absolute bottom-4 right-4 flex flex-col items-end gap-1 animate-float" style={{animationDuration: '5s', animationDelay: '1s'}}>
<span className="iconify text-pink-500 transform scale-x-[-1]" data-icon="lucide:mouse-pointer-2" data-width="20"></span>
<span className="px-1.5 py-0.5 bg-pink-500 text-[9px] text-white rounded">Mike</span>
</div>
</div>
</div>
</div>
</div>

<div className="bento-card rounded-3xl p-8 relative overflow-hidden group hover:border-orange-500/30">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
<span className="iconify" data-icon="lucide:git-merge" data-width="20"></span>
</div>
<span className="text-[10px] font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">v2.4.0</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Bi-directional Git</h3>
<p className="text-xs text-slate-400 font-light leading-relaxed">
                        Deep integration with GitHub &amp; GitLab. PRs auto-close issues and update statuses instantly.
                    </p>
</div>

<div className="md:col-span-2 bento-card rounded-3xl p-8 relative overflow-hidden group hover:border-emerald-500/30">
<div className="flex flex-col md:flex-row items-center gap-8 h-full">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Cycle Analytics</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                                Visualize velocity with automated burn-down charts and cycle time analysis. Spot bottlenecks before they delay shipping.
                            </p>
</div>
<div className="flex-1 w-full h-full min-h-[120px] bg-[#0E0E11] border border-white/10 rounded-xl p-4 relative overflow-hidden">

<div className="flex items-end justify-between h-full gap-2 px-2 pb-2">
<div className="w-full bg-emerald-500/20 rounded-t h-[30%] hover:h-[40%] transition-all duration-500"></div>
<div className="w-full bg-emerald-500/30 rounded-t h-[50%] hover:h-[60%] transition-all duration-500"></div>
<div className="w-full bg-emerald-500/40 rounded-t h-[40%] hover:h-[50%] transition-all duration-500"></div>
<div className="w-full bg-emerald-500/60 rounded-t h-[70%] hover:h-[80%] transition-all duration-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]"></div>
<div className="w-full bg-emerald-500/40 rounded-t h-[55%] hover:h-[65%] transition-all duration-500"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
<span className="iconify text-indigo-400" data-icon="lucide:star" data-width="12"></span>
<span className="text-[10px] font-medium text-white uppercase tracking-wider">Trusted by Unicorns</span>
</div>
<h3 className="text-3xl md:text-5xl font-light text-white leading-tight tracking-tight mb-12">
                "Orbit has completely transformed how we ship software. It feels less like a tool and more like an extension of our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-medium">collective intelligence</span>."
            </h3>
<div className="flex items-center justify-center gap-4">
<div className="relative">
<div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-br from-indigo-500 to-purple-600">
<img alt="User" className="w-full h-full rounded-full object-cover border-2 border-[#030014]" src="https://i.pravatar.cc/150?img=32"/>
</div>
<div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#030014] rounded-full flex items-center justify-center border border-white/10">
<span className="iconify text-white" data-icon="lucide:aperture" data-width="12"></span>
</div>
</div>
<div className="text-left">
<div className="text-base font-medium text-white">Elena Rodriguez</div>
<div className="text-sm text-slate-500">VP of Product at Scale AI</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#02000d] pt-20 pb-10">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-5 h-5 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:disc-3" data-width="12"></span>
</div>
<span className="text-lg font-semibold text-white tracking-tight">Orbit</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-6">
                        The new standard for modern software development. Designed in San Francisco.
                    </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="18"></span></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:discord" data-width="18"></span></a>
</div>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">Product</h4>
<ul className="space-y-2">
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Features</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Integrations</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Changelog</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Docs</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">Company</h4>
<ul className="space-y-2">
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">About</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Customers</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">Resources</h4>
<ul className="space-y-2">
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Community</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Contact</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">DPA</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<p className="text-xs text-slate-600">© 2024 Orbit Inc. All rights reserved.</p>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs text-slate-500">All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
