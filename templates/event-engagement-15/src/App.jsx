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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-100/50 blur-[100px] mix-blend-multiply"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-pink-100/40 blur-[120px] mix-blend-multiply"></div>
<div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-slate-200/50 blur-[80px] mix-blend-multiply"></div>
</div>

<main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

<div className="lg:col-span-5 flex flex-col items-start text-left">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
<div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-semibold tracking-tighter">
                        CP
                    </div>
<span className="text-xs font-medium text-slate-600 tracking-wide">Crowdplay Ecosystem</span>
</div>

<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                    Elevating Event Excitement with Crowdplay
                </h1>

<p className="mt-6 text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg font-normal">
                    Create interactive moments, live leaderboards and scores, and unforgettable experiences that transform passive attendees into active participants.
                </p>

<div className="mt-10 flex flex-wrap items-center gap-4">
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/20">
                        Start building
                        <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
                        View documentation
                    </button>
</div>
</div>

<div className="lg:col-span-7 relative w-full h-[500px] sm:h-[600px] lg:h-[700px] mt-10 lg:mt-0 perspective-1000">

<div className="absolute inset-0 lg:inset-y-10 lg:inset-x-4 bg-white rounded-2xl shadow-2xl border border-slate-200/80 flex flex-col overflow-hidden z-10 transform transition-transform duration-500 hover:scale-[1.01]">

<div className="h-12 bg-slate-50/80 border-b border-slate-100 flex items-center justify-between px-4 backdrop-blur-sm relative z-20">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>
<div className="text-xs font-medium text-slate-500 flex items-center gap-2">
<iconify-icon icon="solar:map-linear" strokeWidth="1.5"></iconify-icon>
                            Event Command Center
                        </div>
<div className="w-10"></div> 
</div>

<div className="relative flex-1 bg-slate-900 overflow-hidden">

<svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="mapGrid" patternunits="userSpaceOnUse" width="40">
<path className="text-slate-400" d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#mapGrid)" height="100%" width="100%"></rect>
</svg>

<div className="absolute top-[30%] left-[20%] w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-[80px] opacity-60"></div>
<div className="absolute bottom-[20%] right-[20%] w-56 h-56 bg-pink-500 rounded-full mix-blend-screen filter blur-[70px] opacity-50"></div>
<div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500 rounded-full mix-blend-screen filter blur-[60px] opacity-40"></div>

<div className="absolute top-[20%] left-[15%] w-40 h-32 border border-dashed border-blue-400/50 rounded-xl bg-blue-500/10 flex items-center justify-center backdrop-blur-[2px]">
<span className="text-xs font-medium tracking-widest text-blue-200 uppercase">Zone A</span>
</div>
<div className="absolute bottom-[25%] right-[15%] w-48 h-40 border border-dashed border-pink-400/50 rounded-xl bg-pink-500/10 flex items-center justify-center backdrop-blur-[2px]">
<span className="text-xs font-medium tracking-widest text-pink-200 uppercase">Zone B</span>
</div>

<div className="absolute top-[25%] left-[20%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
<div className="absolute top-[28%] left-[22%] w-1.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_8px_rgba(147,197,253,0.8)]"></div>
<div className="absolute top-[22%] left-[28%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
<div className="absolute bottom-[30%] right-[25%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
<div className="absolute bottom-[28%] right-[20%] w-1.5 h-1.5 rounded-full bg-pink-300 shadow-[0_0_8px_rgba(249,168,212,0.8)]"></div>

<div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3">

<div className="bg-slate-800/80 backdrop-blur-md rounded-xl p-4 border border-slate-700/50">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-slate-300">Overall Event Engagement</span>
<span className="text-xs font-semibold text-white">87%</span>
</div>
<div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full w-[87%] relative">
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
</div>
</div>
</div>

<div className="bg-slate-800/80 backdrop-blur-md rounded-xl p-4 border border-slate-700/50">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-blue-300">Team Alpha</span>
<span className="text-xs font-medium text-slate-400">vs</span>
<span className="text-xs font-medium text-pink-300">Team Beta</span>
</div>
<div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden flex">
<div className="h-full bg-blue-500 w-[55%] relative">
<div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
</div>
<div className="h-full bg-pink-500 w-[45%] relative">
<div className="absolute inset-0 bg-gradient-to-l from-white/10 to-transparent"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-0 sm:top-[-2%] left-0 sm:left-[-8%] w-[260px] bg-white/95 backdrop-blur-xl rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-200/60 p-5 z-20 hidden sm:block">
<div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
<div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-2xl text-slate-400" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 tracking-tight">Alex Jensen</h3>
<p className="text-xs text-slate-500">Unassigned</p>
</div>
</div>
<div className="space-y-3">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5">Assign Role</label>
<div className="relative w-full border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 flex justify-between items-center cursor-pointer hover:bg-slate-100 transition-colors">
<span className="text-sm text-slate-900 font-medium">Team Captain</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-2 gap-2 pt-2">
<div className="bg-slate-50 rounded-md p-2 border border-slate-100 text-center">
<span className="block text-xs text-slate-400 mb-0.5">Strategy</span>
<span className="block text-sm font-semibold text-slate-700">92</span>
</div>
<div className="bg-slate-50 rounded-md p-2 border border-slate-100 text-center">
<span className="block text-xs text-slate-400 mb-0.5">Speed</span>
<span className="block text-sm font-semibold text-slate-700">78</span>
</div>
</div>
<button className="w-full mt-2 bg-blue-600 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                            Confirm Team
                        </button>
</div>
</div>

<div className="absolute top-[8%] sm:top-[4%] right-0 sm:right-[-6%] w-[280px] bg-white/95 backdrop-blur-xl rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-200/60 p-5 z-20">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight flex items-center gap-2">
<iconify-icon className="text-blue-500 text-lg" icon="solar:chart-square-linear"></iconify-icon>
                            Live Insights
                        </h3>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-100 text-emerald-700 uppercase tracking-wider flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            Live
                        </span>
</div>
<div className="mb-1">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">4,250</span>
<span className="text-xs text-emerald-500 font-medium ml-1">+12% /min</span>
</div>
<p className="text-xs text-slate-500 mb-3">Score velocity (last 5m)</p>

<div className="relative h-16 w-full mb-4 border-b border-slate-100">

<div className="absolute inset-0 flex flex-col justify-between opacity-50 pointer-events-none">
<div className="border-t border-slate-100 w-full h-px"></div>
<div className="border-t border-slate-100 w-full h-px"></div>
<div className="border-t border-slate-100 w-full h-px"></div>
</div>
<svg className="w-full h-full relative z-10" preserveaspectratio="none" viewbox="0 0 100 40">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"></stop>
<stop offset="100%" stop-color="#3b82f6" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,35 L10,30 L20,32 L30,20 L40,25 L50,15 L60,18 L70,8 L80,12 L90,5 L100,2 L100,40 L0,40 Z" fill="url(#chartGradient)"></path>
<path d="M0,35 L10,30 L20,32 L30,20 L40,25 L50,15 L60,18 L70,8 L80,12 L90,5 L100,2" fill="none" stroke="#3b82f6" strokeLinejoin="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>

<div className="space-y-2.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-xs text-slate-600">Trivia Answers</span>
</div>
<span className="text-xs font-medium text-slate-900">54%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-pink-400"></div>
<span className="text-xs text-slate-600">Location Check-ins</span>
</div>
<span className="text-xs font-medium text-slate-900">32%</span>
</div>
</div>
</div>

<div className="absolute bottom-[-5%] sm:bottom-[10%] left-[5%] sm:left-[-4%] w-[270px] bg-white/95 backdrop-blur-xl rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] border border-slate-200/60 p-5 z-30">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Player Scorecard</h4>
<h3 className="text-base font-semibold text-slate-900 tracking-tight">Sarah Chen</h3>
</div>

<div className="relative flex items-center justify-center w-6 h-6 bg-blue-50 rounded-full border border-blue-100" title="Live Score Boost Active">
<span className="absolute inline-flex h-3 w-3 rounded-full bg-blue-400 opacity-75 animate-ping"></span>
<iconify-icon className="text-blue-600 text-xs relative z-10" icon="solar:bolt-linear"></iconify-icon>
</div>
</div>

<div className="mb-5">
<span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider block mb-2">Active Power-Ups</span>
<div className="flex gap-2">
<div className="w-8 h-8 rounded bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm relative">
<iconify-icon icon="solar:shield-star-linear"></iconify-icon>

<div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white border border-slate-200 rounded-full flex items-center justify-center text-[8px] font-bold text-slate-700">2</div>
</div>
<div className="w-8 h-8 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 opacity-60">
<iconify-icon icon="solar:magnet-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 opacity-60">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-lg border border-slate-100 p-3">
<span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider block mb-2 border-b border-slate-200 pb-1">Point Contribution</span>
<ul className="space-y-2 mt-2">
<li className="flex justify-between items-center">
<span className="text-xs text-slate-600 flex items-center gap-1.5">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
                                    Main Quest
                                </span>
<span className="text-xs font-semibold text-slate-900">+850</span>
</li>
<li className="flex justify-between items-center">
<span className="text-xs text-slate-600 flex items-center gap-1.5">
<iconify-icon className="text-amber-500" icon="solar:star-linear"></iconify-icon>
                                    Bonus Items
                                </span>
<span className="text-xs font-semibold text-slate-900">+220</span>
</li>
<li className="flex justify-between items-center">
<span className="text-xs text-slate-600 flex items-center gap-1.5">
<iconify-icon className="text-blue-500" icon="solar:users-group-rounded-linear"></iconify-icon>
                                    Team Assist
                                </span>
<span className="text-xs font-semibold text-slate-900">+150</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
