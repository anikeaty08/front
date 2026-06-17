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
      

<nav className="fixed top-0 w-full z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-1 group" href="#">
<span className="font-manrope font-semibold text-xl tracking-tighter text-slate-900 group-hover:text-violet-500 transition-colors">TravelSim</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#">Destinations</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#">How it works</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#">Reviews</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Log in</span>
</button>
<button className="flex items-center gap-2 bg-slate-900 hover:bg-violet-500 text-white text-xs md:text-sm font-medium px-4 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-violet-200/50">
<iconify-icon icon="solar:sim-card-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="tracking-wide">My eSIMs</span>
</button>
</div>
</div>
</nav>

<main className="flex-grow pt-32 pb-10 px-6 max-w-7xl mx-auto w-full">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center mb-24">

<div className="flex flex-col items-start max-w-2xl lg:max-w-none">
<div className="animate-blur-enter inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
<span className="text-xs font-medium text-slate-500 tracking-wide uppercase">New Regions Added</span>
</div>
<h1 className="animate-blur-enter delay-100 font-manrope font-light text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-widest text-slate-900 mb-6">
                    Boundary<br/>
<span className="text-slate-400">Free</span> Internet.
                </h1>
<p className="animate-blur-enter delay-200 text-slate-500 text-lg sm:text-xl font-light leading-relaxed max-w-md mb-10">
                    Instant eSIM delivery for 190+ countries. 
                    Keep your number, avoid roaming fees, and stay connected instantly.
                </p>

<div className="animate-blur-enter delay-300 w-full max-w-md relative group z-20">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400 group-focus-within:text-violet-500 transition-colors" icon="solar:map-point-search-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<input className="w-full pl-12 pr-14 py-4 bg-white border border-slate-200 text-slate-800 rounded-2xl focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition-all shadow-sm placeholder:text-slate-400 font-light text-base" placeholder="Where are you traveling to?" type="text"/>
<div className="absolute inset-y-0 right-2 flex items-center">
<button className="bg-violet-500 hover:bg-violet-600 text-white p-2 rounded-xl transition-colors flex items-center justify-center">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="animate-blur-enter delay-500 mt-12 grid grid-cols-2 gap-8 w-full max-w-sm">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 text-violet-500">
<iconify-icon icon="solar:rocket-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-medium text-sm">Instant Setup</span>
</div>
<p className="text-xs text-slate-400 font-light leading-relaxed">QR code delivered to email in seconds.</p>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 text-violet-500">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-medium text-sm">Local Rates</span>
</div>
<p className="text-xs text-slate-400 font-light leading-relaxed">Local pricing without plastic SIMs.</p>
</div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center lg:justify-end animate-blur-enter delay-200">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-violet-100/50 via-slate-50/50 to-white rounded-full blur-3xl -z-10 opacity-60"></div>

<div className="relative w-full max-w-md mx-auto perspective-[2000px]">

<div className="relative z-10 bg-white rounded-3xl p-6 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-slate-100 transform transition-transform hover:scale-[1.02] duration-500 ease-out">

<div className="flex justify-between items-start mb-8">
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-1">Current Plan</p>
<h3 className="text-2xl font-manrope font-light text-slate-900">Europe Plus</h3>
</div>
<div className="bg-green-50 text-green-600 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase flex items-center gap-1 border border-green-100">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
                            </div>
</div>

<div className="relative w-full h-32 flex items-end gap-1 mb-8 overflow-hidden">

<div className="w-full bg-slate-50 rounded-lg h-full relative flex items-end justify-between px-2 pb-0">
<div className="w-[8%] bg-violet-100 rounded-t-sm h-[30%]"></div>
<div className="w-[8%] bg-violet-100 rounded-t-sm h-[45%]"></div>
<div className="w-[8%] bg-violet-100 rounded-t-sm h-[20%]"></div>
<div className="w-[8%] bg-violet-100 rounded-t-sm h-[60%]"></div>
<div className="w-[8%] bg-violet-100 rounded-t-sm h-[35%]"></div>
<div className="w-[8%] bg-violet-100 rounded-t-sm h-[50%]"></div>
<div className="w-[8%] bg-violet-200 rounded-t-sm h-[75%]"></div>
<div className="w-[8%] bg-violet-500 rounded-t-sm h-[90%] shadow-[0_0_15px_rgba(139,92,246,0.3)]"></div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
<div className="flex items-center gap-2 mb-2 text-slate-400">
<iconify-icon icon="solar:pie-chart-2-linear" width="16"></iconify-icon>
<span className="text-xs font-medium">Data Left</span>
</div>
<p className="text-xl font-manrope font-medium text-slate-900">8.2 <span className="text-sm font-normal text-slate-500">GB</span></p>
</div>
<div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
<div className="flex items-center gap-2 mb-2 text-slate-400">
<iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon>
<span className="text-xs font-medium">Expires</span>
</div>
<p className="text-xl font-manrope font-medium text-slate-900">12 <span className="text-sm font-normal text-slate-500">Days</span></p>
</div>
</div>
</div>

<div className="absolute -top-6 -right-6 -z-10 w-full h-full bg-white opacity-40 rounded-3xl border border-slate-200/50 shadow-lg scale-95 origin-bottom-left"></div>
<div className="absolute top-1/3 -right-12 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center gap-4 max-w-[240px] animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center text-violet-500 flex-shrink-0">
<iconify-icon icon="solar:globus-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-slate-900">Welcome to France</p>
<p className="text-[10px] text-slate-500">eSIM connected to Orange F</p>
</div>
</div>
</div>
</div>
</div>

<section className="animate-blur-enter delay-700 py-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
<div>
<h2 className="text-3xl font-manrope font-light text-slate-900 tracking-tight">Popular Tariffs</h2>
<p className="text-slate-500 mt-2 font-light">Choose from our most traveled destinations.</p>
</div>
<a className="flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors" href="#">
                    View all 190+ countries
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-violet-200 transition-all duration-300 flex flex-col justify-between h-[320px]">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
<iconify-icon className="text-violet-600" icon="solar:map-point-wave-linear" width="120"></iconify-icon>
</div>
<div>
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-violet-50 group-hover:text-violet-600 transition-colors">
<iconify-icon icon="solar:flag-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="px-2 py-1 bg-violet-50 text-violet-600 text-[10px] font-semibold uppercase tracking-wider rounded-md border border-violet-100">Bestseller</span>
</div>
<h3 className="text-xl font-manrope font-medium text-slate-900 mb-1">United States</h3>
<p className="text-sm text-slate-500 font-light">T-Mobile / AT&amp;T</p>
<div className="my-6 border-t border-slate-100 pt-6">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-slate-400" icon="solar:database-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-slate-700">10 GB</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:calendar-date-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-slate-700">30 Days</span>
</div>
</div>
</div>
<div className="flex items-end justify-between">
<div>
<p className="text-[10px] text-slate-400 uppercase tracking-wide font-medium">Starting at</p>
<div className="flex items-baseline gap-0.5 text-slate-900">
<span className="text-sm font-light">$</span>
<span className="text-2xl font-manrope font-semibold tracking-tight">12.50</span>
</div>
</div>
<button className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-violet-600 transition-colors shadow-md">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-violet-200 transition-all duration-300 flex flex-col justify-between h-[320px]">
<div>
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-violet-50 group-hover:text-violet-600 transition-colors">
<iconify-icon icon="solar:earth-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-manrope font-medium text-slate-900 mb-1">Europe Plus</h3>
<p className="text-sm text-slate-500 font-light">33 Countries</p>
<div className="my-6 border-t border-slate-100 pt-6">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-slate-400" icon="solar:database-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-slate-700">5 GB</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:calendar-date-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-slate-700">30 Days</span>
</div>
</div>
</div>
<div className="flex items-end justify-between">
<div>
<p className="text-[10px] text-slate-400 uppercase tracking-wide font-medium">Starting at</p>
<div className="flex items-baseline gap-0.5 text-slate-900">
<span className="text-sm font-light">$</span>
<span className="text-2xl font-manrope font-semibold tracking-tight">8.90</span>
</div>
</div>
<button className="w-10 h-10 rounded-full bg-slate-50 text-slate-900 group-hover:bg-violet-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-violet-200 transition-all duration-300 flex flex-col justify-between h-[320px]">
<div>
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-violet-50 group-hover:text-violet-600 transition-colors">
<iconify-icon icon="solar:sun-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-manrope font-medium text-slate-900 mb-1">Japan</h3>
<p className="text-sm text-slate-500 font-light">Softbank / Docomo</p>
<div className="my-6 border-t border-slate-100 pt-6">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-slate-400" icon="solar:database-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-slate-700">3 GB</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:calendar-date-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-slate-700">15 Days</span>
</div>
</div>
</div>
<div className="flex items-end justify-between">
<div>
<p className="text-[10px] text-slate-400 uppercase tracking-wide font-medium">Starting at</p>
<div className="flex items-baseline gap-0.5 text-slate-900">
<span className="text-sm font-light">$</span>
<span className="text-2xl font-manrope font-semibold tracking-tight">6.50</span>
</div>
</div>
<button className="w-10 h-10 rounded-full bg-slate-50 text-slate-900 group-hover:bg-violet-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-violet-200 transition-all duration-300 flex flex-col justify-between h-[320px]">
<div>
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-violet-50 group-hover:text-violet-600 transition-colors">
<iconify-icon icon="solar:planet-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-manrope font-medium text-slate-900 mb-1">Global</h3>
<p className="text-sm text-slate-500 font-light">84 Countries</p>
<div className="my-6 border-t border-slate-100 pt-6">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-slate-400" icon="solar:database-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-slate-700">20 GB</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:calendar-date-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-slate-700">365 Days</span>
</div>
</div>
</div>
<div className="flex items-end justify-between">
<div>
<p className="text-[10px] text-slate-400 uppercase tracking-wide font-medium">Starting at</p>
<div className="flex items-baseline gap-0.5 text-slate-900">
<span className="text-sm font-light">$</span>
<span className="text-2xl font-manrope font-semibold tracking-tight">49.00</span>
</div>
</div>
<button className="w-10 h-10 rounded-full bg-slate-50 text-slate-900 group-hover:bg-violet-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-100 bg-white py-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-xs text-slate-400 font-light">© 2024 TravelSim.mobi. All rights reserved.</p>
<div className="flex items-center gap-6">
<iconify-icon className="grayscale opacity-40 hover:opacity-100 transition-opacity" icon="logos:visa" width="32"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:opacity-100 transition-opacity" icon="logos:mastercard" width="24"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:opacity-100 transition-opacity" icon="logos:apple-pay" width="32"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:opacity-100 transition-opacity" icon="logos:google-pay" width="32"></iconify-icon>
</div>
</div>
</footer>

    </>
  );
}
