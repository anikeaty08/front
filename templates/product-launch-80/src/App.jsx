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
      

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="glass-effect bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-sm rounded-full pl-6 pr-2 py-2 flex items-center justify-between w-full max-w-4xl transition-all hover:shadow-md hover:border-slate-300/60">

<div className="flex items-center gap-2 cursor-pointer">
<div className="bg-ph-orange text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg pt-0.5">P</div>
<span className="font-semibold text-lg tracking-tight text-slate-900">ProductHunt</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Launches</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Products</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">News</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Community</a>
</div>

<button className="bg-ph-orange hover:bg-orange-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all active:scale-95 shadow-lg shadow-orange-500/20 flex items-center gap-1.5">
<i className="w-4 h-4 stroke-[2.5]" data-lucide="plus"></i>
                Launch
            </button>
</div>
</nav>

<main className="relative pt-40 pb-20 flex flex-col items-center justify-center min-h-screen w-full">

<div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-orange-50/50 rounded-[100%] blur-3xl opacity-60"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-slate-50/80 rounded-full blur-3xl"></div>
</div>

<div className="mb-8 animate-fade-in-up">
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm text-xs font-medium text-slate-600">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-ph-orange"></span>
</span>
                145+ Products Launched Today
            </span>
</div>

<div className="max-w-4xl px-4 text-center mb-6">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                Where Builders Launch <br/>
<span className="text-slate-400">When They're Serious</span>
</h1>
</div>

<p className="text-lg md:text-xl text-slate-500 text-center max-w-2xl px-6 leading-relaxed mb-10">
            Product Hunt connects you with a high-quality audience that gives actionable feedback, early adoption, and the momentum every startup needs.
        </p>

<div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
<button className="h-12 px-8 rounded-full bg-ph-orange text-white font-medium text-lg shadow-glow hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all active:scale-95 active:translate-y-0">
                Launch Your Product
            </button>
<button className="h-12 px-8 rounded-full border border-slate-200 bg-white text-slate-700 font-medium text-lg hover:border-slate-300 hover:bg-slate-50 transition-all active:scale-95">
                Browse Products
            </button>
</div>

<div className="flex items-center gap-3 mb-20 md:mb-32">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-[3px] border-white" src="https://i.pravatar.cc/100?img=12"/>
<img alt="User" className="w-10 h-10 rounded-full border-[3px] border-white" src="https://i.pravatar.cc/100?img=33"/>
<img alt="User" className="w-10 h-10 rounded-full border-[3px] border-white" src="https://i.pravatar.cc/100?img=59"/>
</div>
<div className="text-sm text-slate-500">
                Trusted by <span className="font-semibold text-slate-900">130k+</span> Founders
            </div>
</div>

<div className="w-full max-w-[1400px] h-[600px] relative perspective-container px-4 overflow-hidden md:overflow-visible">

<svg className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none -z-10 hidden md:block opacity-30">

<path d="M300 200 L100 100" stroke="#CBD5E1" stroke-dasharray="6 6" strokeWidth="2"></path>
<path d="M300 200 L100 300" stroke="#CBD5E1" stroke-dasharray="6 6" strokeWidth="2"></path>
<path d="M300 200 L50 200" stroke="#CBD5E1" stroke-dasharray="6 6" strokeWidth="2"></path>
<path d="M300 200 L150 50" stroke="#CBD5E1" stroke-dasharray="6 6" strokeWidth="2"></path>
<path d="M300 200 L150 350" stroke="#CBD5E1" stroke-dasharray="6 6" strokeWidth="2"></path>

<path d="M300 200 L600 200" stroke="#CBD5E1" stroke-dasharray="6 6" strokeWidth="2"></path>
</svg>

<div className="absolute top-1/2 left-1/2 md:left-[25%] -translate-x-1/2 -translate-y-1/2 z-10">

<div className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-slate-100 z-20 floating-icon">
<div className="w-20 h-20 md:w-24 md:h-24 bg-ph-orange rounded-full flex items-center justify-center text-white text-5xl font-bold pt-2 shadow-inner">P</div>

<div className="absolute inset-0 bg-orange-100 rounded-3xl -z-10 animate-ping opacity-20"></div>
</div>


<div className="absolute -top-24 -left-20 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 floating-icon" style={{animationDelay: '1s'}}>
<i className="w-6 h-6 text-black fill-black" data-lucide="zap"></i>
</div>

<div className="absolute -bottom-20 -left-24 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 floating-icon" style={{animationDelay: '2s'}}>
<i className="w-6 h-6 text-green-500" data-lucide="shopping-bag"></i>
</div>

<div className="absolute -top-16 -right-12 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 floating-icon" style={{animationDelay: '1.5s'}}>
<i className="w-6 h-6 text-slate-800" data-lucide="file-text"></i>
</div>

<div className="absolute -bottom-24 -right-4 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 floating-icon" style={{animationDelay: '0.5s'}}>
<i className="w-6 h-6 text-purple-600" data-lucide="slack"></i>
</div>

<div className="absolute top-4 -left-48 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 floating-icon hidden md:block" style={{animationDelay: '2.5s'}}>
<i className="w-6 h-6 text-blue-500" data-lucide="trello"></i>
</div>
</div>

<div className="absolute top-[40%] md:top-[25%] left-1/2 md:left-[45%] w-full h-96 cards-track pointer-events-none">
<div className="flex gap-10 opacity-90">

<div className="w-80 h-48 bg-white rounded-xl shadow-2xl border border-slate-200 p-5 flex flex-col justify-between shrink-0 hover:-translate-y-2 transition-transform duration-500">
<div className="flex justify-between items-start">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">S</div>
<div>
<div className="text-xs font-semibold text-ph-orange bg-orange-50 px-2 py-0.5 rounded mb-1 w-fit">Launched</div>
<h3 className="font-bold text-slate-900 text-lg">Stripe</h3>
</div>
</div>
<div className="flex flex-col items-center">
<i className="w-4 h-4 fill-slate-300 text-slate-300" data-lucide="triangle"></i>
<span className="text-xs text-slate-400 font-medium">4.2k</span>
</div>
</div>
<div className="space-y-2">
<div className="h-2 w-3/4 bg-slate-100 rounded-full"></div>
<div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
</div>
</div>

<div className="w-80 h-48 bg-white rounded-xl shadow-2xl border border-slate-200 p-5 flex flex-col justify-between shrink-0 translate-y-8 hover:-translate-y-6 transition-transform duration-500">
<div className="flex justify-between items-start">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold"><i className="w-6 h-6" data-lucide="layers"></i></div>
<div>
<div className="text-xs font-semibold text-ph-orange bg-orange-50 px-2 py-0.5 rounded mb-1 w-fit">Launched</div>
<h3 className="font-bold text-slate-900 text-lg">Softr</h3>
</div>
</div>
<div className="flex flex-col items-center">
<i className="w-4 h-4 fill-ph-orange text-ph-orange" data-lucide="triangle"></i>
<span className="text-xs text-slate-500 font-medium">2.1k</span>
</div>
</div>
<div className="space-y-2">
<div className="h-2 w-3/4 bg-slate-100 rounded-full"></div>
<div className="h-2 w-full bg-slate-100 rounded-full"></div>
</div>
</div>

<div className="w-80 h-48 bg-white rounded-xl shadow-2xl border border-slate-200 p-5 flex flex-col justify-between shrink-0 translate-y-16 hover:-translate-y-14 transition-transform duration-500">
<div className="flex justify-between items-start">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white font-bold"><i className="w-6 h-6" data-lucide="framer"></i></div>
<div>
<div className="text-xs font-semibold text-ph-orange bg-orange-50 px-2 py-0.5 rounded mb-1 w-fit">Launched</div>
<h3 className="font-bold text-slate-900 text-lg">Framer</h3>
</div>
</div>
<div className="flex flex-col items-center">
<i className="w-4 h-4 fill-slate-300 text-slate-300" data-lucide="triangle"></i>
<span className="text-xs text-slate-400 font-medium">900</span>
</div>
</div>
<div className="space-y-2">
<div className="h-2 w-2/3 bg-slate-100 rounded-full"></div>
<div className="h-2 w-5/6 bg-slate-100 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
