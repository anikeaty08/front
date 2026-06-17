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
      

<div className="fixed inset-0 pointer-events-none z-0">

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-pink-900/30 rounded-full blur-[120px] mix-blend-screen animate-aura"></div>

<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/40 rounded-full blur-[100px] opacity-40"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20"></div>
</div>

<main className="z-10 min-h-screen flex flex-col w-full pt-20 pr-6 pb-20 pl-6 relative items-center justify-center">

<nav className="fixed top-0 left-0 w-full flex justify-between items-center p-6 z-50 mix-blend-difference">
<div className="uppercase text-xl font-semibold text-white tracking-tighter"></div>
<div className="h-1 w-8 bg-pink-500 rounded-full shadow-[0_0_10px_#ec4899]"></div>
</nav>

<section className="flex flex-col text-center w-full max-w-5xl mb-24 relative perspective-container items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur-[80px] md:blur-[120px] opacity-60 animate-aura -z-10"></div><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur-[80px] md:blur-[120px] opacity-60 animate-aura -z-10"></div>

<h1 className="md:text-9xl bg-clip-text hover:scale-105 transition-transform duration-700 ease-out cursor-default select-none text-7xl font-semibold text-transparent tracking-tighter bg-gradient-to-b from-white via-pink-100 to-pink-300 drop-shadow-[0_0_25px_rgba(236,72,153,0.8)] scale-100">Shaily Thakur</h1>

<p className="md:text-xl uppercase animate-float-delay text-lg font-medium text-pink-200/90 tracking-tight mt-6 drop-shadow-md">Digital Creator · Student · Vlogger </p>

<div className="flex gap-8 animate-float mt-12 gap-x-8 gap-y-8 items-center">

<a className="group flex items-center justify-center glass-panel transition-all duration-300 hover:scale-110 hover:-rotate-12 cursor-pointer z-50 w-16 h-16 rounded-full relative" href="https://www.instagram.com/shaily0924/" rel="noopener noreferrer" target="_blank">
<div className="group-hover:opacity-20 transition-opacity bg-pink-500 opacity-0 rounded-full absolute top-0 right-0 bottom-0 left-0 blur-md pointer-events-none"></div>
<svg className="group-hover:text-pink-400 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] w-[28px] h-[28px]" height="28" strokeWidth="2" style={{width: '28px', height: '28px', color: 'rgb(244, 114, 182)'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>

<a className="group flex items-center justify-center glass-panel transition-all duration-300 hover:scale-110 hover:rotate-12 cursor-pointer w-16 h-16 z-50 rounded-full relative" href="https://youtube.com/@shaily1239?si=S-Wpsxukljr97SCH" rel="noopener noreferrer" target="_blank">
<div className="group-hover:opacity-20 transition-opacity bg-pink-500 opacity-0 rounded-full absolute top-0 right-0 bottom-0 left-0 blur-md pointer-events-none"></div>
<svg className="group-hover:text-pink-400 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] w-[28px] h-[28px]" data-icon-replaced="true" height="28" strokeWidth="2" style={{width: '28px', height: '28px', color: 'rgb(244, 114, 182)'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path className="" d="m10 15l5-3l-5-3z"></path></g></svg>
</a>
</div><div className="flex gap-8 animate-float mt-12 gap-x-8 gap-y-8 items-center">

<a className="group flex items-center justify-center glass-panel transition-all duration-300 hover:scale-110 hover:-rotate-12 cursor-pointer z-50 w-16 h-16 rounded-full relative" href="https://www.instagram.com/shaily0924/" rel="noopener noreferrer" target="_blank">
<div className="group-hover:opacity-20 transition-opacity bg-pink-500 opacity-0 rounded-full absolute top-0 right-0 bottom-0 left-0 blur-md pointer-events-none"></div>
<svg className="group-hover:text-pink-400 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] w-[28px] h-[28px]" height="28" strokeWidth="2" style={{width: '28px', height: '28px', color: 'rgb(244, 114, 182)'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>

<a className="group flex items-center justify-center glass-panel transition-all duration-300 hover:scale-110 hover:rotate-12 cursor-pointer w-16 h-16 z-50 rounded-full relative" href="https://youtube.com/@shaily1239?si=S-Wpsxukljr97SCH" rel="noopener noreferrer" target="_blank">
<div className="group-hover:opacity-20 transition-opacity bg-pink-500 opacity-0 rounded-full absolute top-0 right-0 bottom-0 left-0 blur-md pointer-events-none"></div>
<svg className="group-hover:text-pink-400 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] w-[28px] h-[28px]" data-icon-replaced="true" height="28" strokeWidth="2" style={{width: '28px', height: '28px', color: 'rgb(244, 114, 182)'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path className="" d="m10 15l5-3l-5-3z"></path></g></svg>
</a>
</div>
</section>

<section className="w-full max-w-2xl mb-24 flex justify-center perspective-container">
<div className="glass-panel px-8 py-6 rounded-2xl w-full text-center relative overflow-hidden group hover:scale-[1.02] transition-all duration-500">
<div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50 group-hover:opacity-100 group-hover:scale-x-110 transition-all duration-500"></div>
<h2 className="md:text-2xl text-xl font-light text-white/90 tracking-tight">Graduate in <span className="text-neon font-medium text-pink-300">Bachelor of Arts</span> <span className="mx-2 text-white/30">|</span></h2>
</div>
</section>

<section className="w-full max-w-4xl mb-32 flex flex-wrap justify-center gap-4 md:gap-6 perspective-container">

<div className="glass-panel md:text-base uppercase transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:border-pink-500/50 cursor-crosshair text-sm font-medium text-white tracking-wide rounded-full pt-3 pr-6 pb-3 pl-6">
                Confidence
            </div>
<div className="glass-panel md:text-base uppercase transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:border-pink-500/50 cursor-crosshair delay-75 text-sm font-medium text-white tracking-wide rounded-full pt-3 pr-6 pb-3 pl-6">Blogger </div>
<div className="px-6 py-3 rounded-full glass-panel text-sm md:text-base font-medium tracking-wide text-white uppercase transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:border-pink-500/50 cursor-crosshair delay-100">
                Brand Strategy
            </div>
<div className="px-6 py-3 rounded-full glass-panel text-sm md:text-base font-medium tracking-wide text-white uppercase transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:border-pink-500/50 cursor-crosshair delay-150">
                Content Creation
            </div>
<div className="px-6 py-3 rounded-full glass-panel text-sm md:text-base font-medium tracking-wide text-white uppercase transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:border-pink-500/50 cursor-crosshair delay-200">
                Lifestyle
            </div>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-6xl pr-4 pl-4 perspective-container gap-x-8 gap-y-8">

<div className="group relative tilt-card h-[400px] md:h-[500px] w-full rounded-2xl bg-black/40 border border-pink-500/30 overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">

<div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-500/60 rounded-2xl transition-all duration-500 z-20 pointer-events-none box-border shadow-[inset_0_0_20px_rgba(236,72,153,0.2)]"></div>

<img alt="Style" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d65ffb3-fa59-4cea-b3d5-c57ce6162f82_1600w.jpg"/>

<div className="group-hover:opacity-40 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute bottom-6 left-6 z-30 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-lg font-medium tracking-widest text-white drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">EDITORIAL</span>
</div>
</div>

<div className="group tilt-card md:h-[500px] overflow-hidden md:-mt-12 bg-black/40 w-full h-[400px] z-10 border-pink-500/30 border rounded-2xl relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
<div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-500/60 rounded-2xl transition-all duration-500 z-20 pointer-events-none box-border shadow-[inset_0_0_20px_rgba(236,72,153,0.2)]"></div>
<img alt="Portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/36c20c46-cb0f-4003-81d2-d64d4930a7a0_1600w.jpg?w=800&amp;q=80"/>
<div className="group-hover:opacity-40 transition-opacity duration-300 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 z-30 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-lg font-medium tracking-widest text-white drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">PORTRAIT</span>
</div>
</div>

<div className="group relative tilt-card h-[400px] md:h-[500px] w-full rounded-2xl bg-black/40 border border-pink-500/30 overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
<div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-500/60 rounded-2xl transition-all duration-500 z-20 pointer-events-none box-border shadow-[inset_0_0_20px_rgba(236,72,153,0.2)]"></div>
<img alt="Aesthetic" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5053e31b-7826-4aae-8949-0964a3ac5775_1600w.jpg"/>
<div className="group-hover:opacity-40 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 z-30 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-lg font-medium tracking-widest text-white drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">AESTHETIC</span>
</div>
</div>
</section>

<footer className="mt-32 text-center text-white/30 text-xs tracking-widest uppercase">
            © 2024 Sophia · All Rights Reserved
        </footer>
</main>

    </>
  );
}
