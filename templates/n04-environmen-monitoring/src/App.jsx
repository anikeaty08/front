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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 pointer-events-none z-0 opacity-10" style={{backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<svg className="absolute w-full h-full" preserveaspectratio="none" viewbox="0 0 1000 600">

<path className="opacity-20" d="M-50,300 C200,300 250,550 500,550 C700,550 800,200 1100,0" fill="none" stroke="#10b981" strokeWidth="1"></path>

<path className="opacity-20" d="M300,0 C400,200 500,300 1100,550" fill="none" stroke="#10b981" stroke-dasharray="6,6" strokeWidth="1"></path>

<circle className="opacity-10 animate-ping" cx="50%" cy="50%" fill="none" r="60" stroke="#fbbf24" strokeWidth="1" style={{animationDuration: '4s'}}></circle>
<circle className="opacity-[0.15]" cx="50%" cy="50%" fill="none" r="35" stroke="#fbbf24" strokeWidth="1"></circle>
</svg>


<div className="absolute top-[42%] left-[32%] flex items-center gap-2.5">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)] relative">
<div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-40"></div>
</div>
<div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-sm px-1.5 py-1 text-xs font-mono text-emerald-400 flex flex-col items-center">
<span className="opacity-60">N-</span>
<span>01</span>
</div>
</div>

<div className="absolute top-[28%] left-[55%] flex items-center gap-2.5 opacity-50 transition-opacity hover:opacity-100">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<div className="bg-black/40 backdrop-blur-sm border border-white/5 rounded-sm px-1.5 py-1 text-xs font-mono text-emerald-500 flex flex-col items-center">
<span className="opacity-60">N-</span>
<span>02</span>
</div>
</div>

<div className="absolute top-[55%] left-[75%] flex items-center gap-2.5 opacity-50 transition-opacity hover:opacity-100">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<div className="bg-black/40 backdrop-blur-sm border border-white/5 rounded-sm px-1.5 py-1 text-xs font-mono text-emerald-500 flex flex-col items-center">
<span className="opacity-60">N-</span>
<span>03</span>
</div>
</div>

<div className="absolute top-[50%] left-[50%] flex items-center gap-2.5">
<div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.4)]"></div>
<div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-sm px-1.5 py-1 text-xs font-mono text-amber-400 flex flex-col items-center">
<span className="opacity-60">N-</span>
<span>04</span>
</div>
</div>

<div className="absolute top-[78%] left-[27%] flex items-center gap-2.5 opacity-70">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
<div className="bg-black/40 backdrop-blur-sm border border-white/5 rounded-sm px-1.5 py-1 text-xs font-mono text-orange-500 flex flex-col items-center">
<span className="opacity-60">N-</span>
<span>05</span>
</div>
</div>
</div>

<main className="min-h-screen md:p-10 flex flex-col w-full pt-6 pr-6 pb-6 pl-6 relative justify-between">

<div className="flex justify-between items-start w-full max-w-7xl mx-auto" style={{animation: 'sequence-blur 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards'}}>

<div className="bg-[#0a0a0a]/80 border border-white/5 rounded-xl p-6 shadow-2xl backdrop-blur-xl inline-block">
<h1 className="md:text-4xl text-3xl font-light text-neutral-100 tracking-tight font-['Space_Grotesk'] mb-1.5">
            Alaba International Market
          </h1>
<p className="text-sm font-light text-neutral-500 tracking-wide font-['Inter']">
            SENSOR NETWORK TOPOGRAPHY
          </p>
</div>

<div className="hidden md:flex bg-white/[0.02] border border-white/5 backdrop-blur-xl rounded-full px-4 py-2 items-center gap-3 shadow-lg">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="font-['Inter'] text-xs text-neutral-300">
              System Online
            </span>
</div>
<div className="w-px h-3 bg-white/10"></div>
<div className="font-mono text-xs text-neutral-500 flex items-center gap-1.5">
<iconify-icon className="text-neutral-400 text-sm" icon="solar:clock-circle-linear"></iconify-icon>
            14:02:59 UTC
          </div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-7xl mt-10 mr-auto ml-auto pb-4 items-end" style={{animation: 'sequence-blur 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards', animationDelay: '0.1s', opacity: '0'}}>

<div className="lg:col-span-4 flex flex-col gap-6">

<div className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/5 rounded-xl p-6 shadow-2xl transition-all hover:bg-[#0a0a0a]/80">
<h3 className="font-['Space_Grotesk'] font-light tracking-tight text-xl text-neutral-100 mb-5 flex items-center gap-2.5">
<iconify-icon className="text-xl text-emerald-500" height="20" icon="solar:map-point-linear" style={{color: 'rgb(245, 158, 11)'}} width="20"></iconify-icon>
              Current Location Focus
            </h3>
<div className="space-y-4">
<div className="flex justify-between items-center border-b border-white/5 pb-3">
<span className="font-['Inter'] text-sm text-neutral-500">
                  Sector
                </span>
<span className="text-sm text-neutral-200 font-['Inter']">
                  Zone 4
                </span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-3">
<span className="font-['Inter'] text-sm text-neutral-500">
                  Coordinates
                </span>
<span className="text-sm text-neutral-400 tracking-tight font-mono">
                  6.4531° N, 3.3958° E
                </span>
</div>
<div className="flex justify-between items-center pt-1">
<span className="font-['Inter'] text-sm text-neutral-500">
                  Elevation
                </span>
<span className="font-mono text-sm text-neutral-400 tracking-tight">
                  12m ASL
                </span>
</div>
</div>
</div>

<div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 rounded-lg p-4 shadow-lg flex flex-wrap gap-5 items-center w-fit">
<div className="flex items-center gap-2.5">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
<span className="font-['Inter'] text-xs text-neutral-400">
                Safe Node
              </span>
</div>
<div className="flex items-center gap-2.5">
<span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.4)]"></span>
<span className="text-xs text-neutral-400 font-['Inter']">
                Elevated Node
              </span>
</div>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">

<div className="overflow-hidden group bg-[#0a0a0a]/60 border-white/5 border rounded-xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl backdrop-blur-xl translate-y-6 rotate-y-5" style={{maskImage: 'linear-gradient(160deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(160deg, transparent, black 0%, black 100%, transparent)'}}>

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
<div className="flex mb-8 items-start justify-between">
<div className="font-mono text-xs text-neutral-500 tracking-widest">
                PRIMARY SENSOR
              </div>
<div className="flex items-center gap-1.5 bg-emerald-500/5 border border-emerald-500/10 px-2.5 py-1 rounded-full">
<iconify-icon className="text-sm text-emerald-500" height="14" icon="solar:shield-check-linear" style={{color: 'rgb(245, 158, 11)'}} width="14"></iconify-icon>
<span className="text-xs text-amber-500 font-['Inter']">
                  Caution
                </span>
</div>
</div>
<div className="flex items-baseline gap-5 mb-2">
<h2 className="text-6xl font-light text-neutral-100 tracking-tight font-['Space_Grotesk']">
                N04
              </h2>
<div className="animate-pulse text-5xl font-light text-amber-500 tracking-tight font-['Space_Grotesk']" style={{animationDuration: '4s'}}>
                36
              </div>
</div>
<div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<span className="text-amber-500 bg-amber-500 w-2 h-2 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
<span className="text-sm text-neutral-300 font-['Inter']">
                  Status: Level 3
                </span>
</div>
<div className="text-xs text-amber-500/50 tracking-widest font-mono">
                OPTIMAL
              </div>
</div>
</div>

<div className="flex flex-col bg-[#0a0a0a]/60 border-white/5 border rounded-xl pt-8 pr-8 pb-8 pl-8 shadow-2xl backdrop-blur-xl justify-between">
<h3 className="font-['Space_Grotesk'] font-light tracking-tight text-xl text-neutral-100 mb-6 flex items-center gap-2.5">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:chart-linear"></iconify-icon>
              Live Data Stream
            </h3>

<div className="h-16 w-full flex items-end gap-1 mb-8 opacity-70">
<div className="w-full bg-white/5 rounded-t-[1px] h-[30%] relative overflow-hidden">
<div className="absolute bottom-0 w-full h-full bg-emerald-500/10"></div>
</div>
<div className="w-full bg-white/5 rounded-t-[1px] h-[45%] relative overflow-hidden">
<div className="absolute bottom-0 w-full h-full bg-emerald-500/20"></div>
</div>
<div className="w-full bg-white/5 rounded-t-[1px] h-[20%] relative overflow-hidden">
<div className="absolute bottom-0 w-full h-full bg-emerald-500/10"></div>
</div>
<div className="w-full bg-white/5 rounded-t-[1px] h-[60%] relative overflow-hidden">
<div className="absolute bottom-0 w-full h-full bg-emerald-500/30"></div>
</div>
<div className="w-full bg-emerald-500/40 rounded-t-[1px] h-[80%]"></div>
<div className="bg-yellow-400/70 w-full h-[95%] rounded-t-[1px] shadow-[0_0_12px_rgba(16,185,129,0.3)]"></div>
<div className="bg-lime-500/40 w-full h-[65%] rounded-t-[1px]"></div>
<div className="w-full bg-white/5 rounded-t-[1px] h-[40%] relative overflow-hidden">
<div className="bg-amber-500/20 w-full h-full absolute bottom-0"></div>
</div>
<div className="w-full bg-white/5 rounded-t-[1px] h-[35%] relative overflow-hidden">
<div className="absolute bottom-0 w-full h-full bg-emerald-500/10"></div>
</div>
<div className="w-full bg-white/5 rounded-t-[1px] h-[25%] relative overflow-hidden">
<div className="absolute bottom-0 w-full h-full bg-emerald-500/5"></div>
</div>
</div>

<div className="space-y-3.5">
<div className="flex justify-between items-center">
<span className="text-sm text-neutral-500 font-['Inter']">
                  Soil Quality Index
                </span>
<span className="font-mono text-sm text-neutral-200 tracking-tight">
                  42 AQI
                </span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-neutral-500 font-['Inter']">
                  Pb content
                </span>
<span className="text-sm text-neutral-200 tracking-tight font-mono">
                  500 mg/kg
                </span>
</div>
<div className="flex justify-between items-center">
<span className="font-['Inter'] text-sm text-neutral-500">
                  Transmission Signal
                </span>
<div className="flex gap-1 gap-x-1 gap-y-1 items-center">
<div className="w-1 h-2 bg-emerald-500/40 rounded-sm"></div>
<div className="w-1 h-3 bg-emerald-500/60 rounded-sm"></div>
<div className="w-1 h-4 bg-emerald-500/80 rounded-sm"></div>
<div className="w-1 h-5 bg-emerald-500 rounded-sm animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
