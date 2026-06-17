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



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
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
      

<div className="glass-panel w-full max-w-6xl h-[80vh] rounded-2xl flex overflow-hidden relative group">

<aside className="w-64 bg-black/20 border-r border-white/5 flex flex-col justify-between pt-0 relative z-20">

<div className="h-14 flex items-center px-5 gap-2 absolute top-0 left-0 w-full bg-gradient-to-b from-white/5 to-transparent">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-inner border border-black/10"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-inner border border-black/10"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] shadow-inner border border-black/10"></div>
</div>
<div className="mt-16 px-4">
<div className="mb-8 px-2">
<h1 className="text-neutral-200 tracking-tight font-medium text-lg">NEXUS</h1>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-neutral-200 text-sm font-medium transition-colors border border-white/5 shadow-sm" href="#">
<i className="w-4 h-4 text-neutral-400" data-lucide="layout-grid"></i>
                        Overview
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-neutral-200 text-sm transition-colors" href="#">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i>
                        Analytics
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-neutral-200 text-sm transition-colors" href="#">
<i className="w-4 h-4" data-lucide="layers"></i>
                        Deployments
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-neutral-200 text-sm transition-colors" href="#">
<i className="w-4 h-4" data-lucide="users"></i>
                        Team
                    </a>
</nav>
</div>
<div className="p-4 border-t border-white/5">
<button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg hover:bg-white/5 transition-colors text-left">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-neutral-600 to-neutral-500 border border-white/10"></div>
<span className="text-xs font-medium text-neutral-300">Admin Console</span>
<i className="w-3 h-3 ml-auto opacity-50" data-lucide="chevron-down"></i>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col bg-transparent relative z-10 overflow-hidden">

<header className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-white/[0.02]">
<div className="flex items-center gap-2 text-sm">
<span className="text-neutral-500">Nexus</span>
<span className="text-neutral-700">/</span>
<span className="text-neutral-200 font-medium">Dashboard</span>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<i className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" data-lucide="search"></i>
<input className="bg-neutral-900/50 border border-white/10 rounded-md py-1.5 pl-9 pr-3 text-xs text-neutral-300 focus:outline-none focus:border-neutral-600 transition-colors w-48 placeholder:text-neutral-600" placeholder="Search..." type="text"/>
</div>
<button className="text-neutral-500 hover:text-neutral-300 transition-colors">
<i className="w-4 h-4" data-lucide="bell"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8">
<div className="max-w-4xl mx-auto space-y-8">

<div className="grid grid-cols-3 gap-4">
<div className="glass-panel p-4 rounded-xl flex flex-col justify-between h-28 relative overflow-hidden">
<div className="absolute right-0 top-0 p-4 opacity-5">
<i className="w-16 h-16" data-lucide="activity"></i>
</div>
<div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Total Traffic</div>
<div>
<div className="text-2xl font-medium text-neutral-100 tracking-tight">2.4M</div>
<div className="flex items-center gap-1 text-xs text-emerald-500/80 mt-1">
<i className="w-3 h-3" data-lucide="arrow-up-right"></i>
<span>12% increase</span>
</div>
</div>
</div>
<div className="glass-panel p-4 rounded-xl flex flex-col justify-between h-28 relative overflow-hidden">
<div className="absolute right-0 top-0 p-4 opacity-5">
<i className="w-16 h-16" data-lucide="zap"></i>
</div>
<div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Latency</div>
<div>
<div className="text-2xl font-medium text-neutral-100 tracking-tight">24ms</div>
<div className="flex items-center gap-1 text-xs text-neutral-500 mt-1">
<span>Global avg</span>
</div>
</div>
</div>
<div className="glass-panel p-4 rounded-xl flex flex-col justify-between h-28 relative overflow-hidden">
<div className="absolute right-0 top-0 p-4 opacity-5">
<i className="w-16 h-16" data-lucide="database"></i>
</div>
<div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Storage</div>
<div>
<div className="text-2xl font-medium text-neutral-100 tracking-tight">85%</div>
<div className="w-full bg-neutral-800 h-1 mt-2 rounded-full overflow-hidden">
<div className="bg-neutral-200 h-full w-[85%]"></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-5 gap-6 h-64">

<div className="col-span-2 glass-panel rounded-xl p-5 flex flex-col">
<h3 className="text-sm font-medium text-neutral-200 mb-4 tracking-tight">Active Nodes</h3>
<div className="space-y-3 flex-1">
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
<span className="text-xs text-neutral-300 font-medium group-hover:text-white transition-colors">US-East-1</span>
</div>
<span className="text-[10px] text-neutral-600 font-mono">ID:8821</span>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
<span className="text-xs text-neutral-400 group-hover:text-white transition-colors">EU-West-2</span>
</div>
<span className="text-[10px] text-neutral-600 font-mono">ID:9942</span>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-amber-500/50"></div>
<span className="text-xs text-neutral-400 group-hover:text-white transition-colors">AP-South-1</span>
</div>
<span className="text-[10px] text-neutral-600 font-mono">ID:3321</span>
</div>
<div className="mt-auto pt-4 border-t border-white/5">
<label className="flex items-center gap-2 cursor-pointer select-none">
<input checked="" className="custom-checkbox appearance-none w-4 h-4 border border-neutral-700 rounded bg-neutral-900/50 relative transition-all" type="checkbox"/>
<span className="text-xs text-neutral-500">Auto-scaling enabled</span>
</label>
</div>
</div>
</div>

<div className="col-span-3 relative perspective-container flex items-center justify-center bg-gradient-to-br from-white/[0.01] to-transparent rounded-xl border border-white/5 overflow-visible">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

<div className="relative w-40 h-40 transform-gpu preserve-3d">

<div className="absolute inset-0 bg-neutral-900/80 border border-white/10 rounded-lg shadow-2xl layer-base" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 rounded-full border border-white/5 bg-white/[0.02]"></div>
</div>
</div>

<div className="absolute inset-0 bg-neutral-800/40 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl layer-mid flex items-center justify-center" style={{transformStyle: 'preserve-3d'}}>
<div className="grid grid-cols-3 gap-2 opacity-50">
<div className="w-2 h-2 bg-white rounded-full"></div>
<div className="w-2 h-2 bg-white rounded-full"></div>
<div className="w-2 h-2 bg-white rounded-full"></div>
<div className="w-2 h-2 bg-white rounded-full"></div>
<div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
<div className="w-2 h-2 bg-white rounded-full"></div>
<div className="w-2 h-2 bg-white rounded-full"></div>
<div className="w-2 h-2 bg-white rounded-full"></div>
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/30 rounded-lg shadow-inner layer-top flex flex-col p-4 justify-between" style={{transformStyle: 'preserve-3d'}}>
<div className="w-8 h-1 bg-white/40 rounded-full"></div>
<div className="space-y-2">
<div className="w-full h-1 bg-white/20 rounded-full"></div>
<div className="w-2/3 h-1 bg-white/20 rounded-full"></div>
</div>
<div className="self-end w-3 h-3 rounded-full border border-white/40 bg-emerald-500/80 shadow-[0_0_15px_rgba(16,185,129,0.6)]"></div>
</div>
</div>
<div className="absolute bottom-4 text-[10px] text-neutral-600 font-mono tracking-tight uppercase">Live Projection</div>
</div>
</div>

<div className="glass-panel rounded-xl p-0 overflow-hidden">
<div className="h-8 bg-white/[0.02] border-b border-white/5 flex items-center px-4 justify-between">
<span className="text-xs font-medium text-neutral-500">System Logs</span>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-neutral-700"></div>
</div>
</div>
<div className="p-4 font-mono text-[10px] space-y-1.5 text-neutral-500">
<div className="flex gap-3">
<span className="text-neutral-700">10:42:01</span>
<span className="text-emerald-500/80">SUCCESS</span>
<span>Instance [i-09fa] initialized successfully.</span>
</div>
<div className="flex gap-3">
<span className="text-neutral-700">10:42:05</span>
<span className="text-blue-500/80">INFO</span>
<span>Load balancer re-routing traffic to primary node.</span>
</div>
<div className="flex gap-3 opacity-50">
<span className="text-neutral-700">10:41:12</span>
<span className="text-neutral-500">DEBUG</span>
<span>Cache warming completed in 24ms.</span>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz4KPC9zdmc+')]"></div>
</div>


    </>
  );
}
