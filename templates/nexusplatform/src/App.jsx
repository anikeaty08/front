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
      

<div className="fixed inset-0 z-[-1] bg-grid-pattern [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)] pointer-events-none"></div>

<nav className="fixed top-0 inset-x-0 h-16 md:h-20 bg-[#FCFBFA]/85 backdrop-blur-xl border-b border-stone-200/80 z-50 transition-all">
<div className="h-full w-full max-w-[90rem] mx-auto px-6 lg:px-12 flex items-center justify-between">
<div className="flex items-center gap-12 md:gap-14">
<a aria-label="Nexus Home" className="flex items-center gap-3 text-stone-900 group" href="#">
<div className="h-6 w-6 bg-stone-900 flex items-center justify-center text-[#FCFBFA] group-hover:bg-[#B25E34] transition-colors duration-200 ease-out shadow-sm">
<iconify-icon height="14" icon="solar:layers-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-normal tracking-widest uppercase">Nexus</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-light text-stone-500 hover:text-stone-900 transition-colors duration-200 ease-out" href="#">Platform</a>
<a className="text-sm font-light text-stone-500 hover:text-stone-900 transition-colors duration-200 ease-out" href="#">Solutions</a>
<a className="text-sm font-light text-stone-500 hover:text-stone-900 transition-colors duration-200 ease-out" href="#">Customers</a>
<a className="text-sm font-light text-stone-500 hover:text-stone-900 transition-colors duration-200 ease-out" href="#">Docs</a>
</div>
</div>
<div className="flex items-center gap-6 md:gap-8">
<a className="hidden sm:block text-sm font-light text-stone-500 hover:text-stone-900 transition-colors duration-200 ease-out" href="#">Sign In</a>
<a className="h-9 md:h-10 px-4 md:px-5 flex items-center justify-center bg-stone-900 text-[#FCFBFA] text-sm font-normal hover:bg-[#B25E34] hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] transition-all duration-200 ease-out shadow-[0_2px_8px_rgba(28,25,23,0.1)] hover:shadow-[0_6px_16px_rgba(178,94,52,0.25)]" href="#">
                    Start Deploying
                </a>
</div>
</div>
</nav>
<main className="flex-grow pt-16 md:pt-20">

<section className="relative pt-24 pb-20 md:pt-36 md:pb-32 px-6 lg:px-12 flex flex-col items-center text-center overflow-visible">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] md:w-[60rem] h-[30rem] md:h-[40rem] -z-10 pointer-events-none opacity-40 animate-float-ambient">
<svg className="w-full h-full" fill="none" viewbox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
<path className="animate-dash-flow" d="M100,500 C300,500 400,100 900,100" stroke="#d6d3d1" stroke-dasharray="4 4" strokeWidth="0.5"></path>
<path d="M200,600 C350,400 600,200 800,50" opacity="0.4" stroke="#B25E34" strokeWidth="0.5"></path>
<circle className="animate-pulse" cx="900" cy="100" fill="#B25E34" r="3"></circle>
<circle cx="800" cy="50" fill="#d6d3d1" r="2"></circle>
<circle cx="100" cy="500" fill="#d6d3d1" r="2"></circle>
<circle cx="450" cy="300" fill="#B25E34" opacity="0.03" r="40"></circle>
</svg>
</div>
<div className="inline-flex items-center gap-3 px-3 py-1.5 border border-stone-200/80 bg-white/70 backdrop-blur-md shadow-sm mb-10 md:mb-12 rounded-none hover:border-stone-300 transition-colors duration-200 ease-out group cursor-pointer">
<span className="relative flex h-1.5 w-1.5 ml-1">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B25E34] opacity-50" style={{animationDuration: '3s'}}></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#B25E34]"></span>
</span>
<span className="text-xs font-normal text-stone-600 uppercase tracking-widest group-hover:text-stone-900 transition-colors duration-200">Nexus 3.0 is now available</span>
<div className="w-[1px] h-3 bg-stone-300 mx-1 hidden sm:block"></div>
<a className="hidden sm:flex text-xs font-normal text-[#B25E34] group-hover:text-[#9A4E2B] transition-colors duration-200 items-center gap-1 pr-1" href="#">
                    Read the release notes <iconify-icon className="group-hover:translate-x-0.5 transition-transform duration-200 ease-out" icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-stone-900 max-w-[64rem] mx-auto leading-tight md:leading-[0.95] mb-6 md:mb-8 text-balance">
                Modern infrastructure.<br/>
<span className="text-stone-400">Zero complexity.</span>
</h1>
<p className="text-base md:text-lg text-stone-500 max-w-2xl mx-auto font-light leading-relaxed text-balance px-4">
                The unified platform for engineering teams to deploy globally, monitor in real-time, and scale with absolute reliability.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 md:mt-12 w-full max-w-sm sm:max-w-none px-6 sm:px-0 relative z-10">
<button className="h-11 md:h-12 px-8 bg-stone-900 text-[#FCFBFA] text-sm font-normal hover:bg-[#B25E34] hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] transition-all duration-200 ease-out flex items-center justify-center gap-2.5 w-full sm:w-auto shadow-[0_4px_14px_rgba(28,25,23,0.15)] hover:shadow-[0_8px_24px_rgba(178,94,52,0.25)] group">
                    Start for free
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform duration-200 ease-out" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="h-11 md:h-12 px-8 border border-stone-200/80 bg-white/50 backdrop-blur-sm text-stone-900 text-sm font-normal hover:border-stone-300 hover:bg-white hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] transition-all duration-200 ease-out flex items-center justify-center w-full sm:w-auto shadow-sm">
                    View Documentation
                </button>
</div>
</section>

<section className="relative px-4 sm:px-6 lg:px-12 pb-24 md:pb-32 flex justify-center w-full max-w-[90rem] mx-auto">

<div className="absolute inset-0 top-1/4 bg-[radial-gradient(ellipse_at_center,rgba(178,94,52,0.08)_0%,transparent_60%)] blur-3xl -z-10 pointer-events-none"></div>

<div className="w-full max-w-6xl bg-[#1C1917]/95 backdrop-blur-xl p-1.5 md:p-2 shadow-[0_30px_80px_-20px_rgba(28,25,23,0.3)] md:shadow-[0_40px_100px_-20px_rgba(28,25,23,0.25)] ring-1 ring-stone-800/50 relative group perspective-1000">
<div className="bg-[#151312] overflow-hidden flex flex-col w-full aspect-[4/3] md:aspect-[21/10] border border-stone-800 relative z-10 transition-colors duration-500 ease-out group-hover:border-stone-700">

<div className="h-10 md:h-12 border-b border-stone-800/80 bg-[#110F0E] flex items-center px-3 md:px-4 justify-between select-none group/header">
<div className="flex items-center gap-3 md:gap-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 bg-stone-700/50 hover:bg-stone-500 transition-colors duration-200 ease-out cursor-default"></div>
<div className="w-2.5 h-2.5 bg-stone-700/50 hover:bg-stone-500 transition-colors duration-200 ease-out cursor-default"></div>
<div className="w-2.5 h-2.5 bg-stone-700/50 hover:bg-[#B25E34] transition-colors duration-200 ease-out cursor-default"></div>
</div>
<div className="w-[1px] h-4 bg-stone-800 hidden sm:block"></div>
<div className="flex items-center gap-2 text-stone-500 group-hover/header:text-stone-400 transition-colors duration-300">
<iconify-icon icon="solar:server-linear" width="14"></iconify-icon>
<span className="text-xs font-mono-custom tracking-tight truncate max-w-[120px] sm:max-w-none">eu-central-1 / prod</span>
</div>
</div>
<div className="flex items-center gap-4 text-stone-500">
<span className="text-[11px] font-mono-custom text-[#B25E34] flex items-center gap-2 bg-[#B25E34]/10 px-2 py-1 uppercase tracking-widest cursor-default">
<span className="w-1.5 h-1.5 bg-[#B25E34] rounded-full animate-[ping_3s_ease-in-out_infinite] opacity-75 absolute"></span>
<span className="w-1.5 h-1.5 bg-[#B25E34] rounded-full"></span>
<span className="hidden sm:inline">Healthy</span>
</span>
</div>
</div>

<div className="flex flex-1 overflow-hidden relative">

<div className="w-12 md:w-56 border-r border-stone-800/80 bg-[#151312] flex flex-col py-4">
<div className="px-4 mb-6 hidden md:block">
<span className="text-xs font-normal tracking-widest text-stone-600 uppercase">Observability</span>
</div>
<div className="flex flex-col gap-1 px-1 md:px-3">
<div className="h-8 md:h-9 w-full flex items-center justify-center md:justify-start gap-3 text-[#FCFBFA] bg-stone-800/50 md:px-3 cursor-pointer">
<iconify-icon className="text-[#B25E34]" icon="solar:chart-square-linear" width="16"></iconify-icon>
<span className="text-xs font-normal hidden md:block">Telemetry</span>
</div>
<div className="h-8 md:h-9 w-full flex items-center justify-center md:justify-start gap-3 text-stone-500 hover:text-stone-300 hover:bg-stone-800/20 transition-colors duration-200 ease-out md:px-3 cursor-pointer rounded-sm">
<iconify-icon icon="solar:routing-2-linear" width="16"></iconify-icon>
<span className="text-xs font-light hidden md:block">Edge Routing</span>
</div>
<div className="h-8 md:h-9 w-full flex items-center justify-center md:justify-start gap-3 text-stone-500 hover:text-stone-300 hover:bg-stone-800/20 transition-colors duration-200 ease-out md:px-3 cursor-pointer rounded-sm">
<iconify-icon icon="solar:database-linear" width="16"></iconify-icon>
<span className="text-xs font-light hidden md:block">Data Stores</span>
</div>
</div>
</div>

<div className="flex-1 bg-grid-dark relative flex flex-col">
<div className="absolute inset-0 bg-gradient-to-b from-[#151312] via-transparent to-[#151312] pointer-events-none z-0"></div>
<div className="p-4 md:p-8 lg:p-10 flex flex-col gap-6 md:gap-8 relative z-10 flex-1">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div className="flex flex-col gap-1.5">
<span className="text-xs font-normal tracking-widest text-stone-500 uppercase">Total Requests</span>
<div className="text-3xl md:text-5xl font-light tracking-tight text-[#FCFBFA] flex items-baseline gap-2.5">
                                            2.48B <span className="text-xs md:text-sm font-mono-custom text-[#B25E34] cursor-default">+14.2%</span>
</div>
</div>
<div className="flex border border-stone-800 bg-[#110F0E] self-start sm:self-auto shadow-sm">
<div className="px-3 md:px-4 py-1.5 text-xs font-mono-custom text-stone-500 hover:text-stone-300 hover:bg-stone-800/30 transition-colors duration-200 ease-out cursor-pointer border-r border-stone-800">1h</div>
<div className="px-3 md:px-4 py-1.5 text-xs font-mono-custom text-[#FCFBFA] bg-stone-800/50 cursor-pointer border-r border-stone-800">24h</div>
<div className="px-3 md:px-4 py-1.5 text-xs font-mono-custom text-stone-500 hover:text-stone-300 hover:bg-stone-800/30 transition-colors duration-200 ease-out cursor-pointer">7d</div>
</div>
</div>

<div className="flex-1 w-full border border-stone-800 bg-[#110F0E]/80 backdrop-blur-sm relative overflow-hidden group/chart transition-colors duration-500 hover:border-stone-700">
<div className="absolute left-2 md:left-4 top-4 bottom-4 w-6 md:w-8 flex flex-col justify-between text-[10px] md:text-xs font-mono-custom text-stone-600 z-20">
<span>5B</span><span>4B</span><span>3B</span><span>2B</span><span>1B</span>
</div>
<div className="absolute left-12 md:left-16 right-4 bottom-2 flex justify-between text-[10px] md:text-xs font-mono-custom text-stone-600 z-20">
<span>00:00</span><span className="hidden sm:inline">06:00</span><span>12:00</span><span className="hidden sm:inline">18:00</span><span className="text-stone-400 group-hover/chart:text-[#B25E34] transition-colors duration-300">NOW</span>
</div>
<svg className="absolute inset-0 w-full h-full pl-10 md:pl-12 pb-6 pt-6 pr-2 md:pr-4 z-10" preserveaspectratio="none" viewbox="0 0 1000 300">
<path d="M0,0 L1000,0 M0,75 L1000,75 M0,150 L1000,150 M0,225 L1000,225 M0,300 L1000,300" stroke="#292524" stroke-dasharray="2 4" strokeWidth="1"></path>
<path className="drop-shadow-[0_0_8px_rgba(178,94,52,0.3)] group-hover/chart:drop-shadow-[0_0_12px_rgba(178,94,52,0.5)] transition-all duration-500" d="M0,250 C100,240 150,180 250,190 C350,200 400,120 500,140 C600,160 650,80 750,90 C850,100 900,40 1000,30" fill="none" stroke="#B25E34" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path className="animate-pulse-glow group-hover/chart:opacity-50 transition-opacity duration-500" d="M0,300 L0,250 C100,240 150,180 250,190 C350,200 400,120 500,140 C600,160 650,80 750,90 C850,100 900,40 1000,30 L1000,300 Z" fill="url(#chart-gradient)"></path>
<circle className="transition-all duration-300 ease-out shadow-[0_0_10px_rgba(178,94,52,0.8)] group-hover/chart:shadow-[0_0_12px_rgba(178,94,52,1)]" cx="1000" cy="30" fill="#FCFBFA" r="3" stroke="#B25E34" strokeWidth="2"></circle>
<defs>
<lineargradient id="chart-gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#B25E34"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
</div>
</div>
</div>

<div className="absolute right-0 sm:-right-4 md:-right-8 -bottom-8 md:-bottom-12 w-[calc(100%-2rem)] max-w-[16rem] sm:max-w-xs md:max-w-[22rem] bg-[#110F0E] border border-stone-700 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] z-30 transition-all duration-300 ease-out hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] hover:border-stone-600 flex flex-col group/terminal">
<div className="h-8 border-b border-stone-800 bg-[#1C1917] flex items-center px-3 justify-between">
<span className="text-[10px] font-mono-custom text-stone-500 uppercase tracking-widest font-normal group-hover/terminal:text-stone-400 transition-colors duration-300">Deploy Console</span>
<iconify-icon className="text-stone-500 hover:text-stone-300 cursor-pointer transition-colors duration-200" icon="solar:minimize-square-linear" width="12"></iconify-icon>
</div>
<div className="p-4 md:p-5 flex flex-col gap-2 font-mono-custom text-xs leading-relaxed font-light">
<div className="text-stone-400 flex items-center gap-1.5">
<span className="text-[#B25E34]">❯</span> nexus deploy --production
                        </div>
<div className="text-stone-500">Packaging application...</div>
<div className="text-stone-500">Provisioning edge nodes <span className="text-stone-600">[12ms]</span></div>
<div className="text-[#FCFBFA] flex items-center gap-2 mt-1">
<span className="text-[#B25E34] scale-110">✔</span> Deployed to 38 edge regions
                        </div>
<div className="text-stone-600 mt-2 truncate flex items-center gap-1.5">
                            https://api.nexus-core.dev/v1 <span className="w-1.5 h-3.5 bg-stone-500 inline-block animate-blink"></span>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-stone-200/80 bg-white py-12 md:py-16 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none w-full max-w-[90rem] mx-auto hidden md:block"></div>
<div className="max-w-[90rem] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative z-0">
<p className="text-[11px] font-normal text-stone-500 uppercase tracking-widest text-center md:text-left w-full md:w-auto shrink-0">Trusted by engineering teams worldwide</p>
<div className="flex flex-wrap w-full lg:w-auto justify-center md:justify-end gap-8 sm:gap-12 md:gap-16 items-center text-stone-400">
<span className="text-lg md:text-xl font-normal tracking-tight flex items-center gap-2 transition-colors duration-300 ease-out cursor-default grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:text-stone-900">
<iconify-icon icon="solar:record-circle-linear" width="22"></iconify-icon> Acme
                    </span>
<span className="text-lg md:text-xl font-normal tracking-tight flex items-center gap-2 transition-colors duration-300 ease-out cursor-default grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:text-stone-900">
<iconify-icon icon="solar:square-bottom-down-linear" width="22"></iconify-icon> Vanguard
                    </span>
<span className="text-lg md:text-xl font-normal tracking-tight flex items-center gap-2 transition-colors duration-300 ease-out cursor-default grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:text-stone-900">
<iconify-icon icon="solar:triangle-linear" width="22"></iconify-icon> Polymer
                    </span>
<span className="hidden sm:flex text-lg md:text-xl font-normal tracking-tight items-center gap-2 transition-colors duration-300 ease-out cursor-default grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:text-stone-900">
<iconify-icon icon="solar:hexagon-linear" width="22"></iconify-icon> Lumina
                    </span>
<span className="hidden lg:flex text-lg md:text-xl font-normal tracking-tight items-center gap-2 transition-colors duration-300 ease-out cursor-default grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:text-stone-900">
<iconify-icon icon="solar:asteroid-linear" width="22"></iconify-icon> Oasis
                    </span>
</div>
</div>
</section>

<section className="py-24 md:py-36 px-6 lg:px-12 max-w-[90rem] mx-auto relative">
<div className="mb-16 md:mb-24">
<div className="w-full h-[1px] bg-stone-200/80 mb-10 md:mb-12 relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-[1px] bg-[#B25E34]"></div>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-stone-900 mb-6">
                            Everything you need to ship faster.
                        </h2>
<p className="text-base md:text-lg text-stone-500 font-light leading-relaxed">
                            A complete, deeply integrated toolkit designed for reliability, performance, and an exceptional developer experience. No manual provisioning required.
                        </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-normal text-stone-900 hover:text-[#B25E34] transition-colors duration-200 pb-1 border-b border-transparent hover:border-[#B25E34] group" href="#">
                        Explore all features <iconify-icon className="group-hover:translate-x-0.5 transition-transform duration-200 ease-out" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="group border border-stone-200/80 bg-white p-8 md:p-10 hover:border-stone-300 transition-colors duration-300 ease-out shadow-sm hover:shadow-md cursor-default">
<div className="w-12 h-12 bg-[#FCFBFA] border border-stone-200/80 flex items-center justify-center text-stone-900 mb-8 group-hover:bg-stone-900 group-hover:text-[#FCFBFA] transition-colors duration-300 ease-out shadow-sm">
<iconify-icon icon="solar:global-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-stone-900 mb-4">Global Edge Network</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed mb-6">
                        Deploy your applications seamlessly across 42 regions worldwide. Route user traffic to the closest node for ultra-low latency.
                    </p>
<ul className="flex flex-col gap-3 text-sm text-stone-600 font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-[#B25E34]" icon="solar:check-circle-linear"></iconify-icon> Anycast routing protocol</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#B25E34]" icon="solar:check-circle-linear"></iconify-icon> Automatic failover</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#B25E34]" icon="solar:check-circle-linear"></iconify-icon> Edge caching included</li>
</ul>
</div>

<div className="group border border-stone-200/80 bg-white p-8 md:p-10 hover:border-stone-300 transition-colors duration-300 ease-out shadow-sm hover:shadow-md cursor-default">
<div className="w-12 h-12 bg-[#FCFBFA] border border-stone-200/80 flex items-center justify-center text-stone-900 mb-8 group-hover:bg-stone-900 group-hover:text-[#FCFBFA] transition-colors duration-300 ease-out shadow-sm">
<iconify-icon icon="solar:pulse-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-stone-900 mb-4">Real-time Telemetry</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed mb-6">
                        Gain complete visibility into your system's performance with granular, real-time metrics, distributed tracing, and logging.
                    </p>
<ul className="flex flex-col gap-3 text-sm text-stone-600 font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-[#B25E34]" icon="solar:check-circle-linear"></iconify-icon> 10ms sampling precision</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#B25E34]" icon="solar:check-circle-linear"></iconify-icon> Custom alert thresholds</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#B25E34]" icon="solar:check-circle-linear"></iconify-icon> Long-term data retention</li>
</ul>
</div>

<div className="group border border-stone-200/80 bg-white p-8 md:p-10 hover:border-stone-300 transition-colors duration-300 ease-out shadow-sm hover:shadow-md cursor-default">
<div className="w-12 h-12 bg-[#FCFBFA] border border-stone-200/80 flex items-center justify-center text-stone-900 mb-8 group-hover:bg-stone-900 group-hover:text-[#FCFBFA] transition-colors duration-300 ease-out shadow-sm">
<iconify-icon icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-stone-900 mb-4">Automated CI/CD</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed mb-6">
                        Integrate seamlessly with your existing Git repositories. Every push automatically triggers a preview environment.
                    </p>
<ul className="flex flex-col gap-3 text-sm text-stone-600 font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-[#B25E34]" icon="solar:check-circle-linear"></iconify-icon> Zero-downtime deployments</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#B25E34]" icon="solar:check-circle-linear"></iconify-icon> Isolated preview URLs</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#B25E34]" icon="solar:check-circle-linear"></iconify-icon> Instant rollback capabilities</li>
</ul>
</div>
</div>
</section>

<section className="border-t border-stone-200/80 bg-[#FCFBFA] py-24 md:py-32 relative">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

<div className="lg:col-span-6 flex flex-col items-start group cursor-default">
<iconify-icon className="text-[#B25E34] mb-8 opacity-90" icon="solar:quote-left-linear" width="32"></iconify-icon>
<h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-stone-900 mb-10 leading-[1.3] text-balance">
                            "Nexus fundamentally changed our infrastructure pipeline. We transitioned from high-risk weekly deployments to shipping 50+ times a day with zero friction and complete observability."
                        </h2>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-stone-200 border border-stone-300 overflow-hidden flex items-center justify-center transition-colors duration-300 ease-out shadow-sm">
<iconify-icon className="text-stone-400 group-hover:text-stone-500 transition-colors duration-300" icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-normal text-stone-900 tracking-tight">Sarah Chen</span>
<span className="text-sm font-light text-stone-500">VP of Engineering, Vanguard</span>
</div>
</div>
</div>

<div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-px bg-stone-200/80 border border-stone-200/80 overflow-hidden shadow-sm">
<div className="bg-[#FCFBFA] p-8 md:p-10 flex flex-col justify-center hover:bg-white hover:z-10 relative transition-colors duration-300 ease-out cursor-default">
<div className="text-4xl md:text-5xl font-normal tracking-tight text-stone-900 mb-3">99.99%</div>
<div className="text-sm font-light text-stone-500 leading-relaxed">Global SLA maintained consistently across all enterprise edge nodes.</div>
</div>
<div className="bg-[#FCFBFA] p-8 md:p-10 flex flex-col justify-center hover:bg-white hover:z-10 relative transition-colors duration-300 ease-out cursor-default">
<div className="text-4xl md:text-5xl font-normal tracking-tight text-stone-900 mb-3">14ms</div>
<div className="text-sm font-light text-stone-500 leading-relaxed">Average p90 latency measured for cached edge responses worldwide.</div>
</div>
<div className="bg-[#FCFBFA] p-8 md:p-10 flex flex-col justify-center hover:bg-white hover:z-10 relative transition-colors duration-300 ease-out cursor-default">
<div className="text-4xl md:text-5xl font-normal tracking-tight text-stone-900 mb-3">2.4B+</div>
<div className="text-sm font-light text-stone-500 leading-relaxed">Daily API requests processed and routed automatically at scale.</div>
</div>
<div className="bg-[#FCFBFA] p-8 md:p-10 flex flex-col justify-center hover:bg-white hover:z-10 relative transition-colors duration-300 ease-out cursor-default">
<div className="text-4xl md:text-5xl font-normal tracking-tight text-stone-900 mb-3">0</div>
<div className="text-sm font-light text-stone-500 leading-relaxed">Zero-downtime node migrations and updates performed this quarter.</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#1C1917] text-[#FCFBFA] relative overflow-hidden">
<div className="absolute inset-0 z-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] opacity-30 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
<div className="w-12 h-12 bg-[#110F0E] border border-stone-800 flex items-center justify-center text-[#B25E34] mb-8 shadow-[0_8px_16px_rgba(0,0,0,0.4)] hover:-translate-y-[1px] transition-transform duration-200 ease-out cursor-default">
<iconify-icon icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
                    Ready to scale?
                </h2>
<p className="text-base md:text-lg text-stone-400 font-light mb-10 max-w-xl leading-relaxed">
                    Join thousands of high-performance engineering teams building the future of the internet on Nexus.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
<button className="h-11 md:h-12 px-8 bg-[#FCFBFA] text-stone-900 text-sm font-normal hover:bg-[#B25E34] hover:text-[#FCFBFA] hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] transition-all duration-200 ease-out w-full sm:w-auto shadow-sm hover:shadow-[0_8px_24px_rgba(178,94,52,0.3)]">
                        Start Deploying
                    </button>
<button className="h-11 md:h-12 px-8 border border-stone-700 bg-transparent text-[#FCFBFA] text-sm font-normal hover:border-stone-500 hover:bg-stone-800 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] transition-all duration-200 ease-out w-full sm:w-auto">
                        Contact Sales
                    </button>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-stone-200/80 pt-16 pb-8 px-6 lg:px-12">
<div className="max-w-[90rem] mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
<div className="col-span-2 lg:col-span-2 flex flex-col items-start pr-4">
<a aria-label="Nexus Home" className="flex items-center gap-3 text-stone-900 mb-6 group" href="#">
<div className="h-6 w-6 bg-stone-900 flex items-center justify-center text-[#FCFBFA] group-hover:bg-[#B25E34] transition-colors duration-200 ease-out">
<iconify-icon height="14" icon="solar:layers-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-normal tracking-widest uppercase">Nexus</span>
</a>
<p className="text-sm text-stone-500 font-light leading-relaxed max-w-xs mb-8">
                        The unified platform for engineering teams to deploy, monitor, and scale applications globally with absolute confidence.
                    </p>
<div className="flex gap-4 text-stone-400">
<a className="hover:text-stone-900 transition-colors duration-200 ease-out" href="#"><iconify-icon icon="solar:github-linear" width="20"></iconify-icon></a>
<a className="hover:text-stone-900 transition-colors duration-200 ease-out" href="#"><iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon></a>
<a className="hover:text-stone-900 transition-colors duration-200 ease-out" href="#"><iconify-icon icon="solar:figma-linear" width="20"></iconify-icon></a>
</div>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-[11px] font-normal tracking-widest text-stone-900 uppercase mb-2">Product</h4>
<a className="text-sm text-stone-500 hover:text-stone-900 font-light transition-colors duration-200 ease-out" href="#">Infrastructure</a>
<a className="text-sm text-stone-500 hover:text-stone-900 font-light transition-colors duration-200 ease-out" href="#">Edge Network</a>
<a className="text-sm text-stone-500 hover:text-stone-900 font-light transition-colors duration-200 ease-out" href="#">Databases</a>
<a className="text-sm text-stone-500 hover:text-stone-900 font-light transition-colors duration-200 ease-out" href="#">Observability</a>
<a className="text-sm text-stone-500 hover:text-stone-900 font-light transition-colors duration-200 ease-out flex items-center gap-2 group" href="#">Changelog <span className="px-1.5 py-[1px] bg-[#B25E34]/10 text-[#B25E34] text-[10px] font-normal uppercase tracking-widest group-hover:bg-[#B25E34] group-hover:text-white transition-colors duration-200">New</span></a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-[11px] font-normal tracking-widest text-stone-900 uppercase mb-2">Resources</h4>
<a className="text-sm text-stone-500 hover:text-stone-900 font-light transition-colors duration-200 ease-out" href="#">Documentation</a>
<a className="text-sm text-stone-500 hover:text-stone-900 font-light transition-colors duration-200 ease-out" href="#">API Reference</a>
<a className="text-sm text-stone-500 hover:text-stone-900 font-light transition-colors duration-200 ease-out" href="#">Guides</a>
<a className="text-sm text-stone-500 hover:text-stone-900 font-light transition-colors duration-200 ease-out" href="#">Help Center</a>
<a className="text-sm text-stone-500 hover:text-stone-900 font-light transition-colors duration-200 ease-out" href="#">Community</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-[11px] font-normal tracking-widest text-stone-900 uppercase mb-2">Company</h4>
<a className="text-sm text-stone-500 hover:text-stone-900 font-light transition-colors duration-200 ease-out" href="#">About</a>
<a className="text-sm text-stone-500 hover:text-stone-900 font-light transition-colors duration-200 ease-out" href="#">Blog</a>
<a className="text-sm text-stone-500 hover:text-stone-900 font-light transition-colors duration-200 ease-out" href="#">Careers</a>
<a className="text-sm text-stone-500 hover:text-stone-900 font-light transition-colors duration-200 ease-out" href="#">Partners</a>
<a className="text-sm text-stone-500 hover:text-stone-900 font-light transition-colors duration-200 ease-out" href="#">Contact</a>
</div>
</div>
<div className="pt-8 border-t border-stone-200/80 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-xs text-stone-400 font-light">
                    © 2026 Nexus Platform Inc. All rights reserved.
                </div>
<div className="flex gap-6 text-xs text-stone-400 font-light">
<a className="hover:text-stone-900 transition-colors duration-200 ease-out" href="#">Privacy Policy</a>
<a className="hover:text-stone-900 transition-colors duration-200 ease-out" href="#">Terms of Service</a>
<a className="hover:text-stone-900 transition-colors duration-200 ease-out" href="#">System Status</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
