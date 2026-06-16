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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-grid opacity-30"></div>

<div className="beam-glow"></div>

<div className="shooting-beam"></div>
<div className="shooting-beam"></div>
<div className="shooting-beam"></div>

<div className="absolute -top-[500px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] opacity-20" style={{background: 'conic-gradient(from 180deg at 50% 50%, transparent 0deg, rgba(253, 224, 71, 0.3) 180deg, transparent 360deg)', filter: 'blur(80px)', transform: 'rotate(180deg)'}}>
</div>
</div>

<nav className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 py-8 flex justify-between items-center">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative">
<i className="w-5 h-5 text-yellow-300 fill-yellow-300/20 group-hover:text-yellow-200 transition-colors" data-lucide="zap"></i>
<div className="absolute inset-0 bg-yellow-300/50 blur-[10px] opacity-0 group-hover:opacity-50 transition-opacity"></div>
</div>
<span className="text-lg font-medium tracking-tight text-white">MQL</span>
</div>
<div className="flex items-center gap-6">
<button className="text-sm font-normal tracking-wide text-neutral-400 hover:text-white transition-colors">Documentation</button>
<button className="text-xs font-medium tracking-wide text-neutral-300 hover:text-white transition-colors border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.08] rounded-full px-5 py-2">
                Log in
            </button>
</div>
</nav>

<main className="relative z-10 flex-grow flex flex-col items-center pt-16 pb-32 px-6 sm:px-8">

<div className="mb-10 animate-fade-in-up">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-300/20 bg-yellow-300/[0.08] text-[11px] font-medium text-yellow-300 tracking-wider shadow-[0_0_20px_rgba(253,224,71,0.1)] backdrop-blur-sm">
<i className="w-3 h-3" data-lucide="sparkles"></i>
<span className="tracking-widest uppercase">New Gateway 1.0</span>
</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-center tracking-tighter text-white mb-8 max-w-5xl mx-auto leading-[0.95] drop-shadow-2xl">
            Scale AI safely without <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-400">touching code.</span>
</h1>

<p className="text-lg md:text-xl text-neutral-400 text-center max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
            Full visibility, cost control, and security policies for LLM APIs.
            Integrate once, manage permissions everywhere.
        </p>

<div className="flex flex-col sm:flex-row gap-5 mb-24">
<button className="group relative inline-flex items-center justify-center gap-2.5 bg-[#FDE047] text-black px-8 py-3.5 rounded-full text-sm font-semibold tracking-tight hover:bg-[#fef08a] transition-all shadow-[0_0_25px_rgba(253,224,71,0.3)] hover:shadow-[0_0_40px_rgba(253,224,71,0.5)]">
                Start Integrating
                <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center justify-center gap-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 px-8 py-3.5 rounded-full text-sm font-medium tracking-tight hover:border-neutral-600 hover:text-white transition-all backdrop-blur-md">
                Book a Demo
            </button>
</div>

<div className="relative w-full max-w-6xl mx-auto perspective-1000">

<div className="absolute -inset-1 bg-gradient-to-t from-yellow-300/10 to-transparent blur-3xl opacity-20 rounded-3xl"></div>
<div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl overflow-hidden group ring-1 ring-white/5">

<div className="border-beam z-20"></div>

<div className="flex h-[600px] md:h-[700px]">

<aside className="w-64 border-r border-white/5 bg-[#080808] hidden md:flex flex-col p-4">
<div className="mb-8 px-2 flex items-center gap-2 opacity-50">
<i className="w-3.5 h-3.5" data-lucide="layers"></i>
<span className="text-[10px] font-semibold uppercase tracking-[0.2em]">Workspace</span>
</div>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-yellow-300/10 text-yellow-300 text-sm font-medium tracking-tight" href="#">
<i className="w-4 h-4" data-lucide="home"></i>
                                Overview
                            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-500 hover:text-neutral-200 hover:bg-white/5 text-sm font-normal tracking-tight transition-colors" href="#">
<i className="w-4 h-4" data-lucide="arrow-left-right"></i>
                                Requests
                            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-500 hover:text-neutral-200 hover:bg-white/5 text-sm font-normal tracking-tight transition-colors" href="#">
<i className="w-4 h-4" data-lucide="shield-check"></i>
                                Policies
                            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-500 hover:text-neutral-200 hover:bg-white/5 text-sm font-normal tracking-tight transition-colors" href="#">
<i className="w-4 h-4" data-lucide="key"></i>
                                API Keys
                            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-500 hover:text-neutral-200 hover:bg-white/5 text-sm font-normal tracking-tight transition-colors" href="#">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i>
                                Analytics
                            </a>
</div>
<div className="mt-auto pt-4 border-t border-white/5">
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-500 hover:text-neutral-200 text-sm font-normal tracking-tight transition-colors" href="#">
<i className="w-4 h-4" data-lucide="settings"></i>
                                Settings
                            </a>
</div>
</aside>

<div className="flex-1 flex flex-col bg-[#050505]">

<header className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#0A0A0A]">
<div className="flex items-center gap-2 text-xs text-neutral-500 tracking-wide">
<span className="hover:text-neutral-300 cursor-pointer">Dashboard</span>
<i className="w-3 h-3 opacity-40" data-lucide="chevron-right"></i>
<span className="text-white font-medium">Overview</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-[10px] font-medium tracking-wide text-neutral-400 bg-white/[0.03] px-2.5 py-1 rounded-full border border-white/5 uppercase">
<span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                                    Operational
                                </div>
</div>
</header>

<div className="p-8 overflow-y-auto custom-scrollbar">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

<div className="bg-neutral-900/40 border border-white/5 p-5 rounded-xl">
<div className="flex justify-between items-start mb-4">
<h3 className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Requests</h3>
<i className="w-4 h-4 text-neutral-600" data-lucide="server"></i>
</div>
<div className="flex items-end gap-2">
<span className="text-3xl font-semibold text-white tracking-tighter">1.2M</span>
<span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded mb-1.5 tracking-tight">+12.5%</span>
</div>
</div>

<div className="bg-neutral-900/40 border border-white/5 p-5 rounded-xl relative overflow-hidden group">
<div className="absolute inset-0 bg-yellow-300/[0.03] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<h3 className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Cost Saved</h3>
<i className="w-4 h-4 text-yellow-300" data-lucide="dollar-sign"></i>
</div>
<div className="flex items-end gap-2 relative z-10">
<span className="text-3xl font-semibold text-yellow-300 tracking-tighter">$4,203</span>
<span className="text-[10px] font-medium text-neutral-500 mb-1.5 tracking-wide">THIS MONTH</span>
</div>
</div>

<div className="bg-neutral-900/40 border border-white/5 p-5 rounded-xl">
<div className="flex justify-between items-start mb-4">
<h3 className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Avg Latency</h3>
<i className="w-4 h-4 text-neutral-600" data-lucide="clock"></i>
</div>
<div className="flex items-end gap-2">
<span className="text-3xl font-semibold text-white tracking-tighter">142<span className="text-lg text-neutral-500 font-normal ml-0.5">ms</span></span>
<span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded mb-1.5 tracking-tight">-24ms</span>
</div>
</div>
</div>

<div className="bg-neutral-900/20 border border-white/5 rounded-xl p-6 mb-8 relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="relative z-10 flex justify-between items-center mb-8">
<h3 className="text-xs font-medium text-white uppercase tracking-wider">Traffic Volume</h3>
<div className="flex gap-1">
<button className="px-2.5 py-1 text-[10px] font-semibold tracking-wide text-yellow-300 bg-yellow-300/10 rounded border border-yellow-300/20">24H</button>
<button className="px-2.5 py-1 text-[10px] font-semibold tracking-wide text-neutral-500 hover:text-neutral-300 transition-colors">7D</button>
<button className="px-2.5 py-1 text-[10px] font-semibold tracking-wide text-neutral-500 hover:text-neutral-300 transition-colors">30D</button>
</div>
</div>
<div className="relative z-10 h-48 flex items-end justify-between gap-1">

<div className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm bar" style={{height: '30%', animationDelay: '0.05s'}}></div>
<div className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm bar" style={{height: '45%', animationDelay: '0.1s'}}></div>
<div className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm bar" style={{height: '35%', animationDelay: '0.15s'}}></div>
<div className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm bar" style={{height: '60%', animationDelay: '0.2s'}}></div>
<div className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm bar" style={{height: '75%', animationDelay: '0.25s'}}></div>
<div className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm bar" style={{height: '50%', animationDelay: '0.3s'}}></div>
<div className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm bar" style={{height: '80%', animationDelay: '0.35s'}}></div>
<div className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm bar" style={{height: '95%', animationDelay: '0.4s'}}></div>
<div className="w-full bg-yellow-300 hover:bg-yellow-200 transition-colors rounded-t-sm bar shadow-[0_0_20px_rgba(253,224,71,0.2)]" style={{height: '65%', animationDelay: '0.45s'}}></div>
<div className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm bar" style={{height: '55%', animationDelay: '0.5s'}}></div>
<div className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm bar" style={{height: '40%', animationDelay: '0.55s'}}></div>
<div className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm bar" style={{height: '30%', animationDelay: '0.6s'}}></div>
<div className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm bar" style={{height: '45%', animationDelay: '0.65s'}}></div>
<div className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm bar" style={{height: '35%', animationDelay: '0.7s'}}></div>
<div className="w-full bg-neutral-800/60 hover:bg-yellow-300/40 transition-colors rounded-t-sm bar" style={{height: '25%', animationDelay: '0.75s'}}></div>
</div>
<div className="flex justify-between text-[10px] text-neutral-600 font-mono mt-3 uppercase tracking-widest relative z-10">
<span>00:00</span>
<span>06:00</span>
<span>12:00</span>
<span>18:00</span>
<span>23:59</span>
</div>
</div>

<div className="border border-white/5 rounded-xl overflow-hidden shadow-lg">
<div className="bg-neutral-900/40 px-5 py-3 border-b border-white/5 flex justify-between items-center">
<h3 className="text-xs font-medium text-neutral-300 uppercase tracking-wider">Live Logs</h3>
<i className="w-4 h-4 text-neutral-600 cursor-pointer hover:text-white transition-colors" data-lucide="more-horizontal"></i>
</div>
<div className="bg-[#080808]">
<table className="w-full text-left text-xs">
<thead className="text-[10px] text-neutral-500 font-medium uppercase tracking-[0.1em] border-b border-white/5">
<tr>
<th className="px-5 py-3 font-normal">Model</th>
<th className="px-5 py-3 font-normal">Tokens</th>
<th className="px-5 py-3 font-normal">Status</th>
<th className="px-5 py-3 font-normal text-right">Time</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-5 py-3">
<div className="flex items-center gap-2">
<iconify-icon className="text-white opacity-80" icon="simple-icons:openai" width="14"></iconify-icon>
<span className="text-neutral-300 font-mono text-[11px] tracking-tight">gpt-4-turbo</span>
</div>
</td>
<td className="px-5 py-3 text-neutral-400 font-mono text-[11px] tracking-tight">8,192</td>
<td className="px-5 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wide">200 OK</span>
</td>
<td className="px-5 py-3 text-right text-neutral-500 text-[11px] tracking-tight">Just now</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-5 py-3">
<div className="flex items-center gap-2">
<iconify-icon className="text-white opacity-80" icon="simple-icons:anthropic" width="14"></iconify-icon>
<span className="text-neutral-300 font-mono text-[11px] tracking-tight">claude-3-opus</span>
</div>
</td>
<td className="px-5 py-3 text-neutral-400 font-mono text-[11px] tracking-tight">4,021</td>
<td className="px-5 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wide">200 OK</span>
</td>
<td className="px-5 py-3 text-right text-neutral-500 text-[11px] tracking-tight">2m ago</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-5 py-3">
<div className="flex items-center gap-2">
<iconify-icon className="text-white opacity-80" icon="simple-icons:openai" width="14"></iconify-icon>
<span className="text-neutral-300 font-mono text-[11px] tracking-tight">gpt-3.5-turbo</span>
</div>
</td>
<td className="px-5 py-3 text-neutral-400 font-mono text-[11px] tracking-tight">1,204</td>
<td className="px-5 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-yellow-300/10 text-yellow-300 border border-yellow-300/20 tracking-wide">429 RATE</span>
</td>
<td className="px-5 py-3 text-right text-neutral-500 text-[11px] tracking-tight">5m ago</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-28 opacity-40 hover:opacity-100 transition-all duration-700">
<p className="text-center text-[10px] text-neutral-500 mb-8 font-semibold uppercase tracking-[0.3em]">Trusted by engineering teams at</p>
<div className="flex flex-wrap justify-center gap-14 items-center grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:vercel" width="20"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:stripe" width="45"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" icon="simple-icons:supabase" width="22"></iconify-icon>
</div>
</div>
</main>


    </>
  );
}
