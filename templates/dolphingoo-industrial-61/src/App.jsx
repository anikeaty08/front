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



        lucide.createIcons();
    
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
      

<header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-100/50">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-24">

<div className="flex-shrink-0 flex items-center gap-1 cursor-pointer select-none">
<div className="relative flex items-center justify-center">
<i className="w-10 h-10 text-cyan-500 fill-cyan-100 stroke-[1.5]" data-lucide="dolphin"></i>
</div>
<span className="text-3xl font-medium tracking-tight text-cyan-500 relative -left-1">
                        olphingoo
                    </span>
</div>

<nav className="hidden xl:flex items-center gap-10">
<a className="text-lg font-medium text-slate-800 hover:text-cyan-600 transition-colors duration-200" href="#">Home</a>
<a className="text-lg font-medium text-slate-800 hover:text-cyan-600 transition-colors duration-200" href="#">Products &amp; Solutions</a>
<a className="text-lg font-medium text-slate-800 hover:text-cyan-600 transition-colors duration-200" href="#">Project Cases</a>
<a className="text-lg font-medium text-slate-800 hover:text-cyan-600 transition-colors duration-200" href="#">Support</a>
<a className="text-lg font-medium text-slate-800 hover:text-cyan-600 transition-colors duration-200" href="#">About Us</a>
<a className="text-lg font-medium text-slate-800 hover:text-cyan-600 transition-colors duration-200" href="#">News</a>
<a className="text-lg font-medium text-slate-800 hover:text-cyan-600 transition-colors duration-200" href="#">Contact</a>
</nav>

<div className="flex items-center gap-6">
<div className="hidden sm:flex items-center gap-5 text-slate-900">
<button aria-label="Search" className="hover:text-cyan-600 transition-colors p-1">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="search"></i>
</button>
<div className="h-6 w-px bg-slate-300"></div>
<button aria-label="Language" className="hover:text-cyan-600 transition-colors p-1">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="globe"></i>
</button>
</div>
<a className="hidden sm:inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20 active:scale-95 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500" href="#">
                        Get Quote
                    </a>
<button className="xl:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>
<main className="w-full">

<section className="relative w-full bg-slate-950 overflow-hidden min-h-[700px] flex items-center">

<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 z-0"></div>

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>

<div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[800px] h-[800px] bg-slate-800/30 rounded-full blur-[100px] pointer-events-none"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.03)_0%,transparent_50%)] z-0 pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
<div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">

<div className="w-full lg:w-5/12 space-y-8 text-center lg:text-left pt-10 lg:pt-0">
<div className="space-y-4">
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                                ASTRO N Series <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">PV Modules</span>
</h1>
<p className="text-xl sm:text-2xl text-slate-400 font-light tracking-tight max-w-xl mx-auto lg:mx-0">
                                Solar Panels With High Efficiency &amp; Quality Guarantee
                            </p>
</div>
<div className="flex justify-center lg:justify-start">
<a className="group inline-flex items-center justify-center px-8 py-3.5 text-lg font-medium text-white border border-white/30 rounded-full hover:bg-white hover:text-slate-950 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50" href="#">
                                Explore More
                                <i className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="w-full lg:w-7/12 flex flex-col items-center lg:items-end relative mt-8 lg:mt-0">

<div className="flex items-end justify-center lg:justify-end gap-3 sm:gap-5 h-[450px] sm:h-[550px] relative px-4 perspective-[1000px]">

<div className="group relative w-14 sm:w-20 lg:w-24 h-[60%] bg-slate-900 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 shadow-2xl flex flex-col overflow-hidden">
<div className="absolute inset-0 solar-cell-pattern opacity-30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs font-bold text-lime-400 [writing-mode:vertical-rl] rotate-180 tracking-widest whitespace-nowrap opacity-80 group-hover:opacity-100 transition-opacity">
                                    ASTRO N-48
                                </span>
</div>

<div className="group relative w-14 sm:w-20 lg:w-24 h-[70%] bg-slate-900 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 shadow-2xl flex flex-col overflow-hidden">
<div className="absolute inset-0 solar-cell-pattern opacity-30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs font-bold text-lime-400 [writing-mode:vertical-rl] rotate-180 tracking-widest whitespace-nowrap opacity-80 group-hover:opacity-100 transition-opacity">
                                    ASTRO N-54
                                </span>
</div>

<div className="group relative w-14 sm:w-20 lg:w-24 h-[80%] bg-slate-900 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 shadow-2xl flex flex-col overflow-hidden">
<div className="absolute inset-0 solar-cell-pattern opacity-30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs font-bold text-lime-400 [writing-mode:vertical-rl] rotate-180 tracking-widest whitespace-nowrap opacity-80 group-hover:opacity-100 transition-opacity">
                                    ASTRO N-72
                                </span>
</div>

<div className="group relative w-14 sm:w-20 lg:w-24 h-[90%] bg-slate-900 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 shadow-2xl flex flex-col overflow-hidden">
<div className="absolute inset-0 solar-cell-pattern opacity-30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs font-bold text-lime-400 [writing-mode:vertical-rl] rotate-180 tracking-widest whitespace-nowrap opacity-80 group-hover:opacity-100 transition-opacity">
                                    ASTRO N-66
                                </span>
</div>

<div className="group relative w-14 sm:w-20 lg:w-24 h-[100%] bg-slate-900 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 shadow-2xl flex flex-col overflow-hidden z-10">
<div className="absolute inset-0 solar-cell-pattern opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs font-bold text-lime-400 [writing-mode:vertical-rl] rotate-180 tracking-widest whitespace-nowrap opacity-80 group-hover:opacity-100 transition-opacity">
                                    ASTRO N-78
                                </span>
</div>

<div className="absolute bottom-4 right-0 lg:-right-4 z-20 hidden sm:block">
<div className="bg-black/80 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300 cursor-default group">
<div className="absolute inset-0 border-2 border-dashed border-white/10 rounded-xl m-1 pointer-events-none"></div>
<div className="flex flex-col items-center justify-center text-center">
<div className="flex items-center gap-2 mb-1">
<i className="w-3 h-3 fill-white text-white" data-lucide="star"></i>
<span className="text-[10px] font-semibold text-white uppercase tracking-wider">World's First</span>
<i className="w-3 h-3 fill-white text-white" data-lucide="star"></i>
</div>
<div className="text-[11px] text-slate-300 uppercase tracking-wide">Mass-Production</div>
<div className="mt-1 pt-1 border-t border-white/20 w-full text-base font-bold text-white tracking-widest">
                                            ZBB-TOPCon
                                        </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
<button aria-label="Current Slide" className="h-1.5 w-8 bg-blue-500 rounded-full transition-all duration-300"></button>
<button aria-label="Go to slide 2" className="h-1.5 w-4 bg-slate-700 hover:bg-slate-500 rounded-full transition-all duration-300"></button>
<button aria-label="Go to slide 3" className="h-1.5 w-4 bg-slate-700 hover:bg-slate-500 rounded-full transition-all duration-300"></button>
<button aria-label="Go to slide 4" className="h-1.5 w-4 bg-slate-700 hover:bg-slate-500 rounded-full transition-all duration-300"></button>
<button aria-label="Go to slide 5" className="h-1.5 w-4 bg-slate-700 hover:bg-slate-500 rounded-full transition-all duration-300"></button>
</div>
</div>
</section>

<section className="py-24 bg-white relative z-10 border-b border-slate-100">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
<div className="space-y-2">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                            Our Products
                        </h2>
<p className="text-lg text-cyan-600 font-medium">
                            Our product display
                        </p>
</div>

<nav className="flex flex-wrap items-center gap-x-8 gap-y-3 pb-1">
<a className="text-base font-semibold text-slate-900 border-b-2 border-slate-900 pb-1" href="#">
                            Power Protection
                        </a>
<a className="text-base font-medium text-slate-500 hover:text-slate-900 hover:border-b-2 hover:border-slate-300 pb-1 transition-all" href="#">
                            Power Management
                        </a>
<a className="text-base font-medium text-slate-500 hover:text-slate-900 hover:border-b-2 hover:border-slate-300 pb-1 transition-all" href="#">
                            Driver
                        </a>
<a className="text-base font-medium text-slate-500 hover:text-slate-900 hover:border-b-2 hover:border-slate-300 pb-1 transition-all" href="#">
                            Signal Chain
                        </a>
<a className="text-base font-medium text-slate-500 hover:text-slate-900 hover:border-b-2 hover:border-slate-300 pb-1 transition-all" href="#">
                            Others
                        </a>
</nav>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative bg-[#EFF4F9] rounded-2xl p-8 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col min-h-[420px]">
<div className="flex flex-col h-full z-10">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">ET9528</h3>
<p className="mt-2 text-sm text-slate-500 font-medium">ET9528 is an Over-...</p>

<div className="flex-1 flex items-center justify-center py-10 perspective-[1000px]">
<div className="relative flex items-center justify-center transform group-hover:scale-105 group-hover:-translate-y-2 transition-transform duration-500">

<div className="relative w-28 h-20 chip-body rounded-[2px] transform rotate-[-25deg] translate-x-4 translate-y-2 z-10 flex items-center justify-center border border-slate-700/50">

<div className="absolute -left-1.5 top-2 bottom-2 flex flex-col justify-between py-1">
<div className="w-2 h-1 chip-pin rounded-l-sm"></div>
<div className="w-2 h-1 chip-pin rounded-l-sm"></div>
<div className="w-2 h-1 chip-pin rounded-l-sm"></div>
<div className="w-2 h-1 chip-pin rounded-l-sm"></div>
</div>

<div className="absolute -right-1.5 top-2 bottom-2 flex flex-col justify-between py-1">
<div className="w-2 h-1 chip-pin rounded-r-sm"></div>
<div className="w-2 h-1 chip-pin rounded-r-sm"></div>
<div className="w-2 h-1 chip-pin rounded-r-sm"></div>
<div className="w-2 h-1 chip-pin rounded-r-sm"></div>
</div>
<div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-slate-700/50 shadow-inner"></div>
<span className="text-slate-400 text-[8px] font-bold chip-text tracking-widest">ETEK</span>
</div>

<div className="absolute w-20 h-14 chip-body rounded-[2px] transform rotate-[15deg] -translate-x-8 -translate-y-4 opacity-90 border border-slate-700/50 flex items-center justify-center">
<div className="absolute -left-1 top-2 bottom-2 flex flex-col justify-between py-1">
<div className="w-1.5 h-1 chip-pin rounded-l-sm"></div>
<div className="w-1.5 h-1 chip-pin rounded-l-sm"></div>
<div className="w-1.5 h-1 chip-pin rounded-l-sm"></div>
</div>
<div className="absolute -right-1 top-2 bottom-2 flex flex-col justify-between py-1">
<div className="w-1.5 h-1 chip-pin rounded-r-sm"></div>
<div className="w-1.5 h-1 chip-pin rounded-r-sm"></div>
<div className="w-1.5 h-1 chip-pin rounded-r-sm"></div>
</div>
</div>
</div>
</div>
<a className="inline-flex items-center text-sm font-semibold text-cyan-700 hover:text-cyan-900 transition-colors mt-auto" href="#">
                                Learn More <i className="ml-2 w-4 h-4 stroke-[2]" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="group relative bg-[#EFF4F9] rounded-2xl p-8 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col min-h-[420px]">
<div className="flex flex-col h-full z-10">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">ET9540CL</h3>
<p className="mt-2 text-sm text-slate-500 font-medium">ET9540CL can disco...</p>

<div className="flex-1 flex items-center justify-center py-10 perspective-[1000px]">
<div className="relative flex items-center justify-center transform group-hover:scale-105 group-hover:-translate-y-2 transition-transform duration-500">

<div className="relative w-28 h-28 chip-body rounded-[4px] transform rotate-[-30deg] translate-x-4 z-10 flex items-center justify-center border border-slate-700/50">

<div className="grid grid-cols-4 gap-1 opacity-20">
<div className="w-3 h-3 rounded-full bg-white/20"></div><div className="w-3 h-3 rounded-full bg-white/20"></div><div className="w-3 h-3 rounded-full bg-white/20"></div><div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-white/20"></div><div className="w-3 h-3 rounded-full bg-white/20"></div><div className="w-3 h-3 rounded-full bg-white/20"></div><div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-white/20"></div><div className="w-3 h-3 rounded-full bg-white/20"></div><div className="w-3 h-3 rounded-full bg-white/20"></div><div className="w-3 h-3 rounded-full bg-white/20"></div>
</div>
<span className="absolute text-slate-400 text-[10px] font-bold chip-text tracking-widest rotate-90">ETEK</span>
</div>

<div className="absolute w-24 h-24 chip-body rounded-[4px] transform rotate-[10deg] -translate-x-10 translate-y-2 opacity-90 border border-slate-700/50 flex items-center justify-center">
<span className="text-slate-500 text-[9px] font-bold chip-text">BGA</span>
</div>
</div>
</div>
<a className="inline-flex items-center text-sm font-semibold text-cyan-700 hover:text-cyan-900 transition-colors mt-auto" href="#">
                                Learn More <i className="ml-2 w-4 h-4 stroke-[2]" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="group relative bg-[#EFF4F9] rounded-2xl p-8 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col min-h-[420px]">
<div className="flex flex-col h-full z-10">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">ET9918B</h3>
<p className="mt-2 text-sm text-slate-500 font-medium">ET9918B can discon...</p>

<div className="flex-1 flex items-center justify-center py-10 perspective-[1000px]">
<div className="relative flex items-center justify-center transform group-hover:scale-105 group-hover:-translate-y-2 transition-transform duration-500">

<div className="relative w-32 h-20 chip-body rounded-[2px] transform rotate-[-20deg] translate-x-4 translate-y-1 z-10 flex items-center justify-center border border-slate-700/50">

<div className="absolute inset-2 grid grid-cols-5 gap-1 place-items-center">
<div className="w-2 h-2 rounded-full bg-gradient-to-tr from-slate-400 to-white shadow-sm"></div>
<div className="w-2 h-2 rounded-full bg-gradient-to-tr from-slate-400 to-white shadow-sm"></div>
<div className="w-2 h-2 rounded-full bg-gradient-to-tr from-slate-400 to-white shadow-sm"></div>
<div className="w-2 h-2 rounded-full bg-gradient-to-tr from-slate-400 to-white shadow-sm"></div>
<div className="w-2 h-2 rounded-full bg-gradient-to-tr from-slate-400 to-white shadow-sm"></div>

<div className="w-2 h-2 rounded-full bg-gradient-to-tr from-slate-400 to-white shadow-sm"></div>
<div className="w-2 h-2 rounded-full bg-gradient-to-tr from-slate-400 to-white shadow-sm"></div>
<div className="w-2 h-2 rounded-full bg-gradient-to-tr from-slate-400 to-white shadow-sm"></div>
<div className="w-2 h-2 rounded-full bg-gradient-to-tr from-slate-400 to-white shadow-sm"></div>
<div className="w-2 h-2 rounded-full bg-gradient-to-tr from-slate-400 to-white shadow-sm"></div>
</div>
</div>

<div className="absolute w-24 h-16 chip-body rounded-[2px] transform rotate-[15deg] -translate-x-10 -translate-y-2 opacity-90 border border-slate-700/50 flex items-center justify-center">
<span className="text-slate-500 text-[10px] font-bold chip-text">QFN</span>
</div>
</div>
</div>
<a className="inline-flex items-center text-sm font-semibold text-cyan-700 hover:text-cyan-900 transition-colors mt-auto" href="#">
                                Learn More <i className="ml-2 w-4 h-4 stroke-[2]" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full h-[800px] bg-slate-950 overflow-hidden font-sans">

<div className="absolute inset-0 z-0">
<img alt="Construction Background" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-slate-900/20 to-slate-900/80 mix-blend-multiply"></div>
</div>
<div className="relative z-10 flex flex-col lg:flex-row h-full w-full">

<div className="group relative flex-1 min-h-[100px] lg:h-auto flex flex-col border-b lg:border-b-0 lg:border-r border-white/20 bg-slate-900/60 hover:bg-blue-600/80 transition-all duration-500 ease-in-out hover:flex-[2.5] overflow-hidden cursor-pointer backdrop-blur-sm hover:backdrop-blur-md">
<div className="flex flex-col h-full p-8 lg:p-12">
<div className="mb-6">
<h3 className="text-2xl lg:text-3xl font-medium tracking-tight text-white leading-tight">
                                Mechanical<br/>Manufacturing
                            </h3>
<div className="w-16 h-0.5 bg-white mt-6 transition-all duration-500 group-hover:w-24"></div>
</div>
<div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[300px] transition-all duration-700 ease-out overflow-hidden delay-100">
<p className="text-white/90 text-lg leading-relaxed font-light">
                                Providing advanced precision components and durable materials for high-performance mechanical systems. Our solutions ensure longevity and efficiency in demanding manufacturing environments.
                            </p>
</div>
<div className="mt-auto pt-8 flex items-center justify-between opacity-80 group-hover:opacity-100 transition-opacity">
<span className="text-base text-white font-medium">Learn More</span>
<i className="w-6 h-6 text-white stroke-[1.5]" data-lucide="chevron-right-circle"></i>
</div>
</div>
</div>

<div className="group relative flex-1 min-h-[100px] lg:h-auto flex flex-col border-b lg:border-b-0 lg:border-r border-white/20 bg-slate-900/60 hover:bg-blue-600/80 transition-all duration-500 ease-in-out hover:flex-[2.5] overflow-hidden cursor-pointer backdrop-blur-sm hover:backdrop-blur-md">
<div className="flex flex-col h-full p-8 lg:p-12">
<div className="mb-6">
<h3 className="text-2xl lg:text-3xl font-medium tracking-tight text-white leading-tight">
                                Heavy metal<br/>components
                            </h3>
<div className="w-16 h-0.5 bg-white mt-6 transition-all duration-500 group-hover:w-24"></div>
</div>
<div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[300px] transition-all duration-700 ease-out overflow-hidden delay-100">
<p className="text-white/90 text-lg leading-relaxed font-light">
                                Specialized heavy-duty metal fabrication for industrial applications. From structural supports to intricate machinery parts, we deliver strength and reliability.
                            </p>
</div>
<div className="mt-auto pt-8 flex items-center justify-between opacity-80 group-hover:opacity-100 transition-opacity">
<span className="text-base text-white font-medium">Learn More</span>
<i className="w-6 h-6 text-white stroke-[1.5]" data-lucide="chevron-right-circle"></i>
</div>
</div>
</div>

<div className="group relative flex-1 min-h-[100px] lg:h-auto flex flex-col border-b lg:border-b-0 lg:border-r border-white/20 bg-slate-900/60 hover:bg-blue-600/80 transition-all duration-500 ease-in-out hover:flex-[2.5] overflow-hidden cursor-pointer backdrop-blur-sm hover:backdrop-blur-md">
<div className="flex flex-col h-full p-8 lg:p-12">
<div className="mb-6">
<h3 className="text-2xl lg:text-3xl font-medium tracking-tight text-white leading-tight">
                                Construction<br/>Machinery
                            </h3>
<div className="w-16 h-0.5 bg-white mt-6 transition-all duration-500 group-hover:w-24"></div>
</div>
<div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[400px] transition-all duration-700 ease-out overflow-hidden delay-100">
<p className="text-white/90 text-lg leading-relaxed font-light">
                                Sliders &amp; pulleys (e.g., truck crane boom support, cable op, aerial work platform) are key in construction machinery. Once metal, now polymer— 4-5x longer life, better metal boom/cable protection, long-term lubrication after one oiling. Also impact/vibration/fatigue resistance, low noise, light weight, easy assembly, wear resistance.
                            </p>
</div>
<div className="mt-auto pt-8 flex items-center justify-between opacity-80 group-hover:opacity-100 transition-opacity">
<span className="text-base text-white font-medium">Learn More</span>
<i className="w-6 h-6 text-white stroke-[1.5]" data-lucide="chevron-right-circle"></i>
</div>
</div>
</div>

<div className="group relative flex-1 min-h-[100px] lg:h-auto flex flex-col border-b lg:border-b-0 lg:border-r border-white/20 bg-slate-900/60 hover:bg-blue-600/80 transition-all duration-500 ease-in-out hover:flex-[2.5] overflow-hidden cursor-pointer backdrop-blur-sm hover:backdrop-blur-md">
<div className="flex flex-col h-full p-8 lg:p-12">
<div className="mb-6">
<h3 className="text-2xl lg:text-3xl font-medium tracking-tight text-white leading-tight">
                                Marine Equipment<br/>Accessories
                            </h3>
<div className="w-16 h-0.5 bg-white mt-6 transition-all duration-500 group-hover:w-24"></div>
</div>
<div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[300px] transition-all duration-700 ease-out overflow-hidden delay-100">
<p className="text-white/90 text-lg leading-relaxed font-light">
                                Corrosion-resistant components designed for the harsh marine environment. Our accessories ensure operational safety and durability for offshore and naval equipment.
                            </p>
</div>
<div className="mt-auto pt-8 flex items-center justify-between opacity-80 group-hover:opacity-100 transition-opacity">
<span className="text-base text-white font-medium">Learn More</span>
<i className="w-6 h-6 text-white stroke-[1.5]" data-lucide="chevron-right-circle"></i>
</div>
</div>
</div>

<div className="group relative flex-1 min-h-[100px] lg:h-auto flex flex-col border-b lg:border-b-0 lg:border-r-0 border-white/20 bg-slate-900/60 hover:bg-blue-600/80 transition-all duration-500 ease-in-out hover:flex-[2.5] overflow-hidden cursor-pointer backdrop-blur-sm hover:backdrop-blur-md">
<div className="flex flex-col h-full p-8 lg:p-12">
<div className="mb-6">
<h3 className="text-2xl lg:text-3xl font-medium tracking-tight text-white leading-tight">
                                Conveying Equipment<br/>Accessories
                            </h3>
<div className="w-16 h-0.5 bg-white mt-6 transition-all duration-500 group-hover:w-24"></div>
</div>
<div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[300px] transition-all duration-700 ease-out overflow-hidden delay-100">
<p className="text-white/90 text-lg leading-relaxed font-light">
                                High-efficiency rollers, belts, and drive components for modern logistics. We optimize material handling systems for speed, quiet operation, and low maintenance.
                            </p>
</div>
<div className="mt-auto pt-8 flex items-center justify-between opacity-80 group-hover:opacity-100 transition-opacity">
<span className="text-base text-white font-medium">Learn More</span>
<i className="w-6 h-6 text-white stroke-[1.5]" data-lucide="chevron-right-circle"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
<i className="absolute top-20 -left-20 w-[600px] h-[600px] text-slate-900" data-lucide="flower-2"></i>
<i className="absolute bottom-10 right-1/2 w-[400px] h-[400px] text-slate-900 rotate-45" data-lucide="sprout"></i>
</div>
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

<div className="space-y-8 max-w-2xl">
<h2 className="text-5xl md:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1]">
                            Treat customers <br/>
                            with integrity <br/>
                            Treat industry with <br/>
<span className="text-cyan-600">awe</span>
</h2>
<p className="text-lg text-slate-500 font-light leading-relaxed">
                            As the world's leading manufacturer of high-performance PV modules and advanced semiconductor solutions, Dolphingoo hopes to improve every aspect of energy efficiency by technology. We serve in solar, industrial automation, marine, and construction industries and want to help our customers solve practical problems.
                        </p>
<a className="inline-block px-8 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:border-cyan-500 hover:text-cyan-600 transition-colors duration-200" href="#">
                            About Dolphingoo
                        </a>
</div>

<div className="relative flex items-center justify-center lg:justify-end h-[500px]">

<div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full globe-sphere flex items-center justify-center group">

<div className="absolute inset-0 rounded-full overflow-hidden opacity-30">
<div className="absolute top-[20%] left-[20%] w-16 h-16 bg-slate-300 rounded-full blur-xl"></div>
<div className="absolute top-[40%] right-[30%] w-24 h-24 bg-slate-300 rounded-full blur-xl"></div>
<div className="absolute bottom-[30%] left-[40%] w-20 h-20 bg-slate-300 rounded-full blur-xl"></div>
</div>

<svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewbox="0 0 100 100">
<path className="text-cyan-800" d="M30,30 Q50,10 70,30 T80,60" fill="none" stroke="currentColor" strokeWidth="0.2"></path>
<path className="text-cyan-800" d="M20,50 Q40,40 60,50 T90,40" fill="none" stroke="currentColor" strokeWidth="0.2"></path>
</svg>

<div className="absolute top-[35%] right-[25%] flex items-center justify-center">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
</span>
</div>
<div className="absolute top-[25%] right-[15%] w-2 h-2 bg-slate-400 rounded-full opacity-50"></div>
<div className="absolute top-[55%] right-[35%] w-2 h-2 bg-slate-400 rounded-full opacity-50"></div>

<div className="absolute top-1/2 -right-4 md:-right-12 bg-white rounded-xl shadow-2xl p-6 w-72 transform -translate-y-1/2 border border-slate-100 animate-in fade-in slide-in-from-right-4 duration-700">
<div className="flex flex-col gap-4">
<div className="border-b border-slate-100 pb-3">
<h4 className="text-xl font-medium text-cyan-700">Vietnam Plant</h4>
</div>
<div className="space-y-3">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5 stroke-[1.5]" data-lucide="map-pin"></i>
<p className="text-xs text-slate-500 leading-snug">
                                                Nai Village, Taitao Commune, Langjiang County, Beijing Province, Vietnam
                                            </p>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-cyan-600 shrink-0 stroke-[1.5]" data-lucide="mail"></i>
<p className="text-xs text-slate-500">
                                                info@dolphingoo.com
                                            </p>
</div>
</div>

<div className="absolute top-6 right-0 w-1 h-8 bg-cyan-500 rounded-l-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">

<div className="group">
<div className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest mb-3">STAT.1</div>
<div className="w-full h-px bg-slate-200 group-hover:bg-cyan-200 transition-colors duration-300 mb-6"></div>
<div className="flex items-baseline gap-1 text-slate-900 mb-2">
<span className="text-5xl lg:text-6xl font-light tracking-tight">15</span>
<span className="text-2xl font-light text-cyan-600">+</span>
<span className="text-sm font-medium ml-1 text-slate-400">Years</span>
</div>
<p className="text-sm text-slate-500 font-medium">Production Synthesis Experience</p>
</div>

<div className="group">
<div className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest mb-3">STAT.2</div>
<div className="w-full h-px bg-slate-200 group-hover:bg-cyan-200 transition-colors duration-300 mb-6"></div>
<div className="flex items-baseline gap-1 text-slate-900 mb-2">
<span className="text-5xl lg:text-6xl font-light tracking-tight">30</span>
<span className="text-2xl font-light text-cyan-600">+</span>
<span className="text-sm font-medium ml-1 text-slate-400">GW</span>
</div>
<p className="text-sm text-slate-500 font-medium">PV Module Capacity</p>
</div>

<div className="group">
<div className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest mb-3">STAT.3</div>
<div className="w-full h-px bg-slate-200 group-hover:bg-cyan-200 transition-colors duration-300 mb-6"></div>
<div className="flex items-baseline gap-1 text-slate-900 mb-2">
<span className="text-5xl lg:text-6xl font-light tracking-tight">50</span>
<span className="text-2xl font-light text-cyan-600">+</span>
</div>
<p className="text-sm text-slate-500 font-medium">Countries And Regions</p>
</div>

<div className="group">
<div className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest mb-3">STAT.4</div>
<div className="w-full h-px bg-slate-200 group-hover:bg-cyan-200 transition-colors duration-300 mb-6"></div>
<div className="flex items-baseline gap-1 text-slate-900 mb-2">
<span className="text-5xl lg:text-6xl font-light tracking-tight">350</span>
<span className="text-2xl font-light text-cyan-600">+</span>
<span className="text-sm font-medium ml-1 text-slate-400">Million</span>
</div>
<p className="text-sm text-slate-500 font-medium">Annual Sales (USD)</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#EFF2F5] relative">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
<div className="flex items-center gap-5">
<div className="w-1.5 h-10 bg-blue-600 rounded-sm"></div>
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-none">
                            News Center
                        </h2>
</div>
<a className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-blue-600 bg-transparent border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200" href="#">
                        Explore More
                    </a>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="group relative rounded-3xl overflow-hidden shadow-xl min-h-[500px] cursor-pointer">
<img alt="Exhibition Booth" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-blue-700/95 via-blue-900/40 to-transparent"></div>

<div className="absolute bottom-0 left-0 p-8 sm:p-10 w-full flex flex-col items-start gap-4">
<div className="text-white/90 text-xl font-medium tracking-tight">2024-05-30</div>
<span className="inline-block px-3 py-1 border border-white/40 rounded text-xs font-medium text-white backdrop-blur-sm">Company News</span>
<div className="space-y-2 mt-2">
<h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                                    CHINT Global Shines at Light + Building Exhibition 20...
                                </h3>
<p className="text-white/80 text-sm sm:text-base line-clamp-2 leading-relaxed font-light">
                                    Frankfurt, Germany, March 3-8, 2024 - CHINT Global, the world's leading intelligent energy solution provider, demonstrated its cutting-edge innovations...
                                </p>
</div>
</div>
</div>

<div className="flex flex-col gap-5">

<div className="bg-white p-4 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-6 cursor-pointer group h-full">
<div className="w-full sm:w-56 h-36 rounded-2xl overflow-hidden shrink-0 relative">
<img alt="Office Building" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center py-1 pr-2 flex-1">
<h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                                    CHINT Astronergy's Thai Base Hits Milestone with...
                                </h4>
<p className="text-slate-500 text-sm mb-4 line-clamp-2 font-light">
                                    In May of last year, CHINT Astronergy's Thailand base celebrated the roll out of its first efficient module...
                                </p>
<div className="flex items-center gap-4 mt-auto">
<span className="text-[10px] font-semibold text-blue-600 border border-blue-600 px-2 py-0.5 rounded">Company News</span>
<span className="text-sm text-slate-500">2024-05-28</span>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-6 cursor-pointer group h-full">
<div className="w-full sm:w-56 h-36 rounded-2xl overflow-hidden shrink-0 relative">
<img alt="Conference Team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center py-1 pr-2 flex-1">
<h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                                    CHINT Achieves Dual Carbon Neutrality Certifica...
                                </h4>
<p className="text-slate-500 text-sm mb-4 line-clamp-2 font-light">
                                    CHINT has been awarded dual certifications for organizational carbon neutrality, marking a significant step...
                                </p>
<div className="flex items-center gap-4 mt-auto">
<span className="text-[10px] font-semibold text-blue-600 border border-blue-600 px-2 py-0.5 rounded">Company News</span>
<span className="text-sm text-slate-500">2024-05-28</span>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-6 cursor-pointer group h-full">
<div className="w-full sm:w-56 h-36 rounded-2xl overflow-hidden shrink-0 relative">
<img alt="Diversity Team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center py-1 pr-2 flex-1">
<h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                                    CHINT Embraces Diversity and the Spirit of Ram...
                                </h4>
<p className="text-slate-500 text-sm mb-4 line-clamp-2 font-light">
                                    CHINT Global, a renowned provider of smart energy solutions, demonstrated its commitment to cultural inclusivity...
                                </p>
<div className="flex items-center gap-4 mt-auto">
<span className="text-[10px] font-semibold text-blue-600 border border-blue-600 px-2 py-0.5 rounded">Company News</span>
<span className="text-sm text-slate-500">2024-05-28</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#00204d] text-white pt-20 pb-8 font-sans">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

<div>
<h3 className="text-lg font-semibold mb-6 text-white tracking-tight">Products</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Power Management</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Power Protection</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Driver</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Signal Chain</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Others</a></li>
</ul>
</div>

<div>
<h3 className="text-lg font-semibold mb-6 text-white tracking-tight">Applications</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Consumer Electronics</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Industrial</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Automotive Electronics</a></li>
</ul>
</div>

<div>
<h3 className="text-lg font-semibold mb-6 text-white tracking-tight">About Us</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Overview</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Culture</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Product News</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Company News</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Investor Relations</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">ESG</a></li>
</ul>
</div>

<div>
<h3 className="text-lg font-semibold mb-6 text-white tracking-tight">Quality &amp; Reliability</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Management System</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Reliability and Failure Analysis</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Social Responsibility</a></li>
</ul>
</div>

<div className="col-span-2 md:col-span-3 lg:col-span-1">
<h3 className="text-lg font-semibold mb-6 text-white tracking-tight">Contact Us</h3>
<ul className="space-y-4">
<li className="flex items-start">
<i className="w-5 h-5 mr-3 text-white shrink-0 stroke-[1.5]" data-lucide="phone"></i>
<span className="text-sm text-slate-300">+86-0510-85210118</span>
</li>
<li className="flex items-start">
<i className="w-5 h-5 mr-3 text-white shrink-0 stroke-[1.5]" data-lucide="mail"></i>
<span className="text-sm text-slate-300">marketing@dolphingoo.com</span>
</li>
<li className="flex items-start">
<i className="w-5 h-5 mr-3 text-white shrink-0 stroke-[1.5]" data-lucide="map-pin"></i>
<span className="text-sm text-slate-300 leading-relaxed">No.8, Xinhuihuan Road, Xinwu District, Wuxi City, Jiangsu, China</span>
</li>
</ul>
<div className="flex gap-4 mt-8">
<a className="bg-[#0056b3] hover:bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center transition-colors" href="#">
<i className="w-4 h-4 text-white fill-white stroke-none" data-lucide="facebook"></i>
</a>
<a className="bg-[#0056b3] hover:bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center transition-colors" href="#">
<i className="w-4 h-4 text-white fill-white stroke-none" data-lucide="youtube"></i>
</a>
<a className="bg-[#0056b3] hover:bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center transition-colors" href="#">
<i className="w-4 h-4 text-white fill-white stroke-none" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2026 Dolphingoo Micro-Electronics Co.,Ltd. All Rights Reserved.</p>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</footer>



    </>
  );
}
