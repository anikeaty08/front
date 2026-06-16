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



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.0/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="12" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 12%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 12%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div data-us-project="G2OBjVkMrg8juHghbIqJ" style={{width: '1440px', height: '900px'}}></div>

</div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none flex justify-center px-6">
<div className="w-full max-w-7xl h-full grid grid-cols-4 border-x border-white/5">
<div className="border-r border-white/5 h-full hidden md:block transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="0"></div>
<div className="border-r border-white/5 h-full transition-all duration-700 ease-out" data-delay="100"></div>
<div className="border-r border-white/5 h-full hidden md:block transition-all duration-700 ease-out" data-delay="200"></div>
</div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 noise-bg"></div>
<div className="absolute top-[-10%] left-[20%] w-[30vw] h-[30vw] bg-red-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-neutral-800/20 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
<div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between gap-8 md:gap-12 transition-all duration-300 hover:border-white/20 duration-700 ease-out opacity-0 translate-y-8 blur-sm">
<a className="font-serif text-xl italic tracking-tight hover:opacity-80 transition-opacity" href="#">
          Vanguard.
        </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors tracking-wide uppercase" href="#projects">
            Projects
          </a>
<a className="hover:text-white transition-colors uppercase text-xs font-medium text-neutral-400 tracking-wide" href="#capabilities">
            Services
          </a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors tracking-wide uppercase" href="#firm">
            Agency
          </a>
</div>
<a className="group flex items-center gap-2 text-xs font-medium bg-white text-black px-4 py-1.5 rounded-full hover:bg-neutral-200 transition-colors" href="#inquire">
          Inquire
          <svg className="lucide lucide-arrow-right group-hover:translate-x-0.5 transition-transform text-neutral-950 w-[24px] h-[12px] text-white" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '12px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden z-10 pt-32 pr-6 pb-20 pl-6 relative items-center justify-center" id="hero-section">
<div className="flex flex-col transition-all duration-1000 text-center opacity-100 max-w-7xl mr-auto ml-auto translate-y-0 items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-neutral-400 mb-8 animate-float transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="0">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Accepting Projects Q1 2025
        </div>

<h1 className="md:text-8xl lg:text-9xl leading-[0.9] bg-clip-text text-6xl font-normal text-transparent tracking-tight bg-gradient-to-b from-white via-white to-neutral-600 mb-8 transition-all duration-700 ease-out" data-delay="100">
          Crafting digital
          <br/>
<span className="font-light italic text-neutral-500">excellence</span>
</h1>

<p className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed mb-12 font-light transition-all duration-700 ease-out" data-delay="200">
          We partner with ambitious brands to design, build, and scale
          world-class digital products that drive measurable business impact.
        </p>

<div className="relative w-full max-w-full aspect-[16/10] md:aspect-video mt-12 group perspective-midrange transition-all duration-700 ease-out" data-delay="300">

<div className="absolute inset-0 bg-gradient-to-tr from-red-500/30 via-red-500/20 to-red-900/30 blur-[90px] opacity-60 group-hover:opacity-80 transition-opacity duration-1000"></div>

<div className="overflow-hidden origin-bottom transform-style-preserve-3d bg-[#161618] w-full h-full rounded-xl relative shadow-2xl rotate-x-45 will-change-transform" id="hero-dashboard" style={{position: 'relative', -BorderGradient: 'linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '12px', -TwScaleX: '0.9', -TwScaleY: '0.9', -TwRotateX: '45deg'}}>

<div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center justify-between px-4 relative z-20">
<div className="flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-[#FF5F57] transition-colors duration-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-[#FEBC2E] transition-colors duration-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-[#28C840] transition-colors duration-300"></div>
</div>

<div className="flex items-center gap-2 px-3 py-1 rounded bg-black/20 border border-white/5 text-[10px] text-neutral-500 font-mono transition-colors group-hover:border-white/10 group-hover:text-neutral-400">
<svg className="opacity-50" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
<span>vanguard.agency/analytics</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-5 h-5 rounded-full bg-indigo-500 border border-[#161618] flex items-center justify-center text-[8px] text-white font-medium shadow-sm">
                    JD
                  </div>
<div className="w-5 h-5 rounded-full bg-emerald-500 border border-[#161618] flex items-center justify-center text-[8px] text-white font-medium shadow-sm">
                    AL
                  </div>
</div>
<div className="h-3 w-px bg-white/10"></div>
<svg className="text-neutral-600 hover:text-white transition-colors cursor-pointer" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</div>
</div>

<div className="flex h-[calc(100%-40px)] relative">
<div className="absolute inset-0 noise-bg opacity-10 pointer-events-none"></div>

<div className="w-14 border-r border-white/5 flex flex-col items-center py-6 gap-6 bg-white/[0.01] z-10 hidden sm:flex">
<div className="p-2 rounded-lg bg-white/10 text-white cursor-pointer shadow-[0_0_10px_rgba(255,255,255,0.1)]">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
</div>
<div className="p-2 rounded-lg text-neutral-600 hover:text-neutral-300 hover:bg-white/5 transition-all cursor-pointer">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<div className="p-2 rounded-lg text-neutral-600 hover:text-neutral-300 hover:bg-white/5 transition-all cursor-pointer">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</div>
<div className="mt-auto p-2 rounded-lg text-neutral-600 hover:text-neutral-300 hover:bg-white/5 transition-all cursor-pointer">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
</div>

<div className="flex-1 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto z-10 scrollbar-none pt-6 pr-6 pb-6 pl-6 relative gap-x-6 gap-y-6">

<div className="col-span-1 lg:col-span-2 space-y-6">

<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group/metric">
<div className="text-[10px] text-neutral-500 font-mono mb-2 uppercase tracking-wider">
                        LIVE_INSIGHTS
                      </div>
<div className="flex items-end justify-between">
<span className="text-2xl text-white font-medium tracking-tight">
                          1.2M
                        </span>
<span className="text-[10px] text-emerald-400 font-mono mb-1 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                          ▲ 12%
                        </span>
</div>

<div className="flex items-end gap-1 h-6 mt-3">
<div className="w-full bg-white/5 rounded-sm h-[40%] group-hover/metric:bg-emerald-500/40 transition-colors duration-500"></div>
<div className="w-full bg-white/5 rounded-sm h-[70%] group-hover/metric:bg-emerald-500/40 transition-colors duration-500 delay-75"></div>
<div className="w-full bg-white/5 rounded-sm h-[50%] group-hover/metric:bg-emerald-500/40 transition-colors duration-500 delay-100"></div>
<div className="w-full bg-emerald-500 rounded-sm h-[90%] shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
<div className="w-full bg-white/5 rounded-sm h-[60%] group-hover/metric:bg-emerald-500/40 transition-colors duration-500 delay-150"></div>
</div>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group/metric">
<div className="text-[10px] text-neutral-500 font-mono mb-2 uppercase tracking-wider">
                        Conversion Rate
                      </div>
<div className="flex items-end justify-between">
<span className="text-2xl text-white font-medium tracking-tight">
                          4.8%
                        </span>
<span className="text-[10px] text-emerald-400 font-mono mb-1 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                          +1.2%
                        </span>
</div>

<div className="mt-4 h-5 w-full flex items-center relative">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent translate-x-[-100%] group-hover/metric:translate-x-[100%] transition-transform duration-1000"></div>
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0 10 L10 12 L20 8 L30 14 L40 10 L50 16 L60 5 L70 12 L80 10 L90 8 L100 10" fill="none" stroke="#34d399" stroke-opacity="0.5" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<circle className="animate-pulse" cx="100" cy="10" fill="#34d399" r="2"></circle>
</svg>
</div>
</div>
<div className="hidden sm:block p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group/metric">
<div className="text-[10px] text-neutral-500 font-mono mb-2 uppercase tracking-wider">
                        Client Satisfaction
                      </div>
<div className="flex items-end justify-between">
<span className="text-2xl text-white font-medium tracking-tight">
                          100%
                        </span>
</div>
<div className="w-full bg-white/10 h-1 mt-6 rounded-full overflow-hidden">
<div className="w-[99%] h-full bg-emerald-500 relative">
<div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]"></div>
</div>
</div>
</div>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] relative overflow-hidden group/chart h-[240px] flex flex-col">
<div className="flex justify-between items-center mb-6 relative z-10">
<div className="text-sm font-medium text-neutral-200">
                        Revenue Growth
                      </div>
<div className="flex gap-1 bg-black/20 p-0.5 rounded-lg border border-white/5">
<span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white border border-white/5 shadow-sm">
                          1H
                        </span>
<span className="px-2 py-0.5 rounded text-[10px] text-neutral-500 hover:text-white cursor-pointer transition-colors">
                          24H
                        </span>
<span className="px-2 py-0.5 rounded text-[10px] text-neutral-500 hover:text-white cursor-pointer transition-colors">
                          7D
                        </span>
</div>
</div>

<div className="relative flex-1 w-full flex items-end gap-1 z-10">
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[40%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[60%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[30%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[50%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[80%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[45%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[70%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[90%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30 relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-[9px] text-white px-1.5 py-0.5 rounded border border-white/10 opacity-0 group-hover/chart:opacity-100 transition-opacity whitespace-nowrap">
                          Peak: $42k
                        </div>
</div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[65%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[85%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[55%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/10 to-transparent h-[75%] rounded-t-[1px] group-hover/chart:bg-emerald-500/20 transition-colors border-t border-emerald-500/30"></div>
</div>

<div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
</div>
</div>

<div className="col-span-1 h-full min-h-[300px] bg-black/40 border border-white/5 rounded-xl relative overflow-hidden flex flex-col">

<div className="absolute top-0 left-0 w-full h-[2px] bg-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-scan z-20"></div>
<div className="absolute top-4 left-4 z-10 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] font-mono text-emerald-500 tracking-widest">
                      LIVE_VIEW
                    </span>
</div>

<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-48 h-48 rounded-full border border-white/5 flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full border-t border-l border-emerald-500/20 animate-[spin_4s_linear_infinite]"></div>
<div className="absolute inset-2 rounded-full border-b border-r border-emerald-500/10 animate-[spin_6s_linear_infinite_reverse]"></div>
<div className="w-32 h-32 rounded-full border border-white/5 flex items-center justify-center relative bg-emerald-500/5 backdrop-blur-[1px]">
<div className="absolute inset-0 rounded-full border-b border-emerald-500/40 animate-[spin_3s_linear_infinite_reverse]"></div>
<div className="w-16 h-16 rounded-full bg-emerald-500/20 blur-xl animate-pulse absolute"></div>
<div className="relative z-10 flex flex-col items-center justify-center">
<span className="text-4xl font-mono font-medium text-white tracking-tighter drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]">
                            87
                          </span>
</div>
</div>

<div className="absolute top-8 right-10 w-1 h-1 bg-emerald-400 rounded-full animate-ping"></div>
<div className="absolute bottom-12 left-8 w-1 h-1 bg-emerald-400 rounded-full animate-ping delay-700"></div>
<div className="absolute top-1/2 left-4 w-0.5 h-0.5 bg-white/50 rounded-full"></div>
</div>
</div>

<div className="mt-auto p-4 bg-gradient-to-t from-black via-black/90 to-transparent z-10 border-t border-white/5">
<div className="space-y-2 font-mono text-[9px] text-neutral-500">
<div className="flex gap-2 items-center">
<span className="text-neutral-700">10:42:01</span>
<span className="text-emerald-500/80">
                          Packets routed: 492mb
                        </span>
</div>
<div className="flex gap-2 items-center">
<span className="text-neutral-700">10:42:03</span>
<span className="flex items-center gap-1">
<span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                          Node handshake [OK]
                        </span>
</div>
<div className="flex gap-2 items-center">
<span className="text-neutral-700">10:42:04</span>
<span className="">Sync complete (24ms)</span>
</div>
<div className="flex gap-2 items-center">
<span className="text-neutral-700">10:42:05</span>
<span className="animate-pulse text-white/40">_</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y overflow-hidden bg-black/50 w-full z-10 border-white/5 pt-6 pb-6 relative" style={{maskImage: 'linear-gradient(90deg, transparent, black 45%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 45%, black 60%, transparent)'}}>
<div className="flex w-[200%] animate-ticker">
<div className="flex items-center justify-around w-1/2 px-10 gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-serif italic">Ventura</span>
<span className="text-lg font-semibold tracking-widest">ONYX</span>
<span className="text-xl font-semibold font-sans">Pacific</span>
<span className="text-lg font-medium tracking-tight">Summit</span>
<span className="text-xl font-serif">Atlas</span>
<span className="text-lg font-semibold">NorthStar</span>
</div>
<div className="flex items-center justify-around w-1/2 px-10 gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-serif italic">Ventura</span>
<span className="text-lg font-semibold tracking-widest">ONYX</span>
<span className="text-xl font-semibold font-sans">Pacific</span>
<span className="text-lg font-medium tracking-tight">Summit</span>
<span className="text-xl font-serif">Atlas</span>
<span className="text-lg font-semibold">NorthStar</span>
</div>
</div>
</div>

<section className="max-w-7xl z-10 mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 relative" id="projects">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<span className="text-emerald-500 text-xs font-mono tracking-widest uppercase mb-2 block">
            Selected Works
          </span>
<h2 className="text-4xl md:text-5xl font-normal leading-tight transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm">
            Impact driven work.
          </h2>
</div>
<a className="text-sm text-neutral-400 hover:text-white border-b border-neutral-800 hover:border-white transition-colors pb-0.5" href="#">
          View all case studies
        </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px] gap-x-6 gap-y-6">

<div className="group md:col-span-2 relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="0">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ff0f777-6fef-48b9-81ec-9c3949d95efa_1600w.webp)]" style={{}}></div>
<div className="bg-gradient-to-t from-black via-black/40 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c8a4f42-8383-42b5-8225-2fe26499aecc_1600w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute inset-0 flex items-center justify-center z-40 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
<button className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto hover:bg-neutral-200">
              View Project
              <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div className="">
<span className="text-xs font-mono text-emerald-400 mb-2 block">
                  Enterprise SaaS
                </span>
<h3 className="text-3xl font-serif italic mb-2">Orbital Finance</h3>
<p className="text-neutral-400 text-sm max-w-md">
                  Next-gen banking infrastructure for the modern economy.
                </p>
</div>
</div>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="100">
<div className="absolute inset-0 bg-neutral-900 transition-colors group-hover:bg-neutral-800"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-orange-500/20 rounded-full blur-[80px]"></div>
<div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-95 group-hover:opacity-50">
<div className="relative w-48 h-64 border border-white/10 rounded-xl bg-black/40 backdrop-blur-md rotate-[6deg] group-hover:rotate-0 transition-transform duration-500 flex flex-col p-4 shadow-2xl">
<div className="flex gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div className="w-16 h-2 bg-white/10 rounded"></div>
</div>
<div className="bg-gradient-to-br from-orange-500/20 to-transparent w-full h-24 border-white/5 border rounded"></div>
<div className="w-full h-2 bg-white/10 rounded mt-2"></div>
<div className="w-2/3 h-2 bg-white/10 rounded"></div>
</div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center z-40 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
<button className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto hover:bg-neutral-200">
              View Project
              <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-xs font-mono text-orange-400 mb-1 block">
              Healthcare
            </span>
<h3 className="text-xl font-medium">Apex Health</h3>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/5 cursor-pointer transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="200">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0 overflow-hidden pointer-events-none">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>

<div className="absolute inset-0 flex items-center justify-center group-hover:scale-95 group-hover:opacity-40 transition-all duration-500">

<div className="w-48 h-48 rounded-full border border-white/5 flex items-center justify-center scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 ease-out">
<div className="absolute inset-0 rounded-full border-t border-l border-white/10 animate-[spin_12s_linear_infinite]"></div>

<div className="w-32 h-32 rounded-full border border-white/5 flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full border-b border-r border-emerald-500/20 animate-[spin_8s_linear_infinite_reverse]"></div>

<div className="absolute inset-0 animate-[spin_3s_linear_infinite]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
</div>

<div className="w-20 h-20 rounded-full bg-white/[0.02] backdrop-blur-[1px] border border-white/10 flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full border-t border-emerald-500/40 animate-[spin_4s_linear_infinite]"></div>
<svg className="w-8 h-8 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path>
<path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"></path>
<path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"></path>
<path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="absolute top-6 left-6 transition-all duration-500 -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
<div className="flex items-center gap-2 mb-1">
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
<span className="text-[10px] font-mono text-emerald-500/90 tracking-widest uppercase">
                  ATOM_SYS_V2
                </span>
</div>
<div className="w-12 h-px bg-emerald-500/30"></div>
</div>
<div className="absolute bottom-6 right-6 text-right transition-all duration-500 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-75">
<div className="text-[9px] font-mono text-neutral-500 uppercase mb-0.5">
                Active Nodes
              </div>
<div className="text-sm font-mono text-white font-medium">84/84</div>
</div>

<div className="absolute top-1/2 left-4 w-1.5 h-px bg-white/20"></div>
<div className="absolute top-1/2 right-4 w-1.5 h-px bg-white/20"></div>
<div className="absolute top-4 left-1/2 h-1.5 w-px bg-white/20"></div>
<div className="absolute bottom-4 left-1/2 h-1.5 w-px bg-white/20"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center z-40 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
<button className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto hover:bg-neutral-200">
              View Project
              <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="p-8 h-full flex flex-col justify-between relative z-10 pointer-events-none group-hover:opacity-40 transition-opacity duration-300">
<div className="flex justify-between items-start">
<div className="p-3 bg-white/5 rounded-xl border border-white/5">
<svg className="lucide lucide-component w-6 h-6 text-white" data-lucide="component" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path><path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"></path><path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"></path><path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path></svg>
</div>
<span className="px-2 py-1 rounded border border-white/10 text-[10px] uppercase text-neutral-500">
                Internal
              </span>
</div>
<div className="">
<h3 className="text-xl font-medium mb-2">Vanguard System</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                Enterprise component library for rapid development.
              </p>
</div>
</div>
</div>

<div className="group md:col-span-2 relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="300">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-30 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e168e200-dbe9-4ef1-96e7-7d1d585cf7c4_1600w.webp)]"></div>
<div className="bg-center bg-gradient-to-t from-black via-black/50 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e168e200-dbe9-4ef1-96e7-7d1d585cf7c4_1600w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute inset-0 flex items-center justify-center z-40 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
<button className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto hover:bg-neutral-200">
              View Project
              <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div className="">
<span className="text-xs font-mono text-blue-400 mb-2 block">
                  Architecture
                </span>
<h3 className="text-3xl font-serif italic mb-2">Meridian Spaces</h3>
<p className="text-neutral-400 text-sm max-w-md">
                  Immersive 3D showcase for sustainable architecture.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-10 py-24 border-t border-white/5 overflow-hidden">
<style>
        .perspective-container { perspective: 1000px; }
        .rotate-card { transform-style: preserve-3d; transition: transform 0.6s ease; }
        .group:hover .rotate-card { transform: rotateY(-10deg) rotateX(5deg); }
      </style>
<div className="grid lg:grid-cols-2 gap-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-16 gap-y-16 items-center">

<div className="perspective-container group h-[500px] w-full flex items-center justify-center relative transition-all duration-700 ease-out opacity-0 translate-y-8 blur-sm" data-delay="0">

<div className="absolute inset-0 bg-red-500/20 blur-[120px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"></div>

<div className="rotate-card relative w-full h-full bg-[#0A0A0A]/90 border border-white/10 backdrop-blur-xl rounded-2xl flex flex-col overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-white/20">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

<div className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
<div className="flex items-center gap-3">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>
<div className="px-3 py-1 rounded bg-black/40 border border-white/5 text-[10px] font-mono text-neutral-400 flex items-center gap-2">
<svg className="w-3 h-3 text-neutral-600" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  sim_core_v2.sh
                </div>
</div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] font-mono text-emerald-500 tracking-wider">
                  RUNNING
                </span>
</div>
</div>

<div className="relative z-10 flex-1 p-6 flex flex-col gap-6 overflow-hidden">

<div className="flex gap-6 h-32">

</div></div></div></div></div></section>
    </>
  );
}
