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



        const exploreBtn = document.getElementById('explore-btn');
        const exploreContainer = document.getElementById('explore-container');
        const heroText = document.getElementById('hero-text');
        const appGrid = document.getElementById('app-grid');
        const backBtn = document.getElementById('back-btn');

        // Animation logic
        exploreBtn.addEventListener('click', () => {
            // Fade out hero elements
            heroText.classList.add('opacity-0', 'scale-90', 'blur-sm');
            heroText.classList.add('-translate-y-10'); // Move up slightly
            
            // Hide button
            exploreContainer.classList.add('opacity-0', 'pointer-events-none', 'scale-90');
            
            // Show Grid
            setTimeout(() => {
                exploreContainer.style.display = 'none'; 
                appGrid.classList.remove('opacity-0', 'pointer-events-none', 'scale-90', 'blur-sm', 'translate-y-8');
                appGrid.classList.add('opacity-100', 'scale-100', 'blur-0', 'translate-y-0');
            }, 400);
        });

        backBtn.addEventListener('click', () => {
            // Hide Grid
            appGrid.classList.remove('opacity-100', 'scale-100', 'blur-0', 'translate-y-0');
            appGrid.classList.add('opacity-0', 'pointer-events-none', 'scale-90', 'blur-sm', 'translate-y-8');

            // Show Button and Restore Hero
            setTimeout(() => {
                exploreContainer.style.display = 'block';
                // Delay slightly to allow display:block to render
                requestAnimationFrame(() => {
                    exploreContainer.classList.remove('opacity-0', 'pointer-events-none', 'scale-90');
                    heroText.classList.remove('opacity-0', 'scale-90', 'blur-sm', '-translate-y-10');
                });
            }, 300);
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
      

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen blob-animate opacity-40"></div>

<div className="absolute bottom-[-10%] right-[20%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] mix-blend-screen blob-animate blob-delay opacity-40"></div>

<div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-800/10 rounded-full blur-[80px] mix-blend-screen"></div>
</div>

<div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.7%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<nav className="absolute top-0 w-full p-8 flex justify-between items-center z-10 fade-enter-active">
<div className="group flex items-center gap-2 cursor-default">
<div className="h-1.5 w-1.5 rounded-full bg-white/50 group-hover:bg-cyan-400 transition-colors duration-300 shadow-[0_0_8px_rgba(255,255,255,0.5)] group-hover:shadow-cyan-400/50"></div>
<div className="text-sm font-medium tracking-tighter text-white/80 group-hover:text-white transition-colors">
                THE NEBULA
            </div>
</div>
</nav>

<main className="relative z-10 w-full max-w-md px-6 flex flex-col items-center text-center perspective-[1000px]">

<div className="mb-12 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" id="hero-text">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-xs font-medium text-teal-200/80 mb-6 backdrop-blur-md shadow-[0_0_15px_-5px_rgba(20,184,166,0.2)] hover:bg-teal-500/10 transition-colors">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
                System Operational
            </div>
<h1 className="text-5xl sm:text-6xl font-normal tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-slate-400 mb-4 drop-shadow-sm">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 text-gradient">Nebula</span>
</h1>
<p className="text-sm sm:text-base font-light text-slate-400 max-w-xs mx-auto leading-relaxed">
                Your gateway to the next generation of digital interaction. Explore the ecosystem.
            </p>
</div>

<div className="absolute top-full mt-4 transform -translate-y-full transition-all duration-500 z-20" id="explore-container">
<button className="group relative px-8 py-3 bg-white text-black text-sm font-semibold tracking-tight rounded-full transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_40px_-10px_rgba(167,139,250,0.5)] active:scale-95" id="explore-btn">
<div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
<span className="relative flex items-center gap-2">
                    Start Exploration
                    <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</button>
</div>

<div className="w-full grid gap-3 opacity-0 pointer-events-none scale-90 blur-sm transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] transform translate-y-8" id="app-grid">

<a className="group relative block p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-xl overflow-hidden hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)] hover:-translate-y-0.5" href="https://nebula-chat.lovable.app">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 group-hover:from-cyan-500/5 group-hover:to-cyan-500/10 transition-all duration-500"></div>
<div className="relative flex items-center gap-4">
<div className="p-3 rounded-lg bg-slate-950 border border-white/10 text-cyan-200/70 group-hover:text-cyan-400 group-hover:border-cyan-500/30 group-hover:bg-cyan-950/30 transition-all duration-300">
<iconify-icon className="group-hover:scale-110 transition-transform duration-300" height="24" icon="solar:chat-round-line-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="text-left flex-1">
<h3 className="text-base font-medium text-slate-200 tracking-tight group-hover:text-cyan-100 transition-colors">Nebula Chat</h3>
<p className="text-xs text-slate-500 font-light mt-0.5 group-hover:text-cyan-200/50 transition-colors">Connect with intelligent agents.</p>
</div>
<div className="text-slate-700 group-hover:text-cyan-400 transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</a>

<a className="group relative block p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-purple-500/30 transition-all duration-300 backdrop-blur-xl overflow-hidden hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.15)] hover:-translate-y-0.5" href="https://nebula-ultichat.lovable.app">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/5 group-hover:from-purple-500/5 group-hover:to-purple-500/10 transition-all duration-500"></div>
<div className="relative flex items-center gap-4">
<div className="p-3 rounded-lg bg-slate-950 border border-white/10 text-purple-200/70 group-hover:text-purple-400 group-hover:border-purple-500/30 group-hover:bg-purple-950/30 transition-all duration-300">
<iconify-icon className="group-hover:rotate-12 transition-transform duration-300" height="24" icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="text-left flex-1">
<h3 className="text-base font-medium text-slate-200 tracking-tight group-hover:text-purple-100 transition-colors">Nebula Ultichat</h3>
<p className="text-xs text-slate-500 font-light mt-0.5 group-hover:text-purple-200/50 transition-colors">Advanced models and capabilities.</p>
</div>
<div className="text-slate-700 group-hover:text-purple-400 transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</a>

<a className="group relative block p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-rose-500/30 transition-all duration-300 backdrop-blur-xl overflow-hidden hover:shadow-[0_0_30px_-10px_rgba(244,63,94,0.15)] hover:-translate-y-0.5" href="https://nebula-stories.lovable.app">
<div className="absolute inset-0 bg-gradient-to-br from-rose-500/0 via-rose-500/0 to-rose-500/5 group-hover:from-rose-500/5 group-hover:to-rose-500/10 transition-all duration-500"></div>
<div className="relative flex items-center gap-4">
<div className="p-3 rounded-lg bg-slate-950 border border-white/10 text-rose-200/70 group-hover:text-rose-400 group-hover:border-rose-500/30 group-hover:bg-rose-950/30 transition-all duration-300">
<iconify-icon className="group-hover:-translate-y-0.5 transition-transform duration-300" height="24" icon="solar:book-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="text-left flex-1">
<h3 className="text-base font-medium text-slate-200 tracking-tight group-hover:text-rose-100 transition-colors">Nebula Stories</h3>
<p className="text-xs text-slate-500 font-light mt-0.5 group-hover:text-rose-200/50 transition-colors">Immersive narratives and lore.</p>
</div>
<div className="text-slate-700 group-hover:text-rose-400 transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</a>

<button className="mt-4 text-xs font-light text-slate-500 hover:text-white transition-colors flex items-center justify-center gap-1.5 mx-auto group" id="back-btn">
<iconify-icon className="group-hover:-rotate-180 transition-transform duration-500" icon="solar:restart-linear" strokeWidth="1.5" width="14"></iconify-icon>
                Return to orbit
            </button>
</div>
</main>
<footer className="absolute bottom-6 w-full text-center z-10">
<p className="text-xs font-light text-slate-600">
            © 2024 The Nebula Ecosystem.
        </p>
</footer>


    </>
  );
}
