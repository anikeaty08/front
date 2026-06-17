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



        // Initialize Lucide icons with customized stroke width
        lucide.createIcons({
            strokeWidth: 1.5
        });
    
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
      

<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<main className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:gap-16 min-h-[100dvh]">

<div className="w-full lg:w-[45%] flex flex-col justify-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-max mb-8">
<div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
<span className="text-xs font-medium tracking-wide text-gray-400 uppercase">Crompton Signature Series</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                Absolute purity. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Tactile control.</span>
</h1>
<p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-lg">
                Experience water in its most pristine form. Our advanced 7-stage RO+UV filtration system paired with an ultra-detailed physical control panel brings a tangible connection back to your daily hydration.
            </p>
<div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
<button className="w-full sm:w-auto px-8 py-4 bg-gray-100 text-gray-950 rounded-full font-medium text-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
                    Order Now
                    <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto px-8 py-4 bg-transparent text-gray-300 rounded-full font-medium text-lg hover:text-white transition-colors flex items-center justify-center gap-2 group">
                    View Specifications
                    <i className="w-5 h-5 transition-transform group-hover:translate-x-1 text-gray-500" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="w-full lg:w-[55%] mt-20 lg:mt-0 flex justify-center lg:justify-end relative perspective-1000 z-10">

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[300px] h-[20px] bg-black blur-2xl rounded-full opacity-80"></div>

<div className="relative w-full max-w-[400px] aspect-[1/2.15] rounded-[3.5rem] bg-[#222224] p-[3px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(255,255,255,0.03)] transform rotate-y-[-5deg] rotate-x-[2deg]">

<div className="absolute inset-0 rounded-[3.5rem] shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_inset_0_-2px_4px_rgba(0,0,0,0.8)] pointer-events-none z-20"></div>

<div className="w-full h-full rounded-[3.35rem] bg-[#151517] relative overflow-hidden shadow-[inset_0_4px_20px_rgba(0,0,0,1)] flex flex-col border border-black/50">

<div className="flex justify-between items-center px-8 pt-6 pb-2 relative z-10">
<span className="text-xs font-medium text-gray-500 tracking-wider">09:48</span>
<div className="flex gap-1.5 items-center text-gray-500">
<i className="w-4 h-4" data-lucide="wifi"></i>
<i className="w-4 h-4" data-lucide="battery-medium"></i>
</div>
</div>
<div className="flex justify-between items-center px-6 mt-2 relative z-10">

<button className="w-12 h-12 rounded-full bg-[#1c1c1e] shadow-[4px_4px_10px_#09090b,_-2px_-2px_8px_#2b2b2e] flex items-center justify-center border border-white/[0.03] active:shadow-[inset_2px_2px_5px_#09090b,inset_-1px_-1px_3px_#2b2b2e] transition-shadow duration-150">
<i className="w-5 h-5 text-gray-400" data-lucide="arrow-left"></i>
</button>
<span className="text-lg font-semibold tracking-widest text-gray-300 uppercase">Crompton</span>

<button className="w-12 h-12 rounded-full bg-[#1c1c1e] shadow-[4px_4px_10px_#09090b,_-2px_-2px_8px_#2b2b2e] flex items-center justify-center border border-white/[0.03] active:shadow-[inset_2px_2px_5px_#09090b,inset_-1px_-1px_3px_#2b2b2e] transition-shadow duration-150">
<i className="w-5 h-5 text-gray-400" data-lucide="more-horizontal"></i>
</button>
</div>

<div className="mt-8 mx-auto w-[68%] flex-1 max-h-[420px] rounded-[3rem] bg-[#0c0c0e] shadow-[inset_8px_8px_20px_#030304,_inset_-4px_-4px_12px_#18181a] border border-white/[0.02] relative overflow-hidden flex flex-col p-2">

<div className="absolute top-0 inset-x-0 h-3/5 overflow-hidden rounded-t-[2.5rem]">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC4wMSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')] opacity-20 mix-blend-overlay"></div>
<div className="absolute bottom-0 inset-x-0 h-full bg-gradient-to-t from-cyan-900/80 via-cyan-800/40 to-transparent"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-400/20 blur-2xl rounded-full"></div>
<div className="relative z-10 flex flex-col items-center justify-start pt-10 h-full">
<span className="text-xs text-cyan-200/60 font-medium uppercase tracking-widest">TDS Level</span>
<span className="text-3xl font-semibold text-white mt-1">42 <span className="text-base text-gray-400 font-normal">ppm</span></span>
</div>
</div>

<div className="absolute bottom-2 left-2 right-2 h-[220px] rounded-[2.5rem] bg-gradient-to-b from-[#242426] to-[#18181a] shadow-[0_-10px_30px_rgba(0,0,0,0.8),_inset_0_2px_2px_rgba(255,255,255,0.08),_inset_0_-2px_4px_rgba(0,0,0,0.6)] flex flex-col items-center justify-between py-10 border border-[#2e2e32] z-20 cursor-grab active:cursor-grabbing transform transition-transform hover:-translate-y-1">
<span className="text-xl font-medium text-gray-200 tracking-wide">Dispense</span>

<div className="w-16 h-16 rounded-full bg-[#121214] shadow-[inset_4px_4px_8px_#050505,_inset_-2px_-2px_6px_#222224] flex items-center justify-center relative border border-black/50">

<div className="w-10 h-10 rounded-full bg-[#1c1c1e] shadow-[2px_2px_4px_#09090b,_-1px_-1px_3px_#2b2b2e] flex items-center justify-center border border-white/[0.04]">
<i className="w-5 h-5 text-gray-300" data-lucide="arrow-up"></i>
</div>
</div>
</div>
</div>

<div className="mt-auto mb-8 mx-auto w-[85%] h-20 rounded-[1.25rem] bg-[#1c1c1e] shadow-[8px_8px_16px_#0b0b0d,_-4px_-4px_12px_#27272a] flex items-center px-6 justify-between border border-white/[0.02] relative z-10">

<div className="w-12 h-8 rounded-full bg-[#0a0a0c] shadow-[inset_2px_2px_6px_#000,_inset_-1px_-1px_3px_#1f1f22] p-1 flex items-center relative overflow-hidden border border-black">
<div className="h-full w-[67%] bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
</div>
<span className="text-base text-gray-400 font-medium ml-4 mr-auto">Filter Life</span>
<span className="text-xl font-semibold text-white">67%</span>
</div>

<div className="h-1.5 w-32 bg-black/40 mx-auto mb-4 rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] z-10"></div>
</div>
</div>
</div>
</main>


    </>
  );
}
