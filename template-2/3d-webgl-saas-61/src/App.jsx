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
      {

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

}

{

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

}

{

        lucide.createIcons();
    
}
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<iframe className="w-full h-full border-0 mix-blend-screen opacity-100 hue-rotate-[190deg] saturate-[2] brightness-[1.3] contrast-[1.1]" src="https://www.unicorn.studio/embed/Fc6Oo5e7ay1vbOQm0nbQ" title="Interactive Background">
</iframe>
<div className="absolute inset-0 bg-[#020813]/30 backdrop-blur-[1px]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,transparent_100%)]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#020813]/80 via-cyan-950/10 to-[#020813]/95"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020813_110%)]"></div>
</div>

<div className="relative z-10 flex flex-col min-h-screen">

<header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#020813]/60 backdrop-blur-md">
<div className="text-base font-semibold tracking-tighter text-white flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.4)]">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
                F L U X
            </div>
<nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors duration-200" href="#features">Features</a>
<a className="hover:text-white transition-colors duration-200" href="#workflow">Workflow</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-5">
<a className="hidden sm:block text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200" href="#">Log in</a>
<button className="px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-zinc-200 transition-all duration-200 shadow-[0_0_15px_rgba(255,255,255,0.15)] flex items-center gap-2">
                    Sign up
                </button>
</div>
</header>

<main className="flex-1 flex flex-col sm:px-6 text-center w-full max-w-7xl mr-auto ml-auto pt-32 pr-4 pb-24 pl-4 items-center justify-center">
<a className="group inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/5 border border-cyan-500/30 text-xs font-medium text-zinc-300 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors duration-300 cursor-pointer" href="#">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-500/20">
<iconify-icon className="text-cyan-300" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span className="">Introducing the new rendering engine</span>
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors group-hover:translate-x-0.5 duration-200" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<h1 className="bg-clip-text leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl text-5xl font-semibold text-transparent tracking-tight bg-gradient-to-b from-white via-white/90 to-cyan-200/40 max-w-4xl mr-auto mb-6 ml-auto">
                Design in motion. <br className="hidden sm:block" /> Publish in seconds.
            </h1>
<p className="sm:text-lg leading-relaxed text-base font-normal text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto">
                Create stunning, interactive WebGL experiences without writing a single line of shader code. Embed anywhere, perform everywhere.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 hover:scale-[1.02] transition-all duration-200 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                    Start creating for free
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#081b33]/40 text-white font-medium text-sm border border-cyan-500/20 flex items-center justify-center gap-2 hover:bg-[#0a2342]/60 transition-all duration-200 backdrop-blur-md group">
<iconify-icon className="text-lg text-cyan-400 group-hover:text-white transition-colors" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Watch tutorial
                </button>
</div>

<div className="mt-24 w-full rounded-2xl border border-white/5 bg-black/40 backdrop-blur-2xl shadow-[0_0_50px_rgba(8,145,178,0.15)] overflow-hidden relative transform perspective-1000 rotate-x-2 scale-95 opacity-90 hover:opacity-100 hover:scale-100 transition-all duration-700 ease-out">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-700/50"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700/50"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700/50"></div>
</div>
<div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-zinc-500 font-medium tracking-wide">
<iconify-icon icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon>
                        editor.flux.design
                    </div>
<div className="flex gap-3 text-zinc-500">
<iconify-icon icon="solar:minimize-square-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="aspect-[16/9] md:aspect-[21/9] w-full relative flex">
<div className="absolute inset-0" style={{backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)`, backgroundSize: `24px 24px`}}></div>
<div className="w-64 border-r border-white/5 bg-[#020813]/60 hidden lg:flex flex-col p-4 gap-6 z-10 backdrop-blur-md">
<div className="space-y-3">
<div className="text-xs font-medium text-zinc-500 tracking-wider">LAYERS</div>
<div className="flex items-center gap-2 text-sm text-zinc-300 p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
<iconify-icon className="text-cyan-400" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
                                Fluid Mesh
                            </div>
<div className="flex items-center gap-2 text-sm text-zinc-500 p-2 pl-6 hover:text-zinc-300 transition-colors cursor-pointer">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
                                Camera View
                            </div>
<div className="flex items-center gap-2 text-sm text-zinc-500 p-2 pl-6 hover:text-zinc-300 transition-colors cursor-pointer">
<iconify-icon icon="solar:lightbulb-bolt-linear" strokeWidth="1.5"></iconify-icon>
                                Point Light
                            </div>
</div>
</div>
<div className="flex-1 relative flex items-center justify-center p-8 z-10">
<div className="w-full h-full max-w-2xl max-h-96 rounded-lg border border-cyan-500/30 border-dashed relative flex items-center justify-center bg-cyan-900/10">
<div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-400 -translate-x-1/2 translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-400 translate-x-1/2 translate-y-1/2"></div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#020813]/80 border border-white/10 text-xs text-white backdrop-blur-md absolute bottom-4 shadow-lg cursor-pointer hover:bg-white/10 transition-colors">
<iconify-icon className="text-cyan-300" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
                                Export Code
                            </div>
</div>
</div>
<div className="w-64 border-l border-white/5 bg-[#020813]/60 hidden md:flex flex-col p-4 gap-6 z-10 backdrop-blur-md">
<div className="space-y-4">
<div className="text-xs font-medium text-zinc-500 tracking-wider">PROPERTIES</div>
<div className="space-y-2">
<div className="flex justify-between text-xs text-zinc-400">
<span>Complexity</span>
<span className="text-white">84%</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-cyan-400 w-[84%] rounded-full shadow-[0_0_10px_rgba(34,211,238,0.6)]"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs text-zinc-400">
<span>Speed</span>
<span className="text-white">2.4x</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative cursor-pointer">
<div className="h-full bg-zinc-600 w-[30%] rounded-l-full"></div>
<div className="h-3 w-1.5 bg-white absolute top-1/2 -translate-y-1/2 left-[30%] rounded-full shadow-sm"></div>
</div>
</div>
<div className="space-y-2 pt-4 border-t border-white/5">
<div className="text-xs text-zinc-400 mb-2">Color Mapping</div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 border border-cyan-400/50 shadow-[0_0_10px_rgba(6,182,212,0.3)] cursor-pointer"></div>
<div className="w-8 h-8 rounded-md bg-gradient-to-br from-emerald-500 to-teal-500 border border-white/5 opacity-50 cursor-pointer hover:opacity-100 transition-opacity"></div>
<div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-500 to-purple-500 border border-white/5 opacity-50 cursor-pointer hover:opacity-100 transition-opacity"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-12 border-y border-white/[0.03] bg-[#02050a]/40 backdrop-blur-xl relative z-10 overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(6,182,212,0.03)_50%,transparent)]"></div>
<div className="max-w-7xl mx-auto px-6 relative" style={{maskImage: `linear-gradient(to right, transparent, black 15%, black 85%, transparent)`}}>
<p className="text-xs font-medium text-zinc-600 tracking-widest uppercase mb-8 text-center">Powering next-gen web experiences</p>
<div className="flex items-center justify-center gap-16 md:gap-32 text-xl font-semibold tracking-tighter text-zinc-400/50">
<span className="hover:text-zinc-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-500 cursor-default">ACME</span>
<span className="hover:text-zinc-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-500 cursor-default">NEXUS</span>
<span className="hover:text-zinc-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-500 cursor-default">ORION</span>
<span className="hidden sm:block hover:text-zinc-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-500 cursor-default">VOID</span>
<span className="hidden md:block hover:text-zinc-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-500 cursor-default">SYNC</span>
</div>
</div>
</section>

<section className="py-32 relative z-10" id="workflow">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 z-10 order-2 lg:order-1 relative">
<div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent hidden lg:block"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md">
<iconify-icon className="text-cyan-400" icon="solar:cpu-bolt-linear" strokeWidth="1.5"></iconify-icon>
                        Visual Logic Engine
                    </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
                        Architect reality. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Zero shaders required.</span>
</h2>
<p className="text-base text-zinc-400 leading-relaxed max-w-lg">
                        Construct complex materials and procedural geometries through a high-performance node graph. Real-time compilation means you never wait for renders.
                    </p>
<div className="grid grid-cols-2 gap-4 pt-4">
<div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
<div className="text-2xl font-semibold text-white mb-1">200+</div>
<div className="text-xs text-zinc-500">Native Operations</div>
</div>
<div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
<div className="text-2xl font-semibold text-white mb-1">{"<"}1ms</div>
<div className="text-xs text-zinc-500">Compile Time</div>
</div>
</div>
</div>
<div className="relative w-full aspect-[4/3] rounded-3xl border border-white/10 bg-[#02050a]/60 backdrop-blur-3xl overflow-hidden flex z-10 group order-1 lg:order-2 shadow-[0_0_80px_rgba(6,182,212,0.05)]">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 opacity-50"></div>
<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
<defs>
<lineargradient id="lineGrad">
<stop offset="0%" stop-color="rgba(34,211,238,0.2)"></stop>
<stop offset="50%" stop-color="rgba(34,211,238,0.8)"></stop>
<stop offset="100%" stop-color="rgba(168,85,247,0.8)"></stop>
</lineargradient>
</defs>
<path className="group-hover:stroke-[3px] transition-all duration-700 opacity-80" fill="none" stroke="url(#lineGrad)" strokeDasharray="8 4" strokeWidth="2"></path>
<path fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"></path>
</svg>
<div className="absolute top-16 left-8 w-40 bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-xl shadow-2xl flex flex-col z-10 transition-transform duration-700 hover:-translate-y-2 hover:border-cyan-500/30">
<div className="px-3 py-2 border-b border-white/5 flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-t-xl">
<iconify-icon className="text-cyan-400 text-sm" icon="solar:augmented-reality-linear"></iconify-icon>
<span className="text-xs font-medium text-white tracking-wide">Fractal Noise</span>
</div>
<div className="p-3 space-y-3">
<div className="flex items-center justify-between text-xs text-zinc-400">
                                Scale <span className="text-white">4.2</span>
</div>
<div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
<div className="w-[60%] h-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
</div>
<div className="absolute right-[-6px] top-[45%] w-3 h-3 bg-[#02050a] rounded-full border border-cyan-400 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_5px_rgba(34,211,238,1)] animate-pulse"></div>
</div>
</div>
</div>
<div className="absolute bottom-16 left-8 w-40 bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-xl shadow-2xl flex flex-col z-10 transition-transform duration-700 hover:-translate-y-2">
<div className="px-3 py-2 border-b border-white/5 flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-transparent rounded-t-xl">
<iconify-icon className="text-purple-400 text-sm" icon="solar:pallete-2-linear"></iconify-icon>
<span className="text-xs font-medium text-white tracking-wide">PBR Glass</span>
</div>
<div className="p-3 space-y-3">
<div className="flex items-center justify-between text-xs text-zinc-400">
                                IOR <span className="text-white">1.52</span>
</div>
<div className="flex items-center justify-between text-xs text-zinc-400">
                                Rough <span className="text-white">0.05</span>
</div>
<div className="absolute right-[-6px] top-[45%] w-3 h-3 bg-[#02050a] rounded-full border border-zinc-500"></div>
</div>
</div>
<div className="absolute top-1/2 -translate-y-1/2 right-12 w-48 bg-[#02050a]/80 border border-purple-500/30 backdrop-blur-2xl rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col z-10">
<div className="px-3 py-2 border-b border-white/10 flex items-center justify-between rounded-t-xl">
<span className="text-xs font-medium text-white flex items-center gap-2">
<iconify-icon className="text-purple-400 text-sm" icon="solar:layers-linear"></iconify-icon>
                                Material Output
                            </span>
</div>
<div className="p-4 space-y-5">
<div className="flex items-center gap-3 text-xs text-zinc-300 relative">
<div className="absolute left-[-22px] w-3 h-3 bg-[#02050a] rounded-full border border-cyan-400 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
</div>
                                Displacement
                            </div>
<div className="flex items-center gap-3 text-xs text-zinc-300 relative">
<div className="absolute left-[-22px] w-3 h-3 bg-[#02050a] rounded-full border border-purple-400 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
</div>
                                Surface
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">A complete ecosystem</h2>
<p className="text-zinc-400 text-sm md:text-base max-w-xl">Everything required to build immersive, performant 3D web experiences.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-rows-2 gap-4 h-auto lg:h-[600px]">
<div className="col-span-1 md:col-span-2 row-span-2 rounded-3xl bg-[#050914]/50 border border-white/[0.05] p-8 relative overflow-hidden group hover:border-cyan-500/20 transition-colors">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.1),transparent_50%)]"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-cyan-400 text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Steady 60 FPS Engine</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-auto">Automatic geometry instancing, frustum culling, and texture compression ensure your scenes run flawlessly on mobile devices.</p>
<div className="mt-8 h-32 flex items-end gap-2 border-b border-white/5 pb-2">
<div className="w-full bg-white/5 rounded-t-sm h-[40%] group-hover:h-[50%] transition-all duration-500 delay-75"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[60%] group-hover:h-[70%] transition-all duration-500 delay-100"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[30%] group-hover:h-[40%] transition-all duration-500 delay-150"></div>
<div className="w-full bg-cyan-500/20 rounded-t-sm h-[80%] group-hover:h-[95%] transition-all duration-500 delay-200 border-t border-cyan-400 shadow-[0_-5px_15px_rgba(34,211,238,0.2)]"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[50%] group-hover:h-[60%] transition-all duration-500 delay-300"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[70%] group-hover:h-[85%] transition-all duration-500 delay-500"></div>
</div>
</div>
</div>
<div className="col-span-1 md:col-span-2 row-span-1 rounded-3xl bg-[#050914]/50 border border-white/[0.05] p-6 relative overflow-hidden group hover:border-blue-500/20 transition-colors flex items-center gap-6">
<div className="flex-1 relative z-10">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-blue-400 text-lg" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Cloud Asset Library</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Access thousands of pre-optimized HDRIs, PBR materials, and GLTF models instantly.</p>
</div>
<div className="w-32 h-32 relative hidden sm:block">
<div className="absolute inset-0 bg-blue-500/10 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-500 border border-blue-500/20"></div>
<div className="absolute inset-0 bg-[#0a101d] rounded-xl -rotate-3 group-hover:rotate-0 transition-transform duration-500 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-2xl text-zinc-500" icon="solar:gallery-linear"></iconify-icon>
</div>
</div>
</div>
<div className="col-span-1 md:col-span-2 row-span-1 rounded-3xl bg-[#050914]/50 border border-white/[0.05] p-6 relative overflow-hidden group hover:border-purple-500/20 transition-colors">
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent"></div>
<div className="relative z-10">
<div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-purple-400 text-lg" icon="solar:code-scan-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">GLSL Injection</h3>
<p className="text-xs text-zinc-400 leading-relaxed mb-4">Drop down to pure code when needed. Inject custom fragment shaders directly into the node pipeline.</p>
<div className="text-[10px] font-mono text-purple-300 bg-black/50 p-2 rounded border border-white/5 w-fit">
                                gl_FragColor = vec4(color, 1.0);
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 bg-black/40 border-y border-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative w-full aspect-[4/3] rounded-2xl border border-white/10 bg-[#050505] shadow-2xl overflow-hidden flex flex-col z-10">
<div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-2xl z-0 pointer-events-none"></div>
<div className="relative flex items-center px-4 py-3 border-b border-white/[0.05] bg-[#0a0a0a] z-10">
<div className="flex gap-1.5 mr-6">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
</div>
<div className="flex gap-4 text-xs font-medium text-zinc-600">
<span className="text-zinc-300 flex items-center gap-1"><iconify-icon icon="solar:document-linear"></iconify-icon> Scene.jsx</span>
<span className="hover:text-zinc-400 cursor-pointer transition-colors">package.json</span>
</div>
</div>
<div className="relative flex-1 flex flex-col overflow-hidden z-10">
<div className="flex-1 flex overflow-hidden p-4 text-xs font-mono leading-loose space-y-1" style={{fontFamily: `'JetBrains Mono', monospace`}}>
<div className="w-6 text-zinc-700 select-none text-right pr-4 space-y-1">
<div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div>
</div>
<div className="flex-1">
<div className="text-zinc-300"><span className="text-purple-400">import</span> {"{"} Canvas {"}"} <span className="text-purple-400">from</span> <span className="text-green-400/80">'@react-three/fiber'</span>;</div>
<div className="text-zinc-300"><span className="text-purple-400">import</span> {"{"} FluxScene {"}"} <span className="text-purple-400">from</span> <span className="text-green-400/80">'./generated/scene'</span>;</div>
<br />
<div className="text-zinc-300"><span className="text-purple-400">export default function</span> <span className="text-blue-400">App</span>() {"{"}</div>
<div className="text-zinc-300 pl-4"><span className="text-purple-400">return</span> (</div>
<div className="text-zinc-300 pl-8">{"<"}<span className="text-cyan-400">Canvas</span>{">"}</div>
<div className="text-zinc-300 pl-12">{"<"}<span className="text-cyan-400">FluxScene</span> <span className="text-blue-300">interactive</span>={"{"}<span className="text-orange-400">true</span>{"}"} /{">"}</div>
<div className="text-zinc-300 pl-8">{"<"}/<span className="text-cyan-400">Canvas</span>{">"}</div>
<div className="text-zinc-300 pl-4">);</div>
<div className="text-zinc-300">{"}"}</div>
</div>
</div>
<div className="h-24 bg-[#080808] border-t border-white/[0.05] p-3 text-[10px] font-mono text-zinc-500 overflow-hidden flex flex-col gap-1">
<div className="text-zinc-400">➜  project <span className="text-cyan-400">flux export --react</span></div>
<div>Compiling shaders... [done 42ms]</div>
<div>Optimizing textures... [done 120ms]</div>
<div className="text-green-400">✓ Export successful to ./generated</div>
</div>
</div>
</div>
<div className="space-y-8 z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
                        Ship code, <br /> not iframes.
                    </h2>
<p className="text-base text-zinc-400 leading-relaxed max-w-lg">
                        Export production-ready React components, vanilla Three.js classes, or raw WebGL code. Seamlessly integrate into Next.js, Nuxt, or any modern framework with zero lock-in.
                    </p>
<div className="flex items-center gap-6 pt-2">
<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-2xl text-zinc-500 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-all">
<iconify-icon icon="mdi:react"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest">React</span>
</div>
<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-2xl text-zinc-500 group-hover:text-emerald-400 group-hover:border-emerald-400/30 transition-all">
<iconify-icon icon="mdi:vuejs"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest">Vue</span>
</div>
<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-2xl text-zinc-500 group-hover:text-white group-hover:border-white/30 transition-all">
<iconify-icon icon="simple-icons:threedotjs"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest">Three</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-8">Access the future</h2>
<div className="relative flex items-center p-1 bg-black/40 rounded-full border border-white/10 w-fit mx-auto cursor-pointer backdrop-blur-md shadow-inner">
<div className="absolute w-[calc(50%-4px)] h-[calc(100%-8px)] bg-white/10 rounded-full left-1 shadow-sm transition-transform duration-300"></div>
<span className="relative z-10 px-6 py-2 text-xs font-medium text-white transition-colors duration-300">Monthly</span>
<span className="relative z-10 px-6 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors duration-300">Annually <span className="text-cyan-400 ml-1">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
<div className="p-8 rounded-3xl bg-[#050914]/40 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm flex flex-col">
<div className="text-xs font-medium text-zinc-500 tracking-wider uppercase mb-4">Core</div>
<div className="text-4xl font-semibold text-white mb-2">$0</div>
<p className="text-xs text-zinc-500 mb-8 h-8">Perfect for exploring the engine.</p>
<ul className="space-y-4 text-sm text-zinc-400 mb-8 flex-1">
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> 2 Active projects</li>
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> Standard node library</li>
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> WebGL embed</li>
</ul>
<button className="w-full py-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-medium text-white hover:bg-white/[0.08] transition-colors mt-auto">Start Building</button>
</div>
<div className="p-8 rounded-3xl bg-[#050914]/80 border border-cyan-500/30 backdrop-blur-md relative flex flex-col group transform md:-translate-y-2 shadow-[0_0_50px_rgba(6,182,212,0.1)] hover:shadow-[0_0_80px_rgba(6,182,212,0.2)] transition-shadow">
<div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
<div className="text-xs font-medium text-cyan-400 tracking-wider uppercase mb-4 flex justify-between items-center">
                            Pro
                            <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px]">Popular</span>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-semibold text-white">$29</span>
<span className="text-xs text-zinc-500">/mo</span>
</div>
<p className="text-xs text-zinc-400 mb-8 h-8">For professionals shipping production code.</p>
<ul className="space-y-4 text-sm text-zinc-200 mb-8 flex-1">
<li className="flex items-center gap-3"><iconify-icon className="text-cyan-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Unlimited projects</li>
<li className="flex items-center gap-3"><iconify-icon className="text-cyan-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> React/Three.js export</li>
<li className="flex items-center gap-3"><iconify-icon className="text-cyan-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Premium asset library</li>
</ul>
<button className="w-full py-3 rounded-xl bg-white text-black text-xs font-medium hover:bg-zinc-200 transition-colors mt-auto shadow-[0_0_20px_rgba(255,255,255,0.1)]">Upgrade to Pro</button>
</div>
<div className="p-8 rounded-3xl bg-[#050914]/40 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm flex flex-col">
<div className="text-xs font-medium text-zinc-500 tracking-wider uppercase mb-4">Team</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-semibold text-white">$99</span>
<span className="text-xs text-zinc-500">/mo</span>
</div>
<p className="text-xs text-zinc-500 mb-8 h-8">For agencies collaborating at scale.</p>
<ul className="space-y-4 text-sm text-zinc-400 mb-8 flex-1">
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> Everything in Pro</li>
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> Multi-user collaboration</li>
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> Shared workspaces</li>
</ul>
<button className="w-full py-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-medium text-white hover:bg-white/[0.08] transition-colors mt-auto">Contact Sales</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#02050a] relative z-10 pt-16 md:pt-32 border-t border-white/[0.05] overflow-hidden">

<div className="relative w-full flex justify-center h-[15vw] min-h-[120px] overflow-hidden pointer-events-none select-none border-b border-white/[0.02]">

<div className="absolute -top-[4vw] text-[32vw] font-semibold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-500 to-[#02050a] opacity-90 drop-shadow-[0_-5px_15px_rgba(255,255,255,0.05)]">
                    Flux
                </div>

<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#02050a] via-[#02050a]/90 to-transparent"></div>
</div>

<div className="relative z-20 w-full bg-gradient-to-b from-[#02050a] to-[#010306]">
<div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">

<div className="lg:col-span-2 flex flex-col gap-8">
<p className="text-sm text-zinc-400 font-normal leading-relaxed">
                            2261 Market Street #5039<br />
                            San Francisco, CA 94114
                        </p>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/5 w-fit">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
<span className="text-xs text-zinc-300 font-medium">All systems normal</span>
</div>
<div className="flex items-center gap-4 pt-2">
<a className="w-8 h-8 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-all duration-200" href="#">
<i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="w-8 h-8 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-all duration-200" href="#">
<i className="w-4 h-4" data-lucide="github" strokeWidth="1.5"></i>
</a>
<a className="w-8 h-8 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-all duration-200" href="#">
<i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div>
<h3 className="text-sm font-medium text-white mb-6 tracking-wide">Documentation</h3>
<ul className="space-y-4 text-sm font-normal text-zinc-400">
<li><a className="hover:text-white transition-colors duration-200" href="#">Getting Started</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium text-white mb-6 tracking-wide">Resources</h3>
<ul className="space-y-4 text-sm font-normal text-zinc-400">
<li><a className="hover:text-white transition-colors duration-200" href="#">Changelog</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Status</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium text-white mb-6 tracking-wide">Company</h3>
<ul className="space-y-4 text-sm font-normal text-zinc-400">
<li><a className="hover:text-white transition-colors duration-200" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Customers</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium text-white mb-6 tracking-wide">Legal</h3>
<ul className="space-y-4 text-sm font-normal text-zinc-400">
<li><a className="hover:text-white transition-colors duration-200" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors duration-200" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
