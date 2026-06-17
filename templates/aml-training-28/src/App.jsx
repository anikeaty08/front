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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 brightness-150" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<div className="fixed inset-0 z-[-1] pointer-events-none">
<div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-br from-orange-50 via-white to-purple-50 opacity-100"></div>
<div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl mix-blend-multiply"></div>
<div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-3xl mix-blend-multiply"></div>
</div>

<nav className="md:px-12 flex w-full max-w-7xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
<svg className="lucide lucide-shield w-5 h-5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">HoneyLeks<span className="text-slate-400 font-normal">Consulting</span></span>
</div>
<a className="hidden md:inline-flex text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#register">
            Upcoming Session: Jan 15, 2026
        </a>
</nav>

<section className="md:px-12 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-24 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="z-10 relative space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-medium tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                    Introduction to AML / CFT
                </div>
<h1 className="md:text-6xl leading-[1.1] text-5xl font-semibold text-slate-900 tracking-tight">
                    Practical AML/CFT Training That Builds <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">Real-World Skills</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-lg">
                    Gain hands-on knowledge in AML, KYC, investigations, and compliance frameworks — built for real industry application.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition-all shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 hover:-translate-y-0.5" href="https://wa.me/14166298865">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                        Send WhatsApp Message
                    </a>
<button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition-colors">
                        View Agenda
                    </button>
</div>
</div>

<div className="relative h-[500px] w-full hidden lg:block perspective-1000">

<svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30">
<path d="M220 200 L 380 120" stroke="#CBD5E1" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path d="M220 200 L 380 300" stroke="#CBD5E1" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path d="M220 200 L 80 280" stroke="#CBD5E1" stroke-dasharray="4 4" strokeWidth="1.5"></path>
</svg>

<div className="absolute top-[35%] left-[20%] w-72 bg-white rounded-2xl shadow-2xl shadow-purple-500/10 border border-slate-100 p-5 z-20 animate-float">
<div className="flex justify-between items-start mb-4">
<div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Entity Screening</div>
<div className="text-slate-900 font-semibold text-lg">Case #8842-A</div>
</div>
<span className="inline-flex px-2 py-1 bg-red-50 text-red-600 text-xs rounded-md font-medium border border-red-100">High Risk</span>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center pb-2 border-b border-slate-50">
<span className="text-sm text-slate-500">Alert Score</span>
<span className="text-sm font-semibold text-slate-900">250</span>
</div>
<div className="flex justify-between items-center pb-2 border-b border-slate-50">
<span className="text-sm text-slate-500">Status</span>
<span className="text-sm text-orange-600 font-medium flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Under Investigation
                            </span>
</div>
<div className="flex items-center gap-3 mt-4 pt-2">
<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-bold">CA</div>
<div className="text-xs text-slate-500">
<p className="text-slate-900 font-medium">Compliance Analyst</p>
<p>Assigned Jan 15, 2026</p>
</div>
</div>
</div>
</div>

<div className="absolute top-[15%] right-[10%] bg-white/80 backdrop-blur-md p-3 rounded-xl shadow-lg border border-slate-100 z-10 animate-float-delayed flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
<svg className="lucide lucide-check-circle-2 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<div className="text-xs text-slate-500">Match Score</div>
<div className="text-sm font-semibold text-slate-900">91% Probability</div>
</div>
</div>

<div className="absolute bottom-[20%] right-[15%] bg-white/80 backdrop-blur-md p-3 rounded-xl shadow-lg border border-slate-100 z-10 animate-float flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
<svg className="lucide lucide-alert-triangle w-5 h-5" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<div>
<div className="text-xs text-slate-500">Risk Profile</div>
<div className="text-sm font-semibold text-slate-900">PEP / Sanctions</div>
</div>
</div>

<div className="absolute bottom-[10%] left-[5%] bg-slate-900 text-white p-3 rounded-xl shadow-xl shadow-slate-900/20 z-30 animate-float-delayed">
<div className="flex items-center gap-2">
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-orange-400" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
<span className="text-xs font-medium">Escalated by Assistant</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden border-y border-slate-200/50 bg-white/40 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-4 space-y-8">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">Proven Results</h2>
<p className="text-lg text-slate-500 leading-relaxed">
                        Improve your screening accuracy, boost your career ROI, and reduce the learning curve with our proven methodology.
                    </p>

<div className="flex items-center gap-4 pt-4">
<button className="w-12 h-12 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all hover:scale-105 active:scale-95">
<svg className="lucide lucide-chevron-left w-6 h-6" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="w-12 h-12 rounded-xl border border-slate-900 bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20">
<svg className="lucide lucide-chevron-right w-6 h-6" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="lg:col-span-8">
<div className="flex gap-6 overflow-x-auto pb-12 pt-4 px-4 -mx-4 no-scrollbar snap-x">

<div className="min-w-[300px] md:min-w-[340px] h-[450px] bg-teal-50/50 rounded-3xl relative overflow-hidden flex flex-col items-center justify-center text-center p-8 border border-teal-100 snap-center group hover:-translate-y-2 transition-transform duration-500">

<div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-100/30"></div>

<div className="relative w-56 h-56 mb-8 orbit-container">

<div className="orbit-ring w-56 h-56 rounded-full border border-teal-300/40 animate-orbit-1">
<div className="absolute top-0 left-1/2 w-2 h-2 bg-teal-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
</div>

<div className="orbit-ring w-48 h-48 rounded-full border border-teal-300/30 animate-orbit-2"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-white via-teal-50 to-teal-100 shadow-[inset_-10px_-10px_20px_rgba(20,184,166,0.1),10px_10px_30px_rgba(20,184,166,0.2)] animate-sphere flex items-center justify-center z-10">
<span className="text-5xl font-bold text-slate-900 tracking-tighter">91<span className="text-2xl align-top text-teal-600 font-semibold">%</span></span>
</div>

<div className="absolute bottom-4 right-8 bg-orange-500 text-white p-2.5 rounded-xl shadow-lg shadow-orange-500/30 z-20 animate-bounce">
<svg className="lucide lucide-check-square w-5 h-5" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 relative z-10">Pass Rate Success</h3>
<p className="text-sm text-slate-500 mt-2 relative z-10 leading-relaxed px-4">
                                Our students consistently clear CAMS &amp; CFE certifications on their first attempt.
                            </p>
</div>

<div className="min-w-[300px] md:min-w-[340px] h-[450px] bg-blue-50/50 rounded-3xl relative overflow-hidden flex flex-col items-center justify-center text-center p-8 border border-blue-100 snap-center group hover:-translate-y-2 transition-transform duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-100/30"></div>
<div className="relative w-56 h-56 mb-8 orbit-container">
<div className="orbit-ring w-64 h-64 rounded-full border border-blue-300/40 animate-orbit-1" style={{animationDuration: '15s'}}>
<div className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-500 rounded-full -translate-x-1/2 translate-y-1/2 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
</div>
<div className="orbit-ring w-52 h-52 rounded-full border border-blue-300/30 animate-orbit-2" style={{animationDuration: '10s'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-[inset_-10px_-10px_20px_rgba(59,130,246,0.1),10px_10px_30px_rgba(59,130,246,0.2)] animate-sphere flex items-center justify-center z-10">
<span className="text-5xl font-bold text-slate-900 tracking-tighter">10<span className="text-3xl align-top text-blue-600 font-semibold">x</span></span>
</div>
<div className="absolute bottom-6 left-6 bg-teal-500 text-white p-2.5 rounded-xl shadow-lg shadow-teal-500/30 z-20 animate-[float_4s_ease-in-out_infinite]">
<svg className="lucide lucide-bar-chart-2 w-5 h-5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 relative z-10">Faster Career Growth</h3>
<p className="text-sm text-slate-500 mt-2 relative z-10 leading-relaxed px-4">
                                Accelerate your journey from Junior Analyst to Senior Compliance Officer.
                            </p>
</div>

<div className="min-w-[300px] md:min-w-[340px] h-[450px] bg-purple-50/50 rounded-3xl relative overflow-hidden flex flex-col items-center justify-center text-center p-8 border border-purple-100 snap-center group hover:-translate-y-2 transition-transform duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-100/30"></div>
<div className="relative w-56 h-56 mb-8 orbit-container">
<div className="orbit-ring w-56 h-56 rounded-full border border-purple-300/40 animate-orbit-2" style={{animationDirection: 'normal'}}>
<div className="absolute top-1/2 right-0 w-2 h-2 bg-purple-500 rounded-full translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-white via-purple-50 to-purple-100 shadow-[inset_-10px_-10px_20px_rgba(168,85,247,0.1),10px_10px_30px_rgba(168,85,247,0.2)] animate-sphere flex items-center justify-center z-10">
<span className="text-5xl font-bold text-slate-900 tracking-tighter">3.1<span className="text-3xl align-top text-purple-600 font-semibold">x</span></span>
</div>
<div className="absolute top-6 right-6 bg-orange-500 text-white p-2.5 rounded-xl shadow-lg shadow-orange-500/30 z-20 animate-[float_5s_ease-in-out_infinite_reverse]">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 relative z-10">Typology Exposure</h3>
<p className="text-sm text-slate-500 mt-2 relative z-10 leading-relaxed px-4">
                               Learn significantly more money laundering red flags than standard theory courses.
                           </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-5xl mx-auto px-6 md:px-12 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-100 to-orange-100 opacity-50 blur-3xl rounded-full z-[-1]"></div>
<div className="glass-card rounded-3xl p-10 md:p-14 shadow-2xl shadow-slate-200/50">
<div className="flex flex-col md:flex-row gap-12 items-start">
<div className="md:w-1/3">
<span className="text-orange-600 font-semibold tracking-wide uppercase text-sm mb-2 block">Curriculum</span>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Training Agenda</h2>
<p className="text-slate-500 mb-6 text-lg">A comprehensive full-day session covering the end-to-end lifecycle of financial crime compliance.</p>
<div className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 bg-white px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
<svg className="lucide lucide-calendar w-4 h-4 text-slate-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                        January 15, 2026
                    </div>
</div>
<div className="md:w-2/3 w-full">
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-teal-500 mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-700 text-lg">Global AML/CFT Overview</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-teal-500 mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-700 text-lg">AML Typologies &amp; Red Flags</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-teal-500 mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-700 text-lg">Public-Private Partnerships (Canada Focus)</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-teal-500 mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-700 text-lg">Practical KYC Refresh</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-teal-500 mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-700 text-lg">AML Investigations Training</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-teal-500 mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-700 text-lg">The 5 Pillars of AML Explained</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-teal-500 mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-700 text-lg">Resume Optimization</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-teal-500 mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-700 text-lg">Certification &amp; Professional Networking</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
<div className="h-48 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl mb-6 relative overflow-hidden border border-slate-100">
<div className="absolute top-4 left-4 right-4 bg-white rounded-lg p-3 shadow-sm flex flex-col gap-2">
<div className="h-2 w-1/3 bg-slate-200 rounded"></div>
<div className="h-2 w-2/3 bg-slate-100 rounded"></div>
</div>
<div className="absolute bottom-4 right-4">
<div className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded">Logic Active</div>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900">Real-Time AML Thinking</h3>
<p className="mt-2 text-slate-500">Master risk scoring logic, case workflows, and how to create auditable decision trails.</p>
</div>

<div className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
<div className="h-48 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl mb-6 relative overflow-hidden border border-purple-50">
<div className="absolute inset-0 flex items-center justify-center">
<div className="grid grid-cols-2 gap-2 w-3/4">
<div className="bg-white/60 p-2 rounded backdrop-blur-sm text-center text-xs">Sanctions</div>
<div className="bg-white/60 p-2 rounded backdrop-blur-sm text-center text-xs">PEPs</div>
<div className="bg-white/60 p-2 rounded backdrop-blur-sm text-center text-xs">Media</div>
<div className="bg-white/60 p-2 rounded backdrop-blur-sm text-center text-xs">Watchlist</div>
</div>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900">Compliance Intelligence</h3>
<p className="mt-2 text-slate-500">Navigate complex datasets including Sanctions, Politically Exposed Persons (PEPs), and adverse media.</p>
</div>

<div className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
<div className="h-48 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl mb-6 relative overflow-hidden border border-teal-50">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6">
<div className="flex justify-between items-center mb-2">
<div className="w-2 h-2 rounded-full bg-teal-400"></div>
<div className="w-full h-0.5 bg-teal-200 mx-2"></div>
<div className="w-2 h-2 rounded-full bg-teal-400"></div>
<div className="w-full h-0.5 bg-teal-200 mx-2"></div>
<div className="w-2 h-2 rounded-full bg-teal-600"></div>
</div>
<div className="text-center text-xs text-teal-800 font-medium">Analyst Workflow</div>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900">Analyst Simulation</h3>
<p className="mt-2 text-slate-500">From case assignment to evidence tracking and final escalation logic.</p>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 relative overflow-hidden" id="register">
<div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-slate-900/30">

<div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 relative z-10">
                Start Your AML Career the Right Way
            </h2>
<p className="text-slate-400 text-xl mb-10 relative z-10 max-w-xl mx-auto">
                Secure your spot for the upcoming practical session and gain the edge you need in the compliance job market.
            </p>
<div className="flex flex-col items-center gap-6 relative z-10">
<a className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-white/10" href="https://wa.me/14166298865">
<svg className="lucide lucide-message-square w-5 h-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                    Message on WhatsApp
                </a>
<div className="flex flex-col md:flex-row gap-4 md:gap-8 text-slate-400 text-sm font-medium mt-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-phone w-4 h-4 text-slate-500" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                        +1 416 629 8865
                    </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-calendar-check w-4 h-4 text-slate-500" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
                        Thursday, January 15, 2026
                    </div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-slate-200 bg-white/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-200 rounded flex items-center justify-center text-slate-600">
<svg className="lucide lucide-shield w-3 h-3" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<span className="text-sm font-semibold text-slate-900">HoneyLeks Consulting Inc.</span>
</div>
<p className="text-sm text-slate-500">An AML–CFT Training Firm</p>
<p className="text-xs text-slate-400">© 2026. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
