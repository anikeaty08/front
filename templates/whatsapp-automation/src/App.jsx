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
      

<div className="fixed inset-0 pointer-events-none z-0">

<div className="absolute top-0 left-0 right-0 h-[80vh] ambient-glow"></div>

<div className="absolute top-0 bottom-0 left-0 w-[300px] side-glow-left"></div>
<div className="absolute top-0 bottom-0 right-0 w-[300px] side-glow-right"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"></div>
</div>

<nav className="relative z-50 w-full pt-6 px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-4">

<div className="flex items-center gap-3 select-none">
<div className="relative w-8 h-8 flex items-center justify-center">

<svg fill="none" height="32" viewbox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M4 8C8 4 12 12 16 12C20 12 24 4 28 8" stroke="#3B82F6" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M4 16C8 12 12 20 16 20C20 20 24 12 28 16" stroke="#00FF94" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M4 24C8 20 12 28 16 28C20 28 24 20 28 24" stroke="#3B82F6" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
</div>
<span className="text-xl font-normal tracking-wide font-display text-white">CODE CRAFT</span>
</div>

<div className="hidden lg:flex items-center bg-[#121620]/80 backdrop-blur-md border border-white/5 rounded-full px-1.5 py-1.5 gap-1 shadow-lg shadow-black/20">
<a className="px-4 py-1.5 text-xs font-medium text-white bg-white/5 rounded-full border border-white/5" href="#">Home</a>
<button className="flex items-center gap-1 px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white glass-nav-item rounded-full">
                More <i className="w-3 h-3 opacity-50" data-lucide="chevron-down"></i>
</button>
<a className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white glass-nav-item rounded-full" href="#">Pricing</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white glass-nav-item rounded-full" href="#">Benefits</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white glass-nav-item rounded-full" href="#">Features</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white glass-nav-item rounded-full" href="#">Blog</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white glass-nav-item rounded-full" href="#">Contact Us</a>
</div>

<div className="flex items-center">
<a className="bg-[#00FF94] hover:bg-[#00e685] text-[#020408] text-[13px] font-bold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] tracking-wide shadow-[0_0_20px_rgba(0,255,148,0.2)]" href="#">
                JOIN NOW
            </a>
</div>
</nav>

<main className="relative z-10 flex-grow flex flex-col justify-center px-6 lg:px-20 pt-12 pb-24">
<div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">

<div className="flex flex-col justify-center items-start space-y-8">

<h1 className="font-display text-5xl md:text-7xl lg:text-[5rem] font-medium leading-[1] tracking-tight text-white">
                    Never Let a <br/>
                    Real Estate <br/>
                    Lead Go Cold
                </h1>

<p className="text-slate-400 text-lg md:text-[1.1rem] leading-relaxed font-light max-w-[34rem]">
                    A 3-layer AI automation system that captures, qualifies, and converts real estate leads 24/7 across website, WhatsApp, and calls — without manual follow-ups.
                </p>

<div className="pt-2">
<button className="group relative inline-flex items-center gap-4 bg-[#00FF94] hover:bg-[#00e685] text-[#020408] rounded-full pl-8 pr-2 py-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,148,0.3)]">
<span className="text-sm font-bold tracking-wide uppercase">Book a Free Discovery Session</span>
<div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-45">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</button>
</div>
</div>

<div className="relative w-full h-[500px] hidden lg:flex items-center justify-center perspective-[1000px]">

<div className="relative w-[400px] h-[400px] animate-float">

<div className="absolute -top-4 -left-8 glass-panel px-3 py-1.5 rounded-lg flex items-center justify-center gap-2 z-20 shadow-xl">
<span className="text-[#38bdf8] font-bold text-xs font-mono">Ps</span>
<div className="w-1 h-1 bg-white/50 rounded-full"></div>
</div>

<div className="w-full h-full relative group">

<div className="absolute inset-0 bg-blue-600/20 blur-[60px] rounded-full"></div>

<div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] to-[#020617] rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-sm">

<div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>

<div className="absolute top-8 left-8 right-8 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-white/5 p-4 flex flex-col gap-3">
<div className="w-1/3 h-2 bg-white/10 rounded-full"></div>
<div className="w-2/3 h-2 bg-white/10 rounded-full"></div>
</div>

<div className="absolute bottom-8 right-8 w-40 h-40 rounded-full bg-gradient-to-tr from-black to-slate-800 border border-white/10 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] flex items-center justify-center">
<div className="w-24 h-24 rounded-full bg-[#000] border border-slate-700 shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FF94]/20 to-transparent w-full h-full animate-[spin_4s_linear_infinite]"></div>
<div className="w-2 h-2 bg-[#00FF94] rounded-full shadow-[0_0_10px_#00FF94]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 right-10 z-30">
<button className="w-14 h-14 bg-[#00FF94] hover:bg-[#00dd80] rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(0,255,148,0.2)] transition-transform hover:-translate-y-1">
<i className="w-6 h-6 text-[#020408]" data-lucide="arrow-down"></i>
</button>
</div>
</div>
</div>
</main>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-[#202124] text-white px-5 py-3 rounded-lg shadow-2xl border border-[#3c4043] animate-slide-up">
<div className="flex items-center gap-3 border-r border-white/20 pr-4">
<div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="screen-share"></i>
</div>
<span className="text-sm font-normal text-gray-200">meet.google.com is sharing a window.</span>
</div>
<button className="text-[#8ab4f8] text-sm font-medium hover:text-blue-300 transition-colors">Stop sharing</button>
<button className="text-white/70 text-sm font-medium hover:text-white transition-colors">Hide</button>
</div>


    </>
  );
}
