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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-neutral-800/60 bg-neutral-900/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-rose-500 to-rose-600 flex items-center justify-center shadow-[0_0_15px_rgba(244,63,94,0.4)]">
<iconify-icon className="text-white text-lg" icon="lucide:sparkles" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-white">NEXUS</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Product</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Developers</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:block text-sm font-medium text-neutral-400 hover:text-white transition-colors">Sign in</button>
<button className="group relative flex items-center justify-center gap-2 bg-neutral-100 hover:bg-white text-neutral-900 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300">
<span>Get Started</span>
<iconify-icon className="text-neutral-900 group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 bg-grid">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-900/5 rounded-full blur-[100px] pointer-events-none"></div>

<div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">

<a className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800/50 border border-neutral-700/50 hover:border-rose-500/30 hover:bg-neutral-800 transition-all duration-300 group mb-8 backdrop-blur-sm" href="#">
<span className="flex h-2 w-2 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]"></span>
<span className="text-xs font-medium text-neutral-300 group-hover:text-white">v2.0 is now available</span>
<iconify-icon className="text-neutral-500 group-hover:text-rose-400 transition-colors text-xs" icon="lucide:chevron-right" strokeWidth="1.5"></iconify-icon>
</a>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Scale your vision <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500">without limits.</span>
</h1>

<p className="text-lg md:text-xl text-neutral-400 font-normal max-w-2xl mb-10 leading-relaxed">
                The modern infrastructure for ambitious teams. Deploy, manage, and scale your applications with a single command.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-medium text-sm transition-all duration-300 shadow-[0_0_20px_-5px_rgba(244,63,94,0.5)] hover:shadow-[0_0_25px_-5px_rgba(244,63,94,0.6)] flex items-center justify-center gap-2">
                    Start Building
                    <iconify-icon className="text-rose-100" icon="lucide:zap" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full border border-neutral-700 hover:border-neutral-600 bg-neutral-900/50 hover:bg-neutral-800 text-neutral-300 hover:text-white font-medium text-sm transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
<iconify-icon className="text-neutral-500" icon="lucide:copy" strokeWidth="1.5"></iconify-icon>
<span>npm install nexus</span>
</button>
</div>

<div className="mt-20 w-full relative group perspective-1000">

<div className="absolute -inset-1 bg-gradient-to-r from-rose-500/20 via-neutral-500/10 to-rose-500/20 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>

<div className="relative bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/5 transform transition-transform duration-700 hover:-translate-y-1">

<div className="h-10 border-b border-neutral-800 bg-neutral-900/90 backdrop-blur flex items-center px-4 justify-between">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
<div className="flex gap-4">
<div className="w-32 h-1.5 rounded-full bg-neutral-800"></div>
</div>
</div>

<div className="grid grid-cols-12 min-h-[400px]">

<div className="col-span-12 md:col-span-3 border-r border-neutral-800 bg-neutral-900/50 p-4 flex flex-col gap-6 hidden md:flex">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-3 p-2 rounded-lg bg-neutral-800/50 text-neutral-200">
<iconify-icon className="text-rose-500" icon="lucide:layout-dashboard" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Overview</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg text-neutral-500 hover:text-neutral-300 transition-colors">
<iconify-icon icon="lucide:bar-chart-2" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Analytics</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg text-neutral-500 hover:text-neutral-300 transition-colors">
<iconify-icon icon="lucide:users" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Team</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg text-neutral-500 hover:text-neutral-300 transition-colors">
<iconify-icon icon="lucide:settings" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium">Settings</span>
</div>
</div>
<div className="mt-auto p-4 rounded-xl bg-gradient-to-br from-rose-900/20 to-neutral-900 border border-neutral-800/50">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
<span className="text-[10px] font-medium text-rose-400">System Status</span>
</div>
<p className="text-[10px] text-neutral-500">All systems operational at 99.9% uptime.</p>
</div>
</div>

<div className="col-span-12 md:col-span-9 p-6 bg-neutral-900/30">
<div className="flex justify-between items-end mb-8">
<div>
<h3 className="text-sm font-medium text-white mb-1">Traffic Overview</h3>
<p className="text-xs text-neutral-500">Real-time data for the last 24 hours</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 text-[10px] font-medium rounded border border-neutral-800 text-neutral-400">Daily</span>
<span className="px-2 py-1 text-[10px] font-medium rounded bg-neutral-800 text-white">Weekly</span>
</div>
</div>

<div className="h-48 w-full flex items-end justify-between gap-1 mb-8">

<div className="w-full bg-neutral-800/30 rounded-t-sm h-[40%] hover:bg-rose-500/20 transition-colors relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">40%</div>
</div>
<div className="w-full bg-neutral-800/30 rounded-t-sm h-[65%] hover:bg-rose-500/20 transition-colors relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">65%</div>
</div>
<div className="w-full bg-neutral-800/30 rounded-t-sm h-[50%] hover:bg-rose-500/20 transition-colors relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">50%</div>
</div>
<div className="w-full bg-neutral-800/30 rounded-t-sm h-[75%] hover:bg-rose-500/20 transition-colors relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">75%</div>
</div>
<div className="w-full bg-rose-500/20 rounded-t-sm h-[90%] shadow-[0_0_10px_rgba(244,63,94,0.2)] relative group">
<div className="absolute top-0 w-full h-[2px] bg-rose-500"></div>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-100">90%</div>
</div>
<div className="w-full bg-neutral-800/30 rounded-t-sm h-[55%] hover:bg-rose-500/20 transition-colors relative group"></div>
<div className="w-full bg-neutral-800/30 rounded-t-sm h-[45%] hover:bg-rose-500/20 transition-colors relative group"></div>
<div className="w-full bg-neutral-800/30 rounded-t-sm h-[60%] hover:bg-rose-500/20 transition-colors relative group"></div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-colors">
<div className="flex items-center justify-between mb-2">
<iconify-icon className="text-rose-500" icon="lucide:activity" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] text-green-400">+12%</span>
</div>
<div className="text-xl font-semibold text-white tracking-tight">24.5k</div>
<div className="text-[10px] text-neutral-500">Active Users</div>
</div>
<div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-colors">
<div className="flex items-center justify-between mb-2">
<iconify-icon className="text-neutral-400" icon="lucide:database" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] text-neutral-500">0%</span>
</div>
<div className="text-xl font-semibold text-white tracking-tight">128ms</div>
<div className="text-[10px] text-neutral-500">Avg. Latency</div>
</div>
<div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-colors">
<div className="flex items-center justify-between mb-2">
<iconify-icon className="text-neutral-400" icon="lucide:shield-check" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] text-green-400">Secure</span>
</div>
<div className="text-xl font-semibold text-white tracking-tight">99.9%</div>
<div className="text-[10px] text-neutral-500">Safety Score</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 pt-10 border-t border-neutral-800/50 w-full">
<p className="text-center text-xs text-neutral-500 font-medium mb-6 uppercase tracking-widest">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale mix-blend-screen">

<div className="flex items-center gap-2">
<div className="h-4 w-4 bg-white rounded-full"></div>
<span className="text-sm font-bold text-white tracking-tight">ACME</span>
</div>
<div className="flex items-center gap-2">
<div className="h-4 w-4 border-2 border-white rounded-sm"></div>
<span className="text-sm font-bold text-white tracking-tight">KORP</span>
</div>
<div className="flex items-center gap-2">
<div className="h-4 w-4 bg-white transform rotate-45"></div>
<span className="text-sm font-bold text-white tracking-tight">VERTEX</span>
</div>
<div className="flex items-center gap-2">
<div className="h-4 w-4 rounded-full border-2 border-white"></div>
<div className="h-4 w-4 rounded-full bg-white -ml-2 mix-blend-difference"></div>
<span className="text-sm font-bold text-white tracking-tight">LUMOS</span>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
