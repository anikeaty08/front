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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(15,23,42,0.4),_#02040a_80%)]"></div>

<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]"></div>
<div className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[120px]"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
</div>

<main className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">

<div className="relative w-full max-w-7xl h-[600px] md:h-[800px] flex items-center justify-center">

<div className="absolute inset-0 flex items-center justify-center perspective-container">
<div className="orbital-plane relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] flex items-center justify-center">

<div className="absolute w-[90%] h-[90%] border border-slate-800/60 rounded-full animate-orbit-slow">

<div className="absolute top-1/2 left-[-4px] w-2 h-2 bg-slate-700 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
</div>

<div className="absolute w-[75%] h-[75%] border-[1px] border-dashed border-cyan-900/50 rounded-full animate-orbit-counter-slow opacity-70"></div>

<div className="absolute w-[60%] h-[60%] border-[1px] border-cyan-500/20 rounded-full animate-orbit-medium shadow-[0_0_30px_rgba(6,182,212,0.1)]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
</div>

<div className="absolute bottom-[15%] right-[10%]">
<div className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
</div>
</div>

<div className="absolute w-[35%] h-[35%] border border-violet-500/30 rounded-full animate-orbit-slow">
<div className="absolute bottom-0 left-1/2 w-full h-full bg-gradient-to-t from-violet-500/5 to-transparent rounded-full transform rotate-45"></div>
</div>

<div className="absolute w-[120%] h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent rotate-45"></div>
<div className="absolute w-[120%] h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent -rotate-45"></div>
</div>
</div>

<div className="absolute z-20 flex flex-col items-center justify-center animate-float">

<div className="absolute w-48 h-48 bg-cyan-500/20 rounded-full blur-[60px] animate-pulse-slow"></div>
<div className="absolute w-32 h-32 bg-blue-600/10 rounded-full blur-[30px]"></div>

<div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#02040a] border border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.25),inset_0_0_20px_rgba(6,182,212,0.1)] flex items-center justify-center backdrop-blur-sm">

<div className="absolute inset-[6px] rounded-full border border-slate-700/50"></div>
<div className="absolute inset-[12px] rounded-full border border-slate-800/80"></div>

<div className="relative z-10 text-cyan-100 drop-shadow-[0_0_15px_rgba(165,243,252,0.6)]">
<i className="w-10 h-10 md:w-12 md:h-12 stroke-[1.5]" data-lucide="brain"></i>
</div>

<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-cyan-500/60">
<i className="w-4 h-4 fill-cyan-500/20" data-lucide="sparkle"></i>
</div>
</div>

<div className="mt-8 flex flex-col items-center gap-2 opacity-0 animate-[fade-in_1s_ease-out_forwards_0.5s]">
<div className="h-8 w-[1px] bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
<span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">System Online</span>
</div>
</div>


<div className="absolute left-[10%] md:left-[25%] top-[40%] flex items-center gap-3 animate-[pulse_4s_ease-in-out_infinite]">
<div className="w-3 h-3 rounded-full border border-cyan-500/50 bg-[#02040a] shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
<div className="hidden md:flex flex-col">
<div className="h-[1px] w-12 bg-gradient-to-r from-cyan-500/30 to-transparent"></div>
</div>
</div>

<div className="absolute right-[10%] md:right-[25%] bottom-[40%] flex items-center flex-row-reverse gap-3 animate-[pulse_5s_ease-in-out_infinite_1s]">
<div className="w-3 h-3 rounded-full border border-violet-500/50 bg-[#02040a] shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
<div className="hidden md:flex flex-col items-end">
<div className="h-[1px] w-16 bg-gradient-to-l from-violet-500/30 to-transparent"></div>
</div>
</div>
</div>

<div className="absolute bottom-16 md:bottom-24 w-full px-6 flex flex-col items-center text-center z-30">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 shadow-xl">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">Neural Engine v2.4</span>
</div>

<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-6 drop-shadow-2xl">
                Cognition at <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500">Infinite Scale</span>
</h1>

<p className="text-lg md:text-xl text-slate-400 font-normal max-w-2xl leading-relaxed mb-8">
                Orchestrate complex AI workflows with a self-learning neural fabric designed for the next generation of intelligence.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="group relative px-6 py-3 rounded-full bg-white text-slate-950 text-sm font-semibold hover:bg-cyan-50 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center gap-2">
<span>Deploy Network</span>
<i className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2]" data-lucide="arrow-right"></i>
</button>
<button className="px-6 py-3 rounded-full border border-slate-700 text-slate-300 text-sm font-medium hover:border-slate-500 hover:text-white transition-colors bg-slate-900/50 backdrop-blur-sm">
                    Read the Research
                </button>
</div>
</div>

<div className="absolute w-full h-full pointer-events-none overflow-hidden z-10">
<div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-500/40 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
<div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-violet-500/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
<div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-500/40 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
</div>
</main>


    </>
  );
}
