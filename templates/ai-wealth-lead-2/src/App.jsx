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
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
<div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 bg-grid z-0"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<span className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-md flex items-center justify-center text-[10px] text-white font-bold shadow-[0_0_15px_rgba(99,102,241,0.5)]">W</span>
                    WEALTH.AI
                </a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-400">
<a className="hover:text-white transition-colors duration-200" href="#">Platform</a>
<a className="hover:text-white transition-colors duration-200" href="#">Solutions</a>
<a className="hover:text-white transition-colors duration-200" href="#">Data Sources</a>
<a className="hover:text-white transition-colors duration-200" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm text-slate-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<button className="group relative px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-white transition-all duration-300 overflow-hidden">
<span className="relative z-10 flex items-center gap-2">
                        Get Access 
                        <svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
</button>
</div>
</div>
</nav>

<main className="z-10 lg:pt-48 lg:pb-32 pt-32 pr-6 pb-20 pl-6 relative">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

<div className="flex flex-col items-start max-w-2xl">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8 hover:bg-indigo-500/20 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Predicitive Model v2.4 Live
                </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] mb-6">
                    Predictive wealth <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-slate-400">acquisition.</span>
</h1>
<p className="text-lg text-slate-400 font-light leading-relaxed mb-8 max-w-lg">
                    The first AI engine designed for wealth managers. Identify UHNW individuals before a liquidity event occurs with 94% accuracy.
                </p>

<div className="w-full max-w-md flex flex-col sm:flex-row gap-3 mb-10">
<div className="relative flex-grow group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg aria-hidden="true" className="iconify text-slate-500 iconify--lucide" data-icon="lucide:search" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</div>
<input className="placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all text-sm text-white bg-[#0A0A0A] w-full border-white/10 border rounded-lg pt-3 pr-4 pb-3 pl-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]" placeholder="Enter target sector or region..." type="email"/>
</div>
<button className="px-6 py-3 bg-white text-black font-medium text-sm rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        Generate Leads
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</button>
</div>

<div className="flex items-center gap-6 pt-8 border-t border-white/5 w-full">
<p className="text-xs text-slate-600 font-medium uppercase tracking-widest">Trusted by</p>
<div className="flex gap-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-sm font-semibold tracking-tight">Onyx</span>
<span className="text-sm font-semibold tracking-tight font-serif italic">Vanguardia</span>
<span className="text-sm font-semibold tracking-tight">APEX</span>
<span className="text-sm font-semibold tracking-tight">MERIDIAN</span>
</div>
</div>
</div>

<div className="relative perspective-[2000px] group">

<div className="-inset-4 group-hover:opacity-60 transition-opacity duration-700 bg-gradient-to-r from-indigo-500/20 to-blue-600/20 opacity-40 rounded-2xl absolute blur-2xl"></div>

<div className="relative bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden transform rotate-y-[-5deg] rotate-x-[5deg] group-hover:rotate-y-[0deg] group-hover:rotate-x-[0deg] transition-transform duration-700 ease-out p-1">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
<div className="flex items-center gap-2 px-2 py-0.5 rounded-md bg-black/40 border border-white/5">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:lock" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
<span className="text-[10px] text-slate-500 font-mono">wealth.ai/engine/predict</span>
</div>
</div>

<div className="p-6 grid gap-6 relative">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

<div className="grid grid-cols-3 gap-4">
<div className="bg-[#111] border border-white/5 p-4 rounded-lg relative overflow-hidden group/card">
<div className="absolute top-0 right-0 p-2 opacity-50"><svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:trending-up" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg></div>
<div className="text-[10px] uppercase text-slate-500 tracking-wider mb-1">Lead Probability</div>
<div className="text-2xl font-medium text-white flex items-end gap-1">
                                    98.4<span className="text-sm text-emerald-500 mb-1">%</span>
</div>
<div className="mt-2 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[98%]"></div>
</div>
</div>
<div className="bg-[#111] border border-white/5 p-4 rounded-lg">
<div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Est. Liquidity</div>
<div className="text-2xl font-medium text-white">$45.2M</div>
<div className="text-[10px] text-indigo-400 mt-1 flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:activity" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Signal Detected
                                </div>
</div>
<div className="bg-[#111] border border-white/5 p-4 rounded-lg flex flex-col justify-between">
<div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Network Reach</div>
<div className="flex -space-x-2 mt-1">
<div className="w-8 h-8 rounded-full border border-[#111] bg-slate-700 flex items-center justify-center text-[10px]">JD</div>
<div className="w-8 h-8 rounded-full border border-[#111] bg-slate-600 flex items-center justify-center text-[10px]">AS</div>
<div className="w-8 h-8 rounded-full border border-[#111] bg-slate-500 flex items-center justify-center text-[10px]">+4</div>
</div>
</div>
</div>

<div className="bg-[#111] border border-white/5 rounded-lg p-5 flex gap-6 items-start relative overflow-hidden">

<div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-50 animate-[scan_3s_ease-in-out_infinite]"></div>
<style>
                                @keyframes scan {
                                    0% { left: 0; opacity: 0; }
                                    10% { opacity: 1; }
                                    90% { opacity: 1; }
                                    100% { left: 100%; opacity: 0; }
                                }
                            </style>
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-white/10 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:user" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
</div>
<div className="flex-grow space-y-3">
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white">Jonathan H. <span className="text-slate-600 text-xs ml-2">Tech Entrepreneur</span></h3>
<p className="text-xs text-slate-500 mt-0.5">San Francisco, CA • Series B Funding Imminent</p>
</div>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">High Priority</span>
</div>

<div className="flex flex-wrap gap-2">
<div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-slate-300">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                                        IPO Prospect
                                    </div>
<div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-slate-300">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                        Real Estate Interest
                                    </div>
<div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-slate-300">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                        Trust Planning
                                    </div>
</div>

<div className="pt-2">
<div className="flex justify-between text-[10px] text-slate-500 mb-1.5">
<span className="">AI Confidence Score</span>
<span className="text-white">High</span>
</div>
<div className="relative h-1.5 bg-slate-800 rounded-full w-full">
<div className="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full w-[85%]"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[85%] w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] border border-slate-200"></div>
</div>
</div>
</div>
</div>

<div className="flex gap-3">
<button className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-md transition-colors shadow-lg shadow-indigo-900/20">
                                View Full Profile
                            </button>
<button className="px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs rounded-md transition-colors flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:more-horizontal" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></g></svg>
</button>
</div>
</div>
</div>

<div className="absolute -bottom-8 -left-8 bg-[#0F0F0F] border border-white/10 p-3 rounded-lg shadow-xl animate-bounce delay-700 duration-[3000ms]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-900/20 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="text-xs font-medium text-white">Lead Qualified</div>
<div className="text-[10px] text-slate-500">Just now</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 py-8 text-center text-xs text-slate-600 font-light">
<div className="flex max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<span>© 2024 WealthGen AI Inc.</span>
<div className="flex gap-4">
<span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Systems Operational</span>
</div>
</div>
</footer>

    </>
  );
}
