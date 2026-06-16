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
      

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<nav className="w-full max-w-5xl bg-zinc-900/70 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50 ring-1 ring-white/5 flex items-center justify-between px-5 py-3 relative overflow-hidden">

<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>

<div className="flex items-center gap-2.5 z-10">
<div className="w-5 h-5 bg-blue-500 rounded-sm flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.6)]">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<span className="font-medium tracking-tighter text-sm text-white">NEXUS</span>
</div>

<div className="hidden md:flex items-center gap-6 z-10">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors duration-200" href="#">Product</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors duration-200" href="#">Solutions</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors duration-200" href="#">Developers</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors duration-200" href="#">Pricing</a>
</div>

<div className="flex items-center gap-3 z-10">
<button className="hidden md:flex text-xs font-medium text-zinc-400 hover:text-white transition-colors">Log in</button>
<button className="group relative px-4 py-1.5 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
<span className="relative z-10 flex items-center gap-2">
                        Get Started
                        <i className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" data-lucide="arrow-right"></i>
</span>
<div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-500"></div>
</button>
</div>
</nav>
</div>

<main className="relative flex-grow flex flex-col justify-center pt-40 pb-20 px-6 overflow-hidden">

<div className="absolute inset-0 pointer-events-none z-0">

<div className="absolute inset-0 bg-grid opacity-20"></div>

<div className="absolute inset-0 max-w-7xl mx-auto overflow-hidden">
<div className="beam h-48 left-[10%]" style={{animationDuration: '7s', animationDelay: '0s'}}></div>
<div className="beam h-32 left-[25%]" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
<div className="beam h-64 left-[45%]" style={{animationDuration: '8s', animationDelay: '1s'}}></div>
<div className="beam h-40 left-[60%]" style={{animationDuration: '6s', animationDelay: '3s'}}></div>
<div className="beam h-56 left-[80%]" style={{animationDuration: '9s', animationDelay: '0.5s'}}></div>
<div className="beam h-36 left-[95%]" style={{animationDuration: '4s', animationDelay: '4s'}}></div>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] hero-glow pointer-events-none opacity-60 z-0"></div>
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
<div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center z-10">

<div className="flex flex-col items-start gap-8">
<a className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-medium hover:border-blue-500/40 transition-colors" href="#">
<span className="flex h-1.5 w-1.5 rounded-full bg-blue-500"></span>
<span>v2.0 is now available</span>
<i className="w-3 h-3" data-lucide="chevron-right"></i>
</a>
<h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.1]">
<span className="animate-word" style={{animationDelay: '0ms'}}>Orchestrate</span>
<span className="animate-word" style={{animationDelay: '100ms'}}>your</span>
<span className="animate-word" style={{animationDelay: '200ms'}}>entire</span>
<br className="hidden md:block"/>
<span className="animate-word text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200" style={{animationDelay: '300ms'}}>infrastructure</span>
<span className="animate-word" style={{animationDelay: '400ms'}}>in</span>
<span className="animate-word" style={{animationDelay: '500ms'}}>sync.</span>
</h1>
<p className="text-base text-zinc-400 max-w-lg leading-relaxed animate-word" style={{animationDelay: '600ms'}}>
                    Deploy, scale, and monitor your applications with a unified interface designed for modern engineering teams. Zero configuration required.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-word" style={{animationDelay: '700ms'}}>
<button className="h-10 px-6 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2">
                        Start Building
                        <i className="w-4 h-4" data-lucide="zap"></i>
</button>
<button className="h-10 px-6 rounded-md glass-panel text-zinc-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all flex items-center justify-center gap-2 group">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" data-lucide="play-circle"></i>
                        Watch Demo
                    </button>
</div>

<div className="pt-8 flex items-center gap-6 animate-word" style={{animationDelay: '800ms'}}>
<p className="text-xs text-zinc-600 font-medium uppercase tracking-wider">Trusted by teams at</p>
<div className="flex gap-6 opacity-40 grayscale mix-blend-screen">

<div className="h-5 w-5 bg-white rounded-sm"></div>
<div className="h-5 w-5 bg-white rounded-full"></div>
<div className="h-5 w-5 border-2 border-white rotate-45"></div>
<div className="h-5 w-5 border-b-4 border-white"></div>
</div>
</div>
</div>

<div className="relative perspective-container lg:h-[600px] flex items-center justify-center animate-word" style={{animationDelay: '600ms'}}>

<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl"></div>

<div className="relative w-full max-w-lg glass-panel rounded-xl p-1 overflow-hidden transform transition-transform hover:scale-[1.01] duration-500 shadow-2xl shadow-black/50">

<div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-zinc-900/40">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs text-zinc-500 font-mono">dashboard.nexus.dev</div>
<i className="w-3 h-3 text-zinc-600" data-lucide="layout"></i>
</div>

<div className="p-6 bg-zinc-900/40 min-h-[300px] flex flex-col gap-6 relative">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none'}}></div>

<div className="grid grid-cols-2 gap-4 relative z-10">
<div className="glass-panel p-4 rounded-lg flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-500 font-medium">Total Requests</span>
<i className="w-3.5 h-3.5 text-blue-500" data-lucide="bar-chart-2"></i>
</div>
<div className="text-xl font-medium text-white tracking-tight">2,405,102</div>
<div className="text-xs text-green-400 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="arrow-up-right"></i>
                                    +12.5%
                                </div>
</div>
<div className="glass-panel p-4 rounded-lg flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-500 font-medium">Latency</span>
<i className="w-3.5 h-3.5 text-blue-500" data-lucide="activity"></i>
</div>
<div className="text-xl font-medium text-white tracking-tight">24ms</div>
<div className="text-xs text-zinc-500 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    Operational
                                </div>
</div>
</div>

<div className="flex-grow glass-panel rounded-lg p-4 relative overflow-hidden flex flex-col justify-end">
<div className="absolute top-4 left-4 flex gap-4">
<div className="h-1.5 w-12 rounded-full bg-zinc-700/50"></div>
<div className="h-1.5 w-8 rounded-full bg-zinc-800/50"></div>
</div>

<div className="flex items-end gap-2 h-32 mt-8 justify-between px-2">
<div className="w-full bg-blue-500/20 h-[40%] rounded-t-sm relative group cursor-pointer hover:bg-blue-500/40 transition-colors">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-800 text-xs px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity text-white border border-zinc-700">40</div>
</div>
<div className="w-full bg-blue-500/20 h-[65%] rounded-t-sm relative group cursor-pointer hover:bg-blue-500/40 transition-colors"></div>
<div className="w-full bg-blue-500/20 h-[50%] rounded-t-sm relative group cursor-pointer hover:bg-blue-500/40 transition-colors"></div>
<div className="w-full bg-blue-500/20 h-[80%] rounded-t-sm relative group cursor-pointer hover:bg-blue-500/40 transition-colors"></div>
<div className="w-full bg-blue-500/20 h-[60%] rounded-t-sm relative group cursor-pointer hover:bg-blue-500/40 transition-colors"></div>
<div className="w-full bg-blue-500/20 h-[90%] rounded-t-sm relative group cursor-pointer hover:bg-blue-500/40 transition-colors"></div>
<div className="w-full bg-blue-500/30 h-[75%] rounded-t-sm relative group cursor-pointer hover:bg-blue-500/50 transition-colors"></div>
</div>
</div>

<div className="absolute -right-4 top-20 glass-panel bg-zinc-900/90 border-l-4 border-l-blue-500 p-3 rounded-md shadow-xl flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
<div className="p-1.5 bg-blue-500/10 rounded-full">
<i className="w-3 h-3 text-blue-500" data-lucide="check"></i>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Deploy Success</span>
<span className="text-[10px] text-zinc-500">Just now</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-slate-800 bg-zinc-900">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-xs text-zinc-500">
                © 2024 Nexus Inc. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>


    </>
  );
}
