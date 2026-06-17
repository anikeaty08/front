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
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-gradient-to-br from-amber-400 to-yellow-700 flex items-center justify-center text-black font-bold font-display tracking-tighter">
                    M
                </div>
<span className="text-lg tracking-tight font-display font-medium text-white">MANAN<span className="text-white/40">TRADER</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#indicators">Indicators</a>
<a className="hover:text-white transition-colors" href="#auto-bots">Auto-Bots</a>
<a className="hover:text-amber-400 transition-colors" href="#gold-killer">Gold Killer</a>
<a className="hover:text-white transition-colors" href="#premium">Premium</a>
</div>
<button className="px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium tracking-wide text-white transition-all flex items-center gap-2 group">
<span>GET ACCESS</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col justify-center">

<div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="text-center mb-16 max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-xs font-medium mb-6 tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
                    NEXT GENERATION TRADING INTELLIGENCE
                </div>
<h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50">
                    Precision is not <br/> an option. It's standard.
                </h1>
<p className="text-zinc-400 text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto">
                    Institutional-grade algorithms, real-time AI analytics, and emotionless auto-execution. Welcome to the future of retail trading.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-black font-medium text-sm tracking-tight rounded hover:bg-zinc-200 transition-colors">
                        Start Trading
                    </button>
<button className="w-full sm:w-auto px-8 py-3 border border-zinc-800 bg-black/50 backdrop-blur text-white font-medium text-sm tracking-tight rounded hover:bg-zinc-900 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:play" width="16"></iconify-icon>
                        Watch Demo
                    </button>
</div>
</div>

<div className="perspective-container mt-12">
<div className="tilted-dashboard relative rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl shadow-blue-900/20 overflow-hidden mx-auto max-w-5xl aspect-video neon-border-blue">

<div className="h-10 border-b border-white/5 bg-black/40 flex items-center px-4 justify-between">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs text-zinc-500 font-mono flex gap-4">
<span>EURUSD <span className="text-emerald-400">+0.45%</span></span>
<span>XAUUSD <span className="text-red-400">-0.12%</span></span>
<span>BTCUSD <span className="text-emerald-400">+2.34%</span></span>
</div>
</div>

<div className="flex h-[calc(100%-40px)]">

<div className="w-16 border-r border-white/5 bg-black/20 flex flex-col items-center py-4 gap-6 text-zinc-600">
<iconify-icon className="text-blue-400" icon="lucide:layout-dashboard" width="20"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" icon="lucide:candlestick-chart" width="20"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors" icon="lucide:layers" width="20"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors mt-auto" icon="lucide:settings" width="20"></iconify-icon>
</div>

<div className="flex-1 p-6 relative bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 to-black">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(0deg, #333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="absolute top-6 left-6 z-10">
<h3 className="text-2xl font-display font-medium text-white tracking-tight">BTC/USD</h3>
<div className="text-3xl font-mono text-emerald-400 mt-1">$48,294.00</div>
</div>

<div className="absolute inset-0 flex items-end justify-around px-12 pb-12 pt-32 gap-1 pointer-events-none">

<div className="chart-bar h-[40%] bg-emerald-500"><div className="chart-wick h-[120%] bg-emerald-500"></div></div>
<div className="chart-bar h-[35%] bg-rose-500"><div className="chart-wick h-[110%] bg-rose-500"></div></div>
<div className="chart-bar h-[55%] bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"><div className="chart-wick h-[130%] bg-emerald-500"></div></div>
<div className="chart-bar h-[45%] bg-emerald-500"><div className="chart-wick h-[115%] bg-emerald-500"></div></div>
<div className="chart-bar h-[30%] bg-rose-500"><div className="chart-wick h-[140%] bg-rose-500"></div></div>
<div className="chart-bar h-[60%] bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)]"><div className="chart-wick h-[125%] bg-emerald-500"></div></div>
<div className="chart-bar h-[65%] bg-emerald-500"><div className="chart-wick h-[110%] bg-emerald-500"></div></div>
<div className="chart-bar h-[50%] bg-rose-500"><div className="chart-wick h-[120%] bg-rose-500"></div></div>
<div className="chart-bar h-[20%] bg-rose-500"><div className="chart-wick h-[150%] bg-rose-500"></div></div>
<div className="chart-bar h-[70%] bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.8)]"><div className="chart-wick h-[110%] bg-emerald-500"></div></div>
<div className="chart-bar h-[75%] bg-emerald-500"><div className="chart-wick h-[105%] bg-emerald-500"></div></div>
<div className="chart-bar h-[80%] bg-emerald-500"><div className="chart-wick h-[110%] bg-emerald-500"></div></div>
</div>

<div className="absolute bottom-1/3 right-1/4 bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 px-3 py-1 rounded text-xs font-mono flex items-center gap-2 backdrop-blur-sm animate-pulse-slow">
<div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                                STRONG BUY SIGNAL
                            </div>
</div>

<div className="w-64 border-l border-white/5 bg-black/40 p-4 flex flex-col gap-4">
<div className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Order Book</div>
<div className="space-y-1">
<div className="flex justify-between text-xs font-mono"><span className="text-rose-400">48,295</span><span className="text-zinc-600">0.45</span></div>
<div className="flex justify-between text-xs font-mono"><span className="text-rose-400">48,296</span><span className="text-zinc-600">1.20</span></div>
<div className="flex justify-between text-xs font-mono"><span className="text-emerald-400">48,293</span><span className="text-zinc-600">5.32</span></div>
<div className="flex justify-between text-xs font-mono"><span className="text-emerald-400">48,292</span><span className="text-zinc-600">2.10</span></div>
</div>
<div className="mt-auto">
<button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded text-sm font-medium transition-colors mb-2">Buy Market</button>
<button className="w-full bg-rose-600 hover:bg-rose-500 text-white py-2 rounded text-sm font-medium transition-colors">Sell Market</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative" id="indicators">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl font-display font-medium text-white mb-4">Precision Indicators</h2>
<p className="text-zinc-500 max-w-md">A suite of 12 premium algorithmic indicators designed for every trading style—from scalping to positional.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-all"><iconify-icon icon="lucide:arrow-left"></iconify-icon></button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-all"><iconify-icon icon="lucide:arrow-right"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-6 rounded-xl bg-zinc-900/20 border border-white/5 hover:border-blue-500/30 transition-all hover:bg-zinc-900/40 overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-blue-400" icon="lucide:zap" width="24"></iconify-icon>
</div>
<div className="h-32 mb-6 w-full bg-gradient-to-br from-blue-900/10 to-transparent rounded border border-white/5 relative overflow-hidden flex items-center justify-center">

<svg className="w-full h-full text-blue-500 stroke-current" fill="none" viewbox="0 0 100 50">
<path d="M0 40 L10 35 L20 38 L30 20 L40 25 L50 15 L60 22 L70 10 L80 18 L90 5 L100 12" strokeWidth="0.5"></path>
</svg>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-mono text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">SCALPING</span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Turbo Scalper Pro</h3>
<p className="text-sm text-zinc-500 leading-relaxed">High-frequency entry and exit signals optimized for 1m and 5m timeframes.</p>
</div>

<div className="group relative p-6 rounded-xl bg-zinc-900/20 border border-white/5 hover:border-purple-500/30 transition-all hover:bg-zinc-900/40 overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-purple-400" icon="lucide:waves" width="24"></iconify-icon>
</div>
<div className="h-32 mb-6 w-full bg-gradient-to-br from-purple-900/10 to-transparent rounded border border-white/5 relative overflow-hidden flex items-center justify-center">
<svg className="w-full h-full text-purple-500 stroke-current" fill="none" viewbox="0 0 100 50">
<path d="M0 30 Q25 50 50 25 T100 20" strokeWidth="0.5"></path>
</svg>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-mono text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded">SWING</span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Wave Flow Master</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Capture large market movements with multi-timeframe trend confirmation.</p>
</div>

<div className="group relative p-6 rounded-xl bg-zinc-900/20 border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-zinc-900/40 overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-emerald-400" icon="lucide:banknote" width="24"></iconify-icon>
</div>
<div className="h-32 mb-6 w-full bg-gradient-to-br from-emerald-900/10 to-transparent rounded border border-white/5 relative overflow-hidden flex items-center justify-center">

<div className="absolute top-4 left-10 w-20 h-4 bg-emerald-500/20 border border-emerald-500/40"></div>
<div className="absolute bottom-8 right-10 w-16 h-4 bg-rose-500/20 border border-rose-500/40"></div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">SMC</span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Institutional Zones</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Automatically plots order blocks, liquidity voids, and fair value gaps.</p>
</div>
</div>

<div className="mt-20 relative h-[400px] w-full rounded-2xl border border-white/5 bg-[#080808] overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-transparent opacity-50"></div>
<div className="relative z-10 text-center">
<h3 className="text-2xl font-display font-medium text-white mb-2">Complete Algo Ecosystem</h3>
<p className="text-zinc-500 text-sm">Access the full library of premium tools.</p>
</div>

<div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-48 h-64 bg-zinc-900 border border-white/10 rounded-lg shadow-2xl rotate-[-12deg] animate-float opacity-80 backdrop-blur-sm z-0"></div>
<div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-48 h-64 bg-zinc-900 border border-white/10 rounded-lg shadow-2xl rotate-[12deg] animate-float opacity-80 backdrop-blur-sm z-0" style={{animationDelay: '1s'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-56 h-72 bg-[#0C0C0C] border border-blue-500/20 rounded-xl shadow-2xl shadow-blue-500/10 z-10 flex flex-col p-4 animate-float" style={{animationDelay: '0.5s'}}>
<div className="w-full h-32 bg-gradient-to-b from-blue-900/20 to-transparent rounded mb-4 border border-blue-500/10"></div>
<div className="w-3/4 h-3 bg-zinc-800 rounded mb-2"></div>
<div className="w-1/2 h-3 bg-zinc-800 rounded mb-4"></div>
<div className="mt-auto flex justify-between">
<div className="w-8 h-8 rounded-full bg-zinc-800"></div>
<div className="w-16 h-8 rounded bg-blue-600/20"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5 relative overflow-hidden" id="auto-bots">
<div className="absolute inset-0 grid-bg opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="relative w-full aspect-square max-w-md mx-auto">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-48 h-48 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-xl animate-pulse-slow"></div>
<div className="relative w-40 h-40 rounded-full border border-cyan-500/30 bg-black/80 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]">
<iconify-icon className="text-cyan-400" icon="lucide:cpu" width="64"></iconify-icon>
</div>
</div>

<div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center text-xs font-mono text-zinc-400">RSI</div>
</div>
<div className="absolute inset-0 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}>
<div className="absolute bottom-10 left-10 w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center text-xs font-mono text-zinc-400">MACD</div>
</div>
<div className="absolute inset-0 animate-spin" style={{animationDuration: '25s'}}>
<div className="absolute bottom-10 right-10 w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center text-xs font-mono text-zinc-400">VOL</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewbox="0 0 400 400">
<circle cx="200" cy="200" fill="none" r="140" stroke="url(#grad1)" stroke-dasharray="5,5" strokeWidth="1"></circle>
<circle cx="200" cy="200" fill="none" r="100" stroke="url(#grad1)" strokeWidth="1"></circle>
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#06b6d4', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs mb-4">
<iconify-icon icon="lucide:bot"></iconify-icon>
                    AUTONOMOUS EXECUTION
                </div>
<h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6 tracking-tight">
                    Emotionless Trading.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Pure Math.</span>
</h2>
<p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    Our AI bots monitor the markets 24/7, executing trades with millisecond latency based on pre-defined risk parameters. No fatigue. No hesitation.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-zinc-300">
<iconify-icon className="text-cyan-500" icon="lucide:check-circle"></iconify-icon>
                        Automatic Stop Loss &amp; Take Profit
                    </li>
<li className="flex items-center gap-3 text-zinc-300">
<iconify-icon className="text-cyan-500" icon="lucide:check-circle"></iconify-icon>
                        News Event Filters
                    </li>
<li className="flex items-center gap-3 text-zinc-300">
<iconify-icon className="text-cyan-500" icon="lucide:check-circle"></iconify-icon>
                        Multi-Currency Correlation
                    </li>
</ul>
<button className="px-6 py-3 rounded border border-cyan-500/30 text-cyan-400 hover:bg-cyan-900/20 transition-colors font-medium text-sm tracking-wide">
                    CONFIGURE BOTS
                </button>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-gradient-to-b from-black via-[#1a1500] to-black" id="gold-killer">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<div className="inline-block px-4 py-1 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-xs font-mono tracking-widest mb-6 shadow-[0_0_15px_rgba(255,191,0,0.2)]">
                COMING SOON
            </div>
<h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter neon-text-gold">
                PERSONAL <span className="text-amber-400">GOLD</span> KILLER
            </h2>
<p className="text-amber-100/60 text-xl mb-12 font-light max-w-2xl mx-auto">
                The ultimate XAUUSD algorithm. Specifically calibrated for gold volatility. Aggressive scaling, smart hedging.
            </p>

<div className="relative h-64 w-full max-w-2xl mx-auto border-t border-b border-amber-500/20 bg-gradient-to-r from-transparent via-amber-900/10 to-transparent flex items-center justify-center gap-1">

<div className="w-2 h-12 bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.6)]"></div>
<div className="w-2 h-20 bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.6)]"></div>
<div className="w-2 h-8 bg-black border border-amber-500"></div>
<div className="w-2 h-32 bg-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.8)] animate-pulse"></div>
<div className="w-2 h-16 bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.6)]"></div>
</div>
<div className="mt-12">
<form className="max-w-md mx-auto flex gap-2">
<input className="flex-1 bg-black/50 border border-amber-500/30 rounded px-4 py-3 text-white placeholder-amber-500/30 focus:outline-none focus:border-amber-500 transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-amber-500 text-black font-bold px-6 py-3 rounded hover:bg-amber-400 transition-colors">
                        NOTIFY ME
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/5 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center text-xs font-bold font-display">M</div>
<span className="font-display font-medium tracking-tight text-white">MANAN TRADER</span>
</div>
<p className="text-zinc-600 text-sm max-w-xs">
                        Empowering retail traders with institutional-grade technology.
                    </p>
</div>
<div className="flex gap-6">
<a className="group flex flex-col items-center gap-2" href="#">
<div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-pink-500 group-hover:bg-pink-500/10 group-hover:scale-110 transition-all border border-white/5 group-hover:border-pink-500/30">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</div>
<span className="text-xs text-zinc-600 group-hover:text-pink-500 transition-colors">Instagram</span>
</a>
<a className="group flex flex-col items-center gap-2" href="#">
<div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-black group-hover:bg-cyan-400 group-hover:scale-110 transition-all border border-white/5 group-hover:border-cyan-400">
<iconify-icon icon="lucide:music-2" width="20"></iconify-icon> 
</div>
<span className="text-xs text-zinc-600 group-hover:text-cyan-400 transition-colors">TikTok</span>
</a>
<a className="group flex flex-col items-center gap-2" href="#">
<div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-blue-500 group-hover:bg-blue-500/10 group-hover:scale-110 transition-all border border-white/5 group-hover:border-blue-500/30">
<iconify-icon icon="lucide:send" width="20"></iconify-icon>
</div>
<span className="text-xs text-zinc-600 group-hover:text-blue-500 transition-colors">Telegram</span>
</a>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-700">
<p>© 2024 Manan Trader. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Risk Disclosure</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
