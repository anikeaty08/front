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
      

<div className="parallax-bg"></div>
<div className="tech-grid"></div>
<div className="scanlines"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500 text-2xl" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-2xl tracking-tight font-medium text-white">AIOT</span>
</div>
<div className="flex items-center gap-4 sm:gap-6">

<div className="flex items-center gap-3 sm:gap-5 pr-4 sm:pr-6 border-r border-white/10">
<a className="hover:text-orange-400 hover:scale-110 transition-all flex items-center justify-center cursor-pointer text-neutral-400" href="https://t.me/AIOT_ANN" rel="noopener noreferrer" target="_blank">
<iconify-icon className="sm:text-2xl text-xl" height="24" icon="iconoir:telegram" style={{strokeWidth: '1.5', color: 'rgb(251, 146, 60)'}} width="24"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-orange-400 hover:scale-110 transition-all flex items-center justify-center cursor-pointer" href="https://discord.com/" rel="noopener noreferrer" target="_blank">
<iconify-icon className="sm:text-2xl text-xl" height="24" icon="iconoir:discord" style={{strokeWidth: '1.5', color: 'rgb(251, 146, 60)'}} width="24"></iconify-icon>
</a>
<a className="hover:text-orange-400 hover:scale-110 transition-all flex items-center justify-center cursor-pointer text-neutral-400" href="https://x.com/okzoo_app" rel="noopener noreferrer" target="_blank">
<iconify-icon className="sm:text-2xl text-xl" height="24" icon="iconoir:x" style={{strokeWidth: '1.5', color: 'rgb(251, 146, 60)'}} width="24"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-orange-400 hover:scale-110 transition-all flex items-center justify-center cursor-pointer" href="https://coinmarketcap.com/currencies/okzoo/" rel="noopener noreferrer" target="_blank">
<iconify-icon className="sm:text-xl text-lg" height="20" icon="simple-icons:coinmarketcap" style={{color: 'rgb(251, 146, 60)'}} width="20"></iconify-icon>
</a>
</div>

<button className="hover:bg-orange-900/50 transition-all glow-border text-sm sm:text-base font-medium text-orange-400 bg-orange-950/40 border-orange-500/20 border rounded-full pt-2 sm:pt-2.5 pr-4 sm:pr-5 pb-2 sm:pb-2.5 pl-4 sm:pl-5 shrink-0">Coming Soon</button>
</div>
</div>
</nav>

<header className="overflow-hidden flex flex-col min-h-[90vh] pt-40 pb-32 relative items-center justify-center">
<div className="flex flex-col z-10 text-center w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">

<div className="relative w-full aspect-[4/3] md:aspect-[21/9] max-w-4xl mx-auto mb-16 flex items-center justify-center perspective-[2000px] pointer-events-none">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.15)_0%,transparent_60%)] blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>

<div className="relative w-full h-full transform-style-3d scale-[1.1] md:scale-100 flex items-center justify-center mt-12 md:mt-0 animate-[float-3d_8s_ease-in-out_infinite]">

<div className="absolute w-[460px] h-[460px] md:w-[500px] md:h-[500px] bg-[#020202]/95 border border-orange-500/60 shadow-[0_50px_100px_rgba(0,0,0,0.9),0_0_30px_rgba(249,115,22,0.15),inset_0_0_20px_rgba(249,115,22,0.1)] rounded-xl overflow-hidden transform -translate-z-[40px]">

<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(249,115,22,0.04)_2px,transparent_2px),linear-gradient(to_bottom,rgba(249,115,22,0.04)_2px,transparent_2px)] bg-[size:40px_40px]">
</div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(249,115,22,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,115,22,0.02)_1px,transparent_1px)] bg-[size:10px_10px]">
</div>


<div className="absolute top-[10%] left-[10%] w-[120px] h-[120px] border-t-2 border-l-2 border-orange-500/10 flex items-start justify-start p-2">
<div className="w-2 h-2 bg-orange-500/20"></div>
<div className="w-[80px] h-[1px] bg-orange-500/10 ml-2 mt-1"></div>
</div>

<div className="absolute bottom-[10%] right-[10%] w-[160px] h-[160px] border-b-2 border-r-2 border-orange-500/10 flex items-end justify-end p-2">
<div className="w-[100px] h-[1px] bg-orange-500/10 mr-2 mb-1"></div>
<div className="w-3 h-3 bg-orange-500/10 rounded-full"></div>
</div>

<div className="absolute top-[45%] left-0 w-full h-[8px] flex flex-col justify-between">
<div className="w-full h-[1px] bg-orange-500/10"></div>
<div className="w-full h-[1px] bg-orange-500/5"></div>
<div className="w-full h-[1px] bg-orange-500/10"></div>
</div>
<div className="absolute left-[45%] top-0 h-full w-[8px] flex flex-row justify-between">
<div className="h-full w-[1px] bg-orange-500/10"></div>
<div className="h-full w-[1px] bg-orange-500/5"></div>
<div className="h-full w-[1px] bg-orange-500/10"></div>
</div>

<div className="absolute top-[20%] right-[15%] w-10 h-14 bg-[#050505] border border-orange-500/20 rounded shadow-[0_0_10px_rgba(249,115,22,0.05)]">
</div>
<div className="absolute bottom-[25%] left-[15%] w-14 h-14 bg-[#050505] border border-orange-500/20 rounded shadow-[0_0_10px_rgba(249,115,22,0.05)] flex items-center justify-center">
<div className="w-6 h-6 border border-orange-500/10 rounded-full"></div>
</div>
<div className="absolute top-[60%] left-[8%] w-8 h-20 bg-[#050505] border border-orange-500/20 rounded shadow-[0_0_10px_rgba(249,115,22,0.05)]">
</div>
<div className="absolute bottom-[20%] right-[25%] w-20 h-8 bg-[#050505] border border-orange-500/20 rounded shadow-[0_0_10px_rgba(249,115,22,0.05)]">
</div>

<div className="absolute top-[22%] right-[17%] w-1.5 h-1.5 bg-orange-500/30 rounded-full animate-pulse">
</div>
<div className="absolute bottom-[27%] left-[17%] w-1.5 h-1.5 bg-orange-500/30 rounded-full animate-pulse delay-500">
</div>
<div className="absolute top-[62%] left-[10%] w-1.5 h-1.5 bg-orange-500/30 rounded-full animate-pulse delay-700">
</div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03)_0%,transparent_70%)]">
</div>
</div>

<div className="absolute transform -translate-z-[20px] w-[2px] h-[40px] bg-gradient-to-b from-orange-500/30 to-orange-500/5 top-[25%] left-[25%] rotate-x-[90deg]">
</div>
<div className="absolute transform -translate-z-[20px] w-[2px] h-[40px] bg-gradient-to-b from-orange-500/30 to-orange-500/5 bottom-[25%] right-[25%] rotate-x-[90deg]">
</div>
<div className="absolute transform -translate-z-[20px] w-[2px] h-[40px] bg-gradient-to-b from-orange-500/30 to-orange-500/5 top-[25%] right-[25%] rotate-x-[90deg]">
</div>
<div className="absolute transform -translate-z-[20px] w-[2px] h-[40px] bg-gradient-to-b from-orange-500/30 to-orange-500/5 bottom-[25%] left-[25%] rotate-x-[90deg]">
</div>

<div className="absolute w-[360px] h-[360px] bg-[#050505]/90 backdrop-blur-sm border border-orange-500/70 shadow-[0_50px_100px_rgba(0,0,0,0.9),0_0_30px_rgba(249,115,22,0.2),inset_0_0_20px_rgba(249,115,22,0.1)] rounded-lg overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:20px_20px]">
</div>

<div className="absolute top-[15%] left-0 w-full h-[1px] bg-orange-500/10 overflow-hidden">
<div className="h-full w-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-[data-flow-right_3s_linear_infinite]">
</div>
</div>
<div className="absolute top-[35%] left-0 w-full h-[1px] bg-orange-500/10 overflow-hidden">
<div className="h-full w-20 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-[data-flow-left_4s_linear_infinite] delay-1000">
</div>
</div>
<div className="absolute bottom-[25%] left-0 w-full h-[1px] bg-orange-500/10 overflow-hidden">
<div className="h-full w-16 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-[data-flow-right_2.5s_linear_infinite] delay-500">
</div>
</div>

<div className="absolute left-[20%] top-0 h-full w-[1px] bg-orange-500/10 overflow-hidden">
<div className="w-full h-16 bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-[data-flow-down_3.5s_linear_infinite] delay-700">
</div>
</div>
<div className="absolute right-[30%] top-0 h-full w-[1px] bg-orange-500/10 overflow-hidden">
<div className="w-full h-12 bg-gradient-to-b from-transparent via-orange-400 to-transparent animate-[data-flow-up_4.5s_linear_infinite] delay-200">
</div>
</div>

<div className="absolute top-[15%] left-[20%] w-[60px] h-[60px] border-l border-t border-orange-500/20">
</div>
<div className="absolute bottom-[25%] right-[30%] w-[80px] h-[80px] border-r border-b border-orange-500/20">
</div>

<div className="absolute top-[15%] left-[20%] w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,1)]">
<div className="absolute inset-0 border border-orange-500 rounded-full animate-[network-ping_2s_ease-out_infinite]">
</div>
</div>
<div className="absolute bottom-[25%] right-[30%] w-2 h-2 bg-orange-400 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]">
<div className="absolute inset-0 border border-orange-400 rounded-full animate-[network-ping_2.5s_ease-out_infinite] delay-300">
</div>
</div>
<div className="absolute top-[35%] right-[10%] w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,1)]">
</div>
<div className="absolute bottom-[10%] left-[40%] w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,1)]">
<div className="absolute inset-0 border border-orange-500 rounded-full animate-[network-ping_3s_ease-out_infinite] delay-700">
</div>
</div>
</div>

<div className="absolute w-[220px] h-[220px] bg-transparent border border-orange-500/40 shadow-[0_0_20px_rgba(249,115,22,0.1),inset_0_0_20px_rgba(249,115,22,0.1)] rounded-full transform translate-z-[16px] flex items-center justify-center animate-[spin_20s_linear_infinite]">

<div className="absolute w-[160px] h-[160px] border border-orange-500/20 rounded-full border-t-orange-500/60 border-l-orange-500/60 animate-[spin_10s_linear_infinite_reverse]">
</div>

<div className="absolute w-[280px] h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent rotate-[25deg] animate-[synapse-fire_3s_ease-in-out_infinite]">
</div>
<div className="absolute w-[280px] h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent -rotate-[45deg] animate-[synapse-fire_4s_ease-in-out_infinite] delay-500">
</div>
<div className="absolute h-[280px] w-[1px] bg-gradient-to-b from-transparent via-orange-400/40 to-transparent rotate-[15deg] animate-[synapse-fire_2.5s_ease-in-out_infinite] delay-1000">
</div>

<div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-orange-300 rounded-full shadow-[0_0_8px_#fbd38d]">
</div>
<div className="absolute bottom-4 right-8 w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_12px_#f97316]">
</div>
<div className="absolute top-1/4 left-4 w-1 h-1 bg-orange-400 rounded-full shadow-[0_0_5px_#fb923c]"></div>
</div>

<div className="absolute w-[100px] h-[100px] bg-[#0a0a0a]/90 backdrop-blur-md border border-orange-500/90 rounded-xl transform translate-z-[32px] shadow-[0_0_20px_rgba(249,115,22,0.3),inset_0_0_15px_rgba(249,115,22,0.2),0_15px_30px_rgba(0,0,0,0.9)] flex items-center justify-center overflow-hidden">

<div className="absolute w-[80px] h-[80px] border-[1px] border-orange-500/10 rounded-full flex items-center justify-center">
<div className="absolute w-full h-full border-t-[2px] border-orange-500/90 rounded-full animate-[spin_3s_linear_infinite]">
</div>

<div className="absolute w-[54px] h-[54px] border-[1px] border-orange-400/10 rounded-full flex items-center justify-center">
<div className="absolute w-full h-full border-b-[2px] border-l-[2px] border-orange-400/90 rounded-full animate-[spin_2s_linear_infinite_reverse]">
</div>

<div className="w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_20px_rgba(249,115,22,1)] relative flex items-center justify-center animate-[pulse-core_2s_ease-in-out_infinite]">

<div className="absolute inset-0 border-[1.5px] border-orange-300 rounded-full animate-[network-ping_1.5s_ease-out_infinite]">
</div>
<div className="absolute inset-0 border border-orange-500 rounded-full animate-[network-ping_1.5s_ease-out_infinite] delay-300">
</div>

<div className="absolute w-[140px] h-[1px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent rotate-90 animate-[synapse-fire_1s_ease-in-out_infinite]">
</div>
<div className="absolute w-[140px] h-[1px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent animate-[synapse-fire_1.5s_ease-in-out_infinite]">
</div>
</div>
</div>
</div>
</div>

<div className="absolute transform translate-z-[8px] w-[1px] h-[32px] bg-gradient-to-t from-orange-500/10 to-orange-500/50 top-[40%] left-[40%] rotate-x-[90deg]">
</div>
<div className="absolute transform translate-z-[8px] w-[1px] h-[32px] bg-gradient-to-t from-orange-500/10 to-orange-500/50 bottom-[35%] right-[40%] rotate-x-[90deg]">
</div>
</div>

<div className="absolute -top-1/4 inset-x-0 h-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none z-20 mix-blend-screen">
</div>
</div>

<h1 className="md:text-8xl z-10 text-6xl font-medium text-white tracking-tight mb-2 relative drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
        APOS SDK
    </h1>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-neutral-200 mb-10 relative z-10">
        The Agentic Payment Operating System.
    </h2>

<div className="w-full max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-orange-600/70 to-transparent mb-10 relative z-10">
</div>
<p className="md:text-lg z-10 text-base text-neutral-500 tracking-wide font-mono relative">Building the financial infrastructure for agentic intelligence.</p>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200vw] h-[40vh] bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.1),transparent_70%)] pointer-events-none transform rotate-x-[75deg] perspective-[1000px] z-0 opacity-40">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(249,115,22,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,115,22,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,white,transparent)]">
</div>
</div>
</div>
</header>

<main className="py-32 relative z-10 bg-[#020202]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-24 relative">
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Core Architecture</h3>
<p className="text-2xl text-neutral-400 max-w-4xl mx-auto font-light">
                    The APOS SDK provides a comprehensive suite of protocols for agent identity, interoperability, and autonomous commerce.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-[#050505] border border-white/5 rounded-3xl hover:bg-white/[0.02] hover:border-orange-500/30 transition-all duration-500 glow-border-hover relative overflow-hidden group flex flex-col">
<div className="h-40 w-full border-b border-white/5 bg-[#080808] relative overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0%,transparent_60%)] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative w-20 h-20 flex items-center justify-center">
<div className="absolute w-full h-full border border-orange-500/20 rounded-full animate-[spin_8s_linear_infinite]"></div>
<div className="absolute w-16 h-16 border border-orange-500/40 border-t-transparent rounded-full animate-[spin_4s_linear_infinite_reverse]"></div>
<iconify-icon className="text-orange-500 text-4xl relative z-10" icon="solar:fingerprint-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="p-8 flex flex-col flex-1">
<h4 className="text-2xl font-medium tracking-tight text-white mb-3">Agent Identity</h4>
<p className="text-lg text-neutral-400 mb-6 leading-relaxed flex-1">
                            Establish core digital identity upon deployment. The system generates a unique Agent ID mapped via ERC-8160.
                        </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-base text-neutral-300">
<iconify-icon className="text-orange-600 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span><strong className="text-white font-medium">ERC-8004 NFT:</strong> Tracks on-chain agent reputation.</span>
</li>
<li className="flex items-start gap-3 text-base text-neutral-300">
<iconify-icon className="text-orange-600 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span><strong className="text-white font-medium">Primary Registry:</strong> Canonical wallet mapping.</span>
</li>
</ul>
</div>
</div>

<div className="bg-[#050505] border border-white/5 rounded-3xl hover:bg-white/[0.02] hover:border-orange-500/30 transition-all duration-500 glow-border-hover relative overflow-hidden group flex flex-col">
<div className="h-40 w-full border-b border-white/5 bg-[#080808] relative overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0%,transparent_70%)] transition-colors duration-500"></div>
<div className="relative w-full h-full flex items-center justify-center gap-8">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 relative z-10 flex items-center justify-center group-hover:border-orange-500/30 transition-colors">
<iconify-icon className="text-neutral-500 group-hover:text-orange-400 transition-colors text-2xl" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="absolute w-32 h-[1px] border-t border-dashed border-orange-500/30"></div>
<div className="absolute w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_#f97316] animate-[data-flow-right_2s_linear_infinite]"></div>
<div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 relative z-10 flex items-center justify-center group-hover:border-orange-500/30 transition-colors">
<iconify-icon className="text-neutral-500 group-hover:text-orange-400 transition-colors text-2xl" icon="solar:link-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="p-8 flex flex-col flex-1">
<h4 className="text-2xl font-medium tracking-tight text-white mb-3">Sovereign Interop</h4>
<p className="text-lg text-neutral-400 mb-6 leading-relaxed flex-1">
                            Agents manage their own assets across networks with secure, gasless, and automated transactions.
                        </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-base text-neutral-300">
<iconify-icon className="text-orange-600 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className=""><strong className="text-white font-medium">ERC-6551 Vault:</strong> Token Bound Accounts.</span>
</li>
<li className="flex items-start gap-3 text-base text-neutral-300">
<iconify-icon className="text-orange-600 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className=""><strong className="text-white font-medium">ERC-4337 Engine:</strong> Account abstraction.</span>
</li>
</ul>
</div>
</div>

<div className="bg-[#050505] border border-white/5 rounded-3xl hover:bg-white/[0.02] hover:border-orange-500/30 transition-all duration-500 glow-border-hover relative overflow-hidden group flex flex-col">
<div className="h-40 w-full border-b border-white/5 bg-[#080808] relative overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
<div className="absolute w-full h-[2px] bg-orange-500/50 shadow-[0_0_15px_#f97316] animate-[scan-line_3s_ease-in-out_infinite_alternate]"></div>
<div className="relative w-16 h-16 bg-black/50 backdrop-blur-sm border border-orange-500/20 rounded-2xl flex items-center justify-center group-hover:border-orange-500/60 transition-colors z-10 shadow-[0_0_20px_rgba(249,115,22,0.1)]">
<iconify-icon className="text-orange-500 text-3xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="p-8 flex flex-col flex-1">
<h4 className="text-2xl font-medium tracking-tight text-white mb-3">Security Enclave</h4>
<p className="text-lg text-neutral-400 mb-6 leading-relaxed flex-1">
                            Strict guardrails and secure environments for holding sensitive data and API credentials.
                        </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-base text-neutral-300">
<iconify-icon className="text-orange-600 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span><strong className="text-white font-medium">ERC-8118 Auth:</strong> Developer-defined spending limits.</span>
</li>
<li className="flex items-start gap-3 text-base text-neutral-300">
<iconify-icon className="text-orange-600 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed"><strong className="text-white font-medium">TEE Vaults:</strong> Secure off-chain secrets.</span>
</li>
</ul>
</div>
</div>

<div className="bg-[#050505] border border-white/5 rounded-3xl hover:bg-white/[0.02] hover:border-orange-500/30 transition-all duration-500 glow-border-hover relative overflow-hidden group flex flex-col">
<div className="h-40 w-full border-b border-white/5 bg-[#080808] relative overflow-hidden flex items-end justify-center gap-2 pb-6">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(249,115,22,0.1)_0%,transparent_60%)]"></div>
<div className="w-4 bg-orange-500/20 rounded-t-sm group-hover:bg-orange-500/40 transition-colors duration-300 animate-[pulse-bar_2s_ease-in-out_infinite] delay-100" style={{height: '30%'}}></div>
<div className="w-4 bg-orange-500/30 rounded-t-sm group-hover:bg-orange-500/60 transition-colors duration-300 animate-[pulse-bar_2.5s_ease-in-out_infinite] delay-300" style={{height: '50%'}}></div>
<div className="w-4 bg-orange-500/50 rounded-t-sm group-hover:bg-orange-500/80 transition-colors duration-300 animate-[pulse-bar_2.2s_ease-in-out_infinite] delay-500 relative" style={{height: '80%'}}>
<div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
</div>
<div className="w-4 bg-orange-500/20 rounded-t-sm group-hover:bg-orange-500/40 transition-colors duration-300 animate-[pulse-bar_2.8s_ease-in-out_infinite] delay-700" style={{height: '40%'}}></div>
<iconify-icon className="absolute top-6 right-6 text-orange-500/20 text-4xl group-hover:text-orange-500/50 transition-colors" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="p-8 flex flex-col flex-1">
<h4 className="text-2xl font-medium tracking-tight text-white mb-3">Autonomous Wealth</h4>
<p className="text-lg text-neutral-400 mb-6 leading-relaxed flex-1">
                            Agents actively optimize and manage funds, ensuring seamless operations and capital efficiency.
                        </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-base text-neutral-300">
<iconify-icon className="text-orange-600 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className=""><strong className="text-white font-medium">JIT Auto-Swaps:</strong> Millisecond DEX routing.</span>
</li>
<li className="flex items-start gap-3 text-base text-neutral-300">
<iconify-icon className="text-orange-600 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className=""><strong className="text-white font-medium">ERC-4626 Yield:</strong> Auto-sweeps idle capital.</span>
</li>
</ul>
</div>
</div>

<div className="bg-[#050505] border border-white/5 rounded-3xl hover:bg-white/[0.02] hover:border-orange-500/30 transition-all duration-500 glow-border-hover relative overflow-hidden group flex flex-col">
<div className="h-40 w-full border-b border-white/5 bg-[#080808] relative overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.1)_0%,transparent_60%)]"></div>
<div className="w-28 h-16 border border-orange-500/30 rounded-xl bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden group-hover:border-orange-500/60 transition-colors transform group-hover:-translate-y-1 shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
<div className="absolute top-3 left-3 w-4 h-3 rounded-sm border border-orange-400/50 bg-orange-400/20"></div>
<div className="absolute bottom-3 right-3 flex gap-1">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[data-flow-right_1.5s_ease-in-out_infinite]"></div>
</div>
</div>
<div className="p-8 flex flex-col flex-1">
<h4 className="text-2xl font-medium tracking-tight text-white mb-3">Off-Chain Commerce</h4>
<p className="text-lg text-neutral-400 mb-6 leading-relaxed flex-1">
                            Bridge the gap between on-chain funds and real-world services, paywalls, and subscriptions.
                        </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-base text-neutral-300">
<iconify-icon className="text-orange-600 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="leading-relaxed"><strong className="text-white font-medium">X402 Web APIs:</strong> Auto-handles HTTP 402.</span>
</li>
<li className="flex items-start gap-3 text-base text-neutral-300">
<iconify-icon className="text-orange-600 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span><strong className="text-white font-medium">TradFi Integration:</strong> Virtual debit cards.</span>
</li>
</ul>
</div>
</div>

<div className="bg-[#050505] border border-white/5 rounded-3xl hover:bg-white/[0.02] hover:border-orange-500/30 transition-all duration-500 glow-border-hover relative overflow-hidden group flex flex-col md:col-span-2 lg:col-span-1">
<div className="h-40 w-full border-b border-white/5 bg-[#080808] relative overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08)_0%,transparent_60%)]"></div>
<div className="relative w-full h-full">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_15px_#f97316] z-10 group-hover:scale-125 transition-transform"></div>

<div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 animate-[spin_10s_linear_infinite]">
<div className="absolute top-1/2 left-1/2 w-2 h-2 bg-orange-300 rounded-full -translate-x-1/2 -translate-y-1/2 transform translate-x-[40px] translate-y-[30px] shadow-[0_0_10px_#fdba74]"></div>
<div className="absolute top-1/2 left-1/2 w-[1px] h-[50px] bg-orange-500/30 -translate-x-1/2 -translate-y-1/2 origin-top rotate-[145deg]"></div>
</div>
<div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 animate-[spin_15s_linear_infinite_reverse]">
<div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white/80 rounded-full -translate-x-1/2 -translate-y-1/2 transform -translate-x-[50px] translate-y-[10px] shadow-[0_0_10px_white]"></div>
<div className="absolute top-1/2 left-1/2 w-[1px] h-[50px] bg-white/10 -translate-x-1/2 -translate-y-1/2 origin-top -rotate-[100deg]"></div>
</div>
</div>
</div>
<div className="p-8 flex flex-col flex-1">
<h4 className="text-2xl font-medium tracking-tight text-white mb-3">Agentic Economy</h4>
<p className="text-lg text-neutral-400 mb-6 leading-relaxed flex-1">
                            Deploy your permissioned agent into the broader network to hire, be hired, and collaborate.
                        </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-base text-neutral-300">
<iconify-icon className="text-orange-600 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span><strong className="text-white font-medium">Agent Marketplace:</strong> Visibility via ERC-8004.</span>
</li>
<li className="flex items-start gap-3 text-base text-neutral-300">
<iconify-icon className="text-orange-600 text-xl mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span><strong className="text-white font-medium">A2A Negotiation:</strong> Autonomous querying.</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</main>

<div className="relative w-full flex justify-center z-20 -my-8 pointer-events-none">
<div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-orange-500/30 to-transparent relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-[data-flow-down_3s_linear_infinite]"></div>
</div>
</div>

<section className="bg-gradient-to-b from-[#020202] to-black/80 z-10 border-white/5 border-t pt-32 pb-32 relative">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-[#080808] rounded-3xl border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.03)] glow-border relative group">

<div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-30 mix-blend-screen transition-opacity group-hover:opacity-50 duration-700">
<div className="absolute top-[20%] right-[10%] w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]"></div>
<div className="absolute -right-4 top-1/2 -translate-y-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent to-orange-500/40"></div>
</div>
<div className="flex items-center px-6 py-4 border-b border-white/5 bg-black/60">
<div className="flex gap-2.5">
<div className="w-3.5 h-3.5 rounded-full bg-white/10"></div>
<div className="w-3.5 h-3.5 rounded-full bg-white/10"></div>
<div className="w-3.5 h-3.5 rounded-full bg-white/10"></div>
</div>
<div className="ml-6 text-sm font-medium text-neutral-500 font-mono">agent-deploy.ts</div>
</div>
<div className="p-8 md:p-10 overflow-x-auto text-sm md:text-base font-mono leading-[2] text-neutral-300 relative z-10">
<pre className=""><code className=""><span className="text-purple-400">import</span> { APOS } <span className="text-purple-400">from</span> <span className="text-orange-400">'@aiot/apos-sdk'</span>;

<span className="text-neutral-500">// Initialize Agent Identity &amp; Sovereign Vault</span>
<span className="text-orange-300">const</span> agent = <span className="text-purple-400">await</span> APOS.<span className="text-blue-400">deploy</span>({
  name: <span className="text-orange-400">"ResearchNode_01"</span>,
  policies: [
    APOS.Rules.<span className="text-blue-400">dailySpendLimit</span>(<span className="text-yellow-300">50</span>, <span className="text-orange-400">'USDC'</span>),
    APOS.Rules.<span className="text-blue-400">allowedVendors</span>([<span className="text-orange-400">'AWS'</span>, <span className="text-orange-400">'OpenAI'</span>])
  ]
});

<span className="text-neutral-500">// Fetch secure Web2 credentials from TEE</span>
<span className="text-orange-300">const</span> apiKey = <span className="text-purple-400">await</span> agent.vault.<span className="text-blue-400">getSecret</span>(<span className="text-orange-400">'OPENAI_KEY'</span>);

<span className="text-neutral-500">// X402 Auto-Payment Fetch (Handles paywalls natively)</span>
<span className="text-orange-300">const</span> data = <span className="text-purple-400">await</span> agent.<span className="text-blue-400">fetch</span>(<span className="text-orange-400">'https://api.premium-data.io/v1/query'</span>, {
  method: <span className="text-orange-400">'POST'</span>,
  autoPay: <span className="text-yellow-300">true</span> <span className="text-neutral-500">// Intercepts 402, swaps to requested currency via JIT, and pays</span>
});</code></pre>
</div>
</div>
</div>
</section>

<section className="z-10 bg-[#020202] border-white/5 border-t pt-32 pb-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-24">
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">AIOT Ecosystem</h3>
<p className="text-2xl text-neutral-400 max-w-4xl mx-auto font-light">
                    A comprehensive suite of tools to bridge on-chain autonomy with real-world utility.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-[#050505] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.02] hover:border-orange-500/20 transition-all duration-500 glow-border-hover relative overflow-hidden group flex flex-col">
<div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors pointer-events-none"></div>

<div className="w-full h-40 bg-[#080808] rounded-xl border border-white/5 mb-8 relative overflow-hidden flex flex-col transition-colors duration-500">
<div className="h-8 border-b border-white/5 flex items-center px-4 gap-1.5 bg-white/[0.02]">
<div className="w-2 h-2 rounded-full bg-white/10"></div>
<div className="w-2 h-2 rounded-full bg-white/10"></div>
<div className="w-2 h-2 rounded-full bg-white/10"></div>
</div>
<div className="p-5 flex flex-col gap-3">
<div className="flex gap-2"><span className="text-purple-400 text-xs font-mono opacity-80">import</span><div className="w-20 h-1.5 bg-white/10 rounded mt-1.5"></div></div>
<div className="w-32 h-1.5 bg-orange-400/20 rounded ml-4 mt-2"></div>
<div className="w-24 h-1.5 bg-blue-400/20 rounded ml-4"></div>
</div>
<div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full group-hover:bg-orange-500/20 transition-all"></div>
<iconify-icon className="absolute bottom-4 right-4 text-orange-500/30 text-4xl group-hover:text-orange-500/60 transition-colors" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-2xl font-medium tracking-tight text-white mb-3 relative z-10">APOS SDK</h4>
<p className="text-base text-neutral-400 leading-relaxed relative z-10 flex-1">
                        A powerful developer toolkit to equip AI agents with sovereign identity, interoperability, and robust autonomous commerce capabilities.
                    </p>
</div>

<div className="bg-[#050505] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.02] hover:border-orange-500/20 transition-all duration-500 glow-border-hover relative overflow-hidden group flex flex-col">
<div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors pointer-events-none"></div>

<div className="w-full h-40 bg-[#080808] rounded-xl border border-white/5 mb-8 relative overflow-hidden transition-colors duration-500">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-orange-500/5 to-orange-500/20 border-b border-orange-500/50 animate-[data-flow-down_3s_linear_infinite]"></div>
<div className="absolute top-8 left-12 w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,1)]"></div>
<div className="absolute bottom-10 right-16 w-2 h-2 bg-white/20 rounded-full"></div>
<div className="absolute top-16 right-8 w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
<iconify-icon className="absolute inset-0 m-auto w-fit h-fit text-orange-500/40 text-5xl group-hover:text-orange-500/80 transition-colors bg-black/50 p-3 rounded-2xl backdrop-blur-md border border-white/5" icon="solar:scanner-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-2xl font-medium tracking-tight text-white mb-3 relative z-10">Agent Scanner</h4>
<p className="text-base text-neutral-400 leading-relaxed relative z-10 flex-1">
                        Discover AI agents on the network, view programmed functions, track reputation scores, and monitor live x402 transaction data.
                    </p>
</div>

<div className="bg-[#050505] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.02] hover:border-orange-500/20 transition-all duration-500 glow-border-hover relative overflow-hidden group flex flex-col">
<div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors pointer-events-none"></div>

<div className="w-full h-40 bg-[#080808] rounded-xl border border-white/5 mb-8 relative overflow-hidden transition-colors duration-500 flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05)_0%,transparent_70%)]"></div>

<div className="relative w-32 h-20 perspective-[800px]">

<div className="absolute inset-0 rounded-lg border border-white/10 bg-white/5 transform translate-x-4 -translate-y-4 rotate-12 blur-[1px]"></div>

<div className="absolute inset-0 rounded-lg border border-orange-500/40 bg-gradient-to-br from-[#1a0b02] to-black transform shadow-[0_10px_20px_rgba(0,0,0,0.8)] flex items-center p-3 group-hover:border-orange-500/80 group-hover:-translate-y-1 transition-all duration-300">
<div className="w-4 h-3 rounded-sm border border-orange-400/50 bg-orange-400/20"></div>
<iconify-icon className="absolute bottom-2 right-2 text-orange-500/60 text-xl" icon="solar:card-send-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<h4 className="text-2xl font-medium tracking-tight text-white mb-3 relative z-10">TradFi Gateway</h4>
<p className="leading-relaxed z-10 flex-1 text-base text-neutral-400 relative">Programmable virtual debit cards for your agents. Seamlessly convert on-chain crypto to off-chain fiat for purchases.</p>
</div>

<div className="bg-[#050505] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.02] hover:border-orange-500/20 transition-all duration-500 glow-border-hover relative overflow-hidden group flex flex-col">
<div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors pointer-events-none"></div>

<div className="w-full h-40 bg-[#080808] rounded-xl border border-white/5 mb-8 relative overflow-hidden transition-colors duration-500 flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05)_0%,transparent_70%)]"></div>
<div className="relative w-full h-full flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full border border-orange-500/40 bg-orange-500/10 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
<div className="w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316] animate-pulse"></div>
</div>
<div className="h-[2px] w-16 bg-white/10 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-full bg-orange-500/60 animate-[data-flow-right_1.5s_linear_infinite]"></div>
</div>
<div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center z-10 backdrop-blur-sm group-hover:border-orange-500/40 transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-orange-500 text-xl transition-colors" icon="solar:server-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<h4 className="text-2xl font-medium tracking-tight text-white mb-3 relative z-10">x402 Facilitator</h4>
<p className="text-base text-neutral-400 leading-relaxed relative z-10 flex-1">
                        Native payment routing infrastructure for the BSC chain. Facilitate machine-to-machine x402 HTTP microtransactions with sub-second finality.
                    </p>
</div>
</div>
</div>
</section>

    </>
  );
}
