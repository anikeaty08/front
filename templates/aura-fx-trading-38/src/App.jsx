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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-glow-top"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-display font-medium tracking-tighter text-white text-lg">AURA<span className="text-neutral-500">FX</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Data Feed</a>
<a className="hover:text-white transition-colors" href="#">Terminal</a>
<a className="hover:text-white transition-colors" href="#">Community</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex text-xs font-medium text-neutral-400 hover:text-white transition-colors">Log In</button>
<button className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-medium hover:bg-neutral-200 transition-colors tracking-tight">
                    Get Access
                </button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 px-6 border-b border-white/5">
<div className="max-w-4xl mx-auto text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
</span>
<span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest">Institutional Data Live</span>
</div>

<h1 className="font-display font-medium text-5xl sm:text-7xl tracking-tighter text-white mb-6 leading-[1.1]">
                Stop Trading Blind.<br/>
<span className="text-neutral-500">See The Liquidity.</span>
</h1>
<p className="text-sm sm:text-base text-neutral-400 font-light max-w-lg mx-auto leading-relaxed mb-10">
                The only community with direct access to institutional Level 2 data, footprint charts, and real-time order flow for Forex &amp; Commodities.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="group relative px-6 py-3 bg-white text-black rounded-lg text-sm font-medium overflow-hidden transition-all hover:scale-[1.02]">
<span className="relative z-10 flex items-center gap-2">
                        Start Terminal
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</span>
</button>
<button className="px-6 py-3 border border-neutral-800 text-neutral-300 rounded-lg text-sm font-medium hover:bg-neutral-900 transition-colors hover:text-white hover:border-neutral-700">
                    View Documentation
                </button>
</div>

<div className="relative w-full max-w-3xl mx-auto perspective-[2000px] group">

<div className="absolute -inset-1 bg-gradient-to-r from-amber-500/10 via-white/5 to-amber-500/10 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>

<div className="relative bg-[#050505] rounded-xl border border-white/10 overflow-hidden shadow-2xl">

<div className="h-9 bg-[#0A0A0A] border-b border-white/5 flex items-center justify-between px-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
</div>
<div className="text-[10px] font-mono text-neutral-500 flex items-center gap-2">
<span className="iconify" data-icon="lucide:lock" data-width="10"></span>
                            TERMINAL_V2.exe
                        </div>
<div className="w-8"></div>
</div>

<div className="grid grid-cols-12 h-[350px] sm:h-[450px]">

<div className="col-span-3 sm:col-span-2 border-r border-white/5 bg-[#080808] p-2 flex flex-col gap-1">
<div className="p-2 rounded bg-white/5 border border-white/5">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] font-bold text-white font-mono">XAUUSD</span>
<span className="text-[9px] text-green-500">+0.4%</span>
</div>
<div className="text-[10px] text-neutral-500 font-mono">2341.50</div>
</div>
<div className="p-2 rounded hover:bg-white/5 cursor-pointer transition-colors opacity-60">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] font-bold text-white font-mono">EURUSD</span>
<span className="text-[9px] text-red-500">-0.1%</span>
</div>
<div className="text-[10px] text-neutral-500 font-mono">1.0842</div>
</div>
<div className="p-2 rounded hover:bg-white/5 cursor-pointer transition-colors opacity-60">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] font-bold text-white font-mono">GBPUSD</span>
<span className="text-[9px] text-green-500">+0.2%</span>
</div>
<div className="text-[10px] text-neutral-500 font-mono">1.2650</div>
</div>
</div>

<div className="col-span-9 sm:col-span-7 bg-[#050505] p-4 relative overflow-hidden flex flex-col">
<div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
<div className="flex gap-4">
<span className="text-xs text-white font-medium">Gold Spot / US Dollar</span>
<span className="text-xs text-neutral-500 font-mono">M5</span>
</div>
<div className="flex gap-2 text-[10px] font-mono text-amber-500">
<span className="inline-flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> LIVE
                                    </span>
</div>
</div>

<div className="flex-1 flex items-end gap-1 relative opacity-90">

<div className="absolute inset-0 border-t border-white/5 top-1/4"></div>
<div className="absolute inset-0 border-t border-white/5 top-2/4"></div>
<div className="absolute inset-0 border-t border-white/5 top-3/4"></div>

<div className="w-full h-full flex items-end justify-between px-2 gap-1 pb-4">
<div className="w-2 bg-neutral-800 h-[40%] rounded-sm"></div>
<div className="w-2 bg-neutral-800 h-[35%] rounded-sm"></div>
<div className="w-2 bg-green-900/40 h-[45%] rounded-sm relative"><div className="absolute inset-x-0 top-0 bottom-0 w-[1px] bg-green-500/50 mx-auto -z-10 h-[120%] -mt-1"></div></div>
<div className="w-2 bg-green-800/60 h-[50%] rounded-sm"></div>
<div className="w-2 bg-red-900/40 h-[45%] rounded-sm relative"><div className="absolute inset-x-0 top-0 bottom-0 w-[1px] bg-red-500/50 mx-auto -z-10 h-[110%]"></div></div>
<div className="w-2 bg-neutral-800 h-[40%] rounded-sm"></div>
<div className="w-2 bg-green-700/60 h-[55%] rounded-sm"></div>
<div className="w-2 bg-green-600/80 h-[65%] rounded-sm shadow-[0_0_10px_rgba(22,163,74,0.3)]"></div>
<div className="w-2 bg-neutral-800 h-[60%] rounded-sm"></div>
<div className="w-2 bg-red-800/60 h-[50%] rounded-sm"></div>
<div className="w-2 bg-red-700/80 h-[40%] rounded-sm"></div>
<div className="w-2 bg-green-500 h-[55%] rounded-sm shadow-[0_0_15px_rgba(34,197,94,0.4)] relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-mono text-green-400 whitespace-nowrap">Buy 50L</div>
</div>
<div className="w-2 bg-neutral-800 h-[58%] rounded-sm opacity-50"></div>
</div>
</div>
</div>

<div className="hidden sm:block sm:col-span-3 border-l border-white/5 bg-[#080808] text-[10px] font-mono">
<div className="grid grid-cols-3 text-neutral-600 border-b border-white/5 py-2 px-1 text-center text-[9px]">
<div>BID</div>
<div>PX</div>
<div>ASK</div>
</div>

<div className="space-y-[1px]">
<div className="grid grid-cols-3 py-1 px-1 hover:bg-white/5">
<div className="text-right pr-2"></div>
<div className="text-center text-neutral-400">.90</div>
<div className="pl-2 text-red-400 relative"><div className="absolute left-0 top-0 bottom-0 bg-red-900/20 w-[30%]"></div>45</div>
</div>
<div className="grid grid-cols-3 py-1 px-1 hover:bg-white/5">
<div className="text-right pr-2"></div>
<div className="text-center text-neutral-400">.80</div>
<div className="pl-2 text-red-400 relative"><div className="absolute left-0 top-0 bottom-0 bg-red-900/20 w-[65%]"></div>128</div>
</div>
<div className="grid grid-cols-3 py-1 px-1 hover:bg-white/5">
<div className="text-right pr-2"></div>
<div className="text-center text-neutral-400">.70</div>
<div className="pl-2 text-red-400 relative"><div className="absolute left-0 top-0 bottom-0 bg-red-900/20 w-[15%]"></div>22</div>
</div>
<div className="grid grid-cols-3 py-1 px-1 bg-amber-500/10 border-y border-amber-500/20">
<div className="text-right pr-2 text-neutral-500">-</div>
<div className="text-center text-amber-500 font-bold">.65</div>
<div className="pl-2 text-neutral-500">-</div>
</div>
<div className="grid grid-cols-3 py-1 px-1 hover:bg-white/5">
<div className="text-right pr-2 text-green-400 relative"><div className="absolute right-0 top-0 bottom-0 bg-green-900/20 w-[80%]"></div>250</div>
<div className="text-center text-neutral-400">.60</div>
<div className="pl-2"></div>
</div>
<div className="grid grid-cols-3 py-1 px-1 hover:bg-white/5">
<div className="text-right pr-2 text-green-400 relative"><div className="absolute right-0 top-0 bottom-0 bg-green-900/20 w-[45%]"></div>84</div>
<div className="text-center text-neutral-400">.50</div>
<div className="pl-2"></div>
</div>
<div className="grid grid-cols-3 py-1 px-1 hover:bg-white/5">
<div className="text-right pr-2 text-green-400 relative"><div className="absolute right-0 top-0 bottom-0 bg-green-900/20 w-[95%] border-r border-green-500"></div>1.2k</div>
<div className="text-center text-neutral-400">.40</div>
<div className="pl-2"></div>
</div>
</div>

<div className="mt-4 px-2">
<div className="text-[9px] text-neutral-500 uppercase mb-1">Delta Imbalance</div>
<div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[70%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="border-b border-white/5 bg-[#030303] overflow-hidden py-3">
<div className="flex whitespace-nowrap animate-scroll w-max">

<div className="flex gap-16 items-center px-4 opacity-50 font-mono text-xs">
<span className="flex items-center gap-2 text-neutral-400">
<span className="iconify text-green-500" data-icon="lucide:activity" data-width="12"></span> 
                    SYSTEM NORMAL
                </span>
<span className="text-neutral-500">CME GROUP DATA FEED: <span className="text-green-500">CONNECTED</span></span>
<span className="text-neutral-500">LIQUIDITY PROVIDERS: <span className="text-white">LMAX, JPM, DEUTSCHE</span></span>
<span className="text-neutral-500">ACTIVE TRADERS: <span className="text-white">1,402</span></span>
<span className="text-neutral-500">VOLTAGE: <span className="text-amber-500">HIGH</span></span>

<span className="flex items-center gap-2 text-neutral-400">
<span className="iconify text-green-500" data-icon="lucide:activity" data-width="12"></span> 
                    SYSTEM NORMAL
                </span>
<span className="text-neutral-500">CME GROUP DATA FEED: <span className="text-green-500">CONNECTED</span></span>
<span className="text-neutral-500">LIQUIDITY PROVIDERS: <span className="text-white">LMAX, JPM, DEUTSCHE</span></span>
<span className="text-neutral-500">ACTIVE TRADERS: <span className="text-white">1,402</span></span>
<span className="text-neutral-500">VOLTAGE: <span className="text-amber-500">HIGH</span></span>
</div>

<div className="flex gap-16 items-center px-4 opacity-50 font-mono text-xs">
<span className="flex items-center gap-2 text-neutral-400">
<span className="iconify text-green-500" data-icon="lucide:activity" data-width="12"></span> 
                    SYSTEM NORMAL
                </span>
<span className="text-neutral-500">CME GROUP DATA FEED: <span className="text-green-500">CONNECTED</span></span>
<span className="text-neutral-500">LIQUIDITY PROVIDERS: <span className="text-white">LMAX, JPM, DEUTSCHE</span></span>
<span className="text-neutral-500">ACTIVE TRADERS: <span className="text-white">1,402</span></span>
<span className="text-neutral-500">VOLTAGE: <span className="text-amber-500">HIGH</span></span>
</div>
</div>
</div>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="mb-12">
<h2 className="font-display text-2xl text-white font-medium mb-2">The Infrastructure</h2>
<p className="text-neutral-500 text-sm">Professional tools for the modern day speculator.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">

<div className="bento-card md:col-span-2 rounded-xl p-8 relative overflow-hidden group">
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent z-10"></div>

<div className="absolute right-[-20px] bottom-[-40px] opacity-20 rotate-[-12deg] group-hover:rotate-0 transition-transform duration-500">
<span className="iconify text-white w-[200px] h-[200px]" data-icon="lucide:bar-chart-2"></span>
</div>
<div className="relative z-20 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white">
<span className="iconify" data-icon="lucide:monitor" data-width="20"></span>
</div>
<h3 className="font-display text-xl text-white font-medium mb-2">Institutional Terminal</h3>
<p className="text-sm text-neutral-400 font-light max-w-sm">Access the same depth of market (DOM) and volume profile tools used by bank desk traders. No lag, pure raw data.</p>
</div>
<div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        Updated v2.4
                    </div>
</div>
</div>

<div className="bento-card md:row-span-2 rounded-xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-20 h-full flex flex-col">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-amber-500">
<span className="iconify" data-icon="lucide:users" data-width="20"></span>
</div>
<h3 className="font-display text-xl text-white font-medium mb-2">Alpha Community</h3>
<p className="text-sm text-neutral-400 font-light mb-8">Join 500+ funded traders sharing setups, analysis, and trade breakdowns daily.</p>

<div className="mt-auto space-y-3">
<div className="bg-white/5 rounded-lg p-3 border border-white/5">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] font-bold text-amber-500">@Alex_FX</span>
<span className="text-[9px] text-neutral-600">10:42 AM</span>
</div>
<p className="text-[11px] text-neutral-300">Gold tapping into 4H liquidity pool. Watch for absorption on the DOM.</p>
</div>
<div className="bg-white/5 rounded-lg p-3 border border-white/5 opacity-60">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] font-bold text-blue-400">@SarahTrade</span>
<span className="text-[9px] text-neutral-600">10:45 AM</span>
</div>
<p className="text-[11px] text-neutral-300">Bid side stacking up at 2340. I'm long.</p>
</div>
</div>
</div>
</div>

<div className="bento-card rounded-xl p-8 relative overflow-hidden group">
<div className="relative z-20">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="font-display text-xl text-white font-medium mb-2">Algorithmic Signals</h3>
<p className="text-sm text-neutral-400 font-light">Proprietary delta divergence alerts sent directly to your phone.</p>
</div>
</div>

<div className="bento-card rounded-xl p-8 relative overflow-hidden group">
<div className="relative z-20">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white">
<span className="iconify" data-icon="lucide:book-open" data-width="20"></span>
</div>
<h3 className="font-display text-xl text-white font-medium mb-2">Masterclass</h3>
<p className="text-sm text-neutral-400 font-light">70+ hours of video content covering Auction Market Theory.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-white/5 bg-[#020202]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 space-y-6">
<h2 className="font-display text-3xl sm:text-4xl text-white font-medium tracking-tight">
                    Professional Access.<br/>
<span className="text-neutral-500">Retail Pricing.</span>
</h2>
<p className="text-neutral-400 font-light text-sm max-w-md">
                    We've negotiated bulk data rates to provide institutional feeds at a fraction of the cost of a Bloomberg Terminal.
                </p>
<div className="flex flex-col gap-4 pt-4">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-amber-500" data-icon="lucide:check" data-width="16"></span>
<span>Full CME &amp; NASDAQ Level 2 Data</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-amber-500" data-icon="lucide:check" data-width="16"></span>
<span>Private Discord Access</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-amber-500" data-icon="lucide:check" data-width="16"></span>
<span>Daily Live Trading Sessions</span>
</div>
</div>
</div>
<div className="w-full md:w-auto min-w-[350px]">
<div className="p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent">
<div className="bg-[#0A0A0A] rounded-xl p-8 border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-50">
<span className="iconify text-white/10 w-24 h-24 absolute -top-4 -right-4 rotate-12" data-icon="lucide:gem"></span>
</div>
<div className="relative z-10">
<span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest border border-amber-500/20 bg-amber-500/10 px-2 py-1 rounded mb-4 inline-block">Pro Membership</span>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-display font-medium text-white">$99</span>
<span className="text-neutral-500 text-sm">/month</span>
</div>
<p className="text-xs text-neutral-500 mb-8 font-mono">Billed monthly. Cancel anytime.</p>
<button className="w-full py-3 bg-white hover:bg-neutral-200 text-black font-medium rounded-lg text-sm transition-colors mb-4">
                                Join The Floor
                            </button>
<p className="text-[10px] text-center text-neutral-600">
                                Secured by Stripe. Instant Access.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-display font-bold tracking-tighter text-white text-lg">AURA<span className="text-neutral-600">FX</span></span>
</div>
<div className="flex gap-6 text-xs text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Risk Disclosure</a>
</div>
<div className="text-[10px] text-neutral-700 font-mono">
                © 2024 Aura Financial Technologies.
            </div>
</div>
</footer>

    </>
  );
}
