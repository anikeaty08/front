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

<div className="w-8 h-8 bg-gradient-to-br from-red-900 to-black border border-white/10 rounded flex items-center justify-center">
<svg className="opacity-80" fill="none" height="16" stroke="white" strokeWidth="2" viewbox="0 0 24 24" width="16">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<div className="text-white font-semibold text-lg tracking-tighter">
                    PFX
                </div>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-wide text-neutral-500">
<a className="hover:text-white transition-colors duration-300" href="#approach">Approach</a>
<a className="hover:text-white transition-colors duration-300" href="#education">Education</a>
<a className="hover:text-white transition-colors duration-300" href="#community">Community</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white transition-colors duration-200 bg-white/5 border border-white/10 rounded hover:bg-white/10" href="#pricing">
                    Terminal Login
                </a>
</div>
</div>
</nav>

<div className="fixed top-16 w-full z-40 bg-neutral-950/50 border-b border-white/5 overflow-hidden py-2 hidden md:block backdrop-blur-sm">
<div className="flex gap-12 animate-marquee whitespace-nowrap text-[10px] font-mono text-neutral-500 uppercase tracking-wider justify-center">
<span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> EURUSD 1.0842</span>
<span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> GBPUSD 1.2615</span>
<span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> XAUUSD 2034.50</span>
<span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-neutral-500"></span> DXY 103.40</span>
<span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> US30 38200</span>
</div>
</div>

<section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 grid-bg pointer-events-none opacity-40"></div>
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-900/20 rounded-[100%] blur-[120px] pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="flex-1 text-center lg:text-left z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-red-400 text-[10px] font-semibold uppercase tracking-widest mb-8">
<span className="iconify" data-icon="lucide:crosshair" data-width="12"></span>
                        Institutional Logic
                    </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter leading-[1] mb-6">
                        MASTER THE <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">MARKET MAKER.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10 font-light">
                        Decode price action with precision. A complete educational ecosystem designed to transition you from retail gambling to institutional structure.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-black font-semibold text-sm rounded transition-all duration-300 hover:bg-neutral-200" href="#pricing">
                            Start Learning
                        </a>
<a className="w-full sm:w-auto px-8 py-3 glass-panel text-white font-medium text-sm rounded hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2" href="#approach">
                            View Analysis
                            <span className="iconify" data-icon="lucide:arrow-down" data-width="14"></span>
</a>
</div>
</div>

<div className="flex-1 w-full max-w-xl lg:max-w-full perspective-1000">
<div className="glass-panel rounded-xl overflow-hidden shadow-2xl glow-red transform rotate-y-6 rotate-x-6 transition-transform hover:rotate-0 duration-700">

<div className="h-10 bg-black/40 border-b border-white/5 flex items-center justify-between px-4">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-[10px] text-neutral-500 font-mono">XAUUSD [M15]</div>
</div>

<div className="relative h-[300px] bg-neutral-900/50 p-6">

<div className="absolute inset-0 border-b border-white/5 top-1/4"></div>
<div className="absolute inset-0 border-b border-white/5 top-2/4"></div>
<div className="absolute inset-0 border-b border-white/5 top-3/4"></div>
<div className="absolute inset-0 border-r border-white/5 left-1/4"></div>
<div className="absolute inset-0 border-r border-white/5 left-2/4"></div>
<div className="absolute inset-0 border-r border-white/5 left-3/4"></div>

<svg className="absolute inset-0 w-full h-full p-6" preserveaspectratio="none">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(220, 38, 38, 0.5)"></stop>
<stop offset="100%" stop-color="rgba(220, 38, 38, 0)"></stop>
</lineargradient>
</defs>
<path className="chart-line" d="M0,250 C50,240 80,180 120,200 C160,220 180,100 240,120 C300,140 340,50 400,80 C450,105 500,60 600,40" fill="none" stroke="#ef4444" strokeWidth="2"></path>
<path className="opacity-30" d="M0,250 C50,240 80,180 120,200 C160,220 180,100 240,120 C300,140 340,50 400,80 C450,105 500,60 600,40 V300 H0 Z" fill="url(#chartGradient)"></path>

<circle className="animate-pulse" cx="400" cy="80" fill="white" r="4"></circle>
<text fill="white" fontFamily="Inter" fontSize="10" x="415" y="75">SELL LIMIT</text>
</svg>

<div className="absolute top-6 left-6 glass-panel p-3 rounded border border-white/10">
<div className="text-[10px] text-neutral-400 mb-1">Risk/Reward</div>
<div className="text-lg font-bold text-white">1:4.5</div>
<div className="text-[10px] text-green-500 mt-1">+2.8% Growth</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>

<section className="py-24 bg-black relative" id="approach">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative p-8 bg-neutral-900/20 border border-neutral-800 rounded-xl hover:border-red-900/30 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify w-32 h-32 text-red-500" data-icon="lucide:scatter-chart"></span>
</div>
<div className="relative z-10">
<div className="w-10 h-10 bg-red-500/10 rounded flex items-center justify-center mb-6 text-red-500 border border-red-500/20">
<span className="iconify" data-icon="lucide:activity" data-width="20" strokeWidth="1.5"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Structure Mapping</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
                            Stop guessing tops and bottoms. Identify true market swings and structural breaks using mechanical rules.
                        </p>
</div>
</div>

<div className="group relative p-8 bg-neutral-900/20 border border-neutral-800 rounded-xl hover:border-red-900/30 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify w-32 h-32 text-red-500" data-icon="lucide:candlestick-chart"></span>
</div>
<div className="relative z-10">
<div className="w-10 h-10 bg-red-500/10 rounded flex items-center justify-center mb-6 text-red-500 border border-red-500/20">
<span className="iconify" data-icon="lucide:brain-circuit" data-width="20" strokeWidth="1.5"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Liquidity Concepts</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
                            Understand where the money is. Learn to spot inducement traps set for retail traders before the real move happens.
                        </p>
</div>
</div>

<div className="group relative p-8 bg-neutral-900/20 border border-neutral-800 rounded-xl hover:border-red-900/30 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify w-32 h-32 text-red-500" data-icon="lucide:shield-check"></span>
</div>
<div className="relative z-10">
<div className="w-10 h-10 bg-red-500/10 rounded flex items-center justify-center mb-6 text-red-500 border border-red-500/20">
<span className="iconify" data-icon="lucide:scale" data-width="20" strokeWidth="1.5"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Risk Calculation</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
                            Static risk, dynamic reward. Our proprietary calculator ensures you never risk more than 1% per trade setup.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-y border-white/5 relative overflow-hidden">
<div className="absolute inset-0 grid-bg opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-4">THE FRAMEWORK</h2>
<div className="h-1 w-20 bg-red-800"></div>
</div>
<div className="grid lg:grid-cols-2 gap-px bg-neutral-800 border border-neutral-800 overflow-hidden rounded-lg">

<div className="bg-black p-10 hover:bg-neutral-950 transition-colors duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-white border border-white/5 group-hover:border-red-500/20 transition-colors">
<span className="iconify" data-icon="lucide:book-open" data-width="24" strokeWidth="1.5"></span>
</div>
<div className="text-[10px] font-mono text-neutral-600">01</div>
</div>
<h3 className="text-xl font-medium text-white mb-2">Institutional Education</h3>
<p className="text-sm text-neutral-500 mb-6">Learn how liquidity, inducement, and market structure actually work through 40+ hours of video content.</p>

<div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-red-900"></div>
</div>
<div className="mt-2 text-[10px] text-neutral-500 text-right">Progress Tracking Included</div>
</div>

<div className="bg-black p-10 hover:bg-neutral-950 transition-colors duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-white border border-white/5 group-hover:border-red-500/20 transition-colors">
<span className="iconify" data-icon="lucide:users" data-width="24" strokeWidth="1.5"></span>
</div>
<div className="text-[10px] font-mono text-neutral-600">02</div>
</div>
<h3 className="text-xl font-medium text-white mb-2">Live Community Analysis</h3>
<p className="text-sm text-neutral-500 mb-6">Join a serious environment of traders. Daily educational breakdowns posted every London session.</p>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-800 border border-black"></div>
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-black"></div>
<div className="w-6 h-6 rounded-full bg-neutral-600 border border-black"></div>
<div className="w-6 h-6 rounded-full bg-red-900 border border-black flex items-center justify-center text-[8px] text-white font-bold">+500</div>
</div>
</div>

<div className="bg-black p-10 hover:bg-neutral-950 transition-colors duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-white border border-white/5 group-hover:border-red-500/20 transition-colors">
<span className="iconify" data-icon="lucide:target" data-width="24" strokeWidth="1.5"></span>
</div>
<div className="text-[10px] font-mono text-neutral-600">03</div>
</div>
<h3 className="text-xl font-medium text-white mb-2">Execution Precision</h3>
<p className="text-sm text-neutral-500">Refine your entries on the M1/M5 timeframes. Understand session timing and order block validation.</p>
</div>

<div className="bg-black p-10 hover:bg-neutral-950 transition-colors duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-white border border-white/5 group-hover:border-red-500/20 transition-colors">
<span className="iconify" data-icon="lucide:microscope" data-width="24" strokeWidth="1.5"></span>
</div>
<div className="text-[10px] font-mono text-neutral-600">04</div>
</div>
<h3 className="text-xl font-medium text-white mb-2">1-on-1 Mentorship</h3>
<p className="text-sm text-neutral-500">Direct access to refine your personal strategy. Review your journals and identify psychological leaks.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative" id="education">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-red-500 font-mono text-xs tracking-wider uppercase">Products</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mt-2">THE PATHWAY</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group flex flex-col h-full bg-neutral-900/20 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 transition-all duration-300">
<div className="h-32 bg-neutral-900 border-b border-white/5 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-transparent opacity-50"></div>
<span className="iconify text-neutral-700 w-12 h-12" data-icon="lucide:book-marked"></span>
</div>
<div className="p-8 flex-1">
<span className="text-xs font-semibold tracking-widest uppercase text-neutral-500">Foundation</span>
<h3 className="text-xl font-medium text-white mt-2 mb-6">Strategy E-Book</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-neutral-400">
<div className="w-1 h-1 bg-white rounded-full"></div> Complete Structure Guide
                            </li>
<li className="flex items-center gap-3 text-xs text-neutral-400">
<div className="w-1 h-1 bg-white rounded-full"></div> Risk Management PDF
                            </li>
<li className="flex items-center gap-3 text-xs text-neutral-400">
<div className="w-1 h-1 bg-white rounded-full"></div> Entry Checklists
                            </li>
</ul>
</div>
<div className="px-8 pb-8">
<div className="w-full py-2 border border-neutral-700 text-neutral-300 text-xs text-center rounded hover:bg-neutral-800 transition-colors cursor-pointer">
                            Learn More
                        </div>
</div>
</div>

<div className="group flex flex-col h-full bg-neutral-900/20 border border-red-900/50 rounded-xl overflow-hidden shadow-[0_0_30px_-10px_rgba(220,38,38,0.1)] relative">
<div className="absolute top-0 w-full h-1 bg-gradient-to-r from-red-900 via-red-600 to-red-900"></div>
<div className="h-32 bg-neutral-900 border-b border-white/5 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 to-transparent opacity-50"></div>
<span className="iconify text-red-800 w-12 h-12" data-icon="lucide:message-circle"></span>
</div>
<div className="p-8 flex-1">
<span className="text-xs font-semibold tracking-widest uppercase text-red-500">Membership</span>
<h3 className="text-xl font-medium text-white mt-2 mb-6">Discord Community</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-neutral-400">
<span className="iconify text-red-500" data-icon="lucide:check" data-width="14"></span> Daily Market Breakdowns
                            </li>
<li className="flex items-center gap-3 text-xs text-neutral-400">
<span className="iconify text-red-500" data-icon="lucide:check" data-width="14"></span> Live Trade Recaps
                            </li>
<li className="flex items-center gap-3 text-xs text-neutral-400">
<span className="iconify text-red-500" data-icon="lucide:check" data-width="14"></span> Psychology Channels
                            </li>
<li className="flex items-center gap-3 text-xs text-neutral-400">
<span className="iconify text-red-500" data-icon="lucide:check" data-width="14"></span> Full Course Access
                            </li>
</ul>
</div>
<div className="px-8 pb-8">
<a className="block w-full py-2 bg-red-900/80 text-white text-xs text-center rounded hover:bg-red-800 transition-colors" href="#pricing">
                            Join Community
                        </a>
</div>
</div>

<div className="group flex flex-col h-full bg-neutral-900/20 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 transition-all duration-300">
<div className="h-32 bg-neutral-900 border-b border-white/5 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-transparent opacity-50"></div>
<span className="iconify text-neutral-700 w-12 h-12" data-icon="lucide:video"></span>
</div>
<div className="p-8 flex-1">
<span className="text-xs font-semibold tracking-widest uppercase text-neutral-500">Elite</span>
<h3 className="text-xl font-medium text-white mt-2 mb-6">1-on-1 Strategy Call</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-neutral-400">
<div className="w-1 h-1 bg-white rounded-full"></div> Personalized Plan
                            </li>
<li className="flex items-center gap-3 text-xs text-neutral-400">
<div className="w-1 h-1 bg-white rounded-full"></div> Deep-Dive Journal Review
                            </li>
<li className="flex items-center gap-3 text-xs text-neutral-400">
<div className="w-1 h-1 bg-white rounded-full"></div> 60-Minute Zoom
                            </li>
</ul>
</div>
<div className="px-8 pb-8">
<div className="w-full py-2 border border-neutral-700 text-neutral-300 text-xs text-center rounded hover:bg-neutral-800 transition-colors cursor-pointer">
                            Book Consultation
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black border-t border-white/5 relative overflow-hidden" id="pricing">
<div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-4">CHOOSE YOUR EDGE</h2>
<p className="text-neutral-500 max-w-lg leading-relaxed">
                        Transparent pricing for every stage of your trading journey. Stop paying the market and start investing in your education.
                    </p>
</div>
<div className="flex items-center gap-2 text-xs font-medium bg-neutral-900 border border-white/10 rounded-full px-4 py-2 text-neutral-400">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Spots open for March Intake
                </div>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8">

<div className="flex flex-col bg-neutral-950 border border-neutral-800 rounded-xl p-8 hover:border-neutral-700 transition-all duration-300 group">
<div className="mb-4">
<span className="text-xs font-bold tracking-widest uppercase text-neutral-500">Starter</span>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-white tracking-tight">R950</span>
<span className="text-neutral-500 text-sm font-normal">/ one-time</span>
</div>
<p className="text-xs text-neutral-500 mt-2">Perfect for self-paced learners building a foundation.</p>
</div>
<div className="w-full h-px bg-neutral-900 mb-6"></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-400">
<span className="iconify text-neutral-600 mt-0.5" data-icon="lucide:check"></span>
<span>The Strategy E-Book (PDF)</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<span className="iconify text-neutral-600 mt-0.5" data-icon="lucide:check"></span>
<span>Market Structure Guide</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<span className="iconify text-neutral-600 mt-0.5" data-icon="lucide:check"></span>
<span>Risk Calculator Tool</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<span className="iconify text-neutral-600 mt-0.5" data-icon="lucide:check"></span>
<span>Lifetime Updates</span>
</li>
</ul>
<button className="w-full py-3 border border-white/10 rounded bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                        Buy Guide
                    </button>
</div>

<div className="flex flex-col bg-neutral-950/80 border border-red-900/50 rounded-xl p-8 relative shadow-[0_0_50px_-15px_rgba(220,38,38,0.15)] overflow-hidden">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-900 via-red-500 to-red-900"></div>
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-bold tracking-widest uppercase text-red-500">Membership</span>
<span className="text-[10px] font-bold uppercase tracking-wider bg-red-500/10 text-red-500 px-2 py-1 rounded">Popular</span>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-white tracking-tight">R499</span>
<span className="text-neutral-500 text-sm font-normal">/ month</span>
</div>
<p className="text-xs text-neutral-400 mt-2">Full ecosystem access. Trade alongside the team.</p>
</div>
<div className="w-full h-px bg-red-900/20 mb-6"></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-white">
<span className="iconify text-red-500 mt-0.5" data-icon="lucide:check"></span>
<span>Discord Community Access</span>
</li>
<li className="flex items-start gap-3 text-sm text-white">
<span className="iconify text-red-500 mt-0.5" data-icon="lucide:check"></span>
<span>Daily London Session Analysis</span>
</li>
<li className="flex items-start gap-3 text-sm text-white">
<span className="iconify text-red-500 mt-0.5" data-icon="lucide:check"></span>
<span>Full Video Course Library</span>
</li>
<li className="flex items-start gap-3 text-sm text-white">
<span className="iconify text-red-500 mt-0.5" data-icon="lucide:check"></span>
<span>Weekly Q&amp;A Livestreams</span>
</li>
<li className="flex items-start gap-3 text-sm text-white">
<span className="iconify text-red-500 mt-0.5" data-icon="lucide:check"></span>
<span>Trade Recaps &amp; Case Studies</span>
</li>
</ul>
<button className="w-full py-3 bg-white text-black text-sm font-semibold rounded hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                        Join Community
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
<div className="text-[10px] text-center text-neutral-600 mt-3">Cancel anytime. Instant access.</div>
</div>

<div className="flex flex-col bg-neutral-950 border border-neutral-800 rounded-xl p-8 hover:border-neutral-700 transition-all duration-300 group">
<div className="mb-4">
<span className="text-xs font-bold tracking-widest uppercase text-neutral-500">Mentorship</span>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-white tracking-tight">R3,500</span>
<span className="text-neutral-500 text-sm font-normal">/ 3 months</span>
</div>
<p className="text-xs text-neutral-500 mt-2">Accelerated learning with direct 1-on-1 guidance.</p>
</div>
<div className="w-full h-px bg-neutral-900 mb-6"></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-400">
<span className="iconify text-white mt-0.5" data-icon="lucide:check"></span>
<span><span className="text-white">Everything in Membership</span></span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<span className="iconify text-neutral-600 mt-0.5" data-icon="lucide:check"></span>
<span>3x 1-on-1 Strategy Calls</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<span className="iconify text-neutral-600 mt-0.5" data-icon="lucide:check"></span>
<span>Personal Trading Plan Audit</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<span className="iconify text-neutral-600 mt-0.5" data-icon="lucide:check"></span>
<span>Direct DM Support</span>
</li>
</ul>
<button className="w-full py-3 border border-white/10 rounded bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                        Apply for Mentorship
                    </button>
</div>
</div>

<div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale">
<span className="iconify w-20 h-8" data-icon="logos:stripe"></span>
<span className="iconify w-20 h-8" data-icon="logos:visa"></span>
<span className="iconify w-20 h-8" data-icon="logos:mastercard"></span>
</div>
</div>
</section>

<footer className="bg-black py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neutral-800 rounded flex items-center justify-center">
<span className="text-white text-[10px] font-bold">P</span>
</div>
<div className="text-white font-semibold text-sm tracking-tighter">
                    PFX
                </div>
</div>
<div className="flex gap-8 text-[10px] text-neutral-500 uppercase tracking-wider">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="mailto:support@pfx.co.za">Contact</a>
</div>
<div className="text-[10px] text-neutral-600">
                © 2024 PFX.
            </div>
</div>
</footer>

    </>
  );
}
