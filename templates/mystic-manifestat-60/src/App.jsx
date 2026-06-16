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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[60vw] h-[60vh] bg-rose-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vh] bg-indigo-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2" href="#">
<div className="w-5 h-5 rounded-full bg-gradient-to-tr from-rose-500 to-violet-500 flex items-center justify-center text-[10px] text-white font-bold">L</div>
                    LUMINA
                </a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Templates</a>
<a className="hover:text-white transition-colors" href="#">Grimoire</a>
<a className="hover:text-white transition-colors" href="#">Astrology</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:search" width="18"></iconify-icon>
</button>
<div className="h-4 w-px bg-white/10"></div>
<button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs font-medium text-white px-3 py-1.5 rounded-full transition-all">
<span>New Manifestation</span>
<iconify-icon className="text-rose-400" icon="lucide:sparkles" width="12"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="flex-grow pt-28 pb-20 px-6">
<div className="max-w-7xl mx-auto space-y-20">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="space-y-8 max-w-xl">
<div className="space-y-6">
<a className="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 transition-all group" href="#">
<span className="flex items-center justify-center px-2 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-bold">New</span>
<span className="text-xs text-slate-400 group-hover:text-slate-200">Venus Retrograde Module released</span>
<iconify-icon className="text-slate-500 group-hover:text-slate-300" icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
<h1 className="text-5xl sm:text-6xl font-medium text-white tracking-tight leading-[1.05]">
                            The operating system for <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-400 to-indigo-400">digital alchemy.</span>
</h1>
<p className="text-lg text-slate-400 leading-relaxed font-light">
                            Craft, simulate, and broadcast your intentions with precision. Access a library of 500+ templates optimized for cosmic alignment.
                        </p>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<button className="h-10 px-6 rounded-lg bg-white text-slate-950 text-sm font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            Start Manifesting
                            <iconify-icon icon="lucide:zap" width="14"></iconify-icon>
</button>
<button className="h-10 px-6 rounded-lg bg-transparent border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="lucide:play-circle" width="16"></iconify-icon>
                            View Demo
                        </button>
</div>

<div className="pt-4 flex items-center gap-4 text-xs text-slate-500 border-t border-white/5">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border border-slate-950 bg-slate-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<img alt="" className="w-6 h-6 rounded-full border border-slate-950 bg-slate-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka"/>
<img alt="" className="w-6 h-6 rounded-full border border-slate-950 bg-slate-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Zack"/>
<div className="w-6 h-6 rounded-full border border-slate-950 bg-slate-800 flex items-center justify-center text-[8px] font-medium text-white">+2k</div>
</div>
<p>Join 2,400+ mystics shaping reality.</p>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center perspective-1000">

<div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-violet-500/20 blur-[80px] rounded-full opacity-60"></div>

<div className="relative w-[320px] sm:w-[380px] animate-float">

<div className="absolute -top-12 -right-12 w-full h-full bg-slate-900/40 border border-white/5 rounded-2xl -z-10 rotate-6 scale-95 backdrop-blur-sm"></div>

<div className="bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/5">

<div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
</div>
<div className="text-[10px] font-mono text-slate-500">manifest_v1.0.js</div>
</div>

<div className="p-5 space-y-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
<iconify-icon className="text-rose-400" icon="lucide:heart" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Specific Person</div>
<div className="text-[10px] text-rose-400">Target Acquired</div>
</div>
</div>
<div className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] font-medium text-emerald-400">
                                        Active
                                    </div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] uppercase tracking-wider font-medium text-slate-500">
<span>Alignment</span>
<span>98%</span>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-rose-500 to-violet-500 w-[98%] rounded-full shadow-[0_0_10px_rgba(244,63,94,0.5)]"></div>
</div>
</div>
<div className="p-3 bg-slate-900/50 rounded-lg border border-white/5 space-y-2">
<div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
<span className="text-violet-400">&gt;</span> initiate_binding_sequence()
                                    </div>
<div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
<span className="text-violet-400">&gt;</span> frequency_match: <span className="text-emerald-400">success</span>
</div>
<div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
<span className="text-violet-400 animate-pulse">&gt;</span> uploading_intention...
                                    </div>
</div>
<div className="grid grid-cols-2 gap-2">
<button className="py-2 rounded bg-white text-slate-950 text-xs font-semibold hover:bg-slate-200 transition-colors">Confirm</button>
<button className="py-2 rounded bg-white/5 text-slate-400 text-xs font-medium hover:bg-white/10 transition-colors">Edit Parameters</button>
</div>
</div>
</div>

<div className="absolute top-20 -left-6 bg-slate-900 border border-white/10 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-[pulse_4s_ease-in-out_infinite]">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="lucide:moon" width="16"></iconify-icon>
</div>
<div>
<div className="text-[10px] text-slate-500 uppercase tracking-wider">Moon Phase</div>
<div className="text-xs font-medium text-white">Waxing Gibbous</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-white/5 pt-12">

<div className="lg:col-span-3 space-y-8">
<div className="space-y-4">
<h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Categories</h3>
<div className="space-y-1">
<button className="w-full flex items-center justify-between px-3 py-2 text-sm text-white bg-white/5 rounded-md border border-white/10">
<span className="flex items-center gap-3">
<iconify-icon className="text-rose-400" icon="lucide:heart" width="14"></iconify-icon>
                                    Attraction
                                </span>
<span className="text-xs text-slate-500">12</span>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-all">
<span className="flex items-center gap-3">
<iconify-icon className="text-slate-500" icon="lucide:link" width="14"></iconify-icon>
                                    Connection
                                </span>
<span className="text-xs text-slate-600">8</span>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-all">
<span className="flex items-center gap-3">
<iconify-icon className="text-slate-500" icon="lucide:shield" width="14"></iconify-icon>
                                    Protection
                                </span>
<span className="text-xs text-slate-600">5</span>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-all">
<span className="flex items-center gap-3">
<iconify-icon className="text-slate-500" icon="lucide:moon" width="14"></iconify-icon>
                                    Self-Love
                                </span>
<span className="text-xs text-slate-600">10</span>
</button>
</div>
</div>
<div className="space-y-4">
<h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Intensity</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 group cursor-pointer">
<div className="relative flex items-center justify-center w-4 h-4 border border-slate-700 rounded bg-slate-900 group-hover:border-rose-500/50 transition-colors">
<input checked="" className="peer appearance-none w-full h-full opacity-0 cursor-pointer absolute z-10" type="checkbox"/>
<iconify-icon className="text-rose-500 opacity-0 peer-checked:opacity-100 transition-opacity" icon="lucide:check" width="10"></iconify-icon>
</div>
<span className="text-sm text-slate-400 group-hover:text-slate-300">Light (Whisper)</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<div className="relative flex items-center justify-center w-4 h-4 border border-slate-700 rounded bg-slate-900 group-hover:border-rose-500/50 transition-colors">
<input className="peer appearance-none w-full h-full opacity-0 cursor-pointer absolute z-10" type="checkbox"/>
<iconify-icon className="text-rose-500 opacity-0 peer-checked:opacity-100 transition-opacity" icon="lucide:check" width="10"></iconify-icon>
</div>
<span className="text-sm text-slate-400 group-hover:text-slate-300">Medium (Spoken)</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<div className="relative flex items-center justify-center w-4 h-4 border border-slate-700 rounded bg-slate-900 group-hover:border-rose-500/50 transition-colors">
<input className="peer appearance-none w-full h-full opacity-0 cursor-pointer absolute z-10" type="checkbox"/>
<iconify-icon className="text-rose-500 opacity-0 peer-checked:opacity-100 transition-opacity" icon="lucide:check" width="10"></iconify-icon>
</div>
<span className="text-sm text-slate-400 group-hover:text-slate-300">Heavy (Ritual)</span>
</label>
</div>
</div>
</div>

<div className="lg:col-span-9 space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-lg font-medium text-white">Recommended Templates</h2>
<div className="flex items-center gap-2">
<span className="text-xs text-slate-500">Sort by:</span>
<select className="bg-transparent text-xs text-slate-300 border-none outline-none cursor-pointer hover:text-white">
<option>Potency</option>
<option>Newest</option>
<option>Popular</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

<div className="group relative bg-slate-900/40 border border-white/5 hover:border-white/10 rounded-xl p-5 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between h-64 overflow-hidden">

<div className="absolute -top-10 -right-10 w-24 h-24 bg-rose-500/20 blur-[40px] rounded-full group-hover:bg-rose-500/30 transition-all duration-500"></div>
<div className="space-y-4 z-10">
<div className="flex items-start justify-between">
<div className="p-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-white/5 shadow-lg">
<iconify-icon className="text-rose-400" icon="lucide:heart-handshake" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-1 text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                        Safe
                                    </div>
</div>
<div>
<h3 className="text-base font-medium text-white group-hover:text-rose-200 transition-colors">Soul Tie Weaver</h3>
<p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                                        A gentle chant to strengthen existing bonds and clear communicative blockages between partners.
                                    </p>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-900 flex items-center justify-center text-[8px] text-slate-400">AG</div>
<div className="w-6 h-6 rounded-full bg-slate-700 border border-slate-900 flex items-center justify-center text-[8px] text-slate-300">LK</div>
<div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-900 flex items-center justify-center text-[8px] text-slate-500">+4</div>
</div>
<button className="text-xs font-medium text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md border border-white/5 hover:border-white/10 transition-all">
                                    Use Template
                                </button>
</div>
</div>

<div className="group relative bg-slate-900/40 border border-white/5 hover:border-white/10 rounded-xl p-5 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between h-64 overflow-hidden">
<div className="absolute -top-10 -right-10 w-24 h-24 bg-violet-500/20 blur-[40px] rounded-full group-hover:bg-violet-500/30 transition-all duration-500"></div>
<div className="space-y-4 z-10">
<div className="flex items-start justify-between">
<div className="p-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-white/5 shadow-lg">
<iconify-icon className="text-violet-400" icon="lucide:sparkles" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-1 text-[10px] font-medium text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                                        High Energy
                                    </div>
</div>
<div>
<h3 className="text-base font-medium text-white group-hover:text-violet-200 transition-colors">Magnetic Aura</h3>
<p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                                        Enhance your personal vibration to attract attention and admiration in social settings.
                                    </p>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
<div className="flex items-center gap-1.5 text-[10px] text-slate-500">
<iconify-icon icon="lucide:clock" width="12"></iconify-icon>
<span>5 min</span>
</div>
<button className="text-xs font-medium text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md border border-white/5 hover:border-white/10 transition-all">
                                    Use Template
                                </button>
</div>
</div>

<div className="group relative bg-slate-900/40 border border-white/5 hover:border-white/10 rounded-xl p-5 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between h-64 overflow-hidden">
<div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-500/20 blur-[40px] rounded-full group-hover:bg-indigo-500/30 transition-all duration-500"></div>
<div className="space-y-4 z-10">
<div className="flex items-start justify-between">
<div className="p-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-white/5 shadow-lg">
<iconify-icon className="text-indigo-400" icon="lucide:scroll" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-1 text-[10px] font-medium text-slate-400 bg-slate-500/10 px-2 py-0.5 rounded-full border border-slate-500/20">
                                        Advanced
                                    </div>
</div>
<div>
<h3 className="text-base font-medium text-white group-hover:text-indigo-200 transition-colors">Karmic Release</h3>
<p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                                        Sever past energetic ties to open the pathway for new romantic opportunities.
                                    </p>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
<div className="flex items-center gap-1.5 text-[10px] text-slate-500">
<iconify-icon icon="lucide:moon" width="12"></iconify-icon>
<span>Full Moon</span>
</div>
<button className="text-xs font-medium text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md border border-white/5 hover:border-white/10 transition-all">
                                    Use Template
                                </button>
</div>
</div>

<button className="group relative border border-dashed border-white/10 hover:border-rose-500/30 rounded-xl p-5 hover:bg-rose-500/5 transition-all duration-300 flex flex-col items-center justify-center gap-3 h-64">
<div className="w-10 h-10 rounded-full bg-slate-900 group-hover:bg-rose-500 border border-white/10 group-hover:border-rose-400 flex items-center justify-center transition-all">
<iconify-icon className="text-slate-400 group-hover:text-white" icon="lucide:plus" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-400 group-hover:text-rose-200">Compose New Chant</span>
</button>
</div>

<div className="mt-12 border border-white/5 rounded-2xl bg-slate-900/50 backdrop-blur-sm overflow-hidden">
<div className="border-b border-white/5 bg-white/[0.02] px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-rose-500/20 border border-rose-500/50"></div>
<span className="text-xs font-medium text-slate-400">Editor - "Attraction"</span>
</div>
<div className="flex gap-2">
<iconify-icon className="text-slate-600 hover:text-slate-400 cursor-pointer" icon="lucide:maximize-2" width="14"></iconify-icon>
<iconify-icon className="text-slate-600 hover:text-slate-400 cursor-pointer" icon="lucide:x" width="14"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="p-6 space-y-5 border-r border-white/5">
<div className="space-y-1.5">
<label className="text-[10px] font-medium uppercase tracking-wider text-slate-500">Target Name</label>
<div className="relative group">
<input className="w-full bg-slate-950 border border-white/10 rounded-lg py-2 pl-9 pr-3 text-sm text-slate-200 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all placeholder:text-slate-700" type="text" value="Specific Person / Universe"/>
<iconify-icon className="absolute left-3 top-2.5 text-slate-600 group-focus-within:text-rose-500 transition-colors" icon="lucide:user" width="14"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-medium uppercase tracking-wider text-slate-500">Elements</label>
<div className="flex gap-2">
<button className="flex-1 py-2 text-xs font-medium bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded-lg">Fire</button>
<button className="flex-1 py-2 text-xs font-medium bg-slate-950 text-slate-500 border border-white/10 hover:border-white/20 rounded-lg">Water</button>
<button className="flex-1 py-2 text-xs font-medium bg-slate-950 text-slate-500 border border-white/10 hover:border-white/20 rounded-lg">Air</button>
<button className="flex-1 py-2 text-xs font-medium bg-slate-950 text-slate-500 border border-white/10 hover:border-white/20 rounded-lg">Earth</button>
</div>
</div>
<div className="space-y-3 pt-2">
<div className="flex justify-between items-center">
<label className="text-[10px] font-medium uppercase tracking-wider text-slate-500">Intention Strength</label>
<span className="text-xs text-rose-400 font-mono">85%</span>
</div>
<input className="w-full appearance-none bg-transparent" max="100" min="0" type="range" value="85"/>
</div>
<div className="pt-2">
<label className="flex items-center justify-between cursor-pointer group">
<div className="space-y-0.5">
<span className="block text-sm font-medium text-slate-300 group-hover:text-white">Sigil Activation</span>
<span className="block text-xs text-slate-600">Auto-generate geometric binding</span>
</div>
<div className="relative w-10 h-6 rounded-full bg-rose-500 transition-colors">
<div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform"></div>
</div>
</label>
</div>
</div>

<div className="p-6 bg-slate-950/30 flex flex-col justify-center items-center text-center relative overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-900/10 to-transparent opacity-50"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-rose-500/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-violet-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="relative z-10 space-y-4">
<iconify-icon className="text-rose-400 drop-shadow-[0_0_10px_rgba(251,113,133,0.5)]" icon="lucide:gem" width="32"></iconify-icon>
<p className="text-sm font-medium text-rose-100/90 leading-relaxed italic max-w-xs mx-auto">
                                        "By the fire of the setting sun,<br/>
                                        let two hearts beat as one.<br/>
                                        As I speak, so mote it be."
                                    </p>
<button className="mt-4 px-4 py-2 bg-white text-slate-900 text-xs font-semibold rounded-full hover:bg-rose-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                        Cast Spell
                                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 py-12 bg-slate-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-gradient-to-tr from-rose-500 to-violet-500"></div>
<span className="text-xs font-semibold text-slate-500 tracking-tight">LUMINA © 2024</span>
</div>
<div className="flex gap-6 text-xs text-slate-600">
<a className="hover:text-slate-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-400 transition-colors" href="#">Ethereal Terms</a>
<a className="hover:text-slate-400 transition-colors" href="#">Support</a>
</div>
<div className="flex gap-4">
<a className="text-slate-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
