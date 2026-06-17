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
      

<div className="fixed inset-0 z-0 bg-gradient-to-br from-[#0a0a18] via-[#0f0f20] to-[#141428]"></div>
<div className="fixed inset-0 z-0 noise-bg mix-blend-overlay pointer-events-none"></div>

<div className="fixed top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-teal-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 flex flex-col items-center">

<header className="text-center mb-24 space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
<span className="text-xs font-medium tracking-wide text-cyan-200/80 uppercase">AI Workflow Engine v2.0</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white">
                Orchestrate<span className="text-white/40">AI</span>
</h1>
<p className="text-base md:text-lg text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
                Build intelligent, self-correcting autonomous flows with holographic visibility.
            </p>
</header>

<div className="w-full relative flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-0 perspective-[1000px]">

<div className="group relative w-full lg:w-64 h-auto animate-levitate z-20">
<div className="glass-node rounded-2xl p-6 transition-all duration-500 ease-out flex flex-col items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all duration-300">
<iconify-icon className="text-indigo-200 group-hover:text-cyan-300 transition-colors" icon="lucide:database" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white tracking-wide mb-1 group-hover:text-cyan-200 transition-colors">Data Ingestion</h3>
<p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300">Raw unstructured data stream normalization.</p>
</div>

<div className="absolute top-6 right-6 flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
</div>
</div>
</div>

<div className="relative flex-shrink-0 flex items-center justify-center lg:w-24 lg:h-auto w-auto h-20 -my-2 lg:my-0 z-10">

<div className="hidden lg:block w-full h-[2px] river-gradient rounded-full shadow-[0_0_15px_rgba(45,212,191,0.4)] opacity-60 group-hover:opacity-100 transition-opacity"></div>

<div className="block lg:hidden h-full w-[2px] river-gradient-vertical rounded-full shadow-[0_0_15px_rgba(45,212,191,0.4)] opacity-60"></div>

<div className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(45,212,191,0.8)] animate-ping opacity-75"></div>
</div>

<div className="group relative w-full lg:w-64 h-auto animate-levitate delay-1000 z-20">
<div className="glass-node rounded-2xl p-6 transition-all duration-500 ease-out flex flex-col items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-white/10 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all duration-300">
<iconify-icon className="text-cyan-200 group-hover:text-cyan-100 transition-colors" icon="lucide:wand-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white tracking-wide mb-1 group-hover:text-cyan-200 transition-colors">Smart Transform</h3>
<p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300">LLM-driven context enrichment &amp; formatting.</p>
</div>

<div className="w-full h-1 bg-white/5 rounded-full mt-2 overflow-hidden">
<div className="h-full bg-cyan-400/50 w-2/3 animate-pulse rounded-full"></div>
</div>
</div>
</div>

<div className="relative flex-shrink-0 flex items-center justify-center lg:w-24 lg:h-auto w-auto h-20 -my-2 lg:my-0 z-10">
<div className="hidden lg:block w-full h-[2px] river-gradient rounded-full shadow-[0_0_15px_rgba(45,212,191,0.4)] opacity-60"></div>
<div className="block lg:hidden h-full w-[2px] river-gradient-vertical rounded-full shadow-[0_0_15px_rgba(45,212,191,0.4)] opacity-60"></div>
<iconify-icon className="hidden lg:block absolute text-cyan-500/50" icon="lucide:chevron-right" width="16"></iconify-icon>
<iconify-icon className="block lg:hidden absolute text-cyan-500/50" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>

<div className="group relative w-full lg:w-64 h-auto animate-levitate delay-2000 z-20">
<div className="glass-node rounded-2xl p-6 transition-all duration-500 ease-out flex flex-col items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500/20 to-orange-500/20 flex items-center justify-center border border-white/10 group-hover:border-rose-400/50 group-hover:shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all duration-300">
<iconify-icon className="text-rose-200 group-hover:text-rose-100 transition-colors" icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white tracking-wide mb-1 group-hover:text-cyan-200 transition-colors">Critic Gate</h3>
<p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300">Accuracy verification &amp; hallucination check.</p>
</div>
<div className="flex gap-2 mt-1">
<span className="text-[10px] uppercase tracking-wider font-semibold text-emerald-400/80 border border-emerald-500/20 px-1.5 py-0.5 rounded bg-emerald-500/10">Pass</span>
<span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 px-1.5 py-0.5">Retry</span>
</div>
</div>
</div>

<div className="relative flex-shrink-0 flex items-center justify-center lg:w-24 lg:h-auto w-auto h-20 -my-2 lg:my-0 z-10">
<div className="hidden lg:block w-full h-[2px] river-gradient rounded-full shadow-[0_0_15px_rgba(45,212,191,0.4)] opacity-60"></div>
<div className="block lg:hidden h-full w-[2px] river-gradient-vertical rounded-full shadow-[0_0_15px_rgba(45,212,191,0.4)] opacity-60"></div>
</div>

<div className="group relative w-full lg:w-64 h-auto animate-levitate delay-3000 z-20">
<div className="glass-node rounded-2xl p-6 transition-all duration-500 ease-out flex flex-col items-start gap-4 border-l-2 border-l-cyan-500/30">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center border border-white/10 group-hover:border-emerald-400/50 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all duration-300">
<iconify-icon className="text-emerald-200 group-hover:text-emerald-100 transition-colors" icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white tracking-wide mb-1 group-hover:text-emerald-200 transition-colors">Execution</h3>
<p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300">API triggering &amp; final payload delivery.</p>
</div>

<div className="w-full p-2 bg-black/40 rounded border border-white/5 font-mono text-[9px] text-cyan-300/80 leading-tight opacity-70 group-hover:opacity-100 transition-opacity">
                        { "status": 200,<br/>"latency": "42ms" }
                    </div>
</div>
</div>
</div>

<div className="absolute inset-0 pointer-events-none flex justify-center items-center z-0 opacity-20">
<svg className="w-full h-full absolute" preserveaspectratio="none" viewbox="0 0 1000 400">
<path className="opacity-30" d="M0,200 Q500,250 1000,200" fill="none" stroke="url(#lineGradient)" strokeWidth="1"></path>
<defs>
<lineargradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="transparent"></stop>
<stop offset="50%" stop-color="#2dd4bf"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>
</div>
</section>
<footer className="absolute bottom-6 text-center w-full z-10 opacity-40 hover:opacity-80 transition-opacity">
<p className="text-xs font-medium text-slate-500 tracking-wider">SCROLL TO EXPLORE WORKFLOWS</p>
<div className="mt-2 animate-bounce">
<iconify-icon className="text-slate-500" icon="lucide:arrow-down" width="16"></iconify-icon>
</div>
</footer>

    </>
  );
}
