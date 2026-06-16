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
      

<div className="fixed inset-0 z-0 bg-grain"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 backdrop-blur-md bg-black/60">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-white flex items-center gap-2" href="#">
<span className="iconify text-indigo-500" data-icon="lucide:aperture" data-width="20"></span>
                lockin
            </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors duration-200" href="#features">Modules</a>
<a className="hover:text-white transition-colors duration-200" href="#gallery">Gallery</a>
<a className="hover:text-white transition-colors duration-200" href="#specs">Latency</a>
<a className="hover:text-white transition-colors duration-200" href="#community">Founders</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md transition-all border border-white/5" href="#support">
                    Early Access
                </a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-10 px-6">
<div className="max-w-4xl mx-auto text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-[10px] text-indigo-300 mb-8 uppercase tracking-widest font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                Protocol v1.0 Initiated
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                Total Control.<br/>
<span className="text-zinc-500">Zero Latency.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl mx-auto font-light leading-relaxed">
                A modular 65% mechanical interface designed for the absolute limit of human reaction speed. Built for those who refuse to miss.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)] flex items-center gap-2">
                    Join the Waitlist
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="h-10 px-6 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-sm font-medium transition-all flex items-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
                    Watch Teaser
                </button>
</div>
</div>

<div className="mt-20 relative max-w-3xl mx-auto h-64 md:h-80 perspective-[2000px] group select-none">

<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-full bg-zinc-900/80 rounded-xl border border-white/10 shadow-2xl transform rotate-x-12 scale-90 group-hover:scale-[0.92] transition-transform duration-700 ease-out flex items-center justify-center overflow-hidden backdrop-blur-sm">

<div className="grid grid-cols-12 gap-1 w-[90%] h-[80%] opacity-20">
<div className="col-span-12 h-full rounded border border-white/20"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-lg bg-zinc-800 border border-zinc-700 shadow-xl flex items-center justify-center keycap-glow transform translate-z-10 group-hover:translate-y-[-10px] transition-transform duration-500">
<span className="iconify text-indigo-400 opacity-80" data-icon="lucide:fingerprint" data-strokeWidth="1" data-width="48"></span>

<div className="absolute top-2 left-2 w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-lg pointer-events-none"></div>
</div>

<div className="absolute top-6 right-8 flex gap-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
</div>
</div>
</main>

<section className="py-12 border-t border-white/5 bg-black/20 backdrop-blur-sm" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl font-semibold text-white tracking-tight">Visual Intelligence</h2>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
<span className="iconify text-zinc-400" data-icon="lucide:chevron-left" data-width="16"></span>
</button>
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
<span className="iconify text-zinc-400" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[500px]">

<div className="md:col-span-2 md:row-span-2 relative group rounded-xl overflow-hidden border border-white/10 bg-zinc-900 cursor-pointer">

<img alt="Keyboard Workspace" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex flex-col items-center justify-center z-10">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
<span className="iconify text-white ml-1" data-fill="white" data-icon="lucide:play" data-width="24"></span>
</div>
<span className="text-xs font-medium text-white tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">Watch Review</span>
</div>

<div className="absolute bottom-0 left-0 w-full p-6 image-overlay">
<h3 className="text-white font-medium text-lg">Acoustic Signature</h3>
<p className="text-zinc-400 text-xs mt-1">Gasket mounted. Deep sound profile.</p>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 relative group rounded-xl overflow-hidden border border-white/10 bg-zinc-900">
<img alt="Switch Detail" className="absolute inset-0 w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1541140532154-b024d705b909?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 z-10">
<div className="bg-black/50 backdrop-blur-md px-2 py-1 rounded border border-white/10 inline-block">
<p className="text-[10px] text-white font-mono">MACRO_LENS</p>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 relative group rounded-xl overflow-hidden border border-white/10 bg-zinc-900">
<img alt="Aluminum CNC" className="absolute inset-0 w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500 grayscale" src="https://images.unsplash.com/photo-1629897286396-3904229986b6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 z-10">
<span className="iconify text-white/50" data-icon="lucide:maximize-2" data-width="16"></span>
</div>
<div className="absolute bottom-0 left-0 w-full p-4 image-overlay">
<p className="text-white text-xs font-medium">6063 Aluminum</p>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 relative group rounded-xl overflow-hidden border border-white/10 bg-zinc-900 flex items-center justify-center">
<img alt="Side Profile" className="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-70 transition-opacity duration-500" src="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
<div className="relative z-10 flex items-center gap-12 text-center">
<div>
<p className="text-2xl font-bold text-white">5<span className="text-sm font-normal text-zinc-500">deg</span></p>
<p className="text-[10px] text-zinc-500 uppercase tracking-wider">Typing Angle</p>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div>
<p className="text-2xl font-bold text-white">1.2<span className="text-sm font-normal text-zinc-500">kg</span></p>
<p className="text-[10px] text-zinc-500 uppercase tracking-wider">Total Weight</p>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div>
<p className="text-2xl font-bold text-white">QMK</p>
<p className="text-[10px] text-zinc-500 uppercase tracking-wider">Support</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-black/40 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1">Polling Rate</p>
<p className="text-3xl font-semibold text-white tracking-tight">8,000<span className="text-base text-zinc-600 font-normal ml-1">Hz</span></p>
</div>
<div className="text-center md:text-left">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1">Actuation</p>
<p className="text-3xl font-semibold text-white tracking-tight">0.1<span className="text-base text-zinc-600 font-normal ml-1">mm</span></p>
</div>
<div className="text-center md:text-left">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1">Build</p>
<p className="text-3xl font-semibold text-white tracking-tight">6063<span className="text-base text-zinc-600 font-normal ml-1">Alu</span></p>
</div>
<div className="text-center md:text-left">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1">Display</p>
<p className="text-3xl font-semibold text-white tracking-tight">OLED<span className="text-base text-zinc-600 font-normal ml-1">Mod</span></p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="features">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Hardware unlocked.</h2>
<p className="text-zinc-400 max-w-2xl">Based on the flux architecture, we've stripped away the unnecessary to focus purely on signal transmission speed and modular adaptability.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="gradient-border-mask p-8 flex flex-col justify-between h-80 hover:bg-white/[0.02] transition-colors group">
<div>
<div className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center mb-6 border border-white/5 text-indigo-400">
<span className="iconify" data-icon="lucide:magnet" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Magnetic Flux Switches</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Hall effect sensors detect key depth with sub-micron precision. Adjust actuation points per key via the on-board OLED.
                    </p>
</div>
<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden mt-6">
<div className="w-1/2 h-full bg-indigo-500 group-hover:w-3/4 transition-all duration-700 ease-out"></div>
</div>
</div>

<div className="gradient-border-mask p-8 flex flex-col justify-between h-80 hover:bg-white/[0.02] transition-colors">
<div>
<div className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center mb-6 border border-white/5 text-purple-400">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Modular Top Frame</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Swap layouts instantly. Go from pure typing to gaming macro-pad in seconds. Magnetic alignment ensures zero rattle.
                    </p>
</div>
<div className="grid grid-cols-4 gap-2 mt-4 opacity-50">
<div className="h-2 rounded-sm bg-zinc-700"></div>
<div className="h-2 rounded-sm bg-zinc-700"></div>
<div className="h-2 rounded-sm bg-zinc-600"></div>
<div className="h-2 rounded-sm bg-zinc-700"></div>
</div>
</div>

<div className="gradient-border-mask p-8 flex flex-col justify-between h-80 hover:bg-white/[0.02] transition-colors">
<div>
<div className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center mb-6 border border-white/5 text-pink-400">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Rapid Trigger</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Reset keys instantly upon release. Essential for counter-strafing and rhythm games. Physical limitations: removed.
                    </p>
</div>
<div className="flex items-center gap-2 mt-4">
<span className="text-[10px] text-zinc-600 uppercase tracking-wider">Latency</span>
<div className="flex-1 h-[1px] bg-zinc-800"></div>
<span className="text-[10px] text-indigo-400 font-mono">0.2ms</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="support">
<div className="absolute inset-0 bg-indigo-900/5 skew-y-3 transform origin-top-left -z-10"></div>
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12">
<div>
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Back the Protocol</h2>
<p className="text-zinc-400 text-sm max-w-md">We are an independent startup. Support the development of the Lockin 65 and receive exclusive founder perks.</p>
</div>
<div className="text-right">
<p className="text-sm font-medium text-indigo-400 mb-1">Development Status</p>
<div className="text-2xl font-semibold text-white tracking-tight">Prototyping Phase 2</div>
</div>
</div>

<div className="w-full bg-zinc-900 h-2 rounded-full mb-2 overflow-hidden border border-white/5">
<div className="h-full bg-gradient-to-r from-indigo-600 to-purple-500 w-[65%] rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
</div>
<div className="flex justify-between text-xs text-zinc-500 font-mono mb-16">
<span>$65,000 RAISED</span>
<span>GOAL: $100,000</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-zinc-900/40 border border-white/5 rounded-xl p-6 hover:border-indigo-500/30 transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<span className="text-zinc-200 font-medium">Insider</span>
<span className="text-zinc-500 text-sm">$5</span>
</div>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-zinc-400">
<span className="iconify text-indigo-500" data-icon="lucide:check" data-width="12"></span>
                            Reserved Waitlist Spot
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-400">
<span className="iconify text-indigo-500" data-icon="lucide:check" data-width="12"></span>
                            Weekly Dev Logs
                        </li>
</ul>
<button className="w-full py-2 rounded-lg bg-zinc-800 text-xs font-medium text-white hover:bg-zinc-700 transition-colors">Select</button>
</div>

<div className="bg-zinc-900/80 border border-indigo-500/30 rounded-xl p-6 relative overflow-hidden group shadow-lg shadow-indigo-900/10">
<div className="absolute top-0 right-0 bg-indigo-500 text-white text-[9px] font-bold px-2 py-1 rounded-bl-lg">POPULAR</div>
<div className="flex justify-between items-start mb-4">
<span className="text-white font-semibold">Founder</span>
<span className="text-indigo-400 text-sm">$50</span>
</div>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-zinc-300">
<span className="iconify text-indigo-400" data-icon="lucide:check" data-width="12"></span>
                            Earliest Shipping Batch
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-300">
<span className="iconify text-indigo-400" data-icon="lucide:check" data-width="12"></span>
                            "Founder" Engraved Backplate
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-300">
<span className="iconify text-indigo-400" data-icon="lucide:check" data-width="12"></span>
                            Exclusive Discord Role
                        </li>
</ul>
<button className="w-full py-2 rounded-lg bg-indigo-600 text-xs font-medium text-white hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20">Support</button>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-xl p-6 hover:border-purple-500/30 transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<span className="text-zinc-200 font-medium">Architect</span>
<span className="text-zinc-500 text-sm">$250</span>
</div>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-zinc-400">
<span className="iconify text-purple-500" data-icon="lucide:check" data-width="12"></span>
                            1x Lockin 65 (Pre-paid)
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-400">
<span className="iconify text-purple-500" data-icon="lucide:check" data-width="12"></span>
                            Beta Firmware Access
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-400">
<span className="iconify text-purple-500" data-icon="lucide:check" data-width="12"></span>
                            Design Feedback Calls
                        </li>
</ul>
<button className="w-full py-2 rounded-lg bg-zinc-800 text-xs font-medium text-white hover:bg-zinc-700 transition-colors">Select</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-zinc-400" data-icon="lucide:aperture" data-width="24"></span>
<span className="text-xl font-semibold tracking-tighter text-white">lockin</span>
</div>
<p className="text-zinc-500 text-sm">Engineered in Tokyo.</p>
</div>

<div className="w-full md:w-auto">
<label className="block text-xs font-medium text-zinc-400 mb-2">Stay locked in</label>
<div className="flex gap-2">
<input className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all w-full md:w-64" placeholder="enter@email.com" type="email"/>
<button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors">
                            Subscribe
                        </button>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b border-white/5 pb-12">
<div>
<h4 className="text-white text-xs font-medium mb-4">Product</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-300" href="#">Specifications</a></li>
<li><a className="hover:text-zinc-300" href="#">Software</a></li>
<li><a className="hover:text-zinc-300" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium mb-4">Company</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-300" href="#">Manifesto</a></li>
<li><a className="hover:text-zinc-300" href="#">Careers</a></li>
<li><a className="hover:text-zinc-300" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-300" href="#">Privacy</a></li>
<li><a className="hover:text-zinc-300" href="#">Terms</a></li>
<li><a className="hover:text-zinc-300" href="#">Warranty</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium mb-4">Social</h4>
<div className="flex gap-4 text-zinc-500">
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="16"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:youtube" data-width="16"></span></a>
</div>
</div>
</div>
<div className="flex justify-between items-center text-[10px] text-zinc-600">
<p>© 2024 Lockin Hardware Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500/20 border border-emerald-500/50"></span>
<span>Systems Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
