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
      

<nav className="fixed w-full z-50 top-0 start-0 nav-glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">

<img alt="Paygapmeter Logo" className="h-10 w-auto" src="https://firebasestorage.googleapis.com/v0/b/green0meter-10b46.appspot.com/o/Paygapmeter_partof.png?alt=media"/>
</a>
<div className="flex items-center gap-8">
<div className="hidden md:flex gap-6 text-sm font-medium text-[#1D065B]/80">
<a className="hover:text-[#3C3AFF] transition-colors" href="#why">Why it matters</a>
<a className="hover:text-[#3C3AFF] transition-colors" href="#how">How it works</a>
<a className="hover:text-[#3C3AFF] transition-colors" href="#platform">Platform</a>
</div>
<button className="bg-[#3C3AFF] hover:bg-[#3C3AFF]/90 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg shadow-[#3C3AFF]/20">
                Get a Demo
            </button>
</div>
</div>
</nav>

<section className="pt-40 pb-24 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3C3AFF]/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/4"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1D065B]/5 rounded-full blur-[80px] -z-10 -translate-x-1/2 translate-y-1/4"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3C3AFF]/10 border border-[#3C3AFF]/20 text-[#3C3AFF] text-xs font-semibold tracking-wide uppercase mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-[#3C3AFF] animate-pulse"></span>
                    EU Directive 2023/970 Compliant
                </div>
<h1 className="text-5xl lg:text-6xl font-semibold text-[#1D065B] tracking-tight leading-[1.1] mb-6">
                    Gender Pay Gap reporting. <br/>
<span className="text-[#3C3AFF]">Calculated correctly.</span>
</h1>
<p className="leading-relaxed text-lg text-[#1D065B]/70 max-w-lg mb-8" style={{}}>Audit-ready platform for calculating clean gender pay gap and mandatory reporting under EU Directive 2023/970.</p>
<ul className="space-y-3 mb-10">
<li className="flex items-center gap-3 text-[#1D065B]/90">
<div className="w-5 h-5 rounded-full bg-[#3C3AFF]/10 flex items-center justify-center text-[#3C3AFF]">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
                        Comparison of work of equal value
                    </li>
<li className="flex items-center gap-3 text-[#1D065B]/90">
<div className="w-5 h-5 rounded-full bg-[#3C3AFF]/10 flex items-center justify-center text-[#3C3AFF]">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
                        Clean (adjusted) gender pay gap via regression
                    </li>
<li className="flex items-center gap-3 text-[#1D065B]/90">
<div className="w-5 h-5 rounded-full bg-[#3C3AFF]/10 flex items-center justify-center text-[#3C3AFF]">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
                        EU-compliant, defensible results
                    </li>
</ul>
<div className="flex gap-4">
<button className="bg-[#1D065B] hover:bg-[#1D065B]/90 text-white px-8 py-3.5 rounded-lg text-base font-medium transition-all shadow-lg shadow-[#1D065B]/20">
                        Get a Demo
                    </button>
</div>
</div>

<div className="relative hidden lg:block perspective-1000">
<div className="relative w-full h-[520px] animate-float transform-style-3d">

<div className="absolute inset-0 bg-white border border-gray-100 rounded-2xl shadow-2xl shadow-[#1D065B]/10 p-6 flex flex-col z-20">

<div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-4">
<div className="flex items-center gap-3">
<div className="bg-[#3C3AFF]/10 p-2 rounded-lg text-[#3C3AFF]">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
</div>
<div>
<div className="text-xs text-[#1D065B]/50 uppercase tracking-wider font-semibold">Regression Model</div>
<div className="text-[#1D065B] font-medium text-sm">Pay vs. Experience Level</div>
</div>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 rounded border border-gray-100">
<div className="w-2 h-2 rounded-full bg-[#1D065B]"></div>
<span className="text-[10px] text-[#1D065B]/60 font-medium">Male</span>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 rounded border border-gray-100">
<div className="w-2 h-2 rounded-full bg-[#3C3AFF]"></div>
<span className="text-[10px] text-[#1D065B]/60 font-medium">Female</span>
</div>
</div>
</div>

<div className="flex-1 relative border border-gray-100 bg-[#F8F9FC]/50 rounded-lg overflow-hidden group cursor-crosshair">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(29,6,91,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(29,6,91,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="absolute bottom-[20%] left-[5%] w-[90%] h-[60%] border-t-2 border-dashed border-[#1D065B]/20 origin-bottom-left rotate-[-25deg] pointer-events-none"></div>
<div className="absolute bottom-[20%] left-[5%] h-0.5 bg-[#3C3AFF] animate-draw origin-left" style={{width: '100%', transform: 'rotate(-15deg)'}}></div>


<div className="absolute bottom-[75%] left-[80%] w-3 h-3 rounded-full bg-[#1D065B] shadow-sm dot-point group/dot cursor-pointer">
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#1D065B] text-white text-[10px] rounded opacity-0 group-hover/dot:opacity-100 whitespace-nowrap transition-opacity z-10 pointer-events-none">VP Engineering</div>
</div>
<div className="absolute bottom-[70%] left-[85%] w-3 h-3 rounded-full bg-[#3C3AFF] shadow-sm dot-point group/dot cursor-pointer">
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#1D065B] text-white text-[10px] rounded opacity-0 group-hover/dot:opacity-100 whitespace-nowrap transition-opacity z-10 pointer-events-none">Head of Sales</div>
</div>

<div className="absolute bottom-[55%] left-[60%] w-3 h-3 rounded-full bg-[#1D065B] shadow-sm dot-point group/dot cursor-pointer">
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#1D065B] text-white text-[10px] rounded opacity-0 group-hover/dot:opacity-100 whitespace-nowrap transition-opacity z-10 pointer-events-none">Snr Product Mgr</div>
</div>
<div className="absolute bottom-[48%] left-[55%] w-3 h-3 rounded-full bg-[#3C3AFF] shadow-sm dot-point border-2 border-white ring-2 ring-[#C84C4C]/50 z-20">

<div className="absolute inset-0 rounded-full ring-4 ring-[#C84C4C]/20 animate-ping"></div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#C84C4C] text-white text-[10px] rounded opacity-100 whitespace-nowrap z-10 shadow-lg">Snr Designer (-4.2%)</div>
</div>
<div className="absolute bottom-[52%] left-[45%] w-3 h-3 rounded-full bg-[#1D065B] shadow-sm dot-point group/dot cursor-pointer">
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#1D065B] text-white text-[10px] rounded opacity-0 group-hover/dot:opacity-100 whitespace-nowrap transition-opacity z-10 pointer-events-none">Backend Lead</div>
</div>

<div className="absolute bottom-[30%] left-[25%] w-3 h-3 rounded-full bg-[#3C3AFF] shadow-sm dot-point group/dot cursor-pointer">
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#1D065B] text-white text-[10px] rounded opacity-0 group-hover/dot:opacity-100 whitespace-nowrap transition-opacity z-10 pointer-events-none">Jr QA Engineer</div>
</div>
<div className="absolute bottom-[25%] left-[15%] w-3 h-3 rounded-full bg-[#1D065B] shadow-sm dot-point group/dot cursor-pointer">
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#1D065B] text-white text-[10px] rounded opacity-0 group-hover/dot:opacity-100 whitespace-nowrap transition-opacity z-10 pointer-events-none">Sales Associate</div>
</div>
<div className="absolute bottom-[35%] left-[35%] w-3 h-3 rounded-full bg-[#3C3AFF] shadow-sm dot-point group/dot cursor-pointer">
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#1D065B] text-white text-[10px] rounded opacity-0 group-hover/dot:opacity-100 whitespace-nowrap transition-opacity z-10 pointer-events-none">HR Specialist</div>
</div>
<div className="absolute bottom-[28%] left-[40%] w-3 h-3 rounded-full bg-[#1D065B] shadow-sm dot-point group/dot cursor-pointer">
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#1D065B] text-white text-[10px] rounded opacity-0 group-hover/dot:opacity-100 whitespace-nowrap transition-opacity z-10 pointer-events-none">DevOps Engineer</div>
</div>

<div className="absolute bottom-[85%] left-[90%] w-3 h-3 rounded-full bg-[#1D065B] shadow-sm dot-point group/dot cursor-pointer opacity-50"></div>
</div>

<div className="mt-4 flex justify-between items-center text-xs text-[#1D065B]/60 font-mono">
<div>R² = 0.92 (High Correlation)</div>
<div>n = 248 Employees</div>
</div>
</div>

<div className="absolute -right-12 top-20 w-48 bg-white border border-gray-100 rounded-xl shadow-xl z-30 animate-float" style={{animationDelay: '1.5s'}}>
<div className="p-3 border-b border-gray-100 flex justify-between items-center">
<span className="text-[10px] font-bold text-[#1D065B] uppercase">Live Scan</span>
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
</div>
<div className="p-2 space-y-2">
<div className="flex items-center gap-2 p-1.5 bg-green-50 rounded">
<div className="w-1 h-4 bg-green-500 rounded-full"></div>
<div>
<div className="text-[10px] font-semibold text-[#1D065B]">Product Owner</div>
<div className="text-[9px] text-green-600">Within Range</div>
</div>
</div>
<div className="flex items-center gap-2 p-1.5 bg-[#F8F9FC] rounded opacity-50">
<div className="w-1 h-4 bg-gray-300 rounded-full"></div>
<div>
<div className="text-[10px] font-semibold text-[#1D065B]">Tech Lead</div>
<div className="text-[9px] text-[#1D065B]/50">Processing...</div>
</div>
</div>
<div className="flex items-center gap-2 p-1.5 bg-[#F8F9FC] rounded opacity-50">
<div className="w-1 h-4 bg-gray-300 rounded-full"></div>
<div>
<div className="text-[10px] font-semibold text-[#1D065B]">Account Exec</div>
<div className="text-[9px] text-[#1D065B]/50">Queued</div>
</div>
</div>
</div>
</div>

<div className="absolute -left-4 bottom-12 bg-white border border-[#C84C4C]/20 p-3 rounded-xl shadow-xl z-30 animate-float" style={{animationDelay: '0.5s'}}>
<div className="flex items-center gap-3">
<div className="p-2 bg-[#C84C4C]/10 rounded-lg text-[#C84C4C]">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<div>
<div className="text-xs font-semibold text-[#1D065B]">Pay Gap Alert</div>
<div className="text-[10px] text-[#C84C4C] mt-0.5">Senior Designer Role</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-gray-200 relative" id="why">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-[#1D065B] tracking-tight mb-6">
<span className="text-[#C84C4C]">5%</span> is the legal threshold
                </h2>
<p className="text-[#1D065B]/70 text-lg">
                    Under the new directive, exceeding this variance without justification triggers significant compliance burdens.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="col-span-1 lg:col-span-2 bg-[#F8F9FC] border border-gray-200 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-[#C84C4C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="text-sm text-[#1D065B]/60 font-medium uppercase tracking-wide mb-2">Current Risk Context</div>
<div className="flex items-baseline gap-2 mb-4">
<span className="text-5xl font-bold text-[#1D065B]">17.9%</span>
<span className="text-[#C84C4C] font-medium">Avg. Gap in CZ</span>
</div>
<div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
<div className="bg-[#C84C4C] h-full w-[17.9%]"></div>
</div>
<p className="mt-4 text-sm text-[#1D065B]/60">Most organizations are currently well above the compliant threshold.</p>
</div>
</div>

<div className="glass-card p-6 rounded-2xl bg-white">
<div className="w-10 h-10 bg-[#3C3AFF]/10 text-[#3C3AFF] rounded-lg flex items-center justify-center mb-4 border border-[#3C3AFF]/20">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-[#1D065B] font-medium mb-2">Mandatory Assessment</h3>
<p className="text-sm text-[#1D065B]/70 leading-relaxed">
                        Gender pay gap ≥ 5% triggers mandatory joint pay assessment with employee representatives.
                    </p>
</div>

<div className="glass-card p-6 rounded-2xl bg-white">
<div className="w-10 h-10 bg-[#1D065B]/10 text-[#1D065B] rounded-lg flex items-center justify-center mb-4 border border-[#1D065B]/20">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="text-[#1D065B] font-medium mb-2">Employee Rights</h3>
<p className="text-sm text-[#1D065B]/70 leading-relaxed">
                        Employees now have the legal right to request gender-segmented pay data for their role.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-[#F8F9FC]" id="how">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold text-[#1D065B] tracking-tight mb-4">
                    From HR data to compliant reporting
                </h2>
<div className="w-16 h-1 bg-[#3C3AFF] mx-auto rounded-full"></div>
</div>
<div className="grid lg:grid-cols-3 gap-8 relative">

<div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#3C3AFF]/30 to-transparent z-0"></div>

<div className="relative z-10">
<div className="w-24 h-24 mx-auto bg-white border border-gray-200 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#1D065B]/5">
<div className="w-12 h-12 text-[#1D065B]/60">
<svg fill="none" height="100%" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border border-[#1D065B]/10 flex items-center justify-center text-[#1D065B] font-bold text-sm shadow-sm">1</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#3C3AFF]/30 transition-colors shadow-sm">
<h3 className="text-lg font-medium text-[#1D065B] mb-4 text-center">Data Inputs</h3>
<ul className="space-y-3 text-sm text-[#1D065B]/70">
<li className="flex items-start gap-2">
<svg className="w-4 h-4 text-[#3C3AFF] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Employee demographics
                            </li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 text-[#3C3AFF] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Job position &amp; grading
                            </li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 text-[#3C3AFF] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Goals and Skills management
                            </li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 text-[#3C3AFF] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Full salary stack (bonuses, etc)
                            </li>
</ul>
</div>
</div>

<div className="relative z-10">
<div className="w-24 h-24 mx-auto bg-white border border-gray-200 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#3C3AFF]/10">
<div className="w-12 h-12 text-[#3C3AFF]">
<svg fill="none" height="100%" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
</div>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#3C3AFF] border border-white flex items-center justify-center text-white font-bold text-sm shadow-sm">2</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#3C3AFF]/30 transition-colors shadow-sm">
<h3 className="text-lg font-medium text-[#1D065B] mb-4 text-center">Calculation</h3>
<ul className="space-y-3 text-sm text-[#1D065B]/70">
<li className="flex items-start gap-2">
<svg className="w-4 h-4 text-[#3C3AFF] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Regression-based analysis
                            </li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 text-[#3C3AFF] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Adjusted vs Unadjusted GPG
                            </li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 text-[#3C3AFF] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Statistical validation (R², T-score)
                            </li>
</ul>
</div>
</div>

<div className="relative z-10">
<div className="w-24 h-24 mx-auto bg-white border border-gray-200 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#1D065B]/5">
<div className="w-12 h-12 text-[#1D065B]/60">
<svg fill="none" height="100%" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path></svg>
</div>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border border-[#1D065B]/10 flex items-center justify-center text-[#1D065B] font-bold text-sm shadow-sm">3</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#3C3AFF]/30 transition-colors shadow-sm">
<h3 className="text-lg font-medium text-[#1D065B] mb-4 text-center">Outputs</h3>
<ul className="space-y-3 text-sm text-[#1D065B]/70">
<li className="flex items-start gap-2">
<svg className="w-4 h-4 text-[#3C3AFF] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                EU-required PDF reports
                            </li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 text-[#3C3AFF] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Quartiles &amp; Medians
                            </li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 text-[#3C3AFF] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                &gt;5% Risk Identification
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-gray-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold text-[#1D065B] tracking-tight">
                        Built for audits, not opinions
                    </h2>
<p className="text-[#1D065B]/70 text-lg">
                        The methodology is strictly aligned with the Equal Pay Directive, providing a defensible audit trail for every calculation.
                    </p>
<div className="grid gap-4">
<div className="flex gap-4 p-4 rounded-xl bg-[#F8F9FC] border border-gray-200">
<div className="shrink-0 text-[#3C3AFF]">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<h4 className="text-[#1D065B] font-medium">Fully audit-traceable</h4>
<p className="text-sm text-[#1D065B]/60 mt-1">Every adjustment and regression coefficient is logged.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-xl bg-[#F8F9FC] border border-gray-200">
<div className="shrink-0 text-[#3C3AFF]">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>
</div>
<div>
<h4 className="text-[#1D065B] font-medium">Scenario Modeling</h4>
<p className="text-sm text-[#1D065B]/60 mt-1">Simulate salary adjustments to see impact on GPG before applying them.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-xl bg-[#F8F9FC] border border-gray-200">
<div className="shrink-0 text-[#3C3AFF]">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path></svg>
</div>
<div className="">
<h4 className="text-[#1D065B] font-medium">Gender-neutral Grading</h4>
<p className="text-sm text-[#1D065B]/60 mt-1">Objective job evaluation logic to define "work of equal value".</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-[#3C3AFF]/10 blur-[80px] rounded-full"></div>
<div className="relative rounded-xl border border-gray-200 bg-white overflow-hidden shadow-2xl shadow-[#1D065B]/5">
<div className="bg-gray-50 border-b border-gray-200 p-3 flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#C84C4C]/50"></div>
<div className="w-3 h-3 rounded-full bg-[#3C3AFF]/50"></div>
<div className="w-3 h-3 rounded-full bg-[#1D065B]/50"></div>
</div>
<div className="p-6 space-y-4">

<div className="grid grid-cols-4 text-xs text-[#1D065B]/50 font-medium uppercase tracking-wider pb-2 border-b border-gray-100">
<div className="col-span-2">Metric</div>
<div className="text-right">Value</div>
<div className="text-right">Status</div>
</div>

<div className="grid grid-cols-4 items-center text-sm py-2 border-b border-gray-100">
<div className="col-span-2 text-[#1D065B]">Unadjusted Mean Gap</div>
<div className="text-right text-[#1D065B]">12.4%</div>
<div className="text-right"><span className="text-xs bg-gray-100 text-[#1D065B] px-2 py-0.5 rounded">Info</span></div>
</div>

<div className="grid grid-cols-4 items-center text-sm py-2 border-b border-gray-100 bg-[#3C3AFF]/5 -mx-6 px-6 border-l-2 border-l-[#3C3AFF]">
<div className="col-span-2 text-[#1D065B] font-medium">Adjusted (Clean) Gap</div>
<div className="text-right text-[#1D065B] font-medium">2.1%</div>
<div className="text-right"><span className="text-xs bg-[#3C3AFF]/10 text-[#3C3AFF] px-2 py-0.5 rounded border border-[#3C3AFF]/20 font-medium">Compliant</span></div>
</div>

<div className="grid grid-cols-4 items-center text-sm py-2 border-b border-gray-100">
<div className="col-span-2 text-[#1D065B]">Explanation Ratio (R²)</div>
<div className="text-right text-[#1D065B]">0.89</div>
<div className="text-right"><span className="text-xs bg-[#3C3AFF]/10 text-[#3C3AFF] px-2 py-0.5 rounded">High</span></div>
</div>

<div className="grid grid-cols-4 items-center text-sm py-2">
<div className="col-span-2 text-[#1D065B]">Outliers Identified</div>
<div className="text-right text-[#C84C4C]">3</div>
<div className="text-right"><span className="text-xs bg-[#C84C4C]/10 text-[#C84C4C] px-2 py-0.5 rounded border border-[#C84C4C]/20 font-medium">Action</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="platform">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-[#1D065B] tracking-tight mb-8">
                One platform for pay gap compliance
            </h2>
<div className="flex flex-wrap justify-center gap-3 mb-12">
<span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-[#1D065B]/80 text-sm shadow-sm">HR Overview Dashboards</span>
<span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-[#1D065B]/80 text-sm shadow-sm">Employee Data Management</span>
<span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-[#1D065B]/80 text-sm shadow-sm">Regulatory Reporting</span>
<span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-[#1D065B]/80 text-sm shadow-sm">Optional Manager Portals</span>
</div>
<div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3C3AFF] via-[#1D065B] to-[#3C3AFF]"></div>
<h3 className="text-2xl font-medium text-[#1D065B] mb-4">Ready to close the gap?</h3>
<p className="text-[#1D065B]/70 mb-8 max-w-xl mx-auto">
                    Get a personalized demo of the platform and see how your data translates into compliance.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-[#3C3AFF] hover:bg-[#3C3AFF]/90 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all shadow-lg hover:shadow-xl shadow-[#3C3AFF]/20">
                        Get a Demo
                    </button>
<button className="px-8 py-3 rounded-lg text-lg font-medium text-[#1D065B] hover:text-[#3C3AFF] border border-gray-200 hover:border-[#3C3AFF]/50 bg-white">
                        Contact Sales
                    </button>
</div>
</div>
</div>
</section>

<footer className="border-t border-gray-200 bg-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

<div className="mb-6 opacity-100">
<img alt="Paygapmeter Logo" className="h-10 w-auto" src="https://firebasestorage.googleapis.com/v0/b/green0meter-10b46.appspot.com/o/Paygapmeter_partof.png?alt=media"/>
</div>
<p className="text-[#3C3AFF] font-medium text-lg mb-8">Pay equally. Live equally.</p>
<div className="flex gap-8 text-sm text-[#1D065B]/60 mb-8">
<a className="hover:text-[#3C3AFF]" href="#">Privacy Policy</a>
<a className="hover:text-[#3C3AFF]" href="#">Terms of Service</a>
<a className="hover:text-[#3C3AFF]" href="#">Security</a>
</div>
<div className="text-xs text-[#1D065B]/40">
                © 2025 PayGap Inc. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
