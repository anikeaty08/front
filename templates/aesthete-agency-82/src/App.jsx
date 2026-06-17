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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2" href="#">
<span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black text-xs font-bold">A</span>
                AESTHETE
            </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#pricing">Plans</a>
<a className="hover:text-white transition-colors" href="#reviews">Stories</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#contact">
                    Start Project
                </a>
<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden grid-bg">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-300 mb-8 animate-fade-in-up">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Accepting new clients for Q4
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
                We craft digital <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">masterpieces.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                We are a collective of artisans building landing pages that blend high-performance engineering with breathtaking aesthetics.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full font-medium text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group">
                    View Portfolio
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/10 text-white rounded-full font-medium text-sm hover:bg-white/5 transition-all">
                    Our Philosophy
                </button>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto px-6 relative transform perspective-1000">
<div className="relative rounded-t-xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden h-64 md:h-96 lg:h-[500px]">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>

<div className="p-6 md:p-10 grid grid-cols-12 gap-6">
<div className="col-span-12 md:col-span-8 space-y-4">
<div className="h-8 w-3/4 bg-white/10 rounded animate-pulse"></div>
<div className="h-4 w-1/2 bg-white/5 rounded"></div>
<div className="flex gap-3 mt-6">
<div className="h-10 w-32 bg-indigo-500/20 border border-indigo-500/30 rounded"></div>
<div className="h-10 w-32 bg-white/5 border border-white/10 rounded"></div>
</div>
</div>
<div className="hidden md:block col-span-4">
<div className="w-full h-48 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg border border-white/5"></div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#050505] to-transparent z-20"></div>
</div>
</header>

<section className="py-12 border-y border-white/5 bg-[#080808]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-neutral-500 uppercase tracking-widest mb-8">Trusted by visionaries at</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tighter font-sans">ACME<span className="text-indigo-500">.</span></span>
<span className="text-xl font-semibold tracking-tight italic font-serif">Vertex</span>
<span className="text-xl font-bold tracking-widest">NEXUS</span>
<span className="text-xl font-medium flex items-center gap-1"><div className="w-3 h-3 bg-white rounded-full"></div>Orbital</span>
<span className="text-xl font-bold tracking-tight">FOCAL</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24 max-w-2xl">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Beyond pixels. <br/>We engineer conversion.</h2>
<p className="text-neutral-400 font-light text-lg">We don't just arrange rectangles. We construct immersive digital experiences designed to captivate and convert.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel rounded-3xl p-8 md:col-span-2 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon height="200" icon="lucide:monitor" width="200"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="lucide:pen-tool" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Bespoke Design Systems</h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-sm">Every element is crafted from scratch. No templates. We build a unique visual language that embodies your brand's essence.</p>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 md:row-span-2 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="lucide:zap" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Sub-100ms Load Times</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-8">Performance is our religion. We optimize every byte, script, and asset for instant interactivity.</p>
<div className="mt-auto border-t border-white/10 pt-6">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-neutral-500">Google Score</span>
<span className="text-xs text-emerald-400">99/100</span>
</div>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="bg-emerald-400 h-full w-[99%]"></div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 group hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="lucide:layers" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Seamless Animation</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Micro-interactions that delight without distraction.</p>
</div>

<div className="glass-panel rounded-3xl p-8 group hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="lucide:smartphone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Fluid Responsive</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Perfection across every viewport and device orientation.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] border-y border-white/5" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Selected Works</h2>
<p className="text-neutral-400">A curation of our recent digital architecture.</p>
</div>
<a className="text-sm text-white border-b border-white/30 pb-1 hover:border-white transition-colors self-start md:self-auto" href="#">View all projects</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-neutral-900 rounded-xl overflow-hidden border border-white/5 relative mb-6">
<div className="absolute inset-0 bg-neutral-800 transition-transform duration-700 group-hover:scale-105">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#050505] rounded-lg border border-white/5 shadow-2xl p-6 flex flex-col gap-4">
<div className="w-1/3 h-4 bg-white/10 rounded"></div>
<div className="w-full h-32 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded"></div>
<div className="flex gap-2">
<div className="w-1/4 h-20 bg-white/5 rounded"></div>
<div className="w-1/4 h-20 bg-white/5 rounded"></div>
<div className="w-1/4 h-20 bg-white/5 rounded"></div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white mb-1 group-hover:text-indigo-400 transition-colors">Chronos Fintech</h3>
<p className="text-sm text-neutral-500">SaaS Landing Page</p>
</div>
<div className="p-2 rounded-full border border-white/10 text-neutral-400 group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="aspect-[4/3] bg-neutral-900 rounded-xl overflow-hidden border border-white/5 relative mb-6">
<div className="absolute inset-0 bg-neutral-800 transition-transform duration-700 group-hover:scale-105">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#050505] rounded-lg border border-white/5 shadow-2xl p-6 flex flex-col gap-4">
<div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 to-transparent flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-emerald-500/30 bg-emerald-500/10"></div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white mb-1 group-hover:text-emerald-400 transition-colors">EcoStream</h3>
<p className="text-sm text-neutral-500">Sustainable Energy Brand</p>
</div>
<div className="p-2 rounded-full border border-white/10 text-neutral-400 group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-neutral-900 rounded-xl overflow-hidden border border-white/5 relative mb-6">
<div className="absolute inset-0 bg-neutral-800 transition-transform duration-700 group-hover:scale-105">
<div className="absolute inset-0 grid grid-cols-2 gap-px bg-white/5">
<div className="bg-[#0a0a0a]"></div>
<div className="bg-[#0a0a0a]"></div>
<div className="bg-[#0a0a0a]"></div>
<div className="bg-[#0a0a0a]"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-5/6 bg-[#050505] border border-white/5 p-4">
<div className="text-center mt-8">
<div className="h-2 w-1/2 bg-white/20 mx-auto rounded mb-2"></div>
<div className="h-2 w-1/3 bg-white/10 mx-auto rounded"></div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white mb-1 group-hover:text-amber-400 transition-colors">Lumina</h3>
<p className="text-sm text-neutral-500">Architecture Firm</p>
</div>
<div className="p-2 rounded-full border border-white/10 text-neutral-400 group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="aspect-[4/3] bg-neutral-900 rounded-xl overflow-hidden border border-white/5 relative mb-6">
<div className="absolute inset-0 bg-neutral-800 transition-transform duration-700 group-hover:scale-105 flex items-center justify-center">
<div className="w-32 h-32 rounded-full border border-white/10 bg-gradient-to-tr from-pink-500/20 to-orange-500/20 blur-xl"></div>
<div className="absolute w-full h-full flex items-center justify-center">
<div className="w-48 h-12 bg-[#050505] border border-white/10 rounded-full flex items-center px-4 justify-between">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div className="w-16 h-2 bg-white/10 rounded"></div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white mb-1 group-hover:text-pink-400 transition-colors">Velvet AI</h3>
<p className="text-sm text-neutral-500">Generative Art Platform</p>
</div>
<div className="p-2 rounded-full border border-white/10 text-neutral-400 group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="process">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-16 text-center">The Methodology</h2>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="relative group">
<div className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-sm font-medium text-white mb-6 relative z-10 group-hover:border-indigo-500 group-hover:text-indigo-500 transition-colors">01</div>
<h3 className="text-lg font-medium text-white mb-3">Discovery</h3>
<p className="text-sm text-neutral-400 leading-relaxed">We deconstruct your brand DNA and market position to find the unique angle.</p>
</div>

<div className="relative group">
<div className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-sm font-medium text-white mb-6 relative z-10 group-hover:border-indigo-500 group-hover:text-indigo-500 transition-colors">02</div>
<h3 className="text-lg font-medium text-white mb-3">Wireframing</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Structural blueprinting to ensure user flow and conversion paths are optimized.</p>
</div>

<div className="relative group">
<div className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-sm font-medium text-white mb-6 relative z-10 group-hover:border-indigo-500 group-hover:text-indigo-500 transition-colors">03</div>
<h3 className="text-lg font-medium text-white mb-3">Crafting</h3>
<p className="text-sm text-neutral-400 leading-relaxed">High-fidelity design and pixel-perfect development using modern frameworks.</p>
</div>

<div className="relative group">
<div className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-sm font-medium text-white mb-6 relative z-10 group-hover:border-indigo-500 group-hover:text-indigo-500 transition-colors">04</div>
<h3 className="text-lg font-medium text-white mb-3">Launch</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Rigorous testing, deployment, and post-launch analytics integration.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808]" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-16">Heard from the founders</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl">
<div className="flex gap-1 text-indigo-400 mb-6">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"Aesthete didn't just build a website; they built a conversion engine. Our bounce rate dropped by 40% in the first week. The attention to detail is obsessive."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">JD</div>
<div>
<div className="text-sm font-medium text-white">James Dolan</div>
<div className="text-xs text-neutral-500">CEO, Vertex</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl">
<div className="flex gap-1 text-indigo-400 mb-6">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"The design language they created for us was exactly what we couldn't articulate. It's clean, futuristic, and incredibly fast. Worth every penny."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">ES</div>
<div>
<div className="text-sm font-medium text-white">Elena S.</div>
<div className="text-xs text-neutral-500">Founder, Nexus</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl md:hidden lg:block">
<div className="flex gap-1 text-indigo-400 mb-6">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"Professional, visionary, and technically profound. The team at Aesthete understands the intersection of art and commerce perfectly."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">MR</div>
<div>
<div className="text-sm font-medium text-white">Marcus Ray</div>
<div className="text-xs text-neutral-500">CMO, Orbital</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="pricing">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Transparent Investment</h2>
<p className="text-neutral-400">Simple pricing for complex needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="p-8 border border-white/5 rounded-2xl bg-[#0a0a0a]">
<h3 className="text-lg font-medium text-white mb-2">Essential</h3>
<p className="text-xs text-neutral-400 mb-6">For early stage startups.</p>
<div className="text-3xl font-medium text-white mb-8">$2,500</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="lucide:check"></iconify-icon> One Page
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="lucide:check"></iconify-icon> Mobile Optimized
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="lucide:check"></iconify-icon> 3 Revisions
                        </li>
</ul>
<a className="block w-full py-3 rounded-lg border border-white/10 text-center text-sm font-medium hover:bg-white/5 transition-colors" href="#">Select</a>
</div>

<div className="p-8 border border-indigo-500/30 rounded-2xl bg-[#0a0a0a] relative shadow-2xl shadow-indigo-900/20">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Most Popular</div>
<h3 className="text-lg font-medium text-white mb-2">Growth</h3>
<p className="text-xs text-neutral-400 mb-6">For scaling companies.</p>
<div className="text-3xl font-medium text-white mb-8">$5,000</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Up to 5 Pages
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Advanced Animations
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> CMS Integration
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Priority Support
                        </li>
</ul>
<a className="block w-full py-3 rounded-lg bg-white text-black text-center text-sm font-medium hover:bg-neutral-200 transition-colors" href="#">Get Started</a>
</div>

<div className="p-8 border border-white/5 rounded-2xl bg-[#0a0a0a]">
<h3 className="text-lg font-medium text-white mb-2">Enterprise</h3>
<p className="text-xs text-neutral-400 mb-6">Full custom solutions.</p>
<div className="text-3xl font-medium text-white mb-8">Custom</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="lucide:check"></iconify-icon> Unlimited Pages
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="lucide:check"></iconify-icon> Custom 3D Assets
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="lucide:check"></iconify-icon> Dedicated Design Lead
                        </li>
</ul>
<a className="block w-full py-3 rounded-lg border border-white/10 text-center text-sm font-medium hover:bg-white/5 transition-colors" href="#">Contact Us</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-medium text-white tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-[#0a0a0a] border border-white/5 rounded-lg overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 list-none text-white font-medium text-sm">
<span>How long does a typical project take?</span>
<iconify-icon className="group-open:rotate-45 transition-transform text-neutral-500" icon="lucide:plus"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                        For a standard landing page (Growth plan), we typically deliver the first draft within 5-7 business days. Full completion depends on feedback loops, usually averaging 2-3 weeks.
                    </div>
</details>
<details className="group bg-[#0a0a0a] border border-white/5 rounded-lg overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 list-none text-white font-medium text-sm">
<span>Do you provide the code or just the design?</span>
<iconify-icon className="group-open:rotate-45 transition-transform text-neutral-500" icon="lucide:plus"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                        We provide both. We are a full-service agency. We design in Figma and develop using React, Tailwind CSS, or Webflow depending on your preference.
                    </div>
</details>
<details className="group bg-[#0a0a0a] border border-white/5 rounded-lg overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 list-none text-white font-medium text-sm">
<span>What assets do I need to provide?</span>
<iconify-icon className="group-open:rotate-45 transition-transform text-neutral-500" icon="lucide:plus"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                        Ideally, your logo, brand guidelines, and copy. However, if you lack these, we can include branding and copywriting services as an add-on.
                    </div>
</details>
</div>
</div>
</section>

<footer className="pt-32 pb-12 bg-[#020202] border-t border-white/10 relative overflow-hidden" id="contact">

<div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-indigo-900/20 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8">Ready to elevate your <br/>digital presence?</h2>
<p className="text-neutral-400 mb-10 text-lg">Join the visionary companies redefining their industries with Aesthete.</p>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-transform duration-200" href="#">
                    Schedule Discovery Call
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2 mb-6" href="#">
<span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black text-xs font-bold">A</span>
                        AESTHETE
                    </a>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Designing the future of the web, <br/>one pixel at a time.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Services</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Landing Pages</a></li>
<li><a className="hover:text-white transition-colors" href="#">Design Systems</a></li>
<li><a className="hover:text-white transition-colors" href="#">Development</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Newsletter</h4>
<div className="flex gap-2">
<input className="bg-white/5 border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500 w-full transition-colors" placeholder="email@domain.com" type="email"/>
<button className="bg-white/10 hover:bg-white/20 text-white rounded-md px-3 py-2 transition-colors">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-neutral-600 uppercase tracking-widest">© 2023 Aesthete Agency. All rights reserved.</p>
<div className="flex gap-4 text-neutral-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="16"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
