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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050507]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-[#050507] font-bold text-xs tracking-tighter">O</div>
<span className="text-sm font-semibold tracking-tight text-white">OMNISTRATE <span className="text-slate-500 font-light">GEO</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-slate-400">
<a className="hover:text-cyan-400 transition-colors" href="#">PLATFORM</a>
<a className="hover:text-cyan-400 transition-colors" href="#">SOLUTIONS</a>
<a className="hover:text-cyan-400 transition-colors" href="#">INTELLIGENCE</a>
<a className="hover:text-cyan-400 transition-colors" href="#">PRICING</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-slate-300 hover:text-white transition-colors" href="#">Sign In</a>
<a className="glass-panel px-4 py-2 rounded-full text-xs font-semibold text-cyan-50 border border-cyan-500/20 hover:bg-cyan-500/10 transition-all shadow-[0_0_15px_-5px_rgba(34,211,238,0.3)]" href="#">
                    Get Audit
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">

<div className="absolute inset-0 bg-grid -z-10"></div>

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 backdrop-blur-sm mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="text-[10px] uppercase tracking-widest text-cyan-300 font-semibold">Live Engine Optimization</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter leading-[1.1] mb-6">
                    Dominate the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-violet-300 animate-pulse-glow">AI Answers.</span>
</h1>
<h2 className="text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-8 max-w-lg">
                    The world's first Generative Engine Optimization platform for enterprise. Influence ChatGPT, Gemini, and Claude outputs organically.
                </h2>
<div className="flex flex-col sm:flex-row gap-4">
<button className="group relative px-6 py-3 bg-cyan-500 text-[#050507] text-sm font-semibold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
<div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 skew-x-12 -ml-4"></div>
<span className="relative flex items-center gap-2">
                            Start Free Audit <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</button>
<button className="px-6 py-3 rounded-lg border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/5 transition-all flex items-center gap-2 group">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-colors">
<i className="w-3 h-3 fill-current ml-0.5" data-lucide="play"></i>
</div>
                        Watch Demo
                    </button>
</div>
</div>

<div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end perspective-1000">

<div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">

<div className="absolute inset-0 bg-cyan-500/20 blur-[60px] rounded-full"></div>

<div className="absolute inset-0 border border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 border border-violet-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-12 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>

<div className="absolute inset-0 m-auto w-32 h-32 bg-gradient-to-br from-slate-900 to-black rounded-full border border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.3)] flex items-center justify-center z-10">
<div className="text-4xl font-bold text-white tracking-tighter">OMNI</div>
</div>

<div className="absolute top-0 right-0 translate-x-10 -translate-y-10 p-3 glass-panel rounded-lg flex items-center gap-3 animate-float" style={{animationDelay: '1s'}}>
<i className="w-5 h-5 text-emerald-400" data-lucide="bot"></i>
<div className="text-[10px] leading-tight">
<div className="text-slate-400">Model Affinity</div>
<div className="text-emerald-400 font-mono">98.4% MATCH</div>
</div>
</div>
<div className="absolute bottom-0 left-0 -translate-x-4 translate-y-8 p-3 glass-panel rounded-lg flex items-center gap-3 animate-float" style={{animationDelay: '2s'}}>
<i className="w-5 h-5 text-violet-400" data-lucide="zap"></i>
<div className="text-[10px] leading-tight">
<div className="text-slate-400">Citation Flow</div>
<div className="text-violet-400 font-mono">+420/sec</div>
</div>
</div>

<svg className="absolute inset-0 w-full h-full -z-10 overflow-visible opacity-40">
<line stroke="#22d3ee" strokeWidth="1" x1="50%" x2="100%" y1="50%" y2="0%"></line>
<line stroke="#a78bfa" strokeWidth="1" x1="50%" x2="0%" y1="50%" y2="100%"></line>
<circle cx="100%" cy="0%" fill="#22d3ee" r="3"></circle>
<circle cx="0%" cy="100%" fill="#a78bfa" r="3"></circle>
</svg>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] uppercase tracking-widest">Explore</span>
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h3 className="text-cyan-400 text-xs font-mono mb-2">SYSTEM CAPABILITIES</h3>
<h2 className="text-3xl font-semibold tracking-tight text-white">The Engine Optimization Suite</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-4 h-auto lg:h-[600px]">

<div className="col-span-1 md:col-span-2 row-span-2 glass-panel rounded-2xl p-6 flex flex-col relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-cyan-400" data-lucide="maximize"></i>
</div>
<div className="mb-4">
<div className="flex items-center gap-2 mb-1">
<i className="w-4 h-4 text-cyan-400" data-lucide="cpu"></i>
<h3 className="text-sm font-semibold text-white">Real-time AI Simulator</h3>
</div>
<p className="text-xs text-slate-400">Preview how LLMs reconstruct your brand narrative.</p>
</div>

<div className="flex-1 bg-black/40 rounded-lg border border-white/5 p-4 font-mono text-xs flex flex-col gap-3">
<div className="flex items-center gap-2 border-b border-white/5 pb-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="ml-2 text-slate-600">sim_v4.2.exe</span>
</div>
<div className="text-slate-500">&gt; user_prompt: "Best enterprise CRM for scale?"</div>
<div className="text-slate-300">
                            &gt; analysis: <span className="animate-pulse">processing...</span><br/>
                            &gt; output: "Based on current market data, <span className="text-emerald-400 bg-emerald-400/10 px-1">Omnistrate</span> leads in scalability..."
                        </div>
<div className="mt-auto h-24 w-full bg-gradient-to-t from-cyan-900/20 to-transparent rounded border-t border-cyan-500/20 relative">

<svg className="absolute bottom-0 left-0 w-full h-full" preserveaspectratio="none">
<path d="M0,80 Q30,70 60,40 T120,20 T180,50 T240,10" fill="none" stroke="#22d3ee" strokeWidth="2"></path>
<path d="M0,80 Q30,70 60,40 T120,20 T180,50 T240,10 L240,100 L0,100 Z" fill="url(#grad1)" opacity="0.2"></path>
<defs>
<lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#22d3ee', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#22d3ee', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-1 lg:col-span-2 glass-panel rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/10 blur-2xl rounded-full group-hover:bg-emerald-500/20 transition-all"></div>
<div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold text-white">Rank Velocity</h3>
<p className="text-xs text-slate-400 mt-1">LLM Preference Share</p>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                +450%
                             </span>
</div>
</div>
<div className="mt-4 flex items-end gap-1 h-20">

<div className="w-full bg-white/5 rounded-t-sm h-[30%] relative group/bar">
<div className="absolute bottom-0 w-full bg-emerald-500/50 h-0 transition-all duration-1000 group-hover:h-full"></div>
</div>
<div className="w-full bg-white/5 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-emerald-500 rounded-t-sm h-[90%] shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
</div>
</div>

<div className="col-span-1 glass-panel rounded-2xl p-6 relative group overflow-hidden">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-white">Gap Analysis</h3>
<i className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" data-lucide="grid"></i>
</div>

<div className="grid grid-cols-5 gap-1 aspect-square">

<div className="bg-red-500/80 rounded-[1px]"></div><div className="bg-red-500/40 rounded-[1px]"></div><div className="bg-emerald-500/20 rounded-[1px]"></div><div className="bg-emerald-500/80 rounded-[1px]"></div><div className="bg-emerald-500/90 rounded-[1px]"></div>
<div className="bg-red-500/60 rounded-[1px]"></div><div className="bg-red-500/20 rounded-[1px]"></div><div className="bg-emerald-500/30 rounded-[1px]"></div><div className="bg-emerald-500/60 rounded-[1px]"></div><div className="bg-emerald-500/80 rounded-[1px]"></div>
<div className="bg-red-500/90 rounded-[1px]"></div><div className="bg-red-500/50 rounded-[1px]"></div><div className="bg-emerald-500/10 rounded-[1px]"></div><div className="bg-emerald-500/40 rounded-[1px]"></div><div className="bg-emerald-500/60 rounded-[1px]"></div>
<div className="bg-red-500/70 rounded-[1px]"></div><div className="bg-red-500/30 rounded-[1px]"></div><div className="bg-emerald-500/20 rounded-[1px]"></div><div className="bg-emerald-500/50 rounded-[1px]"></div><div className="bg-emerald-500/90 rounded-[1px]"></div>
</div>
<div className="mt-3 flex justify-between text-[10px] text-slate-500 font-mono">
<span>RISK</span>
<span>OPPORTUNITY</span>
</div>
</div>

<div className="col-span-1 glass-panel rounded-2xl p-6 flex flex-col justify-center items-center text-center group">
<div className="w-12 h-12 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-violet-400" data-lucide="link"></i>
</div>
<h3 className="text-sm font-semibold text-white">Citation Integrity</h3>
<p className="text-xs text-slate-400 mt-2">Verified Source Linking <br/>Network</p>
<div className="mt-4 flex -space-x-2">
<div className="w-6 h-6 rounded-full border border-black bg-slate-700"></div>
<div className="w-6 h-6 rounded-full border border-black bg-slate-600"></div>
<div className="w-6 h-6 rounded-full border border-black bg-slate-500 flex items-center justify-center text-[8px] text-white font-bold">+9</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 overflow-hidden relative">
<div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 mb-12 text-center">

<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-white animate-text-shine mb-4">Command the Narrative</h2>
<p className="text-slate-400 text-sm max-w-xl mx-auto">Deep dive into model sentiment, hallucination rates, and brand entity strength across all major LLMs.</p>
</div>
<div className="relative w-full h-[600px] flex justify-center items-center perspective-[2000px]">

<div className="iso-container iso-card w-[90%] md:w-[800px] h-[500px] bg-[#0A0A0F] border border-white/10 rounded-xl relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-20"></div>

<div className="h-12 border-b border-white/5 flex items-center px-6 justify-between bg-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-[10px] font-mono text-slate-500">DASHBOARD_VIEW_01</div>
</div>

<div className="p-6 grid grid-cols-3 gap-6 h-[calc(100%-48px)]">

<div className="col-span-2 flex flex-col gap-6">

<div className="bg-black/40 border border-white/5 rounded-lg p-4 flex-1 relative">
<div className="flex justify-between items-center mb-6">
<h4 className="text-xs font-semibold text-slate-300">Share of Model (SoM)</h4>
<div className="flex gap-2">
<span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
<span className="text-[10px] text-slate-500">GPT-4</span>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<svg className="w-48 h-48 transform -rotate-90">
<circle cx="96" cy="96" fill="none" r="88" stroke="rgba(255,255,255,0.05)" strokeWidth="12"></circle>
<circle className="drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" cx="96" cy="96" fill="none" r="88" stroke="#22d3ee" stroke-dasharray="552" stroke-dashoffset="138" strokeLinecap="round" strokeWidth="12"></circle>
</svg>
<div className="absolute text-center">
<div className="text-3xl font-bold text-white">74%</div>
<div className="text-[10px] text-slate-400">VISIBILITY</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 h-32">
<div className="bg-black/40 border border-white/5 rounded-lg p-4">
<div className="text-[10px] text-slate-500 mb-1">SENTIMENT SCORE</div>
<div className="text-xl font-mono text-emerald-400">9.8/10</div>
<div className="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
<div className="w-[98%] h-full bg-emerald-400"></div>
</div>
</div>
<div className="bg-black/40 border border-white/5 rounded-lg p-4">
<div className="text-[10px] text-slate-500 mb-1">MENTIONS</div>
<div className="text-xl font-mono text-white">12,402</div>
<div className="flex items-center gap-1 text-[10px] text-emerald-400 mt-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> 12%
                                </div>
</div>
</div>
</div>

<div className="col-span-1 bg-black/40 border border-white/5 rounded-lg p-4 overflow-hidden">
<h4 className="text-xs font-semibold text-slate-300 mb-4">Recent AI Mentions</h4>
<div className="space-y-3">
<div className="p-2 bg-white/5 rounded border border-white/5">
<div className="flex items-center gap-2 mb-1">
<i className="w-3 h-3 text-violet-400" data-lucide="sparkles"></i>
<span className="text-[10px] text-violet-300">Claude 3 Opus</span>
</div>
<div className="w-full h-1.5 bg-slate-700 rounded-full mb-1"></div>
<div className="w-2/3 h-1.5 bg-slate-700 rounded-full"></div>
</div>
<div className="p-2 bg-white/5 rounded border border-white/5">
<div className="flex items-center gap-2 mb-1">
<i className="w-3 h-3 text-cyan-400" data-lucide="zap"></i>
<span className="text-[10px] text-cyan-300">GPT-4o</span>
</div>
<div className="w-full h-1.5 bg-slate-700 rounded-full mb-1"></div>
<div className="w-3/4 h-1.5 bg-slate-700 rounded-full"></div>
</div>
<div className="p-2 bg-white/5 rounded border border-white/5 opacity-50">
<div className="flex items-center gap-2 mb-1">
<i className="w-3 h-3 text-slate-400" data-lucide="box"></i>
<span className="text-[10px] text-slate-300">Gemini Pro</span>
</div>
<div className="w-full h-1.5 bg-slate-700 rounded-full mb-1"></div>
<div className="w-1/2 h-1.5 bg-slate-700 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 w-[600px] h-[100px] bg-cyan-500/20 blur-[80px] -z-10 rounded-[100%]"></div>
</div>
</section>

<section className="border-t border-white/5 bg-[#08080c] pt-20 pb-10">

<div className="w-full overflow-hidden mb-24 relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#08080c] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#08080c] to-transparent z-10"></div>
<div className="flex w-[200%] animate-marquee">

<div className="flex justify-around w-1/2 items-center text-slate-600 font-semibold text-xl tracking-tighter opacity-50">
<span>OPENAI</span>
<span>ANTHROPIC</span>
<span>DEEPMIND</span>
<span>META AI</span>
<span>MISTRAL</span>
<span>COHERE</span>
<span>PERPLEXITY</span>
</div>

<div className="flex justify-around w-1/2 items-center text-slate-600 font-semibold text-xl tracking-tighter opacity-50">
<span>OPENAI</span>
<span>ANTHROPIC</span>
<span>DEEPMIND</span>
<span>META AI</span>
<span>MISTRAL</span>
<span>COHERE</span>
<span>PERPLEXITY</span>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto px-6 mb-24">
<div className="relative rounded-2xl overflow-hidden p-[1px]">
<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 via-violet-500/50 to-cyan-500/50 animate-pulse-glow"></div>
<div className="relative bg-[#0A0A0F] rounded-2xl px-8 py-16 text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to become the source?</h2>
<p className="text-slate-400 mb-8 max-w-lg mx-auto">Stop optimizing for 10 blue links. Start optimizing for the single answer that matters.</p>
<button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-slate-200 transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                        Get Access Now
                    </button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between gap-12">
<div className="md:w-1/3">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 rounded bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-[#050507] font-bold text-[10px]">O</div>
<span className="text-sm font-semibold tracking-tight text-white">OMNISTRATE</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                    Pioneering the future of information retrieval through Generative Engine Optimization. 
                    <br/><br/>
                    © 2024 Omnistrate Inc.
                </p>
</div>
<div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<h4 className="text-xs font-semibold text-white mb-4">PLATFORM</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Audit</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Optimization</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Analytics</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">RESOURCES</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Case Studies</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">COMPANY</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Legal</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">SOCIAL</h4>
<div className="flex gap-4">
<i className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors" data-lucide="twitter"></i>
<i className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors" data-lucide="github"></i>
<i className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors" data-lucide="linkedin"></i>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
