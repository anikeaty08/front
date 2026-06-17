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
colors: {
medical: {
50: '#f0fdfa',
100: '#ccfbf1',
500: '#14b8a6', // Teal for clinical trust
900: '#134e4a',
}
}
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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-y-12');
                        entry.target.classList.add('opacity-100', 'translate-y-0', 'duration-1000', 'ease-out');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-element');
            elements.forEach(el => {
                el.classList.add('transition-all'); 
                observer.observe(el);
            });
        });
    


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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-teal-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="fixed top-[-100px] left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-black via-transparent to-transparent z-10 pointer-events-none"></div>

<nav className="relative z-50 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
<div className="flex items-center gap-2">

<span className="text-white text-xl font-display font-medium tracking-tight select-none">MyTongueAI<span className="text-gray-500 font-light ml-1">PRO</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#">Methodology</a>
<a className="hover:text-white transition-colors" href="#">Safety</a>
<a className="hover:text-white transition-colors" href="#">Clinics</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-6">
<a className="text-sm font-medium hover:text-white transition-colors hidden sm:block" href="#">Provider Login</a>
<button className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm font-medium text-white transition-all">
<span className="w-2 h-2 rounded-full bg-teal-500"></span>
                Request Access
            </button>
</div>
</nav>

<main className="flex flex-col z-40 pt-20 pr-4 pl-4 relative items-center justify-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-400 text-xs font-medium mb-8">
<svg className="lucide lucide-shield-check w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Non-diagnostic. Clinician-led.</span>
</div>

<h1 className="text-center text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
            Smarter Than AI <br className="hidden md:block"/>
<span className="font-display italic bg-gradient-to-r from-teal-300 via-emerald-200 to-teal-400 bg-clip-text text-transparent pr-2">Tongue Scanning</span>
<br className="hidden md:block"/> for Modern Clinics
        </h1>

<p className="text-center text-lg text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            A 60-second, non-diagnostic scan that turns visible signals into clearer conversations. Designed to support clinician judgment, not replace it.
        </p>

<div className="flex flex-col sm:flex-row items-center gap-4 mb-24">
<button className="group relative px-6 py-2.5 rounded-full bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-white/10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)] hover:border-white/20 transition-all">
<div className="flex items-center gap-2">
<svg className="lucide lucide-lock w-4 h-4 text-teal-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="text-white text-sm font-medium">Request Professional Access</span>
</div>

<div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
<div className="flex items-center gap-2 px-6 py-2.5 text-gray-400 text-xs font-medium">
<svg className="lucide lucide-check w-3 h-3 text-gray-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                HIPAA Compliant
            </div>
</div>

<div className="w-full max-w-[1000px] mx-auto perspective-[2000px]">

<div className="relative bg-[#09090b] rounded-2xl border border-white/10 shadow-2xl overflow-hidden ring-1 ring-white/5">

<div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#09090b]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-teal-900/50 flex items-center justify-center overflow-hidden ring-1 ring-white/10">
<span className="text-teal-400 text-xs font-semibold">PT</span>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Patient ID: #8492-B</span>
<span className="text-[10px] text-gray-500">Scan Session: Today, 09:41 AM</span>
</div>
</div>
<div className="flex items-center gap-3 text-gray-500">
<span className="text-[10px] uppercase tracking-wider bg-white/5 px-2 py-1 rounded border border-white/5">Clinician View</span>
</div>
</div>

<div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#0c0c0e]">

<div className="lg:col-span-7 flex flex-col gap-6">

<div className="bg-[#131315] rounded-xl p-6 border border-white/5 relative group">
<div className="flex justify-between items-start mb-2">
<span className="text-sm text-gray-400">Visual Signal Literacy</span>
</div>
<div className="flex items-baseline gap-4 mb-6">
<span className="text-3xl font-medium text-white tracking-tight">Signal Analysis Ready</span>
<div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-teal-500/10 border border-teal-500/20">
<svg className="lucide lucide-check-circle w-3 h-3 text-teal-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-xs font-medium text-teal-400">High Resolution</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex-1 bg-teal-600 hover:bg-teal-500 text-white text-sm font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-teal-900/20">
<svg className="lucide lucide-file-text w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
                                    Review Summary
                                </button>
<button className="flex-1 bg-[#1e1e20] hover:bg-[#252527] border border-white/5 text-gray-300 text-sm font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
<svg className="lucide lucide-share-2 w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
                                    Patient View
                                </button>
</div>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="bg-[#131315] rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-4">
<span className="text-xs text-gray-400">Hydration Marker</span>
<span className="text-[10px] text-teal-400 bg-teal-500/10 px-1.5 py-0.5 rounded">Visible</span>
</div>
<div className="text-sm font-medium text-white tracking-tight leading-snug">Coat Texture &amp; Moisture</div>
</div>

<div className="bg-[#131315] rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-4">
<span className="text-xs text-gray-400">Stress Patterns</span>
<span className="text-[10px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">Noted</span>
</div>
<div className="text-sm font-medium text-white tracking-tight leading-snug">Lateral Tension</div>
</div>

<div className="bg-[#131315] rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-4">
<span className="text-xs text-gray-400">Systemic Load</span>
<span className="text-[10px] text-gray-400 bg-white/5 px-1.5 py-0.5 rounded">Baseline</span>
</div>
<div className="text-sm font-medium text-white tracking-tight leading-snug">Papillae Color</div>
</div>

<div className="bg-[#131315] rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-4">
<span className="text-xs text-gray-400">Physiological Strain</span>
<span className="text-[10px] text-gray-400 bg-white/5 px-1.5 py-0.5 rounded">Review</span>
</div>
<div className="text-sm font-medium text-white tracking-tight leading-snug">Midline Topography</div>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-[#131315] rounded-xl border border-white/5 p-6 flex flex-col h-full">
<div className="flex justify-between items-center mb-8">
<span className="text-sm font-medium text-gray-200">Patient Understanding</span>
<div className="flex items-center gap-1 text-xs text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
<svg className="lucide lucide-activity w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
<span>Session Impact</span>
</div>
</div>

<div className="flex-1 flex items-end justify-between gap-3 mb-6 min-h-[140px] px-2">
<div className="w-full bg-white/5 rounded-sm h-12"></div>
<div className="w-full bg-white/5 rounded-sm h-16"></div>
<div className="w-full bg-white/5 rounded-sm h-14"></div>
<div className="w-full bg-teal-500/20 rounded-sm h-28 relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black border border-white/10 px-2 py-1 text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Scan Review</div>
</div>
<div className="w-full bg-teal-500/40 rounded-sm h-36 relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black border border-white/10 px-2 py-1 text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Case Acceptance</div>
</div>
</div>

<div className="flex justify-between text-[10px] text-gray-500 border-t border-white/5 pt-3">
<span>Pre-Scan</span>
<span>Consultation</span>
<span>Plan</span>
</div>

<div className="mt-6 p-3 bg-[#1a1a1c] rounded-lg border border-white/5 flex items-center gap-3">
<div className="p-2 bg-teal-500/10 rounded-md">
<svg className="lucide lucide-brain-circuit w-4 h-4 text-teal-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 3 2.5 2.5 0 0 0 .38 3.7 2.5 2.5 0 0 0 3.2 2.3 2.5 2.5 0 0 0 2.54 2.1 2.5 2.5 0 0 0 2.15-2.1 2.5 2.5 0 0 0 3.2-2.3 2.5 2.5 0 0 0 .38-3.7 2.5 2.5 0 0 0-1.32-3 2.5 2.5 0 0 0-1.98-3 2.5 2.5 0 0 0-4.96.46Z"></path><path d="M2 16v.01"></path><path d="M7 22v.01"></path><path d="M17 22v.01"></path><path d="M22 16v.01"></path></svg>
</div>
<div>
<div className="text-[10px] text-gray-500 mb-0.5">Primary Outcome</div>
<div className="text-xs font-medium text-white">Improved Alignment</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<section className="overflow-hidden flex flex-col bg-[#030303] w-full pt-32 pb-32 relative items-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-gradient-to-b from-teal-900/10 via-teal-900/5 to-transparent blur-[100px] -z-10 pointer-events-none"></div>

<div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">

<h2 className="reveal-element text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.1] mb-6 max-w-4xl transition-all">
            Why Tongue Scanning — <br/>
<span className="font-display italic text-gray-400">Done Correctly</span> — Works
        </h2>

<p className="reveal-element delay-100 text-lg text-gray-400 max-w-2xl mb-12 font-light leading-relaxed transition-all">
            Patients don’t argue with what they can see. The tongue is one of the few places where hydration, stress patterns, and systemic strain can be visually discussed without diagnosis or speculation.
        </p>

<div className="w-full max-w-5xl mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 px-4">

<div className="reveal-element delay-200 p-6 rounded-2xl border border-white/5 bg-white/5 flex flex-col items-center justify-center gap-4 group hover:bg-white/10 transition-all">
<div className="w-12 h-12 rounded-full bg-teal-900/20 border border-teal-500/20 flex items-center justify-center text-teal-400">
<svg className="lucide lucide-sprout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 20h10"></path><path d="M10 20c5.5-2.5.8-6.4 3-10"></path><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path></svg>
</div>
<span className="text-gray-300 text-sm font-medium">Functional Medicine</span>
</div>

<div className="reveal-element delay-300 p-6 rounded-2xl border border-white/5 bg-white/5 flex flex-col items-center justify-center gap-4 group hover:bg-white/10 transition-all">
<div className="w-12 h-12 rounded-full bg-blue-900/20 border border-blue-500/20 flex items-center justify-center text-blue-400">
<svg className="lucide lucide-smile-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11v1a10 10 0 1 1-9-10"></path><path d="M8 14s1.5 2 4 2 2.5-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line><path d="M16 5h6"></path><path d="M19 2v6"></path></svg>
</div>
<span className="text-gray-300 text-sm font-medium">Biologic Dentistry</span>
</div>

<div className="reveal-element delay-400 p-6 rounded-2xl border border-white/5 bg-white/5 flex flex-col items-center justify-center gap-4 group hover:bg-white/10 transition-all">
<div className="w-12 h-12 rounded-full bg-indigo-900/20 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
<svg className="lucide lucide-heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5 4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
</div>
<span className="text-gray-300 text-sm font-medium">Preventive &amp; Longevity</span>
</div>

<div className="reveal-element delay-500 p-6 rounded-2xl border border-white/5 bg-white/5 flex flex-col items-center justify-center gap-4 group hover:bg-white/10 transition-all">
<div className="w-12 h-12 rounded-full bg-emerald-900/20 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
<svg className="lucide lucide-graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<span className="text-gray-300 text-sm font-medium">Patient Education</span>
</div>
</div>
<p className="reveal-element delay-700 text-sm text-gray-500 mt-12">Designed for clinics that value clarity over claims.</p>
</div>


</section>
<section className="overflow-hidden bg-[#030303] w-full pt-24 pb-24 relative">
<div className="container mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 gap-x-16 gap-y-16 items-center">

<div className="flex flex-col">
<span className="reveal-element text-teal-500 font-medium mb-4 text-sm transition-all uppercase tracking-wider">Provider View</span>
<h2 className="reveal-element delay-100 text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.1] mb-12 transition-all">
                    How it works.<br/>
<span className="text-gray-500">No workflow disruption.</span>
</h2>

<div className="relative space-y-10 pl-4 mb-16">

<div className="bg-gradient-to-b from-teal-500/50 via-gray-500/30 to-gray-500/10 w-[1px] absolute top-2 bottom-2 left-[7px]"></div>

<div className="reveal-element delay-200 relative pl-8 group transition-all">
<div className="absolute left-0 top-1 w-4 h-4 rounded-full border border-teal-500 flex items-center justify-center bg-[#030303] z-10">
<div className="w-1.5 h-1.5 bg-teal-500 rounded-full group-hover:scale-125 transition-transform"></div>
</div>
<h3 className="text-white font-medium text-lg mb-1 transition-colors">1. The Patient Scan</h3>
<p className="text-gray-500 leading-relaxed text-sm">Patient completes a 60-second, guided tongue scan. Private and secure.</p>
</div>

<div className="reveal-element delay-300 relative pl-8 group transition-all">
<div className="absolute left-0 top-1 w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center bg-[#030303] z-10">
<div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-teal-400 transition-colors"></div>
</div>
<h3 className="text-white font-medium text-lg mb-1 transition-colors">2. Visual Processing</h3>
<p className="text-gray-500 leading-relaxed text-sm">Visual signals are organized into an easy-to-understand summary.</p>
</div>

<div className="reveal-element delay-400 relative pl-8 group transition-all">
<div className="absolute left-0 top-1 w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center bg-[#030303] z-10">
<div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-teal-400 transition-colors"></div>
</div>
<h3 className="text-white font-medium text-lg mb-1 transition-colors">3. Conversation Anchor</h3>
<p className="text-gray-500 leading-relaxed text-sm">Clinician uses the scan as a neutral, third-party reference point.</p>
</div>

<div className="reveal-element delay-500 relative pl-8 group transition-all">
<div className="absolute left-0 top-1 w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center bg-[#030303] z-10">
<div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-teal-400 transition-colors"></div>
</div>
<h3 className="text-white font-medium text-lg mb-1 transition-colors">4. Clinician-Led Care</h3>
<p className="text-gray-500 leading-relaxed text-sm">Care decisions remain entirely in your hands. No clinical liability shift.</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="reveal-element delay-200 group relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] transition-all hover:border-white/20">
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-40 transition-opacity">
<svg className="text-teal-900" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
<div className="absolute top-4 left-4 right-4 flex justify-between items-start">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 text-white/70">
<span className="text-xs font-bold">1</span>
</div>
</div>
<div className="absolute bottom-4 left-4 pr-4">
<h4 className="text-white font-medium tracking-tight mb-1">Opening the Conversation</h4>
<p className="text-[10px] text-gray-500 leading-tight">Start visits grounded in observation, not abstract theory.</p>
</div>
</div>

<div className="reveal-element delay-300 group relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] transition-all hover:border-white/20">
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-40 transition-opacity">
<svg className="text-teal-900" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<div className="absolute top-4 left-4 right-4 flex justify-between items-start">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 text-white/70">
<span className="text-xs font-bold">2</span>
</div>
</div>
<div className="absolute bottom-4 left-4 pr-4">
<h4 className="text-white font-medium tracking-tight mb-1">Improving Case Acceptance</h4>
<p className="text-[10px] text-gray-500 leading-tight">When patients understand 'why', resistance drops.</p>
</div>
</div>

<div className="reveal-element delay-400 group relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] transition-all hover:border-white/20">
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-40 transition-opacity">
<svg className="text-teal-900" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<div className="absolute top-4 left-4 right-4 flex justify-between items-start">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 text-white/70">
<span className="text-xs font-bold">3</span>
</div>
</div>
<div className="absolute bottom-4 left-4 pr-4">
<h4 className="text-white font-medium tracking-tight mb-1">Follow-Ups That Stick</h4>
<p className="text-[10px] text-gray-500 leading-tight">Visual reference points improve recall and adherence.</p>
</div>
</div>

<div className="reveal-element delay-500 group relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] transition-all hover:border-white/20">
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-40 transition-opacity">
<svg className="text-teal-900" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
</div>
<div className="absolute top-4 left-4 right-4 flex justify-between items-start">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 text-white/70">
<span className="text-xs font-bold">4</span>
</div>
</div>
<div className="absolute bottom-4 left-4 pr-4">
<h4 className="text-white font-medium tracking-tight mb-1">Trust Without Overpromising</h4>
<p className="text-[10px] text-gray-500 leading-tight">No diagnosis. No fear tactics. Just clarity.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="w-full bg-[#030303] pb-24 relative">
<div className="container mx-auto px-4 sm:px-6 max-w-7xl">

<div className="bg-[#0A0A0B] border border-white/5 rounded-[32px] p-6 md:p-10 mb-8 relative overflow-hidden group">

<div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 px-2 gap-4">
<div>
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Smarter Than AI</h3>
<p className="text-gray-500 text-sm mt-1">(What That Actually Means)</p>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-gray-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
<svg className="lucide lucide-scale" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
<span>Balanced Methodology</span>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="relative bg-[#0F0F11] border border-red-900/10 rounded-2xl overflow-hidden transition-all duration-500">
<div className="p-6">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full bg-red-900/10 border border-red-500/20 flex items-center justify-center text-red-500">
<svg className="lucide lucide-x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
</div>
<h4 className="text-white font-medium text-lg tracking-tight mb-4">MyTongueAI Pro DOES NOT:</h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-gray-400">
<span className="text-red-900 mt-0.5">✕</span>
                                Diagnose medical conditions
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-400">
<span className="text-red-900 mt-0.5">✕</span>
                                Detect specific diseases
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-400">
<span className="text-red-900 mt-0.5">✕</span>
                                Recommend treatment plans
                            </li>
</ul>
</div>
</div>

<div className="relative bg-[#0F0F11] border border-teal-900/20 rounded-2xl overflow-hidden transition-all duration-500">
<div className="p-6">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full bg-teal-900/10 border border-teal-500/20 flex items-center justify-center text-teal-500">
<svg className="lucide lucide-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<h4 className="text-white font-medium text-lg tracking-tight mb-4">MyTongueAI Pro DOES:</h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-gray-300">
<svg className="lucide lucide-check text-teal-500 mt-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Highlight visual signals
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<svg className="lucide lucide-check text-teal-500 mt-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Frame patient education
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<svg className="lucide lucide-check text-teal-500 mt-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Support clinician-led interpretation
                            </li>
</ul>
</div>
</div>

<div className="relative bg-gradient-to-b from-[#131315] to-[#0F0F11] border border-white/5 rounded-2xl overflow-hidden transition-all duration-500">
<div className="p-6 flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
<svg className="lucide lucide-shield" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
</div>
</div>
<h4 className="text-white font-medium text-lg tracking-tight mb-2">The Result</h4>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
                            A tool that is smarter because it respects boundaries—clinical, legal, and human.
                        </p>
<div className="mt-auto pt-4 border-t border-white/5">
<div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">Safety Standard</div>
<p className="text-xs text-gray-300">Provider-safe language by design. No overreach.</p>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full overflow-hidden rounded-[3rem] border border-white/10 bg-[#060807]">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060807] to-teal-950/20 pointer-events-none"></div>
<div className="relative z-10 px-6 py-20 md:py-28 flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-900/10 text-teal-400 text-xs font-medium mb-8">
<span>Professional Access (Early Program)</span>
</div>

<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6 max-w-4xl leading-[1.1]">
                    Easy entry for clinics exploring <br/> visual signal education.
                </h2>

<div className="flex items-baseline justify-center gap-2 mb-8">
<span className="text-5xl font-medium text-white tracking-tight">$99</span>
<span className="text-gray-500 text-lg">/ month</span>
</div>
<p className="text-gray-500 text-sm mb-12">$499 one-time setup fee.</p>

<div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
<button className="group flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-black px-8 py-3.5 rounded-full font-medium transition-all shadow-[0_0_20px_-5px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.5)]">
                        Request Professional Access
                    </button>
</div>

<div className="max-w-md mx-auto text-center border-t border-white/5 pt-8">
<p className="text-xs text-gray-500 leading-relaxed">
<span className="text-white font-medium block mb-1">Risk Reversal</span>
                        If after 14 days you don’t feel MyTongueAI Pro improves patient engagement and supports clearer conversations, we unwind it. No friction.
                    </p>
</div>
</div>
</div>
</div>
</section>
<footer className="bg-[#030303] w-full pt-24 pb-12 relative border-t border-white/5 text-gray-400">
<div className="container mx-auto px-4 sm:px-6 max-w-7xl">
<div className="grid lg:grid-cols-12 gap-12 mb-20">

<div className="lg:col-span-5 flex flex-col gap-6">
<div>
<h2 className="text-2xl font-display font-medium text-white tracking-tight mb-4">MyTongueAI <span className="text-gray-500 text-sm font-sans ml-1">PRO</span></h2>
<p className="text-gray-400 text-sm max-w-sm font-light leading-relaxed mb-6">
                        This is not a consumer app repurposed for clinicians. It’s a professional tool built with boundaries — and respect.
                    </p>
</div>
<div className="p-4 bg-[#0e0e10] border border-white/5 rounded-xl">
<h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-2">Provider-Safe by Design</h4>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-xs text-gray-500">
<span className="text-teal-500">•</span>
                            Does not provide medical diagnoses
                        </li>
<li className="flex items-start gap-2 text-xs text-gray-500">
<span className="text-teal-500">•</span>
                            Does not assess disease states
                        </li>
<li className="flex items-start gap-2 text-xs text-gray-500">
<span className="text-teal-500">•</span>
                            Does not replace professional judgment
                        </li>
</ul>
</div>
</div>

<div className="lg:col-span-7 flex flex-col md:flex-row justify-between gap-12">
<div className="flex flex-col gap-4">
<h4 className="text-xs font-semibold tracking-wider text-white uppercase">Platform</h4>
<a className="text-sm hover:text-white transition-colors" href="#">Methodology</a>
<a className="text-sm hover:text-white transition-colors" href="#">Privacy &amp; Security</a>
<a className="text-sm hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-xs font-semibold tracking-wider text-white uppercase">Support</h4>
<a className="text-sm hover:text-white transition-colors" href="#">Provider Login</a>
<a className="text-sm hover:text-white transition-colors" href="#">Contact</a>
</div>

<div className="max-w-xs">
<h4 className="text-xs font-semibold tracking-wider text-teal-500/80 uppercase mb-3">System Continuity</h4>
<p className="text-xs text-gray-500 leading-relaxed mb-2">
                        For clinics ready to expand beyond a single signal, MyTongueAI Pro can integrate into the <strong>PreCare Signal Literacy System</strong>.
                     </p>
<a className="text-xs text-gray-400 hover:text-white flex items-center gap-1 group" href="#">
                        Learn about PreCare 
                        <svg className="lucide lucide-arrow-right group-hover:translate-x-0.5 transition-transform" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2025 MyTongueAI. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<span className="w-0.5 h-0.5 rounded-full bg-gray-700"></span>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
