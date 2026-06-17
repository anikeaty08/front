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



                !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
            


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
      

<div className="fixed inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
<div className="aura-background-component top-0 w-full -z-10 absolute h-full text-3xl rounded-2xl">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>

</div>

<div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
</div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-5xl">
<div className="flex transition-all duration-300 bg-white/80 border border-white/60 rounded-full p-1.5 shadow-[0_2px_20px_rgba(0,0,0,0.04)] backdrop-blur-xl items-center gap-6 animate-clip">
<div className="flex items-center gap-6 pl-6">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Product</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Integrations</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Changelog</a>
</div>
<div className="flex items-center gap-2 pl-4">
<a className="hidden sm:block text-xs font-medium text-slate-600 hover:text-slate-900 px-3 py-2 transition-colors" href="#">Sign in</a>
<a className="text-xs font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-full px-4 py-2 transition-all shadow-lg shadow-blue-500/20" href="#">
                    Get Access
                </a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 max-w-7xl mx-auto flex flex-col items-center text-center perspective-1000">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-blue-100 shadow-sm mb-6 animate-clip delay-100 hover:scale-105 transition-transform cursor-pointer backdrop-blur-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium text-slate-600">
                Nexus v2.4 Release
            </span>
</div>

<div className="relative z-10 max-w-3xl mx-auto mb-8">
<h1 className="text-4xl md:text-[40px] leading-[1.1] tracking-tight font-semibold text-slate-900 mb-4 animate-clip delay-200">
                Sync your data <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                     across every environment.
                </span>
</h1>
<p className="text-base md:text-[18px] leading-relaxed text-slate-500 max-w-xl mx-auto font-medium animate-clip delay-300">
                Real-time synchronization for distributed teams. Monitor throughput, analyze latency, and optimize query performance instantly.
            </p>
</div>

<div className="flex flex-col sm:flex-row items-center gap-3 mb-16 animate-clip delay-400">
<button className="h-10 px-6 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 flex items-center gap-2">
                Start syncing
                <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</button>
<button className="h-10 px-6 rounded-full bg-white/80 hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-medium transition-all hover:border-slate-300 flex items-center gap-2 backdrop-blur-sm">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="play-circle"></i>
                Watch Demo
            </button>
</div>

<div className="relative w-full max-w-5xl mx-auto animate-clip delay-500 preserve-3d">

<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-15 blur-2xl rounded-[2rem] -z-10"></div>
<div className="relative rounded-xl bg-[#FCFCFD] border border-slate-200/60 shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_20px_60px_-10px_rgba(0,0,0,0.1),0_50px_100px_-20px_rgba(50,50,93,0.15)] overflow-hidden animate-float">

<div className="h-9 border-b border-slate-100 bg-white/50 backdrop-blur-sm flex items-center px-4 justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
</div>
<div className="flex items-center gap-2 px-3 py-0.5 rounded-md bg-slate-50 border border-slate-100">
<i className="w-2.5 h-2.5 text-slate-400" data-lucide="lock"></i>
<span className="text-[10px] font-medium text-slate-400">app.nexus.io / dashboard</span>
</div>
<div className="w-12"></div>
</div>

<div className="flex h-[550px] bg-white">

<div className="hidden md:flex flex-col w-56 border-r border-slate-100 bg-slate-50/30 p-3">
<div className="flex items-center gap-3 mb-6 px-2">
<div className="w-7 h-7 rounded-md bg-blue-500 flex items-center justify-center text-white font-semibold text-xs">N</div>
<div>
<div className="text-xs font-semibold text-slate-900">Nexus Corp</div>
<div className="text-[10px] text-slate-500">Enterprise</div>
</div>
</div>
<div className="space-y-0.5">
<div className="flex items-center gap-3 px-3 py-1.5 bg-white border border-slate-200 rounded-md shadow-sm">
<i className="w-3.5 h-3.5 text-blue-500" data-lucide="bar-chart-2"></i>
<span className="text-xs font-medium text-slate-900">Metrics</span>
</div>
<div className="flex items-center gap-3 px-3 py-1.5 text-slate-500 hover:bg-slate-100 rounded-md transition-colors">
<i className="w-3.5 h-3.5" data-lucide="database"></i>
<span className="text-xs font-medium">Storage</span>
</div>
<div className="flex items-center gap-3 px-3 py-1.5 text-slate-500 hover:bg-slate-100 rounded-md transition-colors">
<i className="w-3.5 h-3.5" data-lucide="globe"></i>
<span className="text-xs font-medium">Network</span>
</div>
<div className="flex items-center gap-3 px-3 py-1.5 text-slate-500 hover:bg-slate-100 rounded-md transition-colors">
<i className="w-3.5 h-3.5" data-lucide="settings"></i>
<span className="text-xs font-medium">Settings</span>
</div>
</div>
<div className="mt-6">
<div className="text-[10px] font-semibold text-slate-400 px-3 uppercase tracking-wider mb-2">Clusters</div>
<div className="space-y-0.5">
<div className="flex items-center gap-2 px-3 py-1.5 text-slate-600 hover:bg-slate-100 rounded-md transition-colors">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<span className="text-xs font-medium">Production-US</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 text-slate-600 hover:bg-slate-100 rounded-md transition-colors">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
<span className="text-xs font-medium">Staging-EU</span>
</div>
</div>
</div>
</div>

<div className="flex-1 p-6 overflow-y-auto no-scrollbar">
<div className="flex justify-between items-end mb-6">
<div>
<h2 className="text-lg font-semibold text-slate-900 tracking-tight">Throughput Analysis</h2>
<p className="text-xs text-slate-500 mt-0.5">Live data stream from primary shards</p>
</div>
<div className="flex gap-2">
<button className="px-2.5 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 shadow-sm flex items-center gap-2">
<i className="w-3 h-3" data-lucide="filter"></i>
                                    Filter
                                </button>
<button className="px-2.5 py-1.5 bg-blue-500 text-white rounded-md text-xs font-medium shadow-sm flex items-center gap-2 hover:bg-blue-600 transition-colors">
<i className="w-3 h-3" data-lucide="download"></i>
                                    Export
                                </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
<div className="p-3 bg-white border border-slate-100 rounded-lg shadow-sm">
<div className="flex justify-between items-start mb-3">
<div className="p-1.5 bg-blue-50 border border-blue-100 rounded-md">
<i className="w-3.5 h-3.5 text-blue-500" data-lucide="activity"></i>
</div>
<span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">+24%</span>
</div>
<div className="text-xl font-semibold text-slate-900 tracking-tight">2.4 TB</div>
<div className="text-[10px] text-slate-500 mt-1">Data Processed</div>
</div>
<div className="p-3 bg-white border border-slate-100 rounded-lg shadow-sm">
<div className="flex justify-between items-start mb-3">
<div className="p-1.5 bg-indigo-50 border border-indigo-100 rounded-md">
<i className="w-3.5 h-3.5 text-indigo-500" data-lucide="zap"></i>
</div>
<span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">-12ms</span>
</div>
<div className="text-xl font-semibold text-slate-900 tracking-tight">42ms</div>
<div className="text-[10px] text-slate-500 mt-1">Global Latency</div>
</div>
<div className="p-3 bg-white border border-slate-100 rounded-lg shadow-sm">
<div className="flex justify-between items-start mb-3">
<div className="p-1.5 bg-cyan-50 border border-cyan-100 rounded-md">
<i className="w-3.5 h-3.5 text-cyan-600" data-lucide="server"></i>
</div>
<span className="text-[10px] font-medium text-slate-400">Normal</span>
</div>
<div className="text-xl font-semibold text-slate-900 tracking-tight">98.2%</div>
<div className="text-[10px] text-slate-500 mt-1">Cache Hit Rate</div>
</div>
</div>

<div className="p-5 bg-white border border-slate-100 rounded-lg shadow-sm mb-6">
<div className="flex justify-between items-center mb-4">
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wide">Request Volume</h3>
<div className="flex gap-3">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="text-[10px] text-slate-500">Inbound</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
<span className="text-[10px] text-slate-500">Outbound</span>
</div>
</div>
</div>
<div className="h-40 w-full">
<svg className="w-full h-full overflow-visible" viewbox="0 0 400 150">
<defs>
<lineargradient id="blueGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#3b82f6" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#3b82f6" stop-opacity="0"></stop>
</lineargradient>
</defs>

<line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="400" y1="150" y2="150"></line>
<line stroke="#f1f5f9" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="400" y1="100" y2="100"></line>
<line stroke="#f1f5f9" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="400" y1="50" y2="50"></line>

<path d="M0 120 C 60 110, 100 80, 150 90 C 200 100, 240 60, 300 50 C 350 40, 380 60, 400 30 V 150 H 0 Z" fill="url(#blueGradient)"></path>

<path d="M0 120 C 60 110, 100 80, 150 90 C 200 100, 240 60, 300 50 C 350 40, 380 60, 400 30" fill="none" stroke="#3b82f6" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="bg-white border border-slate-100 rounded-lg shadow-sm overflow-hidden">
<div className="px-5 py-3 border-b border-slate-100 flex justify-between items-center">
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wide">Live Events</h3>
<button className="text-[10px] text-blue-500 font-medium hover:text-blue-600">View Log</button>
</div>
<div className="p-0">
<div className="flex items-center justify-between p-3 border-b border-slate-50 hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">DB</div>
<div>
<div className="text-xs font-medium text-slate-900">Replication complete</div>
<div className="text-[10px] text-slate-500">US-West-1 • 12s ago</div>
</div>
</div>
<i className="w-3 h-3 text-emerald-500" data-lucide="check"></i>
</div>
<div className="flex items-center justify-between p-3 border-b border-slate-50 hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">API</div>
<div>
<div className="text-xs font-medium text-slate-900">Spike detected</div>
<div className="text-[10px] text-slate-500">EU-Central • 45s ago</div>
</div>
</div>
<i className="w-3 h-3 text-amber-500" data-lucide="alert-circle"></i>
</div>
<div className="flex items-center justify-between p-3 hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">SYS</div>
<div>
<div className="text-xs font-medium text-slate-900">Auto-scaling triggered</div>
<div className="text-[10px] text-slate-500">US-East-2 • 1m ago</div>
</div>
</div>
<i className="w-3 h-3 text-blue-500" data-lucide="arrow-up"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
