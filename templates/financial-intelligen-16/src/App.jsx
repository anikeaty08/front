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
      

<div className="fixed top-0 left-0 w-full h-full bg-grid -z-20"></div>
<div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-50/50 rounded-full blur-[120px] -z-10 mix-blend-multiply"></div>
<div className="fixed bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-indigo-50/50 rounded-full blur-[100px] -z-10 mix-blend-multiply"></div>

<nav className="fixed top-0 w-full z-50 border-b border-gray-200/50 glass-card">
<div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center text-white">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>
</div>
<span className="text-sm font-semibold tracking-tight text-gray-900">Quantivo</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">Product</a>
<a className="hover:text-gray-900 transition-colors" href="#">Solutions</a>
<a className="hover:text-gray-900 transition-colors" href="#">Enterprise</a>
<a className="hover:text-gray-900 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors hidden sm:block" href="#">Log in</a>
<button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-2">
<span>Start for free</span>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 px-4 flex flex-col items-center justify-center overflow-hidden">

<div className="group cursor-pointer inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white/50 hover:bg-white hover:border-gray-300 transition-all mb-8 shadow-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium text-gray-600">New: Multi-currency forecasting</span>
<svg className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-all" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>

<h1 className="text-5xl md:text-7xl font-semibold text-center tracking-tight text-gray-900 leading-[1.1] mb-6 max-w-5xl mx-auto">
            Financial clarity for the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">modern enterprise</span>
</h1>

<p className="text-lg md:text-xl text-center text-gray-500 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
            Unify your banking, treasury, and accounting stacks. Automate reconciliation and forecast cash flow with 99% accuracy.
        </p>

<div className="flex flex-col sm:flex-row items-center gap-4 mb-24">
<button className="group h-12 px-6 rounded-full bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium transition-all shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] flex items-center gap-2">
                Get started
                <svg className="transition-transform group-hover:translate-x-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="group h-12 px-6 rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-700 text-sm font-medium transition-all shadow-sm flex items-center gap-2">
<svg className="text-gray-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                View demo
            </button>
</div>

<div className="w-full max-w-[1100px] mx-auto relative group perspective-[2000px]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-blue-100/50 via-purple-100/50 to-emerald-100/50 blur-[60px] -z-10 transition-opacity opacity-80 group-hover:opacity-100"></div>

<div className="relative bg-white rounded-2xl border border-gray-200/80 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-700 ease-out transform [transform-style:preserve-3d] [transform:rotateX(2deg)] group-hover:[transform:rotateX(0deg)_translateY(-8px)]">

<div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white/50 backdrop-blur-sm sticky top-0 z-20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600">
                            JD
                        </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-gray-900">Jane Doe</span>
<span className="text-[10px] text-gray-500">Finance Lead</span>
</div>
</div>
<div className="flex items-center gap-2 bg-gray-50/80 p-1 rounded-lg border border-gray-100">
<button className="px-3 py-1 rounded-md bg-white shadow-sm border border-gray-200 text-[10px] font-medium text-gray-900">Overview</button>
<button className="px-3 py-1 rounded-md text-[10px] font-medium text-gray-500 hover:text-gray-700">Reports</button>
<button className="px-3 py-1 rounded-md text-[10px] font-medium text-gray-500 hover:text-gray-700">Settings</button>
</div>
<div className="flex items-center gap-4 text-gray-400">
<svg className="hover:text-gray-600 cursor-pointer" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<svg className="hover:text-gray-600 cursor-pointer" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
</div>
</div>

<div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-gray-50/30">

<div className="lg:col-span-7 flex flex-col gap-6">

<div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm relative group">
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-medium text-gray-500">Total Liquidity</span>
<div className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] font-medium flex items-center gap-1">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                                    12.4%
                                </div>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-medium text-gray-400 tracking-tighter">$</span>
<span className="text-5xl font-semibold text-gray-900 tracking-tight">842,910</span>
<span className="text-3xl font-medium text-gray-400 tracking-tighter">.23</span>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-gray-900 text-white text-xs font-medium py-2.5 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                    New Transfer
                                </button>
<button className="flex-1 bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2.5 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                                    Export
                                </button>
</div>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="bg-white rounded-xl p-4 border border-gray-200/80 shadow-sm hover:border-gray-300 transition-colors cursor-pointer">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</div>
<div>
<p className="text-xs font-medium text-gray-900">Operating</p>
<p className="text-[10px] text-gray-500">Chase Bank ****4291</p>
</div>
</div>
<div className="flex justify-between items-end">
<span className="text-lg font-semibold text-gray-900 tracking-tight">$312,870</span>
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
</div>
</div>

<div className="bg-white rounded-xl p-4 border border-gray-200/80 shadow-sm hover:border-gray-300 transition-colors cursor-pointer">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 10h12"></path><path d="M4 14h9"></path><path d="M19 6a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3Z"></path><path d="M6 6h.01"></path><path d="M6 18h.01"></path></svg>
</div>
<div>
<p className="text-xs font-medium text-gray-900">Treasury</p>
<p className="text-[10px] text-gray-500">Mercury ****8821</p>
</div>
</div>
<div className="flex justify-between items-end">
<span className="text-lg font-semibold text-gray-900 tracking-tight">$529,140</span>
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-white rounded-xl border border-gray-200/80 shadow-sm p-6 flex flex-col">
<div className="flex justify-between items-center mb-6">
<span className="text-sm font-semibold text-gray-900">Cash Flow</span>
<div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded border border-gray-100 cursor-pointer hover:bg-gray-100">
<span className="text-[10px] font-medium text-gray-600">This Month</span>
<svg className="text-gray-400" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<div className="flex-1 flex items-end justify-between gap-2 min-h-[160px] pb-2 border-b border-gray-100 border-dashed">

<div className="w-full bg-gray-100 rounded-t-sm h-[40%] hover:bg-gray-200 transition-all relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[9px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$42k</div>
</div>
<div className="w-full bg-gray-100 rounded-t-sm h-[65%] hover:bg-gray-200 transition-all relative group"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[50%] hover:bg-gray-200 transition-all relative group"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[75%] hover:bg-gray-200 transition-all relative group"></div>
<div className="w-full bg-gray-900 rounded-t-sm h-[90%] shadow-lg shadow-gray-200 transition-all relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white border border-gray-200 text-gray-900 text-[10px] font-medium py-1 px-2 rounded shadow-sm opacity-100 whitespace-nowrap">$126k</div>
</div>
<div className="w-full bg-gray-100 rounded-t-sm h-[60%] hover:bg-gray-200 transition-all relative group"></div>
</div>
<div className="flex justify-between text-[10px] text-gray-400 mt-2 font-mono">
<span>MON</span>
<span>TUE</span>
<span>WED</span>
<span>THU</span>
<span>FRI</span>
<span>SAT</span>
</div>

<div className="grid grid-cols-2 gap-2 mt-6">
<div className="p-3 rounded-lg border border-gray-100 bg-gray-50/50">
<div className="text-[10px] text-gray-500 mb-1">Inflow</div>
<div className="text-sm font-semibold text-gray-900 flex items-center gap-1">
                                    $126k 
                                    <svg className="text-emerald-500" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
</div>
<div className="p-3 rounded-lg border border-gray-100 bg-gray-50/50">
<div className="text-[10px] text-gray-500 mb-1">Outflow</div>
<div className="text-sm font-semibold text-gray-900">$42k</div>
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
