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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b bg-[#050505]/80 backdrop-blur-md border-white/5">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse group" href="#">
<div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#900030] to-[#FF1470] group-hover:rotate-12 transition-transform duration-300">
<svg className="lucide lucide-zap w-5 h-5 text-white fill-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="self-center whitespace-nowrap text-xl font-medium text-white tracking-tight" style={{}}>VOLTA</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<button className="focus:ring-4 focus:outline-none focus:ring-[#FF1470]/50 font-medium rounded-full text-base px-5 py-2.5 text-center transition-all duration-200 backdrop-blur-sm border text-white bg-white/10 hover:bg-white/20 border-white/10" type="button">
                    Get Access
                </button>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-600 text-gray-400 hover:bg-gray-800" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent border-gray-800 bg-gray-900/50">
<li>
<a className="block py-2 px-3 rounded md:bg-transparent md:p-0 transition-colors text-gray-400 hover:text-white" href="#">Platform</a>
</li>
<li>
<a className="block py-2 px-3 rounded md:bg-transparent md:p-0 transition-colors text-gray-400 hover:text-white" href="#">Solutions</a>
</li>
<li>
<a className="block py-2 px-3 rounded md:bg-transparent md:p-0 transition-colors text-gray-400 hover:text-white" href="#">Developers</a>
</li>
<li>
<a className="block py-2 px-3 rounded md:bg-transparent md:p-0 transition-colors text-gray-400 hover:text-white" href="#">Company</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

<div className="laser-line-h top-[20%]" style={{animationDelay: '0s', animationDuration: '3s', left: '-20%'}}></div>
<div className="laser-line-h top-[45%]" style={{animationDelay: '1.5s', animationDuration: '5s', left: '-10%'}}></div>
<div className="laser-line-h top-[70%]" style={{animationDelay: '0.5s', animationDuration: '4s', left: '-30%'}}></div>

<div className="laser-line-v left-[25%]" style={{animationDelay: '2s', animationDuration: '4s', top: '-20%'}}></div>
<div className="laser-line-v left-[50%]" style={{animationDelay: '0s', animationDuration: '3s', top: '-10%'}}></div>
<div className="laser-line-v left-[75%]" style={{animationDelay: '1s', animationDuration: '6s', top: '-30%'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF1470] rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-pulse"></div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#900030] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-[#FF1470] rounded-full mix-blend-screen filter blur-[140px] opacity-10 pointer-events-none"></div>
<div className="container relative mx-auto px-6 text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[#FF8CB0] text-sm font-medium mb-8 transition-colors cursor-pointer backdrop-blur-md bg-white/5 border-white/10 hover:bg-white/10">
<span className="flex h-2 w-2 rounded-full bg-[#FF1470] animate-[ping_1.5s_ease-in-out_infinite]"></span>
<span className="relative flex h-2 w-2 rounded-full bg-[#FF1470] -ml-4"></span>
                Volta V2.0 is now live
                <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-6 relative">
                Infinite Power.<br/>
<span className="gradient-text relative inline-block">
                    Zero Latency.
                    
<div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF1470] to-transparent opacity-50 blur-sm"></div>
</span>
</h1>
<p className="md:text-2xl leading-relaxed text-xl font-normal text-gray-400 max-w-2xl mr-auto mb-10 ml-auto relative" style={{}}>The decentralized energy grid for the modern world. Scale your infrastructure at the speed of light with Volta's adaptive neural network.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-20">
<button className="w-full sm:w-auto px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_-5px_rgba(255,20,112,0.4)] bg-white text-black hover:bg-gray-200">
                    Start Building
                    <svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="w-full sm:w-auto px-8 py-4 bg-[#1a1a1a]/80 backdrop-blur-sm border rounded-full font-medium hover:bg-[#252525] transition-all duration-300 flex items-center justify-center gap-2 hover:border-[#FF1470]/30 text-white border-white/10">
<svg className="lucide lucide-terminal w-5 h-5 text-[#FF1470]" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
                    Read Documentation
                </button>
</div>

<div className="mt-20 relative mx-auto max-w-5xl group">
<div className="absolute -inset-1 bg-gradient-to-r from-[#900030] via-[#FF1470] to-[#900030] rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
<div className="relative bg-[#0A0A0A] border rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl border-white/10">

<div className="flex items-center justify-between px-4 py-3 border-b bg-[#0f0f0f] border-white/5">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs text-gray-500 font-mono">jupiter-volta-main</div>
</div>

<div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-2 space-y-4">
<div className="flex justify-between items-end">
<div>
<p className="text-sm text-gray-400">Total Output</p>
<p className="text-3xl font-medium tracking-tight text-white">842.5 TW/h</p>
</div>
<div className="text-[#FF1470] flex items-center gap-1 text-sm bg-[#FF1470]/10 px-2 py-1 rounded">
<svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +12.4%
                                </div>
</div>

<div className="flex items-end gap-2 h-32 pt-4">
<div className="w-full rounded-t-sm relative group overflow-hidden bg-white/5">
<div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-[#900030] to-[#FF1470] opacity-80 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="w-full rounded-t-sm relative group overflow-hidden bg-white/5">
<div className="absolute bottom-0 w-full h-[65%] bg-gradient-to-t from-[#900030] to-[#FF1470] opacity-80 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="w-full rounded-t-sm relative group overflow-hidden bg-white/5">
<div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-t from-[#900030] to-[#FF1470] opacity-80 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="w-full rounded-t-sm relative group overflow-hidden bg-white/5">
<div className="absolute bottom-0 w-full h-[85%] bg-gradient-to-t from-[#900030] to-[#FF1470] opacity-80 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="w-full rounded-t-sm relative group overflow-hidden bg-white/5">
<div className="absolute bottom-0 w-full h-[70%] bg-gradient-to-t from-[#900030] to-[#FF1470] opacity-80 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>
</div>

<div className="space-y-4 flex flex-col justify-between">
<div>
<p className="text-sm mb-2 text-gray-400">System Status</p>
<div className="flex items-center gap-2 mb-4">
<div className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1470] opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF1470]"></span>
</div>
<span className="text-lg font-medium text-white">Operational</span>
</div>
</div>

<div className="space-y-2">
<div className="h-2 w-full rounded-full bg-gradient-to-r from-[#900030] to-[#FF1470]"></div>
<div className="h-2 w-full rounded-full bg-gradient-to-r from-[#FF1470] to-[#FF8CB0]"></div>
<div className="h-2 w-full rounded-full bg-gradient-to-r from-[#FF1470] to-orange-400"></div>
<div className="h-2 w-full rounded-full bg-gradient-to-r from-[#FF1470] to-purple-600"></div>
</div>
<div className="pt-4 border-t border-white/10">
<div className="flex justify-between text-sm text-gray-400">
<span>Load</span>
<span>94%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-black/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-lg text-gray-500 mb-8 font-medium">Powering the next generation of startups</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="h-8 w-auto flex items-center gap-2 font-bold text-xl"><svg className="lucide lucide-triangle fill-current" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> Apex</div>
<div className="h-8 w-auto flex items-center gap-2 font-bold text-xl"><svg className="lucide lucide-circle fill-current" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> Sphere</div>
<div className="h-8 w-auto flex items-center gap-2 font-bold text-xl"><svg className="lucide lucide-hexagon fill-current" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> Nexus</div>
<div className="h-8 w-auto flex items-center gap-2 font-bold text-xl"><svg className="lucide lucide-square fill-current" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg> Block</div>
<div className="h-8 w-auto flex items-center gap-2 font-bold text-xl"><svg className="lucide lucide-diamond fill-current" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg> Prism</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Engineered for <span className="text-[#FF1470]">Performance.</span></h2>
<p className="text-xl max-w-2xl text-gray-400">
                    Our proprietary grid architecture ensures redundancy and speed across all nodes.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 group relative rounded-2xl border bg-[#0A0A0A] overflow-hidden hover:border-[#FF1470]/30 transition-colors duration-500 border-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-[#900030]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 md:p-12 relative z-10">
<div className="w-12 h-12 rounded-lg bg-[#FF1470]/10 flex items-center justify-center mb-6 border border-[#FF1470]/20">
<svg className="lucide lucide-globe w-6 h-6 text-[#FF1470]" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-2xl font-medium mb-3 text-white">Global Edge Network</h3>
<p className="text-lg mb-8 max-w-md text-gray-400">Deploy your energy assets to over 200+ regions instantly. Our intelligent routing protocol finds the most efficient path.</p>

<div className="w-full h-48 rounded-xl bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] border relative overflow-hidden flex items-center justify-center border-white/5">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#FF1470 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="w-32 h-32 bg-gradient-to-tr from-[#FF1470] to-[#FF8CB0] rounded-full filter blur-[50px] opacity-40 animate-pulse"></div>
<div className="relative z-10 grid grid-cols-3 gap-8">
<div className="w-3 h-3 rounded-full shadow-[0_0_15px_white] bg-white"></div>
<div className="w-3 h-3 rounded-full shadow-[0_0_15px_white] bg-white"></div>
<div className="w-3 h-3 rounded-full shadow-[0_0_15px_white] bg-white"></div>
</div>
</div>
</div>
</div>

<div className="md:row-span-2 group relative rounded-2xl border bg-[#0A0A0A] overflow-hidden hover:border-[#FF1470]/30 transition-colors duration-500 border-white/10">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#900030]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 h-full flex flex-col relative z-10">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20">
<svg className="lucide lucide-zap-off w-6 h-6 text-orange-400" data-lucide="zap-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317"></path><path d="M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773"></path><path d="M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"></path><path d="m2 2 20 20"></path></svg>
</div>
<h3 className="text-2xl font-medium mb-3 text-white">Instant Failover</h3>
<p className="text-lg mb-8 text-gray-400">Never go offline. Our autonomous agents reroute power in microseconds.</p>
<div className="mt-auto space-y-4">

<div className="flex items-center justify-between p-4 rounded-xl border bg-white/5 border-white/5">
<span className="text-sm text-gray-300">Auto-Scaling</span>
<div className="w-11 h-6 bg-[#FF1470] rounded-full relative cursor-pointer">
<div className="absolute top-1 right-1 w-4 h-4 rounded-full shadow-sm bg-white"></div>
</div>
</div>
<div className="flex items-center justify-between p-4 rounded-xl border bg-white/5 border-white/5">
<span className="text-sm text-gray-300">DDoS Protection</span>
<div className="w-11 h-6 bg-[#FF1470] rounded-full relative cursor-pointer">
<div className="absolute top-1 right-1 w-4 h-4 rounded-full shadow-sm bg-white"></div>
</div>
</div>
<div className="flex items-center justify-between p-4 rounded-xl border opacity-50 bg-white/5 border-white/5">
<span className="text-sm text-gray-300">Legacy Mode</span>
<div className="w-11 h-6 rounded-full relative cursor-pointer bg-gray-600">
<div className="absolute top-1 left-1 w-4 h-4 rounded-full shadow-sm bg-white"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl border bg-[#0A0A0A] overflow-hidden hover:border-[#FF1470]/30 transition-colors duration-500 p-8 border-white/10">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20">
<svg className="lucide lucide-lock w-6 h-6 text-purple-400" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h3 className="text-xl font-medium mb-2 text-white">End-to-End Encrypted</h3>
<p className="text-base text-gray-400">Military grade security for your grid data.</p>
</div>

<div className="group relative rounded-2xl border bg-[#0A0A0A] overflow-hidden hover:border-[#FF1470]/30 transition-colors duration-500 p-8 border-white/10">
<div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mb-6 border border-teal-500/20">
<svg className="lucide lucide-activity w-6 h-6 text-teal-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="text-xl font-medium mb-2 text-white">Real-time Analytics</h3>
<p className="text-base text-gray-400">Monitor consumption with sub-ms precision.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-center">The Volta Spectrum</h2>
<p className="text-xl text-center max-w-2xl mx-auto text-gray-400">
                Choose the energy band that fits your computational needs.
            </p>
</div>
<div className="space-y-4 max-w-4xl mx-auto">

<div className="group relative bg-[#0A0A0A] border rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 transition-colors cursor-pointer border-white/5 hover:bg-white/5">
<div className="w-full h-12 md:w-48 rounded-lg bg-gradient-to-r from-[#900030] to-[#FF1470]"></div>
<div className="flex-1 text-center md:text-left">
<h4 className="text-lg font-medium text-white">Crimson Tier</h4>
<p className="text-sm text-gray-400">For high-frequency trading and rapid execution.</p>
</div>
<div className="font-mono opacity-50 group-hover:opacity-100 transition-opacity text-white">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 transition-colors cursor-pointer border-white/5 hover:bg-white/5">
<div className="w-full h-12 md:w-48 rounded-lg bg-gradient-to-r from-[#FF1470] to-orange-400"></div>
<div className="flex-1 text-center md:text-left">
<h4 className="text-lg font-medium text-white">Solar Tier</h4>
<p className="text-sm text-gray-400">Sustainable scaling for long-term storage.</p>
</div>
<div className="font-mono opacity-50 group-hover:opacity-100 transition-opacity text-white">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 transition-colors cursor-pointer border-white/5 hover:bg-white/5">
<div className="w-full h-12 md:w-48 rounded-lg bg-gradient-to-r from-[#FF1470] to-purple-600"></div>
<div className="flex-1 text-center md:text-left">
<h4 className="text-lg font-medium text-white">Nebula Tier</h4>
<p className="text-sm text-gray-400">Deep learning computation and AI model training.</p>
</div>
<div className="font-mono opacity-50 group-hover:opacity-100 transition-opacity text-white">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 transition-colors cursor-pointer border-white/5 hover:bg-white/5">
<div className="w-full h-12 md:w-48 rounded-lg bg-gradient-to-r from-[#FF1470] to-blue-500"></div>
<div className="flex-1 text-center md:text-left">
<h4 className="text-lg font-medium text-white">Azure Tier</h4>
<p className="text-sm text-gray-400">Standard enterprise grid connectivity.</p>
</div>
<div className="font-mono opacity-50 group-hover:opacity-100 transition-opacity text-white">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-[#050505] to-[#110005] pt-24 pb-24">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">Calculate your Impact</h2>
<div className="bg-[#0A0A0A] border rounded-2xl p-8 md:p-12 shadow-2xl border-white/10">
<div className="mb-10">
<div className="flex justify-between mb-4">
<label className="text-sm font-medium text-gray-400">Monthly Usage (GW/h)</label>
<span className="font-mono text-xl text-white">250</span>
</div>

<div className="relative w-full h-2 rounded-full bg-gray-800">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#900030] to-[#FF1470]" style={{width: '40%'}}></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[40%] w-6 h-6 rounded-full shadow-[0_0_10px_rgba(255,20,112,0.5)] cursor-pointer hover:scale-110 transition-transform bg-white"></div>
</div>
</div>
<div className="mb-10">
<div className="flex justify-between mb-4">
<label className="text-sm font-medium text-gray-400">Nodes Connected</label>
<span className="font-mono text-xl text-white">5000+</span>
</div>
<div className="relative w-full h-2 rounded-full bg-gray-800">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FF1470] to-purple-500" style={{width: '75%'}}></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[75%] w-6 h-6 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)] cursor-pointer hover:scale-110 transition-transform bg-white"></div>
</div>
</div>
<div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-6 border-white/10">
<div className="text-left">
<p className="text-sm text-gray-400">Estimated Savings</p>
<p className="text-4xl font-medium tracking-tight text-white">$42,000<span className="text-lg text-gray-500 font-normal">/mo</span></p>
</div>
<button className="w-full md:w-auto px-6 py-3 bg-[#FF1470] hover:bg-[#d60055] font-medium rounded-full transition-colors shadow-lg text-white shadow-pink-900/20">
                        Start Trial
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-[#050505] border-t py-12 border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12">
<div className="space-y-4 max-w-xs">
<div className="flex items-center space-x-2">
<div className="flex items-center justify-center w-6 h-6 rounded bg-[#FF1470]">
<svg className="lucide lucide-zap w-3 h-3 text-white fill-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-lg font-medium tracking-tight text-white">JUPITER VOLTA</span>
</div>
<p className="text-sm text-gray-500 leading-relaxed">
                        Redefining energy distribution through decentralized neural networks. Built for the future.
                    </p>
<div className="flex space-x-4">
<a className="text-gray-500 transition-colors hover:text-white" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-gray-500 transition-colors hover:text-white" href="#"><svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="text-gray-500 transition-colors hover:text-white" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
<div>
<h4 className="font-medium mb-4 text-white">Product</h4>
<ul className="space-y-2 text-gray-500">
<li><a className="hover:text-[#FF1470] transition-colors" href="#">Infrastructure</a></li>
<li><a className="hover:text-[#FF1470] transition-colors" href="#">Edge Network</a></li>
<li><a className="hover:text-[#FF1470] transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-[#FF1470] transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-white">Resources</h4>
<ul className="space-y-2 text-gray-500">
<li><a className="hover:text-[#FF1470] transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-[#FF1470] transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-[#FF1470] transition-colors" href="#">Community</a></li>
<li><a className="hover:text-[#FF1470] transition-colors" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-white">Company</h4>
<ul className="space-y-2 text-gray-500">
<li><a className="hover:text-[#FF1470] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[#FF1470] transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-[#FF1470] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#FF1470] transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-xs border-white/5 text-gray-600">
<p className="" style={{}}>© 2024 Volta Inc. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-gray-400" href="#">Privacy Policy</a>
<a className="hover:text-gray-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
