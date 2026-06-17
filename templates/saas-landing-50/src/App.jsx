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
      

<div className="absolute inset-0 z-0 pointer-events-none flex justify-end items-center opacity-70">
<div className="w-[800px] h-[800px] rounded-full translate-x-1/4" style={{background: 'radial-gradient(circle, rgba(63,63,70,0.15) 0%, rgba(9,9,11,0) 70%)'}}></div>
<div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full mix-blend-screen" style={{background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 60%)'}}></div>
</div>
<main className="max-w-[90rem] mx-auto px-6 lg:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center py-20 lg:py-0">

<div className="lg:col-span-5 flex flex-col items-start gap-10">

<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-sm bg-gradient-to-br from-zinc-200 to-zinc-500 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<div className="w-2 h-2 bg-[#050505] rounded-full"></div>
</div>
<span className="text-xs uppercase tracking-[0.4em] font-medium text-zinc-300">N X U S</span>
</div>

<div className="flex flex-col gap-6">
<h1 className="lg:text-7xl leading-[1.05] text-5xl font-semibold text-zinc-100 tracking-tight" style={{textShadow: '0 10px 30px rgba(0,0,0,0.5)'}}>
                    Tactile control.<br/>
<span className="text-zinc-500">Cloud scale.</span>
</h1>
<p className="leading-relaxed text-lg font-normal text-zinc-400 max-w-md">
                    The industry standard for infrastructure orchestration, rebuilt from the metal up to feel like the professional hardware you trust. Precision tuning for your deployment pipelines.
                </p>
</div>

<div className="flex items-center gap-5 mt-2">
<button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#121214] text-sm text-zinc-200 font-medium overflow-hidden rounded-md transition-all hover:text-white" style={{boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 4px 15px rgba(0,0,0,0.5)', border: '1px solid #27272a'}}>
<div className="group-hover:opacity-100 transition-opacity bg-gradient-to-br from-zinc-800/20 to-transparent opacity-0 w-full h-full absolute top-0 right-0 bottom-0 left-0"></div>
                    Initialize Sequence
                    <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="hover:text-white transition-colors flex gap-2 text-sm font-medium text-zinc-400 pt-4 pr-6 pb-4 pl-6 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-lg" icon="solar:book-linear"></iconify-icon>
                    Read Documentation
                </button>
</div>
</div>

<div className="lg:col-span-7 relative flex justify-end perspective-[1000px]">

<div className="relative w-full max-w-3xl rounded-[2.5rem] p-3 bg-[#0a0a0c]" style="box-shadow: 
                    0 40px 100px -20px rgba(0,0,0,1), 
                    inset 0 1px 1px rgba(255,255,255,0.1),
                    inset 0 0 0 1px #18181b,
                    inset 0 0 0 2px #09090b;
                    transform: rotateY(-5deg) rotateX(2deg);">

<div className="relative w-full h-full rounded-[2rem] p-8 lg:p-12 overflow-hidden flex flex-col gap-10" style="background: linear-gradient(135deg, #18181b 0%, #121214 50%, #09090b 100%);
                            box-shadow: inset 0 2px 5px rgba(255,255,255,0.05), inset 0 -5px 15px rgba(0,0,0,0.8);
                            border: 1px solid #27272a;">

<div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<div className="absolute top-0 left-1/4 w-[300px] h-[100px] bg-white opacity-[0.02] blur-3xl pointer-events-none"></div>

<div className="absolute top-6 left-6 w-4 h-4 rounded-full flex items-center justify-center bg-[#18181b] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.1)]"><div className="w-1.5 h-0.5 bg-[#050505] rotate-45 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"></div></div>
<div className="absolute top-6 right-6 w-4 h-4 rounded-full flex items-center justify-center bg-[#18181b] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.1)]"><div className="w-1.5 h-0.5 bg-[#050505] rotate-[120deg] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"></div></div>
<div className="absolute bottom-6 left-6 w-4 h-4 rounded-full flex items-center justify-center bg-[#18181b] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.1)]"><div className="w-1.5 h-0.5 bg-[#050505] rotate-[15deg] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"></div></div>
<div className="absolute bottom-6 right-6 w-4 h-4 rounded-full flex items-center justify-center bg-[#18181b] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.1)]"><div className="w-1.5 h-0.5 bg-[#050505] rotate-90 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"></div></div>

<div className="flex justify-between items-start gap-8 z-10">

<div className="flex-1 bg-[#050505] rounded-xl p-4 flex flex-col justify-between h-28 relative" style={{boxShadow: 'inset 0 5px 15px rgba(0, 0, 0, 1), 0 1px 0 rgba(255,255,255,0.08)', border: '1px solid #18181b'}}>

<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent rounded-t-xl pointer-events-none"></div>
<div className="flex justify-between items-center text-xs text-zinc-600 font-medium uppercase tracking-widest">
<span>Status</span>
<span>Memory Heap</span>
</div>
<div className="flex justify-between items-end font-mono">
<span className="text-emerald-500 text-sm shadow-[0_0_10px_rgba(16,185,129,0.3)] drop-shadow-[0_0_2px_rgba(16,185,129,0.8)]">ONLINE</span>
<span className="text-zinc-300 text-3xl font-light tracking-tight drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">1.04<span className="text-zinc-600 text-lg">TB</span></span>
</div>
</div>

<div className="flex gap-4">

<div className="flex flex-col gap-1 items-center">
<span className="text-xs text-zinc-500 uppercase tracking-widest mb-1" style={{textShadow: '0 1px 0 rgba(255,255,255,0.05)'}}>CPU</span>
<div className="bg-[#050505] p-1.5 rounded-md flex flex-col gap-[3px]" style={{boxShadow: 'inset 0 2px 5px rgba(0,0,0,1)', border: '1px solid #18181b'}}>
<div className="w-4 h-1.5 bg-red-900 rounded-sm"></div>
<div className="w-4 h-1.5 bg-red-500 rounded-sm shadow-[0_0_6px_rgba(239,68,68,0.8)]"></div>
<div className="w-4 h-1.5 bg-amber-500 rounded-sm shadow-[0_0_6px_rgba(245,158,11,0.8)]"></div>
<div className="w-4 h-1.5 bg-amber-500 rounded-sm shadow-[0_0_6px_rgba(245,158,11,0.8)]"></div>
<div className="w-4 h-1.5 bg-emerald-500 rounded-sm shadow-[0_0_6px_rgba(16,185,129,0.8)]"></div>
<div className="w-4 h-1.5 bg-emerald-500 rounded-sm shadow-[0_0_6px_rgba(16,185,129,0.8)]"></div>
<div className="w-4 h-1.5 bg-emerald-500 rounded-sm shadow-[0_0_6px_rgba(16,185,129,0.8)]"></div>
<div className="w-4 h-1.5 bg-emerald-500 rounded-sm shadow-[0_0_6px_rgba(16,185,129,0.8)]"></div>
</div>
</div>

<div className="flex flex-col gap-1 items-center">
<span className="text-xs text-zinc-500 uppercase tracking-widest mb-1" style={{textShadow: '0 1px 0 rgba(255,255,255,0.05)'}}>NET</span>
<div className="bg-[#050505] p-1.5 rounded-md flex flex-col gap-[3px]" style={{boxShadow: 'inset 0 2px 5px rgba(0,0,0,1)', border: '1px solid #18181b'}}>
<div className="w-4 h-1.5 bg-red-900 rounded-sm"></div>
<div className="w-4 h-1.5 bg-red-900 rounded-sm"></div>
<div className="w-4 h-1.5 bg-amber-900 rounded-sm"></div>
<div className="w-4 h-1.5 bg-amber-500 rounded-sm shadow-[0_0_6px_rgba(245,158,11,0.8)]"></div>
<div className="w-4 h-1.5 bg-emerald-500 rounded-sm shadow-[0_0_6px_rgba(16,185,129,0.8)]"></div>
<div className="w-4 h-1.5 bg-emerald-500 rounded-sm shadow-[0_0_6px_rgba(16,185,129,0.8)]"></div>
<div className="w-4 h-1.5 bg-emerald-500 rounded-sm shadow-[0_0_6px_rgba(16,185,129,0.8)]"></div>
<div className="w-4 h-1.5 bg-emerald-500 rounded-sm shadow-[0_0_6px_rgba(16,185,129,0.8)]"></div>
</div>
</div>
</div>
</div>

<div className="flex justify-between items-center z-10 px-4">

<div className="flex flex-col gap-8 gap-x-8 gap-y-8">

<div className="flex flex-col items-center gap-3">
<span className="text-xs text-zinc-500 uppercase tracking-widest font-medium" style={{textShadow: '0 1px 0 rgba(255,255,255,0.08)'}}>Threshold</span>
<div className="relative w-16 h-16 rounded-full bg-[#0a0a0c] flex items-center justify-center" style={{boxShadow: 'inset 0 3px 6px rgba(0, 0, 0, 1), 0 1px 0 rgba(255,255,255,0.05)'}}>
<div className="w-12 h-12 rounded-full relative cursor-pointer group" style={{background: 'conic-gradient(from 180deg at 50% 50%, #27272a 0deg, #18181b 90deg, #3f3f46 180deg, #18181b 270deg, #27272a 360deg)', boxShadow: '0 5px 10px rgba(0, 0, 0, 0.8), inset 0 1px 1px rgba(255, 255, 255, 0.2), inset 0 -1px 2px rgba(0, 0, 0, 0.5)', transform: 'rotate(-45deg)'}}>
<div className="absolute inset-0 rounded-full border border-zinc-700/50 mix-blend-overlay"></div>
<div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-2.5 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.5),inset_0_1px_1px_rgba(0,0,0,0.5)]"></div>
</div>

<div className="absolute inset-0 rounded-full border border-zinc-800 pointer-events-none border-dashed opacity-30"></div>
</div>
</div>

<div className="flex flex-col items-center gap-3">
<span className="text-xs text-zinc-500 uppercase tracking-widest font-medium" style={{textShadow: '0 1px 0 rgba(255,255,255,0.08)'}}>Ratio</span>
<div className="relative w-16 h-16 rounded-full bg-[#0a0a0c] flex items-center justify-center" style={{boxShadow: 'inset 0 3px 6px rgba(0, 0, 0, 1), 0 1px 0 rgba(255,255,255,0.05)'}}>
<div className="w-12 h-12 rounded-full relative cursor-pointer" style={{background: 'conic-gradient(from 0deg at 50% 50%, #27272a 0deg, #18181b 90deg, #3f3f46 180deg, #18181b 270deg, #27272a 360deg)', boxShadow: '0 5px 10px rgba(0, 0, 0, 0.8), inset 0 1px 1px rgba(255, 255, 255, 0.2), inset 0 -1px 2px rgba(0, 0, 0, 0.5)', transform: 'rotate(120deg)'}}>
<div className="absolute inset-0 rounded-full border border-zinc-700/50 mix-blend-overlay"></div>
<div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-2.5 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.5),inset_0_1px_1px_rgba(0,0,0,0.5)]"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-center gap-6">
<span className="text-xs text-zinc-400 uppercase tracking-[0.3em] font-semibold" style={{textShadow: '0 1px 0 rgba(255,255,255,0.1)'}}>Master Allocation</span>
<div className="relative w-48 h-48 rounded-full flex items-center justify-center bg-[#050505]" style={{boxShadow: 'inset 0 5px 15px rgba(0, 0, 0, 1), 0 1px 0 rgba(255,255,255,0.05)'}}>

<svg className="absolute inset-2 w-44 h-44 opacity-20 pointer-events-none" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="48" stroke="white" stroke-dasharray="2 6" strokeWidth="1"></circle>
</svg>
<div className="w-36 h-36 rounded-full relative cursor-grab active:cursor-grabbing z-10 group" style="background: radial-gradient(circle at 30% 30%, #3f3f46 0%, #18181b 60%, #09090b 100%); 
                                            box-shadow: 0 20px 40px rgba(0,0,0,0.9), 
                                                        inset 0 2px 4px rgba(255,255,255,0.15), 
                                                        inset 0 -4px 8px rgba(0,0,0,0.8);
                                            border: 1px solid #27272a;
                                            transform: rotate(45deg);">

<div className="absolute inset-1 rounded-full opacity-50 pointer-events-none" style={{background: 'conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.05) 45deg, transparent 90deg, rgba(255,255,255,0.05) 135deg, transparent 180deg, rgba(255,255,255,0.05) 225deg, transparent 270deg, rgba(255,255,255,0.05) 315deg, transparent 360deg)'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#0a0a0c]" style={{boxShadow: 'inset 0 4px 10px rgba(0, 0, 0, 0.9), 0 1px 0 rgba(255,255,255,0.05)'}}></div>

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-1.5 h-6 rounded-full bg-blue-500" style={{boxShadow: '0 0 12px rgba(59, 130, 246, 0.8), inset 0 1px 2px rgba(255,255,255,0.5)'}}></div>
</div>
</div>
</div>

<div className="flex flex-col gap-8 items-center">

<div className="flex flex-col items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8),inset_0_1px_2px_rgba(255,255,255,0.6)]"></div>
<button className="w-8 h-14 rounded bg-[#0a0a0c] relative flex items-center justify-center cursor-pointer" style={{boxShadow: 'inset 0 2px 5px rgba(0, 0, 0, 1), 0 1px 0 rgba(255,255,255,0.05)', border: '1px solid #18181b'}}>

<div className="absolute top-1 w-5 h-6 rounded-sm bg-gradient-to-b from-zinc-400 to-zinc-600" style={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.8), inset 0 -1px 2px rgba(0,0,0,0.5)', border: '1px solid #3f3f46'}}></div>
</button>
<span className="text-xs text-zinc-500 uppercase tracking-widest font-medium" style={{textShadow: '0 1px 0 rgba(255,255,255,0.08)'}}>Auto Sync</span>
</div>

<div className="flex flex-col items-center gap-3">
<div className="w-2 h-2 rounded-full bg-[#18181b] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.1)]"></div>
<button className="w-8 h-14 rounded bg-[#0a0a0c] relative flex items-center justify-center cursor-pointer" style={{boxShadow: 'inset 0 2px 5px rgba(0, 0, 0, 1), 0 1px 0 rgba(255,255,255,0.05)', border: '1px solid #18181b'}}>

<div className="absolute bottom-1 w-5 h-6 rounded-sm bg-gradient-to-t from-zinc-700 to-zinc-800" style={{boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.5), inset 0 -1px 1px rgba(255, 255, 255, 0.1), inset 0 1px 2px rgba(0,0,0,0.8)', border: '1px solid #27272a'}}></div>
</button>
<span className="text-xs text-zinc-500 uppercase tracking-widest font-medium" style={{textShadow: '0 1px 0 rgba(255,255,255,0.08)'}}>Bypass</span>
</div>
</div>
</div>

<div className="flex justify-between gap-4 mt-4 pt-8 border-t border-zinc-800/50 relative z-10" style={{boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)'}}>

<div className="flex flex-col items-center gap-4 flex-1">
<div className="h-40 w-10 bg-[#050505] rounded flex justify-center py-2 relative" style={{boxShadow: 'inset 0 3px 10px rgba(0, 0, 0, 1), 0 1px 0 rgba(255,255,255,0.05)', border: '1px solid #18181b'}}>

<div className="w-1.5 h-full bg-black rounded-full shadow-[inset_0_0_5px_rgba(0,0,0,1)]"></div>

<div className="absolute right-1 top-2 bottom-2 w-1 flex flex-col justify-between opacity-20 pointer-events-none">
<div className="w-full h-px bg-white"></div><div className="w-full h-px bg-white"></div><div className="w-full h-px bg-white"></div><div className="w-full h-px bg-white"></div><div className="w-full h-px bg-white"></div>
</div>

<div className="absolute bottom-16 w-12 h-14 rounded bg-gradient-to-b from-zinc-300 to-zinc-500 cursor-ns-resize flex flex-col items-center justify-between py-1.5" style={{boxShadow: '0 10px 20px rgba(0, 0, 0, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.9), inset 0 -2px 2px rgba(0,0,0,0.4)', border: '1px solid #27272a'}}>
<div className="w-8 h-px bg-zinc-600 shadow-[0_1px_0_rgba(255,255,255,0.5)]"></div>
<div className="w-10 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_1px_2px_rgba(0,0,0,0.5)]"></div>
<div className="w-8 h-px bg-zinc-600 shadow-[0_1px_0_rgba(255,255,255,0.5)]"></div>
</div>
</div>
<span className="text-xs text-zinc-500 uppercase tracking-widest font-medium" style={{textShadow: '0 1px 0 rgba(255,255,255,0.08)'}}>Workers</span>
</div>

<div className="flex flex-col items-center gap-4 flex-1">
<div className="h-40 w-10 bg-[#050505] rounded flex justify-center py-2 relative" style={{boxShadow: 'inset 0 3px 10px rgba(0, 0, 0, 1), 0 1px 0 rgba(255,255,255,0.05)', border: '1px solid #18181b'}}>

<div className="w-1.5 h-full bg-black rounded-full shadow-[inset_0_0_5px_rgba(0,0,0,1)]"></div>
<div className="absolute right-1 top-2 bottom-2 w-1 flex flex-col justify-between opacity-20 pointer-events-none">
<div className="w-full h-px bg-white"></div><div className="w-full h-px bg-white"></div><div className="w-full h-px bg-white"></div><div className="w-full h-px bg-white"></div><div className="w-full h-px bg-white"></div>
</div>

<div className="absolute bottom-6 w-12 h-14 rounded bg-gradient-to-b from-zinc-300 to-zinc-500 cursor-ns-resize flex flex-col items-center justify-between py-1.5" style={{boxShadow: '0 10px 20px rgba(0, 0, 0, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.9), inset 0 -2px 2px rgba(0,0,0,0.4)', border: '1px solid #27272a'}}>
<div className="w-8 h-px bg-zinc-600 shadow-[0_1px_0_rgba(255,255,255,0.5)]"></div>
<div className="w-10 h-1.5 bg-gradient-to-r from-zinc-800 to-zinc-700 shadow-[inset_0_1px_1px_rgba(0,0,0,0.8),0_1px_2px_rgba(255,255,255,0.5)]"></div>
<div className="w-8 h-px bg-zinc-600 shadow-[0_1px_0_rgba(255,255,255,0.5)]"></div>
</div>
</div>
<span className="text-xs text-zinc-500 uppercase tracking-widest font-medium" style={{textShadow: '0 1px 0 rgba(255,255,255,0.08)'}}>Cache</span>
</div>

<div className="flex flex-col items-center gap-4 flex-1">
<div className="h-40 w-10 bg-[#050505] rounded flex justify-center py-2 relative" style={{boxShadow: 'inset 0 3px 10px rgba(0, 0, 0, 1), 0 1px 0 rgba(255,255,255,0.05)', border: '1px solid #18181b'}}>

<div className="w-1.5 h-full bg-black rounded-full shadow-[inset_0_0_5px_rgba(0,0,0,1)]"></div>
<div className="absolute right-1 top-2 bottom-2 w-1 flex flex-col justify-between opacity-20 pointer-events-none">
<div className="w-full h-px bg-white"></div><div className="w-full h-px bg-white"></div><div className="w-full h-px bg-white"></div><div className="w-full h-px bg-white"></div><div className="w-full h-px bg-white"></div>
</div>

<div className="absolute top-8 w-12 h-14 rounded bg-gradient-to-b from-zinc-300 to-zinc-500 cursor-ns-resize flex flex-col items-center justify-between py-1.5" style={{boxShadow: '0 10px 20px rgba(0, 0, 0, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.9), inset 0 -2px 2px rgba(0,0,0,0.4)', border: '1px solid #27272a'}}>
<div className="w-8 h-px bg-zinc-600 shadow-[0_1px_0_rgba(255,255,255,0.5)]"></div>
<div className="w-10 h-1.5 bg-gradient-to-r from-red-600 to-red-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_1px_2px_rgba(0,0,0,0.5)]"></div>
<div className="w-8 h-px bg-zinc-600 shadow-[0_1px_0_rgba(255,255,255,0.5)]"></div>
</div>
</div>
<span className="text-xs text-red-800 uppercase tracking-widest font-semibold" style={{textShadow: '0 1px 0 rgba(255,255,255,0.05)'}}>Limit</span>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
