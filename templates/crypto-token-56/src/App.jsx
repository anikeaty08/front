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



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 left-0 bg-slate-50/80 backdrop-blur-md border-b border-slate-100/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 rounded-lg border border-slate-900 flex items-center justify-center bg-white group-hover:bg-slate-50 transition-colors">
<i className="w-5 h-5 text-slate-900" data-lucide="layers"></i>
</div>
<span className="text-xl font-bold tracking-tight text-slate-900">ICoin</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Ecosystem</a>
<a className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Utility</a>
<a className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Tokenomics</a>
<a className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Roadmap</a>
</div>

<button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full text-base font-medium transition-all transform active:scale-95 shadow-lg shadow-slate-900/10">
                Launch App
            </button>
</div>
</nav>

<main className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-20 overflow-hidden">

<div className="absolute inset-0 z-0 bg-grid-pattern pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white pointer-events-none -z-10"></div>

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl mix-blend-multiply filter pointer-events-none"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl mix-blend-multiply filter pointer-events-none"></div>

<div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center max-w-5xl">

<div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white mb-8 shadow-xl shadow-slate-900/10 hover:scale-105 transition-transform cursor-default">
<i className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" data-lucide="sparkles"></i>
<span className="text-sm font-medium tracking-wide">Coin Token Live</span>
</div>

<h1 className="animate-fade-in-up delay-100 text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-slate-900 leading-[0.9] mb-8">
                GROW <br className="hidden md:block"/> EARNINGS
            </h1>

<p className="animate-fade-in-up delay-200 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
                Start looking in volenect elig deer. Core rid on ofish asosting. Bold poor account and efect Figure recoctat through rents.
            </p>

<div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white h-14 px-8 rounded-full font-medium text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-slate-900/20 group">
                    Buy ICoin Now
                    <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right"></i>
</button>
<button className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 h-14 px-8 rounded-full font-medium text-lg transition-all shadow-sm hover:shadow-md hover:border-slate-300">
                    Stake &amp; Earn
                </button>
</div>
</div>


<div className="hidden xl:block absolute left-[8%] top-1/2 -translate-y-1/2 z-0 animate-fade-in-up delay-300">
<div className="relative w-64 h-64">

<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20" viewbox="0 0 100 100">
<circle className="animate-[spin_20s_linear_infinite]" cx="50" cy="50" fill="none" r="40" stroke="#3b82f6" stroke-dasharray="4 4" strokeWidth="0.5"></circle>
<line stroke="#3b82f6" strokeWidth="0.5" x1="10" x2="90" y1="50" y2="50"></line>
<line stroke="#3b82f6" strokeWidth="0.5" x1="50" x2="50" y1="10" y2="90"></line>
</svg>

<div className="absolute bottom-16 left-10 w-24 h-24 animate-coin-bounce" style={{animationDelay: '0s'}}>
<div className="relative w-full h-full preserve-3d">

<div className="absolute inset-x-0 bottom-0 h-4 bg-blue-700 rounded-[100%]"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-full border-2 border-blue-400/50 shadow-xl flex items-center justify-center transform rotate-x-[60deg]">
<i className="w-10 h-10 text-white transform -rotate-x-[60deg] drop-shadow-lg" data-lucide="gem"></i>
</div>
</div>
</div>

<div className="absolute bottom-4 right-10 w-16 h-16 animate-coin-bounce" style={{animationDelay: '1.5s'}}>
<div className="relative w-full h-full preserve-3d">
<div className="absolute inset-x-0 bottom-0 h-3 bg-blue-700 rounded-[100%]"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-blue-400 rounded-full border-2 border-indigo-300/50 shadow-lg flex items-center justify-center transform rotate-x-[60deg]">
<i className="w-6 h-6 text-white transform -rotate-x-[60deg]" data-lucide="diamond"></i>
</div>
</div>
</div>
</div>
</div>

<div className="hidden xl:block absolute right-[5%] top-1/2 -translate-y-1/2 z-0 animate-fade-in-up delay-300">
<div className="relative w-[400px] h-[400px] perspective-1000 flex items-center justify-center">

<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-30 animate-circuit" style={{zIndex: '-1'}} viewbox="0 0 100 100">
<path d="M50 50 L90 20 L100 20" fill="none" stroke="#2563eb" strokeWidth="0.5"></path>
<path d="M50 50 L10 80 L0 80" fill="none" stroke="#2563eb" strokeWidth="0.5"></path>
<path d="M50 50 L90 80 L100 80" fill="none" stroke="#2563eb" strokeWidth="0.5"></path>
<path d="M50 50 L10 20 L0 20" fill="none" stroke="#2563eb" strokeWidth="0.5"></path>
<circle cx="90" cy="20" fill="#2563eb" r="1.5"></circle>
<circle cx="10" cy="80" fill="#2563eb" r="1.5"></circle>
</svg>

<div className="relative w-56 h-56 preserve-3d animate-float-vault">

<div className="absolute inset-0 bg-blue-500 rounded-xl border-[6px] border-blue-400 flex items-center justify-center" style={{transform: 'rotateX(90deg) translateZ(112px)'}}>

<div className="w-40 h-40 rounded-full border-4 border-blue-300/50 flex items-center justify-center bg-blue-600/50 shadow-inner">

<div className="w-28 h-28 rounded-full border-4 border-blue-200 flex items-center justify-center relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-200 rounded-full"></div>
<div className="w-16 h-16 rounded-full bg-blue-400 shadow-lg flex items-center justify-center">
<div className="w-8 h-8 rounded-full bg-blue-800"></div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-blue-600 rounded-xl border-[6px] border-blue-500 flex items-center justify-center overflow-hidden" style={{transform: 'rotateY(0deg) translateZ(112px)'}}>

<div className="w-40 h-40 bg-blue-800 rounded-lg shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)] flex items-center justify-center relative border border-blue-700/50">

<div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 to-transparent"></div>

<div className="relative">
<i className="w-24 h-24 text-blue-300 fill-blue-900/50 stroke-[1]" data-lucide="shield"></i>
<i className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-cyan-400" data-lucide="check"></i>
</div>
</div>

<div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-blue-800 shadow-sm"></div>
<div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-blue-800 shadow-sm"></div>
<div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-blue-800 shadow-sm"></div>
<div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-blue-800 shadow-sm"></div>
</div>

<div className="absolute inset-0 bg-blue-700 rounded-xl border-[6px] border-blue-600 flex items-center justify-center" style={{transform: 'rotateY(90deg) translateZ(112px)'}}>
<div className="flex flex-col items-center">

<div className="flex gap-1.5 mb-4">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_cyan]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-cyan-400/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-cyan-400/50"></div>
</div>

<div className="relative w-12 h-32 bg-blue-900 rounded-full border border-blue-500 shadow-inner flex items-center justify-center">

<div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-cyan-300 to-blue-500 border-4 border-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.4)] flex items-center justify-center transform translate-x-8 translate-z-10 animate-[pulse_4s_ease-in-out_infinite]">

<div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm">
<i className="w-8 h-8 text-white transform rotate-12" data-lucide="box"></i>
</div>
</div>
</div>

<div className="mt-4 w-6 h-10 bg-blue-800 rounded border border-blue-600 relative shadow-sm">
<div className="absolute bottom-0 w-full h-1/2 bg-blue-900 rounded-b"></div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-blue-800 rounded-xl" style={{transform: 'rotateY(180deg) translateZ(112px)'}}></div>
<div className="absolute inset-0 bg-blue-800 rounded-xl" style={{transform: 'rotateY(-90deg) translateZ(112px)'}}></div>
<div className="absolute inset-0 bg-blue-900 rounded-xl" style={{transform: 'rotateX(-90deg) translateZ(112px)'}}></div>
</div>

<div className="absolute -bottom-10 -right-4 animate-[bounce_6s_infinite_1s]">
<div className="relative w-20 h-20 preserve-3d">
<div className="absolute inset-x-0 bottom-0 h-4 bg-blue-800 rounded-[100%] shadow-2xl"></div>
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full border border-cyan-300/30 flex items-center justify-center transform rotate-x-[60deg]">
<i className="w-8 h-8 text-cyan-50 transform -rotate-x-[60deg]" data-lucide="diamond"></i>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
