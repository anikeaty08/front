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
      

<div className="fixed inset-0 pointer-events-none z-[-1]">
<div className="absolute inset-0 bg-grid-pattern h-[80vh]"></div>
<div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse"></div>
<div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] mix-blend-multiply"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group relative z-10" href="/">
<div className="w-8 h-8 bg-slate-900 text-white rounded-lg shadow-lg shadow-slate-900/20 flex items-center justify-center font-bold text-xs tracking-tighter group-hover:scale-105 transition-transform duration-300">
                    K
                </div>
<span className="font-bold text-slate-900 tracking-tight text-lg">KLMC</span>
</a>
<div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/60 backdrop-blur-sm">
<a className="hover:text-slate-900 hover:bg-white hover:shadow-sm transition-all text-xs font-medium text-slate-600 rounded-full pt-1.5 pr-4 pb-1.5 pl-4" href="#services">Services</a>
<a className="hover:text-slate-900 hover:bg-white hover:shadow-sm transition-all text-xs font-medium text-slate-600 rounded-full pt-1.5 pr-4 pb-1.5 pl-4" href="#process">Process</a>
<a className="hover:text-slate-900 hover:bg-white hover:shadow-sm transition-all text-xs font-medium text-slate-600 rounded-full pt-1.5 pr-4 pb-1.5 pl-4" href="/about">About</a>
</div>
<div className="flex items-center gap-3">
<a className="shimmer bg-slate-900 text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 hover:-translate-y-0.5 border border-slate-800" href="#start">
                    Start Case
                </a>
</div>
</div>
</nav>
<main className="pt-32 pb-20 overflow-hidden">

<section className="max-w-7xl mx-auto px-6 mb-32 relative">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-8 gap-x-16 gap-y-16 items-center">

<div className="lg:w-1/2 relative z-10 fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm text-[11px] font-semibold text-slate-600 mb-8 hover:border-indigo-200 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Accepting international cases for Q4
                    </div>
<h1 className="sm:text-6xl md:text-7xl leading-[1.05] text-5xl font-bold text-slate-900 tracking-tight mb-6" style={{}}>World-class care in Malaysia,<br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">managed for you.</span></h1>
<p className="text-lg text-slate-500 max-w-xl leading-relaxed mb-8 font-light">
                        The premium medical concierge for Kuala Lumpur. We coordinate specialists, surgery, and logistics so you can focus on recovery.
                    </p>
<div className="flex flex-wrap items-center gap-4">
<a className="bg-slate-900 text-white px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 hover:shadow-slate-900/20 hover:-translate-y-0.5 border border-slate-800 flex items-center gap-2" href="#start">
                            Begin Assessment
                            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<a className="group bg-white px-6 py-3.5 rounded-xl font-medium text-sm border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 transition-all shadow-sm hover:shadow-md flex items-center gap-2" href="#">
<iconify-icon className="text-slate-400 group-hover:text-indigo-600 transition-colors" icon="lucide:play-circle" width="16"></iconify-icon>
                            How it works
                        </a>
</div>
<div className="mt-12 flex items-center gap-6 text-xs font-medium text-slate-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="lucide:shield-check"></iconify-icon> HIPAA Compliant
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-amber-400" icon="lucide:star"></iconify-icon> Top Specialists
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="lucide:clock"></iconify-icon> 24/7 Support
                        </div>
</div>
</div>

<div className="lg:w-1/2 relative w-full perspective-1000 fade-in-up delay-200">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-slate-100 rounded-3xl transform rotate-3 scale-95 opacity-50 -z-10"></div>

<div className="shadow-slate-200/50 animate-float bg-white border-slate-200/80 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-2xl">

<div className="flex border-slate-100 border-b mb-8 pb-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon icon="lucide:user" width="20"></iconify-icon>
</div>
<div className="">
<div className="h-2.5 w-24 bg-slate-900 rounded-full mb-1.5"></div>
<div className="h-2 w-16 bg-slate-200 rounded-full"></div>
</div>
</div>
<div className="px-2 py-1 rounded-md bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wider border border-emerald-100">Active Case</div>
</div>

<div className="relative space-y-6">

<div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-slate-100"></div>

<div className="relative flex gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 border-4 border-white shadow-sm flex items-center justify-center text-indigo-600 relative z-10 shrink-0">
<iconify-icon icon="lucide:file-search" width="18"></iconify-icon>
</div>
<div className="w-full pt-1">
<div className="flex justify-between items-start mb-1">
<div className="text-sm font-semibold text-slate-900">Records Review</div>
<div className="text-[10px] text-slate-400">Oct 24</div>
</div>
<div className="flex gap-2 text-xs text-slate-500 bg-slate-50 border-slate-100 border rounded-lg pt-3 pr-3 pb-3 pl-3 gap-x-2 gap-y-2 items-center" style={{}}>Approved by Dr. Ainita Harun (Cardiology)<iconify-icon className="text-emerald-500" icon="lucide:check-circle"></iconify-icon></div>
</div>
</div>

<div className="relative flex gap-4">
<div className="w-10 h-10 rounded-full bg-amber-50 border-4 border-white shadow-sm flex items-center justify-center text-amber-600 relative z-10 shrink-0">
<iconify-icon icon="lucide:calendar-check" width="18"></iconify-icon>
</div>
<div className="w-full pt-1">
<div className="flex justify-between items-start mb-1">
<div className="text-sm font-semibold text-slate-900" style={{}}>Appointment Set</div>
<div className="text-[10px] text-slate-400">Oct 26</div>
</div>
<div className="flex gap-2 mt-2">
<div className="px-3 py-2 bg-white border border-slate-200 shadow-sm rounded-md text-xs font-medium text-slate-700 w-full flex justify-between items-center group cursor-pointer hover:border-indigo-300 transition-colors">
<span className="">Gleneagles Hospital</span>
<iconify-icon className="text-slate-400 group-hover:text-indigo-500" icon="lucide:map-pin"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="relative flex gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-500 border-4 border-white shadow-md shadow-emerald-200 flex items-center justify-center text-white relative z-10 shrink-0">
<iconify-icon className="" icon="lucide:plane" width="18"></iconify-icon>
</div>
<div className="pt-1 w-full">
<div className="flex justify-between items-start mb-1">
<div className="text-sm font-semibold text-slate-900">Travel Itinerary</div>
<div className="text-[10px] text-emerald-600 font-medium">Ready</div>
</div>
<div className="mt-2 grid grid-cols-2 gap-2">
<div className="bg-emerald-50/50 border border-emerald-100 rounded-md p-2 text-center">
<div className="text-[10px] text-slate-400 uppercase font-bold">Flight</div>
<div className="text-xs font-semibold text-slate-700">SQ 108</div>
</div>
<div className="bg-emerald-50/50 border border-emerald-100 rounded-md p-2 text-center">
<div className="text-[10px] text-slate-400 uppercase font-bold">Driver</div>
<div className="text-xs font-semibold text-slate-700">Confirmed</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="-right-4 animate-float bg-white border-slate-100 border rounded-xl pt-3 pr-3 pb-3 pl-3 absolute top-20 shadow-xl" style={{animationDelay: '1s'}}>
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
<svg className="w-full h-full text-slate-400" fill="currentColor" viewbox="0 0 24 24"><path className="" d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
</div>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div className="">
<div className="text-xs font-bold text-slate-900">Concierge Hannah</div>
<div className="text-[10px] text-slate-500" style={{}}>Replying now...</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32" id="services">
<div className="flex justify-between items-end mb-10 fade-in-up">
<div>
<h2 className="text-3xl font-bold text-slate-900 tracking-tight">Concierge Services</h2>
<p className="text-slate-500 mt-2">Comprehensive management from inquiry to recovery.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-indigo-600 transition-colors" href="#start">
                    View all capabilities <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-4 h-auto md:h-[500px]">

<div className="md:col-span-3 md:row-span-2 group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 fade-in-up delay-100">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon icon="lucide:stethoscope" width="200"></iconify-icon>
</div>
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div>
<div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:activity" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Clinical Coordination</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                                We analyze your medical history, obtain second opinions from top Kuala Lumpur specialists, and schedule your procedures with zero friction.
                            </p>
</div>

<div className="mt-8 bg-slate-50 rounded-xl p-4 border border-slate-100">
<div className="flex items-center justify-between text-xs font-medium text-slate-400 mb-3 uppercase tracking-wider">
<span>Specialist Match</span>
<span className="text-emerald-500">98% Fit</span>
</div>
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div className="flex-1 space-y-1.5">
<div className="h-2 bg-slate-200 rounded w-2/3"></div>
<div className="h-1.5 bg-slate-100 rounded w-1/2"></div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div className="flex-1 space-y-1.5">
<div className="h-2 bg-slate-200 rounded w-3/4"></div>
<div className="h-1.5 bg-slate-100 rounded w-1/3"></div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 md:row-span-1 group relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-md hover:shadow-xl transition-all duration-300 fade-in-up delay-200">
<div className="absolute inset-0 bg-[url('https://api.iconify.design/lucide:map.svg?color=%23334155&amp;opacity=0.2')] bg-no-repeat bg-right-bottom bg-[length:200px_200px]"></div>
<div className="p-8 relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 h-full">
<div>
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-indigo-400" icon="lucide:plane" width="24"></iconify-icon>
<h3 className="text-xl font-bold">Travel &amp; Logistics</h3>
</div>
<p className="text-sm text-slate-400 max-w-sm">Airport pickup, private transport, and accommodation booking near your hospital.</p>
</div>
<div className="hidden md:block">
<div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/10 transform rotate-3 group-hover:rotate-6 transition-transform">
<iconify-icon className="text-indigo-300" icon="lucide:ticket" width="32"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 group relative rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-center fade-in-up delay-300">
<div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4 group-hover:-translate-y-1 transition-transform">
<iconify-icon icon="lucide:banknote" width="20"></iconify-icon>
</div>
<h3 className="font-bold text-slate-900 text-sm">Transparent Billing</h3>
<p className="text-xs text-slate-500 mt-1">No hidden markups.</p>
</div>

<div className="md:col-span-2 md:row-span-1 group relative rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-center fade-in-up delay-300">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 group-hover:-translate-y-1 transition-transform">
<iconify-icon icon="lucide:heart-handshake" width="20"></iconify-icon>
</div>
<iconify-icon className="text-slate-300 group-hover:text-slate-900 transition-colors" icon="lucide:arrow-up-right"></iconify-icon>
</div>
<h3 className="font-bold text-slate-900">Post-Op Care</h3>
<p className="text-xs text-slate-500 mt-1 max-w-[200px]">Remote monitoring &amp; follow-up scheduling after you fly home.</p>
</div>
</div>
</section>

<section className="bg-white border-y border-slate-200 py-24 relative overflow-hidden" id="process">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/50 via-transparent to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Streamlined from start to finish</h2>
<p className="text-slate-500">We replace the confusion of international healthcare with a linear, guided pathway.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-sm relative z-10 mb-6 group-hover:scale-110 group-hover:border-indigo-50 transition-all duration-300">
<div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">1</div>
</div>
<div className="text-center px-4">
<h3 className="font-bold text-slate-900 mb-2">Case Submission</h3>
<p className="text-xs text-slate-500 leading-relaxed">Securely upload your records and tell us what you need.</p>
</div>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-sm relative z-10 mb-6 group-hover:scale-110 group-hover:border-indigo-50 transition-all duration-300">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-900 text-xl font-bold shadow-sm">2</div>
</div>
<div className="text-center px-4">
<h3 className="font-bold text-slate-900 mb-2">Review &amp; Plan</h3>
<p className="text-xs text-slate-500 leading-relaxed">We build a treatment plan with estimates and doctor profiles.</p>
</div>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-sm relative z-10 mb-6 group-hover:scale-110 group-hover:border-indigo-50 transition-all duration-300">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-900 text-xl font-bold shadow-sm">3</div>
</div>
<div className="text-center px-4">
<h3 className="font-bold text-slate-900 mb-2">Arrival &amp; Care</h3>
<p className="text-xs text-slate-500 leading-relaxed">VIP pickup. We accompany you to appointments.</p>
</div>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-sm relative z-10 mb-6 group-hover:scale-110 group-hover:border-indigo-50 transition-all duration-300">
<div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-emerald-200">4</div>
</div>
<div className="text-center px-4">
<h3 className="font-bold text-slate-900 mb-2">Recovery Home</h3>
<p className="text-xs text-slate-500 leading-relaxed">Discharge planning and remote follow-ups with your doctor.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="start">
<div className="max-w-4xl mx-auto bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 grid md:grid-cols-2 gap-16">
<div className="text-white">
<div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
<iconify-icon icon="lucide:message-square" width="24"></iconify-icon>
</div>
<h2 className="text-4xl font-bold tracking-tight mb-6">Let's discuss your case.</h2>
<p className="text-slate-400 text-lg leading-relaxed mb-8">
                            Share your medical needs. Our clinical team reviews all inquiries within 24 hours to determine feasibility and estimated costs.
                        </p>
<ul className="space-y-4 text-sm text-slate-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-400" icon="lucide:check"></iconify-icon> No commitment required
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-400" icon="lucide:check"></iconify-icon> Encrypted data transfer
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-400" icon="lucide:check"></iconify-icon> Direct access to concierge
                            </li>
</ul>
</div>
<form className="bg-white rounded-2xl p-6 md:p-8 shadow-xl space-y-5">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-bold text-slate-900 uppercase tracking-wide">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-slate-900 uppercase tracking-wide">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-slate-900 uppercase tracking-wide">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-slate-900 uppercase tracking-wide">Primary Concern</label>
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all text-slate-600">
<option>Select a specialty...</option>
<option>Cardiology</option>
<option>Orthopaedics</option>
<option>Oncology</option>
<option>General Screening</option>
<option>Other</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-slate-900 uppercase tracking-wide">Details</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all" placeholder="Briefly describe what you are looking for..." rows="3"></textarea>
</div>
<button className="w-full bg-slate-900 text-white font-semibold py-3.5 rounded-lg hover:bg-slate-800 transition-all shadow-lg active:scale-[0.98] flex items-center justify-center gap-2" type="button">
                            Submit for Review
                            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-white pt-16 pb-8 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-4" href="/">
<div className="w-6 h-6 bg-slate-900 text-white rounded flex items-center justify-center font-bold text-[10px]">K</div>
<span className="font-bold text-slate-900">KLMC</span>
</a>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-6">
                        The trusted medical coordination partner for international patients in Kuala Lumpur.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-all" href="#"><iconify-icon icon="lucide:twitter" width="14"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-all" href="#"><iconify-icon icon="lucide:linkedin" width="14"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-all" href="#"><iconify-icon icon="lucide:instagram" width="14"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-bold text-slate-900 text-sm mb-4">Company</h4>
<ul className="space-y-2.5 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 text-sm mb-4">Services</h4>
<ul className="space-y-2.5 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Medical Reviews</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Concierge Travel</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Interpreters</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 text-sm mb-4">Resources</h4>
<ul className="space-y-2.5 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Patient Guide</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Hospital List</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Cost Calculator</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2023 KLMC Services Sdn Bhd. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
