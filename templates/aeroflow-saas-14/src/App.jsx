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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20 group-hover:border-orange-500/50 transition-colors">
<iconify-icon className="text-orange-500" height="18" icon="lucide:plane" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-lg">AERO<span className="text-zinc-500">FLOW</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-zinc-300 hover:text-white transition-colors" href="#hero">Platform</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#about">Solutions</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#assets">Developers</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block text-sm font-medium text-zinc-400 hover:text-white transition-colors">Log in</button>
<button className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
                    Get Started
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-24 px-4 sm:px-6 overflow-hidden" id="hero">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] orange-glow opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                New: Enterprise Flight Analytics
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 max-w-4xl leading-[1.1]">
                The operating system for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">modern aviation.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-2xl mb-12 font-light">
                Manage bookings, track fleets, and analyze spend in one unified dashboard. 
                The most powerful API for travel platforms.
            </p>

<div className="w-full max-w-6xl relative group perspective-1000">

<div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-zinc-500/20 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0F0F10] shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[600px]">

<div className="hidden md:flex w-16 flex-col items-center py-6 border-r border-white/5 bg-zinc-900/30 backdrop-blur-sm">
<div className="mb-8">
<div className="w-8 h-8 rounded bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:plane" width="16"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-6 w-full items-center">
<button className="p-2 rounded-lg bg-white/5 text-orange-500"><iconify-icon icon="lucide:layout-dashboard" width="20"></iconify-icon></button>
<button className="p-2 rounded-lg text-zinc-500 hover:text-white transition-colors"><iconify-icon icon="lucide:ticket" width="20"></iconify-icon></button>
<button className="p-2 rounded-lg text-zinc-500 hover:text-white transition-colors"><iconify-icon icon="lucide:map" width="20"></iconify-icon></button>
<button className="p-2 rounded-lg text-zinc-500 hover:text-white transition-colors"><iconify-icon icon="lucide:bar-chart-2" width="20"></iconify-icon></button>
<button className="p-2 rounded-lg text-zinc-500 hover:text-white transition-colors"><iconify-icon icon="lucide:users" width="20"></iconify-icon></button>
</div>
<div className="mt-auto">
<button className="p-2 rounded-lg text-zinc-500 hover:text-white transition-colors"><iconify-icon icon="lucide:settings" width="20"></iconify-icon></button>
</div>
</div>

<div className="flex-1 flex flex-col bg-grid">

<div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-black/20">
<div className="flex items-center gap-2 text-sm">
<span className="text-zinc-500">Platform</span>
<span className="text-zinc-700">/</span>
<span className="text-white font-medium">Overview</span>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-zinc-900 rounded-md border border-white/5 text-xs text-zinc-400">
<iconify-icon icon="lucide:search" width="12"></iconify-icon>
<span>Search flight #...</span>
<span className="ml-2 px-1 rounded bg-zinc-800 text-[10px] border border-zinc-700">⌘K</span>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400">
<iconify-icon icon="lucide:bell" width="14"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border border-white/10"></div>
</div>
</div>

<div className="flex-1 p-6 overflow-hidden flex flex-col gap-6 text-left">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="p-4 rounded-xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/60 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Total Revenue</div>
<div className="text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded text-[10px] flex items-center gap-1">
                                            +12.5% <iconify-icon icon="lucide:trending-up" width="10"></iconify-icon>
</div>
</div>
<div className="text-2xl text-white font-medium tracking-tight">$284,500.00</div>
</div>

<div className="p-4 rounded-xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/60 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Active Flights</div>
<div className="text-orange-500 bg-orange-500/10 px-1.5 py-0.5 rounded text-[10px] flex items-center gap-1">
                                            Live
                                        </div>
</div>
<div className="text-2xl text-white font-medium tracking-tight">1,248</div>
</div>

<div className="p-4 rounded-xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/60 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Avg Delay</div>
<div className="text-zinc-500 text-[10px]">Last 24h</div>
</div>
<div className="text-2xl text-white font-medium tracking-tight">4.2m</div>
</div>
</div>

<div className="w-full bg-zinc-900/30 rounded-xl border border-white/5 p-4 md:p-5">
<div className="flex items-center gap-2 mb-4">
<h3 className="text-sm font-medium text-white">Find Flights</h3>
<span className="text-xs text-zinc-500 bg-zinc-800 px-1.5 rounded">API v2</span>
</div>
<form className="grid grid-cols-1 md:grid-cols-12 gap-3">
<div className="md:col-span-3 bg-black/50 border border-white/10 rounded-lg flex items-center px-3 h-10">
<iconify-icon className="text-zinc-500 mr-2" icon="lucide:map-pin" width="14"></iconify-icon>
<input className="bg-transparent w-full text-xs text-white outline-none placeholder-zinc-600" type="text" value="New York (JFK)"/>
</div>
<div className="md:col-span-3 bg-black/50 border border-white/10 rounded-lg flex items-center px-3 h-10">
<iconify-icon className="text-zinc-500 mr-2" icon="lucide:navigation" width="14"></iconify-icon>
<input className="bg-transparent w-full text-xs text-white outline-none placeholder-zinc-600" placeholder="Destination" type="text"/>
</div>
<div className="md:col-span-3 bg-black/50 border border-white/10 rounded-lg flex items-center px-3 h-10">
<iconify-icon className="text-zinc-500 mr-2" icon="lucide:calendar" width="14"></iconify-icon>
<input className="bg-transparent w-full text-xs text-white outline-none text-zinc-400" type="date"/>
</div>
<div className="md:col-span-3">
<button className="w-full h-10 bg-white text-black rounded-lg font-medium text-xs hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                                            Search Inventory
                                        </button>
</div>
</form>
</div>

<div className="flex-1 bg-zinc-900/30 rounded-xl border border-white/5 p-1 overflow-hidden flex flex-col">
<div className="px-4 py-3 border-b border-white/5 flex justify-between items-center">
<h3 className="text-xs font-medium text-zinc-300">Live Traffic</h3>
<button className="text-[10px] text-orange-500 hover:text-orange-400">View Map</button>
</div>
<div className="flex-1 overflow-auto">
<table className="w-full text-left border-collapse">
<thead className="text-[10px] uppercase text-zinc-600 bg-white/[0.02]">
<tr>
<th className="px-4 py-2 font-medium">Flight</th>
<th className="px-4 py-2 font-medium">Route</th>
<th className="px-4 py-2 font-medium">Status</th>
<th className="px-4 py-2 font-medium text-right">Price</th>
</tr>
</thead>
<tbody className="text-xs text-zinc-400 divide-y divide-white/5">
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-4 py-3 flex items-center gap-2">
<div className="w-4 h-4 rounded bg-zinc-800 flex items-center justify-center"><iconify-icon icon="simple-icons:qantas" width="10"></iconify-icon></div>
<span className="text-white">QF12</span>
</td>
<td className="px-4 py-3">JFK <span className="text-zinc-600">→</span> SYD</td>
<td className="px-4 py-3"><span className="bg-green-500/10 text-green-500 px-1.5 py-0.5 rounded text-[10px] border border-green-500/20">On Time</span></td>
<td className="px-4 py-3 text-right text-white font-medium">$1,240</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-4 py-3 flex items-center gap-2">
<div className="w-4 h-4 rounded bg-zinc-800 flex items-center justify-center"><iconify-icon icon="simple-icons:lufthansa" width="10"></iconify-icon></div>
<span className="text-white">LH401</span>
</td>
<td className="px-4 py-3">JFK <span className="text-zinc-600">→</span> FRA</td>
<td className="px-4 py-3"><span className="bg-orange-500/10 text-orange-500 px-1.5 py-0.5 rounded text-[10px] border border-orange-500/20">Delayed</span></td>
<td className="px-4 py-3 text-right text-white font-medium">$890</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-4 py-3 flex items-center gap-2">
<div className="w-4 h-4 rounded bg-zinc-800 flex items-center justify-center"><iconify-icon icon="simple-icons:delta" width="10"></iconify-icon></div>
<span className="text-white">DL442</span>
</td>
<td className="px-4 py-3">LAX <span className="text-zinc-600">→</span> JFK</td>
<td className="px-4 py-3"><span className="bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded text-[10px] border border-zinc-700">Scheduled</span></td>
<td className="px-4 py-3 text-right text-white font-medium">$420</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-4 py-3 flex items-center gap-2">
<div className="w-4 h-4 rounded bg-zinc-800 flex items-center justify-center"><iconify-icon icon="simple-icons:britishairways" width="10"></iconify-icon></div>
<span className="text-white">BA112</span>
</td>
<td className="px-4 py-3">LHR <span className="text-zinc-600">→</span> DXB</td>
<td className="px-4 py-3"><span className="bg-green-500/10 text-green-500 px-1.5 py-0.5 rounded text-[10px] border border-green-500/20">In Air</span></td>
<td className="px-4 py-3 text-right text-white font-medium">$950</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 flex flex-wrap gap-8 items-center justify-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-white" icon="simple-icons:qantas" width="60"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:lufthansa" width="60"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:emirates" width="60"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:delta" width="60"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:airbus" width="60"></iconify-icon>
</div>
</div>
</section>
<div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

<section className="py-24 px-6 bg-black relative" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                        Engineered for the <br/><span className="text-zinc-500">ambitious traveler.</span>
</h2>
<p className="text-zinc-400 mb-6 font-light leading-relaxed">
                        We believe flight booking shouldn't be a black box. Our platform aggregates real-time data from over 500 airlines, providing you with the most transparent pricing and fastest routes available on the market today.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20 text-orange-500">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
<div>
<h3 className="text-white text-sm font-medium">Real-time Synchronization</h3>
<p className="text-zinc-500 text-xs mt-1">Updates every 300ms across all global carriers.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20 text-orange-500">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
<div>
<h3 className="text-white text-sm font-medium">Smart Routing AI</h3>
<p className="text-zinc-500 text-xs mt-1">Algorithms that predict delays before they happen.</p>
</div>
</div>
</div>
</div>
<div className="relative">

<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-2xl blur-2xl"></div>
<div className="glass-panel rounded-2xl p-1 relative overflow-hidden group">
<div className="bg-zinc-900/80 rounded-xl p-8 border border-white/5 h-80 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="space-y-1">
<div className="text-xs text-orange-500 font-mono">FLIGHT-882</div>
<div className="text-2xl text-white font-medium tracking-tight">London <span className="text-zinc-600 mx-2">→</span> Tokyo</div>
</div>
<div className="px-2 py-1 bg-green-500/10 text-green-400 text-[10px] rounded border border-green-500/20 uppercase tracking-wide">On Time</div>
</div>

<div className="w-full h-24 relative flex items-center">
<div className="w-full h-0.5 bg-zinc-800 relative">
<div className="absolute left-0 top-0 h-full bg-orange-500 w-2/3 shadow-[0_0_10px_#f97316]"></div>
<div className="absolute left-2/3 top-1/2 -translate-y-1/2 w-3 h-3 bg-black border-2 border-orange-500 rounded-full"></div>
</div>
<div className="absolute left-0 top-6 text-xs text-zinc-500">LHR</div>
<div className="absolute right-0 top-6 text-xs text-zinc-500">HND</div>
</div>
<div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
<div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wider">Duration</div>
<div className="text-white font-medium">11h 35m</div>
</div>
<div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wider">Gate</div>
<div className="text-white font-medium">B-24</div>
</div>
<div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wider">Seat</div>
<div className="text-white font-medium">2A</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black" id="assets">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight">Core Assets</h2>
<p className="text-zinc-500 mt-2 text-sm">Everything you need to manage global travel.</p>
</div>
<button className="text-sm text-orange-500 hover:text-orange-400 font-medium flex items-center gap-1 transition-colors">
                    View all documentation <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[500px]">

<div className="col-span-1 md:col-span-2 row-span-2 glass-panel rounded-2xl p-8 hover:bg-white/[0.02] transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-orange-500" icon="lucide:globe-2" width="120"></iconify-icon>
</div>
<div className="h-full flex flex-col justify-between relative z-10">
<div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center border border-zinc-800 mb-4 text-orange-500">
<iconify-icon icon="lucide:network" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-xl text-white font-medium mb-2">Global Network API</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-sm">Access inventory from 195 countries. Our unified API handles currency conversion, local taxes, and compliance automatically, letting you focus on the user journey.</p>
</div>

<div className="mt-8 flex items-end gap-1 h-24 w-full opacity-50">
<div className="w-1/6 bg-orange-500/20 h-[40%] rounded-t-sm"></div>
<div className="w-1/6 bg-orange-500/40 h-[60%] rounded-t-sm"></div>
<div className="w-1/6 bg-orange-500/30 h-[50%] rounded-t-sm"></div>
<div className="w-1/6 bg-orange-500/60 h-[80%] rounded-t-sm"></div>
<div className="w-1/6 bg-orange-500/80 h-[70%] rounded-t-sm"></div>
<div className="w-1/6 bg-orange-500 h-[95%] rounded-t-sm"></div>
</div>
</div>
</div>

<div className="col-span-1 row-span-1 glass-panel rounded-2xl p-6 hover:bg-white/[0.02] transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center border border-zinc-800 text-white">
<iconify-icon icon="lucide:shield-check" width="16"></iconify-icon>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-1">Secure Vault</h3>
<p className="text-xs text-zinc-500">PCI-DSS compliant payment processing and data storage.</p>
</div>

<div className="col-span-1 row-span-1 glass-panel rounded-2xl p-6 hover:bg-white/[0.02] transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center border border-zinc-800 text-white">
<iconify-icon icon="lucide:zap" width="16"></iconify-icon>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-1">Instant Issuance</h3>
<p className="text-xs text-zinc-500">Tickets generated and emailed in under 2 seconds.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
<div className="glass-panel rounded-2xl p-5 flex items-center gap-4 hover:border-orange-500/30 transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
<iconify-icon icon="lucide:headphones" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">24/7 Concierge</h4>
<p className="text-zinc-500 text-xs">Dedicated support for enterprise clients.</p>
</div>
</div>
<div className="glass-panel rounded-2xl p-5 flex items-center gap-4 hover:border-orange-500/30 transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 border border-zinc-700">
<iconify-icon icon="lucide:bar-chart-3" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Travel Analytics</h4>
<p className="text-zinc-500 text-xs">Deep insights into spending and travel patterns.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-16 pb-8 px-6 mt-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-orange-500" icon="lucide:plane" width="20"></iconify-icon>
<span className="text-white font-semibold tracking-tight">AEROFLOW</span>
</div>
<p className="text-zinc-500 text-xs leading-relaxed">
                    Building the infrastructure for the next generation of global travel. Seamless, fast, and reliable.
                </p>
</div>
<div className="flex gap-12 text-sm">
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-2 text-zinc-500">
<li className="hover:text-orange-500 cursor-pointer transition-colors">API</li>
<li className="hover:text-orange-500 cursor-pointer transition-colors">Integration</li>
<li className="hover:text-orange-500 cursor-pointer transition-colors">Documentation</li>
<li className="hover:text-orange-500 cursor-pointer transition-colors">Changelog</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-zinc-500">
<li className="hover:text-orange-500 cursor-pointer transition-colors">About</li>
<li className="hover:text-orange-500 cursor-pointer transition-colors">Careers</li>
<li className="hover:text-orange-500 cursor-pointer transition-colors">Blog</li>
<li className="hover:text-orange-500 cursor-pointer transition-colors">Contact</li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
<p>© 2024 AeroFlow Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
