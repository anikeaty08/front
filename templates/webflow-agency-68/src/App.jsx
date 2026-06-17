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
      

<div className="bg-noise"></div>

<div className="fixed inset-0 mesh-gradient z-0"></div>
<div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-screen"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-screen"></div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#030303]/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group relative" href="#">
<div className="absolute inset-0 bg-indigo-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-8 h-8 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center relative z-10 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-white" icon="solar:infinity-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold text-white tracking-tight group-hover:text-indigo-200 transition-colors">STRUCTURE</span>
</a>
<div className="hidden md:flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-md">
<a className="px-4 py-1.5 text-xs font-medium text-white bg-white/10 rounded-full shadow-sm transition-all hover:bg-white/15" href="#">Agency</a>
<a className="px-4 py-1.5 text-xs font-medium hover:text-white transition-colors" href="#">Projects</a>
<a className="px-4 py-1.5 text-xs font-medium hover:text-white transition-colors" href="#">Templates</a>
<a className="px-4 py-1.5 text-xs font-medium hover:text-white transition-colors" href="#">Services</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-1 text-xs font-medium hover:text-white transition-colors" href="#">Client Log in</a>
<button className="bg-white text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-neutral-200 transition-all shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_-3px_rgba(255,255,255,0.5)]">
                    Start Project
                </button>
</div>
</div>
</nav>

<main className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden z-10">
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

<div className="flex flex-col items-start max-w-2xl relative">

<div className="absolute -left-6 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent hidden lg:block"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 cursor-default hover:bg-blue-500/20 transition-colors">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 glow-point text-blue-500"></span>
</span>
<span className="text-[11px] font-semibold text-blue-200 uppercase tracking-wider">Certified Webflow Partner</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium text-white tracking-tighter leading-[0.95] mb-8">
                    Visually <br/>
<span className="text-shine">Perfect</span> <br/>
                    Development.
                </h1>
<p className="text-lg text-neutral-400 font-light leading-relaxed mb-10 max-w-lg">
                    We build award-winning Webflow experiences for forward-thinking brands. Pixel-perfect implementation, complex interactions, and scalable CMS structures.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-20">
<button className="group h-12 px-1 pl-1 pr-6 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all flex items-center gap-3">
<span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
<span>View Portfolio</span>
</button>
<button className="h-12 px-6 rounded-full border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-sm font-medium text-white">
<span>Our Process</span>
<iconify-icon className="text-neutral-400" icon="solar:layers-minimalistic-linear" width="18"></iconify-icon>
</button>
</div>
<div className="mt-20 w-full overflow-hidden marquee-container">
<p className="text-[10px] font-semibold text-neutral-600 mb-4 uppercase tracking-widest pl-1">Trusted by teams at</p>
<div className="flex gap-12 w-max marquee-content opacity-50 grayscale hover:grayscale-0 transition-all duration-500 hover:opacity-100">
<span className="text-lg font-bold tracking-tighter text-white">Jasper</span>
<span className="text-lg font-bold tracking-tighter text-white">Mural</span>
<span className="text-lg font-bold tracking-tighter text-white">Lattice</span>
<span className="text-lg font-bold tracking-tighter text-white">Hopin</span>
<span className="text-lg font-bold tracking-tighter text-white">Memberstack</span>
<span className="text-lg font-bold tracking-tighter text-white">Finsweet</span>
<span className="text-lg font-bold tracking-tighter text-white">Jasper</span>
<span className="text-lg font-bold tracking-tighter text-white">Mural</span>
<span className="text-lg font-bold tracking-tighter text-white">Lattice</span>
<span className="text-lg font-bold tracking-tighter text-white">Hopin</span>
<span className="text-lg font-bold tracking-tighter text-white">Memberstack</span>
<span className="text-lg font-bold tracking-tighter text-white">Finsweet</span>
</div>
</div>
</div>

<div className="relative w-full h-[600px] flex items-center justify-center perspective-[1200px]">

<div className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-[80px] animate-pulse"></div>

<div className="absolute top-10 -right-4 glass-panel px-4 py-2 rounded-lg flex items-center gap-3 z-30 animate-float-delayed border-l-2 border-l-green-400 shadow-[0_0_20px_rgba(74,222,128,0.1)]">
<div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
<iconify-icon className="text-green-400" icon="solar:check-circle-linear" width="12"></iconify-icon>
</div>
<div>
<div className="text-[10px] font-semibold text-white">Published Successfully</div>
<div className="text-[9px] text-neutral-500">production — v2.4</div>
</div>
</div>

<div className="relative w-full max-w-lg bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-float z-10 flex flex-col h-[380px]">

<div className="h-10 border-b border-white/5 bg-[#1a1a1a] flex items-center justify-between px-3 shrink-0">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-sm border border-white/20"></div> 
<div className="h-3 w-px bg-white/10"></div>
<div className="flex gap-2 text-neutral-500">
<iconify-icon className="text-white" icon="solar:laptop-linear" width="12"></iconify-icon> 
<iconify-icon icon="solar:tablet-linear" width="12"></iconify-icon>
<iconify-icon icon="solar:smartphone-linear" width="12"></iconify-icon>
</div>
<div className="text-[9px] text-neutral-500 ml-2">1200 PX</div>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:share-linear" width="12"></iconify-icon>
<iconify-icon className="text-neutral-500" icon="solar:eye-linear" width="12"></iconify-icon>
<button className="bg-blue-600 hover:bg-blue-500 text-white text-[9px] font-medium px-2 py-0.5 rounded-sm transition-colors">Publish</button>
</div>
</div>

<div className="flex flex-1 overflow-hidden">

<div className="w-10 border-r border-white/5 flex flex-col items-center py-3 gap-4 bg-[#1a1a1a] shrink-0">
<iconify-icon className="text-neutral-400 hover:text-white cursor-pointer" icon="solar:add-square-linear" width="14"></iconify-icon>
<iconify-icon className="text-blue-500 cursor-pointer" icon="solar:layers-minimalistic-linear" width="14"></iconify-icon> 
<iconify-icon className="text-neutral-400 hover:text-white cursor-pointer" icon="solar:file-text-linear" width="14"></iconify-icon>
<iconify-icon className="text-neutral-400 hover:text-white cursor-pointer" icon="solar:database-linear" width="14"></iconify-icon> 
<div className="mt-auto">
<iconify-icon className="text-neutral-400" icon="solar:settings-linear" width="14"></iconify-icon>
</div>
</div>

<div className="flex-1 bg-[#121212] relative p-6 overflow-hidden flex flex-col items-center justify-center">

<div className="absolute top-[20%] left-[10%] bg-blue-600 text-white text-[8px] px-1 py-0.5 rounded-t-sm z-20">Hero Section</div>

<div className="w-[90%] border-2 border-blue-500/50 hover:border-blue-500 transition-colors bg-[#0a0a0a] rounded-lg p-6 relative group">

<div className="flex flex-col items-center gap-3">
<div className="h-2 w-24 bg-neutral-800 rounded-full mb-1"></div>
<div className="h-6 w-3/4 bg-gradient-to-r from-neutral-700 to-neutral-800 rounded mb-2"></div>
<div className="h-6 w-1/2 bg-gradient-to-r from-neutral-700 to-neutral-800 rounded mb-2"></div>
<div className="h-3 w-2/3 bg-neutral-800/50 rounded mt-1"></div>
<div className="flex gap-2 mt-4">
<div className="h-6 w-20 bg-white rounded-md"></div>
<div className="h-6 w-20 border border-neutral-700 rounded-md"></div>
</div>
</div>

<div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-blue-500"></div>
<div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-500"></div>
<div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-blue-500"></div>
</div>
</div>

<div className="w-48 border-l border-white/5 bg-[#1a1a1a] flex flex-col shrink-0">

<div className="h-8 border-b border-white/5 flex items-center px-3 gap-2 bg-[#222]">
<span className="text-[9px] text-green-400 font-mono">Hero Section</span>
<span className="text-[8px] text-neutral-500 ml-auto">1 on page</span>
</div>

<div className="p-3 space-y-4 overflow-y-auto">

<div>
<div className="text-[9px] text-neutral-500 mb-1 font-semibold">Layout</div>
<div className="flex gap-1">
<div className="flex-1 h-6 bg-neutral-800 rounded flex items-center justify-center hover:bg-neutral-700 cursor-pointer"><iconify-icon icon="solar:gallery-wide-linear" width="10"></iconify-icon></div>
<div className="flex-1 h-6 bg-neutral-800 rounded flex items-center justify-center hover:bg-neutral-700 cursor-pointer text-blue-400"><iconify-icon icon="solar:gallery-horizontal-linear" width="10"></iconify-icon></div> 
<div className="flex-1 h-6 bg-neutral-800 rounded flex items-center justify-center hover:bg-neutral-700 cursor-pointer"><iconify-icon icon="solar:gallery-grid-linear" width="10"></iconify-icon></div>
<div className="flex-1 h-6 bg-neutral-800 rounded flex items-center justify-center hover:bg-neutral-700 cursor-pointer"><iconify-icon icon="solar:eye-closed-linear" width="10"></iconify-icon></div>
</div>
</div>

<div>
<div className="text-[9px] text-neutral-500 mb-1 font-semibold">Spacing</div>
<div className="relative h-16 bg-neutral-900 border border-white/5 rounded mx-1">
<div className="absolute top-0 w-full text-center text-[8px] text-neutral-600 mt-0.5">M: 80</div>
<div className="absolute inset-4 bg-neutral-800 border border-white/5 rounded">
<div className="absolute top-0 w-full text-center text-[8px] text-blue-400 mt-0.5">P: 24</div>
<div className="absolute inset-3 bg-[#1a1a1a] rounded flex items-center justify-center">
</div>
</div>
</div>
</div>

<div>
<div className="text-[9px] text-neutral-500 mb-1 font-semibold">Size</div>
<div className="grid grid-cols-2 gap-2">
<div className="bg-neutral-800 rounded p-1 flex items-center justify-between px-2">
<span className="text-[8px] text-neutral-500">W</span>
<span className="text-[8px] text-neutral-300">100%</span>
</div>
<div className="bg-neutral-800 rounded p-1 flex items-center justify-between px-2">
<span className="text-[8px] text-neutral-500">H</span>
<span className="text-[8px] text-neutral-300">Auto</span>
</div>
</div>
</div>

<div>
<div className="text-[9px] text-neutral-500 mb-1 font-semibold">Typography</div>
<div className="bg-neutral-800 rounded p-1.5 flex items-center justify-between mb-1">
<span className="text-[9px]">Inter</span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="8"></iconify-icon>
</div>
<div className="grid grid-cols-2 gap-1">
<div className="bg-neutral-800 rounded p-1 flex items-center justify-center text-[9px]">16px</div>
<div className="bg-neutral-800 rounded p-1 flex items-center justify-center text-[9px]">1.5 -</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-16 -left-6 md:-left-12 glass-panel p-3 rounded-xl animate-float-slow z-20 flex flex-col gap-2 w-48 border border-white/10">
<div className="flex items-center justify-between border-b border-white/5 pb-2">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-yellow-400" icon="solar:bolt-linear" width="12"></iconify-icon>
<span className="text-[10px] font-semibold text-white">Interactions</span>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>
<div className="space-y-1.5">
<div className="flex items-center justify-between text-[9px] text-neutral-400">
<span>Scroll into view</span>
<span>0.5s</span>
</div>
<div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-[60%] bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse"></div>
</div>
<div className="flex gap-1 mt-1">
<div className="h-4 w-4 rounded bg-neutral-800 flex items-center justify-center"><iconify-icon icon="solar:play-linear" width="8"></iconify-icon></div>
<div className="h-4 flex-1 rounded bg-neutral-800 flex items-center px-2 text-[8px] text-neutral-500">Move: 0px -&gt; -20px</div>
</div>
</div>
</div>

<div className="absolute top-10 right-20 w-px h-20 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>
<div className="absolute bottom-20 left-10 w-20 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
</div>
</div>
</main>

    </>
  );
}
