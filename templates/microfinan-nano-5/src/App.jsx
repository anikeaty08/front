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
      

<div className="bg-[#009086] text-white py-2.5 px-4 md:px-8 text-xs font-medium tracking-wide hidden md:flex justify-between items-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none"></div>
<div className="flex space-x-6 relative z-10">
<a className="hover:text-white/80 transition-colors font-manrope" href="#">Home</a>
<a className="hover:text-white/80 transition-colors font-manrope" href="#">About Us</a>
<a className="hover:text-white/80 transition-colors font-manrope" href="#">Social Performance</a>
<a className="hover:text-white/80 transition-colors font-manrope" href="#">Resource Center</a>
<a className="hover:text-white/80 transition-colors font-manrope" href="#">Kaam Gaah</a>
<a className="hover:text-white/80 transition-colors border-r border-white/20 pr-6 font-manrope" href="#">Call for Art</a>
<a className="hover:text-white/80 transition-colors pl-2 font-semibold font-manrope" href="#">Contact Us</a>
</div>
<div className="flex items-center space-x-5 relative z-10">
<div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-manrope">Locate Branch</span>
</div>
<div className="w-px h-3 bg-white/30"></div>
<svg className="lucide lucide-search w-3.5 h-3.5 cursor-pointer hover:opacity-80" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
</div>

<nav className="glass-nav sticky transition-all duration-300 z-50 border-gray-200/60 border-b top-0">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
<div className="bg-[#009086] text-white p-1 rounded-sm">
<h1 className="text-xl font-bold tracking-tight font-manrope">HBL</h1>
</div>
<div className="flex flex-col text-[11px] leading-3 uppercase text-[#00796b] font-bold border-l-2 border-[#009086] pl-3 group-hover:border-orange-400 transition-colors duration-300">
<span className="tracking-wider font-manrope">Microfinance Bank</span>
<span className="font-normal text-gray-500 normal-case pt-0.5 font-manrope">A subsidiary of HBL</span>
</div>
</div>

<div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-600">
<a className="flex items-center gap-1.5 hover:text-[#009086] transition-colors group font-manrope" href="#">
                        Loans <svg className="lucide lucide-chevron-down w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<a className="flex items-center gap-1.5 hover:text-[#009086] transition-colors group font-manrope" href="#">
                        Deposits <svg className="lucide lucide-chevron-down w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<a className="flex items-center gap-1.5 hover:text-[#009086] transition-colors group font-manrope" href="#">
                        Digital <svg className="lucide lucide-chevron-down w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<a className="hover:text-[#009086] transition-colors font-manrope" href="#">Women Financial Services</a>
<button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-0.5 font-manrope">
                        Open Account
                    </button>
</div>

<div className="lg:hidden">
<button className="text-slate-500 hover:text-slate-900 focus:outline-none p-2 rounded-md hover:bg-slate-100">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<section className="lg:pt-28 lg:pb-40 overflow-hidden max-w-7xl mx-auto pt-16 pr-4 pb-24 pl-4 relative" style={{maskImage: 'linear-gradient(240deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(240deg, transparent, black 0%, black 100%, transparent)'}}>

<div className="blob bg-teal-100 w-[500px] h-[500px] rounded-full top-0 -right-20"></div>
<div className="blob bg-orange-100 w-[400px] h-[400px] rounded-full bottom-0 left-0"></div>
<div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="space-y-8 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-semibold uppercase tracking-wider mb-2 font-manrope">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                    Instant Financing
                </div>
<h1 className="lg:text-8xl leading-[0.9] text-6xl font-bold tracking-tighter">
<span className="gradient-text font-bold font-montserrat" style={{}}>Nano</span> <br/>
<span className="orange-gradient-text font-montserrat font-bold" style={{}}>Loan.</span>
</h1>
<div className="space-y-4 text-lg lg:text-xl text-slate-600 max-w-lg">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-[#009086]">
<svg className="lucide lucide-check w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="font-manrope">Up to <span className="font-bold text-slate-900 font-manrope">PKR 20,000</span> instantly</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-[#009086]">
<svg className="lucide lucide-check w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="font-manrope">Flexible Repayment <span className="font-bold text-slate-900 font-manrope">60 Days</span></p>
</div>
</div>
<p className="text-slate-500 leading-relaxed max-w-md font-manrope">
                    Short-term credit facility for HBL MfB customers through the <span className="font-semibold text-slate-900 font-manrope">FirstPay app</span>. Approved via AI-based system for emergencies.
                </p>
<div className="pt-6 flex flex-wrap gap-4">
<button className="bg-slate-900 text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 transform hover:-translate-y-1">
<svg className="lucide lucide-apple w-6 h-6 fill-current" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
<div className="text-left leading-tight">
<div className="text-[10px] text-slate-300 font-manrope">Download on the</div>
<div className="text-sm font-bold font-manrope">App Store</div>
</div>
</button>
<button className="bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-slate-50 transition-all shadow-lg shadow-slate-100 transform hover:-translate-y-1">
<svg className="lucide lucide-play w-6 h-6 fill-current" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<div className="text-left leading-tight">
<div className="text-[10px] text-slate-500 font-manrope">GET IT ON</div>
<div className="text-sm font-bold font-manrope">Google Play</div>
</div>
</button>
</div>
</div>

<div className="lg:h-[600px] flex relative perspective-1000 items-center justify-center">

<div className="absolute w-72 h-96 bg-gradient-to-br from-[#009086] to-[#00695c] rounded-[2rem] rotate-[-6deg] translate-x-12 translate-y-8 opacity-20 blur-sm float-animation-delayed"></div>

<div className="float-animation bg-slate-900 w-[300px] h-[600px] z-20 border-slate-800 border-4 rounded-[3.5rem] pt-3 pr-3 pb-3 pl-3 relative shadow-2xl">

<div className="w-full h-full bg-slate-50 rounded-[2.8rem] overflow-hidden relative flex flex-col">

<div className="z-20 flex bg-white w-full h-12 pb-2 absolute top-0 items-end justify-center">
<div className="w-28 h-7 bg-black rounded-full"></div>
</div>

<div className="flex-1 pt-14 px-6 pb-6 flex flex-col gap-6">

<div className="flex justify-between items-center">
<div className="">
<div className="text-xs text-slate-400 font-medium font-manrope">Good Morning</div>
<div className="text-sm font-bold text-slate-800 font-manrope">Sarah Khan</div>
</div>
<div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</div>

<div className="shadow-slate-200 overflow-hidden group text-white bg-slate-900 rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-xl">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<div className="text-xs text-slate-400 uppercase tracking-wider font-manrope">Current Balance</div>
<svg className="lucide lucide-credit-card w-5 h-5 text-orange-400" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="text-3xl font-montserrat font-bold" style={{}}>Rs 24,500</div>
<div className="mt-4 flex gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
<div className="text-[10px] text-green-400 font-manrope">Active Account</div>
</div>
</div>
</div>

<div className="grid grid-cols-4 gap-3">
<div className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-1">
<div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-[#009086]"><svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg></div>
</div>
<div className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-1">
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600"><svg className="lucide lucide-arrow-down-left w-4 h-4" data-lucide="arrow-down-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 7 7 17"></path><path d="M17 17H7V7"></path></svg></div>
</div>
<div className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-1">
<div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600"><svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div>
</div>
<div className="aspect-square bg-orange-500 rounded-2xl shadow-lg shadow-orange-200 flex flex-col items-center justify-center gap-1 transform scale-110">
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white"><svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div>
</div>
</div>

<div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 mt-auto">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 bg-orange-100 rounded-xl text-orange-600">
<svg className="lucide lucide-coins w-5 h-5" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>
<div className="">
<div className="text-xs font-bold text-slate-800 font-manrope">Nano Loan Offer</div>
<div className="text-[10px] text-slate-500 font-manrope">Instant approval</div>
</div>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
<div className="w-3/4 bg-orange-500 h-full rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-32 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce">
<div className="flex items-center gap-3">
<div className="bg-green-100 p-2 rounded-full text-green-600"><svg className="lucide lucide-check-circle w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg></div>
<div className="">
<div className="text-xs text-slate-400 font-manrope">Status</div>
<div className="text-sm font-bold text-slate-900 font-manrope">Approved</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0f172a] py-24 relative overflow-hidden">

<div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-900/40 rounded-full blur-[100px]"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-900/30 rounded-full blur-[100px]"></div>

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-4 relative z-10">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl text-white mb-4 font-montserrat font-bold" style={{}}>
                    Get funds in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200 font-montserrat font-bold" style={{}}>3 simple steps</span>
</h2>
<p className="text-slate-400 text-lg font-manrope">No paperwork, no waiting. Just instant liquidity.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent -translate-y-12"></div>

<div className="group relative">
<div className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 hover:bg-slate-800 transition-all duration-300 hover:border-orange-500/50">
<div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-orange-400 font-bold text-xl mb-6 shadow-lg border border-slate-700 mx-auto group-hover:scale-110 transition-transform font-manrope">1</div>
<div className="h-48 flex items-center justify-center mb-6">
<svg className="lucide lucide-smartphone w-24 h-24 text-slate-600 group-hover:text-white transition-colors duration-500 stroke-1" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-white text-xl font-semibold text-center mb-2 font-manrope">Login App</h3>
<p className="text-slate-400 text-center text-sm font-manrope">Open the FirstPay app and log in securely using your credentials.</p>
</div>
</div>

<div className="group relative mt-8 md:mt-0">
<div className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 hover:bg-slate-800 transition-all duration-300 hover:border-orange-500/50">
<div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-orange-400 font-bold text-xl mb-6 shadow-lg border border-slate-700 mx-auto group-hover:scale-110 transition-transform font-manrope">2</div>
<div className="h-48 flex items-center justify-center mb-6 relative">
<svg className="lucide lucide-scan-face w-24 h-24 text-slate-600 group-hover:text-white transition-colors duration-500 stroke-1" data-lucide="scan-face" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path></svg>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-1 bg-orange-500/50 animate-pulse rounded-full top-1/2 absolute"></div>
</div>
</div>
<h3 className="text-white text-xl font-semibold text-center mb-2 font-manrope">Verify</h3>
<p className="text-slate-400 text-center text-sm font-manrope">Complete biometric verification level 1 if not already verified.</p>
</div>
</div>

<div className="group relative">
<div className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 hover:bg-slate-800 transition-all duration-300 hover:border-orange-500/50">
<div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-orange-400 font-bold text-xl mb-6 shadow-lg border border-slate-700 mx-auto group-hover:scale-110 transition-transform font-manrope">3</div>
<div className="h-48 flex items-center justify-center mb-6">
<div className="relative">
<svg className="lucide lucide-hand-coins w-24 h-24 text-slate-600 group-hover:text-white transition-colors duration-500 stroke-1" data-lucide="hand-coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path><path d="m2 16 6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></svg>
<div className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold animate-bounce font-manrope">TAP</div>
</div>
</div>
<h3 className="text-white text-xl font-semibold text-center mb-2 font-manrope">Get Loan</h3>
<p className="text-slate-400 text-center text-sm font-manrope">Tap the "Nano Loan" icon and get funds credited instantly.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4">
<div className="flex justify-between items-end mb-12">
<div>
<h3 className="text-3xl text-slate-900 font-montserrat font-bold" style={{}}>Key Information</h3>
<p className="text-slate-500 mt-2 text-lg font-manrope">Everything you need to know before applying.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-white transition"><svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<button className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-700 transition"><svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="card-hover bg-white p-8 rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between h-[340px]">
<div className="">
<div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-[#009086] mb-6">
<svg className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h4 className="text-slate-900 text-xl font-bold mb-3 font-manrope">Eligibility Criteria</h4>
<p className="text-slate-500 leading-relaxed text-sm font-manrope">
                            Available to all FirstPay customers across Pakistan with Biometric Verification Level 1 Wallet status.
                        </p>
</div>
<a className="inline-flex items-center text-orange-500 font-semibold text-sm hover:gap-2 transition-all group font-manrope" href="#">
                        Learn more <svg className="lucide lucide-arrow-right w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="card-hover bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-3xl shadow-xl shadow-orange-200 flex flex-col justify-between h-[340px] text-white relative overflow-hidden group">
<div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-bl-full transition-transform group-hover:scale-110"></div>
<div>
<div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-6">
<svg className="lucide lucide-heart-handshake w-6 h-6" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<h4 className="text-white text-xl font-bold mb-3 font-manrope">Purpose of Credit</h4>
<p className="text-white/90 leading-relaxed text-sm font-manrope">
                            Designed for emergency liquidity needs, utility bill payments, or quick personal financing gaps.
                        </p>
</div>
<button className="bg-white text-orange-600 px-6 py-2.5 rounded-full text-sm font-bold w-fit hover:bg-slate-50 transition shadow-lg font-manrope">
                        Apply Now
                    </button>
</div>

<div className="card-hover bg-white p-8 rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between h-[340px]">
<div>
<div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
<svg className="lucide lucide-scale w-6 h-6" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M7 21h10"></path></svg>
</div>
<h4 className="text-slate-900 text-xl font-bold mb-3 font-manrope">Loan Limits</h4>
<p className="text-slate-500 leading-relaxed text-sm font-manrope">
                            Flexible borrowing options tailored to your history.
                            <span className="block mt-2 font-medium text-slate-700 font-manrope">Min: PKR 1,000 — Max: PKR 20,000</span>
</p>
</div>
<a className="inline-flex items-center text-orange-500 font-semibold text-sm hover:gap-2 transition-all group font-manrope" href="#">
                        View details <svg className="lucide lucide-arrow-right w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<p className="mt-8 text-xs text-slate-400 text-center font-manrope">* Terms &amp; Conditions apply. Loans are subject to credit approval.</p>
</div>
</section>

<section className="py-12 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">

<div className="relative h-80 rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
<img alt="Woman" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0">
<img alt="Professional Woman" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
</div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2 block font-manrope">Lifestyle</span>
<div className="text-white text-xl font-bold leading-tight group-hover:underline decoration-orange-400 underline-offset-4 font-manrope">About FirstPay Ecosystem</div>
</div>
</div>

<div className="relative h-80 rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
<img alt="Phone" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2 block font-manrope">Tutorial</span>
<div className="text-white text-xl font-bold leading-tight group-hover:underline decoration-orange-400 underline-offset-4 font-manrope">How To Pay Bills Instantly</div>
</div>
<div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
<svg className="lucide lucide-play w-4 h-4 fill-current" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>

<div className="relative h-80 rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
<img alt="Hands Phone" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2 block font-manrope">Benefits</span>
<div className="text-white text-xl font-bold leading-tight group-hover:underline decoration-orange-400 underline-offset-4 font-manrope">Save &amp; Earn Rewards</div>
</div>
</div>
</div>
</section>

<section className="bg-[#003833] text-white py-24 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#009086] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
<div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 relative z-10">

<div>
<span className="text-orange-400 font-bold tracking-widest text-xs uppercase mb-2 block font-manrope">Get in Touch</span>
<h2 className="text-4xl mb-10 font-montserrat font-bold" style={{}}>We are here to help.</h2>
<div className="space-y-10">
<div className="flex gap-6 group">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<h4 className="font-bold text-lg font-manrope">24/7 Helpline</h4>
<p className="text-gray-400 text-sm mt-1 font-manrope">0800-42563 <span className="mx-2 font-manrope">|</span> 0800-34778</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<h4 className="font-bold text-lg font-manrope">Email Support</h4>
<p className="text-gray-400 text-sm mt-1 font-manrope">info@hblmfb.com</p>
<p className="text-gray-400 text-sm font-manrope">complaints@hblmfb.com</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all">
<svg className="lucide lucide-map-pin w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<h4 className="font-bold text-lg font-manrope">Head Office</h4>
<p className="text-gray-400 text-sm mt-1 leading-relaxed font-manrope">
                                16th Floor, HBL Tower, Blue Area,Islamabad, Pakistan.
                            </p>
</div>
</div>
</div>
</div>

<div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase font-semibold text-gray-400 tracking-wider font-manrope">First Name</label>
<input className="w-full bg-black/20 border border-white/10 rounded-lg py-3 px-4 focus:border-orange-400 focus:outline-none focus:bg-black/40 transition text-white placeholder-gray-600" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase font-semibold text-gray-400 tracking-wider font-manrope">Last Name</label>
<input className="w-full bg-black/20 border border-white/10 rounded-lg py-3 px-4 focus:border-orange-400 focus:outline-none focus:bg-black/40 transition text-white placeholder-gray-600" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase font-semibold text-gray-400 tracking-wider font-manrope">Email Address</label>
<input className="w-full bg-black/20 border border-white/10 rounded-lg py-3 px-4 focus:border-orange-400 focus:outline-none focus:bg-black/40 transition text-white placeholder-gray-600" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase font-semibold text-gray-400 tracking-wider font-manrope">Message</label>
<textarea className="w-full bg-black/20 border border-white/10 rounded-lg py-3 px-4 focus:border-orange-400 focus:outline-none focus:bg-black/40 transition text-white resize-none placeholder-gray-600" rows="3"></textarea>
</div>
<button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3.5 rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition transform active:scale-95 font-manrope">
                        Send Message
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200 text-sm">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<div className="flex items-center gap-2">
<span className="bg-[#009086] text-white p-1 font-bold text-lg rounded-sm font-manrope">HBL</span>
<span className="text-[#009086] font-semibold text-xs uppercase leading-tight border-l border-[#009086] pl-2 font-manrope">MicrofinanceBank</span>
</div>
<p className="text-slate-500 text-xs leading-relaxed font-manrope">Empowering lives through financial inclusion and innovative digital solutions.</p>
<div className="flex gap-2 pt-2">
<a className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition" href="#"><svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-pink-600 hover:border-pink-600 transition" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400 transition" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>

<div>
<h5 className="font-bold text-slate-900 mb-6 font-manrope">Quick Links</h5>
<ul className="space-y-3">
<li><a className="text-slate-500 hover:text-orange-500 transition-colors text-xs font-manrope" href="#">About Us</a></li>
<li><a className="text-slate-500 hover:text-orange-500 transition-colors text-xs font-manrope" href="#">Management Team</a></li>
<li><a className="text-slate-500 hover:text-orange-500 transition-colors text-xs font-manrope" href="#">Board of Directors</a></li>
<li><a className="text-slate-500 hover:text-orange-500 transition-colors text-xs font-manrope" href="#">Financial Reports</a></li>
</ul>
</div>

<div>
<h5 className="font-bold text-slate-900 mb-6 font-manrope">Customer Care</h5>
<ul className="space-y-3">
<li><a className="text-slate-500 hover:text-orange-500 transition-colors text-xs font-manrope" href="#">Complaint Handling</a></li>
<li><a className="text-slate-500 hover:text-orange-500 transition-colors text-xs font-manrope" href="#">Branch Locator</a></li>
<li><a className="text-slate-500 hover:text-orange-500 transition-colors text-xs font-manrope" href="#">Schedule of Charges</a></li>
<li><a className="text-slate-500 hover:text-orange-500 transition-colors text-xs font-manrope" href="#">FAQs</a></li>
</ul>
</div>

<div>
<h5 className="font-bold text-slate-900 mb-6 font-manrope">Get the App</h5>
<div className="space-y-3">
<button className="w-full bg-slate-900 text-white rounded-lg px-4 py-2.5 flex items-center gap-3 hover:bg-slate-800 transition">
<svg className="lucide lucide-apple w-5 h-5" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
<div className="text-left">
<div className="text-[9px] text-slate-400 uppercase font-manrope">Download on</div>
<div className="text-xs font-bold font-manrope">App Store</div>
</div>
</button>
<button className="w-full bg-slate-900 text-white rounded-lg px-4 py-2.5 flex items-center gap-3 hover:bg-slate-800 transition">
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<div className="text-left">
<div className="text-[9px] text-slate-400 uppercase font-manrope">Get it on</div>
<div className="text-xs font-bold font-manrope">Google Play</div>
</div>
</button>
</div>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-400 text-xs font-manrope">© 2024 HBL Microfinance Bank. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-slate-900 font-manrope" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 font-manrope" href="#">Terms of Use</a>
<a className="hover:text-slate-900 font-manrope" href="#">Security</a>
</div>
</div>
<div className="mt-8 flex justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="border border-slate-300 px-2 py-1 text-[10px] font-serif text-slate-600 mr-2 font-manrope">JAMA PUNJI</div>
<div className="border border-slate-300 px-2 py-1 text-[10px] text-slate-600 font-manrope">BE AWARE, BE SECURE</div>
</div>
</div>
</footer>


    </>
  );
}
