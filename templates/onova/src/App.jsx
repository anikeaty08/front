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
      

<div className="bg-[#0f0f0f] text-zinc-400 text-[11px] py-2.5 px-4 flex justify-between items-center border-b border-white/5 relative z-[60]">
<div className="mx-auto flex gap-1">
<span>Read CEO Alex Karp's</span>
<a className="text-white underline decoration-zinc-600 hover:decoration-white transition-all underline-offset-2" href="#">Letter to Shareholders</a>
</div>
<button className="text-zinc-500 hover:text-white transition-colors absolute right-4">
<i className="w-3 h-3" data-lucide="x"></i>
</button>
</div>

<div className="bg-[#050505] relative overflow-hidden flex flex-col min-h-screen">

<header className="w-full max-w-screen-xl mx-auto pt-6 px-6 z-50 relative">
<div className="bg-[#121212] border border-white/10 rounded-lg h-14 px-4 flex items-center justify-between shadow-2xl shadow-black/50">

<a className="flex items-center gap-2 group pl-2" href="#">
<div className="w-4 h-4 rounded-full border border-white/80"></div>
<span className="text-sm font-medium tracking-tight text-zinc-100">NOVA</span>
</a>

<div className="flex items-center gap-3">
<a className="bg-white text-black px-4 py-1.5 text-xs font-medium rounded-sm hover:bg-zinc-200 transition-colors" href="#">
                        Get Started
                    </a>
<div className="h-8 w-[1px] bg-white/10 mx-1"></div>
<button className="p-2 text-zinc-400 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="search"></i>
</button>
<button className="p-2 text-zinc-400 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="menu"></i>
</button>
</div>
</div>
</header>

<div className="flex-1 flex flex-col items-center justify-center relative pt-20 pb-32 px-4">

<div className="relative w-full max-w-5xl mx-auto perspective-[2000px] group">

<div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white text-center leading-[0.95] drop-shadow-2xl mix-blend-overlay opacity-90">
                        AI-Powered Automation<br/>
<span className="font-light text-white/90">for Every Decision</span>
</h1>
</div>

<div className="relative z-10 transition-transform duration-700 ease-out transform group-hover:rotate-x-1">

<div className="bg-[#1a1a1a] rounded-t-xl p-1.5 border border-white/10 shadow-2xl relative mx-auto w-full md:w-[90%] aspect-[16/10]">

<div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full z-20 border border-white/5"></div>

<div className="bg-black w-full h-full rounded-lg overflow-hidden relative border border-white/5">

<img alt="Dashboard" className="w-full h-full object-cover opacity-60 scale-110" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 p-8 grid grid-cols-12 gap-4 pointer-events-none">

<div className="col-span-3 h-full border-r border-white/10 flex flex-col gap-4">
<div className="h-4 w-24 bg-blue-500/20 rounded mb-4"></div>
<div className="space-y-2">
<div className="h-2 w-full bg-white/10 rounded"></div>
<div className="h-2 w-2/3 bg-white/10 rounded"></div>
<div className="h-2 w-4/5 bg-white/10 rounded"></div>
</div>
<div className="mt-auto space-y-2">
<div className="h-2 w-full bg-blue-500/20 rounded"></div>
<div className="h-2 w-full bg-blue-500/10 rounded"></div>
</div>
</div>

<div className="col-span-9 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-500/30 rounded-full flex items-center justify-center">
<div className="w-48 h-48 border border-blue-400/20 rounded-full animate-pulse"></div>
</div>

<div className="absolute top-10 right-20 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
<div className="absolute bottom-20 left-10 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
<div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full"></div>
</div>

<div className="col-span-12 absolute bottom-0 left-0 right-0 h-10 bg-black/80 backdrop-blur border-t border-white/10 flex items-center px-4 justify-between">
<div className="flex gap-2">
<div className="w-20 h-1.5 bg-white/20 rounded-full"></div>
</div>
<div className="text-[8px] font-mono text-white/40">MAY 04 2024 02:45:36Z</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
</div>
</div>

<div className="bg-[#2a2a2a] w-full md:w-[90%] mx-auto h-3 rounded-b-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t border-[#000] relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[#1a1a1a] rounded-b-md border border-white/5 border-t-0"></div>
</div>

<div className="reflection absolute -bottom-[100%] left-0 right-0 h-full w-[90%] mx-auto">
<div className="bg-[#1a1a1a] rounded-t-xl w-full h-full opacity-10"></div>
</div>
</div>
</div>

<div className="absolute bottom-10 animate-bounce">
<i className="text-white/30 w-5 h-5" data-lucide="arrow-down"></i>
</div>

<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/5 to-transparent z-40 pointer-events-none"></div>
</div>
</div>
<main className="relative z-30 bg-white">

<section className="bg-zinc-50 pt-8 pb-16 overflow-hidden border-b border-zinc-200">

<div className="max-w-screen-2xl mx-auto px-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto mask-linear-gradient pb-2 md:pb-0">
<button className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 bg-white border border-transparent hover:border-zinc-200 transition-colors whitespace-nowrap rounded-sm">ShipOS</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 bg-white border border-transparent hover:border-zinc-200 transition-colors whitespace-nowrap rounded-sm">Warp Speed</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 bg-white border border-transparent hover:border-zinc-200 transition-colors whitespace-nowrap rounded-sm">Paragon</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 bg-white border border-transparent hover:border-zinc-200 transition-colors whitespace-nowrap rounded-sm">DevCon 4</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-900 bg-zinc-200/80 border border-zinc-200 whitespace-nowrap rounded-sm">AIPCon 8</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 bg-white border border-transparent hover:border-zinc-200 transition-colors whitespace-nowrap rounded-sm">Interoperability</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 bg-white border border-transparent hover:border-zinc-200 transition-colors whitespace-nowrap rounded-sm">Maven Smart System</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 bg-white border border-transparent hover:border-zinc-200 transition-colors whitespace-nowrap rounded-sm">TITAN</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 bg-white border border-transparent hover:border-zinc-200 transition-colors whitespace-nowrap rounded-sm">Chain Reaction</button>
</div>
<button className="hidden md:block shrink-0 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide text-zinc-600 border border-zinc-300 rounded-sm hover:border-zinc-900 hover:text-zinc-900 transition-colors">
                    See All
                </button>
</div>

<div className="flex justify-center items-stretch gap-4 w-full h-[540px] relative px-4">

<div className="hidden 2xl:block w-[180px] shrink-0 rounded-lg overflow-hidden relative opacity-90">
<img alt="Audience" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-green-600/20 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
</div>

<div className="w-full max-w-6xl shrink-0 relative rounded-lg overflow-hidden shadow-2xl group cursor-pointer bg-zinc-900">

<img alt="Presentation" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 mix-blend-overlay opacity-60 pointer-events-none" style={{backgroundImage: 'linear-gradient(120deg, #d946ef, #3b82f6)', filter: 'contrast(1.5)'}}></div>
<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>

<div className="absolute top-8 left-6 md:left-10 bg-[#1a1a1a]/95 border border-white/10 p-8 md:p-10 rounded-sm max-w-xl backdrop-blur-xl shadow-2xl z-20">
<div className="text-zinc-200 text-xs font-medium mb-4 tracking-wide">AIPCON 8</div>
<h3 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-[1.1] mb-2">
                            How Foundry and AIP Help Companies Win: 70+ Speakers Including American Airlines, BP, The Nuclear Company, and Novartis
                            <i className="inline-block w-6 h-6 ml-1 text-zinc-400 align-text-top" data-lucide="arrow-up-right"></i>
</h3>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-3/5 w-auto aspect-[1/2] z-10 hidden md:block">

</div>
</div>

<div className="hidden 2xl:block w-[180px] shrink-0 rounded-lg overflow-hidden relative bg-[#151515] border-l border-white/5">
<div className="absolute inset-0 p-4">
<div className="text-white/80 text-xl font-medium mb-1 tracking-tight">MULTIMODAL</div>
<div className="text-white/80 text-xl font-medium mb-4 tracking-tight">DATA.</div>
<p className="text-zinc-500 text-sm leading-snug">Activate AI Compute.</p>

<div className="mt-8 relative h-40 w-full perspective-[1000px]">
<div className="absolute top-4 left-4 border border-zinc-700 bg-zinc-800/50 p-1 text-[8px] text-zinc-300 rounded-sm">BigQuery</div>
<div className="absolute top-12 right-4 border border-zinc-700 bg-zinc-800/50 p-1 text-[8px] text-zinc-300 rounded-sm">Grok</div>
<div className="w-10 h-10 border border-blue-500/30 absolute top-1/2 left-1/2 -translate-x-1/2 rotate-45"></div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
</div>
</div>
</section>

<section className="bg-white py-24 border-b border-zinc-200">
<div className="max-w-screen-2xl mx-auto px-6">

<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-zinc-900 leading-[0.95] max-w-6xl mb-32">
                    Our software powers real-time, <span className="text-zinc-300">AI-driven</span> decisions in critical government and commercial enterprises in the West, from the factory floors to the front lines.
                </h2>

<div className="mb-8">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900">Our Software</h3>
</div>

<div className="border-t border-zinc-200">

<div className="group border-b border-zinc-200 relative overflow-hidden hover:bg-zinc-50 transition-colors duration-500 cursor-pointer">
<div className="grid grid-cols-1 md:grid-cols-12 min-h-[220px] items-center py-8 md:py-0">

<div className="md:col-span-4 flex flex-col justify-center h-full px-2 relative z-10 order-2 md:order-1 pl-4 md:pl-0">
<p className="text-sm font-medium text-zinc-900 leading-snug w-full max-w-[200px]">
                                    Understand the terrain.
                                </p>
<div className="mt-3 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></span>
<p className="text-xs text-zinc-500 uppercase tracking-wide">Outcome: Market clarity.</p>
</div>
<span className="text-[10px] text-zinc-300 font-mono mt-6">/0.1</span>
</div>

<div className="md:col-span-2 flex items-center justify-center relative z-0 group-hover:opacity-60 opacity-100 transition-opacity duration-500 order-1 md:order-2">
<svg className="w-32 h-32 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="9"></circle>
<path d="M12 3c-3 0-5 4-5 9s2 9 5 9 5-4 5-9-2-9-5-9z"></path>
<path d="M3 12h18"></path>
</svg>
</div>

<div className="md:col-span-6 flex items-center justify-end md:justify-start overflow-hidden order-3">
<span className="text-[80px] md:text-[110px] lg:text-[140px] font-mono leading-none tracking-tighter text-zinc-900 group-hover:tracking-tight transition-all duration-700 ease-out">
                                    ATLAS
                                </span>
</div>
</div>
</div>

<div className="group border-b border-zinc-200 relative overflow-hidden hover:bg-zinc-50 transition-colors duration-500 cursor-pointer">
<div className="grid grid-cols-1 md:grid-cols-12 min-h-[220px] items-center py-8 md:py-0">
<div className="md:col-span-4 flex flex-col justify-center h-full px-2 relative z-10 order-2 md:order-1 pl-4 md:pl-0">
<p className="text-sm font-medium text-zinc-900 leading-snug w-full max-w-[200px]">
                                    Separate noise from information.
                                </p>
<div className="mt-3 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></span>
<p className="text-xs text-zinc-500 uppercase tracking-wide">Outcome: Decision-ready metrics.</p>
</div>
<span className="text-[10px] text-zinc-300 font-mono mt-6">/0.2</span>
</div>

<div className="md:col-span-2 flex items-center justify-center relative z-0 group-hover:opacity-60 opacity-100 transition-opacity duration-500 order-1 md:order-2">
<svg className="w-32 h-32 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="9" stroke-dasharray="3 3"></circle>
<path d="M7 12l2.5-3 2.5 6 2.5-6 2.5 3"></path>
</svg>
</div>
<div className="md:col-span-6 flex items-center justify-end md:justify-start overflow-hidden order-3">
<span className="text-[80px] md:text-[110px] lg:text-[140px] font-mono leading-none tracking-tighter text-zinc-900 group-hover:tracking-tight transition-all duration-700 ease-out">
                                    SIGNAL
                                </span>
</div>
</div>
</div>

<div className="group border-b border-zinc-200 relative overflow-hidden hover:bg-zinc-50 transition-colors duration-500 cursor-pointer">
<div className="grid grid-cols-1 md:grid-cols-12 min-h-[220px] items-center py-8 md:py-0">
<div className="md:col-span-4 flex flex-col justify-center h-full px-2 relative z-10 order-2 md:order-1 pl-4 md:pl-0">
<p className="text-sm font-medium text-zinc-900 leading-snug w-full max-w-[200px]">
                                    Turn signals into meaning.
                                </p>
<div className="mt-3 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></span>
<p className="text-xs text-zinc-500 uppercase tracking-wide">Outcome: Strategic direction.</p>
</div>
<span className="text-[10px] text-zinc-300 font-mono mt-6">/0.3</span>
</div>

<div className="md:col-span-2 flex items-center justify-center relative z-0 group-hover:opacity-60 opacity-100 transition-opacity duration-500 order-1 md:order-2">
<svg className="w-32 h-32 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24">
<rect height="4" width="4" x="5" y="5"></rect>
<rect height="4" width="4" x="15" y="5"></rect>
<rect height="4" width="4" x="5" y="15"></rect>
<rect height="4" width="4" x="15" y="15"></rect>
<path d="M9 7h6" stroke-dasharray="2 2"></path>
<path d="M9 17h6" stroke-dasharray="2 2"></path>
<path d="M7 9v6" stroke-dasharray="2 2"></path>
<path d="M17 9v6" stroke-dasharray="2 2"></path>
</svg>
</div>
<div className="md:col-span-6 flex items-center justify-end md:justify-start overflow-hidden order-3">
<span className="text-[80px] md:text-[110px] lg:text-[140px] font-mono leading-none tracking-tighter text-zinc-900 group-hover:tracking-tight transition-all duration-700 ease-out">
                                    FRAME
                                </span>
</div>
</div>
</div>

<div className="group border-b border-zinc-200 relative overflow-hidden hover:bg-zinc-50 transition-colors duration-500 cursor-pointer">
<div className="grid grid-cols-1 md:grid-cols-12 min-h-[220px] items-center py-8 md:py-0">
<div className="md:col-span-4 flex flex-col justify-center h-full px-2 relative z-10 order-2 md:order-1 pl-4 md:pl-0">
<p className="text-sm font-medium text-zinc-900 leading-snug w-full max-w-[200px]">
                                    Make decisions tangible.
                                </p>
<div className="mt-3 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></span>
<p className="text-xs text-zinc-500 uppercase tracking-wide">Outcome: A visible system.</p>
</div>
<span className="text-[10px] text-zinc-300 font-mono mt-6">/0.4</span>
</div>

<div className="md:col-span-2 flex items-center justify-center relative z-0 group-hover:opacity-60 opacity-100 transition-opacity duration-500 order-1 md:order-2">
<svg className="w-32 h-32 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24">
<path d="M12 6l8 4-8 4-8-4 8-4z"></path>
<path d="M4 14l8 4 8-4"></path>
</svg>
</div>
<div className="md:col-span-6 flex items-center justify-end md:justify-start overflow-hidden order-3">
<span className="text-[80px] md:text-[110px] lg:text-[140px] font-mono leading-none tracking-tighter text-zinc-900 group-hover:tracking-tight transition-all duration-700 ease-out">
                                    FORGE
                                </span>
</div>
</div>
</div>

<div className="group border-b border-zinc-200 relative overflow-hidden hover:bg-zinc-50 transition-colors duration-500 cursor-pointer">
<div className="grid grid-cols-1 md:grid-cols-12 min-h-[220px] items-center py-8 md:py-0">
<div className="md:col-span-4 flex flex-col justify-center h-full px-2 relative z-10 order-2 md:order-1 pl-4 md:pl-0">
<p className="text-sm font-medium text-zinc-900 leading-snug w-full max-w-[200px]">
                                    Test decisions in reality.
                                </p>
<div className="mt-3 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></span>
<p className="text-xs text-zinc-500 uppercase tracking-wide">Outcome: Shipped iteration.</p>
</div>
<span className="text-[10px] text-zinc-300 font-mono mt-6">/0.5</span>
</div>

<div className="md:col-span-2 flex items-center justify-center relative z-0 group-hover:opacity-60 opacity-100 transition-opacity duration-500 order-1 md:order-2">
<svg className="w-32 h-32 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24">
<path d="M12 17V3"></path>
<path d="M5 10l7-7 7 7"></path>
<line x1="7" x2="17" y1="21" y2="21"></line>
</svg>
</div>
<div className="md:col-span-6 flex items-center justify-end md:justify-start overflow-hidden order-3">
<span className="text-[80px] md:text-[110px] lg:text-[140px] font-mono leading-none tracking-tighter text-zinc-900 group-hover:tracking-tight transition-all duration-700 ease-out">
                                    LAUNCH
                                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-zinc-200">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12">
<div className="lg:col-span-3 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-zinc-200 bg-zinc-50/50">
<span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-4 block">Capabilities</span>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-4">Ontology Configurations</h2>
<p className="text-xs text-zinc-500 leading-relaxed">
                        Sector-specific modules designed for rapid value realization and strict compliance.
                    </p>
</div>
<div className="lg:col-span-9">
<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-200 h-full">
<div className="flex flex-col divide-y divide-zinc-200">

<div className="p-6 flex items-center justify-between group hover:bg-zinc-50 transition-colors cursor-pointer">
<h4 className="text-sm font-medium text-zinc-900">Strategic Diagnostics</h4>
<i className="w-4 h-4 text-zinc-300 group-hover:text-zinc-900 transition-colors" data-lucide="plus"></i>
</div>
<div className="p-6 flex items-center justify-between group hover:bg-zinc-50 transition-colors cursor-pointer">
<h4 className="text-sm font-medium text-zinc-900">Market Intelligence</h4>
<i className="w-4 h-4 text-zinc-300 group-hover:text-zinc-900 transition-colors" data-lucide="plus"></i>
</div>
<div className="p-6 flex items-center justify-between group hover:bg-zinc-50 transition-colors cursor-pointer">
<h4 className="text-sm font-medium text-zinc-900">Competitive Framing</h4>
<i className="w-4 h-4 text-zinc-300 group-hover:text-zinc-900 transition-colors" data-lucide="plus"></i>
</div>
</div>
<div className="flex flex-col divide-y divide-zinc-200 border-t md:border-t-0 border-zinc-200">
<div className="p-6 flex items-center justify-between group hover:bg-zinc-50 transition-colors cursor-pointer">
<h4 className="text-sm font-medium text-zinc-900">Decision Architecture</h4>
<i className="w-4 h-4 text-zinc-300 group-hover:text-zinc-900 transition-colors" data-lucide="plus"></i>
</div>
<div className="p-6 flex items-center justify-between group hover:bg-zinc-50 transition-colors cursor-pointer">
<h4 className="text-sm font-medium text-zinc-900">Execution Alignment</h4>
<i className="w-4 h-4 text-zinc-300 group-hover:text-zinc-900 transition-colors" data-lucide="plus"></i>
</div>
<div className="p-6 flex items-center justify-between group hover:bg-zinc-50 transition-colors cursor-pointer">
<h4 className="text-sm font-medium text-zinc-900">API Integrations</h4>
<i className="w-4 h-4 text-zinc-300 group-hover:text-zinc-900 transition-colors" data-lucide="plus"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-zinc-200 bg-zinc-50/30">
<div className="max-w-screen-2xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
<div>
<span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-3 block">Performance</span>
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">
                            Optimizing output through<br/>structural clarity.
                        </h2>
</div>
<div className="flex items-end lg:justify-end">
<a className="text-xs font-mono font-medium text-zinc-900 border-b border-zinc-300 hover:border-zinc-900 transition-colors pb-1 uppercase tracking-wider" href="#">
                            READ_ANALYSIS_PDF
                        </a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">

<div className="bg-white p-10 flex flex-col justify-between h-48">
<div className="text-[10px] font-mono uppercase text-zinc-400">Query Latency</div>
<div>
<div className="text-5xl font-light tracking-tighter text-zinc-900 mb-1">-40%</div>
<p className="text-xs text-zinc-500">Reduction across distributed datasets.</p>
</div>
</div>

<div className="bg-white p-10 flex flex-col justify-between h-48">
<div className="text-[10px] font-mono uppercase text-zinc-400">Deploy Speed</div>
<div>
<div className="text-5xl font-light tracking-tighter text-zinc-900 mb-1">12x</div>
<p className="text-xs text-zinc-500">Acceleration in object instantiation.</p>
</div>
</div>

<div className="bg-white p-10 flex flex-col justify-between h-48">
<div className="text-[10px] font-mono uppercase text-zinc-400">Redundancy</div>
<div>
<div className="text-5xl font-light tracking-tighter text-zinc-900 mb-1">0.0%</div>
<p className="text-xs text-zinc-500">Post-implementation of Atlas framework.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-zinc-200">
<div className="max-w-screen-2xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-zinc-200 rounded-full"></span>
<p className="text-xs text-zinc-400 font-mono uppercase tracking-wide">Deployed at systemic operators</p>
</div>
<div className="flex flex-wrap gap-12 text-sm font-semibold tracking-tight text-zinc-300 uppercase select-none">
<span className="hover:text-zinc-900 transition-colors cursor-default">Airbus</span>
<span className="hover:text-zinc-900 transition-colors cursor-default">Merck</span>
<span className="hover:text-zinc-900 transition-colors cursor-default">Ferrari</span>
<span className="hover:text-zinc-900 transition-colors cursor-default">Swiss Re</span>
<span className="hover:text-zinc-900 transition-colors cursor-default">BP</span>
</div>
</div>
</section>

<section className="border-b border-zinc-200">
<div className="max-w-screen-2xl mx-auto">
<div className="px-6 py-16 border-b border-zinc-200 flex justify-between items-end">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Changelog &amp; Insights</h2>
<span className="font-mono text-xs text-zinc-400 hidden sm:block">INDEX.LOG</span>
</div>
<div className="grid grid-cols-1 divide-y divide-zinc-200">
<a className="group block px-6 py-8 hover:bg-zinc-50 transition-colors" href="#">
<div className="max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
<div className="md:col-span-2 text-[10px] font-mono text-zinc-400 group-hover:text-zinc-600">
                                04_OCT_2023
                            </div>
<div className="md:col-span-10">
<h3 className="text-lg font-medium text-zinc-900 mb-2 flex items-center gap-2">
                                    The Ethics of Autonomous Logic
                                    <i className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400" data-lucide="arrow-up-right"></i>
</h3>
<p className="text-xs text-zinc-500 max-w-2xl">
                                    Defining the boundaries of algorithmic decision making in high-stakes environments.
                                </p>
</div>
</div>
</a>
<a className="group block px-6 py-8 hover:bg-zinc-50 transition-colors" href="#">
<div className="max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
<div className="md:col-span-2 text-[10px] font-mono text-zinc-400 group-hover:text-zinc-600">
                                21_SEP_2023
                            </div>
<div className="md:col-span-10">
<h3 className="text-lg font-medium text-zinc-900 mb-2 flex items-center gap-2">
                                    Ontology as Infrastructure
                                    <i className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400" data-lucide="arrow-up-right"></i>
</h3>
<p className="text-xs text-zinc-500 max-w-2xl">
                                    Why semantic layers are replacing traditional data warehouses for operational agility.
                                </p>
</div>
</div>
</a>
<a className="group block px-6 py-8 hover:bg-zinc-50 transition-colors" href="#">
<div className="max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
<div className="md:col-span-2 text-[10px] font-mono text-zinc-400 group-hover:text-zinc-600">
                                14_AUG_2023
                            </div>
<div className="md:col-span-10">
<h3 className="text-lg font-medium text-zinc-900 mb-2 flex items-center gap-2">
                                    Supply Chain Simulation
                                    <i className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400" data-lucide="arrow-up-right"></i>
</h3>
<p className="text-xs text-zinc-500 max-w-2xl">
                                    Case study: Reducing latency in global logistics through digital twin modeling.
                                </p>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="border-b border-zinc-200">
<div className="max-w-screen-2xl mx-auto px-6 py-32 text-center bg-zinc-50/30">
<div className="w-12 h-12 bg-zinc-900 text-white flex items-center justify-center text-xl font-bold font-mono mx-auto mb-8 rounded-sm">N</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-6">
                    Operationalize your data.
                </h2>
<p className="text-zinc-500 mb-10 max-w-md mx-auto text-sm">
                    Transform your institution with the NOVA operating system. Request an environment today.
                </p>
<div className="flex justify-center gap-4">
<a className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 text-xs font-mono font-medium hover:bg-zinc-800 transition-colors rounded-sm" href="#">
                        START_INTEGRATION
                    </a>
</div>
</div>
</section>
</main>

<footer className="bg-white py-16 border-t border-zinc-200">
<div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 text-sm">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-4 h-4 bg-zinc-900 text-white flex items-center justify-center text-[8px] font-bold font-mono">N</div>
<span className="text-sm font-semibold tracking-tight text-zinc-900">NOVA</span>
</a>
<p className="text-zinc-400 text-xs mt-4 font-mono">© 2023 NOVA Systems Inc.<br/>All systems operational.</p>
</div>
<div className="flex flex-col gap-3">
<span className="text-[10px] font-mono font-medium uppercase tracking-widest text-zinc-900 mb-2">Platform</span>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors text-xs" href="#">Vision</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors text-xs" href="#">Atlas</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors text-xs" href="#">Frame</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors text-xs" href="#">Forge</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-[10px] font-mono font-medium uppercase tracking-widest text-zinc-900 mb-2">Company</span>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors text-xs" href="#">About</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors text-xs" href="#">Careers</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors text-xs" href="#">Newsroom</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors text-xs" href="#">Legal</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-[10px] font-mono font-medium uppercase tracking-widest text-zinc-900 mb-2">Dev</span>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors text-xs" href="#">Documentation</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors text-xs" href="#">API Reference</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors text-xs" href="#">Status</a>
</div>
</div>
</footer>


    </>
  );
}
