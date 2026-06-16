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
      

<div className="fixed top-0 left-0 w-full h-96 bg-gradient-to-b from-slate-200/50 to-transparent -z-10 pointer-events-none"></div>
<div className="max-w-md mx-auto w-full relative z-10">

<div className="h-2"></div>

<div className="flex justify-center mb-8">
<div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] pl-1 pr-3 py-1 rounded-full flex items-center gap-2">
<div className="bg-slate-900 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wide">EXPIRES</div>
<span className="text-xs font-medium tabular-nums text-slate-600">09:51</span>
</div>
</div>

<header className="flex items-center justify-between mb-8 px-2">
<button className="w-10 h-10 flex items-center justify-center hover:bg-white hover:shadow-sm rounded-full transition-all duration-300 text-slate-500 hover:text-slate-900">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<h1 className="text-lg font-medium tracking-tight text-slate-900">Checkout</h1>
<div className="w-10"></div>
</header>

<section className="mb-10 relative group perspective-1000">

<div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700 scale-90 translate-y-4"></div>
<div className="relative bg-[#0F1115] text-white rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-900/20 border border-white/10 ring-1 ring-white/5 p-1 isolate">

<div className="absolute inset-0 noise-bg mix-blend-overlay z-10 opacity-30"></div>

<div className="relative z-20 p-6 flex flex-col items-center text-center">

<div className="flex items-center gap-1.5 mb-6">
<i className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400/20" data-lucide="sparkles"></i>
<span className="text-[10px] uppercase tracking-[0.2em] font-medium text-slate-400">Exclusive Reward Unlocked</span>
<i className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400/20" data-lucide="sparkles"></i>
</div>

<div className="relative w-40 h-40 mb-6 group-hover:scale-105 transition-transform duration-700 ease-out">
<div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-2xl"></div>
<img alt="Headphones" className="relative w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-10 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>

<h2 className="text-xl font-medium tracking-tight mb-1 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">Sony WH-1000XM5</h2>
<p className="text-xs text-slate-500 font-medium tracking-wide uppercase mb-6">Active Noise Cancelling</p>

<div className="w-full bg-white/5 rounded-2xl p-4 border border-white/5 backdrop-blur-sm flex items-center justify-between relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="flex flex-col items-start">
<span className="text-[10px] text-slate-400 mb-0.5">Total Value</span>
<span className="text-sm line-through text-slate-600">$349.00</span>
</div>
<div className="flex flex-col items-end">
<span className="text-[10px] text-emerald-400 font-medium mb-0.5 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                100% OFF
                            </span>
<span className="text-3xl font-medium tracking-tighter text-white tabular-nums">$0.00</span>
</div>
</div>
</div>
</div>
</section>

<div className="space-y-3">

<div className="bg-white rounded-2xl p-1 shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-slate-100">
<button className="w-full flex items-center gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors group text-left">
<div className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:shadow-sm transition-all border border-transparent group-hover:border-slate-200">
<i className="w-5 h-5" data-lucide="user"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-slate-500 mb-0.5">Contact Info</p>
<p className="text-sm font-medium text-slate-900 truncate">+1 647 424 2424 • johnelma@gmail.com</p>
</div>
<i className="w-4 h-4 text-slate-300 group-hover:text-slate-600 transition-colors" data-lucide="pencil"></i>
</button>
</div>

<div className="bg-white rounded-2xl p-1 shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-slate-100">
<button className="w-full flex items-center gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors group text-left">
<div className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:shadow-sm transition-all border border-transparent group-hover:border-slate-200">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-slate-500 mb-0.5">Shipping to</p>
<p className="text-sm font-medium text-slate-900 truncate">166 - 1016 Adress Street</p>
</div>
<i className="w-4 h-4 text-slate-300 group-hover:text-slate-600 transition-colors" data-lucide="pencil"></i>
</button>
</div>
</div>

<div className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-xl border-t border-slate-200 p-4 sm:px-6 z-50">
<div className="max-w-md mx-auto w-full">
<button className="relative w-full group overflow-hidden rounded-xl bg-slate-900 shadow-[0_8px_20px_-6px_rgba(15,23,42,0.4)] transition-transform active:scale-[0.98]">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
<div className="relative py-4 px-6 flex items-center justify-between">
<span className="text-slate-400 text-sm font-medium">Total to pay</span>
<div className="flex items-center gap-3">
<span className="text-white text-lg font-semibold tracking-tight">$0.00</span>
<div className="h-6 w-px bg-white/20"></div>
<span className="text-white font-medium flex items-center gap-2">
                                Confirm <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</button>
</div>
</div>

<div className="h-24"></div>
</div>


    </>
  );
}
