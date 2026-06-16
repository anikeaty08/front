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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-fuchsia-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
<div className="absolute inset-0 bg-grid z-0"></div>
</div>

<nav className="relative z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-md flex items-center justify-center rotate-3 hover:rotate-6 transition-transform">
<div className="w-3 h-3 border-2 border-black rounded-full"></div>
</div>
<span className="text-white font-medium tracking-tight">FLUX STUDIO</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Features</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Showcase</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Resources</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#">Sign in</a>
<button className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-lg hover:bg-neutral-200 transition-colors">
                    Get Started
                </button>
</div>
</div>
</nav>

<main className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 relative">
<div className="absolute -left-8 -top-8 w-20 h-20 bg-indigo-500/10 rounded-full blur-2xl"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="iconify text-indigo-400" data-icon="lucide:sparkles" data-width="12"></span>
<span className="text-xs font-medium text-indigo-200 tracking-wide">The All-in-One Creative Engine</span>
</div>
<h1 className="text-5xl sm:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
                    Design without <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-indigo-300">boundaries.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-lg leading-relaxed">
                    A unified workspace for high-velocity teams. Seamlessly blend vector graphics, responsive layouts, video timelines, and image processing in one performant interface.
                </p>
<div className="flex items-center gap-4 pt-4">
<button className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-medium text-sm hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                        Try for free
                        <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white font-medium text-sm hover:bg-white/10 transition-colors backdrop-blur-sm">
<span className="iconify" data-icon="lucide:grid-2x2" data-width="16"></span>
                        View Components
                    </button>
</div>

<div className="pt-8 border-t border-white/5 flex gap-6 opacity-70">
<div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
<span className="iconify" data-icon="lucide:pen-tool" data-width="14"></span> SVG
                    </div>
<div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
<span className="iconify" data-icon="lucide:code-2" data-width="14"></span> React
                    </div>
<div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
<span className="iconify" data-icon="lucide:film" data-width="14"></span> 4K
                    </div>
<div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
<span className="iconify" data-icon="lucide:aperture" data-width="14"></span> RAW
                    </div>
</div>
</div>

<div className="relative w-full h-[550px] perspective-[1000px] flex items-center justify-center">

<div className="relative w-[380px] h-[480px] transform preserve-3d">

<div className="absolute inset-0 glass-panel rounded-2xl z-10 overflow-hidden flex flex-col animate-float">

<div className="h-10 border-b border-white/5 bg-white/5 flex items-center justify-between px-4">
<div className="flex gap-4 text-neutral-500">
<span className="iconify hover:text-white transition-colors" data-icon="lucide:mouse-pointer-2" data-width="14"></span>
<span className="iconify text-white" data-icon="lucide:move" data-width="14"></span>
<span className="iconify hover:text-white transition-colors" data-icon="lucide:type" data-width="14"></span>
</div>
<div className="text-[10px] font-mono text-neutral-500 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span> Live
                            </div>
</div>

<div className="flex-1 relative bg-[#0c0c0c] p-6 flex items-center justify-center group">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="relative w-48 h-64 border border-white/10 bg-neutral-900 rounded-lg overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-105">

<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20"></div>

<div className="absolute w-full h-[1px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-[scan-vertical_3s_ease-in-out_infinite] z-20"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none p-4">
<path className="animate-[draw-path_3s_ease-in-out_infinite]" d="M10,100 C30,10 90,10 120,50 S150,150 180,100" fill="none" stroke="url(#gradient)" stroke-dasharray="200" strokeWidth="2"></path>
<defs>
<lineargradient id="gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#6366f1"></stop>
<stop offset="100%" stop-color="#ec4899"></stop>
</lineargradient>
</defs>

<circle className="animate-pulse" cx="10" cy="100" fill="white" r="2"></circle>
<circle className="animate-pulse" cx="120" cy="50" fill="white" r="2" style={{animationDelay: '1s'}}></circle>
</svg>

<div className="absolute bottom-8 left-4 right-4">
<div className="h-2 w-16 bg-white/20 rounded-full mb-2"></div>
<div className="h-1.5 w-24 bg-white/10 rounded-full"></div>
</div>
</div>
</div>

<div className="h-24 border-t border-white/5 bg-black/20 p-3 relative overflow-hidden">
<div className="flex justify-between items-center mb-2 px-1">
<span className="text-[9px] text-neutral-500 font-mono">00:04:12</span>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-neutral-700"></div>
</div>
</div>

<div className="space-y-1 relative">
<div className="h-2 w-full bg-neutral-800 rounded-sm overflow-hidden flex">
<div className="w-1/3 bg-indigo-900/50 border-r border-indigo-500/30"></div>
<div className="w-1/4 bg-indigo-600/50 border-r border-indigo-400/30"></div>
<div className="w-full bg-indigo-900/50"></div>
</div>
<div className="h-2 w-full bg-neutral-800 rounded-sm overflow-hidden flex">
<div className="w-1/2 bg-purple-900/50 border-r border-purple-500/30"></div>
<div className="w-full bg-purple-900/30"></div>
</div>

<div className="absolute top-0 bottom-0 w-[1px] bg-red-500 z-10 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-[slider-move_4s_linear_infinite]">
<div className="absolute -top-1 -left-1 w-2 h-0 bg-transparent border-t-[4px] border-t-red-500 border-x-[4px] border-x-transparent"></div>
</div>
</div>
</div>
</div>

<div className="absolute -right-16 top-16 w-48 glass-panel rounded-xl p-4 z-20 animate-float-delayed transform rotate-[-5deg]">
<div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-[10px] font-bold text-neutral-300">CSS</span>
</div>
<span className="iconify text-neutral-500" data-icon="lucide:braces" data-width="12"></span>
</div>
<div className="space-y-1.5 font-mono text-[9px] leading-relaxed">
<div className="flex gap-2">
<span className="text-purple-400">.hero</span> <span className="text-neutral-500">{</span>
</div>
<div className="pl-2 flex gap-2">
<span className="text-neutral-500">filter:</span> <span className="text-yellow-300">blur(20px)</span>;
                            </div>
<div className="pl-2 flex gap-2">
<span className="text-neutral-500">opacity:</span> <span className="text-blue-300">0.95</span>;
                            </div>
<div className="pl-2 flex gap-2">
<span className="text-neutral-500">transform:</span>
</div>
<div className="pl-4 text-green-300 truncate">scale3d(1, 1, 1);</div>
<div className="text-neutral-500">}</div>
</div>
</div>

<div className="absolute -left-12 bottom-32 w-44 glass-panel rounded-xl p-4 z-20 animate-float-reverse transform rotate-[3deg]">
<div className="flex items-center justify-between mb-4">
<span className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider">Adjustments</span>
<span className="iconify text-neutral-500" data-icon="lucide:sliders" data-width="12"></span>
</div>
<div className="space-y-3">

<div className="space-y-1">
<div className="flex justify-between text-[9px] text-neutral-500">
<span>Exposure</span>
<span>+0.5</span>
</div>
<div className="h-1 bg-neutral-800 rounded-full relative">
<div className="absolute top-0 left-0 bottom-0 bg-white w-[60%] rounded-full"></div>
<div className="absolute top-1/2 -mt-1 left-[60%] w-2 h-2 bg-white rounded-full shadow shadow-white/50"></div>
</div>
</div>

<div className="space-y-1">
<div className="flex justify-between text-[9px] text-neutral-500">
<span>Contrast</span>
<span>1.2</span>
</div>
<div className="h-1 bg-neutral-800 rounded-full relative">
<div className="absolute top-0 left-0 bottom-0 bg-indigo-500 w-[40%] rounded-full"></div>
<div className="absolute top-1/2 -mt-1 left-[40%] w-2 h-2 bg-indigo-400 rounded-full shadow shadow-indigo-500/50 animate-slider"></div>
</div>
</div>
</div>
</div>

<div className="absolute z-50 pointer-events-none animate-cursor text-white drop-shadow-lg">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="white" stroke="black" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<div className="absolute top-4 left-4 bg-indigo-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded ml-1">
                            User 1
                        </div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/10 rounded-full blur-[80px] -z-10 animate-pulse"></div>
</div>
</div>
</div>

<div className="mt-32 pt-10 border-t border-white/5">
<p className="text-center text-xs font-medium text-neutral-500 mb-8 uppercase tracking-widest">Powering the world's best creative teams</p>
<div className="flex justify-between items-center px-4 md:px-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="iconify h-6 w-auto" data-icon="simple-icons:adobe" data-width="24"></span>
<span className="iconify h-6 w-auto" data-icon="simple-icons:figma" data-width="24"></span>
<span className="iconify h-5 w-auto" data-icon="simple-icons:blender" data-width="24"></span>
<span className="iconify h-5 w-auto" data-icon="simple-icons:react" data-width="24"></span>
<span className="iconify h-6 w-auto" data-icon="simple-icons:framer" data-width="24"></span>
</div>
</div>
</main>
<footer className="border-t border-white/5 py-12 bg-black/20">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<div className="text-xs text-neutral-600 font-medium">
                    © 2024 Flux Studio.
                </div>
</div>
<div className="flex gap-6">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="16"></span></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="16"></span></a>
</div>
</div>
</footer>

    </>
  );
}
