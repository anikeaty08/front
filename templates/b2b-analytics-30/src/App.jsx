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
      

<div className="grain-overlay"></div>

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

<div className="absolute top-[30%] left-[60%] w-[600px] h-[600px] bg-[#FF2E2E] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.15] animate-pulse"></div>

<div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-slate-800 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>

<div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-[#FF2E2E] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.08]"></div>
</div>

<nav className="relative z-50 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 relative flex items-center justify-center">
<div className="absolute inset-0 border border-white/20 rounded-full group-hover:border-red-500/50 transition-colors duration-500"></div>
<div className="w-2 h-2 bg-white rounded-full group-hover:bg-red-500 transition-colors duration-500 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
</div>
<span className="text-sm font-semibold tracking-[0.2em] text-white uppercase">The Heart Share</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-mono text-gray-400 tracking-wide">
<a className="hover:text-white transition-colors" href="#">PLATFORM</a>
<a className="hover:text-white transition-colors" href="#">INTELLIGENCE</a>
<a className="hover:text-white transition-colors" href="#">CASE STUDIES</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block text-xs font-mono text-gray-400 hover:text-white transition-colors">LOGIN_SECURE</button>
<button className="px-4 py-2 text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 rounded text-white transition-all backdrop-blur-sm">
                GET DEMO
            </button>
</div>
</nav>

<main className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-6 pt-10 pb-20">

<div className="w-full lg:w-1/2 flex flex-col gap-8 lg:pr-12 relative z-20">

<div className="inline-flex items-center gap-3 w-fit">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-950/10 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
<span className="font-mono text-[10px] text-red-400 tracking-widest uppercase">System Status: ANALYZING</span>
</div>
</div>

<h1 className="text-5xl md:text-7xl font-semibold text-white leading-[1.05] tracking-tight">
                Your Customers <br/>
<span className="text-white/40">Are Satisfied.</span> <br/>
                So Why Are <br/>
<i className="font-serif italic text-red-500/90 pr-2">They Leaving?</i>
</h1>

<p className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed font-light">
                Decode the hidden signals of churn before it happens. The Heart Share utilizes neural predictive modeling to visualize emotional equity versus functional satisfaction.
            </p>

<div className="flex flex-col sm:flex-row gap-6 mt-4 items-start sm:items-center">
<button className="group relative px-8 py-4 bg-[#FF2E2E] text-white font-mono text-xs tracking-wider font-semibold rounded overflow-hidden transition-all hover:scale-[1.02] red-glow">
<span className="relative z-10 flex items-center gap-2">
                        [ Initialize Analysis ]
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
</button>
<div className="flex items-center gap-4 text-xs font-mono text-gray-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border border-black bg-gray-800 flex items-center justify-center text-[10px] text-white">JD</div>
<div className="w-8 h-8 rounded-full border border-black bg-gray-700 flex items-center justify-center text-[10px] text-white">AS</div>
<div className="w-8 h-8 rounded-full border border-black bg-gray-600 flex items-center justify-center text-[10px] text-white">+</div>
</div>
<span>JOIN 400+ ENTERPRISES</span>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 border-t border-white/5 pt-8">
<div>
<p className="text-2xl font-mono text-white">98<span className="text-red-500">%</span></p>
<p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Accuracy Rate</p>
</div>
<div>
<p className="text-2xl font-mono text-white">2.4<span className="text-gray-500">B</span></p>
<p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Data Points</p>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 h-[500px] lg:h-[700px] relative flex items-center justify-center perspective-[1000px]">

<div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">

<div className="absolute inset-0 rounded-full border border-red-500/20 animate-spin-slow" style={{animationDuration: '30s'}}></div>
<div className="absolute inset-10 rounded-full border border-white/10 animate-spin-slow" style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
<div className="absolute inset-24 rounded-full border border-dashed border-red-500/30 animate-spin-slow" style={{animationDuration: '40s'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-red-600/20 to-transparent rounded-full filter blur-2xl animate-pulse"></div>


<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm glass-panel rounded-2xl p-6 transform transition-transform hover:scale-[1.02] duration-500 animate-float">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-red-500 text-lg" icon="solar:pie-chart-2-linear"></iconify-icon>
<span className="text-xs font-mono text-gray-300 tracking-wider">RETENTION_MATRIX</span>
</div>
<iconify-icon className="text-gray-500" icon="solar:menu-dots-linear"></iconify-icon>
</div>

<div className="relative w-full aspect-square flex items-center justify-center">

<svg className="w-full h-full overflow-visible" viewbox="0 0 100 100">

<line stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" x1="50" x2="50" y1="50" y2="5"></line>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" x1="50" x2="90" y1="50" y2="27"></line>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" x1="50" x2="90" y1="50" y2="73"></line>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" x1="50" x2="50" y1="50" y2="95"></line>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" x1="50" x2="10" y1="50" y2="73"></line>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" x1="50" x2="10" y1="50" y2="27"></line>

<polygon fill="none" points="50,15 80,32 80,68 50,85 20,68 20,32" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"></polygon>
<polygon fill="none" points="50,25 70,37 70,63 50,75 30,63 30,37" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"></polygon>


<polygon fill="rgba(255, 46, 46, 0.2)" points="50,10 85,30 65,70 50,60 35,70 15,30" stroke="#FF2E2E" strokeLinejoin="round" strokeWidth="1.5">
<animate attributename="opacity" duration="3s" repeatcount="indefinite" values="0.8;1;0.8"></animate>
</polygon>

<circle cx="50" cy="10" fill="white" r="1.5"></circle>
<circle cx="85" cy="30" fill="white" r="1.5"></circle>
<circle cx="65" cy="70" fill="white" r="1.5"></circle>
<circle cx="50" cy="60" fill="white" r="1.5"></circle>
<circle cx="35" cy="70" fill="white" r="1.5"></circle>
<circle cx="15" cy="30" fill="white" r="1.5"></circle>
</svg>

<div className="absolute inset-0 pointer-events-none">
<span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 text-[8px] font-mono text-gray-400">LOYALTY</span>
<span className="absolute top-[25%] right-0 translate-x-2 text-[8px] font-mono text-gray-400">NPS</span>
<span className="absolute bottom-[25%] right-0 translate-x-2 text-[8px] font-mono text-gray-400">VALUE</span>
<span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 text-[8px] font-mono text-gray-400">SENTIMENT</span>
<span className="absolute bottom-[25%] left-0 -translate-x-2 text-[8px] font-mono text-gray-400">USAGE</span>
<span className="absolute top-[25%] left-0 -translate-x-2 text-[8px] font-mono text-gray-400">TRUST</span>
</div>
</div>
</div>

<div className="absolute -bottom-10 -right-4 w-40 glass-panel rounded-xl p-4 animate-float" style={{animationDelay: '1s'}}>
<div className="flex items-center gap-2 mb-2">
<div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
<span className="text-[9px] font-mono text-gray-400 uppercase">Risk Factor</span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">High</div>
<div className="w-full h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
<div className="h-full w-[75%] bg-red-500"></div>
</div>
</div>

<div className="absolute -top-6 -left-8 w-auto glass-panel rounded-xl px-4 py-3 animate-float" style={{animationDelay: '2s'}}>
<div className="flex items-center gap-3">
<div className="bg-white/10 p-1.5 rounded-md text-white">
<iconify-icon icon="solar:heart-pulse-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-[9px] font-mono text-gray-400 uppercase">Heart Share</div>
<div className="text-sm font-semibold text-white">42.8% <span className="text-red-400 text-[10px] ml-1">↓</span></div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="fixed bottom-0 left-0 w-full z-20 border-t border-white/5 bg-[#050505]/80 backdrop-blur-sm py-4 hidden md:block">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-sm font-bold tracking-tight font-sans">ACME CORP</span>
<span className="text-sm font-bold tracking-tight font-sans">STRATOS</span>
<span className="text-sm font-bold tracking-tight font-sans">HYPERION</span>
<span className="text-sm font-bold tracking-tight font-sans">OBLIVION</span>
<span className="text-sm font-bold tracking-tight font-sans">NEBULA AI</span>
</div>
<div className="flex items-center gap-2">
<span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-[10px] font-mono text-gray-500">OPERATIONAL // V.2.0.4</span>
</div>
</div>
</footer>

    </>
  );
}
