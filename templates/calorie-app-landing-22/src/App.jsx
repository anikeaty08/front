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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-zinc-100/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2.5 group" href="#">
<div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-white shadow-lg shadow-zinc-200 group-hover:bg-orange-500 transition-colors duration-300">
<span className="iconify" data-icon="lucide:activity" data-width="20" strokeWidth="2"></span>
</div>
<span className="font-semibold tracking-tight text-base">Calorie App</span>
</a>
<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#stories">Stories</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#blog">Blog</a>
</div>
<a className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-2.5 rounded-full transition-all duration-300 shadow-xl shadow-zinc-200 hover:shadow-2xl hover:-translate-y-0.5" href="#">
<span className="iconify" data-icon="lucide:apple" data-width="18"></span>
<span className="text-sm font-medium">Download App</span>
</a>
</div>
</nav>

<main className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-32 left-[10%] w-16 h-16 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-zinc-100 flex items-center justify-center text-3xl float-slow hidden lg:flex z-10">
            🥗
        </div>
<div className="absolute top-40 right-[10%] w-20 h-20 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-zinc-100 flex items-center justify-center text-4xl float-medium hidden lg:flex z-10">
            🍕
        </div>
<div className="absolute bottom-10 left-[20%] w-12 h-12 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-zinc-100 flex items-center justify-center text-2xl float-fast hidden lg:flex z-10">
            🍎
        </div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-20">

<div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 mb-10 shadow-sm">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
</span>
<span className="text-sm font-medium text-zinc-600">200k+ downloads on AppStore</span>
</div>

<h1 className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1] text-zinc-900 mb-8">
                Your <span className="hero-title-highlight">calories</span><br/>
                under control.
            </h1>
<p className="text-lg sm:text-xl text-zinc-500 max-w-xl mx-auto mb-12 leading-relaxed font-medium">
                Snap a photo, scan a barcode, or describe your meal and get instant calorie and nutrient info with AI-powered accuracy.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto h-14 px-8 bg-zinc-900 text-white rounded-full flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200 hover:-translate-y-0.5" href="#">
<span className="iconify" data-icon="lucide:apple" data-width="22"></span>
<span className="font-medium text-base">Download for iPhone</span>
</a>
<a className="w-full sm:w-auto h-14 px-8 bg-white text-zinc-900 border border-zinc-200 rounded-full flex items-center justify-center gap-2 hover:bg-zinc-50 transition-all shadow-sm" href="#how-it-works">
<span className="font-medium text-base">How it works</span>
<span className="iconify" data-icon="lucide:arrow-down" data-width="18"></span>
</a>
</div>
</div>
</main>

<section className="pb-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="relative flex justify-center">

<div className="relative w-[340px] h-[680px] bg-zinc-950 rounded-[3.5rem] p-3 shadow-2xl border-[6px] border-zinc-800 ring-1 ring-zinc-900/5 z-20">

<div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-30"></div>

<div className="w-full h-full bg-zinc-50 rounded-[2.8rem] overflow-hidden relative flex flex-col">

<div className="h-full relative">

<div className="absolute inset-0 bg-zinc-200">
<div className="w-full h-full opacity-30" style={{backgroundImage: 'radial-gradient(#a1a1aa 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-orange-100 rounded-full blur-xl opacity-80"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[80px]">🥪</div>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-64 h-64 border-2 border-white/60 rounded-3xl relative">
<div className="absolute inset-x-0 top-1/2 h-0.5 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)] animate-[pulse_2s_infinite]"></div>

<div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-white rounded-tl-xl"></div>
<div className="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-white rounded-tr-xl"></div>
<div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-white rounded-bl-xl"></div>
<div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-white rounded-br-xl"></div>
</div>
</div>

<div className="absolute bottom-6 left-4 right-4 bg-white/95 backdrop-blur-md p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
<div className="flex items-center justify-between mb-2">
<h3 className="font-semibold text-zinc-900 text-lg">Club Sandwich</h3>
<div className="bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide">Verified</div>
</div>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-3xl font-bold text-zinc-900 tracking-tight">540</span>
<span className="text-zinc-500 font-medium text-sm">kcal</span>
</div>
<div className="grid grid-cols-3 gap-2 mb-4">
<div className="bg-zinc-50 rounded-xl p-2 text-center border border-zinc-100">
<div className="text-[10px] text-zinc-400 font-medium uppercase">Carbs</div>
<div className="text-sm font-semibold text-zinc-900">45g</div>
</div>
<div className="bg-zinc-50 rounded-xl p-2 text-center border border-zinc-100">
<div className="text-[10px] text-zinc-400 font-medium uppercase">Prot</div>
<div className="text-sm font-semibold text-zinc-900">28g</div>
</div>
<div className="bg-zinc-50 rounded-xl p-2 text-center border border-zinc-100">
<div className="text-[10px] text-zinc-400 font-medium uppercase">Fat</div>
<div className="text-sm font-semibold text-zinc-900">18g</div>
</div>
</div>
<button className="w-full bg-zinc-900 text-white font-medium py-3 rounded-xl text-sm">Log Meal</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">Decode what you eat</h2>
<p className="text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                See your food in a whole new way. Uncover what goes into every bite, layer by layer.
            </p>
</div>

<div className="burger-container relative h-[500px] flex flex-col items-center justify-center perspective-[1000px] group cursor-default">

<div className="burger-layer relative z-50 mb-[-10px]" style={{'--hover-translate': '-60px', '--hover-rotate': '-5deg'}}>
<div className="w-56 h-20 bg-[#F4A261] rounded-t-[5rem] border-2 border-[#E76F51] shadow-lg relative">

<div className="absolute top-4 left-10 w-2 h-1 bg-[#FFE8D6] rounded-full opacity-60 rotate-12"></div>
<div className="absolute top-8 left-24 w-2 h-1 bg-[#FFE8D6] rounded-full opacity-60 -rotate-12"></div>
<div className="absolute top-5 right-12 w-2 h-1 bg-[#FFE8D6] rounded-full opacity-60 rotate-45"></div>
</div>

<div className="absolute right-[110%] top-1/2 -translate-y-1/2 flex items-center justify-end ingredient-label">
<div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-zinc-100 whitespace-nowrap">
<span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">Carbs</span>
<span className="block text-base font-bold text-zinc-900">22g Fiber</span>
</div>
<div className="h-px bg-zinc-300 ingredient-line"></div>
</div>
</div>

<div className="burger-layer relative z-40 mb-[-5px]" style={{'--hover-translate': '-30px', '--hover-rotate': '3deg'}}>
<div className="w-60 h-8 bg-[#80B918] rounded-full border border-[#55A630] shadow-md flex items-center justify-center">
<div className="w-full h-full rounded-full border-b-4 border-white/20"></div>
</div>
</div>

<div className="burger-layer relative z-30 mb-[-5px]" style={{'--hover-translate': '0px', '--hover-rotate': '-2deg'}}>
<div className="w-52 h-4 bg-[#E63946] rounded-2xl border border-[#D00000] shadow-sm"></div>

<div className="absolute left-[110%] top-1/2 -translate-y-1/2 flex items-center ingredient-label" style={{transitionDelay: '100ms'}}>
<div className="h-px bg-zinc-300 ingredient-line"></div>
<div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-zinc-100 whitespace-nowrap">
<span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">Vitamins</span>
<span className="block text-base font-bold text-zinc-900">Vitamin A, C</span>
</div>
</div>
</div>

<div className="burger-layer relative z-20 mb-[-5px]" style={{'--hover-translate': '30px', '--hover-rotate': '4deg'}}>
<div className="w-54 h-3 bg-[#FFD60A] rounded-md border border-[#FFC300] shadow-sm transform -rotate-2 w-[220px]"></div>
</div>

<div className="burger-layer relative z-10 mb-[-10px]" style={{'--hover-translate': '60px', '--hover-rotate': '-1deg'}}>
<div className="w-56 h-14 bg-[#582F0E] rounded-2xl border border-[#3E1F0B] shadow-lg flex flex-col justify-center px-4">
<div className="w-full h-1 bg-black/10 rounded-full mb-1"></div>
<div className="w-full h-1 bg-black/10 rounded-full"></div>
</div>

<div className="absolute right-[110%] top-1/2 -translate-y-1/2 flex items-center justify-end ingredient-label" style={{transitionDelay: '200ms'}}>
<div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-zinc-100 whitespace-nowrap">
<span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">Protein</span>
<span className="block text-base font-bold text-zinc-900">25g Beef</span>
</div>
<div className="h-px bg-zinc-300 ingredient-line"></div>
</div>
</div>

<div className="burger-layer relative z-0" style={{'--hover-translate': '90px', '--hover-rotate': '0deg'}}>
<div className="w-56 h-12 bg-[#F4A261] rounded-b-3xl border-2 border-[#E76F51] shadow-lg mt-1"></div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Smarter tools for your health</h2>
<p className="text-lg text-zinc-500">Track. Plan. Scan. Repeat. Features that think ahead.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 gap-6 h-auto md:h-[600px]">

<div className="col-span-1 md:col-span-4 bg-white rounded-[2rem] p-10 border border-zinc-200/60 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-500">
<div className="relative z-10 max-w-sm">
<div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:trending-up" data-width="24"></span>
</div>
<h3 className="text-2xl font-semibold mb-3 text-zinc-900">Track your progress</h3>
<p className="text-base text-zinc-500 leading-relaxed">Stay consistent with visual insights. Our algorithm adjusts your daily goals based on your activity and logging history.</p>
</div>

<div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 md:translate-x-0 md:right-10 w-[400px] h-[300px] bg-zinc-50 rounded-xl border border-zinc-100 p-6 shadow-sm group-hover:scale-105 transition-transform duration-500">
<div className="flex items-end justify-between h-full gap-4 pb-2">
<div className="w-full bg-orange-200 rounded-t-lg h-[40%] group-hover:h-[45%] transition-all duration-700"></div>
<div className="w-full bg-orange-300 rounded-t-lg h-[60%] group-hover:h-[65%] transition-all duration-700 delay-75"></div>
<div className="w-full bg-orange-400 rounded-t-lg h-[50%] group-hover:h-[55%] transition-all duration-700 delay-100"></div>
<div className="w-full bg-orange-500 rounded-t-lg h-[80%] group-hover:h-[90%] transition-all duration-700 delay-150 relative">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs px-2 py-1 rounded">Goal</div>
</div>
<div className="w-full bg-zinc-200 rounded-t-lg h-[30%]"></div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 row-span-2 bg-zinc-900 rounded-[2rem] p-10 shadow-xl relative overflow-hidden group text-white">
<div className="relative z-10">
<div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 text-white">
<span className="iconify" data-icon="lucide:database" data-width="24"></span>
</div>
<h3 className="text-2xl font-semibold mb-3">Huge Database</h3>
<p className="text-base text-zinc-400 leading-relaxed">Verified food data from 10M+ items worldwide.</p>
</div>
<div className="absolute -bottom-10 -right-10 opacity-10 text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
<span className="iconify" data-icon="lucide:globe" data-width="240"></span>
</div>
</div>

<div className="col-span-1 md:col-span-2 bg-white rounded-[2rem] p-10 border border-zinc-200/60 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-500">
<div className="flex flex-col h-full justify-between">
<div>
<div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:scan-barcode" data-width="24"></span>
</div>
<h3 className="text-2xl font-semibold mb-3 text-zinc-900">Barcode Scan</h3>
</div>
<p className="text-base text-zinc-500">Instant recognition.</p>
</div>
<div className="absolute top-10 right-10 opacity-20 group-hover:opacity-40 transition-opacity">
<span className="iconify" data-icon="lucide:scan" data-width="80"></span>
</div>
</div>

<div className="col-span-1 md:col-span-2 bg-white rounded-[2rem] p-10 border border-zinc-200/60 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-500">
<div className="flex flex-col h-full justify-between">
<div>
<div className="w-12 h-12 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:calendar-heart" data-width="24"></span>
</div>
<h3 className="text-2xl font-semibold mb-3 text-zinc-900">Meal Planner</h3>
</div>
<p className="text-base text-zinc-500">Plan your week ahead.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">Simple pricing</h2>
<p className="text-xl text-zinc-500">Start free, go pro when you're ready. No limits, no pressure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">

<div className="p-8 rounded-[2rem] bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-colors">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-lg font-semibold text-zinc-900">Basic</h3>
<p className="text-sm text-zinc-500 mt-1">For casual tracking</p>
</div>
<span className="bg-white border border-zinc-200 text-zinc-600 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">Free</span>
</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-bold tracking-tight text-zinc-900">$0</span>
<span className="text-zinc-500">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-600">
<div className="w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center flex-shrink-0"><span className="iconify" data-icon="lucide:check" data-width="12"></span></div>
                            Food logging
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<div className="w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center flex-shrink-0"><span className="iconify" data-icon="lucide:check" data-width="12"></span></div>
                            Standard Database
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<div className="w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center flex-shrink-0"><span className="iconify" data-icon="lucide:check" data-width="12"></span></div>
                            Water tracking
                        </li>
</ul>
<button className="w-full py-4 rounded-xl border border-zinc-200 bg-white text-zinc-900 font-semibold text-sm hover:bg-zinc-50 transition-colors shadow-sm">Get Started</button>
</div>

<div className="p-10 rounded-[2.5rem] bg-zinc-900 text-white shadow-2xl shadow-zinc-400/20 relative transform md:-translate-y-4">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">Most Popular</div>
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-xl font-semibold text-white">Pro</h3>
<p className="text-sm text-zinc-400 mt-1">For serious goals</p>
</div>
</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-6xl font-bold tracking-tight text-white">$9</span>
<span className="text-zinc-500">/mo</span>
</div>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 text-white"><span className="iconify" data-icon="lucide:check" data-width="12"></span></div>
                            Everything in Basic
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 text-white"><span className="iconify" data-icon="lucide:check" data-width="12"></span></div>
                            AI Food Scanner
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 text-white"><span className="iconify" data-icon="lucide:check" data-width="12"></span></div>
                            Macro Analysis
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 text-white"><span className="iconify" data-icon="lucide:check" data-width="12"></span></div>
                            No Ads
                        </li>
</ul>
<button className="w-full py-4 rounded-xl bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25">Start Free Trial</button>
</div>

<div className="p-8 rounded-[2rem] bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-colors">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-lg font-semibold text-zinc-900">Coaching</h3>
<p className="text-sm text-zinc-500 mt-1">For total control</p>
</div>
<span className="bg-white border border-zinc-200 text-zinc-600 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">Gold</span>
</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-bold tracking-tight text-zinc-900">$29</span>
<span className="text-zinc-500">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-600">
<div className="w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center flex-shrink-0"><span className="iconify" data-icon="lucide:check" data-width="12"></span></div>
                            Everything in Pro
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<div className="w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center flex-shrink-0"><span className="iconify" data-icon="lucide:check" data-width="12"></span></div>
                            1-on-1 Chat
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<div className="w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center flex-shrink-0"><span className="iconify" data-icon="lucide:check" data-width="12"></span></div>
                            Personalized Plans
                        </li>
</ul>
<button className="w-full py-4 rounded-xl border border-zinc-200 bg-white text-zinc-900 font-semibold text-sm hover:bg-zinc-50 transition-colors shadow-sm">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-12 text-center">Frequently asked questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-3xl p-6 [&amp;_summary::-webkit-details-marker]:hidden border border-zinc-200 shadow-sm">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-zinc-900 font-semibold select-none">
<span>How accurate is the scanner?</span>
<span className="relative size-5 shrink-0">
<span className="iconify absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity" data-icon="lucide:plus" data-width="20"></span>
<span className="iconify absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity" data-icon="lucide:minus" data-width="20"></span>
</span>
</summary>
<p className="mt-4 leading-relaxed text-zinc-500">
                        Our AI scanner has a 98% accuracy rate for common foods and packaged goods. It learns from your corrections to get even better over time.
                    </p>
</details>
<details className="group bg-white rounded-3xl p-6 [&amp;_summary::-webkit-details-marker]:hidden border border-zinc-200 shadow-sm">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-zinc-900 font-semibold select-none">
<span>Can I sync with Apple Health?</span>
<span className="relative size-5 shrink-0">
<span className="iconify absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity" data-icon="lucide:plus" data-width="20"></span>
<span className="iconify absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity" data-icon="lucide:minus" data-width="20"></span>
</span>
</summary>
<p className="mt-4 leading-relaxed text-zinc-500">
                        Yes! We offer full two-way synchronization with Apple Health, Google Fit, and other major fitness platforms.
                    </p>
</details>
<details className="group bg-white rounded-3xl p-6 [&amp;_summary::-webkit-details-marker]:hidden border border-zinc-200 shadow-sm">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-zinc-900 font-semibold select-none">
<span>Is there a free trial for Pro?</span>
<span className="relative size-5 shrink-0">
<span className="iconify absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity" data-icon="lucide:plus" data-width="20"></span>
<span className="iconify absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity" data-icon="lucide:minus" data-width="20"></span>
</span>
</summary>
<p className="mt-4 leading-relaxed text-zinc-500">
                        Absolutely. You can try Pro features free for 7 days. We'll remind you before the trial ends so there are no surprises.
                    </p>
</details>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 border-t border-zinc-100 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-24">
<div className="col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:activity" data-width="16"></span>
</div>
<span className="font-bold tracking-tight text-lg">Calorie App</span>
</a>
<p className="text-zinc-500 text-sm max-w-xs leading-relaxed">The smartest way to track nutrition and reach your health goals. AI-powered, user-focused.</p>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-6">Product</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-6">Company</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">About</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>

<div className="border-t border-zinc-100 pt-16 text-center">
<h2 className="text-[12vw] leading-none font-bold tracking-tighter text-zinc-900/5 select-none pointer-events-none">
                    CALORIES
                </h2>
<div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-4">
<p className="text-sm text-zinc-400">© 2026 Calorie App Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="18"></span>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18"></span>
</a>
</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
