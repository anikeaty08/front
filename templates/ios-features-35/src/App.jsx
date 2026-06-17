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
      

<main className="w-full max-w-6xl mx-auto h-full flex flex-col gap-8">

<header className="flex flex-col items-center justify-center text-center space-y-2 mb-4">
<div className="flex items-center justify-center bg-white/50 border border-white/60 rounded-full h-12 w-12 shadow-sm mb-2">
<span className="font-semibold tracking-tighter text-lg text-slate-900">OS</span>
</div>
<h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-slate-900">System Highlights</h1>
<p className="text-lg text-slate-500 font-normal max-w-md">Refined interactions designed for the next generation of spatial computing.</p>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full flex-grow">

<div className="group relative overflow-hidden bg-white/70 border border-white/50 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 ios-blur flex flex-col justify-between h-80 md:h-96 w-full">
<div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
<div className="p-8 z-10">
<div className="bg-blue-50 w-12 h-12 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
<iconify-icon icon="solar:connection-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-2">Seamless Sync</h2>
<p className="text-base text-slate-500 font-normal leading-relaxed">Instantly connects across your ecosystem with zero latency protocols.</p>
</div>

<div className="relative w-full h-full flex items-center justify-center pb-8 px-8 overflow-hidden">
<div className="relative w-full max-w-[240px] bg-white rounded-[1.5rem] p-4 shadow-sm border border-slate-100 flex items-center justify-between transform group-hover:scale-[1.02] transition-transform duration-500">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
<iconify-icon icon="solar:wifi-router-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">AirLink</span>
<span className="text-xs text-slate-400">Active</span>
</div>
</div>

<div className="w-12 h-7 bg-blue-500 rounded-full relative transition-colors duration-300">
<div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-400/20 blur-3xl rounded-full -z-10"></div>
</div>
</div>

<div className="group relative overflow-hidden bg-white/70 border border-white/50 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 ios-blur flex flex-col justify-between h-80 md:h-96 w-full">
<div className="p-8 z-10">
<div className="bg-slate-100 w-12 h-12 rounded-2xl flex items-center justify-center text-slate-600 mb-6">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-2">Privacy Core</h2>
<p className="text-base text-slate-500 font-normal leading-relaxed">On-device processing ensures your biometric data never leaves your control.</p>
</div>

<div className="relative w-full h-full flex items-center justify-center pb-6">

<div className="relative flex flex-col items-center">
<div className="relative z-10 w-16 h-16 bg-gradient-to-b from-slate-100 to-white rounded-[1.2rem] shadow-sm border border-white flex items-center justify-center text-blue-500 transform transition-transform duration-500 group-hover:scale-110">
<iconify-icon className="opacity-0 group-hover:opacity-100 absolute transition-opacity duration-500" icon="solar:lock-unlocked-linear" width="32"></iconify-icon>
<iconify-icon className="opacity-100 group-hover:opacity-0 absolute transition-opacity duration-500" icon="solar:lock-keyhole-linear" width="32"></iconify-icon>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-blue-500/20 rounded-full opacity-0 group-hover:animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-blue-500/10 rounded-full opacity-0 group-hover:animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite_200ms]"></div>
<div className="mt-6 bg-slate-200/50 backdrop-blur-sm px-4 py-1 rounded-full">
<span className="text-xs font-medium text-slate-500 group-hover:text-blue-500 transition-colors">Verifying Identity...</span>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-white/70 border border-white/50 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 ios-blur flex flex-col justify-between h-80 md:h-96 w-full">
<div className="p-8 z-10">
<div className="bg-orange-50 w-12 h-12 rounded-2xl flex items-center justify-center text-orange-500 mb-6">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-2">Live Metrics</h2>
<p className="text-base text-slate-500 font-normal leading-relaxed">Real-time health monitoring of system resources and battery efficiency.</p>
</div>

<div className="relative w-full h-full flex items-center justify-center pb-8 px-8">
<div className="relative w-32 h-32 transform group-hover:scale-105 transition-transform duration-500">

<svg className="w-full h-full transform -rotate-90">
<circle cx="64" cy="64" fill="none" r="56" stroke="rgb(241 245 249)" strokeWidth="12"></circle>
<circle className="opacity-90 drop-shadow-sm" cx="64" cy="64" fill="none" r="56" stroke="rgb(59 130 246)" stroke-dasharray="351" stroke-dashoffset="80" strokeLinecap="round" strokeWidth="12"></circle>
</svg>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<svg className="w-20 h-20 transform -rotate-90">
<circle cx="40" cy="40" fill="none" r="34" stroke="rgb(241 245 249)" strokeWidth="12"></circle>
<circle className="opacity-90" cx="40" cy="40" fill="none" r="34" stroke="rgb(249 115 22)" stroke-dasharray="213" stroke-dashoffset="60" strokeLinecap="round" strokeWidth="12"></circle>
</svg>
</div>

<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-xl font-semibold text-slate-800 tracking-tight">98%</span>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-white/70 border border-white/50 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 ios-blur flex flex-col justify-between h-80 md:h-96 w-full">
<div className="p-8 z-10">
<div className="bg-indigo-50 w-12 h-12 rounded-2xl flex items-center justify-center text-indigo-500 mb-6">
<iconify-icon icon="solar:gallery-wide-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-2">Smart Library</h2>
<p className="text-base text-slate-500 font-normal leading-relaxed">Intelligent sorting organizes your assets into beautiful, curated stacks.</p>
</div>

<div className="relative w-full h-full flex items-end justify-center pb-10 overflow-visible">
<div className="relative w-40 h-28 perspective-1000">

<div className="absolute bottom-0 left-0 w-full h-full bg-slate-100 rounded-xl border border-white shadow-sm transform scale-90 -translate-y-6 opacity-60 transition-transform duration-500 group-hover:-translate-y-8 group-hover:rotate-[-4deg]"></div>

<div className="absolute bottom-0 left-0 w-full h-full bg-slate-50 rounded-xl border border-white shadow-sm transform scale-95 -translate-y-3 opacity-80 transition-transform duration-500 group-hover:-translate-y-4 group-hover:rotate-[2deg]"></div>

<div className="absolute bottom-0 left-0 w-full h-full bg-white rounded-xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.06)] flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-105">
<iconify-icon className="text-indigo-400 opacity-50" icon="solar:gallery-favourite-linear" width="32"></iconify-icon>
</div>

<div className="absolute -right-4 -top-2 bg-blue-500 text-white text-[10px] font-medium px-2 py-0.5 rounded-full shadow-sm z-20 border border-white transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                            New
                        </div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
