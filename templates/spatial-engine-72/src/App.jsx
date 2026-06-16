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
      

<div className="fixed inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none z-50" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<div className="fixed top-0 left-1/4 w-[40vw] h-[40vw] bg-indigo-500/15 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none animate-ambient-glow"></div>
<div className="fixed bottom-0 right-1/4 w-[30vw] h-[30vw] bg-fuchsia-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none animate-ambient-glow" style={{animationDelay: '-7s'}}></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/[0.03] bg-neutral-950/40 backdrop-blur-2xl transition-all duration-500">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-medium tracking-tighter text-white hover:opacity-80 transition-opacity" href="#">VRTX</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors duration-300" href="#">Engine</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors duration-300" href="#">Architecture</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors duration-300" href="#">Enterprise</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors duration-300 hidden md:block" href="#">Sign In</a>
<button className="text-sm font-normal bg-white text-neutral-950 px-5 py-2 rounded-full hover:scale-105 hover:bg-neutral-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                    Initialize
                </button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<div className="animate-fade-in inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md mb-8 shadow-[inset_0_0_10px_rgba(255,255,255,0.02)]">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,1)] animate-pulse"></div>
<span className="text-xs font-normal text-neutral-300 tracking-widest uppercase">Engine v4.0 is live</span>
</div>
<h1 className="animate-fade-in delay-100 text-5xl md:text-7xl lg:text-8xl font-normal tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-neutral-500/80 mb-6 max-w-4xl mx-auto leading-[1.1] pb-2">
                Design in pure <br/> dimensionality.
            </h1>
<p className="animate-fade-in delay-200 text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                The first native spatial engine built for the web. Craft immersive experiences with unparalleled physics, lighting, and geometric precision directly in your browser.
            </p>
<div className="animate-fade-in delay-300 flex items-center gap-4 mb-24">
<button className="text-sm font-normal bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 px-6 py-3 rounded-full hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-500 shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]">
                    Start Rendering
                </button>
<button className="text-sm font-normal flex items-center gap-2 text-neutral-300 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-full hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500">
<iconify-icon icon="solar:play-circle-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
                    Watch Demo
                </button>
</div>

<div className="animate-fade-in delay-400 w-full max-w-5xl mx-auto perspective-wrapper">
<div className="relative w-full aspect-[16/9] preserve-3d animate-3d-float">

<div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-3xl border border-white/[0.08] rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_25px_80px_-20px_rgba(0,0,0,1)] overflow-hidden preserve-3d flex flex-col">

<div className="h-12 border-b border-white/[0.05] flex items-center justify-between px-4 bg-white/[0.01]">
<div className="flex gap-2.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700/50 hover:bg-red-400/80 transition-colors"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700/50 hover:bg-amber-400/80 transition-colors"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700/50 hover:bg-emerald-400/80 transition-colors"></div>
</div>
<div className="text-xs text-neutral-500 font-normal font-mono tracking-wide">scene_alpha_01.vrtx</div>
<div className="flex gap-3 text-neutral-500 hover:text-white transition-colors cursor-pointer">
<iconify-icon icon="solar:maximize-square-minimalistic-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 flex preserve-3d">

<div className="w-56 border-r border-white/[0.05] p-4 flex flex-col gap-6 mock-scroll overflow-y-auto bg-neutral-950/20">
<div className="space-y-3">
<div className="text-[0.65rem] font-medium text-neutral-500 uppercase tracking-[0.2em]">Hierarchy</div>
<div className="space-y-0.5">
<div className="flex items-center gap-2 text-xs text-neutral-200 bg-white/[0.04] p-2 rounded-md cursor-default border border-white/[0.05] shadow-sm">
<iconify-icon className="text-indigo-400" icon="solar:box-minimalistic-linear"></iconify-icon>
                                            Main Camera
                                        </div>
<div className="flex items-center gap-2 text-xs text-neutral-400 p-2 hover:bg-white/[0.02] rounded-md transition-colors cursor-default pl-6">
<iconify-icon className="text-amber-200/50" icon="solar:lightbulb-minimalistic-linear"></iconify-icon>
                                            Directional Light
                                        </div>
<div className="flex items-center gap-2 text-xs text-neutral-400 p-2 hover:bg-white/[0.02] rounded-md transition-colors cursor-default pl-6">
<iconify-icon className="text-neutral-500" icon="solar:layers-minimalistic-linear"></iconify-icon>
                                            Geometry Group
                                        </div>
</div>
</div>
<div className="space-y-3">
<div className="text-[0.65rem] font-medium text-neutral-500 uppercase tracking-[0.2em]">Properties</div>

<div className="flex items-center justify-between p-2.5 rounded-md bg-neutral-900/30 border border-white/[0.03] hover:border-white/[0.08] transition-colors">
<span className="text-xs text-neutral-400">Raytracing</span>
<div className="w-8 h-4 bg-indigo-500/20 rounded-full relative border border-indigo-500/30 flex items-center p-0.5 cursor-pointer hover:bg-indigo-500/30 transition-colors">
<div className="w-3 h-3 bg-indigo-400 rounded-full absolute right-0.5 shadow-[0_0_8px_rgba(129,140,248,0.6)]"></div>
</div>
</div>

<div className="space-y-2 p-2.5 rounded-md bg-neutral-900/30 border border-white/[0.03] hover:border-white/[0.08] transition-colors">
<div className="flex justify-between text-xs text-neutral-400">
<span>Roughness</span>
<span className="font-mono text-neutral-300">0.15</span>
</div>
<div className="w-full h-1 bg-neutral-800 rounded-full relative cursor-pointer group">
<div className="absolute left-0 top-0 h-full w-[15%] bg-neutral-400 group-hover:bg-neutral-300 transition-colors rounded-full"></div>
<div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-sm group-hover:scale-125 transition-transform"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 relative preserve-3d flex items-center justify-center overflow-hidden bg-neutral-950/40">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>

<div className="absolute w-[28rem] h-[28rem] border-[0.5px] border-indigo-500/20 rounded-full animate-orbit"></div>
<div className="absolute w-[22rem] h-[22rem] border-[0.5px] border-fuchsia-500/20 rounded-full animate-orbit-reverse"></div>
<div className="absolute w-[16rem] h-[16rem] border-[0.5px] border-white/5 rounded-full animate-orbit" style={{animationDuration: '10s'}}></div>

<div className="absolute right-8 bottom-8 w-52 bg-neutral-900/60 backdrop-blur-xl border border-white/[0.08] rounded-xl p-4 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] animate-z-float">
<div className="text-xs text-neutral-200 font-normal mb-3 tracking-tight">Render Statistics</div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-neutral-500">FPS</span>
<span className="text-emerald-400 font-mono">120</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-neutral-500">Polygons</span>
<span className="text-neutral-300 font-mono">2.4M</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-neutral-500">Draw Calls</span>
<span className="text-neutral-300 font-mono">14</span>
</div>
</div>
<div className="mt-4 pt-3 border-t border-white/[0.05] w-full">
<div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 w-[85%] shadow-[0_0_10px_rgba(129,140,248,0.5)]"></div>
</div>
<div className="text-[0.65rem] text-neutral-500 mt-1.5 text-right uppercase tracking-wider">GPU Load</div>
</div>
</div>

<div className="relative w-32 h-32 preserve-3d animate-rotate-core">

<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent border border-indigo-400/30 backdrop-blur-sm shadow-[0_0_40px_rgba(99,102,241,0.15)] rounded-2xl" style={{transform: 'translateZ(2rem)'}}></div>
<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-transparent border border-fuchsia-400/20 backdrop-blur-sm rounded-2xl" style={{transform: 'translateZ(-2rem) rotateY(180deg)'}}></div>
<div className="absolute inset-0 bg-white/[0.02] border border-white/[0.05] backdrop-blur-md rounded-2xl" style={{transform: 'rotateY(90deg) translateZ(2rem)'}}></div>
<div className="absolute inset-0 bg-white/[0.02] border border-white/[0.05] backdrop-blur-md rounded-2xl" style={{transform: 'rotateY(-90deg) translateZ(2rem)'}}></div>
<div className="absolute inset-0 bg-indigo-500/5 border border-indigo-500/10 backdrop-blur-sm rounded-2xl" style={{transform: 'rotateX(90deg) translateZ(2rem)'}}></div>
<div className="absolute inset-0 bg-fuchsia-500/5 border border-fuchsia-500/10 backdrop-blur-sm rounded-2xl" style={{transform: 'rotateX(-90deg) translateZ(2rem)'}}></div>

<div className="absolute inset-0 m-auto w-12 h-12 bg-white rounded-full blur-xl opacity-20 shadow-[0_0_50px_rgba(255,255,255,0.8)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-32 border-t border-white/[0.03] relative z-10 bg-neutral-950/30 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 max-w-2xl animate-fade-in">
<h2 className="text-3xl lg:text-4xl font-normal tracking-tighter text-white mb-4">Architecture built for depth.</h2>
<p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">
                    Every calculation, rendering pass, and interaction is optimized to run at native speeds, providing an uncompromised authoring environment.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-3xl bg-neutral-900/30 border border-white/[0.03] hover:bg-neutral-900/50 hover:border-white/[0.08] transition-all duration-500 overflow-hidden animate-fade-in hover:-translate-y-1 shadow-2xl shadow-transparent hover:shadow-indigo-500/5">
<div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
<div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex items-center justify-center mb-8 text-neutral-300 group-hover:scale-110 group-hover:text-white transition-all duration-500">
<iconify-icon icon="solar:cpu-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight text-white mb-3">Compute Shader Allocation</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed group-hover:text-neutral-300 transition-colors">
                        Offload complex physics and particle simulations directly to the GPU using WebGPU standard pipelines for zero-latency feedback.
                    </p>
</div>

<div className="group relative p-8 rounded-3xl bg-neutral-900/30 border border-white/[0.03] hover:bg-neutral-900/50 hover:border-white/[0.08] transition-all duration-500 overflow-hidden animate-fade-in delay-100 hover:-translate-y-1 shadow-2xl shadow-transparent hover:shadow-fuchsia-500/5">
<div className="absolute top-0 right-0 w-48 h-48 bg-fuchsia-500/10 rounded-full blur-3xl group-hover:bg-fuchsia-500/20 transition-colors duration-700"></div>
<div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex items-center justify-center mb-8 text-neutral-300 group-hover:scale-110 group-hover:text-white transition-all duration-500">
<iconify-icon icon="solar:magic-stick-3-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight text-white mb-3">Global Illumination</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed group-hover:text-neutral-300 transition-colors">
                        Real-time raytraced lighting calculates bounce light and soft shadows dynamically, requiring zero pre-baking.
                    </p>
</div>

<div className="group relative p-8 rounded-3xl bg-neutral-900/30 border border-white/[0.03] hover:bg-neutral-900/50 hover:border-white/[0.08] transition-all duration-500 overflow-hidden animate-fade-in delay-200 hover:-translate-y-1 shadow-2xl shadow-transparent hover:shadow-emerald-500/5">
<div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
<div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex items-center justify-center mb-8 text-neutral-300 group-hover:scale-110 group-hover:text-white transition-all duration-500">
<iconify-icon icon="solar:link-minimalistic-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight text-white mb-3">Multi-Node Sync</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed group-hover:text-neutral-300 transition-colors">
                        Collaborate in the same dimensional space. State changes are synchronized via ultra-low latency WebSockets.
                    </p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/[0.03] py-16 bg-neutral-950 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-xl font-medium tracking-tighter text-neutral-600 hover:text-neutral-400 transition-colors cursor-pointer">VRTX</div>
<div className="flex items-center gap-8 text-xs text-neutral-500 font-normal">
<a className="hover:text-white transition-colors duration-300" href="#">Documentation</a>
<a className="hover:text-white transition-colors duration-300" href="#">API</a>
<a className="hover:text-white transition-colors duration-300" href="#">Security</a>
<a className="hover:text-white transition-colors duration-300" href="#">Terms</a>
</div>
<div className="text-xs text-neutral-600 font-normal">
                © 2024 Spatial Engine.
            </div>
</div>
</footer>

    </>
  );
}
