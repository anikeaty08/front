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
      

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4">
<div className="flex items-center gap-3 w-full max-w-5xl">

<div className="flex-1 bg-white/95 backdrop-blur-md h-16 rounded-full px-6 flex items-center justify-between shadow-sm border border-black/5">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
<iconify-icon className="" icon="solar:water-linear" width="20"></iconify-icon>
</div>
<span className="text-xl font-medium tracking-tight text-slate-900">VisChart</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-lg text-slate-600 hover:text-slate-900 transition-colors" href="#">Maps</a>
<div className="flex items-center gap-1 text-lg text-slate-600 hover:text-slate-900 transition-colors cursor-pointer group">
<span className="">Regions</span>
<iconify-icon className="transition-transform group-hover:rotate-180 text-slate-400" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<a className="text-lg text-slate-600 hover:text-slate-900 transition-colors" href="#">Pricing</a>
</div>
<button className="md:hidden p-2 rounded-full hover:bg-slate-100 text-slate-600">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<a className="hidden md:flex h-16 bg-white/95 backdrop-blur-md rounded-full px-6 items-center gap-3 shadow-sm border border-black/5 hover:scale-[1.02] transition-transform duration-200" href="#">
<span className="text-lg font-medium text-slate-900">Get access</span>
<div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</a>
</div>
</nav>

<main className="relative pt-40 md:pt-48 pb-0 flex flex-col items-center w-full max-w-7xl mx-auto px-6">

<div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
<h1 className="md:text-8xl lg:text-[7rem] leading-[0.9] text-6xl font-medium text-slate-900 tracking-tight mb-8">
                Know the visibility<br/>
<span className="opacity-40">before you dive.</span>
</h1>
<p className="md:text-2xl leading-relaxed text-xl font-normal text-slate-800 max-w-2xl">
                Daily satellite chlorophyll charts for spearfishers and freedivers. 
                Track density over the last 7 days and never waste a trip again.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
<button className="h-14 px-8 rounded-full bg-slate-900 text-white text-lg font-medium hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-lg shadow-slate-900/20">
                    Unlock Live Maps
                </button>
<div className="flex items-center gap-2 text-slate-800 text-lg">
<iconify-icon className="opacity-60" icon="solar:shield-check-linear" width="20"></iconify-icon>
<span>30-day money-back guarantee</span>
</div>
</div>
</div>

<div className="relative w-full max-w-5xl mt-8 perspective-[2000px]">

<div className="absolute -top-12 left-10 md:-left-12 animate-bounce duration-[3000ms]">
<div className="bg-white/90 backdrop-blur rounded-2xl p-4 shadow-xl border border-white/40 rotate-[-6deg]">
<div className="flex items-center gap-3 mb-2">
<div className="bg-blue-100 p-2 rounded-lg text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:drop-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium">Chlorophyll-a</div>
<div className="text-lg font-medium text-slate-900">0.05 mg/m³</div>
</div>
</div>
<div className="h-1.5 w-32 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-[20%] bg-blue-500 rounded-full"></div>
</div>
</div>
</div>
<div className="absolute -top-4 right-4 md:-right-8 animate-bounce duration-[4000ms]">
<div className="bg-white/90 backdrop-blur rounded-2xl p-4 shadow-xl border border-white/40 rotate-[3deg]">
<div className="flex items-center gap-3">
<div className="bg-emerald-100 p-2 rounded-lg text-emerald-600 flex items-center justify-center">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium">Visibility</div>
<div className="text-lg font-medium text-emerald-700">Crystal Clear</div>
</div>
</div>
</div>
</div>

<div className="relative bg-slate-900 rounded-t-[3rem] shadow-2xl overflow-hidden border-[6px] border-b-0 border-white/20 ring-1 ring-black/5 mx-4 md:mx-0 translate-y-2 hover:translate-y-0 transition-transform duration-700 ease-out h-[500px] md:h-[600px]">

<div className="absolute top-0 left-0 right-0 h-16 bg-slate-800/50 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-6 z-20">
<div className="flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
</div>
</div>
<div className="flex bg-black/40 rounded-lg p-1">
<button className="px-4 py-1.5 rounded-md text-sm font-medium text-white bg-slate-700 shadow-sm">Satellite</button>
<button className="px-4 py-1.5 rounded-md text-sm font-medium text-slate-400 hover:text-white">Bathymetry</button>
</div>
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60">
<iconify-icon icon="solar:settings-linear" width="16"></iconify-icon>
</div>
</div>

<div className="absolute inset-0 bg-[#0f172a] overflow-hidden">

<div className="absolute inset-0 bg-[#0c4a6e]"></div>

<div className="chlorophyll-gradient absolute inset-0 mix-blend-overlay opacity-80 scale-150"></div>

<div className="absolute top-1/4 left-10 w-64 h-64 bg-[#1e293b] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-sm opacity-90"></div>
<div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-[#1e293b] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-sm opacity-90"></div>

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '80px 80px'}}></div>

<div className="absolute top-[40%] left-[55%]">
<div className="relative group cursor-pointer">
<div className="absolute -inset-2 bg-emerald-500/20 rounded-full animate-ping"></div>
<div className="w-4 h-4 bg-emerald-400 border-2 border-white rounded-full relative z-10 shadow-lg shadow-emerald-500/50"></div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap hidden group-hover:block animate-in fade-in slide-in-from-bottom-2">
<div className="text-xs font-semibold text-slate-900">Catalina Drop-off</div>
<div className="text-xs text-emerald-600 font-medium">Excellent Visibility</div>
</div>
</div>
</div>
<div className="absolute top-[60%] left-[30%]">
<div className="relative group cursor-pointer">
<div className="w-4 h-4 bg-red-400 border-2 border-white rounded-full relative z-10 shadow-lg shadow-red-500/50"></div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-6 right-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 z-20">
<div className="flex justify-between items-end mb-3">
<div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Timeframe</div>
<div className="text-lg text-white font-medium">Last 7 Days</div>
</div>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20">
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="h-12 flex gap-1">
<div className="flex-1 rounded-md bg-emerald-500/20 hover:bg-emerald-500/40 cursor-pointer transition-colors border border-emerald-500/30 relative group">
<div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 bg-black px-2 py-1 rounded">Mon</div>
</div>
<div className="flex-1 rounded-md bg-emerald-500/30 hover:bg-emerald-500/50 cursor-pointer transition-colors border border-emerald-500/30"></div>
<div className="flex-1 rounded-md bg-emerald-500/40 hover:bg-emerald-500/60 cursor-pointer transition-colors border border-emerald-500/30"></div>
<div className="flex-1 rounded-md bg-yellow-500/40 hover:bg-yellow-500/60 cursor-pointer transition-colors border border-yellow-500/30"></div>
<div className="flex-1 rounded-md bg-red-500/40 hover:bg-red-500/60 cursor-pointer transition-colors border border-red-500/30"></div>
<div className="flex-1 rounded-md bg-emerald-500/60 hover:bg-emerald-500/80 cursor-pointer transition-colors border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.4)] transform scale-y-110 origin-bottom"></div>
<div className="flex-1 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-xs text-white/40">Today</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
