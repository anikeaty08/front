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
      

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-20%] left-[20%] w-[60vw] h-[60vw] bg-orange-600/10 rounded-full blur-[120px] opacity-40 mix-blend-screen animate-pulse" style={{animationDuration: '8s'}}></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-slate-700/10 rounded-full blur-[100px] opacity-30 mix-blend-screen"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
</div>

<main className="w-full max-w-7xl relative z-10">

<div className="relative w-full bg-neutral-900/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-60"></div>

<nav className="flex items-center justify-between px-6 py-6 sm:px-10 border-b border-white/5 relative z-20">
<div className="flex items-center gap-3 cursor-default select-none">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.4)] text-white">
<svg className="lucide lucide-album lucide-shield-alert w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="album" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><polyline points="11 3 11 11 14 8 17 11 17 3"></polyline></svg>
</div>
<span className="text-lg font-medium text-white tracking-tight">SENTINEL</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-400 gap-x-8 gap-y-8 items-center">
<a className="hover:text-white transition-colors" href="#">Live Maps</a>
<a className="hover:text-white transition-colors" href="#">Offline Mode</a>
<a className="hover:text-white transition-colors" href="#">Hardware</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:flex text-xs font-medium text-slate-400 hover:text-white transition-colors px-3">Support</button>
<button className="group/btn relative flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs font-medium px-4 py-2 rounded-full transition-all">
<span className="">Get App</span>
<svg className="lucide lucide-download w-3 h-3 group-hover/btn:translate-y-0.5 transition-transform" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
</div>
</nav>

<div className="grid lg:grid-cols-12 sm:p-10 lg:p-16 min-h-[600px] pt-6 pr-6 pb-6 pl-6 relative gap-x-8 gap-y-8 items-center">

<div className="lg:col-span-5 flex flex-col justify-center items-start space-y-8 relative z-20 order-2 lg:order-1">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium tracking-wide">
<svg className="lucide lucide-wifi-off w-3 h-3" data-lucide="wifi-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path><path d="M5 12.859a10 10 0 0 1 5.17-2.69"></path><path d="M19 12.859a10 10 0 0 0-2.007-1.523"></path><path d="M2 8.82a15 15 0 0 1 4.177-2.643"></path><path d="M22 8.82a15 15 0 0 0-11.288-3.764"></path><path d="m2 2 20 20"></path></svg>
                        OFFLINE-FIRST ARCHITECTURE
                    </div>

<div className="space-y-4">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
                            Preparedness when 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-orange-100">seconds count.</span>
</h1>
<p className="text-base sm:text-lg text-slate-400 max-w-lg leading-relaxed font-light">
                            Real-time disaster tracking, offline maps, and emergency mesh networking. Sentinel keeps you connected to safety when the grid goes down.
                        </p>
</div>

<div className="flex flex-wrap items-center gap-4 w-full pt-2">
<button className="h-12 px-5 rounded-xl bg-white text-black hover:bg-slate-200 transition-colors flex items-center gap-3 border border-transparent shadow-lg shadow-white/5">
<svg className="lucide lucide-apple w-5 h-5 fill-current" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
<div className="flex flex-col items-start leading-none">
<span className="text-[10px] font-medium opacity-60">Download on the</span>
<span className="text-sm font-bold tracking-tight">App Store</span>
</div>
</button>
<button className="h-12 px-5 rounded-xl bg-transparent border border-white/20 text-white hover:bg-white/5 transition-colors flex items-center gap-3">
<svg className="lucide lucide-smartphone w-5 h-5" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<div className="flex flex-col items-start leading-none">
<span className="text-[10px] font-medium opacity-60">Get it on</span>
<span className="text-sm font-bold tracking-tight">Google Play</span>
</div>
</button>
</div>

<div className="pt-8 w-full grid grid-cols-2 gap-6">
<div className="flex items-start gap-3 group">
<div className="mt-0.5 p-1.5 rounded bg-slate-800 text-slate-300 group-hover:text-orange-400 group-hover:bg-orange-500/10 transition-colors">
<svg className="lucide lucide-map w-4 h-4" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<div>
<h3 className="text-sm font-medium text-slate-200">Topographic Maps</h3>
<p className="text-xs text-slate-500 mt-1">Download regions for offline use.</p>
</div>
</div>
<div className="flex items-start gap-3 group">
<div className="mt-0.5 p-1.5 rounded bg-slate-800 text-slate-300 group-hover:text-orange-400 group-hover:bg-orange-500/10 transition-colors">
<svg className="lucide lucide-radio-receiver w-4 h-4" data-lucide="radio-receiver" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 16v2"></path><path d="M19 16v2"></path><rect height="8" rx="2" width="20" x="2" y="8"></rect><path d="M18 12h.01"></path></svg>
</div>
<div>
<h3 className="text-sm font-medium text-slate-200">Mesh Network</h3>
<p className="text-xs text-slate-500 mt-1">Bluetooth bridge nearby devices.</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 flex lg:mt-0 min-h-[500px] order-1 lg:order-2 h-full mt-8 relative perspective-[2000px] items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-[90px] pointer-events-none"></div>

<div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rotate-[-12deg] scale-90 origin-bottom-right z-10 transition-transform hover:z-40 hover:scale-100 hover:rotate-0 hover:translate-x-12 duration-500 ease-out group">
<div className="relative w-[260px] aspect-[9/19] bg-neutral-950 rounded-[2.5rem] border-[4px] border-neutral-800 shadow-2xl overflow-hidden ring-1 ring-white/10">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl z-50"></div>

<div className="w-full h-full bg-slate-900 flex flex-col p-5 pt-10 relative">
<div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-900 pointer-events-none"></div>
<div className="flex items-center gap-2 mb-6 z-10">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
<svg className="lucide lucide-arrow-left w-4 h-4 text-slate-300" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</div>
<span className="text-sm font-medium text-white">Preparedness</span>
</div>
<h3 className="text-2xl font-light text-white mb-4 z-10">Emergency Kit</h3>
<div className="space-y-3 z-10">

<div className="mb-4">
<div className="flex justify-between text-[10px] text-slate-400 mb-1 uppercase tracking-wider font-semibold">
<span>Kit Completeness</span>
<span>65%</span>
</div>
<div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="w-[65%] h-full bg-orange-500 rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-white/5">
<div className="w-5 h-5 rounded bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
<svg className="lucide lucide-check w-3 h-3 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-xs text-slate-300">Water Filtration</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-white/5">
<div className="w-5 h-5 rounded bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
<svg className="lucide lucide-check w-3 h-3 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-xs text-slate-300">Thermal Blankets</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
<div className="w-5 h-5 rounded bg-transparent border-2 border-orange-500/40"></div>
<div className="flex flex-col">
<span className="text-xs text-white font-medium">Crank Radio</span>
<span className="text-[10px] text-orange-400">High Priority</span>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-white/5 opacity-50">
<div className="w-5 h-5 rounded bg-transparent border-2 border-slate-600"></div>
<span className="text-xs text-slate-300">First Aid Manual</span>
</div>
</div>
</div>

<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-20"></div>
</div>
</div>

<div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rotate-[12deg] scale-90 origin-bottom-left z-10 transition-transform hover:z-40 hover:scale-100 hover:rotate-0 hover:-translate-x-12 duration-500 ease-out group">
<div className="relative w-[260px] aspect-[9/19] bg-neutral-950 rounded-[2.5rem] border-[4px] border-neutral-800 shadow-2xl overflow-hidden ring-1 ring-white/10">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl z-50"></div>

<div className="w-full h-full bg-slate-900 flex flex-col relative overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15)_0%,transparent_70%)]"></div>
<div className="p-5 pt-10 z-10">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-medium text-slate-400 uppercase tracking-widest">Mesh Network</span>
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
</div>

<div className="relative w-full aspect-square rounded-full border border-white/5 flex items-center justify-center mb-6">
<div className="absolute inset-0 border border-dashed border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="w-2/3 h-2/3 border border-white/5 rounded-full flex items-center justify-center">
<div className="w-1/2 h-1/2 bg-orange-500/10 rounded-full animate-ping"></div>
</div>

<div className="absolute top-4 right-8 w-3 h-3 bg-blue-500 rounded-full border-2 border-slate-900 shadow-lg shadow-blue-500/50"></div>
<div className="absolute bottom-8 left-6 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900 shadow-lg shadow-emerald-500/50"></div>
<div className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
</div>

<div className="space-y-2">
<h4 className="text-[10px] text-slate-500 font-medium uppercase mb-2">Active Peers</h4>
<div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-smartphone w-3 h-3 text-slate-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<span className="text-xs text-slate-200">iPhone 14 (Sarah)</span>
</div>
<svg className="lucide lucide-signal w-3 h-3 text-emerald-400" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
</div>
<div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-smartphone w-3 h-3 text-slate-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<span className="text-xs text-slate-200">Pixel 7 (Base)</span>
</div>
<svg className="lucide lucide-signal-medium w-3 h-3 text-yellow-400" data-lucide="signal-medium" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path></svg>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-20"></div>
</div>
</div>

<div className="relative w-[280px] sm:w-[300px] aspect-[9/19] bg-neutral-950 rounded-[3rem] border-[6px] border-neutral-800 shadow-[0_20px_50px_-12px_rgba(0,0,0,1)] overflow-hidden ring-1 ring-white/10 z-30 transform transition-transform duration-500 hover:scale-105">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-50"></div>

<div className="w-full h-full bg-slate-900 relative overflow-hidden flex flex-col">

<div className="absolute inset-0 bg-slate-900 opacity-60">

<div className="w-full h-full bg-[linear-gradient(#ffffff05_1px,transparent_1px),linear-gradient(90deg,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]"></div>

<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-slate-600 rounded-full"></div>
<div className="absolute top-1/2 right-1/3 w-2 h-2 bg-slate-600 rounded-full"></div>
<div className="absolute bottom-1/3 left-10 w-2 h-2 bg-slate-600 rounded-full"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-orange-500/30 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-orange-500/30 rounded-full"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full border-2 border-slate-900 shadow-[0_0_20px_rgba(249,115,22,0.5)] z-10"></div>
</div>

<div className="h-12 flex justify-between items-center px-6 text-[10px] font-medium text-white z-20 pt-2">
<span className="">9:41</span>
<div className="flex gap-1 items-center">
<svg className="lucide lucide-signal w-3 h-3" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-battery-medium w-3 h-3" data-lucide="battery-medium" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14v-4"></path><path d="M22 14v-4"></path><path d="M6 14v-4"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>

<div className="px-4 pt-2 z-20">
<div className="bg-neutral-900/90 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-lg animate-pulse" style={{animationDuration: '4s'}}>
<div className="flex items-start gap-3">
<div className="p-2 rounded-xl bg-red-500/20 text-red-500 shrink-0">
<svg className="lucide lucide-siren w-4 h-4" data-lucide="siren" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 18v-6a5 5 0 1 1 10 0v6"></path><path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"></path><path d="M21 12h1"></path><path d="M18.5 4.5 18 5"></path><path d="M2 12h1"></path><path d="M12 2v1"></path><path d="m4.929 4.929.707.707"></path><path d="M12 12v6"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-wider text-red-400 font-bold">Emergency Alert</span>
<span className="text-xs font-medium text-white leading-tight mt-0.5">Wildfire Warning in your sector. Evacuate to Zone B.</span>
</div>
</div>
</div>
</div>

<div className="flex-1"></div>

<div className="absolute right-4 bottom-28 flex flex-col gap-3 z-20">
<button className="w-10 h-10 bg-slate-800/90 backdrop-blur border border-white/10 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-slate-700 transition">
<svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</button>
<button className="w-10 h-10 bg-slate-800/90 backdrop-blur border border-white/10 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-slate-700 transition">
<svg className="lucide lucide-navigation w-4 h-4" data-lucide="navigation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
</button>
</div>

<div className="z-30 bg-neutral-900/95 border-white/10 rounded-t-[1.5rem] border-t pt-5 pr-5 pb-8 pl-5 relative shadow-[0_-10px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl">

<div className="w-10 h-1 bg-slate-700 rounded-full mx-auto mb-4"></div>
<div className="flex justify-between items-center mb-4">
<span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Nearby Safety</span>
<span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">Connected</span>
</div>
<div className="space-y-3">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
<svg className="lucide lucide-home w-3.5 h-3.5 text-slate-300" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Shelter Alpha</span>
<span className="text-[10px] text-slate-500">0.8 mi • Open</span>
</div>
</div>
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center">
<svg className="lucide lucide-chevron-right w-3 h-3 text-slate-500" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
<svg className="lucide lucide-users w-3.5 h-3.5 text-slate-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Family Group</span>
<span className="text-[10px] text-slate-500">3 Safe • 1 Unknown</span>
</div>
</div>
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center">
<svg className="lucide lucide-chevron-right w-3 h-3 text-slate-500" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
</div>
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
