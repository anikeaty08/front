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



        function toggleFlip() {
            const card = document.getElementById('card-inner');
            card.classList.toggle('rotate-y-180');
        }
    
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
      

<div className="relative group w-full max-w-sm h-[500px] perspective-1000">

<div className="absolute top-4 bottom-4 left-4 right-4 bg-gradient-to-r from-orange-500/40 via-red-500/40 to-blue-600/40 rounded-3xl blur-2xl opacity-60 animate-gradient-xy"></div>

<div className="relative w-full h-full duration-700 transition-all transform-style-3d" id="card-inner">

<div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl border border-white/10 glass shadow-2xl overflow-hidden flex flex-col">

<div className="relative flex-1 flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-800/30 to-neutral-900/30">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

<div className="absolute top-5 left-5 right-5 flex justify-between items-start z-20">
<div className="flex items-center gap-1.5 bg-neutral-950/60 border border-white/10 px-2.5 py-1 rounded-full backdrop-blur-md">
<iconify-icon className="text-orange-400 text-sm" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-xs font-medium text-orange-400 uppercase tracking-widest">Legendary</span>
</div>
<div className="flex flex-col items-end">
<span className="text-xs text-neutral-400">LVL 42</span>
<div className="w-12 h-1 bg-neutral-700/50 rounded-full mt-1">
<div className="h-full bg-orange-500 w-[85%] rounded-full"></div>
</div>
</div>
</div>

<img alt="Avatar" className="w-64 h-auto drop-shadow-2xl z-10 animate-float" src="https://i.ibb.co/680zTjS/dragon.png"/>

<button className="absolute bottom-4 right-4 z-20 p-2 rounded-full bg-neutral-800/50 border border-white/10 text-neutral-400 hover:text-white hover:bg-neutral-700/50 transition-colors backdrop-blur-sm group/btn" onclick="toggleFlip()">
<iconify-icon className="text-lg transition-transform group-hover/btn:rotate-180 duration-500" icon="solar:flip-horizontal-linear"></iconify-icon>
</button>
</div>

<div className="p-6 bg-neutral-900/95 border-t border-white/5 relative z-20">
<div className="mb-5 text-center">
<h2 className="text-2xl font-medium tracking-tight text-white">Inferno Scholar</h2>
<p className="text-neutral-500 text-sm mt-1">Guardian of the Knowledge Realm</p>
</div>
<button className="w-full bg-white text-neutral-950 text-sm font-medium py-3 rounded-xl hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<span>Select Character</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl border border-white/10 glass shadow-2xl overflow-hidden bg-neutral-900 flex flex-col">

<div className="p-6 border-b border-white/5 flex items-center justify-between bg-neutral-900/50">
<h3 className="text-lg font-medium tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-orange-400" icon="solar:chart-square-linear"></iconify-icon>
                        Abilities &amp; Stats
                    </h3>
<button className="text-neutral-500 hover:text-white transition-colors" onclick="toggleFlip()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>

<div className="flex-1 p-6 flex flex-col justify-center space-y-7 relative overflow-hidden">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

<div className="relative">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-2.5 text-neutral-300">
<div className="p-1.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
<iconify-icon icon="solar:calculator-linear"></iconify-icon>
</div>
<span className="text-xs font-medium uppercase tracking-wide">Math Fury</span>
</div>
<span className="text-sm font-medium text-white">96</span>
</div>
<div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden ring-1 ring-white/5">
<div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 w-[96%] shadow-[0_0_12px_rgba(56,189,248,0.4)]"></div>
</div>
</div>

<div className="relative">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-2.5 text-neutral-300">
<div className="p-1.5 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center">
<iconify-icon icon="solar:palette-linear"></iconify-icon>
</div>
<span className="text-xs font-medium uppercase tracking-wide">Creative Flame</span>
</div>
<span className="text-sm font-medium text-white">88</span>
</div>
<div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden ring-1 ring-white/5">
<div className="h-full bg-gradient-to-r from-orange-600 to-amber-400 w-[88%] shadow-[0_0_12px_rgba(251,146,60,0.4)]"></div>
</div>
</div>

<div className="relative">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-2.5 text-neutral-300">
<div className="p-1.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
<iconify-icon icon="solar:bolt-linear"></iconify-icon>
</div>
<span className="text-xs font-medium uppercase tracking-wide">Focus Shield</span>
</div>
<span className="text-sm font-medium text-white">74</span>
</div>
<div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden ring-1 ring-white/5">
<div className="h-full bg-gradient-to-r from-purple-600 to-pink-400 w-[74%] shadow-[0_0_12px_rgba(192,132,252,0.4)]"></div>
</div>
</div>

<div className="relative">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-2.5 text-neutral-300">
<div className="p-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
<span className="text-xs font-medium uppercase tracking-wide">Resilience</span>
</div>
<span className="text-sm font-medium text-white">92</span>
</div>
<div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden ring-1 ring-white/5">
<div className="h-full bg-gradient-to-r from-emerald-600 to-green-400 w-[92%] shadow-[0_0_12px_rgba(52,211,153,0.4)]"></div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-neutral-900/50 flex justify-center">
<button className="text-xs text-neutral-500 hover:text-white transition-colors flex items-center gap-1" onclick="toggleFlip()">
<iconify-icon icon="solar:undo-left-linear"></iconify-icon>
                        Back to Profile
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
