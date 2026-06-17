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
      

<div className="absolute inset-0 pointer-events-none z-0 opacity-10" style={{backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<svg className="absolute w-full h-full" preserveaspectratio="none" viewbox="0 0 1000 600">

<path className="opacity-20" d="M-50,300 C200,300 250,550 500,550 C700,550 800,200 1100,0" fill="none" stroke="#991b1b" strokeWidth="1"></path>

<path className="opacity-20" d="M300,0 C400,200 500,300 1100,550" fill="none" stroke="#dc2626" stroke-dasharray="6,6" strokeWidth="1"></path>

<circle className="opacity-10 animate-ping" cx="50%" cy="50%" fill="none" r="60" stroke="#ef4444" strokeWidth="1" style={{animationDuration: '4s'}}></circle>
<circle className="opacity-[0.15]" cx="50%" cy="50%" fill="none" r="35" stroke="#ef4444" strokeWidth="1"></circle>
<path className="opacity-80 animate-pulse" d="M320,252 L550,168 L750,330" fill="none" stroke="#10b981" stroke-dasharray="6,4" strokeWidth="2" style={{animationDuration: '2s'}}></path>
</svg>


<div className="absolute top-[42%] left-[32%] flex items-center gap-2.5 opacity-80">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<div className="bg-black/60 backdrop-blur-sm border border-emerald-500/30 rounded-sm px-1.5 py-1 text-xs font-mono text-emerald-400 flex flex-col items-center">
<span className="opacity-60">N-</span>
<span>01</span>
</div>
</div>

<div className="absolute top-[28%] left-[55%] flex items-center gap-2.5 opacity-80">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<div className="bg-black/40 backdrop-blur-sm border border-emerald-500/20 rounded-sm px-1.5 py-1 text-xs font-mono text-emerald-500 flex flex-col items-center">
<span className="opacity-60">W-</span>
<span>P1</span>
</div>
</div>

<div className="absolute top-[55%] left-[75%] flex items-center gap-2.5 opacity-80">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
<div className="bg-black/60 backdrop-blur-sm border border-emerald-500/30 rounded-sm px-1.5 py-1 text-xs font-mono text-emerald-400 flex flex-col items-center">
<span className="opacity-60 font-bold">EXIT</span>
</div>
</div>

<div className="absolute top-[50%] left-[50%] flex items-center gap-2.5">
<div className="w-3 h-3 rounded-full bg-red-600 shadow-[0_0_20px_rgba(239,68,68,1)] flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-80" style={{animationDuration: '1.5s'}}></div>
</div>
<div className="bg-red-950/80 backdrop-blur-md border border-red-500/50 rounded-sm px-2 py-1 text-xs font-mono text-red-100 flex flex-col items-center shadow-[0_0_15px_rgba(239,68,68,0.5)]">
<span className="opacity-80 text-red-400">N-</span>
<span className="font-bold">07</span>
</div>
</div>

<div className="absolute top-[78%] left-[27%] flex items-center gap-2.5 opacity-70">
<div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
<div className="bg-red-950/40 backdrop-blur-sm border border-red-500/20 rounded-sm px-1.5 py-1 text-xs font-mono text-red-500 flex flex-col items-center">
<span className="opacity-60">N-</span>
<span>05</span>
</div>
</div>
</div>

<main className="min-h-screen md:p-10 flex flex-col w-full pt-6 pr-6 pb-6 pl-6 relative justify-between">

<div className="flex justify-between items-start w-full max-w-7xl mx-auto" style={{animation: 'sequence-blur 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards'}}>

<div className="bg-[#110000]/80 border border-red-500/20 rounded-xl p-6 shadow-[0_0_30px_rgba(239,68,68,0.15)] backdrop-blur-xl inline-block">
<h1 className="md:text-4xl text-3xl font-semibold text-neutral-100 tracking-tight font-['Space_Grotesk'] mb-1.5">
            Sentinel Brick
          </h1>
<p className="text-sm font-semibold text-red-500 tracking-wide font-['Inter'] animate-pulse">
            EMERGENCY RISK ALERT
          </p>
</div>

<div className="hidden md:flex bg-red-950/40 border border-red-500/30 backdrop-blur-xl rounded-full px-4 py-2 items-center gap-3 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-80"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
</span>
<span className="font-['Inter'] text-xs font-semibold text-red-500 uppercase tracking-widest">
              Emergency Alert
            </span>
</div>
<div className="w-px h-3 bg-red-500/20"></div>
<div className="font-mono text-xs text-red-400 flex items-center gap-1.5">
<iconify-icon className="text-red-500 text-sm" icon="solar:danger-triangle-linear"></iconify-icon>
            LEVEL 4
          </div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-7xl mt-10 mr-auto ml-auto pb-4 items-end" style={{animation: 'sequence-blur 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards', animationDelay: '0.1s', opacity: '0'}}>

<div className="lg:col-span-4 flex flex-col gap-6">

<div className="bg-[#110000]/80 backdrop-blur-xl border border-red-500/20 rounded-xl p-6 shadow-2xl transition-all hover:bg-[#1a0505]/90">
<h3 className="font-['Space_Grotesk'] font-light tracking-tight text-xl text-neutral-100 mb-5 flex items-center gap-2.5">
<iconify-icon className="text-xl text-red-500" icon="solar:map-point-bold"></iconify-icon>
              Current Location
            </h3>
<div className="space-y-4">
<div className="flex justify-between items-center border-b border-red-500/10 pb-3">
<span className="font-['Inter'] text-sm text-neutral-400">
                  Restricted Zone
                </span>
<span className="text-sm text-red-400 font-['Inter'] font-semibold">
                  N07 Sector
                </span>
</div>
<div className="flex justify-between items-center border-b border-red-500/10 pb-3">
<span className="font-['Inter'] text-sm text-neutral-400">
                  Recommended Route
                </span>
<span className="text-sm text-emerald-400 tracking-tight font-mono flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active
                </span>
</div>
<div className="flex justify-between items-center pt-1">
<span className="font-['Inter'] text-sm text-neutral-400">
                  Safe Exit
                </span>
<span className="font-mono text-sm text-emerald-500 font-semibold tracking-tight">
                  Zone 1 Clear
                </span>
</div>
</div>
</div>

<div className="bg-[#110000]/80 backdrop-blur-md border border-red-500/10 rounded-lg p-4 shadow-lg flex flex-wrap gap-5 items-center w-fit">
<div className="flex items-center gap-2.5">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse"></span>
<span className="font-['Inter'] text-xs text-neutral-300">
                Safe Route
              </span>
</div>
<div className="flex items-center gap-2.5">
<span className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
<span className="text-xs text-neutral-300 font-['Inter']">
                Restricted Zone
              </span>
</div>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">

<div className="overflow-hidden group bg-[#150202]/90 border-red-500/30 border rounded-xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_0_40px_rgba(239,68,68,0.2)] backdrop-blur-xl translate-y-6 rotate-y-5" style={{maskImage: 'linear-gradient(160deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(160deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
<div className="absolute inset-0 bg-red-500/5 animate-pulse" style={{animationDuration: '2s'}}></div>
<div className="flex mb-8 items-start justify-between relative z-10">
<div className="font-mono text-xs text-red-400 tracking-widest uppercase animate-pulse">
                Toxic Heavy Metal Alert
              </div>
<div className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/30 px-2.5 py-1 rounded-full">
<iconify-icon className="text-sm text-red-500" icon="solar:danger-triangle-bold"></iconify-icon>
<span className="text-xs text-red-500 font-semibold font-['Inter'] uppercase tracking-wider">
                  Critical
                </span>
</div>
</div>
<div className="flex items-baseline gap-5 mb-2 relative z-10">
<h2 className="text-7xl font-semibold text-white tracking-tight font-['Space_Grotesk'] drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                N07
              </h2>
<div className="animate-pulse text-6xl font-light text-red-500 tracking-tight font-['Space_Grotesk']" style={{animationDuration: '1.5s'}}>
                98%
              </div>
</div>
<div className="mt-8 pt-6 border-t border-red-500/20 flex items-center justify-between relative z-10">
<div className="flex items-center gap-2.5">
<span className="text-red-500 bg-red-500 w-2 h-2 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.8)] animate-ping"></span>
<span className="text-sm text-red-300 font-['Inter'] font-semibold tracking-wide">
                  Status: Level 4 · Critical
                </span>
</div>
<div className="text-xs text-red-500/80 tracking-widest font-mono font-bold animate-pulse">
                HAZARD
              </div>
</div>
</div>

<div className="flex flex-col bg-[#110000]/80 border-red-500/10 border rounded-xl pt-8 pr-8 pb-8 pl-8 shadow-2xl backdrop-blur-xl justify-between">
<h3 className="font-['Space_Grotesk'] font-light tracking-tight text-xl text-neutral-100 mb-6 flex items-center gap-2.5">
<iconify-icon className="text-red-500 text-xl" icon="solar:graph-up-bold"></iconify-icon>
              Live Sensor Stream
            </h3>
<div className="h-16 w-full flex items-end gap-1 mb-8 opacity-90">
<div className="w-full bg-red-500/20 rounded-t-[1px] h-[30%]"></div>
<div className="w-full bg-red-500/30 rounded-t-[1px] h-[45%]"></div>
<div className="w-full bg-red-500/20 rounded-t-[1px] h-[20%]"></div>
<div className="w-full bg-red-500/40 rounded-t-[1px] h-[60%]"></div>
<div className="w-full bg-orange-500/60 rounded-t-[1px] h-[80%]"></div>
<div className="bg-red-600/90 w-full h-[95%] rounded-t-[1px] shadow-[0_0_15px_rgba(239,68,68,0.6)] animate-pulse"></div>
<div className="bg-red-500/70 w-full h-[65%] rounded-t-[1px]"></div>
<div className="w-full bg-red-500/40 rounded-t-[1px] h-[40%]"></div>
<div className="w-full bg-red-500/20 rounded-t-[1px] h-[35%]"></div>
<div className="w-full bg-red-500/10 rounded-t-[1px] h-[25%]"></div>
</div>
<div className="space-y-3.5">
<div className="flex justify-between items-center">
<span className="text-sm text-neutral-400 font-['Inter']">
                  Contamination Index
                </span>
<span className="font-mono text-sm text-red-400 font-semibold tracking-tight">
                  98% CRIT
                </span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-neutral-400 font-['Inter']">
                  Toxic Lead (Pb)
                </span>
<span className="text-sm text-red-500 tracking-tight font-mono font-bold animate-pulse">
                  12,500 mg/kg
                </span>
</div>
<div className="flex justify-between items-center">
<span className="font-['Inter'] text-sm text-neutral-400">
                  Signal Interference
                </span>
<div className="flex gap-1 gap-x-1 gap-y-1 items-center">
<div className="w-1 h-2 bg-red-500/40 rounded-sm"></div>
<div className="w-1 h-3 bg-red-500/60 rounded-sm"></div>
<div className="w-1 h-4 bg-red-500/80 rounded-sm animate-pulse"></div>
<div className="w-1 h-5 bg-red-600 rounded-sm animate-pulse shadow-[0_0_5px_rgba(239,68,68,0.8)]"></div>
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
